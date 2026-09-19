/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../varstor/dist/varstor-webextension.js"
/*!***********************************************!*\
  !*** ../varstor/dist/varstor-webextension.js ***!
  \***********************************************/
(module) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else // removed by dead control flow
{}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/webextension-polyfill/dist/browser-polyfill.min.js"
/*!*************************************************************************!*\
  !*** ./node_modules/webextension-polyfill/dist/browser-polyfill.min.js ***!
  \*************************************************************************/
(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // removed by dead control flow
// removed by dead control flow
{ var c; }})("undefined"==typeof globalThis?"undefined"==typeof self?this:self:globalThis,function(a){"use strict";if(!(globalThis.chrome&&globalThis.chrome.runtime&&globalThis.chrome.runtime.id))throw new Error("This script should only be loaded in a browser extension.");if(!(globalThis.browser&&globalThis.browser.runtime&&globalThis.browser.runtime.id)){a.exports=(a=>{const b={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(b).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class c extends WeakMap{constructor(a,b=void 0){super(b),this.createItem=a}get(a){return this.has(a)||this.set(a,this.createItem(a)),super.get(a)}}const d=a=>a&&"object"==typeof a&&"function"==typeof a.then,e=(b,c)=>(...d)=>{a.runtime.lastError?b.reject(new Error(a.runtime.lastError.message)):c.singleCallbackArg||1>=d.length&&!1!==c.singleCallbackArg?b.resolve(d[0]):b.resolve(d)},f=a=>1==a?"argument":"arguments",g=(a,b)=>function(c,...d){if(d.length<b.minArgs)throw new Error(`Expected at least ${b.minArgs} ${f(b.minArgs)} for ${a}(), got ${d.length}`);if(d.length>b.maxArgs)throw new Error(`Expected at most ${b.maxArgs} ${f(b.maxArgs)} for ${a}(), got ${d.length}`);return new Promise((f,g)=>{if(b.fallbackToNoCallback)try{c[a](...d,e({resolve:f,reject:g},b))}catch(e){console.warn(`${a} API method doesn't seem to support the callback parameter, `+"falling back to call it without a callback: ",e),c[a](...d),b.fallbackToNoCallback=!1,b.noCallback=!0,f()}else b.noCallback?(c[a](...d),f()):c[a](...d,e({resolve:f,reject:g},b))})},h=(a,b,c)=>new Proxy(b,{apply(b,d,e){return c.call(d,a,...e)}});let i=Function.call.bind(Object.prototype.hasOwnProperty);const j=(a,b={},c={})=>{let d=Object.create(null),e=Object.create(a);return new Proxy(e,{has(b,c){return c in a||c in d},get(e,f){if(f in d)return d[f];if(!(f in a))return;let k=a[f];if("function"==typeof k){if("function"==typeof b[f])k=h(a,a[f],b[f]);else if(i(c,f)){let b=g(f,c[f]);k=h(a,a[f],b)}else k=k.bind(a);}else if("object"==typeof k&&null!==k&&(i(b,f)||i(c,f)))k=j(k,b[f],c[f]);else if(i(c,"*"))k=j(k,b[f],c["*"]);else return Object.defineProperty(d,f,{configurable:!0,enumerable:!0,get(){return a[f]},set(b){a[f]=b}}),k;return d[f]=k,k},set(b,c,e){return c in d?d[c]=e:a[c]=e,!0},defineProperty(a,b,c){return Reflect.defineProperty(d,b,c)},deleteProperty(a,b){return Reflect.deleteProperty(d,b)}})},k=a=>({addListener(b,c,...d){b.addListener(a.get(c),...d)},hasListener(b,c){return b.hasListener(a.get(c))},removeListener(b,c){b.removeListener(a.get(c))}}),l=new c(a=>"function"==typeof a?function(b){const c=j(b,{},{getContent:{minArgs:0,maxArgs:0}});a(c)}:a),m=new c(a=>"function"==typeof a?function(b,c,e){let f,g,h=!1,i=new Promise(a=>{f=function(b){h=!0,a(b)}});try{g=a(b,c,f)}catch(a){g=Promise.reject(a)}const j=!0!==g&&d(g);if(!0!==g&&!j&&!h)return!1;const k=a=>{a.then(a=>{e(a)},a=>{let b;b=a&&(a instanceof Error||"string"==typeof a.message)?a.message:"An unexpected error occurred",e({__mozWebExtensionPolyfillReject__:!0,message:b})}).catch(a=>{console.error("Failed to send onMessage rejected reply",a)})};return j?k(g):k(i),!0}:a),n=({reject:b,resolve:c},d)=>{a.runtime.lastError?a.runtime.lastError.message==="The message port closed before a response was received."?c():b(new Error(a.runtime.lastError.message)):d&&d.__mozWebExtensionPolyfillReject__?b(new Error(d.message)):c(d)},o=(a,b,c,...d)=>{if(d.length<b.minArgs)throw new Error(`Expected at least ${b.minArgs} ${f(b.minArgs)} for ${a}(), got ${d.length}`);if(d.length>b.maxArgs)throw new Error(`Expected at most ${b.maxArgs} ${f(b.maxArgs)} for ${a}(), got ${d.length}`);return new Promise((a,b)=>{const e=n.bind(null,{resolve:a,reject:b});d.push(e),c.sendMessage(...d)})},p={devtools:{network:{onRequestFinished:k(l)}},runtime:{onMessage:k(m),onMessageExternal:k(m),sendMessage:o.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:o.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},q={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return b.privacy={network:{"*":q},services:{"*":q},websites:{"*":q}},j(a,p,b)})(chrome)}else a.exports=globalThis.browser});
//# sourceMappingURL=browser-polyfill.min.js.map

// webextension-polyfill v.0.12.0 (https://github.com/mozilla/webextension-polyfill)

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/***/ },

/***/ "./src/helpers.js"
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_11412__) {

"use strict";
__nested_webpack_require_11412__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_11412__.d(__nested_webpack_exports__, {
/* harmony export */   getKeys: () => (/* binding */ getKeys),
/* harmony export */   getParamNames: () => (/* binding */ getParamNames),
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   toCamelCase: () => (/* binding */ toCamelCase)
/* harmony export */ });
const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
const ARGUMENT_NAMES = /([^\s,]+)/g;

function isFunction(x) {
  return typeof x === "function";
}

function isObject(x) {
  return Object.prototype.toString.call(x) === "[object Object]";
}

function isString(x) {
  return typeof x === "string";
}

function isArray(x) {
  return Array.isArray(x);
}

function getParamNames(fn) {
  const fnStr = fn.toString().replace(STRIP_COMMENTS, "").split("=>")[0];
  const names = fnStr
    .slice(fnStr.indexOf("(") + 1, fnStr.indexOf(")"))
    .match(ARGUMENT_NAMES);

  if (names === null) {
    return [];
  }

  return names;
}

function getKeys(obj, key) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, v[key]]));
}

function toCamelCase(str, delimiter) {
  const strArr = str.split(delimiter);
  return `${strArr[0]}${strArr.slice(1).reduce((a, c) => `${a}${c.charAt(0).toUpperCase()}${c.slice(1)}`, "")}`;
}


