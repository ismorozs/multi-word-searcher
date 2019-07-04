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

/***/ "./src/actions/background.js":
/*!***********************************!*\
  !*** ./src/actions/background.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_interaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/interaction */ "./src/common/interaction.js");


const POPUP_STATE_ON_TABS = {};

/* harmony default export */ __webpack_exports__["default"] = ({
  find,
  closingTab,
  closingPopup,
  sendMessageToCurrentTab,
});

async function find ({ string, caseSensitive }) {
  const foundResults = await browser.find.find(string, { includeRangeData: true, caseSensitive });
  return { foundResults };
}

function closingTab (data) {
  POPUP_STATE_ON_TABS[ data.tabId ] = undefined;
}

function closingPopup (data) {
  POPUP_STATE_ON_TABS[ data.tabId ] = false;
}

function sendMessageToCurrentTab () {
  Object(_common_interaction__WEBPACK_IMPORTED_MODULE_0__["getCurrentTab"])()
    .then((tab) => {
      const id = tab[0].id;
      const popupState = POPUP_STATE_ON_TABS[id];

      if (typeof popupState === 'undefined') {
        initializePopup(id);
        return;
      }

      switchPopup(id, popupState);
    });
}

function initializePopup (tabId) {
  browser.tabs.executeScript({ file: '/page-script.js' })
    .then(() => Object(_common_interaction__WEBPACK_IMPORTED_MODULE_0__["sendMessage"])('saveTabId', { tabId }))
    .then(() => POPUP_STATE_ON_TABS[tabId] = true)
}

function switchPopup (tabId, currentState) {
  Object(_common_interaction__WEBPACK_IMPORTED_MODULE_0__["sendMessage"])('popupState', { open: !currentState }, () => POPUP_STATE_ON_TABS[ tabId ] = !currentState);
}


/***/ }),

/***/ "./src/background-script.js":
/*!**********************************!*\
  !*** ./src/background-script.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_interaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/interaction */ "./src/common/interaction.js");
/* harmony import */ var _actions_background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions/background */ "./src/actions/background.js");



window.__IS_BACKGROUND_SCRIPT__ = true;

browser.runtime.onMessage.addListener((message) => Object(_common_interaction__WEBPACK_IMPORTED_MODULE_0__["onMessage"])(message, _actions_background__WEBPACK_IMPORTED_MODULE_1__["default"]));

browser.browserAction.onClicked.addListener(_actions_background__WEBPACK_IMPORTED_MODULE_1__["default"].sendMessageToCurrentTab);

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
const MESSAGE_LISTENERS = {};

function getCurrentTab () {
  return browser.tabs.query({ active: true, currentWindow: true });
}

function sendMessage (action, payload, cb) {
  const callbackId = payload.callbackId || saveCallback(action, cb);
  const message = { action, callbackId, ...payload };

  if (window.__IS_BACKGROUND_SCRIPT__) {
    return getCurrentTab().then((tab) => browser.tabs.sendMessage(tab[0].id, message));
  }

  return browser.runtime.sendMessage(message);
}

