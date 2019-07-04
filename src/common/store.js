import actions from '../actions/page';
import Highlightings from '../actions/highlightings';
import find from '../actions/find';

const LISTENERS = [];

const COLORS = [
  '255, 255, 25',
  '60, 180, 75',
  '230, 25, 75',
  '0, 130, 200',
  '245, 130, 48',
  '145, 30, 180',
  '240, 50, 230',
  '128, 128, 128',
  '210, 245, 60',
  '250, 190, 190',
];

const store = {
  COLORS,
  getCurrentSearch,
  addListener,
  tabId,
  search,
  moveThroughSearch,
  switchCaseSensitivity,
  switchBlink,
  removeSearch,
  getPopupData,
  setPopupState,
  closePopup,
};

const DEFAULT_SEARCH_STRING = { string: '', first: true, focus: true, distance: null };

const STATE = {
  popupOpen: true,
  tabId: null,
  searches: COLORS.map(initiateSearchOpts),
  searchId: 1,
};

function initiateSearchOpts (v, i) {
  return {
    searchStrings: [ Object.assign({}, DEFAULT_SEARCH_STRING) ],
    foundResults: 0,
    lastFocused: 0,
    searchHappened: false,
    highlightPosition: 0,
    color: COLORS[i],
    searchId: i,
    caseSensitive: false,
  }
}

function getCurrentSearch () {
  return STATE.searches[ STATE.searchId ];
}

function search (searchStrings) {
  const search = getCurrentSearch();
  const { searchId, color, caseSensitive } = search;
  const searchString = searchStrings.map((strObj) => strObj.string).join(' ');

  return new Promise ((res) => {

    find(searchStrings.slice(), caseSensitive, (foundResults) => {
      Highlightings.create(foundResults, { searchId, color, searchString });

      const changeObj = { foundResults: foundResults.length, searchHappened: true, blinkSet: false, searchStrings };
  
      if (foundResults.length) {
        changeObj.highlightPosition = 1;
        Highlightings.moveTo(searchId, 0);
      }
  
      Object.assign(search, changeObj);
      runListeners();
      res();
    });

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

function removeSearch (all, searchId) {
  const idx = typeof searchId === 'undefined' ? STATE.searchId : searchId;

  all ? removeAllSearches() : removeSearchByIdx(idx);
  return runListeners();
}

function removeSearchByIdx (idx) {
  STATE.searches[idx] = initiateSearchOpts(COLORS[idx], idx);
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
  actions.notifyOfClosing(() => setPopupState(false));
}

function setPopupState (open) {
  STATE.popupOpen = open;
  return runListeners();
}

export default store;
