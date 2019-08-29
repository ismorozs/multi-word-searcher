import Couli from 'couli';
import Store from './page/store';
import './page/ui/components/search-string/index';
import './page/ui/components/controls/index';
import './page/ui/components/popup/index';

import { EXTENSION_ID } from './common/constants';

import { onMessage, sendMessage } from './common/interaction';
import { appendStyles, stylesString } from './page/global-styles';

import actions from './page/actions';

appendStyles(stylesString);
initializePopup();

window.onunload = () => { sendMessage('closingTab', { tabId: Store.tabId() }) }

browser.runtime.onMessage.addListener((message) => onMessage(message, actions));

function initializePopup () {
  const popupContainer = document.createElement('div');
  popupContainer.style.zIndex = 2147483647;
  popupContainer.id = EXTENSION_ID;

  const popup = document.createElement('popup');
  popupContainer.appendChild(popup);
  document.body.appendChild(popupContainer);

  Couli.apply('#' + EXTENSION_ID);

  return window.EXTENSION_POPUP_INTERFACE;
}
