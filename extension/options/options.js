/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../simple-els/dist/simple-els.js"
/*!****************************************!*\
  !*** ../simple-els/dist/simple-els.js ***!
  \****************************************/
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

/***/ "./src/combine.ts"
/*!************************!*\
  !*** ./src/combine.ts ***!
  \************************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_629__) {

__nested_webpack_require_629__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_629__.d(__nested_webpack_exports__, {
/* harmony export */   combineState: () => (/* binding */ combineState),
/* harmony export */   combineTemplates: () => (/* binding */ combineTemplates)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_629__(/*! ./consts */ "./src/consts.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_629__(/*! ./state */ "./src/state.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_629__(/*! ./helpers */ "./src/helpers.ts");
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_629__(/*! ./html */ "./src/html.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_629__(/*! ./index */ "./src/index.ts");





function combineTemplates(combineCb, templateId) {
    const parentBindings = {};
    const inject = injectTemplate.bind(null, parentBindings, templateId);
    const markupStr = combineCb.call(null, inject);
    return [(0,_html__WEBPACK_IMPORTED_MODULE_3__.cloneHTMLMarkup)(markupStr), parentBindings];
}
function injectTemplate(parentBindings, templateId, template, value) {
    const [createComponent, isAnonymous] = getCreateFunction(template, templateId);
    const id = Object.keys(parentBindings).length;
    const name = `${_consts__WEBPACK_IMPORTED_MODULE_0__.UTIL_KEYS.CHILDREN}${id}`;
    const computeFn = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isFunction)(value) && value;
    const dependencies = (computeFn && (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getParamNames)(value)) || [];
    parentBindings[name] = {
        createComponent,
        values: {
            [_consts__WEBPACK_IMPORTED_MODULE_0__.UTIL_KEYS.VALUE]: {
                value: !computeFn && normalizeValue(value),
                computeFn,
                dependencies,
            },
        },
        dependants: {},
        children: [],
        isRendered: false,
        isAnonymous,
        isFastApply: false,
        el: {},
        isParent: true,
    };
    return `<span ${_consts__WEBPACK_IMPORTED_MODULE_0__.BINDING_SIGN.COMPONENT}${name}></span>`;
}
function combineState(state, parentBindings) {
    Object.assign(state.bindings, parentBindings);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.forEach)(parentBindings, (parentName, parentBinding) => {
        const { dependencies, computeFn, value } = parentBinding.values[_consts__WEBPACK_IMPORTED_MODULE_0__.UTIL_KEYS.VALUE];
        dependencies.forEach((name) => {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.set)(state.bindings, [name, _consts__WEBPACK_IMPORTED_MODULE_0__.UTIL_KEYS.DEPENDANTS, parentName], [_consts__WEBPACK_IMPORTED_MODULE_0__.UTIL_KEYS.VALUE]);
        });
        const newComputeFn = computeFn &&
            function (dependencies, state) {
                const computedValue = computeFn.apply(null, (0,_state__WEBPACK_IMPORTED_MODULE_1__.getArguments)(dependencies, state));
                if (!computedValue) {
                    return [];
                }
                return normalizeValue(computedValue);
            };
        parentBinding.values[_consts__WEBPACK_IMPORTED_MODULE_0__.UTIL_KEYS.VALUE].computeFn = newComputeFn;
        parentBinding.values[_consts__WEBPACK_IMPORTED_MODULE_0__.UTIL_KEYS.VALUE].value = newComputeFn
            ? newComputeFn(dependencies, state)
            : value;
    });
}
function getCreateFunction(template, templateId) {
    if (template.markup) {
        return [template, false];
    }
    return [
        (0,_index__WEBPACK_IMPORTED_MODULE_4__["default"])(template, {}, "", templateId),
        true,
    ];
}
function normalizeValue(value) {
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isArray)(value)
        ? value[0] && !(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isArray)(value[0])
            ? value.map((v) => [v])
            : value
        : [[value || {}]];
}


/***/ },

