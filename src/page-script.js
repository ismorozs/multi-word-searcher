import { onMessage, sendMessage } from './common/interaction';
import actions from './messageActions/page';

let tabId;
actions.saveTabId = (message) => tabId = message.tabId;

browser.runtime.onMessage.addListener((message) => onMessage(message, actions));

window.onunload = function () { sendMessage('tab', { id: tabId, state: false }) }