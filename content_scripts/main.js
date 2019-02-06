(function () {
  if (window.hasRun) return;
  window.hasRun = true;

  const uniqueClassPrefix = browser.runtime.id.replace(/[{}@]/g, '');
  const uniqueExtensionClass = 'multi-string-search-extension-' + uniqueClassPrefix;
  const findHelperClass = uniqueExtensionClass + '-find-helper';

  const HIGHLIGHTINGS_POSITIONS = [];

  const actions = {
    setupContentPage,
    refineFindings,
    moveToHighlighting,
    removeHighlightings,
    fetchPreviouslyFound,
    addBlinkerToHighlightings,
    removeBlinkerFromHighlightings,

    // TEMPORARY BUG FIXES
    FIND_API_INPUT_BUG_FIX_BEFORE,
    FIND_API_INPUT_BUG_FIX_AFTER,
  }

  browser.runtime.onMessage.addListener(onMessage);

  function onMessage (message) {
    if (message.senderId !== browser.runtime.id) {
      return;
    }

    const response = actions[ message.action ](message);

    browser.runtime.sendMessage({ action: message.action, callbackId: message.callbackId, ...response });
  }

  function setupContentPage (data) {
    addExtensionStyles(data);
  }

  function addExtensionStyles (data) {
    const styleStr = data.colors.map((color, idx) => `
      @keyframes ${findHelperClass}${idx} {
        0% {
          outline-color: rgba(${color}, 1);
        }

        100% {
          outline-color: rgba(${color}, 0);
        }
      }

      .${findHelperClass}${idx} {
        animation-name: '${findHelperClass}${idx}';
        outline-style: solid;
        animation-duration: 1.3s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
    `).join('');

    const styleEl = document.createElement('style');
    styleEl.appendChild( document.createTextNode(styleStr) );
    document.head.appendChild(styleEl);
  }

  function refineFindings (data) {
    const searchId = data.searchId;

    const allTextNodes = getAllTextNodes();
    const finalRanges = filterRanges(data.firstFoundPart, data.searchRefinements, data.caseSensitive, allTextNodes);

    removeHighlightings(data);

    HIGHLIGHTINGS_POSITIONS[searchId] = [];

    addHighlightingsToElements(finalRanges, data);

    return { foundResults: finalRanges.length };
  }

  function getAllTextNodes () {
    const allTextNodes = [];
    const walker = document.createTreeWalker(document, window.NodeFilter.SHOW_TEXT, null, false);
    let node;
    while(node = walker.nextNode()) {
      allTextNodes.push(node);
    }
    return allTextNodes;
  }

  function filterRanges (firstFoundPart, searchRefinements, caseSensitive, allTextNodes) {
    const finalRanges = [];
    firstFoundPart.rangeData.forEach((rangeOpts) => {

      let endNodePos = rangeOpts.endTextNodePos;
      let endNode = allTextNodes[rangeOpts.endTextNodePos];
      let endOffset = rangeOpts.endOffset;

      for (let i = 0; i < searchRefinements.length; i++) {
        const refinement = searchRefinements[i];

        let nextNode = endNode;
        const searchDistance = +refinement.distance + refinement.string.length;
        let remainingSearchDistance = searchDistance + endOffset;
        let nextOffset = remainingSearchDistance;
        let success = false;
        let prevNodesLength = 0;

        do {

          let nodeValueLength = nextNode.nodeValue.length;
          if (nextOffset > nodeValueLength) {
            nextOffset = nodeValueLength;
          }

          const matchPos = isStringInRange(
            endNode, endOffset,
            nextNode, nextOffset,
            refinement.string,
            caseSensitive,
          );

          if (matchPos >= 0) {
            success = true;
            endNode = nextNode;
            endOffset = endOffset + matchPos - prevNodesLength + refinement.string.length;
            break;
          }

          remainingSearchDistance = remainingSearchDistance - nodeValueLength;
          nextOffset = remainingSearchDistance;
          prevNodesLength += nodeValueLength;
          nextNode = allTextNodes[++endNodePos];

        } while ( remainingSearchDistance > 0 && !success && nextNode )

        if (!success) {
          return;
        }
      }

      try {
        const startNode = allTextNodes[rangeOpts.startTextNodePos];
        const range = new Range();
        range.setStart(startNode, rangeOpts.startOffset);
        range.setEnd(endNode, endOffset);

        finalRanges.push(range);
      } catch (e) {}
    });

    return finalRanges;
  }

  function isStringInRange(startNode, startOffset, endNode, endOffset, string, caseSensitive) {
    const range = new Range();
    range.setStart(startNode, startOffset);
    range.setEnd(endNode,  endOffset);
    let rangeText = range.toString();

    if (!caseSensitive) {
      string = string.toLowerCase();
      rangeText = rangeText.toLowerCase();
    }

    const matchPos = rangeText.indexOf(string);
    return matchPos;
  }

  function addHighlightingsToElements (ranges, data) {
    const doc = document.documentElement;
    const scrollLeft = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    const scrollTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

    ranges.forEach((range, rangeIdx) => {
      const boundingRects = range.getClientRects();
      const highlightData = { els: [] };

      for (let i = 0; i < boundingRects.length; i++) {
        const rect = boundingRects[i];
        const highlightElement = createHightlightElement(rect, scrollTop, scrollLeft, data);

        highlightElement.classList.add(uniqueExtensionClass + data.searchId);
        document.body.appendChild(highlightElement);

        highlightData.els.push(highlightElement);
      }

      highlightData.top = scrollTop + boundingRects[0].top;
      highlightData.left = scrollLeft + boundingRects[0].left;

      HIGHLIGHTINGS_POSITIONS[data.searchId].push(highlightData);
    });
  }

  function createHightlightElement (rect, scrollTop, scrollLeft, data) {
    const highlightElement = document.createElement('span');

    const styles = {
      position: 'absolute',
      height: rect.height + 'px',
      width: rect.width + 'px',
      top: scrollTop + rect.y + 'px',
      left: scrollLeft + rect.x + 'px',
      'z-index': 2147483647,
      'pointer-events': 'none',
      background: 'rgba(' +  data.highlightColor + ', 0.25)',
      'outline-width': '3px',
    };

    for (let attr in styles) {
      highlightElement.style.setProperty(attr, styles[attr], 'important');
    }

    return highlightElement;
  }

  function moveToHighlighting (data) {
    const highlightPosition = HIGHLIGHTINGS_POSITIONS[data.searchId][data.id];
    const centerHeight = window.innerHeight / 2;
    const centerWidth = window.innerWidth / 2;
    window.scrollTo(
      highlightPosition.left - centerWidth,
      highlightPosition.top - centerHeight
    );
  }

  function removeHighlightings (data) {
    document.querySelectorAll('.' + uniqueExtensionClass + data.searchId)
      .forEach((el) => el.parentNode.removeChild(el));

    delete HIGHLIGHTINGS_POSITIONS[data.searchId];
  }

  function addBlinkerToHighlightings (data) {
    HIGHLIGHTINGS_POSITIONS[data.searchId]
      .forEach((highlightData) => highlightData.els
        .forEach((el) => el.classList.add(`${findHelperClass}${data.searchId}`)));
  }

  function removeBlinkerFromHighlightings (data) {
    HIGHLIGHTINGS_POSITIONS[data.searchId]
      .forEach((highlightData) => highlightData.els
        .forEach((el) => el.classList.remove(`${findHelperClass}${data.searchId}`)));
  }

  function fetchPreviouslyFound (data) {
    return HIGHLIGHTINGS_POSITIONS.map((found) => found.length);
  }

  /**********************************************************************

    TEMPORARY FIX FOR FINDING STRINGS THAT ARE ENTERED IN INPUTS

  ***********************************************************************/

  function FIND_API_INPUT_BUG_FIX_BEFORE () {
    window.inputValues = [];
    document.querySelectorAll('input').forEach((input) => {
      inputValues.push(input.value);
      input.value = '';
    });
  }

  function FIND_API_INPUT_BUG_FIX_AFTER () {
    document.querySelectorAll('input').forEach((input, i) => {
      input.value = window.inputValues[i];
    });
  }

})();
