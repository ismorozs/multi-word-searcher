(function () {

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

Couli.define('app',
  `<div>
    <ul x-lb="searchStrings">
      <search-string>
    </ul>
    <div class="upperButtons">
      <button x-b="searchButton">Find</button>
      <button x-b="caseButton" title="Case-sensitive on/off">C</button>
      <div class="search-constrols">
        <button x-b="moveLeft" tabindex="-1"></button>
        <button x-b="currentSearchIdx" tabindex="0"></button>
        <button x-b="removeSearch" tabindex="-1" title="Remove current search"></button>
        <button x-b="moveRight" tabindex="-1"></button>
      </div>
    </div>

    <div x-b="results" >
      <span x-b="foundResults"></span>
      <div x-b="controls" class="hidden">
        <button x-b="blink" title="Get findings to blink">Blink</button>
        <button x-b="moveUp"></button>
        <button x-b="moveDown"></button>
        <span x-b="shownResultNumber"></span>
      </div>
    </div>
  </div>`, {

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
        const currentSearch = window.STATE.getCurrentSearch();
        ci.set(currentSearch);
        setTimeout(() => {
          ci.markup('currentSearchIdx').focus();
          if (currentSearch.shownResultNumber) {
            moveToHighlighting(currentSearch.currentSearchIdx, currentSearch.shownResultNumber);
          }
        }, 0);
      },

      update: (el, data, ci) => {
        window.STATE.setCurrentSearch(ci.get());
      }
    }
  }
}, {

  '': {
    fontSize: 15,
    boxSizing: 'border-box',
    fontFamily: 'sans-serif',
    width: APP_WIDTH,
    marginTop: 18,
  },

  'button': {
    background: 'none',
    fontSize: 15,
    '-webkit-appearance': 'none',
    border: '2px solid black',
    cursor: 'pointer',
    verticalAlign: 'top,'
  },

  'button:hover': {
    color: 'DarkGreen',
    borderColor: 'LimeGreen'
  },

  'button:focus': {
    outline: 'none',
  },

  'button:active': {
    outline: '1px solid LimeGreen',
  },

  '.upperButtons': {
    float: 'right',
    marginTop: 5,
  },

  searchStrings: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'inline-block',
    width: MAX_INPUT_WIDTH,
  },

  '.searchString:first-child': {
    marginLeft: 0,
  },

  searchButton: {
    width: 45,
  },

  caseButton: {
    width: 20,
    marginLeft: 2,
    paddingLeft: 0,
    paddingRight: 1,
  },

  '.search-constrols': {
    display: 'inline-block',
    position: 'relative',
  },

  currentSearchIdx: {
    width: 20,
    height: 22,
    paddingLeft: 1,
    paddingRight: 1,
  },

  removeSearch: {
    position: 'absolute',
    padding: 0,
    width: 14,
    height: 14,
    top: -16,
    right: -5,
  },

  'removeSearch::before, removeSearch::after': {
    content: "''",
    display: 'block',
    position: 'absolute',
    background: 'black',
    width: '100%',
    height: 2,
    top: 4,
    cursor: 'pointer',
  },

  'removeSearch:hover': {
    borderColor: 'OrangeRed',
  },

  'removeSearch:hover::before, removeSearch:hover::after': {
    background: 'DarkRed'
  },

  'removeSearch::before': {
    transform: 'rotate(45deg)',
  },

  'removeSearch::after': {
    transform: 'rotate(-45deg)',
  },

  'currentSearchIdx:focus': {
    color: 'DarkGreen',
    borderColor: 'LimeGreen',
    outline: '1px solid LimeGreen',
    animation: 'outline_blinker 1.3s linear infinite'
  },

  '.hidden': {
    display: 'none'
  },

  results: {
    paddingTop: 3,
    paddingBottom: 5,
    overflow: 'auto',
  },

  foundResults: {
    display: 'inline-block',
    paddingTop: 9,
    paddingRight: 12,
    verticalAlign: 'middle',
  },

  shownResultNumber: {
    display: 'inline-block',
    paddingTop: 9,
    paddingRight: 3,
    paddingLeft: 5,
    verticalAlign: 'middle',
  },

  'foundResults, controls': {
    float: 'right',
  },

  'blink': {
    height: 23,
    verticalAlign: 'bottom',
    marginRight: 5,
  },

  'moveUp, moveDown': {
    width: 32,
    height: 23,
    position: 'relative',
  },

  'moveUp::before, moveUp::after, moveDown::before, moveDown::after': {
    content: "''",
    display: 'block',
    position: 'absolute',
    background: 'black',
    width: 13,
    height: 3,
    top: 8
  },

  'moveUp:hover::before, moveUp:hover::after, moveDown:hover::before, moveDown:hover::after': {
    background: 'DarkGreen'
  },

  'moveUp::before, moveDown::before': {
    left: 4
  },

  'moveUp::after, moveDown::after': {
    right: 4
  },

  'moveDown::before' : {
    transform: 'rotate(45deg)'
  },

  'moveDown::after' : {
    transform: 'rotate(-45deg)'
  },

  'moveUp::before' : {
    transform: 'rotate(-45deg)'
  },

  'moveUp::after' : {
    transform: 'rotate(45deg)'
  },

  'moveLeft:hover': {
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
  },

  'moveRight:hover': {
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
  },

  moveLeft: {
    padding: 0,
    verticalAlign: 'top',
    marginTop: 4,
    border: 'none',
    borderTop: '7px solid transparent',
    borderRight: '7px solid black',
    borderBottom: '7px solid transparent',
  },

  moveRight: {
    padding: 0,
    verticalAlign: 'top',
    marginTop: 4,
    border: 'none',
    borderTop: '7px solid transparent',
    borderLeft: '7px solid black',
    borderBottom: '7px solid transparent',
  },

});

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

  const newSearchState = window.STATE.getCurrentSearch();
  ci.set(newSearchState);
  ci.applyChanges();
  setTimeout(() => ci.markup('currentSearchIdx').focus(), 0);
}

function removeCurrentSearch (ci) {
  const currentSearchIdx = ci.get('currentSearchIdx');
  window.STATE.resetSearch(currentSearchIdx);
  removeHighlightings(currentSearchIdx);
}

function removeAllSearches (ci) {
  window.STATE.resetAllSearches();
  window.STATE.COLORS.forEach((el, i) => removeHighlightings(i));
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
      nextSearchIdx = increment(currentSearchIdx, value, [0, window.STATE.searchesLength() - 1]);
      break;

    default:
      nextSearchIdx = value;
      break;
  }

  const nextSearch = STATE.getSearch(nextSearchIdx);

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

})();
