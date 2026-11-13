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

/***/ "./src/types.d.ts"
/*!************************!*\
  !*** ./src/types.d.ts ***!
  \************************/
() {



/***/ },

/***/ "./src/actions.ts"
/*!************************!*\
  !*** ./src/actions.ts ***!
  \************************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_733__) {

"use strict";
__nested_webpack_require_733__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_733__.d(__nested_webpack_exports__, {
/* harmony export */   addStateActions: () => (/* binding */ addStateActions)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_733__(/*! ./types */ "./src/types.d.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_733__.n(_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_733__(/*! . */ "./src/index.ts");


function addStateActions(namespace, actions) {
    for (const [actionName, actionFn] of Object.entries(actions)) {
        ___WEBPACK_IMPORTED_MODULE_1__.STATE[namespace(actionName)] = {
            key: actionName,
            namespace,
            value: actionFn.bind(null, (0,___WEBPACK_IMPORTED_MODULE_1__.createStore)(namespace())),
            isAction: true,
            listeners: [],
        };
    }
    return (0,___WEBPACK_IMPORTED_MODULE_1__.createStore)(namespace());
}


/***/ },

/***/ "./src/constants.ts"
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_2022__) {

"use strict";
__nested_webpack_require_2022__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_2022__.d(__nested_webpack_exports__, {
/* harmony export */   NAMESPACE_DELIMITER: () => (/* binding */ NAMESPACE_DELIMITER)
/* harmony export */ });
const NAMESPACE_DELIMITER = "::";


/***/ },

/***/ "./src/helpers.ts"
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_2488__) {

"use strict";
__nested_webpack_require_2488__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_2488__.d(__nested_webpack_exports__, {
/* harmony export */   filter: () => (/* binding */ filter),
/* harmony export */   forEach: () => (/* binding */ forEach),
/* harmony export */   getParamNames: () => (/* binding */ getParamNames),
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isAsyncFunction: () => (/* binding */ isAsyncFunction),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   map: () => (/* binding */ map),
/* harmony export */   recreateStructure: () => (/* binding */ recreateStructure),
/* harmony export */   uid: () => (/* binding */ uid)
/* harmony export */ });
const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
const ARGUMENT_NAMES = /([^\s,]+)/g;
function isArray(obj) {
    return getObjectType(obj) === "[object Array]";
}
function isString(obj) {
    return getObjectType(obj) === "[object String]";
}
function isFunction(obj) {
    return getObjectType(obj) === "[object Function]";
}
function isAsyncFunction(obj) {
    return getObjectType(obj) === "[object AsyncFunction]";
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
function forEach(obj, cb) {
    Object.entries(obj || {}).forEach(([k, v]) => cb(k, v));
}
function filter(obj, cb) {
    return Object.fromEntries(Object.entries(obj || {}).filter(([k, v]) => cb(k, v) === true));
}
function recreateStructure(value) {
    let newValue = value;
    if (isArray(value)) {
        newValue = [];
        value.forEach((v) => newValue.push(recreateStructure(v)));
        return newValue;
    }
    if (isObject(value)) {
        newValue = {};
        for (let key in value) {
            newValue[key] = recreateStructure(value[key]);
        }
        return newValue;
    }
    return newValue;
}
function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}


/***/ },

