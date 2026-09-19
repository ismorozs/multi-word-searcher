import Store from "./store";
import { EXTENSION_ID, FIND_HELPER_CLASS } from "@common/constants";

import { createElement, appendStyles } from "./ui/index";
import highlightingStyles from "./ui/components/highlighting/styles";
import scrollBarMarkStyles from "./ui/components/scrollbarMark/styles";

const HIGHLIGHTINGS_POSITIONS = [];

export default {
  create: createHighlightings,
  remove: removeHighlightings,
  moveTo: jumpTo,
  switchBlinking,
  appendBlinkingStyles,
};

function createHighlightings(stringPositions, data) {
  removeHighlightings(data.searchId);

  const doc = document.documentElement;
  const scrollLeft =
    (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  const scrollTop =
    (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

  stringPositions.forEach((stringPositions, stringIdx) => {
    const topPosition = scrollTop + stringPositions[0].top;

    const highlightData = {
      els: [],
      top: topPosition,
      left: scrollLeft + stringPositions[0].left,
    };

    for (let i = 0; i < stringPositions.length; i++) {
      const rect = stringPositions[i];

      const highlightElement = createHightlightElement(
        rect,
        scrollTop,
        scrollLeft,
        data,
      );
      document.body.appendChild(highlightElement);

      highlightData.els.push(highlightElement);
    }

    const scrollBarMark = createScrollbarMark(topPosition, data, stringIdx);
    document.body.appendChild(scrollBarMark);

    HIGHLIGHTINGS_POSITIONS[data.searchId].push(highlightData);
  });
}

function createHightlightElement(rect, scrollTop, scrollLeft, data) {
  const highlight = createElement(
    "span",
    highlightingStyles({ scrollTop, scrollLeft, rect, ...data }),
  );

  highlight.classList.add(EXTENSION_ID + data.searchId);

  return highlight;
}

function createScrollbarMark(topPosition, data, rangeIdx) {
  const scrollBarMark = createElement(
    "span",
    scrollBarMarkStyles({ topPosition, ...data }),
  );

  scrollBarMark.title = data.searchString;
  scrollBarMark.onclick = () => {
    Store.setCurrentSearch(data.searchId, true);
    jumpTo(data.searchId, rangeIdx);
  };
  scrollBarMark.classList.add(EXTENSION_ID + data.searchId);

  return scrollBarMark;
}

function jumpTo(searchId, id) {
  const highlightPosition = HIGHLIGHTINGS_POSITIONS[searchId][id];
  const centerHeight = window.innerHeight / 2;
  const centerWidth = window.innerWidth / 2;
  window.scrollTo(
    highlightPosition.left - centerWidth,
    highlightPosition.top - centerHeight,
  );
}

function removeHighlightings(searchId) {
  document
    .querySelectorAll("." + EXTENSION_ID + searchId)
    .forEach((el) => el.parentNode.removeChild(el));

  HIGHLIGHTINGS_POSITIONS[searchId] = [];
}

function switchBlinking(searchId, operation) {
  HIGHLIGHTINGS_POSITIONS[searchId].forEach((highlightData) =>
    highlightData.els.forEach((el) =>
      el.classList[operation](`${FIND_HELPER_CLASS}${searchId}`),
    ),
  );
}

function generateBlinkingStyles(colors) {
  let stylesString = colors
    .map(
      (color, idx) => `
    @keyframes ${FIND_HELPER_CLASS}${idx} {
      0% {
        outline-color: rgba(${color}, 1);
      }

      100% {
        outline-color: rgba(${color}, 0);
      }
    }

    .${FIND_HELPER_CLASS}${idx} {
      animation-name: '${FIND_HELPER_CLASS}${idx}';
      outline-style: solid;
      animation-duration: 1.3s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  `,
    )
    .join("");

  stylesString += `
    @keyframes outline_blinker {
      50% {
        outline-color: rgba(0, 0, 0, 0);
      }
    }
  `;

  return stylesString;
}

function appendBlinkingStyles (colors) {
  appendStyles(generateBlinkingStyles(colors));
}
