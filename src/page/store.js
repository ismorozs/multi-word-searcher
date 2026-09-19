import Varstor from 'varstor';
import Highlightings from './highlightings';
import Message from '@common/messages';
import find from './find';
import { COLORS, KEYBOARD_KEYS } from '@common/constants';
import { toNumberOrZero, fromFlatStringToStructure, fromStructureToFlatString } from '@common/helpers';

Varstor.add({
  popupOpen: false,
  tabId: null,
  searchId: 0,
  colors: COLORS,
  searchIdEl: null,
});

Varstor.add({
  searches: COLORS.map((c, i) => initiateSearchOpts(i, "")),
  currentSearch: (searches, searchId) => searches[searchId],
});

export default {
  ...Varstor,
  startSearch,
  removeSearch,
  switchCaseSensitivity,
  switchBlink,
  getPopupData,
  setPopupState,
  closePopup,
  setCurrentSearch,
  updateCurrentSearch,
  setCurrentHighlight,
  handleSearchStringInput,
  changeSearchStringFocus,
  removeSearchString,
  addNewSearchString,
  updateStringDistance,
  updateColors,
};

function initiateSearchOpts (i, string) {
  const { colors } = Varstor.get();

  return {
    searchStrings: fromFlatStringToStructure(string),
    foundResults: 0,
    lastFocused: 0,
    searchHappened: false,
    highlightPosition: 0,
    color: colors[i],
    id: i,
    caseSensitive: false,
  };
}

function setCurrentSearch (i, noMove) {
  Varstor.set({ searchId: +i });

  const { highlightPosition } = Varstor.get().searches[i];
  !noMove &&
    highlightPosition &&
    Highlightings.moveTo(+i, highlightPosition - 1);
}

function updateCurrentSearch (searchString) {
  const { searches, searchId } = Varstor.get();
  searches[searchId] = initiateSearchOpts(searchId, searchString);

  Varstor.set({ searches });
}

function setCurrentHighlight (i) {
  const { searches, searchId } = Varstor.get();
  const currentSearch = searches[searchId];

  currentSearch.highlightPosition = i;
  Highlightings.moveTo(searchId, i - 1);

  Varstor.set({ searches });
}

function startSearch () {
  const { searches, searchId, tabId } = Varstor.get();
  const currentSearch = searches[searchId];
  const { id, color, caseSensitive, searchStrings } = currentSearch;
  const searchString = fromStructureToFlatString(searchStrings);

  Message.addSearchToContextMenu({ tabId, idx: searchId, string: searchString });

  const foundRanges = find(searchStrings, caseSensitive);
  const visibleResults = foundRanges.map((r) => r.getClientRects()).filter((r) => r.length);
  Highlightings.create(visibleResults, { searchId: id, color, searchString });

  Object.assign(currentSearch, {
    foundResults: visibleResults.length,
    searchHappened: true,
    blinkSet: false,
  });

  if (visibleResults.length) {
    currentSearch.highlightPosition = 1;
    Highlightings.moveTo(id, 0);
  }

  Varstor.set({ searches });
}

function removeSearch ({ all, idx, fromBackground }) {
  const { searchId, tabId } = Varstor.get();

  if (all) {
    removeAllSearches(tabId);
  } else {
    const searchIdx = typeof idx === 'undefined' ? searchId : idx;
    removeSearchByIdx(tabId, searchIdx, fromBackground);
  }
}

function removeSearchByIdx(tabId, idx, fromBackground) {
  const { searches } = Varstor.get();
  searches[idx] = initiateSearchOpts(idx, "");
  !fromBackground && Message.addSearchToContextMenu({
    tabId,
    idx,
    string: undefined,
  });
  Varstor.set({ searches });
  Highlightings.remove(idx);
}

function removeAllSearches (tabId) {
  COLORS.forEach((c, idx) => removeSearchByIdx(tabId, idx));
}

function switchBlink () {
  const { searches, searchId } = Varstor.get();
  const currentSearch = searches[searchId];

  if (!currentSearch.foundResults) {
    return;
  }

  const operation = currentSearch.blinkSet ? 'remove' : 'add';

  Highlightings.switchBlinking(currentSearch.id, operation);

  currentSearch.blinkSet = !currentSearch.blinkSet;
  Varstor.set({ searches });
}

