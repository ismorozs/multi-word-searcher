const MESSAGE_LISTENERS = {};

browser.tabs.executeScript({file: "/content_scripts/main.js"})
  .then(setupMessageListener)
  .then(getCurrentUrl)
  .then(setupGlobalEvents)
  .then(setupState)
  .then(loadPreviouslyFound)
  .then(setupContentPage)
  .then(setupInterface)
  .catch(reportExecuteScriptError);

function setupMessageListener () {
  browser.runtime.onMessage.addListener(onMessage);
}

function getCurrentUrl () {
  return getCurrentTab().then((tab) => tab[0].url);
}

function setupGlobalEvents (url) {
  window.addEventListener("unload", () => {
    window.STATE.saveState(url);
    browser.runtime.sendMessage({ action: 'notifyBackgroundScript', message: 'popupClosed' });
  });

  return url;
}

function setupState (url) {

  try {
    window.STATE.loadState(url);

    if (window.STATE.isEmpty()) {
      window.STATE.setDefault();
    }
  } catch (e) {
    window.STATE.setDefault();
  }

  browser.runtime.sendMessage({ action: 'notifyBackgroundScript', message: 'popupOpened' });
}

function loadPreviouslyFound (state) {
  return new Promise ((resolve) => {

    fetchPreviouslyFound((response) => {
      window.STATE.addFindings(response);

      resolve(state);
    });

  });
}

function setupContentPage () {
  sendMessageToCurrentTab('setupContentPage', { colors: STATE.COLORS });
}

function setupInterface (state) {
  Couli.apply('#app');
}

function getCurrentTab () {
  return browser.tabs.query({ active: true, currentWindow: true });
}

function onMessage (message) {
  if (message.action) {

    if (message.callbackId) {
      MESSAGE_LISTENERS[message.action][message.callbackId](message);
      delete MESSAGE_LISTENERS[message.action][message.callbackId];
    }
  }
}

function sendMessageToCurrentTab (action, payload, cb) {
  cb = cb || (() => {});
  const callbackId = Date.now() + Math.random() + action;
  addMessageListener (action, callbackId, cb);

  const message = Object.assign({ action, callbackId, senderId: browser.runtime.id }, payload);
  return getCurrentTab().then((tab) => {
    browser.tabs.sendMessage(tab[0].id, message);
  });
}

function addMessageListener (action, callbackId, cb) {
  MESSAGE_LISTENERS[action] = MESSAGE_LISTENERS[action] || {};
  MESSAGE_LISTENERS[action][callbackId] = cb;
}

function fetchPreviouslyFound (cb) {
  sendMessageToCurrentTab('fetchPreviouslyFound', null, cb);
}

function reportExecuteScriptError(error) {
  document.querySelector("#error-content").classList.remove("hidden");
  document.querySelector("#error-content").appendChild( document.createTextNode(error.message) );
  console.error(error.message);
}
