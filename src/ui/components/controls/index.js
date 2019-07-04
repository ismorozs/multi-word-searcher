import Couli from 'couli';
import Store from '../../../common/store';

import markup from './markup.html';
import styles from './styles';

const APP_WIDTH = 390;
const MAX_INPUT_WIDTH = 245;
const KEYBOARD_KEYS = Array(10).fill(48).reduce((a , v, i) => (a[i] = 48 + i) && a , {})
Object.assign(KEYBOARD_KEYS, {
  ESC: 27,
  ENTER: 13,
  DELETE: 46,
  w: 87,
  e: 69,
  r: 82,
  a: 65,
  s: 83,
  d: 68,
  f: 70,
  c: 67,
  b: 66,
  UP: 38,
  LEFT: 37,
  DOWN: 40,
  RIGHT: 39,
});

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

  searchButton: [{ click: (e, el, ci) => Store.search( ci.get('searchStrings').value() ).then(() => ci.markup('searchId').focus()) }],

  searchId: {
    events: {
      click: () => Store.switchBlink(),

      contextmenu: (e, el, ci) => {
        e.preventDefault();
        Store.removeSearch(e.shiftKey).then(() => ci.markup('searchId').focus());
      },

      keyup: (e, el, ci) => {
        if (Object.values(KEYBOARD_KEYS).indexOf(e.keyCode) < 0) {
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
            Store.search( ci.get('searchStrings').value() ).then(() => ci.markup('searchId').focus());
            return;

          case KEYBOARD_KEYS.DELETE:
          case KEYBOARD_KEYS.r:
            Store.removeSearch(e.shiftKey).then(() => ci.markup('searchId').focus());
            return;

          case KEYBOARD_KEYS.w:
            document.querySelectorAll('.string')[ ci.get('lastFocused') ].focus();
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
    }),
    hooks: {
      update: (el) => el.focus()
    }
  },

  moveLeft: [{ click: (e, el, ci) => Store.moveThroughSearch({ searchId: ci.get('searchId') - 1 }) }],

  moveRight: [{ click: (e, el, ci) => Store.moveThroughSearch({ searchId: ci.get('searchId') + 1 }) }],

  removeSearch: {
    events: {
      click: (e, el, ci) => Store.removeSearch(e.shiftKey).then(() => ci.markup('searchId').focus())
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
        Store.addListener((store) => ci.set( store.getCurrentSearch() ));
        setTimeout(() => {
          ci.markup('searchId').focus();
        }, 0);
      }
    }
  }
}, styles({ APP_WIDTH, MAX_INPUT_WIDTH }));
