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
/* harmony import */ var _messageActions_background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messageActions/background */ "./src/messageActions/background.js");



browser.runtime.onMessage.addListener((message) => Object(_common_interaction__WEBPACK_IMPORTED_MODULE_0__["onMessage"])(message, _messageActions_background__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "./src/common/interaction.js":
/*!***********************************!*\
  !*** ./src/common/interaction.js ***!
  \***********************************/
/*! exports provided: getCurrentTab, sendMessageToCurrentTab, sendMessage, onMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentTab", function() { return getCurrentTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessageToCurrentTab", function() { return sendMessageToCurrentTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessage", function() { return sendMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMessage", function() { return onMessage; });
const MESSAGE_LISTENERS = {};

function getCurrentTab () {
  return browser.tabs.query({ active: true, currentWindow: true });
}

function sendMessageToCurrentTab (action, payload, cb) {
  return sendMessage(action, { toCurrentTab: true, ...payload }, cb);
}

function sendMessage (action, payload, cb) {
  const callbackId = payload.callbackId || saveCallback(action, cb);
  const message = { action, callbackId, ...payload };

  if (payload.toCurrentTab === true) {
    return getCurrentTab().then((tab) => browser.tabs.sendMessage(tab[0].id, message));
  }

  return browser.runtime.sendMessage(message);
}

function onMessage (message, actions = {}) {
  if (message.isAnswer) {
    try {
      MESSAGE_LISTENERS[message.callbackId](message);
      delete MESSAGE_LISTENERS[message.callbackId];
      return;
    } catch (e) {}
  }

  if (actions[message.action]) {
    const result = actions[ message.action ](message);

    if (message.callbackId) {
      sendMessage(message.action, { callbackId: message.callbackId, isAnswer: true, ...result });
    }
  }
}

function saveCallback (action, cb) {
  if (!cb) {
    return;
  }

  const callbackId = Date.now() + Math.random() + action;
  MESSAGE_LISTENERS[callbackId] = cb;

  return callbackId;
}


/***/ }),

/***/ "./src/common/state.js":
/*!*****************************!*\
  !*** ./src/common/state.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let STATE = {};

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

const DEFAULT_SEARCH_STRING = { string: '', first: true, focus: true, distance: null };
const DEFAULT_SEARCHES = COLORS.map(initiateSearchOpts);
const DEFAULT_STATE = {
  currentSearchIdx: DEFAULT_SEARCHES[1].currentSearchIdx,
  searches: DEFAULT_SEARCHES,
};

function initiateSearchOpts (v, idx) {
  return {
    searchStrings: [ Object.assign({}, DEFAULT_SEARCH_STRING) ],
    foundResults: 0,
    lastFocused: 0,
    searchHappened: false,
    shownResultNumber: 0,
    color: COLORS[idx],
    currentSearchIdx: idx,
    caseSensitive: false,
  }
}

function isEmpty () {
  return !Object.keys(STATE).length;
}

function addFindings (findings) {
  STATE.searches.forEach((search, i) => {
    const foundResults = findings[i] || 0;
    search.foundResults = foundResults;
    search.searchHappened = foundResults;
  });
}

function setDefault () {
  return STATE = DEFAULT_STATE;
}

function searchesLength () {
  return STATE.searches.length;
}

function getSearch (idx) {
  return STATE.searches[idx];
}

function getCurrentSearch () {
  return STATE.searches[ STATE.currentSearchIdx ];
}

function setCurrentSearch (search) {
  STATE.searches[ search.currentSearchIdx ] = search;
  STATE.currentSearchIdx = search.currentSearchIdx;
}

function resetSearch (idx) {
  STATE.searches[idx] = initiateSearchOpts(COLORS[idx], idx);
}

function resetAllSearches () {
  COLORS.forEach((c, idx) => resetSearch(idx));
}

function saveState (url, state) {
  window.localStorage.setItem(url, JSON.stringify( state || STATE));
}

function loadState (url) {
  return STATE = JSON.parse( window.localStorage.getItem(url) );
}

function updateHighlightState ({ currentSearchIdx, shownResultNumber, url }) {
  const state = loadState(url);
  state.currentSearchIdx = currentSearchIdx;
  state.searches[ currentSearchIdx ].shownResultNumber = shownResultNumber;
  saveState(url, state);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  COLORS,
  isEmpty,
  addFindings,
  setDefault,
  searchesLength,
  getSearch,
  getCurrentSearch,
  setCurrentSearch,
  resetAllSearches,
  resetSearch,
  updateHighlightState,
  saveState,
  loadState
});


/***/ }),

