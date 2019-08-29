import actions from './actions';
import Highlightings from './highlightings';
import find from './find';
import { COLORS, KEYBOARD_KEYS } from '../common/constants';

const LISTENERS = [];

const store = {
  COLORS,
  getCurrentSearch,
  addListener,
  tabId,
  startSearch,
  moveThroughSearch,
  switchCaseSensitivity,
  switchBlink,
  removeSearch,
  getPopupData,
  setPopupState,
  closePopup,
  setCurrentSearch,
  setupSearch,
  getCurrentString,
  handleInputActivity,
  removeSearchString,
  addNewSearchString,
  updateStringDistance,
  inputFocusNeeded,
  HTMLElement,
};

const STATE = {
  popupOpen: true,
  tabId: null,
  searches: COLORS.map((c, i) => initiateSearchOpts(i, '')),
  searchId: 1,
  inputFocusNeeded: false,
  HTMLElements: {},
};

function initiateSearchOpts (i, string) {
  return {
    searchStrings: initiateSearchStrings(string),
    foundResults: 0,
    lastFocused: 0,
    searchHappened: false,
    highlightPosition: 0,
    color: COLORS[i],
    searchId: i,
    caseSensitive: false,
  }
}

function initiateSearchStrings (strings) {
  const splitStrings = strings.split(' ');
  return splitStrings.map((string, i) => {
    const distance = !i ? null : 1;
    return { string, first: !i, focus: !i, distance };
  });
}

function getCurrentSearch () {
  return STATE.searches[ STATE.searchId ];
}

function setCurrentSearch (i) {
  STATE.searchId = +i;
  return runListeners();
}

function setupSearch (i, string) {
  return STATE.searches[ i ] = initiateSearchOpts(+i, string);
}

function startSearch () {
  const search = getCurrentSearch();
  const { searchId, color, caseSensitive, searchStrings } = search;
  const searchString = searchStrings.map((strObj) => strObj.string).join(' ');
  actions.setContextMenu(searchId, searchString);

  return find(searchStrings, caseSensitive).then((foundResults) => {
    Highlightings.create(foundResults, { searchId, color, searchString });

    const changeObj = { foundResults: foundResults.length, searchHappened: true, blinkSet: false, searchStrings };

    if (foundResults.length) {
      changeObj.highlightPosition = 1;
      Highlightings.moveTo(searchId, 0);
    }

    Object.assign(search, changeObj);
    runListeners();
  });
}

function moveThroughSearch (opts, withMove) {
  const searchId = adjustNumberToBoundaries(opts.searchId, 0, STATE.searches.length - 1, STATE.searchId);
  STATE.searchId = searchId;
  const search = getCurrentSearch();

  const highlightPosition = adjustNumberToBoundaries(opts.highlightPosition, 1, search.foundResults, search.highlightPosition);
  search.highlightPosition = highlightPosition;

  if (withMove && highlightPosition) {
    Highlightings.moveTo(searchId, highlightPosition - 1);
  }

  return runListeners();
}