/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_13197__) {

"use strict";
__nested_webpack_require_13197__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_13197__.d(__nested_webpack_exports__, {
/* harmony export */   ACCESSORS: () => (/* binding */ ACCESSORS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_13197__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_13197__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_13197__(/*! ./namespace */ "./src/namespace.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_13197__(/*! ./validation */ "./src/validation.js");








const STATE = {};
const ACCESSORS = {};
const COMPUTED_DEPENDENCIES = {};
const COMPUTED_ARGUMENTS = {};

const STORAGE = {
  GET_TYPE: null,
  IS_AVAILABE: null,
  UPDATE_STATE: null,
  SET_VALUE: null
};

setStorageUtils(_storage__WEBPACK_IMPORTED_MODULE_0__["default"]);

async function addState (namespace, initialState, isPersistent) {
  const storageType = STORAGE.GET_TYPE(isPersistent);
  const defaultValues = Object.assign({}, initialState);
  const namespacedValues = (0,_namespace__WEBPACK_IMPORTED_MODULE_2__.namespacify)(namespace(), initialState);

  if (STORAGE.IS_AVAILABE(storageType)) {
    await STORAGE.UPDATE_STATE(namespacedValues, storageType);
  }

  const accessors = {};
  for (const key in initialState) {
    _validation__WEBPACK_IMPORTED_MODULE_3__.isValid.Defining(namespace(key));
    accessors[namespace(key)] = setupValue(
      namespace(key),
      namespacedValues[namespace(key)],
      defaultValues[key],
      storageType,
    );
  }

  Object.assign(ACCESSORS, accessors);
  return createStore(namespace());
}

function setupValue (key, value, defaultValue, storageType) {
  const isComputedValue = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value);

  if (isComputedValue) {
    setupDependencies(key, value);
  }

  STATE[key] = {
    value: isComputedValue ? value.apply(null, getArguments(key)) : value,
    computeFn: value,
    listeners: [],
    defaultValue,
  };

  return createAccessor(key, storageType);
}

function setupDependencies(computedValueName, computeFn) {
  const [, namespace] = (0,_namespace__WEBPACK_IMPORTED_MODULE_2__.splitFullKey)(computedValueName);
  const paramNames = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getParamNames)(computeFn).map((name) => (0,_namespace__WEBPACK_IMPORTED_MODULE_2__.addNamespace)(namespace, name));
  COMPUTED_ARGUMENTS[computedValueName] = paramNames;

  paramNames.forEach((param) => {
    if (COMPUTED_DEPENDENCIES[param]) {
      COMPUTED_DEPENDENCIES[param].push(computedValueName);
    } else {
      COMPUTED_DEPENDENCIES[param] = [computedValueName];
    }
  });
}

function getArguments(computedName) {
  const values = getNamespaceValues(computedName);
  
  return COMPUTED_ARGUMENTS[computedName]
    .map((name) => values[(0,_namespace__WEBPACK_IMPORTED_MODULE_2__.splitFullKey)(name)[0]])
    .concat(values);
}

function createAccessor(key, storageType) {
  const accessor = () => STATE[key].value;

  Object.assign(accessor, {
    valueOf: () => STATE[key].value,
    toString: () => STATE[key].value,
    set: async (value) => await setValue(key, value, storageType),
    onChange: (cb) => STATE[key].listeners.push(cb),
    removeListener: (removeCb) =>
      (STATE[key].listeners = STATE[key].listeners.filter(
        (cb) => cb !== removeCb,
      )),
    reset: () => setValue(key, STATE[key].defaultValue, storageType),
  });

  return new Proxy(accessor, {
    get: (target, prop) => {
      if (Object.keys(accessor).includes(prop)) {
        return target[prop];
      }

      return STATE[key].value[prop];
    },
  });
}

async function setValue (key, value, storageType) {
  if (STORAGE.IS_AVAILABE(storageType)) {
    const isAutoUpdate = await STORAGE.SET_VALUE(storageType, key, value);
    if (isAutoUpdate) {
      return;
    }
  }

  onStateChange({ [key]: { newValue: value } });
}

function onStateChange (changes) {
  const realChanges = {};

  for (const key in changes) {
    const prevValue = STATE[key].value;
    const newValue = changes[key].newValue;

    if (prevValue !== newValue) {
      STATE[key].value = newValue;
      realChanges[key] = { newValue, prevValue };

      updateDependencies(key, realChanges);
    }
  }

  for (const key in realChanges) {
    STATE[key].listeners.forEach(async (cb) => await cb(STATE[key].value, getNamespaceValues(key), realChanges[key]));
  }
}

function updateDependencies (key, realChanges) {
  const computedDependencies = COMPUTED_DEPENDENCIES[key];
  if (computedDependencies) {
    computedDependencies.forEach((name) => {
      const prevValue = STATE[name].value;
      const newValue = STATE[name].computeFn.apply(null, getArguments(name));
      if (prevValue !== newValue) {
        STATE[name].value = newValue;
        realChanges[name] = { newValue, prevValue };
        updateDependencies(name, realChanges);
      }
    });
  }
}

function getState(namespace, arg) {
  if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isString)(arg)) {
    return createStore(arg);
  }

  if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isFunction)(arg)) {
    return getNamespaceAccessors(namespace(""), arg);
  }

  return getNamespaceValues(namespace(""));
}

function getNamespaceValues(namespace) {
  return recreateStructure((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getKeys)((0,_namespace__WEBPACK_IMPORTED_MODULE_2__.getByNamespace)(namespace, STATE), "value"));
}

function getNamespaceAccessors (namespace, cb) {
  const accessors = (0,_namespace__WEBPACK_IMPORTED_MODULE_2__.getByNamespace)(namespace, ACCESSORS);
  return cb.call(null, accessors, createStore(namespace()));
}

async function setState (namespace, changes) {
  const noKeys = !Object.keys(changes).length;

  if (noKeys) {
    resetAllState();
  } else {
    for (const [k,v] of Object.entries(changes)) {
      _validation__WEBPACK_IMPORTED_MODULE_3__.isValid.Setting(namespace(k));
      await ACCESSORS[namespace(k)].set(v);
    };
  }

  return createStore(namespace());
}

function resetAllState (namespace) {
  Object.entries(ACCESSORS)
    .filter(([k]) => k.startsWith(namespace()))
    .forEach((k, { reset }) => reset());

  return createStore(namespace());
}

function addStateLitener (namespace, observables, cb) {
  observables.forEach((key) => ACCESSORS[namespace(key)].onChange(cb));

  return createStore(namespace());
}

function removeStateListener(namespace, observables, cb) {
  observables.forEach((key) =>
    ACCESSORS[namespace(key)].removeListener(cb),
  );

  return createStore(namespace());
}

function recreateStructure (value) {
  let newValue = value;

  if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
    newValue = [];
    value.forEach((v) => newValue.push(recreateStructure(v)));
    return newValue;
  }

  if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isObject)(value)) {
    newValue = {};
    for (let key in value) {
      newValue[key] = recreateStructure(value[key]);
    }
    return newValue;
  }

  return newValue;
}

function main () {
  const arg1 = arguments[1];

  if (!arg1 || (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isFunction)(arg1) || (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isString)(arg1)) {
    return getState.apply(null, arguments);
  }

  if (Array.isArray(arg1)) {
    return addStateLitener.apply(null, arguments);
  }

  if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isObject)(arg1)) {
    return setState.apply(null, arguments);
  }
}

function setStorageUtils(storageUtils) {
  Object.assign(STORAGE, storageUtils);
}

function createStore (_namespace) {
  const namespace = (key) => (0,_namespace__WEBPACK_IMPORTED_MODULE_2__.addNamespace)(_namespace, key);

  return Object.assign(main.bind(null, namespace), {
    add: (state) => addState(namespace, state, false),
    addPersistent: (state) => addState(namespace, state, true),
    get: (arg) => getState(namespace, arg),
    set: async (changes) => await setState(namespace, changes),
    resetAll: () => resetAllState(namespace),
    onChange: (keys, cb) => addStateLitener(namespace, keys, cb),
    removeListener: (keys, cb) => removeStateListener(namespace, keys, cb),
    setStorageUtils,
    onStateChange,
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createStore(""));


/***/ },

/***/ "./src/namespace.js"
/*!**************************!*\
  !*** ./src/namespace.js ***!
  \**************************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_22183__) {

"use strict";
__nested_webpack_require_22183__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_22183__.d(__nested_webpack_exports__, {
/* harmony export */   addNamespace: () => (/* binding */ addNamespace),
/* harmony export */   getByNamespace: () => (/* binding */ getByNamespace),
/* harmony export */   namespacify: () => (/* binding */ namespacify),
/* harmony export */   splitFullKey: () => (/* binding */ splitFullKey)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_22183__(/*! ./helpers */ "./src/helpers.js");


const NAMESPACE_DELIMITER = "::";

function addNamespace(namespace, str) {
  return `${namespace}${(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isString)(str) && NAMESPACE_DELIMITER || ""}${str || ""}`;
}

function splitFullKey (str) {
  const segments = str.split(NAMESPACE_DELIMITER);

  return [
    segments.slice(-1)[0],
    segments.slice(0, -1).join(NAMESPACE_DELIMITER),
  ];
}

function getByNamespace(str, obj) {
  const namespace = splitFullKey(str)[1] + NAMESPACE_DELIMITER;

  return Object.fromEntries(
    Object.entries(obj)
      .filter(([k, v]) => k.startsWith(namespace))
      .map(([k, v]) => [k.slice(namespace.length), v]),
  );
}

function namespacify (namespace, obj) {
  return Object.fromEntries(
    Object.entries(obj)
      .map(([k,v]) => [addNamespace(namespace, k), v]
  ));
}


/***/ },

