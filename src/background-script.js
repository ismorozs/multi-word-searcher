import { onMessage } from './common/interaction';
import actions from './messageActions/background';

browser.runtime.onMessage.addListener((message) => onMessage(message, actions));