/***/ "./src/consts.ts"
/*!***********************!*\
  !*** ./src/consts.ts ***!
  \***********************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_4833__) {

__nested_webpack_require_4833__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_4833__.d(__nested_webpack_exports__, {
/* harmony export */   BINDING_SIGN: () => (/* binding */ BINDING_SIGN),
/* harmony export */   CHILDREN_LIST_OPERATIONS: () => (/* binding */ CHILDREN_LIST_OPERATIONS),
/* harmony export */   DESTROY_OP: () => (/* binding */ DESTROY_OP),
/* harmony export */   EMPTY_FN: () => (/* binding */ EMPTY_FN),
/* harmony export */   FORM_TAGS: () => (/* binding */ FORM_TAGS),
/* harmony export */   NO_EVENT_TYPES: () => (/* binding */ NO_EVENT_TYPES),
/* harmony export */   REACTIVE_TYPES: () => (/* binding */ REACTIVE_TYPES),
/* harmony export */   STATE_BEHAVIOUR_DELIMITER: () => (/* binding */ STATE_BEHAVIOUR_DELIMITER),
/* harmony export */   UTIL_KEYS: () => (/* binding */ UTIL_KEYS)
/* harmony export */ });
const STATE_BEHAVIOUR_DELIMITER = "_";
const BINDING_SIGN = {
    BEHAVIOR: "@",
    CLASS: ".",
    COMPONENT: "&",
};
const UTIL_KEYS = {
    VALUE: STATE_BEHAVIOUR_DELIMITER,
    DEPENDANTS: "dependants",
    CHILDREN: "children",
    VALUES: "values",
    MARKUP: "el",
    ON_MESSAGE: "onMessage",
    ON_CHANGE: "onChange",
};
const DESTROY_OP = "destroy";
const REACTIVE_TYPES = [
    "html",
    "value",
    "style",
    "text",
    "attrs",
    "class",
    UTIL_KEYS.VALUE,
    undefined,
];
const NO_EVENT_TYPES = REACTIVE_TYPES.concat([UTIL_KEYS.ON_CHANGE]);
const EMPTY_FN = () => { };
const CHILDREN_LIST_OPERATIONS = [DESTROY_OP, "set", "insert", "push"];
const FORM_TAGS = ["INPUT", "SELECT", "TEXTAREA"];


/***/ },

/***/ "./src/error.ts"
/*!**********************!*\
  !*** ./src/error.ts ***!
  \**********************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_6570__) {

__nested_webpack_require_6570__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_6570__.d(__nested_webpack_exports__, {
/* harmony export */   throwIllegalBindingNameError: () => (/* binding */ throwIllegalBindingNameError),
/* harmony export */   throwNoDeclaredDependencyError: () => (/* binding */ throwNoDeclaredDependencyError)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_6570__(/*! ./consts */ "./src/consts.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_6570__(/*! ./helpers */ "./src/helpers.ts");


function throwIllegalBindingNameError(name) {
    throwError(`Binding @${name} can't be added in the markup, because this name is reserved by the library.\nOther reserved names: ${(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.map)(_consts__WEBPACK_IMPORTED_MODULE_0__.UTIL_KEYS, (_, v) => v)}`);
}
function throwNoDeclaredDependencyError(name, dependant) {
    throwError(`Dependency '${name}' is used for '${dependant}', but is not declared as a state value of the component.`);
}
function throwError(text) {
    throw new Error(text);
}


/***/ },

/***/ "./src/helpers.ts"
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_7894__) {

__nested_webpack_require_7894__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_7894__.d(__nested_webpack_exports__, {
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
    return !!obj && typeof obj.tagName !== "undefined";
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
        }
        else {
            dest = dest[path[i]];
        }
    }
    if (isObject(value)) {
        dest[path[i]] = dest[path[i]] || {};
        Object.assign(dest[path[i]], value);
    }
    else {
        dest[path[i]] = value;
    }
    return obj;
}
function filter(obj, cb) {
    return Object.fromEntries(Object.entries(obj || {}).filter(([k, v]) => cb(k, v) === true));
}
function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
function get(obj, path, def) {
    let value = obj;
    for (let i = 0; i < path.length; i++) {
        try {
            value = value[path[i]];
        }
        catch {
            return def;
        }
    }
    return !isUndefined(value) ? value : def;
}
function getFilteredKeys(obj, cb) {
    return map(filter(obj, (k, v) => cb(k, v)), (k) => k);
}


/***/ },

/***/ "./src/html.ts"
/*!*********************!*\
  !*** ./src/html.ts ***!
  \*********************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_13866__) {

__nested_webpack_require_13866__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_13866__.d(__nested_webpack_exports__, {
/* harmony export */   MARKUP_ACTIONS: () => (/* binding */ MARKUP_ACTIONS),
/* harmony export */   addChildMarkup: () => (/* binding */ addChildMarkup),
/* harmony export */   applyToMarkup: () => (/* binding */ applyToMarkup),
/* harmony export */   cloneHTMLMarkup: () => (/* binding */ cloneHTMLMarkup),
/* harmony export */   gatherBindings: () => (/* binding */ gatherBindings),
/* harmony export */   removeChildMarkup: () => (/* binding */ removeChildMarkup),
/* harmony export */   setupEventListener: () => (/* binding */ setupEventListener),
/* harmony export */   walkNodes: () => (/* binding */ walkNodes)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_13866__(/*! ./helpers */ "./src/helpers.ts");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_13866__(/*! ./consts */ "./src/consts.ts");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_13866__(/*! ./popup */ "./src/popup.ts");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_13866__(/*! ./error */ "./src/error.ts");




