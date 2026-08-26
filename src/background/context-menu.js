import createContextMenu from 'webextension-contextmenu';
import { FIND_SUGGESTION } from '@common/constants';
import State from './state';
import actions from './actions';
import { getCurrentTab } from './helpers';

export async function updateContextMenu () {
  const { recentSearches } = State.get();
  const { id } = await getCurrentTab();
  const { searches } = State.getTabState(id);

  const newSearchOption = searches.every((s) => s) ? {} : {
    "New...": () => actions.openSearchGroup()
  }

  const activeSearchOptions = searches
    .map((s, i) => [
      s,
      {
        Open: () => actions.openSearchGroup(i),
        Remove: () => actions.removeSearch(id, i),
      },
    ])
    .filter(([s]) => s);

  if (activeSearchOptions.length) {
    activeSearchOptions.unshift(['separator1', null]);
    activeSearchOptions.push(
      ["separator2", null],
      ["Remove all active", () => actions.removeAllSearches(id)],
    );
  }

  let recentSearchesSubmenu = {};
  const recentSearchesOptions = recentSearches.filter((s) => s).map((s) => [
    s,
    {
      Find: () => actions.openSearchGroup(undefined, s),
      Remove: () => actions.removeRecentSearch(s),
    },
  ]);

  if (recentSearchesOptions.length) {
    recentSearchesSubmenu = {
      separator3: null,
      "Recent Searches": Object.fromEntries(recentSearchesOptions),
      "Remove All Recent": () => actions.removeRecentSearch(),
    };
  }

  createContextMenu({
    [FIND_SUGGESTION]: {
      ...newSearchOption,
      ...Object.fromEntries(activeSearchOptions),
      ...recentSearchesSubmenu,
    },
  });
}