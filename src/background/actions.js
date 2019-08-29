import { sendMessage } from '../common/interaction';
import State from './state';
import { updateContextMenu, resetContextMenu } from './context-menu';

export default {
  find,
  closingTab,
  closingPopup,
  switchPopup,
  openSearchGroup,
  setContextMenu,
  removeSearch,
  removeAllContextMenus,
};

async function find ({ string, caseSensitive }) {
  const foundResults = await browser.find.find(string, { includeRangeData: true, caseSensitive });
  return { foundResults };
}

function closingTab ({ tabId }) {
  State.setTabState(tabId, undefined);
}

function closingPopup ({ tabId }) {
  State.setPopupState(tabId, false);
}

function switchPopup ({ id: tabId }, noClosing) {
  const popupState = State.getTabState(tabId);

  if (!popupState.initialized) {
    return initializePopup(tabId);
  }

  const newPopupState = !popupState.open || !!noClosing;
  return sendMessage('popupState', { open: newPopupState }).then(() => State.setPopupState(tabId, newPopupState));
}

function initializePopup (tabId) {
  return browser.tabs.executeScript({ file: '/page-script.js' })
    .then(() => sendMessage('saveTabId', { tabId }))
    .then(() => State.setTabState(tabId, { open: true, searches: [], removeMenus: false, initialized: true }));
}


function openSearchGroup ({ id }, idx) {
  switchPopup({ id }, true).then(() => sendMessage('openSearchGroup', { idx }));
}

function removeSearch (idx) {
  sendMessage('removeSearch', { idx });
}

function setContextMenu ({ tabId, idx, string }) {
  State.setSearchInTab(tabId, idx, string);
  updateContextMenu({ tabId })
}

function removeAllContextMenus ({ tabId }) {
  resetContextMenu();

  State.setTabState(tabId, { ...State.getTabState(tabId), searches: [], removeMenus: false });
  State.contextMenuShown(false);
}
