const MESSAGE_LISTENERS = {};

export function getCurrentTab () {
  return browser.tabs.query({ active: true, currentWindow: true });
}

export function sendMessageToCurrentTab (action, payload, cb) {
  return sendMessage(action, { toCurrentTab: true, ...payload }, cb);
}

export function sendMessage (action, payload, cb) {
  const callbackId = payload.callbackId || saveCallback(action, cb);
  const message = { action, callbackId, ...payload };

  if (payload.toCurrentTab === true) {
    return getCurrentTab().then((tab) => browser.tabs.sendMessage(tab[0].id, message));
  }

  return browser.runtime.sendMessage(message);
}

export function onMessage (message, actions = {}) {
  if (message.isAnswer) {
    try {
      MESSAGE_LISTENERS[message.callbackId](message);
      delete MESSAGE_LISTENERS[message.callbackId];
      return;
    } catch (e) {}
  }

  if (actions[message.action]) {
    const result = actions[ message.action ](message);

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
