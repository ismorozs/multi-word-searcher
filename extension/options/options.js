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

/***/ "./node_modules/simple-els/dist/simple-els.js"
/*!****************************************************!*\
  !*** ./node_modules/simple-els/dist/simple-els.js ***!
  \****************************************************/
(module) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else // removed by dead control flow
{}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/combine.js"
/*!************************!*\
  !*** ./src/combine.js ***!
  \************************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_629__) {

__nested_webpack_require_629__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_629__.d(__nested_webpack_exports__, {
/* harmony export */   combineState: () => (/* binding */ combineState),
/* harmony export */   combineTemplates: () => (/* binding */ combineTemplates)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_629__(/*! ./consts */ "./src/consts.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_629__(/*! ./state */ "./src/state.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_629__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_629__(/*! ./html */ "./src/html.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_629__(/*! ./error */ "./src/error.js");






function combineTemplates(combineCb, templateId) {
  const childrenState = {};
  const inject = injectTemplate.bind(null, childrenState, templateId);
  const markupStr = combineCb.call(null, inject);
  return [(0,_html__WEBPACK_IMPORTED_MODULE_3__.cloneHTMLMarkup)(markupStr), childrenState];
}

function injectTemplate (childrenState, templateId, ...args) {
  const [template, value] = args;
  const [name, createComponent] = getTemplateOptions(template);
  const id = Object.keys(childrenState).length;
  const templateName = name || `${_consts__WEBPACK_IMPORTED_MODULE_0__.UTIL_KEYS.CHILDREN}${id}`;
  const computeFn =
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isFunction)(value) &&
    function (...args) {
      return normalizeValue(value.apply(null, args));
    };
  const dependencies = computeFn && (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getParamNames)(value) || [];
  childrenState[`${templateName}`] = {
    createComponent,
    [_consts__WEBPACK_IMPORTED_MODULE_0__.UTIL_KEYS.CHILDREN]: [],
    [_consts__WEBPACK_IMPORTED_MODULE_0__.UTIL_KEYS.ON_CHANGE]: [],
    [_consts__WEBPACK_IMPORTED_MODULE_0__.UTIL_KEYS.DEPENDANTS]: [],
    [_consts__WEBPACK_IMPORTED_MODULE_0__.UTIL_KEYS.ON_CHANGE]: [],
    [_consts__WEBPACK_IMPORTED_MODULE_0__.UTIL_KEYS.IS_RENDERED]: false,
    [_consts__WEBPACK_IMPORTED_MODULE_0__.UTIL_KEYS.VALUE]: {
      value: !(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isFunction)(value) && normalizeValue(value),
      computeFn,
      dependencies,
    },
  };

  return `<span ${_consts__WEBPACK_IMPORTED_MODULE_0__.BINDING_SIGN.COMPONENT}${templateName}></span>`;
}

function combineState (state, childrenState) {
  Object.assign(state, childrenState);
  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.forEach)(childrenState, (templateName, template) => {
    const { dependencies, computeFn, value } = template[_consts__WEBPACK_IMPORTED_MODULE_0__.UTIL_KEYS.VALUE];
    dependencies.forEach((name) => {
      if (!state[name]) {
        (0,_error__WEBPACK_IMPORTED_MODULE_4__.throwNoDeclaredDependencyError)(name, templateName);
      }
      state[name][_consts__WEBPACK_IMPORTED_MODULE_0__.UTIL_KEYS.DEPENDANTS][templateName] = [_consts__WEBPACK_IMPORTED_MODULE_0__.UTIL_KEYS.VALUE];
    });
    template[_consts__WEBPACK_IMPORTED_MODULE_0__.UTIL_KEYS.VALUE].value = computeFn
      ? computeFn.apply(null, (0,_state__WEBPACK_IMPORTED_MODULE_1__.getArguments)(dependencies, state))
      : value;
  })
}

function getTemplateOptions(templateObj) {
  const keys = Object.keys(templateObj);
  if (keys.length === 1) {
    return Object.entries(templateObj)[0];
  }

  return [false, templateObj];
}

function normalizeValue (value) {
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isArray)(value) ? (value[0] && !(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isArray)(value[0])) ? value.map((v) => [v]): value : [[value || {}]]
} 

/***/ },

/***/ "./src/consts.js"
/*!***********************!*\
  !*** ./src/consts.js ***!
  \***********************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_4637__) {

__nested_webpack_require_4637__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_4637__.d(__nested_webpack_exports__, {
/* harmony export */   BINDING_SIGN: () => (/* binding */ BINDING_SIGN),
/* harmony export */   CHILDREN_LIST_OPERATIONS: () => (/* binding */ CHILDREN_LIST_OPERATIONS),
/* harmony export */   COMPONENT_PREFIX: () => (/* binding */ COMPONENT_PREFIX),
/* harmony export */   DEFAULT_CONTAINER: () => (/* binding */ DEFAULT_CONTAINER),
/* harmony export */   DESTROY_OP: () => (/* binding */ DESTROY_OP),
/* harmony export */   EMPTY_FN: () => (/* binding */ EMPTY_FN),
/* harmony export */   NOT_BINDING_PREFIX: () => (/* binding */ NOT_BINDING_PREFIX),
/* harmony export */   REACTIVE_TYPES: () => (/* binding */ REACTIVE_TYPES),
/* harmony export */   STATE_BEHAVIOUR_DELIMITER: () => (/* binding */ STATE_BEHAVIOUR_DELIMITER),
/* harmony export */   UTIL_KEYS: () => (/* binding */ UTIL_KEYS)
/* harmony export */ });
const STATE_BEHAVIOUR_DELIMITER = "_";
const NOT_BINDING_PREFIX = " ";
const BINDING_SIGN = {
  BEHAVIOR: "@",
  CLASS: ".",
  COMPONENT: "&",
};
const UTIL_KEYS = {
  VALUE: STATE_BEHAVIOUR_DELIMITER,
  DEPENDENCIES: "dependencies",
  DEPENDANTS: "dependants",
  ON_CHANGE: "onChange",
  LISTENERS: "listeners",
  MARKUP: "el",
  EVENT_LISTENERS: "eventListeners",
  CHILDREN: "children",
  TEMPLATE: "template",
  IS_RENDERED: "isRendered",
  ON_MESSAGE: "onMessage",
  ON_MESSAGE_COMPONENT: NOT_BINDING_PREFIX + "onMessage",
  PARENT_STATE: NOT_BINDING_PREFIX + "parentState",
  ON_CHANGE_COMPONENT: NOT_BINDING_PREFIX + "onChange",
  CHILDREN_DATA: NOT_BINDING_PREFIX + "childrenData",
  MARKUP_COMPONENT: NOT_BINDING_PREFIX + "el",
  IS_RENDERED_COMPONENT: NOT_BINDING_PREFIX + "isRendered",
  IS_SAME_VALUE: "isSame",
};

const COMPONENT_PREFIX = "component";
const DESTROY_OP = "destroy";

const REACTIVE_TYPES = [
  "html",
  "value",
  "style",
  "text",
  "attrs",
  "class",
  "onChange",
  UTIL_KEYS.VALUE,
];

const DEFAULT_CONTAINER = "div";

const EMPTY_FN = () => {};

const CHILDREN_LIST_OPERATIONS = [DESTROY_OP, "set", "insert", "push"];

/***/ },

