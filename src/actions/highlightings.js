import Store from '../common/store';
import { EXTENSION_ID, FIND_HELPER_CLASS } from '../common/constants';

import { createElement } from '../ui/index';
import highlightingStyles from '../ui/components/highlighting/styles';
import scrollBarMarkStyles from '../ui/components/scrollbarMark/styles';

const HIGHLIGHTINGS_POSITIONS = [];

export default {
  create: createHighlightings,
  remove: removeHighlightings,
  moveTo: jumpTo,
  switchBlinking,
}

function createHighlightings (ranges, data) {
  removeHighlightings(data.searchId);

  const doc = document.documentElement;
  const scrollLeft = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  const scrollTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

  ranges.forEach((range, rangeIdx) => {
    const boundingRects = range.getClientRects();
    const topPosition = scrollTop + boundingRects[0].top;

    const highlightData = {
      els: [],
      top: topPosition,
      left: scrollLeft + boundingRects[0].left
    };

    for (let i = 0; i < boundingRects.length; i++) {
      const rect = boundingRects[i];

      const highlightElement = createHightlightElement(rect, scrollTop, scrollLeft, data);
      document.body.appendChild(highlightElement);

      highlightData.els.push(highlightElement);
    }

    const scrollBarMark = createScrollbarMark(topPosition, data, rangeIdx);
    document.body.appendChild(scrollBarMark);

    HIGHLIGHTINGS_POSITIONS[data.searchId].push(highlightData);
  });
}

function createHightlightElement (rect, scrollTop, scrollLeft, data) {
  const highlight = createElement(
    'span',
    highlightingStyles({ scrollTop, scrollLeft, rect, ...data })
  );
  
  highlight.classList.add(EXTENSION_ID + data.searchId);

  return highlight;
}

function createScrollbarMark (topPosition, data, rangeIdx) {
  const scrollBarMark = createElement(
    'span',
    scrollBarMarkStyles({ topPosition, ...data })
  );

  scrollBarMark.title = data.searchString;
  scrollBarMark.onclick = () => {
    jumpTo(data.searchId, rangeIdx);
    Store.moveThroughSearch({ searchId: data.searchId, highlightPosition: rangeIdx + 1 });
  };
  scrollBarMark.classList.add(EXTENSION_ID + data.searchId);

  return scrollBarMark;
}

function jumpTo (searchId, id) {
  const highlightPosition = HIGHLIGHTINGS_POSITIONS[searchId][id];
  const centerHeight = window.innerHeight / 2;
  const centerWidth = window.innerWidth / 2;
  window.scrollTo(
    highlightPosition.left - centerWidth,
    highlightPosition.top - centerHeight
  );
}

function removeHighlightings (searchId) {
  document.querySelectorAll('.' + EXTENSION_ID + searchId)
    .forEach((el) => el.parentNode.removeChild(el));

  HIGHLIGHTINGS_POSITIONS[searchId] = [];
}

function switchBlinking (searchId, operation) {
  HIGHLIGHTINGS_POSITIONS[searchId]
    .forEach((highlightData) => highlightData.els
      .forEach((el) => el.classList[operation](`${FIND_HELPER_CLASS}${searchId}`)));
}