const MARKUP_ACTIONS = {
    [_consts__WEBPACK_IMPORTED_MODULE_1__.UTIL_KEYS.VALUE]: ({ el, isFastApply }, value) => isFastApply && fastApply(el, value),
    value: ({ el }, value) => (el.value = value),
    text: ({ el }, value) => (el.textContent = value),
    html: ({ el }, value) => (el.innerHTML = value),
    attrs: ({ el, attrs }, value) => changeAttributes(el, {
        ...attrs,
        ...value,
        class: el.className,
    }),
    style: ({ el }, value) => changeStyles(el, value),
    class: ({ el, classes, templateId }, value) => changeClasses(el, value.map((cls) => `${templateId}${cls}`).concat(classes)),
};
function cloneHTMLMarkup(markup) {
    const markupStr = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isHTMLString)(markup.trim())
        ? markup
        : document.querySelector(markup)?.innerHTML;
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
            bindings[name] = {
                el,
                classes,
                attrs,
                isComponent,
                placeholder,
                templateId,
            };
        }
    });
    return bindings;
}
function extractBinding(el, templateId, dontRemove) {
    let binding = {};
    const attrs = {};
    const classes = [];
    const attributes = el.getAttributeNames();
    for (const attr of attributes) {
        if (attr.startsWith(_consts__WEBPACK_IMPORTED_MODULE_1__.BINDING_SIGN.CLASS)) {
            (dontRemove && (attrs[attr] = true)) || el.removeAttribute(attr);
            handleClassBinding(el, templateId, attr.slice(_consts__WEBPACK_IMPORTED_MODULE_1__.BINDING_SIGN.CLASS.length), classes);
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
            binding = {
                name: attr.slice(_consts__WEBPACK_IMPORTED_MODULE_1__.BINDING_SIGN.COMPONENT.length),
                el,
                placeholder: el,
                isComponent: true,
            };
            continue;
        }
        attrs[attr] = el.getAttribute(attr);
    }
    return { ...binding, classes, attrs };
}
function handleClassBinding(el, templateId, classesString, classes) {
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
    elData && MARKUP_ACTIONS[type] && MARKUP_ACTIONS[type](elData, value);
}
function changeAttributes(el, newAttrs) {
    for (const name of el.getAttributeNames()) {
        if (!newAttrs[name]) {
            el.removeAttribute(name);
        }
    }
    Object.entries(newAttrs).forEach(([k, v]) => el.setAttribute(k, v));
}
function changeStyles(el, styles) {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.forEach)(styles, (k, v) => {
        el.style.setProperty((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.toDashCase)(k), (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.addEnding)(v, "px", (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isNumber)(v)));
    });
}
function changeClasses(el, classes) {
    el.classList.value = classes.join(" ");
}
function setupEventListener(el, type, cb, stateMutator) {
    const fn = (e) => cb(e, stateMutator);
    el.addEventListener(type, fn);
}
function removeChildMarkup(state, idx) {
    const { children, el } = state.parentBinding;
    const markup = state.el;
    if (children.length === 1 && el) {
        markup?.parentNode?.replaceChild(el.placeholder, markup);
        el.el = el.placeholder;
        return;
    }
    if (idx === 0) {
        el.el = markup?.nextSibling;
    }
    markup?.parentNode?.removeChild(markup);
}
function addChildMarkup(parentNode, component, options) {
    const { markup, styles, id } = component;
    const { isNoShadow, nextNode, placeholder, isPopup } = options;
    let el;
    if (isNoShadow) {
        el = markup;
    }
    else {
        el = document.createElement("div");
        const host = el.attachShadow({ mode: "open" });
        host.adoptedStyleSheets = styles;
        host.appendChild(markup);
    }
    if (placeholder) {
        parentNode.replaceChild(el, placeholder);
    }
    else if (nextNode) {
        parentNode.insertBefore(el, nextNode);
    }
    else {
        parentNode.appendChild(el);
    }
    if (isPopup) {
        (0,_popup__WEBPACK_IMPORTED_MODULE_2__.addPopupLogic)(markup, { ...options, id });
    }
}
function fastApply(el, value = "") {
    if (_consts__WEBPACK_IMPORTED_MODULE_1__.FORM_TAGS.includes(el.tagName)) {
        el.value = value;
    }
    else {
        el.textContent = value;
    }
}


/***/ },

