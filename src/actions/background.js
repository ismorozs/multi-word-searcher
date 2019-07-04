import { getCurrentTab, sendMessage } from '../common/interaction';

const POPUP_STATE_ON_TABS = {};

export default {
  find,
  closingTab,
  closingPopup,
  sendMessageToCurrentTab,
};

async function find ({ string, caseSensitive }) {
  const foundResults = await browser.find.find(string, { includeRangeData: true, caseSensitive });
  return { foundResults };
}

function closingTab (data) {
  POPUP_STATE_ON_TABS[ data.tabId ] = undefined;
}

function closingPopup (data) {
  POPUP_STATE_ON_TABS[ data.tabId ] = false;
}

function sendMessageToCurrentTab () {
  getCurrentTab()
    .then((tab) => {
      const id = tab[0].id;
      const popupState = POPUP_STATE_ON_TABS[id];

      if (typeof popupState === 'undefined') {
        initializePopup(id);
        return;
      }

      switchPopup(id, popupState);
    });
}

function initializePopup (tabId) {
  browser.tabs.executeScript({ file: '/page-script.js' })
    .then(() => sendMessage('saveTabId', { tabId }))
    .then(() => POPUP_STATE_ON_TABS[tabId] = true)
}

function switchPopup (tabId, currentState) {
  sendMessage('popupState', { open: !currentState }, () => POPUP_STATE_ON_TABS[ tabId ] = !currentState);
}
