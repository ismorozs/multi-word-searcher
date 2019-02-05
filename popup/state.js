window.STATE = (function () {

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

  var state = {};

  return {
    COLORS,
    raw: () => state,
    set: (newState) => state = newState,
    toJSON: () => JSON.stringify(state),
    setFromJSON: (jsonState) => state = JSON.parse(jsonState),
    isEmpty: () => !Object.keys(state).length,
    addFindings: (findings) => {
      state.searches.forEach((search, i) => {
        const foundResults = findings[i] || 0
        search.foundResults = foundResults;
        search.searchHappened = foundResults
      });
    },
    setDefault: function () { state = DEFAULT_STATE; console.log(state) },
    searchesLength: () => state.searches.length,
    getSearch: (idx) => state.searches[idx],
    getCurrentSearch: () => state.searches[ state.currentSearchIdx ],
    setCurrentSearch: (search) => {
      state.searches[ search.currentSearchIdx ] = search;
      state.currentSearchIdx = search.currentSearchIdx;
    },
    resetCurrentSearch: () => state.searches[ state.currentSearchIdx ] = initiateSearchOpts(COLORS[state.currentSearchIdx], state.currentSearchIdx)
  };

})();