/***/ "./src/error.js"
/*!**********************!*\
  !*** ./src/error.js ***!
  \**********************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_6958__) {

__nested_webpack_require_6958__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_6958__.d(__nested_webpack_exports__, {
/* harmony export */   throwIllegalBindingNameError: () => (/* binding */ throwIllegalBindingNameError),
/* harmony export */   throwNoDeclaredDependencyError: () => (/* binding */ throwNoDeclaredDependencyError)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_6958__(/*! ./consts */ "./src/consts.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_6958__(/*! ./helpers */ "./src/helpers.js");



function throwIllegalBindingNameError (name) {
  throwError(
    `Binding @${name} can't be added in the markup, because this name is reserved by the library.\nOther reserved names: ${(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.map)(_consts__WEBPACK_IMPORTED_MODULE_0__.UTIL_KEYS, (_, v) => v)}`,
  );
}

function throwNoDeclaredDependencyError (name, dependant) {
  throwError(
    `Dependency '${name}' is used for '${dependant}', but is not declared as a state value of the component.`,
  );
}

function throwError (text) {
  throw new Error (text)
}

/***/ },

/***/ "./src/helpers.js"
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_8316__) {

__nested_webpack_require_8316__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_8316__.d(__nested_webpack_exports__, {
/* harmony export */   addEnding: () => (/* binding */ addEnding),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   filter: () => (/* binding */ filter),
/* harmony export */   forEach: () => (/* binding */ forEach),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   getFilteredKeys: () => (/* binding */ getFilteredKeys),
/* harmony export */   getParamNames: () => (/* binding */ getParamNames),
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isDOMElement: () => (/* binding */ isDOMElement),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isHTMLString: () => (/* binding */ isHTMLString),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   isUndefined: () => (/* binding */ isUndefined),
/* harmony export */   map: () => (/* binding */ map),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   toCamelCase: () => (/* binding */ toCamelCase),
/* harmony export */   toDashCase: () => (/* binding */ toDashCase),
/* harmony export */   uid: () => (/* binding */ uid)
/* harmony export */ });
const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
const ARGUMENT_NAMES = /([^\s,]+)/g;

function isHTMLString(obj) {
  return isString(obj) && obj.indexOf("<") === 0;
}

function isString(obj) {
  return getObjectType(obj) === "[object String]";
}

function isFunction(obj) {
  return getObjectType(obj) === "[object Function]";
}

function isObject(obj) {
  return getObjectType(obj) === "[object Object]";
}

function getObjectType(obj) {
  return Object.prototype.toString.call(obj);
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

function map(obj, cb) {
  const res = Object.entries(obj).map(([k, v]) => cb(k, v));
  if (res[0]?.length === 2) {
    return Object.fromEntries(res);
  }

  return res;
}

function toDashCase(str) {
  return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

function toCamelCase(str) {
  return str.replace(/-([a-z])/gi, (all, letter) => letter.toUpperCase());
}

function addEnding(str, ending, condition) {
  return `${str}${(condition && ending) || ""}`;
}

function isNumber(obj) {
  return getObjectType(obj) === "[object Number]" && obj === obj;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copy);

function copy(destination, source) {
  if (!destination) {
    return copy({}, source);
  }

  for (let key in source) {
    if (isUndefined(source[key])) {
      continue;
    }

    if (source.hasOwnProperty(key) && isObject(source[key])) {
      if (!destination[key]) {
        destination[key] = {};
      }
      copy(destination[key], source[key]);
      continue;
    }

    if (isArray(source[key])) {
      if (!destination[key]) {
        destination[key] = [];
      }
      copyArray(destination[key], source[key]);
      continue;
    }

    if (isDOMElement(source[key])) {
      destination[key] = source[key].cloneNode(true);
      continue;
    }

    destination[key] = source[key];
  }

  return destination;
}

function copyArray(destination, source) {
  for (let i = 0; i < source.length; i++) {
    if (isObject(source[i])) {
      destination[i] = destination[i] || {};
      copy(destination[i], source[i]);
      continue;
    }

    if (isArray(source[i])) {
      destination[i] = destination[i] || [];
      copyArray(destination[i], source[i]);
      continue;
    }

    destination[i] = source[i];
  }

  return destination;
}

function isDOMElement(obj) {
  return obj && typeof obj.tagName !== "undefined";
}

function isUndefined(obj) {
  return typeof obj === "undefined";
}

function isArray(obj) {
  return getObjectType(obj) === "[object Array]";
}

function forEach(obj, cb) {
  Object.entries(obj || {}).forEach(([k, v]) => cb(k, v));
}

function set(obj, path, value) {
  if (!path.length) {
    if (isObject(value)) {
      return Object.assign(obj, value);
    }
    return (obj = value);
  }

  let dest = obj;
  for (var i = 0; i < path.length - 1; i++) {
    if (!dest[path[i]]) {
      dest = dest[path[i]] = {};
    } else {
      dest = dest[path[i]];
    }
  }

  if (isObject(value)) {
    dest[path[i]] = dest[path[i]] || {};
    Object.assign(dest[path[i]], value);
  } else {
    dest[path[i]] = value;
  }

  return obj;
}

function filter(obj, cb) {
  return Object.fromEntries(
    Object.entries(obj).filter(([k, v]) => cb(k, v) === true),
  );
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function get(obj, path, def) {
  let value = obj;
  for (let i = 0; i < path.length; i++) {
    try {
      value = value[path[i]];
    } catch {
      return def;
    }
  }

  return !isUndefined(value) ? value : def;
}

function getFilteredKeys (obj, cb) {
  return map(
    filter(
      obj,
      (k, v) => cb(k, v),
    ),
    (k) => k,
  );
}

/***/ },

/***/ "./src/html.js"
/*!*********************!*\
  !*** ./src/html.js ***!
  \*********************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_14172__) {

__nested_webpack_require_14172__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_14172__.d(__nested_webpack_exports__, {
/* harmony export */   MARKUP_ACTIONS: () => (/* binding */ MARKUP_ACTIONS),
/* harmony export */   addChildMarkup: () => (/* binding */ addChildMarkup),
/* harmony export */   applyToMarkup: () => (/* binding */ applyToMarkup),
/* harmony export */   cloneHTMLMarkup: () => (/* binding */ cloneHTMLMarkup),
/* harmony export */   gatherBindings: () => (/* binding */ gatherBindings),
/* harmony export */   removeChildMarkup: () => (/* binding */ removeChildMarkup),
/* harmony export */   setupEventListener: () => (/* binding */ setupEventListener),
/* harmony export */   walkNodes: () => (/* binding */ walkNodes)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_14172__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_14172__(/*! ./consts */ "./src/consts.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_14172__(/*! ./popup */ "./src/popup.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_14172__(/*! ./error */ "./src/error.js");





const MARKUP_ACTIONS = {
  value: ({ el }, value) => (el.value = value),
  text: ({ el }, value) => (el.textContent = value),
  html: ({ el }, value) => (el.innerHTML = value),
  attrs: ({ el, attrs }, value) => changeAttributes(el, { ...attrs, ...value, class: el.className}),
  style: ({ el }, value) => changeStyles(el, value),
  class: ({ el, classes, templateId }, value) => 
    changeClasses(el, value.map((cls) => `${templateId}${cls}`).concat(classes)),
};

function cloneHTMLMarkup(markup) {
  const markupStr = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isHTMLString)(markup.trim())
    ? markup
    : document.querySelector(markup).innerHTML;
  return convertStringToHTML(markupStr);
}

function convertStringToHTML(markupString) {
  const parser = new DOMParser();
  const parsedDocument = parser.parseFromString(markupString, "text/html");
  return parsedDocument.body.firstElementChild;
}
function gatherBindings(componentHTML, templateId, dontRemove) {
  const bindings = {};

  walkNodes(componentHTML, (HTMLNode) => {
    const { name, el, classes, attrs, isComponent, placeholder } = extractBinding(HTMLNode, templateId, dontRemove);
    if (name) {
      bindings[name] = { el, classes, attrs, isComponent, placeholder, templateId };
    }
  });

  return bindings;
}

function extractBinding(el, templateId, dontRemove) {
  let binding = {};
  const attrs = {};
  const classes = []

  const attributes = el.getAttributeNames();
  for (const attr of attributes) {
    if (attr.startsWith(_consts__WEBPACK_IMPORTED_MODULE_1__.BINDING_SIGN.CLASS)) {
      (dontRemove && (attrs[attr] = true)) || el.removeAttribute(attr);
      handleClassBinding(
        el,
        templateId,
        attr.slice(_consts__WEBPACK_IMPORTED_MODULE_1__.BINDING_SIGN.CLASS.length),
        classes
      );
      continue;
    }

    if (attr.startsWith(_consts__WEBPACK_IMPORTED_MODULE_1__.BINDING_SIGN.BEHAVIOR)) {
      const name = attr.slice(_consts__WEBPACK_IMPORTED_MODULE_1__.BINDING_SIGN.BEHAVIOR.length);
      if (Object.values(_consts__WEBPACK_IMPORTED_MODULE_1__.UTIL_KEYS).includes(name)) {
        (0,_error__WEBPACK_IMPORTED_MODULE_3__.throwIllegalBindingNameError)(name);
      }
      (dontRemove && (attrs[attr] = true)) || el.removeAttribute(attr);
      binding = { name, el };
      handleClassBinding(el, templateId, name, classes);
      continue;
    }

    if (attr.startsWith(_consts__WEBPACK_IMPORTED_MODULE_1__.BINDING_SIGN.COMPONENT)) {
      (dontRemove && (attrs[attr] = true)) || el.removeAttribute(attr);
      binding = { name: attr.slice(_consts__WEBPACK_IMPORTED_MODULE_1__.BINDING_SIGN.COMPONENT.length), el, placeholder: el, isComponent: true };
      continue;
    }

    attrs[attr] = el.getAttribute(attr);
  }

  return { ...binding, classes, attrs };
}

function handleClassBinding (el, templateId, classesString, classes) {
  const className = classesString
    .split(_consts__WEBPACK_IMPORTED_MODULE_1__.BINDING_SIGN.CLASS)
    .map((cls) => `${templateId}${cls}`);
  const cls = el.classList;

  cls.add.apply(cls, className);
  classes.push.apply(classes, className);
}

function walkNodes(node, cb) {
  cb(node);

  Array.prototype.slice.call(node.children).forEach((el) => walkNodes(el, cb));
}

function applyToMarkup(elData, type, value) {
  MARKUP_ACTIONS[type] && MARKUP_ACTIONS[type](elData, value);
}

function changeAttributes (el, newAttrs) {
  for (const name of el.getAttributeNames()) {
    if (!newAttrs[name]) {
      el.removeAttribute(name);
    }
  }
  Object.entries(newAttrs).forEach(([k, v]) => el.setAttribute(k, v));
}

function changeStyles (el, styles) {
  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.forEach)(styles, (k, v) => {
    el.style[(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.toDashCase)(k)] = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.addEnding)(v, "px", (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isNumber)(v));
  });
}

function changeClasses (el, classes) {
  el.classList.value = classes.join(" ");
}

function setupEventListener (el, type, cb, stateMutator) {
  const fn = (e) => cb(e, stateMutator);

  el.addEventListener(type, fn);
}

function removeChildMarkup (state, idx) {
  const { children, [_consts__WEBPACK_IMPORTED_MODULE_1__.UTIL_KEYS.MARKUP]: el } = state[_consts__WEBPACK_IMPORTED_MODULE_1__.UTIL_KEYS.CHILDREN_DATA];
  const markup = state[_consts__WEBPACK_IMPORTED_MODULE_1__.UTIL_KEYS.MARKUP_COMPONENT];
  
  if (children.length === 1) {
    markup.parentNode.replaceChild(el.placeholder, markup);
    el.el = el.placeholder;
    return;
  }

  if (idx === 0) {
    el.el = markup.nextSibling;
  }

  markup.parentNode.removeChild(markup); 
}

function addChildMarkup(parentNode, component, options) {
  const { markup, styles, id } = component;
  const { isNoShadow, nextNode, placeholder, isPopup } = options;

  let el;

  if (isNoShadow) {
    el = markup;
  } else {
    el = document.createElement("div");
    const host = el.attachShadow({ mode: "open" });
    host.adoptedStyleSheets = styles;
    host.appendChild(markup);
  }

  if (placeholder) {
    parentNode.replaceChild(el, placeholder);
  } else if (nextNode) {
    parentNode.insertBefore(el, nextNode);
  } else {
    parentNode.appendChild(el);
  }

  if (isPopup) {
    (0,_popup__WEBPACK_IMPORTED_MODULE_2__.addPopupLogic)(markup, { ...options, id });
  }
}

/***/ },

