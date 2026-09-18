import Varstor from 'varstor/webextension';
import { COLORS, RECENT_SEARCHES_LIMIT } from '@common/constants';

const EMPTY_OBJECT = { searches: [undefined] };

Varstor.add({
  tabs: {},
  recentSearches: [],
});

await Varstor.addPersistent({
  favoriteSearches: [],
});

export default {
  ...Varstor,
  getTabState,
  initTabState,
  setTabState,
  setSearchInTab,
  getEmptySearchId,
  removeRecentSearch,
  addFavoriteSearch,
  removeFavoriteSearch,
};

function getTabState (tabId) {
  return Varstor.get().tabs[ tabId ] || EMPTY_OBJECT;
}

function initTabState (tabId) {
  const { tabs } = Varstor.get();
  tabs[tabId] = {
    open: false,
    searches: Array(COLORS.length).fill(),
    removeMenus: false,
    initialized: true,
  };
  Varstor.set({ tabs });

  return tabs[tabId];
}

function setTabState (tabId, state) {
  const { tabs } = Varstor.get();
  let prevTabState = tabs[tabId];

  if (!prevTabState) {
    prevTabState = initTabState(tabId);
  }

  tabs[tabId] = state ? { ...prevTabState, ...state } : EMPTY_OBJECT;
  Varstor.set({ tabs });
}

async function setSearchInTab (tabId, searchId, string) {
  const { tabs } = Varstor.get();
  if (tabs[tabId]) {
    tabs[tabId].searches[searchId] = string;
  }
  await addRecentSearch(string)
  Varstor.set({ tabs });
}

async function getEmptySearchId ({ id }) {
  const { searches } = Varstor.get().tabs[id];
  const emptySlot = searches.findIndex((s) => !s);

  return emptySlot >= 0 ? emptySlot : searches.length - 1;
}

async function addRecentSearch (str) {
  const { recentSearches } = Varstor.get();

  if (!str) {
    return;
  }

  const recentIdx = recentSearches.indexOf(str);

  if (recentIdx < 0) {
    if (recentSearches.length === RECENT_SEARCHES_LIMIT) {
      recentSearches.pop();
    }

  } else {
    recentSearches.splice(recentIdx, 1);
  }

  recentSearches.unshift(str);

  await Varstor.set({ recentSearches });
}

function removeRecentSearch (str) {
  const { recentSearches } = Varstor.get();

  Varstor.set({
    recentSearches: str ? recentSearches.filter((s) => s !== str) : [],
  });
}

function addFavoriteSearch (str) {
  const { favoriteSearches } = Varstor.get();
  const favoriteIdx = favoriteSearches.indexOf(str);

  if (favoriteIdx >= 0) {
    favoriteSearches.splice(favoriteIdx, 1);
  }

  favoriteSearches.unshift(str);

  Varstor.set({ favoriteSearches });
}

function removeFavoriteSearch (str) {
  const { favoriteSearches } = Varstor.get();

  Varstor.set({
    favoriteSearches: str ? favoriteSearches.filter((s) => s !== str) : [],
  });
}