/***/ "./src/index.ts"
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_21289__) {

__nested_webpack_require_21289__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_21289__.d(__nested_webpack_exports__, {
/* harmony export */   append: () => (/* binding */ append),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_21289__(/*! ./state */ "./src/state.ts");
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_21289__(/*! ./html */ "./src/html.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_21289__(/*! ./styles */ "./src/styles.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_21289__(/*! ./helpers */ "./src/helpers.ts");
/* harmony import */ var _combine__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_21289__(/*! ./combine */ "./src/combine.ts");
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_21289__(/*! ./lifecycle */ "./src/lifecycle.ts");






function createTemplate(markupStr, stateBehaviour, styleSheets, parentId) {
    const id = parentId || (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.uid)();
    const [markup, childrenState] = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isFunction)(markupStr)
        ? (0,_combine__WEBPACK_IMPORTED_MODULE_4__.combineTemplates)(markupStr, id)
        : [(0,_html__WEBPACK_IMPORTED_MODULE_1__.cloneHTMLMarkup)(markupStr), {}];
    const [state, styles] = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isObject)(stateBehaviour)
        ? [(0,_state__WEBPACK_IMPORTED_MODULE_0__.prepareStateSettings)(stateBehaviour), (0,_styles__WEBPACK_IMPORTED_MODULE_2__.prepareStyles)(id, styleSheets)]
        : [{}, (0,_styles__WEBPACK_IMPORTED_MODULE_2__.prepareStyles)(id, stateBehaviour)];
    const isAnonymous = !Object.keys(state).length || !!parentId;
    (0,_combine__WEBPACK_IMPORTED_MODULE_4__.combineState)(state, childrenState);
    const boundElements = (0,_html__WEBPACK_IMPORTED_MODULE_1__.gatherBindings)(markup, id, true);
    (0,_state__WEBPACK_IMPORTED_MODULE_0__.updateTemplateMarkup)(boundElements, state);
    const allStyles = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.map)(childrenState, (_, v) => v)
        .map((v) => v.createComponent?.styles)
        .reduce((allStyles, styles) => allStyles.concat(styles), [])
        .concat(styles);
    const template = {
        id,
        markup,
        state,
        styles: allStyles,
        isAnonymous,
    };
    return Object.assign((stateValues, target, options) => createComponent(template, stateValues, target, options), {
        ...template,
        asPopup: (options) => createComponent(template, {}, document.body, {
            ...options,
            isPopup: true,
        }),
    });
}
function createComponent(template, stateValues, target, options = {}) {
    if (template.isAnonymous) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.copy)(template.state, (0,_state__WEBPACK_IMPORTED_MODULE_0__.prepareStateSettings)(stateValues, true));
    }
    const markup = template.markup?.cloneNode(true);
    const state = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.copy)({}, template.state);
    state.parentState = options.parentState;
    state.parentBinding = options.parentBinding;
    state.el = markup;
    const boundElements = (0,_html__WEBPACK_IMPORTED_MODULE_1__.gatherBindings)(markup, template.id);
    const api = state &&
        (0,_state__WEBPACK_IMPORTED_MODULE_0__.setupComponentMarkup)(boundElements, state, template.isAnonymous
            ? (0,_state__WEBPACK_IMPORTED_MODULE_0__.getValues)((0,_state__WEBPACK_IMPORTED_MODULE_0__.prepareStateSettings)(stateValues))
            : stateValues);
    const component = { api, ...template, markup, state };
    if (target) {
        return append(target, component, options);
    }
}
function append(parentNode, component, options = {}) {
    (0,_html__WEBPACK_IMPORTED_MODULE_1__.addChildMarkup)(parentNode, component, options);
    const { state } = component;
    state.isRendered = true;
    return (0,_lifecycle__WEBPACK_IMPORTED_MODULE_5__.runStateChangeListeners)(true, state);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTemplate);


/***/ },

/***/ "./src/lifecycle.ts"
/*!**************************!*\
  !*** ./src/lifecycle.ts ***!
  \**************************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_25687__) {

__nested_webpack_require_25687__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_25687__.d(__nested_webpack_exports__, {
/* harmony export */   runStateChangeListeners: () => (/* binding */ runStateChangeListeners)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_25687__(/*! ./helpers */ "./src/helpers.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_25687__(/*! ./state */ "./src/state.ts");


function runStateChangeListeners(changes, state) {
    const { onChange, el } = state;
    const bindings = (0,_state__WEBPACK_IMPORTED_MODULE_1__.getStateBindings)(state);
    const componentApi = (0,_state__WEBPACK_IMPORTED_MODULE_1__.createStateApi)(state);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.forEach)(bindings, (name, binding) => {
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isArray)(changes) && !changes.includes(name)) {
            return;
        }
        const change = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isArray)(changes) ? [name] : changes;
        binding?.values?.onChange?.value?.(change, componentApi, binding.el?.el);
    });
    onChange(changes, componentApi, el);
    return componentApi;
}


/***/ },

/***/ "./src/popup.ts"
/*!**********************!*\
  !*** ./src/popup.ts ***!
  \**********************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_27084__) {

__nested_webpack_require_27084__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_27084__.d(__nested_webpack_exports__, {
/* harmony export */   addPopupLogic: () => (/* binding */ addPopupLogic)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_27084__(/*! ./helpers */ "./src/helpers.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_27084__(/*! ./styles */ "./src/styles.ts");


const AXIS = {
    left: "X",
    top: "Y",
};
const DIRECTIONS = ["left", "top", "bottom", "right"];
function addPopupLogic(markup, options) {
    const { handle, closeButton, id } = options;
    closeButton &&
        markup?.parentNode
            ?.querySelector((0,_styles__WEBPACK_IMPORTED_MODULE_1__.addClassPrefix)(closeButton, id))
            ?.addEventListener("click", () => markup?.parentNode?.removeChild(markup));
    handle &&
        markup?.parentNode
            ?.querySelector((0,_styles__WEBPACK_IMPORTED_MODULE_1__.addClassPrefix)(handle, id))
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
            function onMouseUp() {
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
                el?.removeEventListener("mouseup", onMouseUp);
            }
            document.addEventListener("mouseup", onMouseUp);
            el?.addEventListener("mouseup", onMouseUp);
            document.addEventListener("mousemove", onMouseMove);
        });
    positionPopup(markup, options);
}
function positionPopup(markup, options) {
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
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.forEach)(options, (dir, dist) => {
        if (DIRECTIONS.includes(dir)) {
            if (dist === "center") {
                return style.push(`${dir}: 50%`, `transform: translate${AXIS[dir]}(-50%)`);
            }
            style.push(`${dir}: ${(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.addEnding)(dist, "px", (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isNumber)(dist))}`);
        }
    });
    options.left === "center" &&
        options.top === "center" &&
        style.push("transform: translate(-50%, -50%)");
    markup.style = `${markup.style.cssText}; ${style.join(";")}`;
}


