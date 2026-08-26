export default find;

function find(searchStrings, caseSensitive) {
  const allTextNodes = getAllTextNodes();

  return filterRanges(
    findStartRanges(searchStrings[0].string, caseSensitive, allTextNodes),
    searchStrings.slice(1),
    caseSensitive,
    allTextNodes,
  );
}

function findStartRanges (string, caseSensitive, allTextNodes) {
  const ranges = [];

  for (let i = 0; i < allTextNodes.length; i++) {
    const textNode = allTextNodes[i];
    let textContent = textNode.textContent;
    let searchString = string;

    if (!caseSensitive) {
      textContent = textContent.toLowerCase();
      searchString = searchString.toLowerCase();
    }

    let startOffset = -1;
    let endOffset = 0;
    do {
      startOffset = textContent.indexOf(searchString, endOffset);
      endOffset = startOffset + string.length;
    
      if (startOffset >= 0) {
        ranges.push({
          startTextNodePos: i,
          startOffset,
          endTextNodePos: i,
          endOffset,
        });
      }
    } while (startOffset >= 0)
    
  }

  return ranges;
}

function getAllTextNodes() {
  const allTextNodes = [];
  const walker = document.createTreeWalker(
    document,
    window.NodeFilter.SHOW_TEXT,
    null,
    false,
  );
  let node;
  while ((node = walker.nextNode())) {
    allTextNodes.push(node);
  }
  return allTextNodes;
}

function filterRanges(
  startStringRanges,
  searchRefinements,
  caseSensitive,
  allTextNodes,
) {
  const finalRanges = [];
  startStringRanges.forEach((startRange) => {
    let endNodePos = startRange.endTextNodePos;
    let endNode = allTextNodes[startRange.endTextNodePos];
    let endOffset = startRange.endOffset;

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
          endNode,
          endOffset,
          nextNode,
          nextOffset,
          refinement.string,
          caseSensitive,
        );

        if (matchPos >= 0) {
          success = true;
          endNode = nextNode;
          endOffset =
            endOffset + matchPos - prevNodesLength + refinement.string.length;
          break;
        }

        remainingSearchDistance = remainingSearchDistance - nodeValueLength;
        nextOffset = remainingSearchDistance;
        prevNodesLength += nodeValueLength;
        nextNode = allTextNodes[++endNodePos];
      } while (remainingSearchDistance > 0 && !success && nextNode);

      if (!success) {
        return;
      }
    }

    try {
      const startNode = allTextNodes[startRange.startTextNodePos];
      const range = new Range();
      range.setStart(startNode, startRange.startOffset);
      range.setEnd(endNode, endOffset);

      finalRanges.push(range);
    } catch (e) {}
  });

  return finalRanges;
}

function isStringInRange(
  startNode,
  startOffset,
  endNode,
  endOffset,
  string,
  caseSensitive,
) {
  const range = new Range();
  range.setStart(startNode, startOffset);
  range.setEnd(endNode, endOffset);
  let rangeText = range.toString();

  if (!caseSensitive) {
    string = string.toLowerCase();
    rangeText = rangeText.toLowerCase();
  }

  const matchPos = rangeText.indexOf(string);
  return matchPos;
}
