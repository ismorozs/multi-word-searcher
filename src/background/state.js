import Varstor from 'varstor';
import { COLORS } from '@common/constants';

const EMPTY_OBJECT = { searches: [undefined] };

Varstor.add({
  tabs: {},
  recentSearches: [],
});

export default {
  ...Varstor,
  getTabState,
  initTabState,
  setTabState,
  setSearchInTab,
  getEmptySearchId,
  removeRecentSearch,
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
}

function setTabState (tabId, state) {
  const { tabs } = Varstor.get();
  const prevTabState = tabs[tabId];
  tabs[tabId] = state ? { ...prevTabState, ...state } : EMPTY_OBJECT;
  Varstor.set({ tabs });
}

function setSearchInTab (tabId, searchId, string) {
  const { tabs, recentSearches } = Varstor.get();
  tabs[tabId].searches[searchId] = string;
  if (!recentSearches.includes(string)) {
    recentSearches.unshift(string);
  }
  Varstor.set({ tabs, recentSearches });
}

async function getEmptySearchId ({ id }) {
  const { searches } = Varstor.get().tabs[id];
  const emptySlot = searches.findIndex((s) => !s);

  return emptySlot >= 0 ? emptySlot : searches.length - 1;
}

function removeRecentSearch (str) {
  const { recentSearches } = Varstor.get();

  Varstor.set({ recentSearches: str ? recentSearches.filter((s) => s !== str) : [] });
} 