/***/ },

/***/ "./src/state.ts"
/*!**********************!*\
  !*** ./src/state.ts ***!
  \**********************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_30548__) {

__nested_webpack_require_30548__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_30548__.d(__nested_webpack_exports__, {
/* harmony export */   createChildrenApi: () => (/* binding */ createChildrenApi),
/* harmony export */   createStateApi: () => (/* binding */ createStateApi),
/* harmony export */   getArguments: () => (/* binding */ getArguments),
/* harmony export */   getStateBindings: () => (/* binding */ getStateBindings),
/* harmony export */   getValues: () => (/* binding */ getValues),
/* harmony export */   prepareStateSettings: () => (/* binding */ prepareStateSettings),
/* harmony export */   setupComponentMarkup: () => (/* binding */ setupComponentMarkup),
/* harmony export */   updateTemplateMarkup: () => (/* binding */ updateTemplateMarkup)
/* harmony export */ });
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_30548__(/*! ./html */ "./src/html.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_30548__(/*! ./helpers */ "./src/helpers.ts");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_30548__(/*! ./consts */ "./src/consts.ts");
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_30548__(/*! ./lifecycle */ "./src/lifecycle.ts");




function prepareStateSettings(stateBehaviour = {}, noValues) {
    const state = {
        onMessage: stateBehaviour.onMessage || _consts__WEBPACK_IMPORTED_MODULE_2__.EMPTY_FN,
        onChange: stateBehaviour.onChange || _consts__WEBPACK_IMPORTED_MODULE_2__.EMPTY_FN,
        bindings: {},
    };
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.map)(_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS, (_, v) => v).forEach((v) => delete stateBehaviour[v]);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.forEach)(stateBehaviour, (stateKey, userValue) => {
        const [name, type] = splitStateKey(stateKey);
        if (!state.bindings[name]) {
            state.bindings[name] = {
                values: { [_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE]: {} },
                children: [],
                el: {},
                isFastApply: !type && !(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isObject)(userValue),
                dependants: {},
            };
        }
        const binding = state.bindings[name];
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isObject)(userValue)) {
            return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.forEach)(userValue, (type, value) => {
                binding.values[type] = prepareValue(name, type, value, state, noValues);
            });
        }
        binding.values[type || _consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE] = prepareValue(name, type, userValue, state, noValues);
    });
    return state;
}
function splitStateKey(key) {
    const segments = key.split(_consts__WEBPACK_IMPORTED_MODULE_2__.STATE_BEHAVIOUR_DELIMITER);
    if (segments.length === 1) {
        return [segments[0]];
    }
    const name = segments.slice(0, -1).join(_consts__WEBPACK_IMPORTED_MODULE_2__.STATE_BEHAVIOUR_DELIMITER);
    const type = segments.slice(-1)[0];
    return [name, type];
}
function updateTemplateMarkup(markupPointers, state) {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.forEach)(markupPointers, (name, elData) => {
        const binding = state.bindings[(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.toCamelCase)(name)];
        elData.isFastApply = binding?.isFastApply;
        binding &&
            (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.forEach)(binding.values, (type, value) => (0,_html__WEBPACK_IMPORTED_MODULE_0__.applyToMarkup)(elData, type, value?.value));
    });
}
function setupComponentMarkup(markupPointers, state, args) {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.forEach)(markupPointers, (name, elData) => {
        const binding = state.bindings[(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.toCamelCase)(name)];
        elData.isFastApply = !binding || binding?.isFastApply;
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.set)(state.bindings, [(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.toCamelCase)(name), _consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.MARKUP], elData);
    });
    setValues(state, args);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.forEach)(state.bindings, (name, binding) => {
        const { isParent, el, isRendered, values } = binding;
        const { [_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE]: value } = values || {};
        if (isParent) {
            if (!isRendered) {
                const childrenApi = createChildrenApi(binding);
                const diffs = getChildrenDifference(value.value, []);
                for (let operation of _consts__WEBPACK_IMPORTED_MODULE_2__.CHILDREN_LIST_OPERATIONS) {
                    diffs[operation].forEach((val) => {
                        childrenApi[operation].apply(null, [val]);
                    });
                }
                updateAnonymousChildren(state);
            }
            binding.parentState = state;
            return;
        }
        const eventListeners = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.filter)(binding.values, (type, value) => isEventListener(type, value.value));
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.forEach)(eventListeners, (event, cb) => (0,_html__WEBPACK_IMPORTED_MODULE_0__.setupEventListener)(el?.el, event, cb.value, createStateApi(state)));
    });
    return createStateApi(state);
}
function prepareValue(name, type, value, state, noValues) {
    const isReactive = isReactiveFunction(type, value);
    const dependencies = isReactive ? (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getParamNames)(value) : [];
    if (dependencies) {
        dependencies.forEach((dependency) => {
            if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.get)(state.bindings, [dependency, _consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.DEPENDANTS, name])) {
                (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.set)(state.bindings, [dependency, _consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.DEPENDANTS, name], []);
            }
            state.bindings[dependency].dependants[name].push(type || _consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE);
        });
    }
    const computeFn = isReactive &&
        function (dependencies, state) {
            return value.apply(null, getArguments(dependencies, state));
        };
    return {
        value: !noValues || isNotReactiveFunction(type, value)
            ? isReactive
                ? computeFn(dependencies, state)
                : value
            : undefined,
        computeFn,
        dependencies,
    };
}
function isReactiveFunction(type, value) {
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value) && _consts__WEBPACK_IMPORTED_MODULE_2__.REACTIVE_TYPES.includes(type);
}
function isNotReactiveFunction(type, value) {
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value) && !_consts__WEBPACK_IMPORTED_MODULE_2__.REACTIVE_TYPES.includes(type);
}
function isEventListener(type, value) {
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value) && !_consts__WEBPACK_IMPORTED_MODULE_2__.NO_EVENT_TYPES.includes(type);
}
function getArguments(names, state) {
    const values = getValues(state);
    return names.map((name) => values[name]);
}
function getValues(state) {
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.map)(getStateBindings(state), (k, v) => [
        k,
        v.values._?.value,
    ]);
}
function setValues(state, changes) {
    const realChanges = {};
    for (let [k, v] of Object.entries(changes)) {
        setValue(k, v, state, realChanges, changes);
    }
    updateComponentAfterChange(state, realChanges);
}
function setValue(key, value, state, realChanges, changes) {
    const prevValue = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.get)(state.bindings, [
        key,
        _consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUES,
        _consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE,
        "value",
    ]);
    if (prevValue !== value) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.set)(state.bindings, [key, _consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUES, _consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE, "value"], value);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.set)(realChanges, [key, _consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE], { newValue: value, prevValue });
    }
    else {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.set)(realChanges, [key, _consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE], { isSame: true });
    }
    updateDependencies(key, state, realChanges, changes);
}
function updateDependencies(key, state, realChanges, changes) {
    const dependants = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.get)(state.bindings, [key, _consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.DEPENDANTS], {});
    for (let [dependant, types] of Object.entries(dependants)) {
        types.forEach((type) => {
            const dependantBindingValue = state.bindings[dependant].values[type];
            const { computeFn, dependencies } = dependantBindingValue;
            const realChangesKeys = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getFilteredKeys)(realChanges, (k, v) => !!v[_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE]);
            const changesKeys = Object.keys(changes);
            const isUpdated = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.get)(realChanges, [dependant, type]);
            if (!dependencies.every((name) => (changesKeys.includes(name) && realChangesKeys.includes(name)) ||
                !changesKeys.includes(name)) ||
                isUpdated) {
                return;
            }
            const prevValue = dependantBindingValue.value;
            const newValue = computeFn(dependencies, state);
            if (prevValue !== newValue) {
                dependantBindingValue.value = newValue;
                (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.set)(realChanges, [dependant, type], { newValue, prevValue });
                if (type === _consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE) {
                    updateDependencies(dependant, state, realChanges, changes);
                }
            }
        });
    }
}
function updateComponentAfterChange(state, realChanges) {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.forEach)(realChanges, (name, change) => {
        const binding = state.bindings[name];
        const { el, children, isParent } = binding;
        if (isParent) {
            const { newValue, prevValue } = change[_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE];
            const childrenApi = createChildrenApi(binding);
            const diffs = getChildrenDifference(newValue, prevValue);
            for (let operation of _consts__WEBPACK_IMPORTED_MODULE_2__.CHILDREN_LIST_OPERATIONS) {
                const values = diffs[operation];
                values.forEach((val) => {
                    if (operation === _consts__WEBPACK_IMPORTED_MODULE_2__.DESTROY_OP && children.length) {
                        (0,_lifecycle__WEBPACK_IMPORTED_MODULE_3__.runStateChangeListeners)(false, children[val.index].state);
                    }
                    childrenApi[operation].apply(null, [val]);
                });
            }
            binding.isRendered = true;
            return;
        }
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.forEach)(change, (type, value) => !value.isSame && (0,_html__WEBPACK_IMPORTED_MODULE_0__.applyToMarkup)(el, type, value.newValue));
    });
    updateAnonymousChildren(state);
    const changedKeys = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getFilteredKeys)(realChanges, (k, v) => !!v[_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE] &&
        !v[_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE].isSame &&
        !state.bindings[k].isParent);
    state.isRendered &&
        changedKeys.length &&
        (0,_lifecycle__WEBPACK_IMPORTED_MODULE_3__.runStateChangeListeners)(changedKeys, state);
}
function sendMessage(state, data) {
    let parent = state.parentState || state.parentBinding?.parentState;
    const parentBinding = state.parentBinding;
    const index = parentBinding.children.findIndex((api) => api.state === state);
    const stop = () => (parent = {});
    while (parent) {
        parent.onMessage(data, {
            stop,
            ...createStateApi(parent),
        }, {
            index,
            ...createChildrenApi(parentBinding, true),
        });
        parent = parent.parentState || parent.parentBinding?.parentState;
    }
}
function createStateApi(state) {
    return {
        get: getValues.bind(null, state),
        set: setValues.bind(null, state),
        send: sendMessage.bind(null, state),
        children: getStateChildren.bind(null, state),
        [_consts__WEBPACK_IMPORTED_MODULE_2__.DESTROY_OP]: _html__WEBPACK_IMPORTED_MODULE_0__.removeChildMarkup.bind(null, state),
        markup: getComponentMarkups(state),
        state,
    };
}
function getStateBindings(state) {
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.filter)(state.bindings, (k, v) => !!v?.values?.[_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE] && !v?.isParent);
}
function getStateChildren(state) {
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.map)((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.filter)(state.bindings, (k, v) => !!v?.isParent), (k, v) => [k, createChildrenApi(v)]);
}
function getComponentMarkups(state) {
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.map)((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.filter)(state.bindings, (k, v) => !!v?.el?.el && !v?.isParent), (k, v) => [k, v?.el?.el]);
}
function createChildrenApi(parentBinding, isManualUse) {
    const { createComponent, parentState, children, values: { [_consts__WEBPACK_IMPORTED_MODULE_2__.UTIL_KEYS.VALUE]: value }, } = parentBinding;
    const create = (value, nextNode, isFirst) => {
        const { el } = parentBinding;
        const componentApi = createComponent?.(value, el?.el.parentNode, {
            isNoShadow: true,
            placeholder: isFirst && el?.el,
            nextNode,
            parentBinding,
            parentState,
        });
        if (isFirst && el) {
            el.el = componentApi?.state.el;
        }
        return componentApi;
    };
    return {
        [_consts__WEBPACK_IMPORTED_MODULE_2__.DESTROY_OP]: ({ index }) => {
            children[index][_consts__WEBPACK_IMPORTED_MODULE_2__.DESTROY_OP](index);
            children.splice(index, 1);
            if (isManualUse) {
                value.value.splice(index, 1);
            }
        },
        push: ({ values }) => {
            const nextNode = children &&
                children.length &&
                children[children.length - 1].state.el?.nextSibling;
            children.push(create(values, nextNode, !children.length));
            if (isManualUse) {
                value.value.push(values);
            }
        },
        insert: ({ values, index = 0 }) => {
            const nextNode = children[index].state.el;
            children.splice(index, 0, create(values, nextNode));
            if (isManualUse) {
                value.value.splice(index, 0, value);
            }
        },
        set: ({ values, index }) => {
            if (index || index === 0) {
                return children[index].set(createComponent?.isAnonymous
                    ? getValues(prepareStateSettings(values))
                    : values);
            }
        },
        get: (index) => {
            if (index || index === 0) {
                return children[index].get();
            }
            return children.map(({ get }) => get());
        },
        forEach: (cb) => children.forEach(cb),
    };
}
function getChildrenDifference(news, prevs) {
    const destroy = [];
    const set = [];
    const insert = [];
    const push = [];
    const newsInPrevs = {};
    const foundSameUids = {};
    let removeCount = 0;
    prevs.forEach(([prev, uid], i) => {
        const prevFoundIndex = foundSameUids[uid] >= 0 ? foundSameUids[uid] + 1 : 0;
        const newIndex = news
            .slice(prevFoundIndex)
            .findIndex(([neww, newUid]) => newUid === uid);
        const newPos = i - removeCount;
        if (newIndex === -1) {
            destroy.push({ index: newPos, values: prev });
            removeCount++;
        }
        else {
            foundSameUids[uid] = prevFoundIndex + newIndex;
            set.push({ values: news[foundSameUids[uid]][0], index: newPos });
            newsInPrevs[foundSameUids[uid]] = newPos;
        }
    });
    let newCount = 0;
    let nextPos = 0;
    news.forEach(([neww], i) => {
        const newPos = newsInPrevs[i];
        if (newPos >= 0) {
            nextPos = newPos + 1 + newCount;
        }
        else if (nextPos >= prevs.length + newCount) {
            push.push({ values: neww, index: i });
        }
        else {
            insert.push({ values: neww, index: nextPos });
            nextPos++;
            newCount++;
        }
    });
    return { [_consts__WEBPACK_IMPORTED_MODULE_2__.DESTROY_OP]: destroy, set, insert, push };
}
function updateAnonymousChildren(state) {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.forEach)(state.bindings, (_, childrenBinding) => {
        if (childrenBinding?.isAnonymous) {
            const childrenApi = createChildrenApi(childrenBinding);
            childrenApi.forEach(({ set }) => set(getValues(state)));
        }
    });
}