function adjustNumberToBoundaries (num, min, max, def) {
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

function removeSearch ({ all, idx }) {

  if (all) {
    removeAllSearches();
    actions.removeAllContextMenus();

  } else {
    const searchId = typeof idx === 'undefined' ? STATE.searchId : idx;
    removeSearchByIdx(searchId);
    actions.setContextMenu(searchId, '');
  }

  return runListeners();
}

function removeSearchByIdx (idx) {
  STATE.searches[idx] = initiateSearchOpts(idx, '');
  Highlightings.remove(idx);
}

function removeAllSearches () {
  COLORS.forEach((c, idx) => removeSearchByIdx(idx));
}

function switchBlink () {
  const search = getCurrentSearch();

  if (!search.foundResults) {
    return;
  }

  const operation = search.blinkSet ? 'remove' : 'add';

  Highlightings.switchBlinking(search.searchId, operation);

  search.blinkSet = !search.blinkSet;
  return runListeners();
}

function getCurrentString () {
  return getCurrentSearch().searchStrings.map(({ string }) => string).join(' ');
}

function switchCaseSensitivity () {
  const caseSensitive = STATE.searches[ STATE.searchId ].caseSensitive;
  STATE.searches[ STATE.searchId ].caseSensitive = !caseSensitive;
  return runListeners();
}

function addListener (fn) {
  LISTENERS.push(fn);
}

function runListeners () {
  LISTENERS.forEach((fn) => fn(store));
  return Promise.resolve();
}

function tabId (id) {
  if (id) {
    return STATE.tabId = id
  }

  return STATE.tabId;
}

function getPopupData () {
  return {
    open: STATE.popupOpen,
    searches: STATE.searches.filter((el) => el.searchHappened).map((el) => ({
      color: el.color,
      string: el.searchStrings.map((string) => string.string).join(' '),
      idx: el.searchId,
    }))
  }
}

function closePopup () {
  actions.notifyOfClosing().then(() => setPopupState(false));
}

function setPopupState (open) {
  STATE.popupOpen = open;
  return runListeners();
}

function handleInputActivity (e, idx) {
  const search = getCurrentSearch();
  const { searchStrings, lastFocused } = search;
  const currentString = searchStrings[ lastFocused ];

  if (e.keyCode) {

    if (e.keyCode === KEYBOARD_KEYS.ENTER) {

      if (e.shiftKey) {
        currentString.focus = false;

        searchStrings.splice(lastFocused + 1, 0, { string: '', focus: true, distance: 1 });
        search.lastFocused = lastFocused + 1;

        return runListeners();
      }

      if (e.ctrlKey) {
        const newSearchStrings = splitSearchString(currentString);

        if (lastFocused === 0) {
          newSearchStrings[0].first = true;
          newSearchStrings[0].distance = null;
        }

        newSearchStrings.slice(-1)[0].focus = true;

        searchStrings.splice.apply(searchStrings, [lastFocused, 1].concat(newSearchStrings));
        search.lastFocused = lastFocused + newSearchStrings.length - 1;

        return runListeners();
      }

      if (e.altKey) {
        HTMLElement('searchId').focus();
        return;
      }

      return startSearch();
    }

    if (e.keyCode === KEYBOARD_KEYS.BACKSPACE && !currentString.string.length && searchStrings.length > 1) {
      searchStrings[ lastFocused - 1 ].focus = true;
      search.lastFocused = lastFocused - 1;
      searchStrings.splice(lastFocused, 1);

      runListeners();
      return;
    }

  }

  if (e.type === 'click') {
    currentString.focus = false;
    searchStrings[ idx ].focus = true;
    search.lastFocused = idx;

    runListeners();
    return;
  }

  if ([KEYBOARD_KEYS.CTRL, KEYBOARD_KEYS.SHIFT, KEYBOARD_KEYS.ALT].includes(e.keyCode)) {
    return;
  }

  currentString.string = e.target.value;
  runListeners();
}

function removeSearchString () {
  const search = getCurrentSearch();
  const { searchStrings, lastFocused } = search;

  searchStrings[ lastFocused - 1 ].focus = true;
  search.lastFocused = lastFocused - 1;
  searchStrings.splice(lastFocused, 1);

  runListeners();
}

function addNewSearchString () {
  const search = getCurrentSearch();
  const { searchStrings, lastFocused } = search;

  searchStrings[ lastFocused ].focus = false;
  searchStrings.splice(lastFocused + 1, 0, { string: '', focus: true, distance: 1 });
  search.lastFocused = lastFocused + 1;

  runListeners();
}

function updateStringDistance (distance, idx) {
  const search = getCurrentSearch();
  search.searchStrings[ idx ].distance = toNumberOrZero(distance);
  runListeners();
}

function toNumberOrZero (str) {
  return +str || 0;
}

function inputFocusNeeded (bool) {
  if (bool) {
    STATE.inputFocusNeeded = bool;
    return;
  }

  if (STATE.inputFocusNeeded) {
    STATE.inputFocusNeeded = false;
    return true;
  }
}

function splitSearchString (searchString) {
  const words = searchString.string.split(' ');

  if (words.length === 1) {
    return [searchString];
  }

  return words.map((string, i) => ({
    string,
    distance: 1,
    focus: false,
  }));
}

function HTMLElement (name, value) {
  if (value) {
    return STATE.HTMLElements[name] = value;
  }

  return STATE.HTMLElements[name];
}

export default store;
