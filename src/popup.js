import Couli from 'couli';
import State from './common/state';
import './ui-components/search-string/index';
import './ui-components/app/index';

import {
  getCurrentTab,
  sendMessage,
  sendMessageToCurrentTab,
  onMessage,
} from './common/interaction';

browser.runtime.onMessage.addListener((message) => onMessage(message));

getCurrentTab()
  .then((tab) => sendMessage('tabState', { id: tab[0].id }, ({ scriptHasRun }) => {

    let runPageScript = Promise.resolve();

    if (!scriptHasRun) {

      runPageScript = browser.tabs.executeScript({ file: '/page-script.js' })
        .then(() => {
          sendMessageToCurrentTab('saveTabId', { tabId: tab[0].id });
          sendMessage('tabState', { id: tab[0].id, state: true });
        });

    }

    runPageScript
      .then(() => tab[0].url)
      .then(setupGlobalEvents)
      .then(setupState)
      .then(loadPreviouslyFound)
      .then(setupContentPage)
      .then(setupInterface)
      .catch(reportExecuteScriptError);

  }));

function setupGlobalEvents (url) {
  window.addEventListener('unload', () => {
    State.saveState(url);
    sendMessage('popupState', { open: false });
  });

  return url;
}

function setupState (url) {

  try {
    State.loadState(url);

    if (State.isEmpty()) {
      State.setDefault();
    }
  } catch (e) {
    State.setDefault();
  }

  sendMessage('popupState', { open: true });
}

function loadPreviouslyFound (state) {
  return new Promise ((resolve) => {

    fetchPreviouslyFound((response) => {
      State.addFindings(response);

      resolve(state);
    });

  });
}

function setupContentPage () {
  sendMessageToCurrentTab('setupContentPage', { colors: State.COLORS });
}

function setupInterface (state) {
  Couli.apply('#app');
}

function fetchPreviouslyFound (cb) {
  sendMessageToCurrentTab('fetchPreviouslyFound', null, cb);
}

function reportExecuteScriptError(error) {
  document.querySelector("#error-content").classList.remove("hidden");
  document.querySelector("#error-content").appendChild( document.createTextNode(error.message) );
  console.error(error.message);
}