async function onMessage (message, actions = {}) {
  if (message.isAnswer) {
    MESSAGE_LISTENERS[message.callbackId](message);
    delete MESSAGE_LISTENERS[message.callbackId];
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
  if (!cb) {
    return;
  }

  const callbackId = Date.now() + Math.random() + action;
  MESSAGE_LISTENERS[callbackId] = cb;

  return callbackId;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC1zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pbnRlcmFjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBbUU7O0FBRW5FOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7O0FBRUYsc0JBQXNCLHdCQUF3QjtBQUM5Qyx3REFBd0Qsd0NBQXdDO0FBQ2hHLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSx5RUFBYTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLDhCQUE4QiwwQkFBMEI7QUFDeEQsZ0JBQWdCLHVFQUFXLGVBQWUsUUFBUTtBQUNsRDtBQUNBOztBQUVBO0FBQ0EsRUFBRSx1RUFBVyxnQkFBZ0Isc0JBQXNCO0FBQ25EOzs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQUE7QUFBQTtBQUFpRDtBQUNOOztBQUUzQzs7QUFFQSxtREFBbUQscUVBQVMsVUFBVSwyREFBTzs7QUFFN0UsNENBQTRDLDJEQUFPLDBCOzs7Ozs7Ozs7Ozs7QUNQbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFTztBQUNQLDZCQUE2QixvQ0FBb0M7QUFDakU7O0FBRU87QUFDUDtBQUNBLG1CQUFtQjs7QUFFbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU8sK0NBQStDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyw0REFBNEQ7QUFDL0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiJiYWNrZ3JvdW5kLXNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2JhY2tncm91bmQtc2NyaXB0LmpzXCIpO1xuIiwiaW1wb3J0IHsgZ2V0Q3VycmVudFRhYiwgc2VuZE1lc3NhZ2UgfSBmcm9tICcuLi9jb21tb24vaW50ZXJhY3Rpb24nO1xyXG5cclxuY29uc3QgUE9QVVBfU1RBVEVfT05fVEFCUyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGZpbmQsXHJcbiAgY2xvc2luZ1RhYixcclxuICBjbG9zaW5nUG9wdXAsXHJcbiAgc2VuZE1lc3NhZ2VUb0N1cnJlbnRUYWIsXHJcbn07XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmaW5kICh7IHN0cmluZywgY2FzZVNlbnNpdGl2ZSB9KSB7XHJcbiAgY29uc3QgZm91bmRSZXN1bHRzID0gYXdhaXQgYnJvd3Nlci5maW5kLmZpbmQoc3RyaW5nLCB7IGluY2x1ZGVSYW5nZURhdGE6IHRydWUsIGNhc2VTZW5zaXRpdmUgfSk7XHJcbiAgcmV0dXJuIHsgZm91bmRSZXN1bHRzIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NpbmdUYWIgKGRhdGEpIHtcclxuICBQT1BVUF9TVEFURV9PTl9UQUJTWyBkYXRhLnRhYklkIF0gPSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NpbmdQb3B1cCAoZGF0YSkge1xyXG4gIFBPUFVQX1NUQVRFX09OX1RBQlNbIGRhdGEudGFiSWQgXSA9IGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kTWVzc2FnZVRvQ3VycmVudFRhYiAoKSB7XHJcbiAgZ2V0Q3VycmVudFRhYigpXHJcbiAgICAudGhlbigodGFiKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlkID0gdGFiWzBdLmlkO1xyXG4gICAgICBjb25zdCBwb3B1cFN0YXRlID0gUE9QVVBfU1RBVEVfT05fVEFCU1tpZF07XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHBvcHVwU3RhdGUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgaW5pdGlhbGl6ZVBvcHVwKGlkKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN3aXRjaFBvcHVwKGlkLCBwb3B1cFN0YXRlKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplUG9wdXAgKHRhYklkKSB7XHJcbiAgYnJvd3Nlci50YWJzLmV4ZWN1dGVTY3JpcHQoeyBmaWxlOiAnL3BhZ2Utc2NyaXB0LmpzJyB9KVxyXG4gICAgLnRoZW4oKCkgPT4gc2VuZE1lc3NhZ2UoJ3NhdmVUYWJJZCcsIHsgdGFiSWQgfSkpXHJcbiAgICAudGhlbigoKSA9PiBQT1BVUF9TVEFURV9PTl9UQUJTW3RhYklkXSA9IHRydWUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN3aXRjaFBvcHVwICh0YWJJZCwgY3VycmVudFN0YXRlKSB7XHJcbiAgc2VuZE1lc3NhZ2UoJ3BvcHVwU3RhdGUnLCB7IG9wZW46ICFjdXJyZW50U3RhdGUgfSwgKCkgPT4gUE9QVVBfU1RBVEVfT05fVEFCU1sgdGFiSWQgXSA9ICFjdXJyZW50U3RhdGUpO1xyXG59XHJcbiIsImltcG9ydCB7IG9uTWVzc2FnZSB9IGZyb20gJy4vY29tbW9uL2ludGVyYWN0aW9uJztcclxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zL2JhY2tncm91bmQnO1xyXG5cclxud2luZG93Ll9fSVNfQkFDS0dST1VORF9TQ1JJUFRfXyA9IHRydWU7XHJcblxyXG5icm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlKSA9PiBvbk1lc3NhZ2UobWVzc2FnZSwgYWN0aW9ucykpO1xyXG5cclxuYnJvd3Nlci5icm93c2VyQWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcihhY3Rpb25zLnNlbmRNZXNzYWdlVG9DdXJyZW50VGFiKTsiLCJjb25zdCBNRVNTQUdFX0xJU1RFTkVSUyA9IHt9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRUYWIgKCkge1xyXG4gIHJldHVybiBicm93c2VyLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kTWVzc2FnZSAoYWN0aW9uLCBwYXlsb2FkLCBjYikge1xyXG4gIGNvbnN0IGNhbGxiYWNrSWQgPSBwYXlsb2FkLmNhbGxiYWNrSWQgfHwgc2F2ZUNhbGxiYWNrKGFjdGlvbiwgY2IpO1xyXG4gIGNvbnN0IG1lc3NhZ2UgPSB7IGFjdGlvbiwgY2FsbGJhY2tJZCwgLi4ucGF5bG9hZCB9O1xyXG5cclxuICBpZiAod2luZG93Ll9fSVNfQkFDS0dST1VORF9TQ1JJUFRfXykge1xyXG4gICAgcmV0dXJuIGdldEN1cnJlbnRUYWIoKS50aGVuKCh0YWIpID0+IGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWJbMF0uaWQsIG1lc3NhZ2UpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobWVzc2FnZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBvbk1lc3NhZ2UgKG1lc3NhZ2UsIGFjdGlvbnMgPSB7fSkge1xyXG4gIGlmIChtZXNzYWdlLmlzQW5zd2VyKSB7XHJcbiAgICBNRVNTQUdFX0xJU1RFTkVSU1ttZXNzYWdlLmNhbGxiYWNrSWRdKG1lc3NhZ2UpO1xyXG4gICAgZGVsZXRlIE1FU1NBR0VfTElTVEVORVJTW21lc3NhZ2UuY2FsbGJhY2tJZF07XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoYWN0aW9uc1ttZXNzYWdlLmFjdGlvbl0pIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFjdGlvbnNbIG1lc3NhZ2UuYWN0aW9uIF0obWVzc2FnZSk7XHJcbiAgICBcclxuICAgIGlmIChtZXNzYWdlLmNhbGxiYWNrSWQpIHtcclxuICAgICAgc2VuZE1lc3NhZ2UobWVzc2FnZS5hY3Rpb24sIHsgY2FsbGJhY2tJZDogbWVzc2FnZS5jYWxsYmFja0lkLCBpc0Fuc3dlcjogdHJ1ZSwgLi4ucmVzdWx0IH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZUNhbGxiYWNrIChhY3Rpb24sIGNiKSB7XHJcbiAgaWYgKCFjYikge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2FsbGJhY2tJZCA9IERhdGUubm93KCkgKyBNYXRoLnJhbmRvbSgpICsgYWN0aW9uO1xyXG4gIE1FU1NBR0VfTElTVEVORVJTW2NhbGxiYWNrSWRdID0gY2I7XHJcblxyXG4gIHJldHVybiBjYWxsYmFja0lkO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=