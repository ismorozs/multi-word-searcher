/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/background-script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/background-script.js":
/*!**********************************!*\
  !*** ./src/background-script.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_interaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/interaction */ "./src/common/interaction.js");
/* harmony import */ var _background_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background/actions */ "./src/background/actions.js");
/* harmony import */ var _background_context_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background/context-menu */ "./src/background/context-menu.js");




window.__IS_BACKGROUND_SCRIPT__ = true;

browser.runtime.onMessage.addListener((message) => Object(_common_interaction__WEBPACK_IMPORTED_MODULE_0__["onMessage"])(message, _background_actions__WEBPACK_IMPORTED_MODULE_1__["default"]));

browser.browserAction.onClicked.addListener((tab) => _background_actions__WEBPACK_IMPORTED_MODULE_1__["default"].switchPopup(tab));

browser.tabs.onActivated.addListener(_background_context_menu__WEBPACK_IMPORTED_MODULE_2__["updateContextMenu"]);
browser.tabs.onUpdated.addListener((tabId) => Object(_background_context_menu__WEBPACK_IMPORTED_MODULE_2__["updateContextMenu"])({ tabId }), { properties: ['status'] });

browser.menus.onClicked.addListener(_background_context_menu__WEBPACK_IMPORTED_MODULE_2__["onContextMenuClicked"]);

Object(_background_context_menu__WEBPACK_IMPORTED_MODULE_2__["initContextMenu"])();


/***/ }),

/***/ "./src/background/actions.js":
/*!***********************************!*\
  !*** ./src/background/actions.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_interaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/interaction */ "./src/common/interaction.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/background/state.js");
/* harmony import */ var _context_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context-menu */ "./src/background/context-menu.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  find,
  closingTab,
  closingPopup,
  switchPopup,
  openSearchGroup,
  setContextMenu,
  removeSearch,
  removeAllContextMenus,
});

async function find ({ string, caseSensitive }) {
  const foundResults = await browser.find.find(string, { includeRangeData: true, caseSensitive });
  return { foundResults };
}

function closingTab ({ tabId }) {
  _state__WEBPACK_IMPORTED_MODULE_1__["default"].setTabState(tabId, undefined);
}

function closingPopup ({ tabId }) {
  _state__WEBPACK_IMPORTED_MODULE_1__["default"].setPopupState(tabId, false);
}

function switchPopup ({ id: tabId }, noClosing) {
  const popupState = _state__WEBPACK_IMPORTED_MODULE_1__["default"].getTabState(tabId);

  if (!popupState.initialized) {
    return initializePopup(tabId);
  }

  const newPopupState = !popupState.open || !!noClosing;
  return Object(_common_interaction__WEBPACK_IMPORTED_MODULE_0__["sendMessage"])('popupState', { open: newPopupState }).then(() => _state__WEBPACK_IMPORTED_MODULE_1__["default"].setPopupState(tabId, newPopupState));
}

function initializePopup (tabId) {
  return browser.tabs.executeScript({ file: '/page-script.js' })
    .then(() => Object(_common_interaction__WEBPACK_IMPORTED_MODULE_0__["sendMessage"])('saveTabId', { tabId }))
    .then(() => _state__WEBPACK_IMPORTED_MODULE_1__["default"].setTabState(tabId, { open: true, searches: [], removeMenus: false, initialized: true }));
}


function openSearchGroup ({ id }, idx) {
  switchPopup({ id }, true).then(() => Object(_common_interaction__WEBPACK_IMPORTED_MODULE_0__["sendMessage"])('openSearchGroup', { idx }));
}

function removeSearch (idx) {
  Object(_common_interaction__WEBPACK_IMPORTED_MODULE_0__["sendMessage"])('removeSearch', { idx });
}

function setContextMenu ({ tabId, idx, string }) {
  _state__WEBPACK_IMPORTED_MODULE_1__["default"].setSearchInTab(tabId, idx, string);
  Object(_context_menu__WEBPACK_IMPORTED_MODULE_2__["updateContextMenu"])({ tabId })
}

function removeAllContextMenus ({ tabId }) {
  Object(_context_menu__WEBPACK_IMPORTED_MODULE_2__["resetContextMenu"])();

  _state__WEBPACK_IMPORTED_MODULE_1__["default"].setTabState(tabId, { ..._state__WEBPACK_IMPORTED_MODULE_1__["default"].getTabState(tabId), searches: [], removeMenus: false });
  _state__WEBPACK_IMPORTED_MODULE_1__["default"].contextMenuShown(false);
}


/***/ }),

/***/ "./src/background/context-menu.js":
/*!****************************************!*\
  !*** ./src/background/context-menu.js ***!
  \****************************************/
