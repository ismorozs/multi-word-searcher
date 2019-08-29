const STATE = {
  POPUP_STATE_ON_TABS: {},
  CONTEXT_MENU_SHOWN: false,
};

export default {
  getTabState,
  setTabState,
  setPopupState,
  setSearchInTab,
  setContextMenuState,
  contextMenuShown,
}

function getTabState (tabId) {
  return STATE.POPUP_STATE_ON_TABS[ tabId ];
}

function setTabState (tabId, state) {
  STATE.POPUP_STATE_ON_TABS[ tabId ] = state;
}

function setPopupState (tabId, state) {
  STATE.POPUP_STATE_ON_TABS[ tabId ].open = state;
}

function setSearchInTab (tabId, searchId, string) {
  STATE.POPUP_STATE_ON_TABS[ tabId ].searches[ searchId ] = string;
}

function setContextMenuState (tabId, state) {
  STATE.POPUP_STATE_ON_TABS[ tabId ].removeMenus = state;
}

function contextMenuShown (state) {
  if (typeof state === 'undefined') {
    return STATE.CONTEXT_MENU_SHOWN;
  }

  return STATE.CONTEXT_MENU_SHOWN = state;
}
