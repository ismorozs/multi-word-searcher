import createContextMenu from 'webextension-contextmenu';
import { FIND_SUGGESTION, PAGE_URLS } from "@common/constants";
import State from './state';
import actions from './actions';
import { getCurrentTab } from './helpers';

const MENU_TEXT = {
  NEW: "New ...",
  OPEN: "Open",
  REMOVE: "Remove",
  REMOVE_ALL_ACTIVE: "Remove all active",
  FIND: "Find",
  RECENT_SEARCHES: "Recent searches",
  REMOVE_ALL_RECENT: "Remove all recent",
  OPTIONS: "Settings",
}

function separator (str) {
  return `${Date.now()}${str}`;
};

export async function updateContextMenu () {
  const { recentSearches } = State.get();
  const { id } = await getCurrentTab();
  const { searches } = State.getTabState(id);

  const newSearchOption = searches.every((s) => s) ? {} : {
    [MENU_TEXT.NEW]: () => actions.openSearchGroup()
  }

  const activeSearchOptions = searches
    .map((s, i) => [
      s,
      {
        [MENU_TEXT.OPEN]: () => actions.openSearchGroup(i),
        [MENU_TEXT.REMOVE]: () => actions.removeSearch(id, i),
      },
    ])
    .filter(([s]) => s);

  if (activeSearchOptions.length) {
    activeSearchOptions.unshift([separator(1), null]);
    activeSearchOptions.push(
      [MENU_TEXT.REMOVE_ALL_ACTIVE, () => actions.removeAllSearches(id)],
    );
  }

  let recentSearchesSubmenu = {};
  const recentSearchesOptions = recentSearches.filter((s) => s).map((s) => [
    s,
    {
      [MENU_TEXT.FIND]: () => actions.openSearchGroup(undefined, s),
      [MENU_TEXT.REMOVE]: () => actions.removeRecentSearch(s),
    },
  ]);

  if (recentSearchesOptions.length) {
    recentSearchesSubmenu = {
      [separator(2)]: null,
      [MENU_TEXT.RECENT_SEARCHES]: Object.fromEntries(recentSearchesOptions),
      [MENU_TEXT.REMOVE_ALL_RECENT]: () => actions.removeRecentSearch(),
    };
  }

  createContextMenu({
    [FIND_SUGGESTION]: {
      ...newSearchOption,
      ...Object.fromEntries(activeSearchOptions),
      ...recentSearchesSubmenu,
      [separator(3)]: null,
      [MENU_TEXT.OPTIONS]: () => actions.openPage(PAGE_URLS.SETTINGS)
    },
  });
}