/***/ "./src/lifecycle.js"
/*!**************************!*\
  !*** ./src/lifecycle.js ***!
  \**************************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_21110__) {

__nested_webpack_require_21110__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_21110__.d(__nested_webpack_exports__, {
/* harmony export */   runStateChangeListeners: () => (/* binding */ runStateChangeListeners)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_21110__(/*! ./consts */ "./src/consts.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_21110__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_21110__(/*! ./state */ "./src/state.js");




function runStateChangeListeners (changes, state) {
  const { [_consts__WEBPACK_IMPORTED_MODULE_0__.UTIL_KEYS.ON_CHANGE_COMPONENT]: onChangeComponent, [_consts__WEBPACK_IMPORTED_MODULE_0__.UTIL_KEYS.MARKUP_COMPONENT]: markup } = state;

  const bindings = (0,_state__WEBPACK_IMPORTED_MODULE_2__.getStateBindings)(state);
  const componentApi = (0,_state__WEBPACK_IMPORTED_MODULE_2__.createStateApi)(state);
  (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.forEach)(
    bindings,
    (name, { [_consts__WEBPACK_IMPORTED_MODULE_0__.UTIL_KEYS.ON_CHANGE]: listeners, [_consts__WEBPACK_IMPORTED_MODULE_0__.UTIL_KEYS.MARKUP]: el }) => {
      if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isArray)(changes) && !changes.includes(name)) {
        return;
      }

      const change = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isArray)(changes) ? [name] : changes;
      listeners?.forEach((cb) => cb(change, componentApi, el?.el));
    },
  );
  onChangeComponent(changes, componentApi, markup);

  return componentApi;
}

/***/ },

