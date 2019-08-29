import { onMessage } from './common/interaction';
import actions from './background/actions';
import { initContextMenu, onContextMenuClicked, updateContextMenu } from './background/context-menu';

window.__IS_BACKGROUND_SCRIPT__ = true;

browser.runtime.onMessage.addListener((message) => onMessage(message, actions));

browser.browserAction.onClicked.addListener((tab) => actions.switchPopup(tab));

browser.tabs.onActivated.addListener(updateContextMenu);
browser.tabs.onUpdated.addListener((tabId) => updateContextMenu({ tabId }), { properties: ['status'] });

browser.menus.onClicked.addListener(onContextMenuClicked);

initContextMenu();
