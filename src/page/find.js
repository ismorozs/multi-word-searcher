import { sendMessage } from '../common/interaction';

import { FIND_API_INPUT_BUG_FIX_BEFORE, FIND_API_INPUT_BUG_FIX_AFTER } from './fixes';

export default find;

function find (searchStrings, caseSensitive) {
  FIND_API_INPUT_BUG_FIX_BEFORE();
  
  return sendMessage('find', {
    string: searchStrings[0].string,
    caseSensitive,
  }).then(({ foundResults }) => {
    
    FIND_API_INPUT_BUG_FIX_AFTER();

    const allTextNodes = getAllTextNodes();
    return filterRanges(foundResults, searchStrings.slice(1), caseSensitive, allTextNodes);
  });
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
