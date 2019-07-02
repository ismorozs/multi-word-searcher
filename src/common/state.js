let STATE = {};

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

const DEFAULT_SEARCH_STRING = { string: '', first: true, focus: true, distance: null };
const DEFAULT_SEARCHES = COLORS.map(initiateSearchOpts);
const DEFAULT_STATE = {
  currentSearchIdx: DEFAULT_SEARCHES[1].currentSearchIdx,
  searches: DEFAULT_SEARCHES,
};

function initiateSearchOpts (v, idx) {
  return {
    searchStrings: [ Object.assign({}, DEFAULT_SEARCH_STRING) ],
    foundResults: 0,
    lastFocused: 0,
    searchHappened: false,
    shownResultNumber: 0,
    color: COLORS[idx],
    currentSearchIdx: idx,
    caseSensitive: false,
  }
}

function isEmpty () {
  return !Object.keys(STATE).length;
}

function addFindings (findings) {
  STATE.searches.forEach((search, i) => {
    const foundResults = findings[i] || 0;
    search.foundResults = foundResults;
    search.searchHappened = foundResults;
  });
}

function setDefault () {
  return STATE = DEFAULT_STATE;
}

function searchesLength () {
  return STATE.searches.length;
}

function getSearch (idx) {
  return STATE.searches[idx];
}

function getCurrentSearch () {
  return STATE.searches[ STATE.currentSearchIdx ];
}

function setCurrentSearch (search) {
  STATE.searches[ search.currentSearchIdx ] = search;
  STATE.currentSearchIdx = search.currentSearchIdx;
}

function resetSearch (idx) {
  STATE.searches[idx] = initiateSearchOpts(COLORS[idx], idx);
}

function resetAllSearches () {
  COLORS.forEach((c, idx) => resetSearch(idx));
}

function saveState (url, state) {
  window.localStorage.setItem(url, JSON.stringify( state || STATE));
}

function loadState (url) {
  return STATE = JSON.parse( window.localStorage.getItem(url) );
}

function updateHighlightState ({ currentSearchIdx, shownResultNumber, url }) {
  const state = loadState(url);
  state.currentSearchIdx = currentSearchIdx;
  state.searches[ currentSearchIdx ].shownResultNumber = shownResultNumber;
  saveState(url, state);
}

export default {
  COLORS,
  isEmpty,
  addFindings,
  setDefault,
  searchesLength,
  getSearch,
  getCurrentSearch,
  setCurrentSearch,
  resetAllSearches,
  resetSearch,
  updateHighlightState,
  saveState,
  loadState
};
