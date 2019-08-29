import Couli from 'couli';

import Store from '../../../store';
import markup from './markup.html';
import styles from './styles';

const ACTIVE_SEARCH_INPUT_LENGTH = 150;
const MAX_INPUT_WIDTH = 255;
const MIN_INPUT_WIDTH = 110;
const SPACE_BETWEEN_INPUTS = 34;
const LETTER_WIDTH = 11;
const UNFOCUSED_INPUT_PADDING = 14;
const ADD_SIGN_PADDING = 12;

Couli.define('search-string', markup, {

  focus: {},

  string: {
    events: {
      keyup: (e) => {
        e.stopPropagation();
        Store.handleInputActivity(e);
      },

      click: (e, el, ci, i) => Store.handleInputActivity(e, i),
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
      keyup: (e, el, ci, i) => Store.updateStringDistance(e.target.value, i)
    }]
  ],

  remove: {
    events: {
      click: () => Store.removeSearchString()
    },
    class: ($) => ({ hidden: $.first || !$.focus }),
  },

  addNew: {
    events: {
      click: () => Store.addNewSearchString(),
    },
    class: ($) => ({ hidden: !$.focus }),
  },

  focus: {
    hooks: {
      update: (el, value, ci) => {
        if (value) {
          setTimeout(() => ci.markup('string').focus(), 0);
        }
      }
    }
  }

}, styles({ SPACE_BETWEEN_INPUTS, ACTIVE_SEARCH_INPUT_LENGTH }));
