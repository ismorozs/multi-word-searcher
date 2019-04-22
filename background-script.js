const POPUP_STATE_KEY = 'popupOpen';
const deferedCallbacks = [];

const actions = {
  updateHighlightState,
  notifyBackgroundScript,
};

browser.runtime.onMessage.addListener(onMessage);

function getPopupState () {
  return window.localStorage.getItem(POPUP_STATE_KEY);
}

function setPopupState (state) {
  window.localStorage.setItem(POPUP_STATE_KEY, state);
}

function getStateForUrl (url) {
  return JSON.parse( window.localStorage.getItem(url) );
}

function setStateForUrl (url, state) {
  window.localStorage.setItem(url, JSON.stringify( state) );
}

function onMessage (message) {
  if (message.senderId !== browser.runtime.id && !actions[message.action]) {
    return;
  }

  actions[ message.action ](message);
}

function notifyBackgroundScript (message) {
  switch (message.message) {
    case 'popupClosed':
      runDeferedCallbacks();
      setPopupState(0);
      break;

    case 'popupOpened':
      setPopupState(1);
  }
}

function updateHighlightState (data) {
  whenPopupClose(() => {
    const searchState = getStateForUrl( data.url);
    searchState.currentSearchIdx = data.currentSearchIdx;
    searchState.searches[ data.currentSearchIdx ].shownResultNumber = data.shownResultNumber;
    setStateForUrl(data.url, searchState);
  });
}

function whenPopupClose (cb) {
  if (getPopupState() == 0) {
    cb();
    return;
  }

  deferedCallbacks.push(cb);
}

function runDeferedCallbacks () {
  let callback;
  while ( callback = deferedCallbacks.pop() ) {
    callback();
  }
}