/***/ "./src/messageActions/background.js":
/*!******************************************!*\
  !*** ./src/messageActions/background.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/state */ "./src/common/state.js");


const POPUP_STATE_KEY = 'popupOpen';
const deferedCallbacks = [];

const SCRIPTS_ON_TABS = {};

/* harmony default export */ __webpack_exports__["default"] = ({
  updateHighlightState,
  popupState,
  tabState,
});

function getPopupState () {
  return window.localStorage.getItem(POPUP_STATE_KEY);
}

function setPopupState (state) {
  window.localStorage.setItem(POPUP_STATE_KEY, state);
}

function popupState (state) {
  if (state.open) {
    return setPopupState(1);
  }

  runDeferedCallbacks();
  setPopupState(0);
}

function tabState (tab) {
  if (typeof tab.state !== 'undefined') {
    SCRIPTS_ON_TABS[ tab.id ] = tab.state;
  }

  return { scriptHasRun: SCRIPTS_ON_TABS[ tab.id ] };
}

function updateHighlightState (data) {
  whenPopupClose(() => _common_state__WEBPACK_IMPORTED_MODULE_0__["default"].updateHighlightState(data));
}

function whenPopupClose (cb) {
  if (getPopupState() == 0) {
    cb();
    return;
  }

  deferedCallbacks.push(cb);
}

