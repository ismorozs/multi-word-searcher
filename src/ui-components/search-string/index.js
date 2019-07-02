import Couli from 'couli';

import markup from './markup.html';
import styles from './styles';

const ACTIVE_SEARCH_INPUT_LENGTH = 150;
const MAX_INPUT_WIDTH = 255;
const MIN_INPUT_WIDTH = 110;
const SPACE_BETWEEN_INPUTS = 34;
const LETTER_WIDTH = 11;
const UNFOCUSED_INPUT_PADDING = 14;
const ENTER_KEY = 13;
const BACKSPACE_KEY = 8;
const ADD_SIGN_PADDING = 12;

Couli.define('search-string', markup, {

  focus: {},

  string: {
    events: {
      keyup: function keyup (e, el, ci, i) {
        e.stopPropagation();
        const parentScope = ci.up(2);
        const searchStrings = parentScope.get('searchStrings');

        if (e.keyCode === ENTER_KEY && ci.get('string')) {
          ci.set({ focus: false });
          if (i + 1 === searchStrings.length()) {
            searchStrings.push([{ string: '', focus: true, distance: 1 }]);
          } else {
            searchStrings.get(i + 1).set({ focus: true });
          }
          parentScope.set({ lastFocused: i + 1 })
          return;
        }

        if (e.keyCode === BACKSPACE_KEY && !ci.get('string').length && searchStrings.length() > 1) {
          const previousString = searchStrings.get(i - 1);
          previousString.set({ focus: true });
          parentScope.set({ lastFocused: i - 1 })
          searchStrings.remove(i);
          return;
        }

        ci.set({ string: e.target.value });

      },

      click: function click (e, el, ci, i) {
        const parentScope = ci.up(2);
        const searchStrings = parentScope.get('searchStrings');
        const lastFocusedIndex = parentScope.get('lastFocused');
        const previousFocused = searchStrings.get( lastFocusedIndex );

        if (!previousFocused.get('string').length && lastFocusedIndex && i !== lastFocusedIndex && (lastFocusedIndex + 1) === searchStrings.length()) {
          searchStrings.remove(lastFocusedIndex);
        } else {
          previousFocused.set({ focus: false });
        }

        parentScope.set({ lastFocused: i });
        ci.set({ focus: true });
      },

    },

    style: ($, ci) => {
      let width;

      if (!$.focus) {
        width = ci.get('string').length * LETTER_WIDTH + UNFOCUSED_INPUT_PADDING

      } else {
        const unfocusedInputs = ci.up().filter((input) => !input.focus);
        width = unfocusedInputs.reduce((focusedInputLength, input) => {
          return focusedInputLength - input.string.length * LETTER_WIDTH - UNFOCUSED_INPUT_PADDING - SPACE_BETWEEN_INPUTS;
        }, MAX_INPUT_WIDTH);

        if (width < MIN_INPUT_WIDTH) {
          width = MAX_INPUT_WIDTH;
        }

        width = width - ADD_SIGN_PADDING;

      }

      return { width };
    },
  },

  distance: [
    (item) => ({
      hidden: item.distance === null,
    }),
    [{
      keyup: (e, el, ci) => ci.set({ distance: { force: toNumberOrZero(e.target.value) }})
    }]
  ],

  remove: {
    events: {
      click: (e, el, ci, i) => {
        const parentScope = ci.up(2);
        const searchStrings = ci.up();
        const previousString = searchStrings.get(i - 1);
        previousString.set({ focus: true });
        parentScope.set({ lastFocused: i - 1 })
        searchStrings.remove(i);
      }
    },
    class: ($) => ({ hidden: $.first || !$.focus }),
  },

  addNew: {
    events: {
      click: (e, el, ci, i) => {
        const parentScope = ci.up(2);
        const searchStrings = parentScope.get('searchStrings');
        ci.set({ focus: false });
        searchStrings.add(i + 1, [{ string: '', focus: true, distance: 1 }]);
        parentScope.set({ lastFocused: i + 1 })
      },
    },
    class: ($) => ({ hidden: !$.focus || !$.string.length }),
  },

  focus: {
    hooks: {
      update: (el, value, ci) => {
        if (value) {
          ci.markup('string').focus();
        }
      }
    }
  },

  '': {
    hooks: {
      mount: (e, v, ci) => ci.markup('string').focus(),
    }
  }

}, styles({ SPACE_BETWEEN_INPUTS, ACTIVE_SEARCH_INPUT_LENGTH }));

function toNumberOrZero (str) {
  return +str || 0;
}