/***/ "./src/storage.js"
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_23787__) {

"use strict";
__nested_webpack_require_23787__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_23787__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function updateFromLocalStorage(state) {
  const stored = {};
  for (const key in state) {
    const value = localStorage.getItem(key);
    if (value !== null) {
      stored[key] = value;
    }
  }

  return Object.assign(state, stored);
}

function getStorageType(isPersistent) {
  return isPersistent && "localStorage";
}

function isStorageAvailable(storageType) {
  return storageType;
}

async function setStorageValue(storageType, key, value) {
  await window.localStorage.setItem(key, value);
  return false;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  GET_TYPE: getStorageType,
  IS_AVAILABE: isStorageAvailable,
  UPDATE_STATE: updateFromLocalStorage,
  SET_VALUE: setStorageValue,
});


/***/ },

/***/ "./src/validation.js"
/*!***************************!*\
  !*** ./src/validation.js ***!
  \***************************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_24969__) {

"use strict";
__nested_webpack_require_24969__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_24969__.d(__nested_webpack_exports__, {
/* harmony export */   isValid: () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_24969__(/*! . */ "./src/index.js");
/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_24969__(/*! ./namespace */ "./src/namespace.js");




const isValid = {
  Setting: (fullKey) => {
    if (!___WEBPACK_IMPORTED_MODULE_0__.ACCESSORS[fullKey]) {
      const [key, namespace] = (0,_namespace__WEBPACK_IMPORTED_MODULE_1__.splitFullKey)(fullKey);
      throw new Error(
        `Setting "${key}" key in "${namespace}" namespace. DOES NOT EXIST`,
      );
    }

    return true;
  },

  Defining: (fullKey) => {
    if (___WEBPACK_IMPORTED_MODULE_0__.ACCESSORS[fullKey]) {
      const [key, namespace] = (0,_namespace__WEBPACK_IMPORTED_MODULE_1__.splitFullKey)(fullKey);
      throw new Error(
        `Redefining "${key}" key in "${namespace}" namespace. ALREADY DEFINED`,
      );
    }

    return true;
  }

};


/***/ },

/***/ "./src/webextension-storage.js"
/*!*************************************!*\
  !*** ./src/webextension-storage.js ***!
  \*************************************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_26368__) {

"use strict";
__nested_webpack_require_26368__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_26368__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isBackgroundScript: () => (/* binding */ isBackgroundScript),
/* harmony export */   isSessionStorageSupport: () => (/* binding */ isSessionStorageSupport)
/* harmony export */ });
const browser = __nested_webpack_require_26368__(/*! webextension-polyfill/dist/browser-polyfill.min */ "./node_modules/webextension-polyfill/dist/browser-polyfill.min.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  GET_TYPE: getStorageType,
  IS_AVAILABE: isStorageAvailable,
  UPDATE_STATE: updateStateFromStorage,
  SET_VALUE: setStorageValue,
});

function getStorageType(isPersistent) {
  return (isBackgroundScript() && isPersistent && "local") || "session";
}

function isStorageAvailable(storageType) {
  return (
    storageType === "local" ||
    (storageType === "session" && isSessionStorageSupport())
  );
}

async function updateStateFromStorage(state, type) {
  return Object.assign(state, await browser.storage[type].get());
}

async function setStorageValue(type, key, value) {
  await browser.storage[type].set({ [key]: value });
  return true;
}

function isSessionStorageSupport() {
  return !!browser.storage.session;
}

function isBackgroundScript() {
  return (
    window.location.protocol === "chrome-extension:" ||
    window.location.protocol === "moz-extension:"
  );
}


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_28174__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_28174__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__nested_webpack_require_28174__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__nested_webpack_require_28174__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__nested_webpack_require_28174__.o(definition, key) && !__nested_webpack_require_28174__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_28174__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_28174__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
let __nested_webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/webextension.js ***!
  \*****************************/
__nested_webpack_require_28174__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_28174__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_28174__(/*! . */ "./src/index.js");
/* harmony import */ var _webextension_storage__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_28174__(/*! ./webextension-storage */ "./src/webextension-storage.js");
const browser = __nested_webpack_require_28174__(/*! webextension-polyfill/dist/browser-polyfill.min */ "./node_modules/webextension-polyfill/dist/browser-polyfill.min.js");




const { onStateChange, setStorageUtils } = ___WEBPACK_IMPORTED_MODULE_0__["default"];

if ((0,_webextension_storage__WEBPACK_IMPORTED_MODULE_1__.isBackgroundScript)()) {
  browser.storage.local.onChanged.addListener(onStateChange);
  (0,_webextension_storage__WEBPACK_IMPORTED_MODULE_1__.isSessionStorageSupport)() &&
    browser.storage.session.onChanged.addListener(onStateChange);
}

setStorageUtils(_webextension_storage__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___WEBPACK_IMPORTED_MODULE_0__["default"]);

})();

__nested_webpack_exports__ = __nested_webpack_exports__["default"];
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ },

/***/ "../webextension-messages/dist/webextension-messages.js"
/*!**************************************************************!*\
  !*** ../webextension-messages/dist/webextension-messages.js ***!
  \**************************************************************/
(module) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else // removed by dead control flow
{}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/webextension-polyfill/dist/browser-polyfill.min.js"
/*!*************************************************************************!*\
  !*** ./node_modules/webextension-polyfill/dist/browser-polyfill.min.js ***!
  \*************************************************************************/