/***/ "./src/popup.js"
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_22922__) {

__nested_webpack_require_22922__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_22922__.d(__nested_webpack_exports__, {
/* harmony export */   addPopupLogic: () => (/* binding */ addPopupLogic)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_22922__(/*! ./consts */ "./src/consts.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_22922__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_22922__(/*! ./styles */ "./src/styles.js");




const AXIS = {
  left: "X",
  top: "Y",
};

const DIRECTIONS = ["left", "top", "bottom", "right"];

function addPopupLogic (markup, options) {
  const { handle, closeButton, id } = options;

  closeButton && markup.parentNode
    .querySelector((0,_styles__WEBPACK_IMPORTED_MODULE_2__.addClassPrefix)(closeButton, id))
    ?.addEventListener("click", () => markup.parentNode.removeChild(markup));
  handle && markup.parentNode
    .querySelector((0,_styles__WEBPACK_IMPORTED_MODULE_2__.addClassPrefix)(handle, id))
    ?.addEventListener("mousedown", (e) => {
      const el = e.target;
      const shiftX = e.clientX - markup.getBoundingClientRect().left;
      const shiftY = e.clientY - markup.getBoundingClientRect().top;

      function onMouseMove(e) {
        requestAnimationFrame(() => {
          markup.style.left = e.clientX - shiftX + "px";
          markup.style.top = e.clientY - shiftY + "px";
          markup.style.transform = "none";
        });
      }

      function onMouseUp(e) {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        el.removeEventListener("mouseup", onMouseUp);
      }

      document.addEventListener("mouseup", onMouseUp);
      el.addEventListener("mouseup", onMouseUp);

      document.addEventListener("mousemove", onMouseMove);
    });

  positionPopup(markup, options);
}

function positionPopup (markup, options) {
  const { left, top, bottom, right } = options;
  markup.style.position = "fixed";
  const { width, height } = markup.getBoundingClientRect();
  

  if (!left && !right) {
    options.left = "center";
  }

  if (!top && !bottom) {
    options.top = "center";
  }

  if (right && !left) {
    delete options.right;
    options.left = document.body.clientWidth - width - right;
  }

  if (bottom && !top) {
    delete options.bottom;
    options.top = window.innerHeight - height - bottom;
  }

  const style = [];
  (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.forEach)(options, (dir, dist) => {
    if (DIRECTIONS.includes(dir)) {
      if (dist === "center") {
        return style.push(`${dir}: 50%`, `transform: translate${AXIS[dir]}(-50%)`);
      }
      style.push(`${dir}: ${(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.addEnding)(dist, 'px', (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isNumber)(dist))}`);
    }
  });

  options.left === "center" &&
    options.top === "center" &&
    style.push("transform: translate(-50%, -50%)");

  markup.style = `${markup.style.cssText}; ${style.join(";")}`;
}

/***/ },

/***/ "./src/state.js"
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_26315__) {

__nested_webpack_require_26315__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_26315__.d(__nested_webpack_exports__, {
/* harmony export */   createStateApi: () => (/* binding */ createStateApi),
/* harmony export */   getArguments: () => (/* binding */ getArguments),
/* harmony export */   getStateBindings: () => (/* binding */ getStateBindings),
/* harmony export */   prepareStateSettings: () => (/* binding */ prepareStateSettings),
/* harmony export */   setupComponentMarkup: () => (/* binding */ setupComponentMarkup),
/* harmony export */   updateTemplateMarkup: () => (/* binding */ updateTemplateMarkup)
/* harmony export */ });
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_26315__(/*! ./html */ "./src/html.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_26315__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_26315__(/*! ./consts */ "./src/consts.js");
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_26315__(/*! ./lifecycle */ "./src/lifecycle.js");





function prepareStateSettings (stateBehaviour) {
  const state = {
    [_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.ON_MESSAGE_COMPONENT]: stateBehaviour[_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.ON_MESSAGE] || _consts__WEBPACK_IMPORTED_MODULE_2__.EMPTY_FN,
    [_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.ON_CHANGE_COMPONENT]: stateBehaviour[_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.ON_CHANGE] || _consts__WEBPACK_IMPORTED_MODULE_2__.EMPTY_FN,
  };
  (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.map)(_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS, (_, v) => v).forEach((v) => delete stateBehaviour[v]);

  (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.forEach)(stateBehaviour, (stateKey, userValue) => {
    const [name, type] = splitStateKey(stateKey);

    if (!state[name]) {
      state[name] = {
        [_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE]: {},
        [_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.DEPENDANTS]: {},
        [_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.ON_CHANGE]: [],
      };
    }

    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isObject)(userValue)) {
      return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.forEach)(userValue, (type, value) => {
        state[name][type] = prepareValue(name, type, value, state);
      });
    }

    state[name][type] = prepareValue(name, type, userValue, state);
  });

  return state;
}

function splitStateKey(key) {
  const segments = key.split(_consts__WEBPACK_IMPORTED_MODULE_2__.STATE_BEHAVIOUR_DELIMITER);
  if (segments.length === 1) {
    return [segments[0], _consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE];
  }

  const name = segments.slice(0, -1).join(_consts__WEBPACK_IMPORTED_MODULE_2__.STATE_BEHAVIOUR_DELIMITER);
  const type = segments.slice(-1)[0];

  return [name, type];
}

function updateTemplateMarkup(markupPointers, state) {
  (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.forEach)(markupPointers, (name, elData) => {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.forEach)(state[(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.toCamelCase)(name)], (type, value) =>
      (0,_html__WEBPACK_IMPORTED_MODULE_0__.applyToMarkup)(elData, type, value?.value),
    );
  });
}

function setupComponentMarkup(markupPointers, state, args) {
  (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.forEach)(
    markupPointers,
    (name, elData) => ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.set)(state, [(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.toCamelCase)(name), _consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.MARKUP], elData))
  );

  setValues(state, args);

  (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.forEach)(
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.filter)(state, (k) => !k.startsWith(_consts__WEBPACK_IMPORTED_MODULE_2__.NOT_BINDING_PREFIX)),
    (name, binding) => {
      const { [_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.MARKUP]: el, [_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.IS_RENDERED]: isRendered, [_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE]: value } = binding;

      if (binding.createComponent) {
        if (!isRendered) {
          const childrenApi = createChildrenApi(binding);
          const diffs = getChildrenDifference(value.value, []);
          for (let operation of _consts__WEBPACK_IMPORTED_MODULE_2__.CHILDREN_LIST_OPERATIONS) {
            diffs[operation].forEach((val) =>
              childrenApi[operation].apply(null, val),
            );
          }
        }

        binding[_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.PARENT_STATE] = state;
        return;
      }

      const eventListeners = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.filter)(binding, (type, value) => isEventListener(type, value.value));
      (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.forEach)(eventListeners, (event, cb) => (0,_html__WEBPACK_IMPORTED_MODULE_0__.setupEventListener)(el.el, event, cb.value, createStateApi(state)));
  });

  return createStateApi(state);
}

function prepareValue(name, type, value, state) {
  if (type === _consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.ON_CHANGE) {
    return [value];
  }

  const isReactive = isReactiveFunction(type, value);
  const dependencies = isReactive && (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getParamNames)(value);

  if (dependencies) {
    dependencies.forEach((dependency) => {
      if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.get)(state, [dependency, _consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.DEPENDANTS, name])) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.set)(state, [dependency, _consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.DEPENDANTS, name], []);
      }
      state[dependency][_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.DEPENDANTS][name].push(type);
    });
  }

  return {
    value: isReactive ? value(...getArguments(dependencies, state)) : value,
    computeFn: isReactive && value,
    dependencies,
  };
}

function isReactiveFunction(type, value) {
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value) && _consts__WEBPACK_IMPORTED_MODULE_2__.REACTIVE_TYPES.includes(type);
}

function isEventListener (type, value) {
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value) && !_consts__WEBPACK_IMPORTED_MODULE_2__.REACTIVE_TYPES.includes(type);
}

function getArguments(names, state) {
  const values = getValues(state);
  return names.map((name) => values[name]);
}

function getValues(state) {
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.map)(
    getStateBindings(state),
    (k, v) => [k, v[_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE]?.value],
  );
}

function setValues(state, changes) {
  const realChanges = {};

  for (let [k, v] of Object.entries(changes)) {
    setValue(k, v, state, realChanges, changes);
  }

  if (Object.keys(realChanges).length) {
    updateComponentAfterChange(state, realChanges);
  }
}