/***/ },

/***/ "./src/styles.ts"
/*!***********************!*\
  !*** ./src/styles.ts ***!
  \***********************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_48216__) {

__nested_webpack_require_48216__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_48216__.d(__nested_webpack_exports__, {
/* harmony export */   addClassPrefix: () => (/* binding */ addClassPrefix),
/* harmony export */   prepareStyles: () => (/* binding */ prepareStyles)
/* harmony export */ });
function prepareStyles(prefix, styleStr) {
    const style = new CSSStyleSheet();
    style.replaceSync(styleStr);
    for (let i = 0; i < style.cssRules.length; i++) {
        const cssRule = style.cssRules[i];
        cssRule.selectorText = addClassPrefix(cssRule.selectorText, prefix);
    }
    return [style];
}
function addClassPrefix(str, prefix) {
    return str.replaceAll(".", `.${prefix}`);
}


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_49162__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_49162__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__nested_webpack_require_49162__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__nested_webpack_require_49162__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__nested_webpack_require_49162__.o(definition, key) && !__nested_webpack_require_49162__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_49162__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_49162__.r = (exports) => {
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	let __nested_webpack_exports__ = __nested_webpack_require_49162__("./src/index.ts");
/******/ 	__nested_webpack_exports__ = __nested_webpack_exports__["default"];
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ },

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
  "getData",
  "addToRecent",
  "removeRecentSearch",
  "addFavoriteSearch",
  "removeFavoriteSearch",
  "setColors",
  "closingWarning",
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
/* harmony import */ var simple_els__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-els */ "../simple-els/dist/simple-els.js");
/* harmony import */ var simple_els__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_els__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/messages */ "./src/common/messages.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/constants */ "./src/common/constants.js");