(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // removed by dead control flow
// removed by dead control flow
{ var c; }})("undefined"==typeof globalThis?"undefined"==typeof self?this:self:globalThis,function(a){"use strict";if(!(globalThis.chrome&&globalThis.chrome.runtime&&globalThis.chrome.runtime.id))throw new Error("This script should only be loaded in a browser extension.");if(!(globalThis.browser&&globalThis.browser.runtime&&globalThis.browser.runtime.id)){a.exports=(a=>{const b={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(b).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class c extends WeakMap{constructor(a,b=void 0){super(b),this.createItem=a}get(a){return this.has(a)||this.set(a,this.createItem(a)),super.get(a)}}const d=a=>a&&"object"==typeof a&&"function"==typeof a.then,e=(b,c)=>(...d)=>{a.runtime.lastError?b.reject(new Error(a.runtime.lastError.message)):c.singleCallbackArg||1>=d.length&&!1!==c.singleCallbackArg?b.resolve(d[0]):b.resolve(d)},f=a=>1==a?"argument":"arguments",g=(a,b)=>function(c,...d){if(d.length<b.minArgs)throw new Error(`Expected at least ${b.minArgs} ${f(b.minArgs)} for ${a}(), got ${d.length}`);if(d.length>b.maxArgs)throw new Error(`Expected at most ${b.maxArgs} ${f(b.maxArgs)} for ${a}(), got ${d.length}`);return new Promise((f,g)=>{if(b.fallbackToNoCallback)try{c[a](...d,e({resolve:f,reject:g},b))}catch(e){console.warn(`${a} API method doesn't seem to support the callback parameter, `+"falling back to call it without a callback: ",e),c[a](...d),b.fallbackToNoCallback=!1,b.noCallback=!0,f()}else b.noCallback?(c[a](...d),f()):c[a](...d,e({resolve:f,reject:g},b))})},h=(a,b,c)=>new Proxy(b,{apply(b,d,e){return c.call(d,a,...e)}});let i=Function.call.bind(Object.prototype.hasOwnProperty);const j=(a,b={},c={})=>{let d=Object.create(null),e=Object.create(a);return new Proxy(e,{has(b,c){return c in a||c in d},get(e,f){if(f in d)return d[f];if(!(f in a))return;let k=a[f];if("function"==typeof k){if("function"==typeof b[f])k=h(a,a[f],b[f]);else if(i(c,f)){let b=g(f,c[f]);k=h(a,a[f],b)}else k=k.bind(a);}else if("object"==typeof k&&null!==k&&(i(b,f)||i(c,f)))k=j(k,b[f],c[f]);else if(i(c,"*"))k=j(k,b[f],c["*"]);else return Object.defineProperty(d,f,{configurable:!0,enumerable:!0,get(){return a[f]},set(b){a[f]=b}}),k;return d[f]=k,k},set(b,c,e){return c in d?d[c]=e:a[c]=e,!0},defineProperty(a,b,c){return Reflect.defineProperty(d,b,c)},deleteProperty(a,b){return Reflect.deleteProperty(d,b)}})},k=a=>({addListener(b,c,...d){b.addListener(a.get(c),...d)},hasListener(b,c){return b.hasListener(a.get(c))},removeListener(b,c){b.removeListener(a.get(c))}}),l=new c(a=>"function"==typeof a?function(b){const c=j(b,{},{getContent:{minArgs:0,maxArgs:0}});a(c)}:a),m=new c(a=>"function"==typeof a?function(b,c,e){let f,g,h=!1,i=new Promise(a=>{f=function(b){h=!0,a(b)}});try{g=a(b,c,f)}catch(a){g=Promise.reject(a)}const j=!0!==g&&d(g);if(!0!==g&&!j&&!h)return!1;const k=a=>{a.then(a=>{e(a)},a=>{let b;b=a&&(a instanceof Error||"string"==typeof a.message)?a.message:"An unexpected error occurred",e({__mozWebExtensionPolyfillReject__:!0,message:b})}).catch(a=>{console.error("Failed to send onMessage rejected reply",a)})};return j?k(g):k(i),!0}:a),n=({reject:b,resolve:c},d)=>{a.runtime.lastError?a.runtime.lastError.message==="The message port closed before a response was received."?c():b(new Error(a.runtime.lastError.message)):d&&d.__mozWebExtensionPolyfillReject__?b(new Error(d.message)):c(d)},o=(a,b,c,...d)=>{if(d.length<b.minArgs)throw new Error(`Expected at least ${b.minArgs} ${f(b.minArgs)} for ${a}(), got ${d.length}`);if(d.length>b.maxArgs)throw new Error(`Expected at most ${b.maxArgs} ${f(b.maxArgs)} for ${a}(), got ${d.length}`);return new Promise((a,b)=>{const e=n.bind(null,{resolve:a,reject:b});d.push(e),c.sendMessage(...d)})},p={devtools:{network:{onRequestFinished:k(l)}},runtime:{onMessage:k(m),onMessageExternal:k(m),sendMessage:o.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:o.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},q={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return b.privacy={network:{"*":q},services:{"*":q},websites:{"*":q}},j(a,p,b)})(chrome)}else a.exports=globalThis.browser});
//# sourceMappingURL=browser-polyfill.min.js.map

// webextension-polyfill v.0.12.0 (https://github.com/mozilla/webextension-polyfill)

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_11497__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_11497__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__nested_webpack_require_11497__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__nested_webpack_require_11497__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__nested_webpack_require_11497__.o(definition, key) && !__nested_webpack_require_11497__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_11497__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_11497__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
let __nested_webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__nested_webpack_require_11497__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_11497__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const browser = __nested_webpack_require_11497__(/*! webextension-polyfill/dist/browser-polyfill.min */ "./node_modules/webextension-polyfill/dist/browser-polyfill.min.js");

const STOP_ACTION = `WEBEXTENSION_MESSAGES_STOP_COMMUNICATION`;
const RESUME_ACTION = `WEBEXTENSION_MESSAGES_RESUME_COMMUNICATION`;
const EMPTY_FN = () => {};
const RESULT_PROMISES = {};
const ACTIONS = {};

browser.runtime.onMessage.addListener((message) => {
  if (message.action === STOP_ACTION) {
    stopListening(message.payload);
  }
  if (message.action === RESUME_ACTION) {
    resumeListening(message.payload);
  }
});

function setupCommunication (actions, messagesId = generateId()) {
  const answers = Object.fromEntries(actions.map((action) => [action, EMPTY_FN]));
  const messages = Object.fromEntries(
    actions.map((action) => [
      action,
      (payload, isRemoving) => {
        if (isFunction(payload)) {
          return addAnswer(payload, isRemoving, action, answers);
        }
        return sendMessageForResult(action, payload, messagesId);
      },
    ]),
  );

  ACTIONS[messagesId] = (message) => onMessage(message, answers);

  browser.runtime.onMessage.addListener(ACTIONS[messagesId]);

  return {
    ...messages,
    stop: () => stopListening(messagesId, true),
    resume: () => resumeListening(messagesId, true),
  };
}

function addAnswer (cb, isRemoving, action, answers) {
  if (isRemoving !== null) {
    return answers[action] = cb;
  }

  delete answers[action];
}

async function onMessage (message, actions = {}) {
  if (RESULT_PROMISES[message.resultId]) {
    RESULT_PROMISES[message.resultId](message.payload);
    delete RESULT_PROMISES[message.resultId];
    return;
  }

  if (message.isAnswer) {
    return;
  }

  if (actions[message.action]) {
    const payload = await actions[message.action](message.payload);
    sendMessage(message.action, payload, message.resultId, true);
  }
}

function sendMessageForResult(action, payload, messagesId) {
  if (!isListening(messagesId)) {
    return Promise.resolve();
  }
  const { resultId, promise } = createResultPromise();
  sendMessage(action, payload, resultId);
  return promise;
}

async function sendMessage (action, payload, resultId, isAnswer) {
  const message = { action, payload, resultId, isAnswer };

  if (isBackgroundScript()) {
    const [tab] = await getCurrentTab();
    if(isTabHostedByExtension(tab)) {
      browser.runtime.sendMessage(message);
    } else {
      browser.tabs.sendMessage(tab.id, message);
    }
  } else {
    browser.runtime.sendMessage(message);
  }
}

function createResultPromise () {
  const resultId = generateId();

  return {
    promise: new Promise((res) => (RESULT_PROMISES[resultId] = res)),
    resultId,
  };
}

function isBackgroundScript () {
  return (
    window.location.protocol === "chrome-extension:" ||
    window.location.protocol === "moz-extension:"
  );
}

function isTabHostedByExtension (tab) {
  return window.location.href === tab.url;
}

function isListening (messagesId) {
  return browser.runtime.onMessage.hasListener(ACTIONS[messagesId]);
}

function generateId () {
  return `${Date.now()}-${Math.random()}`;
}

function getCurrentTab () {
  return browser.tabs.query({ active: true, currentWindow: true });
}

function stopListening(messagesId, sendToReceiver) {
  browser.runtime.onMessage.removeListener(ACTIONS[messagesId]);

  if (sendToReceiver) {
    sendMessage(STOP_ACTION, messagesId);
  }
}

function resumeListening(messagesId, sendToReceiver) {
  if (!isListening(messagesId)) {
    browser.runtime.onMessage.addListener(ACTIONS[messagesId]);
  }

  if (sendToReceiver) {
    sendMessage(RESUME_ACTION, messagesId);
  }
}

function isFunction(x) {
  return typeof x === "function";
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setupCommunication);

})();

__nested_webpack_exports__ = __nested_webpack_exports__["default"];
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ },

/***/ "./node_modules/webextension-contextmenu/dist/webextension-contextmenu.js"
/*!********************************************************************************!*\
  !*** ./node_modules/webextension-contextmenu/dist/webextension-contextmenu.js ***!
  \********************************************************************************/
(module) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else // removed by dead control flow
{}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/webextension-polyfill/dist/browser-polyfill.min.js"
/*!*************************************************************************!*\
  !*** ./node_modules/webextension-polyfill/dist/browser-polyfill.min.js ***!
  \*************************************************************************/