function setValue(key, value, state, realChanges, changes) {
  const prevValue = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.get)(state, [key, _consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE, 'value']);

  if (prevValue !== value) {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.set)(state, [key, _consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE, 'value'], value);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.set)(realChanges, [key, _consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE], { newValue: value, prevValue });
  } else {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.set)(realChanges, [key, _consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE], { [_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.IS_SAME_VALUE]: true });
  }

  updateDependencies(key, state, realChanges, changes);
}

function updateDependencies(key, state, realChanges, changes) {
  const dependants = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.get)(state, [key, _consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.DEPENDANTS], {});

  for (let [dependant, types] of Object.entries(dependants)) {
    types.forEach((type) => {
      const { computeFn, dependencies } = state[dependant][type];
      const realChangesKeys = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getFilteredKeys)(realChanges, (k, v) => !!v[_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE]);
      const changesKeys = Object.keys(changes);
      const isUpdated = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.get)(realChanges, [dependant, type]);

      if (!dependencies.every((name) =>
        changesKeys.includes(name) && realChangesKeys.includes(name) || !changesKeys.includes(name)
      ) || isUpdated) {
        return;
      }

      const prevValue = state[dependant][type].value;
      const newValue = computeFn(...getArguments(dependencies, state));

      if (prevValue !== newValue) {
        state[dependant][type].value = newValue;
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.set)(realChanges, [dependant, type], { newValue, prevValue });

        if (type === _consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE) {
          updateDependencies(dependant, state, realChanges, changes);
        }
      }
    })
  }
}

function updateComponentAfterChange (state, realChanges) {
  (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.forEach)(realChanges, (name, change) => {
    const binding = state[name];
    const { [_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.MARKUP]: el, [_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.CHILDREN]: children } = binding;

    if (children) {
      const { newValue, prevValue } = change[_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE];
      const childrenApi = createChildrenApi(binding);
      const diffs = getChildrenDifference(newValue, prevValue);

      for (let operation of _consts__WEBPACK_IMPORTED_MODULE_2__.CHILDREN_LIST_OPERATIONS) {
        const values = diffs[operation];
        values.forEach((val) => {
          if (operation === _consts__WEBPACK_IMPORTED_MODULE_2__.DESTROY_OP && children.length) {
            (0,_lifecycle__WEBPACK_IMPORTED_MODULE_3__.runStateChangeListeners)(false, children[val[0]].state);
          }
          childrenApi[operation].apply(null, val);
        });
      }
      binding[_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.IS_RENDERED] = true;
      return;
    }

    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.forEach)(change, (type, value) => (0,_html__WEBPACK_IMPORTED_MODULE_0__.applyToMarkup)(el, type, value.newValue));
  });

  const changedKeys = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getFilteredKeys)(
    realChanges,
    (k, v) =>
      !!v[_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE] &&
      !v[_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE][_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.IS_SAME_VALUE] &&
      !state[k][_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.CHILDREN],
  );
  state[_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.IS_RENDERED_COMPONENT] && changedKeys.length && (0,_lifecycle__WEBPACK_IMPORTED_MODULE_3__.runStateChangeListeners)(changedKeys, state);
}

function addStateListener (state, keys, cb) {
  keys.forEach((key) => state[key][_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.ON_CHANGE].push(cb));
}

function removeStateListener (state, keys, removeCb) {
  keys.forEach((key) => {
    const listeners = state[key][_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.ON_CHANGE];
    const removeIdx = listeners.findIndex((cb) => cb === removeCb);
    listeners.splice(removeIdx, 1);
  });
}

function sendMessage (state, data) {
  let parent = state[_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.PARENT_STATE];
  const childrenData = state[_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.CHILDREN_DATA];
  const index = childrenData.children.findIndex((api) => api.state === state);
  const stop = () => parent = {};

  while (parent) {
    parent[_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.ON_MESSAGE_COMPONENT](
      data,
      {
        stop,
        ...createStateApi(parent),
      },
      {
        index,
        ...createChildrenApi(childrenData, true),
      },
    );

    parent = parent[_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.PARENT_STATE];
  }
}

function createStateApi (state) {
  return {
    get: getValues.bind(null, state),
    set: setValues.bind(null, state),
    children: getStateChildren.bind(null, state),
    send: sendMessage.bind(null, state),
    onChange: addStateListener.bind(null, state),
    removeListener: removeStateListener.bind(null, state),
    [_consts__WEBPACK_IMPORTED_MODULE_2__.DESTROY_OP]: _html__WEBPACK_IMPORTED_MODULE_0__.removeChildMarkup.bind(null, state),
    markup: getComponentMarkups(state),
    state,
  }
}

function getStateBindings (state) {
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.filter)(
    state,
    (k, v) => !!v?.[_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE] && !v?.[_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.CHILDREN],
  );
}

function getComponentMarkups (state) {
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.map)(
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.filter)(
      state,
      (k, v) => !!v?.[_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.MARKUP]?.el && !v?.[_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.CHILDREN],
    ),
    (k, v) => [k, v?.[_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.MARKUP]?.el],
  );
}

function createChildrenApi (childrenBinding, isManualUse) {
  const { createComponent, [_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.PARENT_STATE]: parentState, [_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.CHILDREN]: children, [_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE]: value } = childrenBinding;

  const create = (value, nextNode, isFirst) => {
    const { [_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.MARKUP]: el } = childrenBinding;

    const componentApi = createComponent(value, el.el.parentNode, {
      isNoShadow: true,
      placeholder: isFirst && el.el,
      nextNode,
      [_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.CHILDREN_DATA]: childrenBinding,
      [_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.PARENT_STATE]: parentState,
    });

    if (isFirst) {
      el.el = componentApi.state[_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.MARKUP_COMPONENT];
    }

    return componentApi;
  };

  return {
    [_consts__WEBPACK_IMPORTED_MODULE_2__.DESTROY_OP]: (idx) => {
      children[idx][_consts__WEBPACK_IMPORTED_MODULE_2__.DESTROY_OP](idx);
      children.splice(idx, 1);
      if (isManualUse) {
        value.value.splice(idx, 1);
      }
    },
    push: (value) => {
      const nextNode =
        children.length && children[children.length - 1].state[
          _consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.MARKUP_COMPONENT
        ].nextSibling;
      children.push(create(value, nextNode, !children.length));
      if (isManualUse) {
        value.value.push(value);
      }
    },
    insert: (value, idx = 0) => {
      const nextNode = children[idx].state[_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.MARKUP_COMPONENT];
      children.splice(idx, 0, create(value, nextNode));
      if (isManualUse) {
        value.value.splice(idx, 0, value);
      }
    },
    set: (values, idx) => {
      if (idx || idx === 0) {
        return children[idx].set(values);
      }
    },
    get: (idx) => {
      if (idx || idx === 0) {
        return children[idx].get();
      }

      return children.map(({ get }) => get());
    },
    forEach: (cb) => children.forEach(cb),
  };
}

function getStateChildren (state, name) {
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.map)((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.filter)(state, (k, v) => !!v?.[_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.CHILDREN]), (k, v) => [k, createChildrenApi(v)]);
}

