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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/page-script.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./src/messageActions/page.js":
/*!************************************!*\
  !*** ./src/messageActions/page.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const uniqueClassPrefix = browser.runtime.id.replace(/[{}@]/g, '');
const uniqueExtensionClass = 'multi-string-search-extension-' + uniqueClassPrefix;
const findHelperClass = uniqueExtensionClass + '-find-helper';

const HIGHLIGHTINGS_POSITIONS = [];

/* harmony default export */ __webpack_exports__["default"] = ({
  setupContentPage,
  refineFindings,
  moveToHighlighting,
  removeHighlightings,
  fetchPreviouslyFound,
  addBlinkerToHighlightings,
  removeBlinkerFromHighlightings,

  // TEMPORARY BUG FIXES
  FIND_API_INPUT_BUG_FIX_BEFORE,
  FIND_API_INPUT_BUG_FIX_AFTER,
});

function setupContentPage (data) {
  addExtensionStyles(data);
}

function addExtensionStyles (data) {
  const styleStr = data.colors.map((color, idx) => `
    @keyframes ${findHelperClass}${idx} {
      0% {
        outline-color: rgba(${color}, 1);
      }

      100% {
        outline-color: rgba(${color}, 0);
      }
    }

    .${findHelperClass}${idx} {
      animation-name: '${findHelperClass}${idx}';
      outline-style: solid;
      animation-duration: 1.3s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  `).join('');

  const styleEl = document.createElement('style');
  styleEl.appendChild( document.createTextNode(styleStr) );
  document.head.appendChild(styleEl);
}

function refineFindings (data) {
  const searchId = data.searchId;

  const allTextNodes = getAllTextNodes();
  const finalRanges = filterRanges(data.firstFoundPart, data.searchRefinements, data.caseSensitive, allTextNodes);

  removeHighlightings(data);

  HIGHLIGHTINGS_POSITIONS[searchId] = [];

  addHighlightingsToElements(finalRanges, data);

  return { foundResults: finalRanges.length };
}

function getAllTextNodes () {
  const allTextNodes = [];
  const walker = document.createTreeWalker(document, window.NodeFilter.SHOW_TEXT, null, false);
  let node;
  while(node = walker.nextNode()) {
    allTextNodes.push(node);
  }
  return allTextNodes;
}

function filterRanges (firstFoundPart, searchRefinements, caseSensitive, allTextNodes) {
  const finalRanges = [];
  firstFoundPart.rangeData.forEach((rangeOpts) => {

    let endNodePos = rangeOpts.endTextNodePos;
    let endNode = allTextNodes[rangeOpts.endTextNodePos];
    let endOffset = rangeOpts.endOffset;

    for (let i = 0; i < searchRefinements.length; i++) {
      const refinement = searchRefinements[i];

      let nextNode = endNode;
      const searchDistance = +refinement.distance + refinement.string.length;
      let remainingSearchDistance = searchDistance + endOffset;
      let nextOffset = remainingSearchDistance;
      let success = false;
      let prevNodesLength = 0;

      do {

        let nodeValueLength = nextNode.nodeValue.length;
        if (nextOffset > nodeValueLength) {
          nextOffset = nodeValueLength;
        }

        const matchPos = isStringInRange(
          endNode, endOffset,
          nextNode, nextOffset,
          refinement.string,
          caseSensitive,
        );

        if (matchPos >= 0) {
          success = true;
          endNode = nextNode;
          endOffset = endOffset + matchPos - prevNodesLength + refinement.string.length;
          break;
        }

        remainingSearchDistance = remainingSearchDistance - nodeValueLength;
        nextOffset = remainingSearchDistance;
        prevNodesLength += nodeValueLength;
        nextNode = allTextNodes[++endNodePos];

      } while ( remainingSearchDistance > 0 && !success && nextNode )

      if (!success) {
        return;
      }
    }

    try {
      const startNode = allTextNodes[rangeOpts.startTextNodePos];
      const range = new Range();
      range.setStart(startNode, rangeOpts.startOffset);
      range.setEnd(endNode, endOffset);

      finalRanges.push(range);
    } catch (e) {}
  });

  return finalRanges;
}

function isStringInRange(startNode, startOffset, endNode, endOffset, string, caseSensitive) {
  const range = new Range();
  range.setStart(startNode, startOffset);
  range.setEnd(endNode,  endOffset);
  let rangeText = range.toString();

  if (!caseSensitive) {
    string = string.toLowerCase();
    rangeText = rangeText.toLowerCase();
  }

  const matchPos = rangeText.indexOf(string);
  return matchPos;
}

