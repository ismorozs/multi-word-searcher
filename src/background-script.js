import { onMessage } from './common/interaction';
import actions from './actions/background';

window.__IS_BACKGROUND_SCRIPT__ = true;

browser.runtime.onMessage.addListener((message) => onMessage(message, actions));

browser.browserAction.onClicked.addListener(actions.sendMessageToCurrentTab);