(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // removed by dead control flow
// removed by dead control flow
{ var c; }})("undefined"==typeof globalThis?"undefined"==typeof self?this:self:globalThis,function(a){"use strict";if(!(globalThis.chrome&&globalThis.chrome.runtime&&globalThis.chrome.runtime.id))throw new Error("This script should only be loaded in a browser extension.");if(!(globalThis.browser&&globalThis.browser.runtime&&globalThis.browser.runtime.id)){a.exports=(a=>{const b={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(b).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class c extends WeakMap{constructor(a,b=void 0){super(b),this.createItem=a}get(a){return this.has(a)||this.set(a,this.createItem(a)),super.get(a)}}const d=a=>a&&"object"==typeof a&&"function"==typeof a.then,e=(b,c)=>(...d)=>{a.runtime.lastError?b.reject(new Error(a.runtime.lastError.message)):c.singleCallbackArg||1>=d.length&&!1!==c.singleCallbackArg?b.resolve(d[0]):b.resolve(d)},f=a=>1==a?"argument":"arguments",g=(a,b)=>function(c,...d){if(d.length<b.minArgs)throw new Error(`Expected at least ${b.minArgs} ${f(b.minArgs)} for ${a}(), got ${d.length}`);if(d.length>b.maxArgs)throw new Error(`Expected at most ${b.maxArgs} ${f(b.maxArgs)} for ${a}(), got ${d.length}`);return new Promise((f,g)=>{if(b.fallbackToNoCallback)try{c[a](...d,e({resolve:f,reject:g},b))}catch(e){console.warn(`${a} API method doesn't seem to support the callback parameter, `+"falling back to call it without a callback: ",e),c[a](...d),b.fallbackToNoCallback=!1,b.noCallback=!0,f()}else b.noCallback?(c[a](...d),f()):c[a](...d,e({resolve:f,reject:g},b))})},h=(a,b,c)=>new Proxy(b,{apply(b,d,e){return c.call(d,a,...e)}});let i=Function.call.bind(Object.prototype.hasOwnProperty);const j=(a,b={},c={})=>{let d=Object.create(null),e=Object.create(a);return new Proxy(e,{has(b,c){return c in a||c in d},get(e,f){if(f in d)return d[f];if(!(f in a))return;let k=a[f];if("function"==typeof k){if("function"==typeof b[f])k=h(a,a[f],b[f]);else if(i(c,f)){let b=g(f,c[f]);k=h(a,a[f],b)}else k=k.bind(a);}else if("object"==typeof k&&null!==k&&(i(b,f)||i(c,f)))k=j(k,b[f],c[f]);else if(i(c,"*"))k=j(k,b[f],c["*"]);else return Object.defineProperty(d,f,{configurable:!0,enumerable:!0,get(){return a[f]},set(b){a[f]=b}}),k;return d[f]=k,k},set(b,c,e){return c in d?d[c]=e:a[c]=e,!0},defineProperty(a,b,c){return Reflect.defineProperty(d,b,c)},deleteProperty(a,b){return Reflect.deleteProperty(d,b)}})},k=a=>({addListener(b,c,...d){b.addListener(a.get(c),...d)},hasListener(b,c){return b.hasListener(a.get(c))},removeListener(b,c){b.removeListener(a.get(c))}}),l=new c(a=>"function"==typeof a?function(b){const c=j(b,{},{getContent:{minArgs:0,maxArgs:0}});a(c)}:a),m=new c(a=>"function"==typeof a?function(b,c,e){let f,g,h=!1,i=new Promise(a=>{f=function(b){h=!0,a(b)}});try{g=a(b,c,f)}catch(a){g=Promise.reject(a)}const j=!0!==g&&d(g);if(!0!==g&&!j&&!h)return!1;const k=a=>{a.then(a=>{e(a)},a=>{let b;b=a&&(a instanceof Error||"string"==typeof a.message)?a.message:"An unexpected error occurred",e({__mozWebExtensionPolyfillReject__:!0,message:b})}).catch(a=>{console.error("Failed to send onMessage rejected reply",a)})};return j?k(g):k(i),!0}:a),n=({reject:b,resolve:c},d)=>{a.runtime.lastError?a.runtime.lastError.message==="The message port closed before a response was received."?c():b(new Error(a.runtime.lastError.message)):d&&d.__mozWebExtensionPolyfillReject__?b(new Error(d.message)):c(d)},o=(a,b,c,...d)=>{if(d.length<b.minArgs)throw new Error(`Expected at least ${b.minArgs} ${f(b.minArgs)} for ${a}(), got ${d.length}`);if(d.length>b.maxArgs)throw new Error(`Expected at most ${b.maxArgs} ${f(b.maxArgs)} for ${a}(), got ${d.length}`);return new Promise((a,b)=>{const e=n.bind(null,{resolve:a,reject:b});d.push(e),c.sendMessage(...d)})},p={devtools:{network:{onRequestFinished:k(l)}},runtime:{onMessage:k(m),onMessageExternal:k(m),sendMessage:o.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:o.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},q={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return b.privacy={network:{"*":q},services:{"*":q},websites:{"*":q}},j(a,p,b)})(chrome)}else a.exports=globalThis.browser});
//# sourceMappingURL=browser-polyfill.min.js.map

// webextension-polyfill v.0.12.0 (https://github.com/mozilla/webextension-polyfill)

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_11503__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_11503__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__nested_webpack_require_11503__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__nested_webpack_require_11503__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__nested_webpack_require_11503__.o(definition, key) && !__nested_webpack_require_11503__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_11503__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_11503__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
let __nested_webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__nested_webpack_require_11503__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_11503__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const browser = __nested_webpack_require_11503__(/*! webextension-polyfill/dist/browser-polyfill.min */ "./node_modules/webextension-polyfill/dist/browser-polyfill.min.js");

const { assign, entries } = Object;

const EMPTY_FN = () => {};

const PROPS_EXTRACTORS = {
  callback: {
    check: (props) => isFunction(props),
    value: (props) => props,
    def: EMPTY_FN,
  },
  other: {
    check: (props, index) => isOtherProps(props, index),
    value: (props, index) => props[0] || props,
    def: {},
  },
  submenu: {
    check: (props, index) => isSubmenu(props, index),
    value: (props) => props,
    def: false,
  },
  radio: {
    check: (props) => isRadio(props),
    value: (props) => ({ type: "radio", checked: !!props[0] }),
    def: {},
  },
  checkbox: {
    check: (props) => isBoolean(props),
    value: (props) => ({ type: "checkbox", checked: props }),
    def: {},
  },
};

let LISTENER = EMPTY_FN;

/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(menu) {
  await browser.contextMenus.removeAll();
  browser.contextMenus.onClicked.removeListener(LISTENER);

  const { ids, callbacks } = createMenu(menu);

  LISTENER = (info, tab) => callbacks[info.menuItemId](info, tab);
  browser.contextMenus.onClicked.addListener(LISTENER);

  return ids;
}

function createMenu(menu, parentId) {
  const callbacks = {};
  const ids = {};

  let idCount = 0;
  for (let [title, options] of entries(menu)) {
    const id = `${parentId || "id"}-${idCount++}`;
    ids[title] =  { id };
    const properties = assign(
      { id, contexts: ["all"] },
      parentId ? { parentId } : {},
    );
    if (options === null) {
      browser.contextMenus.create({ ...properties, type: "separator" });
      continue;
    }

    const { submenu, callback, radio, checkbox, other } =
      extractOptionProps(options);
    callbacks[id] = callback;
    [radio, checkbox, other].forEach((props) => assign(properties, props));

    browser.contextMenus.create({ title, ...properties });

    if (submenu) {
      const sumMenu = createMenu(submenu, id);
      assign(callbacks, sumMenu.callbacks);
      assign(ids[title], sumMenu.ids);
    }
  }

  return { ids, callbacks };
}

function extractOptionProps(props) {
  const properties = {};

  entries(PROPS_EXTRACTORS).forEach(([type, { check, value, def }]) => properties[type] = check(props) ? value(props) : def);

  if (!isRadio(props) && !isOtherProps(props) && isArray(props)) {
    entries(PROPS_EXTRACTORS).forEach(
      ([type, { check, value }]) => {
        for (let index in props) {
          const prop = props[index];
          if (check(prop, +index)) {
            properties[type] = value(prop);
            return;
          }
        }
      });
  }

  return properties;
}

function isOtherProps(value, index) {
  return (isArray(value) && value.length === 1 && isObject(value[0])) || (isObject(value) && index > 0);
}

function isSubmenu (value, index) {
  return !index && isObject(value); 
}

function isRadio(value) {
  return isArray(value) && (value.length === 0 || value.length === 1 && isBoolean(value[0]));
}

function isBoolean(val) {
  return val === false || val === true;
}

function isObject(obj) {
  return getObjectType(obj) === "[object Object]";
}

function isArray(obj) {
  return getObjectType(obj) === "[object Array]";
}

function isFunction(obj) {
  return getObjectType(obj) === "[object Function]";
}

function getObjectType(obj) {
  return Object.prototype.toString.call(obj);
}

})();

__nested_webpack_exports__ = __nested_webpack_exports__["default"];
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ },

/***/ "./node_modules/webextension-polyfill/dist/browser-polyfill.min.js"
/*!*************************************************************************!*\
  !*** ./node_modules/webextension-polyfill/dist/browser-polyfill.min.js ***!
  \*************************************************************************/