function addHighlightingsToElements (ranges, data) {
  const doc = document.documentElement;
  const scrollLeft = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  const scrollTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

  ranges.forEach((range, rangeIdx) => {
    const boundingRects = range.getClientRects();
    const highlightData = { els: [] };

    for (let i = 0; i < boundingRects.length; i++) {
      const rect = boundingRects[i];

      const highlightElement = createHightlightElement(rect, scrollTop, scrollLeft, data);
      document.body.appendChild(highlightElement);

      highlightData.els.push(highlightElement);
    }

    const topPosition = scrollTop + boundingRects[0].top;

    highlightData.top = topPosition;
    highlightData.left = scrollLeft + boundingRects[0].left;

    const scrollBarMark = createScrollbarMark(topPosition, data, rangeIdx);
    document.body.appendChild(scrollBarMark);

    HIGHLIGHTINGS_POSITIONS[data.searchId].push(highlightData);
  });
}

function createHightlightElement (rect, scrollTop, scrollLeft, data) {
  const highlightElement = createElement('span', {
    position: 'absolute',
    height: rect.height + 'px',
    width: rect.width + 'px',
    top: scrollTop + rect.y + 'px',
    left: scrollLeft + rect.x + 'px',
    'z-index': 2147483647,
    'pointer-events': 'none',
    background: 'rgba(' +  data.highlightColor + ', 0.25)',
    'outline-width': '3px',
  });

  highlightElement.classList.add(uniqueExtensionClass + data.searchId);

  return highlightElement;
}

function createScrollbarMark (topPosition, data, rangeIdx) {
  const scrollBarMark = createElement('span', {
    position: 'fixed',
    height: '5px',
    width: '15px',
    top: window.innerHeight / document.body.scrollHeight * topPosition + 'px',
    right: '0px',
    'z-index': 2147483647,
    cursor: 'pointer',
    background: 'rgba(' +  data.highlightColor + ', 0.5)',
  });

  scrollBarMark.title = data.searchString;
  scrollBarMark.onclick = () => {
    moveToHighlighting({ searchId: data.searchId, id: rangeIdx });
    updateHighlightState(data.searchId, rangeIdx + 1);
  };
  scrollBarMark.classList.add(uniqueExtensionClass + data.searchId);

  return scrollBarMark;
}

function updateHighlightState (currentSearchIdx, shownResultNumber, url) {
  browser.runtime.sendMessage({ action: 'updateHighlightState', senderId: browser.runtime.id, currentSearchIdx, shownResultNumber, url: window.location.href });
}

function createElement (type, styles) {
  const el = document.createElement(type);

  for (let attr in styles) {
    el.style.setProperty(attr, styles[attr], 'important');
  }

  return el;
}

function moveToHighlighting (data) {
  const highlightPosition = HIGHLIGHTINGS_POSITIONS[data.searchId][data.id];
  const centerHeight = window.innerHeight / 2;
  const centerWidth = window.innerWidth / 2;
  window.scrollTo(
    highlightPosition.left - centerWidth,
    highlightPosition.top - centerHeight
  );
}

function removeHighlightings (data) {
  document.querySelectorAll('.' + uniqueExtensionClass + data.searchId)
    .forEach((el) => el.parentNode.removeChild(el));

  delete HIGHLIGHTINGS_POSITIONS[data.searchId];
}

function addBlinkerToHighlightings (data) {
  HIGHLIGHTINGS_POSITIONS[data.searchId]
    .forEach((highlightData) => highlightData.els
      .forEach((el) => el.classList.add(`${findHelperClass}${data.searchId}`)));
}

function removeBlinkerFromHighlightings (data) {
  HIGHLIGHTINGS_POSITIONS[data.searchId]
    .forEach((highlightData) => highlightData.els
      .forEach((el) => el.classList.remove(`${findHelperClass}${data.searchId}`)));
}

function fetchPreviouslyFound (data) {
  return HIGHLIGHTINGS_POSITIONS.map((found) => found.length);
}

/**********************************************************************

  TEMPORARY FIX FOR FINDING STRINGS THAT ARE ENTERED IN INPUTS

***********************************************************************/

function FIND_API_INPUT_BUG_FIX_BEFORE () {
  window.inputValues = [];
  document.querySelectorAll('input').forEach((input) => {
    inputValues.push(input.value);
    input.value = '';
  });
}

function FIND_API_INPUT_BUG_FIX_AFTER () {
  document.querySelectorAll('input').forEach((input, i) => {
    input.value = window.inputValues[i];
  });
}



/***/ }),

/***/ "./src/page-script.js":
/*!****************************!*\
  !*** ./src/page-script.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_interaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/interaction */ "./src/common/interaction.js");
/* harmony import */ var _messageActions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messageActions/page */ "./src/messageActions/page.js");



let tabId;
_messageActions_page__WEBPACK_IMPORTED_MODULE_1__["default"].saveTabId = (message) => tabId = message.tabId;

