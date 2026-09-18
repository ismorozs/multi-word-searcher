const browser = require("webextension-polyfill/dist/browser-polyfill.min");

import '@background/message-answers';
import actions from "@background/actions";
import State from '@background/state';
import {
  updateContextMenu,
} from "./background/context-menu";

browser.browserAction.onClicked.addListener((tab) => actions.switchPopup(tab));

browser.tabs.onActivated.addListener(updateContextMenu);
browser.tabs.onUpdated.addListener(updateContextMenu);

State.onChange(
  ["favoriteSearches", "recentSearches", "tabs"],
  async () => {
    await updateContextMenu()
  },
);

updateContextMenu();
