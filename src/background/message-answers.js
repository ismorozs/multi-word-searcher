import Message from '@common/messages';
import State from './state';
import actions from "./actions";

Message.closingTab(({ tabId }) => actions.closingTab({ tabId }));
Message.closingPopup(({ tabId }) => actions.closingPopup({ tabId }));

Message.addSearchToContextMenu(({ tabId, idx, string }) =>
  actions.addSearchToContextMenu({ tabId, idx, string }),
);

Message.getData(() => State.get())

Message.removeRecentSearch(({ string }) => actions.removeRecentSearch(string));
Message.addFavoriteSearch(({ string }) => actions.addFavoriteSearch(string));
Message.removeFavoriteSearch(({ string }) => actions.removeFavoriteSearch(string));

Message.setColors(({ colors }) => actions.setColors(colors));

Message.closingWarning((showWarning) => State.set({ showWarning }));