/***/ "./src/index.ts"
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_5349__) {

"use strict";
__nested_webpack_require_5349__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_5349__.d(__nested_webpack_exports__, {
/* harmony export */   STATE: () => (/* binding */ STATE),
/* harmony export */   createPendingChanges: () => (/* binding */ createPendingChanges),
/* harmony export */   createStore: () => (/* binding */ createStore),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getState: () => (/* binding */ getState),
/* harmony export */   getValues: () => (/* binding */ getValues),
/* harmony export */   joinStateChanges: () => (/* binding */ joinStateChanges),
/* harmony export */   resetState: () => (/* binding */ resetState),
/* harmony export */   setState: () => (/* binding */ setState),
/* harmony export */   setupValue: () => (/* binding */ setupValue)
/* harmony export */ });
/* harmony import */ var _types_d__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_5349__(/*! ./types.d */ "./src/types.d.ts");
/* harmony import */ var _types_d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_5349__.n(_types_d__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_5349__(/*! ./storage */ "./src/storage.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_5349__(/*! ./helpers */ "./src/helpers.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_5349__(/*! ./actions */ "./src/actions.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_5349__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_5349__(/*! ./listeners */ "./src/listeners.ts");






const STATE = {};
const STATE_CHANGED_PIECES = {};
const STATE_PENDING_CHANGES = {};
const STORAGE = {};
setStorageUtils(_storage__WEBPACK_IMPORTED_MODULE_1__["default"]);
async function addState(namespace, initialState, isPersistent) {
    const storageType = STORAGE.GET_TYPE(isPersistent);
    const defaultValues = Object.assign({}, initialState);
    const values = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.map)(initialState, (k, v) => [namespace(k), v]);
    if (STORAGE.IS_AVAILABE(storageType)) {
        await STORAGE.UPDATE_STATE(values, storageType);
    }
    for (const key in initialState) {
        const fullKey = namespace(key);
        STATE[fullKey] = setupValue(key, namespace, values[fullKey], defaultValues[key], storageType);
    }
    return createStore(namespace());
}
function setupValue(key, namespace, value, defaultValue, storageType) {
    const fullKey = namespace(key);
    const isComputedValue = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isFunction)(value);
    const dependencies = isComputedValue
        ? (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getParamNames)(value)
        : [];
    dependencies.forEach((dependency) => {
        const fullDependencyKey = namespace(dependency);
        if (!STATE[fullDependencyKey]) {
            STATE[fullDependencyKey] = {
                dependants: [],
                dependencies: [],
                namespace,
                storageType,
            };
        }
        STATE[fullDependencyKey].dependants?.push(fullKey);
    });
    return {
        key,
        fullKey,
        value: isComputedValue
            ? value.apply(null, getArguments(dependencies, namespace))
            : value,
        computeFn: isComputedValue && value,
        dependencies,
        dependants: [],
        listeners: [],
        defaultValue,
        storageType,
        namespace,
    };
}
function getNamespaceState(namespace) {
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.filter)(STATE, (k, { key }) => k === namespace(key));
}
function getValues(namespace) {
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.map)(getNamespaceState(namespace), (k, { key, value }) => [
        key,
        value,
    ]);
}
function getArguments(dependencies, namespace) {
    const values = getValues(namespace);
    return dependencies.map((name) => values[name]);
}
async function joinStateChanges(changesPiece) {
    for (const [updateId, { storageTypes, readyStorageTypes, changes },] of Object.entries(STATE_CHANGED_PIECES)) {
        if (changesPiece[updateId]) {
            const storageType = changesPiece[updateId].newValue;
            readyStorageTypes[storageType] = true;
            delete changesPiece[updateId];
            Object.assign(changes, changesPiece);
            if (STORAGE.IS_AVAILABE(storageType)) {
                STORAGE.REMOVE_KEY(storageType, updateId);
            }
            for (const key in storageTypes) {
                if (!readyStorageTypes[key]) {
                    return;
                }
            }
            delete STATE_CHANGED_PIECES[updateId];
            await onStateChange(changes);
        }
    }
}
async function onStateChange(changes) {
    const realChanges = {};
    for (const key in changes) {
        const prevValue = STATE[key].value;
        const newValue = changes[key].newValue;
        if (prevValue !== newValue) {
            realChanges[key] = { newValue, prevValue };
            STATE[key].value = newValue;
        }
        else {
            realChanges[key] = { isSame: true };
        }
        updateDependencies(key, changes, realChanges);
    }
    await (0,_listeners__WEBPACK_IMPORTED_MODULE_5__.runStateChangeListeners)((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.filter)(realChanges, (k, v) => !v.isSame));
}
function updateDependencies(key, changes, realChanges) {
    STATE[key].dependants?.forEach((name) => {
        const { dependencies, namespace } = STATE[name];
        if (!isEveryDependencyReady(dependencies, namespace, Object.keys(changes), Object.keys(realChanges)) ||
            realChanges[name]) {
            return;
        }
        const prevValue = STATE[name].value;
        const newValue = STATE[name].computeFn?.apply(null, getArguments(dependencies, namespace));
        if (prevValue !== newValue) {
            realChanges[name] = { newValue, prevValue };
            STATE[name].value = newValue;
            updateDependencies(name, changes, realChanges);
        }
    });
}
function isEveryDependencyReady(dependencies, namespace, changesKeys, realChangesKeys) {
    return dependencies.every((name) => {
        const fullKey = namespace(name);
        return ((changesKeys.includes(fullKey) && realChangesKeys.includes(fullKey)) ||
            !changesKeys.includes(fullKey));
    });
}
function getState(namespace, arg) {
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isString)(arg)) {
        return createStore(arg);
    }
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.recreateStructure)(getValues(namespace));
}
async function setState(namespace, changes) {
    const storageChanges = {};
    const updateId = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.uid)();
    const storageTypes = {};
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.forEach)(changes, (k, v) => {
        const fullKey = namespace(k);
        const { storageType, computeFn, isAction } = STATE[fullKey];
        if (computeFn || isAction) {
            return;
        }
        if (!storageChanges[storageType]) {
            storageChanges[storageType] = {};
        }
        storageTypes[storageType] = true;
        storageChanges[storageType][fullKey] = v;
    });
    STATE_CHANGED_PIECES[updateId] = {
        storageTypes,
        readyStorageTypes: {},
        changes: {},
    };
    for (let [storageType, changes] of Object.entries(storageChanges)) {
        await setValues(storageType, { ...changes, [updateId]: storageType });
    }
    return createStore(namespace());
}
async function setValues(storageType, changes) {
    if (STORAGE.IS_AVAILABE(storageType)) {
        const isAutoUpdate = await STORAGE.SET_VALUES(storageType, changes);
        if (isAutoUpdate) {
            return;
        }
    }
    joinStateChanges((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.map)(changes, (k, newValue) => [k, { newValue }]));
}
async function resetState(namespace, keys) {
    return setState(namespace, getDefaultValues(namespace, keys));
}
function getDefaultValues(namespace, keys) {
    const namespaceState = getNamespaceState(namespace);
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.map)(keys
        ? (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.filter)(namespaceState, (k, { key }) => keys.includes(key))
        : namespaceState, (k, { key, defaultValue }) => [key, defaultValue]);
}
function createPendingChanges(namespace) {
    const flush = () => {
        const changes = STATE_PENDING_CHANGES[namespace()];
        STATE_PENDING_CHANGES[namespace()] = {};
        return changes;
    };
    return {
        add: (changes) => Object.assign(STATE_PENDING_CHANGES[namespace()], changes),
        reset: (keys) => Object.assign(STATE_PENDING_CHANGES[namespace()], getDefaultValues(namespace, keys)),
        get: () => STATE_PENDING_CHANGES[namespace()],
        flush,
        commit: () => setState(namespace, flush()),
    };
}
function main(namespace) {
    if (!arguments[1] || (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isString)(arguments[1])) {
        return getState.apply(null, arguments);
    }
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isArray)(arguments[1]) ||
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isFunction)(arguments[1]) ||
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isAsyncFunction)(arguments[1])) {
        return _listeners__WEBPACK_IMPORTED_MODULE_5__.addStateListener.apply(null, arguments);
    }
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isObject)(arguments[1])) {
        return setState.apply(null, arguments);
    }
}
function setStorageUtils(storageUtils) {
    Object.assign(STORAGE, storageUtils);
}
function addNamespace(namespace, str) {
    return `${namespace}${((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isString)(str) && _constants__WEBPACK_IMPORTED_MODULE_4__.NAMESPACE_DELIMITER) || ""}${str || ""}`;
}
function createStore(_namespace) {
    const namespace = ((key) => addNamespace(_namespace, key));
    if (!STATE_PENDING_CHANGES[namespace()]) {
        STATE_PENDING_CHANGES[namespace()] = {};
    }
    if (!_listeners__WEBPACK_IMPORTED_MODULE_5__.LISTENERS[namespace()]) {
        _listeners__WEBPACK_IMPORTED_MODULE_5__.LISTENERS[namespace()] = [];
    }
    return Object.assign(main.bind(null, namespace), {
        add: (state) => addState(namespace, state, false),
        addPersistent: (state) => addState(namespace, state, true),
        get: (newNamespace) => getState(namespace, newNamespace),
        set: (changes) => setState(namespace, changes),
        reset: (keys) => resetState(namespace, keys),
        changes: createPendingChanges(namespace),
        onChange: (keys, cb) => (0,_listeners__WEBPACK_IMPORTED_MODULE_5__.addStateListener)(namespace, keys, cb),
        removeListener: (keys, cb) => (0,_listeners__WEBPACK_IMPORTED_MODULE_5__.removeStateListener)(namespace, keys, cb),
        actions: (actions) => (0,_actions__WEBPACK_IMPORTED_MODULE_3__.addStateActions)(namespace, actions),
        setStorageUtils,
        joinStateChanges,
        namespace,
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createStore(""));


/***/ },

/***/ "./src/listeners.ts"
/*!**************************!*\
  !*** ./src/listeners.ts ***!
  \**************************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_16870__) {

"use strict";
__nested_webpack_require_16870__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_16870__.d(__nested_webpack_exports__, {
/* harmony export */   LISTENERS: () => (/* binding */ LISTENERS),
/* harmony export */   addStateListener: () => (/* binding */ addStateListener),
/* harmony export */   removeStateListener: () => (/* binding */ removeStateListener),
/* harmony export */   runStateChangeListeners: () => (/* binding */ runStateChangeListeners)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_16870__(/*! ./types */ "./src/types.d.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_16870__.n(_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_16870__(/*! . */ "./src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_16870__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_16870__(/*! ./helpers */ "./src/helpers.ts");




const LISTENERS = {};
async function runStateChangeListeners(realChanges) {
    if (Object.keys(realChanges).length) {
        const { namespace } = ___WEBPACK_IMPORTED_MODULE_1__.STATE[Object.keys(realChanges)[0]];
        for (const [changeKey] of Object.entries(realChanges)) {
            const { listeners, key } = ___WEBPACK_IMPORTED_MODULE_1__.STATE[changeKey];
            for (const cb of listeners) {
                const fn = cb.bind(null, [key], (0,___WEBPACK_IMPORTED_MODULE_1__.createStore)(namespace()));
                if ((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isAsyncFunction)(cb)) {
                    await fn();
                }
                else {
                    fn();
                }
            }
        }
        const namespaceLength = `${namespace()}${_constants__WEBPACK_IMPORTED_MODULE_2__.NAMESPACE_DELIMITER}`.length;
        const readableKeys = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.map)(realChanges, (k) => k.slice(namespaceLength));
        for (const cb of LISTENERS[namespace()]) {
            const fn = cb.bind(null, readableKeys, (0,___WEBPACK_IMPORTED_MODULE_1__.createStore)(namespace()));
            if ((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isAsyncFunction)(cb)) {
                await fn();
            }
            else {
                fn();
            }
        }
    }
}
function addStateListener(namespace, observables, cb) {
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isFunction)(observables) || (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isAsyncFunction)(observables)) {
        LISTENERS[namespace()].push(observables);
        return (0,___WEBPACK_IMPORTED_MODULE_1__.createStore)(namespace());
    }
    observables.forEach((key) => ___WEBPACK_IMPORTED_MODULE_1__.STATE[namespace(key)].listeners?.push(cb));
    return (0,___WEBPACK_IMPORTED_MODULE_1__.createStore)(namespace());
}
function removeStateListener(namespace, observables, removeCb) {
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isFunction)(observables) || (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isAsyncFunction)(observables)) {
        const removeIdx = LISTENERS[namespace()].findIndex((cb) => cb === observables);
        LISTENERS[namespace()].splice(removeIdx, 1);
        return (0,___WEBPACK_IMPORTED_MODULE_1__.createStore)(namespace());
    }
    observables.forEach((key) => {
        const listeners = ___WEBPACK_IMPORTED_MODULE_1__.STATE[namespace(key)].listeners;
        const removeIdx = listeners?.findIndex((cb) => cb === removeCb);
        listeners?.splice(removeIdx, 1);
    });
    return (0,___WEBPACK_IMPORTED_MODULE_1__.createStore)(namespace());
}


