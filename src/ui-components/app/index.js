import Couli from 'couli';
import state from '../../common/state';

import markup from './markup.html';
import styles from './styles';

import { sendMessageToCurrentTab } from '../../common/interaction';

const APP_WIDTH = 380;
const MAX_INPUT_WIDTH = 245;
const KEYBOARD_KEYS = Array(10).fill(48).reduce((a , v, i) => (a[i] = 48 + i) && a , {})
Object.assign(KEYBOARD_KEYS, {
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

Couli.define('app', markup, {

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

  searchButton: [{ click: (e, el, ci) => search(ci) }],

  currentSearchIdx: {
    events: {
      click: (e, el, ci) => switchBlink(ci),

      contextmenu: (e, el, ci) => {
        e.preventDefault();
        removeSearch(ci, e.shiftKey);
      },

      keyup: (e, el, ci) => {
        if (Object.values(KEYBOARD_KEYS).indexOf(e.keyCode) < 0) {
          return;
        }

        switch (e.keyCode) {
          case KEYBOARD_KEYS.UP:
          case KEYBOARD_KEYS.s:
            moveToHigherHighlighting(ci);
            return;

          case KEYBOARD_KEYS.DOWN:
          case KEYBOARD_KEYS.d:
            moveToLowerHighlighting(ci);
            return;

          case KEYBOARD_KEYS.ENTER:
          case KEYBOARD_KEYS.e:
            search(ci);
            return;

          case KEYBOARD_KEYS.DELETE:
          case KEYBOARD_KEYS.r:
            removeSearch(ci, e.shiftKey);
            return;

          case KEYBOARD_KEYS.w:
            document.querySelectorAll('.string')[ ci.get('lastFocused') ].focus();
            return;

          case KEYBOARD_KEYS.LEFT:
          case KEYBOARD_KEYS.a:
            switchGroup(ci, { inc: -1 });
            return;

          case KEYBOARD_KEYS.RIGHT:
          case KEYBOARD_KEYS.f:
            switchGroup(ci, { inc: 1 });
            return;

          case KEYBOARD_KEYS.c:
            switchCaseSensitivity(ci);
            return;

          case KEYBOARD_KEYS.b:
            switchBlink(ci);
            return;

          default:
            switchGroup(ci, { set: e.keyCode - 48 });
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

  moveLeft: [{ click: (e, el, ci) => switchGroup(ci, { inc: -1 }) }],
  moveRight: [{ click: (e, el, ci) => switchGroup(ci, { inc: 1 }) }],

  removeSearch: {
    events: {
      click: (e, el, ci) => removeSearch(ci, e.shiftKey)
    },
    class: ($) => ({
      hidden: $.searchStrings.length === 1 && !$.searchStrings[0].string.length && !$.searchHappened
    })
  },

  caseButton: {
    events: {
      click: (e, el, ci) => switchCaseSensitivity(ci),
    },
    style: ($) => ({
      backgroundColor: $.caseSensitive ? 'PaleGreen' : 'white',
    })
  },

  results: { class: ($) => ({ hidden: !$.searchHappened }) },

  controls: ($) => ({ hidden: !$.foundResults }),

  moveUp: [{ click: (e, el, ci) => moveToHigherHighlighting(ci) }],

  moveDown: [{ click: (e, el, ci) => moveToLowerHighlighting(ci) }],

  blink: {
    events: { click: (e, el, ci) => switchBlink(ci) },
    style: ($) => ({
      backgroundColor: $.blinkSet ? `rgba(${ $.color }, 0.35)` : 'white',
    })
  },

  '': {
    hooks: {
      mount: (el, data, ci) => {
        const currentSearch = state.getCurrentSearch();
        ci.set(currentSearch);
        setTimeout(() => {
          ci.markup('currentSearchIdx').focus();
          if (currentSearch.shownResultNumber) {
            moveToHighlighting(currentSearch.currentSearchIdx, currentSearch.shownResultNumber);
          }
        }, 0);
      },

      update: (el, data, ci) => {
        state.setCurrentSearch(ci.get());
      }
    }
  }
}, styles({ APP_WIDTH, MAX_INPUT_WIDTH }));

function search (ci) {
  const searchStrings = ci.get('searchStrings').value();
  const currentSearchIdx = ci.get('currentSearchIdx');
  const highlightColor = ci.get('color');
  const caseSensitive = ci.get('caseSensitive');
  const searchString = searchStrings.map((strObj) => strObj.string).join(' ');

  FIND_API_INPUT_BUG_FIX_BEFORE(() => {

    browser.find.find( searchStrings.shift().string , { includeRangeData: true, caseSensitive })
    .then((foundResults) => {
      FIND_API_INPUT_BUG_FIX_AFTER();

      refineFindings({
        searchId: currentSearchIdx,
        firstFoundPart: foundResults,
        searchRefinements: searchStrings,
        highlightColor,
        caseSensitive,
        searchString,
      }, (response) => {
        
        const foundResults = response.foundResults;
        const changeObj = { foundResults, searchHappened: true, blinkSet: false };
        if (foundResults) {
          changeObj.shownResultNumber = 1;
          moveToHighlighting(currentSearchIdx, 1);
        }

        ci.set(changeObj);
        ci.applyChanges();
        setTimeout(() => ci.markup('currentSearchIdx').focus(), 0);
      });

    });

  });
}

function moveToLowerHighlighting (ci) {
  const state = ci.get();
  const shownResultNumber = increment(state.shownResultNumber, 1, [1, state.foundResults]);
  ci.set({ shownResultNumber });
  moveToHighlighting(state.currentSearchIdx, shownResultNumber);
}

function moveToHigherHighlighting (ci) {
  const state = ci.get();
  const shownResultNumber = increment(state.shownResultNumber, -1, [1, state.foundResults]);
  ci.set({ shownResultNumber });
  moveToHighlighting(state.currentSearchIdx, shownResultNumber);
}

function switchBlink (ci) {
  const state = ci.get();
  let operation;

  if (state.blinkSet) {
    operation = 'removeBlinkerFromHighlightings';
  } else {
    operation = 'addBlinkerToHighlightings';
  }

  sendMessageToCurrentTab(operation, {
    searchId: state.currentSearchIdx
  });

  ci.set({ blinkSet: !state.blinkSet });
}

function increment (num, inc, range) {
  const newNum = num + inc;
  if (newNum > range[1]) {
    return range[0];
  }

  if (newNum < range[0]) {
    return range[1];
  }

  return newNum;
}

function moveToHighlighting (searchId, id) {
  sendMessageToCurrentTab('moveToHighlighting', { searchId, id: id - 1 })
}

function removeSearch (ci, all) {
  all ? removeAllSearches(ci) : removeCurrentSearch(ci);

  const newSearchState = state.getCurrentSearch();
  ci.set(newSearchState);
  ci.applyChanges();
  setTimeout(() => ci.markup('currentSearchIdx').focus(), 0);
}

function removeCurrentSearch (ci) {
  const currentSearchIdx = ci.get('currentSearchIdx');
  state.resetSearch(currentSearchIdx);
  removeHighlightings(currentSearchIdx);
}

function removeAllSearches (ci) {
  state.resetAllSearches();
  state.COLORS.forEach((el, i) => removeHighlightings(i));
}

function removeHighlightings (searchId) {
  sendMessageToCurrentTab('removeHighlightings', { searchId });
}

function refineFindings (opts, cb) {
  sendMessageToCurrentTab('refineFindings', opts, cb);
}

function switchGroup (ci, changeObj) {
  const action = Object.keys(changeObj)[0];
  const value = changeObj[action];

  let nextSearchIdx;
  switch (action) {
    case 'inc':
      const currentSearchIdx = ci.get('currentSearchIdx');
      nextSearchIdx = increment(currentSearchIdx, value, [0, state.searchesLength() - 1]);
      break;

    default:
      nextSearchIdx = value;
      break;
  }

  const nextSearch = state.getSearch(nextSearchIdx);

  ci.set(nextSearch);
  if (nextSearch.foundResults) {
    moveToHighlighting(nextSearchIdx, nextSearch.shownResultNumber);
  }
}

function switchCaseSensitivity (ci) {
  ci.set({ caseSensitive: !ci.get('caseSensitive') })
}

/**********************************************************************

    TEMPORARY FIX FOR FINDING STRINGS THAT ARE ENTERED IN INPUTS

***********************************************************************/

function FIND_API_INPUT_BUG_FIX_BEFORE (cb) {
  sendMessageToCurrentTab('FIND_API_INPUT_BUG_FIX_BEFORE', null, cb);
}

function FIND_API_INPUT_BUG_FIX_AFTER () {
  sendMessageToCurrentTab('FIND_API_INPUT_BUG_FIX_AFTER');
}
