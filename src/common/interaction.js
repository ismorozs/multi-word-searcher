const PROMISES_RESOLVES = {};

export function getCurrentTab () {
  return browser.tabs.query({ active: true, currentWindow: true });
}

export function sendMessage (action, payload) {
  const { callbackId, promise } = payload.callbackId || saveCallback(action);
  const message = { action, callbackId, ...payload };

  if (window.__IS_BACKGROUND_SCRIPT__) {
    getCurrentTab().then((tab) => browser.tabs.sendMessage(tab[0].id, message));
  } else {
    browser.runtime.sendMessage(message);
  }

  return promise;
}

export async function onMessage (message, actions = {}) {
  if (message.isAnswer) {
    PROMISES_RESOLVES[message.callbackId](message);
    delete PROMISES_RESOLVES[message.callbackId];
    return;
  }

  if (actions[message.action]) {
    const result = await actions[ message.action ](message);
    
    if (message.callbackId) {
      sendMessage(message.action, { callbackId: message.callbackId, isAnswer: true, ...result });
    }
  }
}

function saveCallback (action, cb) {
  const callbackId = Date.now() + Math.random() + action;

  return {
    promise: new Promise ((res) => PROMISES_RESOLVES[ callbackId ] = res),
    callbackId
  };
}
