import Couli from 'couli';
import Store from '../../../store';

import { KEYBOARD_KEYS } from '../../../../common/constants';
import markup from './markup.html';
import styles from './styles';

const APP_WIDTH = 390;
const MAX_INPUT_WIDTH = 245;

Couli.define('controls', markup, {

  lastFocused: {},
  searchHappened: {},
  caseSensitive: {},
  color: {},
  blinkSet: {},

  foundResults: {
    html: ($) => {
      if (!$.searchHappened) {
        return;
      }

      let resultString = $.foundResults + ' results';

      if ($.foundResults) {
        resultString = ' of ' + resultString;
      }

      return resultString;
    }
  },

  searchButton: [{ click: (e, el, ci) => Store.startSearch().then(() => ci.markup('searchId').focus()) }],

  searchId: {
    events: {
      click: () => Store.switchBlink(),

      contextmenu: (e, el, ci) => {
        e.preventDefault();
        Store.removeSearch({ all: e.shiftKey }).then(() => ci.markup('searchId').focus());
      },

      keyup: (e, el, ci) => {
        const { SHIFT, CTRL, ALT, BACKSPACE } = KEYBOARD_KEYS;
        if (Object.values(KEYBOARD_KEYS).indexOf(e.keyCode) < 0 || [SHIFT, CTRL, ALT, BACKSPACE].includes(e.keyCode)) {
          return;
        }

        switch (e.keyCode) {
          case KEYBOARD_KEYS.UP:
          case KEYBOARD_KEYS.s:
            Store.moveThroughSearch({ highlightPosition: ci.get('highlightPosition') - 1 }, true);
            return;

          case KEYBOARD_KEYS.DOWN:
          case KEYBOARD_KEYS.d:
            Store.moveThroughSearch({ highlightPosition: ci.get('highlightPosition') + 1 }, true);
            return;

          case KEYBOARD_KEYS.ENTER:
          case KEYBOARD_KEYS.e:
            Store.startSearch().then(() => ci.markup('searchId').focus());
            return;

          case KEYBOARD_KEYS.DELETE:
          case KEYBOARD_KEYS.r:
            Store.removeSearch({ all: e.shiftKey }).then(() => ci.markup('searchId').focus());
            return;

          case KEYBOARD_KEYS.w:
            ci.down('searchStrings').get(0).markup('string').focus();
            return;

          case KEYBOARD_KEYS.LEFT:
          case KEYBOARD_KEYS.a:
            Store.moveThroughSearch({ searchId: ci.get('searchId') - 1 });
            return;

          case KEYBOARD_KEYS.RIGHT:
          case KEYBOARD_KEYS.f:
            Store.moveThroughSearch({ searchId: ci.get('searchId') + 1 });
            return;

          case KEYBOARD_KEYS.c:
            Store.switchCaseSensitivity();
            return;

          case KEYBOARD_KEYS.b:
            Store.switchBlink()
            return;

          case KEYBOARD_KEYS.ESC:
            Store.closePopup();
            return;

          default:
            Store.moveThroughSearch({ searchId: e.keyCode - 48 });
        }
      }
    },
    style: ($) => ({
      backgroundColor: 'rgba(' +  $.color + ', 0.35)',
    })
  },

  moveLeft: [{ click: (e, el, ci) => Store.moveThroughSearch({ searchId: ci.get('searchId') - 1 }) }],

  moveRight: [{ click: (e, el, ci) => Store.moveThroughSearch({ searchId: ci.get('searchId') + 1 }) }],

  removeSearch: {
    events: {
      click: (e, el, ci) => Store.removeSearch({ all: e.shiftKey }).then(() => ci.markup('searchId').focus())
    },
    class: ($) => ({
      hidden: $.searchStrings.length === 1 && !$.searchStrings[0].string.length && !$.searchHappened
    })
  },

  caseButton: {
    events: {
      click: () => Store.switchCaseSensitivity(),
    },
    style: ($) => ({
      backgroundColor: $.caseSensitive ? 'PaleGreen' : 'white',
    })
  },

  results: { class: ($) => ({ hidden: !$.searchHappened }) },

  controls: ($) => ({ hidden: !$.foundResults }),

  moveUp: [{ click: (e, el, ci) => Store.moveThroughSearch({ highlightPosition: ci.get('highlightPosition') - 1 }, true) }],

  moveDown: [{ click: (e, el, ci) => Store.moveThroughSearch({ highlightPosition: ci.get('highlightPosition') + 1 }, true) }],

  blink: {
    events: { click: () => Store.switchBlink() },
    style: ($) => ({
      backgroundColor: $.blinkSet ? `rgba(${ $.color }, 0.35)` : 'white',
    })
  },

  '': {
    hooks: {
      mount: (el, data, ci) => {
        ci.set( Store.getCurrentSearch() );
        Store.HTMLElement('searchId', ci.markup('searchId'));
        Store.addListener((store) => {
          ci.set( store.getCurrentSearch() );

          if (store.inputFocusNeeded()) {
            ci.down('searchStrings').get(0).markup('string').focus();
          }
        });
      }
    }
  }
}, styles({ APP_WIDTH, MAX_INPUT_WIDTH }));