function runDeferedCallbacks () {
  let callback;
  while ( callback = deferedCallbacks.pop() ) {
    callback();
  }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQtc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vaW50ZXJhY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVzc2FnZUFjdGlvbnMvYmFja2dyb3VuZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFpRDtBQUNDOztBQUVsRCxtREFBbUQscUVBQVMsVUFBVSxrRUFBTzs7Ozs7Ozs7Ozs7OztBQ0g3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRU87QUFDUCw2QkFBNkIsb0NBQW9DO0FBQ2pFOztBQUVPO0FBQ1AsOEJBQThCLGlDQUFpQztBQUMvRDs7QUFFTztBQUNQO0FBQ0EsbUJBQW1COztBQUVuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTyx5Q0FBeUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DLDREQUE0RDtBQUMvRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaERBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLDJDQUEyQztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN6R0Y7QUFBQTtBQUFvQzs7QUFFcEM7QUFDQTs7QUFFQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQSx1QkFBdUIscURBQUs7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2JhY2tncm91bmQtc2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYmFja2dyb3VuZC1zY3JpcHQuanNcIik7XG4iLCJpbXBvcnQgeyBvbk1lc3NhZ2UgfSBmcm9tICcuL2NvbW1vbi9pbnRlcmFjdGlvbic7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4vbWVzc2FnZUFjdGlvbnMvYmFja2dyb3VuZCc7XHJcblxyXG5icm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlKSA9PiBvbk1lc3NhZ2UobWVzc2FnZSwgYWN0aW9ucykpO1xyXG4iLCJjb25zdCBNRVNTQUdFX0xJU1RFTkVSUyA9IHt9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRUYWIgKCkge1xyXG4gIHJldHVybiBicm93c2VyLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kTWVzc2FnZVRvQ3VycmVudFRhYiAoYWN0aW9uLCBwYXlsb2FkLCBjYikge1xyXG4gIHJldHVybiBzZW5kTWVzc2FnZShhY3Rpb24sIHsgdG9DdXJyZW50VGFiOiB0cnVlLCAuLi5wYXlsb2FkIH0sIGNiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRNZXNzYWdlIChhY3Rpb24sIHBheWxvYWQsIGNiKSB7XHJcbiAgY29uc3QgY2FsbGJhY2tJZCA9IHBheWxvYWQuY2FsbGJhY2tJZCB8fCBzYXZlQ2FsbGJhY2soYWN0aW9uLCBjYik7XHJcbiAgY29uc3QgbWVzc2FnZSA9IHsgYWN0aW9uLCBjYWxsYmFja0lkLCAuLi5wYXlsb2FkIH07XHJcblxyXG4gIGlmIChwYXlsb2FkLnRvQ3VycmVudFRhYiA9PT0gdHJ1ZSkge1xyXG4gICAgcmV0dXJuIGdldEN1cnJlbnRUYWIoKS50aGVuKCh0YWIpID0+IGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWJbMF0uaWQsIG1lc3NhZ2UpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobWVzc2FnZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbk1lc3NhZ2UgKG1lc3NhZ2UsIGFjdGlvbnMgPSB7fSkge1xyXG4gIGlmIChtZXNzYWdlLmlzQW5zd2VyKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBNRVNTQUdFX0xJU1RFTkVSU1ttZXNzYWdlLmNhbGxiYWNrSWRdKG1lc3NhZ2UpO1xyXG4gICAgICBkZWxldGUgTUVTU0FHRV9MSVNURU5FUlNbbWVzc2FnZS5jYWxsYmFja0lkXTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBjYXRjaCAoZSkge31cclxuICB9XHJcblxyXG4gIGlmIChhY3Rpb25zW21lc3NhZ2UuYWN0aW9uXSkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYWN0aW9uc1sgbWVzc2FnZS5hY3Rpb24gXShtZXNzYWdlKTtcclxuXHJcbiAgICBpZiAobWVzc2FnZS5jYWxsYmFja0lkKSB7XHJcbiAgICAgIHNlbmRNZXNzYWdlKG1lc3NhZ2UuYWN0aW9uLCB7IGNhbGxiYWNrSWQ6IG1lc3NhZ2UuY2FsbGJhY2tJZCwgaXNBbnN3ZXI6IHRydWUsIC4uLnJlc3VsdCB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVDYWxsYmFjayAoYWN0aW9uLCBjYikge1xyXG4gIGlmICghY2IpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNhbGxiYWNrSWQgPSBEYXRlLm5vdygpICsgTWF0aC5yYW5kb20oKSArIGFjdGlvbjtcclxuICBNRVNTQUdFX0xJU1RFTkVSU1tjYWxsYmFja0lkXSA9IGNiO1xyXG5cclxuICByZXR1cm4gY2FsbGJhY2tJZDtcclxufVxyXG4iLCJsZXQgU1RBVEUgPSB7fTtcclxuXHJcbmNvbnN0IENPTE9SUyA9IFtcclxuICAnMjU1LCAyNTUsIDI1JyxcclxuICAnNjAsIDE4MCwgNzUnLFxyXG4gICcyMzAsIDI1LCA3NScsXHJcbiAgJzAsIDEzMCwgMjAwJyxcclxuICAnMjQ1LCAxMzAsIDQ4JyxcclxuICAnMTQ1LCAzMCwgMTgwJyxcclxuICAnMjQwLCA1MCwgMjMwJyxcclxuICAnMTI4LCAxMjgsIDEyOCcsXHJcbiAgJzIxMCwgMjQ1LCA2MCcsXHJcbiAgJzI1MCwgMTkwLCAxOTAnLFxyXG5dO1xyXG5cclxuY29uc3QgREVGQVVMVF9TRUFSQ0hfU1RSSU5HID0geyBzdHJpbmc6ICcnLCBmaXJzdDogdHJ1ZSwgZm9jdXM6IHRydWUsIGRpc3RhbmNlOiBudWxsIH07XHJcbmNvbnN0IERFRkFVTFRfU0VBUkNIRVMgPSBDT0xPUlMubWFwKGluaXRpYXRlU2VhcmNoT3B0cyk7XHJcbmNvbnN0IERFRkFVTFRfU1RBVEUgPSB7XHJcbiAgY3VycmVudFNlYXJjaElkeDogREVGQVVMVF9TRUFSQ0hFU1sxXS5jdXJyZW50U2VhcmNoSWR4LFxyXG4gIHNlYXJjaGVzOiBERUZBVUxUX1NFQVJDSEVTLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5pdGlhdGVTZWFyY2hPcHRzICh2LCBpZHgpIHtcclxuICByZXR1cm4ge1xyXG4gICAgc2VhcmNoU3RyaW5nczogWyBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX1NFQVJDSF9TVFJJTkcpIF0sXHJcbiAgICBmb3VuZFJlc3VsdHM6IDAsXHJcbiAgICBsYXN0Rm9jdXNlZDogMCxcclxuICAgIHNlYXJjaEhhcHBlbmVkOiBmYWxzZSxcclxuICAgIHNob3duUmVzdWx0TnVtYmVyOiAwLFxyXG4gICAgY29sb3I6IENPTE9SU1tpZHhdLFxyXG4gICAgY3VycmVudFNlYXJjaElkeDogaWR4LFxyXG4gICAgY2FzZVNlbnNpdGl2ZTogZmFsc2UsXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0VtcHR5ICgpIHtcclxuICByZXR1cm4gIU9iamVjdC5rZXlzKFNUQVRFKS5sZW5ndGg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEZpbmRpbmdzIChmaW5kaW5ncykge1xyXG4gIFNUQVRFLnNlYXJjaGVzLmZvckVhY2goKHNlYXJjaCwgaSkgPT4ge1xyXG4gICAgY29uc3QgZm91bmRSZXN1bHRzID0gZmluZGluZ3NbaV0gfHwgMDtcclxuICAgIHNlYXJjaC5mb3VuZFJlc3VsdHMgPSBmb3VuZFJlc3VsdHM7XHJcbiAgICBzZWFyY2guc2VhcmNoSGFwcGVuZWQgPSBmb3VuZFJlc3VsdHM7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERlZmF1bHQgKCkge1xyXG4gIHJldHVybiBTVEFURSA9IERFRkFVTFRfU1RBVEU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaGVzTGVuZ3RoICgpIHtcclxuICByZXR1cm4gU1RBVEUuc2VhcmNoZXMubGVuZ3RoO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTZWFyY2ggKGlkeCkge1xyXG4gIHJldHVybiBTVEFURS5zZWFyY2hlc1tpZHhdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50U2VhcmNoICgpIHtcclxuICByZXR1cm4gU1RBVEUuc2VhcmNoZXNbIFNUQVRFLmN1cnJlbnRTZWFyY2hJZHggXTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q3VycmVudFNlYXJjaCAoc2VhcmNoKSB7XHJcbiAgU1RBVEUuc2VhcmNoZXNbIHNlYXJjaC5jdXJyZW50U2VhcmNoSWR4IF0gPSBzZWFyY2g7XHJcbiAgU1RBVEUuY3VycmVudFNlYXJjaElkeCA9IHNlYXJjaC5jdXJyZW50U2VhcmNoSWR4O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldFNlYXJjaCAoaWR4KSB7XHJcbiAgU1RBVEUuc2VhcmNoZXNbaWR4XSA9IGluaXRpYXRlU2VhcmNoT3B0cyhDT0xPUlNbaWR4XSwgaWR4KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRBbGxTZWFyY2hlcyAoKSB7XHJcbiAgQ09MT1JTLmZvckVhY2goKGMsIGlkeCkgPT4gcmVzZXRTZWFyY2goaWR4KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVTdGF0ZSAodXJsLCBzdGF0ZSkge1xyXG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh1cmwsIEpTT04uc3RyaW5naWZ5KCBzdGF0ZSB8fCBTVEFURSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkU3RhdGUgKHVybCkge1xyXG4gIHJldHVybiBTVEFURSA9IEpTT04ucGFyc2UoIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh1cmwpICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUhpZ2hsaWdodFN0YXRlICh7IGN1cnJlbnRTZWFyY2hJZHgsIHNob3duUmVzdWx0TnVtYmVyLCB1cmwgfSkge1xyXG4gIGNvbnN0IHN0YXRlID0gbG9hZFN0YXRlKHVybCk7XHJcbiAgc3RhdGUuY3VycmVudFNlYXJjaElkeCA9IGN1cnJlbnRTZWFyY2hJZHg7XHJcbiAgc3RhdGUuc2VhcmNoZXNbIGN1cnJlbnRTZWFyY2hJZHggXS5zaG93blJlc3VsdE51bWJlciA9IHNob3duUmVzdWx0TnVtYmVyO1xyXG4gIHNhdmVTdGF0ZSh1cmwsIHN0YXRlKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIENPTE9SUyxcclxuICBpc0VtcHR5LFxyXG4gIGFkZEZpbmRpbmdzLFxyXG4gIHNldERlZmF1bHQsXHJcbiAgc2VhcmNoZXNMZW5ndGgsXHJcbiAgZ2V0U2VhcmNoLFxyXG4gIGdldEN1cnJlbnRTZWFyY2gsXHJcbiAgc2V0Q3VycmVudFNlYXJjaCxcclxuICByZXNldEFsbFNlYXJjaGVzLFxyXG4gIHJlc2V0U2VhcmNoLFxyXG4gIHVwZGF0ZUhpZ2hsaWdodFN0YXRlLFxyXG4gIHNhdmVTdGF0ZSxcclxuICBsb2FkU3RhdGVcclxufTtcclxuIiwiaW1wb3J0IFN0YXRlIGZyb20gJy4uL2NvbW1vbi9zdGF0ZSc7XHJcblxyXG5jb25zdCBQT1BVUF9TVEFURV9LRVkgPSAncG9wdXBPcGVuJztcclxuY29uc3QgZGVmZXJlZENhbGxiYWNrcyA9IFtdO1xyXG5cclxuY29uc3QgU0NSSVBUU19PTl9UQUJTID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgdXBkYXRlSGlnaGxpZ2h0U3RhdGUsXHJcbiAgcG9wdXBTdGF0ZSxcclxuICB0YWJTdGF0ZSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldFBvcHVwU3RhdGUgKCkge1xyXG4gIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oUE9QVVBfU1RBVEVfS0VZKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0UG9wdXBTdGF0ZSAoc3RhdGUpIHtcclxuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oUE9QVVBfU1RBVEVfS0VZLCBzdGF0ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVwU3RhdGUgKHN0YXRlKSB7XHJcbiAgaWYgKHN0YXRlLm9wZW4pIHtcclxuICAgIHJldHVybiBzZXRQb3B1cFN0YXRlKDEpO1xyXG4gIH1cclxuXHJcbiAgcnVuRGVmZXJlZENhbGxiYWNrcygpO1xyXG4gIHNldFBvcHVwU3RhdGUoMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRhYlN0YXRlICh0YWIpIHtcclxuICBpZiAodHlwZW9mIHRhYi5zdGF0ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIFNDUklQVFNfT05fVEFCU1sgdGFiLmlkIF0gPSB0YWIuc3RhdGU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBzY3JpcHRIYXNSdW46IFNDUklQVFNfT05fVEFCU1sgdGFiLmlkIF0gfTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlSGlnaGxpZ2h0U3RhdGUgKGRhdGEpIHtcclxuICB3aGVuUG9wdXBDbG9zZSgoKSA9PiBTdGF0ZS51cGRhdGVIaWdobGlnaHRTdGF0ZShkYXRhKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdoZW5Qb3B1cENsb3NlIChjYikge1xyXG4gIGlmIChnZXRQb3B1cFN0YXRlKCkgPT0gMCkge1xyXG4gICAgY2IoKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGRlZmVyZWRDYWxsYmFja3MucHVzaChjYik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJ1bkRlZmVyZWRDYWxsYmFja3MgKCkge1xyXG4gIGxldCBjYWxsYmFjaztcclxuICB3aGlsZSAoIGNhbGxiYWNrID0gZGVmZXJlZENhbGxiYWNrcy5wb3AoKSApIHtcclxuICAgIGNhbGxiYWNrKCk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=