browser.runtime.onMessage.addListener((message) => Object(_common_interaction__WEBPACK_IMPORTED_MODULE_0__["onMessage"])(message, _messageActions_page__WEBPACK_IMPORTED_MODULE_1__["default"]));

window.onunload = function () { Object(_common_interaction__WEBPACK_IMPORTED_MODULE_0__["sendMessage"])('tab', { id: tabId, state: false }) }

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pbnRlcmFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVzc2FnZUFjdGlvbnMvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS1zY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRU87QUFDUCw2QkFBNkIsb0NBQW9DO0FBQ2pFOztBQUVPO0FBQ1AsOEJBQThCLGlDQUFpQztBQUMvRDs7QUFFTztBQUNQO0FBQ0EsbUJBQW1COztBQUVuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTyx5Q0FBeUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DLDREQUE0RDtBQUMvRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaERBO0FBQUEseURBQXlEO0FBQ3pEO0FBQ0E7O0FBRUE7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCLEVBQUUsSUFBSTtBQUN2QztBQUNBLDhCQUE4QixNQUFNO0FBQ3BDOztBQUVBO0FBQ0EsOEJBQThCLE1BQU07QUFDcEM7QUFDQTs7QUFFQSxPQUFPLGdCQUFnQixFQUFFLElBQUk7QUFDN0IseUJBQXlCLGdCQUFnQixFQUFFLElBQUk7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDhCQUE4QjtBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCLG1CQUFtQiwwQkFBMEI7QUFDN0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0Esd0JBQXdCLHdDQUF3QztBQUNoRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLCtCQUErQiwrSEFBK0g7QUFDOUo7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGdCQUFnQixFQUFFLGNBQWM7QUFDM0U7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGdCQUFnQixFQUFFLGNBQWM7QUFDOUU7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7OztBQ2pTQTtBQUFBO0FBQUE7QUFBOEQ7QUFDbEI7O0FBRTVDO0FBQ0EsNERBQU87O0FBRVAsbURBQW1ELHFFQUFTLFVBQVUsNERBQU87O0FBRTdFLCtCQUErQixDQUFDLHVFQUFXLFNBQVMsMEJBQTBCLEciLCJmaWxlIjoiLi9wYWdlLXNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2Utc2NyaXB0LmpzXCIpO1xuIiwiY29uc3QgTUVTU0FHRV9MSVNURU5FUlMgPSB7fTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VGFiICgpIHtcclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VuZE1lc3NhZ2VUb0N1cnJlbnRUYWIgKGFjdGlvbiwgcGF5bG9hZCwgY2IpIHtcclxuICByZXR1cm4gc2VuZE1lc3NhZ2UoYWN0aW9uLCB7IHRvQ3VycmVudFRhYjogdHJ1ZSwgLi4ucGF5bG9hZCB9LCBjYik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kTWVzc2FnZSAoYWN0aW9uLCBwYXlsb2FkLCBjYikge1xyXG4gIGNvbnN0IGNhbGxiYWNrSWQgPSBwYXlsb2FkLmNhbGxiYWNrSWQgfHwgc2F2ZUNhbGxiYWNrKGFjdGlvbiwgY2IpO1xyXG4gIGNvbnN0IG1lc3NhZ2UgPSB7IGFjdGlvbiwgY2FsbGJhY2tJZCwgLi4ucGF5bG9hZCB9O1xyXG5cclxuICBpZiAocGF5bG9hZC50b0N1cnJlbnRUYWIgPT09IHRydWUpIHtcclxuICAgIHJldHVybiBnZXRDdXJyZW50VGFiKCkudGhlbigodGFiKSA9PiBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiWzBdLmlkLCBtZXNzYWdlKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKG1lc3NhZ2UpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25NZXNzYWdlIChtZXNzYWdlLCBhY3Rpb25zID0ge30pIHtcclxuICBpZiAobWVzc2FnZS5pc0Fuc3dlcikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgTUVTU0FHRV9MSVNURU5FUlNbbWVzc2FnZS5jYWxsYmFja0lkXShtZXNzYWdlKTtcclxuICAgICAgZGVsZXRlIE1FU1NBR0VfTElTVEVORVJTW21lc3NhZ2UuY2FsbGJhY2tJZF07XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgfVxyXG5cclxuICBpZiAoYWN0aW9uc1ttZXNzYWdlLmFjdGlvbl0pIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGFjdGlvbnNbIG1lc3NhZ2UuYWN0aW9uIF0obWVzc2FnZSk7XHJcblxyXG4gICAgaWYgKG1lc3NhZ2UuY2FsbGJhY2tJZCkge1xyXG4gICAgICBzZW5kTWVzc2FnZShtZXNzYWdlLmFjdGlvbiwgeyBjYWxsYmFja0lkOiBtZXNzYWdlLmNhbGxiYWNrSWQsIGlzQW5zd2VyOiB0cnVlLCAuLi5yZXN1bHQgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlQ2FsbGJhY2sgKGFjdGlvbiwgY2IpIHtcclxuICBpZiAoIWNiKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBjYWxsYmFja0lkID0gRGF0ZS5ub3coKSArIE1hdGgucmFuZG9tKCkgKyBhY3Rpb247XHJcbiAgTUVTU0FHRV9MSVNURU5FUlNbY2FsbGJhY2tJZF0gPSBjYjtcclxuXHJcbiAgcmV0dXJuIGNhbGxiYWNrSWQ7XHJcbn1cclxuIiwiY29uc3QgdW5pcXVlQ2xhc3NQcmVmaXggPSBicm93c2VyLnJ1bnRpbWUuaWQucmVwbGFjZSgvW3t9QF0vZywgJycpO1xyXG5jb25zdCB1bmlxdWVFeHRlbnNpb25DbGFzcyA9ICdtdWx0aS1zdHJpbmctc2VhcmNoLWV4dGVuc2lvbi0nICsgdW5pcXVlQ2xhc3NQcmVmaXg7XHJcbmNvbnN0IGZpbmRIZWxwZXJDbGFzcyA9IHVuaXF1ZUV4dGVuc2lvbkNsYXNzICsgJy1maW5kLWhlbHBlcic7XHJcblxyXG5jb25zdCBISUdITElHSFRJTkdTX1BPU0lUSU9OUyA9IFtdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHNldHVwQ29udGVudFBhZ2UsXHJcbiAgcmVmaW5lRmluZGluZ3MsXHJcbiAgbW92ZVRvSGlnaGxpZ2h0aW5nLFxyXG4gIHJlbW92ZUhpZ2hsaWdodGluZ3MsXHJcbiAgZmV0Y2hQcmV2aW91c2x5Rm91bmQsXHJcbiAgYWRkQmxpbmtlclRvSGlnaGxpZ2h0aW5ncyxcclxuICByZW1vdmVCbGlua2VyRnJvbUhpZ2hsaWdodGluZ3MsXHJcblxyXG4gIC8vIFRFTVBPUkFSWSBCVUcgRklYRVNcclxuICBGSU5EX0FQSV9JTlBVVF9CVUdfRklYX0JFRk9SRSxcclxuICBGSU5EX0FQSV9JTlBVVF9CVUdfRklYX0FGVEVSLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2V0dXBDb250ZW50UGFnZSAoZGF0YSkge1xyXG4gIGFkZEV4dGVuc2lvblN0eWxlcyhkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkRXh0ZW5zaW9uU3R5bGVzIChkYXRhKSB7XHJcbiAgY29uc3Qgc3R5bGVTdHIgPSBkYXRhLmNvbG9ycy5tYXAoKGNvbG9yLCBpZHgpID0+IGBcclxuICAgIEBrZXlmcmFtZXMgJHtmaW5kSGVscGVyQ2xhc3N9JHtpZHh9IHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIG91dGxpbmUtY29sb3I6IHJnYmEoJHtjb2xvcn0sIDEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICBvdXRsaW5lLWNvbG9yOiByZ2JhKCR7Y29sb3J9LCAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC4ke2ZpbmRIZWxwZXJDbGFzc30ke2lkeH0ge1xyXG4gICAgICBhbmltYXRpb24tbmFtZTogJyR7ZmluZEhlbHBlckNsYXNzfSR7aWR4fSc7XHJcbiAgICAgIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xyXG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDEuM3M7XHJcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgYCkuam9pbignJyk7XHJcblxyXG4gIGNvbnN0IHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gIHN0eWxlRWwuYXBwZW5kQ2hpbGQoIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0eWxlU3RyKSApO1xyXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZmluZUZpbmRpbmdzIChkYXRhKSB7XHJcbiAgY29uc3Qgc2VhcmNoSWQgPSBkYXRhLnNlYXJjaElkO1xyXG5cclxuICBjb25zdCBhbGxUZXh0Tm9kZXMgPSBnZXRBbGxUZXh0Tm9kZXMoKTtcclxuICBjb25zdCBmaW5hbFJhbmdlcyA9IGZpbHRlclJhbmdlcyhkYXRhLmZpcnN0Rm91bmRQYXJ0LCBkYXRhLnNlYXJjaFJlZmluZW1lbnRzLCBkYXRhLmNhc2VTZW5zaXRpdmUsIGFsbFRleHROb2Rlcyk7XHJcblxyXG4gIHJlbW92ZUhpZ2hsaWdodGluZ3MoZGF0YSk7XHJcblxyXG4gIEhJR0hMSUdIVElOR1NfUE9TSVRJT05TW3NlYXJjaElkXSA9IFtdO1xyXG5cclxuICBhZGRIaWdobGlnaHRpbmdzVG9FbGVtZW50cyhmaW5hbFJhbmdlcywgZGF0YSk7XHJcblxyXG4gIHJldHVybiB7IGZvdW5kUmVzdWx0czogZmluYWxSYW5nZXMubGVuZ3RoIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFsbFRleHROb2RlcyAoKSB7XHJcbiAgY29uc3QgYWxsVGV4dE5vZGVzID0gW107XHJcbiAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihkb2N1bWVudCwgd2luZG93Lk5vZGVGaWx0ZXIuU0hPV19URVhULCBudWxsLCBmYWxzZSk7XHJcbiAgbGV0IG5vZGU7XHJcbiAgd2hpbGUobm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpKSB7XHJcbiAgICBhbGxUZXh0Tm9kZXMucHVzaChub2RlKTtcclxuICB9XHJcbiAgcmV0dXJuIGFsbFRleHROb2RlcztcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyUmFuZ2VzIChmaXJzdEZvdW5kUGFydCwgc2VhcmNoUmVmaW5lbWVudHMsIGNhc2VTZW5zaXRpdmUsIGFsbFRleHROb2Rlcykge1xyXG4gIGNvbnN0IGZpbmFsUmFuZ2VzID0gW107XHJcbiAgZmlyc3RGb3VuZFBhcnQucmFuZ2VEYXRhLmZvckVhY2goKHJhbmdlT3B0cykgPT4ge1xyXG5cclxuICAgIGxldCBlbmROb2RlUG9zID0gcmFuZ2VPcHRzLmVuZFRleHROb2RlUG9zO1xyXG4gICAgbGV0IGVuZE5vZGUgPSBhbGxUZXh0Tm9kZXNbcmFuZ2VPcHRzLmVuZFRleHROb2RlUG9zXTtcclxuICAgIGxldCBlbmRPZmZzZXQgPSByYW5nZU9wdHMuZW5kT2Zmc2V0O1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VhcmNoUmVmaW5lbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcmVmaW5lbWVudCA9IHNlYXJjaFJlZmluZW1lbnRzW2ldO1xyXG5cclxuICAgICAgbGV0IG5leHROb2RlID0gZW5kTm9kZTtcclxuICAgICAgY29uc3Qgc2VhcmNoRGlzdGFuY2UgPSArcmVmaW5lbWVudC5kaXN0YW5jZSArIHJlZmluZW1lbnQuc3RyaW5nLmxlbmd0aDtcclxuICAgICAgbGV0IHJlbWFpbmluZ1NlYXJjaERpc3RhbmNlID0gc2VhcmNoRGlzdGFuY2UgKyBlbmRPZmZzZXQ7XHJcbiAgICAgIGxldCBuZXh0T2Zmc2V0ID0gcmVtYWluaW5nU2VhcmNoRGlzdGFuY2U7XHJcbiAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XHJcbiAgICAgIGxldCBwcmV2Tm9kZXNMZW5ndGggPSAwO1xyXG5cclxuICAgICAgZG8ge1xyXG5cclxuICAgICAgICBsZXQgbm9kZVZhbHVlTGVuZ3RoID0gbmV4dE5vZGUubm9kZVZhbHVlLmxlbmd0aDtcclxuICAgICAgICBpZiAobmV4dE9mZnNldCA+IG5vZGVWYWx1ZUxlbmd0aCkge1xyXG4gICAgICAgICAgbmV4dE9mZnNldCA9IG5vZGVWYWx1ZUxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1hdGNoUG9zID0gaXNTdHJpbmdJblJhbmdlKFxyXG4gICAgICAgICAgZW5kTm9kZSwgZW5kT2Zmc2V0LFxyXG4gICAgICAgICAgbmV4dE5vZGUsIG5leHRPZmZzZXQsXHJcbiAgICAgICAgICByZWZpbmVtZW50LnN0cmluZyxcclxuICAgICAgICAgIGNhc2VTZW5zaXRpdmUsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKG1hdGNoUG9zID49IDApIHtcclxuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgZW5kTm9kZSA9IG5leHROb2RlO1xyXG4gICAgICAgICAgZW5kT2Zmc2V0ID0gZW5kT2Zmc2V0ICsgbWF0Y2hQb3MgLSBwcmV2Tm9kZXNMZW5ndGggKyByZWZpbmVtZW50LnN0cmluZy5sZW5ndGg7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbWFpbmluZ1NlYXJjaERpc3RhbmNlID0gcmVtYWluaW5nU2VhcmNoRGlzdGFuY2UgLSBub2RlVmFsdWVMZW5ndGg7XHJcbiAgICAgICAgbmV4dE9mZnNldCA9IHJlbWFpbmluZ1NlYXJjaERpc3RhbmNlO1xyXG4gICAgICAgIHByZXZOb2Rlc0xlbmd0aCArPSBub2RlVmFsdWVMZW5ndGg7XHJcbiAgICAgICAgbmV4dE5vZGUgPSBhbGxUZXh0Tm9kZXNbKytlbmROb2RlUG9zXTtcclxuXHJcbiAgICAgIH0gd2hpbGUgKCByZW1haW5pbmdTZWFyY2hEaXN0YW5jZSA+IDAgJiYgIXN1Y2Nlc3MgJiYgbmV4dE5vZGUgKVxyXG5cclxuICAgICAgaWYgKCFzdWNjZXNzKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgc3RhcnROb2RlID0gYWxsVGV4dE5vZGVzW3JhbmdlT3B0cy5zdGFydFRleHROb2RlUG9zXTtcclxuICAgICAgY29uc3QgcmFuZ2UgPSBuZXcgUmFuZ2UoKTtcclxuICAgICAgcmFuZ2Uuc2V0U3RhcnQoc3RhcnROb2RlLCByYW5nZU9wdHMuc3RhcnRPZmZzZXQpO1xyXG4gICAgICByYW5nZS5zZXRFbmQoZW5kTm9kZSwgZW5kT2Zmc2V0KTtcclxuXHJcbiAgICAgIGZpbmFsUmFuZ2VzLnB1c2gocmFuZ2UpO1xyXG4gICAgfSBjYXRjaCAoZSkge31cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsUmFuZ2VzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1N0cmluZ0luUmFuZ2Uoc3RhcnROb2RlLCBzdGFydE9mZnNldCwgZW5kTm9kZSwgZW5kT2Zmc2V0LCBzdHJpbmcsIGNhc2VTZW5zaXRpdmUpIHtcclxuICBjb25zdCByYW5nZSA9IG5ldyBSYW5nZSgpO1xyXG4gIHJhbmdlLnNldFN0YXJ0KHN0YXJ0Tm9kZSwgc3RhcnRPZmZzZXQpO1xyXG4gIHJhbmdlLnNldEVuZChlbmROb2RlLCAgZW5kT2Zmc2V0KTtcclxuICBsZXQgcmFuZ2VUZXh0ID0gcmFuZ2UudG9TdHJpbmcoKTtcclxuXHJcbiAgaWYgKCFjYXNlU2Vuc2l0aXZlKSB7XHJcbiAgICBzdHJpbmcgPSBzdHJpbmcudG9Mb3dlckNhc2UoKTtcclxuICAgIHJhbmdlVGV4dCA9IHJhbmdlVGV4dC50b0xvd2VyQ2FzZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWF0Y2hQb3MgPSByYW5nZVRleHQuaW5kZXhPZihzdHJpbmcpO1xyXG4gIHJldHVybiBtYXRjaFBvcztcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkSGlnaGxpZ2h0aW5nc1RvRWxlbWVudHMgKHJhbmdlcywgZGF0YSkge1xyXG4gIGNvbnN0IGRvYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICBjb25zdCBzY3JvbGxMZWZ0ID0gKHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2Muc2Nyb2xsTGVmdCkgLSAoZG9jLmNsaWVudExlZnQgfHwgMCk7XHJcbiAgY29uc3Qgc2Nyb2xsVG9wID0gKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2Muc2Nyb2xsVG9wKSAgLSAoZG9jLmNsaWVudFRvcCB8fCAwKTtcclxuXHJcbiAgcmFuZ2VzLmZvckVhY2goKHJhbmdlLCByYW5nZUlkeCkgPT4ge1xyXG4gICAgY29uc3QgYm91bmRpbmdSZWN0cyA9IHJhbmdlLmdldENsaWVudFJlY3RzKCk7XHJcbiAgICBjb25zdCBoaWdobGlnaHREYXRhID0geyBlbHM6IFtdIH07XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGluZ1JlY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJlY3QgPSBib3VuZGluZ1JlY3RzW2ldO1xyXG5cclxuICAgICAgY29uc3QgaGlnaGxpZ2h0RWxlbWVudCA9IGNyZWF0ZUhpZ2h0bGlnaHRFbGVtZW50KHJlY3QsIHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCwgZGF0YSk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGlnaGxpZ2h0RWxlbWVudCk7XHJcblxyXG4gICAgICBoaWdobGlnaHREYXRhLmVscy5wdXNoKGhpZ2hsaWdodEVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvcFBvc2l0aW9uID0gc2Nyb2xsVG9wICsgYm91bmRpbmdSZWN0c1swXS50b3A7XHJcblxyXG4gICAgaGlnaGxpZ2h0RGF0YS50b3AgPSB0b3BQb3NpdGlvbjtcclxuICAgIGhpZ2hsaWdodERhdGEubGVmdCA9IHNjcm9sbExlZnQgKyBib3VuZGluZ1JlY3RzWzBdLmxlZnQ7XHJcblxyXG4gICAgY29uc3Qgc2Nyb2xsQmFyTWFyayA9IGNyZWF0ZVNjcm9sbGJhck1hcmsodG9wUG9zaXRpb24sIGRhdGEsIHJhbmdlSWR4KTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsQmFyTWFyayk7XHJcblxyXG4gICAgSElHSExJR0hUSU5HU19QT1NJVElPTlNbZGF0YS5zZWFyY2hJZF0ucHVzaChoaWdobGlnaHREYXRhKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSGlnaHRsaWdodEVsZW1lbnQgKHJlY3QsIHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCwgZGF0YSkge1xyXG4gIGNvbnN0IGhpZ2hsaWdodEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0ICsgJ3B4JyxcclxuICAgIHdpZHRoOiByZWN0LndpZHRoICsgJ3B4JyxcclxuICAgIHRvcDogc2Nyb2xsVG9wICsgcmVjdC55ICsgJ3B4JyxcclxuICAgIGxlZnQ6IHNjcm9sbExlZnQgKyByZWN0LnggKyAncHgnLFxyXG4gICAgJ3otaW5kZXgnOiAyMTQ3NDgzNjQ3LFxyXG4gICAgJ3BvaW50ZXItZXZlbnRzJzogJ25vbmUnLFxyXG4gICAgYmFja2dyb3VuZDogJ3JnYmEoJyArICBkYXRhLmhpZ2hsaWdodENvbG9yICsgJywgMC4yNSknLFxyXG4gICAgJ291dGxpbmUtd2lkdGgnOiAnM3B4JyxcclxuICB9KTtcclxuXHJcbiAgaGlnaGxpZ2h0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHVuaXF1ZUV4dGVuc2lvbkNsYXNzICsgZGF0YS5zZWFyY2hJZCk7XHJcblxyXG4gIHJldHVybiBoaWdobGlnaHRFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTY3JvbGxiYXJNYXJrICh0b3BQb3NpdGlvbiwgZGF0YSwgcmFuZ2VJZHgpIHtcclxuICBjb25zdCBzY3JvbGxCYXJNYXJrID0gY3JlYXRlRWxlbWVudCgnc3BhbicsIHtcclxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgaGVpZ2h0OiAnNXB4JyxcclxuICAgIHdpZHRoOiAnMTVweCcsXHJcbiAgICB0b3A6IHdpbmRvdy5pbm5lckhlaWdodCAvIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0ICogdG9wUG9zaXRpb24gKyAncHgnLFxyXG4gICAgcmlnaHQ6ICcwcHgnLFxyXG4gICAgJ3otaW5kZXgnOiAyMTQ3NDgzNjQ3LFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBiYWNrZ3JvdW5kOiAncmdiYSgnICsgIGRhdGEuaGlnaGxpZ2h0Q29sb3IgKyAnLCAwLjUpJyxcclxuICB9KTtcclxuXHJcbiAgc2Nyb2xsQmFyTWFyay50aXRsZSA9IGRhdGEuc2VhcmNoU3RyaW5nO1xyXG4gIHNjcm9sbEJhck1hcmsub25jbGljayA9ICgpID0+IHtcclxuICAgIG1vdmVUb0hpZ2hsaWdodGluZyh7IHNlYXJjaElkOiBkYXRhLnNlYXJjaElkLCBpZDogcmFuZ2VJZHggfSk7XHJcbiAgICB1cGRhdGVIaWdobGlnaHRTdGF0ZShkYXRhLnNlYXJjaElkLCByYW5nZUlkeCArIDEpO1xyXG4gIH07XHJcbiAgc2Nyb2xsQmFyTWFyay5jbGFzc0xpc3QuYWRkKHVuaXF1ZUV4dGVuc2lvbkNsYXNzICsgZGF0YS5zZWFyY2hJZCk7XHJcblxyXG4gIHJldHVybiBzY3JvbGxCYXJNYXJrO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVIaWdobGlnaHRTdGF0ZSAoY3VycmVudFNlYXJjaElkeCwgc2hvd25SZXN1bHROdW1iZXIsIHVybCkge1xyXG4gIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGFjdGlvbjogJ3VwZGF0ZUhpZ2hsaWdodFN0YXRlJywgc2VuZGVySWQ6IGJyb3dzZXIucnVudGltZS5pZCwgY3VycmVudFNlYXJjaElkeCwgc2hvd25SZXN1bHROdW1iZXIsIHVybDogd2luZG93LmxvY2F0aW9uLmhyZWYgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKHR5cGUsIHN0eWxlcykge1xyXG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuXHJcbiAgZm9yIChsZXQgYXR0ciBpbiBzdHlsZXMpIHtcclxuICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KGF0dHIsIHN0eWxlc1thdHRyXSwgJ2ltcG9ydGFudCcpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb3ZlVG9IaWdobGlnaHRpbmcgKGRhdGEpIHtcclxuICBjb25zdCBoaWdobGlnaHRQb3NpdGlvbiA9IEhJR0hMSUdIVElOR1NfUE9TSVRJT05TW2RhdGEuc2VhcmNoSWRdW2RhdGEuaWRdO1xyXG4gIGNvbnN0IGNlbnRlckhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XHJcbiAgY29uc3QgY2VudGVyV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XHJcbiAgd2luZG93LnNjcm9sbFRvKFxyXG4gICAgaGlnaGxpZ2h0UG9zaXRpb24ubGVmdCAtIGNlbnRlcldpZHRoLFxyXG4gICAgaGlnaGxpZ2h0UG9zaXRpb24udG9wIC0gY2VudGVySGVpZ2h0XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlSGlnaGxpZ2h0aW5ncyAoZGF0YSkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdW5pcXVlRXh0ZW5zaW9uQ2xhc3MgKyBkYXRhLnNlYXJjaElkKVxyXG4gICAgLmZvckVhY2goKGVsKSA9PiBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKSk7XHJcblxyXG4gIGRlbGV0ZSBISUdITElHSFRJTkdTX1BPU0lUSU9OU1tkYXRhLnNlYXJjaElkXTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQmxpbmtlclRvSGlnaGxpZ2h0aW5ncyAoZGF0YSkge1xyXG4gIEhJR0hMSUdIVElOR1NfUE9TSVRJT05TW2RhdGEuc2VhcmNoSWRdXHJcbiAgICAuZm9yRWFjaCgoaGlnaGxpZ2h0RGF0YSkgPT4gaGlnaGxpZ2h0RGF0YS5lbHNcclxuICAgICAgLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QuYWRkKGAke2ZpbmRIZWxwZXJDbGFzc30ke2RhdGEuc2VhcmNoSWR9YCkpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQmxpbmtlckZyb21IaWdobGlnaHRpbmdzIChkYXRhKSB7XHJcbiAgSElHSExJR0hUSU5HU19QT1NJVElPTlNbZGF0YS5zZWFyY2hJZF1cclxuICAgIC5mb3JFYWNoKChoaWdobGlnaHREYXRhKSA9PiBoaWdobGlnaHREYXRhLmVsc1xyXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoYCR7ZmluZEhlbHBlckNsYXNzfSR7ZGF0YS5zZWFyY2hJZH1gKSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmZXRjaFByZXZpb3VzbHlGb3VuZCAoZGF0YSkge1xyXG4gIHJldHVybiBISUdITElHSFRJTkdTX1BPU0lUSU9OUy5tYXAoKGZvdW5kKSA9PiBmb3VuZC5sZW5ndGgpO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuICBURU1QT1JBUlkgRklYIEZPUiBGSU5ESU5HIFNUUklOR1MgVEhBVCBBUkUgRU5URVJFRCBJTiBJTlBVVFNcclxuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuZnVuY3Rpb24gRklORF9BUElfSU5QVVRfQlVHX0ZJWF9CRUZPUkUgKCkge1xyXG4gIHdpbmRvdy5pbnB1dFZhbHVlcyA9IFtdO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgIGlucHV0VmFsdWVzLnB1c2goaW5wdXQudmFsdWUpO1xyXG4gICAgaW5wdXQudmFsdWUgPSAnJztcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gRklORF9BUElfSU5QVVRfQlVHX0ZJWF9BRlRFUiAoKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKS5mb3JFYWNoKChpbnB1dCwgaSkgPT4ge1xyXG4gICAgaW5wdXQudmFsdWUgPSB3aW5kb3cuaW5wdXRWYWx1ZXNbaV07XHJcbiAgfSk7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IG9uTWVzc2FnZSwgc2VuZE1lc3NhZ2UgfSBmcm9tICcuL2NvbW1vbi9pbnRlcmFjdGlvbic7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4vbWVzc2FnZUFjdGlvbnMvcGFnZSc7XHJcblxyXG5sZXQgdGFiSWQ7XHJcbmFjdGlvbnMuc2F2ZVRhYklkID0gKG1lc3NhZ2UpID0+IHRhYklkID0gbWVzc2FnZS50YWJJZDtcclxuXHJcbmJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UpID0+IG9uTWVzc2FnZShtZXNzYWdlLCBhY3Rpb25zKSk7XHJcblxyXG53aW5kb3cub251bmxvYWQgPSBmdW5jdGlvbiAoKSB7IHNlbmRNZXNzYWdlKCd0YWInLCB7IGlkOiB0YWJJZCwgc3RhdGU6IGZhbHNlIH0pIH0iXSwic291cmNlUm9vdCI6IiJ9