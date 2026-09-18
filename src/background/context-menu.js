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
  RECENT_SEARCHES: "Recent",
  REMOVE_ALL_RECENT: "Remove all",
  FAVORITE_SEARCHES: "Saved",
  REMOVE_ALL_FAVORITE: "Remove all",
  OPTIONS: "Customize",
};

function separator (str) {
  return `${Date.now()}${str}`;
};

export async function updateContextMenu () {
  const { recentSearches, favoriteSearches } = State.get();
  const { id } = await getCurrentTab();
  const { searches } = State.getTabState(id);

  const activeSearchOptions = searches
    .map((s, i) => [s, () => actions.openSearchGroup(i)])
    .filter(([s]) => s);

  if (activeSearchOptions.length) {
    activeSearchOptions.unshift([separator(0), null]);
    activeSearchOptions.push(
      [separator(1), null],
      [MENU_TEXT.REMOVE_ALL_ACTIVE, () => actions.removeAllSearches(id)],
    );
  }

  let favoriteSearchesSubmenu = {};
  const favoriteSearchesOptions = favoriteSearches.map((s) => [
    s,
    () => actions.openSearchGroup(undefined, s),
  ]);

  if (favoriteSearchesOptions.length) {
    favoriteSearchesOptions.push(
      [separator(2), null],
      [MENU_TEXT.REMOVE_ALL_FAVORITE, () => actions.removeFavoriteSearch()],
    );
    favoriteSearchesSubmenu = {
      [separator(3)]: null,
      [MENU_TEXT.FAVORITE_SEARCHES]: Object.fromEntries(
        favoriteSearchesOptions,
      ),
    };
  }


  let recentSearchesSubmenu = {};
  const recentSearchesOptions = recentSearches.map((s) => [
    s,
    () => actions.openSearchGroup(undefined, s),
  ]);

  if (recentSearchesOptions.length) {
    recentSearchesOptions.push(
      [separator(4), null],
      [MENU_TEXT.REMOVE_ALL_RECENT, () => actions.removeRecentSearch()],
    );
    recentSearchesSubmenu = {
      ...(favoriteSearchesOptions.length ? {} : { [separator(5)]: null }),
      [MENU_TEXT.RECENT_SEARCHES]: Object.fromEntries(
        recentSearchesOptions,
      ),
    };
  }

  createContextMenu({
    [FIND_SUGGESTION]: {
      [MENU_TEXT.NEW]: () => actions.openSearchGroup(),
      ...Object.fromEntries(activeSearchOptions),
      ...favoriteSearchesSubmenu,
      ...recentSearchesSubmenu,
      [separator(6)]: null,
      [MENU_TEXT.OPTIONS]: () => actions.openPage(PAGE_URLS.SETTINGS)
    },
  });
}