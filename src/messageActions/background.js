import State from '../common/state';

const POPUP_STATE_KEY = 'popupOpen';
const deferedCallbacks = [];

const SCRIPTS_ON_TABS = {};

export default {
  updateHighlightState,
  popupState,
  tabState,
};

function getPopupState () {
  return window.localStorage.getItem(POPUP_STATE_KEY);
}

function setPopupState (state) {
  window.localStorage.setItem(POPUP_STATE_KEY, state);
}

function popupState (state) {
  if (state.open) {
    return setPopupState(1);
  }

  runDeferedCallbacks();
  setPopupState(0);
}

function tabState (tab) {
  if (typeof tab.state !== 'undefined') {
    SCRIPTS_ON_TABS[ tab.id ] = tab.state;
  }

  return { scriptHasRun: SCRIPTS_ON_TABS[ tab.id ] };
}

function updateHighlightState (data) {
  whenPopupClose(() => State.updateHighlightState(data));
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
