import { FIND_SUGGESTION } from '../common/constants';
import Store from './store';
import { sendMessage } from '../common/interaction';

export default {
  saveTabId,
  notifyOfClosing,
  popupState,
  openSearchGroup,
  setContextMenu,
  removeSearch,
  removeAllContextMenus
};

function saveTabId (message) {
  Store.tabId(message.tabId);
}

function popupState (state) {
  Store.setPopupState(state.open);
}

function notifyOfClosing () {
  return sendMessage('closingPopup', { tabId: Store.tabId() });
}

function openSearchGroup ({ idx }) {
  Store.inputFocusNeeded(true);
  Store.setCurrentSearch(idx);
}

function removeSearch ({ idx }) {
  if (idx === -1) {
    Store.removeSearch({ all: true });
    return;
  }
  Store.removeSearch({ idx })
}

function setContextMenu (idx, string) {
  sendMessage('setContextMenu', { tabId: Store.tabId(), idx, string });
}

function removeAllContextMenus () {
  sendMessage('removeAllContextMenus', { tabId: Store.tabId() });
}
