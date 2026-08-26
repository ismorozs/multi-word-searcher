import { FLAT_STRING_DELIMITER } from "./constants";

export function toNumberOrZero(str) {
  return +str || 0;
}

export function adjustNumberToBoundaries(num, min, max, def) {
  switch (num) {
    case min - 1:
      return max;

    case undefined:
      return def;

    case max + 1:
      return min;
  }

  return num;
}

export function getAllTextNodes() {
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

export function fromFlatStringToStructure (flatString) {
  const searchStrings = [];
  const segments = flatString.split(FLAT_STRING_DELIMITER);
  for (let i = -1; i < segments.length; i+=2) {
    const isFirst = i === -1;
    searchStrings.push({
      string: segments[i + 1],
      distance: +segments[i] || null,
      first: isFirst,
      focus: isFirst
    }); 
  }

  return searchStrings;
}

export function fromStructureToFlatString (searchStrings) {
  return searchStrings.map(({ distance, string }) => `${distance ? distance + FLAT_STRING_DELIMITER : ''}${string}`).join(FLAT_STRING_DELIMITER);
}
