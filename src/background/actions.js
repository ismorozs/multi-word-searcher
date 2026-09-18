const browser = require("webextension-polyfill/dist/browser-polyfill.min");

import Message from "@common/messages";
import State from "./state";
import { getCurrentTab } from "./helpers";


export default {
  closingTab,
  closingPopup,
  switchPopup,
  openSearchGroup,
  addSearchToContextMenu,
  removeSearch,
  removeAllSearches,
  removeRecentSearch,
  addFavoriteSearch,
  removeFavoriteSearch,
  openPage,
};

export function closingTab({ tabId }) {
  State.setTabState(tabId, undefined);
}

export function closingPopup({ tabId }) {
  State.setTabState(tabId, { open: false });
}

async function switchPopup({ id }, noClosing) {
  let popupState = State.getTabState(id);

  if (!popupState?.initialized) {
    popupState = await initializePopup(id);
  }

  const open = !popupState.open || !!noClosing;
  return Message.popupState({ open }).then(() =>
    State.setTabState(id, { open }),
  );
}

async function initializePopup(tabId) {
  await executeScript(tabId, "/page-script.js");
  Message.saveTabId({ tabId });
  return State.initTabState(tabId);
}

async function openSearchGroup(searchGroupId, searchString) {
  const tab = await getCurrentTab();
  await switchPopup(tab, true);
  const idx = searchGroupId >= 0 ? searchGroupId : (await State.getEmptySearchId(tab));
  Message.openSearchGroup({ idx, searchString });
}

async function removeSearch(tabId, idx) {
  await addSearchToContextMenu({ tabId, idx, string: undefined });
  Message.removeSearch({ idx });
}

function removeAllSearches (tabId) {
  State.getTabState(tabId).searches.forEach((s, i) => s && removeSearch(tabId, i));
}

export async function addSearchToContextMenu({ tabId, idx, string }) {
  State.setSearchInTab(tabId, idx, string);
}

async function executeScript(tabId, file) {
  try {
    return await browser.scripting.executeScript({
      target: {
        tabId,
      },
      files: [file],
    });
  } catch (e) {
    return await browser.tabs.executeScript(tabId, { file });
  }
}

function removeRecentSearch (string) {
  State.removeRecentSearch(string);
  Message.removeRecentSearch({ string })
}

function addFavoriteSearch (string) {
  State.addFavoriteSearch(string);
  Message.addFavoriteSearch({ string });
}

function removeFavoriteSearch (string) {
  State.removeFavoriteSearch(string);
  Message.removeFavoriteSearch({ string })
}

function openPage (url) {
  browser.tabs.create({ active: true, url });
}