(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // removed by dead control flow
{ var c; }})("undefined"==typeof globalThis?"undefined"==typeof self?this:self:globalThis,function(a){"use strict";if(!(globalThis.chrome&&globalThis.chrome.runtime&&globalThis.chrome.runtime.id))throw new Error("This script should only be loaded in a browser extension.");if(!(globalThis.browser&&globalThis.browser.runtime&&globalThis.browser.runtime.id)){a.exports=(a=>{const b={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(b).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class c extends WeakMap{constructor(a,b=void 0){super(b),this.createItem=a}get(a){return this.has(a)||this.set(a,this.createItem(a)),super.get(a)}}const d=a=>a&&"object"==typeof a&&"function"==typeof a.then,e=(b,c)=>(...d)=>{a.runtime.lastError?b.reject(new Error(a.runtime.lastError.message)):c.singleCallbackArg||1>=d.length&&!1!==c.singleCallbackArg?b.resolve(d[0]):b.resolve(d)},f=a=>1==a?"argument":"arguments",g=(a,b)=>function(c,...d){if(d.length<b.minArgs)throw new Error(`Expected at least ${b.minArgs} ${f(b.minArgs)} for ${a}(), got ${d.length}`);if(d.length>b.maxArgs)throw new Error(`Expected at most ${b.maxArgs} ${f(b.maxArgs)} for ${a}(), got ${d.length}`);return new Promise((f,g)=>{if(b.fallbackToNoCallback)try{c[a](...d,e({resolve:f,reject:g},b))}catch(e){console.warn(`${a} API method doesn't seem to support the callback parameter, `+"falling back to call it without a callback: ",e),c[a](...d),b.fallbackToNoCallback=!1,b.noCallback=!0,f()}else b.noCallback?(c[a](...d),f()):c[a](...d,e({resolve:f,reject:g},b))})},h=(a,b,c)=>new Proxy(b,{apply(b,d,e){return c.call(d,a,...e)}});let i=Function.call.bind(Object.prototype.hasOwnProperty);const j=(a,b={},c={})=>{let d=Object.create(null),e=Object.create(a);return new Proxy(e,{has(b,c){return c in a||c in d},get(e,f){if(f in d)return d[f];if(!(f in a))return;let k=a[f];if("function"==typeof k){if("function"==typeof b[f])k=h(a,a[f],b[f]);else if(i(c,f)){let b=g(f,c[f]);k=h(a,a[f],b)}else k=k.bind(a);}else if("object"==typeof k&&null!==k&&(i(b,f)||i(c,f)))k=j(k,b[f],c[f]);else if(i(c,"*"))k=j(k,b[f],c["*"]);else return Object.defineProperty(d,f,{configurable:!0,enumerable:!0,get(){return a[f]},set(b){a[f]=b}}),k;return d[f]=k,k},set(b,c,e){return c in d?d[c]=e:a[c]=e,!0},defineProperty(a,b,c){return Reflect.defineProperty(d,b,c)},deleteProperty(a,b){return Reflect.deleteProperty(d,b)}})},k=a=>({addListener(b,c,...d){b.addListener(a.get(c),...d)},hasListener(b,c){return b.hasListener(a.get(c))},removeListener(b,c){b.removeListener(a.get(c))}}),l=new c(a=>"function"==typeof a?function(b){const c=j(b,{},{getContent:{minArgs:0,maxArgs:0}});a(c)}:a),m=new c(a=>"function"==typeof a?function(b,c,e){let f,g,h=!1,i=new Promise(a=>{f=function(b){h=!0,a(b)}});try{g=a(b,c,f)}catch(a){g=Promise.reject(a)}const j=!0!==g&&d(g);if(!0!==g&&!j&&!h)return!1;const k=a=>{a.then(a=>{e(a)},a=>{let b;b=a&&(a instanceof Error||"string"==typeof a.message)?a.message:"An unexpected error occurred",e({__mozWebExtensionPolyfillReject__:!0,message:b})}).catch(a=>{console.error("Failed to send onMessage rejected reply",a)})};return j?k(g):k(i),!0}:a),n=({reject:b,resolve:c},d)=>{a.runtime.lastError?a.runtime.lastError.message==="The message port closed before a response was received."?c():b(new Error(a.runtime.lastError.message)):d&&d.__mozWebExtensionPolyfillReject__?b(new Error(d.message)):c(d)},o=(a,b,c,...d)=>{if(d.length<b.minArgs)throw new Error(`Expected at least ${b.minArgs} ${f(b.minArgs)} for ${a}(), got ${d.length}`);if(d.length>b.maxArgs)throw new Error(`Expected at most ${b.maxArgs} ${f(b.maxArgs)} for ${a}(), got ${d.length}`);return new Promise((a,b)=>{const e=n.bind(null,{resolve:a,reject:b});d.push(e),c.sendMessage(...d)})},p={devtools:{network:{onRequestFinished:k(l)}},runtime:{onMessage:k(m),onMessageExternal:k(m),sendMessage:o.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:o.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},q={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return b.privacy={network:{"*":q},services:{"*":q},websites:{"*":q}},j(a,p,b)})(chrome)}else a.exports=globalThis.browser});
//# sourceMappingURL=browser-polyfill.min.js.map

// webextension-polyfill v.0.12.0 (https://github.com/mozilla/webextension-polyfill)

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/***/ },

/***/ "./src/background-script.js"
/*!**********************************!*\
  !*** ./src/background-script.js ***!
  \**********************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _background_message_answers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @background/message-answers */ "./src/background/message-answers.js");
/* harmony import */ var _background_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @background/actions */ "./src/background/actions.js");
/* harmony import */ var _background_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @background/state */ "./src/background/state.js");
/* harmony import */ var _background_context_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./background/context-menu */ "./src/background/context-menu.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_background_message_answers__WEBPACK_IMPORTED_MODULE_0__, _background_actions__WEBPACK_IMPORTED_MODULE_1__, _background_state__WEBPACK_IMPORTED_MODULE_2__, _background_context_menu__WEBPACK_IMPORTED_MODULE_3__]);
([_background_message_answers__WEBPACK_IMPORTED_MODULE_0__, _background_actions__WEBPACK_IMPORTED_MODULE_1__, _background_state__WEBPACK_IMPORTED_MODULE_2__, _background_context_menu__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
const browser = __webpack_require__(/*! webextension-polyfill/dist/browser-polyfill.min */ "./node_modules/webextension-polyfill/dist/browser-polyfill.min.js");






browser.browserAction.onClicked.addListener((tab) => _background_actions__WEBPACK_IMPORTED_MODULE_1__["default"].switchPopup(tab));

browser.tabs.onActivated.addListener(_background_context_menu__WEBPACK_IMPORTED_MODULE_3__.updateContextMenu);
browser.tabs.onUpdated.addListener(_background_context_menu__WEBPACK_IMPORTED_MODULE_3__.updateContextMenu);

_background_state__WEBPACK_IMPORTED_MODULE_2__["default"].onChange(
  ["favoriteSearches", "recentSearches", "tabs"],
  async () => {
    await (0,_background_context_menu__WEBPACK_IMPORTED_MODULE_3__.updateContextMenu)()
  },
);

(0,_background_context_menu__WEBPACK_IMPORTED_MODULE_3__.updateContextMenu)();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ },

/***/ "./src/background/actions.js"
/*!***********************************!*\
  !*** ./src/background/actions.js ***!
  \***********************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSearchToContextMenu: () => (/* binding */ addSearchToContextMenu),
/* harmony export */   closingPopup: () => (/* binding */ closingPopup),
/* harmony export */   closingTab: () => (/* binding */ closingTab),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/messages */ "./src/common/messages.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/background/state.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/background/helpers.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_state__WEBPACK_IMPORTED_MODULE_1__]);
var __webpack_async_dependencies_result__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_async_dependencies_result__[0];
const browser = __webpack_require__(/*! webextension-polyfill/dist/browser-polyfill.min */ "./node_modules/webextension-polyfill/dist/browser-polyfill.min.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  closingTab,
  closingPopup,
  switchPopup,
  openSearchGroup,
  addSearchToContextMenu,
  removeSearch,
  removeAllSearches,
  removeRecentSearch,
  addFavoriteSearch,
  removeFavoriteSearch,
  setColors,
  openPage,
});

function closingTab({ tabId }) {
  _state__WEBPACK_IMPORTED_MODULE_1__["default"].setTabState(tabId, undefined);
}

function closingPopup({ tabId }) {
  _state__WEBPACK_IMPORTED_MODULE_1__["default"].setTabState(tabId, { open: false });
}

