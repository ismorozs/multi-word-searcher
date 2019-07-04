const MESSAGE_LISTENERS = {};

export function getCurrentTab () {
  return browser.tabs.query({ active: true, currentWindow: true });
}

export function sendMessage (action, payload, cb) {
  const callbackId = payload.callbackId || saveCallback(action, cb);
  const message = { action, callbackId, ...payload };

  if (window.__IS_BACKGROUND_SCRIPT__) {
    return getCurrentTab().then((tab) => browser.tabs.sendMessage(tab[0].id, message));
  }

  return browser.runtime.sendMessage(message);
}

export async function onMessage (message, actions = {}) {
  if (message.isAnswer) {
    MESSAGE_LISTENERS[message.callbackId](message);
    delete MESSAGE_LISTENERS[message.callbackId];
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
  if (!cb) {
    return;
  }

  const callbackId = Date.now() + Math.random() + action;
  MESSAGE_LISTENERS[callbackId] = cb;

  return callbackId;
}
