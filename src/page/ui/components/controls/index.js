import create from 'simple-els/min';
import Store from '@page/store';
import { adjustNumberToBoundaries } from '@common/helpers';
import { KEYBOARD_KEYS, COLORS } from '@common/constants';
import Highlightings from '@page/highlightings';
import markup from './markup';
import styles from './styles.css';

function focusInput (markup, num) {
  const childNum = num || 0;
  setTimeout(() => markup.searchStrings.children[childNum].firstElementChild.focus());
}

function getNextSearchId (curId, nextNum) {
  return adjustNumberToBoundaries(+curId + nextNum, 0, COLORS.length - 1);
}

function getNextHighlightPosition (curPos, nextNum, foundResults) {
  return adjustNumberToBoundaries(+curPos + nextNum, 1, foundResults);
}

export default create(
  markup,
  {
    searchStrings: [],
    searchHappened: null,
    highlightPosition: 0,
    foundResults: 0,
    caseSensitive: false,
    color: null,
    blinkSet: null,

    unfocusedInputs: (searchStrings) =>
      searchStrings.filter((input) => !input.focus),

    foundResults: {
      text: (searchHappened, foundResults) => {
        if (!searchHappened) {
          return;
        }

        return `${foundResults > 0 ? " of " : ""}${foundResults} results`;
      },
    },

    searchButton_click: (_, { markup }) => {
      Store.startSearch();
    },

    searchId: {
      text: (id) => (+id < COLORS.length - 1 ? +id + 1 : 0),

      click: (e, { get }) => {
        const { id, highlightPosition } = get();
        highlightPosition && Highlightings.moveTo(id, highlightPosition - 1);
      },

      contextmenu: (e, { markup }) => {
        e.preventDefault();
        Store.removeSearch({ all: e.shiftKey });
      },

      keyup: (e, { get, markup }) => {
        const { id, highlightPosition, foundResults } = get();
        const { SHIFT, CTRL, ALT, BACKSPACE } = KEYBOARD_KEYS;
        if (
          Object.values(KEYBOARD_KEYS).indexOf(e.keyCode) < 0 ||
          [SHIFT, CTRL, ALT, BACKSPACE].includes(e.keyCode)
        ) {
          return;
        }

        switch (e.keyCode) {
          case KEYBOARD_KEYS.UP:
          case KEYBOARD_KEYS.s:
            Store.setCurrentHighlight(
              getNextHighlightPosition(highlightPosition, -1, foundResults),
            );
            return;

          case KEYBOARD_KEYS.DOWN:
          case KEYBOARD_KEYS.d:
            Store.setCurrentHighlight(
              getNextHighlightPosition(highlightPosition, 1, foundResults),
            );
            return;

          case KEYBOARD_KEYS.ENTER:
          case KEYBOARD_KEYS.e:
            Store.startSearch();
            return;

          case KEYBOARD_KEYS.DELETE:
          case KEYBOARD_KEYS.r:
            Store.removeSearch({ all: e.shiftKey });
            return;

          case KEYBOARD_KEYS.w:
            focusInput(markup);
            return;

          case KEYBOARD_KEYS.LEFT:
          case KEYBOARD_KEYS.a:
            Store.setCurrentSearch(getNextSearchId(id, -1));
            return;

          case KEYBOARD_KEYS.RIGHT:
          case KEYBOARD_KEYS.f:
            Store.setCurrentSearch(getNextSearchId(id, 1));
            return;

          case KEYBOARD_KEYS.c:
            Store.switchCaseSensitivity();
            return;

          case KEYBOARD_KEYS.b:
            Store.switchBlink();
            return;

          case KEYBOARD_KEYS.ESC:
            Store.closePopup();
            return;

          default:
            Store.setCurrentSearch(e.keyCode - 48);
        }
      },
      style: (color) => ({
        backgroundColor: "rgba(" + color + ", 0.35)",
      }),
    },

    moveLeft_click: (_, { get }) =>
      Store.setCurrentSearch(getNextSearchId(get().id, -1)),

    moveRight_click: (_, { get }) =>
      Store.setCurrentSearch(getNextSearchId(get().id, 1)),

    removeSearch_click: (e, { markup }) =>
      Store.removeSearch({ all: e.shiftKey }),

    removeSearch_class: (searchStrings, searchHappened) =>
      searchStrings.length === 1 &&
      !searchStrings[0].string.length &&
      !searchHappened
        ? ["hidden"]
        : [],

    caseButton_click: () => Store.switchCaseSensitivity(),
    caseButton_style: (caseSensitive, color) => ({
      backgroundColor: caseSensitive ? `rgba(${color}, 0.35)` : "white",
    }),

    results_class: (searchHappened) => (!searchHappened ? ["hidden"] : []),
    controls_class: (foundResults) => (!foundResults ? ["hidden"] : []),

    highlightPosition_text: (highlightPosition) => highlightPosition,

    moveUp_click: (e, { get }) => {
      const { highlightPosition, foundResults } = get();
      Store.setCurrentHighlight(
        getNextHighlightPosition(highlightPosition, -1, foundResults),
      );
    },

    moveDown_click: (e, { get }) => {
      const { highlightPosition, foundResults } = get();
      Store.setCurrentHighlight(
        getNextHighlightPosition(highlightPosition, 1, foundResults),
      );
    },

    blink_click: () => Store.switchBlink(),
    blink_style: (blinkSet, color) => ({
      backgroundColor: blinkSet ? `rgba(${color}, 0.35)` : "white",
    }),

    lastFocused_onChange: (lastFocused, { get, markup }) =>
      focusInput(markup, get()[lastFocused]),
    foundResults_onChange: (_, { markup }) => {
      setTimeout(() => markup.searchId.focus());
    },

    onChange: (changes, { set, markup }) => {
      if (changes > 0) {
        const { currentSearch } = Store.get();
        if (currentSearch) {
          set(currentSearch);
        }

        Store.set({ searchIdEl: markup.searchId });
        Store.onChange(["currentSearch"], (currentSearch) =>
          set(currentSearch),
        );
        Store.onChange(
          ["popupOpen"],
          (popupOpen) => popupOpen && focusInput(markup),
        );
      }
    },
  },
  styles.toString(),
);