async function switchPopup({ id }, noClosing) {
  let popupState = _state__WEBPACK_IMPORTED_MODULE_1__["default"].getTabState(id);

  if (!popupState?.initialized) {
    popupState = await initializePopup(id);
  }

  const open = !popupState.open || !!noClosing;
  return _common_messages__WEBPACK_IMPORTED_MODULE_0__["default"].popupState({ open }).then(() =>
    _state__WEBPACK_IMPORTED_MODULE_1__["default"].setTabState(id, { open }),
  );
}

async function initializePopup(tabId) {
  const { colors } = _state__WEBPACK_IMPORTED_MODULE_1__["default"].get();
  await executeScript(tabId, "/page-script.js");
  await _common_messages__WEBPACK_IMPORTED_MODULE_0__["default"].saveTabData({ tabId, colors });
  return _state__WEBPACK_IMPORTED_MODULE_1__["default"].initTabState(tabId);
}

async function openSearchGroup(searchGroupId, searchString) {
  const tab = await (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getCurrentTab)();
  await switchPopup(tab, true);
  const idx = searchGroupId >= 0 ? searchGroupId : (await _state__WEBPACK_IMPORTED_MODULE_1__["default"].getEmptySearchId(tab));
  _common_messages__WEBPACK_IMPORTED_MODULE_0__["default"].openSearchGroup({ idx, searchString });
}

async function removeSearch(tabId, idx) {
  await addSearchToContextMenu({ tabId, idx, string: undefined });
  _common_messages__WEBPACK_IMPORTED_MODULE_0__["default"].removeSearch({ idx });
}

function removeAllSearches (tabId) {
  _state__WEBPACK_IMPORTED_MODULE_1__["default"].getTabState(tabId).searches.forEach((s, i) => s && removeSearch(tabId, i));
}

async function addSearchToContextMenu({ tabId, idx, string }) {
  _state__WEBPACK_IMPORTED_MODULE_1__["default"].setSearchInTab(tabId, idx, string);
}

async function executeScript(tabId, file) {
  try {
    return await browser.scripting.executeScript({
      target: {
        tabId,
      },
      files: [file],
    });
  } catch (e) {
    return await browser.tabs.executeScript(tabId, { file });
  }
}

function removeRecentSearch (string) {
  _state__WEBPACK_IMPORTED_MODULE_1__["default"].removeRecentSearch(string);
  _common_messages__WEBPACK_IMPORTED_MODULE_0__["default"].removeRecentSearch({ string })
}

function addFavoriteSearch (string) {
  _state__WEBPACK_IMPORTED_MODULE_1__["default"].addFavoriteSearch(string);
  _common_messages__WEBPACK_IMPORTED_MODULE_0__["default"].addFavoriteSearch({ string });
}

function removeFavoriteSearch (string) {
  _state__WEBPACK_IMPORTED_MODULE_1__["default"].removeFavoriteSearch(string);
  _common_messages__WEBPACK_IMPORTED_MODULE_0__["default"].removeFavoriteSearch({ string })
}

function setColors (colors) {
  _state__WEBPACK_IMPORTED_MODULE_1__["default"].set({ colors });
  _common_messages__WEBPACK_IMPORTED_MODULE_0__["default"].setColors({ colors });
}

function openPage (url) {
  browser.tabs.create({ active: true, url });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ },

/***/ "./src/background/context-menu.js"
/*!****************************************!*\
  !*** ./src/background/context-menu.js ***!
  \****************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateContextMenu: () => (/* binding */ updateContextMenu)
/* harmony export */ });
/* harmony import */ var webextension_contextmenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-contextmenu */ "./node_modules/webextension-contextmenu/dist/webextension-contextmenu.js");
/* harmony import */ var webextension_contextmenu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_contextmenu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/constants */ "./src/common/constants.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/background/state.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/background/actions.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./src/background/helpers.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_state__WEBPACK_IMPORTED_MODULE_2__, _actions__WEBPACK_IMPORTED_MODULE_3__]);
([_state__WEBPACK_IMPORTED_MODULE_2__, _actions__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const MENU_TEXT = {
  NEW: "New ...",
  OPEN: "Open",
  REMOVE: "Remove",
  REMOVE_ALL_ACTIVE: "Remove all active",
  FIND: "Find",
  RECENT_SEARCHES: "Recent",
  REMOVE_ALL_RECENT: "Remove all",
  FAVORITE_SEARCHES: "Saved",
  REMOVE_ALL_FAVORITE: "Remove all",
  OPTIONS: "Customize",
};

function separator (str) {
  return `${Date.now()}${str}`;
};

async function updateContextMenu () {
  const { recentSearches, favoriteSearches } = _state__WEBPACK_IMPORTED_MODULE_2__["default"].get();
  const { id } = await (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.getCurrentTab)();
  const { searches } = _state__WEBPACK_IMPORTED_MODULE_2__["default"].getTabState(id);

  const activeSearchOptions = searches
    .map((s, i) => [s, () => _actions__WEBPACK_IMPORTED_MODULE_3__["default"].openSearchGroup(i)])
    .filter(([s]) => s);

  if (activeSearchOptions.length) {
    activeSearchOptions.unshift([separator(0), null]);
    activeSearchOptions.push(
      [separator(1), null],
      [MENU_TEXT.REMOVE_ALL_ACTIVE, () => _actions__WEBPACK_IMPORTED_MODULE_3__["default"].removeAllSearches(id)],
    );
  }

  let favoriteSearchesSubmenu = {};
  const favoriteSearchesOptions = favoriteSearches.map((s) => [
    s,
    () => _actions__WEBPACK_IMPORTED_MODULE_3__["default"].openSearchGroup(undefined, s),
  ]);

  if (favoriteSearchesOptions.length) {
    favoriteSearchesOptions.push(
      [separator(2), null],
      [MENU_TEXT.REMOVE_ALL_FAVORITE, () => _actions__WEBPACK_IMPORTED_MODULE_3__["default"].removeFavoriteSearch()],
    );
    favoriteSearchesSubmenu = {
      [separator(3)]: null,
      [MENU_TEXT.FAVORITE_SEARCHES]: Object.fromEntries(
        favoriteSearchesOptions,
      ),
    };
  }


  let recentSearchesSubmenu = {};
  const recentSearchesOptions = recentSearches.map((s) => [
    s,
    () => _actions__WEBPACK_IMPORTED_MODULE_3__["default"].openSearchGroup(undefined, s),
  ]);

  if (recentSearchesOptions.length) {
    recentSearchesOptions.push(
      [separator(4), null],
      [MENU_TEXT.REMOVE_ALL_RECENT, () => _actions__WEBPACK_IMPORTED_MODULE_3__["default"].removeRecentSearch()],
    );
    recentSearchesSubmenu = {
      ...(favoriteSearchesOptions.length ? {} : { [separator(5)]: null }),
      [MENU_TEXT.RECENT_SEARCHES]: Object.fromEntries(
        recentSearchesOptions,
      ),
    };
  }

  await webextension_contextmenu__WEBPACK_IMPORTED_MODULE_0___default()({
    [_common_constants__WEBPACK_IMPORTED_MODULE_1__.FIND_SUGGESTION]: {
      [MENU_TEXT.NEW]: () => _actions__WEBPACK_IMPORTED_MODULE_3__["default"].openSearchGroup(),
      ...Object.fromEntries(activeSearchOptions),
      ...favoriteSearchesSubmenu,
      ...recentSearchesSubmenu,
      [separator(6)]: null,
      [MENU_TEXT.OPTIONS]: () => _actions__WEBPACK_IMPORTED_MODULE_3__["default"].openPage(_common_constants__WEBPACK_IMPORTED_MODULE_1__.PAGE_URLS.SETTINGS)
    },
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ },

/***/ "./src/background/helpers.js"
/*!***********************************!*\
  !*** ./src/background/helpers.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentTab: () => (/* binding */ getCurrentTab)
/* harmony export */ });
const browser = __webpack_require__(/*! webextension-polyfill/dist/browser-polyfill.min */ "./node_modules/webextension-polyfill/dist/browser-polyfill.min.js");

function getCurrentTab() {
  return browser.tabs
    .query({ active: true, currentWindow: true })
    .then((tabs) => tabs[0]);
}


/***/ },

/***/ "./src/background/message-answers.js"
/*!*******************************************!*\
  !*** ./src/background/message-answers.js ***!
  \*******************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/messages */ "./src/common/messages.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/background/state.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/background/actions.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_state__WEBPACK_IMPORTED_MODULE_1__, _actions__WEBPACK_IMPORTED_MODULE_2__]);