/*! exports provided: initContextMenu, onContextMenuClicked, updateContextMenu, resetContextMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initContextMenu", function() { return initContextMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onContextMenuClicked", function() { return onContextMenuClicked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateContextMenu", function() { return updateContextMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetContextMenu", function() { return resetContextMenu; });
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/constants */ "./src/common/constants.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/background/state.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/background/actions.js");




const ICONS_PATH = '/icons/context-menu/';
const SMALL_ICON_NAME = '-16.png';
const BIG_ICON_NAME = '-32.png';
const SMALL_REMOVE_ICON_NAME = 'remove-16.png';
const BIG_REMOVE_ICON_NAME = 'remove-32.png';

const CONTEXT_MENU = {
  MAIN: 'MAIN',
  FIND: 'F',
  REMOVE_SUBMENU: 'REMOVE_SUBMENU',
  REMOVE: 'R',
  REMOVE_SEPARATOR: 'REMOVE_SEPARATOR',
  REMOVE_ALL: 'X',
  REMOVE_ALL_SEPARATOR: 'REMOVE_ALL_SEPARATOR'
};

function initContextMenu () {
  browser.menus.create({
    id: CONTEXT_MENU.MAIN,
    title: _common_constants__WEBPACK_IMPORTED_MODULE_0__["FIND_SUGGESTION"],
    contexts: ["all"]
  });
  
  _common_constants__WEBPACK_IMPORTED_MODULE_0__["COLORS"].forEach((color, i) => browser.menus.create({
    id: CONTEXT_MENU.FIND + i.toString(),
    parentId: CONTEXT_MENU.MAIN,
    title: '',
    icons: {
      16: ICONS_PATH + i + SMALL_ICON_NAME,
      32: ICONS_PATH + i + BIG_ICON_NAME,
    },
  }));  
}

function onContextMenuClicked (info, tab) {
  switch (info.menuItemId[0]) {
    case CONTEXT_MENU.FIND:
      _actions__WEBPACK_IMPORTED_MODULE_2__["default"].openSearchGroup(tab, info.menuItemId[1]);
      return;

    case CONTEXT_MENU.REMOVE:
      _actions__WEBPACK_IMPORTED_MODULE_2__["default"].removeSearch(info.menuItemId[1]);
      return;

    case CONTEXT_MENU.REMOVE_ALL:
      _actions__WEBPACK_IMPORTED_MODULE_2__["default"].removeSearch(-1);
      return;
  }
}

function updateContextMenu ({ tabId }) {
  const { remove, update, create } = browser.menus;
  const popupState = _state__WEBPACK_IMPORTED_MODULE_1__["default"].getTabState(tabId);
  
  if (!popupState) {
    _actions__WEBPACK_IMPORTED_MODULE_2__["default"].removeAllContextMenus({ tabId });
    return;
  }

  const searchesExist = areSearchesExist(popupState);

  let prepareContextMenu = Promise.resolve();

  if (searchesExist !== popupState.removeMenus || _state__WEBPACK_IMPORTED_MODULE_1__["default"].contextMenuShown() !== popupState.removeMenus) {
    prepareContextMenu = switchRemoveOptions(searchesExist);
    _state__WEBPACK_IMPORTED_MODULE_1__["default"].setContextMenuState(tabId, searchesExist);
    _state__WEBPACK_IMPORTED_MODULE_1__["default"].contextMenuShown(searchesExist);

    if (!searchesExist) {
      return;
    }
  }
  
  prepareContextMenu.then(() => {
    _common_constants__WEBPACK_IMPORTED_MODULE_0__["COLORS"].forEach((c, i) => {
      const title = popupState.searches[i] || '';
      update( CONTEXT_MENU.FIND + i, { title } );
  
      remove(CONTEXT_MENU.REMOVE + i).then(() => {
        if (title) {
          create({
            id: CONTEXT_MENU.REMOVE + i,
            title,
            parentId: CONTEXT_MENU.REMOVE_SUBMENU,
            icons: {
              16: ICONS_PATH + i + SMALL_ICON_NAME,
              32: ICONS_PATH + i + BIG_ICON_NAME
            },
          }, () => {});
        }
      });
  
    });
  });
}

function areSearchesExist (popupState) {
  if (!popupState.searches.length) {
    return false;
  }

  return popupState.searches.some((el) => !!el);
}

function switchRemoveOptions (bool) {
  const { create } = browser.menus;

  if (bool) {
    create({ id: CONTEXT_MENU.REMOVE_SEPARATOR, parentId: CONTEXT_MENU.MAIN, type: 'separator', contexts: ['all'] });  
    create({
      id: CONTEXT_MENU.REMOVE_SUBMENU,
      title: 'Remove',
      parentId: CONTEXT_MENU.MAIN,
      contexts: ['all'],
      icons: { 16: ICONS_PATH + SMALL_REMOVE_ICON_NAME, 32: ICONS_PATH + BIG_REMOVE_ICON_NAME }
    });
    create({ id: CONTEXT_MENU.REMOVE_ALL, title: 'Remove all', parentId: CONTEXT_MENU.REMOVE_SUBMENU, contexts: ['all'] });
    create({ id: CONTEXT_MENU.REMOVE_ALL_SEPARATOR, parentId: CONTEXT_MENU.REMOVE_SUBMENU, type: 'separator', contexts: ['all'] });

    return Promise.resolve();
  }

  return resetContextMenu();
}