function switchCaseSensitivity () {
  const { searches, searchId } = Varstor.get();
  const currentSearch = searches[searchId];
  currentSearch.caseSensitive = !currentSearch.caseSensitive;
  Varstor.set({ searches });
}

function getPopupData () {
  const { popupOpen, searches } = Varstor.get();
  return {
    open: popupOpen,
    searches: searches.filter((el) => el.searchHappened).map((el) => ({
      color: el.color,
      string: el.searchStrings.map((string) => string.string).join(' '),
      idx: el.id,
    }))
  }
}

function closePopup () {
  const { tabId } = Varstor.get();
  Message.closingPopup({ tabId });
  setPopupState(false);
}

function setPopupState (open) {
  Varstor.set({ popupOpen: open });
}

function handleSearchStringInput (e) {
  const { searchIdEl, searches, searchId } = Varstor.get();
  const currentSearch = searches[searchId];
  const { searchStrings, lastFocused } = currentSearch;
  const currentString = searchStrings[lastFocused];

  if (e.keyCode === KEYBOARD_KEYS.ENTER) {
    if (e.shiftKey) {
      return addNewSearchString();
    }

    if (e.ctrlKey) {
      return splitSearchString();
    }

    if (e.altKey) {
      return searchIdEl.focus();
    }

    return startSearch();
  }

  if (
    e.keyCode === KEYBOARD_KEYS.BACKSPACE &&
    !currentString.string.length &&
    searchStrings.length > 1
  ) {
    return removeSearchString();
  }

  currentString.string = e.target.value;
  Varstor.set({ searches });
}

function removeSearchString () {
  const { searches, searchId } = Varstor.get();
  const currentSearch = searches[searchId];
  const { searchStrings, lastFocused } = currentSearch;

  searchStrings[ lastFocused - 1 ].focus = true;
  currentSearch.lastFocused = lastFocused - 1;
  searchStrings.splice(lastFocused, 1);

  Varstor.set({ searches });
}

function addNewSearchString () {
  const { searchId, searches } = Varstor.get();
  const currentSearch = searches[searchId];
  const { searchStrings, lastFocused } = currentSearch;
  const currentString = searchStrings[lastFocused];

  if (!currentString.string) {
    return;
  }

  searchStrings[ lastFocused ].focus = false;
  searchStrings.splice(lastFocused + 1, 0, { string: '', focus: true, distance: 1 });
  currentSearch.lastFocused = lastFocused + 1;

  Varstor.set({ searches });
}

function updateStringDistance (distance, idx) {
  const { searches, searchId } = Varstor.get();
  const currentSearch = searches[searchId];

  currentSearch.searchStrings[idx].distance = toNumberOrZero(distance);

  Varstor.set({ searches });
}

function splitSearchString () {
  const { searches, searchId } = Varstor.get();
  const currentSearch = searches[searchId];
  const { searchStrings, lastFocused } = currentSearch;
  const currentString = searchStrings[lastFocused];

  const words = currentString.string.split(' ');

  const newSearchStrings =
    words.length === 1
      ? [currentString]
      : words.map((string, i) => ({
          string,
          distance: 1,
          focus: false,
        }));

  if (lastFocused === 0) {
    newSearchStrings[0].first = true;
    newSearchStrings[0].distance = null;
  }

  newSearchStrings.slice(-1)[0].focus = true;

  searchStrings.splice.apply(
    searchStrings,
    [lastFocused, 1].concat(newSearchStrings),
  );
  currentSearch.lastFocused = lastFocused + newSearchStrings.length - 1;

  Varstor.set({ searches });
}

function changeSearchStringFocus(idx) {
  const { searches, searchId } = Varstor.get();
  const currentSearch = searches[searchId];
  const { searchStrings, lastFocused } = currentSearch;
  const currentString = searchStrings[lastFocused];

  if (!currentString.string && lastFocused !== 0) {
    searchStrings.splice(lastFocused, 1);
  }

  currentString.focus = false;
  searchStrings[idx].focus = true;
  currentSearch.lastFocused = idx;

  Varstor.set({ searches });
}

function updateColors (colors) {
  const { searches } = Varstor.get();

  Highlightings.appendBlinkingStyles(colors);

  Varstor.set({
    searches: searches.map((s, i) => ({ ...s, color: colors[i] })),
    colors,
  });
}