function getChildrenDifference (news, prevs) {
  const destroy = [];
  const set = [];
  const insert = [];
  const push = [];
  const newsInPrevs = {};
  const foundSameUids = {};

  let removeCount = 0;
  prevs.forEach(([prev, uid], i) => {
    const prevFoundIndex = foundSameUids[uid] >= 0 ? foundSameUids[uid] + 1 : 0;
    const newIndex = news.slice(prevFoundIndex).findIndex(([neww, newUid]) => newUid === uid);
    const newPos = i - removeCount;
    if (newIndex === -1) {
      destroy.push([newPos]);
      removeCount++;
    } else {
      foundSameUids[uid] = prevFoundIndex + newIndex;
      set.push([news[foundSameUids[uid]][0], newPos]);
      newsInPrevs[foundSameUids[uid]] = newPos;
    }
  });

  let newCount = 0;
  let nextPos = 0;
  news.forEach(([neww], i) => {
    const newPos = newsInPrevs[i];

    if (newPos >= 0) {
      nextPos = newPos + 1 + newCount;
    } else if (nextPos >= prevs.length + newCount) {
      push.push([neww]);
    } else {
      insert.push([neww, nextPos]);
      nextPos++;
      newCount++;
    }
  });

  return { [_consts__WEBPACK_IMPORTED_MODULE_2__.DESTROY_OP]: destroy, set, insert, push };
}

/***/ },

/***/ "./src/styles.js"
/*!***********************!*\
  !*** ./src/styles.js ***!
  \***********************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_43749__) {

__nested_webpack_require_43749__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_43749__.d(__nested_webpack_exports__, {
/* harmony export */   addClassPrefix: () => (/* binding */ addClassPrefix),
/* harmony export */   prepareStyles: () => (/* binding */ prepareStyles)
/* harmony export */ });
function prepareStyles(prefix, styleStr) {
  const style = new CSSStyleSheet();
  style.replaceSync(styleStr);
  for (let i = 0; i, i < style.rules.length; i++) {
    const { selectorText } = style.rules[i];
    style.rules[i].selectorText = addClassPrefix(selectorText, prefix);
  }
  return [style]; 
}

function addClassPrefix (str, prefix) {
  return str.replaceAll(".", `.${prefix}`);
}

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_44694__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_44694__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__nested_webpack_require_44694__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__nested_webpack_require_44694__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__nested_webpack_require_44694__.o(definition, key) && !__nested_webpack_require_44694__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_44694__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_44694__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
let __nested_webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__nested_webpack_require_44694__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_44694__.d(__nested_webpack_exports__, {
/* harmony export */   append: () => (/* binding */ append),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_44694__(/*! ./state */ "./src/state.js");
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_44694__(/*! ./html */ "./src/html.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_44694__(/*! ./styles */ "./src/styles.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_44694__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _combine__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_44694__(/*! ./combine */ "./src/combine.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_44694__(/*! ./consts */ "./src/consts.js");
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_44694__(/*! ./lifecycle */ "./src/lifecycle.js");









function createTemplate (markupStr, stateBehaviour, styleSheets) {
  const id = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.uid)();
  const [markup, childrenState] = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isFunction)(markupStr)
    ? (0,_combine__WEBPACK_IMPORTED_MODULE_4__.combineTemplates)(markupStr, id)
    : [(0,_html__WEBPACK_IMPORTED_MODULE_1__.cloneHTMLMarkup)(markupStr), {}];

  const [state, styles] = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isObject)(stateBehaviour)
    ? [(0,_state__WEBPACK_IMPORTED_MODULE_0__.prepareStateSettings)(stateBehaviour), (0,_styles__WEBPACK_IMPORTED_MODULE_2__.prepareStyles)(id, styleSheets)]
    : [{}, (0,_styles__WEBPACK_IMPORTED_MODULE_2__.prepareStyles)(id, stateBehaviour)];

  (0,_combine__WEBPACK_IMPORTED_MODULE_4__.combineState)(state, childrenState);

  const boundElements = (0,_html__WEBPACK_IMPORTED_MODULE_1__.gatherBindings)(markup, id, true);
  (0,_state__WEBPACK_IMPORTED_MODULE_0__.updateTemplateMarkup)(boundElements, state);

  const allStyles = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.map)(childrenState, (_, v) => v)
    .map((v) => v.createComponent.styles)
    .reduce((a, v) => a.concat(v), [])
    .concat(styles);

  const template = { id, markup, state, styles: allStyles };

  return Object.assign((...args) => createComponent(template, ...args), {
    ...template,
    asPopup: (options) => createComponent(template, {}, document.body, { ...options, isPopup: true })
  });
}

function createComponent (template, ...args) {
  (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isDOMElement)(args[0]) && args.unshift({})
  const [stateValues, target, options] = args;

  const markup = template.markup.cloneNode(true);
  const state = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.copy)({}, template.state);
  state[_consts__WEBPACK_IMPORTED_MODULE_5__.UTIL_KEYS.PARENT_STATE] = options?.[_consts__WEBPACK_IMPORTED_MODULE_5__.UTIL_KEYS.PARENT_STATE];
  state[_consts__WEBPACK_IMPORTED_MODULE_5__.UTIL_KEYS.CHILDREN_DATA] = options?.[_consts__WEBPACK_IMPORTED_MODULE_5__.UTIL_KEYS.CHILDREN_DATA];
  state[_consts__WEBPACK_IMPORTED_MODULE_5__.UTIL_KEYS.MARKUP_COMPONENT] = markup;

  const boundElements = (0,_html__WEBPACK_IMPORTED_MODULE_1__.gatherBindings)(markup, template.id);
  const api = state && (0,_state__WEBPACK_IMPORTED_MODULE_0__.setupComponentMarkup)(boundElements, state, stateValues);

  const component = { api, ...template, markup, state };

  if (target) {
    return append(target, component, options);
  }

  return Object.assign((target, options) => append(target, component, options), {
    asPopup: (options) =>
      append(document.body, component, { ...options, isPopup: true }),
  });
}

function append (parentNode, component, options = {}) {
  (0,_html__WEBPACK_IMPORTED_MODULE_1__.addChildMarkup)(parentNode, component, options);

  const { state } = component;
  state[_consts__WEBPACK_IMPORTED_MODULE_5__.UTIL_KEYS.IS_RENDERED_COMPONENT] = true;

  return (0,_lifecycle__WEBPACK_IMPORTED_MODULE_6__.runStateChangeListeners)(true, state);// removed by dead control flow

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTemplate);
})();

__nested_webpack_exports__ = __nested_webpack_exports__["default"];
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

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
  showWarning: true,
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

/***/ "./src/common/helpers.js"
/*!*******************************!*\
  !*** ./src/common/helpers.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adjustNumberToBoundaries: () => (/* binding */ adjustNumberToBoundaries),
/* harmony export */   fromFlatStringToStructure: () => (/* binding */ fromFlatStringToStructure),
/* harmony export */   fromStructureToFlatString: () => (/* binding */ fromStructureToFlatString),
/* harmony export */   getAllTextNodes: () => (/* binding */ getAllTextNodes),
/* harmony export */   toNumberOrZero: () => (/* binding */ toNumberOrZero)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/common/constants.js");


function toNumberOrZero(str) {
  return +str || 0;
}

function adjustNumberToBoundaries(num, min, max, def) {
  switch (num) {
    case min - 1:
      return max;

    case undefined:
      return def;

    case max + 1:
      return min;
  }

  return num;
}

function getAllTextNodes() {
  const allTextNodes = [];
  const walker = document.createTreeWalker(
    document,
    window.NodeFilter.SHOW_TEXT,
    null,
    false,
  );
  let node;
  while ((node = walker.nextNode())) {
    allTextNodes.push(node);
  }
  return allTextNodes;
}

function fromFlatStringToStructure (flatString) {
  const searchStrings = [];
  const segments = flatString.split(_constants__WEBPACK_IMPORTED_MODULE_0__.FLAT_STRING_DELIMITER);
  for (let i = -1; i < segments.length; i+=2) {
    const isFirst = i === -1;
    searchStrings.push({
      string: segments[i + 1],
      distance: +segments[i] || null,
      first: isFirst,
      focus: isFirst
    }); 
  }

  return searchStrings;
}

