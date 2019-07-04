import Store from '../common/store';
import { sendMessage } from '../common/interaction';

export default {
  saveTabId,
  notifyOfClosing,
  popupState,
};

function saveTabId (message) {
  Store.tabId(message.tabId);
}

function popupState (state) {
  Store.setPopupState(state.open);
}

function notifyOfClosing (cb) {
  sendMessage('closingPopup', { tabId: Store.tabId() }, () => cb());
}
