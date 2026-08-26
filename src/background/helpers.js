const browser = require("webextension-polyfill/dist/browser-polyfill.min");

export function getCurrentTab() {
  return browser.tabs
    .query({ active: true, currentWindow: true })
    .then((tabs) => tabs[0]);
}
