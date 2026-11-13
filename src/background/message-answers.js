import Message from "@common/messages";
import State from "./state";
import actions from "./actions";

Message.closingPopup(({ tabId }) => actions.closingPopup({ tabId }));

Message.addSearchToContextMenu(({ tabId, idx, string }) =>
  actions.addSearchToContextMenu({ tabId, idx, string }),
);

Message.getData(() => State.get());

Message.removeRecentSearch(
  async ({ string }) => await actions.removeRecentSearch(string),
);
Message.addFavoriteSearch(
  async ({ string }) => await actions.addFavoriteSearch(string),
);
Message.removeFavoriteSearch(
  async ({ string }) => await actions.removeFavoriteSearch(string),
);

Message.setColors(({ colors }) => actions.setColors(colors));

Message.closingWarning((showWarning) => State.set({ showWarning }));