function fromStructureToFlatString (searchStrings) {
  return searchStrings.map(({ distance, string }) => `${distance ? distance + _constants__WEBPACK_IMPORTED_MODULE_0__.FLAT_STRING_DELIMITER : ''}${string}`).join(_constants__WEBPACK_IMPORTED_MODULE_0__.FLAT_STRING_DELIMITER);
}


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
  "closingWarning"
]));

/***/ },

/***/ "./src/options/components/ColorOrder.js"
/*!**********************************************!*\
  !*** ./src/options/components/ColorOrder.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var simple_els__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-els */ "./node_modules/simple-els/dist/simple-els.js");
/* harmony import */ var simple_els__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_els__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/messages */ "./src/common/messages.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/constants */ "./src/common/constants.js");




const Color = simple_els__WEBPACK_IMPORTED_MODULE_0___default()(
  `
  <div @color draggable="true"></div>  
`,
  {
    color_style: (color) => ({ backgroundColor: `rgb(${color})` }),
    color_dragstart: (e, { get, send }) =>  send({ current: get().index }),
    color_dragover: (e) => e.preventDefault(),
    color_dragend: (e, { send }) => send({ dragEnd: true }),
    color_dragenter: (e, { get, send }) => send({ hovered: get().index }),
    color_dragleave: (e, { get, send }) => send({ prevHovered: get().index }),
  },
  `
  .color {
    min-width: 60px;
    height: 40px;
    cursor: grab;
  }

  .color:active {
    cursor: grabbing;
  }
`,
);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (simple_els__WEBPACK_IMPORTED_MODULE_0___default()(
  (_) =>
    `
  <div .container>
    <h3>Colors order</h3>
    <div .colors>
      ${_(Color, (colors) =>
        colors.map((color, index) => ({
          color,
          index,
        })),
      )}
    </div>
    <button @button>Defaults</button>
  </div> 
`,
  {
    colors: [],
    button_click: () => _common_messages__WEBPACK_IMPORTED_MODULE_1__["default"].setColors({ colors: _common_constants__WEBPACK_IMPORTED_MODULE_2__.COLORS }),
    onMessage: (data, { set, get }) => {
      if (data.dragEnd) {
        const { current, hovered, prevHovered, colors } = get();
        if (hovered === prevHovered) {
          return;
        }

        const curentColor = colors.splice(current, 1)[0];
        colors.splice(hovered, 0, curentColor);
        _common_messages__WEBPACK_IMPORTED_MODULE_1__["default"].setColors({ colors });
        return;
      }
      set(data);
    },
  },
  `
  .container {
    display: flex;
    width: 600px;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 30px;
    position: relative;
    padding-left: 60px;
  }

  .colors {
    display: flex;
    width: 600px;
    border: 2px solid black;
  }

  .button {
    position: absolute;
    bottom: 0;
    right: -110px;
    display: inline-block;
    text-align: center;
    margin-left: 8px;
    border: 3px solid black;
    background: none;
    font-size: 18px;
    padding: 5px 10px;
    min-width: 68px;
    box-sizing: border-box;
  }

  .button:hover {
    cursor: pointer;
    color: rgb(145, 30, 180);
    border-color: rgb(145, 30, 180);
  }

  .button:active {
    transform: scale(1.02);
  }
`,
));


/***/ },

/***/ "./src/options/components/SearchString.js"
/*!************************************************!*\
  !*** ./src/options/components/SearchString.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var simple_els__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-els */ "./node_modules/simple-els/dist/simple-els.js");
/* harmony import */ var simple_els__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_els__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchStringSegment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchStringSegment */ "./src/options/components/SearchStringSegment.js");
/* harmony import */ var _common_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/helpers */ "./src/common/helpers.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (simple_els__WEBPACK_IMPORTED_MODULE_0___default()(
  (_) => `
  <li>
    <div @wrapper>
      <ul @container>
        ${_(_SearchStringSegment__WEBPACK_IMPORTED_MODULE_1__["default"], (searchString, isContainerHovered) =>
          searchString.map((searchString) => ({
            ...searchString,
            isHovered: isContainerHovered,
          })),
        )}
        <div @buttons>
          <button @remove title="Remove search"></button>
          <button @add title="Save search"></button>
        </div>
      </ul>  
    </div>
  </li>  
`,
  {
    searchString: [],
    searchStringWidth: 0,
    isContainerHovered: false,
    wrapper: {
      mouseenter: (e, { set, markup }) => {
        set({
          isContainerHovered: true,
          searchStringWidth: Math.round(
            markup.container.getBoundingClientRect().width,
          ),
        });
      },
      mouseleave: (e, { set }) => set({ isContainerHovered: false }),
    },
    buttons_class: (isContainerHovered) =>
      isContainerHovered ? ["visible"] : ["hidden"],
    buttons_style: (searchStringWidth) => ({ left: searchStringWidth }),
    add_class: (type) => (type === "Favorite" ? ["hidden"] : []),
    add_click: (e, { get, send }) => {
      const { searchString } = get();
      send({
        action: "addFavoriteSearch",
        string: (0,_common_helpers__WEBPACK_IMPORTED_MODULE_2__.fromStructureToFlatString)(searchString),
      });
    },
    remove_click: (e, { get, send }) => {
      const { type, searchString } = get();
      const action = `remove${type}Search`;
      send({
        action,
        string: (0,_common_helpers__WEBPACK_IMPORTED_MODULE_2__.fromStructureToFlatString)(searchString),
      });
    },
  },

  `
    .wrapper {
      padding: 12px;
      padding-left: 26px;
      padding-right: 26px;
      display: flex;
      justify-content: center;
      min-height: 38px;
    }

    .container {
      display: flex;
      gap: 16px;
      padding-left: 0px;
      margin-left: 80px;
      margin-right: 80px;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    li:nth-child(even) .wrapper {
      background-color: rgba(210, 210, 210, 0.2);
    }

    .hidden {
      display: none !important;
    }

    .buttons {
      position: absolute;
      gap: 8px;
      margin-top: 3px;
      margin-left: 16px;
      padding-right: 10px;
    }

    .visible {
      display: flex;
    }

    .add {
      border: solid DarkGreen;
      border-width: 0 4px 4px 0;
      width: 14px;
      height: 14px;
      display: inline-block;
      padding: 3px;
      transform: rotate(-45deg);
      cursor: pointer;
      background-color: transparent;
      position: relative;
      top: 6px;
    }

    .add:hover {
      border: solid LimeGreen;
      border-width: 0 4px 4px 0;
    }

    .remove {
      width: 22px;
      height: 22px;
      padding: 0px;
      border: none;
      position: relative;
      background-color: transparent;
    }

    .remove::before, .remove::after {
      content: '';
      display: block;
      position: absolute;
      background: black;
      cursor: pointer;
      width: 100%;
    }

    .remove::before, .remove::after {
      background: DarkRed;
      height: 4px;
      top: 12px;
    }

    .remove:hover::before, .remove:hover::after {
      background: OrangeRed;
    }

    .remove::before {
      transform: rotate(45deg);
    }

    .remove::after {
      transform: rotate(-45deg);
    }
  `,
));


/***/ },

/***/ "./src/options/components/SearchStringSegment.js"
/*!*******************************************************!*\
  !*** ./src/options/components/SearchStringSegment.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var simple_els__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-els */ "./node_modules/simple-els/dist/simple-els.js");