([_state__WEBPACK_IMPORTED_MODULE_1__, _actions__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




_common_messages__WEBPACK_IMPORTED_MODULE_0__["default"].closingTab(({ tabId }) => _actions__WEBPACK_IMPORTED_MODULE_2__["default"].closingTab({ tabId }));
_common_messages__WEBPACK_IMPORTED_MODULE_0__["default"].closingPopup(({ tabId }) => _actions__WEBPACK_IMPORTED_MODULE_2__["default"].closingPopup({ tabId }));

_common_messages__WEBPACK_IMPORTED_MODULE_0__["default"].addSearchToContextMenu(({ tabId, idx, string }) =>
  _actions__WEBPACK_IMPORTED_MODULE_2__["default"].addSearchToContextMenu({ tabId, idx, string }),
);

_common_messages__WEBPACK_IMPORTED_MODULE_0__["default"].getData(() => _state__WEBPACK_IMPORTED_MODULE_1__["default"].get())

_common_messages__WEBPACK_IMPORTED_MODULE_0__["default"].removeRecentSearch(({ string }) => _actions__WEBPACK_IMPORTED_MODULE_2__["default"].removeRecentSearch(string));
_common_messages__WEBPACK_IMPORTED_MODULE_0__["default"].addFavoriteSearch(({ string }) => _actions__WEBPACK_IMPORTED_MODULE_2__["default"].addFavoriteSearch(string));
_common_messages__WEBPACK_IMPORTED_MODULE_0__["default"].removeFavoriteSearch(({ string }) => _actions__WEBPACK_IMPORTED_MODULE_2__["default"].removeFavoriteSearch(string));

_common_messages__WEBPACK_IMPORTED_MODULE_0__["default"].setColors(({ colors }) => _actions__WEBPACK_IMPORTED_MODULE_2__["default"].setColors(colors));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ },

/***/ "./src/background/state.js"
/*!*********************************!*\
  !*** ./src/background/state.js ***!
  \*********************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var varstor_webextension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! varstor/webextension */ "../varstor/dist/varstor-webextension.js");
/* harmony import */ var varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(varstor_webextension__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/constants */ "./src/common/constants.js");



const EMPTY_OBJECT = { searches: [undefined] };

varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().add({
  tabs: {},
  recentSearches: [],
});

await varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().addPersistent({
  favoriteSearches: [],
  colors: _common_constants__WEBPACK_IMPORTED_MODULE_1__.COLORS,
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ...(varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default()),
  getTabState,
  initTabState,
  setTabState,
  setSearchInTab,
  getEmptySearchId,
  removeRecentSearch,
  addFavoriteSearch,
  removeFavoriteSearch,
});

function getTabState (tabId) {
  return varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().get().tabs[ tabId ] || EMPTY_OBJECT;
}

function initTabState (tabId) {
  const { tabs } = varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().get();
  tabs[tabId] = {
    open: false,
    searches: Array(_common_constants__WEBPACK_IMPORTED_MODULE_1__.COLORS.length).fill(),
    removeMenus: false,
    initialized: true,
  };
  varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().set({ tabs });

  return tabs[tabId];
}

function setTabState (tabId, state) {
  const { tabs } = varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().get();
  let prevTabState = tabs[tabId];

  if (!prevTabState) {
    prevTabState = initTabState(tabId);
  }

  tabs[tabId] = state ? { ...prevTabState, ...state } : EMPTY_OBJECT;
  varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().set({ tabs });
}

async function setSearchInTab (tabId, searchId, string) {
  const { tabs } = varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().get();
  if (tabs[tabId]) {
    tabs[tabId].searches[searchId] = string;
  }
  await addRecentSearch(string)
  varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().set({ tabs });
}

async function getEmptySearchId ({ id }) {
  const { searches } = varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().get().tabs[id];
  const emptySlot = searches.findIndex((s) => !s);

  return emptySlot >= 0 ? emptySlot : searches.length - 1;
}

async function addRecentSearch (str) {
  const { recentSearches } = varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().get();

  if (!str) {
    return;
  }

  const recentIdx = recentSearches.indexOf(str);

  if (recentIdx < 0) {
    if (recentSearches.length === _common_constants__WEBPACK_IMPORTED_MODULE_1__.RECENT_SEARCHES_LIMIT) {
      recentSearches.pop();
    }

  } else {
    recentSearches.splice(recentIdx, 1);
  }

  recentSearches.unshift(str);

  await varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().set({ recentSearches });
}

function removeRecentSearch (str) {
  const { recentSearches } = varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().get();

  varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().set({
    recentSearches: str ? recentSearches.filter((s) => s !== str) : [],
  });
}

function addFavoriteSearch (str) {
  const { favoriteSearches } = varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().get();
  const favoriteIdx = favoriteSearches.indexOf(str);

  if (favoriteIdx >= 0) {
    favoriteSearches.splice(favoriteIdx, 1);
  }

  favoriteSearches.unshift(str);

  varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().set({ favoriteSearches });
}

function removeFavoriteSearch (str) {
  const { favoriteSearches } = varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().get();

  varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().set({
    favoriteSearches: str ? favoriteSearches.filter((s) => s !== str) : [],
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ },

/***/ "./src/common/constants.js"
/*!*********************************!*\
  !*** ./src/common/constants.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COLORS: () => (/* binding */ COLORS),
/* harmony export */   EXTENSION_ID: () => (/* binding */ EXTENSION_ID),
/* harmony export */   FIND_HELPER_CLASS: () => (/* binding */ FIND_HELPER_CLASS),
/* harmony export */   FIND_SUGGESTION: () => (/* binding */ FIND_SUGGESTION),
/* harmony export */   FLAT_STRING_DELIMITER: () => (/* binding */ FLAT_STRING_DELIMITER),
/* harmony export */   KEYBOARD_KEYS: () => (/* binding */ KEYBOARD_KEYS),
/* harmony export */   PAGE_URLS: () => (/* binding */ PAGE_URLS),
/* harmony export */   RECENT_SEARCHES_LIMIT: () => (/* binding */ RECENT_SEARCHES_LIMIT)
/* harmony export */ });
const EXTENSION_ID = 'multi-word-searcher-webextension-unique-id';
const FIND_HELPER_CLASS = EXTENSION_ID + '-find-helper';

const FLAT_STRING_DELIMITER = "~";

const RECENT_SEARCHES_LIMIT = 15;

const PAGE_URLS = {
  SETTINGS: "/options/options.html",
  HOW_TO_USE: "/options/howtouse.html",
};

const COLORS = [
  "60, 180, 75",
  "230, 25, 75",
  "0, 130, 200",
  "245, 130, 48",
  "145, 30, 180",
  "240, 50, 230",
  "128, 128, 128",
  "210, 245, 60",
  "250, 190, 190",
  "255, 255, 25",
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


/***/ },

/***/ "./src/common/messages.js"
/*!********************************!*\
  !*** ./src/common/messages.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var webextension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-messages */ "../webextension-messages/dist/webextension-messages.js");
/* harmony import */ var webextension_messages__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_messages__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (webextension_messages__WEBPACK_IMPORTED_MODULE_0___default()([
  "openSearchGroup",
  "closingPopup",
  "addSearchToContextMenu",
  "popupState",
  "saveTabData",
  "removeSearch",
  "closingTab",
  "getData",
  "addToRecent",
  "removeRecentSearch",
  "addFavoriteSearch",
  "removeFavoriteSearch",
  "setColors",
]));

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		const hasSymbol = typeof Symbol === "function";
/******/ 		const webpackQueues = hasSymbol ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		const webpackExports = hasSymbol ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		const webpackError = hasSymbol ? Symbol("webpack error") : "__webpack_error__";
/******/ 		
/******/ 		const resolveQueue = (queue) => {
/******/ 			if(queue?.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		const wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 		
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					const queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					const obj = {};
/******/ 		
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			const ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			let queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			const depQueues = new Set();
/******/ 			const exports = module.exports;
/******/ 			let currentDeps;
/******/ 			let outerResolve;
/******/ 			let reject;
/******/ 			const promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			const handle = (deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				let fn;
/******/ 				const getResult = () => (currentDeps.map((d) => {
/******/ 		
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				const promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					const fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}
/******/ 			const done = (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue))
/******/ 			body(handle, done);
/******/ 			queue?.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	let __webpack_exports__ = __webpack_require__("./src/background-script.js");
/******/ 	
/******/ })()
;