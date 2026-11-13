const browser = require("webextension-polyfill/dist/browser-polyfill.min");

import "@background/message-answers";
import actions from "@background/actions";
import State from "@background/state";
import { updateContextMenu } from "./background/context-menu";

browser.browserAction.onClicked.addListener((tab) => actions.switchPopup(tab));

browser.tabs.onActivated.addListener(updateContextMenu);
browser.tabs.onUpdated.addListener((tabId, changes) => {
  if (changes.status === "complete") {
    actions.onTabClose(tabId);
  }
  updateContextMenu();
});
browser.tabs.onRemoved.addListener((tabId) => actions.onTabClose(tabId));

State.onChange(["favoriteSearches", "recentSearches", "tabs"], async () => {
  await updateContextMenu();
});

updateContextMenu();