const Color = simple_els__WEBPACK_IMPORTED_MODULE_0___default()(
  `
  <div @color draggable="true"></div>  
`,
  {
    color_style: (color) => ({ backgroundColor: `rgb(${color})` }),
    color_dragstart: (e, { get, send }) => send({ current: get().index }),
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
    button_click: (e, { set }) => {
      _common_messages__WEBPACK_IMPORTED_MODULE_1__["default"].setColors({ colors: _common_constants__WEBPACK_IMPORTED_MODULE_2__.COLORS });
      set({ colors: _common_constants__WEBPACK_IMPORTED_MODULE_2__.COLORS.slice() });
    },
    onMessage: (data, { stop, set, get }) => {
      stop();
      if (data.dragEnd) {
        const { current, hovered, prevHovered, colors } = get();
        if (hovered === prevHovered) {
          return;
        }

        const curentColor = colors.splice(current, 1)[0];
        colors.splice(hovered, 0, curentColor);
        _common_messages__WEBPACK_IMPORTED_MODULE_1__["default"].setColors({ colors });
        set({ colors });
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
/* harmony import */ var simple_els__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-els */ "../simple-els/dist/simple-els.js");
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

    .add:active {
      transform: scale(1.06) rotate(-45deg);
    }

    .remove:active {
      transform: scale(1.06);
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
/* harmony import */ var simple_els__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-els */ "../simple-els/dist/simple-els.js");
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
/* harmony import */ var simple_els__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-els */ "../simple-els/dist/simple-els.js");
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
        const { recentSearches, favoriteSearches, colors } =
          await _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].getData();

        _background_state__WEBPACK_IMPORTED_MODULE_1__["default"].onChange(["recentSearches", "favoriteSearches", "colors"], () =>
          set(_background_state__WEBPACK_IMPORTED_MODULE_1__["default"].get()),
        );

        _background_state__WEBPACK_IMPORTED_MODULE_1__["default"].set({ recentSearches, favoriteSearches, colors });
      }
    },

    onMessage: async ({ action, string }, { set }) => {
      await _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"][action]({ string });

      const { recentSearches, favoriteSearches } = await _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].getData();

      set({ recentSearches, favoriteSearches });
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

/***/ "./src/options/options.js"
/*!********************************!*\
  !*** ./src/options/options.js ***!
  \********************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Settings */ "./src/options/components/Settings.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Settings__WEBPACK_IMPORTED_MODULE_0__]);
var __webpack_async_dependencies_result__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
_components_Settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_async_dependencies_result__[0];


(0,_components_Settings__WEBPACK_IMPORTED_MODULE_0__["default"])({}, document.body);

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