function resetContextMenu () {
  const { remove } = browser.menus
  return new Promise ((res) => {
    remove(CONTEXT_MENU.REMOVE_ALL)
      .then(() => remove(CONTEXT_MENU.REMOVE_ALL_SEPARATOR)
        .then(() => remove(CONTEXT_MENU.REMOVE_SEPARATOR)
          .then(() => remove(CONTEXT_MENU.REMOVE_SUBMENU)
            .then(() => {

              _common_constants__WEBPACK_IMPORTED_MODULE_0__["COLORS"].forEach((c, i) => {
                browser.menus.update(CONTEXT_MENU.FIND + i, { title: '' });
                browser.menus.remove(CONTEXT_MENU.REMOVE + i)
              });

              res();
            }))));
  });
}


/***/ }),

/***/ "./src/background/state.js":
/*!*********************************!*\
  !*** ./src/background/state.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const STATE = {
  POPUP_STATE_ON_TABS: {},
  CONTEXT_MENU_SHOWN: false,
};

/* harmony default export */ __webpack_exports__["default"] = ({
  getTabState,
  setTabState,
  setPopupState,
  setSearchInTab,
  setContextMenuState,
  contextMenuShown,
});

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


/***/ }),

/***/ "./src/common/constants.js":
/*!*********************************!*\
  !*** ./src/common/constants.js ***!
  \*********************************/
/*! exports provided: EXTENSION_ID, FIND_HELPER_CLASS, COLORS, FIND_SUGGESTION, KEYBOARD_KEYS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTENSION_ID", function() { return EXTENSION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIND_HELPER_CLASS", function() { return FIND_HELPER_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIND_SUGGESTION", function() { return FIND_SUGGESTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYBOARD_KEYS", function() { return KEYBOARD_KEYS; });
const EXTENSION_ID = 'multi-string-search-extension-' + browser.runtime.id.replace(/[{}@]/g, '');
const FIND_HELPER_CLASS = EXTENSION_ID + '-find-helper';

const COLORS = [
  '255, 255, 25',
  '60, 180, 75',
  '230, 25, 75',
  '0, 130, 200',
  '245, 130, 48',
  '145, 30, 180',
  '240, 50, 230',
  '128, 128, 128',
  '210, 245, 60',
  '250, 190, 190',
];

const FIND_SUGGESTION = 'Find text on page';

const DIGIT_KEYS = Array(10).fill(48).reduce((a , v, i) => (a[i] = 48 + i) && a , {});

const KEYBOARD_KEYS = {
  ...DIGIT_KEYS,
  ESC: 27,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  DELETE: 46,
  BACKSPACE: 8,
  w: 87,
  e: 69,
  r: 82,
  a: 65,
  s: 83,
  d: 68,
  f: 70,
  c: 67,
  b: 66,
  UP: 38,
  LEFT: 37,
  DOWN: 40,
  RIGHT: 39,
};


/***/ }),

/***/ "./src/common/interaction.js":
/*!***********************************!*\
  !*** ./src/common/interaction.js ***!
  \***********************************/
/*! exports provided: getCurrentTab, sendMessage, onMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentTab", function() { return getCurrentTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessage", function() { return sendMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMessage", function() { return onMessage; });
const PROMISES_RESOLVES = {};

function getCurrentTab () {
  return browser.tabs.query({ active: true, currentWindow: true });
}

function sendMessage (action, payload) {
  const { callbackId, promise } = payload.callbackId || saveCallback(action);
  const message = { action, callbackId, ...payload };

  if (window.__IS_BACKGROUND_SCRIPT__) {
    getCurrentTab().then((tab) => browser.tabs.sendMessage(tab[0].id, message));
  } else {
    browser.runtime.sendMessage(message);
  }

  return promise;
}

async function onMessage (message, actions = {}) {
  if (message.isAnswer) {
    PROMISES_RESOLVES[message.callbackId](message);
    delete PROMISES_RESOLVES[message.callbackId];
    return;
  }

  if (actions[message.action]) {
    const result = await actions[ message.action ](message);
    
    if (message.callbackId) {
      sendMessage(message.action, { callbackId: message.callbackId, isAnswer: true, ...result });
    }
  }
}

function saveCallback (action, cb) {
  const callbackId = Date.now() + Math.random() + action;

  return {
    promise: new Promise ((res) => PROMISES_RESOLVES[ callbackId ] = res),
    callbackId
  };
}


/***/ })

/******/ });