/* harmony import */ var simple_els__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_els__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (simple_els__WEBPACK_IMPORTED_MODULE_0___default()(
  `
  <li @container>
    <p @distance type="text" title="Distance between substrings"></p>
    <p @string type="text"></p>
  </li>
`,
  {
    string_text: (string) => string,
    distance_text: (distance) => distance,
    container_class: (isHovered) => (isHovered ? ["hovered"] : [""]),
  },
  `
    .container {
      display: flex;
      height: 33px;
      gap: 8px;
    }

    .string {
      margin: 0;
      padding-top: 9px;
      padding-bottom: 0px;
      border-bottom: 2px solid black;
      padding-left: 7px;
      padding-right: 7px;
    }

    .distance {
      position: relative;
      top: -10px;
      font-size: 14px;
      border-bottom: 2px solid black;
      margin-top: 6px;
      margin-bottom: 10px;
      padding-left: 7px;
      padding-right: 7px;
    }

    .container:first-child .distance {
      border: none;
      padding: 0;
    }

    .hovered p {
      border-bottom: 2px solid LimeGreen;
    }
  `,
));


/***/ },

/***/ "./src/options/components/Settings.js"
/*!********************************************!*\
  !*** ./src/options/components/Settings.js ***!
  \********************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var simple_els__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-els */ "./node_modules/simple-els/dist/simple-els.js");
/* harmony import */ var simple_els__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_els__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _background_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @background/state */ "./src/background/state.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/messages */ "./src/common/messages.js");
/* harmony import */ var _SearchString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchString */ "./src/options/components/SearchString.js");
/* harmony import */ var _ColorOrder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ColorOrder */ "./src/options/components/ColorOrder.js");
/* harmony import */ var _common_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/helpers */ "./src/common/helpers.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_background_state__WEBPACK_IMPORTED_MODULE_1__]);
var __webpack_async_dependencies_result__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
_background_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_async_dependencies_result__[0];








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (simple_els__WEBPACK_IMPORTED_MODULE_0___default()(
  (_) => `
  <div .container>
    ${_(_ColorOrder__WEBPACK_IMPORTED_MODULE_4__["default"], (colors) => ({ colors }))}
    <div .searches-container>
      <div>
        <h3>Recent Searches</h3>
        <ul .searches>
          ${_(_SearchString__WEBPACK_IMPORTED_MODULE_3__["default"], (recentSearches) =>
            recentSearches.map((s) => ({
              searchString: (0,_common_helpers__WEBPACK_IMPORTED_MODULE_5__.fromFlatStringToStructure)(s),
              type: "Recent",
            })),
          )}
        </ul>
      </div>
      <div>
        <h3>Saved Searches</h3>
        <ul .searches>
          ${_(_SearchString__WEBPACK_IMPORTED_MODULE_3__["default"], (favoriteSearches) =>
            favoriteSearches.map((s) => ({
              searchString: (0,_common_helpers__WEBPACK_IMPORTED_MODULE_5__.fromFlatStringToStructure)(s),
              type: "Favorite",
            })),
          )}
        </ul>
      </div>
    </div>
  </div>
`,
  {
    recentSearches: [],
    favoriteSearches: [],
    colors: [],

    onChange: async (changes, { set }) => {
      if (changes > 0) {
        const { recentSearches, favoriteSearches, colors } = await _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].getData();

        _background_state__WEBPACK_IMPORTED_MODULE_1__["default"].onChange(
          ["recentSearches", "favoriteSearches", "colors"],
          (_, { recentSearches, favoriteSearches, colors }) =>
            set({ recentSearches, favoriteSearches, colors }),
        );

        _background_state__WEBPACK_IMPORTED_MODULE_1__["default"].set({ recentSearches, favoriteSearches, colors });
      }
    },

    onMessage: ({ action, string }) => {
      _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"][action]({ string });
    },
  },
  `
    .container {
      font-family: sans-serif;
      font-size: 18px;
      margin-left: 50px;
      margin-top: 20px;
      text-align: center;
    }

    .searches-container {
      display: flex;
    }

    .searches-container h3 {
      margin-bottom: 0px;
    }

    .searches-container ul {
      list-style: none;
    }

    .searches-container > div {
      min-width: 350px;
    }

    .searches {
      margin-top: 0px;
      padding-left: 0;
    }
  `,
));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ },

/***/ "./src/options/components/Warning.js"
/*!*******************************************!*\
  !*** ./src/options/components/Warning.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var simple_els__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-els */ "./node_modules/simple-els/dist/simple-els.js");
/* harmony import */ var simple_els__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_els__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/messages */ "./src/common/messages.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (simple_els__WEBPACK_IMPORTED_MODULE_0___default()(
  `
  <div .container>
    <h3>Warning</h3>
    <p>Keeping this tab open when performing searches in other tabs<br> may cause extension  errors. <span .note>(in very rare cases)</span></p>
    <div @controls>
      <label @label>
        <input type="checkbox" @dont-show>
        Don't show again
      </label>
      <button @button>OK</button>
    </div>
  </div>
`,
  {
    button_click: (e, { markup }) =>
      _common_messages__WEBPACK_IMPORTED_MODULE_1__["default"].closingWarning(!markup.dontShow.checked),
  },
  `
  .container {
    font-family: sans-serif;
    background: white;
    border: 3px solid black;
    padding: 30px 40px;
    text-align: center;
    font-size: 18px;
  }

  .container h3 {
    font-size: 24px;
    margin-top: 0;
  }

  .container p {
    margin-bottom: 30px;
    line-height: 1.5;
  }

  .controls {
    position: relative;
  }

  .note {
    font-size: 16px;
  }

  .label {
    position: absolute;
    top: 8px;
    right: 40px;
    font-size: 16px;
  }

  .button {
    display: inline-block;
    text-align: center;
    margin-left: 8px;
    border: 3px solid black;
    background: none;
    font-size: 18px;
    padding: 6px 30px;
    min-width: 68px;
    box-sizing: border-box;
  }

  .button:hover {
    cursor: pointer;
    color: rgb(145, 30, 180);
    border-color: rgb(145, 30, 180);
  }

  .button:active {
    transform: scale(1.02);
  }
`,
));

/***/ },

/***/ "./src/options/options.js"
/*!********************************!*\
  !*** ./src/options/options.js ***!
  \********************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Settings */ "./src/options/components/Settings.js");
/* harmony import */ var _components_Warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Warning */ "./src/options/components/Warning.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/messages */ "./src/common/messages.js");
/* harmony import */ var _background_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @background/state */ "./src/background/state.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Settings__WEBPACK_IMPORTED_MODULE_0__, _background_state__WEBPACK_IMPORTED_MODULE_3__]);
([_components_Settings__WEBPACK_IMPORTED_MODULE_0__, _background_state__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





_common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].removeRecentSearch(({ string }) => _background_state__WEBPACK_IMPORTED_MODULE_3__["default"].removeRecentSearch(string));
_common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].addFavoriteSearch(({ string }) =>
  _background_state__WEBPACK_IMPORTED_MODULE_3__["default"].addFavoriteSearch(string),
);
_common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].removeFavoriteSearch(({ string }) =>
  _background_state__WEBPACK_IMPORTED_MODULE_3__["default"].removeFavoriteSearch(string),
);
_common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].setColors(({ colors }) => _background_state__WEBPACK_IMPORTED_MODULE_3__["default"].set({ colors }));

(0,_components_Settings__WEBPACK_IMPORTED_MODULE_0__["default"])({}, document.body);

if (_background_state__WEBPACK_IMPORTED_MODULE_3__["default"].get().showWarning) {
  _components_Warning__WEBPACK_IMPORTED_MODULE_1__["default"].asPopup({ closeButton: '.button' });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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
/******/ 	let __webpack_exports__ = __webpack_require__("./src/options/options.js");
/******/ 	
/******/ })()
;