/***/ },

/***/ "./src/storage.ts"
/*!************************!*\
  !*** ./src/storage.ts ***!
  \************************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_20799__) {

"use strict";
__nested_webpack_require_20799__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_20799__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_20799__(/*! ./types */ "./src/types.d.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_20799__.n(_types__WEBPACK_IMPORTED_MODULE_0__);

async function updateFromLocalStorage(state) {
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
    return isPersistent ? "localStorage" : "";
}
function isStorageAvailable(storageType) {
    return !!storageType;
}
async function setStorageValue(storageType, changes) {
    for (let [k, v] of Object.entries(changes)) {
        localStorage.setItem(k, v);
    }
    return false;
}
function removeStorageKey(type, key) {
    if (type) {
        localStorage.removeItem(key);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    GET_TYPE: getStorageType,
    IS_AVAILABE: isStorageAvailable,
    UPDATE_STATE: updateFromLocalStorage,
    SET_VALUES: setStorageValue,
    REMOVE_KEY: removeStorageKey,
});


/***/ },

/***/ "./src/webextension-storage.ts"
/*!*************************************!*\
  !*** ./src/webextension-storage.ts ***!
  \*************************************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_22477__) {

"use strict";
__nested_webpack_require_22477__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_22477__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isBackgroundScript: () => (/* binding */ isBackgroundScript),
/* harmony export */   isSessionStorageSupport: () => (/* binding */ isSessionStorageSupport)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_22477__(/*! ./types */ "./src/types.d.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_22477__.n(_types__WEBPACK_IMPORTED_MODULE_0__);
const browser = __nested_webpack_require_22477__(/*! webextension-polyfill/dist/browser-polyfill.min */ "./node_modules/webextension-polyfill/dist/browser-polyfill.min.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    GET_TYPE: getStorageType,
    IS_AVAILABE: isStorageAvailable,
    UPDATE_STATE: updateStateFromStorage,
    SET_VALUES: setStorageValue,
    REMOVE_KEY: removeStorageKey,
});
function getStorageType(isPersistent) {
    return (isBackgroundScript() && isPersistent && "local") || "session";
}
function isStorageAvailable(storageType) {
    return (storageType === "local" ||
        (storageType === "session" && isSessionStorageSupport()));
}
async function updateStateFromStorage(state, type) {
    return Object.assign(state, await browser.storage[type].get());
}
async function setStorageValue(type, changes) {
    await browser.storage[type].set(changes);
    return true;
}
async function removeStorageKey(type, key) {
    if (type) {
        await browser.storage[type].remove(key);
    }
}
function isSessionStorageSupport() {
    return !!browser.storage.session;
}
function isBackgroundScript() {
    return (window.location.protocol === "chrome-extension:" ||
        window.location.protocol === "moz-extension:");
}


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
/******/ 	function __nested_webpack_require_35467__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_35467__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_35467__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__nested_webpack_require_35467__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__nested_webpack_require_35467__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__nested_webpack_require_35467__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__nested_webpack_require_35467__.o(definition, key) && !__nested_webpack_require_35467__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_35467__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_35467__.r = (exports) => {
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
  !*** ./src/webextension.ts ***!
  \*****************************/
__nested_webpack_require_35467__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_35467__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_35467__(/*! . */ "./src/index.ts");
/* harmony import */ var _webextension_storage__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_35467__(/*! ./webextension-storage */ "./src/webextension-storage.ts");
const browser = __nested_webpack_require_35467__(/*! webextension-polyfill/dist/browser-polyfill.min */ "./node_modules/webextension-polyfill/dist/browser-polyfill.min.js");


const { joinStateChanges, setStorageUtils } = ___WEBPACK_IMPORTED_MODULE_0__["default"];
if ((0,_webextension_storage__WEBPACK_IMPORTED_MODULE_1__.isBackgroundScript)()) {
    browser.storage.local.onChanged.addListener(joinStateChanges);
    (0,_webextension_storage__WEBPACK_IMPORTED_MODULE_1__.isSessionStorageSupport)() &&
        browser.storage.session.onChanged.addListener(joinStateChanges);
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
        if (isFunction(payload) || isAsyncFunction(payload)) {
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
    const answerFunction = actions[message.action].bind(null, message.payload);
    const payload = isAsyncFunction(answerFunction) ? (await answerFunction()) : answerFunction();
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
  return window.location.href === tab?.url;
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

function getObjectType(obj) {
  return Object.prototype.toString.call(obj);
}

function isFunction(obj) {
  return getObjectType(obj) === "[object Function]";
}

function isAsyncFunction(obj) {
  return getObjectType(obj) === "[object AsyncFunction]";
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
browser.tabs.onUpdated.addListener((tabId, changes) => {
  if (changes.status === "complete") {
    _background_actions__WEBPACK_IMPORTED_MODULE_1__["default"].onTabClose(tabId);
  }
  (0,_background_context_menu__WEBPACK_IMPORTED_MODULE_3__.updateContextMenu)();
});
browser.tabs.onRemoved.addListener((tabId) => _background_actions__WEBPACK_IMPORTED_MODULE_1__["default"].onTabClose(tabId));

_background_state__WEBPACK_IMPORTED_MODULE_2__["default"].onChange(["favoriteSearches", "recentSearches", "tabs"], async () => {
  await (0,_background_context_menu__WEBPACK_IMPORTED_MODULE_3__.updateContextMenu)();
});

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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   onTabClose: () => (/* binding */ onTabClose)
/* harmony export */ });
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/messages */ "./src/common/messages.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/background/state.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/background/helpers.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_state__WEBPACK_IMPORTED_MODULE_1__]);
var __webpack_async_dependencies_result__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_async_dependencies_result__[0];
const browser = __webpack_require__(/*! webextension-polyfill/dist/browser-polyfill.min */ "./node_modules/webextension-polyfill/dist/browser-polyfill.min.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  onTabClose,
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

function onTabClose(tabId) {
  _state__WEBPACK_IMPORTED_MODULE_1__["default"].setTabState(tabId);
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
  const idx =
    searchGroupId >= 0 ? searchGroupId : await _state__WEBPACK_IMPORTED_MODULE_1__["default"].getEmptySearchId(tab);
  _common_messages__WEBPACK_IMPORTED_MODULE_0__["default"].openSearchGroup({ idx, searchString });
}

async function removeSearch(tabId, idx) {
  await addSearchToContextMenu({ tabId, idx, string: undefined });
  _common_messages__WEBPACK_IMPORTED_MODULE_0__["default"].removeSearch({ idx });
}

function removeAllSearches(tabId) {
  _state__WEBPACK_IMPORTED_MODULE_1__["default"].getTabState(tabId).searches.forEach(
    (s, i) => s && removeSearch(tabId, i),
  );
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

async function removeRecentSearch(string) {
  await _state__WEBPACK_IMPORTED_MODULE_1__["default"].removeRecentSearch(string);
}

async function addFavoriteSearch(string) {
  await _state__WEBPACK_IMPORTED_MODULE_1__["default"].addFavoriteSearch(string);
}

async function removeFavoriteSearch(string) {
  await _state__WEBPACK_IMPORTED_MODULE_1__["default"].removeFavoriteSearch(string);
}

function setColors(colors) {
  _state__WEBPACK_IMPORTED_MODULE_1__["default"].set({ colors });
}

function openPage(url) {
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




_common_messages__WEBPACK_IMPORTED_MODULE_0__["default"].closingPopup(({ tabId }) => _actions__WEBPACK_IMPORTED_MODULE_2__["default"].closingPopup({ tabId }));

_common_messages__WEBPACK_IMPORTED_MODULE_0__["default"].addSearchToContextMenu(({ tabId, idx, string }) =>
  _actions__WEBPACK_IMPORTED_MODULE_2__["default"].addSearchToContextMenu({ tabId, idx, string }),
);

_common_messages__WEBPACK_IMPORTED_MODULE_0__["default"].getData(() => _state__WEBPACK_IMPORTED_MODULE_1__["default"].get());

_common_messages__WEBPACK_IMPORTED_MODULE_0__["default"].removeRecentSearch(
  async ({ string }) => await _actions__WEBPACK_IMPORTED_MODULE_2__["default"].removeRecentSearch(string),
);
_common_messages__WEBPACK_IMPORTED_MODULE_0__["default"].addFavoriteSearch(
  async ({ string }) => await _actions__WEBPACK_IMPORTED_MODULE_2__["default"].addFavoriteSearch(string),
);
_common_messages__WEBPACK_IMPORTED_MODULE_0__["default"].removeFavoriteSearch(
  async ({ string }) => await _actions__WEBPACK_IMPORTED_MODULE_2__["default"].removeFavoriteSearch(string),
);

_common_messages__WEBPACK_IMPORTED_MODULE_0__["default"].setColors(({ colors }) => _actions__WEBPACK_IMPORTED_MODULE_2__["default"].setColors(colors));

_common_messages__WEBPACK_IMPORTED_MODULE_0__["default"].closingWarning((showWarning) => _state__WEBPACK_IMPORTED_MODULE_1__["default"].set({ showWarning }));

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

function getTabState(tabId) {
  return varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().get().tabs[tabId] || EMPTY_OBJECT;
}

function initTabState(tabId) {
  const { tabs } = varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().get();
  tabs[tabId] = {
    open: false,
    searches: Array(_common_constants__WEBPACK_IMPORTED_MODULE_1__.COLORS.length).fill(),
    initialized: true,
    active: true,
  };
  varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().set({ tabs });

  return tabs[tabId];
}

function setTabState(tabId, state) {
  const { tabs } = varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().get();
  let prevTabState = tabs[tabId];

  if (!prevTabState) {
    if (!state) {
      return;
    }

    prevTabState = initTabState(tabId);
  }

  if (typeof state === "undefined") {
    delete tabs[tabId];
  } else {
    tabs[tabId] = { ...prevTabState, ...state };
  }

  varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().set({ tabs });
}

async function setSearchInTab(tabId, searchId, string) {
  const { tabs } = varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().get();
  if (tabs[tabId]) {
    tabs[tabId].searches[searchId] = string;
  }
  await addRecentSearch(string);
  varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().set({ tabs });
}

async function getEmptySearchId({ id }) {
  const { searches } = varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().get().tabs[id];
  const emptySlot = searches.findIndex((s) => !s);

  return emptySlot >= 0 ? emptySlot : searches.length - 1;
}

async function addRecentSearch(str) {
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

async function removeRecentSearch(str) {
  const { recentSearches } = varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().get();

  await varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().set({
    recentSearches: str ? recentSearches.filter((s) => s !== str) : [],
  });
}

async function addFavoriteSearch(str) {
  const { favoriteSearches } = varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().get();
  const favoriteIdx = favoriteSearches.indexOf(str);

  if (favoriteIdx >= 0) {
    favoriteSearches.splice(favoriteIdx, 1);
  }

  favoriteSearches.unshift(str);

  await varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().set({ favoriteSearches });
}

async function removeFavoriteSearch(str) {
  const { favoriteSearches } = varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().get();

  await varstor_webextension__WEBPACK_IMPORTED_MODULE_0___default().set({
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
  "getData",
  "addToRecent",
  "removeRecentSearch",
  "addFavoriteSearch",
  "removeFavoriteSearch",
  "setColors",
  "closingWarning",
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