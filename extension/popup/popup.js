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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/popup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/couli/dist/couli.js":
/*!******************************************!*\
  !*** ./node_modules/couli/dist/couli.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Definition.js":
/*!***************************!*\
  !*** ./src/Definition.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RESERVED_BINDING_NAMES = exports.VALUE_TYPES = exports.isComponent = exports.shortenBindingId = exports.getComponentOpts = exports.define = undefined;

var _attributes = __webpack_require__(/*! ./globals/attributes */ "./src/globals/attributes.js");

var _attributes2 = _interopRequireDefault(_attributes);

var _regexp = __webpack_require__(/*! ./globals/regexp */ "./src/globals/regexp.js");

var _regexp2 = _interopRequireDefault(_regexp);

var _dom = __webpack_require__(/*! ./helpers/dom */ "./src/helpers/dom.js");

var _object = __webpack_require__(/*! ./helpers/object */ "./src/helpers/object.js");

var _copy = __webpack_require__(/*! ./helpers/copy */ "./src/helpers/copy.js");

var _copy2 = _interopRequireDefault(_copy);

var _checkers = __webpack_require__(/*! ./helpers/checkers */ "./src/helpers/checkers.js");

var _common = __webpack_require__(/*! ./helpers/common */ "./src/helpers/common.js");

var _State = __webpack_require__(/*! ./State */ "./src/State.js");

var _View = __webpack_require__(/*! ./View */ "./src/View.js");

var _ComponentRedefineError = __webpack_require__(/*! ./errors/ComponentRedefineError */ "./src/errors/ComponentRedefineError.js");

var _ComponentRedefineError2 = _interopRequireDefault(_ComponentRedefineError);

var _ScopeNameCollisionError = __webpack_require__(/*! ./errors/ScopeNameCollisionError */ "./src/errors/ScopeNameCollisionError.js");

var _ScopeNameCollisionError2 = _interopRequireDefault(_ScopeNameCollisionError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VALUE_TYPES = ['style', 'class', 'value', 'attrs', 'html'];
var RESERVED_HOOKS_NAMES = ['mount', 'update', 'remove'];
var DEFAULT_HOOKS = (0, _object.toObject)(RESERVED_HOOKS_NAMES, function () {
  return function () {};
});
var RESERVED_BINDING_NAMES = VALUE_TYPES.concat(['events', 'hooks', 'listItem', _attributes2.default.SELF]);

exports.define = define;
exports.getComponentOpts = getComponentOpts;
exports.shortenBindingId = shortenBindingId;
exports.isComponent = isComponent;
exports.VALUE_TYPES = VALUE_TYPES;
exports.RESERVED_BINDING_NAMES = RESERVED_BINDING_NAMES;


var COMPONENT_COUNTER = 0;
var COMPONENTS = {};

function define(name, markup, bindings, styles) {
  var args = (0, _checkers.isObject)(name) ? name : { name: name, markup: markup, bindings: bindings, styles: styles };

  name = (0, _common.toCamelCase)(args.name);

  if (COMPONENTS[name]) {
    throw new _ComponentRedefineError2.default(name);
  }

  var componentHTMLMarkup = (0, _dom.cloneHTMLMarkup)(args.markup);
  componentHTMLMarkup.classList.add(name);

  COMPONENT_COUNTER = 0;
  var component = {
    name: name,
    state: _defineProperty({}, _attributes2.default.SELF, {}),
    stateId: name,
    statePath: [name],
    stateNames: {},
    markup: componentHTMLMarkup,
    evaluate: {},
    links: {},
    isComponent: true,
    outerNames: {},
    _links: {}
  };

  gatherBindingsFromMarkup(componentHTMLMarkup, component);

  var normalizedOptions = normalizeUserOptions(args.bindings, { state: {} });
  (0, _copy2.default)(component, normalizedOptions);

  prepareBindings(component, component.stateId, { statePath: [], links: {}, stateNames: component.stateNames });

  (0, _View.createAndAppendStyles)(prepareStyles(args.styles, component));

  return COMPONENTS[name] = component;
}

function gatherBindingsFromMarkup(componentHTMLMarkup, component) {
  (0, _dom.walkNodes)(componentHTMLMarkup, function (HTMLNode) {
    var bindingOpts = analyzeBinding(HTMLNode);

    if (!bindingOpts) {
      return;
    }

    var binding = createBinding(bindingOpts.name, component, HTMLNode);

    if (bindingOpts.isComponent) {
      setComponent(binding, bindingOpts);
      HTMLNode.classList.add(_attributes2.default.PREFIX + binding.id);
    }

    component.state[binding.name] = binding;
    binding.markup.classList.add(_attributes2.default.PREFIX + binding.id, component.name + '-' + binding.name);

    if (bindingOpts.isList) {
      var itemNode = HTMLNode.children[0];
      modifyToListBinding(binding, itemNode);

      if (isComponent(itemNode)) {
        setComponent(binding.listItem, getComponentOpts(itemNode));
        return -1;
      }

      gatherBindingsFromMarkup(itemNode, binding.listItem);
      return -1;
    }
  });

  return component;
}

function setComponent(componentBinding, subComponentOpts) {
  var stateNames = Object.assign(componentBinding.stateNames, subComponentOpts.component.stateNames);
  var stateId = subComponentOpts.component.name + 'x' + COMPONENT_COUNTER++;

  if (subComponentOpts.stateName) {
    if (stateNames[subComponentOpts.stateName]) {
      throw new _ScopeNameCollisionError2.default(subComponentOpts.stateName);
    }

    stateId = subComponentOpts.stateName;
    componentBinding.stateNames[stateId] = true;
  }

  (0, _copy2.default)(componentBinding, subComponentOpts.component);

  return Object.assign(componentBinding, {
    id: stateId,
    stateId: stateId,
    name: stateId,
    stateName: subComponentOpts.stateName,
    statePath: componentBinding.statePath.concat(stateId),
    markup: subComponentOpts.component.markup.cloneNode(true),
    isComponent: true,
    stateNames: stateNames,
    _links: Object.assign({}, subComponentOpts.links),
    outerNames: Object.assign({}, subComponentOpts.revLinks)
  });
}

function prepareBindings(component, currentStateId, parentComponent) {
  var componentWrapper = document.createElement('div');
  component.markup.setAttribute(_attributes2.default.BINDING_ID, shortenBindingId(currentStateId + _attributes2.default.STATE_DELIMITER + _attributes2.default.SELF));
  componentWrapper.appendChild(component.markup);
  component.statePath = parentComponent.statePath.concat(component.stateId);
  component.stateNames = parentComponent.stateNames;

  var subComponents = [];

  (0, _object.forEach)(component.state, function (binding, bindingName) {
    var oldBindingId = binding.id;
    var newBindingId = currentStateId + _attributes2.default.STATE_DELIMITER + bindingName;
    var shortId = shortenBindingId(newBindingId);

    if (binding.markup) {
      var bindingNode = componentWrapper.querySelector('.' + _attributes2.default.PREFIX + oldBindingId);
      bindingNode.setAttribute(_attributes2.default.BINDING_ID, shortId);
      bindingNode.classList.remove(_attributes2.default.PREFIX + oldBindingId);
      bindingNode.classList.add(_attributes2.default.PREFIX + newBindingId);
    }

    Object.assign(binding, {
      statePath: component.statePath.slice(),
      hooks: Object.assign({}, DEFAULT_HOOKS, binding.hooks),
      id: newBindingId,
      shortId: shortId
    });

    prepareReactiveFuncs(binding, component);

    if (binding.isList) {
      binding.statePath.push(bindingName);
      binding.stateNames = component.stateNames;

      prepareBindings(binding.listItem, newBindingId + _attributes2.default.STATE_DELIMITER + _attributes2.default.ITEM + binding.listItem.name, binding);
      return;
    }

    if (binding.isComponent) {
      subComponents.push(binding);
    }
  });

  setupComponentsLinks(component, parentComponent);
  component.template = component.markup.cloneNode(true);

  subComponents.forEach(function (subComponent) {
    prepareBindings(subComponent, currentStateId + _attributes2.default.STATE_DELIMITER + subComponent.stateId, component);
  });
}

function prepareReactiveFuncs(binding, componentData) {
  VALUE_TYPES.forEach(function (type) {
    var reactiveFunc = binding[type];
    if (!reactiveFunc) {
      return;
    }

    binding.evaluate[type] = prepareReactiveFunc(binding, type, reactiveFunc, componentData);
  });
}

function prepareReactiveFunc(binding, type, reactiveFunc, componentData) {
  var dependenciesNames = getDependenciesNames(reactiveFunc);

  dependenciesNames.forEach(function (dependencyName) {
    if ((0, _checkers.isEmpty)(componentData.state[dependencyName])) {
      componentData.state[dependencyName] = createBinding(dependencyName, componentData);
    }

    componentData.state[dependencyName].dependants[binding.name + ':' + type] = { name: binding.name, type: type };
  });

  return function (values, componentInterface) {
    return compute(reactiveFunc, values, componentInterface);
  };
}

function getDependenciesNames(func) {
  var funcParams = getParamNames(func);
  var valuesObjRegExp = new RegExp('\\' + funcParams[0] + '\\.(\\D[^\\s\\W]+)', 'g');
  var dependenciesNames = [];
  var funcStr = func.toString();
  var dependencyName = void 0;
  while (dependencyName = valuesObjRegExp.exec(funcStr)) {
    dependenciesNames.push(dependencyName[1]);
  }
  return dependenciesNames;
}

function getParamNames(func) {
  var funcStrWithoutComments = func.toString().replace(_regexp2.default.STRIP_COMMENTS, '');
  var paramsStr = funcStrWithoutComments.slice(funcStrWithoutComments.indexOf('(') + 1, funcStrWithoutComments.indexOf(')'));
  return paramsStr.match(_regexp2.default.ARGUMENT_NAMES) || [];
}

function compute(func, valuesObj, componentInterface) {
  return func.call(this, (0, _State.getOnlyValues)(valuesObj), componentInterface);
}

function setupComponentsLinks(component, parentComponent) {
  Object.assign(parentComponent.links, (0, _object.map)(component.outerNames, function (k) {
    return { link: k, component: component.stateId };
  }));
}

function normalizeUserOptions(optionsObj, parentObj, parentKey) {
  if ((0, _checkers.isFunction)(optionsObj)) {
    return (0, _object.set)(parentObj, [parentKey], { class: optionsObj });
  }

  if ((0, _checkers.isArray)(optionsObj)) {

    if (optionsObj.length > 1) {
      optionsObj.forEach(function (option) {
        return normalizeUserOptions(option, parentObj, parentKey);
      });
      return;
    }

    if ((0, _checkers.isFunction)(optionsObj[0])) {
      return (0, _object.set)(parentObj, [parentKey], { value: optionsObj[0] });
    }
    if ((0, _checkers.isObject)(optionsObj[0])) {
      return (0, _object.set)(parentObj, [parentKey], { events: optionsObj[0] });
    }
  }

  (0, _object.forEach)(optionsObj, function (value, key) {
    delete optionsObj[key];
    var binding = createBinding(key);

    if ((0, _checkers.isObject)(value)) {
      parentObj['state'][key] = Object.assign(binding, value);
      return;
    }

    parentObj['state'][key] = binding;
    normalizeUserOptions(value, parentObj['state'], key);
  });

  return parentObj;
}

function analyzeBinding(el) {
  if (isComponent(el)) {
    return getComponentOpts(el);
  }

  if (!el.getAttribute) {
    return null;
  }

  var name = el.getAttribute(_attributes2.default.TEMPLATE_BINDING);
  el.removeAttribute(_attributes2.default.TEMPLATE_BINDING);

  if (name) {
    return { name: name.trim() };
  }

  name = el.getAttribute(_attributes2.default.TEMPLATE_LIST_BINDING);
  el.removeAttribute(_attributes2.default.TEMPLATE_LIST_BINDING);

  if (name) {
    return { name: name.trim(), isList: true };
  }
}

function isComponent(el) {
  var tagName = el.tagName && el.tagName.toLowerCase();
  return tagName && COMPONENTS[(0, _common.toCamelCase)(tagName)];
}

function getComponentOpts(obj) {
  var name = (0, _common.toCamelCase)(obj.tagName.toLowerCase());
  var component = getComponentByName(name);
  var links = {};
  var revLinks = {};
  var stateName = null;

  Array.prototype.slice.call(obj.attributes).forEach(function (attr) {

    if (attr.name === _attributes2.default.STATE_NAME) {
      stateName = attr.value;
      return;
    }

    var innerLink = (0, _common.toCamelCase)(attr.name);
    links[innerLink] = attr.value;
    revLinks[attr.value] = innerLink;
  });

  return {
    component: component,
    links: links,
    revLinks: revLinks,
    stateName: stateName,
    name: name,
    isComponent: true
  };
}

function getComponentByName(name) {
  return COMPONENTS[(0, _common.toCamelCase)(name)];
}

function createBinding(name, component, el) {
  var componentOpts = component ? {
    id: component.stateId + _attributes2.default.STATE_DELIMITER + name,
    statePath: component.statePath,
    stateNames: component.stateNames,
    isListItem: component.isList,
    stateId: name
  } : {};

  var elOpts = el ? {
    initValue: el.value || el.innerHTML
  } : {};

  return Object.assign({
    name: name,
    listeners: [],
    markup: el,
    dependants: {},
    events: {},
    evaluate: {},
    links: {},
    state: _defineProperty({}, _attributes2.default.SELF, {}),
    outerNames: {},
    _links: {}

  }, componentOpts, elOpts);
}

function modifyToListBinding(binding, itemMarkup) {
  binding.isList = true;

  return Object.assign(binding, {
    markup: itemMarkup,
    listItem: createBinding(itemMarkup.tagName, binding, itemMarkup)
  });
}

function shortenBindingId(id) {
  return id.split(_attributes2.default.STATE_DELIMITER).map(function (el) {
    return (0, _common.getShortName)(el);
  }).join(_attributes2.default.STATE_DELIMITER);
}

function prepareStyles(styleArg, component) {
  return (0, _object.mapKeys)(styleArg, function (key) {
    return key.split(',').map(function (selector) {
      return selector.trim();
    }).map(function (selector) {

      var className = '.' + component.name;

      if (selector) {
        var isBinding = component.state[selector.split(' ')[0].split('::')[0].split(':')[0]];
        var prefix = isBinding ? className + '-' : '';
        className += ' ' + prefix + selector;
      }

      return className;
    }).join(',');
  });
}

/***/ }),

/***/ "./src/EventHandler.js":
/*!*****************************!*\
  !*** ./src/EventHandler.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupEventHandlers = undefined;

var _attributes = __webpack_require__(/*! ./globals/attributes */ "./src/globals/attributes.js");

var _attributes2 = _interopRequireDefault(_attributes);

var _object = __webpack_require__(/*! ./helpers/object */ "./src/helpers/object.js");

var _common = __webpack_require__(/*! ./helpers/common */ "./src/helpers/common.js");

var _State = __webpack_require__(/*! ./State */ "./src/State.js");

var _StateChange = __webpack_require__(/*! ./StateChange */ "./src/StateChange.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.setupEventHandlers = setupEventHandlers;


function setupEventHandlers(element) {
  var eventHandlers = {};
  gatherAllEventHandlers(element, eventHandlers);

  var markup = element.el;

  var _loop = function _loop(eventName) {
    markup.addEventListener(eventName, function (e) {
      return executeAllCallbacksInList(e, eventHandlers[eventName], element);
    });
  };

  for (var eventName in eventHandlers) {
    _loop(eventName);
  }
}

function gatherAllEventHandlers(component, gatheredHandlers) {
  gatherEventHandlers(component, gatheredHandlers);

  if (component.state) {
    (0, _object.forEach)(component.state, function (binding) {
      return gatherAllEventHandlers(binding, gatheredHandlers);
    });
  }

  if (component.listItem) {
    gatherAllEventHandlers(component.listItem, gatheredHandlers);
  }
}

function gatherEventHandlers(binding, gatheredHandlers) {
  if (!binding.events) {
    return;
  }

  for (var eventName in binding.events) {
    if (!gatheredHandlers[eventName]) {
      gatheredHandlers[eventName] = {};
    }

    gatheredHandlers[eventName][binding.shortId] = binding.events[eventName];
  }
}

function executeAllCallbacksInList(e, eventHandlers, element) {
  decorateEvent(e);
  (0, _StateChange.startTransaction)();

  var curHTMLNode = e.target;
  while (curHTMLNode !== element.el.parentNode) {
    var bindingId = curHTMLNode.getAttribute(_attributes2.default.BINDING_ID);
    var eventHandler = eventHandlers[bindingId];

    if (eventHandler) {
      var indexlessStatePath = bindingId.split(_attributes2.default.STATE_DELIMITER);
      indexlessStatePath.pop();
      var statePathToItem = getStatePathToItem(curHTMLNode, indexlessStatePath);
      var accessorToData = (0, _State.createAccessor)([element.id].concat(statePathToItem));

      eventHandler.call(this, e, curHTMLNode, accessorToData, +statePathToItem.slice(-2)[0]);

      if (e.propagationStopped) {
        break;
      }
    }
    curHTMLNode = curHTMLNode.parentNode;
  }

  (0, _StateChange.applyChanges)();
}

function decorateEvent(e) {
  var stopPropagation = e.stopPropagation.bind(e);
  e.stopPropagation = function () {
    e.propagationStopped = true;
    stopPropagation();
  };
}

function getStatePathToItem(el, indexlessStatePath) {
  var statePath = [];

  var elementName = void 0;
  while (elementName = (0, _common.getRealName)(indexlessStatePath.pop())) {

    if ((0, _common.has)(elementName, _attributes2.default.ITEM)) {
      elementName = elementName.slice(_attributes2.default.ITEM.length);
      el = getToItemNode(el);
      var idx = el.getAttribute(_attributes2.default.ITEM_INDEX);
      el = el.parentNode;
      statePath.unshift(idx, elementName);
      continue;
    }

    statePath.unshift(elementName);
  }

  return statePath;
}

function getToItemNode(el) {
  var curEl = el;

  while (curEl.tagName !== 'BODY') {
    if (curEl.getAttribute(_attributes2.default.ITEM_INDEX)) {
      return curEl;
    }
    curEl = curEl.parentNode;
  }
}

/***/ }),

/***/ "./src/Production.js":
/*!***************************!*\
  !*** ./src/Production.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apply = undefined;

var _dom = __webpack_require__(/*! ./helpers/dom */ "./src/helpers/dom.js");

var _Definition = __webpack_require__(/*! ./Definition */ "./src/Definition.js");

var _EventHandler = __webpack_require__(/*! ./EventHandler */ "./src/EventHandler.js");

var _State = __webpack_require__(/*! ./State */ "./src/State.js");

exports.apply = apply;


function apply(rootElementSelector) {
  var rootElement = document.querySelector(rootElementSelector);
  var HTMLNodes = (0, _dom.collectHTMLNodes)(rootElement, _Definition.isComponent);

  HTMLNodes.forEach(function (HTMLNode) {
    var componentOpts = (0, _Definition.getComponentOpts)(HTMLNode);
    var element = setupElement(componentOpts);

    (0, _dom.replaceNodes)(HTMLNode, element.el);
  });
}

function setupElement(componentOpts) {
  var element = (0, _State.createElement)(componentOpts);
  (0, _EventHandler.setupEventHandlers)(element);
  return element;
}

/***/ }),

/***/ "./src/State.js":
/*!**********************!*\
  !*** ./src/State.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareChangeObject = exports.setState = exports.getComponent = exports.getOnlyValues = exports.createAccessor = exports.createElement = undefined;

var _attributes = __webpack_require__(/*! ./globals/attributes */ "./src/globals/attributes.js");

var _attributes2 = _interopRequireDefault(_attributes);

var _object = __webpack_require__(/*! ./helpers/object */ "./src/helpers/object.js");

var _common = __webpack_require__(/*! ./helpers/common */ "./src/helpers/common.js");

var _Definition = __webpack_require__(/*! ./Definition */ "./src/Definition.js");

var _StateChange = __webpack_require__(/*! ./StateChange */ "./src/StateChange.js");

var _checkers = __webpack_require__(/*! ./helpers/checkers */ "./src/helpers/checkers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.createElement = createElement;
exports.createAccessor = createAccessor;
exports.getOnlyValues = getOnlyValues;
exports.getComponent = getComponent;
exports.setState = setState;
exports.prepareChangeObject = prepareChangeObject;


var ELEMENTS = {};
var STATE = {};
var ELEMENT_COUNTER = 1;

function setState(path, value) {
  (0, _object.set)(STATE, path, value);
}

function getState(path) {
  return (0, _object.get)(STATE, path);
}

function createElement(componentOpts) {
  var id = ELEMENT_COUNTER++;
  var name = componentOpts.name;

  var element = ELEMENTS[id] = {
    id: id,
    state: _defineProperty({}, name, componentOpts.component)
  };

  STATE[id] = {};

  (0, _StateChange.createStateNodes)([id, name]);

  (0, _StateChange.sendToRenderQueue)([id], _defineProperty({}, name, false));
  (0, _StateChange.applyChanges)();
  element.el = STATE[id][name][_attributes2.default.SELF].el;
  element.el.setAttribute(_attributes2.default.COMPONENT_TYPE, _attributes2.default.BASE);

  return element;
}

function createAccessor(path) {
  var values = getState(path);
  var component = getComponent(path);

  var accessor = {
    component: component,
    values: values,
    path: path,
    startTransaction: _StateChange.startTransaction,
    applyChanges: _StateChange.applyChanges,
    up: function up(level) {
      return moveUpStatePath(level, path.slice());
    },
    down: function down(additionalPath) {
      return createAccessor(path.concat(additionalPath));
    },
    set: function set(changeObj) {
      return (0, _StateChange.setValues)(prepareChangeObject(changeObj), path);
    },
    get: function get(key) {
      return getValues(accessor, key, path);
    },
    markup: function markup(key) {
      return key ? accessor.values[key].el : accessor.values[_attributes2.default.SELF].el;
    }
  };

  if ((0, _checkers.isArray)(values)) {
    modifyToArrayAccessor(accessor);
  }

  return accessor;
}

function prepareChangeObject(changeObj) {
  return (0, _object.map)(changeObj, function (v) {
    var forced = (0, _checkers.isObject)(v) && Object.keys(v)[0] === 'force';

    return {
      value: forced ? v['force'] : v,
      type: 'value',
      force: forced
    };
  });
}

function getComponent(path) {
  var component = ELEMENTS[path[0]];

  for (var i = 1; i < path.length; i++) {
    component = component.state[path[i]];

    if (component.isList && i !== path.length - 1) {
      component = component.listItem;
      i += 2;
    }
  }

  return component;
}

function getOnlyValues(obj) {
  return (0, _object.map)(obj, function (bindingValues) {
    return bindingValues['value'];
  });
}

function getValues(accessor, key, statePath) {
  var values = accessor.values;
  var component = accessor.component;

  if (!key) {
    return getValuesTree(values, component, {});
  }

  var binding = component.state[key];
  if (binding.isList || binding.isComponent) {
    return createAccessor(statePath.concat(key));
  }

  return values[key].value;
}

function getValuesTree(values, component, valuesTree) {
  (0, _object.forEach)(values, function (vals, bindingName) {
    if ((0, _common.has)(_Definition.RESERVED_BINDING_NAMES, bindingName)) {
      return;
    }

    var binding = component.state[bindingName];

    if (binding.isList) {
      valuesTree[bindingName] = [];
      values[bindingName].forEach(function (el, i) {
        var itemValues = valuesTree[bindingName][i] = {};
        getValuesTree(values[bindingName][i][binding.listItem.name], binding.listItem, itemValues);
      });
      return;
    }

    if (binding.isComponent) {
      var componentValues = valuesTree[bindingName] = {};
      getValuesTree(values[bindingName], binding, componentValues);
    }

    valuesTree[component._links[bindingName] || bindingName] = vals.value;
  });

  return valuesTree;
}

function moveUpStatePath(level, statePath) {
  var lastIdx = statePath.length;

  if (level === '') {
    return createAccessor(statePath.slice(0, 2));
  }

  if ((0, _checkers.isString)(level)) {
    while (lastIdx--) {
      if (statePath[lastIdx] === level) {
        break;
      }
    }

    return createAccessor(statePath.slice(0, lastIdx + 1));
  }

  level = level || 1;
  while (lastIdx-- && level--) {
    if ((0, _checkers.isNumber)(+statePath[lastIdx - 1])) {
      lastIdx--;
    }
  }

  return createAccessor(statePath.slice(0, lastIdx + 1));
}

function modifyToArrayAccessor(accessor) {
  Object.assign(accessor, {
    get: function get(num) {
      return createAccessor(accessor.path.concat(num, accessor.component.listItem.name));
    },

    push: function push(els) {
      return (0, _StateChange.modifyList)('add', { start: accessor.values.length, els: els }, accessor);
    },
    unshift: function unshift(els) {
      return (0, _StateChange.modifyList)('add', { start: 0, els: els }, accessor);
    },
    add: function add(start, els) {
      return (0, _StateChange.modifyList)('add', { start: start, els: els }, accessor);
    },

    pop: function pop(num) {
      return (0, _StateChange.modifyList)('remove', { start: accessor.values.length - (num || 1), num: num }, accessor);
    },
    shift: function shift(num) {
      return (0, _StateChange.modifyList)('remove', { start: 0, num: num }, accessor);
    },
    remove: function remove(start, num) {
      return (0, _StateChange.modifyList)('remove', { start: start, num: num }, accessor);
    },

    length: function length() {
      return accessor.values.length;
    },
    value: function value() {
      return mapList(accessor);
    },
    forEach: function forEach(cb) {
      return iterateListValues(accessor, cb);
    },
    filter: function filter(cb) {
      return filterList(accessor, cb);
    },
    map: function map(cb) {
      return mapList(accessor, cb);
    }
  });
}

function iterateListValues(accessor, cb) {
  accessor.values.forEach(function (el, i) {
    return cb(getValuesTree(el[accessor.component.listItem.name], accessor.component.listItem, {}), i);
  });
}

function filterList(accessor, cb) {
  var newList = [];

  iterateListValues(accessor, function (el, i) {
    if (cb(el, i)) {
      newList.push(el);
    }
  });

  return newList;
}

function mapList(accessor, cb) {
  var newList = [];
  iterateListValues(accessor, function (el, i) {
    return newList.push(cb ? cb(el, i) : el);
  });
  return newList;
}

/***/ }),

/***/ "./src/StateChange.js":
/*!****************************!*\
  !*** ./src/StateChange.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendToRenderQueue = exports.applyChanges = exports.startTransaction = exports.modifyList = exports.createStateNodes = exports.setValues = undefined;

var _attributes = __webpack_require__(/*! ./globals/attributes */ "./src/globals/attributes.js");

var _attributes2 = _interopRequireDefault(_attributes);

var _object = __webpack_require__(/*! ./helpers/object */ "./src/helpers/object.js");

var _checkers = __webpack_require__(/*! ./helpers/checkers */ "./src/helpers/checkers.js");

var _equality = __webpack_require__(/*! ./helpers/equality */ "./src/helpers/equality.js");

var _equality2 = _interopRequireDefault(_equality);

var _common = __webpack_require__(/*! ./helpers/common */ "./src/helpers/common.js");

var _State = __webpack_require__(/*! ./State */ "./src/State.js");

var _View = __webpack_require__(/*! ./View */ "./src/View.js");

var _Definition = __webpack_require__(/*! ./Definition */ "./src/Definition.js");

var _BindingNotExistsError = __webpack_require__(/*! ./errors/BindingNotExistsError */ "./src/errors/BindingNotExistsError.js");

var _BindingNotExistsError2 = _interopRequireDefault(_BindingNotExistsError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.setValues = setValues;
exports.createStateNodes = createStateNodes;
exports.modifyList = modifyList;
exports.startTransaction = startTransaction;
exports.applyChanges = applyChanges;
exports.sendToRenderQueue = sendToRenderQueue;


var CHANGES = { changes: {}, collecting: false };
var PROMISES_RESOLVES = [];
var LIFE_CYCLE_HANDLERS = { list: [] };

function startTransaction() {
  applyChanges();
  CHANGES.collecting = true;
}

function applyChanges() {
  var changes = CHANGES.changes;
  CHANGES.changes = {};
  (0, _View.renderChanges)(changes);
  return runLifeCycleHooks();
}

function runLifeCycleHooks() {
  var lifeCycleHandlers = LIFE_CYCLE_HANDLERS.list;
  LIFE_CYCLE_HANDLERS.list = [];
  lifeCycleHandlers.forEach(function (h) {
    return h();
  });

  if (!(0, _checkers.isEmpty)(CHANGES.changes)) {
    return applyChanges();
  }

  return finalizeTransaction();
}

function finalizeTransaction() {
  CHANGES.collecting = false;
  var resolvePromise = void 0;

  while (resolvePromise = PROMISES_RESOLVES.pop()) {
    resolvePromise(true);
  }

  return Promise.resolve(true);
}

function sendToRenderQueue(path, change) {
  (0, _object.set)(CHANGES.changes, path, change);
}

function isCollectingChanges() {
  return CHANGES.collecting;
}

function addLifeCycleHook(hookType, binding, values, accessor, idx) {
  var hook = binding.hooks[hookType];

  LIFE_CYCLE_HANDLERS.list.push(function () {
    var el = values[binding.name || _attributes2.default.SELF].el;
    var vals = !binding.name ? (0, _State.getOnlyValues)(values) : values[binding.name].value;
    hook(el, vals, accessor, idx);
  });
}

function createStateNodes(statePath) {
  var component = (0, _State.getComponent)(statePath);
  var valuesNode = createStateNode(component);
  (0, _State.setState)(statePath, valuesNode);

  (0, _object.forEach)(component.state, function (binding, bindingName) {
    if (binding.isComponent) {
      createStateNodes(statePath.concat(bindingName));
    }
  });

  var accessor = (0, _State.createAccessor)(statePath);
  addLifeCycleHook('mount', component.state[_attributes2.default.SELF], valuesNode, accessor, statePath.slice(-2)[0]);

  return valuesNode;
}

function createStateNode(component) {
  var valuesNodes = (0, _object.map)(component.state, function (binding) {
    var valueNode = binding.isList ? [] : {};

    return _Definition.VALUE_TYPES.reduce(function (a, key) {
      var value = void 0;

      switch (key) {
        case 'value':
        case 'html':
          value = binding.initValue || '';
          break;

        default:
          value = {};
      }

      a[key] = value;

      return a;
    }, valueNode);
  });

  return Object.assign(valuesNodes, _defineProperty({}, _attributes2.default.SELF, (0, _object.toObject)(_Definition.VALUE_TYPES, {})));
}

function setValues(changeValues, statePath, calledDependences) {
  calledDependences = calledDependences || [];
  var accessor = (0, _State.createAccessor)(statePath);

  if (!accessor.values) {
    accessor.values = createStateNodes(statePath);
    var start = +statePath.slice(-2)[0];
    sendToRenderQueue(statePath, _defineProperty({}, _attributes2.default.FULL_CHANGE, { add: { start: start, end: start + 1 } }));
  }

  (0, _object.forEach)(changeValues, function (change, bindingName) {
    return setValue(bindingName, change, accessor, calledDependences);
  });

  addLifeCycleHook('update', accessor.component.state[_attributes2.default.SELF], accessor.values, accessor, statePath.slice(-2)[0]);

  if (isCollectingChanges()) {
    return new Promise(function (res) {
      return PROMISES_RESOLVES.push(res);
    });
  }

  return applyChanges();
}

function setValue(bindingName, change, accessor, calledDependences) {
  var statePath = accessor.path;
  var component = accessor.component;
  var values = accessor.values;
  var binding = component.state[bindingName];

  if (!binding) {
    bindingName = component.outerNames[bindingName];
    binding = component.state[bindingName];
  }

  if (!binding) {
    throw new _BindingNotExistsError2.default(bindingName, component.name, statePath);
  }

  if (change.type === 'value') {
    if (binding.isList) {
      return setValueForList(binding, change, values[bindingName], accessor);
    }

    if ((0, _checkers.isObject)(change.value) && binding.isComponent) {
      return setValueForComponent(binding, change, component, statePath);
    }
  }

  var equal = (0, _equality2.default)(values[bindingName][change.type], change.value);

  if (!equal || !(0, _checkers.isEmpty)(equal) || change.force) {
    values[bindingName][change.type] = change.value;

    if (change.type !== 'value') {
      return sendToRenderQueue(statePath.concat(bindingName), _defineProperty({}, change.type, false));
    }

    addLifeCycleHook('update', binding, values, accessor, statePath.slice(-2)[0]);
    calledDependences.push(bindingName + ':' + change.type);

    if (!binding.html) {
      setValue(bindingName, { value: change.value, type: 'html', force: change.force }, accessor, calledDependences);
    }

    var link = component.links[bindingName];
    if (link) {
      setValue(link.link, { value: change.value, type: 'value', force: change.force }, accessor.down(link.component), []);
    }

    (0, _object.forEach)(binding.dependants, function (dependant, dependantKey) {
      if ((0, _common.has)(calledDependences, dependantKey)) {
        return;
      }

      var newValue = component.state[dependant.name].evaluate[dependant.type](values, accessor);
      setValue(dependant.name, { value: newValue, type: dependant.type }, accessor, calledDependences);
    });
  }
}

function setValueForList(binding, change, arr, accessor) {
  Object.keys(change.value).forEach(function (i) {
    return setValues((0, _State.prepareChangeObject)(change.value[i]), accessor.path.concat(binding.name, i, binding.listItem.name));
  });

  var indexEquality = (0, _equality2.default)(arr, change.value);
  (0, _object.forEach)(indexEquality, function (changeObj, idx) {
    if (changeObj.remove) {
      changeObj.remove = removeListItem(arr, idx, binding, accessor);
    }

    sendToRenderQueue(accessor.path.concat(binding.name, idx, binding.listItem.name), _defineProperty({}, _attributes2.default.FULL_CHANGE, changeObj));
  });
}

function setValueForComponent(binding, change, component, statePath) {
  setValues((0, _State.prepareChangeObject)(change.value), statePath.concat(binding.name));
}

function modifyList(action, args, accessor) {
  var arr = accessor.values;
  var listPath = accessor.path;
  var itemName = accessor.component.listItem.name;
  var start = args.start;
  var changeObj = {};

  switch (action) {
    case 'add':
      changeObj = addToList(arr, start, args.els, listPath, itemName);
      break;

    case 'remove':
      var end = start + (args.num || 1);
      changeObj = removeFromList(arr, start, end, accessor.component, accessor);
      break;
  }

  (0, _object.forEach)(changeObj, function (change, idx) {
    return sendToRenderQueue(listPath.concat(idx, itemName, _attributes2.default.FULL_CHANGE), changeObj[idx][_attributes2.default.FULL_CHANGE]);
  });

  if (isCollectingChanges()) {
    return new Promise(function (res) {
      return PROMISES_RESOLVES.push(res);
    });
  }

  return applyChanges();
}

function addToList(arr, start, els, listPath, itemName) {
  els = (0, _checkers.isArray)(els) ? els : [els];

  els.forEach(function (el, i) {
    arr.splice(i + start, 0, null);
    setValues((0, _State.prepareChangeObject)(el), listPath.concat(i + start, itemName));
  });

  return _defineProperty({}, start, _defineProperty({}, _attributes2.default.FULL_CHANGE, { add: { start: start, end: start + els.length } }));
}

function removeFromList(arr, start, end, listBinding, accessor) {
  var changeObj = {};

  for (var i = start; i < end; i++) {
    var removedDOMNode = removeListItem(arr, i, listBinding, accessor);
    changeObj[i] = _defineProperty({}, _attributes2.default.FULL_CHANGE, { remove: removedDOMNode });
  }

  return changeObj;
}

function removeListItem(arr, idx, listBinding, accessor) {
  var removedNode = arr.splice(idx, 1)[0][listBinding.listItem.name];
  addLifeCycleHook('remove', listBinding.listItem.state[_attributes2.default.SELF], removedNode, accessor, idx);
  return removedNode[_attributes2.default.SELF].el;
}

/***/ }),

/***/ "./src/View.js":
/*!*********************!*\
  !*** ./src/View.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderChanges = exports.createAndAppendStyles = undefined;

var _attributes = __webpack_require__(/*! ./globals/attributes */ "./src/globals/attributes.js");

var _attributes2 = _interopRequireDefault(_attributes);

var _common = __webpack_require__(/*! ./helpers/common */ "./src/helpers/common.js");

var _object = __webpack_require__(/*! ./helpers/object */ "./src/helpers/object.js");

var _checkers = __webpack_require__(/*! ./helpers/checkers */ "./src/helpers/checkers.js");

var _State = __webpack_require__(/*! ./State */ "./src/State.js");

var _dom = __webpack_require__(/*! ./helpers/dom */ "./src/helpers/dom.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createAndAppendStyles = createAndAppendStyles;
exports.renderChanges = renderChanges;


var render = {
  html: applyMarkup,
  class: applyClasses,
  style: applyStyles,
  attrs: applyAttributes
};

function renderChanges(changes) {
  (0, _object.forEach)(changes, function (componentChanges, elementId) {
    var componentId = Object.keys(componentChanges)[0];
    var componentAccessor = (0, _State.createAccessor)([elementId, componentId]);
    applyMarkup(componentAccessor.component, componentAccessor.values, [elementId, componentId], componentChanges[componentId]);
  });
}

function applyMarkup(component, value, statePath, changes) {
  if (!component.markup) {
    return;
  }

  if (component.isList) {
    return renderList(component, value, statePath, changes);
  }

  if (component.isComponent) {
    return renderComponent(component, value, statePath, changes);
  }

  value = (0, _checkers.isUndefined)(value) ? '' : value;

  if (component.markup.tagName === 'INPUT') {
    component.markup.value = value;
    return;
  }

  (0, _dom.rewriteToNode)(component.markup, value);

  return component;
}

function renderComponent(component, value, statePath, changes) {
  if (changes) {
    return updateComponent(component, value, statePath, changes);
  }

  return drawComponent(value, statePath);
}

function drawComponent(values, statePath) {
  var accessor = (0, _State.createAccessor)(statePath);
  var component = accessor.component;

  var itemWrapper = document.createElement('div');
  var itemMarkup = component.template.cloneNode(true);
  values[_attributes2.default.SELF].el = itemMarkup;
  itemWrapper.appendChild(itemMarkup);

  itemMarkup.setAttribute(_attributes2.default.COMPONENT_TYPE, component.isListItem ? _attributes2.default.ITEM : _attributes2.default.COMPONENT);

  (0, _object.forEach)(render, function (renderFunc, renderType) {
    if (component.state[_attributes2.default.SELF][renderType]) {
      renderFunc({ markup: itemMarkup }, values[_attributes2.default.SELF][renderType]);
    }
  });

  (0, _object.forEach)(component.state, function (binding, bindingName) {
    if (!binding.markup) {
      return;
    }

    var bindingNode = itemWrapper.querySelector('.' + _attributes2.default.PREFIX + binding.id);
    bindingNode.classList.remove(_attributes2.default.PREFIX + binding.id);

    if (binding.isComponent) {
      var childStatePath = statePath.concat(bindingName);
      var childMarkup = drawComponent(values[bindingName], childStatePath);
      (0, _dom.replaceNodes)(bindingNode, childMarkup);
      return;
    }

    values[bindingName].el = bindingNode;

    if (binding.isList) {
      renderList(binding, values[bindingName], statePath.concat(bindingName));
      return;
    }

    (0, _object.forEach)(render, function (renderFunc, renderType) {
      if (renderType === 'html' && binding.html === null || binding.markup.children.length) {
        return;
      }
      renderFunc({ markup: bindingNode }, values[bindingName][renderType], statePath);
    });
  });

  return itemWrapper.children[0];
}

function updateComponent(component, values, statePath, changes) {
  var componentMarkup = values[_attributes2.default.SELF].el;

  (0, _object.forEach)(changes, function (change, bindingName) {

    if (bindingName === _attributes2.default.SELF) {

      for (var changeType in change) {
        render[changeType]({ markup: componentMarkup }, values[_attributes2.default.SELF][changeType]);
      }
      return;
    }

    var binding = component.state[bindingName];
    var statePathToBinding = statePath.concat(bindingName);

    if (binding.isComponent || binding.isList) {
      applyMarkup(binding, values[bindingName], statePathToBinding, changes[bindingName]);
      return;
    }

    var el = values[bindingName].el;

    for (var _changeType in change) {
      var newValue = values[bindingName][_changeType];
      render[_changeType]({ markup: el }, newValue);
    }
  });
}

function renderList(listComponent, itemsValues, statePath, changes) {
  if (changes) {
    return updateList(listComponent, itemsValues, statePath, changes);
  }

  var listFragment = buildList(listComponent, itemsValues, statePath);

  var listNode = itemsValues.el;
  var parentNode = listNode.parentNode;
  var nextNode = listNode.nextElementSibling;
  (0, _dom.removeNode)(listNode);

  var isComponent = listNode.getAttribute(_attributes2.default.COMPONENT_TYPE);
  listNode.setAttribute(_attributes2.default.COMPONENT_TYPE, _attributes2.default.LIST);
  if (isComponent) {
    listNode.setAttribute(_attributes2.default.COMPONENT_TYPE, _attributes2.default.COMPONENT_LIST);
  }

  (0, _dom.emptyNode)(listNode);
  listNode.appendChild(listFragment);

  parentNode.insertBefore(listNode, nextNode);
}

function buildList(listComponent, itemsValues, statePath, range) {
  var start = range ? range.start : 0;
  var end = range ? range.end : itemsValues.length + 1;

  var listFragment = document.createDocumentFragment();
  itemsValues.slice(start, end).forEach(function (itemValue, itemIndex) {
    var newItemIndex = +start + itemIndex;
    var statePathToItem = statePath.concat([newItemIndex, listComponent.listItem.name]);
    var listItemMarkup = drawComponent(itemValue[listComponent.listItem.name], statePathToItem);

    listItemMarkup.setAttribute(_attributes2.default.ITEM_INDEX, newItemIndex);

    listFragment.appendChild(listItemMarkup);
  });

  return listFragment;
}

function updateList(listBinding, itemsValues, statePath, changes) {
  var listNode = itemsValues.el;
  var itemName = listBinding.listItem.name;
  var itemsChanges = (0, _object.splitPiece)(changes, function (v, k) {
    return (0, _checkers.isNumber)(+k);
  });
  var removedCount = 0;
  var end = 0;

  for (var changeType in changes) {
    render[changeType]({ markup: listNode }, itemsValues[changeType]);
  }

  (0, _object.forEach)(itemsChanges, function (change, i) {
    change = change[itemName];
    var statePathToItem = statePath.concat(i, itemName);
    var itemAccessor = (0, _State.createAccessor)(statePathToItem);

    if (!change[_attributes2.default.FULL_CHANGE]) {
      updateComponent(itemAccessor.component, itemsValues[i][itemName], statePathToItem, change);
      return;
    }

    if (change[_attributes2.default.FULL_CHANGE].add && i >= end) {
      var start = change[_attributes2.default.FULL_CHANGE].add.start;
      end = change[_attributes2.default.FULL_CHANGE].add.end;

      fixIndexes(listNode, start, end - start);
      var listFragment = buildList(listBinding, itemsValues, statePath, { start: start, end: end });

      if (end === itemsValues.length) {
        listNode.appendChild(listFragment);
        return;
      }

      listNode.insertBefore(listFragment, listNode.children[start]);
      return;
    }

    if (change[_attributes2.default.FULL_CHANGE].remove) {
      (0, _dom.removeNode)(change[_attributes2.default.FULL_CHANGE].remove);
      fixIndexes(listNode, i - removedCount++, -1);
    }
  });
}

function fixIndexes(listNode, start, diff) {
  var itemsNodes = Array.prototype.slice.call(listNode.children, start);

  itemsNodes.forEach(function (itemNode) {
    var prevIdx = itemNode.getAttribute(_attributes2.default.ITEM_INDEX);
    var newIdx = +prevIdx + diff;

    itemNode.setAttribute(_attributes2.default.ITEM_INDEX, newIdx);
  });
}

function applyAttributes(binding, attributes) {
  Object.assign(binding.markup, attributes);
}

function applyClasses(binding, classes) {
  for (var className in classes) {
    if (className) {
      if (classes[className]) {
        binding.markup.classList.add(className);
      } else {
        binding.markup.classList.remove(className);
      }
    }
  }
}

function applyStyles(binding, styles) {
  Object.assign(binding.markup.style, normalizeStyles(styles));
}

function createAndAppendStyles(styleObj) {
  var styleStr = '';
  for (var selector in styleObj) {
    var styles = styleObj[selector];
    styleStr += selector + '{';
    normalizeStyles(styles);
    for (var attr in styles) {
      var value = styles[attr];
      styleStr += (0, _common.toDashCase)(attr) + ':' + value + ';';
    }
    styleStr += '}\n';
  }
  var styleEl = document.createElement('style');
  styleEl.appendChild(document.createTextNode(styleStr));
  document.head.appendChild(styleEl);
}

function normalizeStyles(styles) {
  for (var attr in styles) {
    if ((0, _checkers.isNumber)(styles[attr])) {
      styles[attr] = styles[attr] + 'px';
    }
  }
  return styles;
}

/***/ }),

/***/ "./src/errors/BindingNotExistsError.js":
/*!*********************************************!*\
  !*** ./src/errors/BindingNotExistsError.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BindingNotExistsError = function (_Error) {
  _inherits(BindingNotExistsError, _Error);

  function BindingNotExistsError(bindingName, componentName, path) {
    _classCallCheck(this, BindingNotExistsError);

    var _this = _possibleConstructorReturn(this, (BindingNotExistsError.__proto__ || Object.getPrototypeOf(BindingNotExistsError)).call(this));

    _this.message = "Unable to access '" + bindingName + "' binding on '" + componentName + "' component on path (" + path.join(' -> ') + ") because it doesn't exist.";
    return _this;
  }

  return BindingNotExistsError;
}(Error);

exports.default = BindingNotExistsError;

/***/ }),

/***/ "./src/errors/ComponentRedefineError.js":
/*!**********************************************!*\
  !*** ./src/errors/ComponentRedefineError.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComponentRedefineError = function (_Error) {
  _inherits(ComponentRedefineError, _Error);

  function ComponentRedefineError(name) {
    _classCallCheck(this, ComponentRedefineError);

    var _this = _possibleConstructorReturn(this, (ComponentRedefineError.__proto__ || Object.getPrototypeOf(ComponentRedefineError)).call(this));

    _this.message = "Trying to redefine existing component: '" + name + "'";
    return _this;
  }

  return ComponentRedefineError;
}(Error);

exports.default = ComponentRedefineError;

/***/ }),

/***/ "./src/errors/ScopeNameCollisionError.js":
/*!***********************************************!*\
  !*** ./src/errors/ScopeNameCollisionError.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScopeNameCollisionError = function (_Error) {
  _inherits(ScopeNameCollisionError, _Error);

  function ScopeNameCollisionError(name) {
    _classCallCheck(this, ScopeNameCollisionError);

    var _this = _possibleConstructorReturn(this, (ScopeNameCollisionError.__proto__ || Object.getPrototypeOf(ScopeNameCollisionError)).call(this));

    _this.message = "Trying to assign a name '" + name + "' to a state that already exists in the chain.";
    return _this;
  }

  return ScopeNameCollisionError;
}(Error);

exports.default = ScopeNameCollisionError;

/***/ }),

/***/ "./src/globals/attributes.js":
/*!***********************************!*\
  !*** ./src/globals/attributes.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LIB_NAME = 'x';
var ATTR_PREFIX = 'data-';
var PREFIX = LIB_NAME + '-';
var TEMPLATE_BINDING = PREFIX + 'b';
var TEMPLATE_LIST_BINDING = PREFIX + 'lb';
var BINDING_ID = ATTR_PREFIX + PREFIX + 'id';
var STATE_PATH = PREFIX + 'spath';
var TEMPLATE_PLACEMENT = PREFIX + 'el';
var STATE_NAME = PREFIX + 'state-name';
var SCOPE_PREFIX = 's';
var ITEM_INDEX = ATTR_PREFIX + PREFIX + 'dx';
var COMPONENT_TYPE = ATTR_PREFIX + PREFIX + 'tp';
var ITEM_SUFFIX = 'i';
var STATE_DELIMITER = '-';
var SELF = '';
var FULL_CHANGE = ' _full_change_ ';

var BASE = '1';
var COMPONENT = '2';
var LIST = '3';
var ITEM = '_item_';
var COMPONENT_LIST = '5';

exports.default = {
  PREFIX: PREFIX,
  TEMPLATE_BINDING: TEMPLATE_BINDING,
  TEMPLATE_LIST_BINDING: TEMPLATE_LIST_BINDING,
  BINDING_ID: BINDING_ID,
  STATE_PATH: STATE_PATH,
  TEMPLATE_PLACEMENT: TEMPLATE_PLACEMENT,
  STATE_NAME: STATE_NAME,
  SCOPE_PREFIX: SCOPE_PREFIX,
  ITEM_INDEX: ITEM_INDEX,
  COMPONENT_TYPE: COMPONENT_TYPE,
  ITEM_SUFFIX: ITEM_SUFFIX,
  STATE_DELIMITER: STATE_DELIMITER,
  BASE: BASE,
  COMPONENT: COMPONENT,
  LIST: LIST,
  ITEM: ITEM,
  SELF: SELF,
  FULL_CHANGE: FULL_CHANGE,
  COMPONENT_LIST: COMPONENT_LIST
};

/***/ }),

/***/ "./src/globals/regexp.js":
/*!*******************************!*\
  !*** ./src/globals/regexp.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var STRIP_COMMENTS = /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,)]*))/mg;
var ARGUMENT_NAMES = /([^\s,]+)/g;

exports.default = {
  STRIP_COMMENTS: STRIP_COMMENTS,
  ARGUMENT_NAMES: ARGUMENT_NAMES
};

/***/ }),

/***/ "./src/helpers/checkers.js":
/*!*********************************!*\
  !*** ./src/helpers/checkers.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFunction = isFunction;
exports.isArray = isArray;
exports.isObject = isObject;
exports.isObjectInBrackets = isObjectInBrackets;
exports.isObjectInDoubleBrackets = isObjectInDoubleBrackets;
exports.isString = isString;
exports.isHTMLString = isHTMLString;
exports.isNumber = isNumber;
exports.isDOMElement = isDOMElement;
exports.isUndefined = isUndefined;
exports.isEmpty = isEmpty;
exports.isLink = isLink;


function isFunction(obj) {
  return getObjectType(obj) === '[object Function]';
}

function isArray(obj) {
  return getObjectType(obj) === '[object Array]';
}

function isObject(obj) {
  return getObjectType(obj) === '[object Object]';
}

function isObjectInBrackets(obj) {
  return isArray(obj) && obj.length === 1 && isObject(obj[0]);
}

function isObjectInDoubleBrackets(obj) {
  return isArray(obj) && obj.length === 1 && isObjectInBrackets(obj[0]);
}

function isString(obj) {
  return getObjectType(obj) === '[object String]';
}

function isHTMLString(obj) {
  return isString(obj) && obj.indexOf('<') === 0;
}

function isNumber(obj) {
  return getObjectType(obj) === '[object Number]' && obj === obj;
}

function isDOMElement(obj) {
  return obj && typeof obj.tagName !== 'undefined';
}

function isUndefined(obj) {
  return typeof obj === 'undefined';
}

function getObjectType(obj) {
  return Object.prototype.toString.call(obj);
}

function isLink(obj) {
  var slashIdx = obj.indexOf('/');
  return [0, 1, 2].some(function (idx) {
    return idx === slashIdx;
  });
}

function isEmpty(obj) {
  if (!obj) {
    return true;
  }

  if (isArray(obj) || isString(obj)) {
    return !obj.length;
  }

  return !Object.keys(obj).length;
}

/***/ }),

/***/ "./src/helpers/common.js":
/*!*******************************!*\
  !*** ./src/helpers/common.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRealName = exports.getShortName = exports.toCamelCase = exports.toDashCase = exports.getFalsePaths = exports.has = undefined;

var _checkers = __webpack_require__(/*! ./checkers */ "./src/helpers/checkers.js");

var _object = __webpack_require__(/*! ./object */ "./src/helpers/object.js");

exports.has = has;
exports.getFalsePaths = getFalsePaths;
exports.toDashCase = toDashCase;
exports.toCamelCase = toCamelCase;
exports.getShortName = getShortName;
exports.getRealName = getRealName;


var NAMES = {
  real: {},
  short: []
};

function getShortName(name) {
  if (NAMES.real[name]) {
    return NAMES.real[name];
  }

  var shortName = NAMES.short.push(name);
  return NAMES.real[name] = shortName - 1;
}

function getRealName(num) {
  return NAMES.short[num];
}

function has(obj, el) {
  if ((0, _checkers.isObject)(obj)) {
    var keys = Object.keys(obj);
    return has(keys, el);
  }

  return obj.indexOf(el) >= 0;
}

function getFalsePaths(obj) {
  var onlyFalsePaths = {};
  getFalsePath(obj, onlyFalsePaths, []);
  return onlyFalsePaths;
}

function getFalsePath(obj, onlyFalsePaths, path) {
  for (var key in obj) {
    if ((0, _checkers.isObject)(obj[key])) {
      getFalsePath(obj[key], onlyFalsePaths, path.concat(key));
      continue;
    }

    if (obj[key] !== true) {
      (0, _object.set)(onlyFalsePaths, path.concat(key), obj[key]);
    }
  }
}

function toDashCase(str) {
  return str.replace(/([A-Z])/g, function (match) {
    return '-' + match[0].toLowerCase();
  });
}

function toCamelCase(str) {
  return str.replace(/-(.)/g, function (match) {
    return match[1].toUpperCase();
  });
}

/***/ }),

/***/ "./src/helpers/copy.js":
/*!*****************************!*\
  !*** ./src/helpers/copy.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkers = __webpack_require__(/*! ./checkers */ "./src/helpers/checkers.js");

exports.default = copy;


function copy(destination, source) {
  if (!destination) {
    return copy({}, source);
  }

  for (var key in source) {

    if ((0, _checkers.isUndefined)(source[key])) {
      continue;
    }

    if (source.hasOwnProperty(key) && (0, _checkers.isObject)(source[key])) {
      if (!destination[key]) {
        destination[key] = {};
      }
      copy(destination[key], source[key]);
      continue;
    }

    if ((0, _checkers.isArray)(source[key])) {
      if (!destination[key]) {
        destination[key] = [];
      }
      copyArray(destination[key], source[key]);
      continue;
    }

    if ((0, _checkers.isDOMElement)(source[key])) {
      destination[key] = source[key].cloneNode(true);
      continue;
    }

    destination[key] = source[key];
  }

  return destination;
}

function copyArray(destination, source) {
  for (var i = 0; i < source.length; i++) {
    if ((0, _checkers.isObject)(source[i])) {
      destination[i] = destination[i] || {};
      copy(destination[i], source[i]);
      continue;
    }

    if ((0, _checkers.isArray)(source[i])) {
      destination[i] = destination[i] || [];
      copyArray(destination[i], source[i]);
      continue;
    }

    destination[i] = source[i];
  }

  return destination;
}

/***/ }),

/***/ "./src/helpers/dom.js":
/*!****************************!*\
  !*** ./src/helpers/dom.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emptyNode = exports.rewriteToNode = exports.insertBeforeNode = exports.removeNode = exports.walkNodes = exports.collectHTMLNodes = exports.cloneHTMLMarkup = exports.replaceNodes = undefined;

var _checkers = __webpack_require__(/*! ./checkers */ "./src/helpers/checkers.js");

exports.replaceNodes = replaceNodes;
exports.cloneHTMLMarkup = cloneHTMLMarkup;
exports.collectHTMLNodes = collectHTMLNodes;
exports.walkNodes = walkNodes;
exports.removeNode = removeNode;
exports.insertBeforeNode = insertBeforeNode;
exports.rewriteToNode = rewriteToNode;
exports.emptyNode = emptyNode;


function replaceNodes(original, replacement) {
  original.parentNode.replaceChild(replacement, original);
  return replacement;
}

function insertBeforeNode(el, nextEl) {
  nextEl.parentNode.insertBefore(el, nextEl);
}

function cloneHTMLMarkup(markup) {
  var markupStr = (0, _checkers.isHTMLString)(markup.trim()) ? markup : document.querySelector(markup).innerHTML;
  return convertStringToHTML(markupStr);
}

function convertStringToHTML(markupString) {
  var parser = new DOMParser();
  var parsedDocument = parser.parseFromString(markupString, 'text/html');
  return parsedDocument.body.firstElementChild;
}

function walkNodes(node, cb) {
  if (cb(node) === -1) {
    return;
  }

  Array.prototype.slice.call(node.children).forEach(function (el) {
    return walkNodes(el, cb);
  });
}

function collectHTMLNodes(root, isWanted) {
  var nodes = [];
  walkNodes(root, function (el) {
    return isWanted(el) ? nodes.push(el) : '';
  });
  return nodes;
}

function removeNode(node) {
  node.parentNode.removeChild(node);
}

function rewriteToNode(node, text) {
  emptyNode(node);
  writeToNode(node, text);
}

function writeToNode(node, text) {
  var textNode = document.createTextNode(text);
  node.appendChild(textNode);
}

function emptyNode(node) {
  while (node.hasChildNodes()) {
    node.removeChild(node.firstChild);
  }
}

/***/ }),

/***/ "./src/helpers/equality.js":
/*!*********************************!*\
  !*** ./src/helpers/equality.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _checkers = __webpack_require__(/*! ./checkers */ "./src/helpers/checkers.js");

exports.default = areEqual;


function areEqual(first, second) {
  if ((0, _checkers.isUndefined)(first) || (0, _checkers.isUndefined)(second)) {
    return false;
  }

  if ((typeof first === 'undefined' ? 'undefined' : _typeof(first)) !== (typeof second === 'undefined' ? 'undefined' : _typeof(second))) {
    return false;
  }

  var parentNode = { childNode: {} };

  if ((0, _checkers.isArray)(second)) {
    checkKeysEquality(first ? first.map(function (el) {
      return el;
    }) : [], second.map(function (el) {
      return el;
    }), parentNode);
  } else if ((0, _checkers.isObject)(second)) {
    checkKeysEquality(first, second, parentNode);
  } else {
    return first === second;
  }

  return parentNode.childNode;
}

function checkKeysEquality(first, second, parentNode) {
  for (var key in second) {

    if ((0, _checkers.isArray)(first)) {
      if ((0, _checkers.isUndefined)(first[key])) {
        parentNode.childNode[key] = { add: true };
      }
      continue;
    }

    if (first[key] !== second[key]) {
      parentNode.childNode[key] = false;
    }
  }

  for (var _key in first) {

    if ((0, _checkers.isArray)(first)) {
      if ((0, _checkers.isUndefined)(second[_key])) {
        parentNode.childNode[_key] = { remove: true };
      }
      continue;
    }

    if (first[_key] !== second[_key]) {
      parentNode.childNode[_key] = false;
    }
  }

  return parentNode;
}

/***/ }),

/***/ "./src/helpers/object.js":
/*!*******************************!*\
  !*** ./src/helpers/object.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitPiece = exports.fullMap = exports.toObject = exports.filter = exports.mapKeys = exports.map = exports.forEach = exports.addConstFields = exports.remove = exports.set = exports.get = undefined;

var _checkers = __webpack_require__(/*! ./checkers */ "./src/helpers/checkers.js");

exports.get = get;
exports.set = set;
exports.remove = remove;
exports.addConstFields = addConstFields;
exports.forEach = forEach;
exports.map = map;
exports.mapKeys = mapKeys;
exports.filter = filter;
exports.toObject = toObject;
exports.fullMap = fullMap;
exports.splitPiece = splitPiece;


function get(obj, path) {
  var value = obj;
  for (var i = 0; i < path.length; i++) {

    try {
      value = value[path[i]];
    } catch (e) {
      return value;
    }
  }
  return value;
}

function set(obj, path, value) {
  if (!path.length) {
    if ((0, _checkers.isObject)(value)) {
      return Object.assign(obj, value);
    }
    return obj = value;
  }

  var dest = obj;
  for (var i = 0; i < path.length - 1; i++) {
    if (!dest[path[i]]) {
      dest = dest[path[i]] = {};
    } else {
      dest = dest[path[i]];
    }
  }

  if ((0, _checkers.isObject)(value)) {
    dest[path[i]] = dest[path[i]] || {};
    Object.assign(dest[path[i]], value);
  } else {
    dest[path[i]] = value;
  }

  return obj;
}

function remove(obj, path) {
  var value = obj;
  for (var i = 0; i < path.length - 1; i++) {
    value = value[path[i]];
  }

  delete value[path[i]];
}

function addConstFields(obj, fields) {
  var _loop = function _loop(field) {
    Object.defineProperty(obj, field, {
      get: function get() {
        return fields[field];
      },
      set: function set() {
        throw new Error("Trying to redefine const field '" + field + "'");
      }
    });
  };

  for (var field in fields) {
    _loop(field);
  }
}

function forEach(obj, cb) {
  for (var key in obj) {
    var prop = obj[key];
    cb(prop, key, obj);
  }
}

function map(obj, cb) {
  var newObj = {};
  for (var key in obj) {
    var prop = obj[key];
    newObj[key] = cb(prop, key, obj);
  }
  return newObj;
}

function mapKeys(obj, cb) {
  var newObj = {};
  for (var key in obj) {
    var prop = obj[key];
    var newKey = cb(key, prop, obj);
    newObj[newKey] = prop;
  }
  return newObj;
}

function splitPiece(obj, cb) {
  var newObj = {};
  for (var key in obj) {
    var prop = obj[key];
    if (cb(prop, key, obj)) {
      newObj[key] = prop;
      delete obj[key];
    }
  }
  return newObj;
}

function fullMap(obj, cb) {
  var newObj = {};
  for (var key in obj) {
    var prop = obj[key];
    var res = cb(key, prop, obj);
    newObj[res[0] || res.key || res.k] = res[1] || res['value'] || res['v'];
  }
  return newObj;
}

function filter(obj, cb) {
  var newObj = {};
  for (var key in obj) {
    var prop = obj[key];
    if (cb(prop, key, obj)) {
      newObj[key] = prop;
    }
  }
  return newObj;
}

function toObject(arr, val) {
  var newObj = {};
  arr.forEach(function (v) {
    newObj[v] = (0, _checkers.isFunction)(val) ? val(v) : val;
  });
  return newObj;
}

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Definition = __webpack_require__(/*! ./Definition */ "./src/Definition.js");

var _Production = __webpack_require__(/*! ./Production */ "./src/Production.js");

module.exports = {
  define: _Definition.define,
  apply: _Production.apply
};

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db3VsaS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQ291bGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvRGVmaW5pdGlvbi5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9FdmVudEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvUHJvZHVjdGlvbi5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9TdGF0ZS5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9TdGF0ZUNoYW5nZS5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9WaWV3LmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2Vycm9ycy9CaW5kaW5nTm90RXhpc3RzRXJyb3IuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvZXJyb3JzL0NvbXBvbmVudFJlZGVmaW5lRXJyb3IuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvZXJyb3JzL1Njb3BlTmFtZUNvbGxpc2lvbkVycm9yLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2dsb2JhbHMvYXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9nbG9iYWxzL3JlZ2V4cC5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9oZWxwZXJzL2NoZWNrZXJzLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2hlbHBlcnMvY29tbW9uLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2hlbHBlcnMvY29weS5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9oZWxwZXJzL2RvbS5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9oZWxwZXJzL2VxdWFsaXR5LmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2hlbHBlcnMvb2JqZWN0LmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL21haW4uanMiXSwibmFtZXMiOlsiVkFMVUVfVFlQRVMiLCJSRVNFUlZFRF9IT09LU19OQU1FUyIsIkRFRkFVTFRfSE9PS1MiLCJSRVNFUlZFRF9CSU5ESU5HX05BTUVTIiwiY29uY2F0IiwiTElCX0FUVFIiLCJTRUxGIiwiZGVmaW5lIiwiZ2V0Q29tcG9uZW50T3B0cyIsInNob3J0ZW5CaW5kaW5nSWQiLCJpc0NvbXBvbmVudCIsIkNPTVBPTkVOVF9DT1VOVEVSIiwiQ09NUE9ORU5UUyIsIm5hbWUiLCJtYXJrdXAiLCJiaW5kaW5ncyIsInN0eWxlcyIsImFyZ3MiLCJDb21wb25lbnRSZWRlZmluZUVycm9yIiwiY29tcG9uZW50SFRNTE1hcmt1cCIsImNsYXNzTGlzdCIsImFkZCIsImNvbXBvbmVudCIsInN0YXRlIiwic3RhdGVJZCIsInN0YXRlUGF0aCIsInN0YXRlTmFtZXMiLCJldmFsdWF0ZSIsImxpbmtzIiwib3V0ZXJOYW1lcyIsIl9saW5rcyIsImdhdGhlckJpbmRpbmdzRnJvbU1hcmt1cCIsIm5vcm1hbGl6ZWRPcHRpb25zIiwibm9ybWFsaXplVXNlck9wdGlvbnMiLCJwcmVwYXJlQmluZGluZ3MiLCJwcmVwYXJlU3R5bGVzIiwiSFRNTE5vZGUiLCJiaW5kaW5nT3B0cyIsImFuYWx5emVCaW5kaW5nIiwiYmluZGluZyIsImNyZWF0ZUJpbmRpbmciLCJzZXRDb21wb25lbnQiLCJQUkVGSVgiLCJpZCIsImlzTGlzdCIsIml0ZW1Ob2RlIiwiY2hpbGRyZW4iLCJtb2RpZnlUb0xpc3RCaW5kaW5nIiwibGlzdEl0ZW0iLCJjb21wb25lbnRCaW5kaW5nIiwic3ViQ29tcG9uZW50T3B0cyIsIk9iamVjdCIsImFzc2lnbiIsInN0YXRlTmFtZSIsIlNjb3BlTmFtZUNvbGxpc2lvbkVycm9yIiwiY2xvbmVOb2RlIiwicmV2TGlua3MiLCJjdXJyZW50U3RhdGVJZCIsInBhcmVudENvbXBvbmVudCIsImNvbXBvbmVudFdyYXBwZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJCSU5ESU5HX0lEIiwiU1RBVEVfREVMSU1JVEVSIiwiYXBwZW5kQ2hpbGQiLCJzdWJDb21wb25lbnRzIiwiYmluZGluZ05hbWUiLCJvbGRCaW5kaW5nSWQiLCJuZXdCaW5kaW5nSWQiLCJzaG9ydElkIiwiYmluZGluZ05vZGUiLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlIiwic2xpY2UiLCJob29rcyIsInByZXBhcmVSZWFjdGl2ZUZ1bmNzIiwicHVzaCIsIklURU0iLCJzZXR1cENvbXBvbmVudHNMaW5rcyIsInRlbXBsYXRlIiwiZm9yRWFjaCIsInN1YkNvbXBvbmVudCIsImNvbXBvbmVudERhdGEiLCJ0eXBlIiwicmVhY3RpdmVGdW5jIiwicHJlcGFyZVJlYWN0aXZlRnVuYyIsImRlcGVuZGVuY2llc05hbWVzIiwiZ2V0RGVwZW5kZW5jaWVzTmFtZXMiLCJkZXBlbmRlbmN5TmFtZSIsImRlcGVuZGFudHMiLCJ2YWx1ZXMiLCJjb21wb25lbnRJbnRlcmZhY2UiLCJjb21wdXRlIiwiZnVuYyIsImZ1bmNQYXJhbXMiLCJnZXRQYXJhbU5hbWVzIiwidmFsdWVzT2JqUmVnRXhwIiwiUmVnRXhwIiwiZnVuY1N0ciIsInRvU3RyaW5nIiwiZXhlYyIsImZ1bmNTdHJXaXRob3V0Q29tbWVudHMiLCJyZXBsYWNlIiwiUkUiLCJTVFJJUF9DT01NRU5UUyIsInBhcmFtc1N0ciIsImluZGV4T2YiLCJtYXRjaCIsIkFSR1VNRU5UX05BTUVTIiwidmFsdWVzT2JqIiwiY2FsbCIsImsiLCJsaW5rIiwib3B0aW9uc09iaiIsInBhcmVudE9iaiIsInBhcmVudEtleSIsImNsYXNzIiwibGVuZ3RoIiwib3B0aW9uIiwidmFsdWUiLCJldmVudHMiLCJrZXkiLCJlbCIsImdldEF0dHJpYnV0ZSIsIlRFTVBMQVRFX0JJTkRJTkciLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0cmltIiwiVEVNUExBVEVfTElTVF9CSU5ESU5HIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwib2JqIiwiZ2V0Q29tcG9uZW50QnlOYW1lIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJhdHRyaWJ1dGVzIiwiYXR0ciIsIlNUQVRFX05BTUUiLCJpbm5lckxpbmsiLCJjb21wb25lbnRPcHRzIiwiaXNMaXN0SXRlbSIsImVsT3B0cyIsImluaXRWYWx1ZSIsImlubmVySFRNTCIsImxpc3RlbmVycyIsIml0ZW1NYXJrdXAiLCJzcGxpdCIsIm1hcCIsImpvaW4iLCJzdHlsZUFyZyIsInNlbGVjdG9yIiwiY2xhc3NOYW1lIiwiaXNCaW5kaW5nIiwicHJlZml4Iiwic2V0dXBFdmVudEhhbmRsZXJzIiwiZWxlbWVudCIsImV2ZW50SGFuZGxlcnMiLCJnYXRoZXJBbGxFdmVudEhhbmRsZXJzIiwiZXZlbnROYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJleGVjdXRlQWxsQ2FsbGJhY2tzSW5MaXN0IiwiZ2F0aGVyZWRIYW5kbGVycyIsImdhdGhlckV2ZW50SGFuZGxlcnMiLCJkZWNvcmF0ZUV2ZW50IiwiY3VySFRNTE5vZGUiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiYmluZGluZ0lkIiwiZXZlbnRIYW5kbGVyIiwiaW5kZXhsZXNzU3RhdGVQYXRoIiwicG9wIiwic3RhdGVQYXRoVG9JdGVtIiwiZ2V0U3RhdGVQYXRoVG9JdGVtIiwiYWNjZXNzb3JUb0RhdGEiLCJwcm9wYWdhdGlvblN0b3BwZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJiaW5kIiwiZWxlbWVudE5hbWUiLCJnZXRUb0l0ZW1Ob2RlIiwiaWR4IiwiSVRFTV9JTkRFWCIsInVuc2hpZnQiLCJjdXJFbCIsImFwcGx5Iiwicm9vdEVsZW1lbnRTZWxlY3RvciIsInJvb3RFbGVtZW50IiwiSFRNTE5vZGVzIiwic2V0dXBFbGVtZW50IiwiY3JlYXRlQWNjZXNzb3IiLCJnZXRPbmx5VmFsdWVzIiwiZ2V0Q29tcG9uZW50Iiwic2V0U3RhdGUiLCJwcmVwYXJlQ2hhbmdlT2JqZWN0IiwiRUxFTUVOVFMiLCJTVEFURSIsIkVMRU1FTlRfQ09VTlRFUiIsInBhdGgiLCJnZXRTdGF0ZSIsIkNPTVBPTkVOVF9UWVBFIiwiQkFTRSIsImFjY2Vzc29yIiwic3RhcnRUcmFuc2FjdGlvbiIsImFwcGx5Q2hhbmdlcyIsInVwIiwibGV2ZWwiLCJtb3ZlVXBTdGF0ZVBhdGgiLCJkb3duIiwiYWRkaXRpb25hbFBhdGgiLCJzZXQiLCJjaGFuZ2VPYmoiLCJnZXQiLCJnZXRWYWx1ZXMiLCJtb2RpZnlUb0FycmF5QWNjZXNzb3IiLCJ2IiwiZm9yY2VkIiwia2V5cyIsImZvcmNlIiwiaSIsImJpbmRpbmdWYWx1ZXMiLCJnZXRWYWx1ZXNUcmVlIiwidmFsdWVzVHJlZSIsInZhbHMiLCJpdGVtVmFsdWVzIiwiY29tcG9uZW50VmFsdWVzIiwibGFzdElkeCIsIm51bSIsImVscyIsInN0YXJ0Iiwic2hpZnQiLCJtYXBMaXN0IiwiY2IiLCJpdGVyYXRlTGlzdFZhbHVlcyIsImZpbHRlciIsImZpbHRlckxpc3QiLCJuZXdMaXN0Iiwic2V0VmFsdWVzIiwiY3JlYXRlU3RhdGVOb2RlcyIsIm1vZGlmeUxpc3QiLCJzZW5kVG9SZW5kZXJRdWV1ZSIsIkNIQU5HRVMiLCJjaGFuZ2VzIiwiY29sbGVjdGluZyIsIlBST01JU0VTX1JFU09MVkVTIiwiTElGRV9DWUNMRV9IQU5ETEVSUyIsImxpc3QiLCJydW5MaWZlQ3ljbGVIb29rcyIsImxpZmVDeWNsZUhhbmRsZXJzIiwiaCIsImZpbmFsaXplVHJhbnNhY3Rpb24iLCJyZXNvbHZlUHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2hhbmdlIiwiaXNDb2xsZWN0aW5nQ2hhbmdlcyIsImFkZExpZmVDeWNsZUhvb2siLCJob29rVHlwZSIsImhvb2siLCJ2YWx1ZXNOb2RlIiwiY3JlYXRlU3RhdGVOb2RlIiwidmFsdWVzTm9kZXMiLCJ2YWx1ZU5vZGUiLCJyZWR1Y2UiLCJhIiwiY2hhbmdlVmFsdWVzIiwiY2FsbGVkRGVwZW5kZW5jZXMiLCJGVUxMX0NIQU5HRSIsImVuZCIsInNldFZhbHVlIiwicmVzIiwiQmluZGluZ05vdEV4aXN0c0Vycm9yIiwic2V0VmFsdWVGb3JMaXN0Iiwic2V0VmFsdWVGb3JDb21wb25lbnQiLCJlcXVhbCIsImh0bWwiLCJkZXBlbmRhbnQiLCJkZXBlbmRhbnRLZXkiLCJuZXdWYWx1ZSIsImFyciIsImluZGV4RXF1YWxpdHkiLCJyZW1vdmVMaXN0SXRlbSIsImFjdGlvbiIsImxpc3RQYXRoIiwiaXRlbU5hbWUiLCJhZGRUb0xpc3QiLCJyZW1vdmVGcm9tTGlzdCIsInNwbGljZSIsImxpc3RCaW5kaW5nIiwicmVtb3ZlZERPTU5vZGUiLCJyZW1vdmVkTm9kZSIsImNyZWF0ZUFuZEFwcGVuZFN0eWxlcyIsInJlbmRlckNoYW5nZXMiLCJyZW5kZXIiLCJhcHBseU1hcmt1cCIsImFwcGx5Q2xhc3NlcyIsInN0eWxlIiwiYXBwbHlTdHlsZXMiLCJhdHRycyIsImFwcGx5QXR0cmlidXRlcyIsImNvbXBvbmVudENoYW5nZXMiLCJlbGVtZW50SWQiLCJjb21wb25lbnRJZCIsImNvbXBvbmVudEFjY2Vzc29yIiwicmVuZGVyTGlzdCIsInJlbmRlckNvbXBvbmVudCIsInVwZGF0ZUNvbXBvbmVudCIsImRyYXdDb21wb25lbnQiLCJpdGVtV3JhcHBlciIsIkNPTVBPTkVOVCIsInJlbmRlckZ1bmMiLCJyZW5kZXJUeXBlIiwiY2hpbGRTdGF0ZVBhdGgiLCJjaGlsZE1hcmt1cCIsImNvbXBvbmVudE1hcmt1cCIsImNoYW5nZVR5cGUiLCJzdGF0ZVBhdGhUb0JpbmRpbmciLCJsaXN0Q29tcG9uZW50IiwiaXRlbXNWYWx1ZXMiLCJ1cGRhdGVMaXN0IiwibGlzdEZyYWdtZW50IiwiYnVpbGRMaXN0IiwibGlzdE5vZGUiLCJuZXh0Tm9kZSIsIm5leHRFbGVtZW50U2libGluZyIsIkxJU1QiLCJDT01QT05FTlRfTElTVCIsImluc2VydEJlZm9yZSIsInJhbmdlIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsIml0ZW1WYWx1ZSIsIml0ZW1JbmRleCIsIm5ld0l0ZW1JbmRleCIsImxpc3RJdGVtTWFya3VwIiwiaXRlbXNDaGFuZ2VzIiwicmVtb3ZlZENvdW50IiwiaXRlbUFjY2Vzc29yIiwiZml4SW5kZXhlcyIsImRpZmYiLCJpdGVtc05vZGVzIiwicHJldklkeCIsIm5ld0lkeCIsImNsYXNzZXMiLCJub3JtYWxpemVTdHlsZXMiLCJzdHlsZU9iaiIsInN0eWxlU3RyIiwic3R5bGVFbCIsImNyZWF0ZVRleHROb2RlIiwiaGVhZCIsImNvbXBvbmVudE5hbWUiLCJtZXNzYWdlIiwiRXJyb3IiLCJMSUJfTkFNRSIsIkFUVFJfUFJFRklYIiwiU1RBVEVfUEFUSCIsIlRFTVBMQVRFX1BMQUNFTUVOVCIsIlNDT1BFX1BSRUZJWCIsIklURU1fU1VGRklYIiwiaXNGdW5jdGlvbiIsImlzQXJyYXkiLCJpc09iamVjdCIsImlzT2JqZWN0SW5CcmFja2V0cyIsImlzT2JqZWN0SW5Eb3VibGVCcmFja2V0cyIsImlzU3RyaW5nIiwiaXNIVE1MU3RyaW5nIiwiaXNOdW1iZXIiLCJpc0RPTUVsZW1lbnQiLCJpc1VuZGVmaW5lZCIsImlzRW1wdHkiLCJpc0xpbmsiLCJnZXRPYmplY3RUeXBlIiwic2xhc2hJZHgiLCJzb21lIiwiaGFzIiwiZ2V0RmFsc2VQYXRocyIsInRvRGFzaENhc2UiLCJ0b0NhbWVsQ2FzZSIsImdldFNob3J0TmFtZSIsImdldFJlYWxOYW1lIiwiTkFNRVMiLCJyZWFsIiwic2hvcnQiLCJzaG9ydE5hbWUiLCJvbmx5RmFsc2VQYXRocyIsImdldEZhbHNlUGF0aCIsInN0ciIsInRvVXBwZXJDYXNlIiwiY29weSIsImRlc3RpbmF0aW9uIiwic291cmNlIiwiaGFzT3duUHJvcGVydHkiLCJjb3B5QXJyYXkiLCJyZXBsYWNlTm9kZXMiLCJjbG9uZUhUTUxNYXJrdXAiLCJjb2xsZWN0SFRNTE5vZGVzIiwid2Fsa05vZGVzIiwicmVtb3ZlTm9kZSIsImluc2VydEJlZm9yZU5vZGUiLCJyZXdyaXRlVG9Ob2RlIiwiZW1wdHlOb2RlIiwib3JpZ2luYWwiLCJyZXBsYWNlbWVudCIsInJlcGxhY2VDaGlsZCIsIm5leHRFbCIsIm1hcmt1cFN0ciIsImNvbnZlcnRTdHJpbmdUb0hUTUwiLCJtYXJrdXBTdHJpbmciLCJwYXJzZXIiLCJET01QYXJzZXIiLCJwYXJzZWREb2N1bWVudCIsInBhcnNlRnJvbVN0cmluZyIsImJvZHkiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIm5vZGUiLCJyb290IiwiaXNXYW50ZWQiLCJub2RlcyIsInJlbW92ZUNoaWxkIiwidGV4dCIsIndyaXRlVG9Ob2RlIiwidGV4dE5vZGUiLCJoYXNDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZCIsImFyZUVxdWFsIiwiZmlyc3QiLCJzZWNvbmQiLCJjaGlsZE5vZGUiLCJjaGVja0tleXNFcXVhbGl0eSIsImFkZENvbnN0RmllbGRzIiwibWFwS2V5cyIsInRvT2JqZWN0IiwiZnVsbE1hcCIsInNwbGl0UGllY2UiLCJkZXN0IiwiZmllbGRzIiwiZmllbGQiLCJkZWZpbmVQcm9wZXJ0eSIsInByb3AiLCJuZXdPYmoiLCJuZXdLZXkiLCJ2YWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7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akIrTixXQUFPL04sQ0FBUCxJQUFZLDBCQUFXaU8sR0FBWCxJQUFrQkEsSUFBSWpPLENBQUosQ0FBbEIsR0FBMkJpTyxHQUF2QztBQUNELEdBRkQ7QUFHQSxTQUFPRixNQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7QUNoSkQ7O0FBQ0E7O0FBRUFHLE9BQU9DLE9BQVAsR0FBaUI7QUFDZmxiLDRCQURlO0FBRWZpTDtBQUZlLENBQWpCLEMiLCJmaWxlIjoiY291bGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJDb3VsaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJDb3VsaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4uanNcIik7XG4iLCJpbXBvcnQgTElCX0FUVFIgZnJvbSAnLi9nbG9iYWxzL2F0dHJpYnV0ZXMnO1xyXG5pbXBvcnQgUkUgZnJvbSAnLi9nbG9iYWxzL3JlZ2V4cCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNsb25lSFRNTE1hcmt1cCxcclxuICB3YWxrTm9kZXMsXHJcbn0gZnJvbSAnLi9oZWxwZXJzL2RvbSc7XHJcblxyXG5pbXBvcnQgeyBzZXQsIGZvckVhY2gsIG1hcCwgbWFwS2V5cywgdG9PYmplY3QgfSBmcm9tICcuL2hlbHBlcnMvb2JqZWN0JztcclxuXHJcbmltcG9ydCBjb3B5IGZyb20gJy4vaGVscGVycy9jb3B5JztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNBcnJheSxcclxuICBpc0Z1bmN0aW9uLFxyXG4gIGlzT2JqZWN0LFxyXG4gIGlzRW1wdHksXHJcbn0gZnJvbSAnLi9oZWxwZXJzL2NoZWNrZXJzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgdG9DYW1lbENhc2UsXHJcbiAgZ2V0U2hvcnROYW1lLFxyXG59IGZyb20gJy4vaGVscGVycy9jb21tb24nO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRPbmx5VmFsdWVzLFxyXG59IGZyb20gJy4vU3RhdGUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBjcmVhdGVBbmRBcHBlbmRTdHlsZXMsXHJcbn0gZnJvbSAnLi9WaWV3JztcclxuXHJcbmltcG9ydCBDb21wb25lbnRSZWRlZmluZUVycm9yIGZyb20gJy4vZXJyb3JzL0NvbXBvbmVudFJlZGVmaW5lRXJyb3InO1xyXG5pbXBvcnQgU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3IgZnJvbSAnLi9lcnJvcnMvU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3InO1xyXG5cclxuXHJcbmNvbnN0IFZBTFVFX1RZUEVTID0gWydzdHlsZScsICdjbGFzcycsICd2YWx1ZScsICdhdHRycycsICdodG1sJ107XHJcbmNvbnN0IFJFU0VSVkVEX0hPT0tTX05BTUVTID0gWydtb3VudCcsICd1cGRhdGUnLCAncmVtb3ZlJ107XHJcbmNvbnN0IERFRkFVTFRfSE9PS1MgPSB0b09iamVjdChSRVNFUlZFRF9IT09LU19OQU1FUywgKCkgPT4gKCkgPT4ge30pO1xyXG5jb25zdCBSRVNFUlZFRF9CSU5ESU5HX05BTUVTID0gVkFMVUVfVFlQRVMuY29uY2F0KFsnZXZlbnRzJywgJ2hvb2tzJywgJ2xpc3RJdGVtJywgTElCX0FUVFIuU0VMRl0pO1xyXG5cclxuZXhwb3J0IHtcclxuICBkZWZpbmUsXHJcbiAgZ2V0Q29tcG9uZW50T3B0cyxcclxuICBzaG9ydGVuQmluZGluZ0lkLFxyXG4gIGlzQ29tcG9uZW50LFxyXG4gIFZBTFVFX1RZUEVTLFxyXG4gIFJFU0VSVkVEX0JJTkRJTkdfTkFNRVMsXHJcbn07XHJcblxyXG5sZXQgQ09NUE9ORU5UX0NPVU5URVIgPSAwO1xyXG5jb25zdCBDT01QT05FTlRTID0ge307XHJcblxyXG5mdW5jdGlvbiBkZWZpbmUgKG5hbWUsIG1hcmt1cCwgYmluZGluZ3MsIHN0eWxlcykge1xyXG4gIGNvbnN0IGFyZ3MgPSBpc09iamVjdChuYW1lKSA/IG5hbWUgOiB7IG5hbWUsIG1hcmt1cCwgYmluZGluZ3MsIHN0eWxlcyB9O1xyXG5cclxuICBuYW1lID0gdG9DYW1lbENhc2UoYXJncy5uYW1lKTtcclxuXHJcbiAgaWYgKENPTVBPTkVOVFNbbmFtZV0pIHtcclxuICAgIHRocm93IG5ldyBDb21wb25lbnRSZWRlZmluZUVycm9yKG5hbWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tcG9uZW50SFRNTE1hcmt1cCA9IGNsb25lSFRNTE1hcmt1cChhcmdzLm1hcmt1cCk7XHJcbiAgY29tcG9uZW50SFRNTE1hcmt1cC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xyXG5cclxuICBDT01QT05FTlRfQ09VTlRFUiA9IDA7XHJcbiAgY29uc3QgY29tcG9uZW50ID0ge1xyXG4gICAgbmFtZSxcclxuICAgIHN0YXRlOiB7IFtMSUJfQVRUUi5TRUxGXToge30gfSxcclxuICAgIHN0YXRlSWQ6IG5hbWUsXHJcbiAgICBzdGF0ZVBhdGg6IFtuYW1lXSxcclxuICAgIHN0YXRlTmFtZXM6IHt9LFxyXG4gICAgbWFya3VwOiBjb21wb25lbnRIVE1MTWFya3VwLFxyXG4gICAgZXZhbHVhdGU6IHt9LFxyXG4gICAgbGlua3M6IHt9LFxyXG4gICAgaXNDb21wb25lbnQ6IHRydWUsXHJcbiAgICBvdXRlck5hbWVzOiB7fSxcclxuICAgIF9saW5rczoge30sXHJcbiAgfTtcclxuXHJcbiAgZ2F0aGVyQmluZGluZ3NGcm9tTWFya3VwKGNvbXBvbmVudEhUTUxNYXJrdXAsIGNvbXBvbmVudCk7XHJcblxyXG4gIGNvbnN0IG5vcm1hbGl6ZWRPcHRpb25zID0gbm9ybWFsaXplVXNlck9wdGlvbnMoYXJncy5iaW5kaW5ncywgeyBzdGF0ZToge30gfSk7XHJcbiAgY29weShjb21wb25lbnQsIG5vcm1hbGl6ZWRPcHRpb25zKTtcclxuXHJcbiAgcHJlcGFyZUJpbmRpbmdzIChjb21wb25lbnQsIGNvbXBvbmVudC5zdGF0ZUlkLCB7IHN0YXRlUGF0aDogW10sIGxpbmtzOiB7fSwgc3RhdGVOYW1lczogY29tcG9uZW50LnN0YXRlTmFtZXMgfSk7XHJcblxyXG4gIGNyZWF0ZUFuZEFwcGVuZFN0eWxlcyggcHJlcGFyZVN0eWxlcyhhcmdzLnN0eWxlcywgY29tcG9uZW50KSApO1xyXG5cclxuICByZXR1cm4gQ09NUE9ORU5UU1tuYW1lXSA9IGNvbXBvbmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2F0aGVyQmluZGluZ3NGcm9tTWFya3VwIChjb21wb25lbnRIVE1MTWFya3VwLCBjb21wb25lbnQpIHtcclxuICB3YWxrTm9kZXMoY29tcG9uZW50SFRNTE1hcmt1cCwgKEhUTUxOb2RlKSA9PiB7XHJcbiAgICBjb25zdCBiaW5kaW5nT3B0cyA9IGFuYWx5emVCaW5kaW5nKEhUTUxOb2RlKTtcclxuXHJcbiAgICBpZiAoIWJpbmRpbmdPcHRzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiaW5kaW5nID0gY3JlYXRlQmluZGluZyhiaW5kaW5nT3B0cy5uYW1lLCBjb21wb25lbnQsIEhUTUxOb2RlKTtcclxuXHJcbiAgICBpZiAoYmluZGluZ09wdHMuaXNDb21wb25lbnQpIHtcclxuICAgICAgc2V0Q29tcG9uZW50KGJpbmRpbmcsIGJpbmRpbmdPcHRzKTtcclxuICAgICAgSFRNTE5vZGUuY2xhc3NMaXN0LmFkZChMSUJfQVRUUi5QUkVGSVggKyBiaW5kaW5nLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnQuc3RhdGVbYmluZGluZy5uYW1lXSA9IGJpbmRpbmc7XHJcbiAgICBiaW5kaW5nLm1hcmt1cC5jbGFzc0xpc3QuYWRkKExJQl9BVFRSLlBSRUZJWCArIGJpbmRpbmcuaWQsIGNvbXBvbmVudC5uYW1lICsgJy0nICsgYmluZGluZy5uYW1lKTtcclxuXHJcbiAgICBpZiAoYmluZGluZ09wdHMuaXNMaXN0KSB7XHJcbiAgICAgIGNvbnN0IGl0ZW1Ob2RlID0gSFRNTE5vZGUuY2hpbGRyZW5bMF07XHJcbiAgICAgIG1vZGlmeVRvTGlzdEJpbmRpbmcoYmluZGluZywgaXRlbU5vZGUpO1xyXG5cclxuICAgICAgaWYgKGlzQ29tcG9uZW50KGl0ZW1Ob2RlKSkge1xyXG4gICAgICAgIHNldENvbXBvbmVudChiaW5kaW5nLmxpc3RJdGVtLCBnZXRDb21wb25lbnRPcHRzKGl0ZW1Ob2RlKSk7XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBnYXRoZXJCaW5kaW5nc0Zyb21NYXJrdXAoaXRlbU5vZGUsIGJpbmRpbmcubGlzdEl0ZW0pO1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldENvbXBvbmVudCAoY29tcG9uZW50QmluZGluZywgc3ViQ29tcG9uZW50T3B0cykge1xyXG4gIGNvbnN0IHN0YXRlTmFtZXMgPSBPYmplY3QuYXNzaWduKGNvbXBvbmVudEJpbmRpbmcuc3RhdGVOYW1lcywgc3ViQ29tcG9uZW50T3B0cy5jb21wb25lbnQuc3RhdGVOYW1lcyk7XHJcbiAgbGV0IHN0YXRlSWQgPSBzdWJDb21wb25lbnRPcHRzLmNvbXBvbmVudC5uYW1lICsgJ3gnICsgQ09NUE9ORU5UX0NPVU5URVIrKztcclxuXHJcbiAgaWYgKHN1YkNvbXBvbmVudE9wdHMuc3RhdGVOYW1lKSB7XHJcbiAgICBpZiAoc3RhdGVOYW1lc1tzdWJDb21wb25lbnRPcHRzLnN0YXRlTmFtZV0pIHtcclxuICAgICAgdGhyb3cgbmV3IFNjb3BlTmFtZUNvbGxpc2lvbkVycm9yKHN1YkNvbXBvbmVudE9wdHMuc3RhdGVOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0ZUlkID0gc3ViQ29tcG9uZW50T3B0cy5zdGF0ZU5hbWU7XHJcbiAgICBjb21wb25lbnRCaW5kaW5nLnN0YXRlTmFtZXNbc3RhdGVJZF0gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgY29weShjb21wb25lbnRCaW5kaW5nLCBzdWJDb21wb25lbnRPcHRzLmNvbXBvbmVudCk7XHJcblxyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKCBjb21wb25lbnRCaW5kaW5nLCB7XHJcbiAgICBpZDogc3RhdGVJZCxcclxuICAgIHN0YXRlSWQsXHJcbiAgICBuYW1lOiBzdGF0ZUlkLFxyXG4gICAgc3RhdGVOYW1lOiBzdWJDb21wb25lbnRPcHRzLnN0YXRlTmFtZSxcclxuICAgIHN0YXRlUGF0aDogY29tcG9uZW50QmluZGluZy5zdGF0ZVBhdGguY29uY2F0KHN0YXRlSWQpLFxyXG4gICAgbWFya3VwOiBzdWJDb21wb25lbnRPcHRzLmNvbXBvbmVudC5tYXJrdXAuY2xvbmVOb2RlKHRydWUpLFxyXG4gICAgaXNDb21wb25lbnQ6IHRydWUsXHJcbiAgICBzdGF0ZU5hbWVzLFxyXG4gICAgX2xpbmtzOiBPYmplY3QuYXNzaWduKHt9LCBzdWJDb21wb25lbnRPcHRzLmxpbmtzKSxcclxuICAgIG91dGVyTmFtZXM6IE9iamVjdC5hc3NpZ24oe30sIHN1YkNvbXBvbmVudE9wdHMucmV2TGlua3MpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVwYXJlQmluZGluZ3MgKGNvbXBvbmVudCwgY3VycmVudFN0YXRlSWQsIHBhcmVudENvbXBvbmVudCkge1xyXG4gIGNvbnN0IGNvbXBvbmVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb21wb25lbnQubWFya3VwLnNldEF0dHJpYnV0ZShMSUJfQVRUUi5CSU5ESU5HX0lELCBzaG9ydGVuQmluZGluZ0lkKCBjdXJyZW50U3RhdGVJZCArIExJQl9BVFRSLlNUQVRFX0RFTElNSVRFUiArIExJQl9BVFRSLlNFTEYgKSk7XHJcbiAgY29tcG9uZW50V3JhcHBlci5hcHBlbmRDaGlsZChjb21wb25lbnQubWFya3VwKTtcclxuICBjb21wb25lbnQuc3RhdGVQYXRoID0gcGFyZW50Q29tcG9uZW50LnN0YXRlUGF0aC5jb25jYXQoY29tcG9uZW50LnN0YXRlSWQpO1xyXG4gIGNvbXBvbmVudC5zdGF0ZU5hbWVzID0gcGFyZW50Q29tcG9uZW50LnN0YXRlTmFtZXM7XHJcblxyXG4gIGNvbnN0IHN1YkNvbXBvbmVudHMgPSBbXTtcclxuXHJcbiAgZm9yRWFjaChjb21wb25lbnQuc3RhdGUsIChiaW5kaW5nLCBiaW5kaW5nTmFtZSkgPT4ge1xyXG4gICAgY29uc3Qgb2xkQmluZGluZ0lkID0gYmluZGluZy5pZDtcclxuICAgIGNvbnN0IG5ld0JpbmRpbmdJZCA9IGN1cnJlbnRTdGF0ZUlkICsgTElCX0FUVFIuU1RBVEVfREVMSU1JVEVSICsgYmluZGluZ05hbWU7XHJcbiAgICBjb25zdCBzaG9ydElkID0gc2hvcnRlbkJpbmRpbmdJZChuZXdCaW5kaW5nSWQpO1xyXG5cclxuICAgIGlmIChiaW5kaW5nLm1hcmt1cCkge1xyXG4gICAgICBjb25zdCBiaW5kaW5nTm9kZSA9IGNvbXBvbmVudFdyYXBwZXIucXVlcnlTZWxlY3RvcignLicgKyBMSUJfQVRUUi5QUkVGSVggKyBvbGRCaW5kaW5nSWQpO1xyXG4gICAgICBiaW5kaW5nTm9kZS5zZXRBdHRyaWJ1dGUoTElCX0FUVFIuQklORElOR19JRCwgc2hvcnRJZCk7XHJcbiAgICAgIGJpbmRpbmdOb2RlLmNsYXNzTGlzdC5yZW1vdmUoTElCX0FUVFIuUFJFRklYICsgb2xkQmluZGluZ0lkKTtcclxuICAgICAgYmluZGluZ05vZGUuY2xhc3NMaXN0LmFkZChMSUJfQVRUUi5QUkVGSVggKyBuZXdCaW5kaW5nSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5hc3NpZ24oYmluZGluZywge1xyXG4gICAgICBzdGF0ZVBhdGg6IGNvbXBvbmVudC5zdGF0ZVBhdGguc2xpY2UoKSxcclxuICAgICAgaG9va3M6IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfSE9PS1MsIGJpbmRpbmcuaG9va3MpLFxyXG4gICAgICBpZDogbmV3QmluZGluZ0lkLFxyXG4gICAgICBzaG9ydElkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcHJlcGFyZVJlYWN0aXZlRnVuY3MoYmluZGluZywgY29tcG9uZW50KTtcclxuXHJcbiAgICBpZiAoYmluZGluZy5pc0xpc3QpIHtcclxuICAgICAgYmluZGluZy5zdGF0ZVBhdGgucHVzaChiaW5kaW5nTmFtZSk7XHJcbiAgICAgIGJpbmRpbmcuc3RhdGVOYW1lcyA9IGNvbXBvbmVudC5zdGF0ZU5hbWVzO1xyXG5cclxuICAgICAgcHJlcGFyZUJpbmRpbmdzIChiaW5kaW5nLmxpc3RJdGVtLCBuZXdCaW5kaW5nSWQgKyBMSUJfQVRUUi5TVEFURV9ERUxJTUlURVIgKyBMSUJfQVRUUi5JVEVNICsgYmluZGluZy5saXN0SXRlbS5uYW1lLCBiaW5kaW5nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChiaW5kaW5nLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgIHN1YkNvbXBvbmVudHMucHVzaChiaW5kaW5nKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgc2V0dXBDb21wb25lbnRzTGlua3MoY29tcG9uZW50LCBwYXJlbnRDb21wb25lbnQpO1xyXG4gIGNvbXBvbmVudC50ZW1wbGF0ZSA9IGNvbXBvbmVudC5tYXJrdXAuY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuICBzdWJDb21wb25lbnRzLmZvckVhY2goKHN1YkNvbXBvbmVudCkgPT4ge1xyXG4gICAgcHJlcGFyZUJpbmRpbmdzIChzdWJDb21wb25lbnQsIGN1cnJlbnRTdGF0ZUlkICsgTElCX0FUVFIuU1RBVEVfREVMSU1JVEVSICsgc3ViQ29tcG9uZW50LnN0YXRlSWQsIGNvbXBvbmVudCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXBhcmVSZWFjdGl2ZUZ1bmNzIChiaW5kaW5nLCBjb21wb25lbnREYXRhKSB7XHJcbiAgVkFMVUVfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xyXG4gICAgY29uc3QgcmVhY3RpdmVGdW5jID0gYmluZGluZ1t0eXBlXTtcclxuICAgIGlmICghcmVhY3RpdmVGdW5jKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kaW5nLmV2YWx1YXRlW3R5cGVdID0gcHJlcGFyZVJlYWN0aXZlRnVuYyhiaW5kaW5nLCB0eXBlLCByZWFjdGl2ZUZ1bmMsIGNvbXBvbmVudERhdGEpXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXBhcmVSZWFjdGl2ZUZ1bmMgKGJpbmRpbmcsIHR5cGUsIHJlYWN0aXZlRnVuYywgY29tcG9uZW50RGF0YSkge1xyXG4gIGNvbnN0IGRlcGVuZGVuY2llc05hbWVzID0gZ2V0RGVwZW5kZW5jaWVzTmFtZXMocmVhY3RpdmVGdW5jKTtcclxuXHJcbiAgZGVwZW5kZW5jaWVzTmFtZXMuZm9yRWFjaCgoZGVwZW5kZW5jeU5hbWUpID0+IHtcclxuICAgIGlmIChpc0VtcHR5KGNvbXBvbmVudERhdGEuc3RhdGVbZGVwZW5kZW5jeU5hbWVdKSkge1xyXG4gICAgICBjb21wb25lbnREYXRhLnN0YXRlW2RlcGVuZGVuY3lOYW1lXSA9IGNyZWF0ZUJpbmRpbmcoZGVwZW5kZW5jeU5hbWUsIGNvbXBvbmVudERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERhdGEuc3RhdGVbZGVwZW5kZW5jeU5hbWVdLmRlcGVuZGFudHNbIGJpbmRpbmcubmFtZSArICc6JyArIHR5cGUgXSA9IHsgbmFtZTogYmluZGluZy5uYW1lLCB0eXBlIH07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAodmFsdWVzLCBjb21wb25lbnRJbnRlcmZhY2UpID0+IGNvbXB1dGUgKHJlYWN0aXZlRnVuYywgdmFsdWVzLCBjb21wb25lbnRJbnRlcmZhY2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREZXBlbmRlbmNpZXNOYW1lcyhmdW5jKSB7XHJcbiAgY29uc3QgZnVuY1BhcmFtcyA9IGdldFBhcmFtTmFtZXMoZnVuYyk7XHJcbiAgY29uc3QgdmFsdWVzT2JqUmVnRXhwID0gIG5ldyBSZWdFeHAoJ1xcXFwnICsgZnVuY1BhcmFtc1swXSArICdcXFxcLihcXFxcRFteXFxcXHNcXFxcV10rKScsICdnJyk7XHJcbiAgY29uc3QgZGVwZW5kZW5jaWVzTmFtZXMgPSBbXTtcclxuICBjb25zdCBmdW5jU3RyID0gZnVuYy50b1N0cmluZygpO1xyXG4gIGxldCBkZXBlbmRlbmN5TmFtZTtcclxuICB3aGlsZSAoKGRlcGVuZGVuY3lOYW1lID0gdmFsdWVzT2JqUmVnRXhwLmV4ZWMoZnVuY1N0cikpKSB7XHJcbiAgICBkZXBlbmRlbmNpZXNOYW1lcy5wdXNoKGRlcGVuZGVuY3lOYW1lWzFdKTtcclxuICB9XHJcbiAgcmV0dXJuIGRlcGVuZGVuY2llc05hbWVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYXJhbU5hbWVzKGZ1bmMpIHtcclxuICBjb25zdCBmdW5jU3RyV2l0aG91dENvbW1lbnRzID0gZnVuYy50b1N0cmluZygpLnJlcGxhY2UoUkUuU1RSSVBfQ09NTUVOVFMsICcnKTtcclxuICBjb25zdCBwYXJhbXNTdHIgPSBmdW5jU3RyV2l0aG91dENvbW1lbnRzLnNsaWNlKFxyXG4gICAgZnVuY1N0cldpdGhvdXRDb21tZW50cy5pbmRleE9mKCcoJykgKzEsXHJcbiAgICBmdW5jU3RyV2l0aG91dENvbW1lbnRzLmluZGV4T2YoJyknKVxyXG4gICk7XHJcbiAgcmV0dXJuIHBhcmFtc1N0ci5tYXRjaChSRS5BUkdVTUVOVF9OQU1FUykgfHwgW107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXB1dGUgKGZ1bmMsIHZhbHVlc09iaiwgY29tcG9uZW50SW50ZXJmYWNlKSB7XHJcbiAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBnZXRPbmx5VmFsdWVzKHZhbHVlc09iaiksIGNvbXBvbmVudEludGVyZmFjZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwQ29tcG9uZW50c0xpbmtzIChjb21wb25lbnQsIHBhcmVudENvbXBvbmVudCkge1xyXG4gIE9iamVjdC5hc3NpZ24oXHJcbiAgICBwYXJlbnRDb21wb25lbnQubGlua3MsXHJcbiAgICBtYXAoY29tcG9uZW50Lm91dGVyTmFtZXMsIChrKSA9PiAoeyBsaW5rOiBrLCBjb21wb25lbnQ6IGNvbXBvbmVudC5zdGF0ZUlkIH0pKVxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVVzZXJPcHRpb25zIChvcHRpb25zT2JqLCBwYXJlbnRPYmosIHBhcmVudEtleSkge1xyXG4gIGlmIChpc0Z1bmN0aW9uIChvcHRpb25zT2JqKSkge1xyXG4gICAgcmV0dXJuIHNldChwYXJlbnRPYmosIFtwYXJlbnRLZXldLCB7IGNsYXNzOiBvcHRpb25zT2JqIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzQXJyYXkob3B0aW9uc09iaikpIHtcclxuXHJcbiAgICBpZiAob3B0aW9uc09iai5sZW5ndGggPiAxKSB7XHJcbiAgICAgIG9wdGlvbnNPYmouZm9yRWFjaCgob3B0aW9uKSA9PiBub3JtYWxpemVVc2VyT3B0aW9ucyAob3B0aW9uLCBwYXJlbnRPYmosIHBhcmVudEtleSkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9uc09ialswXSkpIHtcclxuICAgICAgcmV0dXJuIHNldChwYXJlbnRPYmosIFtwYXJlbnRLZXldLCB7IHZhbHVlOiBvcHRpb25zT2JqWzBdIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzT2JqZWN0KG9wdGlvbnNPYmpbMF0pKSB7XHJcbiAgICAgIHJldHVybiBzZXQocGFyZW50T2JqLCBbcGFyZW50S2V5XSwgeyBldmVudHM6IG9wdGlvbnNPYmpbMF0gfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JFYWNoKG9wdGlvbnNPYmosICh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICBkZWxldGUgb3B0aW9uc09ialtrZXldO1xyXG4gICAgY29uc3QgYmluZGluZyA9IGNyZWF0ZUJpbmRpbmcoa2V5KTtcclxuXHJcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgIHBhcmVudE9ialsnc3RhdGUnXVtrZXldID0gT2JqZWN0LmFzc2lnbihiaW5kaW5nLCB2YWx1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwYXJlbnRPYmpbJ3N0YXRlJ11ba2V5XSA9IGJpbmRpbmc7XHJcbiAgICBub3JtYWxpemVVc2VyT3B0aW9ucyh2YWx1ZSwgcGFyZW50T2JqWydzdGF0ZSddLCBrZXkpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcGFyZW50T2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbmFseXplQmluZGluZyAoZWwpIHtcclxuICBpZiAoaXNDb21wb25lbnQoZWwpKSB7XHJcbiAgICByZXR1cm4gZ2V0Q29tcG9uZW50T3B0cyhlbCk7XHJcbiAgfVxyXG5cclxuICBpZiAoIWVsLmdldEF0dHJpYnV0ZSkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBsZXQgbmFtZSA9IGVsLmdldEF0dHJpYnV0ZShMSUJfQVRUUi5URU1QTEFURV9CSU5ESU5HKTtcclxuICBlbC5yZW1vdmVBdHRyaWJ1dGUoTElCX0FUVFIuVEVNUExBVEVfQklORElORyk7XHJcblxyXG4gIGlmIChuYW1lKSB7XHJcbiAgICByZXR1cm4geyBuYW1lOiBuYW1lLnRyaW0oKSB9O1xyXG4gIH1cclxuXHJcbiAgbmFtZSA9IGVsLmdldEF0dHJpYnV0ZShMSUJfQVRUUi5URU1QTEFURV9MSVNUX0JJTkRJTkcpO1xyXG4gIGVsLnJlbW92ZUF0dHJpYnV0ZShMSUJfQVRUUi5URU1QTEFURV9MSVNUX0JJTkRJTkcpO1xyXG5cclxuICBpZiAobmFtZSkge1xyXG4gICAgcmV0dXJuIHsgbmFtZTogbmFtZS50cmltKCksIGlzTGlzdDogdHJ1ZSB9O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNDb21wb25lbnQgKGVsKSB7XHJcbiAgY29uc3QgdGFnTmFtZSA9IGVsLnRhZ05hbWUgJiYgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gIHJldHVybiB0YWdOYW1lICYmIENPTVBPTkVOVFNbIHRvQ2FtZWxDYXNlKHRhZ05hbWUpIF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvbXBvbmVudE9wdHMgKG9iaikge1xyXG4gIGNvbnN0IG5hbWUgPSB0b0NhbWVsQ2FzZSggb2JqLnRhZ05hbWUudG9Mb3dlckNhc2UoKSApO1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IGdldENvbXBvbmVudEJ5TmFtZShuYW1lKTtcclxuICBjb25zdCBsaW5rcyA9IHt9O1xyXG4gIGNvbnN0IHJldkxpbmtzID0ge307XHJcbiAgbGV0IHN0YXRlTmFtZSA9IG51bGw7XHJcblxyXG4gIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG9iai5hdHRyaWJ1dGVzKVxyXG4gICAgLmZvckVhY2goKGF0dHIpID0+IHtcclxuXHJcbiAgICAgIGlmIChhdHRyLm5hbWUgPT09IExJQl9BVFRSLlNUQVRFX05BTUUpIHtcclxuICAgICAgICBzdGF0ZU5hbWUgPSBhdHRyLnZhbHVlO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgaW5uZXJMaW5rID0gdG9DYW1lbENhc2UoYXR0ci5uYW1lKTtcclxuICAgICAgbGlua3NbaW5uZXJMaW5rXSA9IGF0dHIudmFsdWU7XHJcbiAgICAgIHJldkxpbmtzW2F0dHIudmFsdWVdID0gaW5uZXJMaW5rO1xyXG4gICAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjb21wb25lbnQsXHJcbiAgICBsaW5rczogbGlua3MsXHJcbiAgICByZXZMaW5rczogcmV2TGlua3MsXHJcbiAgICBzdGF0ZU5hbWUsXHJcbiAgICBuYW1lLFxyXG4gICAgaXNDb21wb25lbnQ6IHRydWUsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50QnlOYW1lIChuYW1lKSB7XHJcbiAgcmV0dXJuIENPTVBPTkVOVFNbIHRvQ2FtZWxDYXNlKG5hbWUpIF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJpbmRpbmcgKG5hbWUsIGNvbXBvbmVudCwgZWwpIHtcclxuICBjb25zdCBjb21wb25lbnRPcHRzID0gKGNvbXBvbmVudCkgPyB7XHJcbiAgICBpZDogY29tcG9uZW50LnN0YXRlSWQgKyBMSUJfQVRUUi5TVEFURV9ERUxJTUlURVIgKyBuYW1lLFxyXG4gICAgc3RhdGVQYXRoOiBjb21wb25lbnQuc3RhdGVQYXRoLFxyXG4gICAgc3RhdGVOYW1lczogY29tcG9uZW50LnN0YXRlTmFtZXMsXHJcbiAgICBpc0xpc3RJdGVtOiBjb21wb25lbnQuaXNMaXN0LFxyXG4gICAgc3RhdGVJZDogbmFtZSxcclxuICB9IDoge307XHJcblxyXG4gIGNvbnN0IGVsT3B0cyA9IChlbCkgPyB7XHJcbiAgICBpbml0VmFsdWU6IGVsLnZhbHVlIHx8IGVsLmlubmVySFRNTFxyXG4gIH0gOiB7fTtcclxuXHJcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe1xyXG4gICAgbmFtZSxcclxuICAgIGxpc3RlbmVyczogW10sXHJcbiAgICBtYXJrdXA6IGVsLFxyXG4gICAgZGVwZW5kYW50czoge30sXHJcbiAgICBldmVudHM6IHt9LFxyXG4gICAgZXZhbHVhdGU6IHt9LFxyXG4gICAgbGlua3M6IHt9LFxyXG4gICAgc3RhdGU6IHsgW0xJQl9BVFRSLlNFTEZdOiB7fSB9LFxyXG4gICAgb3V0ZXJOYW1lczoge30sXHJcbiAgICBfbGlua3M6IHt9LFxyXG5cclxuICB9LCBjb21wb25lbnRPcHRzLCBlbE9wdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb2RpZnlUb0xpc3RCaW5kaW5nIChiaW5kaW5nLCBpdGVtTWFya3VwKSB7XHJcbiAgYmluZGluZy5pc0xpc3QgPSB0cnVlO1xyXG5cclxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihiaW5kaW5nLCB7XHJcbiAgICBtYXJrdXA6IGl0ZW1NYXJrdXAsXHJcbiAgICBsaXN0SXRlbTogY3JlYXRlQmluZGluZyhpdGVtTWFya3VwLnRhZ05hbWUsIGJpbmRpbmcsIGl0ZW1NYXJrdXApLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG9ydGVuQmluZGluZ0lkIChpZCkge1xyXG4gIHJldHVybiBpZFxyXG4gICAgLnNwbGl0KExJQl9BVFRSLlNUQVRFX0RFTElNSVRFUilcclxuICAgIC5tYXAoKGVsKSA9PiBnZXRTaG9ydE5hbWUoZWwpKVxyXG4gICAgLmpvaW4oTElCX0FUVFIuU1RBVEVfREVMSU1JVEVSKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlcGFyZVN0eWxlcyAoc3R5bGVBcmcsIGNvbXBvbmVudCkge1xyXG4gIHJldHVybiBtYXBLZXlzKHN0eWxlQXJnLCAoa2V5KSA9PiBrZXlcclxuICAgIC5zcGxpdCgnLCcpXHJcbiAgICAubWFwKChzZWxlY3RvcikgPT4gc2VsZWN0b3IudHJpbSgpKVxyXG4gICAgLm1hcCgoc2VsZWN0b3IpID0+IHtcclxuXHJcbiAgICAgIGxldCBjbGFzc05hbWUgPSAgJy4nICsgY29tcG9uZW50Lm5hbWU7XHJcblxyXG4gICAgICBpZiAoc2VsZWN0b3IpIHtcclxuICAgICAgICBjb25zdCBpc0JpbmRpbmcgPSBjb21wb25lbnQuc3RhdGVbIHNlbGVjdG9yLnNwbGl0KCcgJylbMF0uc3BsaXQoJzo6JylbMF0uc3BsaXQoJzonKVswXSBdO1xyXG4gICAgICAgIGNvbnN0IHByZWZpeCA9IGlzQmluZGluZyA/IGNsYXNzTmFtZSArICctJyA6ICcnO1xyXG4gICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBwcmVmaXggKyBzZWxlY3RvcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcclxuICAgIH0pXHJcbiAgICAuam9pbignLCcpXHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgTElCX0FUVFIgZnJvbSAnLi9nbG9iYWxzL2F0dHJpYnV0ZXMnO1xyXG5cclxuaW1wb3J0IHsgZm9yRWFjaCB9IGZyb20gJy4vaGVscGVycy9vYmplY3QnO1xyXG5pbXBvcnQgeyBnZXRSZWFsTmFtZSwgaGFzIH0gZnJvbSAnLi9oZWxwZXJzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUFjY2Vzc29yLFxyXG59IGZyb20gJy4vU3RhdGUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBzdGFydFRyYW5zYWN0aW9uLFxyXG4gIGFwcGx5Q2hhbmdlc1xyXG59IGZyb20gJy4vU3RhdGVDaGFuZ2UnO1xyXG5cclxuZXhwb3J0IHtcclxuICBzZXR1cEV2ZW50SGFuZGxlcnNcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNldHVwRXZlbnRIYW5kbGVycyAoZWxlbWVudCkge1xyXG4gIGNvbnN0IGV2ZW50SGFuZGxlcnMgPSB7fTtcclxuICBnYXRoZXJBbGxFdmVudEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50SGFuZGxlcnMpO1xyXG5cclxuICBjb25zdCBtYXJrdXAgPSBlbGVtZW50LmVsO1xyXG4gIGZvciAobGV0IGV2ZW50TmFtZSBpbiBldmVudEhhbmRsZXJzKSB7XHJcbiAgICBtYXJrdXAuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIChlKSA9PiBleGVjdXRlQWxsQ2FsbGJhY2tzSW5MaXN0KGUsIGV2ZW50SGFuZGxlcnNbZXZlbnROYW1lXSwgZWxlbWVudCkpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2F0aGVyQWxsRXZlbnRIYW5kbGVycyAoY29tcG9uZW50LCBnYXRoZXJlZEhhbmRsZXJzKSB7XHJcbiAgZ2F0aGVyRXZlbnRIYW5kbGVycyAoY29tcG9uZW50LCBnYXRoZXJlZEhhbmRsZXJzKTtcclxuXHJcbiAgaWYgKGNvbXBvbmVudC5zdGF0ZSkge1xyXG4gICAgZm9yRWFjaChjb21wb25lbnQuc3RhdGUsIChiaW5kaW5nKSA9PiBnYXRoZXJBbGxFdmVudEhhbmRsZXJzKGJpbmRpbmcsIGdhdGhlcmVkSGFuZGxlcnMpKTtcclxuICB9XHJcblxyXG4gIGlmIChjb21wb25lbnQubGlzdEl0ZW0pIHtcclxuICAgIGdhdGhlckFsbEV2ZW50SGFuZGxlcnMoY29tcG9uZW50Lmxpc3RJdGVtLCBnYXRoZXJlZEhhbmRsZXJzKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdhdGhlckV2ZW50SGFuZGxlcnMgKGJpbmRpbmcsIGdhdGhlcmVkSGFuZGxlcnMpIHtcclxuICBpZiAoIWJpbmRpbmcuZXZlbnRzKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBldmVudE5hbWUgaW4gYmluZGluZy5ldmVudHMpIHtcclxuICAgIGlmICghZ2F0aGVyZWRIYW5kbGVyc1tldmVudE5hbWVdKSB7XHJcbiAgICAgIGdhdGhlcmVkSGFuZGxlcnNbZXZlbnROYW1lXSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGdhdGhlcmVkSGFuZGxlcnNbZXZlbnROYW1lXVtiaW5kaW5nLnNob3J0SWRdID0gYmluZGluZy5ldmVudHNbZXZlbnROYW1lXTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4ZWN1dGVBbGxDYWxsYmFja3NJbkxpc3QgKGUsIGV2ZW50SGFuZGxlcnMsIGVsZW1lbnQpIHtcclxuICBkZWNvcmF0ZUV2ZW50KGUpO1xyXG4gIHN0YXJ0VHJhbnNhY3Rpb24oKTtcclxuICBcclxuICBsZXQgY3VySFRNTE5vZGUgPSBlLnRhcmdldDtcclxuICB3aGlsZSAoY3VySFRNTE5vZGUgIT09IGVsZW1lbnQuZWwucGFyZW50Tm9kZSkge1xyXG4gICAgY29uc3QgYmluZGluZ0lkID0gY3VySFRNTE5vZGUuZ2V0QXR0cmlidXRlKExJQl9BVFRSLkJJTkRJTkdfSUQpO1xyXG4gICAgY29uc3QgZXZlbnRIYW5kbGVyID0gZXZlbnRIYW5kbGVyc1tiaW5kaW5nSWRdO1xyXG5cclxuICAgIGlmIChldmVudEhhbmRsZXIpIHtcclxuICAgICAgY29uc3QgaW5kZXhsZXNzU3RhdGVQYXRoID0gYmluZGluZ0lkLnNwbGl0KExJQl9BVFRSLlNUQVRFX0RFTElNSVRFUik7XHJcbiAgICAgIGluZGV4bGVzc1N0YXRlUGF0aC5wb3AoKTtcclxuICAgICAgY29uc3Qgc3RhdGVQYXRoVG9JdGVtID0gZ2V0U3RhdGVQYXRoVG9JdGVtKGN1ckhUTUxOb2RlLCBpbmRleGxlc3NTdGF0ZVBhdGgpO1xyXG4gICAgICBjb25zdCBhY2Nlc3NvclRvRGF0YSA9IGNyZWF0ZUFjY2Vzc29yKFtlbGVtZW50LmlkXS5jb25jYXQoc3RhdGVQYXRoVG9JdGVtKSk7XHJcblxyXG4gICAgICBldmVudEhhbmRsZXIuY2FsbCh0aGlzLCBlLCBjdXJIVE1MTm9kZSwgYWNjZXNzb3JUb0RhdGEsICtzdGF0ZVBhdGhUb0l0ZW0uc2xpY2UoLTIpWzBdKTtcclxuXHJcbiAgICAgIGlmIChlLnByb3BhZ2F0aW9uU3RvcHBlZCkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjdXJIVE1MTm9kZSA9IGN1ckhUTUxOb2RlLnBhcmVudE5vZGU7XHJcbiAgfVxyXG5cclxuICBhcHBseUNoYW5nZXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVjb3JhdGVFdmVudCAoZSkge1xyXG4gIGNvbnN0IHN0b3BQcm9wYWdhdGlvbiA9IGUuc3RvcFByb3BhZ2F0aW9uLmJpbmQoZSk7XHJcbiAgZS5zdG9wUHJvcGFnYXRpb24gPSAoKSA9PiB7XHJcbiAgICBlLnByb3BhZ2F0aW9uU3RvcHBlZCA9IHRydWU7XHJcbiAgICBzdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0YXRlUGF0aFRvSXRlbSAoZWwsIGluZGV4bGVzc1N0YXRlUGF0aCkge1xyXG4gIGNvbnN0IHN0YXRlUGF0aCA9IFtdO1xyXG5cclxuICBsZXQgZWxlbWVudE5hbWU7XHJcbiAgd2hpbGUgKChlbGVtZW50TmFtZSA9IGdldFJlYWxOYW1lKCBpbmRleGxlc3NTdGF0ZVBhdGgucG9wKCkgKSkpIHtcclxuXHJcbiAgICBpZiAoaGFzKGVsZW1lbnROYW1lLCBMSUJfQVRUUi5JVEVNKSkge1xyXG4gICAgICBlbGVtZW50TmFtZSA9IGVsZW1lbnROYW1lLnNsaWNlKExJQl9BVFRSLklURU0ubGVuZ3RoKTtcclxuICAgICAgZWwgPSBnZXRUb0l0ZW1Ob2RlKGVsKTtcclxuICAgICAgY29uc3QgaWR4ID0gZWwuZ2V0QXR0cmlidXRlKExJQl9BVFRSLklURU1fSU5ERVgpO1xyXG4gICAgICBlbCA9IGVsLnBhcmVudE5vZGU7XHJcbiAgICAgIHN0YXRlUGF0aC51bnNoaWZ0KGlkeCwgZWxlbWVudE5hbWUpO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0ZVBhdGgudW5zaGlmdChlbGVtZW50TmFtZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RhdGVQYXRoO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUb0l0ZW1Ob2RlIChlbCkge1xyXG4gIGxldCBjdXJFbCA9IGVsO1xyXG5cclxuICB3aGlsZSAoY3VyRWwudGFnTmFtZSAhPT0gJ0JPRFknKSB7XHJcbiAgICBpZiAoY3VyRWwuZ2V0QXR0cmlidXRlKExJQl9BVFRSLklURU1fSU5ERVgpKSB7XHJcbiAgICAgIHJldHVybiBjdXJFbDtcclxuICAgIH1cclxuICAgIGN1ckVsID0gY3VyRWwucGFyZW50Tm9kZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICByZXBsYWNlTm9kZXMsXHJcbiAgY29sbGVjdEhUTUxOb2RlcyxcclxufSBmcm9tICcuL2hlbHBlcnMvZG9tJ1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRDb21wb25lbnRPcHRzLFxyXG4gIGlzQ29tcG9uZW50LFxyXG59IGZyb20gJy4vRGVmaW5pdGlvbic7XHJcblxyXG5pbXBvcnQgeyBzZXR1cEV2ZW50SGFuZGxlcnMgfSBmcm9tICcuL0V2ZW50SGFuZGxlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi9TdGF0ZSc7XHJcblxyXG5leHBvcnQgeyBhcHBseSB9O1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFwcGx5IChyb290RWxlbWVudFNlbGVjdG9yKSB7XHJcbiAgY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJvb3RFbGVtZW50U2VsZWN0b3IpO1xyXG4gIGNvbnN0IEhUTUxOb2RlcyA9IGNvbGxlY3RIVE1MTm9kZXMocm9vdEVsZW1lbnQsIGlzQ29tcG9uZW50KTtcclxuXHJcbiAgSFRNTE5vZGVzLmZvckVhY2goKEhUTUxOb2RlKSA9PiB7XHJcbiAgICBjb25zdCBjb21wb25lbnRPcHRzID0gZ2V0Q29tcG9uZW50T3B0cyhIVE1MTm9kZSk7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gc2V0dXBFbGVtZW50KGNvbXBvbmVudE9wdHMpO1xyXG5cclxuICAgIHJlcGxhY2VOb2RlcyhIVE1MTm9kZSwgZWxlbWVudC5lbCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwRWxlbWVudCAoY29tcG9uZW50T3B0cykge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KGNvbXBvbmVudE9wdHMpO1xyXG4gIHNldHVwRXZlbnRIYW5kbGVycyhlbGVtZW50KTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG4iLCJpbXBvcnQgTElCX0FUVFIgZnJvbSAnLi9nbG9iYWxzL2F0dHJpYnV0ZXMnO1xyXG5cclxuaW1wb3J0IHsgZ2V0LCBzZXQsIGZvckVhY2gsIG1hcCB9IGZyb20gJy4vaGVscGVycy9vYmplY3QnO1xyXG5cclxuaW1wb3J0IHsgaGFzIH0gZnJvbSAnLi9oZWxwZXJzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBSRVNFUlZFRF9CSU5ESU5HX05BTUVTIH0gZnJvbSAnLi9EZWZpbml0aW9uJztcclxuXHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlU3RhdGVOb2RlcyxcclxuICBzZXRWYWx1ZXMsXHJcbiAgbW9kaWZ5TGlzdCxcclxuICBzdGFydFRyYW5zYWN0aW9uLFxyXG4gIHNlbmRUb1JlbmRlclF1ZXVlLFxyXG4gIGFwcGx5Q2hhbmdlcyxcclxufSBmcm9tICcuL1N0YXRlQ2hhbmdlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNBcnJheSxcclxuICBpc1N0cmluZyxcclxuICBpc051bWJlcixcclxuICBpc09iamVjdCxcclxufSBmcm9tICcuL2hlbHBlcnMvY2hlY2tlcnMnO1xyXG5cclxuZXhwb3J0IHtcclxuICBjcmVhdGVFbGVtZW50LFxyXG4gIGNyZWF0ZUFjY2Vzc29yLFxyXG4gIGdldE9ubHlWYWx1ZXMsXHJcbiAgZ2V0Q29tcG9uZW50LFxyXG4gIHNldFN0YXRlLFxyXG4gIHByZXBhcmVDaGFuZ2VPYmplY3QsXHJcbn07XHJcblxyXG5jb25zdCBFTEVNRU5UUyA9IHt9O1xyXG5jb25zdCBTVEFURSA9IHt9O1xyXG5sZXQgRUxFTUVOVF9DT1VOVEVSID0gMTtcclxuXHJcbmZ1bmN0aW9uIHNldFN0YXRlIChwYXRoLCB2YWx1ZSkge1xyXG4gIHNldChTVEFURSwgcGF0aCwgdmFsdWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdGF0ZSAocGF0aCkge1xyXG4gIHJldHVybiBnZXQoU1RBVEUsIHBhdGgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50IChjb21wb25lbnRPcHRzKSB7XHJcbiAgY29uc3QgaWQgPSBFTEVNRU5UX0NPVU5URVIrKztcclxuICBjb25zdCBuYW1lID0gY29tcG9uZW50T3B0cy5uYW1lO1xyXG5cclxuICBjb25zdCBlbGVtZW50ID0gRUxFTUVOVFNbaWRdID0ge1xyXG4gICAgaWQsXHJcbiAgICBzdGF0ZTogeyBbbmFtZV06IGNvbXBvbmVudE9wdHMuY29tcG9uZW50IH0sXHJcbiAgfTtcclxuXHJcbiAgU1RBVEVbaWRdID0ge307XHJcblxyXG4gIGNyZWF0ZVN0YXRlTm9kZXMoW2lkLCBuYW1lXSk7XHJcblxyXG4gIHNlbmRUb1JlbmRlclF1ZXVlKFtpZF0sIHsgW25hbWVdOiBmYWxzZSB9KTtcclxuICBhcHBseUNoYW5nZXMoKTtcclxuICBlbGVtZW50LmVsID0gU1RBVEVbaWRdW25hbWVdW0xJQl9BVFRSLlNFTEZdLmVsO1xyXG4gIGVsZW1lbnQuZWwuc2V0QXR0cmlidXRlKExJQl9BVFRSLkNPTVBPTkVOVF9UWVBFLCBMSUJfQVRUUi5CQVNFKTtcclxuXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFjY2Vzc29yIChwYXRoKSB7XHJcbiAgY29uc3QgdmFsdWVzID0gZ2V0U3RhdGUocGF0aCk7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gZ2V0Q29tcG9uZW50KHBhdGgpO1xyXG5cclxuICBjb25zdCBhY2Nlc3NvciA9IHtcclxuICAgIGNvbXBvbmVudCxcclxuICAgIHZhbHVlcyxcclxuICAgIHBhdGgsXHJcbiAgICBzdGFydFRyYW5zYWN0aW9uLFxyXG4gICAgYXBwbHlDaGFuZ2VzLFxyXG4gICAgdXA6IChsZXZlbCkgPT4gbW92ZVVwU3RhdGVQYXRoKGxldmVsLCBwYXRoLnNsaWNlKCkpLFxyXG4gICAgZG93bjogKGFkZGl0aW9uYWxQYXRoKSA9PiBjcmVhdGVBY2Nlc3NvcihwYXRoLmNvbmNhdChhZGRpdGlvbmFsUGF0aCkpLFxyXG4gICAgc2V0OiAoY2hhbmdlT2JqKSA9PiBzZXRWYWx1ZXMoIHByZXBhcmVDaGFuZ2VPYmplY3QoY2hhbmdlT2JqKSwgcGF0aCksXHJcbiAgICBnZXQ6IChrZXkpID0+IGdldFZhbHVlcyhhY2Nlc3Nvciwga2V5LCBwYXRoKSxcclxuICAgIG1hcmt1cDogKGtleSkgPT4ga2V5ID8gYWNjZXNzb3IudmFsdWVzW2tleV0uZWwgOiBhY2Nlc3Nvci52YWx1ZXNbTElCX0FUVFIuU0VMRl0uZWwsXHJcbiAgfVxyXG5cclxuICBpZiAoaXNBcnJheSh2YWx1ZXMpKSB7XHJcbiAgICBtb2RpZnlUb0FycmF5QWNjZXNzb3IoYWNjZXNzb3IpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGFjY2Vzc29yO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVwYXJlQ2hhbmdlT2JqZWN0IChjaGFuZ2VPYmopIHtcclxuICByZXR1cm4gbWFwKGNoYW5nZU9iaiwgKHYpID0+IHtcclxuICAgIGNvbnN0IGZvcmNlZCA9IGlzT2JqZWN0KHYpICYmIE9iamVjdC5rZXlzKHYpWzBdID09PSAnZm9yY2UnO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZhbHVlOiBmb3JjZWQgPyB2Wydmb3JjZSddIDogdixcclxuICAgICAgdHlwZTogJ3ZhbHVlJyxcclxuICAgICAgZm9yY2U6IGZvcmNlZCxcclxuICAgIH07XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvbXBvbmVudCAocGF0aCkge1xyXG4gIGxldCBjb21wb25lbnQgPSBFTEVNRU5UU1sgcGF0aFswXSBdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMTsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbXBvbmVudCA9IGNvbXBvbmVudC5zdGF0ZVsgcGF0aFtpXSBdO1xyXG4gICAgXHJcbiAgICBpZiAoY29tcG9uZW50LmlzTGlzdCAmJiBpICE9PSAocGF0aC5sZW5ndGggLTEpKSB7XHJcbiAgICAgIGNvbXBvbmVudCA9IGNvbXBvbmVudC5saXN0SXRlbTtcclxuICAgICAgaSs9MjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE9ubHlWYWx1ZXMgKG9iaikge1xyXG4gIHJldHVybiBtYXAob2JqLCAoYmluZGluZ1ZhbHVlcykgPT4gYmluZGluZ1ZhbHVlc1sndmFsdWUnXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZhbHVlcyAoYWNjZXNzb3IsIGtleSwgc3RhdGVQYXRoKSB7XHJcbiAgY29uc3QgdmFsdWVzID0gYWNjZXNzb3IudmFsdWVzO1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IGFjY2Vzc29yLmNvbXBvbmVudDtcclxuXHJcbiAgaWYgKCFrZXkpIHtcclxuICAgIHJldHVybiBnZXRWYWx1ZXNUcmVlKHZhbHVlcywgY29tcG9uZW50LCB7fSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBiaW5kaW5nID0gY29tcG9uZW50LnN0YXRlW2tleV07XHJcbiAgaWYgKGJpbmRpbmcuaXNMaXN0IHx8IGJpbmRpbmcuaXNDb21wb25lbnQpIHtcclxuICAgIHJldHVybiBjcmVhdGVBY2Nlc3NvcihzdGF0ZVBhdGguY29uY2F0KGtleSkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHZhbHVlc1trZXldLnZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWYWx1ZXNUcmVlICh2YWx1ZXMsIGNvbXBvbmVudCwgdmFsdWVzVHJlZSkge1xyXG4gIGZvckVhY2godmFsdWVzLCAodmFscywgYmluZGluZ05hbWUpID0+IHtcclxuICAgIGlmIChoYXMoUkVTRVJWRURfQklORElOR19OQU1FUywgYmluZGluZ05hbWUpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiaW5kaW5nID0gY29tcG9uZW50LnN0YXRlW2JpbmRpbmdOYW1lXTtcclxuXHJcbiAgICBpZiAoYmluZGluZy5pc0xpc3QpIHtcclxuICAgICAgdmFsdWVzVHJlZVtiaW5kaW5nTmFtZV0gPSBbXTtcclxuICAgICAgdmFsdWVzW2JpbmRpbmdOYW1lXS5mb3JFYWNoKChlbCwgaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1WYWx1ZXMgPSB2YWx1ZXNUcmVlW2JpbmRpbmdOYW1lXVtpXSA9IHt9O1xyXG4gICAgICAgIGdldFZhbHVlc1RyZWUodmFsdWVzW2JpbmRpbmdOYW1lXVtpXVtiaW5kaW5nLmxpc3RJdGVtLm5hbWVdLCBiaW5kaW5nLmxpc3RJdGVtLCBpdGVtVmFsdWVzKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYmluZGluZy5pc0NvbXBvbmVudCkge1xyXG4gICAgICBjb25zdCBjb21wb25lbnRWYWx1ZXMgPSB2YWx1ZXNUcmVlW2JpbmRpbmdOYW1lXSA9IHt9O1xyXG4gICAgICBnZXRWYWx1ZXNUcmVlKHZhbHVlc1tiaW5kaW5nTmFtZV0sIGJpbmRpbmcsIGNvbXBvbmVudFZhbHVlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWVzVHJlZVsgY29tcG9uZW50Ll9saW5rc1tiaW5kaW5nTmFtZV0gfHwgYmluZGluZ05hbWUgXSA9IHZhbHMudmFsdWU7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB2YWx1ZXNUcmVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb3ZlVXBTdGF0ZVBhdGggKGxldmVsLCBzdGF0ZVBhdGgpIHtcclxuICBsZXQgbGFzdElkeCA9IHN0YXRlUGF0aC5sZW5ndGg7XHJcblxyXG4gIGlmIChsZXZlbCA9PT0gJycpIHtcclxuICAgIHJldHVybiBjcmVhdGVBY2Nlc3NvcihzdGF0ZVBhdGguc2xpY2UoMCwgMikpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzU3RyaW5nKGxldmVsKSkge1xyXG4gICAgd2hpbGUgKGxhc3RJZHgtLSkge1xyXG4gICAgICBpZiAoc3RhdGVQYXRoW2xhc3RJZHhdID09PSBsZXZlbCkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNyZWF0ZUFjY2Vzc29yKHN0YXRlUGF0aC5zbGljZSgwLCBsYXN0SWR4ICsgMSkpO1xyXG4gIH1cclxuXHJcbiAgbGV2ZWwgPSBsZXZlbCB8fCAxO1xyXG4gIHdoaWxlIChsYXN0SWR4LS0gJiYgbGV2ZWwtLSkge1xyXG4gICAgaWYgKGlzTnVtYmVyKCtzdGF0ZVBhdGhbbGFzdElkeCAtIDFdKSkge1xyXG4gICAgICBsYXN0SWR4LS07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoLnNsaWNlKDAsIGxhc3RJZHggKyAxKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vZGlmeVRvQXJyYXlBY2Nlc3NvciAoYWNjZXNzb3IpIHtcclxuICBPYmplY3QuYXNzaWduKGFjY2Vzc29yLCB7XHJcbiAgICBnZXQ6IChudW0pID0+IGNyZWF0ZUFjY2Vzc29yKGFjY2Vzc29yLnBhdGguY29uY2F0KG51bSwgYWNjZXNzb3IuY29tcG9uZW50Lmxpc3RJdGVtLm5hbWUpKSxcclxuXHJcbiAgICBwdXNoOiAoZWxzKSA9PiBtb2RpZnlMaXN0KCdhZGQnLCB7IHN0YXJ0OiBhY2Nlc3Nvci52YWx1ZXMubGVuZ3RoLCBlbHMgfSwgYWNjZXNzb3IpLFxyXG4gICAgdW5zaGlmdDogKGVscykgPT4gbW9kaWZ5TGlzdCgnYWRkJywgeyBzdGFydDogMCwgZWxzIH0sIGFjY2Vzc29yKSxcclxuICAgIGFkZDogKHN0YXJ0LCBlbHMpID0+IG1vZGlmeUxpc3QoJ2FkZCcsIHsgc3RhcnQsIGVscyB9LCBhY2Nlc3NvciksXHJcblxyXG4gICAgcG9wOiAobnVtKSA9PiBtb2RpZnlMaXN0KCdyZW1vdmUnLCB7IHN0YXJ0OiBhY2Nlc3Nvci52YWx1ZXMubGVuZ3RoIC0gKG51bSB8fCAxKSwgbnVtIH0sIGFjY2Vzc29yKSxcclxuICAgIHNoaWZ0OiAobnVtKSA9PiBtb2RpZnlMaXN0KCdyZW1vdmUnLCB7IHN0YXJ0OiAwLCBudW0gfSwgYWNjZXNzb3IpLFxyXG4gICAgcmVtb3ZlOiAoc3RhcnQsIG51bSkgPT4gbW9kaWZ5TGlzdCgncmVtb3ZlJywgeyBzdGFydCwgbnVtIH0sIGFjY2Vzc29yKSxcclxuXHJcbiAgICBsZW5ndGg6ICgpID0+IGFjY2Vzc29yLnZhbHVlcy5sZW5ndGgsXHJcbiAgICB2YWx1ZTogKCkgPT4gbWFwTGlzdChhY2Nlc3NvciksXHJcbiAgICBmb3JFYWNoOiAoY2IpID0+IGl0ZXJhdGVMaXN0VmFsdWVzKGFjY2Vzc29yLCBjYiksXHJcbiAgICBmaWx0ZXI6IChjYikgPT4gZmlsdGVyTGlzdChhY2Nlc3NvciwgY2IpLFxyXG4gICAgbWFwOiAoY2IpID0+IG1hcExpc3QoYWNjZXNzb3IsIGNiKSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXRlcmF0ZUxpc3RWYWx1ZXMgKGFjY2Vzc29yLCBjYikge1xyXG4gIGFjY2Vzc29yLnZhbHVlcy5mb3JFYWNoKChlbCwgaSkgPT5cclxuICAgIGNiKFxyXG4gICAgICBnZXRWYWx1ZXNUcmVlKGVsW2FjY2Vzc29yLmNvbXBvbmVudC5saXN0SXRlbS5uYW1lXSwgYWNjZXNzb3IuY29tcG9uZW50Lmxpc3RJdGVtLCB7fSksXHJcbiAgICAgIGlcclxuICApKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyTGlzdCAoYWNjZXNzb3IsIGNiKSB7XHJcbiAgY29uc3QgbmV3TGlzdCA9IFtdO1xyXG5cclxuICBpdGVyYXRlTGlzdFZhbHVlcyhhY2Nlc3NvciwgKGVsLCBpKSA9PiB7XHJcbiAgICBpZiAoY2IoZWwsIGkpKSB7XHJcbiAgICAgIG5ld0xpc3QucHVzaChlbCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBuZXdMaXN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBMaXN0IChhY2Nlc3NvciwgY2IpIHtcclxuICBjb25zdCBuZXdMaXN0ID0gW107XHJcbiAgaXRlcmF0ZUxpc3RWYWx1ZXMoYWNjZXNzb3IsIChlbCwgaSkgPT4gbmV3TGlzdC5wdXNoKCBjYiA/IGNiKGVsLCBpKSA6IGVsICkpO1xyXG4gIHJldHVybiBuZXdMaXN0O1xyXG59XHJcbiIsImltcG9ydCBMSUJfQVRUUiBmcm9tICcuL2dsb2JhbHMvYXR0cmlidXRlcyc7XHJcblxyXG5pbXBvcnQgeyBzZXQsIGZvckVhY2gsIG1hcCwgdG9PYmplY3QgfSBmcm9tICcuL2hlbHBlcnMvb2JqZWN0JztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNFbXB0eSxcclxuICBpc0FycmF5LFxyXG4gIGlzT2JqZWN0LFxyXG59IGZyb20gJy4vaGVscGVycy9jaGVja2Vycyc7XHJcblxyXG5pbXBvcnQgYXJlRXF1YWwgZnJvbSAnLi9oZWxwZXJzL2VxdWFsaXR5JztcclxuaW1wb3J0IHsgaGFzIH0gZnJvbSAnLi9oZWxwZXJzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldENvbXBvbmVudCxcclxuICBjcmVhdGVBY2Nlc3NvcixcclxuICBwcmVwYXJlQ2hhbmdlT2JqZWN0LFxyXG4gIGdldE9ubHlWYWx1ZXMsXHJcbiAgc2V0U3RhdGUsXHJcbn0gZnJvbSAnLi9TdGF0ZSc7XHJcblxyXG5pbXBvcnQgeyByZW5kZXJDaGFuZ2VzIH0gZnJvbSAnLi9WaWV3JztcclxuXHJcbmltcG9ydCB7IFZBTFVFX1RZUEVTIH0gZnJvbSAnLi9EZWZpbml0aW9uJztcclxuXHJcbmltcG9ydCBCaW5kaW5nTm90RXhpc3RzRXJyb3IgZnJvbSAnLi9lcnJvcnMvQmluZGluZ05vdEV4aXN0c0Vycm9yJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgc2V0VmFsdWVzLFxyXG4gIGNyZWF0ZVN0YXRlTm9kZXMsXHJcbiAgbW9kaWZ5TGlzdCxcclxuICBzdGFydFRyYW5zYWN0aW9uLFxyXG4gIGFwcGx5Q2hhbmdlcyxcclxuICBzZW5kVG9SZW5kZXJRdWV1ZSxcclxufTtcclxuXHJcbmNvbnN0IENIQU5HRVMgPSB7IGNoYW5nZXM6IHt9LCBjb2xsZWN0aW5nOiBmYWxzZSB9O1xyXG5jb25zdCBQUk9NSVNFU19SRVNPTFZFUyA9IFtdO1xyXG5jb25zdCBMSUZFX0NZQ0xFX0hBTkRMRVJTID0geyBsaXN0OiBbXSB9O1xyXG5cclxuZnVuY3Rpb24gc3RhcnRUcmFuc2FjdGlvbiAoKSB7XHJcbiAgYXBwbHlDaGFuZ2VzKCk7XHJcbiAgQ0hBTkdFUy5jb2xsZWN0aW5nID0gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlDaGFuZ2VzICgpIHtcclxuICBjb25zdCBjaGFuZ2VzID0gQ0hBTkdFUy5jaGFuZ2VzO1xyXG4gIENIQU5HRVMuY2hhbmdlcyA9IHt9O1xyXG4gIHJlbmRlckNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgcmV0dXJuIHJ1bkxpZmVDeWNsZUhvb2tzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJ1bkxpZmVDeWNsZUhvb2tzICgpIHtcclxuICBjb25zdCBsaWZlQ3ljbGVIYW5kbGVycyA9IExJRkVfQ1lDTEVfSEFORExFUlMubGlzdDtcclxuICBMSUZFX0NZQ0xFX0hBTkRMRVJTLmxpc3QgPSBbXTtcclxuICBsaWZlQ3ljbGVIYW5kbGVycy5mb3JFYWNoKChoKSA9PiBoKCkpO1xyXG5cclxuICBpZiAoIWlzRW1wdHkoQ0hBTkdFUy5jaGFuZ2VzKSkge1xyXG4gICAgcmV0dXJuIGFwcGx5Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZpbmFsaXplVHJhbnNhY3Rpb24oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmluYWxpemVUcmFuc2FjdGlvbiAoKSB7XHJcbiAgQ0hBTkdFUy5jb2xsZWN0aW5nID0gZmFsc2U7XHJcbiAgbGV0IHJlc29sdmVQcm9taXNlO1xyXG5cclxuICB3aGlsZSAoKHJlc29sdmVQcm9taXNlID0gUFJPTUlTRVNfUkVTT0xWRVMucG9wKCkpKSB7XHJcbiAgICByZXNvbHZlUHJvbWlzZSh0cnVlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRUb1JlbmRlclF1ZXVlIChwYXRoLCBjaGFuZ2UpIHtcclxuICBzZXQoQ0hBTkdFUy5jaGFuZ2VzLCBwYXRoLCBjaGFuZ2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0NvbGxlY3RpbmdDaGFuZ2VzICgpIHtcclxuICByZXR1cm4gQ0hBTkdFUy5jb2xsZWN0aW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRMaWZlQ3ljbGVIb29rIChob29rVHlwZSwgYmluZGluZywgdmFsdWVzLCBhY2Nlc3NvciwgaWR4KSB7XHJcbiAgY29uc3QgaG9vayA9IGJpbmRpbmcuaG9va3NbaG9va1R5cGVdO1xyXG4gIFxyXG4gIExJRkVfQ1lDTEVfSEFORExFUlMubGlzdC5wdXNoKCgpID0+IHtcclxuICAgIGNvbnN0IGVsID0gdmFsdWVzW2JpbmRpbmcubmFtZSB8fCBMSUJfQVRUUi5TRUxGXS5lbDtcclxuICAgIGNvbnN0IHZhbHMgPSAhYmluZGluZy5uYW1lID8gZ2V0T25seVZhbHVlcyh2YWx1ZXMpIDogdmFsdWVzW2JpbmRpbmcubmFtZV0udmFsdWU7XHJcbiAgICBob29rKGVsLCB2YWxzLCBhY2Nlc3NvciwgaWR4KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3RhdGVOb2RlcyAoc3RhdGVQYXRoKSB7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gZ2V0Q29tcG9uZW50KHN0YXRlUGF0aCk7XHJcbiAgY29uc3QgdmFsdWVzTm9kZSA9IGNyZWF0ZVN0YXRlTm9kZShjb21wb25lbnQpO1xyXG4gIHNldFN0YXRlKHN0YXRlUGF0aCwgdmFsdWVzTm9kZSk7XHJcblxyXG4gIGZvckVhY2goY29tcG9uZW50LnN0YXRlLCAoYmluZGluZywgYmluZGluZ05hbWUpID0+IHtcclxuICAgIGlmIChiaW5kaW5nLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgIGNyZWF0ZVN0YXRlTm9kZXMoc3RhdGVQYXRoLmNvbmNhdChiaW5kaW5nTmFtZSkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBhY2Nlc3NvciA9IGNyZWF0ZUFjY2Vzc29yKHN0YXRlUGF0aCk7XHJcbiAgYWRkTGlmZUN5Y2xlSG9vaygnbW91bnQnLCBjb21wb25lbnQuc3RhdGVbTElCX0FUVFIuU0VMRl0sIHZhbHVlc05vZGUsIGFjY2Vzc29yLCBzdGF0ZVBhdGguc2xpY2UoLTIpWzBdKTtcclxuXHJcbiAgcmV0dXJuIHZhbHVlc05vZGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0YXRlTm9kZSAoY29tcG9uZW50KSB7XHJcbiAgY29uc3QgdmFsdWVzTm9kZXMgPSBtYXAoY29tcG9uZW50LnN0YXRlLCAoYmluZGluZykgPT4ge1xyXG4gICAgY29uc3QgdmFsdWVOb2RlID0gYmluZGluZy5pc0xpc3QgPyBbXSA6IHt9O1xyXG5cclxuICAgIHJldHVybiBWQUxVRV9UWVBFUy5yZWR1Y2UoKGEsIGtleSkgPT4ge1xyXG4gICAgICBsZXQgdmFsdWU7XHJcblxyXG4gICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2UgJ3ZhbHVlJzpcclxuICAgICAgICBjYXNlICdodG1sJzpcclxuICAgICAgICAgIHZhbHVlID0gYmluZGluZy5pbml0VmFsdWUgfHwgJydcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdmFsdWUgPSB7fTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYVtrZXldID0gdmFsdWU7XHJcblxyXG4gICAgICByZXR1cm4gYTtcclxuICAgIH0sIHZhbHVlTm9kZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHZhbHVlc05vZGVzLCB7IFtMSUJfQVRUUi5TRUxGXTogdG9PYmplY3QoVkFMVUVfVFlQRVMsIHt9KSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VmFsdWVzIChjaGFuZ2VWYWx1ZXMsIHN0YXRlUGF0aCwgY2FsbGVkRGVwZW5kZW5jZXMpIHtcclxuICBjYWxsZWREZXBlbmRlbmNlcyA9IGNhbGxlZERlcGVuZGVuY2VzIHx8IFtdO1xyXG4gIGNvbnN0IGFjY2Vzc29yID0gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoKTtcclxuXHJcbiAgaWYgKCFhY2Nlc3Nvci52YWx1ZXMpIHtcclxuICAgIGFjY2Vzc29yLnZhbHVlcyA9IGNyZWF0ZVN0YXRlTm9kZXMoc3RhdGVQYXRoKTtcclxuICAgIGNvbnN0IHN0YXJ0ID0gK3N0YXRlUGF0aC5zbGljZSgtMilbMF07XHJcbiAgICBzZW5kVG9SZW5kZXJRdWV1ZShzdGF0ZVBhdGgsIHsgW0xJQl9BVFRSLkZVTExfQ0hBTkdFXTogeyBhZGQ6IHsgc3RhcnQsIGVuZDogc3RhcnQgKyAxIH0gfSB9KVxyXG4gIH1cclxuXHJcbiAgZm9yRWFjaChjaGFuZ2VWYWx1ZXMsIChjaGFuZ2UsIGJpbmRpbmdOYW1lKSA9PiBzZXRWYWx1ZShiaW5kaW5nTmFtZSwgY2hhbmdlLCBhY2Nlc3NvciwgY2FsbGVkRGVwZW5kZW5jZXMpKTtcclxuXHJcbiAgYWRkTGlmZUN5Y2xlSG9vaygndXBkYXRlJywgYWNjZXNzb3IuY29tcG9uZW50LnN0YXRlW0xJQl9BVFRSLlNFTEZdLCBhY2Nlc3Nvci52YWx1ZXMsIGFjY2Vzc29yLCBzdGF0ZVBhdGguc2xpY2UoLTIpWzBdKTtcclxuXHJcbiAgaWYgKGlzQ29sbGVjdGluZ0NoYW5nZXMoKSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IFBST01JU0VTX1JFU09MVkVTLnB1c2gocmVzKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXBwbHlDaGFuZ2VzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFZhbHVlIChiaW5kaW5nTmFtZSwgY2hhbmdlLCBhY2Nlc3NvciwgY2FsbGVkRGVwZW5kZW5jZXMpIHtcclxuICBjb25zdCBzdGF0ZVBhdGggPSBhY2Nlc3Nvci5wYXRoO1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IGFjY2Vzc29yLmNvbXBvbmVudDtcclxuICBjb25zdCB2YWx1ZXMgPSBhY2Nlc3Nvci52YWx1ZXM7XHJcbiAgbGV0IGJpbmRpbmcgPSBjb21wb25lbnQuc3RhdGVbYmluZGluZ05hbWVdO1xyXG5cclxuICBpZiAoIWJpbmRpbmcpIHtcclxuICAgIGJpbmRpbmdOYW1lID0gY29tcG9uZW50Lm91dGVyTmFtZXNbYmluZGluZ05hbWVdO1xyXG4gICAgYmluZGluZyA9IGNvbXBvbmVudC5zdGF0ZVtiaW5kaW5nTmFtZV07XHJcbiAgfVxyXG5cclxuICBpZiAoIWJpbmRpbmcpIHtcclxuICAgIHRocm93IG5ldyBCaW5kaW5nTm90RXhpc3RzRXJyb3IoYmluZGluZ05hbWUsIGNvbXBvbmVudC5uYW1lLCBzdGF0ZVBhdGgpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNoYW5nZS50eXBlID09PSAndmFsdWUnKSB7XHJcbiAgICBpZiAoYmluZGluZy5pc0xpc3QpIHtcclxuICAgICAgcmV0dXJuIHNldFZhbHVlRm9yTGlzdChiaW5kaW5nLCBjaGFuZ2UsIHZhbHVlc1tiaW5kaW5nTmFtZV0sIGFjY2Vzc29yKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNPYmplY3QoY2hhbmdlLnZhbHVlKSAmJiBiaW5kaW5nLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgIHJldHVybiBzZXRWYWx1ZUZvckNvbXBvbmVudChiaW5kaW5nLCBjaGFuZ2UsIGNvbXBvbmVudCwgc3RhdGVQYXRoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGVxdWFsID0gYXJlRXF1YWwodmFsdWVzW2JpbmRpbmdOYW1lXVtjaGFuZ2UudHlwZV0sIGNoYW5nZS52YWx1ZSk7XHJcblxyXG4gIGlmICghZXF1YWwgfHwgIWlzRW1wdHkoZXF1YWwpIHx8IGNoYW5nZS5mb3JjZSkge1xyXG4gICAgdmFsdWVzW2JpbmRpbmdOYW1lXVtjaGFuZ2UudHlwZV0gPSBjaGFuZ2UudmFsdWU7XHJcblxyXG4gICAgaWYgKGNoYW5nZS50eXBlICE9PSAndmFsdWUnKSB7XHJcbiAgICAgIHJldHVybiBzZW5kVG9SZW5kZXJRdWV1ZShzdGF0ZVBhdGguY29uY2F0KGJpbmRpbmdOYW1lKSwgeyBbY2hhbmdlLnR5cGVdOiBmYWxzZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaWZlQ3ljbGVIb29rKCd1cGRhdGUnLCBiaW5kaW5nLCB2YWx1ZXMsIGFjY2Vzc29yLCBzdGF0ZVBhdGguc2xpY2UoLTIpWzBdKTtcclxuICAgIGNhbGxlZERlcGVuZGVuY2VzLnB1c2goYmluZGluZ05hbWUgKyAnOicgKyBjaGFuZ2UudHlwZSk7XHJcblxyXG4gICAgaWYgKCFiaW5kaW5nLmh0bWwpIHtcclxuICAgICAgc2V0VmFsdWUoYmluZGluZ05hbWUsIHsgdmFsdWU6IGNoYW5nZS52YWx1ZSwgdHlwZTogJ2h0bWwnLCBmb3JjZTogY2hhbmdlLmZvcmNlIH0sIGFjY2Vzc29yLCBjYWxsZWREZXBlbmRlbmNlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGluayA9IGNvbXBvbmVudC5saW5rc1tiaW5kaW5nTmFtZV07XHJcbiAgICBpZiAobGluaykge1xyXG4gICAgICBzZXRWYWx1ZShsaW5rLmxpbmssIHsgdmFsdWU6IGNoYW5nZS52YWx1ZSwgdHlwZTogJ3ZhbHVlJywgZm9yY2U6IGNoYW5nZS5mb3JjZSB9LCBhY2Nlc3Nvci5kb3duKGxpbmsuY29tcG9uZW50KSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIGZvckVhY2goYmluZGluZy5kZXBlbmRhbnRzLCAoZGVwZW5kYW50LCBkZXBlbmRhbnRLZXkpID0+IHtcclxuICAgICAgaWYgKGhhcyhjYWxsZWREZXBlbmRlbmNlcywgZGVwZW5kYW50S2V5KSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbmV3VmFsdWUgPSBjb21wb25lbnQuc3RhdGVbZGVwZW5kYW50Lm5hbWVdLmV2YWx1YXRlW2RlcGVuZGFudC50eXBlXSh2YWx1ZXMsIGFjY2Vzc29yKTtcclxuICAgICAgc2V0VmFsdWUoZGVwZW5kYW50Lm5hbWUsIHsgdmFsdWU6IG5ld1ZhbHVlLCB0eXBlOiBkZXBlbmRhbnQudHlwZSB9LCBhY2Nlc3NvciwgY2FsbGVkRGVwZW5kZW5jZXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRWYWx1ZUZvckxpc3QgKGJpbmRpbmcsIGNoYW5nZSwgYXJyLCBhY2Nlc3Nvcikge1xyXG4gIE9iamVjdFxyXG4gICAgLmtleXMoY2hhbmdlLnZhbHVlKVxyXG4gICAgLmZvckVhY2goKGkpID0+IHNldFZhbHVlcyggcHJlcGFyZUNoYW5nZU9iamVjdChjaGFuZ2UudmFsdWVbaV0pLCBhY2Nlc3Nvci5wYXRoLmNvbmNhdChiaW5kaW5nLm5hbWUsIGksIGJpbmRpbmcubGlzdEl0ZW0ubmFtZSkpKTtcclxuXHJcbiAgY29uc3QgaW5kZXhFcXVhbGl0eSA9IGFyZUVxdWFsKGFyciwgY2hhbmdlLnZhbHVlKTtcclxuICBmb3JFYWNoKGluZGV4RXF1YWxpdHksIChjaGFuZ2VPYmosIGlkeCkgPT4ge1xyXG4gICAgaWYgKGNoYW5nZU9iai5yZW1vdmUpIHtcclxuICAgICAgY2hhbmdlT2JqLnJlbW92ZSA9IHJlbW92ZUxpc3RJdGVtKGFyciwgaWR4LCBiaW5kaW5nLCBhY2Nlc3Nvcik7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZFRvUmVuZGVyUXVldWUoYWNjZXNzb3IucGF0aC5jb25jYXQoYmluZGluZy5uYW1lLCBpZHgsIGJpbmRpbmcubGlzdEl0ZW0ubmFtZSksIHsgW0xJQl9BVFRSLkZVTExfQ0hBTkdFXTogY2hhbmdlT2JqIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRWYWx1ZUZvckNvbXBvbmVudCAoYmluZGluZywgY2hhbmdlLCBjb21wb25lbnQsIHN0YXRlUGF0aCkge1xyXG4gIHNldFZhbHVlcyggcHJlcGFyZUNoYW5nZU9iamVjdChjaGFuZ2UudmFsdWUpLCBzdGF0ZVBhdGguY29uY2F0KGJpbmRpbmcubmFtZSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb2RpZnlMaXN0IChhY3Rpb24sIGFyZ3MsIGFjY2Vzc29yKSB7XHJcbiAgY29uc3QgYXJyID0gYWNjZXNzb3IudmFsdWVzO1xyXG4gIGNvbnN0IGxpc3RQYXRoID0gYWNjZXNzb3IucGF0aDtcclxuICBjb25zdCBpdGVtTmFtZSA9IGFjY2Vzc29yLmNvbXBvbmVudC5saXN0SXRlbS5uYW1lO1xyXG4gIGNvbnN0IHN0YXJ0ID0gYXJncy5zdGFydDtcclxuICBsZXQgY2hhbmdlT2JqID0ge307XHJcblxyXG4gIHN3aXRjaCAoYWN0aW9uKSB7XHJcbiAgICBjYXNlICdhZGQnOlxyXG4gICAgICBjaGFuZ2VPYmogPSBhZGRUb0xpc3QoYXJyLCBzdGFydCwgYXJncy5lbHMsIGxpc3RQYXRoLCBpdGVtTmFtZSk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgJ3JlbW92ZSc6XHJcbiAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgKGFyZ3MubnVtIHx8IDEpO1xyXG4gICAgICBjaGFuZ2VPYmogPSByZW1vdmVGcm9tTGlzdChhcnIsIHN0YXJ0LCBlbmQsIGFjY2Vzc29yLmNvbXBvbmVudCwgYWNjZXNzb3IpO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGZvckVhY2goY2hhbmdlT2JqLCAoY2hhbmdlLCBpZHgpID0+IHNlbmRUb1JlbmRlclF1ZXVlKGxpc3RQYXRoLmNvbmNhdChpZHgsIGl0ZW1OYW1lLCBMSUJfQVRUUi5GVUxMX0NIQU5HRSksIGNoYW5nZU9ialtpZHhdW0xJQl9BVFRSLkZVTExfQ0hBTkdFXSkpO1xyXG5cclxuICBpZiAoaXNDb2xsZWN0aW5nQ2hhbmdlcygpKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4gUFJPTUlTRVNfUkVTT0xWRVMucHVzaChyZXMpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBhcHBseUNoYW5nZXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVG9MaXN0IChhcnIsIHN0YXJ0LCBlbHMsIGxpc3RQYXRoLCBpdGVtTmFtZSkge1xyXG4gIGVscyA9IGlzQXJyYXkoZWxzKSA/IGVscyA6IFtlbHNdO1xyXG5cclxuICBlbHMuZm9yRWFjaCgoZWwsIGkpID0+IHtcclxuICAgIGFyci5zcGxpY2UoaSArIHN0YXJ0LCAwLCBudWxsKTtcclxuICAgIHNldFZhbHVlcyhwcmVwYXJlQ2hhbmdlT2JqZWN0KGVsKSwgbGlzdFBhdGguY29uY2F0KGkgKyBzdGFydCwgaXRlbU5hbWUpKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHsgW3N0YXJ0XTogeyBbTElCX0FUVFIuRlVMTF9DSEFOR0VdOiB7IGFkZDogeyBzdGFydCwgZW5kOiBzdGFydCArIGVscy5sZW5ndGggfSB9IH0gfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRnJvbUxpc3QgKGFyciwgc3RhcnQsIGVuZCwgbGlzdEJpbmRpbmcsIGFjY2Vzc29yKSB7XHJcbiAgY29uc3QgY2hhbmdlT2JqID0ge307XHJcblxyXG4gIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XHJcbiAgICBjb25zdCByZW1vdmVkRE9NTm9kZSA9IHJlbW92ZUxpc3RJdGVtKGFyciwgaSwgbGlzdEJpbmRpbmcsIGFjY2Vzc29yKTtcclxuICAgIGNoYW5nZU9ialtpXSA9IHsgW0xJQl9BVFRSLkZVTExfQ0hBTkdFXTogeyByZW1vdmU6IHJlbW92ZWRET01Ob2RlIH0gfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNoYW5nZU9iajtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlTGlzdEl0ZW0gKGFyciwgaWR4LCBsaXN0QmluZGluZywgYWNjZXNzb3IpIHtcclxuICBjb25zdCByZW1vdmVkTm9kZSA9IGFyci5zcGxpY2UoaWR4LCAxKVswXVtsaXN0QmluZGluZy5saXN0SXRlbS5uYW1lXTtcclxuICBhZGRMaWZlQ3ljbGVIb29rKCdyZW1vdmUnLCBsaXN0QmluZGluZy5saXN0SXRlbS5zdGF0ZVtMSUJfQVRUUi5TRUxGXSwgcmVtb3ZlZE5vZGUsIGFjY2Vzc29yLCBpZHgpO1xyXG4gIHJldHVybiByZW1vdmVkTm9kZVtMSUJfQVRUUi5TRUxGXS5lbDtcclxufVxyXG4iLCJpbXBvcnQgTElCX0FUVFIgZnJvbSAnLi9nbG9iYWxzL2F0dHJpYnV0ZXMnO1xyXG5pbXBvcnQgeyB0b0Rhc2hDYXNlIH0gZnJvbSAnLi9oZWxwZXJzL2NvbW1vbic7XHJcbmltcG9ydCB7IGZvckVhY2gsIHNwbGl0UGllY2UgfSBmcm9tICcuL2hlbHBlcnMvb2JqZWN0JztcclxuXHJcbmltcG9ydCB7IGlzTnVtYmVyLCBpc1VuZGVmaW5lZCB9IGZyb20gJy4vaGVscGVycy9jaGVja2Vycyc7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVBY2Nlc3NvciB9IGZyb20gJy4vU3RhdGUnO1xyXG5cclxuaW1wb3J0IHtcclxuICByZXBsYWNlTm9kZXMsXHJcbiAgcmVtb3ZlTm9kZSxcclxuICByZXdyaXRlVG9Ob2RlLFxyXG4gIGVtcHR5Tm9kZSxcclxufSBmcm9tICcuL2hlbHBlcnMvZG9tJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgY3JlYXRlQW5kQXBwZW5kU3R5bGVzLFxyXG4gIHJlbmRlckNoYW5nZXNcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlciA9IHtcclxuICBodG1sOiBhcHBseU1hcmt1cCxcclxuICBjbGFzczogYXBwbHlDbGFzc2VzLFxyXG4gIHN0eWxlOiBhcHBseVN0eWxlcyxcclxuICBhdHRyczogYXBwbHlBdHRyaWJ1dGVzLFxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDaGFuZ2VzIChjaGFuZ2VzKSB7XHJcbiAgZm9yRWFjaChjaGFuZ2VzLCAoY29tcG9uZW50Q2hhbmdlcywgZWxlbWVudElkKSA9PiB7XHJcbiAgICBjb25zdCBjb21wb25lbnRJZCA9IE9iamVjdC5rZXlzKGNvbXBvbmVudENoYW5nZXMpWzBdXHJcbiAgICBjb25zdCBjb21wb25lbnRBY2Nlc3NvciA9IGNyZWF0ZUFjY2Vzc29yKFtlbGVtZW50SWQsIGNvbXBvbmVudElkXSk7XHJcbiAgICBhcHBseU1hcmt1cChjb21wb25lbnRBY2Nlc3Nvci5jb21wb25lbnQsIGNvbXBvbmVudEFjY2Vzc29yLnZhbHVlcywgW2VsZW1lbnRJZCwgY29tcG9uZW50SWRdLCBjb21wb25lbnRDaGFuZ2VzW2NvbXBvbmVudElkXSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5TWFya3VwIChjb21wb25lbnQsIHZhbHVlLCBzdGF0ZVBhdGgsIGNoYW5nZXMpIHtcclxuICBpZiAoIWNvbXBvbmVudC5tYXJrdXApIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChjb21wb25lbnQuaXNMaXN0KSB7XHJcbiAgICByZXR1cm4gcmVuZGVyTGlzdChjb21wb25lbnQsIHZhbHVlLCBzdGF0ZVBhdGgsIGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvbXBvbmVudC5pc0NvbXBvbmVudCkge1xyXG4gICAgcmV0dXJuIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIHZhbHVlLCBzdGF0ZVBhdGgsIGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgdmFsdWUgPSBpc1VuZGVmaW5lZCh2YWx1ZSkgPyAnJyA6IHZhbHVlO1xyXG5cclxuICBpZiAoY29tcG9uZW50Lm1hcmt1cC50YWdOYW1lID09PSAnSU5QVVQnKSB7XHJcbiAgICBjb21wb25lbnQubWFya3VwLnZhbHVlID0gdmFsdWU7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICByZXdyaXRlVG9Ob2RlKGNvbXBvbmVudC5tYXJrdXAsIHZhbHVlKTtcclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ29tcG9uZW50IChjb21wb25lbnQsIHZhbHVlLCBzdGF0ZVBhdGgsIGNoYW5nZXMpIHtcclxuICBpZiAoY2hhbmdlcykge1xyXG4gICAgcmV0dXJuIHVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQsIHZhbHVlLCBzdGF0ZVBhdGgsIGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRyYXdDb21wb25lbnQodmFsdWUsIHN0YXRlUGF0aCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXdDb21wb25lbnQgKHZhbHVlcywgc3RhdGVQYXRoKSB7XHJcbiAgY29uc3QgYWNjZXNzb3IgPSBjcmVhdGVBY2Nlc3NvcihzdGF0ZVBhdGgpO1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IGFjY2Vzc29yLmNvbXBvbmVudDtcclxuXHJcbiAgY29uc3QgaXRlbVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBpdGVtTWFya3VwID0gY29tcG9uZW50LnRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcclxuICB2YWx1ZXNbTElCX0FUVFIuU0VMRl0uZWwgPSBpdGVtTWFya3VwO1xyXG4gIGl0ZW1XcmFwcGVyLmFwcGVuZENoaWxkKGl0ZW1NYXJrdXApO1xyXG5cclxuICBpdGVtTWFya3VwLnNldEF0dHJpYnV0ZShMSUJfQVRUUi5DT01QT05FTlRfVFlQRSwgKGNvbXBvbmVudC5pc0xpc3RJdGVtKSA/IExJQl9BVFRSLklURU0gOiBMSUJfQVRUUi5DT01QT05FTlQpO1xyXG5cclxuICBmb3JFYWNoKHJlbmRlciwgKHJlbmRlckZ1bmMsIHJlbmRlclR5cGUpID0+IHtcclxuICAgIGlmIChjb21wb25lbnQuc3RhdGVbTElCX0FUVFIuU0VMRl1bcmVuZGVyVHlwZV0pIHtcclxuICAgICAgcmVuZGVyRnVuYyh7IG1hcmt1cDogaXRlbU1hcmt1cCB9LCB2YWx1ZXNbTElCX0FUVFIuU0VMRl1bcmVuZGVyVHlwZV0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBmb3JFYWNoKGNvbXBvbmVudC5zdGF0ZSwgKGJpbmRpbmcsIGJpbmRpbmdOYW1lKSA9PiB7XHJcbiAgICBpZiAoIWJpbmRpbmcubWFya3VwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiaW5kaW5nTm9kZSA9IGl0ZW1XcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy4nICsgTElCX0FUVFIuUFJFRklYICsgYmluZGluZy5pZCk7XHJcbiAgICBiaW5kaW5nTm9kZS5jbGFzc0xpc3QucmVtb3ZlKExJQl9BVFRSLlBSRUZJWCArIGJpbmRpbmcuaWQpO1xyXG5cclxuICAgIGlmIChiaW5kaW5nLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkU3RhdGVQYXRoID0gc3RhdGVQYXRoLmNvbmNhdChiaW5kaW5nTmFtZSk7XHJcbiAgICAgIGNvbnN0IGNoaWxkTWFya3VwID0gZHJhd0NvbXBvbmVudCh2YWx1ZXNbYmluZGluZ05hbWVdLCBjaGlsZFN0YXRlUGF0aCk7XHJcbiAgICAgIHJlcGxhY2VOb2RlcyhiaW5kaW5nTm9kZSwgY2hpbGRNYXJrdXApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWVzW2JpbmRpbmdOYW1lXS5lbCA9IGJpbmRpbmdOb2RlO1xyXG5cclxuICAgIGlmIChiaW5kaW5nLmlzTGlzdCkge1xyXG4gICAgICByZW5kZXJMaXN0KGJpbmRpbmcsIHZhbHVlc1tiaW5kaW5nTmFtZV0sIHN0YXRlUGF0aC5jb25jYXQoYmluZGluZ05hbWUpKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGZvckVhY2gocmVuZGVyLCAocmVuZGVyRnVuYywgcmVuZGVyVHlwZSkgPT4ge1xyXG4gICAgICBpZiAocmVuZGVyVHlwZSA9PT0gJ2h0bWwnICYmIGJpbmRpbmcuaHRtbCA9PT0gbnVsbCB8fCBiaW5kaW5nLm1hcmt1cC5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgcmVuZGVyRnVuYyh7IG1hcmt1cDogYmluZGluZ05vZGUgfSwgdmFsdWVzW2JpbmRpbmdOYW1lXVtyZW5kZXJUeXBlXSwgc3RhdGVQYXRoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gaXRlbVdyYXBwZXIuY2hpbGRyZW5bMF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNvbXBvbmVudCAoY29tcG9uZW50LCB2YWx1ZXMsIHN0YXRlUGF0aCwgY2hhbmdlcykge1xyXG4gIGNvbnN0IGNvbXBvbmVudE1hcmt1cCA9IHZhbHVlc1tMSUJfQVRUUi5TRUxGXS5lbDtcclxuXHJcbiAgZm9yRWFjaChjaGFuZ2VzLCAoY2hhbmdlLCBiaW5kaW5nTmFtZSkgPT4ge1xyXG5cclxuICAgIGlmIChiaW5kaW5nTmFtZSA9PT0gTElCX0FUVFIuU0VMRikge1xyXG5cclxuICAgICAgZm9yIChsZXQgY2hhbmdlVHlwZSBpbiBjaGFuZ2UpIHtcclxuICAgICAgICByZW5kZXJbY2hhbmdlVHlwZV0oeyBtYXJrdXA6IGNvbXBvbmVudE1hcmt1cCB9LCB2YWx1ZXNbTElCX0FUVFIuU0VMRl1bY2hhbmdlVHlwZV0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiaW5kaW5nID0gY29tcG9uZW50LnN0YXRlW2JpbmRpbmdOYW1lXTtcclxuICAgIGNvbnN0IHN0YXRlUGF0aFRvQmluZGluZyA9IHN0YXRlUGF0aC5jb25jYXQoYmluZGluZ05hbWUpO1xyXG5cclxuICAgIGlmIChiaW5kaW5nLmlzQ29tcG9uZW50IHx8IGJpbmRpbmcuaXNMaXN0KSB7XHJcbiAgICAgIGFwcGx5TWFya3VwKGJpbmRpbmcsIHZhbHVlc1tiaW5kaW5nTmFtZV0sIHN0YXRlUGF0aFRvQmluZGluZywgY2hhbmdlc1tiaW5kaW5nTmFtZV0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZWwgPSB2YWx1ZXNbYmluZGluZ05hbWVdLmVsXHJcblxyXG4gICAgZm9yIChsZXQgY2hhbmdlVHlwZSBpbiBjaGFuZ2UpIHtcclxuICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZXNbYmluZGluZ05hbWVdW2NoYW5nZVR5cGVdO1xyXG4gICAgICByZW5kZXJbY2hhbmdlVHlwZV0oeyBtYXJrdXA6IGVsIH0sIG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTGlzdCAobGlzdENvbXBvbmVudCwgaXRlbXNWYWx1ZXMsIHN0YXRlUGF0aCwgY2hhbmdlcykge1xyXG4gIGlmIChjaGFuZ2VzKSB7XHJcbiAgICByZXR1cm4gdXBkYXRlTGlzdChsaXN0Q29tcG9uZW50LCBpdGVtc1ZhbHVlcywgc3RhdGVQYXRoLCBjaGFuZ2VzKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGxpc3RGcmFnbWVudCA9IGJ1aWxkTGlzdChsaXN0Q29tcG9uZW50LCBpdGVtc1ZhbHVlcywgc3RhdGVQYXRoKTtcclxuXHJcbiAgY29uc3QgbGlzdE5vZGUgPSBpdGVtc1ZhbHVlcy5lbDtcclxuICBjb25zdCBwYXJlbnROb2RlID0gbGlzdE5vZGUucGFyZW50Tm9kZTtcclxuICBjb25zdCBuZXh0Tm9kZSA9IGxpc3ROb2RlLm5leHRFbGVtZW50U2libGluZztcclxuICByZW1vdmVOb2RlKGxpc3ROb2RlKTtcclxuXHJcbiAgY29uc3QgaXNDb21wb25lbnQgPSBsaXN0Tm9kZS5nZXRBdHRyaWJ1dGUoTElCX0FUVFIuQ09NUE9ORU5UX1RZUEUpO1xyXG4gIGxpc3ROb2RlLnNldEF0dHJpYnV0ZShMSUJfQVRUUi5DT01QT05FTlRfVFlQRSwgTElCX0FUVFIuTElTVCk7XHJcbiAgaWYgKGlzQ29tcG9uZW50KSB7XHJcbiAgICBsaXN0Tm9kZS5zZXRBdHRyaWJ1dGUoTElCX0FUVFIuQ09NUE9ORU5UX1RZUEUsIExJQl9BVFRSLkNPTVBPTkVOVF9MSVNUKTtcclxuICB9XHJcblxyXG4gIGVtcHR5Tm9kZShsaXN0Tm9kZSk7XHJcbiAgbGlzdE5vZGUuYXBwZW5kQ2hpbGQobGlzdEZyYWdtZW50KTtcclxuXHJcbiAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobGlzdE5vZGUsIG5leHROb2RlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRMaXN0IChsaXN0Q29tcG9uZW50LCBpdGVtc1ZhbHVlcywgc3RhdGVQYXRoLCByYW5nZSkge1xyXG4gIGNvbnN0IHN0YXJ0ID0gcmFuZ2UgPyByYW5nZS5zdGFydCA6IDA7XHJcbiAgY29uc3QgZW5kID0gcmFuZ2UgPyByYW5nZS5lbmQgOiAoaXRlbXNWYWx1ZXMubGVuZ3RoICsgMSk7XHJcblxyXG4gIGNvbnN0IGxpc3RGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICBpdGVtc1ZhbHVlc1xyXG4gICAgLnNsaWNlKHN0YXJ0LCBlbmQpXHJcbiAgICAuZm9yRWFjaCgoaXRlbVZhbHVlLCBpdGVtSW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgbmV3SXRlbUluZGV4ID0gK3N0YXJ0ICsgaXRlbUluZGV4O1xyXG4gICAgICBjb25zdCBzdGF0ZVBhdGhUb0l0ZW0gPSBzdGF0ZVBhdGguY29uY2F0KFtuZXdJdGVtSW5kZXgsIGxpc3RDb21wb25lbnQubGlzdEl0ZW0ubmFtZV0pO1xyXG4gICAgICBjb25zdCBsaXN0SXRlbU1hcmt1cCA9IGRyYXdDb21wb25lbnQoaXRlbVZhbHVlW2xpc3RDb21wb25lbnQubGlzdEl0ZW0ubmFtZV0sIHN0YXRlUGF0aFRvSXRlbSk7XHJcblxyXG4gICAgICBsaXN0SXRlbU1hcmt1cC5zZXRBdHRyaWJ1dGUoTElCX0FUVFIuSVRFTV9JTkRFWCwgbmV3SXRlbUluZGV4KTtcclxuXHJcbiAgICAgIGxpc3RGcmFnbWVudC5hcHBlbmRDaGlsZChsaXN0SXRlbU1hcmt1cCk7XHJcbiAgICB9KTtcclxuXHJcbiAgcmV0dXJuIGxpc3RGcmFnbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGlzdCAobGlzdEJpbmRpbmcsIGl0ZW1zVmFsdWVzLCBzdGF0ZVBhdGgsIGNoYW5nZXMpIHtcclxuICBjb25zdCBsaXN0Tm9kZSA9IGl0ZW1zVmFsdWVzLmVsO1xyXG4gIGNvbnN0IGl0ZW1OYW1lID0gbGlzdEJpbmRpbmcubGlzdEl0ZW0ubmFtZTtcclxuICBjb25zdCBpdGVtc0NoYW5nZXMgPSBzcGxpdFBpZWNlKGNoYW5nZXMsICh2LCBrKSA9PiBpc051bWJlcigraykpO1xyXG4gIGxldCByZW1vdmVkQ291bnQgPSAwO1xyXG4gIGxldCBlbmQgPSAwO1xyXG5cclxuICBmb3IgKGxldCBjaGFuZ2VUeXBlIGluIGNoYW5nZXMpIHtcclxuICAgIHJlbmRlcltjaGFuZ2VUeXBlXSh7IG1hcmt1cDogbGlzdE5vZGUgfSwgaXRlbXNWYWx1ZXNbY2hhbmdlVHlwZV0pO1xyXG4gIH1cclxuXHJcbiAgZm9yRWFjaChpdGVtc0NoYW5nZXMsIChjaGFuZ2UsIGkpID0+IHtcclxuICAgIGNoYW5nZSA9IGNoYW5nZVtpdGVtTmFtZV07XHJcbiAgICBjb25zdCBzdGF0ZVBhdGhUb0l0ZW0gPSBzdGF0ZVBhdGguY29uY2F0KGksIGl0ZW1OYW1lKTtcclxuICAgIGNvbnN0IGl0ZW1BY2Nlc3NvciA9IGNyZWF0ZUFjY2Vzc29yKHN0YXRlUGF0aFRvSXRlbSk7XHJcblxyXG4gICAgaWYgKCFjaGFuZ2VbTElCX0FUVFIuRlVMTF9DSEFOR0VdKSB7XHJcbiAgICAgIHVwZGF0ZUNvbXBvbmVudChpdGVtQWNjZXNzb3IuY29tcG9uZW50LCBpdGVtc1ZhbHVlc1tpXVtpdGVtTmFtZV0sIHN0YXRlUGF0aFRvSXRlbSwgY2hhbmdlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VbTElCX0FUVFIuRlVMTF9DSEFOR0VdLmFkZCAmJiBpID49IGVuZCkge1xyXG4gICAgICBjb25zdCBzdGFydCA9IGNoYW5nZVtMSUJfQVRUUi5GVUxMX0NIQU5HRV0uYWRkLnN0YXJ0O1xyXG4gICAgICBlbmQgPSBjaGFuZ2VbTElCX0FUVFIuRlVMTF9DSEFOR0VdLmFkZC5lbmQ7XHJcblxyXG4gICAgICBmaXhJbmRleGVzKGxpc3ROb2RlLCBzdGFydCwgZW5kIC0gc3RhcnQpO1xyXG4gICAgICBjb25zdCBsaXN0RnJhZ21lbnQgPSBidWlsZExpc3QobGlzdEJpbmRpbmcsIGl0ZW1zVmFsdWVzLCBzdGF0ZVBhdGgsIHsgc3RhcnQsIGVuZCB9KTtcclxuXHJcbiAgICAgIGlmIChlbmQgPT09IGl0ZW1zVmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgIGxpc3ROb2RlLmFwcGVuZENoaWxkKGxpc3RGcmFnbWVudCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsaXN0Tm9kZS5pbnNlcnRCZWZvcmUobGlzdEZyYWdtZW50LCBsaXN0Tm9kZS5jaGlsZHJlbltzdGFydF0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZVtMSUJfQVRUUi5GVUxMX0NIQU5HRV0ucmVtb3ZlKSB7XHJcbiAgICAgIHJlbW92ZU5vZGUoY2hhbmdlW0xJQl9BVFRSLkZVTExfQ0hBTkdFXS5yZW1vdmUpO1xyXG4gICAgICBmaXhJbmRleGVzKGxpc3ROb2RlLCBpIC0gcmVtb3ZlZENvdW50KyssIC0xKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZml4SW5kZXhlcyAobGlzdE5vZGUsIHN0YXJ0LCBkaWZmKSB7XHJcbiAgY29uc3QgaXRlbXNOb2RlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGxpc3ROb2RlLmNoaWxkcmVuLCBzdGFydCk7XHJcblxyXG4gIGl0ZW1zTm9kZXMuZm9yRWFjaCgoaXRlbU5vZGUpID0+IHtcclxuICAgIGNvbnN0IHByZXZJZHggPSBpdGVtTm9kZS5nZXRBdHRyaWJ1dGUoTElCX0FUVFIuSVRFTV9JTkRFWCk7XHJcbiAgICBjb25zdCBuZXdJZHggPSArcHJldklkeCArIGRpZmY7XHJcblxyXG4gICAgaXRlbU5vZGUuc2V0QXR0cmlidXRlKExJQl9BVFRSLklURU1fSU5ERVgsIG5ld0lkeCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5QXR0cmlidXRlcyAoYmluZGluZywgYXR0cmlidXRlcykge1xyXG4gIE9iamVjdC5hc3NpZ24oYmluZGluZy5tYXJrdXAsIGF0dHJpYnV0ZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseUNsYXNzZXMgKGJpbmRpbmcsIGNsYXNzZXMpIHtcclxuICBmb3IgKGxldCBjbGFzc05hbWUgaW4gY2xhc3Nlcykge1xyXG4gICAgaWYgKGNsYXNzTmFtZSkge1xyXG4gICAgICBpZiAoY2xhc3Nlc1tjbGFzc05hbWVdKSB7XHJcbiAgICAgICAgYmluZGluZy5tYXJrdXAuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJpbmRpbmcubWFya3VwLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlTdHlsZXMgKGJpbmRpbmcsIHN0eWxlcykge1xyXG4gIE9iamVjdC5hc3NpZ24oIGJpbmRpbmcubWFya3VwLnN0eWxlLCBub3JtYWxpemVTdHlsZXMoc3R5bGVzKSApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBbmRBcHBlbmRTdHlsZXMgKHN0eWxlT2JqKSB7XHJcbiAgbGV0IHN0eWxlU3RyID0gJyc7XHJcbiAgZm9yIChsZXQgc2VsZWN0b3IgaW4gc3R5bGVPYmopIHtcclxuICAgIGNvbnN0IHN0eWxlcyA9IHN0eWxlT2JqW3NlbGVjdG9yXTtcclxuICAgIHN0eWxlU3RyICs9IHNlbGVjdG9yICsgJ3snO1xyXG4gICAgbm9ybWFsaXplU3R5bGVzKHN0eWxlcylcclxuICAgIGZvciAobGV0IGF0dHIgaW4gc3R5bGVzKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVzW2F0dHJdO1xyXG4gICAgICBzdHlsZVN0ciArPSB0b0Rhc2hDYXNlKGF0dHIpICsgJzonICsgdmFsdWUgKyAnOyc7XHJcbiAgICB9XHJcbiAgICBzdHlsZVN0ciArPSAnfVxcbic7XHJcbiAgfVxyXG4gIGNvbnN0IHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gIHN0eWxlRWwuYXBwZW5kQ2hpbGQoIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0eWxlU3RyKSApO1xyXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlcyAoc3R5bGVzKSB7XHJcbiAgZm9yIChsZXQgYXR0ciBpbiBzdHlsZXMpIHtcclxuICAgIGlmIChpc051bWJlcihzdHlsZXNbYXR0cl0pKSB7XHJcbiAgICAgIHN0eWxlc1thdHRyXSA9IHN0eWxlc1thdHRyXSArICdweCc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBzdHlsZXM7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmluZGluZ05vdEV4aXN0c0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yIChiaW5kaW5nTmFtZSwgY29tcG9uZW50TmFtZSwgcGF0aCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMubWVzc2FnZSA9IFwiVW5hYmxlIHRvIGFjY2VzcyAnXCIgKyBiaW5kaW5nTmFtZSArIFwiJyBiaW5kaW5nIG9uICdcIiArIGNvbXBvbmVudE5hbWUgKyBcIicgY29tcG9uZW50IG9uIHBhdGggKFwiICsgcGF0aC5qb2luKCcgLT4gJykgKyBcIikgYmVjYXVzZSBpdCBkb2Vzbid0IGV4aXN0LlwiXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudFJlZGVmaW5lRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IgKG5hbWUpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBcIlRyeWluZyB0byByZWRlZmluZSBleGlzdGluZyBjb21wb25lbnQ6ICdcIiArIG5hbWUgKyBcIidcIjtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IgKG5hbWUpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBcIlRyeWluZyB0byBhc3NpZ24gYSBuYW1lICdcIiArIG5hbWUgKyBcIicgdG8gYSBzdGF0ZSB0aGF0IGFscmVhZHkgZXhpc3RzIGluIHRoZSBjaGFpbi5cIjtcclxuICB9XHJcbn1cclxuIiwiY29uc3QgTElCX05BTUUgPSAneCc7XHJcbmNvbnN0IEFUVFJfUFJFRklYID0gJ2RhdGEtJztcclxuY29uc3QgUFJFRklYID0gTElCX05BTUUgKyAnLSc7XHJcbmNvbnN0IFRFTVBMQVRFX0JJTkRJTkcgPSBQUkVGSVggKyAnYic7XHJcbmNvbnN0IFRFTVBMQVRFX0xJU1RfQklORElORyA9IFBSRUZJWCArICdsYic7XHJcbmNvbnN0IEJJTkRJTkdfSUQgPSBBVFRSX1BSRUZJWCArIFBSRUZJWCArICdpZCc7XHJcbmNvbnN0IFNUQVRFX1BBVEggPSBQUkVGSVggKyAnc3BhdGgnO1xyXG5jb25zdCBURU1QTEFURV9QTEFDRU1FTlQgPSBQUkVGSVggKyAnZWwnO1xyXG5jb25zdCBTVEFURV9OQU1FID0gUFJFRklYICsgJ3N0YXRlLW5hbWUnO1xyXG5jb25zdCBTQ09QRV9QUkVGSVggPSAncyc7XHJcbmNvbnN0IElURU1fSU5ERVggPSBBVFRSX1BSRUZJWCArIFBSRUZJWCArICdkeCc7XHJcbmNvbnN0IENPTVBPTkVOVF9UWVBFID0gQVRUUl9QUkVGSVggKyBQUkVGSVggKyAndHAnO1xyXG5jb25zdCBJVEVNX1NVRkZJWCA9ICdpJztcclxuY29uc3QgU1RBVEVfREVMSU1JVEVSID0gJy0nO1xyXG5jb25zdCBTRUxGID0gJyc7XHJcbmNvbnN0IEZVTExfQ0hBTkdFID0gJyBfZnVsbF9jaGFuZ2VfICc7XHJcblxyXG5jb25zdCBCQVNFID0gJzEnO1xyXG5jb25zdCBDT01QT05FTlQgPSAnMic7XHJcbmNvbnN0IExJU1QgPSAnMyc7XHJcbmNvbnN0IElURU0gPSAnX2l0ZW1fJztcclxuY29uc3QgQ09NUE9ORU5UX0xJU1QgPSAnNSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgUFJFRklYLFxyXG4gIFRFTVBMQVRFX0JJTkRJTkcsXHJcbiAgVEVNUExBVEVfTElTVF9CSU5ESU5HLFxyXG4gIEJJTkRJTkdfSUQsXHJcbiAgU1RBVEVfUEFUSCxcclxuICBURU1QTEFURV9QTEFDRU1FTlQsXHJcbiAgU1RBVEVfTkFNRSxcclxuICBTQ09QRV9QUkVGSVgsXHJcbiAgSVRFTV9JTkRFWCxcclxuICBDT01QT05FTlRfVFlQRSxcclxuICBJVEVNX1NVRkZJWCxcclxuICBTVEFURV9ERUxJTUlURVIsXHJcbiAgQkFTRSxcclxuICBDT01QT05FTlQsXHJcbiAgTElTVCxcclxuICBJVEVNLFxyXG4gIFNFTEYsXHJcbiAgRlVMTF9DSEFOR0UsXHJcbiAgQ09NUE9ORU5UX0xJU1RcclxufTtcclxuIiwiY29uc3QgU1RSSVBfQ09NTUVOVFMgPSAvKFxcL1xcLy4qJCl8KFxcL1xcKltcXHNcXFNdKj9cXCpcXC8pfChcXHMqPVteLCldKigoJyg/OlxcXFwnfFteJ1xcclxcbl0pKicpfChcIig/OlxcXFxcInxbXlwiXFxyXFxuXSkqXCIpKXwoXFxzKj1bXiwpXSopKS9tZztcclxuY29uc3QgQVJHVU1FTlRfTkFNRVMgPSAvKFteXFxzLF0rKS9nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIFNUUklQX0NPTU1FTlRTLFxyXG4gIEFSR1VNRU5UX05BTUVTLFxyXG59O1xyXG4iLCJleHBvcnQge1xyXG4gIGlzRnVuY3Rpb24sXHJcbiAgaXNBcnJheSxcclxuICBpc09iamVjdCxcclxuICBpc09iamVjdEluQnJhY2tldHMsXHJcbiAgaXNPYmplY3RJbkRvdWJsZUJyYWNrZXRzLFxyXG4gIGlzU3RyaW5nLFxyXG4gIGlzSFRNTFN0cmluZyxcclxuICBpc051bWJlcixcclxuICBpc0RPTUVsZW1lbnQsXHJcbiAgaXNVbmRlZmluZWQsXHJcbiAgaXNFbXB0eSxcclxuICBpc0xpbmssXHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcclxuICByZXR1cm4gZ2V0T2JqZWN0VHlwZShvYmopID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0FycmF5IChvYmopIHtcclxuICByZXR1cm4gZ2V0T2JqZWN0VHlwZShvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc09iamVjdCAob2JqKSB7XHJcbiAgcmV0dXJuIGdldE9iamVjdFR5cGUob2JqKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzT2JqZWN0SW5CcmFja2V0cyAob2JqKSB7XHJcbiAgcmV0dXJuIGlzQXJyYXkob2JqKSAmJiBvYmoubGVuZ3RoID09PSAxICYmIGlzT2JqZWN0KG9ialswXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzT2JqZWN0SW5Eb3VibGVCcmFja2V0cyAob2JqKSB7XHJcbiAgcmV0dXJuIGlzQXJyYXkob2JqKSAmJiBvYmoubGVuZ3RoID09PSAxICYmIGlzT2JqZWN0SW5CcmFja2V0cyhvYmpbMF0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1N0cmluZyAob2JqKSB7XHJcbiAgcmV0dXJuIGdldE9iamVjdFR5cGUob2JqKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzSFRNTFN0cmluZyAob2JqKSB7XHJcbiAgcmV0dXJuIGlzU3RyaW5nKG9iaikgJiYgb2JqLmluZGV4T2YoJzwnKSA9PT0gMDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNOdW1iZXIgKG9iaikge1xyXG4gIHJldHVybiBnZXRPYmplY3RUeXBlKG9iaikgPT09ICdbb2JqZWN0IE51bWJlcl0nICYmIG9iaiA9PT0gb2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RPTUVsZW1lbnQgKG9iaikge1xyXG4gIHJldHVybiBvYmogJiYgdHlwZW9mIG9iai50YWdOYW1lICE9PSAndW5kZWZpbmVkJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNVbmRlZmluZWQgKG9iaikge1xyXG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T2JqZWN0VHlwZSAob2JqKSB7XHJcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0xpbmsgKG9iaikge1xyXG4gIGNvbnN0IHNsYXNoSWR4ID0gb2JqLmluZGV4T2YoJy8nKTtcclxuICByZXR1cm4gWzAsIDEsIDJdLnNvbWUoKGlkeCkgPT4gaWR4ID09PSBzbGFzaElkeCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRW1wdHkgKG9iaikge1xyXG4gIGlmICghb2JqKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlmIChpc0FycmF5KG9iaikgfHwgaXNTdHJpbmcob2JqKSkge1xyXG4gICAgcmV0dXJuICFvYmoubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuICFPYmplY3Qua2V5cyhvYmopLmxlbmd0aDtcclxufVxyXG4iLCJpbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4vY2hlY2tlcnMnO1xyXG5pbXBvcnQgeyBzZXQgfSBmcm9tICcuL29iamVjdCc7XHJcblxyXG5leHBvcnQge1xyXG4gIGhhcyxcclxuICBnZXRGYWxzZVBhdGhzLFxyXG4gIHRvRGFzaENhc2UsXHJcbiAgdG9DYW1lbENhc2UsXHJcbiAgZ2V0U2hvcnROYW1lLFxyXG4gIGdldFJlYWxOYW1lLFxyXG59O1xyXG5cclxuY29uc3QgTkFNRVMgPSB7XHJcbiAgcmVhbDoge30sXHJcbiAgc2hvcnQ6IFtdXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRTaG9ydE5hbWUgKG5hbWUpIHtcclxuICBpZiAoTkFNRVMucmVhbFtuYW1lXSkge1xyXG4gICAgcmV0dXJuIE5BTUVTLnJlYWxbbmFtZV07XHJcbiAgfVxyXG5cclxuICBjb25zdCBzaG9ydE5hbWUgPSBOQU1FUy5zaG9ydC5wdXNoKG5hbWUpO1xyXG4gIHJldHVybiBOQU1FUy5yZWFsW25hbWVdID0gc2hvcnROYW1lIC0gMTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVhbE5hbWUgKG51bSkge1xyXG4gIHJldHVybiBOQU1FUy5zaG9ydFtudW1dO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXMgKG9iaiwgZWwpIHtcclxuICBpZiAoaXNPYmplY3Qob2JqKSkge1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XHJcbiAgICByZXR1cm4gaGFzKGtleXMsIGVsKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBvYmouaW5kZXhPZihlbCkgPj0gMDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RmFsc2VQYXRocyAob2JqKSB7XHJcbiAgY29uc3Qgb25seUZhbHNlUGF0aHMgPSB7fTtcclxuICBnZXRGYWxzZVBhdGgob2JqLCBvbmx5RmFsc2VQYXRocywgW10pO1xyXG4gIHJldHVybiBvbmx5RmFsc2VQYXRocztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RmFsc2VQYXRoIChvYmosIG9ubHlGYWxzZVBhdGhzLCBwYXRoKSB7XHJcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xyXG4gICAgaWYgKGlzT2JqZWN0KG9ialtrZXldKSkge1xyXG4gICAgICBnZXRGYWxzZVBhdGgob2JqW2tleV0sIG9ubHlGYWxzZVBhdGhzLCBwYXRoLmNvbmNhdChrZXkpKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9ialtrZXldICE9PSB0cnVlKSB7XHJcbiAgICAgIHNldChvbmx5RmFsc2VQYXRocywgcGF0aC5jb25jYXQoa2V5KSwgb2JqW2tleV0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdG9EYXNoQ2FzZSAoc3RyKSB7XHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChtYXRjaCkgPT4gJy0nICsgbWF0Y2hbMF0udG9Mb3dlckNhc2UoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvQ2FtZWxDYXNlIChzdHIpIHtcclxuICByZXR1cm4gc3RyLnJlcGxhY2UoLy0oLikvZywgKG1hdGNoKSA9PiBtYXRjaFsxXS50b1VwcGVyQ2FzZSgpKTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGlzVW5kZWZpbmVkLFxyXG4gIGlzQXJyYXksXHJcbiAgaXNET01FbGVtZW50LFxyXG4gIGlzT2JqZWN0LFxyXG59IGZyb20gJy4vY2hlY2tlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29weTtcclxuXHJcbmZ1bmN0aW9uIGNvcHkgKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcclxuICBpZiAoIWRlc3RpbmF0aW9uKSB7XHJcbiAgICByZXR1cm4gY29weSAoe30sIHNvdXJjZSk7XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBrZXkgaW4gc291cmNlKSB7XHJcblxyXG4gICAgaWYgKGlzVW5kZWZpbmVkKHNvdXJjZVtrZXldKSkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkgJiYgaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XHJcbiAgICAgIGlmICghZGVzdGluYXRpb25ba2V5XSkge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSB7fTtcclxuICAgICAgfVxyXG4gICAgICBjb3B5KGRlc3RpbmF0aW9uW2tleV0sIHNvdXJjZVtrZXldKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzQXJyYXkoc291cmNlW2tleV0pKSB7XHJcbiAgICAgIGlmICghZGVzdGluYXRpb25ba2V5XSkge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBbXTtcclxuICAgICAgfVxyXG4gICAgICBjb3B5QXJyYXkoZGVzdGluYXRpb25ba2V5XSwgc291cmNlW2tleV0pO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNET01FbGVtZW50KHNvdXJjZVtrZXldKSkge1xyXG4gICAgICBkZXN0aW5hdGlvbltrZXldID0gc291cmNlW2tleV0uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0aW5hdGlvbltrZXldID0gc291cmNlW2tleV07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGVzdGluYXRpb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvcHlBcnJheSAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoaXNPYmplY3Qoc291cmNlW2ldKSkge1xyXG4gICAgICBkZXN0aW5hdGlvbltpXSA9IGRlc3RpbmF0aW9uW2ldIHx8IHt9O1xyXG4gICAgICBjb3B5KGRlc3RpbmF0aW9uW2ldLCBzb3VyY2VbaV0pO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNBcnJheShzb3VyY2VbaV0pKSB7XHJcbiAgICAgIGRlc3RpbmF0aW9uW2ldID0gZGVzdGluYXRpb25baV0gfHwgW107XHJcbiAgICAgIGNvcHlBcnJheShkZXN0aW5hdGlvbltpXSwgc291cmNlW2ldKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdGluYXRpb25baV0gPSBzb3VyY2VbaV07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGVzdGluYXRpb247XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBpc0hUTUxTdHJpbmcsXHJcbn0gZnJvbSAnLi9jaGVja2Vycyc7XHJcblxyXG5leHBvcnQge1xyXG4gIHJlcGxhY2VOb2RlcyxcclxuICBjbG9uZUhUTUxNYXJrdXAsXHJcbiAgY29sbGVjdEhUTUxOb2RlcyxcclxuICB3YWxrTm9kZXMsXHJcbiAgcmVtb3ZlTm9kZSxcclxuICBpbnNlcnRCZWZvcmVOb2RlLFxyXG4gIHJld3JpdGVUb05vZGUsXHJcbiAgZW1wdHlOb2RlLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVwbGFjZU5vZGVzIChvcmlnaW5hbCwgcmVwbGFjZW1lbnQpIHtcclxuICBvcmlnaW5hbC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChyZXBsYWNlbWVudCwgb3JpZ2luYWwpO1xyXG4gIHJldHVybiByZXBsYWNlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0QmVmb3JlTm9kZSAoZWwsIG5leHRFbCkge1xyXG4gIG5leHRFbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbCwgbmV4dEVsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvbmVIVE1MTWFya3VwIChtYXJrdXApIHtcclxuICBjb25zdCBtYXJrdXBTdHIgPSBpc0hUTUxTdHJpbmcobWFya3VwLnRyaW0oKSkgPyBtYXJrdXAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1hcmt1cCkuaW5uZXJIVE1MO1xyXG4gIHJldHVybiBjb252ZXJ0U3RyaW5nVG9IVE1MKG1hcmt1cFN0cik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRTdHJpbmdUb0hUTUwgKG1hcmt1cFN0cmluZykge1xyXG4gIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuICBjb25zdCBwYXJzZWREb2N1bWVudCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcobWFya3VwU3RyaW5nLCAndGV4dC9odG1sJyk7XHJcbiAgcmV0dXJuIHBhcnNlZERvY3VtZW50LmJvZHkuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdhbGtOb2RlcyAobm9kZSwgY2IpIHtcclxuICBpZiAoIGNiKG5vZGUpID09PSAtMSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQXJyYXkucHJvdG90eXBlXHJcbiAgICAuc2xpY2VcclxuICAgIC5jYWxsKG5vZGUuY2hpbGRyZW4pXHJcbiAgICAuZm9yRWFjaCgoZWwpID0+IHdhbGtOb2RlcyhlbCwgY2IpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29sbGVjdEhUTUxOb2RlcyAocm9vdCwgaXNXYW50ZWQpIHtcclxuICBjb25zdCBub2RlcyA9IFtdO1xyXG4gIHdhbGtOb2Rlcyhyb290LCAoZWwpID0+IGlzV2FudGVkKGVsKSA/IG5vZGVzLnB1c2goZWwpIDogJycpO1xyXG4gIHJldHVybiBub2RlcztcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlTm9kZSAobm9kZSkge1xyXG4gIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmV3cml0ZVRvTm9kZSAobm9kZSwgdGV4dCkge1xyXG4gIGVtcHR5Tm9kZShub2RlKTtcclxuICB3cml0ZVRvTm9kZShub2RlLCB0ZXh0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gd3JpdGVUb05vZGUgKG5vZGUsIHRleHQpIHtcclxuICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpO1xyXG4gIG5vZGUuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbXB0eU5vZGUgKG5vZGUpIHtcclxuICB3aGlsZSAobm9kZS5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5maXJzdENoaWxkKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBpc0FycmF5LFxyXG4gIGlzT2JqZWN0LFxyXG4gIGlzVW5kZWZpbmVkLFxyXG59IGZyb20gJy4vY2hlY2tlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXJlRXF1YWw7XHJcblxyXG5mdW5jdGlvbiBhcmVFcXVhbCAoZmlyc3QsIHNlY29uZCkge1xyXG4gIGlmIChpc1VuZGVmaW5lZChmaXJzdCkgfHwgaXNVbmRlZmluZWQoc2Vjb25kKSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBmaXJzdCAhPT0gdHlwZW9mIHNlY29uZCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcGFyZW50Tm9kZSA9IHsgY2hpbGROb2RlOiB7fSB9O1xyXG5cclxuICBpZiAoaXNBcnJheShzZWNvbmQpKSB7XHJcbiAgICBjaGVja0tleXNFcXVhbGl0eShcclxuICAgICAgZmlyc3QgPyBmaXJzdC5tYXAoZWwgPT4gZWwpIDogW10sXHJcbiAgICAgIHNlY29uZC5tYXAoZWwgPT4gZWwpLFxyXG4gICAgICBwYXJlbnROb2RlXHJcbiAgICApO1xyXG5cclxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHNlY29uZCkpIHtcclxuICAgIGNoZWNrS2V5c0VxdWFsaXR5KGZpcnN0LCBzZWNvbmQsIHBhcmVudE5vZGUpO1xyXG5cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZpcnN0ID09PSBzZWNvbmQ7XHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhcmVudE5vZGUuY2hpbGROb2RlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0tleXNFcXVhbGl0eSAoZmlyc3QsIHNlY29uZCwgcGFyZW50Tm9kZSkge1xyXG4gIGZvciAobGV0IGtleSBpbiBzZWNvbmQpIHtcclxuXHJcbiAgICBpZiAoaXNBcnJheShmaXJzdCkpIHtcclxuICAgICAgaWYgKGlzVW5kZWZpbmVkKGZpcnN0W2tleV0pKSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5jaGlsZE5vZGVba2V5XSA9IHsgYWRkOiB0cnVlIH07XHJcbiAgICAgIH1cclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpcnN0W2tleV0gIT09IHNlY29uZFtrZXldKSB7XHJcbiAgICAgIHBhcmVudE5vZGUuY2hpbGROb2RlW2tleV0gPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAobGV0IGtleSBpbiBmaXJzdCkge1xyXG5cclxuICAgIGlmIChpc0FycmF5KGZpcnN0KSkge1xyXG4gICAgICBpZiAoaXNVbmRlZmluZWQoc2Vjb25kW2tleV0pKSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5jaGlsZE5vZGVba2V5XSA9IHsgcmVtb3ZlOiB0cnVlIH07XHJcbiAgICAgIH1cclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpcnN0W2tleV0gIT09IHNlY29uZFtrZXldKSB7XHJcbiAgICAgIHBhcmVudE5vZGUuY2hpbGROb2RlW2tleV0gPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBwYXJlbnROb2RlO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgaXNPYmplY3QsXHJcbiAgaXNGdW5jdGlvbixcclxufSBmcm9tICcuL2NoZWNrZXJzJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgZ2V0LFxyXG4gIHNldCxcclxuICByZW1vdmUsXHJcbiAgYWRkQ29uc3RGaWVsZHMsXHJcbiAgZm9yRWFjaCxcclxuICBtYXAsXHJcbiAgbWFwS2V5cyxcclxuICBmaWx0ZXIsXHJcbiAgdG9PYmplY3QsXHJcbiAgZnVsbE1hcCxcclxuICBzcGxpdFBpZWNlLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0IChvYmosIHBhdGgpIHtcclxuICBsZXQgdmFsdWUgPSBvYmo7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgdmFsdWUgPSB2YWx1ZVtwYXRoW2ldXTtcclxuXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0IChvYmosIHBhdGgsIHZhbHVlKSB7XHJcbiAgaWYgKCFwYXRoLmxlbmd0aCkge1xyXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihvYmosIHZhbHVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmogPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGxldCBkZXN0ID0gb2JqO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgIGlmICghZGVzdFsgcGF0aFtpXSBdKSB7XHJcbiAgICAgIGRlc3QgPSBkZXN0W3BhdGhbaV1dID0ge307XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZXN0ID0gZGVzdFtwYXRoW2ldXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcclxuICAgIGRlc3RbIHBhdGhbaV0gXSA9IGRlc3RbIHBhdGhbaV0gXSB8fCB7fTtcclxuICAgIE9iamVjdC5hc3NpZ24oZGVzdFsgcGF0aFtpXSBdLCB2YWx1ZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRlc3RbIHBhdGhbaV0gXSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlIChvYmosIHBhdGgpIHtcclxuICBsZXQgdmFsdWUgPSBvYmo7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgdmFsdWUgPSB2YWx1ZVtwYXRoW2ldXTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZSB2YWx1ZVtwYXRoW2ldXTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29uc3RGaWVsZHMgKG9iaiwgZmllbGRzKSB7XHJcbiAgZm9yIChsZXQgZmllbGQgaW4gZmllbGRzKSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBmaWVsZCwge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZpZWxkc1tmaWVsZF0gfSxcclxuICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7IHRocm93IG5ldyBFcnJvcihcIlRyeWluZyB0byByZWRlZmluZSBjb25zdCBmaWVsZCAnXCIgKyBmaWVsZCArIFwiJ1wiKSB9LFxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvckVhY2ggKG9iaiwgY2IpIHtcclxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICBjb25zdCBwcm9wID0gb2JqW2tleV07XHJcbiAgICBjYihwcm9wLCBrZXksIG9iaik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXAob2JqLCBjYikge1xyXG4gIGNvbnN0IG5ld09iaiA9IHt9XHJcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xyXG4gICAgY29uc3QgcHJvcCA9IG9ialtrZXldO1xyXG4gICAgbmV3T2JqW2tleV0gPSBjYihwcm9wLCBrZXksIG9iaik7XHJcbiAgfVxyXG4gIHJldHVybiBuZXdPYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcEtleXMgKG9iaiwgY2IpIHtcclxuICBjb25zdCBuZXdPYmogPSB7fVxyXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcclxuICAgIGNvbnN0IHByb3AgPSBvYmpba2V5XTtcclxuICAgIGNvbnN0IG5ld0tleSA9IGNiKGtleSwgcHJvcCwgb2JqKTtcclxuICAgIG5ld09ialtuZXdLZXldID0gcHJvcDtcclxuICB9XHJcbiAgcmV0dXJuIG5ld09iajtcclxufVxyXG5cclxuZnVuY3Rpb24gc3BsaXRQaWVjZSAob2JqLCBjYikge1xyXG4gIGNvbnN0IG5ld09iaiA9IHt9XHJcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xyXG4gICAgY29uc3QgcHJvcCA9IG9ialtrZXldO1xyXG4gICAgaWYgKCBjYihwcm9wLCBrZXksIG9iaikgKSB7XHJcbiAgICAgIG5ld09ialtrZXldID0gcHJvcDtcclxuICAgICAgZGVsZXRlIG9ialtrZXldO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbmV3T2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmdWxsTWFwIChvYmosIGNiKSB7XHJcbiAgY29uc3QgbmV3T2JqID0ge31cclxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICBjb25zdCBwcm9wID0gb2JqW2tleV07XHJcbiAgICBjb25zdCByZXMgPSBjYihrZXksIHByb3AsIG9iaik7XHJcbiAgICBuZXdPYmpbIHJlc1swXSB8fCByZXMua2V5IHx8IHJlcy5rIF0gPSByZXNbMV0gfHwgcmVzWyd2YWx1ZSddIHx8IHJlc1sndiddO1xyXG4gIH1cclxuICByZXR1cm4gbmV3T2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXIgKG9iaiwgY2IpIHtcclxuICBjb25zdCBuZXdPYmogPSB7fTtcclxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICBjb25zdCBwcm9wID0gb2JqW2tleV07XHJcbiAgICBpZiAoIGNiKHByb3AsIGtleSwgb2JqKSApIHtcclxuICAgICAgbmV3T2JqW2tleV0gPSBwcm9wO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbmV3T2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b09iamVjdCAoYXJyLCB2YWwpIHtcclxuICBjb25zdCBuZXdPYmogPSB7fTtcclxuICBhcnIuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgbmV3T2JqW3ZdID0gaXNGdW5jdGlvbih2YWwpID8gdmFsKHYpIDogdmFsO1xyXG4gIH0pO1xyXG4gIHJldHVybiBuZXdPYmo7XHJcbn1cclxuIiwiaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSAnLi9EZWZpbml0aW9uJztcclxuaW1wb3J0IHsgYXBwbHkgfSBmcm9tICcuL1Byb2R1Y3Rpb24nO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZGVmaW5lLFxyXG4gIGFwcGx5LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9

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

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var couli__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! couli */ "./node_modules/couli/dist/couli.js");
/* harmony import */ var couli__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(couli__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/state */ "./src/common/state.js");
/* harmony import */ var _ui_components_search_string_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-components/search-string/index */ "./src/ui-components/search-string/index.js");
/* harmony import */ var _ui_components_app_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-components/app/index */ "./src/ui-components/app/index.js");
/* harmony import */ var _common_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/interaction */ "./src/common/interaction.js");







browser.runtime.onMessage.addListener((message) => Object(_common_interaction__WEBPACK_IMPORTED_MODULE_4__["onMessage"])(message));

Object(_common_interaction__WEBPACK_IMPORTED_MODULE_4__["getCurrentTab"])()
  .then((tab) => Object(_common_interaction__WEBPACK_IMPORTED_MODULE_4__["sendMessage"])('tabState', { id: tab[0].id }, ({ scriptHasRun }) => {

    let runPageScript = Promise.resolve();

    if (!scriptHasRun) {

      runPageScript = browser.tabs.executeScript({ file: '/page-script.js' })
        .then(() => {
          Object(_common_interaction__WEBPACK_IMPORTED_MODULE_4__["sendMessageToCurrentTab"])('saveTabId', { tabId: tab[0].id });
          Object(_common_interaction__WEBPACK_IMPORTED_MODULE_4__["sendMessage"])('tabState', { id: tab[0].id, state: true });
        });

    }

    runPageScript
      .then(() => tab[0].url)
      .then(setupGlobalEvents)
      .then(setupState)
      .then(loadPreviouslyFound)
      .then(setupContentPage)
      .then(setupInterface)
      .catch(reportExecuteScriptError);

  }));

function setupGlobalEvents (url) {
  window.addEventListener('unload', () => {
    _common_state__WEBPACK_IMPORTED_MODULE_1__["default"].saveState(url);
    Object(_common_interaction__WEBPACK_IMPORTED_MODULE_4__["sendMessage"])('popupState', { open: false });
  });

  return url;
}

function setupState (url) {

  try {
    _common_state__WEBPACK_IMPORTED_MODULE_1__["default"].loadState(url);

    if (_common_state__WEBPACK_IMPORTED_MODULE_1__["default"].isEmpty()) {
      _common_state__WEBPACK_IMPORTED_MODULE_1__["default"].setDefault();
    }
  } catch (e) {
    _common_state__WEBPACK_IMPORTED_MODULE_1__["default"].setDefault();
  }

  Object(_common_interaction__WEBPACK_IMPORTED_MODULE_4__["sendMessage"])('popupState', { open: true });
}

function loadPreviouslyFound (state) {
  return new Promise ((resolve) => {

    fetchPreviouslyFound((response) => {
      _common_state__WEBPACK_IMPORTED_MODULE_1__["default"].addFindings(response);

      resolve(state);
    });

  });
}

function setupContentPage () {
  Object(_common_interaction__WEBPACK_IMPORTED_MODULE_4__["sendMessageToCurrentTab"])('setupContentPage', { colors: _common_state__WEBPACK_IMPORTED_MODULE_1__["default"].COLORS });
}

function setupInterface (state) {
  couli__WEBPACK_IMPORTED_MODULE_0___default.a.apply('#app');
}

function fetchPreviouslyFound (cb) {
  Object(_common_interaction__WEBPACK_IMPORTED_MODULE_4__["sendMessageToCurrentTab"])('fetchPreviouslyFound', null, cb);
}

function reportExecuteScriptError(error) {
  document.querySelector("#error-content").classList.remove("hidden");
  document.querySelector("#error-content").appendChild( document.createTextNode(error.message) );
  console.error(error.message);
}


/***/ }),

/***/ "./src/ui-components/app/index.js":
/*!****************************************!*\
  !*** ./src/ui-components/app/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var couli__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! couli */ "./node_modules/couli/dist/couli.js");
/* harmony import */ var couli__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(couli__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/state */ "./src/common/state.js");
/* harmony import */ var _markup_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./markup.html */ "./src/ui-components/app/markup.html");
/* harmony import */ var _markup_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_markup_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/ui-components/app/styles.js");
/* harmony import */ var _common_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/interaction */ "./src/common/interaction.js");








const APP_WIDTH = 380;
const MAX_INPUT_WIDTH = 245;
const KEYBOARD_KEYS = Array(10).fill(48).reduce((a , v, i) => (a[i] = 48 + i) && a , {})
Object.assign(KEYBOARD_KEYS, {
  ENTER: 13,
  DELETE: 46,
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
});

couli__WEBPACK_IMPORTED_MODULE_0___default.a.define('app', _markup_html__WEBPACK_IMPORTED_MODULE_2___default.a, {

  lastFocused: {},
  searchHappened: {},
  caseSensitive: {},
  color: {},
  blinkSet: {},

  foundResults: {
    html: ($) => {
      if (!$.searchHappened) {
        return;
      }

      let resultString = $.foundResults + ' results';

      if ($.foundResults) {
        resultString = ' of ' + resultString;
      }

      return resultString;
    }
  },

  searchButton: [{ click: (e, el, ci) => search(ci) }],

  currentSearchIdx: {
    events: {
      click: (e, el, ci) => switchBlink(ci),

      contextmenu: (e, el, ci) => {
        e.preventDefault();
        removeSearch(ci, e.shiftKey);
      },

      keyup: (e, el, ci) => {
        if (Object.values(KEYBOARD_KEYS).indexOf(e.keyCode) < 0) {
          return;
        }

        switch (e.keyCode) {
          case KEYBOARD_KEYS.UP:
          case KEYBOARD_KEYS.s:
            moveToHigherHighlighting(ci);
            return;

          case KEYBOARD_KEYS.DOWN:
          case KEYBOARD_KEYS.d:
            moveToLowerHighlighting(ci);
            return;

          case KEYBOARD_KEYS.ENTER:
          case KEYBOARD_KEYS.e:
            search(ci);
            return;

          case KEYBOARD_KEYS.DELETE:
          case KEYBOARD_KEYS.r:
            removeSearch(ci, e.shiftKey);
            return;

          case KEYBOARD_KEYS.w:
            document.querySelectorAll('.string')[ ci.get('lastFocused') ].focus();
            return;

          case KEYBOARD_KEYS.LEFT:
          case KEYBOARD_KEYS.a:
            switchGroup(ci, { inc: -1 });
            return;

          case KEYBOARD_KEYS.RIGHT:
          case KEYBOARD_KEYS.f:
            switchGroup(ci, { inc: 1 });
            return;

          case KEYBOARD_KEYS.c:
            switchCaseSensitivity(ci);
            return;

          case KEYBOARD_KEYS.b:
            switchBlink(ci);
            return;

          default:
            switchGroup(ci, { set: e.keyCode - 48 });
        }
      }
    },
    style: ($) => ({
      backgroundColor: 'rgba(' +  $.color + ', 0.35)',
    }),
    hooks: {
      update: (el) => el.focus()
    }
  },

  moveLeft: [{ click: (e, el, ci) => switchGroup(ci, { inc: -1 }) }],
  moveRight: [{ click: (e, el, ci) => switchGroup(ci, { inc: 1 }) }],

  removeSearch: {
    events: {
      click: (e, el, ci) => removeSearch(ci, e.shiftKey)
    },
    class: ($) => ({
      hidden: $.searchStrings.length === 1 && !$.searchStrings[0].string.length && !$.searchHappened
    })
  },

  caseButton: {
    events: {
      click: (e, el, ci) => switchCaseSensitivity(ci),
    },
    style: ($) => ({
      backgroundColor: $.caseSensitive ? 'PaleGreen' : 'white',
    })
  },

  results: { class: ($) => ({ hidden: !$.searchHappened }) },

  controls: ($) => ({ hidden: !$.foundResults }),

  moveUp: [{ click: (e, el, ci) => moveToHigherHighlighting(ci) }],

  moveDown: [{ click: (e, el, ci) => moveToLowerHighlighting(ci) }],

  blink: {
    events: { click: (e, el, ci) => switchBlink(ci) },
    style: ($) => ({
      backgroundColor: $.blinkSet ? `rgba(${ $.color }, 0.35)` : 'white',
    })
  },

  '': {
    hooks: {
      mount: (el, data, ci) => {
        const currentSearch = _common_state__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentSearch();
        ci.set(currentSearch);
        setTimeout(() => {
          ci.markup('currentSearchIdx').focus();
          if (currentSearch.shownResultNumber) {
            moveToHighlighting(currentSearch.currentSearchIdx, currentSearch.shownResultNumber);
          }
        }, 0);
      },

      update: (el, data, ci) => {
        _common_state__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentSearch(ci.get());
      }
    }
  }
}, Object(_styles__WEBPACK_IMPORTED_MODULE_3__["default"])({ APP_WIDTH, MAX_INPUT_WIDTH }));

function search (ci) {
  const searchStrings = ci.get('searchStrings').value();
  const currentSearchIdx = ci.get('currentSearchIdx');
  const highlightColor = ci.get('color');
  const caseSensitive = ci.get('caseSensitive');
  const searchString = searchStrings.map((strObj) => strObj.string).join(' ');

  FIND_API_INPUT_BUG_FIX_BEFORE(() => {

    browser.find.find( searchStrings.shift().string , { includeRangeData: true, caseSensitive })
    .then((foundResults) => {
      FIND_API_INPUT_BUG_FIX_AFTER();

      refineFindings({
        searchId: currentSearchIdx,
        firstFoundPart: foundResults,
        searchRefinements: searchStrings,
        highlightColor,
        caseSensitive,
        searchString,
      }, (response) => {
        
        const foundResults = response.foundResults;
        const changeObj = { foundResults, searchHappened: true, blinkSet: false };
        if (foundResults) {
          changeObj.shownResultNumber = 1;
          moveToHighlighting(currentSearchIdx, 1);
        }

        ci.set(changeObj);
        ci.applyChanges();
        setTimeout(() => ci.markup('currentSearchIdx').focus(), 0);
      });

    });

  });
}

function moveToLowerHighlighting (ci) {
  const state = ci.get();
  const shownResultNumber = increment(state.shownResultNumber, 1, [1, state.foundResults]);
  ci.set({ shownResultNumber });
  moveToHighlighting(state.currentSearchIdx, shownResultNumber);
}

function moveToHigherHighlighting (ci) {
  const state = ci.get();
  const shownResultNumber = increment(state.shownResultNumber, -1, [1, state.foundResults]);
  ci.set({ shownResultNumber });
  moveToHighlighting(state.currentSearchIdx, shownResultNumber);
}

function switchBlink (ci) {
  const state = ci.get();
  let operation;

  if (state.blinkSet) {
    operation = 'removeBlinkerFromHighlightings';
  } else {
    operation = 'addBlinkerToHighlightings';
  }

  Object(_common_interaction__WEBPACK_IMPORTED_MODULE_4__["sendMessageToCurrentTab"])(operation, {
    searchId: state.currentSearchIdx
  });

  ci.set({ blinkSet: !state.blinkSet });
}

function increment (num, inc, range) {
  const newNum = num + inc;
  if (newNum > range[1]) {
    return range[0];
  }

  if (newNum < range[0]) {
    return range[1];
  }

  return newNum;
}

function moveToHighlighting (searchId, id) {
  Object(_common_interaction__WEBPACK_IMPORTED_MODULE_4__["sendMessageToCurrentTab"])('moveToHighlighting', { searchId, id: id - 1 })
}

function removeSearch (ci, all) {
  all ? removeAllSearches(ci) : removeCurrentSearch(ci);

  const newSearchState = _common_state__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentSearch();
  ci.set(newSearchState);
  ci.applyChanges();
  setTimeout(() => ci.markup('currentSearchIdx').focus(), 0);
}

function removeCurrentSearch (ci) {
  const currentSearchIdx = ci.get('currentSearchIdx');
  _common_state__WEBPACK_IMPORTED_MODULE_1__["default"].resetSearch(currentSearchIdx);
  removeHighlightings(currentSearchIdx);
}

function removeAllSearches (ci) {
  _common_state__WEBPACK_IMPORTED_MODULE_1__["default"].resetAllSearches();
  _common_state__WEBPACK_IMPORTED_MODULE_1__["default"].COLORS.forEach((el, i) => removeHighlightings(i));
}

function removeHighlightings (searchId) {
  Object(_common_interaction__WEBPACK_IMPORTED_MODULE_4__["sendMessageToCurrentTab"])('removeHighlightings', { searchId });
}

function refineFindings (opts, cb) {
  Object(_common_interaction__WEBPACK_IMPORTED_MODULE_4__["sendMessageToCurrentTab"])('refineFindings', opts, cb);
}

function switchGroup (ci, changeObj) {
  const action = Object.keys(changeObj)[0];
  const value = changeObj[action];

  let nextSearchIdx;
  switch (action) {
    case 'inc':
      const currentSearchIdx = ci.get('currentSearchIdx');
      nextSearchIdx = increment(currentSearchIdx, value, [0, _common_state__WEBPACK_IMPORTED_MODULE_1__["default"].searchesLength() - 1]);
      break;

    default:
      nextSearchIdx = value;
      break;
  }

  const nextSearch = _common_state__WEBPACK_IMPORTED_MODULE_1__["default"].getSearch(nextSearchIdx);

  ci.set(nextSearch);
  if (nextSearch.foundResults) {
    moveToHighlighting(nextSearchIdx, nextSearch.shownResultNumber);
  }
}

function switchCaseSensitivity (ci) {
  ci.set({ caseSensitive: !ci.get('caseSensitive') })
}

/**********************************************************************

    TEMPORARY FIX FOR FINDING STRINGS THAT ARE ENTERED IN INPUTS

***********************************************************************/

function FIND_API_INPUT_BUG_FIX_BEFORE (cb) {
  Object(_common_interaction__WEBPACK_IMPORTED_MODULE_4__["sendMessageToCurrentTab"])('FIND_API_INPUT_BUG_FIX_BEFORE', null, cb);
}

function FIND_API_INPUT_BUG_FIX_AFTER () {
  Object(_common_interaction__WEBPACK_IMPORTED_MODULE_4__["sendMessageToCurrentTab"])('FIND_API_INPUT_BUG_FIX_AFTER');
}


/***/ }),

/***/ "./src/ui-components/app/markup.html":
/*!*******************************************!*\
  !*** ./src/ui-components/app/markup.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <ul x-lb=\"searchStrings\">\r\n    <search-string>\r\n  </ul>\r\n  <div class=\"upperButtons\">\r\n    <button x-b=\"searchButton\">Find</button>\r\n    <button x-b=\"caseButton\" title=\"Case-sensitive on/off\">C</button>\r\n    <div class=\"search-constrols\">\r\n      <button x-b=\"moveLeft\" tabindex=\"-1\"></button>\r\n      <button x-b=\"currentSearchIdx\" tabindex=\"0\"></button>\r\n      <button x-b=\"removeSearch\" tabindex=\"-1\" title=\"Remove current search\"></button>\r\n      <button x-b=\"moveRight\" tabindex=\"-1\"></button>\r\n    </div>\r\n  </div>\r\n\r\n  <div x-b=\"results\" >\r\n    <span x-b=\"foundResults\"></span>\r\n    <div x-b=\"controls\" class=\"hidden\">\r\n      <button x-b=\"blink\" title=\"Get findings to blink\">Blink</button>\r\n      <button x-b=\"moveUp\"></button>\r\n      <button x-b=\"moveDown\"></button>\r\n      <span x-b=\"shownResultNumber\"></span>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ "./src/ui-components/app/styles.js":
/*!*****************************************!*\
  !*** ./src/ui-components/app/styles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((vars) => ({

  '': {
    fontSize: 15,
    boxSizing: 'border-box',
    fontFamily: 'sans-serif',
    width: vars.APP_WIDTH,
    marginTop: 18,
  },

  'button': {
    background: 'none',
    fontSize: 15,
    '-webkit-appearance': 'none',
    border: '2px solid black',
    cursor: 'pointer',
    verticalAlign: 'top,'
  },

  'button:hover': {
    color: 'DarkGreen',
    borderColor: 'LimeGreen'
  },

  'button:focus': {
    outline: 'none',
  },

  'button:active': {
    outline: '1px solid LimeGreen',
  },

  '.upperButtons': {
    float: 'right',
    marginTop: 5,
  },

  searchStrings: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'inline-block',
    width: vars.MAX_INPUT_WIDTH,
  },

  '.searchString:first-child': {
    marginLeft: 0,
  },

  searchButton: {
    width: 45,
  },

  caseButton: {
    width: 20,
    marginLeft: 2,
    paddingLeft: 0,
    paddingRight: 1,
  },

  '.search-constrols': {
    display: 'inline-block',
    position: 'relative',
  },

  currentSearchIdx: {
    width: 20,
    height: 22,
    paddingLeft: 1,
    paddingRight: 1,
  },

  removeSearch: {
    position: 'absolute',
    padding: 0,
    width: 14,
    height: 14,
    top: -16,
    right: -5,
  },

  'removeSearch::before, removeSearch::after': {
    content: "''",
    display: 'block',
    position: 'absolute',
    background: 'black',
    width: '100%',
    height: 2,
    top: 4,
    cursor: 'pointer',
  },

  'removeSearch:hover': {
    borderColor: 'OrangeRed',
  },

  'removeSearch:hover::before, removeSearch:hover::after': {
    background: 'DarkRed'
  },

  'removeSearch::before': {
    transform: 'rotate(45deg)',
  },

  'removeSearch::after': {
    transform: 'rotate(-45deg)',
  },

  'currentSearchIdx:focus': {
    color: 'DarkGreen',
    borderColor: 'LimeGreen',
    outline: '1px solid LimeGreen',
    animation: 'outline_blinker 1.3s linear infinite'
  },

  '.hidden': {
    display: 'none'
  },

  results: {
    paddingTop: 3,
    paddingBottom: 5,
    overflow: 'auto',
  },

  foundResults: {
    display: 'inline-block',
    paddingTop: 9,
    paddingRight: 12,
    verticalAlign: 'middle',
  },

  shownResultNumber: {
    display: 'inline-block',
    paddingTop: 9,
    paddingRight: 3,
    paddingLeft: 5,
    verticalAlign: 'middle',
  },

  'foundResults, controls': {
    float: 'right',
  },

  'blink': {
    height: 23,
    verticalAlign: 'bottom',
    marginRight: 5,
  },

  'moveUp, moveDown': {
    width: 32,
    height: 23,
    position: 'relative',
  },

  'moveUp::before, moveUp::after, moveDown::before, moveDown::after': {
    content: "''",
    display: 'block',
    position: 'absolute',
    background: 'black',
    width: 13,
    height: 3,
    top: 8
  },

  'moveUp:hover::before, moveUp:hover::after, moveDown:hover::before, moveDown:hover::after': {
    background: 'DarkGreen'
  },

  'moveUp::before, moveDown::before': {
    left: 4
  },

  'moveUp::after, moveDown::after': {
    right: 4
  },

  'moveDown::before' : {
    transform: 'rotate(45deg)'
  },

  'moveDown::after' : {
    transform: 'rotate(-45deg)'
  },

  'moveUp::before' : {
    transform: 'rotate(-45deg)'
  },

  'moveUp::after' : {
    transform: 'rotate(45deg)'
  },

  'moveLeft:hover': {
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
  },

  'moveRight:hover': {
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
  },

  moveLeft: {
    padding: 0,
    verticalAlign: 'top',
    marginTop: 4,
    border: 'none',
    borderTop: '7px solid transparent',
    borderRight: '7px solid black',
    borderBottom: '7px solid transparent',
  },

  moveRight: {
    padding: 0,
    verticalAlign: 'top',
    marginTop: 4,
    border: 'none',
    borderTop: '7px solid transparent',
    borderLeft: '7px solid black',
    borderBottom: '7px solid transparent',
  },

}));


/***/ }),

/***/ "./src/ui-components/search-string/index.js":
/*!**************************************************!*\
  !*** ./src/ui-components/search-string/index.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var couli__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! couli */ "./node_modules/couli/dist/couli.js");
/* harmony import */ var couli__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(couli__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _markup_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markup.html */ "./src/ui-components/search-string/markup.html");
/* harmony import */ var _markup_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_markup_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/ui-components/search-string/styles.js");





const ACTIVE_SEARCH_INPUT_LENGTH = 150;
const MAX_INPUT_WIDTH = 255;
const MIN_INPUT_WIDTH = 110;
const SPACE_BETWEEN_INPUTS = 34;
const LETTER_WIDTH = 11;
const UNFOCUSED_INPUT_PADDING = 14;
const ENTER_KEY = 13;
const BACKSPACE_KEY = 8;
const ADD_SIGN_PADDING = 12;

couli__WEBPACK_IMPORTED_MODULE_0___default.a.define('search-string', _markup_html__WEBPACK_IMPORTED_MODULE_1___default.a, {

  focus: {},

  string: {
    events: {
      keyup: function keyup (e, el, ci, i) {
        e.stopPropagation();
        const parentScope = ci.up(2);
        const searchStrings = parentScope.get('searchStrings');

        if (e.keyCode === ENTER_KEY && ci.get('string')) {
          ci.set({ focus: false });
          if (i + 1 === searchStrings.length()) {
            searchStrings.push([{ string: '', focus: true, distance: 1 }]);
          } else {
            searchStrings.get(i + 1).set({ focus: true });
          }
          parentScope.set({ lastFocused: i + 1 })
          return;
        }

        if (e.keyCode === BACKSPACE_KEY && !ci.get('string').length && searchStrings.length() > 1) {
          const previousString = searchStrings.get(i - 1);
          previousString.set({ focus: true });
          parentScope.set({ lastFocused: i - 1 })
          searchStrings.remove(i);
          return;
        }

        ci.set({ string: e.target.value });

      },

      click: function click (e, el, ci, i) {
        const parentScope = ci.up(2);
        const searchStrings = parentScope.get('searchStrings');
        const lastFocusedIndex = parentScope.get('lastFocused');
        const previousFocused = searchStrings.get( lastFocusedIndex );

        if (!previousFocused.get('string').length && lastFocusedIndex && i !== lastFocusedIndex && (lastFocusedIndex + 1) === searchStrings.length()) {
          searchStrings.remove(lastFocusedIndex);
        } else {
          previousFocused.set({ focus: false });
        }

        parentScope.set({ lastFocused: i });
        ci.set({ focus: true });
      },

    },

    style: ($, ci) => {
      let width;

      if (!$.focus) {
        width = ci.get('string').length * LETTER_WIDTH + UNFOCUSED_INPUT_PADDING

      } else {
        const unfocusedInputs = ci.up().filter((input) => !input.focus);
        width = unfocusedInputs.reduce((focusedInputLength, input) => {
          return focusedInputLength - input.string.length * LETTER_WIDTH - UNFOCUSED_INPUT_PADDING - SPACE_BETWEEN_INPUTS;
        }, MAX_INPUT_WIDTH);

        if (width < MIN_INPUT_WIDTH) {
          width = MAX_INPUT_WIDTH;
        }

        width = width - ADD_SIGN_PADDING;

      }

      return { width };
    },
  },

  distance: [
    (item) => ({
      hidden: item.distance === null,
    }),
    [{
      keyup: (e, el, ci) => ci.set({ distance: { force: toNumberOrZero(e.target.value) }})
    }]
  ],

  remove: {
    events: {
      click: (e, el, ci, i) => {
        const parentScope = ci.up(2);
        const searchStrings = ci.up();
        const previousString = searchStrings.get(i - 1);
        previousString.set({ focus: true });
        parentScope.set({ lastFocused: i - 1 })
        searchStrings.remove(i);
      }
    },
    class: ($) => ({ hidden: $.first || !$.focus }),
  },

  addNew: {
    events: {
      click: (e, el, ci, i) => {
        const parentScope = ci.up(2);
        const searchStrings = parentScope.get('searchStrings');
        ci.set({ focus: false });
        searchStrings.add(i + 1, [{ string: '', focus: true, distance: 1 }]);
        parentScope.set({ lastFocused: i + 1 })
      },
    },
    class: ($) => ({ hidden: !$.focus || !$.string.length }),
  },

  focus: {
    hooks: {
      update: (el, value, ci) => {
        if (value) {
          ci.markup('string').focus();
        }
      }
    }
  },

  '': {
    hooks: {
      mount: (e, v, ci) => ci.markup('string').focus(),
    }
  }

}, Object(_styles__WEBPACK_IMPORTED_MODULE_2__["default"])({ SPACE_BETWEEN_INPUTS, ACTIVE_SEARCH_INPUT_LENGTH }));

function toNumberOrZero (str) {
  return +str || 0;
}


/***/ }),

/***/ "./src/ui-components/search-string/markup.html":
/*!*****************************************************!*\
  !*** ./src/ui-components/search-string/markup.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li>\r\n  <input x-b=\"string\" type=\"text\" class=\"string\">\r\n  <input x-b=\"distance\" type=\"text\" class=\"distance\" title=\"Distance between substrings\">\r\n  <button x-b=\"remove\" tabindex=\"-1\" title=\"Remove substring\"></button>\r\n  <button x-b=\"addNew\" tabindex=\"-1\" title=\"Add new substring\"></button>\r\n</li>\r\n";

/***/ }),

/***/ "./src/ui-components/search-string/styles.js":
/*!***************************************************!*\
  !*** ./src/ui-components/search-string/styles.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((vars) => ({

  '': {
    position: 'relative',
    display: 'inline-block',
    marginLeft: vars.SPACE_BETWEEN_INPUTS,
    marginTop: 5,
    marginBottom: 14,
  },

  string: {
    boxSizing: 'border-box',
    fontSize: 15,
    width: vars.ACTIVE_SEARCH_INPUT_LENGTH,
    '-webkit-appearance': 'none',
    borderWidth: 0,
    borderBottom: '2px solid black',
  },

  'string:focus': {
    outline: 'none',
    borderColor: 'LimeGreen'
  },

  distance: {
    width: vars.SPACE_BETWEEN_INPUTS - 10,
    position: 'absolute',
    left: -30,
    top: -17,
    '-webkit-appearance': 'none',
    borderWidth: 0,
    borderBottom: '1px solid black',
  },

  'distance:focus': {
    outline: 'none',
    borderColor: 'LimeGreen'
  },

  '.hidden': {
    display: 'none'
  },

  'addNew, remove': {
    width: 10,
    height: 10,
    padding: 0,
    position: 'absolute',
    border: 'none',
  },

  addNew: {
    right: -14,
    bottom: 4,
  },

  remove: {
    left: -14,
    bottom: 4,
  },

  'addNew::before, addNew::after, remove::before, remove::after': {
    content: "''",
    display: 'block',
    position: 'absolute',
    background: 'black',
    cursor: 'pointer',
    width: '100%',
  },

  'addNew::before, addNew::after': {
    background: 'DarkGreen',
    height: 2,
    top: 5,
  },

  'addNew:hover::before, addNew:hover::after': {
    background: 'LimeGreen',
  },

  'remove::before, remove::after': {
    background: 'DarkRed',
    height: 2,
    top: 5,
  },

  'remove:hover::before, remove:hover::after': {
    background: 'OrangeRed',
  },

  'addNew::before': {
    transform: 'rotate(90deg)',
  },

  'remove::before': {
    transform: 'rotate(45deg)',
  },

  'remove::after': {
    transform: 'rotate(-45deg)',
  }

}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvdWxpL2Rpc3QvY291bGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pbnRlcmFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3N0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9wb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWktY29tcG9uZW50cy9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLWNvbXBvbmVudHMvYXBwL21hcmt1cC5odG1sIiwid2VicGFjazovLy8uL3NyYy91aS1jb21wb25lbnRzL2FwcC9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLWNvbXBvbmVudHMvc2VhcmNoLXN0cmluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWktY29tcG9uZW50cy9zZWFyY2gtc3RyaW5nL21hcmt1cC5odG1sIiwid2VicGFjazovLy8uL3NyYy91aS1jb21wb25lbnRzL3NlYXJjaC1zdHJpbmcvc3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7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QUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsb0dBQW9HLG1CQUFtQixFQUFFLG1CQUFtQiw4SEFBOEg7O0FBRTFROztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGNBQWM7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsaUJBQWlCLGlCQUFpQjs7QUFFbEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIscUJBQXFCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUCxVQUFVO0FBQ1YsQ0FBQztBQUNELDJDQUEyQyxjQUFjLG1zdEo7Ozs7Ozs7Ozs7OztBQ3Y1RXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFTztBQUNQLDZCQUE2QixvQ0FBb0M7QUFDakU7O0FBRU87QUFDUCw4QkFBOEIsaUNBQWlDO0FBQy9EOztBQUVPO0FBQ1A7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPLHlDQUF5QztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsNERBQTREO0FBQy9GO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0MsMkNBQTJDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3pHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUNTO0FBQ1U7QUFDVjs7QUFPTDs7QUFFOUIsbURBQW1ELHFFQUFTOztBQUU1RCx5RUFBYTtBQUNiLGlCQUFpQix1RUFBVyxjQUFjLGdCQUFnQixJQUFJLGVBQWU7O0FBRTdFOztBQUVBOztBQUVBLGtEQUFrRCwwQkFBMEI7QUFDNUU7QUFDQSxVQUFVLG1GQUF1QixlQUFlLG1CQUFtQjtBQUNuRSxVQUFVLHVFQUFXLGNBQWMsNkJBQTZCO0FBQ2hFLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFJLHFEQUFLO0FBQ1QsSUFBSSx1RUFBVyxnQkFBZ0IsY0FBYztBQUM3QyxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLHFEQUFLOztBQUVULFFBQVEscURBQUs7QUFDYixNQUFNLHFEQUFLO0FBQ1g7QUFDQSxHQUFHO0FBQ0gsSUFBSSxxREFBSztBQUNUOztBQUVBLEVBQUUsdUVBQVcsZ0JBQWdCLGFBQWE7QUFDMUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE1BQU0scURBQUs7O0FBRVg7QUFDQSxLQUFLOztBQUVMLEdBQUc7QUFDSDs7QUFFQTtBQUNBLEVBQUUsbUZBQXVCLHNCQUFzQixTQUFTLHFEQUFLLFNBQVM7QUFDdEU7O0FBRUE7QUFDQSxFQUFFLDRDQUFLO0FBQ1A7O0FBRUE7QUFDQSxFQUFFLG1GQUF1QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDYTs7QUFFSjtBQUNMOztBQUVxQzs7QUFFbkU7QUFDQTtBQUNBLHVGQUF1RjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsNENBQUssZUFBZSxtREFBTTs7QUFFMUIsaUJBQWlCO0FBQ2pCLG9CQUFvQjtBQUNwQixtQkFBbUI7QUFDbkIsV0FBVztBQUNYLGNBQWM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUgsa0JBQWtCLG1DQUFtQzs7QUFFckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixVQUFVO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsU0FBUztBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLHNCQUFzQjtBQUNuRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxjQUFjLHdDQUF3QyxVQUFVLEdBQUc7QUFDbkUsZUFBZSx3Q0FBd0MsU0FBUyxHQUFHOztBQUVuRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUgsWUFBWSxpQkFBaUIsNEJBQTRCLEdBQUc7O0FBRTVELHFCQUFxQiwwQkFBMEI7O0FBRS9DLFlBQVkscURBQXFEOztBQUVqRSxjQUFjLG9EQUFvRDs7QUFFbEU7QUFDQSxhQUFhLHdDQUF3QztBQUNyRDtBQUNBLDRDQUE0QyxVQUFVO0FBQ3RELEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixxREFBSztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBLFFBQVEscURBQUs7QUFDYjtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUUsdURBQU0sRUFBRSw2QkFBNkI7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx1REFBdUQsd0NBQXdDO0FBQy9GO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVAsS0FBSzs7QUFFTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVSxvQkFBb0I7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG9CQUFvQjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsRUFBRSxtRkFBdUI7QUFDekI7QUFDQSxHQUFHOztBQUVILFVBQVUsNEJBQTRCO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLG1GQUF1Qix3QkFBd0IsdUJBQXVCO0FBQ3hFOztBQUVBO0FBQ0E7O0FBRUEseUJBQXlCLHFEQUFLO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLHFEQUFLO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEVBQUUscURBQUs7QUFDUCxFQUFFLHFEQUFLO0FBQ1A7O0FBRUE7QUFDQSxFQUFFLG1GQUF1Qix5QkFBeUIsV0FBVztBQUM3RDs7QUFFQTtBQUNBLEVBQUUsbUZBQXVCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxxREFBSztBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscURBQUs7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLDBDQUEwQztBQUNwRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEVBQUUsbUZBQXVCO0FBQ3pCOztBQUVBO0FBQ0EsRUFBRSxtRkFBdUI7QUFDekI7Ozs7Ozs7Ozs7OztBQ2hWQSxpOUI7Ozs7Ozs7Ozs7OztBQ0FBO0FBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxDQUFDLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2hPSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7O0FBRVM7QUFDTDs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDQUFLLHlCQUF5QixtREFBTTs7QUFFcEMsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsZUFBZTtBQUNqQztBQUNBLGlDQUFpQyx1Q0FBdUM7QUFDeEUsV0FBVztBQUNYLDBDQUEwQyxjQUFjO0FBQ3hEO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsY0FBYztBQUM1QywyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IseUJBQXlCOztBQUV6QyxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVCwrQkFBK0IsZUFBZTtBQUM5Qzs7QUFFQSx5QkFBeUIsaUJBQWlCO0FBQzFDLGdCQUFnQixjQUFjO0FBQzlCLE9BQU87O0FBRVAsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGNBQWM7QUFDZCxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxvQ0FBb0MsWUFBWSx5Q0FBeUM7QUFDekYsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixjQUFjO0FBQzFDLHlCQUF5QixxQkFBcUI7QUFDOUM7QUFDQTtBQUNBLEtBQUs7QUFDTCxvQkFBb0IsOEJBQThCO0FBQ2xELEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixlQUFlO0FBQy9CLG1DQUFtQyx1Q0FBdUM7QUFDMUUseUJBQXlCLHFCQUFxQjtBQUM5QyxPQUFPO0FBQ1AsS0FBSztBQUNMLG9CQUFvQix1Q0FBdUM7QUFDM0QsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsRUFBRSx1REFBTSxFQUFFLG1EQUFtRDs7QUFFOUQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuSkEsd1c7Ozs7Ozs7Ozs7OztBQ0FBO0FBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLENBQUMsRUFBQyIsImZpbGUiOiIuL3BvcHVwL3BvcHVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcG9wdXAuanNcIik7XG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJDb3VsaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJDb3VsaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLmpzXCIpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyBcIi4vc3JjL0RlZmluaXRpb24uanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9EZWZpbml0aW9uLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuUkVTRVJWRURfQklORElOR19OQU1FUyA9IGV4cG9ydHMuVkFMVUVfVFlQRVMgPSBleHBvcnRzLmlzQ29tcG9uZW50ID0gZXhwb3J0cy5zaG9ydGVuQmluZGluZ0lkID0gZXhwb3J0cy5nZXRDb21wb25lbnRPcHRzID0gZXhwb3J0cy5kZWZpbmUgPSB1bmRlZmluZWQ7XG5cbnZhciBfYXR0cmlidXRlcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZ2xvYmFscy9hdHRyaWJ1dGVzICovIFwiLi9zcmMvZ2xvYmFscy9hdHRyaWJ1dGVzLmpzXCIpO1xuXG52YXIgX2F0dHJpYnV0ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXR0cmlidXRlcyk7XG5cbnZhciBfcmVnZXhwID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9nbG9iYWxzL3JlZ2V4cCAqLyBcIi4vc3JjL2dsb2JhbHMvcmVnZXhwLmpzXCIpO1xuXG52YXIgX3JlZ2V4cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWdleHApO1xuXG52YXIgX2RvbSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVycy9kb20gKi8gXCIuL3NyYy9oZWxwZXJzL2RvbS5qc1wiKTtcblxudmFyIF9vYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlcnMvb2JqZWN0ICovIFwiLi9zcmMvaGVscGVycy9vYmplY3QuanNcIik7XG5cbnZhciBfY29weSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVycy9jb3B5ICovIFwiLi9zcmMvaGVscGVycy9jb3B5LmpzXCIpO1xuXG52YXIgX2NvcHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29weSk7XG5cbnZhciBfY2hlY2tlcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlcnMvY2hlY2tlcnMgKi8gXCIuL3NyYy9oZWxwZXJzL2NoZWNrZXJzLmpzXCIpO1xuXG52YXIgX2NvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVycy9jb21tb24gKi8gXCIuL3NyYy9oZWxwZXJzL2NvbW1vbi5qc1wiKTtcblxudmFyIF9TdGF0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vU3RhdGUgKi8gXCIuL3NyYy9TdGF0ZS5qc1wiKTtcblxudmFyIF9WaWV3ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9WaWV3ICovIFwiLi9zcmMvVmlldy5qc1wiKTtcblxudmFyIF9Db21wb25lbnRSZWRlZmluZUVycm9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9lcnJvcnMvQ29tcG9uZW50UmVkZWZpbmVFcnJvciAqLyBcIi4vc3JjL2Vycm9ycy9Db21wb25lbnRSZWRlZmluZUVycm9yLmpzXCIpO1xuXG52YXIgX0NvbXBvbmVudFJlZGVmaW5lRXJyb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29tcG9uZW50UmVkZWZpbmVFcnJvcik7XG5cbnZhciBfU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Vycm9ycy9TY29wZU5hbWVDb2xsaXNpb25FcnJvciAqLyBcIi4vc3JjL2Vycm9ycy9TY29wZU5hbWVDb2xsaXNpb25FcnJvci5qc1wiKTtcblxudmFyIF9TY29wZU5hbWVDb2xsaXNpb25FcnJvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TY29wZU5hbWVDb2xsaXNpb25FcnJvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBWQUxVRV9UWVBFUyA9IFsnc3R5bGUnLCAnY2xhc3MnLCAndmFsdWUnLCAnYXR0cnMnLCAnaHRtbCddO1xudmFyIFJFU0VSVkVEX0hPT0tTX05BTUVTID0gWydtb3VudCcsICd1cGRhdGUnLCAncmVtb3ZlJ107XG52YXIgREVGQVVMVF9IT09LUyA9ICgwLCBfb2JqZWN0LnRvT2JqZWN0KShSRVNFUlZFRF9IT09LU19OQU1FUywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge307XG59KTtcbnZhciBSRVNFUlZFRF9CSU5ESU5HX05BTUVTID0gVkFMVUVfVFlQRVMuY29uY2F0KFsnZXZlbnRzJywgJ2hvb2tzJywgJ2xpc3RJdGVtJywgX2F0dHJpYnV0ZXMyLmRlZmF1bHQuU0VMRl0pO1xuXG5leHBvcnRzLmRlZmluZSA9IGRlZmluZTtcbmV4cG9ydHMuZ2V0Q29tcG9uZW50T3B0cyA9IGdldENvbXBvbmVudE9wdHM7XG5leHBvcnRzLnNob3J0ZW5CaW5kaW5nSWQgPSBzaG9ydGVuQmluZGluZ0lkO1xuZXhwb3J0cy5pc0NvbXBvbmVudCA9IGlzQ29tcG9uZW50O1xuZXhwb3J0cy5WQUxVRV9UWVBFUyA9IFZBTFVFX1RZUEVTO1xuZXhwb3J0cy5SRVNFUlZFRF9CSU5ESU5HX05BTUVTID0gUkVTRVJWRURfQklORElOR19OQU1FUztcblxuXG52YXIgQ09NUE9ORU5UX0NPVU5URVIgPSAwO1xudmFyIENPTVBPTkVOVFMgPSB7fTtcblxuZnVuY3Rpb24gZGVmaW5lKG5hbWUsIG1hcmt1cCwgYmluZGluZ3MsIHN0eWxlcykge1xuICB2YXIgYXJncyA9ICgwLCBfY2hlY2tlcnMuaXNPYmplY3QpKG5hbWUpID8gbmFtZSA6IHsgbmFtZTogbmFtZSwgbWFya3VwOiBtYXJrdXAsIGJpbmRpbmdzOiBiaW5kaW5ncywgc3R5bGVzOiBzdHlsZXMgfTtcblxuICBuYW1lID0gKDAsIF9jb21tb24udG9DYW1lbENhc2UpKGFyZ3MubmFtZSk7XG5cbiAgaWYgKENPTVBPTkVOVFNbbmFtZV0pIHtcbiAgICB0aHJvdyBuZXcgX0NvbXBvbmVudFJlZGVmaW5lRXJyb3IyLmRlZmF1bHQobmFtZSk7XG4gIH1cblxuICB2YXIgY29tcG9uZW50SFRNTE1hcmt1cCA9ICgwLCBfZG9tLmNsb25lSFRNTE1hcmt1cCkoYXJncy5tYXJrdXApO1xuICBjb21wb25lbnRIVE1MTWFya3VwLmNsYXNzTGlzdC5hZGQobmFtZSk7XG5cbiAgQ09NUE9ORU5UX0NPVU5URVIgPSAwO1xuICB2YXIgY29tcG9uZW50ID0ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgc3RhdGU6IF9kZWZpbmVQcm9wZXJ0eSh7fSwgX2F0dHJpYnV0ZXMyLmRlZmF1bHQuU0VMRiwge30pLFxuICAgIHN0YXRlSWQ6IG5hbWUsXG4gICAgc3RhdGVQYXRoOiBbbmFtZV0sXG4gICAgc3RhdGVOYW1lczoge30sXG4gICAgbWFya3VwOiBjb21wb25lbnRIVE1MTWFya3VwLFxuICAgIGV2YWx1YXRlOiB7fSxcbiAgICBsaW5rczoge30sXG4gICAgaXNDb21wb25lbnQ6IHRydWUsXG4gICAgb3V0ZXJOYW1lczoge30sXG4gICAgX2xpbmtzOiB7fVxuICB9O1xuXG4gIGdhdGhlckJpbmRpbmdzRnJvbU1hcmt1cChjb21wb25lbnRIVE1MTWFya3VwLCBjb21wb25lbnQpO1xuXG4gIHZhciBub3JtYWxpemVkT3B0aW9ucyA9IG5vcm1hbGl6ZVVzZXJPcHRpb25zKGFyZ3MuYmluZGluZ3MsIHsgc3RhdGU6IHt9IH0pO1xuICAoMCwgX2NvcHkyLmRlZmF1bHQpKGNvbXBvbmVudCwgbm9ybWFsaXplZE9wdGlvbnMpO1xuXG4gIHByZXBhcmVCaW5kaW5ncyhjb21wb25lbnQsIGNvbXBvbmVudC5zdGF0ZUlkLCB7IHN0YXRlUGF0aDogW10sIGxpbmtzOiB7fSwgc3RhdGVOYW1lczogY29tcG9uZW50LnN0YXRlTmFtZXMgfSk7XG5cbiAgKDAsIF9WaWV3LmNyZWF0ZUFuZEFwcGVuZFN0eWxlcykocHJlcGFyZVN0eWxlcyhhcmdzLnN0eWxlcywgY29tcG9uZW50KSk7XG5cbiAgcmV0dXJuIENPTVBPTkVOVFNbbmFtZV0gPSBjb21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIGdhdGhlckJpbmRpbmdzRnJvbU1hcmt1cChjb21wb25lbnRIVE1MTWFya3VwLCBjb21wb25lbnQpIHtcbiAgKDAsIF9kb20ud2Fsa05vZGVzKShjb21wb25lbnRIVE1MTWFya3VwLCBmdW5jdGlvbiAoSFRNTE5vZGUpIHtcbiAgICB2YXIgYmluZGluZ09wdHMgPSBhbmFseXplQmluZGluZyhIVE1MTm9kZSk7XG5cbiAgICBpZiAoIWJpbmRpbmdPcHRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGJpbmRpbmcgPSBjcmVhdGVCaW5kaW5nKGJpbmRpbmdPcHRzLm5hbWUsIGNvbXBvbmVudCwgSFRNTE5vZGUpO1xuXG4gICAgaWYgKGJpbmRpbmdPcHRzLmlzQ29tcG9uZW50KSB7XG4gICAgICBzZXRDb21wb25lbnQoYmluZGluZywgYmluZGluZ09wdHMpO1xuICAgICAgSFRNTE5vZGUuY2xhc3NMaXN0LmFkZChfYXR0cmlidXRlczIuZGVmYXVsdC5QUkVGSVggKyBiaW5kaW5nLmlkKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnQuc3RhdGVbYmluZGluZy5uYW1lXSA9IGJpbmRpbmc7XG4gICAgYmluZGluZy5tYXJrdXAuY2xhc3NMaXN0LmFkZChfYXR0cmlidXRlczIuZGVmYXVsdC5QUkVGSVggKyBiaW5kaW5nLmlkLCBjb21wb25lbnQubmFtZSArICctJyArIGJpbmRpbmcubmFtZSk7XG5cbiAgICBpZiAoYmluZGluZ09wdHMuaXNMaXN0KSB7XG4gICAgICB2YXIgaXRlbU5vZGUgPSBIVE1MTm9kZS5jaGlsZHJlblswXTtcbiAgICAgIG1vZGlmeVRvTGlzdEJpbmRpbmcoYmluZGluZywgaXRlbU5vZGUpO1xuXG4gICAgICBpZiAoaXNDb21wb25lbnQoaXRlbU5vZGUpKSB7XG4gICAgICAgIHNldENvbXBvbmVudChiaW5kaW5nLmxpc3RJdGVtLCBnZXRDb21wb25lbnRPcHRzKGl0ZW1Ob2RlKSk7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cblxuICAgICAgZ2F0aGVyQmluZGluZ3NGcm9tTWFya3VwKGl0ZW1Ob2RlLCBiaW5kaW5nLmxpc3RJdGVtKTtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIHNldENvbXBvbmVudChjb21wb25lbnRCaW5kaW5nLCBzdWJDb21wb25lbnRPcHRzKSB7XG4gIHZhciBzdGF0ZU5hbWVzID0gT2JqZWN0LmFzc2lnbihjb21wb25lbnRCaW5kaW5nLnN0YXRlTmFtZXMsIHN1YkNvbXBvbmVudE9wdHMuY29tcG9uZW50LnN0YXRlTmFtZXMpO1xuICB2YXIgc3RhdGVJZCA9IHN1YkNvbXBvbmVudE9wdHMuY29tcG9uZW50Lm5hbWUgKyAneCcgKyBDT01QT05FTlRfQ09VTlRFUisrO1xuXG4gIGlmIChzdWJDb21wb25lbnRPcHRzLnN0YXRlTmFtZSkge1xuICAgIGlmIChzdGF0ZU5hbWVzW3N1YkNvbXBvbmVudE9wdHMuc3RhdGVOYW1lXSkge1xuICAgICAgdGhyb3cgbmV3IF9TY29wZU5hbWVDb2xsaXNpb25FcnJvcjIuZGVmYXVsdChzdWJDb21wb25lbnRPcHRzLnN0YXRlTmFtZSk7XG4gICAgfVxuXG4gICAgc3RhdGVJZCA9IHN1YkNvbXBvbmVudE9wdHMuc3RhdGVOYW1lO1xuICAgIGNvbXBvbmVudEJpbmRpbmcuc3RhdGVOYW1lc1tzdGF0ZUlkXSA9IHRydWU7XG4gIH1cblxuICAoMCwgX2NvcHkyLmRlZmF1bHQpKGNvbXBvbmVudEJpbmRpbmcsIHN1YkNvbXBvbmVudE9wdHMuY29tcG9uZW50KTtcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihjb21wb25lbnRCaW5kaW5nLCB7XG4gICAgaWQ6IHN0YXRlSWQsXG4gICAgc3RhdGVJZDogc3RhdGVJZCxcbiAgICBuYW1lOiBzdGF0ZUlkLFxuICAgIHN0YXRlTmFtZTogc3ViQ29tcG9uZW50T3B0cy5zdGF0ZU5hbWUsXG4gICAgc3RhdGVQYXRoOiBjb21wb25lbnRCaW5kaW5nLnN0YXRlUGF0aC5jb25jYXQoc3RhdGVJZCksXG4gICAgbWFya3VwOiBzdWJDb21wb25lbnRPcHRzLmNvbXBvbmVudC5tYXJrdXAuY2xvbmVOb2RlKHRydWUpLFxuICAgIGlzQ29tcG9uZW50OiB0cnVlLFxuICAgIHN0YXRlTmFtZXM6IHN0YXRlTmFtZXMsXG4gICAgX2xpbmtzOiBPYmplY3QuYXNzaWduKHt9LCBzdWJDb21wb25lbnRPcHRzLmxpbmtzKSxcbiAgICBvdXRlck5hbWVzOiBPYmplY3QuYXNzaWduKHt9LCBzdWJDb21wb25lbnRPcHRzLnJldkxpbmtzKVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZUJpbmRpbmdzKGNvbXBvbmVudCwgY3VycmVudFN0YXRlSWQsIHBhcmVudENvbXBvbmVudCkge1xuICB2YXIgY29tcG9uZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb21wb25lbnQubWFya3VwLnNldEF0dHJpYnV0ZShfYXR0cmlidXRlczIuZGVmYXVsdC5CSU5ESU5HX0lELCBzaG9ydGVuQmluZGluZ0lkKGN1cnJlbnRTdGF0ZUlkICsgX2F0dHJpYnV0ZXMyLmRlZmF1bHQuU1RBVEVfREVMSU1JVEVSICsgX2F0dHJpYnV0ZXMyLmRlZmF1bHQuU0VMRikpO1xuICBjb21wb25lbnRXcmFwcGVyLmFwcGVuZENoaWxkKGNvbXBvbmVudC5tYXJrdXApO1xuICBjb21wb25lbnQuc3RhdGVQYXRoID0gcGFyZW50Q29tcG9uZW50LnN0YXRlUGF0aC5jb25jYXQoY29tcG9uZW50LnN0YXRlSWQpO1xuICBjb21wb25lbnQuc3RhdGVOYW1lcyA9IHBhcmVudENvbXBvbmVudC5zdGF0ZU5hbWVzO1xuXG4gIHZhciBzdWJDb21wb25lbnRzID0gW107XG5cbiAgKDAsIF9vYmplY3QuZm9yRWFjaCkoY29tcG9uZW50LnN0YXRlLCBmdW5jdGlvbiAoYmluZGluZywgYmluZGluZ05hbWUpIHtcbiAgICB2YXIgb2xkQmluZGluZ0lkID0gYmluZGluZy5pZDtcbiAgICB2YXIgbmV3QmluZGluZ0lkID0gY3VycmVudFN0YXRlSWQgKyBfYXR0cmlidXRlczIuZGVmYXVsdC5TVEFURV9ERUxJTUlURVIgKyBiaW5kaW5nTmFtZTtcbiAgICB2YXIgc2hvcnRJZCA9IHNob3J0ZW5CaW5kaW5nSWQobmV3QmluZGluZ0lkKTtcblxuICAgIGlmIChiaW5kaW5nLm1hcmt1cCkge1xuICAgICAgdmFyIGJpbmRpbmdOb2RlID0gY29tcG9uZW50V3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuJyArIF9hdHRyaWJ1dGVzMi5kZWZhdWx0LlBSRUZJWCArIG9sZEJpbmRpbmdJZCk7XG4gICAgICBiaW5kaW5nTm9kZS5zZXRBdHRyaWJ1dGUoX2F0dHJpYnV0ZXMyLmRlZmF1bHQuQklORElOR19JRCwgc2hvcnRJZCk7XG4gICAgICBiaW5kaW5nTm9kZS5jbGFzc0xpc3QucmVtb3ZlKF9hdHRyaWJ1dGVzMi5kZWZhdWx0LlBSRUZJWCArIG9sZEJpbmRpbmdJZCk7XG4gICAgICBiaW5kaW5nTm9kZS5jbGFzc0xpc3QuYWRkKF9hdHRyaWJ1dGVzMi5kZWZhdWx0LlBSRUZJWCArIG5ld0JpbmRpbmdJZCk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbihiaW5kaW5nLCB7XG4gICAgICBzdGF0ZVBhdGg6IGNvbXBvbmVudC5zdGF0ZVBhdGguc2xpY2UoKSxcbiAgICAgIGhvb2tzOiBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX0hPT0tTLCBiaW5kaW5nLmhvb2tzKSxcbiAgICAgIGlkOiBuZXdCaW5kaW5nSWQsXG4gICAgICBzaG9ydElkOiBzaG9ydElkXG4gICAgfSk7XG5cbiAgICBwcmVwYXJlUmVhY3RpdmVGdW5jcyhiaW5kaW5nLCBjb21wb25lbnQpO1xuXG4gICAgaWYgKGJpbmRpbmcuaXNMaXN0KSB7XG4gICAgICBiaW5kaW5nLnN0YXRlUGF0aC5wdXNoKGJpbmRpbmdOYW1lKTtcbiAgICAgIGJpbmRpbmcuc3RhdGVOYW1lcyA9IGNvbXBvbmVudC5zdGF0ZU5hbWVzO1xuXG4gICAgICBwcmVwYXJlQmluZGluZ3MoYmluZGluZy5saXN0SXRlbSwgbmV3QmluZGluZ0lkICsgX2F0dHJpYnV0ZXMyLmRlZmF1bHQuU1RBVEVfREVMSU1JVEVSICsgX2F0dHJpYnV0ZXMyLmRlZmF1bHQuSVRFTSArIGJpbmRpbmcubGlzdEl0ZW0ubmFtZSwgYmluZGluZyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGJpbmRpbmcuaXNDb21wb25lbnQpIHtcbiAgICAgIHN1YkNvbXBvbmVudHMucHVzaChiaW5kaW5nKTtcbiAgICB9XG4gIH0pO1xuXG4gIHNldHVwQ29tcG9uZW50c0xpbmtzKGNvbXBvbmVudCwgcGFyZW50Q29tcG9uZW50KTtcbiAgY29tcG9uZW50LnRlbXBsYXRlID0gY29tcG9uZW50Lm1hcmt1cC5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgc3ViQ29tcG9uZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzdWJDb21wb25lbnQpIHtcbiAgICBwcmVwYXJlQmluZGluZ3Moc3ViQ29tcG9uZW50LCBjdXJyZW50U3RhdGVJZCArIF9hdHRyaWJ1dGVzMi5kZWZhdWx0LlNUQVRFX0RFTElNSVRFUiArIHN1YkNvbXBvbmVudC5zdGF0ZUlkLCBjb21wb25lbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVJlYWN0aXZlRnVuY3MoYmluZGluZywgY29tcG9uZW50RGF0YSkge1xuICBWQUxVRV9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgdmFyIHJlYWN0aXZlRnVuYyA9IGJpbmRpbmdbdHlwZV07XG4gICAgaWYgKCFyZWFjdGl2ZUZ1bmMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBiaW5kaW5nLmV2YWx1YXRlW3R5cGVdID0gcHJlcGFyZVJlYWN0aXZlRnVuYyhiaW5kaW5nLCB0eXBlLCByZWFjdGl2ZUZ1bmMsIGNvbXBvbmVudERhdGEpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVJlYWN0aXZlRnVuYyhiaW5kaW5nLCB0eXBlLCByZWFjdGl2ZUZ1bmMsIGNvbXBvbmVudERhdGEpIHtcbiAgdmFyIGRlcGVuZGVuY2llc05hbWVzID0gZ2V0RGVwZW5kZW5jaWVzTmFtZXMocmVhY3RpdmVGdW5jKTtcblxuICBkZXBlbmRlbmNpZXNOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChkZXBlbmRlbmN5TmFtZSkge1xuICAgIGlmICgoMCwgX2NoZWNrZXJzLmlzRW1wdHkpKGNvbXBvbmVudERhdGEuc3RhdGVbZGVwZW5kZW5jeU5hbWVdKSkge1xuICAgICAgY29tcG9uZW50RGF0YS5zdGF0ZVtkZXBlbmRlbmN5TmFtZV0gPSBjcmVhdGVCaW5kaW5nKGRlcGVuZGVuY3lOYW1lLCBjb21wb25lbnREYXRhKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREYXRhLnN0YXRlW2RlcGVuZGVuY3lOYW1lXS5kZXBlbmRhbnRzW2JpbmRpbmcubmFtZSArICc6JyArIHR5cGVdID0geyBuYW1lOiBiaW5kaW5nLm5hbWUsIHR5cGU6IHR5cGUgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZXMsIGNvbXBvbmVudEludGVyZmFjZSkge1xuICAgIHJldHVybiBjb21wdXRlKHJlYWN0aXZlRnVuYywgdmFsdWVzLCBjb21wb25lbnRJbnRlcmZhY2UpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXREZXBlbmRlbmNpZXNOYW1lcyhmdW5jKSB7XG4gIHZhciBmdW5jUGFyYW1zID0gZ2V0UGFyYW1OYW1lcyhmdW5jKTtcbiAgdmFyIHZhbHVlc09ialJlZ0V4cCA9IG5ldyBSZWdFeHAoJ1xcXFwnICsgZnVuY1BhcmFtc1swXSArICdcXFxcLihcXFxcRFteXFxcXHNcXFxcV10rKScsICdnJyk7XG4gIHZhciBkZXBlbmRlbmNpZXNOYW1lcyA9IFtdO1xuICB2YXIgZnVuY1N0ciA9IGZ1bmMudG9TdHJpbmcoKTtcbiAgdmFyIGRlcGVuZGVuY3lOYW1lID0gdm9pZCAwO1xuICB3aGlsZSAoZGVwZW5kZW5jeU5hbWUgPSB2YWx1ZXNPYmpSZWdFeHAuZXhlYyhmdW5jU3RyKSkge1xuICAgIGRlcGVuZGVuY2llc05hbWVzLnB1c2goZGVwZW5kZW5jeU5hbWVbMV0pO1xuICB9XG4gIHJldHVybiBkZXBlbmRlbmNpZXNOYW1lcztcbn1cblxuZnVuY3Rpb24gZ2V0UGFyYW1OYW1lcyhmdW5jKSB7XG4gIHZhciBmdW5jU3RyV2l0aG91dENvbW1lbnRzID0gZnVuYy50b1N0cmluZygpLnJlcGxhY2UoX3JlZ2V4cDIuZGVmYXVsdC5TVFJJUF9DT01NRU5UUywgJycpO1xuICB2YXIgcGFyYW1zU3RyID0gZnVuY1N0cldpdGhvdXRDb21tZW50cy5zbGljZShmdW5jU3RyV2l0aG91dENvbW1lbnRzLmluZGV4T2YoJygnKSArIDEsIGZ1bmNTdHJXaXRob3V0Q29tbWVudHMuaW5kZXhPZignKScpKTtcbiAgcmV0dXJuIHBhcmFtc1N0ci5tYXRjaChfcmVnZXhwMi5kZWZhdWx0LkFSR1VNRU5UX05BTUVTKSB8fCBbXTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZShmdW5jLCB2YWx1ZXNPYmosIGNvbXBvbmVudEludGVyZmFjZSkge1xuICByZXR1cm4gZnVuYy5jYWxsKHRoaXMsICgwLCBfU3RhdGUuZ2V0T25seVZhbHVlcykodmFsdWVzT2JqKSwgY29tcG9uZW50SW50ZXJmYWNlKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBDb21wb25lbnRzTGlua3MoY29tcG9uZW50LCBwYXJlbnRDb21wb25lbnQpIHtcbiAgT2JqZWN0LmFzc2lnbihwYXJlbnRDb21wb25lbnQubGlua3MsICgwLCBfb2JqZWN0Lm1hcCkoY29tcG9uZW50Lm91dGVyTmFtZXMsIGZ1bmN0aW9uIChrKSB7XG4gICAgcmV0dXJuIHsgbGluazogaywgY29tcG9uZW50OiBjb21wb25lbnQuc3RhdGVJZCB9O1xuICB9KSk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVVzZXJPcHRpb25zKG9wdGlvbnNPYmosIHBhcmVudE9iaiwgcGFyZW50S2V5KSB7XG4gIGlmICgoMCwgX2NoZWNrZXJzLmlzRnVuY3Rpb24pKG9wdGlvbnNPYmopKSB7XG4gICAgcmV0dXJuICgwLCBfb2JqZWN0LnNldCkocGFyZW50T2JqLCBbcGFyZW50S2V5XSwgeyBjbGFzczogb3B0aW9uc09iaiB9KTtcbiAgfVxuXG4gIGlmICgoMCwgX2NoZWNrZXJzLmlzQXJyYXkpKG9wdGlvbnNPYmopKSB7XG5cbiAgICBpZiAob3B0aW9uc09iai5sZW5ndGggPiAxKSB7XG4gICAgICBvcHRpb25zT2JqLmZvckVhY2goZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplVXNlck9wdGlvbnMob3B0aW9uLCBwYXJlbnRPYmosIHBhcmVudEtleSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoKDAsIF9jaGVja2Vycy5pc0Z1bmN0aW9uKShvcHRpb25zT2JqWzBdKSkge1xuICAgICAgcmV0dXJuICgwLCBfb2JqZWN0LnNldCkocGFyZW50T2JqLCBbcGFyZW50S2V5XSwgeyB2YWx1ZTogb3B0aW9uc09ialswXSB9KTtcbiAgICB9XG4gICAgaWYgKCgwLCBfY2hlY2tlcnMuaXNPYmplY3QpKG9wdGlvbnNPYmpbMF0pKSB7XG4gICAgICByZXR1cm4gKDAsIF9vYmplY3Quc2V0KShwYXJlbnRPYmosIFtwYXJlbnRLZXldLCB7IGV2ZW50czogb3B0aW9uc09ialswXSB9KTtcbiAgICB9XG4gIH1cblxuICAoMCwgX29iamVjdC5mb3JFYWNoKShvcHRpb25zT2JqLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgIGRlbGV0ZSBvcHRpb25zT2JqW2tleV07XG4gICAgdmFyIGJpbmRpbmcgPSBjcmVhdGVCaW5kaW5nKGtleSk7XG5cbiAgICBpZiAoKDAsIF9jaGVja2Vycy5pc09iamVjdCkodmFsdWUpKSB7XG4gICAgICBwYXJlbnRPYmpbJ3N0YXRlJ11ba2V5XSA9IE9iamVjdC5hc3NpZ24oYmluZGluZywgdmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHBhcmVudE9ialsnc3RhdGUnXVtrZXldID0gYmluZGluZztcbiAgICBub3JtYWxpemVVc2VyT3B0aW9ucyh2YWx1ZSwgcGFyZW50T2JqWydzdGF0ZSddLCBrZXkpO1xuICB9KTtcblxuICByZXR1cm4gcGFyZW50T2JqO1xufVxuXG5mdW5jdGlvbiBhbmFseXplQmluZGluZyhlbCkge1xuICBpZiAoaXNDb21wb25lbnQoZWwpKSB7XG4gICAgcmV0dXJuIGdldENvbXBvbmVudE9wdHMoZWwpO1xuICB9XG5cbiAgaWYgKCFlbC5nZXRBdHRyaWJ1dGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBuYW1lID0gZWwuZ2V0QXR0cmlidXRlKF9hdHRyaWJ1dGVzMi5kZWZhdWx0LlRFTVBMQVRFX0JJTkRJTkcpO1xuICBlbC5yZW1vdmVBdHRyaWJ1dGUoX2F0dHJpYnV0ZXMyLmRlZmF1bHQuVEVNUExBVEVfQklORElORyk7XG5cbiAgaWYgKG5hbWUpIHtcbiAgICByZXR1cm4geyBuYW1lOiBuYW1lLnRyaW0oKSB9O1xuICB9XG5cbiAgbmFtZSA9IGVsLmdldEF0dHJpYnV0ZShfYXR0cmlidXRlczIuZGVmYXVsdC5URU1QTEFURV9MSVNUX0JJTkRJTkcpO1xuICBlbC5yZW1vdmVBdHRyaWJ1dGUoX2F0dHJpYnV0ZXMyLmRlZmF1bHQuVEVNUExBVEVfTElTVF9CSU5ESU5HKTtcblxuICBpZiAobmFtZSkge1xuICAgIHJldHVybiB7IG5hbWU6IG5hbWUudHJpbSgpLCBpc0xpc3Q6IHRydWUgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0NvbXBvbmVudChlbCkge1xuICB2YXIgdGFnTmFtZSA9IGVsLnRhZ05hbWUgJiYgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gdGFnTmFtZSAmJiBDT01QT05FTlRTWygwLCBfY29tbW9uLnRvQ2FtZWxDYXNlKSh0YWdOYW1lKV07XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE9wdHMob2JqKSB7XG4gIHZhciBuYW1lID0gKDAsIF9jb21tb24udG9DYW1lbENhc2UpKG9iai50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICB2YXIgY29tcG9uZW50ID0gZ2V0Q29tcG9uZW50QnlOYW1lKG5hbWUpO1xuICB2YXIgbGlua3MgPSB7fTtcbiAgdmFyIHJldkxpbmtzID0ge307XG4gIHZhciBzdGF0ZU5hbWUgPSBudWxsO1xuXG4gIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG9iai5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG5cbiAgICBpZiAoYXR0ci5uYW1lID09PSBfYXR0cmlidXRlczIuZGVmYXVsdC5TVEFURV9OQU1FKSB7XG4gICAgICBzdGF0ZU5hbWUgPSBhdHRyLnZhbHVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpbm5lckxpbmsgPSAoMCwgX2NvbW1vbi50b0NhbWVsQ2FzZSkoYXR0ci5uYW1lKTtcbiAgICBsaW5rc1tpbm5lckxpbmtdID0gYXR0ci52YWx1ZTtcbiAgICByZXZMaW5rc1thdHRyLnZhbHVlXSA9IGlubmVyTGluaztcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgICBsaW5rczogbGlua3MsXG4gICAgcmV2TGlua3M6IHJldkxpbmtzLFxuICAgIHN0YXRlTmFtZTogc3RhdGVOYW1lLFxuICAgIG5hbWU6IG5hbWUsXG4gICAgaXNDb21wb25lbnQ6IHRydWVcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50QnlOYW1lKG5hbWUpIHtcbiAgcmV0dXJuIENPTVBPTkVOVFNbKDAsIF9jb21tb24udG9DYW1lbENhc2UpKG5hbWUpXTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQmluZGluZyhuYW1lLCBjb21wb25lbnQsIGVsKSB7XG4gIHZhciBjb21wb25lbnRPcHRzID0gY29tcG9uZW50ID8ge1xuICAgIGlkOiBjb21wb25lbnQuc3RhdGVJZCArIF9hdHRyaWJ1dGVzMi5kZWZhdWx0LlNUQVRFX0RFTElNSVRFUiArIG5hbWUsXG4gICAgc3RhdGVQYXRoOiBjb21wb25lbnQuc3RhdGVQYXRoLFxuICAgIHN0YXRlTmFtZXM6IGNvbXBvbmVudC5zdGF0ZU5hbWVzLFxuICAgIGlzTGlzdEl0ZW06IGNvbXBvbmVudC5pc0xpc3QsXG4gICAgc3RhdGVJZDogbmFtZVxuICB9IDoge307XG5cbiAgdmFyIGVsT3B0cyA9IGVsID8ge1xuICAgIGluaXRWYWx1ZTogZWwudmFsdWUgfHwgZWwuaW5uZXJIVE1MXG4gIH0gOiB7fTtcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7XG4gICAgbmFtZTogbmFtZSxcbiAgICBsaXN0ZW5lcnM6IFtdLFxuICAgIG1hcmt1cDogZWwsXG4gICAgZGVwZW5kYW50czoge30sXG4gICAgZXZlbnRzOiB7fSxcbiAgICBldmFsdWF0ZToge30sXG4gICAgbGlua3M6IHt9LFxuICAgIHN0YXRlOiBfZGVmaW5lUHJvcGVydHkoe30sIF9hdHRyaWJ1dGVzMi5kZWZhdWx0LlNFTEYsIHt9KSxcbiAgICBvdXRlck5hbWVzOiB7fSxcbiAgICBfbGlua3M6IHt9XG5cbiAgfSwgY29tcG9uZW50T3B0cywgZWxPcHRzKTtcbn1cblxuZnVuY3Rpb24gbW9kaWZ5VG9MaXN0QmluZGluZyhiaW5kaW5nLCBpdGVtTWFya3VwKSB7XG4gIGJpbmRpbmcuaXNMaXN0ID0gdHJ1ZTtcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihiaW5kaW5nLCB7XG4gICAgbWFya3VwOiBpdGVtTWFya3VwLFxuICAgIGxpc3RJdGVtOiBjcmVhdGVCaW5kaW5nKGl0ZW1NYXJrdXAudGFnTmFtZSwgYmluZGluZywgaXRlbU1hcmt1cClcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNob3J0ZW5CaW5kaW5nSWQoaWQpIHtcbiAgcmV0dXJuIGlkLnNwbGl0KF9hdHRyaWJ1dGVzMi5kZWZhdWx0LlNUQVRFX0RFTElNSVRFUikubWFwKGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiAoMCwgX2NvbW1vbi5nZXRTaG9ydE5hbWUpKGVsKTtcbiAgfSkuam9pbihfYXR0cmlidXRlczIuZGVmYXVsdC5TVEFURV9ERUxJTUlURVIpO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlU3R5bGVzKHN0eWxlQXJnLCBjb21wb25lbnQpIHtcbiAgcmV0dXJuICgwLCBfb2JqZWN0Lm1hcEtleXMpKHN0eWxlQXJnLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGtleS5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiBzZWxlY3Rvci50cmltKCk7XG4gICAgfSkubWFwKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuXG4gICAgICB2YXIgY2xhc3NOYW1lID0gJy4nICsgY29tcG9uZW50Lm5hbWU7XG5cbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICB2YXIgaXNCaW5kaW5nID0gY29tcG9uZW50LnN0YXRlW3NlbGVjdG9yLnNwbGl0KCcgJylbMF0uc3BsaXQoJzo6JylbMF0uc3BsaXQoJzonKVswXV07XG4gICAgICAgIHZhciBwcmVmaXggPSBpc0JpbmRpbmcgPyBjbGFzc05hbWUgKyAnLScgOiAnJztcbiAgICAgICAgY2xhc3NOYW1lICs9ICcgJyArIHByZWZpeCArIHNlbGVjdG9yO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH0pLmpvaW4oJywnKTtcbiAgfSk7XG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL0V2ZW50SGFuZGxlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvRXZlbnRIYW5kbGVyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5zZXR1cEV2ZW50SGFuZGxlcnMgPSB1bmRlZmluZWQ7XG5cbnZhciBfYXR0cmlidXRlcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZ2xvYmFscy9hdHRyaWJ1dGVzICovIFwiLi9zcmMvZ2xvYmFscy9hdHRyaWJ1dGVzLmpzXCIpO1xuXG52YXIgX2F0dHJpYnV0ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXR0cmlidXRlcyk7XG5cbnZhciBfb2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9oZWxwZXJzL29iamVjdCAqLyBcIi4vc3JjL2hlbHBlcnMvb2JqZWN0LmpzXCIpO1xuXG52YXIgX2NvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVycy9jb21tb24gKi8gXCIuL3NyYy9oZWxwZXJzL2NvbW1vbi5qc1wiKTtcblxudmFyIF9TdGF0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vU3RhdGUgKi8gXCIuL3NyYy9TdGF0ZS5qc1wiKTtcblxudmFyIF9TdGF0ZUNoYW5nZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vU3RhdGVDaGFuZ2UgKi8gXCIuL3NyYy9TdGF0ZUNoYW5nZS5qc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5zZXR1cEV2ZW50SGFuZGxlcnMgPSBzZXR1cEV2ZW50SGFuZGxlcnM7XG5cblxuZnVuY3Rpb24gc2V0dXBFdmVudEhhbmRsZXJzKGVsZW1lbnQpIHtcbiAgdmFyIGV2ZW50SGFuZGxlcnMgPSB7fTtcbiAgZ2F0aGVyQWxsRXZlbnRIYW5kbGVycyhlbGVtZW50LCBldmVudEhhbmRsZXJzKTtcblxuICB2YXIgbWFya3VwID0gZWxlbWVudC5lbDtcblxuICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChldmVudE5hbWUpIHtcbiAgICBtYXJrdXAuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZXhlY3V0ZUFsbENhbGxiYWNrc0luTGlzdChlLCBldmVudEhhbmRsZXJzW2V2ZW50TmFtZV0sIGVsZW1lbnQpO1xuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGV2ZW50TmFtZSBpbiBldmVudEhhbmRsZXJzKSB7XG4gICAgX2xvb3AoZXZlbnROYW1lKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnYXRoZXJBbGxFdmVudEhhbmRsZXJzKGNvbXBvbmVudCwgZ2F0aGVyZWRIYW5kbGVycykge1xuICBnYXRoZXJFdmVudEhhbmRsZXJzKGNvbXBvbmVudCwgZ2F0aGVyZWRIYW5kbGVycyk7XG5cbiAgaWYgKGNvbXBvbmVudC5zdGF0ZSkge1xuICAgICgwLCBfb2JqZWN0LmZvckVhY2gpKGNvbXBvbmVudC5zdGF0ZSwgZnVuY3Rpb24gKGJpbmRpbmcpIHtcbiAgICAgIHJldHVybiBnYXRoZXJBbGxFdmVudEhhbmRsZXJzKGJpbmRpbmcsIGdhdGhlcmVkSGFuZGxlcnMpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGNvbXBvbmVudC5saXN0SXRlbSkge1xuICAgIGdhdGhlckFsbEV2ZW50SGFuZGxlcnMoY29tcG9uZW50Lmxpc3RJdGVtLCBnYXRoZXJlZEhhbmRsZXJzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnYXRoZXJFdmVudEhhbmRsZXJzKGJpbmRpbmcsIGdhdGhlcmVkSGFuZGxlcnMpIHtcbiAgaWYgKCFiaW5kaW5nLmV2ZW50cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvciAodmFyIGV2ZW50TmFtZSBpbiBiaW5kaW5nLmV2ZW50cykge1xuICAgIGlmICghZ2F0aGVyZWRIYW5kbGVyc1tldmVudE5hbWVdKSB7XG4gICAgICBnYXRoZXJlZEhhbmRsZXJzW2V2ZW50TmFtZV0gPSB7fTtcbiAgICB9XG5cbiAgICBnYXRoZXJlZEhhbmRsZXJzW2V2ZW50TmFtZV1bYmluZGluZy5zaG9ydElkXSA9IGJpbmRpbmcuZXZlbnRzW2V2ZW50TmFtZV07XG4gIH1cbn1cblxuZnVuY3Rpb24gZXhlY3V0ZUFsbENhbGxiYWNrc0luTGlzdChlLCBldmVudEhhbmRsZXJzLCBlbGVtZW50KSB7XG4gIGRlY29yYXRlRXZlbnQoZSk7XG4gICgwLCBfU3RhdGVDaGFuZ2Uuc3RhcnRUcmFuc2FjdGlvbikoKTtcblxuICB2YXIgY3VySFRNTE5vZGUgPSBlLnRhcmdldDtcbiAgd2hpbGUgKGN1ckhUTUxOb2RlICE9PSBlbGVtZW50LmVsLnBhcmVudE5vZGUpIHtcbiAgICB2YXIgYmluZGluZ0lkID0gY3VySFRNTE5vZGUuZ2V0QXR0cmlidXRlKF9hdHRyaWJ1dGVzMi5kZWZhdWx0LkJJTkRJTkdfSUQpO1xuICAgIHZhciBldmVudEhhbmRsZXIgPSBldmVudEhhbmRsZXJzW2JpbmRpbmdJZF07XG5cbiAgICBpZiAoZXZlbnRIYW5kbGVyKSB7XG4gICAgICB2YXIgaW5kZXhsZXNzU3RhdGVQYXRoID0gYmluZGluZ0lkLnNwbGl0KF9hdHRyaWJ1dGVzMi5kZWZhdWx0LlNUQVRFX0RFTElNSVRFUik7XG4gICAgICBpbmRleGxlc3NTdGF0ZVBhdGgucG9wKCk7XG4gICAgICB2YXIgc3RhdGVQYXRoVG9JdGVtID0gZ2V0U3RhdGVQYXRoVG9JdGVtKGN1ckhUTUxOb2RlLCBpbmRleGxlc3NTdGF0ZVBhdGgpO1xuICAgICAgdmFyIGFjY2Vzc29yVG9EYXRhID0gKDAsIF9TdGF0ZS5jcmVhdGVBY2Nlc3NvcikoW2VsZW1lbnQuaWRdLmNvbmNhdChzdGF0ZVBhdGhUb0l0ZW0pKTtcblxuICAgICAgZXZlbnRIYW5kbGVyLmNhbGwodGhpcywgZSwgY3VySFRNTE5vZGUsIGFjY2Vzc29yVG9EYXRhLCArc3RhdGVQYXRoVG9JdGVtLnNsaWNlKC0yKVswXSk7XG5cbiAgICAgIGlmIChlLnByb3BhZ2F0aW9uU3RvcHBlZCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgY3VySFRNTE5vZGUgPSBjdXJIVE1MTm9kZS5wYXJlbnROb2RlO1xuICB9XG5cbiAgKDAsIF9TdGF0ZUNoYW5nZS5hcHBseUNoYW5nZXMpKCk7XG59XG5cbmZ1bmN0aW9uIGRlY29yYXRlRXZlbnQoZSkge1xuICB2YXIgc3RvcFByb3BhZ2F0aW9uID0gZS5zdG9wUHJvcGFnYXRpb24uYmluZChlKTtcbiAgZS5zdG9wUHJvcGFnYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgZS5wcm9wYWdhdGlvblN0b3BwZWQgPSB0cnVlO1xuICAgIHN0b3BQcm9wYWdhdGlvbigpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRTdGF0ZVBhdGhUb0l0ZW0oZWwsIGluZGV4bGVzc1N0YXRlUGF0aCkge1xuICB2YXIgc3RhdGVQYXRoID0gW107XG5cbiAgdmFyIGVsZW1lbnROYW1lID0gdm9pZCAwO1xuICB3aGlsZSAoZWxlbWVudE5hbWUgPSAoMCwgX2NvbW1vbi5nZXRSZWFsTmFtZSkoaW5kZXhsZXNzU3RhdGVQYXRoLnBvcCgpKSkge1xuXG4gICAgaWYgKCgwLCBfY29tbW9uLmhhcykoZWxlbWVudE5hbWUsIF9hdHRyaWJ1dGVzMi5kZWZhdWx0LklURU0pKSB7XG4gICAgICBlbGVtZW50TmFtZSA9IGVsZW1lbnROYW1lLnNsaWNlKF9hdHRyaWJ1dGVzMi5kZWZhdWx0LklURU0ubGVuZ3RoKTtcbiAgICAgIGVsID0gZ2V0VG9JdGVtTm9kZShlbCk7XG4gICAgICB2YXIgaWR4ID0gZWwuZ2V0QXR0cmlidXRlKF9hdHRyaWJ1dGVzMi5kZWZhdWx0LklURU1fSU5ERVgpO1xuICAgICAgZWwgPSBlbC5wYXJlbnROb2RlO1xuICAgICAgc3RhdGVQYXRoLnVuc2hpZnQoaWR4LCBlbGVtZW50TmFtZSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBzdGF0ZVBhdGgudW5zaGlmdChlbGVtZW50TmFtZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVQYXRoO1xufVxuXG5mdW5jdGlvbiBnZXRUb0l0ZW1Ob2RlKGVsKSB7XG4gIHZhciBjdXJFbCA9IGVsO1xuXG4gIHdoaWxlIChjdXJFbC50YWdOYW1lICE9PSAnQk9EWScpIHtcbiAgICBpZiAoY3VyRWwuZ2V0QXR0cmlidXRlKF9hdHRyaWJ1dGVzMi5kZWZhdWx0LklURU1fSU5ERVgpKSB7XG4gICAgICByZXR1cm4gY3VyRWw7XG4gICAgfVxuICAgIGN1ckVsID0gY3VyRWwucGFyZW50Tm9kZTtcbiAgfVxufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9Qcm9kdWN0aW9uLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvUHJvZHVjdGlvbi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmFwcGx5ID0gdW5kZWZpbmVkO1xuXG52YXIgX2RvbSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVycy9kb20gKi8gXCIuL3NyYy9oZWxwZXJzL2RvbS5qc1wiKTtcblxudmFyIF9EZWZpbml0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9EZWZpbml0aW9uICovIFwiLi9zcmMvRGVmaW5pdGlvbi5qc1wiKTtcblxudmFyIF9FdmVudEhhbmRsZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0V2ZW50SGFuZGxlciAqLyBcIi4vc3JjL0V2ZW50SGFuZGxlci5qc1wiKTtcblxudmFyIF9TdGF0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vU3RhdGUgKi8gXCIuL3NyYy9TdGF0ZS5qc1wiKTtcblxuZXhwb3J0cy5hcHBseSA9IGFwcGx5O1xuXG5cbmZ1bmN0aW9uIGFwcGx5KHJvb3RFbGVtZW50U2VsZWN0b3IpIHtcbiAgdmFyIHJvb3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihyb290RWxlbWVudFNlbGVjdG9yKTtcbiAgdmFyIEhUTUxOb2RlcyA9ICgwLCBfZG9tLmNvbGxlY3RIVE1MTm9kZXMpKHJvb3RFbGVtZW50LCBfRGVmaW5pdGlvbi5pc0NvbXBvbmVudCk7XG5cbiAgSFRNTE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKEhUTUxOb2RlKSB7XG4gICAgdmFyIGNvbXBvbmVudE9wdHMgPSAoMCwgX0RlZmluaXRpb24uZ2V0Q29tcG9uZW50T3B0cykoSFRNTE5vZGUpO1xuICAgIHZhciBlbGVtZW50ID0gc2V0dXBFbGVtZW50KGNvbXBvbmVudE9wdHMpO1xuXG4gICAgKDAsIF9kb20ucmVwbGFjZU5vZGVzKShIVE1MTm9kZSwgZWxlbWVudC5lbCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXR1cEVsZW1lbnQoY29tcG9uZW50T3B0cykge1xuICB2YXIgZWxlbWVudCA9ICgwLCBfU3RhdGUuY3JlYXRlRWxlbWVudCkoY29tcG9uZW50T3B0cyk7XG4gICgwLCBfRXZlbnRIYW5kbGVyLnNldHVwRXZlbnRIYW5kbGVycykoZWxlbWVudCk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9TdGF0ZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9TdGF0ZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wcmVwYXJlQ2hhbmdlT2JqZWN0ID0gZXhwb3J0cy5zZXRTdGF0ZSA9IGV4cG9ydHMuZ2V0Q29tcG9uZW50ID0gZXhwb3J0cy5nZXRPbmx5VmFsdWVzID0gZXhwb3J0cy5jcmVhdGVBY2Nlc3NvciA9IGV4cG9ydHMuY3JlYXRlRWxlbWVudCA9IHVuZGVmaW5lZDtcblxudmFyIF9hdHRyaWJ1dGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9nbG9iYWxzL2F0dHJpYnV0ZXMgKi8gXCIuL3NyYy9nbG9iYWxzL2F0dHJpYnV0ZXMuanNcIik7XG5cbnZhciBfYXR0cmlidXRlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hdHRyaWJ1dGVzKTtcblxudmFyIF9vYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlcnMvb2JqZWN0ICovIFwiLi9zcmMvaGVscGVycy9vYmplY3QuanNcIik7XG5cbnZhciBfY29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9oZWxwZXJzL2NvbW1vbiAqLyBcIi4vc3JjL2hlbHBlcnMvY29tbW9uLmpzXCIpO1xuXG52YXIgX0RlZmluaXRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0RlZmluaXRpb24gKi8gXCIuL3NyYy9EZWZpbml0aW9uLmpzXCIpO1xuXG52YXIgX1N0YXRlQ2hhbmdlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9TdGF0ZUNoYW5nZSAqLyBcIi4vc3JjL1N0YXRlQ2hhbmdlLmpzXCIpO1xuXG52YXIgX2NoZWNrZXJzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9oZWxwZXJzL2NoZWNrZXJzICovIFwiLi9zcmMvaGVscGVycy9jaGVja2Vycy5qc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudDtcbmV4cG9ydHMuY3JlYXRlQWNjZXNzb3IgPSBjcmVhdGVBY2Nlc3NvcjtcbmV4cG9ydHMuZ2V0T25seVZhbHVlcyA9IGdldE9ubHlWYWx1ZXM7XG5leHBvcnRzLmdldENvbXBvbmVudCA9IGdldENvbXBvbmVudDtcbmV4cG9ydHMuc2V0U3RhdGUgPSBzZXRTdGF0ZTtcbmV4cG9ydHMucHJlcGFyZUNoYW5nZU9iamVjdCA9IHByZXBhcmVDaGFuZ2VPYmplY3Q7XG5cblxudmFyIEVMRU1FTlRTID0ge307XG52YXIgU1RBVEUgPSB7fTtcbnZhciBFTEVNRU5UX0NPVU5URVIgPSAxO1xuXG5mdW5jdGlvbiBzZXRTdGF0ZShwYXRoLCB2YWx1ZSkge1xuICAoMCwgX29iamVjdC5zZXQpKFNUQVRFLCBwYXRoLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXRlKHBhdGgpIHtcbiAgcmV0dXJuICgwLCBfb2JqZWN0LmdldCkoU1RBVEUsIHBhdGgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGNvbXBvbmVudE9wdHMpIHtcbiAgdmFyIGlkID0gRUxFTUVOVF9DT1VOVEVSKys7XG4gIHZhciBuYW1lID0gY29tcG9uZW50T3B0cy5uYW1lO1xuXG4gIHZhciBlbGVtZW50ID0gRUxFTUVOVFNbaWRdID0ge1xuICAgIGlkOiBpZCxcbiAgICBzdGF0ZTogX2RlZmluZVByb3BlcnR5KHt9LCBuYW1lLCBjb21wb25lbnRPcHRzLmNvbXBvbmVudClcbiAgfTtcblxuICBTVEFURVtpZF0gPSB7fTtcblxuICAoMCwgX1N0YXRlQ2hhbmdlLmNyZWF0ZVN0YXRlTm9kZXMpKFtpZCwgbmFtZV0pO1xuXG4gICgwLCBfU3RhdGVDaGFuZ2Uuc2VuZFRvUmVuZGVyUXVldWUpKFtpZF0sIF9kZWZpbmVQcm9wZXJ0eSh7fSwgbmFtZSwgZmFsc2UpKTtcbiAgKDAsIF9TdGF0ZUNoYW5nZS5hcHBseUNoYW5nZXMpKCk7XG4gIGVsZW1lbnQuZWwgPSBTVEFURVtpZF1bbmFtZV1bX2F0dHJpYnV0ZXMyLmRlZmF1bHQuU0VMRl0uZWw7XG4gIGVsZW1lbnQuZWwuc2V0QXR0cmlidXRlKF9hdHRyaWJ1dGVzMi5kZWZhdWx0LkNPTVBPTkVOVF9UWVBFLCBfYXR0cmlidXRlczIuZGVmYXVsdC5CQVNFKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWNjZXNzb3IocGF0aCkge1xuICB2YXIgdmFsdWVzID0gZ2V0U3RhdGUocGF0aCk7XG4gIHZhciBjb21wb25lbnQgPSBnZXRDb21wb25lbnQocGF0aCk7XG5cbiAgdmFyIGFjY2Vzc29yID0ge1xuICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxuICAgIHZhbHVlczogdmFsdWVzLFxuICAgIHBhdGg6IHBhdGgsXG4gICAgc3RhcnRUcmFuc2FjdGlvbjogX1N0YXRlQ2hhbmdlLnN0YXJ0VHJhbnNhY3Rpb24sXG4gICAgYXBwbHlDaGFuZ2VzOiBfU3RhdGVDaGFuZ2UuYXBwbHlDaGFuZ2VzLFxuICAgIHVwOiBmdW5jdGlvbiB1cChsZXZlbCkge1xuICAgICAgcmV0dXJuIG1vdmVVcFN0YXRlUGF0aChsZXZlbCwgcGF0aC5zbGljZSgpKTtcbiAgICB9LFxuICAgIGRvd246IGZ1bmN0aW9uIGRvd24oYWRkaXRpb25hbFBhdGgpIHtcbiAgICAgIHJldHVybiBjcmVhdGVBY2Nlc3NvcihwYXRoLmNvbmNhdChhZGRpdGlvbmFsUGF0aCkpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoY2hhbmdlT2JqKSB7XG4gICAgICByZXR1cm4gKDAsIF9TdGF0ZUNoYW5nZS5zZXRWYWx1ZXMpKHByZXBhcmVDaGFuZ2VPYmplY3QoY2hhbmdlT2JqKSwgcGF0aCk7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICAgIHJldHVybiBnZXRWYWx1ZXMoYWNjZXNzb3IsIGtleSwgcGF0aCk7XG4gICAgfSxcbiAgICBtYXJrdXA6IGZ1bmN0aW9uIG1hcmt1cChrZXkpIHtcbiAgICAgIHJldHVybiBrZXkgPyBhY2Nlc3Nvci52YWx1ZXNba2V5XS5lbCA6IGFjY2Vzc29yLnZhbHVlc1tfYXR0cmlidXRlczIuZGVmYXVsdC5TRUxGXS5lbDtcbiAgICB9XG4gIH07XG5cbiAgaWYgKCgwLCBfY2hlY2tlcnMuaXNBcnJheSkodmFsdWVzKSkge1xuICAgIG1vZGlmeVRvQXJyYXlBY2Nlc3NvcihhY2Nlc3Nvcik7XG4gIH1cblxuICByZXR1cm4gYWNjZXNzb3I7XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVDaGFuZ2VPYmplY3QoY2hhbmdlT2JqKSB7XG4gIHJldHVybiAoMCwgX29iamVjdC5tYXApKGNoYW5nZU9iaiwgZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgZm9yY2VkID0gKDAsIF9jaGVja2Vycy5pc09iamVjdCkodikgJiYgT2JqZWN0LmtleXModilbMF0gPT09ICdmb3JjZSc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGZvcmNlZCA/IHZbJ2ZvcmNlJ10gOiB2LFxuICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgIGZvcmNlOiBmb3JjZWRcbiAgICB9O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50KHBhdGgpIHtcbiAgdmFyIGNvbXBvbmVudCA9IEVMRU1FTlRTW3BhdGhbMF1dO1xuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIGNvbXBvbmVudCA9IGNvbXBvbmVudC5zdGF0ZVtwYXRoW2ldXTtcblxuICAgIGlmIChjb21wb25lbnQuaXNMaXN0ICYmIGkgIT09IHBhdGgubGVuZ3RoIC0gMSkge1xuICAgICAgY29tcG9uZW50ID0gY29tcG9uZW50Lmxpc3RJdGVtO1xuICAgICAgaSArPSAyO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIGdldE9ubHlWYWx1ZXMob2JqKSB7XG4gIHJldHVybiAoMCwgX29iamVjdC5tYXApKG9iaiwgZnVuY3Rpb24gKGJpbmRpbmdWYWx1ZXMpIHtcbiAgICByZXR1cm4gYmluZGluZ1ZhbHVlc1sndmFsdWUnXTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlcyhhY2Nlc3Nvciwga2V5LCBzdGF0ZVBhdGgpIHtcbiAgdmFyIHZhbHVlcyA9IGFjY2Vzc29yLnZhbHVlcztcbiAgdmFyIGNvbXBvbmVudCA9IGFjY2Vzc29yLmNvbXBvbmVudDtcblxuICBpZiAoIWtleSkge1xuICAgIHJldHVybiBnZXRWYWx1ZXNUcmVlKHZhbHVlcywgY29tcG9uZW50LCB7fSk7XG4gIH1cblxuICB2YXIgYmluZGluZyA9IGNvbXBvbmVudC5zdGF0ZVtrZXldO1xuICBpZiAoYmluZGluZy5pc0xpc3QgfHwgYmluZGluZy5pc0NvbXBvbmVudCkge1xuICAgIHJldHVybiBjcmVhdGVBY2Nlc3NvcihzdGF0ZVBhdGguY29uY2F0KGtleSkpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlc1trZXldLnZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZXNUcmVlKHZhbHVlcywgY29tcG9uZW50LCB2YWx1ZXNUcmVlKSB7XG4gICgwLCBfb2JqZWN0LmZvckVhY2gpKHZhbHVlcywgZnVuY3Rpb24gKHZhbHMsIGJpbmRpbmdOYW1lKSB7XG4gICAgaWYgKCgwLCBfY29tbW9uLmhhcykoX0RlZmluaXRpb24uUkVTRVJWRURfQklORElOR19OQU1FUywgYmluZGluZ05hbWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGJpbmRpbmcgPSBjb21wb25lbnQuc3RhdGVbYmluZGluZ05hbWVdO1xuXG4gICAgaWYgKGJpbmRpbmcuaXNMaXN0KSB7XG4gICAgICB2YWx1ZXNUcmVlW2JpbmRpbmdOYW1lXSA9IFtdO1xuICAgICAgdmFsdWVzW2JpbmRpbmdOYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChlbCwgaSkge1xuICAgICAgICB2YXIgaXRlbVZhbHVlcyA9IHZhbHVlc1RyZWVbYmluZGluZ05hbWVdW2ldID0ge307XG4gICAgICAgIGdldFZhbHVlc1RyZWUodmFsdWVzW2JpbmRpbmdOYW1lXVtpXVtiaW5kaW5nLmxpc3RJdGVtLm5hbWVdLCBiaW5kaW5nLmxpc3RJdGVtLCBpdGVtVmFsdWVzKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChiaW5kaW5nLmlzQ29tcG9uZW50KSB7XG4gICAgICB2YXIgY29tcG9uZW50VmFsdWVzID0gdmFsdWVzVHJlZVtiaW5kaW5nTmFtZV0gPSB7fTtcbiAgICAgIGdldFZhbHVlc1RyZWUodmFsdWVzW2JpbmRpbmdOYW1lXSwgYmluZGluZywgY29tcG9uZW50VmFsdWVzKTtcbiAgICB9XG5cbiAgICB2YWx1ZXNUcmVlW2NvbXBvbmVudC5fbGlua3NbYmluZGluZ05hbWVdIHx8IGJpbmRpbmdOYW1lXSA9IHZhbHMudmFsdWU7XG4gIH0pO1xuXG4gIHJldHVybiB2YWx1ZXNUcmVlO1xufVxuXG5mdW5jdGlvbiBtb3ZlVXBTdGF0ZVBhdGgobGV2ZWwsIHN0YXRlUGF0aCkge1xuICB2YXIgbGFzdElkeCA9IHN0YXRlUGF0aC5sZW5ndGg7XG5cbiAgaWYgKGxldmVsID09PSAnJykge1xuICAgIHJldHVybiBjcmVhdGVBY2Nlc3NvcihzdGF0ZVBhdGguc2xpY2UoMCwgMikpO1xuICB9XG5cbiAgaWYgKCgwLCBfY2hlY2tlcnMuaXNTdHJpbmcpKGxldmVsKSkge1xuICAgIHdoaWxlIChsYXN0SWR4LS0pIHtcbiAgICAgIGlmIChzdGF0ZVBhdGhbbGFzdElkeF0gPT09IGxldmVsKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVBY2Nlc3NvcihzdGF0ZVBhdGguc2xpY2UoMCwgbGFzdElkeCArIDEpKTtcbiAgfVxuXG4gIGxldmVsID0gbGV2ZWwgfHwgMTtcbiAgd2hpbGUgKGxhc3RJZHgtLSAmJiBsZXZlbC0tKSB7XG4gICAgaWYgKCgwLCBfY2hlY2tlcnMuaXNOdW1iZXIpKCtzdGF0ZVBhdGhbbGFzdElkeCAtIDFdKSkge1xuICAgICAgbGFzdElkeC0tO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjcmVhdGVBY2Nlc3NvcihzdGF0ZVBhdGguc2xpY2UoMCwgbGFzdElkeCArIDEpKTtcbn1cblxuZnVuY3Rpb24gbW9kaWZ5VG9BcnJheUFjY2Vzc29yKGFjY2Vzc29yKSB7XG4gIE9iamVjdC5hc3NpZ24oYWNjZXNzb3IsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldChudW0pIHtcbiAgICAgIHJldHVybiBjcmVhdGVBY2Nlc3NvcihhY2Nlc3Nvci5wYXRoLmNvbmNhdChudW0sIGFjY2Vzc29yLmNvbXBvbmVudC5saXN0SXRlbS5uYW1lKSk7XG4gICAgfSxcblxuICAgIHB1c2g6IGZ1bmN0aW9uIHB1c2goZWxzKSB7XG4gICAgICByZXR1cm4gKDAsIF9TdGF0ZUNoYW5nZS5tb2RpZnlMaXN0KSgnYWRkJywgeyBzdGFydDogYWNjZXNzb3IudmFsdWVzLmxlbmd0aCwgZWxzOiBlbHMgfSwgYWNjZXNzb3IpO1xuICAgIH0sXG4gICAgdW5zaGlmdDogZnVuY3Rpb24gdW5zaGlmdChlbHMpIHtcbiAgICAgIHJldHVybiAoMCwgX1N0YXRlQ2hhbmdlLm1vZGlmeUxpc3QpKCdhZGQnLCB7IHN0YXJ0OiAwLCBlbHM6IGVscyB9LCBhY2Nlc3Nvcik7XG4gICAgfSxcbiAgICBhZGQ6IGZ1bmN0aW9uIGFkZChzdGFydCwgZWxzKSB7XG4gICAgICByZXR1cm4gKDAsIF9TdGF0ZUNoYW5nZS5tb2RpZnlMaXN0KSgnYWRkJywgeyBzdGFydDogc3RhcnQsIGVsczogZWxzIH0sIGFjY2Vzc29yKTtcbiAgICB9LFxuXG4gICAgcG9wOiBmdW5jdGlvbiBwb3AobnVtKSB7XG4gICAgICByZXR1cm4gKDAsIF9TdGF0ZUNoYW5nZS5tb2RpZnlMaXN0KSgncmVtb3ZlJywgeyBzdGFydDogYWNjZXNzb3IudmFsdWVzLmxlbmd0aCAtIChudW0gfHwgMSksIG51bTogbnVtIH0sIGFjY2Vzc29yKTtcbiAgICB9LFxuICAgIHNoaWZ0OiBmdW5jdGlvbiBzaGlmdChudW0pIHtcbiAgICAgIHJldHVybiAoMCwgX1N0YXRlQ2hhbmdlLm1vZGlmeUxpc3QpKCdyZW1vdmUnLCB7IHN0YXJ0OiAwLCBudW06IG51bSB9LCBhY2Nlc3Nvcik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShzdGFydCwgbnVtKSB7XG4gICAgICByZXR1cm4gKDAsIF9TdGF0ZUNoYW5nZS5tb2RpZnlMaXN0KSgncmVtb3ZlJywgeyBzdGFydDogc3RhcnQsIG51bTogbnVtIH0sIGFjY2Vzc29yKTtcbiAgICB9LFxuXG4gICAgbGVuZ3RoOiBmdW5jdGlvbiBsZW5ndGgoKSB7XG4gICAgICByZXR1cm4gYWNjZXNzb3IudmFsdWVzLmxlbmd0aDtcbiAgICB9LFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgIHJldHVybiBtYXBMaXN0KGFjY2Vzc29yKTtcbiAgICB9LFxuICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2IpIHtcbiAgICAgIHJldHVybiBpdGVyYXRlTGlzdFZhbHVlcyhhY2Nlc3NvciwgY2IpO1xuICAgIH0sXG4gICAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2IpIHtcbiAgICAgIHJldHVybiBmaWx0ZXJMaXN0KGFjY2Vzc29yLCBjYik7XG4gICAgfSxcbiAgICBtYXA6IGZ1bmN0aW9uIG1hcChjYikge1xuICAgICAgcmV0dXJuIG1hcExpc3QoYWNjZXNzb3IsIGNiKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpdGVyYXRlTGlzdFZhbHVlcyhhY2Nlc3NvciwgY2IpIHtcbiAgYWNjZXNzb3IudmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKGVsLCBpKSB7XG4gICAgcmV0dXJuIGNiKGdldFZhbHVlc1RyZWUoZWxbYWNjZXNzb3IuY29tcG9uZW50Lmxpc3RJdGVtLm5hbWVdLCBhY2Nlc3Nvci5jb21wb25lbnQubGlzdEl0ZW0sIHt9KSwgaSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJMaXN0KGFjY2Vzc29yLCBjYikge1xuICB2YXIgbmV3TGlzdCA9IFtdO1xuXG4gIGl0ZXJhdGVMaXN0VmFsdWVzKGFjY2Vzc29yLCBmdW5jdGlvbiAoZWwsIGkpIHtcbiAgICBpZiAoY2IoZWwsIGkpKSB7XG4gICAgICBuZXdMaXN0LnB1c2goZWwpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG5ld0xpc3Q7XG59XG5cbmZ1bmN0aW9uIG1hcExpc3QoYWNjZXNzb3IsIGNiKSB7XG4gIHZhciBuZXdMaXN0ID0gW107XG4gIGl0ZXJhdGVMaXN0VmFsdWVzKGFjY2Vzc29yLCBmdW5jdGlvbiAoZWwsIGkpIHtcbiAgICByZXR1cm4gbmV3TGlzdC5wdXNoKGNiID8gY2IoZWwsIGkpIDogZWwpO1xuICB9KTtcbiAgcmV0dXJuIG5ld0xpc3Q7XG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL1N0YXRlQ2hhbmdlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL1N0YXRlQ2hhbmdlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnNlbmRUb1JlbmRlclF1ZXVlID0gZXhwb3J0cy5hcHBseUNoYW5nZXMgPSBleHBvcnRzLnN0YXJ0VHJhbnNhY3Rpb24gPSBleHBvcnRzLm1vZGlmeUxpc3QgPSBleHBvcnRzLmNyZWF0ZVN0YXRlTm9kZXMgPSBleHBvcnRzLnNldFZhbHVlcyA9IHVuZGVmaW5lZDtcblxudmFyIF9hdHRyaWJ1dGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9nbG9iYWxzL2F0dHJpYnV0ZXMgKi8gXCIuL3NyYy9nbG9iYWxzL2F0dHJpYnV0ZXMuanNcIik7XG5cbnZhciBfYXR0cmlidXRlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hdHRyaWJ1dGVzKTtcblxudmFyIF9vYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlcnMvb2JqZWN0ICovIFwiLi9zcmMvaGVscGVycy9vYmplY3QuanNcIik7XG5cbnZhciBfY2hlY2tlcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlcnMvY2hlY2tlcnMgKi8gXCIuL3NyYy9oZWxwZXJzL2NoZWNrZXJzLmpzXCIpO1xuXG52YXIgX2VxdWFsaXR5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9oZWxwZXJzL2VxdWFsaXR5ICovIFwiLi9zcmMvaGVscGVycy9lcXVhbGl0eS5qc1wiKTtcblxudmFyIF9lcXVhbGl0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9lcXVhbGl0eSk7XG5cbnZhciBfY29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9oZWxwZXJzL2NvbW1vbiAqLyBcIi4vc3JjL2hlbHBlcnMvY29tbW9uLmpzXCIpO1xuXG52YXIgX1N0YXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9TdGF0ZSAqLyBcIi4vc3JjL1N0YXRlLmpzXCIpO1xuXG52YXIgX1ZpZXcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1ZpZXcgKi8gXCIuL3NyYy9WaWV3LmpzXCIpO1xuXG52YXIgX0RlZmluaXRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0RlZmluaXRpb24gKi8gXCIuL3NyYy9EZWZpbml0aW9uLmpzXCIpO1xuXG52YXIgX0JpbmRpbmdOb3RFeGlzdHNFcnJvciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZXJyb3JzL0JpbmRpbmdOb3RFeGlzdHNFcnJvciAqLyBcIi4vc3JjL2Vycm9ycy9CaW5kaW5nTm90RXhpc3RzRXJyb3IuanNcIik7XG5cbnZhciBfQmluZGluZ05vdEV4aXN0c0Vycm9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0JpbmRpbmdOb3RFeGlzdHNFcnJvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmV4cG9ydHMuc2V0VmFsdWVzID0gc2V0VmFsdWVzO1xuZXhwb3J0cy5jcmVhdGVTdGF0ZU5vZGVzID0gY3JlYXRlU3RhdGVOb2RlcztcbmV4cG9ydHMubW9kaWZ5TGlzdCA9IG1vZGlmeUxpc3Q7XG5leHBvcnRzLnN0YXJ0VHJhbnNhY3Rpb24gPSBzdGFydFRyYW5zYWN0aW9uO1xuZXhwb3J0cy5hcHBseUNoYW5nZXMgPSBhcHBseUNoYW5nZXM7XG5leHBvcnRzLnNlbmRUb1JlbmRlclF1ZXVlID0gc2VuZFRvUmVuZGVyUXVldWU7XG5cblxudmFyIENIQU5HRVMgPSB7IGNoYW5nZXM6IHt9LCBjb2xsZWN0aW5nOiBmYWxzZSB9O1xudmFyIFBST01JU0VTX1JFU09MVkVTID0gW107XG52YXIgTElGRV9DWUNMRV9IQU5ETEVSUyA9IHsgbGlzdDogW10gfTtcblxuZnVuY3Rpb24gc3RhcnRUcmFuc2FjdGlvbigpIHtcbiAgYXBwbHlDaGFuZ2VzKCk7XG4gIENIQU5HRVMuY29sbGVjdGluZyA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIGFwcGx5Q2hhbmdlcygpIHtcbiAgdmFyIGNoYW5nZXMgPSBDSEFOR0VTLmNoYW5nZXM7XG4gIENIQU5HRVMuY2hhbmdlcyA9IHt9O1xuICAoMCwgX1ZpZXcucmVuZGVyQ2hhbmdlcykoY2hhbmdlcyk7XG4gIHJldHVybiBydW5MaWZlQ3ljbGVIb29rcygpO1xufVxuXG5mdW5jdGlvbiBydW5MaWZlQ3ljbGVIb29rcygpIHtcbiAgdmFyIGxpZmVDeWNsZUhhbmRsZXJzID0gTElGRV9DWUNMRV9IQU5ETEVSUy5saXN0O1xuICBMSUZFX0NZQ0xFX0hBTkRMRVJTLmxpc3QgPSBbXTtcbiAgbGlmZUN5Y2xlSGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaCkge1xuICAgIHJldHVybiBoKCk7XG4gIH0pO1xuXG4gIGlmICghKDAsIF9jaGVja2Vycy5pc0VtcHR5KShDSEFOR0VTLmNoYW5nZXMpKSB7XG4gICAgcmV0dXJuIGFwcGx5Q2hhbmdlcygpO1xuICB9XG5cbiAgcmV0dXJuIGZpbmFsaXplVHJhbnNhY3Rpb24oKTtcbn1cblxuZnVuY3Rpb24gZmluYWxpemVUcmFuc2FjdGlvbigpIHtcbiAgQ0hBTkdFUy5jb2xsZWN0aW5nID0gZmFsc2U7XG4gIHZhciByZXNvbHZlUHJvbWlzZSA9IHZvaWQgMDtcblxuICB3aGlsZSAocmVzb2x2ZVByb21pc2UgPSBQUk9NSVNFU19SRVNPTFZFUy5wb3AoKSkge1xuICAgIHJlc29sdmVQcm9taXNlKHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbn1cblxuZnVuY3Rpb24gc2VuZFRvUmVuZGVyUXVldWUocGF0aCwgY2hhbmdlKSB7XG4gICgwLCBfb2JqZWN0LnNldCkoQ0hBTkdFUy5jaGFuZ2VzLCBwYXRoLCBjaGFuZ2UpO1xufVxuXG5mdW5jdGlvbiBpc0NvbGxlY3RpbmdDaGFuZ2VzKCkge1xuICByZXR1cm4gQ0hBTkdFUy5jb2xsZWN0aW5nO1xufVxuXG5mdW5jdGlvbiBhZGRMaWZlQ3ljbGVIb29rKGhvb2tUeXBlLCBiaW5kaW5nLCB2YWx1ZXMsIGFjY2Vzc29yLCBpZHgpIHtcbiAgdmFyIGhvb2sgPSBiaW5kaW5nLmhvb2tzW2hvb2tUeXBlXTtcblxuICBMSUZFX0NZQ0xFX0hBTkRMRVJTLmxpc3QucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVsID0gdmFsdWVzW2JpbmRpbmcubmFtZSB8fCBfYXR0cmlidXRlczIuZGVmYXVsdC5TRUxGXS5lbDtcbiAgICB2YXIgdmFscyA9ICFiaW5kaW5nLm5hbWUgPyAoMCwgX1N0YXRlLmdldE9ubHlWYWx1ZXMpKHZhbHVlcykgOiB2YWx1ZXNbYmluZGluZy5uYW1lXS52YWx1ZTtcbiAgICBob29rKGVsLCB2YWxzLCBhY2Nlc3NvciwgaWR4KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0YXRlTm9kZXMoc3RhdGVQYXRoKSB7XG4gIHZhciBjb21wb25lbnQgPSAoMCwgX1N0YXRlLmdldENvbXBvbmVudCkoc3RhdGVQYXRoKTtcbiAgdmFyIHZhbHVlc05vZGUgPSBjcmVhdGVTdGF0ZU5vZGUoY29tcG9uZW50KTtcbiAgKDAsIF9TdGF0ZS5zZXRTdGF0ZSkoc3RhdGVQYXRoLCB2YWx1ZXNOb2RlKTtcblxuICAoMCwgX29iamVjdC5mb3JFYWNoKShjb21wb25lbnQuc3RhdGUsIGZ1bmN0aW9uIChiaW5kaW5nLCBiaW5kaW5nTmFtZSkge1xuICAgIGlmIChiaW5kaW5nLmlzQ29tcG9uZW50KSB7XG4gICAgICBjcmVhdGVTdGF0ZU5vZGVzKHN0YXRlUGF0aC5jb25jYXQoYmluZGluZ05hbWUpKTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBhY2Nlc3NvciA9ICgwLCBfU3RhdGUuY3JlYXRlQWNjZXNzb3IpKHN0YXRlUGF0aCk7XG4gIGFkZExpZmVDeWNsZUhvb2soJ21vdW50JywgY29tcG9uZW50LnN0YXRlW19hdHRyaWJ1dGVzMi5kZWZhdWx0LlNFTEZdLCB2YWx1ZXNOb2RlLCBhY2Nlc3Nvciwgc3RhdGVQYXRoLnNsaWNlKC0yKVswXSk7XG5cbiAgcmV0dXJuIHZhbHVlc05vZGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0YXRlTm9kZShjb21wb25lbnQpIHtcbiAgdmFyIHZhbHVlc05vZGVzID0gKDAsIF9vYmplY3QubWFwKShjb21wb25lbnQuc3RhdGUsIGZ1bmN0aW9uIChiaW5kaW5nKSB7XG4gICAgdmFyIHZhbHVlTm9kZSA9IGJpbmRpbmcuaXNMaXN0ID8gW10gOiB7fTtcblxuICAgIHJldHVybiBfRGVmaW5pdGlvbi5WQUxVRV9UWVBFUy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGtleSkge1xuICAgICAgdmFyIHZhbHVlID0gdm9pZCAwO1xuXG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICd2YWx1ZSc6XG4gICAgICAgIGNhc2UgJ2h0bWwnOlxuICAgICAgICAgIHZhbHVlID0gYmluZGluZy5pbml0VmFsdWUgfHwgJyc7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB2YWx1ZSA9IHt9O1xuICAgICAgfVxuXG4gICAgICBhW2tleV0gPSB2YWx1ZTtcblxuICAgICAgcmV0dXJuIGE7XG4gICAgfSwgdmFsdWVOb2RlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24odmFsdWVzTm9kZXMsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgX2F0dHJpYnV0ZXMyLmRlZmF1bHQuU0VMRiwgKDAsIF9vYmplY3QudG9PYmplY3QpKF9EZWZpbml0aW9uLlZBTFVFX1RZUEVTLCB7fSkpKTtcbn1cblxuZnVuY3Rpb24gc2V0VmFsdWVzKGNoYW5nZVZhbHVlcywgc3RhdGVQYXRoLCBjYWxsZWREZXBlbmRlbmNlcykge1xuICBjYWxsZWREZXBlbmRlbmNlcyA9IGNhbGxlZERlcGVuZGVuY2VzIHx8IFtdO1xuICB2YXIgYWNjZXNzb3IgPSAoMCwgX1N0YXRlLmNyZWF0ZUFjY2Vzc29yKShzdGF0ZVBhdGgpO1xuXG4gIGlmICghYWNjZXNzb3IudmFsdWVzKSB7XG4gICAgYWNjZXNzb3IudmFsdWVzID0gY3JlYXRlU3RhdGVOb2RlcyhzdGF0ZVBhdGgpO1xuICAgIHZhciBzdGFydCA9ICtzdGF0ZVBhdGguc2xpY2UoLTIpWzBdO1xuICAgIHNlbmRUb1JlbmRlclF1ZXVlKHN0YXRlUGF0aCwgX2RlZmluZVByb3BlcnR5KHt9LCBfYXR0cmlidXRlczIuZGVmYXVsdC5GVUxMX0NIQU5HRSwgeyBhZGQ6IHsgc3RhcnQ6IHN0YXJ0LCBlbmQ6IHN0YXJ0ICsgMSB9IH0pKTtcbiAgfVxuXG4gICgwLCBfb2JqZWN0LmZvckVhY2gpKGNoYW5nZVZhbHVlcywgZnVuY3Rpb24gKGNoYW5nZSwgYmluZGluZ05hbWUpIHtcbiAgICByZXR1cm4gc2V0VmFsdWUoYmluZGluZ05hbWUsIGNoYW5nZSwgYWNjZXNzb3IsIGNhbGxlZERlcGVuZGVuY2VzKTtcbiAgfSk7XG5cbiAgYWRkTGlmZUN5Y2xlSG9vaygndXBkYXRlJywgYWNjZXNzb3IuY29tcG9uZW50LnN0YXRlW19hdHRyaWJ1dGVzMi5kZWZhdWx0LlNFTEZdLCBhY2Nlc3Nvci52YWx1ZXMsIGFjY2Vzc29yLCBzdGF0ZVBhdGguc2xpY2UoLTIpWzBdKTtcblxuICBpZiAoaXNDb2xsZWN0aW5nQ2hhbmdlcygpKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIHJldHVybiBQUk9NSVNFU19SRVNPTFZFUy5wdXNoKHJlcyk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gYXBwbHlDaGFuZ2VzKCk7XG59XG5cbmZ1bmN0aW9uIHNldFZhbHVlKGJpbmRpbmdOYW1lLCBjaGFuZ2UsIGFjY2Vzc29yLCBjYWxsZWREZXBlbmRlbmNlcykge1xuICB2YXIgc3RhdGVQYXRoID0gYWNjZXNzb3IucGF0aDtcbiAgdmFyIGNvbXBvbmVudCA9IGFjY2Vzc29yLmNvbXBvbmVudDtcbiAgdmFyIHZhbHVlcyA9IGFjY2Vzc29yLnZhbHVlcztcbiAgdmFyIGJpbmRpbmcgPSBjb21wb25lbnQuc3RhdGVbYmluZGluZ05hbWVdO1xuXG4gIGlmICghYmluZGluZykge1xuICAgIGJpbmRpbmdOYW1lID0gY29tcG9uZW50Lm91dGVyTmFtZXNbYmluZGluZ05hbWVdO1xuICAgIGJpbmRpbmcgPSBjb21wb25lbnQuc3RhdGVbYmluZGluZ05hbWVdO1xuICB9XG5cbiAgaWYgKCFiaW5kaW5nKSB7XG4gICAgdGhyb3cgbmV3IF9CaW5kaW5nTm90RXhpc3RzRXJyb3IyLmRlZmF1bHQoYmluZGluZ05hbWUsIGNvbXBvbmVudC5uYW1lLCBzdGF0ZVBhdGgpO1xuICB9XG5cbiAgaWYgKGNoYW5nZS50eXBlID09PSAndmFsdWUnKSB7XG4gICAgaWYgKGJpbmRpbmcuaXNMaXN0KSB7XG4gICAgICByZXR1cm4gc2V0VmFsdWVGb3JMaXN0KGJpbmRpbmcsIGNoYW5nZSwgdmFsdWVzW2JpbmRpbmdOYW1lXSwgYWNjZXNzb3IpO1xuICAgIH1cblxuICAgIGlmICgoMCwgX2NoZWNrZXJzLmlzT2JqZWN0KShjaGFuZ2UudmFsdWUpICYmIGJpbmRpbmcuaXNDb21wb25lbnQpIHtcbiAgICAgIHJldHVybiBzZXRWYWx1ZUZvckNvbXBvbmVudChiaW5kaW5nLCBjaGFuZ2UsIGNvbXBvbmVudCwgc3RhdGVQYXRoKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZXF1YWwgPSAoMCwgX2VxdWFsaXR5Mi5kZWZhdWx0KSh2YWx1ZXNbYmluZGluZ05hbWVdW2NoYW5nZS50eXBlXSwgY2hhbmdlLnZhbHVlKTtcblxuICBpZiAoIWVxdWFsIHx8ICEoMCwgX2NoZWNrZXJzLmlzRW1wdHkpKGVxdWFsKSB8fCBjaGFuZ2UuZm9yY2UpIHtcbiAgICB2YWx1ZXNbYmluZGluZ05hbWVdW2NoYW5nZS50eXBlXSA9IGNoYW5nZS52YWx1ZTtcblxuICAgIGlmIChjaGFuZ2UudHlwZSAhPT0gJ3ZhbHVlJykge1xuICAgICAgcmV0dXJuIHNlbmRUb1JlbmRlclF1ZXVlKHN0YXRlUGF0aC5jb25jYXQoYmluZGluZ05hbWUpLCBfZGVmaW5lUHJvcGVydHkoe30sIGNoYW5nZS50eXBlLCBmYWxzZSkpO1xuICAgIH1cblxuICAgIGFkZExpZmVDeWNsZUhvb2soJ3VwZGF0ZScsIGJpbmRpbmcsIHZhbHVlcywgYWNjZXNzb3IsIHN0YXRlUGF0aC5zbGljZSgtMilbMF0pO1xuICAgIGNhbGxlZERlcGVuZGVuY2VzLnB1c2goYmluZGluZ05hbWUgKyAnOicgKyBjaGFuZ2UudHlwZSk7XG5cbiAgICBpZiAoIWJpbmRpbmcuaHRtbCkge1xuICAgICAgc2V0VmFsdWUoYmluZGluZ05hbWUsIHsgdmFsdWU6IGNoYW5nZS52YWx1ZSwgdHlwZTogJ2h0bWwnLCBmb3JjZTogY2hhbmdlLmZvcmNlIH0sIGFjY2Vzc29yLCBjYWxsZWREZXBlbmRlbmNlcyk7XG4gICAgfVxuXG4gICAgdmFyIGxpbmsgPSBjb21wb25lbnQubGlua3NbYmluZGluZ05hbWVdO1xuICAgIGlmIChsaW5rKSB7XG4gICAgICBzZXRWYWx1ZShsaW5rLmxpbmssIHsgdmFsdWU6IGNoYW5nZS52YWx1ZSwgdHlwZTogJ3ZhbHVlJywgZm9yY2U6IGNoYW5nZS5mb3JjZSB9LCBhY2Nlc3Nvci5kb3duKGxpbmsuY29tcG9uZW50KSwgW10pO1xuICAgIH1cblxuICAgICgwLCBfb2JqZWN0LmZvckVhY2gpKGJpbmRpbmcuZGVwZW5kYW50cywgZnVuY3Rpb24gKGRlcGVuZGFudCwgZGVwZW5kYW50S2V5KSB7XG4gICAgICBpZiAoKDAsIF9jb21tb24uaGFzKShjYWxsZWREZXBlbmRlbmNlcywgZGVwZW5kYW50S2V5KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXdWYWx1ZSA9IGNvbXBvbmVudC5zdGF0ZVtkZXBlbmRhbnQubmFtZV0uZXZhbHVhdGVbZGVwZW5kYW50LnR5cGVdKHZhbHVlcywgYWNjZXNzb3IpO1xuICAgICAgc2V0VmFsdWUoZGVwZW5kYW50Lm5hbWUsIHsgdmFsdWU6IG5ld1ZhbHVlLCB0eXBlOiBkZXBlbmRhbnQudHlwZSB9LCBhY2Nlc3NvciwgY2FsbGVkRGVwZW5kZW5jZXMpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFZhbHVlRm9yTGlzdChiaW5kaW5nLCBjaGFuZ2UsIGFyciwgYWNjZXNzb3IpIHtcbiAgT2JqZWN0LmtleXMoY2hhbmdlLnZhbHVlKS5mb3JFYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgcmV0dXJuIHNldFZhbHVlcygoMCwgX1N0YXRlLnByZXBhcmVDaGFuZ2VPYmplY3QpKGNoYW5nZS52YWx1ZVtpXSksIGFjY2Vzc29yLnBhdGguY29uY2F0KGJpbmRpbmcubmFtZSwgaSwgYmluZGluZy5saXN0SXRlbS5uYW1lKSk7XG4gIH0pO1xuXG4gIHZhciBpbmRleEVxdWFsaXR5ID0gKDAsIF9lcXVhbGl0eTIuZGVmYXVsdCkoYXJyLCBjaGFuZ2UudmFsdWUpO1xuICAoMCwgX29iamVjdC5mb3JFYWNoKShpbmRleEVxdWFsaXR5LCBmdW5jdGlvbiAoY2hhbmdlT2JqLCBpZHgpIHtcbiAgICBpZiAoY2hhbmdlT2JqLnJlbW92ZSkge1xuICAgICAgY2hhbmdlT2JqLnJlbW92ZSA9IHJlbW92ZUxpc3RJdGVtKGFyciwgaWR4LCBiaW5kaW5nLCBhY2Nlc3Nvcik7XG4gICAgfVxuXG4gICAgc2VuZFRvUmVuZGVyUXVldWUoYWNjZXNzb3IucGF0aC5jb25jYXQoYmluZGluZy5uYW1lLCBpZHgsIGJpbmRpbmcubGlzdEl0ZW0ubmFtZSksIF9kZWZpbmVQcm9wZXJ0eSh7fSwgX2F0dHJpYnV0ZXMyLmRlZmF1bHQuRlVMTF9DSEFOR0UsIGNoYW5nZU9iaikpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0VmFsdWVGb3JDb21wb25lbnQoYmluZGluZywgY2hhbmdlLCBjb21wb25lbnQsIHN0YXRlUGF0aCkge1xuICBzZXRWYWx1ZXMoKDAsIF9TdGF0ZS5wcmVwYXJlQ2hhbmdlT2JqZWN0KShjaGFuZ2UudmFsdWUpLCBzdGF0ZVBhdGguY29uY2F0KGJpbmRpbmcubmFtZSkpO1xufVxuXG5mdW5jdGlvbiBtb2RpZnlMaXN0KGFjdGlvbiwgYXJncywgYWNjZXNzb3IpIHtcbiAgdmFyIGFyciA9IGFjY2Vzc29yLnZhbHVlcztcbiAgdmFyIGxpc3RQYXRoID0gYWNjZXNzb3IucGF0aDtcbiAgdmFyIGl0ZW1OYW1lID0gYWNjZXNzb3IuY29tcG9uZW50Lmxpc3RJdGVtLm5hbWU7XG4gIHZhciBzdGFydCA9IGFyZ3Muc3RhcnQ7XG4gIHZhciBjaGFuZ2VPYmogPSB7fTtcblxuICBzd2l0Y2ggKGFjdGlvbikge1xuICAgIGNhc2UgJ2FkZCc6XG4gICAgICBjaGFuZ2VPYmogPSBhZGRUb0xpc3QoYXJyLCBzdGFydCwgYXJncy5lbHMsIGxpc3RQYXRoLCBpdGVtTmFtZSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3JlbW92ZSc6XG4gICAgICB2YXIgZW5kID0gc3RhcnQgKyAoYXJncy5udW0gfHwgMSk7XG4gICAgICBjaGFuZ2VPYmogPSByZW1vdmVGcm9tTGlzdChhcnIsIHN0YXJ0LCBlbmQsIGFjY2Vzc29yLmNvbXBvbmVudCwgYWNjZXNzb3IpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICAoMCwgX29iamVjdC5mb3JFYWNoKShjaGFuZ2VPYmosIGZ1bmN0aW9uIChjaGFuZ2UsIGlkeCkge1xuICAgIHJldHVybiBzZW5kVG9SZW5kZXJRdWV1ZShsaXN0UGF0aC5jb25jYXQoaWR4LCBpdGVtTmFtZSwgX2F0dHJpYnV0ZXMyLmRlZmF1bHQuRlVMTF9DSEFOR0UpLCBjaGFuZ2VPYmpbaWR4XVtfYXR0cmlidXRlczIuZGVmYXVsdC5GVUxMX0NIQU5HRV0pO1xuICB9KTtcblxuICBpZiAoaXNDb2xsZWN0aW5nQ2hhbmdlcygpKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIHJldHVybiBQUk9NSVNFU19SRVNPTFZFUy5wdXNoKHJlcyk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gYXBwbHlDaGFuZ2VzKCk7XG59XG5cbmZ1bmN0aW9uIGFkZFRvTGlzdChhcnIsIHN0YXJ0LCBlbHMsIGxpc3RQYXRoLCBpdGVtTmFtZSkge1xuICBlbHMgPSAoMCwgX2NoZWNrZXJzLmlzQXJyYXkpKGVscykgPyBlbHMgOiBbZWxzXTtcblxuICBlbHMuZm9yRWFjaChmdW5jdGlvbiAoZWwsIGkpIHtcbiAgICBhcnIuc3BsaWNlKGkgKyBzdGFydCwgMCwgbnVsbCk7XG4gICAgc2V0VmFsdWVzKCgwLCBfU3RhdGUucHJlcGFyZUNoYW5nZU9iamVjdCkoZWwpLCBsaXN0UGF0aC5jb25jYXQoaSArIHN0YXJ0LCBpdGVtTmFtZSkpO1xuICB9KTtcblxuICByZXR1cm4gX2RlZmluZVByb3BlcnR5KHt9LCBzdGFydCwgX2RlZmluZVByb3BlcnR5KHt9LCBfYXR0cmlidXRlczIuZGVmYXVsdC5GVUxMX0NIQU5HRSwgeyBhZGQ6IHsgc3RhcnQ6IHN0YXJ0LCBlbmQ6IHN0YXJ0ICsgZWxzLmxlbmd0aCB9IH0pKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRnJvbUxpc3QoYXJyLCBzdGFydCwgZW5kLCBsaXN0QmluZGluZywgYWNjZXNzb3IpIHtcbiAgdmFyIGNoYW5nZU9iaiA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgdmFyIHJlbW92ZWRET01Ob2RlID0gcmVtb3ZlTGlzdEl0ZW0oYXJyLCBpLCBsaXN0QmluZGluZywgYWNjZXNzb3IpO1xuICAgIGNoYW5nZU9ialtpXSA9IF9kZWZpbmVQcm9wZXJ0eSh7fSwgX2F0dHJpYnV0ZXMyLmRlZmF1bHQuRlVMTF9DSEFOR0UsIHsgcmVtb3ZlOiByZW1vdmVkRE9NTm9kZSB9KTtcbiAgfVxuXG4gIHJldHVybiBjaGFuZ2VPYmo7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUxpc3RJdGVtKGFyciwgaWR4LCBsaXN0QmluZGluZywgYWNjZXNzb3IpIHtcbiAgdmFyIHJlbW92ZWROb2RlID0gYXJyLnNwbGljZShpZHgsIDEpWzBdW2xpc3RCaW5kaW5nLmxpc3RJdGVtLm5hbWVdO1xuICBhZGRMaWZlQ3ljbGVIb29rKCdyZW1vdmUnLCBsaXN0QmluZGluZy5saXN0SXRlbS5zdGF0ZVtfYXR0cmlidXRlczIuZGVmYXVsdC5TRUxGXSwgcmVtb3ZlZE5vZGUsIGFjY2Vzc29yLCBpZHgpO1xuICByZXR1cm4gcmVtb3ZlZE5vZGVbX2F0dHJpYnV0ZXMyLmRlZmF1bHQuU0VMRl0uZWw7XG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL1ZpZXcuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9WaWV3LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVuZGVyQ2hhbmdlcyA9IGV4cG9ydHMuY3JlYXRlQW5kQXBwZW5kU3R5bGVzID0gdW5kZWZpbmVkO1xuXG52YXIgX2F0dHJpYnV0ZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2dsb2JhbHMvYXR0cmlidXRlcyAqLyBcIi4vc3JjL2dsb2JhbHMvYXR0cmlidXRlcy5qc1wiKTtcblxudmFyIF9hdHRyaWJ1dGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F0dHJpYnV0ZXMpO1xuXG52YXIgX2NvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVycy9jb21tb24gKi8gXCIuL3NyYy9oZWxwZXJzL2NvbW1vbi5qc1wiKTtcblxudmFyIF9vYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlcnMvb2JqZWN0ICovIFwiLi9zcmMvaGVscGVycy9vYmplY3QuanNcIik7XG5cbnZhciBfY2hlY2tlcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlcnMvY2hlY2tlcnMgKi8gXCIuL3NyYy9oZWxwZXJzL2NoZWNrZXJzLmpzXCIpO1xuXG52YXIgX1N0YXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9TdGF0ZSAqLyBcIi4vc3JjL1N0YXRlLmpzXCIpO1xuXG52YXIgX2RvbSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVycy9kb20gKi8gXCIuL3NyYy9oZWxwZXJzL2RvbS5qc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5jcmVhdGVBbmRBcHBlbmRTdHlsZXMgPSBjcmVhdGVBbmRBcHBlbmRTdHlsZXM7XG5leHBvcnRzLnJlbmRlckNoYW5nZXMgPSByZW5kZXJDaGFuZ2VzO1xuXG5cbnZhciByZW5kZXIgPSB7XG4gIGh0bWw6IGFwcGx5TWFya3VwLFxuICBjbGFzczogYXBwbHlDbGFzc2VzLFxuICBzdHlsZTogYXBwbHlTdHlsZXMsXG4gIGF0dHJzOiBhcHBseUF0dHJpYnV0ZXNcbn07XG5cbmZ1bmN0aW9uIHJlbmRlckNoYW5nZXMoY2hhbmdlcykge1xuICAoMCwgX29iamVjdC5mb3JFYWNoKShjaGFuZ2VzLCBmdW5jdGlvbiAoY29tcG9uZW50Q2hhbmdlcywgZWxlbWVudElkKSB7XG4gICAgdmFyIGNvbXBvbmVudElkID0gT2JqZWN0LmtleXMoY29tcG9uZW50Q2hhbmdlcylbMF07XG4gICAgdmFyIGNvbXBvbmVudEFjY2Vzc29yID0gKDAsIF9TdGF0ZS5jcmVhdGVBY2Nlc3NvcikoW2VsZW1lbnRJZCwgY29tcG9uZW50SWRdKTtcbiAgICBhcHBseU1hcmt1cChjb21wb25lbnRBY2Nlc3Nvci5jb21wb25lbnQsIGNvbXBvbmVudEFjY2Vzc29yLnZhbHVlcywgW2VsZW1lbnRJZCwgY29tcG9uZW50SWRdLCBjb21wb25lbnRDaGFuZ2VzW2NvbXBvbmVudElkXSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhcHBseU1hcmt1cChjb21wb25lbnQsIHZhbHVlLCBzdGF0ZVBhdGgsIGNoYW5nZXMpIHtcbiAgaWYgKCFjb21wb25lbnQubWFya3VwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNvbXBvbmVudC5pc0xpc3QpIHtcbiAgICByZXR1cm4gcmVuZGVyTGlzdChjb21wb25lbnQsIHZhbHVlLCBzdGF0ZVBhdGgsIGNoYW5nZXMpO1xuICB9XG5cbiAgaWYgKGNvbXBvbmVudC5pc0NvbXBvbmVudCkge1xuICAgIHJldHVybiByZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCB2YWx1ZSwgc3RhdGVQYXRoLCBjaGFuZ2VzKTtcbiAgfVxuXG4gIHZhbHVlID0gKDAsIF9jaGVja2Vycy5pc1VuZGVmaW5lZCkodmFsdWUpID8gJycgOiB2YWx1ZTtcblxuICBpZiAoY29tcG9uZW50Lm1hcmt1cC50YWdOYW1lID09PSAnSU5QVVQnKSB7XG4gICAgY29tcG9uZW50Lm1hcmt1cC52YWx1ZSA9IHZhbHVlO1xuICAgIHJldHVybjtcbiAgfVxuXG4gICgwLCBfZG9tLnJld3JpdGVUb05vZGUpKGNvbXBvbmVudC5tYXJrdXAsIHZhbHVlKTtcblxuICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5mdW5jdGlvbiByZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCB2YWx1ZSwgc3RhdGVQYXRoLCBjaGFuZ2VzKSB7XG4gIGlmIChjaGFuZ2VzKSB7XG4gICAgcmV0dXJuIHVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQsIHZhbHVlLCBzdGF0ZVBhdGgsIGNoYW5nZXMpO1xuICB9XG5cbiAgcmV0dXJuIGRyYXdDb21wb25lbnQodmFsdWUsIHN0YXRlUGF0aCk7XG59XG5cbmZ1bmN0aW9uIGRyYXdDb21wb25lbnQodmFsdWVzLCBzdGF0ZVBhdGgpIHtcbiAgdmFyIGFjY2Vzc29yID0gKDAsIF9TdGF0ZS5jcmVhdGVBY2Nlc3Nvcikoc3RhdGVQYXRoKTtcbiAgdmFyIGNvbXBvbmVudCA9IGFjY2Vzc29yLmNvbXBvbmVudDtcblxuICB2YXIgaXRlbVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFyIGl0ZW1NYXJrdXAgPSBjb21wb25lbnQudGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICB2YWx1ZXNbX2F0dHJpYnV0ZXMyLmRlZmF1bHQuU0VMRl0uZWwgPSBpdGVtTWFya3VwO1xuICBpdGVtV3JhcHBlci5hcHBlbmRDaGlsZChpdGVtTWFya3VwKTtcblxuICBpdGVtTWFya3VwLnNldEF0dHJpYnV0ZShfYXR0cmlidXRlczIuZGVmYXVsdC5DT01QT05FTlRfVFlQRSwgY29tcG9uZW50LmlzTGlzdEl0ZW0gPyBfYXR0cmlidXRlczIuZGVmYXVsdC5JVEVNIDogX2F0dHJpYnV0ZXMyLmRlZmF1bHQuQ09NUE9ORU5UKTtcblxuICAoMCwgX29iamVjdC5mb3JFYWNoKShyZW5kZXIsIGZ1bmN0aW9uIChyZW5kZXJGdW5jLCByZW5kZXJUeXBlKSB7XG4gICAgaWYgKGNvbXBvbmVudC5zdGF0ZVtfYXR0cmlidXRlczIuZGVmYXVsdC5TRUxGXVtyZW5kZXJUeXBlXSkge1xuICAgICAgcmVuZGVyRnVuYyh7IG1hcmt1cDogaXRlbU1hcmt1cCB9LCB2YWx1ZXNbX2F0dHJpYnV0ZXMyLmRlZmF1bHQuU0VMRl1bcmVuZGVyVHlwZV0pO1xuICAgIH1cbiAgfSk7XG5cbiAgKDAsIF9vYmplY3QuZm9yRWFjaCkoY29tcG9uZW50LnN0YXRlLCBmdW5jdGlvbiAoYmluZGluZywgYmluZGluZ05hbWUpIHtcbiAgICBpZiAoIWJpbmRpbmcubWFya3VwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGJpbmRpbmdOb2RlID0gaXRlbVdyYXBwZXIucXVlcnlTZWxlY3RvcignLicgKyBfYXR0cmlidXRlczIuZGVmYXVsdC5QUkVGSVggKyBiaW5kaW5nLmlkKTtcbiAgICBiaW5kaW5nTm9kZS5jbGFzc0xpc3QucmVtb3ZlKF9hdHRyaWJ1dGVzMi5kZWZhdWx0LlBSRUZJWCArIGJpbmRpbmcuaWQpO1xuXG4gICAgaWYgKGJpbmRpbmcuaXNDb21wb25lbnQpIHtcbiAgICAgIHZhciBjaGlsZFN0YXRlUGF0aCA9IHN0YXRlUGF0aC5jb25jYXQoYmluZGluZ05hbWUpO1xuICAgICAgdmFyIGNoaWxkTWFya3VwID0gZHJhd0NvbXBvbmVudCh2YWx1ZXNbYmluZGluZ05hbWVdLCBjaGlsZFN0YXRlUGF0aCk7XG4gICAgICAoMCwgX2RvbS5yZXBsYWNlTm9kZXMpKGJpbmRpbmdOb2RlLCBjaGlsZE1hcmt1cCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFsdWVzW2JpbmRpbmdOYW1lXS5lbCA9IGJpbmRpbmdOb2RlO1xuXG4gICAgaWYgKGJpbmRpbmcuaXNMaXN0KSB7XG4gICAgICByZW5kZXJMaXN0KGJpbmRpbmcsIHZhbHVlc1tiaW5kaW5nTmFtZV0sIHN0YXRlUGF0aC5jb25jYXQoYmluZGluZ05hbWUpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAoMCwgX29iamVjdC5mb3JFYWNoKShyZW5kZXIsIGZ1bmN0aW9uIChyZW5kZXJGdW5jLCByZW5kZXJUeXBlKSB7XG4gICAgICBpZiAocmVuZGVyVHlwZSA9PT0gJ2h0bWwnICYmIGJpbmRpbmcuaHRtbCA9PT0gbnVsbCB8fCBiaW5kaW5nLm1hcmt1cC5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmVuZGVyRnVuYyh7IG1hcmt1cDogYmluZGluZ05vZGUgfSwgdmFsdWVzW2JpbmRpbmdOYW1lXVtyZW5kZXJUeXBlXSwgc3RhdGVQYXRoKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGl0ZW1XcmFwcGVyLmNoaWxkcmVuWzBdO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb21wb25lbnQoY29tcG9uZW50LCB2YWx1ZXMsIHN0YXRlUGF0aCwgY2hhbmdlcykge1xuICB2YXIgY29tcG9uZW50TWFya3VwID0gdmFsdWVzW19hdHRyaWJ1dGVzMi5kZWZhdWx0LlNFTEZdLmVsO1xuXG4gICgwLCBfb2JqZWN0LmZvckVhY2gpKGNoYW5nZXMsIGZ1bmN0aW9uIChjaGFuZ2UsIGJpbmRpbmdOYW1lKSB7XG5cbiAgICBpZiAoYmluZGluZ05hbWUgPT09IF9hdHRyaWJ1dGVzMi5kZWZhdWx0LlNFTEYpIHtcblxuICAgICAgZm9yICh2YXIgY2hhbmdlVHlwZSBpbiBjaGFuZ2UpIHtcbiAgICAgICAgcmVuZGVyW2NoYW5nZVR5cGVdKHsgbWFya3VwOiBjb21wb25lbnRNYXJrdXAgfSwgdmFsdWVzW19hdHRyaWJ1dGVzMi5kZWZhdWx0LlNFTEZdW2NoYW5nZVR5cGVdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgYmluZGluZyA9IGNvbXBvbmVudC5zdGF0ZVtiaW5kaW5nTmFtZV07XG4gICAgdmFyIHN0YXRlUGF0aFRvQmluZGluZyA9IHN0YXRlUGF0aC5jb25jYXQoYmluZGluZ05hbWUpO1xuXG4gICAgaWYgKGJpbmRpbmcuaXNDb21wb25lbnQgfHwgYmluZGluZy5pc0xpc3QpIHtcbiAgICAgIGFwcGx5TWFya3VwKGJpbmRpbmcsIHZhbHVlc1tiaW5kaW5nTmFtZV0sIHN0YXRlUGF0aFRvQmluZGluZywgY2hhbmdlc1tiaW5kaW5nTmFtZV0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBlbCA9IHZhbHVlc1tiaW5kaW5nTmFtZV0uZWw7XG5cbiAgICBmb3IgKHZhciBfY2hhbmdlVHlwZSBpbiBjaGFuZ2UpIHtcbiAgICAgIHZhciBuZXdWYWx1ZSA9IHZhbHVlc1tiaW5kaW5nTmFtZV1bX2NoYW5nZVR5cGVdO1xuICAgICAgcmVuZGVyW19jaGFuZ2VUeXBlXSh7IG1hcmt1cDogZWwgfSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxpc3QobGlzdENvbXBvbmVudCwgaXRlbXNWYWx1ZXMsIHN0YXRlUGF0aCwgY2hhbmdlcykge1xuICBpZiAoY2hhbmdlcykge1xuICAgIHJldHVybiB1cGRhdGVMaXN0KGxpc3RDb21wb25lbnQsIGl0ZW1zVmFsdWVzLCBzdGF0ZVBhdGgsIGNoYW5nZXMpO1xuICB9XG5cbiAgdmFyIGxpc3RGcmFnbWVudCA9IGJ1aWxkTGlzdChsaXN0Q29tcG9uZW50LCBpdGVtc1ZhbHVlcywgc3RhdGVQYXRoKTtcblxuICB2YXIgbGlzdE5vZGUgPSBpdGVtc1ZhbHVlcy5lbDtcbiAgdmFyIHBhcmVudE5vZGUgPSBsaXN0Tm9kZS5wYXJlbnROb2RlO1xuICB2YXIgbmV4dE5vZGUgPSBsaXN0Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICgwLCBfZG9tLnJlbW92ZU5vZGUpKGxpc3ROb2RlKTtcblxuICB2YXIgaXNDb21wb25lbnQgPSBsaXN0Tm9kZS5nZXRBdHRyaWJ1dGUoX2F0dHJpYnV0ZXMyLmRlZmF1bHQuQ09NUE9ORU5UX1RZUEUpO1xuICBsaXN0Tm9kZS5zZXRBdHRyaWJ1dGUoX2F0dHJpYnV0ZXMyLmRlZmF1bHQuQ09NUE9ORU5UX1RZUEUsIF9hdHRyaWJ1dGVzMi5kZWZhdWx0LkxJU1QpO1xuICBpZiAoaXNDb21wb25lbnQpIHtcbiAgICBsaXN0Tm9kZS5zZXRBdHRyaWJ1dGUoX2F0dHJpYnV0ZXMyLmRlZmF1bHQuQ09NUE9ORU5UX1RZUEUsIF9hdHRyaWJ1dGVzMi5kZWZhdWx0LkNPTVBPTkVOVF9MSVNUKTtcbiAgfVxuXG4gICgwLCBfZG9tLmVtcHR5Tm9kZSkobGlzdE5vZGUpO1xuICBsaXN0Tm9kZS5hcHBlbmRDaGlsZChsaXN0RnJhZ21lbnQpO1xuXG4gIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGxpc3ROb2RlLCBuZXh0Tm9kZSk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTGlzdChsaXN0Q29tcG9uZW50LCBpdGVtc1ZhbHVlcywgc3RhdGVQYXRoLCByYW5nZSkge1xuICB2YXIgc3RhcnQgPSByYW5nZSA/IHJhbmdlLnN0YXJ0IDogMDtcbiAgdmFyIGVuZCA9IHJhbmdlID8gcmFuZ2UuZW5kIDogaXRlbXNWYWx1ZXMubGVuZ3RoICsgMTtcblxuICB2YXIgbGlzdEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBpdGVtc1ZhbHVlcy5zbGljZShzdGFydCwgZW5kKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtVmFsdWUsIGl0ZW1JbmRleCkge1xuICAgIHZhciBuZXdJdGVtSW5kZXggPSArc3RhcnQgKyBpdGVtSW5kZXg7XG4gICAgdmFyIHN0YXRlUGF0aFRvSXRlbSA9IHN0YXRlUGF0aC5jb25jYXQoW25ld0l0ZW1JbmRleCwgbGlzdENvbXBvbmVudC5saXN0SXRlbS5uYW1lXSk7XG4gICAgdmFyIGxpc3RJdGVtTWFya3VwID0gZHJhd0NvbXBvbmVudChpdGVtVmFsdWVbbGlzdENvbXBvbmVudC5saXN0SXRlbS5uYW1lXSwgc3RhdGVQYXRoVG9JdGVtKTtcblxuICAgIGxpc3RJdGVtTWFya3VwLnNldEF0dHJpYnV0ZShfYXR0cmlidXRlczIuZGVmYXVsdC5JVEVNX0lOREVYLCBuZXdJdGVtSW5kZXgpO1xuXG4gICAgbGlzdEZyYWdtZW50LmFwcGVuZENoaWxkKGxpc3RJdGVtTWFya3VwKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGxpc3RGcmFnbWVudDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTGlzdChsaXN0QmluZGluZywgaXRlbXNWYWx1ZXMsIHN0YXRlUGF0aCwgY2hhbmdlcykge1xuICB2YXIgbGlzdE5vZGUgPSBpdGVtc1ZhbHVlcy5lbDtcbiAgdmFyIGl0ZW1OYW1lID0gbGlzdEJpbmRpbmcubGlzdEl0ZW0ubmFtZTtcbiAgdmFyIGl0ZW1zQ2hhbmdlcyA9ICgwLCBfb2JqZWN0LnNwbGl0UGllY2UpKGNoYW5nZXMsIGZ1bmN0aW9uICh2LCBrKSB7XG4gICAgcmV0dXJuICgwLCBfY2hlY2tlcnMuaXNOdW1iZXIpKCtrKTtcbiAgfSk7XG4gIHZhciByZW1vdmVkQ291bnQgPSAwO1xuICB2YXIgZW5kID0gMDtcblxuICBmb3IgKHZhciBjaGFuZ2VUeXBlIGluIGNoYW5nZXMpIHtcbiAgICByZW5kZXJbY2hhbmdlVHlwZV0oeyBtYXJrdXA6IGxpc3ROb2RlIH0sIGl0ZW1zVmFsdWVzW2NoYW5nZVR5cGVdKTtcbiAgfVxuXG4gICgwLCBfb2JqZWN0LmZvckVhY2gpKGl0ZW1zQ2hhbmdlcywgZnVuY3Rpb24gKGNoYW5nZSwgaSkge1xuICAgIGNoYW5nZSA9IGNoYW5nZVtpdGVtTmFtZV07XG4gICAgdmFyIHN0YXRlUGF0aFRvSXRlbSA9IHN0YXRlUGF0aC5jb25jYXQoaSwgaXRlbU5hbWUpO1xuICAgIHZhciBpdGVtQWNjZXNzb3IgPSAoMCwgX1N0YXRlLmNyZWF0ZUFjY2Vzc29yKShzdGF0ZVBhdGhUb0l0ZW0pO1xuXG4gICAgaWYgKCFjaGFuZ2VbX2F0dHJpYnV0ZXMyLmRlZmF1bHQuRlVMTF9DSEFOR0VdKSB7XG4gICAgICB1cGRhdGVDb21wb25lbnQoaXRlbUFjY2Vzc29yLmNvbXBvbmVudCwgaXRlbXNWYWx1ZXNbaV1baXRlbU5hbWVdLCBzdGF0ZVBhdGhUb0l0ZW0sIGNoYW5nZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZVtfYXR0cmlidXRlczIuZGVmYXVsdC5GVUxMX0NIQU5HRV0uYWRkICYmIGkgPj0gZW5kKSB7XG4gICAgICB2YXIgc3RhcnQgPSBjaGFuZ2VbX2F0dHJpYnV0ZXMyLmRlZmF1bHQuRlVMTF9DSEFOR0VdLmFkZC5zdGFydDtcbiAgICAgIGVuZCA9IGNoYW5nZVtfYXR0cmlidXRlczIuZGVmYXVsdC5GVUxMX0NIQU5HRV0uYWRkLmVuZDtcblxuICAgICAgZml4SW5kZXhlcyhsaXN0Tm9kZSwgc3RhcnQsIGVuZCAtIHN0YXJ0KTtcbiAgICAgIHZhciBsaXN0RnJhZ21lbnQgPSBidWlsZExpc3QobGlzdEJpbmRpbmcsIGl0ZW1zVmFsdWVzLCBzdGF0ZVBhdGgsIHsgc3RhcnQ6IHN0YXJ0LCBlbmQ6IGVuZCB9KTtcblxuICAgICAgaWYgKGVuZCA9PT0gaXRlbXNWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgIGxpc3ROb2RlLmFwcGVuZENoaWxkKGxpc3RGcmFnbWVudCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGlzdE5vZGUuaW5zZXJ0QmVmb3JlKGxpc3RGcmFnbWVudCwgbGlzdE5vZGUuY2hpbGRyZW5bc3RhcnRdKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlW19hdHRyaWJ1dGVzMi5kZWZhdWx0LkZVTExfQ0hBTkdFXS5yZW1vdmUpIHtcbiAgICAgICgwLCBfZG9tLnJlbW92ZU5vZGUpKGNoYW5nZVtfYXR0cmlidXRlczIuZGVmYXVsdC5GVUxMX0NIQU5HRV0ucmVtb3ZlKTtcbiAgICAgIGZpeEluZGV4ZXMobGlzdE5vZGUsIGkgLSByZW1vdmVkQ291bnQrKywgLTEpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpeEluZGV4ZXMobGlzdE5vZGUsIHN0YXJ0LCBkaWZmKSB7XG4gIHZhciBpdGVtc05vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobGlzdE5vZGUuY2hpbGRyZW4sIHN0YXJ0KTtcblxuICBpdGVtc05vZGVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW1Ob2RlKSB7XG4gICAgdmFyIHByZXZJZHggPSBpdGVtTm9kZS5nZXRBdHRyaWJ1dGUoX2F0dHJpYnV0ZXMyLmRlZmF1bHQuSVRFTV9JTkRFWCk7XG4gICAgdmFyIG5ld0lkeCA9ICtwcmV2SWR4ICsgZGlmZjtcblxuICAgIGl0ZW1Ob2RlLnNldEF0dHJpYnV0ZShfYXR0cmlidXRlczIuZGVmYXVsdC5JVEVNX0lOREVYLCBuZXdJZHgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYXBwbHlBdHRyaWJ1dGVzKGJpbmRpbmcsIGF0dHJpYnV0ZXMpIHtcbiAgT2JqZWN0LmFzc2lnbihiaW5kaW5nLm1hcmt1cCwgYXR0cmlidXRlcyk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5Q2xhc3NlcyhiaW5kaW5nLCBjbGFzc2VzKSB7XG4gIGZvciAodmFyIGNsYXNzTmFtZSBpbiBjbGFzc2VzKSB7XG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgaWYgKGNsYXNzZXNbY2xhc3NOYW1lXSkge1xuICAgICAgICBiaW5kaW5nLm1hcmt1cC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiaW5kaW5nLm1hcmt1cC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5U3R5bGVzKGJpbmRpbmcsIHN0eWxlcykge1xuICBPYmplY3QuYXNzaWduKGJpbmRpbmcubWFya3VwLnN0eWxlLCBub3JtYWxpemVTdHlsZXMoc3R5bGVzKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuZEFwcGVuZFN0eWxlcyhzdHlsZU9iaikge1xuICB2YXIgc3R5bGVTdHIgPSAnJztcbiAgZm9yICh2YXIgc2VsZWN0b3IgaW4gc3R5bGVPYmopIHtcbiAgICB2YXIgc3R5bGVzID0gc3R5bGVPYmpbc2VsZWN0b3JdO1xuICAgIHN0eWxlU3RyICs9IHNlbGVjdG9yICsgJ3snO1xuICAgIG5vcm1hbGl6ZVN0eWxlcyhzdHlsZXMpO1xuICAgIGZvciAodmFyIGF0dHIgaW4gc3R5bGVzKSB7XG4gICAgICB2YXIgdmFsdWUgPSBzdHlsZXNbYXR0cl07XG4gICAgICBzdHlsZVN0ciArPSAoMCwgX2NvbW1vbi50b0Rhc2hDYXNlKShhdHRyKSArICc6JyArIHZhbHVlICsgJzsnO1xuICAgIH1cbiAgICBzdHlsZVN0ciArPSAnfVxcbic7XG4gIH1cbiAgdmFyIHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZUVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0eWxlU3RyKSk7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbCk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlcyhzdHlsZXMpIHtcbiAgZm9yICh2YXIgYXR0ciBpbiBzdHlsZXMpIHtcbiAgICBpZiAoKDAsIF9jaGVja2Vycy5pc051bWJlcikoc3R5bGVzW2F0dHJdKSkge1xuICAgICAgc3R5bGVzW2F0dHJdID0gc3R5bGVzW2F0dHJdICsgJ3B4JztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvZXJyb3JzL0JpbmRpbmdOb3RFeGlzdHNFcnJvci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2Vycm9ycy9CaW5kaW5nTm90RXhpc3RzRXJyb3IuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBCaW5kaW5nTm90RXhpc3RzRXJyb3IgPSBmdW5jdGlvbiAoX0Vycm9yKSB7XG4gIF9pbmhlcml0cyhCaW5kaW5nTm90RXhpc3RzRXJyb3IsIF9FcnJvcik7XG5cbiAgZnVuY3Rpb24gQmluZGluZ05vdEV4aXN0c0Vycm9yKGJpbmRpbmdOYW1lLCBjb21wb25lbnROYW1lLCBwYXRoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJpbmRpbmdOb3RFeGlzdHNFcnJvcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQmluZGluZ05vdEV4aXN0c0Vycm9yLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQmluZGluZ05vdEV4aXN0c0Vycm9yKSkuY2FsbCh0aGlzKSk7XG5cbiAgICBfdGhpcy5tZXNzYWdlID0gXCJVbmFibGUgdG8gYWNjZXNzICdcIiArIGJpbmRpbmdOYW1lICsgXCInIGJpbmRpbmcgb24gJ1wiICsgY29tcG9uZW50TmFtZSArIFwiJyBjb21wb25lbnQgb24gcGF0aCAoXCIgKyBwYXRoLmpvaW4oJyAtPiAnKSArIFwiKSBiZWNhdXNlIGl0IGRvZXNuJ3QgZXhpc3QuXCI7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgcmV0dXJuIEJpbmRpbmdOb3RFeGlzdHNFcnJvcjtcbn0oRXJyb3IpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBCaW5kaW5nTm90RXhpc3RzRXJyb3I7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2Vycm9ycy9Db21wb25lbnRSZWRlZmluZUVycm9yLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2Vycm9ycy9Db21wb25lbnRSZWRlZmluZUVycm9yLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENvbXBvbmVudFJlZGVmaW5lRXJyb3IgPSBmdW5jdGlvbiAoX0Vycm9yKSB7XG4gIF9pbmhlcml0cyhDb21wb25lbnRSZWRlZmluZUVycm9yLCBfRXJyb3IpO1xuXG4gIGZ1bmN0aW9uIENvbXBvbmVudFJlZGVmaW5lRXJyb3IobmFtZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21wb25lbnRSZWRlZmluZUVycm9yKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDb21wb25lbnRSZWRlZmluZUVycm9yLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29tcG9uZW50UmVkZWZpbmVFcnJvcikpLmNhbGwodGhpcykpO1xuXG4gICAgX3RoaXMubWVzc2FnZSA9IFwiVHJ5aW5nIHRvIHJlZGVmaW5lIGV4aXN0aW5nIGNvbXBvbmVudDogJ1wiICsgbmFtZSArIFwiJ1wiO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHJldHVybiBDb21wb25lbnRSZWRlZmluZUVycm9yO1xufShFcnJvcik7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENvbXBvbmVudFJlZGVmaW5lRXJyb3I7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2Vycm9ycy9TY29wZU5hbWVDb2xsaXNpb25FcnJvci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvZXJyb3JzL1Njb3BlTmFtZUNvbGxpc2lvbkVycm9yLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBTY29wZU5hbWVDb2xsaXNpb25FcnJvciA9IGZ1bmN0aW9uIChfRXJyb3IpIHtcbiAgX2luaGVyaXRzKFNjb3BlTmFtZUNvbGxpc2lvbkVycm9yLCBfRXJyb3IpO1xuXG4gIGZ1bmN0aW9uIFNjb3BlTmFtZUNvbGxpc2lvbkVycm9yKG5hbWUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3IpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNjb3BlTmFtZUNvbGxpc2lvbkVycm9yLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3IpKS5jYWxsKHRoaXMpKTtcblxuICAgIF90aGlzLm1lc3NhZ2UgPSBcIlRyeWluZyB0byBhc3NpZ24gYSBuYW1lICdcIiArIG5hbWUgKyBcIicgdG8gYSBzdGF0ZSB0aGF0IGFscmVhZHkgZXhpc3RzIGluIHRoZSBjaGFpbi5cIjtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICByZXR1cm4gU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3I7XG59KEVycm9yKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3I7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2dsb2JhbHMvYXR0cmlidXRlcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvZ2xvYmFscy9hdHRyaWJ1dGVzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIExJQl9OQU1FID0gJ3gnO1xudmFyIEFUVFJfUFJFRklYID0gJ2RhdGEtJztcbnZhciBQUkVGSVggPSBMSUJfTkFNRSArICctJztcbnZhciBURU1QTEFURV9CSU5ESU5HID0gUFJFRklYICsgJ2InO1xudmFyIFRFTVBMQVRFX0xJU1RfQklORElORyA9IFBSRUZJWCArICdsYic7XG52YXIgQklORElOR19JRCA9IEFUVFJfUFJFRklYICsgUFJFRklYICsgJ2lkJztcbnZhciBTVEFURV9QQVRIID0gUFJFRklYICsgJ3NwYXRoJztcbnZhciBURU1QTEFURV9QTEFDRU1FTlQgPSBQUkVGSVggKyAnZWwnO1xudmFyIFNUQVRFX05BTUUgPSBQUkVGSVggKyAnc3RhdGUtbmFtZSc7XG52YXIgU0NPUEVfUFJFRklYID0gJ3MnO1xudmFyIElURU1fSU5ERVggPSBBVFRSX1BSRUZJWCArIFBSRUZJWCArICdkeCc7XG52YXIgQ09NUE9ORU5UX1RZUEUgPSBBVFRSX1BSRUZJWCArIFBSRUZJWCArICd0cCc7XG52YXIgSVRFTV9TVUZGSVggPSAnaSc7XG52YXIgU1RBVEVfREVMSU1JVEVSID0gJy0nO1xudmFyIFNFTEYgPSAnJztcbnZhciBGVUxMX0NIQU5HRSA9ICcgX2Z1bGxfY2hhbmdlXyAnO1xuXG52YXIgQkFTRSA9ICcxJztcbnZhciBDT01QT05FTlQgPSAnMic7XG52YXIgTElTVCA9ICczJztcbnZhciBJVEVNID0gJ19pdGVtXyc7XG52YXIgQ09NUE9ORU5UX0xJU1QgPSAnNSc7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgUFJFRklYOiBQUkVGSVgsXG4gIFRFTVBMQVRFX0JJTkRJTkc6IFRFTVBMQVRFX0JJTkRJTkcsXG4gIFRFTVBMQVRFX0xJU1RfQklORElORzogVEVNUExBVEVfTElTVF9CSU5ESU5HLFxuICBCSU5ESU5HX0lEOiBCSU5ESU5HX0lELFxuICBTVEFURV9QQVRIOiBTVEFURV9QQVRILFxuICBURU1QTEFURV9QTEFDRU1FTlQ6IFRFTVBMQVRFX1BMQUNFTUVOVCxcbiAgU1RBVEVfTkFNRTogU1RBVEVfTkFNRSxcbiAgU0NPUEVfUFJFRklYOiBTQ09QRV9QUkVGSVgsXG4gIElURU1fSU5ERVg6IElURU1fSU5ERVgsXG4gIENPTVBPTkVOVF9UWVBFOiBDT01QT05FTlRfVFlQRSxcbiAgSVRFTV9TVUZGSVg6IElURU1fU1VGRklYLFxuICBTVEFURV9ERUxJTUlURVI6IFNUQVRFX0RFTElNSVRFUixcbiAgQkFTRTogQkFTRSxcbiAgQ09NUE9ORU5UOiBDT01QT05FTlQsXG4gIExJU1Q6IExJU1QsXG4gIElURU06IElURU0sXG4gIFNFTEY6IFNFTEYsXG4gIEZVTExfQ0hBTkdFOiBGVUxMX0NIQU5HRSxcbiAgQ09NUE9ORU5UX0xJU1Q6IENPTVBPTkVOVF9MSVNUXG59O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9nbG9iYWxzL3JlZ2V4cC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9nbG9iYWxzL3JlZ2V4cC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIFNUUklQX0NPTU1FTlRTID0gLyhcXC9cXC8uKiQpfChcXC9cXCpbXFxzXFxTXSo/XFwqXFwvKXwoXFxzKj1bXiwpXSooKCcoPzpcXFxcJ3xbXidcXHJcXG5dKSonKXwoXCIoPzpcXFxcXCJ8W15cIlxcclxcbl0pKlwiKSl8KFxccyo9W14sKV0qKSkvbWc7XG52YXIgQVJHVU1FTlRfTkFNRVMgPSAvKFteXFxzLF0rKS9nO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIFNUUklQX0NPTU1FTlRTOiBTVFJJUF9DT01NRU5UUyxcbiAgQVJHVU1FTlRfTkFNRVM6IEFSR1VNRU5UX05BTUVTXG59O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9oZWxwZXJzL2NoZWNrZXJzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaGVscGVycy9jaGVja2Vycy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcbmV4cG9ydHMuaXNPYmplY3RJbkJyYWNrZXRzID0gaXNPYmplY3RJbkJyYWNrZXRzO1xuZXhwb3J0cy5pc09iamVjdEluRG91YmxlQnJhY2tldHMgPSBpc09iamVjdEluRG91YmxlQnJhY2tldHM7XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5leHBvcnRzLmlzSFRNTFN0cmluZyA9IGlzSFRNTFN0cmluZztcbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcbmV4cG9ydHMuaXNET01FbGVtZW50ID0gaXNET01FbGVtZW50O1xuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuZXhwb3J0cy5pc0VtcHR5ID0gaXNFbXB0eTtcbmV4cG9ydHMuaXNMaW5rID0gaXNMaW5rO1xuXG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiBnZXRPYmplY3RUeXBlKG9iaikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkob2JqKSB7XG4gIHJldHVybiBnZXRPYmplY3RUeXBlKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICByZXR1cm4gZ2V0T2JqZWN0VHlwZShvYmopID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cblxuZnVuY3Rpb24gaXNPYmplY3RJbkJyYWNrZXRzKG9iaikge1xuICByZXR1cm4gaXNBcnJheShvYmopICYmIG9iai5sZW5ndGggPT09IDEgJiYgaXNPYmplY3Qob2JqWzBdKTtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3RJbkRvdWJsZUJyYWNrZXRzKG9iaikge1xuICByZXR1cm4gaXNBcnJheShvYmopICYmIG9iai5sZW5ndGggPT09IDEgJiYgaXNPYmplY3RJbkJyYWNrZXRzKG9ialswXSk7XG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKG9iaikge1xuICByZXR1cm4gZ2V0T2JqZWN0VHlwZShvYmopID09PSAnW29iamVjdCBTdHJpbmddJztcbn1cblxuZnVuY3Rpb24gaXNIVE1MU3RyaW5nKG9iaikge1xuICByZXR1cm4gaXNTdHJpbmcob2JqKSAmJiBvYmouaW5kZXhPZignPCcpID09PSAwO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcihvYmopIHtcbiAgcmV0dXJuIGdldE9iamVjdFR5cGUob2JqKSA9PT0gJ1tvYmplY3QgTnVtYmVyXScgJiYgb2JqID09PSBvYmo7XG59XG5cbmZ1bmN0aW9uIGlzRE9NRWxlbWVudChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2Ygb2JqLnRhZ05hbWUgIT09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBnZXRPYmplY3RUeXBlKG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaik7XG59XG5cbmZ1bmN0aW9uIGlzTGluayhvYmopIHtcbiAgdmFyIHNsYXNoSWR4ID0gb2JqLmluZGV4T2YoJy8nKTtcbiAgcmV0dXJuIFswLCAxLCAyXS5zb21lKGZ1bmN0aW9uIChpZHgpIHtcbiAgICByZXR1cm4gaWR4ID09PSBzbGFzaElkeDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkob2JqKSB7XG4gIGlmICghb2JqKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopIHx8IGlzU3RyaW5nKG9iaikpIHtcbiAgICByZXR1cm4gIW9iai5sZW5ndGg7XG4gIH1cblxuICByZXR1cm4gIU9iamVjdC5rZXlzKG9iaikubGVuZ3RoO1xufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9oZWxwZXJzL2NvbW1vbi5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9oZWxwZXJzL2NvbW1vbi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRSZWFsTmFtZSA9IGV4cG9ydHMuZ2V0U2hvcnROYW1lID0gZXhwb3J0cy50b0NhbWVsQ2FzZSA9IGV4cG9ydHMudG9EYXNoQ2FzZSA9IGV4cG9ydHMuZ2V0RmFsc2VQYXRocyA9IGV4cG9ydHMuaGFzID0gdW5kZWZpbmVkO1xuXG52YXIgX2NoZWNrZXJzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jaGVja2VycyAqLyBcIi4vc3JjL2hlbHBlcnMvY2hlY2tlcnMuanNcIik7XG5cbnZhciBfb2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9vYmplY3QgKi8gXCIuL3NyYy9oZWxwZXJzL29iamVjdC5qc1wiKTtcblxuZXhwb3J0cy5oYXMgPSBoYXM7XG5leHBvcnRzLmdldEZhbHNlUGF0aHMgPSBnZXRGYWxzZVBhdGhzO1xuZXhwb3J0cy50b0Rhc2hDYXNlID0gdG9EYXNoQ2FzZTtcbmV4cG9ydHMudG9DYW1lbENhc2UgPSB0b0NhbWVsQ2FzZTtcbmV4cG9ydHMuZ2V0U2hvcnROYW1lID0gZ2V0U2hvcnROYW1lO1xuZXhwb3J0cy5nZXRSZWFsTmFtZSA9IGdldFJlYWxOYW1lO1xuXG5cbnZhciBOQU1FUyA9IHtcbiAgcmVhbDoge30sXG4gIHNob3J0OiBbXVxufTtcblxuZnVuY3Rpb24gZ2V0U2hvcnROYW1lKG5hbWUpIHtcbiAgaWYgKE5BTUVTLnJlYWxbbmFtZV0pIHtcbiAgICByZXR1cm4gTkFNRVMucmVhbFtuYW1lXTtcbiAgfVxuXG4gIHZhciBzaG9ydE5hbWUgPSBOQU1FUy5zaG9ydC5wdXNoKG5hbWUpO1xuICByZXR1cm4gTkFNRVMucmVhbFtuYW1lXSA9IHNob3J0TmFtZSAtIDE7XG59XG5cbmZ1bmN0aW9uIGdldFJlYWxOYW1lKG51bSkge1xuICByZXR1cm4gTkFNRVMuc2hvcnRbbnVtXTtcbn1cblxuZnVuY3Rpb24gaGFzKG9iaiwgZWwpIHtcbiAgaWYgKCgwLCBfY2hlY2tlcnMuaXNPYmplY3QpKG9iaikpIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgcmV0dXJuIGhhcyhrZXlzLCBlbCk7XG4gIH1cblxuICByZXR1cm4gb2JqLmluZGV4T2YoZWwpID49IDA7XG59XG5cbmZ1bmN0aW9uIGdldEZhbHNlUGF0aHMob2JqKSB7XG4gIHZhciBvbmx5RmFsc2VQYXRocyA9IHt9O1xuICBnZXRGYWxzZVBhdGgob2JqLCBvbmx5RmFsc2VQYXRocywgW10pO1xuICByZXR1cm4gb25seUZhbHNlUGF0aHM7XG59XG5cbmZ1bmN0aW9uIGdldEZhbHNlUGF0aChvYmosIG9ubHlGYWxzZVBhdGhzLCBwYXRoKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoKDAsIF9jaGVja2Vycy5pc09iamVjdCkob2JqW2tleV0pKSB7XG4gICAgICBnZXRGYWxzZVBhdGgob2JqW2tleV0sIG9ubHlGYWxzZVBhdGhzLCBwYXRoLmNvbmNhdChrZXkpKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChvYmpba2V5XSAhPT0gdHJ1ZSkge1xuICAgICAgKDAsIF9vYmplY3Quc2V0KShvbmx5RmFsc2VQYXRocywgcGF0aC5jb25jYXQoa2V5KSwgb2JqW2tleV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0b0Rhc2hDYXNlKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuICctJyArIG1hdGNoWzBdLnRvTG93ZXJDYXNlKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b0NhbWVsQ2FzZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8tKC4pL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBtYXRjaFsxXS50b1VwcGVyQ2FzZSgpO1xuICB9KTtcbn1cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvaGVscGVycy9jb3B5LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9oZWxwZXJzL2NvcHkuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY2hlY2tlcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NoZWNrZXJzICovIFwiLi9zcmMvaGVscGVycy9jaGVja2Vycy5qc1wiKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY29weTtcblxuXG5mdW5jdGlvbiBjb3B5KGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcbiAgaWYgKCFkZXN0aW5hdGlvbikge1xuICAgIHJldHVybiBjb3B5KHt9LCBzb3VyY2UpO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuXG4gICAgaWYgKCgwLCBfY2hlY2tlcnMuaXNVbmRlZmluZWQpKHNvdXJjZVtrZXldKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICgwLCBfY2hlY2tlcnMuaXNPYmplY3QpKHNvdXJjZVtrZXldKSkge1xuICAgICAgaWYgKCFkZXN0aW5hdGlvbltrZXldKSB7XG4gICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSB7fTtcbiAgICAgIH1cbiAgICAgIGNvcHkoZGVzdGluYXRpb25ba2V5XSwgc291cmNlW2tleV0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCgwLCBfY2hlY2tlcnMuaXNBcnJheSkoc291cmNlW2tleV0pKSB7XG4gICAgICBpZiAoIWRlc3RpbmF0aW9uW2tleV0pIHtcbiAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IFtdO1xuICAgICAgfVxuICAgICAgY29weUFycmF5KGRlc3RpbmF0aW9uW2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICgoMCwgX2NoZWNrZXJzLmlzRE9NRWxlbWVudCkoc291cmNlW2tleV0pKSB7XG4gICAgICBkZXN0aW5hdGlvbltrZXldID0gc291cmNlW2tleV0uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgZGVzdGluYXRpb25ba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIGRlc3RpbmF0aW9uO1xufVxuXG5mdW5jdGlvbiBjb3B5QXJyYXkoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZS5sZW5ndGg7IGkrKykge1xuICAgIGlmICgoMCwgX2NoZWNrZXJzLmlzT2JqZWN0KShzb3VyY2VbaV0pKSB7XG4gICAgICBkZXN0aW5hdGlvbltpXSA9IGRlc3RpbmF0aW9uW2ldIHx8IHt9O1xuICAgICAgY29weShkZXN0aW5hdGlvbltpXSwgc291cmNlW2ldKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICgoMCwgX2NoZWNrZXJzLmlzQXJyYXkpKHNvdXJjZVtpXSkpIHtcbiAgICAgIGRlc3RpbmF0aW9uW2ldID0gZGVzdGluYXRpb25baV0gfHwgW107XG4gICAgICBjb3B5QXJyYXkoZGVzdGluYXRpb25baV0sIHNvdXJjZVtpXSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBkZXN0aW5hdGlvbltpXSA9IHNvdXJjZVtpXTtcbiAgfVxuXG4gIHJldHVybiBkZXN0aW5hdGlvbjtcbn1cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvaGVscGVycy9kb20uanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaGVscGVycy9kb20uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZW1wdHlOb2RlID0gZXhwb3J0cy5yZXdyaXRlVG9Ob2RlID0gZXhwb3J0cy5pbnNlcnRCZWZvcmVOb2RlID0gZXhwb3J0cy5yZW1vdmVOb2RlID0gZXhwb3J0cy53YWxrTm9kZXMgPSBleHBvcnRzLmNvbGxlY3RIVE1MTm9kZXMgPSBleHBvcnRzLmNsb25lSFRNTE1hcmt1cCA9IGV4cG9ydHMucmVwbGFjZU5vZGVzID0gdW5kZWZpbmVkO1xuXG52YXIgX2NoZWNrZXJzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jaGVja2VycyAqLyBcIi4vc3JjL2hlbHBlcnMvY2hlY2tlcnMuanNcIik7XG5cbmV4cG9ydHMucmVwbGFjZU5vZGVzID0gcmVwbGFjZU5vZGVzO1xuZXhwb3J0cy5jbG9uZUhUTUxNYXJrdXAgPSBjbG9uZUhUTUxNYXJrdXA7XG5leHBvcnRzLmNvbGxlY3RIVE1MTm9kZXMgPSBjb2xsZWN0SFRNTE5vZGVzO1xuZXhwb3J0cy53YWxrTm9kZXMgPSB3YWxrTm9kZXM7XG5leHBvcnRzLnJlbW92ZU5vZGUgPSByZW1vdmVOb2RlO1xuZXhwb3J0cy5pbnNlcnRCZWZvcmVOb2RlID0gaW5zZXJ0QmVmb3JlTm9kZTtcbmV4cG9ydHMucmV3cml0ZVRvTm9kZSA9IHJld3JpdGVUb05vZGU7XG5leHBvcnRzLmVtcHR5Tm9kZSA9IGVtcHR5Tm9kZTtcblxuXG5mdW5jdGlvbiByZXBsYWNlTm9kZXMob3JpZ2luYWwsIHJlcGxhY2VtZW50KSB7XG4gIG9yaWdpbmFsLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHJlcGxhY2VtZW50LCBvcmlnaW5hbCk7XG4gIHJldHVybiByZXBsYWNlbWVudDtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0QmVmb3JlTm9kZShlbCwgbmV4dEVsKSB7XG4gIG5leHRFbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbCwgbmV4dEVsKTtcbn1cblxuZnVuY3Rpb24gY2xvbmVIVE1MTWFya3VwKG1hcmt1cCkge1xuICB2YXIgbWFya3VwU3RyID0gKDAsIF9jaGVja2Vycy5pc0hUTUxTdHJpbmcpKG1hcmt1cC50cmltKCkpID8gbWFya3VwIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtYXJrdXApLmlubmVySFRNTDtcbiAgcmV0dXJuIGNvbnZlcnRTdHJpbmdUb0hUTUwobWFya3VwU3RyKTtcbn1cblxuZnVuY3Rpb24gY29udmVydFN0cmluZ1RvSFRNTChtYXJrdXBTdHJpbmcpIHtcbiAgdmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgdmFyIHBhcnNlZERvY3VtZW50ID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhtYXJrdXBTdHJpbmcsICd0ZXh0L2h0bWwnKTtcbiAgcmV0dXJuIHBhcnNlZERvY3VtZW50LmJvZHkuZmlyc3RFbGVtZW50Q2hpbGQ7XG59XG5cbmZ1bmN0aW9uIHdhbGtOb2Rlcyhub2RlLCBjYikge1xuICBpZiAoY2Iobm9kZSkgPT09IC0xKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICByZXR1cm4gd2Fsa05vZGVzKGVsLCBjYik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjb2xsZWN0SFRNTE5vZGVzKHJvb3QsIGlzV2FudGVkKSB7XG4gIHZhciBub2RlcyA9IFtdO1xuICB3YWxrTm9kZXMocm9vdCwgZnVuY3Rpb24gKGVsKSB7XG4gICAgcmV0dXJuIGlzV2FudGVkKGVsKSA/IG5vZGVzLnB1c2goZWwpIDogJyc7XG4gIH0pO1xuICByZXR1cm4gbm9kZXM7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xuICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5cbmZ1bmN0aW9uIHJld3JpdGVUb05vZGUobm9kZSwgdGV4dCkge1xuICBlbXB0eU5vZGUobm9kZSk7XG4gIHdyaXRlVG9Ob2RlKG5vZGUsIHRleHQpO1xufVxuXG5mdW5jdGlvbiB3cml0ZVRvTm9kZShub2RlLCB0ZXh0KSB7XG4gIHZhciB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpO1xuICBub2RlLmFwcGVuZENoaWxkKHRleHROb2RlKTtcbn1cblxuZnVuY3Rpb24gZW1wdHlOb2RlKG5vZGUpIHtcbiAgd2hpbGUgKG5vZGUuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2hlbHBlcnMvZXF1YWxpdHkuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9oZWxwZXJzL2VxdWFsaXR5LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2NoZWNrZXJzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jaGVja2VycyAqLyBcIi4vc3JjL2hlbHBlcnMvY2hlY2tlcnMuanNcIik7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGFyZUVxdWFsO1xuXG5cbmZ1bmN0aW9uIGFyZUVxdWFsKGZpcnN0LCBzZWNvbmQpIHtcbiAgaWYgKCgwLCBfY2hlY2tlcnMuaXNVbmRlZmluZWQpKGZpcnN0KSB8fCAoMCwgX2NoZWNrZXJzLmlzVW5kZWZpbmVkKShzZWNvbmQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCh0eXBlb2YgZmlyc3QgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGZpcnN0KSkgIT09ICh0eXBlb2Ygc2Vjb25kID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihzZWNvbmQpKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwYXJlbnROb2RlID0geyBjaGlsZE5vZGU6IHt9IH07XG5cbiAgaWYgKCgwLCBfY2hlY2tlcnMuaXNBcnJheSkoc2Vjb25kKSkge1xuICAgIGNoZWNrS2V5c0VxdWFsaXR5KGZpcnN0ID8gZmlyc3QubWFwKGZ1bmN0aW9uIChlbCkge1xuICAgICAgcmV0dXJuIGVsO1xuICAgIH0pIDogW10sIHNlY29uZC5tYXAoZnVuY3Rpb24gKGVsKSB7XG4gICAgICByZXR1cm4gZWw7XG4gICAgfSksIHBhcmVudE5vZGUpO1xuICB9IGVsc2UgaWYgKCgwLCBfY2hlY2tlcnMuaXNPYmplY3QpKHNlY29uZCkpIHtcbiAgICBjaGVja0tleXNFcXVhbGl0eShmaXJzdCwgc2Vjb25kLCBwYXJlbnROb2RlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmlyc3QgPT09IHNlY29uZDtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnROb2RlLmNoaWxkTm9kZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tLZXlzRXF1YWxpdHkoZmlyc3QsIHNlY29uZCwgcGFyZW50Tm9kZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc2Vjb25kKSB7XG5cbiAgICBpZiAoKDAsIF9jaGVja2Vycy5pc0FycmF5KShmaXJzdCkpIHtcbiAgICAgIGlmICgoMCwgX2NoZWNrZXJzLmlzVW5kZWZpbmVkKShmaXJzdFtrZXldKSkge1xuICAgICAgICBwYXJlbnROb2RlLmNoaWxkTm9kZVtrZXldID0geyBhZGQ6IHRydWUgfTtcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChmaXJzdFtrZXldICE9PSBzZWNvbmRba2V5XSkge1xuICAgICAgcGFyZW50Tm9kZS5jaGlsZE5vZGVba2V5XSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIF9rZXkgaW4gZmlyc3QpIHtcblxuICAgIGlmICgoMCwgX2NoZWNrZXJzLmlzQXJyYXkpKGZpcnN0KSkge1xuICAgICAgaWYgKCgwLCBfY2hlY2tlcnMuaXNVbmRlZmluZWQpKHNlY29uZFtfa2V5XSkpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5jaGlsZE5vZGVbX2tleV0gPSB7IHJlbW92ZTogdHJ1ZSB9O1xuICAgICAgfVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGZpcnN0W19rZXldICE9PSBzZWNvbmRbX2tleV0pIHtcbiAgICAgIHBhcmVudE5vZGUuY2hpbGROb2RlW19rZXldID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcmVudE5vZGU7XG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2hlbHBlcnMvb2JqZWN0LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2hlbHBlcnMvb2JqZWN0LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnNwbGl0UGllY2UgPSBleHBvcnRzLmZ1bGxNYXAgPSBleHBvcnRzLnRvT2JqZWN0ID0gZXhwb3J0cy5maWx0ZXIgPSBleHBvcnRzLm1hcEtleXMgPSBleHBvcnRzLm1hcCA9IGV4cG9ydHMuZm9yRWFjaCA9IGV4cG9ydHMuYWRkQ29uc3RGaWVsZHMgPSBleHBvcnRzLnJlbW92ZSA9IGV4cG9ydHMuc2V0ID0gZXhwb3J0cy5nZXQgPSB1bmRlZmluZWQ7XG5cbnZhciBfY2hlY2tlcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NoZWNrZXJzICovIFwiLi9zcmMvaGVscGVycy9jaGVja2Vycy5qc1wiKTtcblxuZXhwb3J0cy5nZXQgPSBnZXQ7XG5leHBvcnRzLnNldCA9IHNldDtcbmV4cG9ydHMucmVtb3ZlID0gcmVtb3ZlO1xuZXhwb3J0cy5hZGRDb25zdEZpZWxkcyA9IGFkZENvbnN0RmllbGRzO1xuZXhwb3J0cy5mb3JFYWNoID0gZm9yRWFjaDtcbmV4cG9ydHMubWFwID0gbWFwO1xuZXhwb3J0cy5tYXBLZXlzID0gbWFwS2V5cztcbmV4cG9ydHMuZmlsdGVyID0gZmlsdGVyO1xuZXhwb3J0cy50b09iamVjdCA9IHRvT2JqZWN0O1xuZXhwb3J0cy5mdWxsTWFwID0gZnVsbE1hcDtcbmV4cG9ydHMuc3BsaXRQaWVjZSA9IHNwbGl0UGllY2U7XG5cblxuZnVuY3Rpb24gZ2V0KG9iaiwgcGF0aCkge1xuICB2YXIgdmFsdWUgPSBvYmo7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuXG4gICAgdHJ5IHtcbiAgICAgIHZhbHVlID0gdmFsdWVbcGF0aFtpXV07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHNldChvYmosIHBhdGgsIHZhbHVlKSB7XG4gIGlmICghcGF0aC5sZW5ndGgpIHtcbiAgICBpZiAoKDAsIF9jaGVja2Vycy5pc09iamVjdCkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihvYmosIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iaiA9IHZhbHVlO1xuICB9XG5cbiAgdmFyIGRlc3QgPSBvYmo7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBpZiAoIWRlc3RbcGF0aFtpXV0pIHtcbiAgICAgIGRlc3QgPSBkZXN0W3BhdGhbaV1dID0ge307XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlc3QgPSBkZXN0W3BhdGhbaV1dO1xuICAgIH1cbiAgfVxuXG4gIGlmICgoMCwgX2NoZWNrZXJzLmlzT2JqZWN0KSh2YWx1ZSkpIHtcbiAgICBkZXN0W3BhdGhbaV1dID0gZGVzdFtwYXRoW2ldXSB8fCB7fTtcbiAgICBPYmplY3QuYXNzaWduKGRlc3RbcGF0aFtpXV0sIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBkZXN0W3BhdGhbaV1dID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiByZW1vdmUob2JqLCBwYXRoKSB7XG4gIHZhciB2YWx1ZSA9IG9iajtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIHZhbHVlID0gdmFsdWVbcGF0aFtpXV07XG4gIH1cblxuICBkZWxldGUgdmFsdWVbcGF0aFtpXV07XG59XG5cbmZ1bmN0aW9uIGFkZENvbnN0RmllbGRzKG9iaiwgZmllbGRzKSB7XG4gIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGZpZWxkKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgZmllbGQsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gZmllbGRzW2ZpZWxkXTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldCgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVHJ5aW5nIHRvIHJlZGVmaW5lIGNvbnN0IGZpZWxkICdcIiArIGZpZWxkICsgXCInXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGZpZWxkIGluIGZpZWxkcykge1xuICAgIF9sb29wKGZpZWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgY2IpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIHZhciBwcm9wID0gb2JqW2tleV07XG4gICAgY2IocHJvcCwga2V5LCBvYmopO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcChvYmosIGNiKSB7XG4gIHZhciBuZXdPYmogPSB7fTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIHZhciBwcm9wID0gb2JqW2tleV07XG4gICAgbmV3T2JqW2tleV0gPSBjYihwcm9wLCBrZXksIG9iaik7XG4gIH1cbiAgcmV0dXJuIG5ld09iajtcbn1cblxuZnVuY3Rpb24gbWFwS2V5cyhvYmosIGNiKSB7XG4gIHZhciBuZXdPYmogPSB7fTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIHZhciBwcm9wID0gb2JqW2tleV07XG4gICAgdmFyIG5ld0tleSA9IGNiKGtleSwgcHJvcCwgb2JqKTtcbiAgICBuZXdPYmpbbmV3S2V5XSA9IHByb3A7XG4gIH1cbiAgcmV0dXJuIG5ld09iajtcbn1cblxuZnVuY3Rpb24gc3BsaXRQaWVjZShvYmosIGNiKSB7XG4gIHZhciBuZXdPYmogPSB7fTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIHZhciBwcm9wID0gb2JqW2tleV07XG4gICAgaWYgKGNiKHByb3AsIGtleSwgb2JqKSkge1xuICAgICAgbmV3T2JqW2tleV0gPSBwcm9wO1xuICAgICAgZGVsZXRlIG9ialtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5mdW5jdGlvbiBmdWxsTWFwKG9iaiwgY2IpIHtcbiAgdmFyIG5ld09iaiA9IHt9O1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgdmFyIHByb3AgPSBvYmpba2V5XTtcbiAgICB2YXIgcmVzID0gY2Ioa2V5LCBwcm9wLCBvYmopO1xuICAgIG5ld09ialtyZXNbMF0gfHwgcmVzLmtleSB8fCByZXMua10gPSByZXNbMV0gfHwgcmVzWyd2YWx1ZSddIHx8IHJlc1sndiddO1xuICB9XG4gIHJldHVybiBuZXdPYmo7XG59XG5cbmZ1bmN0aW9uIGZpbHRlcihvYmosIGNiKSB7XG4gIHZhciBuZXdPYmogPSB7fTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIHZhciBwcm9wID0gb2JqW2tleV07XG4gICAgaWYgKGNiKHByb3AsIGtleSwgb2JqKSkge1xuICAgICAgbmV3T2JqW2tleV0gPSBwcm9wO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5mdW5jdGlvbiB0b09iamVjdChhcnIsIHZhbCkge1xuICB2YXIgbmV3T2JqID0ge307XG4gIGFyci5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgbmV3T2JqW3ZdID0gKDAsIF9jaGVja2Vycy5pc0Z1bmN0aW9uKSh2YWwpID8gdmFsKHYpIDogdmFsO1xuICB9KTtcbiAgcmV0dXJuIG5ld09iajtcbn1cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvbWFpbi5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL21haW4uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgX0RlZmluaXRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0RlZmluaXRpb24gKi8gXCIuL3NyYy9EZWZpbml0aW9uLmpzXCIpO1xuXG52YXIgX1Byb2R1Y3Rpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1Byb2R1Y3Rpb24gKi8gXCIuL3NyYy9Qcm9kdWN0aW9uLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGVmaW5lOiBfRGVmaW5pdGlvbi5kZWZpbmUsXG4gIGFwcGx5OiBfUHJvZHVjdGlvbi5hcHBseVxufTtcblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OURiM1ZzYVM5M1pXSndZV05yTDNWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRpTENKM1pXSndZV05yT2k4dlEyOTFiR2t2ZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFpTENKM1pXSndZV05yT2k4dlEyOTFiR2t2TGk5emNtTXZSR1ZtYVc1cGRHbHZiaTVxY3lJc0luZGxZbkJoWTJzNkx5OURiM1ZzYVM4dUwzTnlZeTlGZG1WdWRFaGhibVJzWlhJdWFuTWlMQ0ozWldKd1lXTnJPaTh2UTI5MWJHa3ZMaTl6Y21NdlVISnZaSFZqZEdsdmJpNXFjeUlzSW5kbFluQmhZMnM2THk5RGIzVnNhUzh1TDNOeVl5OVRkR0YwWlM1cWN5SXNJbmRsWW5CaFkyczZMeTlEYjNWc2FTOHVMM055WXk5VGRHRjBaVU5vWVc1blpTNXFjeUlzSW5kbFluQmhZMnM2THk5RGIzVnNhUzh1TDNOeVl5OVdhV1YzTG1weklpd2lkMlZpY0dGamF6b3ZMME52ZFd4cEx5NHZjM0pqTDJWeWNtOXljeTlDYVc1a2FXNW5UbTkwUlhocGMzUnpSWEp5YjNJdWFuTWlMQ0ozWldKd1lXTnJPaTh2UTI5MWJHa3ZMaTl6Y21NdlpYSnliM0p6TDBOdmJYQnZibVZ1ZEZKbFpHVm1hVzVsUlhKeWIzSXVhbk1pTENKM1pXSndZV05yT2k4dlEyOTFiR2t2TGk5emNtTXZaWEp5YjNKekwxTmpiM0JsVG1GdFpVTnZiR3hwYzJsdmJrVnljbTl5TG1weklpd2lkMlZpY0dGamF6b3ZMME52ZFd4cEx5NHZjM0pqTDJkc2IySmhiSE12WVhSMGNtbGlkWFJsY3k1cWN5SXNJbmRsWW5CaFkyczZMeTlEYjNWc2FTOHVMM055WXk5bmJHOWlZV3h6TDNKbFoyVjRjQzVxY3lJc0luZGxZbkJoWTJzNkx5OURiM1ZzYVM4dUwzTnlZeTlvWld4d1pYSnpMMk5vWldOclpYSnpMbXB6SWl3aWQyVmljR0ZqYXpvdkwwTnZkV3hwTHk0dmMzSmpMMmhsYkhCbGNuTXZZMjl0Ylc5dUxtcHpJaXdpZDJWaWNHRmphem92TDBOdmRXeHBMeTR2YzNKakwyaGxiSEJsY25NdlkyOXdlUzVxY3lJc0luZGxZbkJoWTJzNkx5OURiM1ZzYVM4dUwzTnlZeTlvWld4d1pYSnpMMlJ2YlM1cWN5SXNJbmRsWW5CaFkyczZMeTlEYjNWc2FTOHVMM055WXk5b1pXeHdaWEp6TDJWeGRXRnNhWFI1TG1weklpd2lkMlZpY0dGamF6b3ZMME52ZFd4cEx5NHZjM0pqTDJobGJIQmxjbk12YjJKcVpXTjBMbXB6SWl3aWQyVmljR0ZqYXpvdkwwTnZkV3hwTHk0dmMzSmpMMjFoYVc0dWFuTWlYU3dpYm1GdFpYTWlPbHNpVmtGTVZVVmZWRmxRUlZNaUxDSlNSVk5GVWxaRlJGOUlUMDlMVTE5T1FVMUZVeUlzSWtSRlJrRlZURlJmU0U5UFMxTWlMQ0pTUlZORlVsWkZSRjlDU1U1RVNVNUhYMDVCVFVWVElpd2lZMjl1WTJGMElpd2lURWxDWDBGVVZGSWlMQ0pUUlV4R0lpd2laR1ZtYVc1bElpd2laMlYwUTI5dGNHOXVaVzUwVDNCMGN5SXNJbk5vYjNKMFpXNUNhVzVrYVc1blNXUWlMQ0pwYzBOdmJYQnZibVZ1ZENJc0lrTlBUVkJQVGtWT1ZGOURUMVZPVkVWU0lpd2lRMDlOVUU5T1JVNVVVeUlzSW01aGJXVWlMQ0p0WVhKcmRYQWlMQ0ppYVc1a2FXNW5jeUlzSW5OMGVXeGxjeUlzSW1GeVozTWlMQ0pEYjIxd2IyNWxiblJTWldSbFptbHVaVVZ5Y205eUlpd2lZMjl0Y0c5dVpXNTBTRlJOVEUxaGNtdDFjQ0lzSW1Oc1lYTnpUR2x6ZENJc0ltRmtaQ0lzSW1OdmJYQnZibVZ1ZENJc0luTjBZWFJsSWl3aWMzUmhkR1ZKWkNJc0luTjBZWFJsVUdGMGFDSXNJbk4wWVhSbFRtRnRaWE1pTENKbGRtRnNkV0YwWlNJc0lteHBibXR6SWl3aWIzVjBaWEpPWVcxbGN5SXNJbDlzYVc1cmN5SXNJbWRoZEdobGNrSnBibVJwYm1kelJuSnZiVTFoY210MWNDSXNJbTV2Y20xaGJHbDZaV1JQY0hScGIyNXpJaXdpYm05eWJXRnNhWHBsVlhObGNrOXdkR2x2Ym5NaUxDSndjbVZ3WVhKbFFtbHVaR2x1WjNNaUxDSndjbVZ3WVhKbFUzUjViR1Z6SWl3aVNGUk5URTV2WkdVaUxDSmlhVzVrYVc1blQzQjBjeUlzSW1GdVlXeDVlbVZDYVc1a2FXNW5JaXdpWW1sdVpHbHVaeUlzSW1OeVpXRjBaVUpwYm1ScGJtY2lMQ0p6WlhSRGIyMXdiMjVsYm5RaUxDSlFVa1ZHU1ZnaUxDSnBaQ0lzSW1selRHbHpkQ0lzSW1sMFpXMU9iMlJsSWl3aVkyaHBiR1J5Wlc0aUxDSnRiMlJwWm5sVWIweHBjM1JDYVc1a2FXNW5JaXdpYkdsemRFbDBaVzBpTENKamIyMXdiMjVsYm5SQ2FXNWthVzVuSWl3aWMzVmlRMjl0Y0c5dVpXNTBUM0IwY3lJc0lrOWlhbVZqZENJc0ltRnpjMmxuYmlJc0luTjBZWFJsVG1GdFpTSXNJbE5qYjNCbFRtRnRaVU52Ykd4cGMybHZia1Z5Y205eUlpd2lZMnh2Ym1WT2IyUmxJaXdpY21WMlRHbHVhM01pTENKamRYSnlaVzUwVTNSaGRHVkpaQ0lzSW5CaGNtVnVkRU52YlhCdmJtVnVkQ0lzSW1OdmJYQnZibVZ1ZEZkeVlYQndaWElpTENKa2IyTjFiV1Z1ZENJc0ltTnlaV0YwWlVWc1pXMWxiblFpTENKelpYUkJkSFJ5YVdKMWRHVWlMQ0pDU1U1RVNVNUhYMGxFSWl3aVUxUkJWRVZmUkVWTVNVMUpWRVZTSWl3aVlYQndaVzVrUTJocGJHUWlMQ0p6ZFdKRGIyMXdiMjVsYm5Seklpd2lZbWx1WkdsdVowNWhiV1VpTENKdmJHUkNhVzVrYVc1blNXUWlMQ0p1WlhkQ2FXNWthVzVuU1dRaUxDSnphRzl5ZEVsa0lpd2lZbWx1WkdsdVowNXZaR1VpTENKeGRXVnllVk5sYkdWamRHOXlJaXdpY21WdGIzWmxJaXdpYzJ4cFkyVWlMQ0pvYjI5cmN5SXNJbkJ5WlhCaGNtVlNaV0ZqZEdsMlpVWjFibU56SWl3aWNIVnphQ0lzSWtsVVJVMGlMQ0p6WlhSMWNFTnZiWEJ2Ym1WdWRITk1hVzVyY3lJc0luUmxiWEJzWVhSbElpd2labTl5UldGamFDSXNJbk4xWWtOdmJYQnZibVZ1ZENJc0ltTnZiWEJ2Ym1WdWRFUmhkR0VpTENKMGVYQmxJaXdpY21WaFkzUnBkbVZHZFc1aklpd2ljSEpsY0dGeVpWSmxZV04wYVhabFJuVnVZeUlzSW1SbGNHVnVaR1Z1WTJsbGMwNWhiV1Z6SWl3aVoyVjBSR1Z3Wlc1a1pXNWphV1Z6VG1GdFpYTWlMQ0prWlhCbGJtUmxibU41VG1GdFpTSXNJbVJsY0dWdVpHRnVkSE1pTENKMllXeDFaWE1pTENKamIyMXdiMjVsYm5SSmJuUmxjbVpoWTJVaUxDSmpiMjF3ZFhSbElpd2lablZ1WXlJc0ltWjFibU5RWVhKaGJYTWlMQ0puWlhSUVlYSmhiVTVoYldWeklpd2lkbUZzZFdWelQySnFVbVZuUlhod0lpd2lVbVZuUlhod0lpd2lablZ1WTFOMGNpSXNJblJ2VTNSeWFXNW5JaXdpWlhobFl5SXNJbVoxYm1OVGRISlhhWFJvYjNWMFEyOXRiV1Z1ZEhNaUxDSnlaWEJzWVdObElpd2lVa1VpTENKVFZGSkpVRjlEVDAxTlJVNVVVeUlzSW5CaGNtRnRjMU4wY2lJc0ltbHVaR1Y0VDJZaUxDSnRZWFJqYUNJc0lrRlNSMVZOUlU1VVgwNUJUVVZUSWl3aWRtRnNkV1Z6VDJKcUlpd2lZMkZzYkNJc0ltc2lMQ0pzYVc1cklpd2liM0IwYVc5dWMwOWlhaUlzSW5CaGNtVnVkRTlpYWlJc0luQmhjbVZ1ZEV0bGVTSXNJbU5zWVhOeklpd2liR1Z1WjNSb0lpd2liM0IwYVc5dUlpd2lkbUZzZFdVaUxDSmxkbVZ1ZEhNaUxDSnJaWGtpTENKbGJDSXNJbWRsZEVGMGRISnBZblYwWlNJc0lsUkZUVkJNUVZSRlgwSkpUa1JKVGtjaUxDSnlaVzF2ZG1WQmRIUnlhV0oxZEdVaUxDSjBjbWx0SWl3aVZFVk5VRXhCVkVWZlRFbFRWRjlDU1U1RVNVNUhJaXdpZEdGblRtRnRaU0lzSW5SdlRHOTNaWEpEWVhObElpd2liMkpxSWl3aVoyVjBRMjl0Y0c5dVpXNTBRbmxPWVcxbElpd2lRWEp5WVhraUxDSndjbTkwYjNSNWNHVWlMQ0poZEhSeWFXSjFkR1Z6SWl3aVlYUjBjaUlzSWxOVVFWUkZYMDVCVFVVaUxDSnBibTVsY2t4cGJtc2lMQ0pqYjIxd2IyNWxiblJQY0hSeklpd2lhWE5NYVhOMFNYUmxiU0lzSW1Wc1QzQjBjeUlzSW1sdWFYUldZV3gxWlNJc0ltbHVibVZ5U0ZSTlRDSXNJbXhwYzNSbGJtVnljeUlzSW1sMFpXMU5ZWEpyZFhBaUxDSnpjR3hwZENJc0ltMWhjQ0lzSW1wdmFXNGlMQ0p6ZEhsc1pVRnlaeUlzSW5ObGJHVmpkRzl5SWl3aVkyeGhjM05PWVcxbElpd2lhWE5DYVc1a2FXNW5JaXdpY0hKbFptbDRJaXdpYzJWMGRYQkZkbVZ1ZEVoaGJtUnNaWEp6SWl3aVpXeGxiV1Z1ZENJc0ltVjJaVzUwU0dGdVpHeGxjbk1pTENKbllYUm9aWEpCYkd4RmRtVnVkRWhoYm1Sc1pYSnpJaXdpWlhabGJuUk9ZVzFsSWl3aVlXUmtSWFpsYm5STWFYTjBaVzVsY2lJc0ltVWlMQ0psZUdWamRYUmxRV3hzUTJGc2JHSmhZMnR6U1c1TWFYTjBJaXdpWjJGMGFHVnlaV1JJWVc1a2JHVnljeUlzSW1kaGRHaGxja1YyWlc1MFNHRnVaR3hsY25NaUxDSmtaV052Y21GMFpVVjJaVzUwSWl3aVkzVnlTRlJOVEU1dlpHVWlMQ0owWVhKblpYUWlMQ0p3WVhKbGJuUk9iMlJsSWl3aVltbHVaR2x1WjBsa0lpd2laWFpsYm5SSVlXNWtiR1Z5SWl3aWFXNWtaWGhzWlhOelUzUmhkR1ZRWVhSb0lpd2ljRzl3SWl3aWMzUmhkR1ZRWVhSb1ZHOUpkR1Z0SWl3aVoyVjBVM1JoZEdWUVlYUm9WRzlKZEdWdElpd2lZV05qWlhOemIzSlViMFJoZEdFaUxDSndjbTl3WVdkaGRHbHZibE4wYjNCd1pXUWlMQ0p6ZEc5d1VISnZjR0ZuWVhScGIyNGlMQ0ppYVc1a0lpd2laV3hsYldWdWRFNWhiV1VpTENKblpYUlViMGwwWlcxT2IyUmxJaXdpYVdSNElpd2lTVlJGVFY5SlRrUkZXQ0lzSW5WdWMyaHBablFpTENKamRYSkZiQ0lzSW1Gd2NHeDVJaXdpY205dmRFVnNaVzFsYm5SVFpXeGxZM1J2Y2lJc0luSnZiM1JGYkdWdFpXNTBJaXdpU0ZSTlRFNXZaR1Z6SWl3aWMyVjBkWEJGYkdWdFpXNTBJaXdpWTNKbFlYUmxRV05qWlhOemIzSWlMQ0puWlhSUGJteDVWbUZzZFdWeklpd2laMlYwUTI5dGNHOXVaVzUwSWl3aWMyVjBVM1JoZEdVaUxDSndjbVZ3WVhKbFEyaGhibWRsVDJKcVpXTjBJaXdpUlV4RlRVVk9WRk1pTENKVFZFRlVSU0lzSWtWTVJVMUZUbFJmUTA5VlRsUkZVaUlzSW5CaGRHZ2lMQ0puWlhSVGRHRjBaU0lzSWtOUFRWQlBUa1ZPVkY5VVdWQkZJaXdpUWtGVFJTSXNJbUZqWTJWemMyOXlJaXdpYzNSaGNuUlVjbUZ1YzJGamRHbHZiaUlzSW1Gd2NHeDVRMmhoYm1kbGN5SXNJblZ3SWl3aWJHVjJaV3dpTENKdGIzWmxWWEJUZEdGMFpWQmhkR2dpTENKa2IzZHVJaXdpWVdSa2FYUnBiMjVoYkZCaGRHZ2lMQ0p6WlhRaUxDSmphR0Z1WjJWUFltb2lMQ0puWlhRaUxDSm5aWFJXWVd4MVpYTWlMQ0p0YjJScFpubFViMEZ5Y21GNVFXTmpaWE56YjNJaUxDSjJJaXdpWm05eVkyVmtJaXdpYTJWNWN5SXNJbVp2Y21ObElpd2lhU0lzSW1KcGJtUnBibWRXWVd4MVpYTWlMQ0puWlhSV1lXeDFaWE5VY21WbElpd2lkbUZzZFdWelZISmxaU0lzSW5aaGJITWlMQ0pwZEdWdFZtRnNkV1Z6SWl3aVkyOXRjRzl1Wlc1MFZtRnNkV1Z6SWl3aWJHRnpkRWxrZUNJc0ltNTFiU0lzSW1Wc2N5SXNJbk4wWVhKMElpd2ljMmhwWm5RaUxDSnRZWEJNYVhOMElpd2lZMklpTENKcGRHVnlZWFJsVEdsemRGWmhiSFZsY3lJc0ltWnBiSFJsY2lJc0ltWnBiSFJsY2t4cGMzUWlMQ0p1WlhkTWFYTjBJaXdpYzJWMFZtRnNkV1Z6SWl3aVkzSmxZWFJsVTNSaGRHVk9iMlJsY3lJc0ltMXZaR2xtZVV4cGMzUWlMQ0p6Wlc1a1ZHOVNaVzVrWlhKUmRXVjFaU0lzSWtOSVFVNUhSVk1pTENKamFHRnVaMlZ6SWl3aVkyOXNiR1ZqZEdsdVp5SXNJbEJTVDAxSlUwVlRYMUpGVTA5TVZrVlRJaXdpVEVsR1JWOURXVU5NUlY5SVFVNUVURVZTVXlJc0lteHBjM1FpTENKeWRXNU1hV1psUTNsamJHVkliMjlyY3lJc0lteHBabVZEZVdOc1pVaGhibVJzWlhKeklpd2lhQ0lzSW1acGJtRnNhWHBsVkhKaGJuTmhZM1JwYjI0aUxDSnlaWE52YkhabFVISnZiV2x6WlNJc0lsQnliMjFwYzJVaUxDSnlaWE52YkhabElpd2lZMmhoYm1kbElpd2lhWE5EYjJ4c1pXTjBhVzVuUTJoaGJtZGxjeUlzSW1Ga1pFeHBabVZEZVdOc1pVaHZiMnNpTENKb2IyOXJWSGx3WlNJc0ltaHZiMnNpTENKMllXeDFaWE5PYjJSbElpd2lZM0psWVhSbFUzUmhkR1ZPYjJSbElpd2lkbUZzZFdWelRtOWtaWE1pTENKMllXeDFaVTV2WkdVaUxDSnlaV1IxWTJVaUxDSmhJaXdpWTJoaGJtZGxWbUZzZFdWeklpd2lZMkZzYkdWa1JHVndaVzVrWlc1alpYTWlMQ0pHVlV4TVgwTklRVTVIUlNJc0ltVnVaQ0lzSW5ObGRGWmhiSFZsSWl3aWNtVnpJaXdpUW1sdVpHbHVaMDV2ZEVWNGFYTjBjMFZ5Y205eUlpd2ljMlYwVm1Gc2RXVkdiM0pNYVhOMElpd2ljMlYwVm1Gc2RXVkdiM0pEYjIxd2IyNWxiblFpTENKbGNYVmhiQ0lzSW1oMGJXd2lMQ0prWlhCbGJtUmhiblFpTENKa1pYQmxibVJoYm5STFpYa2lMQ0p1WlhkV1lXeDFaU0lzSW1GeWNpSXNJbWx1WkdWNFJYRjFZV3hwZEhraUxDSnlaVzF2ZG1WTWFYTjBTWFJsYlNJc0ltRmpkR2x2YmlJc0lteHBjM1JRWVhSb0lpd2lhWFJsYlU1aGJXVWlMQ0poWkdSVWIweHBjM1FpTENKeVpXMXZkbVZHY205dFRHbHpkQ0lzSW5Od2JHbGpaU0lzSW14cGMzUkNhVzVrYVc1bklpd2ljbVZ0YjNabFpFUlBUVTV2WkdVaUxDSnlaVzF2ZG1Wa1RtOWtaU0lzSW1OeVpXRjBaVUZ1WkVGd2NHVnVaRk4wZVd4bGN5SXNJbkpsYm1SbGNrTm9ZVzVuWlhNaUxDSnlaVzVrWlhJaUxDSmhjSEJzZVUxaGNtdDFjQ0lzSW1Gd2NHeDVRMnhoYzNObGN5SXNJbk4wZVd4bElpd2lZWEJ3YkhsVGRIbHNaWE1pTENKaGRIUnljeUlzSW1Gd2NHeDVRWFIwY21saWRYUmxjeUlzSW1OdmJYQnZibVZ1ZEVOb1lXNW5aWE1pTENKbGJHVnRaVzUwU1dRaUxDSmpiMjF3YjI1bGJuUkpaQ0lzSW1OdmJYQnZibVZ1ZEVGalkyVnpjMjl5SWl3aWNtVnVaR1Z5VEdsemRDSXNJbkpsYm1SbGNrTnZiWEJ2Ym1WdWRDSXNJblZ3WkdGMFpVTnZiWEJ2Ym1WdWRDSXNJbVJ5WVhkRGIyMXdiMjVsYm5RaUxDSnBkR1Z0VjNKaGNIQmxjaUlzSWtOUFRWQlBUa1ZPVkNJc0luSmxibVJsY2taMWJtTWlMQ0p5Wlc1a1pYSlVlWEJsSWl3aVkyaHBiR1JUZEdGMFpWQmhkR2dpTENKamFHbHNaRTFoY210MWNDSXNJbU52YlhCdmJtVnVkRTFoY210MWNDSXNJbU5vWVc1blpWUjVjR1VpTENKemRHRjBaVkJoZEdoVWIwSnBibVJwYm1jaUxDSnNhWE4wUTI5dGNHOXVaVzUwSWl3aWFYUmxiWE5XWVd4MVpYTWlMQ0oxY0dSaGRHVk1hWE4wSWl3aWJHbHpkRVp5WVdkdFpXNTBJaXdpWW5WcGJHUk1hWE4wSWl3aWJHbHpkRTV2WkdVaUxDSnVaWGgwVG05a1pTSXNJbTVsZUhSRmJHVnRaVzUwVTJsaWJHbHVaeUlzSWt4SlUxUWlMQ0pEVDAxUVQwNUZUbFJmVEVsVFZDSXNJbWx1YzJWeWRFSmxabTl5WlNJc0luSmhibWRsSWl3aVkzSmxZWFJsUkc5amRXMWxiblJHY21GbmJXVnVkQ0lzSW1sMFpXMVdZV3gxWlNJc0ltbDBaVzFKYm1SbGVDSXNJbTVsZDBsMFpXMUpibVJsZUNJc0lteHBjM1JKZEdWdFRXRnlhM1Z3SWl3aWFYUmxiWE5EYUdGdVoyVnpJaXdpY21WdGIzWmxaRU52ZFc1MElpd2lhWFJsYlVGalkyVnpjMjl5SWl3aVptbDRTVzVrWlhobGN5SXNJbVJwWm1ZaUxDSnBkR1Z0YzA1dlpHVnpJaXdpY0hKbGRrbGtlQ0lzSW01bGQwbGtlQ0lzSW1Oc1lYTnpaWE1pTENKdWIzSnRZV3hwZW1WVGRIbHNaWE1pTENKemRIbHNaVTlpYWlJc0luTjBlV3hsVTNSeUlpd2ljM1I1YkdWRmJDSXNJbU55WldGMFpWUmxlSFJPYjJSbElpd2lhR1ZoWkNJc0ltTnZiWEJ2Ym1WdWRFNWhiV1VpTENKdFpYTnpZV2RsSWl3aVJYSnliM0lpTENKTVNVSmZUa0ZOUlNJc0lrRlVWRkpmVUZKRlJrbFlJaXdpVTFSQlZFVmZVRUZVU0NJc0lsUkZUVkJNUVZSRlgxQk1RVU5GVFVWT1ZDSXNJbE5EVDFCRlgxQlNSVVpKV0NJc0lrbFVSVTFmVTFWR1JrbFlJaXdpYVhOR2RXNWpkR2x2YmlJc0ltbHpRWEp5WVhraUxDSnBjMDlpYW1WamRDSXNJbWx6VDJKcVpXTjBTVzVDY21GamEyVjBjeUlzSW1selQySnFaV04wU1c1RWIzVmliR1ZDY21GamEyVjBjeUlzSW1selUzUnlhVzVuSWl3aWFYTklWRTFNVTNSeWFXNW5JaXdpYVhOT2RXMWlaWElpTENKcGMwUlBUVVZzWlcxbGJuUWlMQ0pwYzFWdVpHVm1hVzVsWkNJc0ltbHpSVzF3ZEhraUxDSnBjMHhwYm1zaUxDSm5aWFJQWW1wbFkzUlVlWEJsSWl3aWMyeGhjMmhKWkhnaUxDSnpiMjFsSWl3aWFHRnpJaXdpWjJWMFJtRnNjMlZRWVhSb2N5SXNJblJ2UkdGemFFTmhjMlVpTENKMGIwTmhiV1ZzUTJGelpTSXNJbWRsZEZOb2IzSjBUbUZ0WlNJc0ltZGxkRkpsWVd4T1lXMWxJaXdpVGtGTlJWTWlMQ0p5WldGc0lpd2ljMmh2Y25RaUxDSnphRzl5ZEU1aGJXVWlMQ0p2Ym14NVJtRnNjMlZRWVhSb2N5SXNJbWRsZEVaaGJITmxVR0YwYUNJc0luTjBjaUlzSW5SdlZYQndaWEpEWVhObElpd2lZMjl3ZVNJc0ltUmxjM1JwYm1GMGFXOXVJaXdpYzI5MWNtTmxJaXdpYUdGelQzZHVVSEp2Y0dWeWRIa2lMQ0pqYjNCNVFYSnlZWGtpTENKeVpYQnNZV05sVG05a1pYTWlMQ0pqYkc5dVpVaFVUVXhOWVhKcmRYQWlMQ0pqYjJ4c1pXTjBTRlJOVEU1dlpHVnpJaXdpZDJGc2EwNXZaR1Z6SWl3aWNtVnRiM1psVG05a1pTSXNJbWx1YzJWeWRFSmxabTl5WlU1dlpHVWlMQ0p5WlhkeWFYUmxWRzlPYjJSbElpd2laVzF3ZEhsT2IyUmxJaXdpYjNKcFoybHVZV3dpTENKeVpYQnNZV05sYldWdWRDSXNJbkpsY0d4aFkyVkRhR2xzWkNJc0ltNWxlSFJGYkNJc0ltMWhjbXQxY0ZOMGNpSXNJbU52Ym5abGNuUlRkSEpwYm1kVWIwaFVUVXdpTENKdFlYSnJkWEJUZEhKcGJtY2lMQ0p3WVhKelpYSWlMQ0pFVDAxUVlYSnpaWElpTENKd1lYSnpaV1JFYjJOMWJXVnVkQ0lzSW5CaGNuTmxSbkp2YlZOMGNtbHVaeUlzSW1KdlpIa2lMQ0ptYVhKemRFVnNaVzFsYm5SRGFHbHNaQ0lzSW01dlpHVWlMQ0p5YjI5MElpd2lhWE5YWVc1MFpXUWlMQ0p1YjJSbGN5SXNJbkpsYlc5MlpVTm9hV3hrSWl3aWRHVjRkQ0lzSW5keWFYUmxWRzlPYjJSbElpd2lkR1Y0ZEU1dlpHVWlMQ0pvWVhORGFHbHNaRTV2WkdWeklpd2labWx5YzNSRGFHbHNaQ0lzSW1GeVpVVnhkV0ZzSWl3aVptbHljM1FpTENKelpXTnZibVFpTENKamFHbHNaRTV2WkdVaUxDSmphR1ZqYTB0bGVYTkZjWFZoYkdsMGVTSXNJbUZrWkVOdmJuTjBSbWxsYkdSeklpd2liV0Z3UzJWNWN5SXNJblJ2VDJKcVpXTjBJaXdpWm5Wc2JFMWhjQ0lzSW5Od2JHbDBVR2xsWTJVaUxDSmtaWE4wSWl3aVptbGxiR1J6SWl3aVptbGxiR1FpTENKa1pXWnBibVZRY205d1pYSjBlU0lzSW5CeWIzQWlMQ0p1WlhkUFltb2lMQ0p1WlhkTFpYa2lMQ0oyWVd3aUxDSnRiMlIxYkdVaUxDSmxlSEJ2Y25SeklsMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeERRVUZETzBGQlEwUXNUenRCUTFaQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYTBSQlFUQkRMR2REUVVGblF6dEJRVU14UlR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdkRlFVRjNSQ3hyUWtGQmEwSTdRVUZETVVVN1FVRkRRU3g1UkVGQmFVUXNZMEZCWXp0QlFVTXZSRHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhVVJCUVhsRExHbERRVUZwUXp0QlFVTXhSU3gzU0VGQlowZ3NiVUpCUVcxQ0xFVkJRVVU3UVVGRGNrazdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHRRMEZCTWtJc01FSkJRVEJDTEVWQlFVVTdRVUZEZGtRc2VVTkJRV2xETEdWQlFXVTdRVUZEYUVRN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNPRVJCUVhORUxDdEVRVUVyUkRzN1FVRkZja2c3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHM3T3pzN096czdPenM3T3pzN096czdPenM3UVVOc1JrRTdPenM3UVVGRFFUczdPenRCUVVWQk96dEJRVXRCT3p0QlFVVkJPenM3TzBGQlJVRTdPMEZCVDBFN08wRkJTMEU3TzBGQlNVRTdPMEZCU1VFN096czdRVUZEUVRzN096czdPenM3UVVGSFFTeEpRVUZOUVN4alFVRmpMRU5CUVVNc1QwRkJSQ3hGUVVGVkxFOUJRVllzUlVGQmJVSXNUMEZCYmtJc1JVRkJORUlzVDBGQk5VSXNSVUZCY1VNc1RVRkJja01zUTBGQmNFSTdRVUZEUVN4SlFVRk5ReXgxUWtGQmRVSXNRMEZCUXl4UFFVRkVMRVZCUVZVc1VVRkJWaXhGUVVGdlFpeFJRVUZ3UWl4RFFVRTNRanRCUVVOQkxFbEJRVTFETEdkQ1FVRm5RaXh6UWtGQlUwUXNiMEpCUVZRc1JVRkJLMEk3UVVGQlFTeFRRVUZOTEZsQlFVMHNRMEZCUlN4RFFVRmtPMEZCUVVFc1EwRkJMMElzUTBGQmRFSTdRVUZEUVN4SlFVRk5SU3g1UWtGQmVVSklMRmxCUVZsSkxFMUJRVm9zUTBGQmJVSXNRMEZCUXl4UlFVRkVMRVZCUVZjc1QwRkJXQ3hGUVVGdlFpeFZRVUZ3UWl4RlFVRm5RME1zY1VKQlFWTkRMRWxCUVhwRExFTkJRVzVDTEVOQlFTOUNPenRSUVVkRlF5eE5MRWRCUVVGQkxFMDdVVUZEUVVNc1owSXNSMEZCUVVFc1owSTdVVUZEUVVNc1owSXNSMEZCUVVFc1owSTdVVUZEUVVNc1Z5eEhRVUZCUVN4WE8xRkJRMEZXTEZjc1IwRkJRVUVzVnp0UlFVTkJSeXh6UWl4SFFVRkJRU3h6UWpzN08wRkJSMFlzU1VGQlNWRXNiMEpCUVc5Q0xFTkJRWGhDTzBGQlEwRXNTVUZCVFVNc1lVRkJZU3hGUVVGdVFqczdRVUZGUVN4VFFVRlRUQ3hOUVVGVUxFTkJRV2xDVFN4SlFVRnFRaXhGUVVGMVFrTXNUVUZCZGtJc1JVRkJLMEpETEZGQlFTOUNMRVZCUVhsRFF5eE5RVUY2UXl4RlFVRnBSRHRCUVVNdlF5eE5RVUZOUXl4UFFVRlBMSGRDUVVGVFNpeEpRVUZVTEVsQlFXbENRU3hKUVVGcVFpeEhRVUYzUWl4RlFVRkZRU3hWUVVGR0xFVkJRVkZETEdOQlFWSXNSVUZCWjBKRExHdENRVUZvUWl4RlFVRXdRa01zWTBGQk1VSXNSVUZCY2tNN08wRkJSVUZJTEZOQlFVOHNlVUpCUVZsSkxFdEJRVXRLTEVsQlFXcENMRU5CUVZBN08wRkJSVUVzVFVGQlNVUXNWMEZCVjBNc1NVRkJXQ3hEUVVGS0xFVkJRWE5DTzBGQlEzQkNMRlZCUVUwc1NVRkJTVXNzWjBOQlFVb3NRMEZCTWtKTUxFbEJRVE5DTEVOQlFVNDdRVUZEUkRzN1FVRkZSQ3hOUVVGTlRTeHpRa0ZCYzBJc01FSkJRV2RDUml4TFFVRkxTQ3hOUVVGeVFpeERRVUUxUWp0QlFVTkJTeXh6UWtGQmIwSkRMRk5CUVhCQ0xFTkJRVGhDUXl4SFFVRTVRaXhEUVVGclExSXNTVUZCYkVNN08wRkJSVUZHTEhOQ1FVRnZRaXhEUVVGd1FqdEJRVU5CTEUxQlFVMVhMRmxCUVZrN1FVRkRhRUpVTEdOQlJHZENPMEZCUldoQ1ZTd3JRa0ZCVld4Q0xIRkNRVUZUUXl4SlFVRnVRaXhGUVVFd1FpeEZRVUV4UWl4RFFVWm5RanRCUVVkb1FtdENMR0ZCUVZOWUxFbEJTRTg3UVVGSmFFSlpMR1ZCUVZjc1EwRkJRMW9zU1VGQlJDeERRVXBMTzBGQlMyaENZU3huUWtGQldTeEZRVXhKTzBGQlRXaENXaXhaUVVGUlN5eHRRa0ZPVVR0QlFVOW9RbEVzWTBGQlZTeEZRVkJOTzBGQlVXaENReXhYUVVGUExFVkJVbE03UVVGVGFFSnNRaXhwUWtGQllTeEpRVlJITzBGQlZXaENiVUlzWjBKQlFWa3NSVUZXU1R0QlFWZG9Ra01zV1VGQlVUdEJRVmhSTEVkQlFXeENPenRCUVdOQlF5d3lRa0ZCZVVKYUxHMUNRVUY2UWl4RlFVRTRRMGNzVTBGQk9VTTdPMEZCUlVFc1RVRkJUVlVzYjBKQlFXOUNReXh4UWtGQmNVSm9RaXhMUVVGTFJpeFJRVUV4UWl4RlFVRnZReXhGUVVGRlVTeFBRVUZQTEVWQlFWUXNSVUZCY0VNc1EwRkJNVUk3UVVGRFFTeHpRa0ZCUzBRc1UwRkJUQ3hGUVVGblFsVXNhVUpCUVdoQ096dEJRVVZCUlN4clFrRkJhVUphTEZOQlFXcENMRVZCUVRSQ1FTeFZRVUZWUlN4UFFVRjBReXhGUVVFclF5eEZRVUZGUXl4WFFVRlhMRVZCUVdJc1JVRkJhVUpITEU5QlFVOHNSVUZCZUVJc1JVRkJORUpHTEZsQlFWbEtMRlZCUVZWSkxGVkJRV3hFTEVWQlFTOURPenRCUVVWQkxHMURRVUYxUWxNc1kwRkJZMnhDTEV0QlFVdEVMRTFCUVc1Q0xFVkJRVEpDVFN4VFFVRXpRaXhEUVVGMlFqczdRVUZGUVN4VFFVRlBWaXhYUVVGWFF5eEpRVUZZTEVsQlFXMUNVeXhUUVVFeFFqdEJRVU5FT3p0QlFVVkVMRk5CUVZOVExIZENRVUZVTEVOQlFXMURXaXh0UWtGQmJrTXNSVUZCZDBSSExGTkJRWGhFTEVWQlFXMUZPMEZCUTJwRkxITkNRVUZWU0N4dFFrRkJWaXhGUVVFclFpeFZRVUZEYVVJc1VVRkJSQ3hGUVVGak8wRkJRek5ETEZGQlFVMURMR05CUVdORExHVkJRV1ZHTEZGQlFXWXNRMEZCY0VJN08wRkJSVUVzVVVGQlNTeERRVUZEUXl4WFFVRk1MRVZCUVd0Q08wRkJRMmhDTzBGQlEwUTdPMEZCUlVRc1VVRkJUVVVzVlVGQlZVTXNZMEZCWTBnc1dVRkJXWGhDTEVsQlFURkNMRVZCUVdkRFV5eFRRVUZvUXl4RlFVRXlRMk1zVVVGQk0wTXNRMEZCYUVJN08wRkJSVUVzVVVGQlNVTXNXVUZCV1ROQ0xGZEJRV2hDTEVWQlFUWkNPMEZCUXpOQ0swSXNiVUpCUVdGR0xFOUJRV0lzUlVGQmMwSkdMRmRCUVhSQ08wRkJRMEZFTEdWQlFWTm9RaXhUUVVGVUxFTkJRVzFDUXl4SFFVRnVRaXhEUVVGMVFtaENMSEZDUVVGVGNVTXNUVUZCVkN4SFFVRnJRa2dzVVVGQlVVa3NSVUZCYWtRN1FVRkRSRHM3UVVGRlJISkNMR05CUVZWRExFdEJRVllzUTBGQlowSm5RaXhSUVVGUk1VSXNTVUZCZUVJc1NVRkJaME13UWl4UFFVRm9RenRCUVVOQlFTeFpRVUZSZWtJc1RVRkJVaXhEUVVGbFRTeFRRVUZtTEVOQlFYbENReXhIUVVGNlFpeERRVUUyUW1oQ0xIRkNRVUZUY1VNc1RVRkJWQ3hIUVVGclFrZ3NVVUZCVVVrc1JVRkJka1FzUlVGQk1rUnlRaXhWUVVGVlZDeEpRVUZXTEVkQlFXbENMRWRCUVdwQ0xFZEJRWFZDTUVJc1VVRkJVVEZDTEVsQlFURkdPenRCUVVWQkxGRkJRVWwzUWl4WlFVRlpUeXhOUVVGb1FpeEZRVUYzUWp0QlFVTjBRaXhWUVVGTlF5eFhRVUZYVkN4VFFVRlRWU3hSUVVGVUxFTkJRV3RDTEVOQlFXeENMRU5CUVdwQ08wRkJRMEZETERCQ1FVRnZRbElzVDBGQmNFSXNSVUZCTmtKTkxGRkJRVGRDT3p0QlFVVkJMRlZCUVVsdVF5eFpRVUZaYlVNc1VVRkJXaXhEUVVGS0xFVkJRVEpDTzBGQlEzcENTaXh4UWtGQllVWXNVVUZCVVZNc1VVRkJja0lzUlVGQkswSjRReXhwUWtGQmFVSnhReXhSUVVGcVFpeERRVUV2UWp0QlFVTkJMR1ZCUVU4c1EwRkJReXhEUVVGU08wRkJRMFE3TzBGQlJVUmtMQ3RDUVVGNVFtTXNVVUZCZWtJc1JVRkJiVU5PTEZGQlFWRlRMRkZCUVRORE8wRkJRMEVzWVVGQlR5eERRVUZETEVOQlFWSTdRVUZEUkR0QlFVTkdMRWRCTjBKRU96dEJRU3RDUVN4VFFVRlBNVUlzVTBGQlVEdEJRVU5FT3p0QlFVVkVMRk5CUVZOdFFpeFpRVUZVTEVOQlFYVkNVU3huUWtGQmRrSXNSVUZCZVVORExHZENRVUY2UXl4RlFVRXlSRHRCUVVONlJDeE5RVUZOZUVJc1lVRkJZWGxDTEU5QlFVOURMRTFCUVZBc1EwRkJZMGdzYVVKQlFXbENka0lzVlVGQkwwSXNSVUZCTWtOM1FpeHBRa0ZCYVVJMVFpeFRRVUZxUWl4RFFVRXlRa2tzVlVGQmRFVXNRMEZCYmtJN1FVRkRRU3hOUVVGSlJpeFZRVUZWTUVJc2FVSkJRV2xDTlVJc1UwRkJha0lzUTBGQk1rSlVMRWxCUVROQ0xFZEJRV3RETEVkQlFXeERMRWRCUVhkRFJpeHRRa0ZCZEVRN08wRkJSVUVzVFVGQlNYVkRMR2xDUVVGcFFrY3NVMEZCY2tJc1JVRkJaME03UVVGRE9VSXNVVUZCU1ROQ0xGZEJRVmQzUWl4cFFrRkJhVUpITEZOQlFUVkNMRU5CUVVvc1JVRkJORU03UVVGRE1VTXNXVUZCVFN4SlFVRkpReXhwUTBGQlNpeERRVUUwUWtvc2FVSkJRV2xDUnl4VFFVRTNReXhEUVVGT08wRkJRMFE3TzBGQlJVUTNRaXhqUVVGVk1FSXNhVUpCUVdsQ1J5eFRRVUV6UWp0QlFVTkJTaXh4UWtGQmFVSjJRaXhWUVVGcVFpeERRVUUwUWtZc1QwRkJOVUlzU1VGQmRVTXNTVUZCZGtNN1FVRkRSRHM3UVVGRlJDeHpRa0ZCUzNsQ0xHZENRVUZNTEVWQlFYVkNReXhwUWtGQmFVSTFRaXhUUVVGNFF6czdRVUZGUVN4VFFVRlBOa0lzVDBGQlQwTXNUVUZCVUN4RFFVRmxTQ3huUWtGQlppeEZRVUZwUXp0QlFVTjBRMDRzVVVGQlNXNUNMRTlCUkd0RE8wRkJSWFJEUVN4dlFrRkdjME03UVVGSGRFTllMRlZCUVUxWExFOUJTR2RETzBGQlNYUkROa0lzWlVGQlYwZ3NhVUpCUVdsQ1J5eFRRVXBWTzBGQlMzUkROVUlzWlVGQlYzZENMR2xDUVVGcFFuaENMRk5CUVdwQ0xFTkJRVEpDY2tJc1RVRkJNMElzUTBGQmEwTnZRaXhQUVVGc1F5eERRVXd5UWp0QlFVMTBRMVlzV1VGQlVXOURMR2xDUVVGcFFqVkNMRk5CUVdwQ0xFTkJRVEpDVWl4TlFVRXpRaXhEUVVGclEzbERMRk5CUVd4RExFTkJRVFJETEVsQlFUVkRMRU5CVGpoQ08wRkJUM1JETjBNc2FVSkJRV0VzU1VGUWVVSTdRVUZSZEVOblFpd3dRa0ZTYzBNN1FVRlRkRU5KTEZsQlFWRnhRaXhQUVVGUFF5eE5RVUZRTEVOQlFXTXNSVUZCWkN4RlFVRnJRa1lzYVVKQlFXbENkRUlzUzBGQmJrTXNRMEZVT0VJN1FVRlZkRU5ETEdkQ1FVRlpjMElzVDBGQlQwTXNUVUZCVUN4RFFVRmpMRVZCUVdRc1JVRkJhMEpHTEdsQ1FVRnBRazBzVVVGQmJrTTdRVUZXTUVJc1IwRkJha01zUTBGQlVEdEJRVmxFT3p0QlFVVkVMRk5CUVZOMFFpeGxRVUZVTEVOQlFUQkNXaXhUUVVFeFFpeEZRVUZ4UTIxRExHTkJRWEpETEVWQlFYRkVReXhsUVVGeVJDeEZRVUZ6UlR0QlFVTndSU3hOUVVGTlF5eHRRa0ZCYlVKRExGTkJRVk5ETEdGQlFWUXNRMEZCZFVJc1MwRkJka0lzUTBGQmVrSTdRVUZEUVhaRExGbEJRVlZTTEUxQlFWWXNRMEZCYVVKblJDeFpRVUZxUWl4RFFVRTRRbnBFTEhGQ1FVRlRNRVFzVlVGQmRrTXNSVUZCYlVSMFJDeHBRa0ZCYTBKblJDeHBRa0ZCYVVKd1JDeHhRa0ZCVXpKRUxHVkJRVEZDTEVkQlFUUkRNMFFzY1VKQlFWTkRMRWxCUVhaRkxFTkJRVzVFTzBGQlEwRnhSQ3h0UWtGQmFVSk5MRmRCUVdwQ0xFTkJRVFpDTTBNc1ZVRkJWVklzVFVGQmRrTTdRVUZEUVZFc1dVRkJWVWNzVTBGQlZpeEhRVUZ6UW1sRExHZENRVUZuUW1wRExGTkJRV2hDTEVOQlFUQkNja0lzVFVGQk1VSXNRMEZCYVVOclFpeFZRVUZWUlN4UFFVRXpReXhEUVVGMFFqdEJRVU5CUml4WlFVRlZTU3hWUVVGV0xFZEJRWFZDWjBNc1owSkJRV2RDYUVNc1ZVRkJka003TzBGQlJVRXNUVUZCVFhkRExHZENRVUZuUWl4RlFVRjBRanM3UVVGRlFTeDFRa0ZCVVRWRExGVkJRVlZETEV0QlFXeENMRVZCUVhsQ0xGVkJRVU5uUWl4UFFVRkVMRVZCUVZVMFFpeFhRVUZXTEVWQlFUQkNPMEZCUTJwRUxGRkJRVTFETEdWQlFXVTNRaXhSUVVGUlNTeEZRVUUzUWp0QlFVTkJMRkZCUVUwd1FpeGxRVUZsV2l4cFFrRkJhVUp3UkN4eFFrRkJVekpFTEdWQlFURkNMRWRCUVRSRFJ5eFhRVUZxUlR0QlFVTkJMRkZCUVUxSExGVkJRVlUzUkN4cFFrRkJhVUkwUkN4WlFVRnFRaXhEUVVGb1FqczdRVUZGUVN4UlFVRkpPVUlzVVVGQlVYcENMRTFCUVZvc1JVRkJiMEk3UVVGRGJFSXNWVUZCVFhsRUxHTkJRV05hTEdsQ1FVRnBRbUVzWVVGQmFrSXNRMEZCSzBJc1RVRkJUVzVGTEhGQ1FVRlRjVU1zVFVGQlppeEhRVUYzUWpCQ0xGbEJRWFpFTEVOQlFYQkNPMEZCUTBGSExHdENRVUZaVkN4WlFVRmFMRU5CUVhsQ2VrUXNjVUpCUVZNd1JDeFZRVUZzUXl4RlFVRTRRMDhzVDBGQk9VTTdRVUZEUVVNc2EwSkJRVmx1UkN4VFFVRmFMRU5CUVhOQ2NVUXNUVUZCZEVJc1EwRkJOa0p3UlN4eFFrRkJVM0ZETEUxQlFWUXNSMEZCYTBJd1FpeFpRVUV2UXp0QlFVTkJSeXhyUWtGQldXNUVMRk5CUVZvc1EwRkJjMEpETEVkQlFYUkNMRU5CUVRCQ2FFSXNjVUpCUVZOeFF5eE5RVUZVTEVkQlFXdENNa0lzV1VGQk5VTTdRVUZEUkRzN1FVRkZSR3hDTEZkQlFVOURMRTFCUVZBc1EwRkJZMklzVDBGQlpDeEZRVUYxUWp0QlFVTnlRbVFzYVVKQlFWZElMRlZCUVZWSExGTkJRVllzUTBGQmIwSnBSQ3hMUVVGd1FpeEZRVVJWTzBGQlJYSkNReXhoUVVGUGVFSXNUMEZCVDBNc1RVRkJVQ3hEUVVGakxFVkJRV1FzUlVGQmEwSnNSQ3hoUVVGc1FpeEZRVUZwUTNGRExGRkJRVkZ2UXl4TFFVRjZReXhEUVVaak8wRkJSM0pDYUVNc1ZVRkJTVEJDTEZsQlNHbENPMEZCU1hKQ1F6dEJRVXB4UWl4TFFVRjJRanM3UVVGUFFVMHNlVUpCUVhGQ2NrTXNUMEZCY2tJc1JVRkJPRUpxUWl4VFFVRTVRanM3UVVGRlFTeFJRVUZKYVVJc1VVRkJVVXNzVFVGQldpeEZRVUZ2UWp0QlFVTnNRa3dzWTBGQlVXUXNVMEZCVWl4RFFVRnJRbTlFTEVsQlFXeENMRU5CUVhWQ1ZpeFhRVUYyUWp0QlFVTkJOVUlzWTBGQlVXSXNWVUZCVWl4SFFVRnhRa29zVlVGQlZVa3NWVUZCTDBJN08wRkJSVUZSTEhOQ1FVRnBRa3NzVVVGQlVWTXNVVUZCZWtJc1JVRkJiVU54UWl4bFFVRmxhRVVzY1VKQlFWTXlSQ3hsUVVGNFFpeEhRVUV3UXpORUxIRkNRVUZUZVVVc1NVRkJia1FzUjBGQk1FUjJReXhSUVVGUlV5eFJRVUZTTEVOQlFXbENia01zU1VGQk9VY3NSVUZCYjBnd1FpeFBRVUZ3U0R0QlFVTkJPMEZCUTBRN08wRkJSVVFzVVVGQlNVRXNVVUZCVVRkQ0xGZEJRVm9zUlVGQmVVSTdRVUZEZGtKM1JDeHZRa0ZCWTFjc1NVRkJaQ3hEUVVGdFFuUkRMRTlCUVc1Q08wRkJRMFE3UVVGRFJpeEhRV2hEUkRzN1FVRnJRMEYzUXl4MVFrRkJjVUo2UkN4VFFVRnlRaXhGUVVGblEyOURMR1ZCUVdoRE8wRkJRMEZ3UXl4WlFVRlZNRVFzVVVGQlZpeEhRVUZ4UWpGRUxGVkJRVlZTTEUxQlFWWXNRMEZCYVVKNVF5eFRRVUZxUWl4RFFVRXlRaXhKUVVFelFpeERRVUZ5UWpzN1FVRkZRVmNzWjBKQlFXTmxMRTlCUVdRc1EwRkJjMElzVlVGQlEwTXNXVUZCUkN4RlFVRnJRanRCUVVOMFEyaEVMRzlDUVVGcFFtZEVMRmxCUVdwQ0xFVkJRU3RDZWtJc2FVSkJRV2xDY0VRc2NVSkJRVk15UkN4bFFVRXhRaXhIUVVFMFEydENMR0ZCUVdFeFJDeFBRVUY0Uml4RlFVRnBSMFlzVTBGQmFrYzdRVUZEUkN4SFFVWkVPMEZCUjBRN08wRkJSVVFzVTBGQlUzTkVMRzlDUVVGVUxFTkJRU3RDY2tNc1QwRkJMMElzUlVGQmQwTTBReXhoUVVGNFF5eEZRVUYxUkR0QlFVTnlSRzVHTEdOQlFWbHBSaXhQUVVGYUxFTkJRVzlDTEZWQlFVTkhMRWxCUVVRc1JVRkJWVHRCUVVNMVFpeFJRVUZOUXl4bFFVRmxPVU1zVVVGQlVUWkRMRWxCUVZJc1EwRkJja0k3UVVGRFFTeFJRVUZKTEVOQlFVTkRMRmxCUVV3c1JVRkJiVUk3UVVGRGFrSTdRVUZEUkRzN1FVRkZSRGxETEZsQlFWRmFMRkZCUVZJc1EwRkJhVUo1UkN4SlFVRnFRaXhKUVVGNVFrVXNiMEpCUVc5Q0wwTXNUMEZCY0VJc1JVRkJOa0kyUXl4SlFVRTNRaXhGUVVGdFEwTXNXVUZCYmtNc1JVRkJhVVJHTEdGQlFXcEVMRU5CUVhwQ08wRkJRMFFzUjBGUVJEdEJRVkZFT3p0QlFVVkVMRk5CUVZOSExHMUNRVUZVTEVOQlFUaENMME1zVDBGQk9VSXNSVUZCZFVNMlF5eEpRVUYyUXl4RlFVRTJRME1zV1VGQk4wTXNSVUZCTWtSR0xHRkJRVE5FTEVWQlFUQkZPMEZCUTNoRkxFMUJRVTFKTEc5Q1FVRnZRa01zY1VKQlFYRkNTQ3haUVVGeVFpeERRVUV4UWpzN1FVRkZRVVVzYjBKQlFXdENUaXhQUVVGc1FpeERRVUV3UWl4VlFVRkRVU3hqUVVGRUxFVkJRVzlDTzBGQlF6VkRMRkZCUVVrc2RVSkJRVkZPTEdOQlFXTTFSQ3hMUVVGa0xFTkJRVzlDYTBVc1kwRkJjRUlzUTBGQlVpeERRVUZLTEVWQlFXdEVPMEZCUTJoRVRpeHZRa0ZCWXpWRUxFdEJRV1FzUTBGQmIwSnJSU3hqUVVGd1FpeEpRVUZ6UTJwRUxHTkJRV05wUkN4alFVRmtMRVZCUVRoQ1RpeGhRVUU1UWl4RFFVRjBRenRCUVVORU96dEJRVVZFUVN4clFrRkJZelZFTEV0QlFXUXNRMEZCYjBKclJTeGpRVUZ3UWl4RlFVRnZRME1zVlVGQmNFTXNRMEZCWjBSdVJDeFJRVUZSTVVJc1NVRkJVaXhIUVVGbExFZEJRV1lzUjBGQmNVSjFSU3hKUVVGeVJTeEpRVUU0UlN4RlFVRkZka1VzVFVGQlRUQkNMRkZCUVZFeFFpeEpRVUZvUWl4RlFVRnpRblZGTEZWQlFYUkNMRVZCUVRsRk8wRkJRMFFzUjBGT1JEczdRVUZSUVN4VFFVRlBMRlZCUVVOUExFMUJRVVFzUlVGQlUwTXNhMEpCUVZRN1FVRkJRU3hYUVVGblEwTXNVVUZCVTFJc1dVRkJWQ3hGUVVGMVFrMHNUVUZCZGtJc1JVRkJLMEpETEd0Q1FVRXZRaXhEUVVGb1F6dEJRVUZCTEVkQlFWQTdRVUZEUkRzN1FVRkZSQ3hUUVVGVFNpeHZRa0ZCVkN4RFFVRTRRazBzU1VGQk9VSXNSVUZCYjBNN1FVRkRiRU1zVFVGQlRVTXNZVUZCWVVNc1kwRkJZMFlzU1VGQlpDeERRVUZ1UWp0QlFVTkJMRTFCUVUxSExHdENRVUZ0UWl4SlFVRkpReXhOUVVGS0xFTkJRVmNzVDBGQlQwZ3NWMEZCVnl4RFFVRllMRU5CUVZBc1IwRkJkVUlzYjBKQlFXeERMRVZCUVhkRUxFZEJRWGhFTEVOQlFYcENPMEZCUTBFc1RVRkJUVklzYjBKQlFXOUNMRVZCUVRGQ08wRkJRMEVzVFVGQlRWa3NWVUZCVlV3c1MwRkJTMDBzVVVGQlRDeEZRVUZvUWp0QlFVTkJMRTFCUVVsWUxIVkNRVUZLTzBGQlEwRXNVMEZCVVVFc2FVSkJRV2xDVVN4blFrRkJaMEpKTEVsQlFXaENMRU5CUVhGQ1JpeFBRVUZ5UWl4RFFVRjZRaXhGUVVGNVJEdEJRVU4yUkZvc2MwSkJRV3RDVml4SlFVRnNRaXhEUVVGMVFsa3NaVUZCWlN4RFFVRm1MRU5CUVhaQ08wRkJRMFE3UVVGRFJDeFRRVUZQUml4cFFrRkJVRHRCUVVORU96dEJRVVZFTEZOQlFWTlRMR0ZCUVZRc1EwRkJkVUpHTEVsQlFYWkNMRVZCUVRaQ08wRkJRek5DTEUxQlFVMVJMSGxDUVVGNVFsSXNTMEZCUzAwc1VVRkJUQ3hIUVVGblFrY3NUMEZCYUVJc1EwRkJkMEpETEdsQ1FVRkhReXhqUVVFelFpeEZRVUV5UXl4RlFVRXpReXhEUVVFdlFqdEJRVU5CTEUxQlFVMURMRmxCUVZsS0xIVkNRVUYxUWpWQ0xFdEJRWFpDTEVOQlEyaENORUlzZFVKQlFYVkNTeXhQUVVGMlFpeERRVUVyUWl4SFFVRXZRaXhKUVVGeFF5eERRVVJ5UWl4RlFVVm9Ra3dzZFVKQlFYVkNTeXhQUVVGMlFpeERRVUVyUWl4SFFVRXZRaXhEUVVablFpeERRVUZzUWp0QlFVbEJMRk5CUVU5RUxGVkJRVlZGTEV0QlFWWXNRMEZCWjBKS0xHbENRVUZIU3l4alFVRnVRaXhMUVVGelF5eEZRVUUzUXp0QlFVTkVPenRCUVVWRUxGTkJRVk5vUWl4UFFVRlVMRU5CUVd0Q1F5eEpRVUZzUWl4RlFVRjNRbWRDTEZOQlFYaENMRVZCUVcxRGJFSXNhMEpCUVc1RExFVkJRWFZFTzBGQlEzSkVMRk5CUVU5RkxFdEJRVXRwUWl4SlFVRk1MRU5CUVZVc1NVRkJWaXhGUVVGblFpd3dRa0ZCWTBRc1UwRkJaQ3hEUVVGb1FpeEZRVUV3UTJ4Q0xHdENRVUV4UXl4RFFVRlFPMEZCUTBRN08wRkJSVVFzVTBGQlUySXNiMEpCUVZRc1EwRkJLMEo2UkN4VFFVRXZRaXhGUVVFd1EyOURMR1ZCUVRGRExFVkJRVEpFTzBGQlEzcEVVQ3hUUVVGUFF5eE5RVUZRTEVOQlEwVk5MR2RDUVVGblFqbENMRXRCUkd4Q0xFVkJSVVVzYVVKQlFVbE9MRlZCUVZWUExGVkJRV1FzUlVGQk1FSXNWVUZCUTIxR0xFTkJRVVE3UVVGQlFTeFhRVUZSTEVWQlFVVkRMRTFCUVUxRUxFTkJRVklzUlVGQlZ6RkdMRmRCUVZkQkxGVkJRVlZGTEU5QlFXaERMRVZCUVZJN1FVRkJRU3hIUVVFeFFpeERRVVpHTzBGQlNVUTdPMEZCUlVRc1UwRkJVMU1zYjBKQlFWUXNRMEZCSzBKcFJpeFZRVUV2UWl4RlFVRXlRME1zVTBGQk0wTXNSVUZCYzBSRExGTkJRWFJFTEVWQlFXbEZPMEZCUXk5RUxFMUJRVWtzTUVKQlFWbEdMRlZCUVZvc1EwRkJTaXhGUVVFMlFqdEJRVU16UWl4WFFVRlBMR2xDUVVGSlF5eFRRVUZLTEVWQlFXVXNRMEZCUTBNc1UwRkJSQ3hEUVVGbUxFVkJRVFJDTEVWQlFVVkRMRTlCUVU5SUxGVkJRVlFzUlVGQk5VSXNRMEZCVUR0QlFVTkVPenRCUVVWRUxFMUJRVWtzZFVKQlFWRkJMRlZCUVZJc1EwRkJTaXhGUVVGNVFqczdRVUZGZGtJc1VVRkJTVUVzVjBGQlYwa3NUVUZCV0N4SFFVRnZRaXhEUVVGNFFpeEZRVUV5UWp0QlFVTjZRa29zYVVKQlFWZHFReXhQUVVGWUxFTkJRVzFDTEZWQlFVTnpReXhOUVVGRU8wRkJRVUVzWlVGQldYUkdMSEZDUVVGelFuTkdMRTFCUVhSQ0xFVkJRVGhDU2l4VFFVRTVRaXhGUVVGNVEwTXNVMEZCZWtNc1EwRkJXanRCUVVGQkxFOUJRVzVDTzBGQlEwRTdRVUZEUkRzN1FVRkZSQ3hSUVVGSkxEQkNRVUZYUml4WFFVRlhMRU5CUVZnc1EwRkJXQ3hEUVVGS0xFVkJRU3RDTzBGQlF6ZENMR0ZCUVU4c2FVSkJRVWxETEZOQlFVb3NSVUZCWlN4RFFVRkRReXhUUVVGRUxFTkJRV1lzUlVGQk5FSXNSVUZCUlVrc1QwRkJUMDRzVjBGQlZ5eERRVUZZTEVOQlFWUXNSVUZCTlVJc1EwRkJVRHRCUVVORU8wRkJRMFFzVVVGQlNTeDNRa0ZCVTBFc1YwRkJWeXhEUVVGWUxFTkJRVlFzUTBGQlNpeEZRVUUyUWp0QlFVTXpRaXhoUVVGUExHbENRVUZKUXl4VFFVRktMRVZCUVdVc1EwRkJRME1zVTBGQlJDeERRVUZtTEVWQlFUUkNMRVZCUVVWTExGRkJRVkZRTEZkQlFWY3NRMEZCV0N4RFFVRldMRVZCUVRWQ0xFTkJRVkE3UVVGRFJEdEJRVU5HT3p0QlFVVkVMSFZDUVVGUlFTeFZRVUZTTEVWQlFXOUNMRlZCUVVOTkxFdEJRVVFzUlVGQlVVVXNSMEZCVWl4RlFVRm5RanRCUVVOc1F5eFhRVUZQVWl4WFFVRlhVU3hIUVVGWUxFTkJRVkE3UVVGRFFTeFJRVUZOYmtZc1ZVRkJWVU1zWTBGQlkydEdMRWRCUVdRc1EwRkJhRUk3TzBGQlJVRXNVVUZCU1N4M1FrRkJVMFlzUzBGQlZDeERRVUZLTEVWQlFYRkNPMEZCUTI1Q1RDeG5Ra0ZCVlN4UFFVRldMRVZCUVcxQ1R5eEhRVUZ1UWl4SlFVRXdRblpGTEU5QlFVOURMRTFCUVZBc1EwRkJZMklzVDBGQlpDeEZRVUYxUW1sR0xFdEJRWFpDTEVOQlFURkNPMEZCUTBFN1FVRkRSRHM3UVVGRlJFd3NZMEZCVlN4UFFVRldMRVZCUVcxQ1R5eEhRVUZ1UWl4SlFVRXdRbTVHTEU5QlFURkNPMEZCUTBGT0xIbENRVUZ4UW5WR0xFdEJRWEpDTEVWQlFUUkNUQ3hWUVVGVkxFOUJRVllzUTBGQk5VSXNSVUZCWjBSUExFZEJRV2hFTzBGQlEwUXNSMEZZUkRzN1FVRmhRU3hUUVVGUFVDeFRRVUZRTzBGQlEwUTdPMEZCUlVRc1UwRkJVemRGTEdOQlFWUXNRMEZCZVVKeFJpeEZRVUY2UWl4RlFVRTJRanRCUVVNelFpeE5RVUZKYWtnc1dVRkJXV2xJTEVWQlFWb3NRMEZCU2l4RlFVRnhRanRCUVVOdVFpeFhRVUZQYmtnc2FVSkJRV2xDYlVnc1JVRkJha0lzUTBGQlVEdEJRVU5FT3p0QlFVVkVMRTFCUVVrc1EwRkJRMEVzUjBGQlIwTXNXVUZCVWl4RlFVRnpRanRCUVVOd1FpeFhRVUZQTEVsQlFWQTdRVUZEUkRzN1FVRkZSQ3hOUVVGSkwwY3NUMEZCVHpoSExFZEJRVWRETEZsQlFVZ3NRMEZCWjBKMlNDeHhRa0ZCVTNkSUxHZENRVUY2UWl4RFFVRllPMEZCUTBGR0xFdEJRVWRITEdWQlFVZ3NRMEZCYlVKNlNDeHhRa0ZCVTNkSUxHZENRVUUxUWpzN1FVRkZRU3hOUVVGSmFFZ3NTVUZCU2l4RlFVRlZPMEZCUTFJc1YwRkJUeXhGUVVGRlFTeE5RVUZOUVN4TFFVRkxhMGdzU1VGQlRDeEZRVUZTTEVWQlFWQTdRVUZEUkRzN1FVRkZSR3hJTEZOQlFVODRSeXhIUVVGSFF5eFpRVUZJTEVOQlFXZENka2dzY1VKQlFWTXlTQ3h4UWtGQmVrSXNRMEZCVUR0QlFVTkJUQ3hMUVVGSFJ5eGxRVUZJTEVOQlFXMUNla2dzY1VKQlFWTXlTQ3h4UWtGQk5VSTdPMEZCUlVFc1RVRkJTVzVJTEVsQlFVb3NSVUZCVlR0QlFVTlNMRmRCUVU4c1JVRkJSVUVzVFVGQlRVRXNTMEZCUzJ0SUxFbEJRVXdzUlVGQlVpeEZRVUZ4UW01R0xGRkJRVkVzU1VGQk4wSXNSVUZCVUR0QlFVTkVPMEZCUTBZN08wRkJSVVFzVTBGQlUyeERMRmRCUVZRc1EwRkJjMEpwU0N4RlFVRjBRaXhGUVVFd1FqdEJRVU40UWl4TlFVRk5UU3hWUVVGVlRpeEhRVUZIVFN4UFFVRklMRWxCUVdOT0xFZEJRVWROTEU5QlFVZ3NRMEZCVjBNc1YwRkJXQ3hGUVVFNVFqdEJRVU5CTEZOQlFVOUVMRmRCUVZkeVNDeFhRVUZaTEhsQ1FVRlpjVWdzVDBGQldpeERRVUZhTEVOQlFXeENPMEZCUTBRN08wRkJSVVFzVTBGQlUzcElMR2RDUVVGVUxFTkJRVEpDTWtnc1IwRkJNMElzUlVGQlowTTdRVUZET1VJc1RVRkJUWFJJTEU5QlFVOHNlVUpCUVdGelNDeEpRVUZKUml4UFFVRktMRU5CUVZsRExGZEJRVm9zUlVGQllpeERRVUZpTzBGQlEwRXNUVUZCVFRWSExGbEJRVms0Unl4dFFrRkJiVUoyU0N4SlFVRnVRaXhEUVVGc1FqdEJRVU5CTEUxQlFVMWxMRkZCUVZFc1JVRkJaRHRCUVVOQkxFMUJRVTAwUWl4WFFVRlhMRVZCUVdwQ08wRkJRMEVzVFVGQlNVZ3NXVUZCV1N4SlFVRm9RanM3UVVGRlFXZEdMRkZCUVUxRExGTkJRVTRzUTBGQlowSTFSQ3hMUVVGb1FpeERRVUZ6UW5GRExFbEJRWFJDTEVOQlFUSkNiMElzU1VGQlNVa3NWVUZCTDBJc1JVRkRSM1JFTEU5QlJFZ3NRMEZEVnl4VlFVRkRkVVFzU1VGQlJDeEZRVUZWT3p0QlFVVnFRaXhSUVVGSlFTeExRVUZMTTBnc1NVRkJUQ3hMUVVGalVpeHhRa0ZCVTI5SkxGVkJRVE5DTEVWQlFYVkRPMEZCUTNKRGNFWXNhMEpCUVZsdFJpeExRVUZMYUVJc1MwRkJha0k3UVVGRFFUdEJRVU5FT3p0QlFVVkVMRkZCUVUxclFpeFpRVUZaTEhsQ1FVRlpSaXhMUVVGTE0wZ3NTVUZCYWtJc1EwRkJiRUk3UVVGRFFXVXNWVUZCVFRoSExGTkJRVTRzU1VGQmJVSkdMRXRCUVV0b1FpeExRVUY0UWp0QlFVTkJhRVVzWVVGQlUyZEdMRXRCUVV0b1FpeExRVUZrTEVsQlFYVkNhMElzVTBGQmRrSTdRVUZEUkN4SFFWaElPenRCUVdGQkxGTkJRVTg3UVVGRFRIQklMSGRDUVVSTE8wRkJSVXhOTEZkQlFVOUJMRXRCUmtZN1FVRkhURFJDTEdOQlFWVkJMRkZCU0V3N1FVRkpURWdzZDBKQlNrczdRVUZMVEhoRExHTkJURXM3UVVGTlRFZ3NhVUpCUVdFN1FVRk9VaXhIUVVGUU8wRkJVVVE3TzBGQlJVUXNVMEZCVXpCSUxHdENRVUZVTEVOQlFUWkNka2dzU1VGQk4wSXNSVUZCYlVNN1FVRkRha01zVTBGQlQwUXNWMEZCV1N4NVFrRkJXVU1zU1VGQldpeERRVUZhTEVOQlFWQTdRVUZEUkRzN1FVRkZSQ3hUUVVGVE1rSXNZVUZCVkN4RFFVRjNRak5DTEVsQlFYaENMRVZCUVRoQ1V5eFRRVUU1UWl4RlFVRjVRM0ZITEVWQlFYcERMRVZCUVRaRE8wRkJRek5ETEUxQlFVMW5RaXhuUWtGQmFVSnlTQ3hUUVVGRUxFZEJRV003UVVGRGJFTnhRaXhSUVVGSmNrSXNWVUZCVlVVc1QwRkJWaXhIUVVGdlFtNUNMSEZDUVVGVE1rUXNaVUZCTjBJc1IwRkJLME51UkN4SlFVUnFRanRCUVVWc1Exa3NaVUZCVjBnc1ZVRkJWVWNzVTBGR1lUdEJRVWRzUTBNc1owSkJRVmxLTEZWQlFWVkpMRlZCU0ZrN1FVRkpiRU5yU0N4blFrRkJXWFJJTEZWQlFWVnpRaXhOUVVwWk8wRkJTMnhEY0VJc1lVRkJVMWc3UVVGTWVVSXNSMEZCWkN4SFFVMXNRaXhGUVU1S096dEJRVkZCTEUxQlFVMW5TU3hUUVVGVmJFSXNSVUZCUkN4SFFVRlBPMEZCUTNCQ2JVSXNaVUZCVjI1Q0xFZEJRVWRJTEV0QlFVZ3NTVUZCV1Vjc1IwRkJSMjlDTzBGQlJFNHNSMEZCVUN4SFFVVllMRVZCUmtvN08wRkJTVUVzVTBGQlR6VkdMRTlCUVU5RExFMUJRVkFzUTBGQll6dEJRVU51UW5aRExHTkJSRzFDTzBGQlJXNUNiVWtzWlVGQlZ5eEZRVVpSTzBGQlIyNUNiRWtzV1VGQlVUWkhMRVZCU0ZjN1FVRkpia0pxUXl4blFrRkJXU3hGUVVwUE8wRkJTMjVDSzBJc1dVRkJVU3hGUVV4WE8wRkJUVzVDT1VZc1kwRkJWU3hGUVU1VE8wRkJUMjVDUXl4WFFVRlBMRVZCVUZrN1FVRlJia0pNTEN0Q1FVRlZiRUlzY1VKQlFWTkRMRWxCUVc1Q0xFVkJRVEJDTEVWQlFURkNMRU5CVW0xQ08wRkJVMjVDZFVJc1owSkJRVmtzUlVGVVR6dEJRVlZ1UWtNc1dVRkJVVHM3UVVGV1Z5eEhRVUZrTEVWQldVbzJSeXhoUVZwSkxFVkJXVmRGTEUxQldsZ3NRMEZCVUR0QlFXRkVPenRCUVVWRUxGTkJRVk01Uml4dFFrRkJWQ3hEUVVFNFFsSXNUMEZCT1VJc1JVRkJkVU13Unl4VlFVRjJReXhGUVVGdFJEdEJRVU5xUkRGSExGVkJRVkZMTEUxQlFWSXNSMEZCYVVJc1NVRkJha0k3TzBGQlJVRXNVMEZCVDA4c1QwRkJUME1zVFVGQlVDeERRVUZqWWl4UFFVRmtMRVZCUVhWQ08wRkJRelZDZWtJc1dVRkJVVzFKTEZWQlJHOUNPMEZCUlRWQ2FrY3NZMEZCVlZJc1kwRkJZM2xITEZkQlFWZG9RaXhQUVVGNlFpeEZRVUZyUXpGR0xFOUJRV3hETEVWQlFUSkRNRWNzVlVGQk0wTTdRVUZHYTBJc1IwRkJka0lzUTBGQlVEdEJRVWxFT3p0QlFVVkVMRk5CUVZONFNTeG5Ra0ZCVkN4RFFVRXlRbXRETEVWQlFUTkNMRVZCUVN0Q08wRkJRemRDTEZOQlFVOUJMRWRCUTBwMVJ5eExRVVJKTEVOQlEwVTNTU3h4UWtGQlV6SkVMR1ZCUkZnc1JVRkZTbTFHTEVkQlJra3NRMEZGUVN4VlFVRkRlRUlzUlVGQlJEdEJRVUZCTEZkQlFWRXNNRUpCUVdGQkxFVkJRV0lzUTBGQlVqdEJRVUZCTEVkQlJrRXNSVUZIU25sQ0xFbEJTRWtzUTBGSFF5OUpMSEZDUVVGVE1rUXNaVUZJVml4RFFVRlFPMEZCU1VRN08wRkJSVVFzVTBGQlV6ZENMR0ZCUVZRc1EwRkJkMEpyU0N4UlFVRjRRaXhGUVVGclF5OUlMRk5CUVd4RExFVkJRVFpETzBGQlF6TkRMRk5CUVU4c2NVSkJRVkVyU0N4UlFVRlNMRVZCUVd0Q0xGVkJRVU16UWl4SFFVRkVPMEZCUVVFc1YwRkJVMEVzU1VGREwwSjNRaXhMUVVRclFpeERRVU42UWl4SFFVUjVRaXhGUVVVdlFrTXNSMEZHSzBJc1EwRkZNMElzVlVGQlEwY3NVVUZCUkR0QlFVRkJMR0ZCUVdOQkxGTkJRVk4yUWl4SlFVRlVMRVZCUVdRN1FVRkJRU3hMUVVZeVFpeEZRVWN2UW05Q0xFZEJTQ3RDTEVOQlJ6TkNMRlZCUVVOSExGRkJRVVFzUlVGQll6czdRVUZGYWtJc1ZVRkJTVU1zV1VGQllTeE5RVUZOYWtrc1ZVRkJWVlFzU1VGQmFrTTdPMEZCUlVFc1ZVRkJTWGxKTEZGQlFVb3NSVUZCWXp0QlFVTmFMRmxCUVUxRkxGbEJRVmxzU1N4VlFVRlZReXhMUVVGV0xFTkJRV2xDSzBnc1UwRkJVMG9zUzBGQlZDeERRVUZsTEVkQlFXWXNSVUZCYjBJc1EwRkJjRUlzUlVGQmRVSkJMRXRCUVhaQ0xFTkJRVFpDTEVsQlFUZENMRVZCUVcxRExFTkJRVzVETEVWQlFYTkRRU3hMUVVGMFF5eERRVUUwUXl4SFFVRTFReXhGUVVGcFJDeERRVUZxUkN4RFFVRnFRaXhEUVVGc1FqdEJRVU5CTEZsQlFVMVBMRk5CUVZORUxGbEJRVmxFTEZsQlFWa3NSMEZCZUVJc1IwRkJPRUlzUlVGQk4wTTdRVUZEUVVFc2NVSkJRV0VzVFVGQlRVVXNUVUZCVGl4SFFVRmxTQ3hSUVVFMVFqdEJRVU5FT3p0QlFVVkVMR0ZCUVU5RExGTkJRVkE3UVVGRFJDeExRV1FyUWl4RlFXVXZRa2dzU1VGbUswSXNRMEZsTVVJc1IwRm1NRUlzUTBGQlZEdEJRVUZCTEVkQlFXeENMRU5CUVZBN1FVRnBRa1FzUXpzN096czdPenM3T3pzN096czdPenM3T3p0QlEzcGhSRHM3T3p0QlFVVkJPenRCUVVOQk96dEJRVVZCT3p0QlFVbEJPenM3TzFGQlRVVk5MR3RDTEVkQlFVRkJMR3RDT3pzN1FVRkhSaXhUUVVGVFFTeHJRa0ZCVkN4RFFVRTJRa01zVDBGQk4wSXNSVUZCYzBNN1FVRkRjRU1zVFVGQlRVTXNaMEpCUVdkQ0xFVkJRWFJDTzBGQlEwRkRMSGxDUVVGMVFrWXNUMEZCZGtJc1JVRkJaME5ETEdGQlFXaERPenRCUVVWQkxFMUJRVTA1U1N4VFFVRlROa2tzVVVGQlVXaERMRVZCUVhaQ096dEJRVXB2UXl3MlFrRkxNMEp0UXl4VFFVd3lRanRCUVUxc1EyaEtMRmRCUVU5cFNpeG5Ra0ZCVUN4RFFVRjNRa1FzVTBGQmVFSXNSVUZCYlVNc1ZVRkJRMFVzUTBGQlJEdEJRVUZCTEdGQlFVOURMREJDUVVFd1FrUXNRMEZCTVVJc1JVRkJOa0pLTEdOQlFXTkZMRk5CUVdRc1EwRkJOMElzUlVGQmRVUklMRTlCUVhaRUxFTkJRVkE3UVVGQlFTeExRVUZ1UXp0QlFVNXJRenM3UVVGTGNFTXNUMEZCU3l4SlFVRkpSeXhUUVVGVUxFbEJRWE5DUml4aFFVRjBRaXhGUVVGeFF6dEJRVUZCTEZWQlFUVkNSU3hUUVVFMFFqdEJRVVZ3UXp0QlFVTkdPenRCUVVWRUxGTkJRVk5FTEhOQ1FVRlVMRU5CUVdsRGRra3NVMEZCYWtNc1JVRkJORU0wU1N4blFrRkJOVU1zUlVGQk9FUTdRVUZETlVSRExITkNRVUZ4UWpkSkxGTkJRWEpDTEVWQlFXZERORWtzWjBKQlFXaERPenRCUVVWQkxFMUJRVWsxU1N4VlFVRlZReXhMUVVGa0xFVkJRWEZDTzBGQlEyNUNMSGxDUVVGUlJDeFZRVUZWUXl4TFFVRnNRaXhGUVVGNVFpeFZRVUZEWjBJc1QwRkJSRHRCUVVGQkxHRkJRV0Z6U0N4MVFrRkJkVUowU0N4UFFVRjJRaXhGUVVGblF6SklMR2RDUVVGb1F5eERRVUZpTzBGQlFVRXNTMEZCZWtJN1FVRkRSRHM3UVVGRlJDeE5RVUZKTlVrc1ZVRkJWVEJDTEZGQlFXUXNSVUZCZDBJN1FVRkRkRUkyUnl3eVFrRkJkVUoyU1N4VlFVRlZNRUlzVVVGQmFrTXNSVUZCTWtOclNDeG5Ra0ZCTTBNN1FVRkRSRHRCUVVOR096dEJRVVZFTEZOQlFWTkRMRzFDUVVGVUxFTkJRVGhDTlVnc1QwRkJPVUlzUlVGQmRVTXlTQ3huUWtGQmRrTXNSVUZCZVVRN1FVRkRka1FzVFVGQlNTeERRVUZETTBnc1VVRkJVV3RHTEUxQlFXSXNSVUZCY1VJN1FVRkRia0k3UVVGRFJEczdRVUZGUkN4UFFVRkxMRWxCUVVseFF5eFRRVUZVTEVsQlFYTkNka2dzVVVGQlVXdEdMRTFCUVRsQ0xFVkJRWE5ETzBGQlEzQkRMRkZCUVVrc1EwRkJRM2xETEdsQ1FVRnBRa29zVTBGQmFrSXNRMEZCVEN4RlFVRnJRenRCUVVOb1Ewa3NkVUpCUVdsQ1NpeFRRVUZxUWl4SlFVRTRRaXhGUVVFNVFqdEJRVU5FT3p0QlFVVkVTU3h4UWtGQmFVSktMRk5CUVdwQ0xFVkJRVFJDZGtnc1VVRkJVU3RDTEU5QlFYQkRMRWxCUVN0REwwSXNVVUZCVVd0R0xFMUJRVklzUTBGQlpYRkRMRk5CUVdZc1EwRkJMME03UVVGRFJEdEJRVU5HT3p0QlFVVkVMRk5CUVZOSExIbENRVUZVTEVOQlFXOURSQ3hEUVVGd1F5eEZRVUYxUTBvc1lVRkJka01zUlVGQmMwUkVMRTlCUVhSRUxFVkJRU3RFTzBGQlF6ZEVVeXhuUWtGQlkwb3NRMEZCWkR0QlFVTkJPenRCUVVWQkxFMUJRVWxMTEdOQlFXTk1MRVZCUVVWTkxFMUJRWEJDTzBGQlEwRXNVMEZCVDBRc1owSkJRV2RDVml4UlFVRlJhRU1zUlVGQlVpeERRVUZYTkVNc1ZVRkJiRU1zUlVGQk9FTTdRVUZETlVNc1VVRkJUVU1zV1VGQldVZ3NXVUZCV1hwRExGbEJRVm9zUTBGQmVVSjJTQ3h4UWtGQlV6QkVMRlZCUVd4RExFTkJRV3hDTzBGQlEwRXNVVUZCVFRCSExHVkJRV1ZpTEdOQlFXTlpMRk5CUVdRc1EwRkJja0k3TzBGQlJVRXNVVUZCU1VNc1dVRkJTaXhGUVVGclFqdEJRVU5vUWl4VlFVRk5ReXh4UWtGQmNVSkdMRlZCUVZWMFFpeExRVUZXTEVOQlFXZENOMGtzY1VKQlFWTXlSQ3hsUVVGNlFpeERRVUV6UWp0QlFVTkJNRWNzZVVKQlFXMUNReXhIUVVGdVFqdEJRVU5CTEZWQlFVMURMR3RDUVVGclFrTXNiVUpCUVcxQ1VpeFhRVUZ1UWl4RlFVRm5RMHNzYTBKQlFXaERMRU5CUVhoQ08wRkJRMEVzVlVGQlRVa3NhVUpCUVdsQ0xESkNRVUZsTEVOQlFVTnVRaXhSUVVGUmFFZ3NSVUZCVkN4RlFVRmhka01zVFVGQllpeERRVUZ2UW5kTExHVkJRWEJDTEVOQlFXWXNRMEZCZGtJN08wRkJSVUZJTEcxQ1FVRmhNVVFzU1VGQllpeERRVUZyUWl4SlFVRnNRaXhGUVVGM1FtbEVMRU5CUVhoQ0xFVkJRVEpDU3l4WFFVRXpRaXhGUVVGM1ExTXNZMEZCZUVNc1JVRkJkMFFzUTBGQlEwWXNaMEpCUVdkQ2JFY3NTMEZCYUVJc1EwRkJjMElzUTBGQlF5eERRVUYyUWl4RlFVRXdRaXhEUVVFeFFpeERRVUY2UkRzN1FVRkZRU3hWUVVGSmMwWXNSVUZCUldVc2EwSkJRVTRzUlVGQk1FSTdRVUZEZUVJN1FVRkRSRHRCUVVOR08wRkJRMFJXTEd0Q1FVRmpRU3haUVVGWlJTeFZRVUV4UWp0QlFVTkVPenRCUVVWRU8wRkJRMFE3TzBGQlJVUXNVMEZCVTBnc1lVRkJWQ3hEUVVGM1Frb3NRMEZCZUVJc1JVRkJNa0k3UVVGRGVrSXNUVUZCVFdkQ0xHdENRVUZyUW1oQ0xFVkJRVVZuUWl4bFFVRkdMRU5CUVd0Q1F5eEpRVUZzUWl4RFFVRjFRbXBDTEVOQlFYWkNMRU5CUVhoQ08wRkJRMEZCTEVsQlFVVm5RaXhsUVVGR0xFZEJRVzlDTEZsQlFVMDdRVUZEZUVKb1FpeE5RVUZGWlN4clFrRkJSaXhIUVVGMVFpeEpRVUYyUWp0QlFVTkJRenRCUVVORUxFZEJTRVE3UVVGSlJEczdRVUZGUkN4VFFVRlRTQ3hyUWtGQlZDeERRVUUyUW14RUxFVkJRVGRDTEVWQlFXbERLME1zYTBKQlFXcERMRVZCUVhGRU8wRkJRMjVFTEUxQlFVMXFTaXhaUVVGWkxFVkJRV3hDT3p0QlFVVkJMRTFCUVVsNVNpeHZRa0ZCU2p0QlFVTkJMRk5CUVZGQkxHTkJRV01zZVVKQlFXRlNMRzFDUVVGdFFrTXNSMEZCYmtJc1JVRkJZaXhEUVVGMFFpeEZRVUZuUlRzN1FVRkZPVVFzVVVGQlNTeHBRa0ZCU1U4c1YwRkJTaXhGUVVGcFFqZExMSEZDUVVGVGVVVXNTVUZCTVVJc1EwRkJTaXhGUVVGeFF6dEJRVU51UTI5SExHOUNRVUZqUVN4WlFVRlplRWNzUzBGQldpeERRVUZyUW5KRkxIRkNRVUZUZVVVc1NVRkJWQ3hEUVVGamQwTXNUVUZCYUVNc1EwRkJaRHRCUVVOQlN5eFhRVUZMZDBRc1kwRkJZM2hFTEVWQlFXUXNRMEZCVER0QlFVTkJMRlZCUVUxNVJDeE5RVUZOZWtRc1IwRkJSME1zV1VGQlNDeERRVUZuUW5aSUxIRkNRVUZUWjB3c1ZVRkJla0lzUTBGQldqdEJRVU5CTVVRc1YwRkJTMEVzUjBGQlJ6UkRMRlZCUVZJN1FVRkRRVGxKTEdkQ1FVRlZOa29zVDBGQlZpeERRVUZyUWtZc1IwRkJiRUlzUlVGQmRVSkdMRmRCUVhaQ08wRkJRMEU3UVVGRFJEczdRVUZGUkhwS0xHTkJRVlUyU2l4UFFVRldMRU5CUVd0Q1NpeFhRVUZzUWp0QlFVTkVPenRCUVVWRUxGTkJRVTk2U2l4VFFVRlFPMEZCUTBRN08wRkJSVVFzVTBGQlV6QktMR0ZCUVZRc1EwRkJkMEo0UkN4RlFVRjRRaXhGUVVFMFFqdEJRVU14UWl4TlFVRkpORVFzVVVGQlVUVkVMRVZCUVZvN08wRkJSVUVzVTBGQlR6UkVMRTFCUVUxMFJDeFBRVUZPTEV0QlFXdENMRTFCUVhwQ0xFVkJRV2xETzBGQlF5OUNMRkZCUVVselJDeE5RVUZOTTBRc1dVRkJUaXhEUVVGdFFuWklMSEZDUVVGVFowd3NWVUZCTlVJc1EwRkJTaXhGUVVFMlF6dEJRVU16UXl4aFFVRlBSU3hMUVVGUU8wRkJRMFE3UVVGRFJFRXNXVUZCVVVFc1RVRkJUV2hDTEZWQlFXUTdRVUZEUkR0QlFVTkdMRU03T3pzN096czdPenM3T3pzN096czdPenM3UVVOMlNFUTdPMEZCUzBFN08wRkJTMEU3TzBGQlJVRTdPMUZCUlZOcFFpeExMRWRCUVVGQkxFczdPenRCUVVkVUxGTkJRVk5CTEV0QlFWUXNRMEZCWjBKRExHMUNRVUZvUWl4RlFVRnhRenRCUVVOdVF5eE5RVUZOUXl4alFVRmpPVWdzVTBGQlUxa3NZVUZCVkN4RFFVRjFRbWxJTEcxQ1FVRjJRaXhEUVVGd1FqdEJRVU5CTEUxQlFVMUZMRmxCUVZrc01rSkJRV2xDUkN4WFFVRnFRaXhGUVVFNFFtaE1MSFZDUVVFNVFpeERRVUZzUWpzN1FVRkZRV2xNTEZsQlFWVXhSeXhQUVVGV0xFTkJRV3RDTEZWQlFVTTNReXhSUVVGRUxFVkJRV003UVVGRE9VSXNVVUZCVFhWSExHZENRVUZuUWl4clEwRkJhVUoyUnl4UlFVRnFRaXhEUVVGMFFqdEJRVU5CTEZGQlFVMTFTQ3hWUVVGVmFVTXNZVUZCWVdwRUxHRkJRV0lzUTBGQmFFSTdPMEZCUlVFc01rSkJRV0YyUnl4UlFVRmlMRVZCUVhWQ2RVZ3NVVUZCVVdoRExFVkJRUzlDTzBGQlEwUXNSMEZNUkR0QlFVMUVPenRCUVVWRUxGTkJRVk5wUlN4WlFVRlVMRU5CUVhWQ2FrUXNZVUZCZGtJc1JVRkJjME03UVVGRGNFTXNUVUZCVFdkQ0xGVkJRVlVzTUVKQlFXTm9RaXhoUVVGa0xFTkJRV2hDTzBGQlEwRXNkME5CUVcxQ1owSXNUMEZCYmtJN1FVRkRRU3hUUVVGUFFTeFBRVUZRTzBGQlEwUXNRenM3T3pzN096czdPenM3T3pzN096czdPenRCUTJwRFJEczdPenRCUVVWQk96dEJRVVZCT3p0QlFVVkJPenRCUVVWQk96dEJRVk5CT3pzN096czdVVUZSUlRsR0xHRXNSMEZCUVVFc1lUdFJRVU5CWjBrc1l5eEhRVUZCUVN4ak8xRkJRMEZETEdFc1IwRkJRVUVzWVR0UlFVTkJReXhaTEVkQlFVRkJMRms3VVVGRFFVTXNVU3hIUVVGQlFTeFJPMUZCUTBGRExHMUNMRWRCUVVGQkxHMUNPenM3UVVGSFJpeEpRVUZOUXl4WFFVRlhMRVZCUVdwQ08wRkJRMEVzU1VGQlRVTXNVVUZCVVN4RlFVRmtPMEZCUTBFc1NVRkJTVU1zYTBKQlFXdENMRU5CUVhSQ096dEJRVVZCTEZOQlFWTktMRkZCUVZRc1EwRkJiVUpMTEVsQlFXNUNMRVZCUVhsQ04wVXNTMEZCZWtJc1JVRkJaME03UVVGRE9VSXNiVUpCUVVreVJTeExRVUZLTEVWQlFWZEZMRWxCUVZnc1JVRkJhVUkzUlN4TFFVRnFRanRCUVVORU96dEJRVVZFTEZOQlFWTTRSU3hSUVVGVUxFTkJRVzFDUkN4SlFVRnVRaXhGUVVGNVFqdEJRVU4yUWl4VFFVRlBMR2xDUVVGSlJpeExRVUZLTEVWQlFWZEZMRWxCUVZnc1EwRkJVRHRCUVVORU96dEJRVVZFTEZOQlFWTjRTU3hoUVVGVUxFTkJRWGRDT0VVc1lVRkJlRUlzUlVGQmRVTTdRVUZEY2tNc1RVRkJUV2hITEV0QlFVdDVTaXhwUWtGQldEdEJRVU5CTEUxQlFVMTJUQ3hQUVVGUE9FZ3NZMEZCWXpsSUxFbEJRVE5DT3p0QlFVVkJMRTFCUVUwNFNTeFZRVUZWZFVNc1UwRkJVM1pLTEVWQlFWUXNTVUZCWlR0QlFVTTNRa0VzVlVGRU5rSTdRVUZGTjBKd1Fpd3JRa0ZCVlZZc1NVRkJWaXhGUVVGcFFqaElMR05CUVdOeVNDeFRRVUV2UWp0QlFVWTJRaXhIUVVFdlFqczdRVUZMUVRaTExGRkJRVTE0U2l4RlFVRk9MRWxCUVZrc1JVRkJXanM3UVVGRlFTeHhRMEZCYVVJc1EwRkJRMEVzUlVGQlJDeEZRVUZMT1VJc1NVRkJUQ3hEUVVGcVFqczdRVUZGUVN4elEwRkJhMElzUTBGQlF6aENMRVZCUVVRc1EwRkJiRUlzYzBKQlFUSkNPVUlzU1VGQk0wSXNSVUZCYTBNc1MwRkJiRU03UVVGRFFUdEJRVU5CT0Vrc1ZVRkJVV2hETEVWQlFWSXNSMEZCWVhkRkxFMUJRVTE0U2l4RlFVRk9MRVZCUVZVNVFpeEpRVUZXTEVWQlFXZENVaXh4UWtGQlUwTXNTVUZCZWtJc1JVRkJLMEp4U0N4RlFVRTFRenRCUVVOQlowTXNWVUZCVVdoRExFVkJRVklzUTBGQlZ6ZEVMRmxCUVZnc1EwRkJkMEo2UkN4eFFrRkJVMnROTEdOQlFXcERMRVZCUVdsRWJFMHNjVUpCUVZOdFRTeEpRVUV4UkRzN1FVRkZRU3hUUVVGUE4wTXNUMEZCVUR0QlFVTkVPenRCUVVWRUxGTkJRVk5yUXl4alFVRlVMRU5CUVhsQ1VTeEpRVUY2UWl4RlFVRXJRanRCUVVNM1FpeE5RVUZOTVVjc1UwRkJVekpITEZOQlFWTkVMRWxCUVZRc1EwRkJaanRCUVVOQkxFMUJRVTB2U3l4WlFVRlplVXNzWVVGQllVMHNTVUZCWWl4RFFVRnNRanM3UVVGRlFTeE5RVUZOU1N4WFFVRlhPMEZCUTJadVRDeDNRa0ZFWlR0QlFVVm1jVVVzYTBKQlJtVTdRVUZIWmpCSExHTkJTR1U3UVVGSlprc3NiVVJCU21VN1FVRkxaa01zTWtOQlRHVTdRVUZOWmtNc1VVRkJTU3haUVVGRFF5eExRVUZFTzBGQlFVRXNZVUZCVjBNc1owSkJRV2RDUkN4TFFVRm9RaXhGUVVGMVFsSXNTMEZCU3pOSUxFdEJRVXdzUlVGQmRrSXNRMEZCV0R0QlFVRkJMRXRCVGxjN1FVRlBabkZKTEZWQlFVMHNZMEZCUTBNc1kwRkJSRHRCUVVGQkxHRkJRVzlDYmtJc1pVRkJaVkVzUzBGQlMycE5MRTFCUVV3c1EwRkJXVFJOTEdOQlFWb3NRMEZCWml4RFFVRndRanRCUVVGQkxFdEJVRk03UVVGUlprTXNVMEZCU3l4aFFVRkRReXhUUVVGRU8wRkJRVUVzWVVGQlpTdzBRa0ZCVjJwQ0xHOUNRVUZ2UW1sQ0xGTkJRWEJDTEVOQlFWZ3NSVUZCTWtOaUxFbEJRVE5ETEVOQlFXWTdRVUZCUVN4TFFWSlZPMEZCVTJaakxGTkJRVXNzWVVGQlEzcEdMRWRCUVVRN1FVRkJRU3hoUVVGVE1FWXNWVUZCVlZnc1VVRkJWaXhGUVVGdlFpOUZMRWRCUVhCQ0xFVkJRWGxDTWtVc1NVRkJla0lzUTBGQlZEdEJRVUZCTEV0QlZGVTdRVUZWWm5aTUxGbEJRVkVzWjBKQlFVTTBSeXhIUVVGRU8wRkJRVUVzWVVGQlUwRXNUVUZCVFN0RkxGTkJRVk01Unl4TlFVRlVMRU5CUVdkQ0swSXNSMEZCYUVJc1JVRkJjVUpETEVWQlFUTkNMRWRCUVdkRE9FVXNVMEZCVXpsSExFMUJRVlFzUTBGQlowSjBSaXh4UWtGQlUwTXNTVUZCZWtJc1JVRkJLMEp4U0N4RlFVRjRSVHRCUVVGQk8wRkJWazhzUjBGQmFrSTdPMEZCWVVFc1RVRkJTU3gxUWtGQlVXaERMRTFCUVZJc1EwRkJTaXhGUVVGeFFqdEJRVU51UWpCSUxEQkNRVUZ6UWxvc1VVRkJkRUk3UVVGRFJEczdRVUZGUkN4VFFVRlBRU3hSUVVGUU8wRkJRMFE3TzBGQlJVUXNVMEZCVTFJc2JVSkJRVlFzUTBGQk9FSnBRaXhUUVVFNVFpeEZRVUY1UXp0QlFVTjJReXhUUVVGUExHbENRVUZKUVN4VFFVRktMRVZCUVdVc1ZVRkJRMGtzUTBGQlJDeEZRVUZQTzBGQlF6TkNMRkZCUVUxRExGTkJRVk1zZDBKQlFWTkVMRU5CUVZRc1MwRkJaVzVMTEU5QlFVOXhTeXhKUVVGUUxFTkJRVmxHTEVOQlFWb3NSVUZCWlN4RFFVRm1MRTFCUVhOQ0xFOUJRWEJFT3p0QlFVVkJMRmRCUVU4N1FVRkRURGxHTEdGQlFVOHJSaXhUUVVGVFJDeEZRVUZGTEU5QlFVWXNRMEZCVkN4SFFVRnpRa0VzUTBGRWVFSTdRVUZGVEd4SkxGbEJRVTBzVDBGR1JEdEJRVWRNY1Vrc1lVRkJUMFk3UVVGSVJpeExRVUZRTzBGQlMwUXNSMEZTVFN4RFFVRlFPMEZCVTBRN08wRkJSVVFzVTBGQlUzaENMRmxCUVZRc1EwRkJkVUpOTEVsQlFYWkNMRVZCUVRaQ08wRkJRek5DTEUxQlFVa3ZTeXhaUVVGWk5Fc3NVMEZCVlVjc1MwRkJTeXhEUVVGTUxFTkJRVllzUTBGQmFFSTdPMEZCUlVFc1QwRkJTeXhKUVVGSmNVSXNTVUZCU1N4RFFVRmlMRVZCUVdkQ1FTeEpRVUZKY2tJc1MwRkJTeTlGTEUxQlFYcENMRVZCUVdsRGIwY3NSMEZCYWtNc1JVRkJjME03UVVGRGNFTndUU3huUWtGQldVRXNWVUZCVlVNc1MwRkJWaXhEUVVGcFFqaExMRXRCUVV0eFFpeERRVUZNTEVOQlFXcENMRU5CUVZvN08wRkJSVUVzVVVGQlNYQk5MRlZCUVZWelFpeE5RVUZXTEVsQlFXOUNPRXNzVFVGQlQzSkNMRXRCUVVzdlJTeE5RVUZNTEVkQlFXRXNRMEZCTlVNc1JVRkJaMFE3UVVGRE9VTm9SeXhyUWtGQldVRXNWVUZCVlRCQ0xGRkJRWFJDTzBGQlEwRXdTeXhYUVVGSExFTkJRVWc3UVVGRFJEdEJRVU5HT3p0QlFVVkVMRk5CUVU5d1RTeFRRVUZRTzBGQlEwUTdPMEZCUlVRc1UwRkJVM2RMTEdGQlFWUXNRMEZCZDBJelJDeEhRVUY0UWl4RlFVRTJRanRCUVVNelFpeFRRVUZQTEdsQ1FVRkpRU3hIUVVGS0xFVkJRVk1zVlVGQlEzZEdMR0ZCUVVRN1FVRkJRU3hYUVVGdFFrRXNZMEZCWXl4UFFVRmtMRU5CUVc1Q08wRkJRVUVzUjBGQlZDeERRVUZRTzBGQlEwUTdPMEZCUlVRc1UwRkJVMUFzVTBGQlZDeERRVUZ2UWxnc1VVRkJjRUlzUlVGQk9FSXZSU3hIUVVFNVFpeEZRVUZ0UTJwSExGTkJRVzVETEVWQlFUaERPMEZCUXpWRExFMUJRVTFyUlN4VFFVRlRPRWNzVTBGQlV6bEhMRTFCUVhoQ08wRkJRMEVzVFVGQlRYSkZMRmxCUVZsdFRDeFRRVUZUYmt3c1UwRkJNMEk3TzBGQlJVRXNUVUZCU1N4RFFVRkRiMGNzUjBGQlRDeEZRVUZWTzBGQlExSXNWMEZCVDJ0SExHTkJRV05xU1N4TlFVRmtMRVZCUVhOQ2NrVXNVMEZCZEVJc1JVRkJhVU1zUlVGQmFrTXNRMEZCVUR0QlFVTkVPenRCUVVWRUxFMUJRVTFwUWl4VlFVRlZha0lzVlVGQlZVTXNTMEZCVml4RFFVRm5RbTFITEVkQlFXaENMRU5CUVdoQ08wRkJRMEVzVFVGQlNXNUdMRkZCUVZGTExFMUJRVklzU1VGQmEwSk1MRkZCUVZFM1FpeFhRVUU1UWl4RlFVRXlRenRCUVVONlF5eFhRVUZQYlV3c1pVRkJaWEJMTEZWQlFWVnlRaXhOUVVGV0xFTkJRV2xDYzBnc1IwRkJha0lzUTBGQlppeERRVUZRTzBGQlEwUTdPMEZCUlVRc1UwRkJUeTlDTEU5QlFVOHJRaXhIUVVGUUxFVkJRVmxHTEV0QlFXNUNPMEZCUTBRN08wRkJSVVFzVTBGQlUyOUhMR0ZCUVZRc1EwRkJkMEpxU1N4TlFVRjRRaXhGUVVGblEzSkZMRk5CUVdoRExFVkJRVEpEZFUwc1ZVRkJNME1zUlVGQmRVUTdRVUZEY2tRc2RVSkJRVkZzU1N4TlFVRlNMRVZCUVdkQ0xGVkJRVU50U1N4SlFVRkVMRVZCUVU4elNpeFhRVUZRTEVWQlFYVkNPMEZCUTNKRExGRkJRVWtzYVVKQlFVbG9SU3hyUTBGQlNpeEZRVUUwUW1kRkxGZEJRVFZDTEVOQlFVb3NSVUZCT0VNN1FVRkROVU03UVVGRFJEczdRVUZGUkN4UlFVRk5OVUlzVlVGQlZXcENMRlZCUVZWRExFdEJRVllzUTBGQlowSTBReXhYUVVGb1FpeERRVUZvUWpzN1FVRkZRU3hSUVVGSk5VSXNVVUZCVVVzc1RVRkJXaXhGUVVGdlFqdEJRVU5zUW1sTUxHbENRVUZYTVVvc1YwRkJXQ3hKUVVFd1FpeEZRVUV4UWp0QlFVTkJkMElzWVVGQlQzaENMRmRCUVZBc1JVRkJiMEpqTEU5QlFYQkNMRU5CUVRSQ0xGVkJRVU13UXl4RlFVRkVMRVZCUVVzclJpeERRVUZNTEVWQlFWYzdRVUZEY2tNc1dVRkJUVXNzWVVGQllVWXNWMEZCVnpGS0xGZEJRVmdzUlVGQmQwSjFTaXhEUVVGNFFpeEpRVUUyUWl4RlFVRm9SRHRCUVVOQlJTeHpRa0ZCWTJwSkxFOUJRVTk0UWl4WFFVRlFMRVZCUVc5Q2RVb3NRMEZCY0VJc1JVRkJkVUp1VEN4UlFVRlJVeXhSUVVGU0xFTkJRV2xDYmtNc1NVRkJlRU1zUTBGQlpDeEZRVUUyUkRCQ0xGRkJRVkZUTEZGQlFYSkZMRVZCUVN0Rkswc3NWVUZCTDBVN1FVRkRSQ3hQUVVoRU8wRkJTVUU3UVVGRFJEczdRVUZGUkN4UlFVRkplRXdzVVVGQlVUZENMRmRCUVZvc1JVRkJlVUk3UVVGRGRrSXNWVUZCVFhOT0xHdENRVUZyUWtnc1YwRkJWekZLTEZkQlFWZ3NTVUZCTUVJc1JVRkJiRVE3UVVGRFFYbEtMRzlDUVVGamFra3NUMEZCVDNoQ0xGZEJRVkFzUTBGQlpDeEZRVUZ0UXpWQ0xFOUJRVzVETEVWQlFUUkRlVXdzWlVGQk5VTTdRVUZEUkRzN1FVRkZSRWdzWlVGQldYWk5MRlZCUVZWUkxFMUJRVllzUTBGQmFVSnhReXhYUVVGcVFpeExRVUZwUTBFc1YwRkJOME1zU1VGQk5rUXlTaXhMUVVGTGRFY3NTMEZCYkVVN1FVRkRSQ3hIUVhSQ1JEczdRVUYzUWtFc1UwRkJUM0ZITEZWQlFWQTdRVUZEUkRzN1FVRkZSQ3hUUVVGVFppeGxRVUZVTEVOQlFUQkNSQ3hMUVVFeFFpeEZRVUZwUTNCTUxGTkJRV3BETEVWQlFUUkRPMEZCUXpGRExFMUJRVWwzVFN4VlFVRlZlRTBzVlVGQlZUWkdMRTFCUVhoQ096dEJRVVZCTEUxQlFVbDFSaXhWUVVGVkxFVkJRV1FzUlVGQmEwSTdRVUZEYUVJc1YwRkJUMmhDTEdWQlFXVndTeXhWUVVGVmFVUXNTMEZCVml4RFFVRm5RaXhEUVVGb1FpeEZRVUZ0UWl4RFFVRnVRaXhEUVVGbUxFTkJRVkE3UVVGRFJEczdRVUZGUkN4TlFVRkpMSGRDUVVGVGJVa3NTMEZCVkN4RFFVRktMRVZCUVhGQ08wRkJRMjVDTEZkQlFVOXZRaXhUUVVGUUxFVkJRV3RDTzBGQlEyaENMRlZCUVVsNFRTeFZRVUZWZDAwc1QwRkJWaXhOUVVGMVFuQkNMRXRCUVROQ0xFVkJRV3RETzBGQlEyaERPMEZCUTBRN1FVRkRSanM3UVVGRlJDeFhRVUZQYUVJc1pVRkJaWEJMTEZWQlFWVnBSQ3hMUVVGV0xFTkJRV2RDTEVOQlFXaENMRVZCUVcxQ2RVb3NWVUZCVlN4RFFVRTNRaXhEUVVGbUxFTkJRVkE3UVVGRFJEczdRVUZGUkhCQ0xGVkJRVkZCTEZOQlFWTXNRMEZCYWtJN1FVRkRRU3hUUVVGUGIwSXNZVUZCWVhCQ0xFOUJRWEJDTEVWQlFUWkNPMEZCUXpOQ0xGRkJRVWtzZDBKQlFWTXNRMEZCUTNCTUxGVkJRVlYzVFN4VlFVRlZMRU5CUVhCQ0xFTkJRVllzUTBGQlNpeEZRVUYxUXp0QlFVTnlRMEU3UVVGRFJEdEJRVU5HT3p0QlFVVkVMRk5CUVU5d1F5eGxRVUZsY0Vzc1ZVRkJWV2xFTEV0QlFWWXNRMEZCWjBJc1EwRkJhRUlzUlVGQmJVSjFTaXhWUVVGVkxFTkJRVGRDTEVOQlFXWXNRMEZCVUR0QlFVTkVPenRCUVVWRUxGTkJRVk5hTEhGQ1FVRlVMRU5CUVdkRFdpeFJRVUZvUXl4RlFVRXdRenRCUVVONFEzUktMRk5CUVU5RExFMUJRVkFzUTBGQlkzRktMRkZCUVdRc1JVRkJkMEk3UVVGRGRFSlZMRk5CUVVzc1lVRkJRMlVzUjBGQlJEdEJRVUZCTEdGQlFWTnlReXhsUVVGbFdTeFRRVUZUU2l4SlFVRlVMRU5CUVdOcVRTeE5RVUZrTEVOQlFYRkNPRTRzUjBGQmNrSXNSVUZCTUVKNlFpeFRRVUZUYmt3c1UwRkJWQ3hEUVVGdFFqQkNMRkZCUVc1Q0xFTkJRVFJDYmtNc1NVRkJkRVFzUTBGQlppeERRVUZVTzBGQlFVRXNTMEZFYVVJN08wRkJSM1JDWjBVc1ZVRkJUU3hqUVVGRGMwb3NSMEZCUkR0QlFVRkJMR0ZCUVZNc05rSkJRVmNzUzBGQldDeEZRVUZyUWl4RlFVRkZReXhQUVVGUE0wSXNVMEZCVXpsSExFMUJRVlFzUTBGQlowSXlRaXhOUVVGNlFpeEZRVUZwUXpaSExGRkJRV3BETEVWQlFXeENMRVZCUVRCRU1VSXNVVUZCTVVRc1EwRkJWRHRCUVVGQkxFdEJTR2RDTzBGQlNYUkNia0lzWVVGQlV5eHBRa0ZCUXpaRExFZEJRVVE3UVVGQlFTeGhRVUZUTERaQ1FVRlhMRXRCUVZnc1JVRkJhMElzUlVGQlJVTXNUMEZCVHl4RFFVRlVMRVZCUVZsRUxGRkJRVm9zUlVGQmJFSXNSVUZCY1VNeFFpeFJRVUZ5UXl4RFFVRlVPMEZCUVVFc1MwRktZVHRCUVV0MFFuQk1MRk5CUVVzc1lVRkJReXROTEV0QlFVUXNSVUZCVVVRc1IwRkJVanRCUVVGQkxHRkJRV2RDTERaQ1FVRlhMRXRCUVZnc1JVRkJhMElzUlVGQlJVTXNXVUZCUml4RlFVRlRSQ3hSUVVGVUxFVkJRV3hDTEVWQlFXdERNVUlzVVVGQmJFTXNRMEZCYUVJN1FVRkJRU3hMUVV4cFFqczdRVUZQZEVJNVFpeFRRVUZMTEdGQlFVTjFSQ3hIUVVGRU8wRkJRVUVzWVVGQlV5dzJRa0ZCVnl4UlFVRllMRVZCUVhGQ0xFVkJRVVZGTEU5QlFVOHpRaXhUUVVGVE9VY3NUVUZCVkN4RFFVRm5RakpDTEUxQlFXaENMRWxCUVRCQ05FY3NUMEZCVHl4RFFVRnFReXhEUVVGVUxFVkJRVGhEUVN4UlFVRTVReXhGUVVGeVFpeEZRVUV3UlhwQ0xGRkJRVEZGTEVOQlFWUTdRVUZCUVN4TFFWQnBRanRCUVZGMFFqUkNMRmRCUVU4c1pVRkJRMGdzUjBGQlJEdEJRVUZCTEdGQlFWTXNOa0pCUVZjc1VVRkJXQ3hGUVVGeFFpeEZRVUZGUlN4UFFVRlBMRU5CUVZRc1JVRkJXVVlzVVVGQldpeEZRVUZ5UWl4RlFVRjNRM3BDTEZGQlFYaERMRU5CUVZRN1FVRkJRU3hMUVZKbE8wRkJVM1JDYUVrc1dVRkJVU3huUWtGQlF6SktMRXRCUVVRc1JVRkJVVVlzUjBGQlVqdEJRVUZCTEdGQlFXZENMRFpDUVVGWExGRkJRVmdzUlVGQmNVSXNSVUZCUlVVc1dVRkJSaXhGUVVGVFJpeFJRVUZVTEVWQlFYSkNMRVZCUVhGRGVrSXNVVUZCY2tNc1EwRkJhRUk3UVVGQlFTeExRVlJqT3p0QlFWZDBRbTVHTEZsQlFWRTdRVUZCUVN4aFFVRk5iVVlzVTBGQlV6bEhMRTFCUVZRc1EwRkJaMEl5UWl4TlFVRjBRanRCUVVGQkxFdEJXR003UVVGWmRFSkZMRmRCUVU4N1FVRkJRU3hoUVVGTk9FY3NVVUZCVVRkQ0xGRkJRVklzUTBGQlRqdEJRVUZCTEV0QldtVTdRVUZoZEVKNFNDeGhRVUZUTEdsQ1FVRkRjMG9zUlVGQlJEdEJRVUZCTEdGQlFWRkRMR3RDUVVGclFpOUNMRkZCUVd4Q0xFVkJRVFJDT0VJc1JVRkJOVUlzUTBGQlVqdEJRVUZCTEV0QlltRTdRVUZqZEVKRkxGbEJRVkVzWjBKQlFVTkdMRVZCUVVRN1FVRkJRU3hoUVVGUlJ5eFhRVUZYYWtNc1VVRkJXQ3hGUVVGeFFqaENMRVZCUVhKQ0xFTkJRVkk3UVVGQlFTeExRV1JqTzBGQlpYUkNjRVlzVTBGQlN5eGhRVUZEYjBZc1JVRkJSRHRCUVVGQkxHRkJRVkZFTEZGQlFWRTNRaXhSUVVGU0xFVkJRV3RDT0VJc1JVRkJiRUlzUTBGQlVqdEJRVUZCTzBGQlptbENMRWRCUVhoQ08wRkJhVUpFT3p0QlFVVkVMRk5CUVZORExHbENRVUZVTEVOQlFUUkNMMElzVVVGQk5VSXNSVUZCYzBNNFFpeEZRVUYwUXl4RlFVRXdRenRCUVVONFF6bENMRmRCUVZNNVJ5eE5RVUZVTEVOQlFXZENWaXhQUVVGb1FpeERRVUYzUWl4VlFVRkRNRU1zUlVGQlJDeEZRVUZMSzBZc1EwRkJURHRCUVVGQkxGZEJRM1JDWVN4SFFVTkZXQ3hqUVVGamFrY3NSMEZCUnpoRkxGTkJRVk51VEN4VFFVRlVMRU5CUVcxQ01FSXNVVUZCYmtJc1EwRkJORUp1UXl4SlFVRXZRaXhEUVVGa0xFVkJRVzlFTkV3c1UwRkJVMjVNTEZOQlFWUXNRMEZCYlVJd1FpeFJRVUYyUlN4RlFVRnBSaXhGUVVGcVJpeERRVVJHTEVWQlJVVXdTeXhEUVVaR0xFTkJSSE5DTzBGQlFVRXNSMEZCZUVJN1FVRkxSRHM3UVVGRlJDeFRRVUZUWjBJc1ZVRkJWQ3hEUVVGeFFtcERMRkZCUVhKQ0xFVkJRU3RDT0VJc1JVRkJMMElzUlVGQmJVTTdRVUZEYWtNc1RVRkJUVWtzVlVGQlZTeEZRVUZvUWpzN1FVRkZRVWdzYjBKQlFXdENMMElzVVVGQmJFSXNSVUZCTkVJc1ZVRkJRemxGTEVWQlFVUXNSVUZCU3l0R0xFTkJRVXdzUlVGQlZ6dEJRVU55UXl4UlFVRkpZU3hIUVVGSE5VY3NSVUZCU0N4RlFVRlBLMFlzUTBGQlVDeERRVUZLTEVWQlFXVTdRVUZEWW1sQ0xHTkJRVkU1U2l4SlFVRlNMRU5CUVdFNFF5eEZRVUZpTzBGQlEwUTdRVUZEUml4SFFVcEVPenRCUVUxQkxGTkJRVTluU0N4UFFVRlFPMEZCUTBRN08wRkJSVVFzVTBGQlUwd3NUMEZCVkN4RFFVRnJRamRDTEZGQlFXeENMRVZCUVRSQ09FSXNSVUZCTlVJc1JVRkJaME03UVVGRE9VSXNUVUZCVFVrc1ZVRkJWU3hGUVVGb1FqdEJRVU5CU0N4dlFrRkJhMEl2UWl4UlFVRnNRaXhGUVVFMFFpeFZRVUZET1VVc1JVRkJSQ3hGUVVGTEswWXNRMEZCVER0QlFVRkJMRmRCUVZkcFFpeFJRVUZST1Vvc1NVRkJVaXhEUVVGak1Fb3NTMEZCUzBFc1IwRkJSelZITEVWQlFVZ3NSVUZCVHl0R0xFTkJRVkFzUTBGQlRDeEhRVUZwUWk5R0xFVkJRUzlDTEVOQlFWZzdRVUZCUVN4SFFVRTFRanRCUVVOQkxGTkJRVTluU0N4UFFVRlFPMEZCUTBRc1F6czdPenM3T3pzN096czdPenM3T3pzN096dEJRelZQUkRzN096dEJRVVZCT3p0QlFVVkJPenRCUVUxQk96czdPMEZCUTBFN08wRkJSVUU3TzBGQlVVRTdPMEZCUlVFN08wRkJSVUU3T3pzN096czdPMUZCUjBWRExGTXNSMEZCUVVFc1V6dFJRVU5CUXl4blFpeEhRVUZCUVN4blFqdFJRVU5CUXl4VkxFZEJRVUZCTEZVN1VVRkRRWEJETEdkQ0xFZEJRVUZCTEdkQ08xRkJRMEZETEZrc1IwRkJRVUVzV1R0UlFVTkJiME1zYVVJc1IwRkJRVUVzYVVJN096dEJRVWRHTEVsQlFVMURMRlZCUVZVc1JVRkJSVU1zVTBGQlV5eEZRVUZZTEVWQlFXVkRMRmxCUVZrc1MwRkJNMElzUlVGQmFFSTdRVUZEUVN4SlFVRk5ReXh2UWtGQmIwSXNSVUZCTVVJN1FVRkRRU3hKUVVGTlF5eHpRa0ZCYzBJc1JVRkJSVU1zVFVGQlRTeEZRVUZTTEVWQlFUVkNPenRCUVVWQkxGTkJRVk16UXl4blFrRkJWQ3hIUVVFMlFqdEJRVU16UWtNN1FVRkRRWEZETEZWQlFWRkZMRlZCUVZJc1IwRkJjVUlzU1VGQmNrSTdRVUZEUkRzN1FVRkZSQ3hUUVVGVGRrTXNXVUZCVkN4SFFVRjVRanRCUVVOMlFpeE5RVUZOYzBNc1ZVRkJWVVFzVVVGQlVVTXNUMEZCZUVJN1FVRkRRVVFzVlVGQlVVTXNUMEZCVWl4SFFVRnJRaXhGUVVGc1FqdEJRVU5CTERKQ1FVRmpRU3hQUVVGa08wRkJRMEVzVTBGQlQwc3NiVUpCUVZBN1FVRkRSRHM3UVVGRlJDeFRRVUZUUVN4cFFrRkJWQ3hIUVVFNFFqdEJRVU0xUWl4TlFVRk5ReXh2UWtGQmIwSklMRzlDUVVGdlFrTXNTVUZCT1VNN1FVRkRRVVFzYzBKQlFXOUNReXhKUVVGd1FpeEhRVUV5UWl4RlFVRXpRanRCUVVOQlJTeHZRa0ZCYTBKMFN5eFBRVUZzUWl4RFFVRXdRaXhWUVVGRGRVc3NRMEZCUkR0QlFVRkJMRmRCUVU5QkxFZEJRVkE3UVVGQlFTeEhRVUV4UWpzN1FVRkZRU3hOUVVGSkxFTkJRVU1zZFVKQlFWRlNMRkZCUVZGRExFOUJRV2hDTEVOQlFVd3NSVUZCSzBJN1FVRkROMElzVjBGQlQzUkRMR05CUVZBN1FVRkRSRHM3UVVGRlJDeFRRVUZQT0VNc2NVSkJRVkE3UVVGRFJEczdRVUZGUkN4VFFVRlRRU3h0UWtGQlZDeEhRVUZuUXp0QlFVTTVRbFFzVlVGQlVVVXNWVUZCVWl4SFFVRnhRaXhMUVVGeVFqdEJRVU5CTEUxQlFVbFJMSFZDUVVGS096dEJRVVZCTEZOQlFWRkJMR2xDUVVGcFFsQXNhMEpCUVd0Q2VFVXNSMEZCYkVJc1JVRkJla0lzUlVGQmJVUTdRVUZEYWtRclJTeHRRa0ZCWlN4SlFVRm1PMEZCUTBRN08wRkJSVVFzVTBGQlQwTXNVVUZCVVVNc1QwRkJVaXhEUVVGblFpeEpRVUZvUWl4RFFVRlFPMEZCUTBRN08wRkJSVVFzVTBGQlUySXNhVUpCUVZRc1EwRkJORUl4UXl4SlFVRTFRaXhGUVVGclEzZEVMRTFCUVd4RExFVkJRVEJETzBGQlEzaERMRzFDUVVGSllpeFJRVUZSUXl4UFFVRmFMRVZCUVhGQ05VTXNTVUZCY2tJc1JVRkJNa0ozUkN4TlFVRXpRanRCUVVORU96dEJRVVZFTEZOQlFWTkRMRzFDUVVGVUxFZEJRV2RETzBGQlF6bENMRk5CUVU5a0xGRkJRVkZGTEZWQlFXWTdRVUZEUkRzN1FVRkZSQ3hUUVVGVFlTeG5Ra0ZCVkN4RFFVRXlRa01zVVVGQk0wSXNSVUZCY1VONlRpeFBRVUZ5UXl4RlFVRTRRMjlFTEUxQlFUbERMRVZCUVhORU9FY3NVVUZCZEVRc1JVRkJaMFZ5UWl4SFFVRm9SU3hGUVVGeFJUdEJRVU51UlN4TlFVRk5Oa1VzVDBGQlR6Rk9MRkZCUVZGdlF5eExRVUZTTEVOQlFXTnhUQ3hSUVVGa0xFTkJRV0k3TzBGQlJVRmFMSE5DUVVGdlFrTXNTVUZCY0VJc1EwRkJlVUo0U3l4SlFVRjZRaXhEUVVFNFFpeFpRVUZOTzBGQlEyeERMRkZCUVUwNFF5eExRVUZMYUVNc1QwRkJUM0JFTEZGQlFWRXhRaXhKUVVGU0xFbEJRV2RDVWl4eFFrRkJVME1zU1VGQmFFTXNSVUZCYzBOeFNDeEZRVUZxUkR0QlFVTkJMRkZCUVUxdFJ5eFBRVUZQTEVOQlFVTjJUQ3hSUVVGUk1VSXNTVUZCVkN4SFFVRm5RaXd3UWtGQll6aEZMRTFCUVdRc1EwRkJhRUlzUjBGQmQwTkJMRTlCUVU5d1JDeFJRVUZSTVVJc1NVRkJaaXhGUVVGeFFqSkhMRXRCUVRGRk8wRkJRMEY1U1N4VFFVRkxkRWtzUlVGQlRDeEZRVUZUYlVjc1NVRkJWQ3hGUVVGbGNrSXNVVUZCWml4RlFVRjVRbkpDTEVkQlFYcENPMEZCUTBRc1IwRktSRHRCUVV0RU96dEJRVVZFTEZOQlFWTjVSQ3huUWtGQlZDeERRVUV5UW5CT0xGTkJRVE5DTEVWQlFYTkRPMEZCUTNCRExFMUJRVTFJTEZsQlFWa3NlVUpCUVdGSExGTkJRV0lzUTBGQmJFSTdRVUZEUVN4TlFVRk5lVThzWVVGQllVTXNaMEpCUVdkQ04wOHNVMEZCYUVJc1EwRkJia0k3UVVGRFFTeDFRa0ZCVTBjc1UwRkJWQ3hGUVVGdlFubFBMRlZCUVhCQ096dEJRVVZCTEhWQ1FVRlJOVThzVlVGQlZVTXNTMEZCYkVJc1JVRkJlVUlzVlVGQlEyZENMRTlCUVVRc1JVRkJWVFJDTEZkQlFWWXNSVUZCTUVJN1FVRkRha1FzVVVGQlNUVkNMRkZCUVZFM1FpeFhRVUZhTEVWQlFYbENPMEZCUTNaQ2JVOHNkVUpCUVdsQ2NFNHNWVUZCVlhKQ0xFMUJRVllzUTBGQmFVSXJSQ3hYUVVGcVFpeERRVUZxUWp0QlFVTkVPMEZCUTBZc1IwRktSRHM3UVVGTlFTeE5RVUZOYzBrc1YwRkJWeXd5UWtGQlpXaE1MRk5CUVdZc1EwRkJha0k3UVVGRFFYTlBMRzFDUVVGcFFpeFBRVUZxUWl4RlFVRXdRbnBQTEZWQlFWVkRMRXRCUVZZc1EwRkJaMEpzUWl4eFFrRkJVME1zU1VGQmVrSXNRMEZCTVVJc1JVRkJNRVEwVUN4VlFVRXhSQ3hGUVVGelJYcEVMRkZCUVhSRkxFVkJRV2RHYUV3c1ZVRkJWV2xFTEV0QlFWWXNRMEZCWjBJc1EwRkJReXhEUVVGcVFpeEZRVUZ2UWl4RFFVRndRaXhEUVVGb1JqczdRVUZGUVN4VFFVRlBkMHdzVlVGQlVEdEJRVU5FT3p0QlFVVkVMRk5CUVZORExHVkJRVlFzUTBGQk1FSTNUeXhUUVVFeFFpeEZRVUZ4UXp0QlFVTnVReXhOUVVGTk9FOHNZMEZCWXl4cFFrRkJTVGxQTEZWQlFWVkRMRXRCUVdRc1JVRkJjVUlzVlVGQlEyZENMRTlCUVVRc1JVRkJZVHRCUVVOd1JDeFJRVUZOT0U0c1dVRkJXVGxPTEZGQlFWRkxMRTFCUVZJc1IwRkJhVUlzUlVGQmFrSXNSMEZCYzBJc1JVRkJlRU03TzBGQlJVRXNWMEZCVHpWRExIZENRVUZaYzFFc1RVRkJXaXhEUVVGdFFpeFZRVUZEUXl4RFFVRkVMRVZCUVVrM1NTeEhRVUZLTEVWQlFWazdRVUZEY0VNc1ZVRkJTVVlzWTBGQlNqczdRVUZGUVN4alFVRlJSU3hIUVVGU08wRkJRMFVzWVVGQlN5eFBRVUZNTzBGQlEwRXNZVUZCU3l4TlFVRk1PMEZCUTBWR0xHdENRVUZSYWtZc1VVRkJVWFZITEZOQlFWSXNTVUZCY1VJc1JVRkJOMEk3UVVGRFFUczdRVUZGUmp0QlFVTkZkRUlzYTBKQlFWRXNSVUZCVWp0QlFWQktPenRCUVZWQkswa3NVVUZCUlRkSkxFZEJRVVlzU1VGQlUwWXNTMEZCVkRzN1FVRkZRU3hoUVVGUEswa3NRMEZCVUR0QlFVTkVMRXRCYUVKTkxFVkJaMEpLUml4VFFXaENTU3hEUVVGUU8wRkJhVUpFTEVkQmNFSnRRaXhEUVVGd1FqczdRVUZ6UWtFc1UwRkJUMnhPTEU5QlFVOURMRTFCUVZBc1EwRkJZMmRPTEZkQlFXUXNjMEpCUVRoQ0wxQXNjVUpCUVZORExFbEJRWFpETEVWQlFUaERMSE5DUVVGVFRpeDFRa0ZCVkN4RlFVRnpRaXhGUVVGMFFpeERRVUU1UXl4RlFVRlFPMEZCUTBRN08wRkJSVVFzVTBGQlV6UlBMRk5CUVZRc1EwRkJiMEkwUWl4WlFVRndRaXhGUVVGclF5OVBMRk5CUVd4RExFVkJRVFpEWjFBc2FVSkJRVGRETEVWQlFXZEZPMEZCUXpsRVFTeHpRa0ZCYjBKQkxIRkNRVUZ4UWl4RlFVRjZRenRCUVVOQkxFMUJRVTFvUlN4WFFVRlhMREpDUVVGbGFFd3NVMEZCWml4RFFVRnFRanM3UVVGRlFTeE5RVUZKTEVOQlFVTm5UQ3hUUVVGVE9VY3NUVUZCWkN4RlFVRnpRanRCUVVOd1FqaEhMR0ZCUVZNNVJ5eE5RVUZVTEVkQlFXdENhMG9zYVVKQlFXbENjRTRzVTBGQmFrSXNRMEZCYkVJN1FVRkRRU3hSUVVGTk1rMHNVVUZCVVN4RFFVRkRNMDBzVlVGQlZXbEVMRXRCUVZZc1EwRkJaMElzUTBGQlF5eERRVUZxUWl4RlFVRnZRaXhEUVVGd1FpeERRVUZtTzBGQlEwRnhTeXh6UWtGQmEwSjBUaXhUUVVGc1FpeHpRa0ZCWjBOd1FpeHhRa0ZCVTNGUkxGZEJRWHBETEVWQlFYVkVMRVZCUVVWeVVDeExRVUZMTEVWQlFVVXJUU3haUVVGR0xFVkJRVk4xUXl4TFFVRkxka01zVVVGQlVTeERRVUYwUWl4RlFVRlFMRVZCUVhaRU8wRkJRMFE3TzBGQlJVUXNkVUpCUVZGdlF5eFpRVUZTTEVWQlFYTkNMRlZCUVVOWUxFMUJRVVFzUlVGQlV6Rk1MRmRCUVZRN1FVRkJRU3hYUVVGNVFubE5MRk5CUVZONlRTeFhRVUZVTEVWQlFYTkNNRXdzVFVGQmRFSXNSVUZCT0VKd1JDeFJRVUU1UWl4RlFVRjNRMmRGTEdsQ1FVRjRReXhEUVVGNlFqdEJRVUZCTEVkQlFYUkNPenRCUVVWQlZpeHRRa0ZCYVVJc1VVRkJha0lzUlVGQk1rSjBSQ3hUUVVGVGJrd3NVMEZCVkN4RFFVRnRRa01zUzBGQmJrSXNRMEZCZVVKc1FpeHhRa0ZCVTBNc1NVRkJiRU1zUTBGQk0wSXNSVUZCYjBWdFRTeFRRVUZUT1Vjc1RVRkJOMFVzUlVGQmNVWTRSeXhSUVVGeVJpeEZRVUVyUm1oTUxGVkJRVlZwUkN4TFFVRldMRU5CUVdkQ0xFTkJRVU1zUTBGQmFrSXNSVUZCYjBJc1EwRkJjRUlzUTBGQkwwWTdPMEZCUlVFc1RVRkJTVzlNTEhGQ1FVRktMRVZCUVRKQ08wRkJRM3BDTEZkQlFVOHNTVUZCU1Vnc1QwRkJTaXhEUVVGWkxGVkJRVU5yUWl4SFFVRkVPMEZCUVVFc1lVRkJVekZDTEd0Q1FVRnJRblJMTEVsQlFXeENMRU5CUVhWQ1owMHNSMEZCZGtJc1EwRkJWRHRCUVVGQkxFdEJRVm9zUTBGQlVEdEJRVU5FT3p0QlFVVkVMRk5CUVU5c1JTeGpRVUZRTzBGQlEwUTdPMEZCUlVRc1UwRkJVMmxGTEZGQlFWUXNRMEZCYlVKNlRTeFhRVUZ1UWl4RlFVRm5RekJNTEUxQlFXaERMRVZCUVhkRGNFUXNVVUZCZUVNc1JVRkJhMFJuUlN4cFFrRkJiRVFzUlVGQmNVVTdRVUZEYmtVc1RVRkJUV2hRTEZsQlFWbG5UQ3hUUVVGVFNpeEpRVUV6UWp0QlFVTkJMRTFCUVUwdlN5eFpRVUZaYlV3c1UwRkJVMjVNTEZOQlFUTkNPMEZCUTBFc1RVRkJUWEZGTEZOQlFWTTRSeXhUUVVGVE9VY3NUVUZCZUVJN1FVRkRRU3hOUVVGSmNFUXNWVUZCVldwQ0xGVkJRVlZETEV0QlFWWXNRMEZCWjBJMFF5eFhRVUZvUWl4RFFVRmtPenRCUVVWQkxFMUJRVWtzUTBGQlF6VkNMRTlCUVV3c1JVRkJZenRCUVVOYU5FSXNhMEpCUVdNM1F5eFZRVUZWVHl4VlFVRldMRU5CUVhGQ2MwTXNWMEZCY2tJc1EwRkJaRHRCUVVOQk5VSXNZMEZCVldwQ0xGVkJRVlZETEV0QlFWWXNRMEZCWjBJMFF5eFhRVUZvUWl4RFFVRldPMEZCUTBRN08wRkJSVVFzVFVGQlNTeERRVUZETlVJc1QwRkJUQ3hGUVVGak8wRkJRMW9zVlVGQlRTeEpRVUZKZFU4c0swSkJRVW9zUTBGQk1FSXpUU3hYUVVFeFFpeEZRVUYxUXpkRExGVkJRVlZVTEVsQlFXcEVMRVZCUVhWRVdTeFRRVUYyUkN4RFFVRk9PMEZCUTBRN08wRkJSVVFzVFVGQlNXOVBMRTlCUVU5NlN5eEpRVUZRTEV0QlFXZENMRTlCUVhCQ0xFVkJRVFpDTzBGQlF6TkNMRkZCUVVrM1F5eFJRVUZSU3l4TlFVRmFMRVZCUVc5Q08wRkJRMnhDTEdGQlFVOXRUeXhuUWtGQlowSjRUeXhQUVVGb1FpeEZRVUY1UW5OT0xFMUJRWHBDTEVWQlFXbERiRXNzVDBGQlQzaENMRmRCUVZBc1EwRkJha01zUlVGQmMwUnpTU3hSUVVGMFJDeERRVUZRTzBGQlEwUTdPMEZCUlVRc1VVRkJTU3gzUWtGQlUyOUVMRTlCUVU5eVNTeExRVUZvUWl4TFFVRXdRbXBHTEZGQlFWRTNRaXhYUVVGMFF5eEZRVUZ0UkR0QlFVTnFSQ3hoUVVGUGMxRXNjVUpCUVhGQ2VrOHNUMEZCY2tJc1JVRkJPRUp6VGl4TlFVRTVRaXhGUVVGelEzWlBMRk5CUVhSRExFVkJRV2xFUnl4VFFVRnFSQ3hEUVVGUU8wRkJRMFE3UVVGRFJqczdRVUZGUkN4TlFVRk5kMUFzVVVGQlVTeDNRa0ZCVTNSTUxFOUJRVTk0UWl4WFFVRlFMRVZCUVc5Q01Fd3NUMEZCVDNwTExFbEJRVE5DTEVOQlFWUXNSVUZCTWtONVN5eFBRVUZQY2trc1MwRkJiRVFzUTBGQlpEczdRVUZGUVN4TlFVRkpMRU5CUVVONVNpeExRVUZFTEVsQlFWVXNRMEZCUXl4MVFrRkJVVUVzUzBGQlVpeERRVUZZTEVsQlFUWkNjRUlzVDBGQlQzQkRMRXRCUVhoRExFVkJRU3RETzBGQlF6ZERPVWdzVjBGQlQzaENMRmRCUVZBc1JVRkJiMEl3VEN4UFFVRlBla3NzU1VGQk0wSXNTVUZCYlVONVN5eFBRVUZQY2trc1MwRkJNVU03TzBGQlJVRXNVVUZCU1hGSkxFOUJRVTk2U3l4SlFVRlFMRXRCUVdkQ0xFOUJRWEJDTEVWQlFUWkNPMEZCUXpOQ0xHRkJRVTh5U2l4clFrRkJhMEowVGl4VlFVRlZja0lzVFVGQlZpeERRVUZwUWl0RUxGZEJRV3BDTEVOQlFXeENMSE5DUVVGdlJEQk1MRTlCUVU5NlN5eEpRVUV6UkN4RlFVRnJSU3hMUVVGc1JTeEZRVUZRTzBGQlEwUTdPMEZCUlVReVN5eHhRa0ZCYVVJc1VVRkJha0lzUlVGQk1rSjRUaXhQUVVFelFpeEZRVUZ2UTI5RUxFMUJRWEJETEVWQlFUUkRPRWNzVVVGQk5VTXNSVUZCYzBSb1RDeFZRVUZWYVVRc1MwRkJWaXhEUVVGblFpeERRVUZETEVOQlFXcENMRVZCUVc5Q0xFTkJRWEJDTEVOQlFYUkVPMEZCUTBFclRDeHpRa0ZCYTBJMVRDeEpRVUZzUWl4RFFVRjFRbFlzWTBGQll5eEhRVUZrTEVkQlFXOUNNRXdzVDBGQlQzcExMRWxCUVd4RU96dEJRVVZCTEZGQlFVa3NRMEZCUXpkRExGRkJRVkV5VHl4SlFVRmlMRVZCUVcxQ08wRkJRMnBDVGl4bFFVRlRlazBzVjBGQlZDeEZRVUZ6UWl4RlFVRkZjVVFzVDBGQlQzRkpMRTlCUVU5eVNTeExRVUZvUWl4RlFVRjFRbkJETEUxQlFVMHNUVUZCTjBJc1JVRkJjVU54U1N4UFFVRlBiME1zVDBGQlQzQkRMRXRCUVc1RUxFVkJRWFJDTEVWQlFXdEdhRUlzVVVGQmJFWXNSVUZCTkVablJTeHBRa0ZCTlVZN1FVRkRSRHM3UVVGRlJDeFJRVUZOZUVvc1QwRkJUek5HTEZWQlFWVk5MRXRCUVZZc1EwRkJaMEoxUXl4WFFVRm9RaXhEUVVGaU8wRkJRMEVzVVVGQlNUaERMRWxCUVVvc1JVRkJWVHRCUVVOU01rb3NaVUZCVXpOS0xFdEJRVXRCTEVsQlFXUXNSVUZCYjBJc1JVRkJSVThzVDBGQlQzRkpMRTlCUVU5eVNTeExRVUZvUWl4RlFVRjFRbkJETEUxQlFVMHNUMEZCTjBJc1JVRkJjME54U1N4UFFVRlBiME1zVDBGQlQzQkRMRXRCUVhCRUxFVkJRWEJDTEVWQlFXbEdhRUlzVTBGQlUwMHNTVUZCVkN4RFFVRmpPVVlzUzBGQlN6TkdMRk5CUVc1Q0xFTkJRV3BHTEVWQlFXZElMRVZCUVdoSU8wRkJRMFE3TzBGQlJVUXNlVUpCUVZGcFFpeFJRVUZSYlVRc1ZVRkJhRUlzUlVGQk5FSXNWVUZCUTNsTUxGTkJRVVFzUlVGQldVTXNXVUZCV2l4RlFVRTJRanRCUVVOMlJDeFZRVUZKTEdsQ1FVRkpXQ3hwUWtGQlNpeEZRVUYxUWxjc1dVRkJka0lzUTBGQlNpeEZRVUV3UXp0QlFVTjRRenRCUVVORU96dEJRVVZFTEZWQlFVMURMRmRCUVZjdlVDeFZRVUZWUXl4TFFVRldMRU5CUVdkQ05GQXNWVUZCVlhSUkxFbEJRVEZDTEVWQlFXZERZeXhSUVVGb1F5eERRVUY1UTNkUUxGVkJRVlV2VEN4SlFVRnVSQ3hGUVVGNVJFOHNUVUZCZWtRc1JVRkJhVVU0Unl4UlFVRnFSU3hEUVVGcVFqdEJRVU5CYlVVc1pVRkJVMDhzVlVGQlZYUlJMRWxCUVc1Q0xFVkJRWGxDTEVWQlFVVXlSeXhQUVVGUE5rb3NVVUZCVkN4RlFVRnRRbXBOTEUxQlFVMHJUQ3hWUVVGVkwwd3NTVUZCYmtNc1JVRkJla0lzUlVGQmIwVnhTQ3hSUVVGd1JTeEZRVUU0UldkRkxHbENRVUU1UlR0QlFVTkVMRXRCVUVRN1FVRlJSRHRCUVVOR096dEJRVVZFTEZOQlFWTk5MR1ZCUVZRc1EwRkJNRUo0VHl4UFFVRXhRaXhGUVVGdFEzTk9MRTFCUVc1RExFVkJRVEpEZVVJc1IwRkJNME1zUlVGQlowUTNSU3hSUVVGb1JDeEZRVUV3UkR0QlFVTjRSSFJLTEZOQlEwZHhTeXhKUVVSSUxFTkJRMUZ4UXl4UFFVRlBja2tzUzBGRVppeEZRVVZIZGtNc1QwRkdTQ3hEUVVWWExGVkJRVU41U1N4RFFVRkVPMEZCUVVFc1YwRkJUMnRDTEZWQlFWY3NaME5CUVc5Q2FVSXNUMEZCVDNKSkxFdEJRVkFzUTBGQllXdEhMRU5CUVdJc1EwRkJjRUlzUTBGQldDeEZRVUZwUkdwQ0xGTkJRVk5LTEVsQlFWUXNRMEZCWTJwTkxFMUJRV1FzUTBGQmNVSnRReXhSUVVGUk1VSXNTVUZCTjBJc1JVRkJiVU0yVFN4RFFVRnVReXhGUVVGelEyNU1MRkZCUVZGVExGRkJRVklzUTBGQmFVSnVReXhKUVVGMlJDeERRVUZxUkN4RFFVRlFPMEZCUVVFc1IwRkdXRHM3UVVGSlFTeE5RVUZOTUZFc1owSkJRV2RDTEhkQ1FVRlRSQ3hIUVVGVUxFVkJRV042UWl4UFFVRlBja2tzUzBGQmNrSXNRMEZCZEVJN1FVRkRRU3gxUWtGQlVTdEtMR0ZCUVZJc1JVRkJkVUlzVlVGQlEzSkZMRk5CUVVRc1JVRkJXVGxDTEVkQlFWb3NSVUZCYjBJN1FVRkRla01zVVVGQlNUaENMRlZCUVZWNlNTeE5RVUZrTEVWQlFYTkNPMEZCUTNCQ2VVa3NaMEpCUVZWNlNTeE5RVUZXTEVkQlFXMUNLMDBzWlVGQlpVWXNSMEZCWml4RlFVRnZRbXhITEVkQlFYQkNMRVZCUVhsQ04wa3NUMEZCZWtJc1JVRkJhME5yU3l4UlFVRnNReXhEUVVGdVFqdEJRVU5FT3p0QlFVVkVjME1zYzBKQlFXdENkRU1zVTBGQlUwb3NTVUZCVkN4RFFVRmphazBzVFVGQlpDeERRVUZ4UW0xRExGRkJRVkV4UWl4SlFVRTNRaXhGUVVGdFEzVkxMRWRCUVc1RExFVkJRWGRETjBrc1VVRkJVVk1zVVVGQlVpeERRVUZwUW01RExFbEJRWHBFTEVOQlFXeENMSE5DUVVGeFJsSXNjVUpCUVZOeFVTeFhRVUU1Uml4RlFVRTBSM2hFTEZOQlFUVkhPMEZCUTBRc1IwRk9SRHRCUVU5RU96dEJRVVZFTEZOQlFWTTRSQ3h2UWtGQlZDeERRVUVyUW5wUExFOUJRUzlDTEVWQlFYZERjMDRzVFVGQmVFTXNSVUZCWjBSMlR5eFRRVUZvUkN4RlFVRXlSRWNzVTBGQk0wUXNSVUZCYzBVN1FVRkRjRVZ0VGl4WlFVRlhMR2REUVVGdlFtbENMRTlCUVU5eVNTeExRVUV6UWl4RFFVRllMRVZCUVRoREwwWXNWVUZCVlhKQ0xFMUJRVllzUTBGQmFVSnRReXhSUVVGUk1VSXNTVUZCZWtJc1EwRkJPVU03UVVGRFJEczdRVUZGUkN4VFFVRlRhVThzVlVGQlZDeERRVUZ4UWpKRExFMUJRWEpDTEVWQlFUWkNlRkVzU1VGQk4wSXNSVUZCYlVOM1RDeFJRVUZ1UXl4RlFVRTJRenRCUVVNelF5eE5RVUZOTmtVc1RVRkJUVGRGTEZOQlFWTTVSeXhOUVVGeVFqdEJRVU5CTEUxQlFVMHJUQ3hYUVVGWGFrWXNVMEZCVTBvc1NVRkJNVUk3UVVGRFFTeE5RVUZOYzBZc1YwRkJWMnhHTEZOQlFWTnVUQ3hUUVVGVUxFTkJRVzFDTUVJc1VVRkJia0lzUTBGQk5FSnVReXhKUVVFM1F6dEJRVU5CTEUxQlFVMTFUaXhSUVVGUmJrNHNTMEZCUzIxT0xFdEJRVzVDTzBGQlEwRXNUVUZCU1d4Q0xGbEJRVmtzUlVGQmFFSTdPMEZCUlVFc1ZVRkJVWFZGTEUxQlFWSTdRVUZEUlN4VFFVRkxMRXRCUVV3N1FVRkRSWFpGTEd0Q1FVRlpNRVVzVlVGQlZVNHNSMEZCVml4RlFVRmxiRVFzUzBGQlppeEZRVUZ6UW01T0xFdEJRVXRyVGl4SFFVRXpRaXhGUVVGblEzVkVMRkZCUVdoRExFVkJRVEJEUXl4UlFVRXhReXhEUVVGYU8wRkJRMEU3TzBGQlJVWXNVMEZCU3l4UlFVRk1PMEZCUTBVc1ZVRkJUV2hDTEUxQlFVMTJReXhUUVVGVGJrNHNTMEZCUzJsT0xFZEJRVXdzU1VGQldTeERRVUZ5UWl4RFFVRmFPMEZCUTBGb1FpeHJRa0ZCV1RKRkxHVkJRV1ZRTEVkQlFXWXNSVUZCYjBKc1JDeExRVUZ3UWl4RlFVRXlRblZETEVkQlFUTkNMRVZCUVdkRGJFVXNVMEZCVTI1TUxGTkJRWHBETEVWQlFXOUViVXdzVVVGQmNFUXNRMEZCV2p0QlFVTkJPMEZCVWtvN08wRkJWMEVzZFVKQlFWRlRMRk5CUVZJc1JVRkJiVUlzVlVGQlF6SkRMRTFCUVVRc1JVRkJVM3BGTEVkQlFWUTdRVUZCUVN4WFFVRnBRakpFTEd0Q1FVRnJRakpETEZOQlFWTjBVaXhOUVVGVUxFTkJRV2RDWjB3c1IwRkJhRUlzUlVGQmNVSjFSeXhSUVVGeVFpeEZRVUVyUW5SU0xIRkNRVUZUY1ZFc1YwRkJlRU1zUTBGQmJFSXNSVUZCZDBWNFJDeFZRVUZWT1VJc1IwRkJWaXhGUVVGbEwwc3NjVUpCUVZOeFVTeFhRVUY0UWl4RFFVRjRSU3hEUVVGcVFqdEJRVUZCTEVkQlFXNUNPenRCUVVWQkxFMUJRVWxhTEhGQ1FVRktMRVZCUVRKQ08wRkJRM3BDTEZkQlFVOHNTVUZCU1Vnc1QwRkJTaXhEUVVGWkxGVkJRVU5yUWl4SFFVRkVPMEZCUVVFc1lVRkJVekZDTEd0Q1FVRnJRblJMTEVsQlFXeENMRU5CUVhWQ1owMHNSMEZCZGtJc1EwRkJWRHRCUVVGQkxFdEJRVm9zUTBGQlVEdEJRVU5FT3p0QlFVVkVMRk5CUVU5c1JTeGpRVUZRTzBGQlEwUTdPMEZCUlVRc1UwRkJVMmxHTEZOQlFWUXNRMEZCYjBKT0xFZEJRWEJDTEVWQlFYbENiRVFzUzBGQmVrSXNSVUZCWjBORUxFZEJRV2hETEVWQlFYRkRkVVFzVVVGQmNrTXNSVUZCSzBORExGRkJRUzlETEVWQlFYbEVPMEZCUTNaRWVFUXNVVUZCVFN4MVFrRkJVVUVzUjBGQlVpeEpRVUZsUVN4SFFVRm1MRWRCUVhGQ0xFTkJRVU5CTEVkQlFVUXNRMEZCTTBJN08wRkJSVUZCTEUxQlFVbHNTaXhQUVVGS0xFTkJRVmtzVlVGQlF6QkRMRVZCUVVRc1JVRkJTeXRHTEVOQlFVd3NSVUZCVnp0QlFVTnlRalJFTEZGQlFVbFJMRTFCUVVvc1EwRkJWM0JGTEVsQlFVbFZMRXRCUVdZc1JVRkJjMElzUTBGQmRFSXNSVUZCZVVJc1NVRkJla0k3UVVGRFFWRXNZMEZCVlN4blEwRkJiMEpxU0N4RlFVRndRaXhEUVVGV0xFVkJRVzFESzBvc1UwRkJVM1JTTEUxQlFWUXNRMEZCWjBKelRpeEpRVUZKVlN4TFFVRndRaXhGUVVFeVFuVkVMRkZCUVROQ0xFTkJRVzVETzBGQlEwUXNSMEZJUkRzN1FVRkxRU3cyUWtGQlZYWkVMRXRCUVZZc2MwSkJRWEZDTDA0c2NVSkJRVk54VVN4WFFVRTVRaXhGUVVFMFF5eEZRVUZGY2xBc1MwRkJTeXhGUVVGRkswMHNXVUZCUml4RlFVRlRkVU1zUzBGQlMzWkRMRkZCUVZGRUxFbEJRVWszUnl4TlFVRXhRaXhGUVVGUUxFVkJRVFZETzBGQlEwUTdPMEZCUlVRc1UwRkJVM1ZMTEdOQlFWUXNRMEZCZVVKUUxFZEJRWHBDTEVWQlFUaENiRVFzUzBGQk9VSXNSVUZCY1VOMVF5eEhRVUZ5UXl4RlFVRXdRMjlDTEZkQlFURkRMRVZCUVhWRWRFWXNVVUZCZGtRc1JVRkJhVVU3UVVGREwwUXNUVUZCVFZNc1dVRkJXU3hGUVVGc1FqczdRVUZGUVN4UFFVRkxMRWxCUVVsUkxFbEJRVWxWTEV0QlFXSXNSVUZCYjBKV0xFbEJRVWxwUkN4SFFVRjRRaXhGUVVFMlFtcEVMRWRCUVRkQ0xFVkJRV3RETzBGQlEyaERMRkZCUVUxelJTeHBRa0ZCYVVKU0xHVkJRV1ZHTEVkQlFXWXNSVUZCYjBJMVJDeERRVUZ3UWl4RlFVRjFRbkZGTEZkQlFYWkNMRVZCUVc5RGRFWXNVVUZCY0VNc1EwRkJka0k3UVVGRFFWTXNZMEZCVlZFc1EwRkJWaXgzUWtGQmEwSnlUaXh4UWtGQlUzRlJMRmRCUVROQ0xFVkJRWGxETEVWQlFVVnFUU3hSUVVGUmRVNHNZMEZCVml4RlFVRjZRenRCUVVORU96dEJRVVZFTEZOQlFVODVSU3hUUVVGUU8wRkJRMFE3TzBGQlJVUXNVMEZCVTNORkxHTkJRVlFzUTBGQmVVSkdMRWRCUVhwQ0xFVkJRVGhDYkVjc1IwRkJPVUlzUlVGQmJVTXlSeXhYUVVGdVF5eEZRVUZuUkhSR0xGRkJRV2hFTEVWQlFUQkVPMEZCUTNoRUxFMUJRVTEzUml4alFVRmpXQ3hKUVVGSlVTeE5RVUZLTEVOQlFWY3hSeXhIUVVGWUxFVkJRV2RDTEVOQlFXaENMRVZCUVcxQ0xFTkJRVzVDTEVWQlFYTkNNa2NzV1VGQldTOVBMRkZCUVZvc1EwRkJjVUp1UXl4SlFVRXpReXhEUVVGd1FqdEJRVU5CYTFBc2JVSkJRV2xDTEZGQlFXcENMRVZCUVRKQ1owTXNXVUZCV1M5UExGRkJRVm9zUTBGQmNVSjZRaXhMUVVGeVFpeERRVUV5UW14Q0xIRkNRVUZUUXl4SlFVRndReXhEUVVFelFpeEZRVUZ6UlRKU0xGZEJRWFJGTEVWQlFXMUdlRVlzVVVGQmJrWXNSVUZCTmtaeVFpeEhRVUUzUmp0QlFVTkJMRk5CUVU4MlJ5eFpRVUZaTlZJc2NVSkJRVk5ETEVsQlFYSkNMRVZCUVRKQ2NVZ3NSVUZCYkVNN1FVRkRSQ3hET3pzN096czdPenM3T3pzN096czdPenM3TzBGRE9WSkVPenM3TzBGQlEwRTdPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdPMEZCUlVFN096czdVVUZSUlhWTExIRkNMRWRCUVVGQkxIRkNPMUZCUTBGRExHRXNSMEZCUVVFc1lUczdPMEZCUjBZc1NVRkJUVU1zVTBGQlV6dEJRVU5pYkVJc1VVRkJUVzFDTEZkQlJFODdRVUZGWW1oTUxGTkJRVTlwVEN4WlFVWk5PMEZCUjJKRExGTkJRVTlETEZkQlNFMDdRVUZKWWtNc1UwRkJUME03UVVGS1RTeERRVUZtT3p0QlFVOUJMRk5CUVZOUUxHRkJRVlFzUTBGQmQwSnNSQ3hQUVVGNFFpeEZRVUZwUXp0QlFVTXZRaXgxUWtGQlVVRXNUMEZCVWl4RlFVRnBRaXhWUVVGRE1FUXNaMEpCUVVRc1JVRkJiVUpETEZOQlFXNUNMRVZCUVdsRE8wRkJRMmhFTEZGQlFVMURMR05CUVdNeFVDeFBRVUZQY1Vzc1NVRkJVQ3hEUVVGWmJVWXNaMEpCUVZvc1JVRkJPRUlzUTBGQk9VSXNRMEZCY0VJN1FVRkRRU3hSUVVGTlJ5eHZRa0ZCYjBJc01rSkJRV1VzUTBGQlEwWXNVMEZCUkN4RlFVRlpReXhYUVVGYUxFTkJRV1lzUTBGQk1VSTdRVUZEUVZJc1owSkJRVmxUTEd0Q1FVRnJRbmhTTEZOQlFUbENMRVZCUVhsRGQxSXNhMEpCUVd0Q2JrNHNUVUZCTTBRc1JVRkJiVVVzUTBGQlEybE9MRk5CUVVRc1JVRkJXVU1zVjBGQldpeERRVUZ1UlN4RlFVRTJSa1lzYVVKQlFXbENSU3hYUVVGcVFpeERRVUUzUmp0QlFVTkVMRWRCU2tRN1FVRkxSRHM3UVVGRlJDeFRRVUZUVWl4WFFVRlVMRU5CUVhOQ0wxRXNVMEZCZEVJc1JVRkJhVU5yUnl4TFFVRnFReXhGUVVGM1F5OUdMRk5CUVhoRExFVkJRVzFFZDA0c1QwRkJia1FzUlVGQk5FUTdRVUZETVVRc1RVRkJTU3hEUVVGRE0wNHNWVUZCVlZJc1RVRkJaaXhGUVVGMVFqdEJRVU55UWp0QlFVTkVPenRCUVVWRUxFMUJRVWxSTEZWQlFWVnpRaXhOUVVGa0xFVkJRWE5DTzBGQlEzQkNMRmRCUVU5dFVTeFhRVUZYZWxJc1UwRkJXQ3hGUVVGelFtdEhMRXRCUVhSQ0xFVkJRVFpDTDBZc1UwRkJOMElzUlVGQmQwTjNUaXhQUVVGNFF5eERRVUZRTzBGQlEwUTdPMEZCUlVRc1RVRkJTVE5PTEZWQlFWVmFMRmRCUVdRc1JVRkJNa0k3UVVGRGVrSXNWMEZCVDNOVExHZENRVUZuUWpGU0xGTkJRV2hDTEVWQlFUSkNhMGNzUzBGQk0wSXNSVUZCYTBNdlJpeFRRVUZzUXl4RlFVRTJRM2RPTEU5QlFUZERMRU5CUVZBN1FVRkRSRHM3UVVGRlJIcElMRlZCUVZFc01rSkJRVmxCTEV0QlFWb3NTVUZCY1VJc1JVRkJja0lzUjBGQk1FSkJMRXRCUVd4RE96dEJRVVZCTEUxQlFVbHNSeXhWUVVGVlVpeE5RVUZXTEVOQlFXbENiVWdzVDBGQmFrSXNTMEZCTmtJc1QwRkJha01zUlVGQk1FTTdRVUZEZUVNelJ5eGpRVUZWVWl4TlFVRldMRU5CUVdsQ01FY3NTMEZCYWtJc1IwRkJlVUpCTEV0QlFYcENPMEZCUTBFN1FVRkRSRHM3UVVGRlJDd3dRa0ZCWTJ4SExGVkJRVlZTTEUxQlFYaENMRVZCUVdkRE1FY3NTMEZCYUVNN08wRkJSVUVzVTBGQlQyeEhMRk5CUVZBN1FVRkRSRHM3UVVGRlJDeFRRVUZUTUZJc1pVRkJWQ3hEUVVFd1FqRlNMRk5CUVRGQ0xFVkJRWEZEYTBjc1MwRkJja01zUlVGQk5FTXZSaXhUUVVFMVF5eEZRVUYxUkhkT0xFOUJRWFpFTEVWQlFXZEZPMEZCUXpsRUxFMUJRVWxCTEU5QlFVb3NSVUZCWVR0QlFVTllMRmRCUVU5blJTeG5Ra0ZCWjBJelVpeFRRVUZvUWl4RlFVRXlRbXRITEV0QlFUTkNMRVZCUVd0REwwWXNVMEZCYkVNc1JVRkJOa04zVGl4UFFVRTNReXhEUVVGUU8wRkJRMFE3TzBGQlJVUXNVMEZCVDJsRkxHTkJRV014VEN4TFFVRmtMRVZCUVhGQ0wwWXNVMEZCY2tJc1EwRkJVRHRCUVVORU96dEJRVVZFTEZOQlFWTjVVaXhoUVVGVUxFTkJRWGRDZGs0c1RVRkJlRUlzUlVGQlowTnNSU3hUUVVGb1F5eEZRVUV5UXp0QlFVTjZReXhOUVVGTlowd3NWMEZCVnl3eVFrRkJaV2hNTEZOQlFXWXNRMEZCYWtJN1FVRkRRU3hOUVVGTlNDeFpRVUZaYlV3c1UwRkJVMjVNTEZOQlFUTkNPenRCUVVWQkxFMUJRVTAyVWl4alFVRmpkbEFzVTBGQlUwTXNZVUZCVkN4RFFVRjFRaXhMUVVGMlFpeERRVUZ3UWp0QlFVTkJMRTFCUVUxdlJpeGhRVUZoTTBnc1ZVRkJWVEJFTEZGQlFWWXNRMEZCYlVKNlFpeFRRVUZ1UWl4RFFVRTJRaXhKUVVFM1FpeERRVUZ1UWp0QlFVTkJiME1zVTBGQlQzUkdMSEZDUVVGVFF5eEpRVUZvUWl4RlFVRnpRbkZJTEVWQlFYUkNMRWRCUVRKQ2MwSXNWVUZCTTBJN1FVRkRRV3RMTEdOQlFWbHNVQ3hYUVVGYUxFTkJRWGRDWjBZc1ZVRkJlRUk3TzBGQlJVRkJMR0ZCUVZkdVJpeFpRVUZZTEVOQlFYZENla1FzY1VKQlFWTnJUU3hqUVVGcVF5eEZRVUZyUkdwTUxGVkJRVlZ6U0N4VlFVRllMRWRCUVhsQ2Rra3NjVUpCUVZONVJTeEpRVUZzUXl4SFFVRjVRM3BGTEhGQ1FVRlRLMU1zVTBGQmJrYzdPMEZCUlVFc2RVSkJRVkZvUWl4TlFVRlNMRVZCUVdkQ0xGVkJRVU5wUWl4VlFVRkVMRVZCUVdGRExGVkJRV0lzUlVGQk5FSTdRVUZETVVNc1VVRkJTV2hUTEZWQlFWVkRMRXRCUVZZc1EwRkJaMEpzUWl4eFFrRkJVME1zU1VGQmVrSXNSVUZCSzBKblZDeFZRVUV2UWl4RFFVRktMRVZCUVdkRU8wRkJRemxEUkN4cFFrRkJWeXhGUVVGRmRsTXNVVUZCVVcxSkxGVkJRVllzUlVGQldDeEZRVUZ0UTNSRUxFOUJRVTkwUml4eFFrRkJVME1zU1VGQmFFSXNSVUZCYzBKblZDeFZRVUYwUWl4RFFVRnVRenRCUVVORU8wRkJRMFlzUjBGS1JEczdRVUZOUVN4MVFrRkJVV2hUTEZWQlFWVkRMRXRCUVd4Q0xFVkJRWGxDTEZWQlFVTm5RaXhQUVVGRUxFVkJRVlUwUWl4WFFVRldMRVZCUVRCQ08wRkJRMnBFTEZGQlFVa3NRMEZCUXpWQ0xGRkJRVkY2UWl4TlFVRmlMRVZCUVhGQ08wRkJRMjVDTzBGQlEwUTdPMEZCUlVRc1VVRkJUWGxFTEdOQlFXTTBUeXhaUVVGWk0wOHNZVUZCV2l4RFFVRXdRaXhOUVVGTmJrVXNjVUpCUVZOeFF5eE5RVUZtTEVkQlFYZENTQ3hSUVVGUlNTeEZRVUV4UkN4RFFVRndRanRCUVVOQk5FSXNaMEpCUVZsdVJDeFRRVUZhTEVOQlFYTkNjVVFzVFVGQmRFSXNRMEZCTmtKd1JTeHhRa0ZCVTNGRExFMUJRVlFzUjBGQmEwSklMRkZCUVZGSkxFVkJRWFpFT3p0QlFVVkJMRkZCUVVsS0xGRkJRVkUzUWl4WFFVRmFMRVZCUVhsQ08wRkJRM1pDTEZWQlFVMDJVeXhwUWtGQmFVSTVVaXhWUVVGVmNrSXNUVUZCVml4RFFVRnBRaXRFTEZkQlFXcENMRU5CUVhaQ08wRkJRMEVzVlVGQlRYRlFMR05CUVdOT0xHTkJRV04yVGl4UFFVRlBlRUlzVjBGQlVDeERRVUZrTEVWQlFXMURiMUFzWTBGQmJrTXNRMEZCY0VJN1FVRkRRU3cyUWtGQllXaFFMRmRCUVdJc1JVRkJNRUpwVUN4WFFVRXhRanRCUVVOQk8wRkJRMFE3TzBGQlJVUTNUaXhYUVVGUGVFSXNWMEZCVUN4RlFVRnZRbmRFTEVWQlFYQkNMRWRCUVhsQ2NFUXNWMEZCZWtJN08wRkJSVUVzVVVGQlNXaERMRkZCUVZGTExFMUJRVm9zUlVGQmIwSTdRVUZEYkVKdFVTeHBRa0ZCVjNoUkxFOUJRVmdzUlVGQmIwSnZSQ3hQUVVGUGVFSXNWMEZCVUN4RFFVRndRaXhGUVVGNVF6RkRMRlZCUVZWeVFpeE5RVUZXTEVOQlFXbENLMFFzVjBGQmFrSXNRMEZCZWtNN1FVRkRRVHRCUVVORU96dEJRVVZFTEhsQ1FVRlJhVThzVFVGQlVpeEZRVUZuUWl4VlFVRkRhVUlzVlVGQlJDeEZRVUZoUXl4VlFVRmlMRVZCUVRSQ08wRkJRekZETEZWQlFVbEJMR1ZCUVdVc1RVRkJaaXhKUVVGNVFpOVJMRkZCUVZFeVR5eEpRVUZTTEV0QlFXbENMRWxCUVRGRExFbEJRV3RFTTA4c1VVRkJVWHBDTEUxQlFWSXNRMEZCWldkRExGRkJRV1lzUTBGQmQwSjNSU3hOUVVFNVJTeEZRVUZ6Ump0QlFVTndSanRCUVVORU8wRkJRMFFyVEN4cFFrRkJWeXhGUVVGRmRsTXNVVUZCVVhsRUxGZEJRVllzUlVGQldDeEZRVUZ2UTI5Q0xFOUJRVTk0UWl4WFFVRlFMRVZCUVc5Q2JWQXNWVUZCY0VJc1EwRkJjRU1zUlVGQmNVVTNVaXhUUVVGeVJUdEJRVU5FTEV0QlRFUTdRVUZOUkN4SFFUVkNSRHM3UVVFNFFrRXNVMEZCVHpCU0xGbEJRVmx5VVN4UlFVRmFMRU5CUVhGQ0xFTkJRWEpDTEVOQlFWQTdRVUZEUkRzN1FVRkZSQ3hUUVVGVGJWRXNaVUZCVkN4RFFVRXdRak5TTEZOQlFURkNMRVZCUVhGRGNVVXNUVUZCY2tNc1JVRkJOa05zUlN4VFFVRTNReXhGUVVGM1JIZE9MRTlCUVhoRUxFVkJRV2xGTzBGQlF5OUVMRTFCUVUxM1JTeHJRa0ZCYTBJNVRpeFBRVUZQZEVZc2NVSkJRVk5ETEVsQlFXaENMRVZCUVhOQ2NVZ3NSVUZCT1VNN08wRkJSVUVzZFVKQlFWRnpTQ3hQUVVGU0xFVkJRV2xDTEZWQlFVTlpMRTFCUVVRc1JVRkJVekZNTEZkQlFWUXNSVUZCZVVJN08wRkJSWGhETEZGQlFVbEJMR2RDUVVGblFqbEVMSEZDUVVGVFF5eEpRVUUzUWl4RlFVRnRRenM3UVVGRmFrTXNWMEZCU3l4SlFVRkpiMVFzVlVGQlZDeEpRVUYxUWpkRUxFMUJRWFpDTEVWQlFTdENPMEZCUXpkQ2RVTXNaVUZCVDNOQ0xGVkJRVkFzUlVGQmJVSXNSVUZCUlRWVExGRkJRVkV5VXl4bFFVRldMRVZCUVc1Q0xFVkJRV2RFT1U0c1QwRkJUM1JHTEhGQ1FVRlRReXhKUVVGb1FpeEZRVUZ6UW05VUxGVkJRWFJDTEVOQlFXaEVPMEZCUTBRN1FVRkRSRHRCUVVORU96dEJRVVZFTEZGQlFVMXVVaXhWUVVGVmFrSXNWVUZCVlVNc1MwRkJWaXhEUVVGblFqUkRMRmRCUVdoQ0xFTkJRV2hDTzBGQlEwRXNVVUZCVFhkUUxIRkNRVUZ4UW14VExGVkJRVlZ5UWl4TlFVRldMRU5CUVdsQ0swUXNWMEZCYWtJc1EwRkJNMEk3TzBGQlJVRXNVVUZCU1RWQ0xGRkJRVkUzUWl4WFFVRlNMRWxCUVhWQ05rSXNVVUZCVVVzc1RVRkJia01zUlVGQk1rTTdRVUZEZWtONVVDeHJRa0ZCV1RsUUxFOUJRVm9zUlVGQmNVSnZSQ3hQUVVGUGVFSXNWMEZCVUN4RFFVRnlRaXhGUVVFd1EzZFFMR3RDUVVFeFF5eEZRVUU0UkRGRkxGRkJRVkU1U3l4WFFVRlNMRU5CUVRsRU8wRkJRMEU3UVVGRFJEczdRVUZGUkN4UlFVRk5kMFFzUzBGQlMyaERMRTlCUVU5NFFpeFhRVUZRTEVWQlFXOUNkMFFzUlVGQkwwSTdPMEZCUlVFc1UwRkJTeXhKUVVGSkswd3NWMEZCVkN4SlFVRjFRamRFTEUxQlFYWkNMRVZCUVN0Q08wRkJRemRDTEZWQlFVMTNRaXhYUVVGWE1Vd3NUMEZCVDNoQ0xGZEJRVkFzUlVGQmIwSjFVQ3hYUVVGd1FpeERRVUZxUWp0QlFVTkJkRUlzWVVGQlQzTkNMRmRCUVZBc1JVRkJiVUlzUlVGQlJUVlRMRkZCUVZFMlJ5eEZRVUZXTEVWQlFXNUNMRVZCUVcxRE1Fb3NVVUZCYmtNN1FVRkRSRHRCUVVOR0xFZEJlRUpFTzBGQmVVSkVPenRCUVVWRUxGTkJRVk13UWl4VlFVRlVMRU5CUVhGQ1lTeGhRVUZ5UWl4RlFVRnZRME1zVjBGQmNFTXNSVUZCYVVSd1V5eFRRVUZxUkN4RlFVRTBSSGRPTEU5QlFUVkVMRVZCUVhGRk8wRkJRMjVGTEUxQlFVbEJMRTlCUVVvc1JVRkJZVHRCUVVOWUxGZEJRVTgyUlN4WFFVRlhSaXhoUVVGWUxFVkJRVEJDUXl4WFFVRXhRaXhGUVVGMVEzQlRMRk5CUVhaRExFVkJRV3RFZDA0c1QwRkJiRVFzUTBGQlVEdEJRVU5FT3p0QlFVVkVMRTFCUVUwNFJTeGxRVUZsUXl4VlFVRlZTaXhoUVVGV0xFVkJRWGxDUXl4WFFVRjZRaXhGUVVGelEzQlRMRk5CUVhSRExFTkJRWEpDT3p0QlFVVkJMRTFCUVUxM1V5eFhRVUZYU2l4WlFVRlpiRTBzUlVGQk4wSTdRVUZEUVN4TlFVRk5ORU1zWVVGQllUQktMRk5CUVZNeFNpeFZRVUUxUWp0QlFVTkJMRTFCUVUweVNpeFhRVUZYUkN4VFFVRlRSU3hyUWtGQk1VSTdRVUZEUVN4MVFrRkJWMFlzVVVGQldEczdRVUZGUVN4TlFVRk5kbFFzWTBGQlkzVlVMRk5CUVZOeVRTeFpRVUZVTEVOQlFYTkNka2dzY1VKQlFWTnJUU3hqUVVFdlFpeERRVUZ3UWp0QlFVTkJNRWdzVjBGQlUyNVJMRmxCUVZRc1EwRkJjMEo2UkN4eFFrRkJVMnROTEdOQlFTOUNMRVZCUVN0RGJFMHNjVUpCUVZNclZDeEpRVUY0UkR0QlFVTkJMRTFCUVVreFZDeFhRVUZLTEVWQlFXbENPMEZCUTJaMVZDeGhRVUZUYmxFc1dVRkJWQ3hEUVVGelFucEVMSEZDUVVGVGEwMHNZMEZCTDBJc1JVRkJLME5zVFN4eFFrRkJVMmRWTEdOQlFYaEVPMEZCUTBRN08wRkJSVVFzYzBKQlFWVktMRkZCUVZZN1FVRkRRVUVzVjBGQlUyaFJMRmRCUVZRc1EwRkJjVUk0VUN4WlFVRnlRanM3UVVGRlFYaEtMR0ZCUVZjclNpeFpRVUZZTEVOQlFYZENUQ3hSUVVGNFFpeEZRVUZyUTBNc1VVRkJiRU03UVVGRFJEczdRVUZGUkN4VFFVRlRSaXhUUVVGVUxFTkJRVzlDU2l4aFFVRndRaXhGUVVGdFEwTXNWMEZCYmtNc1JVRkJaMFJ3VXl4VFFVRm9SQ3hGUVVFeVJEaFRMRXRCUVRORUxFVkJRV3RGTzBGQlEyaEZMRTFCUVUxdVJ5eFJRVUZSYlVjc1VVRkJVVUVzVFVGQlRXNUhMRXRCUVdRc1IwRkJjMElzUTBGQmNFTTdRVUZEUVN4TlFVRk5kVU1zVFVGQlRUUkVMRkZCUVZGQkxFMUJRVTAxUkN4SFFVRmtMRWRCUVhGQ2EwUXNXVUZCV1haTkxFMUJRVm9zUjBGQmNVSXNRMEZCZEVRN08wRkJSVUVzVFVGQlRYbE5MR1ZCUVdWdVVTeFRRVUZUTkZFc2MwSkJRVlFzUlVGQmNrSTdRVUZEUVZnc1kwRkRSMjVRTEV0QlJFZ3NRMEZEVXpCS0xFdEJSRlFzUlVGRFowSjFReXhIUVVSb1FpeEZRVVZITVV3c1QwRkdTQ3hEUVVWWExGVkJRVU4zVUN4VFFVRkVMRVZCUVZsRExGTkJRVm9zUlVGQk1FSTdRVUZEYWtNc1VVRkJUVU1zWlVGQlpTeERRVUZEZGtjc1MwRkJSQ3hIUVVGVGMwY3NVMEZCT1VJN1FVRkRRU3hSUVVGTk9Vb3NhMEpCUVd0Q2Jrb3NWVUZCVlhKQ0xFMUJRVllzUTBGQmFVSXNRMEZCUTNWVkxGbEJRVVFzUlVGQlpXWXNZMEZCWXpWUkxGRkJRV1FzUTBGQmRVSnVReXhKUVVGMFF5eERRVUZxUWl4RFFVRjRRanRCUVVOQkxGRkJRVTByVkN4cFFrRkJhVUl4UWl4alFVRmpkVUlzVlVGQlZXSXNZMEZCWXpWUkxGRkJRV1FzUTBGQmRVSnVReXhKUVVGcVF5eERRVUZrTEVWQlFYTkVLMG9zWlVGQmRFUXNRMEZCZGtJN08wRkJSVUZuU3l4dFFrRkJaVGxSTEZsQlFXWXNRMEZCTkVKNlJDeHhRa0ZCVTJkTUxGVkJRWEpETEVWQlFXbEVjMG9zV1VGQmFrUTdPMEZCUlVGYUxHbENRVUZoT1ZBc1YwRkJZaXhEUVVGNVFqSlJMR05CUVhwQ08wRkJRMFFzUjBGV1NEczdRVUZaUVN4VFFVRlBZaXhaUVVGUU8wRkJRMFE3TzBGQlJVUXNVMEZCVTBRc1ZVRkJWQ3hEUVVGeFFpOUNMRmRCUVhKQ0xFVkJRV3RET0VJc1YwRkJiRU1zUlVGQkswTndVeXhUUVVFdlF5eEZRVUV3UkhkT0xFOUJRVEZFTEVWQlFXMUZPMEZCUTJwRkxFMUJRVTFuUml4WFFVRlhTaXhaUVVGWmJFMHNSVUZCTjBJN1FVRkRRU3hOUVVGTlowc3NWMEZCVjBrc1dVRkJXUzlQTEZGQlFWb3NRMEZCY1VKdVF5eEpRVUYwUXp0QlFVTkJMRTFCUVUxblZTeGxRVUZsTEhkQ1FVRlhOVVlzVDBGQldDeEZRVUZ2UWl4VlFVRkRNMElzUTBGQlJDeEZRVUZKZEVjc1EwRkJTanRCUVVGQkxGZEJRVlVzZDBKQlFWTXNRMEZCUTBFc1EwRkJWaXhEUVVGV08wRkJRVUVzUjBGQmNFSXNRMEZCY2tJN1FVRkRRU3hOUVVGSk9FNHNaVUZCWlN4RFFVRnVRanRCUVVOQkxFMUJRVWx1UlN4TlFVRk5MRU5CUVZZN08wRkJSVUVzVDBGQlN5eEpRVUZKSzBNc1ZVRkJWQ3hKUVVGMVFucEZMRTlCUVhaQ0xFVkJRV2RETzBGQlF6bENiVVFzVjBGQlQzTkNMRlZCUVZBc1JVRkJiVUlzUlVGQlJUVlRMRkZCUVZGdFZDeFJRVUZXTEVWQlFXNUNMRVZCUVhsRFNpeFpRVUZaU0N4VlFVRmFMRU5CUVhwRE8wRkJRMFE3TzBGQlJVUXNkVUpCUVZGdFFpeFpRVUZTTEVWQlFYTkNMRlZCUVVOb1JpeE5RVUZFTEVWQlFWTnVReXhEUVVGVUxFVkJRV1U3UVVGRGJrTnRReXhoUVVGVFFTeFBRVUZQT0VJc1VVRkJVQ3hEUVVGVU8wRkJRMEVzVVVGQlRTOUhMR3RDUVVGclFtNUtMRlZCUVZWeVFpeE5RVUZXTEVOQlFXbENjMDRzUTBGQmFrSXNSVUZCYjBKcFJTeFJRVUZ3UWl4RFFVRjRRanRCUVVOQkxGRkJRVTF2UkN4bFFVRmxMREpDUVVGbGJrc3NaVUZCWml4RFFVRnlRanM3UVVGRlFTeFJRVUZKTEVOQlFVTnBSaXhQUVVGUGVGQXNjVUpCUVZOeFVTeFhRVUZvUWl4RFFVRk1MRVZCUVcxRE8wRkJRMnBEZFVNc2MwSkJRV2RDT0VJc1lVRkJZWHBVTEZOQlFUZENMRVZCUVhkRGRWTXNXVUZCV1c1SExFTkJRVm9zUlVGQlpXbEZMRkZCUVdZc1EwRkJlRU1zUlVGQmEwVXZSeXhsUVVGc1JTeEZRVUZ0Um1sR0xFMUJRVzVHTzBGQlEwRTdRVUZEUkRzN1FVRkZSQ3hSUVVGSlFTeFBRVUZQZUZBc2NVSkJRVk54VVN4WFFVRm9RaXhGUVVFMlFuSlFMRWRCUVRkQ0xFbEJRVzlEY1Uwc1MwRkJTMmxFTEVkQlFUZERMRVZCUVd0RU8wRkJRMmhFTEZWQlFVMTJReXhSUVVGUmVVSXNUMEZCVDNoUUxIRkNRVUZUY1ZFc1YwRkJhRUlzUlVGQk5rSnlVQ3hIUVVFM1FpeERRVUZwUXl0TkxFdEJRUzlETzBGQlEwRjFReXhaUVVGTlpDeFBRVUZQZUZBc2NVSkJRVk54VVN4WFFVRm9RaXhGUVVFMlFuSlFMRWRCUVRkQ0xFTkJRV2xEYzFBc1IwRkJka003TzBGQlJVRnhSU3hwUWtGQlYyWXNVVUZCV0N4RlFVRnhRamRHTEV0QlFYSkNMRVZCUVRSQ2RVTXNUVUZCVFhaRExFdEJRV3hETzBGQlEwRXNWVUZCVFRKR0xHVkJRV1ZETEZWQlFWVnFReXhYUVVGV0xFVkJRWFZDT0VJc1YwRkJka0lzUlVGQmIwTndVeXhUUVVGd1F5eEZRVUVyUXl4RlFVRkZNazBzV1VGQlJpeEZRVUZUZFVNc1VVRkJWQ3hGUVVFdlF5eERRVUZ5UWpzN1FVRkZRU3hWUVVGSlFTeFJRVUZSYTBRc1dVRkJXWFpOTEUxQlFYaENMRVZCUVdkRE8wRkJRemxDTWswc2FVSkJRVk5vVVN4WFFVRlVMRU5CUVhGQ09GQXNXVUZCY2tJN1FVRkRRVHRCUVVORU96dEJRVVZFUlN4bFFVRlRTeXhaUVVGVUxFTkJRWE5DVUN4WlFVRjBRaXhGUVVGdlEwVXNVMEZCVTI1U0xGRkJRVlFzUTBGQmEwSnpUQ3hMUVVGc1FpeERRVUZ3UXp0QlFVTkJPMEZCUTBRN08wRkJSVVFzVVVGQlNYbENMRTlCUVU5NFVDeHhRa0ZCVTNGUkxGZEJRV2hDTEVWQlFUWkNhazBzVFVGQmFrTXNSVUZCZVVNN1FVRkRka01zTWtKQlFWZHZUQ3hQUVVGUGVGQXNjVUpCUVZOeFVTeFhRVUZvUWl4RlFVRTJRbXBOTEUxQlFYaERPMEZCUTBGMVVTeHBRa0ZCVjJZc1VVRkJXQ3hGUVVGeFFuWkhMRWxCUVVsdlNDeGpRVUY2UWl4RlFVRjVReXhEUVVGRExFTkJRVEZETzBGQlEwUTdRVUZEUml4SFFUbENSRHRCUVN0Q1JEczdRVUZGUkN4VFFVRlRSU3hWUVVGVUxFTkJRWEZDWml4UlFVRnlRaXhGUVVFclFqZEdMRXRCUVM5Q0xFVkJRWE5ETmtjc1NVRkJkRU1zUlVGQk5FTTdRVUZETVVNc1RVRkJUVU1zWVVGQllUZE5MRTFCUVUxRExGTkJRVTRzUTBGQlowSTFSQ3hMUVVGb1FpeERRVUZ6UW5GRExFbEJRWFJDTEVOQlFUSkNhMDRzVTBGQlUyNVNMRkZCUVhCRExFVkJRVGhEYzB3c1MwRkJPVU1zUTBGQmJrSTdPMEZCUlVFNFJ5eGhRVUZYYWxFc1QwRkJXQ3hEUVVGdFFpeFZRVUZEY0VNc1VVRkJSQ3hGUVVGak8wRkJReTlDTEZGQlFVMXpVeXhWUVVGVmRGTXNVMEZCVXl0RkxGbEJRVlFzUTBGQmMwSjJTQ3h4UWtGQlUyZE1MRlZCUVM5Q0xFTkJRV2hDTzBGQlEwRXNVVUZCVFN0S0xGTkJRVk1zUTBGQlEwUXNUMEZCUkN4SFFVRlhSaXhKUVVFeFFqczdRVUZGUVhCVExHRkJRVk5wUWl4WlFVRlVMRU5CUVhOQ2VrUXNjVUpCUVZOblRDeFZRVUV2UWl4RlFVRXlReXRLTEUxQlFUTkRPMEZCUTBRc1IwRk1SRHRCUVUxRU96dEJRVVZFTEZOQlFWTXhReXhsUVVGVUxFTkJRVEJDYmxFc1QwRkJNVUlzUlVGQmJVTm5SeXhWUVVGdVF5eEZRVUVyUXp0QlFVTTNRM0JHTEZOQlFVOURMRTFCUVZBc1EwRkJZMklzVVVGQlVYcENMRTFCUVhSQ0xFVkJRVGhDZVVnc1ZVRkJPVUk3UVVGRFJEczdRVUZGUkN4VFFVRlRLMG9zV1VGQlZDeERRVUYxUWk5UUxFOUJRWFpDTEVWQlFXZERPRk1zVDBGQmFFTXNSVUZCZVVNN1FVRkRka01zVDBGQlN5eEpRVUZKT1V3c1UwRkJWQ3hKUVVGelFqaE1MRTlCUVhSQ0xFVkJRU3RDTzBGQlF6ZENMRkZCUVVrNVRDeFRRVUZLTEVWQlFXVTdRVUZEWWl4VlFVRkpPRXdzVVVGQlVUbE1MRk5CUVZJc1EwRkJTaXhGUVVGM1FqdEJRVU4wUW1oSUxHZENRVUZSZWtJc1RVRkJVaXhEUVVGbFRTeFRRVUZtTEVOQlFYbENReXhIUVVGNlFpeERRVUUyUW10SkxGTkJRVGRDTzBGQlEwUXNUMEZHUkN4TlFVVlBPMEZCUTB4b1NDeG5Ra0ZCVVhwQ0xFMUJRVklzUTBGQlpVMHNVMEZCWml4RFFVRjVRbkZFTEUxQlFYcENMRU5CUVdkRE9FVXNVMEZCYUVNN1FVRkRSRHRCUVVOR08wRkJRMFk3UVVGRFJqczdRVUZGUkN4VFFVRlRhVW9zVjBGQlZDeERRVUZ6UW1wUkxFOUJRWFJDTEVWQlFTdENka0lzVFVGQkwwSXNSVUZCZFVNN1FVRkRja050UXl4VFFVRlBReXhOUVVGUUxFTkJRV1ZpTEZGQlFWRjZRaXhOUVVGU0xFTkJRV1Y1VWl4TFFVRTVRaXhGUVVGeFF5dERMR2RDUVVGblFuUlZMRTFCUVdoQ0xFTkJRWEpETzBGQlEwUTdPMEZCUlVRc1UwRkJVMnRTTEhGQ1FVRlVMRU5CUVdkRGNVUXNVVUZCYUVNc1JVRkJNRU03UVVGRGVFTXNUVUZCU1VNc1YwRkJWeXhGUVVGbU8wRkJRMEVzVDBGQlN5eEpRVUZKYkUwc1VVRkJWQ3hKUVVGeFFtbE5MRkZCUVhKQ0xFVkJRU3RDTzBGQlF6ZENMRkZCUVUxMlZTeFRRVUZUZFZVc1UwRkJVMnBOTEZGQlFWUXNRMEZCWmp0QlFVTkJhMDBzWjBKQlFWbHNUU3hYUVVGWExFZEJRWFpDTzBGQlEwRm5UU3h2UWtGQlowSjBWU3hOUVVGb1FqdEJRVU5CTEZOQlFVc3NTVUZCU1hkSUxFbEJRVlFzU1VGQmFVSjRTQ3hOUVVGcVFpeEZRVUY1UWp0QlFVTjJRaXhWUVVGTmQwY3NVVUZCVVhoSExFOUJRVTkzU0N4SlFVRlFMRU5CUVdRN1FVRkRRV2RPTEd0Q1FVRlpMSGRDUVVGWGFFNHNTVUZCV0N4SlFVRnRRaXhIUVVGdVFpeEhRVUY1UW1oQ0xFdEJRWHBDTEVkQlFXbERMRWRCUVRkRE8wRkJRMFE3UVVGRFJHZFBMR2RDUVVGWkxFdEJRVm83UVVGRFJEdEJRVU5FTEUxQlFVMURMRlZCUVZVM1VpeFRRVUZUUXl4aFFVRlVMRU5CUVhWQ0xFOUJRWFpDTEVOQlFXaENPMEZCUTBFMFVpeFZRVUZSZUZJc1YwRkJVaXhEUVVGeFFrd3NVMEZCVXpoU0xHTkJRVlFzUTBGQmQwSkdMRkZCUVhoQ0xFTkJRWEpDTzBGQlEwRTFVaXhYUVVGVEsxSXNTVUZCVkN4RFFVRmpNVklzVjBGQlpDeERRVUV3UW5kU0xFOUJRVEZDTzBGQlEwUTdPMEZCUlVRc1UwRkJVMGdzWlVGQlZDeERRVUV3UW5SVkxFMUJRVEZDTEVWQlFXdERPMEZCUTJoRExFOUJRVXNzU1VGQlNYZElMRWxCUVZRc1NVRkJhVUo0U0N4TlFVRnFRaXhGUVVGNVFqdEJRVU4yUWl4UlFVRkpMSGRDUVVGVFFTeFBRVUZQZDBnc1NVRkJVQ3hEUVVGVUxFTkJRVW9zUlVGQk5FSTdRVUZETVVKNFNDeGhRVUZQZDBnc1NVRkJVQ3hKUVVGbGVFZ3NUMEZCVDNkSUxFbEJRVkFzU1VGQlpTeEpRVUU1UWp0QlFVTkVPMEZCUTBZN1FVRkRSQ3hUUVVGUGVFZ3NUVUZCVUR0QlFVTkVMRU03T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEpRMjVUYjBJNFVDeHhRanM3TzBGQlEyNUNMR2xEUVVGaE0wMHNWMEZCWWl4RlFVRXdRbmxTTEdGQlFURkNMRVZCUVhsRGRrb3NTVUZCZWtNc1JVRkJLME03UVVGQlFUczdRVUZCUVRzN1FVRkZOME1zVlVGQlMzZEtMRTlCUVV3c1IwRkJaU3gxUWtGQmRVSXhVaXhYUVVGMlFpeEhRVUZ4UXl4blFrRkJja01zUjBGQmQwUjVVaXhoUVVGNFJDeEhRVUYzUlN4MVFrRkJlRVVzUjBGQmEwZDJTaXhMUVVGTGFrUXNTVUZCVEN4RFFVRlZMRTFCUVZZc1EwRkJiRWNzUjBGQmMwZ3NOa0pCUVhKSk8wRkJSalpETzBGQlJ6bERPenM3UlVGS1owUXdUU3hMT3p0clFrRkJPVUpvUml4eFFqczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBsRFFVRTFVQ3h6UWpzN08wRkJRMjVDTEd0RFFVRmhUQ3hKUVVGaUxFVkJRVzFDTzBGQlFVRTdPMEZCUVVFN08wRkJSV3BDTEZWQlFVdG5WaXhQUVVGTUxFZEJRV1VzTmtOQlFUWkRhRllzU1VGQk4wTXNSMEZCYjBRc1IwRkJia1U3UVVGR2FVSTdRVUZIYkVJN096dEZRVXBwUkdsV0xFczdPMnRDUVVFdlFqVlZMSE5DT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdTVU5CUVc5RExIVkNPenM3UVVGRGJrSXNiVU5CUVdGNlF5eEpRVUZpTEVWQlFXMUNPMEZCUVVFN08wRkJRVUU3TzBGQlJXcENMRlZCUVV0blZpeFBRVUZNTEVkQlFXVXNPRUpCUVRoQ2FGWXNTVUZCT1VJc1IwRkJjVU1zWjBSQlFYQkVPMEZCUm1sQ08wRkJSMnhDT3pzN1JVRkthMFJwVml4TE96dHJRa0ZCYUVONFV5eDFRanM3T3pzN096czdPenM3T3pzN096czdRVU5CY2tJc1NVRkJUWGxUTEZkQlFWY3NSMEZCYWtJN1FVRkRRU3hKUVVGTlF5eGpRVUZqTEU5QlFYQkNPMEZCUTBFc1NVRkJUWFJVTEZOQlFWTnhWQ3hYUVVGWExFZEJRVEZDTzBGQlEwRXNTVUZCVFd4UExHMUNRVUZ0UW01R0xGTkJRVk1zUjBGQmJFTTdRVUZEUVN4SlFVRk5jMFlzZDBKQlFYZENkRVlzVTBGQlV5eEpRVUYyUXp0QlFVTkJMRWxCUVUxeFFpeGhRVUZoYVZNc1kwRkJZM1JVTEUxQlFXUXNSMEZCZFVJc1NVRkJNVU03UVVGRFFTeEpRVUZOZFZRc1lVRkJZWFpVTEZOQlFWTXNUMEZCTlVJN1FVRkRRU3hKUVVGTmQxUXNjVUpCUVhGQ2VGUXNVMEZCVXl4SlFVRndRenRCUVVOQkxFbEJRVTByUml4aFFVRmhMMFlzVTBGQlV5eFpRVUUxUWp0QlFVTkJMRWxCUVUxNVZDeGxRVUZsTEVkQlFYSkNPMEZCUTBFc1NVRkJUVGxMTEdGQlFXRXlTeXhqUVVGamRGUXNUVUZCWkN4SFFVRjFRaXhKUVVFeFF6dEJRVU5CTEVsQlFVMDJTaXhwUWtGQmFVSjVTaXhqUVVGamRGUXNUVUZCWkN4SFFVRjFRaXhKUVVFNVF6dEJRVU5CTEVsQlFVMHdWQ3hqUVVGakxFZEJRWEJDTzBGQlEwRXNTVUZCVFhCVExHdENRVUZyUWl4SFFVRjRRanRCUVVOQkxFbEJRVTB4UkN4UFFVRlBMRVZCUVdJN1FVRkRRU3hKUVVGTmIxRXNZMEZCWXl4cFFrRkJjRUk3TzBGQlJVRXNTVUZCVFd4RkxFOUJRVThzUjBGQllqdEJRVU5CTEVsQlFVMDBSeXhaUVVGWkxFZEJRV3hDTzBGQlEwRXNTVUZCVFdkQ0xFOUJRVThzUjBGQllqdEJRVU5CTEVsQlFVMTBVQ3hQUVVGUExGRkJRV0k3UVVGRFFTeEpRVUZOZFZBc2FVSkJRV2xDTEVkQlFYWkNPenRyUWtGRlpUdEJRVU5pTTFJc1owSkJSR0U3UVVGRlltMUdMRzlEUVVaaE8wRkJSMkpITERoRFFVaGhPMEZCU1dKcVJTeDNRa0ZLWVR0QlFVdGlhMU1zZDBKQlRHRTdRVUZOWWtNc2QwTkJUbUU3UVVGUFlucE9MSGRDUVZCaE8wRkJVV0l3VGl3MFFrRlNZVHRCUVZOaU9Vc3NkMEpCVkdFN1FVRlZZbXRDTEdkRFFWWmhPMEZCVjJJMlNpd3dRa0ZZWVR0QlFWbGljRk1zYTBOQldtRTdRVUZoWW5kSkxGbEJZbUU3UVVGallqUkhMSE5DUVdSaE8wRkJaV0puUWl4WlFXWmhPMEZCWjBKaWRGQXNXVUZvUW1FN1FVRnBRbUo0UlN4WlFXcENZVHRCUVd0Q1ltOVJMREJDUVd4Q1lUdEJRVzFDWWpKRU8wRkJia0poTEVNN096czdPenM3T3pzN096czdPenM3TzBGRGRrSm1MRWxCUVUwMVRpeHBRa0ZCYVVJc2RVZEJRWFpDTzBGQlEwRXNTVUZCVFVrc2FVSkJRV2xDTEZsQlFYWkNPenRyUWtGRlpUdEJRVU5pU2l4blEwRkVZVHRCUVVWaVNUdEJRVVpoTEVNN096czdPenM3T3pzN096czdPenM3TzFGRFJtSjNVQ3hWTEVkQlFVRkJMRlU3VVVGRFFVTXNUeXhIUVVGQlFTeFBPMUZCUTBGRExGRXNSMEZCUVVFc1VUdFJRVU5CUXl4clFpeEhRVUZCUVN4clFqdFJRVU5CUXl4M1FpeEhRVUZCUVN4M1FqdFJRVU5CUXl4UkxFZEJRVUZCTEZFN1VVRkRRVU1zV1N4SFFVRkJRU3haTzFGQlEwRkRMRkVzUjBGQlFVRXNVVHRSUVVOQlF5eFpMRWRCUVVGQkxGazdVVUZEUVVNc1Z5eEhRVUZCUVN4WE8xRkJRMEZETEU4c1IwRkJRVUVzVHp0UlFVTkJReXhOTEVkQlFVRkJMRTA3T3p0QlFVbEdMRk5CUVZOWUxGVkJRVlFzUTBGQmIwSnNUeXhIUVVGd1FpeEZRVUY1UWp0QlFVTjJRaXhUUVVGUE9FOHNZMEZCWXpsUExFZEJRV1FzVFVGQmRVSXNiVUpCUVRsQ08wRkJRMFE3TzBGQlJVUXNVMEZCVTIxUExFOUJRVlFzUTBGQmEwSnVUeXhIUVVGc1FpeEZRVUYxUWp0QlFVTnlRaXhUUVVGUE9FOHNZMEZCWXpsUExFZEJRV1FzVFVGQmRVSXNaMEpCUVRsQ08wRkJRMFE3TzBGQlJVUXNVMEZCVTI5UExGRkJRVlFzUTBGQmJVSndUeXhIUVVGdVFpeEZRVUYzUWp0QlFVTjBRaXhUUVVGUE9FOHNZMEZCWXpsUExFZEJRV1FzVFVGQmRVSXNhVUpCUVRsQ08wRkJRMFE3TzBGQlJVUXNVMEZCVTNGUExHdENRVUZVTEVOQlFUWkNjazhzUjBGQk4wSXNSVUZCYTBNN1FVRkRhRU1zVTBGQlQyMVBMRkZCUVZGdVR5eEhRVUZTTEV0QlFXZENRU3hKUVVGSllpeE5RVUZLTEV0QlFXVXNRMEZCTDBJc1NVRkJiME5wVUN4VFFVRlRjRThzU1VGQlNTeERRVUZLTEVOQlFWUXNRMEZCTTBNN1FVRkRSRHM3UVVGRlJDeFRRVUZUYzA4c2QwSkJRVlFzUTBGQmJVTjBUeXhIUVVGdVF5eEZRVUYzUXp0QlFVTjBReXhUUVVGUGJVOHNVVUZCVVc1UExFZEJRVklzUzBGQlowSkJMRWxCUVVsaUxFMUJRVW9zUzBGQlpTeERRVUV2UWl4SlFVRnZRMnRRTEcxQ1FVRnRRbkpQTEVsQlFVa3NRMEZCU2l4RFFVRnVRaXhEUVVFelF6dEJRVU5FT3p0QlFVVkVMRk5CUVZOMVR5eFJRVUZVTEVOQlFXMUNkazhzUjBGQmJrSXNSVUZCZDBJN1FVRkRkRUlzVTBGQlR6aFBMR05CUVdNNVR5eEhRVUZrTEUxQlFYVkNMR2xDUVVFNVFqdEJRVU5FT3p0QlFVVkVMRk5CUVZOM1R5eFpRVUZVTEVOQlFYVkNlRThzUjBGQmRrSXNSVUZCTkVJN1FVRkRNVUlzVTBGQlQzVlBMRk5CUVZOMlR5eEhRVUZVTEV0QlFXbENRU3hKUVVGSmVFSXNUMEZCU2l4RFFVRlpMRWRCUVZvc1RVRkJjVUlzUTBGQk4wTTdRVUZEUkRzN1FVRkZSQ3hUUVVGVGFWRXNVVUZCVkN4RFFVRnRRbnBQTEVkQlFXNUNMRVZCUVhkQ08wRkJRM1JDTEZOQlFVODRUeXhqUVVGak9VOHNSMEZCWkN4TlFVRjFRaXhwUWtGQmRrSXNTVUZCTkVOQkxGRkJRVkZCTEVkQlFUTkVPMEZCUTBRN08wRkJSVVFzVTBGQlV6QlBMRmxCUVZRc1EwRkJkVUl4VHl4SFFVRjJRaXhGUVVFMFFqdEJRVU14UWl4VFFVRlBRU3hQUVVGUExFOUJRVTlCTEVsQlFVbEdMRTlCUVZnc1MwRkJkVUlzVjBGQmNrTTdRVUZEUkRzN1FVRkZSQ3hUUVVGVE5rOHNWMEZCVkN4RFFVRnpRak5QTEVkQlFYUkNMRVZCUVRKQ08wRkJRM3BDTEZOQlFVOHNUMEZCVDBFc1IwRkJVQ3hMUVVGbExGZEJRWFJDTzBGQlEwUTdPMEZCUlVRc1UwRkJVemhQTEdGQlFWUXNRMEZCZDBJNVR5eEhRVUY0UWl4RlFVRTJRanRCUVVNelFpeFRRVUZQYUVZc1QwRkJUMjFHTEZOQlFWQXNRMEZCYVVKc1F5eFJRVUZxUWl4RFFVRXdRbGNzU1VGQk1VSXNRMEZCSzBKdlFpeEhRVUV2UWl4RFFVRlFPMEZCUTBRN08wRkJSVVFzVTBGQlV6WlBMRTFCUVZRc1EwRkJhVUkzVHl4SFFVRnFRaXhGUVVGelFqdEJRVU53UWl4TlFVRk5LMDhzVjBGQlZ5OVBMRWxCUVVsNFFpeFBRVUZLTEVOQlFWa3NSMEZCV2l4RFFVRnFRanRCUVVOQkxGTkJRVThzUTBGQlF5eERRVUZFTEVWQlFVa3NRMEZCU2l4RlFVRlBMRU5CUVZBc1JVRkJWWGRSTEVsQlFWWXNRMEZCWlN4VlFVRkRMMHdzUjBGQlJEdEJRVUZCTEZkQlFWTkJMRkZCUVZFNFRDeFJRVUZxUWp0QlFVRkJMRWRCUVdZc1EwRkJVRHRCUVVORU96dEJRVVZFTEZOQlFWTklMRTlCUVZRc1EwRkJhMEkxVHl4SFFVRnNRaXhGUVVGMVFqdEJRVU55UWl4TlFVRkpMRU5CUVVOQkxFZEJRVXdzUlVGQlZUdEJRVU5TTEZkQlFVOHNTVUZCVUR0QlFVTkVPenRCUVVWRUxFMUJRVWx0VHl4UlFVRlJiazhzUjBGQlVpeExRVUZuUW5WUExGTkJRVk4yVHl4SFFVRlVMRU5CUVhCQ0xFVkJRVzFETzBGQlEycERMRmRCUVU4c1EwRkJRMEVzU1VGQlNXSXNUVUZCV2p0QlFVTkVPenRCUVVWRUxGTkJRVThzUTBGQlEyNUZMRTlCUVU5eFN5eEpRVUZRTEVOQlFWbHlSaXhIUVVGYUxFVkJRV2xDWWl4TlFVRjZRanRCUVVORUxFTTdPenM3T3pzN096czdPenM3T3pzN096czdRVU16UlVRN08wRkJRMEU3TzFGQlIwVTRVQ3hITEVkQlFVRkJMRWM3VVVGRFFVTXNZU3hIUVVGQlFTeGhPMUZCUTBGRExGVXNSMEZCUVVFc1ZUdFJRVU5CUXl4WExFZEJRVUZCTEZjN1VVRkRRVU1zV1N4SFFVRkJRU3haTzFGQlEwRkRMRmNzUjBGQlFVRXNWenM3TzBGQlIwWXNTVUZCVFVNc1VVRkJVVHRCUVVOYVF5eFJRVUZOTEVWQlJFMDdRVUZGV2tNc1UwRkJUenRCUVVaTExFTkJRV1E3TzBGQlMwRXNVMEZCVTBvc1dVRkJWQ3hEUVVGMVFqTlhMRWxCUVhaQ0xFVkJRVFpDTzBGQlF6TkNMRTFCUVVrMlZ5eE5RVUZOUXl4SlFVRk9MRU5CUVZjNVZ5eEpRVUZZTEVOQlFVb3NSVUZCYzBJN1FVRkRjRUlzVjBGQlR6WlhMRTFCUVUxRExFbEJRVTRzUTBGQlZ6bFhMRWxCUVZnc1EwRkJVRHRCUVVORU96dEJRVVZFTEUxQlFVMW5XQ3haUVVGWlNDeE5RVUZOUlN4TFFVRk9MRU5CUVZrdlV5eEpRVUZhTEVOQlFXbENhRVVzU1VGQmFrSXNRMEZCYkVJN1FVRkRRU3hUUVVGUE5sY3NUVUZCVFVNc1NVRkJUaXhEUVVGWE9WY3NTVUZCV0N4SlFVRnRRbWRZTEZsQlFWa3NRMEZCZEVNN1FVRkRSRHM3UVVGRlJDeFRRVUZUU2l4WFFVRlVMRU5CUVhOQ2Rrb3NSMEZCZEVJc1JVRkJNa0k3UVVGRGVrSXNVMEZCVDNkS0xFMUJRVTFGTEV0QlFVNHNRMEZCV1RGS0xFZEJRVm9zUTBGQlVEdEJRVU5FT3p0QlFVVkVMRk5CUVZOclNpeEhRVUZVTEVOQlFXTnFVQ3hIUVVGa0xFVkJRVzFDVWl4RlFVRnVRaXhGUVVGMVFqdEJRVU55UWl4TlFVRkpMSGRDUVVGVFVTeEhRVUZVTEVOQlFVb3NSVUZCYlVJN1FVRkRha0lzVVVGQlRYRkdMRTlCUVU5eVN5eFBRVUZQY1Vzc1NVRkJVQ3hEUVVGWmNrWXNSMEZCV2l4RFFVRmlPMEZCUTBFc1YwRkJUMmxRTEVsQlFVazFTaXhKUVVGS0xFVkJRVlUzUml4RlFVRldMRU5CUVZBN1FVRkRSRHM3UVVGRlJDeFRRVUZQVVN4SlFVRkplRUlzVDBGQlNpeERRVUZaWjBJc1JVRkJXaXhMUVVGdFFpeERRVUV4UWp0QlFVTkVPenRCUVVWRUxGTkJRVk13VUN4aFFVRlVMRU5CUVhkQ2JGQXNSMEZCZUVJc1JVRkJOa0k3UVVGRE0wSXNUVUZCVFRKUUxHbENRVUZwUWl4RlFVRjJRanRCUVVOQlF5eGxRVUZoTlZBc1IwRkJZaXhGUVVGclFqSlFMR05CUVd4Q0xFVkJRV3RETEVWQlFXeERPMEZCUTBFc1UwRkJUMEVzWTBGQlVEdEJRVU5FT3p0QlFVVkVMRk5CUVZORExGbEJRVlFzUTBGQmRVSTFVQ3hIUVVGMlFpeEZRVUUwUWpKUUxHTkJRVFZDTEVWQlFUUkRla3dzU1VGQk5VTXNSVUZCYTBRN1FVRkRhRVFzVDBGQlN5eEpRVUZKTTBVc1IwRkJWQ3hKUVVGblFsTXNSMEZCYUVJc1JVRkJjVUk3UVVGRGJrSXNVVUZCU1N4M1FrRkJVMEVzU1VGQlNWUXNSMEZCU2l4RFFVRlVMRU5CUVVvc1JVRkJkMEk3UVVGRGRFSnhVU3h0UWtGQllUVlFMRWxCUVVsVUxFZEJRVW9zUTBGQllpeEZRVUYxUW05UkxHTkJRWFpDTEVWQlFYVkRla3dzUzBGQlMycE5MRTFCUVV3c1EwRkJXWE5JTEVkQlFWb3NRMEZCZGtNN1FVRkRRVHRCUVVORU96dEJRVVZFTEZGQlFVbFRMRWxCUVVsVUxFZEJRVW9zVFVGQllTeEpRVUZxUWl4RlFVRjFRanRCUVVOeVFpeDFRa0ZCU1c5UkxHTkJRVW9zUlVGQmIwSjZUQ3hMUVVGTGFrMHNUVUZCVEN4RFFVRlpjMGdzUjBGQldpeERRVUZ3UWl4RlFVRnpRMU1zU1VGQlNWUXNSMEZCU2l4RFFVRjBRenRCUVVORU8wRkJRMFk3UVVGRFJqczdRVUZGUkN4VFFVRlRORkFzVlVGQlZDeERRVUZ4UWxVc1IwRkJja0lzUlVGQk1FSTdRVUZEZUVJc1UwRkJUMEVzU1VGQlNYcFNMRTlCUVVvc1EwRkJXU3hWUVVGYUxFVkJRWGRDTEZWQlFVTkxMRXRCUVVRN1FVRkJRU3hYUVVGWExFMUJRVTFCTEUxQlFVMHNRMEZCVGl4RlFVRlRjMElzVjBGQlZDeEZRVUZxUWp0QlFVRkJMRWRCUVhoQ0xFTkJRVkE3UVVGRFJEczdRVUZGUkN4VFFVRlRjVkFzVjBGQlZDeERRVUZ6UWxNc1IwRkJkRUlzUlVGQk1rSTdRVUZEZWtJc1UwRkJUMEVzU1VGQlNYcFNMRTlCUVVvc1EwRkJXU3hQUVVGYUxFVkJRWEZDTEZWQlFVTkxMRXRCUVVRN1FVRkJRU3hYUVVGWFFTeE5RVUZOTEVOQlFVNHNSVUZCVTNGU0xGZEJRVlFzUlVGQldEdEJRVUZCTEVkQlFYSkNMRU5CUVZBN1FVRkRSQ3hET3pzN096czdPenM3T3pzN096czdPenM3UVVOb1JVUTdPMnRDUVU5bFF5eEpPenM3UVVGRlppeFRRVUZUUVN4SlFVRlVMRU5CUVdWRExGZEJRV1lzUlVGQk5FSkRMRTFCUVRWQ0xFVkJRVzlETzBGQlEyeERMRTFCUVVrc1EwRkJRMFFzVjBGQlRDeEZRVUZyUWp0QlFVTm9RaXhYUVVGUFJDeExRVUZOTEVWQlFVNHNSVUZCVlVVc1RVRkJWaXhEUVVGUU8wRkJRMFE3TzBGQlJVUXNUMEZCU3l4SlFVRkpNVkVzUjBGQlZDeEpRVUZuUWpCUkxFMUJRV2hDTEVWQlFYZENPenRCUVVWMFFpeFJRVUZKTERKQ1FVRlpRU3hQUVVGUE1WRXNSMEZCVUN4RFFVRmFMRU5CUVVvc1JVRkJPRUk3UVVGRE5VSTdRVUZEUkRzN1FVRkZSQ3hSUVVGSk1GRXNUMEZCVDBNc1kwRkJVQ3hEUVVGelFqTlJMRWRCUVhSQ0xFdEJRVGhDTEhkQ1FVRlRNRkVzVDBGQlR6RlJMRWRCUVZBc1EwRkJWQ3hEUVVGc1F5eEZRVUY1UkR0QlFVTjJSQ3hWUVVGSkxFTkJRVU41VVN4WlFVRlplbEVzUjBGQldpeERRVUZNTEVWQlFYVkNPMEZCUTNKQ2VWRXNiMEpCUVZsNlVTeEhRVUZhTEVsQlFXMUNMRVZCUVc1Q08wRkJRMFE3UVVGRFJIZFJMRmRCUVV0RExGbEJRVmw2VVN4SFFVRmFMRU5CUVV3c1JVRkJkVUl3VVN4UFFVRlBNVkVzUjBGQlVDeERRVUYyUWp0QlFVTkJPMEZCUTBRN08wRkJSVVFzVVVGQlNTeDFRa0ZCVVRCUkxFOUJRVTh4VVN4SFFVRlFMRU5CUVZJc1EwRkJTaXhGUVVFd1FqdEJRVU40UWl4VlFVRkpMRU5CUVVONVVTeFpRVUZaZWxFc1IwRkJXaXhEUVVGTUxFVkJRWFZDTzBGQlEzSkNlVkVzYjBKQlFWbDZVU3hIUVVGYUxFbEJRVzFDTEVWQlFXNUNPMEZCUTBRN1FVRkRSRFJSTEdkQ1FVRlZTQ3haUVVGWmVsRXNSMEZCV2l4RFFVRldMRVZCUVRSQ01GRXNUMEZCVHpGUkxFZEJRVkFzUTBGQk5VSTdRVUZEUVR0QlFVTkVPenRCUVVWRUxGRkJRVWtzTkVKQlFXRXdVU3hQUVVGUE1WRXNSMEZCVUN4RFFVRmlMRU5CUVVvc1JVRkJLMEk3UVVGRE4wSjVVU3hyUWtGQldYcFJMRWRCUVZvc1NVRkJiVUl3VVN4UFFVRlBNVkVzUjBGQlVDeEZRVUZaYmtVc1UwRkJXaXhEUVVGelFpeEpRVUYwUWl4RFFVRnVRanRCUVVOQk8wRkJRMFE3TzBGQlJVUTBWU3huUWtGQldYcFJMRWRCUVZvc1NVRkJiVUl3VVN4UFFVRlBNVkVzUjBGQlVDeERRVUZ1UWp0QlFVTkVPenRCUVVWRUxGTkJRVTk1VVN4WFFVRlFPMEZCUTBRN08wRkJSVVFzVTBGQlUwY3NVMEZCVkN4RFFVRnZRa2dzVjBGQmNFSXNSVUZCYVVORExFMUJRV3BETEVWQlFYbERPMEZCUTNaRExFOUJRVXNzU1VGQlNURkxMRWxCUVVrc1EwRkJZaXhGUVVGblFrRXNTVUZCU1RCTExFOUJRVTg1VVN4TlFVRXpRaXhGUVVGdFEyOUhMRWRCUVc1RExFVkJRWGRETzBGQlEzUkRMRkZCUVVrc2QwSkJRVk13U3l4UFFVRlBNVXNzUTBGQlVDeERRVUZVTEVOQlFVb3NSVUZCZVVJN1FVRkRka0o1U3l4clFrRkJXWHBMTEVOQlFWb3NTVUZCYVVKNVN5eFpRVUZaZWtzc1EwRkJXaXhMUVVGclFpeEZRVUZ1UXp0QlFVTkJkMHNzVjBGQlMwTXNXVUZCV1hwTExFTkJRVm9zUTBGQlRDeEZRVUZ4UWpCTExFOUJRVTh4U3l4RFFVRlFMRU5CUVhKQ08wRkJRMEU3UVVGRFJEczdRVUZGUkN4UlFVRkpMSFZDUVVGUk1Fc3NUMEZCVHpGTExFTkJRVkFzUTBGQlVpeERRVUZLTEVWQlFYZENPMEZCUTNSQ2VVc3NhMEpCUVZsNlN5eERRVUZhTEVsQlFXbENlVXNzV1VGQldYcExMRU5CUVZvc1MwRkJhMElzUlVGQmJrTTdRVUZEUVRSTExHZENRVUZWU0N4WlFVRlpla3NzUTBGQldpeERRVUZXTEVWQlFUQkNNRXNzVDBGQlR6RkxMRU5CUVZBc1EwRkJNVUk3UVVGRFFUdEJRVU5FT3p0QlFVVkVlVXNzWjBKQlFWbDZTeXhEUVVGYUxFbEJRV2xDTUVzc1QwRkJUekZMTEVOQlFWQXNRMEZCYWtJN1FVRkRSRHM3UVVGRlJDeFRRVUZQZVVzc1YwRkJVRHRCUVVORUxFTTdPenM3T3pzN096czdPenM3T3pzN096czdRVU5xUlVRN08xRkJTMFZKTEZrc1IwRkJRVUVzV1R0UlFVTkJReXhsTEVkQlFVRkJMR1U3VVVGRFFVTXNaMElzUjBGQlFVRXNaMEk3VVVGRFFVTXNVeXhIUVVGQlFTeFRPMUZCUTBGRExGVXNSMEZCUVVFc1ZUdFJRVU5CUXl4blFpeEhRVUZCUVN4blFqdFJRVU5CUXl4aExFZEJRVUZCTEdFN1VVRkRRVU1zVXl4SFFVRkJRU3hUT3pzN1FVRkhSaXhUUVVGVFVDeFpRVUZVTEVOQlFYVkNVU3hSUVVGMlFpeEZRVUZwUTBNc1YwRkJha01zUlVGQk9FTTdRVUZETlVORUxGZEJRVk40VHl4VlFVRlVMRU5CUVc5Q01FOHNXVUZCY0VJc1EwRkJhVU5FTEZkQlFXcERMRVZCUVRoRFJDeFJRVUU1UXp0QlFVTkJMRk5CUVU5RExGZEJRVkE3UVVGRFJEczdRVUZGUkN4VFFVRlRTaXhuUWtGQlZDeERRVUV5UW1wU0xFVkJRVE5DTEVWQlFTdENkVklzVFVGQkwwSXNSVUZCZFVNN1FVRkRja05CTEZOQlFVOHpUeXhWUVVGUUxFTkJRV3RDSzBvc1dVRkJiRUlzUTBGQkswSXpUU3hGUVVFdlFpeEZRVUZ0UTNWU0xFMUJRVzVETzBGQlEwUTdPMEZCUlVRc1UwRkJVMVlzWlVGQlZDeERRVUV3UWpGWUxFMUJRVEZDTEVWQlFXdERPMEZCUTJoRExFMUJRVTF4V1N4WlFVRlpMRFJDUVVGaGNsa3NUMEZCVDJsSUxFbEJRVkFzUlVGQllpeEpRVUU0UW1wSUxFMUJRVGxDTEVkQlFYVkRPRU1zVTBGQlUxa3NZVUZCVkN4RFFVRjFRakZFTEUxQlFYWkNMRVZCUVN0Q2FVa3NVMEZCZUVZN1FVRkRRU3hUUVVGUGNWRXNiMEpCUVc5Q1JDeFRRVUZ3UWl4RFFVRlFPMEZCUTBRN08wRkJSVVFzVTBGQlUwTXNiVUpCUVZRc1EwRkJPRUpETEZsQlFUbENMRVZCUVRSRE8wRkJRekZETEUxQlFVMURMRk5CUVZNc1NVRkJTVU1zVTBGQlNpeEZRVUZtTzBGQlEwRXNUVUZCVFVNc2FVSkJRV2xDUml4UFFVRlBSeXhsUVVGUUxFTkJRWFZDU2l4WlFVRjJRaXhGUVVGeFF5eFhRVUZ5UXl4RFFVRjJRanRCUVVOQkxGTkJRVTlITEdWQlFXVkZMRWxCUVdZc1EwRkJiMEpETEdsQ1FVRXpRanRCUVVORU96dEJRVVZFTEZOQlFWTnFRaXhUUVVGVUxFTkJRVzlDYTBJc1NVRkJjRUlzUlVGQk1FSnlUQ3hGUVVFeFFpeEZRVUU0UWp0QlFVTTFRaXhOUVVGTFFTeEhRVUZIY1V3c1NVRkJTQ3hOUVVGaExFTkJRVU1zUTBGQmJrSXNSVUZCYzBJN1FVRkRjRUk3UVVGRFJEczdRVUZGUkhaU0xGRkJRVTFETEZOQlFVNHNRMEZEUnpWRUxFdEJSRWdzUTBGRlIzRkRMRWxCUmtnc1EwRkZVVFpUTEV0QlFVczVWeXhSUVVaaUxFVkJSMGR0UXl4UFFVaElMRU5CUjFjc1ZVRkJRekJETEVWQlFVUTdRVUZCUVN4WFFVRlJLMUVzVlVGQlZTOVJMRVZCUVZZc1JVRkJZelJITEVWQlFXUXNRMEZCVWp0QlFVRkJMRWRCU0ZnN1FVRkpSRHM3UVVGRlJDeFRRVUZUYTBzc1owSkJRVlFzUTBGQk1rSnZRaXhKUVVFelFpeEZRVUZwUTBNc1VVRkJha01zUlVGQk1rTTdRVUZEZWtNc1RVRkJUVU1zVVVGQlVTeEZRVUZrTzBGQlEwRnlRaXhaUVVGVmJVSXNTVUZCVml4RlFVRm5RaXhWUVVGRGJGTXNSVUZCUkR0QlFVRkJMRmRCUVZGdFV5eFRRVUZUYmxNc1JVRkJWQ3hKUVVGbGIxTXNUVUZCVFd4V0xFbEJRVTRzUTBGQlZ6aERMRVZCUVZnc1EwRkJaaXhIUVVGblF5eEZRVUY0UXp0QlFVRkJMRWRCUVdoQ08wRkJRMEVzVTBGQlQyOVRMRXRCUVZBN1FVRkRSRHM3UVVGRlJDeFRRVUZUY0VJc1ZVRkJWQ3hEUVVGeFFtbENMRWxCUVhKQ0xFVkJRVEpDTzBGQlEzcENRU3hQUVVGTGNsQXNWVUZCVEN4RFFVRm5RbmxRTEZkQlFXaENMRU5CUVRSQ1NpeEpRVUUxUWp0QlFVTkVPenRCUVVWRUxGTkJRVk5tTEdGQlFWUXNRMEZCZDBKbExFbEJRWGhDTEVWQlFUaENTeXhKUVVFNVFpeEZRVUZ2UXp0QlFVTnNRMjVDTEZsQlFWVmpMRWxCUVZZN1FVRkRRVTBzWTBGQldVNHNTVUZCV2l4RlFVRnJRa3NzU1VGQmJFSTdRVUZEUkRzN1FVRkZSQ3hUUVVGVFF5eFhRVUZVTEVOQlFYTkNUaXhKUVVGMFFpeEZRVUUwUWtzc1NVRkJOVUlzUlVGQmEwTTdRVUZEYUVNc1RVRkJUVVVzVjBGQlYzWlhMRk5CUVZNNFVpeGpRVUZVTEVOQlFYZENkVVVzU1VGQmVFSXNRMEZCYWtJN1FVRkRRVXdzVDBGQlN6TldMRmRCUVV3c1EwRkJhVUpyVnl4UlFVRnFRanRCUVVORU96dEJRVVZFTEZOQlFWTnlRaXhUUVVGVUxFTkJRVzlDWXl4SlFVRndRaXhGUVVFd1FqdEJRVU40UWl4VFFVRlBRU3hMUVVGTFVTeGhRVUZNTEVWQlFWQXNSVUZCTmtJN1FVRkRNMEpTTEZOQlFVdEpMRmRCUVV3c1EwRkJhVUpLTEV0QlFVdFRMRlZCUVhSQ08wRkJRMFE3UVVGRFJpeERPenM3T3pzN096czdPenM3T3pzN096czdPenRCUTNSRlJEczdhMEpCVFdWRExGRTdPenRCUVVWbUxGTkJRVk5CTEZGQlFWUXNRMEZCYlVKRExFdEJRVzVDTEVWQlFUQkNReXhOUVVFeFFpeEZRVUZyUXp0QlFVTm9ReXhOUVVGSkxESkNRVUZaUkN4TFFVRmFMRXRCUVhOQ0xESkNRVUZaUXl4TlFVRmFMRU5CUVRGQ0xFVkJRU3RETzBGQlF6ZERMRmRCUVU4c1MwRkJVRHRCUVVORU96dEJRVVZFTEUxQlFVa3NVVUZCVDBRc1MwRkJVQ3g1UTBGQlQwRXNTMEZCVUN4bFFVRjNRa01zVFVGQmVFSXNlVU5CUVhkQ1FTeE5RVUY0UWl4RlFVRktMRVZCUVc5RE8wRkJRMnhETEZkQlFVOHNTMEZCVUR0QlFVTkVPenRCUVVWRUxFMUJRVTFxVVN4aFFVRmhMRVZCUVVWclVTeFhRVUZYTEVWQlFXSXNSVUZCYmtJN08wRkJSVUVzVFVGQlNTeDFRa0ZCVVVRc1RVRkJVaXhEUVVGS0xFVkJRWEZDTzBGQlEyNUNSU3h6UWtGRFJVZ3NVVUZCVVVFc1RVRkJUWEJTTEVkQlFVNHNRMEZCVlR0QlFVRkJMR0ZCUVUxNFFpeEZRVUZPTzBGQlFVRXNTMEZCVml4RFFVRlNMRWRCUVRoQ0xFVkJSR2hETEVWQlJVVTJVeXhQUVVGUGNsSXNSMEZCVUN4RFFVRlhPMEZCUVVFc1lVRkJUWGhDTEVWQlFVNDdRVUZCUVN4TFFVRllMRU5CUmtZc1JVRkhSVFJETEZWQlNFWTdRVUZOUkN4SFFWQkVMRTFCVDA4c1NVRkJTU3gzUWtGQlUybFJMRTFCUVZRc1EwRkJTaXhGUVVGelFqdEJRVU16UWtVc2MwSkJRV3RDU0N4TFFVRnNRaXhGUVVGNVFrTXNUVUZCZWtJc1JVRkJhVU5xVVN4VlFVRnFRenRCUVVWRUxFZEJTRTBzVFVGSFFUdEJRVU5NTEZkQlFVOW5VU3hWUVVGVlF5eE5RVUZxUWp0QlFVVkVPenRCUVVWRUxGTkJRVTlxVVN4WFFVRlhhMUVzVTBGQmJFSTdRVUZEUkRzN1FVRkZSQ3hUUVVGVFF5eHBRa0ZCVkN4RFFVRTBRa2dzUzBGQk5VSXNSVUZCYlVORExFMUJRVzVETEVWQlFUSkRhbEVzVlVGQk0wTXNSVUZCZFVRN1FVRkRja1FzVDBGQlN5eEpRVUZKTjBNc1IwRkJWQ3hKUVVGblFqaFRMRTFCUVdoQ0xFVkJRWGRDT3p0QlFVVjBRaXhSUVVGSkxIVkNRVUZSUkN4TFFVRlNMRU5CUVVvc1JVRkJiMEk3UVVGRGJFSXNWVUZCU1N3eVFrRkJXVUVzVFVGQlRUZFRMRWRCUVU0c1EwRkJXaXhEUVVGS0xFVkJRVFpDTzBGQlF6TkNOa01zYlVKQlFWZHJVU3hUUVVGWUxFTkJRWEZDTDFNc1IwRkJja0lzU1VGQk5FSXNSVUZCUlhKSExFdEJRVXNzU1VGQlVDeEZRVUUxUWp0QlFVTkVPMEZCUTBRN1FVRkRSRHM3UVVGRlJDeFJRVUZKYTFvc1RVRkJUVGRUTEVkQlFVNHNUVUZCWlRoVExFOUJRVTg1VXl4SFFVRlFMRU5CUVc1Q0xFVkJRV2RETzBGQlF6bENOa01zYVVKQlFWZHJVU3hUUVVGWUxFTkJRWEZDTDFNc1IwRkJja0lzU1VGQk5FSXNTMEZCTlVJN1FVRkRSRHRCUVVOR096dEJRVVZFTEU5QlFVc3NTVUZCU1VFc1NVRkJWQ3hKUVVGblFqWlRMRXRCUVdoQ0xFVkJRWFZDT3p0QlFVVnlRaXhSUVVGSkxIVkNRVUZSUVN4TFFVRlNMRU5CUVVvc1JVRkJiMEk3UVVGRGJFSXNWVUZCU1N3eVFrRkJXVU1zVDBGQlR6bFRMRWxCUVZBc1EwRkJXaXhEUVVGS0xFVkJRVGhDTzBGQlF6VkNOa01zYlVKQlFWZHJVU3hUUVVGWUxFTkJRWEZDTDFNc1NVRkJja0lzU1VGQk5FSXNSVUZCUldwRUxGRkJRVkVzU1VGQlZpeEZRVUUxUWp0QlFVTkVPMEZCUTBRN1FVRkRSRHM3UVVGRlJDeFJRVUZKT0ZZc1RVRkJUVGRUTEVsQlFVNHNUVUZCWlRoVExFOUJRVTg1VXl4SlFVRlFMRU5CUVc1Q0xFVkJRV2RETzBGQlF6bENOa01zYVVKQlFWZHJVU3hUUVVGWUxFTkJRWEZDTDFNc1NVRkJja0lzU1VGQk5FSXNTMEZCTlVJN1FVRkRSRHRCUVVOR096dEJRVVZFTEZOQlFVODJReXhWUVVGUU8wRkJRMFFzUXpzN096czdPenM3T3pzN096czdPenM3T3p0QlEyNUZSRHM3VVVGTlJUUkRMRWNzUjBGQlFVRXNSenRSUVVOQlJpeEhMRWRCUVVGQkxFYzdVVUZEUVhoSkxFMHNSMEZCUVVFc1RUdFJRVU5CYTFjc1l5eEhRVUZCUVN4ak8xRkJRMEV4Vml4UExFZEJRVUZCTEU4N1VVRkRRV3RGTEVjc1IwRkJRVUVzUnp0UlFVTkJlVklzVHl4SFFVRkJRU3hQTzFGQlEwRnVUU3hOTEVkQlFVRkJMRTA3VVVGRFFXOU5MRkVzUjBGQlFVRXNVVHRSUVVOQlF5eFBMRWRCUVVGQkxFODdVVUZEUVVNc1ZTeEhRVUZCUVN4Vk96czdRVUZIUml4VFFVRlROVTRzUjBGQlZDeERRVUZqYUVZc1IwRkJaQ3hGUVVGdFFtdEZMRWxCUVc1Q0xFVkJRWGxDTzBGQlEzWkNMRTFCUVVrM1JTeFJRVUZSVnl4SFFVRmFPMEZCUTBFc1QwRkJTeXhKUVVGSmRVWXNTVUZCU1N4RFFVRmlMRVZCUVdkQ1FTeEpRVUZKY2tJc1MwRkJTeTlGTEUxQlFYcENMRVZCUVdsRGIwY3NSMEZCYWtNc1JVRkJjME03TzBGQlJYQkRMRkZCUVVrN1FVRkRSbXhITEdOQlFWRkJMRTFCUVUwMlJTeExRVUZMY1VJc1EwRkJUQ3hEUVVGT0xFTkJRVkk3UVVGRlJDeExRVWhFTEVOQlIwVXNUMEZCVHpGRUxFTkJRVkFzUlVGQlZUdEJRVU5XTEdGQlFVOTRReXhMUVVGUU8wRkJSVVE3UVVGRFJqdEJRVU5FTEZOQlFVOUJMRXRCUVZBN1FVRkRSRHM3UVVGRlJDeFRRVUZUZVVZc1IwRkJWQ3hEUVVGak9VVXNSMEZCWkN4RlFVRnRRbXRGTEVsQlFXNUNMRVZCUVhsQ04wVXNTMEZCZWtJc1JVRkJaME03UVVGRE9VSXNUVUZCU1N4RFFVRkROa1VzUzBGQlN5OUZMRTFCUVZZc1JVRkJhMEk3UVVGRGFFSXNVVUZCU1N4M1FrRkJVMFVzUzBGQlZDeERRVUZLTEVWQlFYRkNPMEZCUTI1Q0xHRkJRVTl5UlN4UFFVRlBReXhOUVVGUUxFTkJRV01yUlN4SFFVRmtMRVZCUVcxQ1dDeExRVUZ1UWl4RFFVRlFPMEZCUTBRN1FVRkRSQ3hYUVVGUFZ5eE5RVUZOV0N4TFFVRmlPMEZCUTBRN08wRkJSVVFzVFVGQlNYZFVMRTlCUVU4M1V5eEhRVUZZTzBGQlEwRXNUMEZCU3l4SlFVRkpkVVlzU1VGQlNTeERRVUZpTEVWQlFXZENRU3hKUVVGSmNrSXNTMEZCU3k5RkxFMUJRVXdzUjBGQll5eERRVUZzUXl4RlFVRnhRMjlITEVkQlFYSkRMRVZCUVRCRE8wRkJRM2hETEZGQlFVa3NRMEZCUTNOT0xFdEJRVTB6VHl4TFFVRkxjVUlzUTBGQlRDeERRVUZPTEVOQlFVd3NSVUZCYzBJN1FVRkRjRUp6VGl4aFFVRlBRU3hMUVVGTE0wOHNTMEZCUzNGQ0xFTkJRVXdzUTBGQlRDeEpRVUZuUWl4RlFVRjJRanRCUVVORUxFdEJSa1FzVFVGRlR6dEJRVU5NYzA0c1lVRkJUMEVzUzBGQlN6TlBMRXRCUVV0eFFpeERRVUZNTEVOQlFVd3NRMEZCVUR0QlFVTkVPMEZCUTBZN08wRkJSVVFzVFVGQlNTeDNRa0ZCVTJ4SExFdEJRVlFzUTBGQlNpeEZRVUZ4UWp0QlFVTnVRbmRVTEZOQlFVMHpUeXhMUVVGTGNVSXNRMEZCVEN4RFFVRk9MRWxCUVd0Q2MwNHNTMEZCVFROUExFdEJRVXR4UWl4RFFVRk1MRU5CUVU0c1MwRkJiVUlzUlVGQmNrTTdRVUZEUVhaTExGZEJRVTlETEUxQlFWQXNRMEZCWXpSWUxFdEJRVTB6VHl4TFFVRkxjVUlzUTBGQlRDeERRVUZPTEVOQlFXUXNSVUZCSzBKc1J5eExRVUV2UWp0QlFVTkVMRWRCU0VRc1RVRkhUenRCUVVOTWQxUXNVMEZCVFROUExFdEJRVXR4UWl4RFFVRk1MRU5CUVU0c1NVRkJhMEpzUnl4TFFVRnNRanRCUVVORU96dEJRVVZFTEZOQlFVOVhMRWRCUVZBN1FVRkRSRHM3UVVGRlJDeFRRVUZUTVVRc1RVRkJWQ3hEUVVGcFFqQkVMRWRCUVdwQ0xFVkJRWE5DYTBVc1NVRkJkRUlzUlVGQk5FSTdRVUZETVVJc1RVRkJTVGRGTEZGQlFWRlhMRWRCUVZvN1FVRkRRU3hQUVVGTExFbEJRVWwxUml4SlFVRkpMRU5CUVdJc1JVRkJaMEpCTEVsQlFVbHlRaXhMUVVGTEwwVXNUVUZCVEN4SFFVRmpMRU5CUVd4RExFVkJRWEZEYjBjc1IwRkJja01zUlVGQk1FTTdRVUZEZUVOc1J5eFpRVUZSUVN4TlFVRk5Oa1VzUzBGQlMzRkNMRU5CUVV3c1EwRkJUaXhEUVVGU08wRkJRMFE3TzBGQlJVUXNVMEZCVDJ4SExFMUJRVTAyUlN4TFFVRkxjVUlzUTBGQlRDeERRVUZPTEVOQlFWQTdRVUZEUkRzN1FVRkZSQ3hUUVVGVGFVNHNZMEZCVkN4RFFVRjVRbmhUTEVkQlFYcENMRVZCUVRoQ09GTXNUVUZCT1VJc1JVRkJjME03UVVGQlFTdzJRa0ZETTBKRExFdEJSREpDTzBGQlJXeERMMWdzVjBGQlQyZFpMR05CUVZBc1EwRkJjMEpvVkN4SFFVRjBRaXhGUVVFeVFpdFRMRXRCUVROQ0xFVkJRV3RETzBGQlEyaERMMDRzVjBGQlN5eGxRVUZaTzBGQlFVVXNaVUZCVHpoT0xFOUJRVTlETEV0QlFWQXNRMEZCVUR0QlFVRnpRaXhQUVVSVU8wRkJSV2hEYWs4c1YwRkJTeXhsUVVGWk8wRkJRVVVzWTBGQlRTeEpRVUZKTmtrc1MwRkJTaXhEUVVGVkxIRkRRVUZ4UTI5R0xFdEJRWEpETEVkQlFUWkRMRWRCUVhaRUxFTkJRVTQ3UVVGQmJVVTdRVUZHZEVRc1MwRkJiRU03UVVGR2EwTTdPMEZCUTNCRExFOUJRVXNzU1VGQlNVRXNTMEZCVkN4SlFVRnJRa1FzVFVGQmJFSXNSVUZCTUVJN1FVRkJRU3hWUVVGcVFrTXNTMEZCYVVJN1FVRkxla0k3UVVGRFJqczdRVUZGUkN4VFFVRlRhbGNzVDBGQlZDeERRVUZyUW10RUxFZEJRV3hDTEVWQlFYVkNiMGNzUlVGQmRrSXNSVUZCTWtJN1FVRkRla0lzVDBGQlN5eEpRVUZKTjBjc1IwRkJWQ3hKUVVGblFsTXNSMEZCYUVJc1JVRkJjVUk3UVVGRGJrSXNVVUZCVFdsVUxFOUJRVTlxVkN4SlFVRkpWQ3hIUVVGS0xFTkJRV0k3UVVGRFFUWkhMRTlCUVVjMlRTeEpRVUZJTEVWQlFWTXhWQ3hIUVVGVUxFVkJRV05UTEVkQlFXUTdRVUZEUkR0QlFVTkdPenRCUVVWRUxGTkJRVk5uUWl4SFFVRlVMRU5CUVdGb1FpeEhRVUZpTEVWQlFXdENiMGNzUlVGQmJFSXNSVUZCYzBJN1FVRkRjRUlzVFVGQlRUaE5MRk5CUVZNc1JVRkJaanRCUVVOQkxFOUJRVXNzU1VGQlNUTlVMRWRCUVZRc1NVRkJaMEpUTEVkQlFXaENMRVZCUVhGQ08wRkJRMjVDTEZGQlFVMXBWQ3hQUVVGUGFsUXNTVUZCU1ZRc1IwRkJTaXhEUVVGaU8wRkJRMEV5VkN4WFFVRlBNMVFzUjBGQlVDeEpRVUZqTmtjc1IwRkJSelpOTEVsQlFVZ3NSVUZCVXpGVUxFZEJRVlFzUlVGQlkxTXNSMEZCWkN4RFFVRmtPMEZCUTBRN1FVRkRSQ3hUUVVGUGExUXNUVUZCVUR0QlFVTkVPenRCUVVWRUxGTkJRVk5VTEU5QlFWUXNRMEZCYTBKNlV5eEhRVUZzUWl4RlFVRjFRbTlITEVWQlFYWkNMRVZCUVRKQ08wRkJRM3BDTEUxQlFVMDRUU3hUUVVGVExFVkJRV1k3UVVGRFFTeFBRVUZMTEVsQlFVa3pWQ3hIUVVGVUxFbEJRV2RDVXl4SFFVRm9RaXhGUVVGeFFqdEJRVU51UWl4UlFVRk5hVlFzVDBGQlQycFVMRWxCUVVsVUxFZEJRVW9zUTBGQllqdEJRVU5CTEZGQlFVMDBWQ3hUUVVGVEwwMHNSMEZCUnpkSExFZEJRVWdzUlVGQlVUQlVMRWxCUVZJc1JVRkJZMnBVTEVkQlFXUXNRMEZCWmp0QlFVTkJhMVFzVjBGQlQwTXNUVUZCVUN4SlFVRnBRa1lzU1VGQmFrSTdRVUZEUkR0QlFVTkVMRk5CUVU5RExFMUJRVkE3UVVGRFJEczdRVUZGUkN4VFFVRlRUaXhWUVVGVUxFTkJRWEZDTlZNc1IwRkJja0lzUlVGQk1FSnZSeXhGUVVFeFFpeEZRVUU0UWp0QlFVTTFRaXhOUVVGTk9FMHNVMEZCVXl4RlFVRm1PMEZCUTBFc1QwRkJTeXhKUVVGSk0xUXNSMEZCVkN4SlFVRm5RbE1zUjBGQmFFSXNSVUZCY1VJN1FVRkRia0lzVVVGQlRXbFVMRTlCUVU5cVZDeEpRVUZKVkN4SFFVRktMRU5CUVdJN1FVRkRRU3hSUVVGTE5rY3NSMEZCUnpaTkxFbEJRVWdzUlVGQlV6RlVMRWRCUVZRc1JVRkJZMU1zUjBGQlpDeERRVUZNTEVWQlFUQkNPMEZCUTNoQ2ExUXNZVUZCVHpOVUxFZEJRVkFzU1VGQll6QlVMRWxCUVdRN1FVRkRRU3hoUVVGUGFsUXNTVUZCU1ZRc1IwRkJTaXhEUVVGUU8wRkJRMFE3UVVGRFJqdEJRVU5FTEZOQlFVOHlWQ3hOUVVGUU8wRkJRMFE3TzBGQlJVUXNVMEZCVTFBc1QwRkJWQ3hEUVVGclFqTlRMRWRCUVd4Q0xFVkJRWFZDYjBjc1JVRkJka0lzUlVGQk1rSTdRVUZEZWtJc1RVRkJUVGhOTEZOQlFWTXNSVUZCWmp0QlFVTkJMRTlCUVVzc1NVRkJTVE5VTEVkQlFWUXNTVUZCWjBKVExFZEJRV2hDTEVWQlFYRkNPMEZCUTI1Q0xGRkJRVTFwVkN4UFFVRlBhbFFzU1VGQlNWUXNSMEZCU2l4RFFVRmlPMEZCUTBFc1VVRkJUVzFLTEUxQlFVMTBReXhIUVVGSE4wY3NSMEZCU0N4RlFVRlJNRlFzU1VGQlVpeEZRVUZqYWxRc1IwRkJaQ3hEUVVGYU8wRkJRMEZyVkN4WFFVRlJlRXNzU1VGQlNTeERRVUZLTEV0QlFWVkJMRWxCUVVsdVNpeEhRVUZrTEVsQlFYRkNiVW9zU1VGQlNUZEtMRU5CUVdwRExFbEJRWFZETmtvc1NVRkJTU3hEUVVGS0xFdEJRVlZCTEVsQlFVa3NUMEZCU2l4RFFVRldMRWxCUVRCQ1FTeEpRVUZKTEVkQlFVb3NRMEZCYWtVN1FVRkRSRHRCUVVORUxGTkJRVTkzU3l4TlFVRlFPMEZCUTBRN08wRkJSVVFzVTBGQlV6Vk5MRTFCUVZRc1EwRkJhVUowUnl4SFFVRnFRaXhGUVVGelFtOUhMRVZCUVhSQ0xFVkJRVEJDTzBGQlEzaENMRTFCUVUwNFRTeFRRVUZUTEVWQlFXWTdRVUZEUVN4UFFVRkxMRWxCUVVrelZDeEhRVUZVTEVsQlFXZENVeXhIUVVGb1FpeEZRVUZ4UWp0QlFVTnVRaXhSUVVGTmFWUXNUMEZCVDJwVUxFbEJRVWxVTEVkQlFVb3NRMEZCWWp0QlFVTkJMRkZCUVVzMlJ5eEhRVUZITmswc1NVRkJTQ3hGUVVGVE1WUXNSMEZCVkN4RlFVRmpVeXhIUVVGa0xFTkJRVXdzUlVGQk1FSTdRVUZEZUVKclZDeGhRVUZQTTFRc1IwRkJVQ3hKUVVGak1GUXNTVUZCWkR0QlFVTkVPMEZCUTBZN1FVRkRSQ3hUUVVGUFF5eE5RVUZRTzBGQlEwUTdPMEZCUlVRc1UwRkJVMUlzVVVGQlZDeERRVUZ0UW5aS0xFZEJRVzVDTEVWQlFYZENhVXNzUjBGQmVFSXNSVUZCTmtJN1FVRkRNMElzVFVGQlRVWXNVMEZCVXl4RlFVRm1PMEZCUTBFdlNpeE5RVUZKY2swc1QwRkJTaXhEUVVGWkxGVkJRVU54U1N4RFFVRkVMRVZCUVU4N1FVRkRha0lyVGl4WFFVRlBMMDRzUTBGQlVDeEpRVUZaTERCQ1FVRlhhVThzUjBGQldDeEpRVUZyUWtFc1NVRkJTV3BQTEVOQlFVb3NRMEZCYkVJc1IwRkJNa0pwVHl4SFFVRjJRenRCUVVORUxFZEJSa1E3UVVGSFFTeFRRVUZQUml4TlFVRlFPMEZCUTBRc1F6czdPenM3T3pzN096czdPenM3UVVOb1NrUTdPMEZCUTBFN08wRkJSVUZITEU5QlFVOURMRTlCUVZBc1IwRkJhVUk3UVVGRFpteGlMRFJDUVVSbE8wRkJSV1pwVER0QlFVWmxMRU5CUVdwQ0xFTWlMQ0ptYVd4bElqb2lZMjkxYkdrdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUlvWm5WdVkzUnBiMjRnZDJWaWNHRmphMVZ1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNG9jbTl2ZEN3Z1ptRmpkRzl5ZVNrZ2UxeHVYSFJwWmloMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkSGx3Wlc5bUlHMXZaSFZzWlNBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MGJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbVlXTjBiM0o1S0NrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHUmxabWx1WlNBOVBUMGdKMloxYm1OMGFXOXVKeUFtSmlCa1pXWnBibVV1WVcxa0tWeHVYSFJjZEdSbFptbHVaU2hiWFN3Z1ptRmpkRzl5ZVNrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHVjRjRzl5ZEhOYlhDSkRiM1ZzYVZ3aVhTQTlJR1poWTNSdmNua29LVHRjYmx4MFpXeHpaVnh1WEhSY2RISnZiM1JiWENKRGIzVnNhVndpWFNBOUlHWmhZM1J2Y25rb0tUdGNibjBwS0hSb2FYTXNJR1oxYm1OMGFXOXVLQ2tnZTF4dWNtVjBkWEp1SUNJc0lpQmNkQzh2SUZSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RIWmhjaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpJRDBnZTMwN1hHNWNiaUJjZEM4dklGUm9aU0J5WlhGMWFYSmxJR1oxYm1OMGFXOXVYRzRnWEhSbWRXNWpkR2x2YmlCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktHMXZaSFZzWlVsa0tTQjdYRzVjYmlCY2RGeDBMeThnUTJobFkyc2dhV1lnYlc5a2RXeGxJR2x6SUdsdUlHTmhZMmhsWEc0Z1hIUmNkR2xtS0dsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkS1NCN1hHNGdYSFJjZEZ4MGNtVjBkWEp1SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1WNGNHOXlkSE03WEc0Z1hIUmNkSDFjYmlCY2RGeDBMeThnUTNKbFlYUmxJR0VnYm1WM0lHMXZaSFZzWlNBb1lXNWtJSEIxZENCcGRDQnBiblJ2SUhSb1pTQmpZV05vWlNsY2JpQmNkRngwZG1GeUlHMXZaSFZzWlNBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZElEMGdlMXh1SUZ4MFhIUmNkR2s2SUcxdlpIVnNaVWxrTEZ4dUlGeDBYSFJjZEd3NklHWmhiSE5sTEZ4dUlGeDBYSFJjZEdWNGNHOXlkSE02SUh0OVhHNGdYSFJjZEgwN1hHNWNiaUJjZEZ4MEx5OGdSWGhsWTNWMFpTQjBhR1VnYlc5a2RXeGxJR1oxYm1OMGFXOXVYRzRnWEhSY2RHMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtTmhiR3dvYlc5a2RXeGxMbVY0Y0c5eWRITXNJRzF2WkhWc1pTd2diVzlrZFd4bExtVjRjRzl5ZEhNc0lGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHBPMXh1WEc0Z1hIUmNkQzh2SUVac1lXY2dkR2hsSUcxdlpIVnNaU0JoY3lCc2IyRmtaV1JjYmlCY2RGeDBiVzlrZFd4bExtd2dQU0IwY25WbE8xeHVYRzRnWEhSY2RDOHZJRkpsZEhWeWJpQjBhR1VnWlhod2IzSjBjeUJ2WmlCMGFHVWdiVzlrZFd4bFhHNGdYSFJjZEhKbGRIVnliaUJ0YjJSMWJHVXVaWGh3YjNKMGN6dGNiaUJjZEgxY2JseHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pYTWdiMkpxWldOMElDaGZYM2RsWW5CaFkydGZiVzlrZFd4bGMxOWZLVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXRJRDBnYlc5a2RXeGxjenRjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVl5QTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJR1JsWm1sdVpTQm5aWFIwWlhJZ1puVnVZM1JwYjI0Z1ptOXlJR2hoY20xdmJua2daWGh3YjNKMGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0lEMGdablZ1WTNScGIyNG9aWGh3YjNKMGN5d2dibUZ0WlN3Z1oyVjBkR1Z5S1NCN1hHNGdYSFJjZEdsbUtDRmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThvWlhod2IzSjBjeXdnYm1GdFpTa3BJSHRjYmlCY2RGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z2JtRnRaU3dnZXlCbGJuVnRaWEpoWW14bE9pQjBjblZsTENCblpYUTZJR2RsZEhSbGNpQjlLVHRjYmlCY2RGeDBmVnh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdaR1ZtYVc1bElGOWZaWE5OYjJSMWJHVWdiMjRnWlhod2IzSjBjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXlJRDBnWm5WdVkzUnBiMjRvWlhod2IzSjBjeWtnZTF4dUlGeDBYSFJwWmloMGVYQmxiMllnVTNsdFltOXNJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUJUZVcxaWIyd3VkRzlUZEhKcGJtZFVZV2NwSUh0Y2JpQmNkRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dVM2x0WW05c0xuUnZVM1J5YVc1blZHRm5MQ0I3SUhaaGJIVmxPaUFuVFc5a2RXeGxKeUI5S1R0Y2JpQmNkRngwZlZ4dUlGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z0oxOWZaWE5OYjJSMWJHVW5MQ0I3SUhaaGJIVmxPaUIwY25WbElIMHBPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdZM0psWVhSbElHRWdabUZyWlNCdVlXMWxjM0JoWTJVZ2IySnFaV04wWEc0Z1hIUXZMeUJ0YjJSbElDWWdNVG9nZG1Gc2RXVWdhWE1nWVNCdGIyUjFiR1VnYVdRc0lISmxjWFZwY21VZ2FYUmNiaUJjZEM4dklHMXZaR1VnSmlBeU9pQnRaWEpuWlNCaGJHd2djSEp2Y0dWeWRHbGxjeUJ2WmlCMllXeDFaU0JwYm5SdklIUm9aU0J1YzF4dUlGeDBMeThnYlc5a1pTQW1JRFE2SUhKbGRIVnliaUIyWVd4MVpTQjNhR1Z1SUdGc2NtVmhaSGtnYm5NZ2IySnFaV04wWEc0Z1hIUXZMeUJ0YjJSbElDWWdPSHd4T2lCaVpXaGhkbVVnYkdsclpTQnlaWEYxYVhKbFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5RZ1BTQm1kVzVqZEdsdmJpaDJZV3gxWlN3Z2JXOWtaU2tnZTF4dUlGeDBYSFJwWmlodGIyUmxJQ1lnTVNrZ2RtRnNkV1VnUFNCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktIWmhiSFZsS1R0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURncElISmxkSFZ5YmlCMllXeDFaVHRjYmlCY2RGeDBhV1lvS0cxdlpHVWdKaUEwS1NBbUppQjBlWEJsYjJZZ2RtRnNkV1VnUFQwOUlDZHZZbXBsWTNRbklDWW1JSFpoYkhWbElDWW1JSFpoYkhWbExsOWZaWE5OYjJSMWJHVXBJSEpsZEhWeWJpQjJZV3gxWlR0Y2JpQmNkRngwZG1GeUlHNXpJRDBnVDJKcVpXTjBMbU55WldGMFpTaHVkV3hzS1R0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eUtHNXpLVHRjYmlCY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0c1ekxDQW5aR1ZtWVhWc2RDY3NJSHNnWlc1MWJXVnlZV0pzWlRvZ2RISjFaU3dnZG1Gc2RXVTZJSFpoYkhWbElIMHBPMXh1SUZ4MFhIUnBaaWh0YjJSbElDWWdNaUFtSmlCMGVYQmxiMllnZG1Gc2RXVWdJVDBnSjNOMGNtbHVaeWNwSUdadmNpaDJZWElnYTJWNUlHbHVJSFpoYkhWbEtTQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFvYm5Nc0lHdGxlU3dnWm5WdVkzUnBiMjRvYTJWNUtTQjdJSEpsZEhWeWJpQjJZV3gxWlZ0clpYbGRPeUI5TG1KcGJtUW9iblZzYkN3Z2EyVjVLU2s3WEc0Z1hIUmNkSEpsZEhWeWJpQnVjenRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR2RsZEVSbFptRjFiSFJGZUhCdmNuUWdablZ1WTNScGIyNGdabTl5SUdOdmJYQmhkR2xpYVd4cGRIa2dkMmwwYUNCdWIyNHRhR0Z5Ylc5dWVTQnRiMlIxYkdWelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG00Z1BTQm1kVzVqZEdsdmJpaHRiMlIxYkdVcElIdGNiaUJjZEZ4MGRtRnlJR2RsZEhSbGNpQTlJRzF2WkhWc1pTQW1KaUJ0YjJSMWJHVXVYMTlsYzAxdlpIVnNaU0EvWEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFJHVm1ZWFZzZENncElIc2djbVYwZFhKdUlHMXZaSFZzWlZzblpHVm1ZWFZzZENkZE95QjlJRHBjYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSTmIyUjFiR1ZGZUhCdmNuUnpLQ2tnZXlCeVpYUjFjbTRnYlc5a2RXeGxPeUI5TzF4dUlGeDBYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1Rb1oyVjBkR1Z5TENBbllTY3NJR2RsZEhSbGNpazdYRzRnWEhSY2RISmxkSFZ5YmlCblpYUjBaWEk3WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3hjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieUE5SUdaMWJtTjBhVzl1S0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwSUhzZ2NtVjBkWEp1SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkNodlltcGxZM1FzSUhCeWIzQmxjblI1S1RzZ2ZUdGNibHh1SUZ4MEx5OGdYMTkzWldKd1lXTnJYM0IxWW14cFkxOXdZWFJvWDE5Y2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y0NBOUlGd2lYQ0k3WEc1Y2JseHVJRngwTHk4Z1RHOWhaQ0JsYm5SeWVTQnRiMlIxYkdVZ1lXNWtJSEpsZEhWeWJpQmxlSEJ2Y25SelhHNGdYSFJ5WlhSMWNtNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWhmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5NZ1BTQmNJaTR2YzNKakwyMWhhVzR1YW5OY0lpazdYRzRpTENKcGJYQnZjblFnVEVsQ1gwRlVWRklnWm5KdmJTQW5MaTluYkc5aVlXeHpMMkYwZEhKcFluVjBaWE1uTzF4eVhHNXBiWEJ2Y25RZ1VrVWdabkp2YlNBbkxpOW5iRzlpWVd4ekwzSmxaMlY0Y0NjN1hISmNibHh5WEc1cGJYQnZjblFnZTF4eVhHNGdJR05zYjI1bFNGUk5URTFoY210MWNDeGNjbHh1SUNCM1lXeHJUbTlrWlhNc1hISmNibjBnWm5KdmJTQW5MaTlvWld4d1pYSnpMMlJ2YlNjN1hISmNibHh5WEc1cGJYQnZjblFnZXlCelpYUXNJR1p2Y2tWaFkyZ3NJRzFoY0N3Z2JXRndTMlY1Y3l3Z2RHOVBZbXBsWTNRZ2ZTQm1jbTl0SUNjdUwyaGxiSEJsY25NdmIySnFaV04wSnp0Y2NseHVYSEpjYm1sdGNHOXlkQ0JqYjNCNUlHWnliMjBnSnk0dmFHVnNjR1Z5Y3k5amIzQjVKenRjY2x4dVhISmNibWx0Y0c5eWRDQjdYSEpjYmlBZ2FYTkJjbkpoZVN4Y2NseHVJQ0JwYzBaMWJtTjBhVzl1TEZ4eVhHNGdJR2x6VDJKcVpXTjBMRnh5WEc0Z0lHbHpSVzF3ZEhrc1hISmNibjBnWm5KdmJTQW5MaTlvWld4d1pYSnpMMk5vWldOclpYSnpKenRjY2x4dVhISmNibWx0Y0c5eWRDQjdYSEpjYmlBZ2RHOURZVzFsYkVOaGMyVXNYSEpjYmlBZ1oyVjBVMmh2Y25ST1lXMWxMRnh5WEc1OUlHWnliMjBnSnk0dmFHVnNjR1Z5Y3k5amIyMXRiMjRuTzF4eVhHNWNjbHh1YVcxd2IzSjBJSHRjY2x4dUlDQm5aWFJQYm14NVZtRnNkV1Z6TEZ4eVhHNTlJR1p5YjIwZ0p5NHZVM1JoZEdVbk8xeHlYRzVjY2x4dWFXMXdiM0owSUh0Y2NseHVJQ0JqY21WaGRHVkJibVJCY0hCbGJtUlRkSGxzWlhNc1hISmNibjBnWm5KdmJTQW5MaTlXYVdWM0p6dGNjbHh1WEhKY2JtbHRjRzl5ZENCRGIyMXdiMjVsYm5SU1pXUmxabWx1WlVWeWNtOXlJR1p5YjIwZ0p5NHZaWEp5YjNKekwwTnZiWEJ2Ym1WdWRGSmxaR1ZtYVc1bFJYSnliM0luTzF4eVhHNXBiWEJ2Y25RZ1UyTnZjR1ZPWVcxbFEyOXNiR2x6YVc5dVJYSnliM0lnWm5KdmJTQW5MaTlsY25KdmNuTXZVMk52Y0dWT1lXMWxRMjlzYkdsemFXOXVSWEp5YjNJbk8xeHlYRzVjY2x4dVhISmNibU52Ym5OMElGWkJURlZGWDFSWlVFVlRJRDBnV3lkemRIbHNaU2NzSUNkamJHRnpjeWNzSUNkMllXeDFaU2NzSUNkaGRIUnljeWNzSUNkb2RHMXNKMTA3WEhKY2JtTnZibk4wSUZKRlUwVlNWa1ZFWDBoUFQwdFRYMDVCVFVWVElEMGdXeWR0YjNWdWRDY3NJQ2QxY0dSaGRHVW5MQ0FuY21WdGIzWmxKMTA3WEhKY2JtTnZibk4wSUVSRlJrRlZURlJmU0U5UFMxTWdQU0IwYjA5aWFtVmpkQ2hTUlZORlVsWkZSRjlJVDA5TFUxOU9RVTFGVXl3Z0tDa2dQVDRnS0NrZ1BUNGdlMzBwTzF4eVhHNWpiMjV6ZENCU1JWTkZVbFpGUkY5Q1NVNUVTVTVIWDA1QlRVVlRJRDBnVmtGTVZVVmZWRmxRUlZNdVkyOXVZMkYwS0ZzblpYWmxiblJ6Snl3Z0oyaHZiMnR6Snl3Z0oyeHBjM1JKZEdWdEp5d2dURWxDWDBGVVZGSXVVMFZNUmwwcE8xeHlYRzVjY2x4dVpYaHdiM0owSUh0Y2NseHVJQ0JrWldacGJtVXNYSEpjYmlBZ1oyVjBRMjl0Y0c5dVpXNTBUM0IwY3l4Y2NseHVJQ0J6YUc5eWRHVnVRbWx1WkdsdVowbGtMRnh5WEc0Z0lHbHpRMjl0Y0c5dVpXNTBMRnh5WEc0Z0lGWkJURlZGWDFSWlVFVlRMRnh5WEc0Z0lGSkZVMFZTVmtWRVgwSkpUa1JKVGtkZlRrRk5SVk1zWEhKY2JuMDdYSEpjYmx4eVhHNXNaWFFnUTA5TlVFOU9SVTVVWDBOUFZVNVVSVklnUFNBd08xeHlYRzVqYjI1emRDQkRUMDFRVDA1RlRsUlRJRDBnZTMwN1hISmNibHh5WEc1bWRXNWpkR2x2YmlCa1pXWnBibVVnS0c1aGJXVXNJRzFoY210MWNDd2dZbWx1WkdsdVozTXNJSE4wZVd4bGN5a2dlMXh5WEc0Z0lHTnZibk4wSUdGeVozTWdQU0JwYzA5aWFtVmpkQ2h1WVcxbEtTQS9JRzVoYldVZ09pQjdJRzVoYldVc0lHMWhjbXQxY0N3Z1ltbHVaR2x1WjNNc0lITjBlV3hsY3lCOU8xeHlYRzVjY2x4dUlDQnVZVzFsSUQwZ2RHOURZVzFsYkVOaGMyVW9ZWEpuY3k1dVlXMWxLVHRjY2x4dVhISmNiaUFnYVdZZ0tFTlBUVkJQVGtWT1ZGTmJibUZ0WlYwcElIdGNjbHh1SUNBZ0lIUm9jbTkzSUc1bGR5QkRiMjF3YjI1bGJuUlNaV1JsWm1sdVpVVnljbTl5S0c1aGJXVXBPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdZMjl1YzNRZ1kyOXRjRzl1Wlc1MFNGUk5URTFoY210MWNDQTlJR05zYjI1bFNGUk5URTFoY210MWNDaGhjbWR6TG0xaGNtdDFjQ2s3WEhKY2JpQWdZMjl0Y0c5dVpXNTBTRlJOVEUxaGNtdDFjQzVqYkdGemMweHBjM1F1WVdSa0tHNWhiV1VwTzF4eVhHNWNjbHh1SUNCRFQwMVFUMDVGVGxSZlEwOVZUbFJGVWlBOUlEQTdYSEpjYmlBZ1kyOXVjM1FnWTI5dGNHOXVaVzUwSUQwZ2UxeHlYRzRnSUNBZ2JtRnRaU3hjY2x4dUlDQWdJSE4wWVhSbE9pQjdJRnRNU1VKZlFWUlVVaTVUUlV4R1hUb2dlMzBnZlN4Y2NseHVJQ0FnSUhOMFlYUmxTV1E2SUc1aGJXVXNYSEpjYmlBZ0lDQnpkR0YwWlZCaGRHZzZJRnR1WVcxbFhTeGNjbHh1SUNBZ0lITjBZWFJsVG1GdFpYTTZJSHQ5TEZ4eVhHNGdJQ0FnYldGeWEzVndPaUJqYjIxd2IyNWxiblJJVkUxTVRXRnlhM1Z3TEZ4eVhHNGdJQ0FnWlhaaGJIVmhkR1U2SUh0OUxGeHlYRzRnSUNBZ2JHbHVhM002SUh0OUxGeHlYRzRnSUNBZ2FYTkRiMjF3YjI1bGJuUTZJSFJ5ZFdVc1hISmNiaUFnSUNCdmRYUmxjazVoYldWek9pQjdmU3hjY2x4dUlDQWdJRjlzYVc1cmN6b2dlMzBzWEhKY2JpQWdmVHRjY2x4dVhISmNiaUFnWjJGMGFHVnlRbWx1WkdsdVozTkdjbTl0VFdGeWEzVndLR052YlhCdmJtVnVkRWhVVFV4TllYSnJkWEFzSUdOdmJYQnZibVZ1ZENrN1hISmNibHh5WEc0Z0lHTnZibk4wSUc1dmNtMWhiR2w2WldSUGNIUnBiMjV6SUQwZ2JtOXliV0ZzYVhwbFZYTmxjazl3ZEdsdmJuTW9ZWEpuY3k1aWFXNWthVzVuY3l3Z2V5QnpkR0YwWlRvZ2UzMGdmU2s3WEhKY2JpQWdZMjl3ZVNoamIyMXdiMjVsYm5Rc0lHNXZjbTFoYkdsNlpXUlBjSFJwYjI1ektUdGNjbHh1WEhKY2JpQWdjSEpsY0dGeVpVSnBibVJwYm1keklDaGpiMjF3YjI1bGJuUXNJR052YlhCdmJtVnVkQzV6ZEdGMFpVbGtMQ0I3SUhOMFlYUmxVR0YwYURvZ1cxMHNJR3hwYm10ek9pQjdmU3dnYzNSaGRHVk9ZVzFsY3pvZ1kyOXRjRzl1Wlc1MExuTjBZWFJsVG1GdFpYTWdmU2s3WEhKY2JseHlYRzRnSUdOeVpXRjBaVUZ1WkVGd2NHVnVaRk4wZVd4bGN5Z2djSEpsY0dGeVpWTjBlV3hsY3loaGNtZHpMbk4wZVd4bGN5d2dZMjl0Y0c5dVpXNTBLU0FwTzF4eVhHNWNjbHh1SUNCeVpYUjFjbTRnUTA5TlVFOU9SVTVVVTF0dVlXMWxYU0E5SUdOdmJYQnZibVZ1ZER0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdaMkYwYUdWeVFtbHVaR2x1WjNOR2NtOXRUV0Z5YTNWd0lDaGpiMjF3YjI1bGJuUklWRTFNVFdGeWEzVndMQ0JqYjIxd2IyNWxiblFwSUh0Y2NseHVJQ0IzWVd4clRtOWtaWE1vWTI5dGNHOXVaVzUwU0ZSTlRFMWhjbXQxY0N3Z0tFaFVUVXhPYjJSbEtTQTlQaUI3WEhKY2JpQWdJQ0JqYjI1emRDQmlhVzVrYVc1blQzQjBjeUE5SUdGdVlXeDVlbVZDYVc1a2FXNW5LRWhVVFV4T2IyUmxLVHRjY2x4dVhISmNiaUFnSUNCcFppQW9JV0pwYm1ScGJtZFBjSFJ6S1NCN1hISmNiaUFnSUNBZ0lISmxkSFZ5Ymp0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQmpiMjV6ZENCaWFXNWthVzVuSUQwZ1kzSmxZWFJsUW1sdVpHbHVaeWhpYVc1a2FXNW5UM0IwY3k1dVlXMWxMQ0JqYjIxd2IyNWxiblFzSUVoVVRVeE9iMlJsS1R0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvWW1sdVpHbHVaMDl3ZEhNdWFYTkRiMjF3YjI1bGJuUXBJSHRjY2x4dUlDQWdJQ0FnYzJWMFEyOXRjRzl1Wlc1MEtHSnBibVJwYm1jc0lHSnBibVJwYm1kUGNIUnpLVHRjY2x4dUlDQWdJQ0FnU0ZSTlRFNXZaR1V1WTJ4aGMzTk1hWE4wTG1Ga1pDaE1TVUpmUVZSVVVpNVFVa1ZHU1ZnZ0t5QmlhVzVrYVc1bkxtbGtLVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCamIyMXdiMjVsYm5RdWMzUmhkR1ZiWW1sdVpHbHVaeTV1WVcxbFhTQTlJR0pwYm1ScGJtYzdYSEpjYmlBZ0lDQmlhVzVrYVc1bkxtMWhjbXQxY0M1amJHRnpjMHhwYzNRdVlXUmtLRXhKUWw5QlZGUlNMbEJTUlVaSldDQXJJR0pwYm1ScGJtY3VhV1FzSUdOdmJYQnZibVZ1ZEM1dVlXMWxJQ3NnSnkwbklDc2dZbWx1WkdsdVp5NXVZVzFsS1R0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvWW1sdVpHbHVaMDl3ZEhNdWFYTk1hWE4wS1NCN1hISmNiaUFnSUNBZ0lHTnZibk4wSUdsMFpXMU9iMlJsSUQwZ1NGUk5URTV2WkdVdVkyaHBiR1J5Wlc1Yk1GMDdYSEpjYmlBZ0lDQWdJRzF2WkdsbWVWUnZUR2x6ZEVKcGJtUnBibWNvWW1sdVpHbHVaeXdnYVhSbGJVNXZaR1VwTzF4eVhHNWNjbHh1SUNBZ0lDQWdhV1lnS0dselEyOXRjRzl1Wlc1MEtHbDBaVzFPYjJSbEtTa2dlMXh5WEc0Z0lDQWdJQ0FnSUhObGRFTnZiWEJ2Ym1WdWRDaGlhVzVrYVc1bkxteHBjM1JKZEdWdExDQm5aWFJEYjIxd2IyNWxiblJQY0hSektHbDBaVzFPYjJSbEtTazdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQzB4TzF4eVhHNGdJQ0FnSUNCOVhISmNibHh5WEc0Z0lDQWdJQ0JuWVhSb1pYSkNhVzVrYVc1bmMwWnliMjFOWVhKcmRYQW9hWFJsYlU1dlpHVXNJR0pwYm1ScGJtY3ViR2x6ZEVsMFpXMHBPMXh5WEc0Z0lDQWdJQ0J5WlhSMWNtNGdMVEU3WEhKY2JpQWdJQ0I5WEhKY2JpQWdmU2s3WEhKY2JseHlYRzRnSUhKbGRIVnliaUJqYjIxd2IyNWxiblE3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlITmxkRU52YlhCdmJtVnVkQ0FvWTI5dGNHOXVaVzUwUW1sdVpHbHVaeXdnYzNWaVEyOXRjRzl1Wlc1MFQzQjBjeWtnZTF4eVhHNGdJR052Ym5OMElITjBZWFJsVG1GdFpYTWdQU0JQWW1wbFkzUXVZWE56YVdkdUtHTnZiWEJ2Ym1WdWRFSnBibVJwYm1jdWMzUmhkR1ZPWVcxbGN5d2djM1ZpUTI5dGNHOXVaVzUwVDNCMGN5NWpiMjF3YjI1bGJuUXVjM1JoZEdWT1lXMWxjeWs3WEhKY2JpQWdiR1YwSUhOMFlYUmxTV1FnUFNCemRXSkRiMjF3YjI1bGJuUlBjSFJ6TG1OdmJYQnZibVZ1ZEM1dVlXMWxJQ3NnSjNnbklDc2dRMDlOVUU5T1JVNVVYME5QVlU1VVJWSXJLenRjY2x4dVhISmNiaUFnYVdZZ0tITjFZa052YlhCdmJtVnVkRTl3ZEhNdWMzUmhkR1ZPWVcxbEtTQjdYSEpjYmlBZ0lDQnBaaUFvYzNSaGRHVk9ZVzFsYzF0emRXSkRiMjF3YjI1bGJuUlBjSFJ6TG5OMFlYUmxUbUZ0WlYwcElIdGNjbHh1SUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRk5qYjNCbFRtRnRaVU52Ykd4cGMybHZia1Z5Y205eUtITjFZa052YlhCdmJtVnVkRTl3ZEhNdWMzUmhkR1ZPWVcxbEtUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J6ZEdGMFpVbGtJRDBnYzNWaVEyOXRjRzl1Wlc1MFQzQjBjeTV6ZEdGMFpVNWhiV1U3WEhKY2JpQWdJQ0JqYjIxd2IyNWxiblJDYVc1a2FXNW5Mbk4wWVhSbFRtRnRaWE5iYzNSaGRHVkpaRjBnUFNCMGNuVmxPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdZMjl3ZVNoamIyMXdiMjVsYm5SQ2FXNWthVzVuTENCemRXSkRiMjF3YjI1bGJuUlBjSFJ6TG1OdmJYQnZibVZ1ZENrN1hISmNibHh5WEc0Z0lISmxkSFZ5YmlCUFltcGxZM1F1WVhOemFXZHVLQ0JqYjIxd2IyNWxiblJDYVc1a2FXNW5MQ0I3WEhKY2JpQWdJQ0JwWkRvZ2MzUmhkR1ZKWkN4Y2NseHVJQ0FnSUhOMFlYUmxTV1FzWEhKY2JpQWdJQ0J1WVcxbE9pQnpkR0YwWlVsa0xGeHlYRzRnSUNBZ2MzUmhkR1ZPWVcxbE9pQnpkV0pEYjIxd2IyNWxiblJQY0hSekxuTjBZWFJsVG1GdFpTeGNjbHh1SUNBZ0lITjBZWFJsVUdGMGFEb2dZMjl0Y0c5dVpXNTBRbWx1WkdsdVp5NXpkR0YwWlZCaGRHZ3VZMjl1WTJGMEtITjBZWFJsU1dRcExGeHlYRzRnSUNBZ2JXRnlhM1Z3T2lCemRXSkRiMjF3YjI1bGJuUlBjSFJ6TG1OdmJYQnZibVZ1ZEM1dFlYSnJkWEF1WTJ4dmJtVk9iMlJsS0hSeWRXVXBMRnh5WEc0Z0lDQWdhWE5EYjIxd2IyNWxiblE2SUhSeWRXVXNYSEpjYmlBZ0lDQnpkR0YwWlU1aGJXVnpMRnh5WEc0Z0lDQWdYMnhwYm10ek9pQlBZbXBsWTNRdVlYTnphV2R1S0h0OUxDQnpkV0pEYjIxd2IyNWxiblJQY0hSekxteHBibXR6S1N4Y2NseHVJQ0FnSUc5MWRHVnlUbUZ0WlhNNklFOWlhbVZqZEM1aGMzTnBaMjRvZTMwc0lITjFZa052YlhCdmJtVnVkRTl3ZEhNdWNtVjJUR2x1YTNNcExGeHlYRzRnSUgwcE8xeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJ3Y21Wd1lYSmxRbWx1WkdsdVozTWdLR052YlhCdmJtVnVkQ3dnWTNWeWNtVnVkRk4wWVhSbFNXUXNJSEJoY21WdWRFTnZiWEJ2Ym1WdWRDa2dlMXh5WEc0Z0lHTnZibk4wSUdOdmJYQnZibVZ1ZEZkeVlYQndaWElnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLQ2RrYVhZbktUdGNjbHh1SUNCamIyMXdiMjVsYm5RdWJXRnlhM1Z3TG5ObGRFRjBkSEpwWW5WMFpTaE1TVUpmUVZSVVVpNUNTVTVFU1U1SFgwbEVMQ0J6YUc5eWRHVnVRbWx1WkdsdVowbGtLQ0JqZFhKeVpXNTBVM1JoZEdWSlpDQXJJRXhKUWw5QlZGUlNMbE5VUVZSRlgwUkZURWxOU1ZSRlVpQXJJRXhKUWw5QlZGUlNMbE5GVEVZZ0tTazdYSEpjYmlBZ1kyOXRjRzl1Wlc1MFYzSmhjSEJsY2k1aGNIQmxibVJEYUdsc1pDaGpiMjF3YjI1bGJuUXViV0Z5YTNWd0tUdGNjbHh1SUNCamIyMXdiMjVsYm5RdWMzUmhkR1ZRWVhSb0lEMGdjR0Z5Wlc1MFEyOXRjRzl1Wlc1MExuTjBZWFJsVUdGMGFDNWpiMjVqWVhRb1kyOXRjRzl1Wlc1MExuTjBZWFJsU1dRcE8xeHlYRzRnSUdOdmJYQnZibVZ1ZEM1emRHRjBaVTVoYldWeklEMGdjR0Z5Wlc1MFEyOXRjRzl1Wlc1MExuTjBZWFJsVG1GdFpYTTdYSEpjYmx4eVhHNGdJR052Ym5OMElITjFZa052YlhCdmJtVnVkSE1nUFNCYlhUdGNjbHh1WEhKY2JpQWdabTl5UldGamFDaGpiMjF3YjI1bGJuUXVjM1JoZEdVc0lDaGlhVzVrYVc1bkxDQmlhVzVrYVc1blRtRnRaU2tnUFQ0Z2UxeHlYRzRnSUNBZ1kyOXVjM1FnYjJ4a1FtbHVaR2x1WjBsa0lEMGdZbWx1WkdsdVp5NXBaRHRjY2x4dUlDQWdJR052Ym5OMElHNWxkMEpwYm1ScGJtZEpaQ0E5SUdOMWNuSmxiblJUZEdGMFpVbGtJQ3NnVEVsQ1gwRlVWRkl1VTFSQlZFVmZSRVZNU1UxSlZFVlNJQ3NnWW1sdVpHbHVaMDVoYldVN1hISmNiaUFnSUNCamIyNXpkQ0J6YUc5eWRFbGtJRDBnYzJodmNuUmxia0pwYm1ScGJtZEpaQ2h1WlhkQ2FXNWthVzVuU1dRcE8xeHlYRzVjY2x4dUlDQWdJR2xtSUNoaWFXNWthVzVuTG0xaGNtdDFjQ2tnZTF4eVhHNGdJQ0FnSUNCamIyNXpkQ0JpYVc1a2FXNW5UbTlrWlNBOUlHTnZiWEJ2Ym1WdWRGZHlZWEJ3WlhJdWNYVmxjbmxUWld4bFkzUnZjaWduTGljZ0t5Qk1TVUpmUVZSVVVpNVFVa1ZHU1ZnZ0t5QnZiR1JDYVc1a2FXNW5TV1FwTzF4eVhHNGdJQ0FnSUNCaWFXNWthVzVuVG05a1pTNXpaWFJCZEhSeWFXSjFkR1VvVEVsQ1gwRlVWRkl1UWtsT1JFbE9SMTlKUkN3Z2MyaHZjblJKWkNrN1hISmNiaUFnSUNBZ0lHSnBibVJwYm1kT2IyUmxMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9URWxDWDBGVVZGSXVVRkpGUmtsWUlDc2diMnhrUW1sdVpHbHVaMGxrS1R0Y2NseHVJQ0FnSUNBZ1ltbHVaR2x1WjA1dlpHVXVZMnhoYzNOTWFYTjBMbUZrWkNoTVNVSmZRVlJVVWk1UVVrVkdTVmdnS3lCdVpYZENhVzVrYVc1blNXUXBPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUU5aWFtVmpkQzVoYzNOcFoyNG9ZbWx1WkdsdVp5d2dlMXh5WEc0Z0lDQWdJQ0J6ZEdGMFpWQmhkR2c2SUdOdmJYQnZibVZ1ZEM1emRHRjBaVkJoZEdndWMyeHBZMlVvS1N4Y2NseHVJQ0FnSUNBZ2FHOXZhM002SUU5aWFtVmpkQzVoYzNOcFoyNG9lMzBzSUVSRlJrRlZURlJmU0U5UFMxTXNJR0pwYm1ScGJtY3VhRzl2YTNNcExGeHlYRzRnSUNBZ0lDQnBaRG9nYm1WM1FtbHVaR2x1WjBsa0xGeHlYRzRnSUNBZ0lDQnphRzl5ZEVsa0xGeHlYRzRnSUNBZ2ZTazdYSEpjYmx4eVhHNGdJQ0FnY0hKbGNHRnlaVkpsWVdOMGFYWmxSblZ1WTNNb1ltbHVaR2x1Wnl3Z1kyOXRjRzl1Wlc1MEtUdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb1ltbHVaR2x1Wnk1cGMweHBjM1FwSUh0Y2NseHVJQ0FnSUNBZ1ltbHVaR2x1Wnk1emRHRjBaVkJoZEdndWNIVnphQ2hpYVc1a2FXNW5UbUZ0WlNrN1hISmNiaUFnSUNBZ0lHSnBibVJwYm1jdWMzUmhkR1ZPWVcxbGN5QTlJR052YlhCdmJtVnVkQzV6ZEdGMFpVNWhiV1Z6TzF4eVhHNWNjbHh1SUNBZ0lDQWdjSEpsY0dGeVpVSnBibVJwYm1keklDaGlhVzVrYVc1bkxteHBjM1JKZEdWdExDQnVaWGRDYVc1a2FXNW5TV1FnS3lCTVNVSmZRVlJVVWk1VFZFRlVSVjlFUlV4SlRVbFVSVklnS3lCTVNVSmZRVlJVVWk1SlZFVk5JQ3NnWW1sdVpHbHVaeTVzYVhOMFNYUmxiUzV1WVcxbExDQmlhVzVrYVc1bktUdGNjbHh1SUNBZ0lDQWdjbVYwZFhKdU8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJR2xtSUNoaWFXNWthVzVuTG1selEyOXRjRzl1Wlc1MEtTQjdYSEpjYmlBZ0lDQWdJSE4xWWtOdmJYQnZibVZ1ZEhNdWNIVnphQ2hpYVc1a2FXNW5LVHRjY2x4dUlDQWdJSDFjY2x4dUlDQjlLVHRjY2x4dVhISmNiaUFnYzJWMGRYQkRiMjF3YjI1bGJuUnpUR2x1YTNNb1kyOXRjRzl1Wlc1MExDQndZWEpsYm5SRGIyMXdiMjVsYm5RcE8xeHlYRzRnSUdOdmJYQnZibVZ1ZEM1MFpXMXdiR0YwWlNBOUlHTnZiWEJ2Ym1WdWRDNXRZWEpyZFhBdVkyeHZibVZPYjJSbEtIUnlkV1VwTzF4eVhHNWNjbHh1SUNCemRXSkRiMjF3YjI1bGJuUnpMbVp2Y2tWaFkyZ29LSE4xWWtOdmJYQnZibVZ1ZENrZ1BUNGdlMXh5WEc0Z0lDQWdjSEpsY0dGeVpVSnBibVJwYm1keklDaHpkV0pEYjIxd2IyNWxiblFzSUdOMWNuSmxiblJUZEdGMFpVbGtJQ3NnVEVsQ1gwRlVWRkl1VTFSQlZFVmZSRVZNU1UxSlZFVlNJQ3NnYzNWaVEyOXRjRzl1Wlc1MExuTjBZWFJsU1dRc0lHTnZiWEJ2Ym1WdWRDazdYSEpjYmlBZ2ZTazdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUhCeVpYQmhjbVZTWldGamRHbDJaVVoxYm1OeklDaGlhVzVrYVc1bkxDQmpiMjF3YjI1bGJuUkVZWFJoS1NCN1hISmNiaUFnVmtGTVZVVmZWRmxRUlZNdVptOXlSV0ZqYUNnb2RIbHdaU2tnUFQ0Z2UxeHlYRzRnSUNBZ1kyOXVjM1FnY21WaFkzUnBkbVZHZFc1aklEMGdZbWx1WkdsdVoxdDBlWEJsWFR0Y2NseHVJQ0FnSUdsbUlDZ2hjbVZoWTNScGRtVkdkVzVqS1NCN1hISmNiaUFnSUNBZ0lISmxkSFZ5Ymp0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQmlhVzVrYVc1bkxtVjJZV3gxWVhSbFczUjVjR1ZkSUQwZ2NISmxjR0Z5WlZKbFlXTjBhWFpsUm5WdVl5aGlhVzVrYVc1bkxDQjBlWEJsTENCeVpXRmpkR2wyWlVaMWJtTXNJR052YlhCdmJtVnVkRVJoZEdFcFhISmNiaUFnZlNrN1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJSEJ5WlhCaGNtVlNaV0ZqZEdsMlpVWjFibU1nS0dKcGJtUnBibWNzSUhSNWNHVXNJSEpsWVdOMGFYWmxSblZ1WXl3Z1kyOXRjRzl1Wlc1MFJHRjBZU2tnZTF4eVhHNGdJR052Ym5OMElHUmxjR1Z1WkdWdVkybGxjMDVoYldWeklEMGdaMlYwUkdWd1pXNWtaVzVqYVdWelRtRnRaWE1vY21WaFkzUnBkbVZHZFc1aktUdGNjbHh1WEhKY2JpQWdaR1Z3Wlc1a1pXNWphV1Z6VG1GdFpYTXVabTl5UldGamFDZ29aR1Z3Wlc1a1pXNWplVTVoYldVcElEMCtJSHRjY2x4dUlDQWdJR2xtSUNocGMwVnRjSFI1S0dOdmJYQnZibVZ1ZEVSaGRHRXVjM1JoZEdWYlpHVndaVzVrWlc1amVVNWhiV1ZkS1NrZ2UxeHlYRzRnSUNBZ0lDQmpiMjF3YjI1bGJuUkVZWFJoTG5OMFlYUmxXMlJsY0dWdVpHVnVZM2xPWVcxbFhTQTlJR055WldGMFpVSnBibVJwYm1jb1pHVndaVzVrWlc1amVVNWhiV1VzSUdOdmJYQnZibVZ1ZEVSaGRHRXBPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdOdmJYQnZibVZ1ZEVSaGRHRXVjM1JoZEdWYlpHVndaVzVrWlc1amVVNWhiV1ZkTG1SbGNHVnVaR0Z1ZEhOYklHSnBibVJwYm1jdWJtRnRaU0FySUNjNkp5QXJJSFI1Y0dVZ1hTQTlJSHNnYm1GdFpUb2dZbWx1WkdsdVp5NXVZVzFsTENCMGVYQmxJSDA3WEhKY2JpQWdmU2s3WEhKY2JseHlYRzRnSUhKbGRIVnliaUFvZG1Gc2RXVnpMQ0JqYjIxd2IyNWxiblJKYm5SbGNtWmhZMlVwSUQwK0lHTnZiWEIxZEdVZ0tISmxZV04wYVhabFJuVnVZeXdnZG1Gc2RXVnpMQ0JqYjIxd2IyNWxiblJKYm5SbGNtWmhZMlVwTzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQm5aWFJFWlhCbGJtUmxibU5wWlhOT1lXMWxjeWhtZFc1aktTQjdYSEpjYmlBZ1kyOXVjM1FnWm5WdVkxQmhjbUZ0Y3lBOUlHZGxkRkJoY21GdFRtRnRaWE1vWm5WdVl5azdYSEpjYmlBZ1kyOXVjM1FnZG1Gc2RXVnpUMkpxVW1WblJYaHdJRDBnSUc1bGR5QlNaV2RGZUhBb0oxeGNYRnduSUNzZ1puVnVZMUJoY21GdGMxc3dYU0FySUNkY1hGeGNMaWhjWEZ4Y1JGdGVYRnhjWEhOY1hGeGNWMTByS1Njc0lDZG5KeWs3WEhKY2JpQWdZMjl1YzNRZ1pHVndaVzVrWlc1amFXVnpUbUZ0WlhNZ1BTQmJYVHRjY2x4dUlDQmpiMjV6ZENCbWRXNWpVM1J5SUQwZ1puVnVZeTUwYjFOMGNtbHVaeWdwTzF4eVhHNGdJR3hsZENCa1pYQmxibVJsYm1ONVRtRnRaVHRjY2x4dUlDQjNhR2xzWlNBb0tHUmxjR1Z1WkdWdVkzbE9ZVzFsSUQwZ2RtRnNkV1Z6VDJKcVVtVm5SWGh3TG1WNFpXTW9ablZ1WTFOMGNpa3BLU0I3WEhKY2JpQWdJQ0JrWlhCbGJtUmxibU5wWlhOT1lXMWxjeTV3ZFhOb0tHUmxjR1Z1WkdWdVkzbE9ZVzFsV3pGZEtUdGNjbHh1SUNCOVhISmNiaUFnY21WMGRYSnVJR1JsY0dWdVpHVnVZMmxsYzA1aGJXVnpPMXh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCblpYUlFZWEpoYlU1aGJXVnpLR1oxYm1NcElIdGNjbHh1SUNCamIyNXpkQ0JtZFc1alUzUnlWMmwwYUc5MWRFTnZiVzFsYm5SeklEMGdablZ1WXk1MGIxTjBjbWx1WnlncExuSmxjR3hoWTJVb1VrVXVVMVJTU1ZCZlEwOU5UVVZPVkZNc0lDY25LVHRjY2x4dUlDQmpiMjV6ZENCd1lYSmhiWE5UZEhJZ1BTQm1kVzVqVTNSeVYybDBhRzkxZEVOdmJXMWxiblJ6TG5Oc2FXTmxLRnh5WEc0Z0lDQWdablZ1WTFOMGNsZHBkR2h2ZFhSRGIyMXRaVzUwY3k1cGJtUmxlRTltS0Njb0p5a2dLekVzWEhKY2JpQWdJQ0JtZFc1alUzUnlWMmwwYUc5MWRFTnZiVzFsYm5SekxtbHVaR1Y0VDJZb0p5a25LVnh5WEc0Z0lDazdYSEpjYmlBZ2NtVjBkWEp1SUhCaGNtRnRjMU4wY2k1dFlYUmphQ2hTUlM1QlVrZFZUVVZPVkY5T1FVMUZVeWtnZkh3Z1cxMDdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUdOdmJYQjFkR1VnS0daMWJtTXNJSFpoYkhWbGMwOWlhaXdnWTI5dGNHOXVaVzUwU1c1MFpYSm1ZV05sS1NCN1hISmNiaUFnY21WMGRYSnVJR1oxYm1NdVkyRnNiQ2gwYUdsekxDQm5aWFJQYm14NVZtRnNkV1Z6S0haaGJIVmxjMDlpYWlrc0lHTnZiWEJ2Ym1WdWRFbHVkR1Z5Wm1GalpTazdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUhObGRIVndRMjl0Y0c5dVpXNTBjMHhwYm10eklDaGpiMjF3YjI1bGJuUXNJSEJoY21WdWRFTnZiWEJ2Ym1WdWRDa2dlMXh5WEc0Z0lFOWlhbVZqZEM1aGMzTnBaMjRvWEhKY2JpQWdJQ0J3WVhKbGJuUkRiMjF3YjI1bGJuUXViR2x1YTNNc1hISmNiaUFnSUNCdFlYQW9ZMjl0Y0c5dVpXNTBMbTkxZEdWeVRtRnRaWE1zSUNocktTQTlQaUFvZXlCc2FXNXJPaUJyTENCamIyMXdiMjVsYm5RNklHTnZiWEJ2Ym1WdWRDNXpkR0YwWlVsa0lIMHBLVnh5WEc0Z0lDazdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUc1dmNtMWhiR2w2WlZWelpYSlBjSFJwYjI1eklDaHZjSFJwYjI1elQySnFMQ0J3WVhKbGJuUlBZbW9zSUhCaGNtVnVkRXRsZVNrZ2UxeHlYRzRnSUdsbUlDaHBjMFoxYm1OMGFXOXVJQ2h2Y0hScGIyNXpUMkpxS1NrZ2UxeHlYRzRnSUNBZ2NtVjBkWEp1SUhObGRDaHdZWEpsYm5SUFltb3NJRnR3WVhKbGJuUkxaWGxkTENCN0lHTnNZWE56T2lCdmNIUnBiMjV6VDJKcUlIMHBPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdhV1lnS0dselFYSnlZWGtvYjNCMGFXOXVjMDlpYWlrcElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb2IzQjBhVzl1YzA5aWFpNXNaVzVuZEdnZ1BpQXhLU0I3WEhKY2JpQWdJQ0FnSUc5d2RHbHZibk5QWW1vdVptOXlSV0ZqYUNnb2IzQjBhVzl1S1NBOVBpQnViM0p0WVd4cGVtVlZjMlZ5VDNCMGFXOXVjeUFvYjNCMGFXOXVMQ0J3WVhKbGJuUlBZbW9zSUhCaGNtVnVkRXRsZVNrcE8xeHlYRzRnSUNBZ0lDQnlaWFIxY200N1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdhV1lnS0dselJuVnVZM1JwYjI0b2IzQjBhVzl1YzA5aWFsc3dYU2twSUh0Y2NseHVJQ0FnSUNBZ2NtVjBkWEp1SUhObGRDaHdZWEpsYm5SUFltb3NJRnR3WVhKbGJuUkxaWGxkTENCN0lIWmhiSFZsT2lCdmNIUnBiMjV6VDJKcVd6QmRJSDBwTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnYVdZZ0tHbHpUMkpxWldOMEtHOXdkR2x2Ym5OUFltcGJNRjBwS1NCN1hISmNiaUFnSUNBZ0lISmxkSFZ5YmlCelpYUW9jR0Z5Wlc1MFQySnFMQ0JiY0dGeVpXNTBTMlY1WFN3Z2V5QmxkbVZ1ZEhNNklHOXdkR2x2Ym5OUFltcGJNRjBnZlNrN1hISmNiaUFnSUNCOVhISmNiaUFnZlZ4eVhHNWNjbHh1SUNCbWIzSkZZV05vS0c5d2RHbHZibk5QWW1vc0lDaDJZV3gxWlN3Z2EyVjVLU0E5UGlCN1hISmNiaUFnSUNCa1pXeGxkR1VnYjNCMGFXOXVjMDlpYWx0clpYbGRPMXh5WEc0Z0lDQWdZMjl1YzNRZ1ltbHVaR2x1WnlBOUlHTnlaV0YwWlVKcGJtUnBibWNvYTJWNUtUdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb2FYTlBZbXBsWTNRb2RtRnNkV1VwS1NCN1hISmNiaUFnSUNBZ0lIQmhjbVZ1ZEU5aWFsc25jM1JoZEdVblhWdHJaWGxkSUQwZ1QySnFaV04wTG1GemMybG5iaWhpYVc1a2FXNW5MQ0IyWVd4MVpTazdYSEpjYmlBZ0lDQWdJSEpsZEhWeWJqdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J3WVhKbGJuUlBZbXBiSjNOMFlYUmxKMTFiYTJWNVhTQTlJR0pwYm1ScGJtYzdYSEpjYmlBZ0lDQnViM0p0WVd4cGVtVlZjMlZ5VDNCMGFXOXVjeWgyWVd4MVpTd2djR0Z5Wlc1MFQySnFXeWR6ZEdGMFpTZGRMQ0JyWlhrcE8xeHlYRzRnSUgwcE8xeHlYRzVjY2x4dUlDQnlaWFIxY200Z2NHRnlaVzUwVDJKcU8xeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJoYm1Gc2VYcGxRbWx1WkdsdVp5QW9aV3dwSUh0Y2NseHVJQ0JwWmlBb2FYTkRiMjF3YjI1bGJuUW9aV3dwS1NCN1hISmNiaUFnSUNCeVpYUjFjbTRnWjJWMFEyOXRjRzl1Wlc1MFQzQjBjeWhsYkNrN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCcFppQW9JV1ZzTG1kbGRFRjBkSEpwWW5WMFpTa2dlMXh5WEc0Z0lDQWdjbVYwZFhKdUlHNTFiR3c3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0JzWlhRZ2JtRnRaU0E5SUdWc0xtZGxkRUYwZEhKcFluVjBaU2hNU1VKZlFWUlVVaTVVUlUxUVRFRlVSVjlDU1U1RVNVNUhLVHRjY2x4dUlDQmxiQzV5WlcxdmRtVkJkSFJ5YVdKMWRHVW9URWxDWDBGVVZGSXVWRVZOVUV4QlZFVmZRa2xPUkVsT1J5azdYSEpjYmx4eVhHNGdJR2xtSUNodVlXMWxLU0I3WEhKY2JpQWdJQ0J5WlhSMWNtNGdleUJ1WVcxbE9pQnVZVzFsTG5SeWFXMG9LU0I5TzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnYm1GdFpTQTlJR1ZzTG1kbGRFRjBkSEpwWW5WMFpTaE1TVUpmUVZSVVVpNVVSVTFRVEVGVVJWOU1TVk5VWDBKSlRrUkpUa2NwTzF4eVhHNGdJR1ZzTG5KbGJXOTJaVUYwZEhKcFluVjBaU2hNU1VKZlFWUlVVaTVVUlUxUVRFRlVSVjlNU1ZOVVgwSkpUa1JKVGtjcE8xeHlYRzVjY2x4dUlDQnBaaUFvYm1GdFpTa2dlMXh5WEc0Z0lDQWdjbVYwZFhKdUlIc2dibUZ0WlRvZ2JtRnRaUzUwY21sdEtDa3NJR2x6VEdsemREb2dkSEoxWlNCOU8xeHlYRzRnSUgxY2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdhWE5EYjIxd2IyNWxiblFnS0dWc0tTQjdYSEpjYmlBZ1kyOXVjM1FnZEdGblRtRnRaU0E5SUdWc0xuUmhaMDVoYldVZ0ppWWdaV3d1ZEdGblRtRnRaUzUwYjB4dmQyVnlRMkZ6WlNncE8xeHlYRzRnSUhKbGRIVnliaUIwWVdkT1lXMWxJQ1ltSUVOUFRWQlBUa1ZPVkZOYklIUnZRMkZ0Wld4RFlYTmxLSFJoWjA1aGJXVXBJRjA3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHZGxkRU52YlhCdmJtVnVkRTl3ZEhNZ0tHOWlhaWtnZTF4eVhHNGdJR052Ym5OMElHNWhiV1VnUFNCMGIwTmhiV1ZzUTJGelpTZ2diMkpxTG5SaFowNWhiV1V1ZEc5TWIzZGxja05oYzJVb0tTQXBPMXh5WEc0Z0lHTnZibk4wSUdOdmJYQnZibVZ1ZENBOUlHZGxkRU52YlhCdmJtVnVkRUo1VG1GdFpTaHVZVzFsS1R0Y2NseHVJQ0JqYjI1emRDQnNhVzVyY3lBOUlIdDlPMXh5WEc0Z0lHTnZibk4wSUhKbGRreHBibXR6SUQwZ2UzMDdYSEpjYmlBZ2JHVjBJSE4wWVhSbFRtRnRaU0E5SUc1MWJHdzdYSEpjYmx4eVhHNGdJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNXpiR2xqWlM1allXeHNLRzlpYWk1aGRIUnlhV0oxZEdWektWeHlYRzRnSUNBZ0xtWnZja1ZoWTJnb0tHRjBkSElwSUQwK0lIdGNjbHh1WEhKY2JpQWdJQ0FnSUdsbUlDaGhkSFJ5TG01aGJXVWdQVDA5SUV4SlFsOUJWRlJTTGxOVVFWUkZYMDVCVFVVcElIdGNjbHh1SUNBZ0lDQWdJQ0J6ZEdGMFpVNWhiV1VnUFNCaGRIUnlMblpoYkhWbE8xeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJqdGNjbHh1SUNBZ0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUNBZ1kyOXVjM1FnYVc1dVpYSk1hVzVySUQwZ2RHOURZVzFsYkVOaGMyVW9ZWFIwY2k1dVlXMWxLVHRjY2x4dUlDQWdJQ0FnYkdsdWEzTmJhVzV1WlhKTWFXNXJYU0E5SUdGMGRISXVkbUZzZFdVN1hISmNiaUFnSUNBZ0lISmxka3hwYm10elcyRjBkSEl1ZG1Gc2RXVmRJRDBnYVc1dVpYSk1hVzVyTzF4eVhHNGdJQ0FnZlNrN1hISmNibHh5WEc0Z0lISmxkSFZ5YmlCN1hISmNiaUFnSUNCamIyMXdiMjVsYm5Rc1hISmNiaUFnSUNCc2FXNXJjem9nYkdsdWEzTXNYSEpjYmlBZ0lDQnlaWFpNYVc1cmN6b2djbVYyVEdsdWEzTXNYSEpjYmlBZ0lDQnpkR0YwWlU1aGJXVXNYSEpjYmlBZ0lDQnVZVzFsTEZ4eVhHNGdJQ0FnYVhORGIyMXdiMjVsYm5RNklIUnlkV1VzWEhKY2JpQWdmVHRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z1oyVjBRMjl0Y0c5dVpXNTBRbmxPWVcxbElDaHVZVzFsS1NCN1hISmNiaUFnY21WMGRYSnVJRU5QVFZCUFRrVk9WRk5iSUhSdlEyRnRaV3hEWVhObEtHNWhiV1VwSUYwN1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJR055WldGMFpVSnBibVJwYm1jZ0tHNWhiV1VzSUdOdmJYQnZibVZ1ZEN3Z1pXd3BJSHRjY2x4dUlDQmpiMjV6ZENCamIyMXdiMjVsYm5SUGNIUnpJRDBnS0dOdmJYQnZibVZ1ZENrZ1B5QjdYSEpjYmlBZ0lDQnBaRG9nWTI5dGNHOXVaVzUwTG5OMFlYUmxTV1FnS3lCTVNVSmZRVlJVVWk1VFZFRlVSVjlFUlV4SlRVbFVSVklnS3lCdVlXMWxMRnh5WEc0Z0lDQWdjM1JoZEdWUVlYUm9PaUJqYjIxd2IyNWxiblF1YzNSaGRHVlFZWFJvTEZ4eVhHNGdJQ0FnYzNSaGRHVk9ZVzFsY3pvZ1kyOXRjRzl1Wlc1MExuTjBZWFJsVG1GdFpYTXNYSEpjYmlBZ0lDQnBjMHhwYzNSSmRHVnRPaUJqYjIxd2IyNWxiblF1YVhOTWFYTjBMRnh5WEc0Z0lDQWdjM1JoZEdWSlpEb2dibUZ0WlN4Y2NseHVJQ0I5SURvZ2UzMDdYSEpjYmx4eVhHNGdJR052Ym5OMElHVnNUM0IwY3lBOUlDaGxiQ2tnUHlCN1hISmNiaUFnSUNCcGJtbDBWbUZzZFdVNklHVnNMblpoYkhWbElIeDhJR1ZzTG1sdWJtVnlTRlJOVEZ4eVhHNGdJSDBnT2lCN2ZUdGNjbHh1WEhKY2JpQWdjbVYwZFhKdUlFOWlhbVZqZEM1aGMzTnBaMjRvZTF4eVhHNGdJQ0FnYm1GdFpTeGNjbHh1SUNBZ0lHeHBjM1JsYm1WeWN6b2dXMTBzWEhKY2JpQWdJQ0J0WVhKcmRYQTZJR1ZzTEZ4eVhHNGdJQ0FnWkdWd1pXNWtZVzUwY3pvZ2UzMHNYSEpjYmlBZ0lDQmxkbVZ1ZEhNNklIdDlMRnh5WEc0Z0lDQWdaWFpoYkhWaGRHVTZJSHQ5TEZ4eVhHNGdJQ0FnYkdsdWEzTTZJSHQ5TEZ4eVhHNGdJQ0FnYzNSaGRHVTZJSHNnVzB4SlFsOUJWRlJTTGxORlRFWmRPaUI3ZlNCOUxGeHlYRzRnSUNBZ2IzVjBaWEpPWVcxbGN6b2dlMzBzWEhKY2JpQWdJQ0JmYkdsdWEzTTZJSHQ5TEZ4eVhHNWNjbHh1SUNCOUxDQmpiMjF3YjI1bGJuUlBjSFJ6TENCbGJFOXdkSE1wTzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQnRiMlJwWm5sVWIweHBjM1JDYVc1a2FXNW5JQ2hpYVc1a2FXNW5MQ0JwZEdWdFRXRnlhM1Z3S1NCN1hISmNiaUFnWW1sdVpHbHVaeTVwYzB4cGMzUWdQU0IwY25WbE8xeHlYRzVjY2x4dUlDQnlaWFIxY200Z1QySnFaV04wTG1GemMybG5iaWhpYVc1a2FXNW5MQ0I3WEhKY2JpQWdJQ0J0WVhKcmRYQTZJR2wwWlcxTllYSnJkWEFzWEhKY2JpQWdJQ0JzYVhOMFNYUmxiVG9nWTNKbFlYUmxRbWx1WkdsdVp5aHBkR1Z0VFdGeWEzVndMblJoWjA1aGJXVXNJR0pwYm1ScGJtY3NJR2wwWlcxTllYSnJkWEFwTEZ4eVhHNGdJSDBwTzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQnphRzl5ZEdWdVFtbHVaR2x1WjBsa0lDaHBaQ2tnZTF4eVhHNGdJSEpsZEhWeWJpQnBaRnh5WEc0Z0lDQWdMbk53YkdsMEtFeEpRbDlCVkZSU0xsTlVRVlJGWDBSRlRFbE5TVlJGVWlsY2NseHVJQ0FnSUM1dFlYQW9LR1ZzS1NBOVBpQm5aWFJUYUc5eWRFNWhiV1VvWld3cEtWeHlYRzRnSUNBZ0xtcHZhVzRvVEVsQ1gwRlVWRkl1VTFSQlZFVmZSRVZNU1UxSlZFVlNLVHRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2NISmxjR0Z5WlZOMGVXeGxjeUFvYzNSNWJHVkJjbWNzSUdOdmJYQnZibVZ1ZENrZ2UxeHlYRzRnSUhKbGRIVnliaUJ0WVhCTFpYbHpLSE4wZVd4bFFYSm5MQ0FvYTJWNUtTQTlQaUJyWlhsY2NseHVJQ0FnSUM1emNHeHBkQ2duTENjcFhISmNiaUFnSUNBdWJXRndLQ2h6Wld4bFkzUnZjaWtnUFQ0Z2MyVnNaV04wYjNJdWRISnBiU2dwS1Z4eVhHNGdJQ0FnTG0xaGNDZ29jMlZzWldOMGIzSXBJRDArSUh0Y2NseHVYSEpjYmlBZ0lDQWdJR3hsZENCamJHRnpjMDVoYldVZ1BTQWdKeTRuSUNzZ1kyOXRjRzl1Wlc1MExtNWhiV1U3WEhKY2JseHlYRzRnSUNBZ0lDQnBaaUFvYzJWc1pXTjBiM0lwSUh0Y2NseHVJQ0FnSUNBZ0lDQmpiMjV6ZENCcGMwSnBibVJwYm1jZ1BTQmpiMjF3YjI1bGJuUXVjM1JoZEdWYklITmxiR1ZqZEc5eUxuTndiR2wwS0NjZ0p5bGJNRjB1YzNCc2FYUW9Kem82SnlsYk1GMHVjM0JzYVhRb0p6b25LVnN3WFNCZE8xeHlYRzRnSUNBZ0lDQWdJR052Ym5OMElIQnlaV1pwZUNBOUlHbHpRbWx1WkdsdVp5QS9JR05zWVhOelRtRnRaU0FySUNjdEp5QTZJQ2NuTzF4eVhHNGdJQ0FnSUNBZ0lHTnNZWE56VG1GdFpTQXJQU0FuSUNjZ0t5QndjbVZtYVhnZ0t5QnpaV3hsWTNSdmNqdGNjbHh1SUNBZ0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUNBZ2NtVjBkWEp1SUdOc1lYTnpUbUZ0WlR0Y2NseHVJQ0FnSUgwcFhISmNiaUFnSUNBdWFtOXBiaWduTENjcFhISmNiaUFnS1R0Y2NseHVmVnh5WEc0aUxDSnBiWEJ2Y25RZ1RFbENYMEZVVkZJZ1puSnZiU0FuTGk5bmJHOWlZV3h6TDJGMGRISnBZblYwWlhNbk8xeHlYRzVjY2x4dWFXMXdiM0owSUhzZ1ptOXlSV0ZqYUNCOUlHWnliMjBnSnk0dmFHVnNjR1Z5Y3k5dlltcGxZM1FuTzF4eVhHNXBiWEJ2Y25RZ2V5Qm5aWFJTWldGc1RtRnRaU3dnYUdGeklIMGdabkp2YlNBbkxpOW9aV3h3WlhKekwyTnZiVzF2YmljN1hISmNibHh5WEc1cGJYQnZjblFnZTF4eVhHNGdJR055WldGMFpVRmpZMlZ6YzI5eUxGeHlYRzU5SUdaeWIyMGdKeTR2VTNSaGRHVW5PMXh5WEc1Y2NseHVhVzF3YjNKMElIdGNjbHh1SUNCemRHRnlkRlJ5WVc1ellXTjBhVzl1TEZ4eVhHNGdJR0Z3Y0d4NVEyaGhibWRsYzF4eVhHNTlJR1p5YjIwZ0p5NHZVM1JoZEdWRGFHRnVaMlVuTzF4eVhHNWNjbHh1Wlhod2IzSjBJSHRjY2x4dUlDQnpaWFIxY0VWMlpXNTBTR0Z1Wkd4bGNuTmNjbHh1ZlR0Y2NseHVYSEpjYm1aMWJtTjBhVzl1SUhObGRIVndSWFpsYm5SSVlXNWtiR1Z5Y3lBb1pXeGxiV1Z1ZENrZ2UxeHlYRzRnSUdOdmJuTjBJR1YyWlc1MFNHRnVaR3hsY25NZ1BTQjdmVHRjY2x4dUlDQm5ZWFJvWlhKQmJHeEZkbVZ1ZEVoaGJtUnNaWEp6S0dWc1pXMWxiblFzSUdWMlpXNTBTR0Z1Wkd4bGNuTXBPMXh5WEc1Y2NseHVJQ0JqYjI1emRDQnRZWEpyZFhBZ1BTQmxiR1Z0Wlc1MExtVnNPMXh5WEc0Z0lHWnZjaUFvYkdWMElHVjJaVzUwVG1GdFpTQnBiaUJsZG1WdWRFaGhibVJzWlhKektTQjdYSEpjYmlBZ0lDQnRZWEpyZFhBdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lobGRtVnVkRTVoYldVc0lDaGxLU0E5UGlCbGVHVmpkWFJsUVd4c1EyRnNiR0poWTJ0elNXNU1hWE4wS0dVc0lHVjJaVzUwU0dGdVpHeGxjbk5iWlhabGJuUk9ZVzFsWFN3Z1pXeGxiV1Z1ZENrcE8xeHlYRzRnSUgxY2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdaMkYwYUdWeVFXeHNSWFpsYm5SSVlXNWtiR1Z5Y3lBb1kyOXRjRzl1Wlc1MExDQm5ZWFJvWlhKbFpFaGhibVJzWlhKektTQjdYSEpjYmlBZ1oyRjBhR1Z5UlhabGJuUklZVzVrYkdWeWN5QW9ZMjl0Y0c5dVpXNTBMQ0JuWVhSb1pYSmxaRWhoYm1Sc1pYSnpLVHRjY2x4dVhISmNiaUFnYVdZZ0tHTnZiWEJ2Ym1WdWRDNXpkR0YwWlNrZ2UxeHlYRzRnSUNBZ1ptOXlSV0ZqYUNoamIyMXdiMjVsYm5RdWMzUmhkR1VzSUNoaWFXNWthVzVuS1NBOVBpQm5ZWFJvWlhKQmJHeEZkbVZ1ZEVoaGJtUnNaWEp6S0dKcGJtUnBibWNzSUdkaGRHaGxjbVZrU0dGdVpHeGxjbk1wS1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUdsbUlDaGpiMjF3YjI1bGJuUXViR2x6ZEVsMFpXMHBJSHRjY2x4dUlDQWdJR2RoZEdobGNrRnNiRVYyWlc1MFNHRnVaR3hsY25Nb1kyOXRjRzl1Wlc1MExteHBjM1JKZEdWdExDQm5ZWFJvWlhKbFpFaGhibVJzWlhKektUdGNjbHh1SUNCOVhISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJR2RoZEdobGNrVjJaVzUwU0dGdVpHeGxjbk1nS0dKcGJtUnBibWNzSUdkaGRHaGxjbVZrU0dGdVpHeGxjbk1wSUh0Y2NseHVJQ0JwWmlBb0lXSnBibVJwYm1jdVpYWmxiblJ6S1NCN1hISmNiaUFnSUNCeVpYUjFjbTQ3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0JtYjNJZ0tHeGxkQ0JsZG1WdWRFNWhiV1VnYVc0Z1ltbHVaR2x1Wnk1bGRtVnVkSE1wSUh0Y2NseHVJQ0FnSUdsbUlDZ2haMkYwYUdWeVpXUklZVzVrYkdWeWMxdGxkbVZ1ZEU1aGJXVmRLU0I3WEhKY2JpQWdJQ0FnSUdkaGRHaGxjbVZrU0dGdVpHeGxjbk5iWlhabGJuUk9ZVzFsWFNBOUlIdDlPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdkaGRHaGxjbVZrU0dGdVpHeGxjbk5iWlhabGJuUk9ZVzFsWFZ0aWFXNWthVzVuTG5Ob2IzSjBTV1JkSUQwZ1ltbHVaR2x1Wnk1bGRtVnVkSE5iWlhabGJuUk9ZVzFsWFR0Y2NseHVJQ0I5WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHVjRaV04xZEdWQmJHeERZV3hzWW1GamEzTkpia3hwYzNRZ0tHVXNJR1YyWlc1MFNHRnVaR3hsY25Nc0lHVnNaVzFsYm5RcElIdGNjbHh1SUNCa1pXTnZjbUYwWlVWMlpXNTBLR1VwTzF4eVhHNGdJSE4wWVhKMFZISmhibk5oWTNScGIyNG9LVHRjY2x4dUlDQmNjbHh1SUNCc1pYUWdZM1Z5U0ZSTlRFNXZaR1VnUFNCbExuUmhjbWRsZER0Y2NseHVJQ0IzYUdsc1pTQW9ZM1Z5U0ZSTlRFNXZaR1VnSVQwOUlHVnNaVzFsYm5RdVpXd3VjR0Z5Wlc1MFRtOWtaU2tnZTF4eVhHNGdJQ0FnWTI5dWMzUWdZbWx1WkdsdVowbGtJRDBnWTNWeVNGUk5URTV2WkdVdVoyVjBRWFIwY21saWRYUmxLRXhKUWw5QlZGUlNMa0pKVGtSSlRrZGZTVVFwTzF4eVhHNGdJQ0FnWTI5dWMzUWdaWFpsYm5SSVlXNWtiR1Z5SUQwZ1pYWmxiblJJWVc1a2JHVnljMXRpYVc1a2FXNW5TV1JkTzF4eVhHNWNjbHh1SUNBZ0lHbG1JQ2hsZG1WdWRFaGhibVJzWlhJcElIdGNjbHh1SUNBZ0lDQWdZMjl1YzNRZ2FXNWtaWGhzWlhOelUzUmhkR1ZRWVhSb0lEMGdZbWx1WkdsdVowbGtMbk53YkdsMEtFeEpRbDlCVkZSU0xsTlVRVlJGWDBSRlRFbE5TVlJGVWlrN1hISmNiaUFnSUNBZ0lHbHVaR1Y0YkdWemMxTjBZWFJsVUdGMGFDNXdiM0FvS1R0Y2NseHVJQ0FnSUNBZ1kyOXVjM1FnYzNSaGRHVlFZWFJvVkc5SmRHVnRJRDBnWjJWMFUzUmhkR1ZRWVhSb1ZHOUpkR1Z0S0dOMWNraFVUVXhPYjJSbExDQnBibVJsZUd4bGMzTlRkR0YwWlZCaGRHZ3BPMXh5WEc0Z0lDQWdJQ0JqYjI1emRDQmhZMk5sYzNOdmNsUnZSR0YwWVNBOUlHTnlaV0YwWlVGalkyVnpjMjl5S0Z0bGJHVnRaVzUwTG1sa1hTNWpiMjVqWVhRb2MzUmhkR1ZRWVhSb1ZHOUpkR1Z0S1NrN1hISmNibHh5WEc0Z0lDQWdJQ0JsZG1WdWRFaGhibVJzWlhJdVkyRnNiQ2gwYUdsekxDQmxMQ0JqZFhKSVZFMU1UbTlrWlN3Z1lXTmpaWE56YjNKVWIwUmhkR0VzSUN0emRHRjBaVkJoZEdoVWIwbDBaVzB1YzJ4cFkyVW9MVElwV3pCZEtUdGNjbHh1WEhKY2JpQWdJQ0FnSUdsbUlDaGxMbkJ5YjNCaFoyRjBhVzl1VTNSdmNIQmxaQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lHSnlaV0ZyTzF4eVhHNGdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNiaUFnSUNCamRYSklWRTFNVG05a1pTQTlJR04xY2toVVRVeE9iMlJsTG5CaGNtVnVkRTV2WkdVN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCaGNIQnNlVU5vWVc1blpYTW9LVHRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z1pHVmpiM0poZEdWRmRtVnVkQ0FvWlNrZ2UxeHlYRzRnSUdOdmJuTjBJSE4wYjNCUWNtOXdZV2RoZEdsdmJpQTlJR1V1YzNSdmNGQnliM0JoWjJGMGFXOXVMbUpwYm1Rb1pTazdYSEpjYmlBZ1pTNXpkRzl3VUhKdmNHRm5ZWFJwYjI0Z1BTQW9LU0E5UGlCN1hISmNiaUFnSUNCbExuQnliM0JoWjJGMGFXOXVVM1J2Y0hCbFpDQTlJSFJ5ZFdVN1hISmNiaUFnSUNCemRHOXdVSEp2Y0dGbllYUnBiMjRvS1R0Y2NseHVJQ0I5WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHZGxkRk4wWVhSbFVHRjBhRlJ2U1hSbGJTQW9aV3dzSUdsdVpHVjRiR1Z6YzFOMFlYUmxVR0YwYUNrZ2UxeHlYRzRnSUdOdmJuTjBJSE4wWVhSbFVHRjBhQ0E5SUZ0ZE8xeHlYRzVjY2x4dUlDQnNaWFFnWld4bGJXVnVkRTVoYldVN1hISmNiaUFnZDJocGJHVWdLQ2hsYkdWdFpXNTBUbUZ0WlNBOUlHZGxkRkpsWVd4T1lXMWxLQ0JwYm1SbGVHeGxjM05UZEdGMFpWQmhkR2d1Y0c5d0tDa2dLU2twSUh0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvYUdGektHVnNaVzFsYm5ST1lXMWxMQ0JNU1VKZlFWUlVVaTVKVkVWTktTa2dlMXh5WEc0Z0lDQWdJQ0JsYkdWdFpXNTBUbUZ0WlNBOUlHVnNaVzFsYm5ST1lXMWxMbk5zYVdObEtFeEpRbDlCVkZSU0xrbFVSVTB1YkdWdVozUm9LVHRjY2x4dUlDQWdJQ0FnWld3Z1BTQm5aWFJVYjBsMFpXMU9iMlJsS0dWc0tUdGNjbHh1SUNBZ0lDQWdZMjl1YzNRZ2FXUjRJRDBnWld3dVoyVjBRWFIwY21saWRYUmxLRXhKUWw5QlZGUlNMa2xVUlUxZlNVNUVSVmdwTzF4eVhHNGdJQ0FnSUNCbGJDQTlJR1ZzTG5CaGNtVnVkRTV2WkdVN1hISmNiaUFnSUNBZ0lITjBZWFJsVUdGMGFDNTFibk5vYVdaMEtHbGtlQ3dnWld4bGJXVnVkRTVoYldVcE8xeHlYRzRnSUNBZ0lDQmpiMjUwYVc1MVpUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J6ZEdGMFpWQmhkR2d1ZFc1emFHbG1kQ2hsYkdWdFpXNTBUbUZ0WlNrN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCeVpYUjFjbTRnYzNSaGRHVlFZWFJvTzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQm5aWFJVYjBsMFpXMU9iMlJsSUNobGJDa2dlMXh5WEc0Z0lHeGxkQ0JqZFhKRmJDQTlJR1ZzTzF4eVhHNWNjbHh1SUNCM2FHbHNaU0FvWTNWeVJXd3VkR0ZuVG1GdFpTQWhQVDBnSjBKUFJGa25LU0I3WEhKY2JpQWdJQ0JwWmlBb1kzVnlSV3d1WjJWMFFYUjBjbWxpZFhSbEtFeEpRbDlCVkZSU0xrbFVSVTFmU1U1RVJWZ3BLU0I3WEhKY2JpQWdJQ0FnSUhKbGRIVnliaUJqZFhKRmJEdGNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lHTjFja1ZzSUQwZ1kzVnlSV3d1Y0dGeVpXNTBUbTlrWlR0Y2NseHVJQ0I5WEhKY2JuMWNjbHh1SWl3aWFXMXdiM0owSUh0Y2NseHVJQ0J5WlhCc1lXTmxUbTlrWlhNc1hISmNiaUFnWTI5c2JHVmpkRWhVVFV4T2IyUmxjeXhjY2x4dWZTQm1jbTl0SUNjdUwyaGxiSEJsY25NdlpHOXRKMXh5WEc1Y2NseHVhVzF3YjNKMElIdGNjbHh1SUNCblpYUkRiMjF3YjI1bGJuUlBjSFJ6TEZ4eVhHNGdJR2x6UTI5dGNHOXVaVzUwTEZ4eVhHNTlJR1p5YjIwZ0p5NHZSR1ZtYVc1cGRHbHZiaWM3WEhKY2JseHlYRzVwYlhCdmNuUWdleUJ6WlhSMWNFVjJaVzUwU0dGdVpHeGxjbk1nZlNCbWNtOXRJQ2N1TDBWMlpXNTBTR0Z1Wkd4bGNpYzdYSEpjYmx4eVhHNXBiWEJ2Y25RZ2V5QmpjbVZoZEdWRmJHVnRaVzUwSUgwZ1puSnZiU0FuTGk5VGRHRjBaU2M3WEhKY2JseHlYRzVsZUhCdmNuUWdleUJoY0hCc2VTQjlPMXh5WEc1Y2NseHVYSEpjYm1aMWJtTjBhVzl1SUdGd2NHeDVJQ2h5YjI5MFJXeGxiV1Z1ZEZObGJHVmpkRzl5S1NCN1hISmNiaUFnWTI5dWMzUWdjbTl2ZEVWc1pXMWxiblFnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLSEp2YjNSRmJHVnRaVzUwVTJWc1pXTjBiM0lwTzF4eVhHNGdJR052Ym5OMElFaFVUVXhPYjJSbGN5QTlJR052Ykd4bFkzUklWRTFNVG05a1pYTW9jbTl2ZEVWc1pXMWxiblFzSUdselEyOXRjRzl1Wlc1MEtUdGNjbHh1WEhKY2JpQWdTRlJOVEU1dlpHVnpMbVp2Y2tWaFkyZ29LRWhVVFV4T2IyUmxLU0E5UGlCN1hISmNiaUFnSUNCamIyNXpkQ0JqYjIxd2IyNWxiblJQY0hSeklEMGdaMlYwUTI5dGNHOXVaVzUwVDNCMGN5aElWRTFNVG05a1pTazdYSEpjYmlBZ0lDQmpiMjV6ZENCbGJHVnRaVzUwSUQwZ2MyVjBkWEJGYkdWdFpXNTBLR052YlhCdmJtVnVkRTl3ZEhNcE8xeHlYRzVjY2x4dUlDQWdJSEpsY0d4aFkyVk9iMlJsY3loSVZFMU1UbTlrWlN3Z1pXeGxiV1Z1ZEM1bGJDazdYSEpjYmlBZ2ZTazdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUhObGRIVndSV3hsYldWdWRDQW9ZMjl0Y0c5dVpXNTBUM0IwY3lrZ2UxeHlYRzRnSUdOdmJuTjBJR1ZzWlcxbGJuUWdQU0JqY21WaGRHVkZiR1Z0Wlc1MEtHTnZiWEJ2Ym1WdWRFOXdkSE1wTzF4eVhHNGdJSE5sZEhWd1JYWmxiblJJWVc1a2JHVnljeWhsYkdWdFpXNTBLVHRjY2x4dUlDQnlaWFIxY200Z1pXeGxiV1Z1ZER0Y2NseHVmVnh5WEc0aUxDSnBiWEJ2Y25RZ1RFbENYMEZVVkZJZ1puSnZiU0FuTGk5bmJHOWlZV3h6TDJGMGRISnBZblYwWlhNbk8xeHlYRzVjY2x4dWFXMXdiM0owSUhzZ1oyVjBMQ0J6WlhRc0lHWnZja1ZoWTJnc0lHMWhjQ0I5SUdaeWIyMGdKeTR2YUdWc2NHVnljeTl2WW1wbFkzUW5PMXh5WEc1Y2NseHVhVzF3YjNKMElIc2dhR0Z6SUgwZ1puSnZiU0FuTGk5b1pXeHdaWEp6TDJOdmJXMXZiaWM3WEhKY2JseHlYRzVwYlhCdmNuUWdleUJTUlZORlVsWkZSRjlDU1U1RVNVNUhYMDVCVFVWVElIMGdabkp2YlNBbkxpOUVaV1pwYm1sMGFXOXVKenRjY2x4dVhISmNibWx0Y0c5eWRDQjdYSEpjYmlBZ1kzSmxZWFJsVTNSaGRHVk9iMlJsY3l4Y2NseHVJQ0J6WlhSV1lXeDFaWE1zWEhKY2JpQWdiVzlrYVdaNVRHbHpkQ3hjY2x4dUlDQnpkR0Z5ZEZSeVlXNXpZV04wYVc5dUxGeHlYRzRnSUhObGJtUlViMUpsYm1SbGNsRjFaWFZsTEZ4eVhHNGdJR0Z3Y0d4NVEyaGhibWRsY3l4Y2NseHVmU0JtY205dElDY3VMMU4wWVhSbFEyaGhibWRsSnp0Y2NseHVYSEpjYm1sdGNHOXlkQ0I3WEhKY2JpQWdhWE5CY25KaGVTeGNjbHh1SUNCcGMxTjBjbWx1Wnl4Y2NseHVJQ0JwYzA1MWJXSmxjaXhjY2x4dUlDQnBjMDlpYW1WamRDeGNjbHh1ZlNCbWNtOXRJQ2N1TDJobGJIQmxjbk12WTJobFkydGxjbk1uTzF4eVhHNWNjbHh1Wlhod2IzSjBJSHRjY2x4dUlDQmpjbVZoZEdWRmJHVnRaVzUwTEZ4eVhHNGdJR055WldGMFpVRmpZMlZ6YzI5eUxGeHlYRzRnSUdkbGRFOXViSGxXWVd4MVpYTXNYSEpjYmlBZ1oyVjBRMjl0Y0c5dVpXNTBMRnh5WEc0Z0lITmxkRk4wWVhSbExGeHlYRzRnSUhCeVpYQmhjbVZEYUdGdVoyVlBZbXBsWTNRc1hISmNibjA3WEhKY2JseHlYRzVqYjI1emRDQkZURVZOUlU1VVV5QTlJSHQ5TzF4eVhHNWpiMjV6ZENCVFZFRlVSU0E5SUh0OU8xeHlYRzVzWlhRZ1JVeEZUVVZPVkY5RFQxVk9WRVZTSUQwZ01UdGNjbHh1WEhKY2JtWjFibU4wYVc5dUlITmxkRk4wWVhSbElDaHdZWFJvTENCMllXeDFaU2tnZTF4eVhHNGdJSE5sZENoVFZFRlVSU3dnY0dGMGFDd2dkbUZzZFdVcE8xeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJuWlhSVGRHRjBaU0FvY0dGMGFDa2dlMXh5WEc0Z0lISmxkSFZ5YmlCblpYUW9VMVJCVkVVc0lIQmhkR2dwTzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQmpjbVZoZEdWRmJHVnRaVzUwSUNoamIyMXdiMjVsYm5SUGNIUnpLU0I3WEhKY2JpQWdZMjl1YzNRZ2FXUWdQU0JGVEVWTlJVNVVYME5QVlU1VVJWSXJLenRjY2x4dUlDQmpiMjV6ZENCdVlXMWxJRDBnWTI5dGNHOXVaVzUwVDNCMGN5NXVZVzFsTzF4eVhHNWNjbHh1SUNCamIyNXpkQ0JsYkdWdFpXNTBJRDBnUlV4RlRVVk9WRk5iYVdSZElEMGdlMXh5WEc0Z0lDQWdhV1FzWEhKY2JpQWdJQ0J6ZEdGMFpUb2dleUJiYm1GdFpWMDZJR052YlhCdmJtVnVkRTl3ZEhNdVkyOXRjRzl1Wlc1MElIMHNYSEpjYmlBZ2ZUdGNjbHh1WEhKY2JpQWdVMVJCVkVWYmFXUmRJRDBnZTMwN1hISmNibHh5WEc0Z0lHTnlaV0YwWlZOMFlYUmxUbTlrWlhNb1cybGtMQ0J1WVcxbFhTazdYSEpjYmx4eVhHNGdJSE5sYm1SVWIxSmxibVJsY2xGMVpYVmxLRnRwWkYwc0lIc2dXMjVoYldWZE9pQm1ZV3h6WlNCOUtUdGNjbHh1SUNCaGNIQnNlVU5vWVc1blpYTW9LVHRjY2x4dUlDQmxiR1Z0Wlc1MExtVnNJRDBnVTFSQlZFVmJhV1JkVzI1aGJXVmRXMHhKUWw5QlZGUlNMbE5GVEVaZExtVnNPMXh5WEc0Z0lHVnNaVzFsYm5RdVpXd3VjMlYwUVhSMGNtbGlkWFJsS0V4SlFsOUJWRlJTTGtOUFRWQlBUa1ZPVkY5VVdWQkZMQ0JNU1VKZlFWUlVVaTVDUVZORktUdGNjbHh1WEhKY2JpQWdjbVYwZFhKdUlHVnNaVzFsYm5RN1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJR055WldGMFpVRmpZMlZ6YzI5eUlDaHdZWFJvS1NCN1hISmNiaUFnWTI5dWMzUWdkbUZzZFdWeklEMGdaMlYwVTNSaGRHVW9jR0YwYUNrN1hISmNiaUFnWTI5dWMzUWdZMjl0Y0c5dVpXNTBJRDBnWjJWMFEyOXRjRzl1Wlc1MEtIQmhkR2dwTzF4eVhHNWNjbHh1SUNCamIyNXpkQ0JoWTJObGMzTnZjaUE5SUh0Y2NseHVJQ0FnSUdOdmJYQnZibVZ1ZEN4Y2NseHVJQ0FnSUhaaGJIVmxjeXhjY2x4dUlDQWdJSEJoZEdnc1hISmNiaUFnSUNCemRHRnlkRlJ5WVc1ellXTjBhVzl1TEZ4eVhHNGdJQ0FnWVhCd2JIbERhR0Z1WjJWekxGeHlYRzRnSUNBZ2RYQTZJQ2hzWlhabGJDa2dQVDRnYlc5MlpWVndVM1JoZEdWUVlYUm9LR3hsZG1Wc0xDQndZWFJvTG5Oc2FXTmxLQ2twTEZ4eVhHNGdJQ0FnWkc5M2Jqb2dLR0ZrWkdsMGFXOXVZV3hRWVhSb0tTQTlQaUJqY21WaGRHVkJZMk5sYzNOdmNpaHdZWFJvTG1OdmJtTmhkQ2hoWkdScGRHbHZibUZzVUdGMGFDa3BMRnh5WEc0Z0lDQWdjMlYwT2lBb1kyaGhibWRsVDJKcUtTQTlQaUJ6WlhSV1lXeDFaWE1vSUhCeVpYQmhjbVZEYUdGdVoyVlBZbXBsWTNRb1kyaGhibWRsVDJKcUtTd2djR0YwYUNrc1hISmNiaUFnSUNCblpYUTZJQ2hyWlhrcElEMCtJR2RsZEZaaGJIVmxjeWhoWTJObGMzTnZjaXdnYTJWNUxDQndZWFJvS1N4Y2NseHVJQ0FnSUcxaGNtdDFjRG9nS0d0bGVTa2dQVDRnYTJWNUlEOGdZV05qWlhOemIzSXVkbUZzZFdWelcydGxlVjB1Wld3Z09pQmhZMk5sYzNOdmNpNTJZV3gxWlhOYlRFbENYMEZVVkZJdVUwVk1SbDB1Wld3c1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCcFppQW9hWE5CY25KaGVTaDJZV3gxWlhNcEtTQjdYSEpjYmlBZ0lDQnRiMlJwWm5sVWIwRnljbUY1UVdOalpYTnpiM0lvWVdOalpYTnpiM0lwTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnY21WMGRYSnVJR0ZqWTJWemMyOXlPMXh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCd2NtVndZWEpsUTJoaGJtZGxUMkpxWldOMElDaGphR0Z1WjJWUFltb3BJSHRjY2x4dUlDQnlaWFIxY200Z2JXRndLR05vWVc1blpVOWlhaXdnS0hZcElEMCtJSHRjY2x4dUlDQWdJR052Ym5OMElHWnZjbU5sWkNBOUlHbHpUMkpxWldOMEtIWXBJQ1ltSUU5aWFtVmpkQzVyWlhsektIWXBXekJkSUQwOVBTQW5abTl5WTJVbk8xeHlYRzVjY2x4dUlDQWdJSEpsZEhWeWJpQjdYSEpjYmlBZ0lDQWdJSFpoYkhWbE9pQm1iM0pqWldRZ1B5QjJXeWRtYjNKalpTZGRJRG9nZGl4Y2NseHVJQ0FnSUNBZ2RIbHdaVG9nSjNaaGJIVmxKeXhjY2x4dUlDQWdJQ0FnWm05eVkyVTZJR1p2Y21ObFpDeGNjbHh1SUNBZ0lIMDdYSEpjYmlBZ2ZTazdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUdkbGRFTnZiWEJ2Ym1WdWRDQW9jR0YwYUNrZ2UxeHlYRzRnSUd4bGRDQmpiMjF3YjI1bGJuUWdQU0JGVEVWTlJVNVVVMXNnY0dGMGFGc3dYU0JkTzF4eVhHNWNjbHh1SUNCbWIzSWdLR3hsZENCcElEMGdNVHNnYVNBOElIQmhkR2d1YkdWdVozUm9PeUJwS3lzcElIdGNjbHh1SUNBZ0lHTnZiWEJ2Ym1WdWRDQTlJR052YlhCdmJtVnVkQzV6ZEdGMFpWc2djR0YwYUZ0cFhTQmRPMXh5WEc0Z0lDQWdYSEpjYmlBZ0lDQnBaaUFvWTI5dGNHOXVaVzUwTG1selRHbHpkQ0FtSmlCcElDRTlQU0FvY0dGMGFDNXNaVzVuZEdnZ0xURXBLU0I3WEhKY2JpQWdJQ0FnSUdOdmJYQnZibVZ1ZENBOUlHTnZiWEJ2Ym1WdWRDNXNhWE4wU1hSbGJUdGNjbHh1SUNBZ0lDQWdhU3M5TWp0Y2NseHVJQ0FnSUgxY2NseHVJQ0I5WEhKY2JseHlYRzRnSUhKbGRIVnliaUJqYjIxd2IyNWxiblE3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHZGxkRTl1YkhsV1lXeDFaWE1nS0c5aWFpa2dlMXh5WEc0Z0lISmxkSFZ5YmlCdFlYQW9iMkpxTENBb1ltbHVaR2x1WjFaaGJIVmxjeWtnUFQ0Z1ltbHVaR2x1WjFaaGJIVmxjMXNuZG1Gc2RXVW5YU2s3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHZGxkRlpoYkhWbGN5QW9ZV05qWlhOemIzSXNJR3RsZVN3Z2MzUmhkR1ZRWVhSb0tTQjdYSEpjYmlBZ1kyOXVjM1FnZG1Gc2RXVnpJRDBnWVdOalpYTnpiM0l1ZG1Gc2RXVnpPMXh5WEc0Z0lHTnZibk4wSUdOdmJYQnZibVZ1ZENBOUlHRmpZMlZ6YzI5eUxtTnZiWEJ2Ym1WdWREdGNjbHh1WEhKY2JpQWdhV1lnS0NGclpYa3BJSHRjY2x4dUlDQWdJSEpsZEhWeWJpQm5aWFJXWVd4MVpYTlVjbVZsS0haaGJIVmxjeXdnWTI5dGNHOXVaVzUwTENCN2ZTazdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQmpiMjV6ZENCaWFXNWthVzVuSUQwZ1kyOXRjRzl1Wlc1MExuTjBZWFJsVzJ0bGVWMDdYSEpjYmlBZ2FXWWdLR0pwYm1ScGJtY3VhWE5NYVhOMElIeDhJR0pwYm1ScGJtY3VhWE5EYjIxd2IyNWxiblFwSUh0Y2NseHVJQ0FnSUhKbGRIVnliaUJqY21WaGRHVkJZMk5sYzNOdmNpaHpkR0YwWlZCaGRHZ3VZMjl1WTJGMEtHdGxlU2twTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnY21WMGRYSnVJSFpoYkhWbGMxdHJaWGxkTG5aaGJIVmxPMXh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCblpYUldZV3gxWlhOVWNtVmxJQ2gyWVd4MVpYTXNJR052YlhCdmJtVnVkQ3dnZG1Gc2RXVnpWSEpsWlNrZ2UxeHlYRzRnSUdadmNrVmhZMmdvZG1Gc2RXVnpMQ0FvZG1Gc2N5d2dZbWx1WkdsdVowNWhiV1VwSUQwK0lIdGNjbHh1SUNBZ0lHbG1JQ2hvWVhNb1VrVlRSVkpXUlVSZlFrbE9SRWxPUjE5T1FVMUZVeXdnWW1sdVpHbHVaMDVoYldVcEtTQjdYSEpjYmlBZ0lDQWdJSEpsZEhWeWJqdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JqYjI1emRDQmlhVzVrYVc1bklEMGdZMjl0Y0c5dVpXNTBMbk4wWVhSbFcySnBibVJwYm1kT1lXMWxYVHRjY2x4dVhISmNiaUFnSUNCcFppQW9ZbWx1WkdsdVp5NXBjMHhwYzNRcElIdGNjbHh1SUNBZ0lDQWdkbUZzZFdWelZISmxaVnRpYVc1a2FXNW5UbUZ0WlYwZ1BTQmJYVHRjY2x4dUlDQWdJQ0FnZG1Gc2RXVnpXMkpwYm1ScGJtZE9ZVzFsWFM1bWIzSkZZV05vS0NobGJDd2dhU2tnUFQ0Z2UxeHlYRzRnSUNBZ0lDQWdJR052Ym5OMElHbDBaVzFXWVd4MVpYTWdQU0IyWVd4MVpYTlVjbVZsVzJKcGJtUnBibWRPWVcxbFhWdHBYU0E5SUh0OU8xeHlYRzRnSUNBZ0lDQWdJR2RsZEZaaGJIVmxjMVJ5WldVb2RtRnNkV1Z6VzJKcGJtUnBibWRPWVcxbFhWdHBYVnRpYVc1a2FXNW5MbXhwYzNSSmRHVnRMbTVoYldWZExDQmlhVzVrYVc1bkxteHBjM1JKZEdWdExDQnBkR1Z0Vm1Gc2RXVnpLVHRjY2x4dUlDQWdJQ0FnZlNrN1hISmNiaUFnSUNBZ0lISmxkSFZ5Ymp0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnBaaUFvWW1sdVpHbHVaeTVwYzBOdmJYQnZibVZ1ZENrZ2UxeHlYRzRnSUNBZ0lDQmpiMjV6ZENCamIyMXdiMjVsYm5SV1lXeDFaWE1nUFNCMllXeDFaWE5VY21WbFcySnBibVJwYm1kT1lXMWxYU0E5SUh0OU8xeHlYRzRnSUNBZ0lDQm5aWFJXWVd4MVpYTlVjbVZsS0haaGJIVmxjMXRpYVc1a2FXNW5UbUZ0WlYwc0lHSnBibVJwYm1jc0lHTnZiWEJ2Ym1WdWRGWmhiSFZsY3lrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdkbUZzZFdWelZISmxaVnNnWTI5dGNHOXVaVzUwTGw5c2FXNXJjMXRpYVc1a2FXNW5UbUZ0WlYwZ2ZId2dZbWx1WkdsdVowNWhiV1VnWFNBOUlIWmhiSE11ZG1Gc2RXVTdYSEpjYmlBZ2ZTazdYSEpjYmx4eVhHNGdJSEpsZEhWeWJpQjJZV3gxWlhOVWNtVmxPMXh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCdGIzWmxWWEJUZEdGMFpWQmhkR2dnS0d4bGRtVnNMQ0J6ZEdGMFpWQmhkR2dwSUh0Y2NseHVJQ0JzWlhRZ2JHRnpkRWxrZUNBOUlITjBZWFJsVUdGMGFDNXNaVzVuZEdnN1hISmNibHh5WEc0Z0lHbG1JQ2hzWlhabGJDQTlQVDBnSnljcElIdGNjbHh1SUNBZ0lISmxkSFZ5YmlCamNtVmhkR1ZCWTJObGMzTnZjaWh6ZEdGMFpWQmhkR2d1YzJ4cFkyVW9NQ3dnTWlrcE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2FXWWdLR2x6VTNSeWFXNW5LR3hsZG1Wc0tTa2dlMXh5WEc0Z0lDQWdkMmhwYkdVZ0tHeGhjM1JKWkhndExTa2dlMXh5WEc0Z0lDQWdJQ0JwWmlBb2MzUmhkR1ZRWVhSb1cyeGhjM1JKWkhoZElEMDlQU0JzWlhabGJDa2dlMXh5WEc0Z0lDQWdJQ0FnSUdKeVpXRnJPMXh5WEc0Z0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2NtVjBkWEp1SUdOeVpXRjBaVUZqWTJWemMyOXlLSE4wWVhSbFVHRjBhQzV6YkdsalpTZ3dMQ0JzWVhOMFNXUjRJQ3NnTVNrcE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2JHVjJaV3dnUFNCc1pYWmxiQ0I4ZkNBeE8xeHlYRzRnSUhkb2FXeGxJQ2hzWVhOMFNXUjRMUzBnSmlZZ2JHVjJaV3d0TFNrZ2UxeHlYRzRnSUNBZ2FXWWdLR2x6VG5WdFltVnlLQ3R6ZEdGMFpWQmhkR2hiYkdGemRFbGtlQ0F0SURGZEtTa2dlMXh5WEc0Z0lDQWdJQ0JzWVhOMFNXUjRMUzA3WEhKY2JpQWdJQ0I5WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0J5WlhSMWNtNGdZM0psWVhSbFFXTmpaWE56YjNJb2MzUmhkR1ZRWVhSb0xuTnNhV05sS0RBc0lHeGhjM1JKWkhnZ0t5QXhLU2s3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHMXZaR2xtZVZSdlFYSnlZWGxCWTJObGMzTnZjaUFvWVdOalpYTnpiM0lwSUh0Y2NseHVJQ0JQWW1wbFkzUXVZWE56YVdkdUtHRmpZMlZ6YzI5eUxDQjdYSEpjYmlBZ0lDQm5aWFE2SUNodWRXMHBJRDArSUdOeVpXRjBaVUZqWTJWemMyOXlLR0ZqWTJWemMyOXlMbkJoZEdndVkyOXVZMkYwS0c1MWJTd2dZV05qWlhOemIzSXVZMjl0Y0c5dVpXNTBMbXhwYzNSSmRHVnRMbTVoYldVcEtTeGNjbHh1WEhKY2JpQWdJQ0J3ZFhOb09pQW9aV3h6S1NBOVBpQnRiMlJwWm5sTWFYTjBLQ2RoWkdRbkxDQjdJSE4wWVhKME9pQmhZMk5sYzNOdmNpNTJZV3gxWlhNdWJHVnVaM1JvTENCbGJITWdmU3dnWVdOalpYTnpiM0lwTEZ4eVhHNGdJQ0FnZFc1emFHbG1kRG9nS0dWc2N5a2dQVDRnYlc5a2FXWjVUR2x6ZENnbllXUmtKeXdnZXlCemRHRnlkRG9nTUN3Z1pXeHpJSDBzSUdGalkyVnpjMjl5S1N4Y2NseHVJQ0FnSUdGa1pEb2dLSE4wWVhKMExDQmxiSE1wSUQwK0lHMXZaR2xtZVV4cGMzUW9KMkZrWkNjc0lIc2djM1JoY25Rc0lHVnNjeUI5TENCaFkyTmxjM052Y2lrc1hISmNibHh5WEc0Z0lDQWdjRzl3T2lBb2JuVnRLU0E5UGlCdGIyUnBabmxNYVhOMEtDZHlaVzF2ZG1VbkxDQjdJSE4wWVhKME9pQmhZMk5sYzNOdmNpNTJZV3gxWlhNdWJHVnVaM1JvSUMwZ0tHNTFiU0I4ZkNBeEtTd2diblZ0SUgwc0lHRmpZMlZ6YzI5eUtTeGNjbHh1SUNBZ0lITm9hV1owT2lBb2JuVnRLU0E5UGlCdGIyUnBabmxNYVhOMEtDZHlaVzF2ZG1VbkxDQjdJSE4wWVhKME9pQXdMQ0J1ZFcwZ2ZTd2dZV05qWlhOemIzSXBMRnh5WEc0Z0lDQWdjbVZ0YjNabE9pQW9jM1JoY25Rc0lHNTFiU2tnUFQ0Z2JXOWthV1o1VEdsemRDZ25jbVZ0YjNabEp5d2dleUJ6ZEdGeWRDd2diblZ0SUgwc0lHRmpZMlZ6YzI5eUtTeGNjbHh1WEhKY2JpQWdJQ0JzWlc1bmRHZzZJQ2dwSUQwK0lHRmpZMlZ6YzI5eUxuWmhiSFZsY3k1c1pXNW5kR2dzWEhKY2JpQWdJQ0IyWVd4MVpUb2dLQ2tnUFQ0Z2JXRndUR2x6ZENoaFkyTmxjM052Y2lrc1hISmNiaUFnSUNCbWIzSkZZV05vT2lBb1kySXBJRDArSUdsMFpYSmhkR1ZNYVhOMFZtRnNkV1Z6S0dGalkyVnpjMjl5TENCallpa3NYSEpjYmlBZ0lDQm1hV3gwWlhJNklDaGpZaWtnUFQ0Z1ptbHNkR1Z5VEdsemRDaGhZMk5sYzNOdmNpd2dZMklwTEZ4eVhHNGdJQ0FnYldGd09pQW9ZMklwSUQwK0lHMWhjRXhwYzNRb1lXTmpaWE56YjNJc0lHTmlLU3hjY2x4dUlDQjlLVHRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2FYUmxjbUYwWlV4cGMzUldZV3gxWlhNZ0tHRmpZMlZ6YzI5eUxDQmpZaWtnZTF4eVhHNGdJR0ZqWTJWemMyOXlMblpoYkhWbGN5NW1iM0pGWVdOb0tDaGxiQ3dnYVNrZ1BUNWNjbHh1SUNBZ0lHTmlLRnh5WEc0Z0lDQWdJQ0JuWlhSV1lXeDFaWE5VY21WbEtHVnNXMkZqWTJWemMyOXlMbU52YlhCdmJtVnVkQzVzYVhOMFNYUmxiUzV1WVcxbFhTd2dZV05qWlhOemIzSXVZMjl0Y0c5dVpXNTBMbXhwYzNSSmRHVnRMQ0I3ZlNrc1hISmNiaUFnSUNBZ0lHbGNjbHh1SUNBcEtUdGNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnWm1sc2RHVnlUR2x6ZENBb1lXTmpaWE56YjNJc0lHTmlLU0I3WEhKY2JpQWdZMjl1YzNRZ2JtVjNUR2x6ZENBOUlGdGRPMXh5WEc1Y2NseHVJQ0JwZEdWeVlYUmxUR2x6ZEZaaGJIVmxjeWhoWTJObGMzTnZjaXdnS0dWc0xDQnBLU0E5UGlCN1hISmNiaUFnSUNCcFppQW9ZMklvWld3c0lHa3BLU0I3WEhKY2JpQWdJQ0FnSUc1bGQweHBjM1F1Y0hWemFDaGxiQ2s3WEhKY2JpQWdJQ0I5WEhKY2JpQWdmU2s3WEhKY2JseHlYRzRnSUhKbGRIVnliaUJ1WlhkTWFYTjBPMXh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCdFlYQk1hWE4wSUNoaFkyTmxjM052Y2l3Z1kySXBJSHRjY2x4dUlDQmpiMjV6ZENCdVpYZE1hWE4wSUQwZ1cxMDdYSEpjYmlBZ2FYUmxjbUYwWlV4cGMzUldZV3gxWlhNb1lXTmpaWE56YjNJc0lDaGxiQ3dnYVNrZ1BUNGdibVYzVEdsemRDNXdkWE5vS0NCallpQS9JR05pS0dWc0xDQnBLU0E2SUdWc0lDa3BPMXh5WEc0Z0lISmxkSFZ5YmlCdVpYZE1hWE4wTzF4eVhHNTlYSEpjYmlJc0ltbHRjRzl5ZENCTVNVSmZRVlJVVWlCbWNtOXRJQ2N1TDJkc2IySmhiSE12WVhSMGNtbGlkWFJsY3ljN1hISmNibHh5WEc1cGJYQnZjblFnZXlCelpYUXNJR1p2Y2tWaFkyZ3NJRzFoY0N3Z2RHOVBZbXBsWTNRZ2ZTQm1jbTl0SUNjdUwyaGxiSEJsY25NdmIySnFaV04wSnp0Y2NseHVYSEpjYm1sdGNHOXlkQ0I3WEhKY2JpQWdhWE5GYlhCMGVTeGNjbHh1SUNCcGMwRnljbUY1TEZ4eVhHNGdJR2x6VDJKcVpXTjBMRnh5WEc1OUlHWnliMjBnSnk0dmFHVnNjR1Z5Y3k5amFHVmphMlZ5Y3ljN1hISmNibHh5WEc1cGJYQnZjblFnWVhKbFJYRjFZV3dnWm5KdmJTQW5MaTlvWld4d1pYSnpMMlZ4ZFdGc2FYUjVKenRjY2x4dWFXMXdiM0owSUhzZ2FHRnpJSDBnWm5KdmJTQW5MaTlvWld4d1pYSnpMMk52YlcxdmJpYzdYSEpjYmx4eVhHNXBiWEJ2Y25RZ2UxeHlYRzRnSUdkbGRFTnZiWEJ2Ym1WdWRDeGNjbHh1SUNCamNtVmhkR1ZCWTJObGMzTnZjaXhjY2x4dUlDQndjbVZ3WVhKbFEyaGhibWRsVDJKcVpXTjBMRnh5WEc0Z0lHZGxkRTl1YkhsV1lXeDFaWE1zWEhKY2JpQWdjMlYwVTNSaGRHVXNYSEpjYm4wZ1puSnZiU0FuTGk5VGRHRjBaU2M3WEhKY2JseHlYRzVwYlhCdmNuUWdleUJ5Wlc1a1pYSkRhR0Z1WjJWeklIMGdabkp2YlNBbkxpOVdhV1YzSnp0Y2NseHVYSEpjYm1sdGNHOXlkQ0I3SUZaQlRGVkZYMVJaVUVWVElIMGdabkp2YlNBbkxpOUVaV1pwYm1sMGFXOXVKenRjY2x4dVhISmNibWx0Y0c5eWRDQkNhVzVrYVc1blRtOTBSWGhwYzNSelJYSnliM0lnWm5KdmJTQW5MaTlsY25KdmNuTXZRbWx1WkdsdVowNXZkRVY0YVhOMGMwVnljbTl5Snp0Y2NseHVYSEpjYm1WNGNHOXlkQ0I3WEhKY2JpQWdjMlYwVm1Gc2RXVnpMRnh5WEc0Z0lHTnlaV0YwWlZOMFlYUmxUbTlrWlhNc1hISmNiaUFnYlc5a2FXWjVUR2x6ZEN4Y2NseHVJQ0J6ZEdGeWRGUnlZVzV6WVdOMGFXOXVMRnh5WEc0Z0lHRndjR3g1UTJoaGJtZGxjeXhjY2x4dUlDQnpaVzVrVkc5U1pXNWtaWEpSZFdWMVpTeGNjbHh1ZlR0Y2NseHVYSEpjYm1OdmJuTjBJRU5JUVU1SFJWTWdQU0I3SUdOb1lXNW5aWE02SUh0OUxDQmpiMnhzWldOMGFXNW5PaUJtWVd4elpTQjlPMXh5WEc1amIyNXpkQ0JRVWs5TlNWTkZVMTlTUlZOUFRGWkZVeUE5SUZ0ZE8xeHlYRzVqYjI1emRDQk1TVVpGWDBOWlEweEZYMGhCVGtSTVJWSlRJRDBnZXlCc2FYTjBPaUJiWFNCOU8xeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2MzUmhjblJVY21GdWMyRmpkR2x2YmlBb0tTQjdYSEpjYmlBZ1lYQndiSGxEYUdGdVoyVnpLQ2s3WEhKY2JpQWdRMGhCVGtkRlV5NWpiMnhzWldOMGFXNW5JRDBnZEhKMVpUdGNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnWVhCd2JIbERhR0Z1WjJWeklDZ3BJSHRjY2x4dUlDQmpiMjV6ZENCamFHRnVaMlZ6SUQwZ1EwaEJUa2RGVXk1amFHRnVaMlZ6TzF4eVhHNGdJRU5JUVU1SFJWTXVZMmhoYm1kbGN5QTlJSHQ5TzF4eVhHNGdJSEpsYm1SbGNrTm9ZVzVuWlhNb1kyaGhibWRsY3lrN1hISmNiaUFnY21WMGRYSnVJSEoxYmt4cFptVkRlV05zWlVodmIydHpLQ2s3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlISjFia3hwWm1WRGVXTnNaVWh2YjJ0eklDZ3BJSHRjY2x4dUlDQmpiMjV6ZENCc2FXWmxRM2xqYkdWSVlXNWtiR1Z5Y3lBOUlFeEpSa1ZmUTFsRFRFVmZTRUZPUkV4RlVsTXViR2x6ZER0Y2NseHVJQ0JNU1VaRlgwTlpRMHhGWDBoQlRrUk1SVkpUTG14cGMzUWdQU0JiWFR0Y2NseHVJQ0JzYVdabFEzbGpiR1ZJWVc1a2JHVnljeTVtYjNKRllXTm9LQ2hvS1NBOVBpQm9LQ2twTzF4eVhHNWNjbHh1SUNCcFppQW9JV2x6Ulcxd2RIa29RMGhCVGtkRlV5NWphR0Z1WjJWektTa2dlMXh5WEc0Z0lDQWdjbVYwZFhKdUlHRndjR3g1UTJoaGJtZGxjeWdwTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnY21WMGRYSnVJR1pwYm1Gc2FYcGxWSEpoYm5OaFkzUnBiMjRvS1R0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdabWx1WVd4cGVtVlVjbUZ1YzJGamRHbHZiaUFvS1NCN1hISmNiaUFnUTBoQlRrZEZVeTVqYjJ4c1pXTjBhVzVuSUQwZ1ptRnNjMlU3WEhKY2JpQWdiR1YwSUhKbGMyOXNkbVZRY205dGFYTmxPMXh5WEc1Y2NseHVJQ0IzYUdsc1pTQW9LSEpsYzI5c2RtVlFjbTl0YVhObElEMGdVRkpQVFVsVFJWTmZVa1ZUVDB4V1JWTXVjRzl3S0NrcEtTQjdYSEpjYmlBZ0lDQnlaWE52YkhabFVISnZiV2x6WlNoMGNuVmxLVHRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJSEpsZEhWeWJpQlFjbTl0YVhObExuSmxjMjlzZG1Vb2RISjFaU2s3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlITmxibVJVYjFKbGJtUmxjbEYxWlhWbElDaHdZWFJvTENCamFHRnVaMlVwSUh0Y2NseHVJQ0J6WlhRb1EwaEJUa2RGVXk1amFHRnVaMlZ6TENCd1lYUm9MQ0JqYUdGdVoyVXBPMXh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCcGMwTnZiR3hsWTNScGJtZERhR0Z1WjJWeklDZ3BJSHRjY2x4dUlDQnlaWFIxY200Z1EwaEJUa2RGVXk1amIyeHNaV04wYVc1bk8xeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJoWkdSTWFXWmxRM2xqYkdWSWIyOXJJQ2hvYjI5clZIbHdaU3dnWW1sdVpHbHVaeXdnZG1Gc2RXVnpMQ0JoWTJObGMzTnZjaXdnYVdSNEtTQjdYSEpjYmlBZ1kyOXVjM1FnYUc5dmF5QTlJR0pwYm1ScGJtY3VhRzl2YTNOYmFHOXZhMVI1Y0dWZE8xeHlYRzRnSUZ4eVhHNGdJRXhKUmtWZlExbERURVZmU0VGT1JFeEZVbE11YkdsemRDNXdkWE5vS0NncElEMCtJSHRjY2x4dUlDQWdJR052Ym5OMElHVnNJRDBnZG1Gc2RXVnpXMkpwYm1ScGJtY3VibUZ0WlNCOGZDQk1TVUpmUVZSVVVpNVRSVXhHWFM1bGJEdGNjbHh1SUNBZ0lHTnZibk4wSUhaaGJITWdQU0FoWW1sdVpHbHVaeTV1WVcxbElEOGdaMlYwVDI1c2VWWmhiSFZsY3loMllXeDFaWE1wSURvZ2RtRnNkV1Z6VzJKcGJtUnBibWN1Ym1GdFpWMHVkbUZzZFdVN1hISmNiaUFnSUNCb2IyOXJLR1ZzTENCMllXeHpMQ0JoWTJObGMzTnZjaXdnYVdSNEtUdGNjbHh1SUNCOUtUdGNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnWTNKbFlYUmxVM1JoZEdWT2IyUmxjeUFvYzNSaGRHVlFZWFJvS1NCN1hISmNiaUFnWTI5dWMzUWdZMjl0Y0c5dVpXNTBJRDBnWjJWMFEyOXRjRzl1Wlc1MEtITjBZWFJsVUdGMGFDazdYSEpjYmlBZ1kyOXVjM1FnZG1Gc2RXVnpUbTlrWlNBOUlHTnlaV0YwWlZOMFlYUmxUbTlrWlNoamIyMXdiMjVsYm5RcE8xeHlYRzRnSUhObGRGTjBZWFJsS0hOMFlYUmxVR0YwYUN3Z2RtRnNkV1Z6VG05a1pTazdYSEpjYmx4eVhHNGdJR1p2Y2tWaFkyZ29ZMjl0Y0c5dVpXNTBMbk4wWVhSbExDQW9ZbWx1WkdsdVp5d2dZbWx1WkdsdVowNWhiV1VwSUQwK0lIdGNjbHh1SUNBZ0lHbG1JQ2hpYVc1a2FXNW5MbWx6UTI5dGNHOXVaVzUwS1NCN1hISmNiaUFnSUNBZ0lHTnlaV0YwWlZOMFlYUmxUbTlrWlhNb2MzUmhkR1ZRWVhSb0xtTnZibU5oZENoaWFXNWthVzVuVG1GdFpTa3BPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lIMHBPMXh5WEc1Y2NseHVJQ0JqYjI1emRDQmhZMk5sYzNOdmNpQTlJR055WldGMFpVRmpZMlZ6YzI5eUtITjBZWFJsVUdGMGFDazdYSEpjYmlBZ1lXUmtUR2xtWlVONVkyeGxTRzl2YXlnbmJXOTFiblFuTENCamIyMXdiMjVsYm5RdWMzUmhkR1ZiVEVsQ1gwRlVWRkl1VTBWTVJsMHNJSFpoYkhWbGMwNXZaR1VzSUdGalkyVnpjMjl5TENCemRHRjBaVkJoZEdndWMyeHBZMlVvTFRJcFd6QmRLVHRjY2x4dVhISmNiaUFnY21WMGRYSnVJSFpoYkhWbGMwNXZaR1U3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHTnlaV0YwWlZOMFlYUmxUbTlrWlNBb1kyOXRjRzl1Wlc1MEtTQjdYSEpjYmlBZ1kyOXVjM1FnZG1Gc2RXVnpUbTlrWlhNZ1BTQnRZWEFvWTI5dGNHOXVaVzUwTG5OMFlYUmxMQ0FvWW1sdVpHbHVaeWtnUFQ0Z2UxeHlYRzRnSUNBZ1kyOXVjM1FnZG1Gc2RXVk9iMlJsSUQwZ1ltbHVaR2x1Wnk1cGMweHBjM1FnUHlCYlhTQTZJSHQ5TzF4eVhHNWNjbHh1SUNBZ0lISmxkSFZ5YmlCV1FVeFZSVjlVV1ZCRlV5NXlaV1IxWTJVb0tHRXNJR3RsZVNrZ1BUNGdlMXh5WEc0Z0lDQWdJQ0JzWlhRZ2RtRnNkV1U3WEhKY2JseHlYRzRnSUNBZ0lDQnpkMmwwWTJnZ0tHdGxlU2tnZTF4eVhHNGdJQ0FnSUNBZ0lHTmhjMlVnSjNaaGJIVmxKenBjY2x4dUlDQWdJQ0FnSUNCallYTmxJQ2RvZEcxc0p6cGNjbHh1SUNBZ0lDQWdJQ0FnSUhaaGJIVmxJRDBnWW1sdVpHbHVaeTVwYm1sMFZtRnNkV1VnZkh3Z0p5ZGNjbHh1SUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmtaV1poZFd4ME9seHlYRzRnSUNBZ0lDQWdJQ0FnZG1Gc2RXVWdQU0I3ZlR0Y2NseHVJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQ0FnWVZ0clpYbGRJRDBnZG1Gc2RXVTdYSEpjYmx4eVhHNGdJQ0FnSUNCeVpYUjFjbTRnWVR0Y2NseHVJQ0FnSUgwc0lIWmhiSFZsVG05a1pTazdYSEpjYmlBZ2ZTazdYSEpjYmx4eVhHNGdJSEpsZEhWeWJpQlBZbXBsWTNRdVlYTnphV2R1S0haaGJIVmxjMDV2WkdWekxDQjdJRnRNU1VKZlFWUlVVaTVUUlV4R1hUb2dkRzlQWW1wbFkzUW9Wa0ZNVlVWZlZGbFFSVk1zSUh0OUtTQjlLVHRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2MyVjBWbUZzZFdWeklDaGphR0Z1WjJWV1lXeDFaWE1zSUhOMFlYUmxVR0YwYUN3Z1kyRnNiR1ZrUkdWd1pXNWtaVzVqWlhNcElIdGNjbHh1SUNCallXeHNaV1JFWlhCbGJtUmxibU5sY3lBOUlHTmhiR3hsWkVSbGNHVnVaR1Z1WTJWeklIeDhJRnRkTzF4eVhHNGdJR052Ym5OMElHRmpZMlZ6YzI5eUlEMGdZM0psWVhSbFFXTmpaWE56YjNJb2MzUmhkR1ZRWVhSb0tUdGNjbHh1WEhKY2JpQWdhV1lnS0NGaFkyTmxjM052Y2k1MllXeDFaWE1wSUh0Y2NseHVJQ0FnSUdGalkyVnpjMjl5TG5aaGJIVmxjeUE5SUdOeVpXRjBaVk4wWVhSbFRtOWtaWE1vYzNSaGRHVlFZWFJvS1R0Y2NseHVJQ0FnSUdOdmJuTjBJSE4wWVhKMElEMGdLM04wWVhSbFVHRjBhQzV6YkdsalpTZ3RNaWxiTUYwN1hISmNiaUFnSUNCelpXNWtWRzlTWlc1a1pYSlJkV1YxWlNoemRHRjBaVkJoZEdnc0lIc2dXMHhKUWw5QlZGUlNMa1pWVEV4ZlEwaEJUa2RGWFRvZ2V5QmhaR1E2SUhzZ2MzUmhjblFzSUdWdVpEb2djM1JoY25RZ0t5QXhJSDBnZlNCOUtWeHlYRzRnSUgxY2NseHVYSEpjYmlBZ1ptOXlSV0ZqYUNoamFHRnVaMlZXWVd4MVpYTXNJQ2hqYUdGdVoyVXNJR0pwYm1ScGJtZE9ZVzFsS1NBOVBpQnpaWFJXWVd4MVpTaGlhVzVrYVc1blRtRnRaU3dnWTJoaGJtZGxMQ0JoWTJObGMzTnZjaXdnWTJGc2JHVmtSR1Z3Wlc1a1pXNWpaWE1wS1R0Y2NseHVYSEpjYmlBZ1lXUmtUR2xtWlVONVkyeGxTRzl2YXlnbmRYQmtZWFJsSnl3Z1lXTmpaWE56YjNJdVkyOXRjRzl1Wlc1MExuTjBZWFJsVzB4SlFsOUJWRlJTTGxORlRFWmRMQ0JoWTJObGMzTnZjaTUyWVd4MVpYTXNJR0ZqWTJWemMyOXlMQ0J6ZEdGMFpWQmhkR2d1YzJ4cFkyVW9MVElwV3pCZEtUdGNjbHh1WEhKY2JpQWdhV1lnS0dselEyOXNiR1ZqZEdsdVowTm9ZVzVuWlhNb0tTa2dlMXh5WEc0Z0lDQWdjbVYwZFhKdUlHNWxkeUJRY205dGFYTmxLQ2h5WlhNcElEMCtJRkJTVDAxSlUwVlRYMUpGVTA5TVZrVlRMbkIxYzJnb2NtVnpLU2s3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0J5WlhSMWNtNGdZWEJ3YkhsRGFHRnVaMlZ6S0NrN1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJSE5sZEZaaGJIVmxJQ2hpYVc1a2FXNW5UbUZ0WlN3Z1kyaGhibWRsTENCaFkyTmxjM052Y2l3Z1kyRnNiR1ZrUkdWd1pXNWtaVzVqWlhNcElIdGNjbHh1SUNCamIyNXpkQ0J6ZEdGMFpWQmhkR2dnUFNCaFkyTmxjM052Y2k1d1lYUm9PMXh5WEc0Z0lHTnZibk4wSUdOdmJYQnZibVZ1ZENBOUlHRmpZMlZ6YzI5eUxtTnZiWEJ2Ym1WdWREdGNjbHh1SUNCamIyNXpkQ0IyWVd4MVpYTWdQU0JoWTJObGMzTnZjaTUyWVd4MVpYTTdYSEpjYmlBZ2JHVjBJR0pwYm1ScGJtY2dQU0JqYjIxd2IyNWxiblF1YzNSaGRHVmJZbWx1WkdsdVowNWhiV1ZkTzF4eVhHNWNjbHh1SUNCcFppQW9JV0pwYm1ScGJtY3BJSHRjY2x4dUlDQWdJR0pwYm1ScGJtZE9ZVzFsSUQwZ1kyOXRjRzl1Wlc1MExtOTFkR1Z5VG1GdFpYTmJZbWx1WkdsdVowNWhiV1ZkTzF4eVhHNGdJQ0FnWW1sdVpHbHVaeUE5SUdOdmJYQnZibVZ1ZEM1emRHRjBaVnRpYVc1a2FXNW5UbUZ0WlYwN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCcFppQW9JV0pwYm1ScGJtY3BJSHRjY2x4dUlDQWdJSFJvY205M0lHNWxkeUJDYVc1a2FXNW5UbTkwUlhocGMzUnpSWEp5YjNJb1ltbHVaR2x1WjA1aGJXVXNJR052YlhCdmJtVnVkQzV1WVcxbExDQnpkR0YwWlZCaGRHZ3BPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdhV1lnS0dOb1lXNW5aUzUwZVhCbElEMDlQU0FuZG1Gc2RXVW5LU0I3WEhKY2JpQWdJQ0JwWmlBb1ltbHVaR2x1Wnk1cGMweHBjM1FwSUh0Y2NseHVJQ0FnSUNBZ2NtVjBkWEp1SUhObGRGWmhiSFZsUm05eVRHbHpkQ2hpYVc1a2FXNW5MQ0JqYUdGdVoyVXNJSFpoYkhWbGMxdGlhVzVrYVc1blRtRnRaVjBzSUdGalkyVnpjMjl5S1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnBaaUFvYVhOUFltcGxZM1FvWTJoaGJtZGxMblpoYkhWbEtTQW1KaUJpYVc1a2FXNW5MbWx6UTI5dGNHOXVaVzUwS1NCN1hISmNiaUFnSUNBZ0lISmxkSFZ5YmlCelpYUldZV3gxWlVadmNrTnZiWEJ2Ym1WdWRDaGlhVzVrYVc1bkxDQmphR0Z1WjJVc0lHTnZiWEJ2Ym1WdWRDd2djM1JoZEdWUVlYUm9LVHRjY2x4dUlDQWdJSDFjY2x4dUlDQjlYSEpjYmx4eVhHNGdJR052Ym5OMElHVnhkV0ZzSUQwZ1lYSmxSWEYxWVd3b2RtRnNkV1Z6VzJKcGJtUnBibWRPWVcxbFhWdGphR0Z1WjJVdWRIbHdaVjBzSUdOb1lXNW5aUzUyWVd4MVpTazdYSEpjYmx4eVhHNGdJR2xtSUNnaFpYRjFZV3dnZkh3Z0lXbHpSVzF3ZEhrb1pYRjFZV3dwSUh4OElHTm9ZVzVuWlM1bWIzSmpaU2tnZTF4eVhHNGdJQ0FnZG1Gc2RXVnpXMkpwYm1ScGJtZE9ZVzFsWFZ0amFHRnVaMlV1ZEhsd1pWMGdQU0JqYUdGdVoyVXVkbUZzZFdVN1hISmNibHh5WEc0Z0lDQWdhV1lnS0dOb1lXNW5aUzUwZVhCbElDRTlQU0FuZG1Gc2RXVW5LU0I3WEhKY2JpQWdJQ0FnSUhKbGRIVnliaUJ6Wlc1a1ZHOVNaVzVrWlhKUmRXVjFaU2h6ZEdGMFpWQmhkR2d1WTI5dVkyRjBLR0pwYm1ScGJtZE9ZVzFsS1N3Z2V5QmJZMmhoYm1kbExuUjVjR1ZkT2lCbVlXeHpaU0I5S1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQmhaR1JNYVdabFEzbGpiR1ZJYjI5cktDZDFjR1JoZEdVbkxDQmlhVzVrYVc1bkxDQjJZV3gxWlhNc0lHRmpZMlZ6YzI5eUxDQnpkR0YwWlZCaGRHZ3VjMnhwWTJVb0xUSXBXekJkS1R0Y2NseHVJQ0FnSUdOaGJHeGxaRVJsY0dWdVpHVnVZMlZ6TG5CMWMyZ29ZbWx1WkdsdVowNWhiV1VnS3lBbk9pY2dLeUJqYUdGdVoyVXVkSGx3WlNrN1hISmNibHh5WEc0Z0lDQWdhV1lnS0NGaWFXNWthVzVuTG1oMGJXd3BJSHRjY2x4dUlDQWdJQ0FnYzJWMFZtRnNkV1VvWW1sdVpHbHVaMDVoYldVc0lIc2dkbUZzZFdVNklHTm9ZVzVuWlM1MllXeDFaU3dnZEhsd1pUb2dKMmgwYld3bkxDQm1iM0pqWlRvZ1kyaGhibWRsTG1admNtTmxJSDBzSUdGalkyVnpjMjl5TENCallXeHNaV1JFWlhCbGJtUmxibU5sY3lrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdZMjl1YzNRZ2JHbHVheUE5SUdOdmJYQnZibVZ1ZEM1c2FXNXJjMXRpYVc1a2FXNW5UbUZ0WlYwN1hISmNiaUFnSUNCcFppQW9iR2x1YXlrZ2UxeHlYRzRnSUNBZ0lDQnpaWFJXWVd4MVpTaHNhVzVyTG14cGJtc3NJSHNnZG1Gc2RXVTZJR05vWVc1blpTNTJZV3gxWlN3Z2RIbHdaVG9nSjNaaGJIVmxKeXdnWm05eVkyVTZJR05vWVc1blpTNW1iM0pqWlNCOUxDQmhZMk5sYzNOdmNpNWtiM2R1S0d4cGJtc3VZMjl0Y0c5dVpXNTBLU3dnVzEwcE8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJR1p2Y2tWaFkyZ29ZbWx1WkdsdVp5NWtaWEJsYm1SaGJuUnpMQ0FvWkdWd1pXNWtZVzUwTENCa1pYQmxibVJoYm5STFpYa3BJRDArSUh0Y2NseHVJQ0FnSUNBZ2FXWWdLR2hoY3loallXeHNaV1JFWlhCbGJtUmxibU5sY3l3Z1pHVndaVzVrWVc1MFMyVjVLU2tnZTF4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5Ymp0Y2NseHVJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQ0FnWTI5dWMzUWdibVYzVm1Gc2RXVWdQU0JqYjIxd2IyNWxiblF1YzNSaGRHVmJaR1Z3Wlc1a1lXNTBMbTVoYldWZExtVjJZV3gxWVhSbFcyUmxjR1Z1WkdGdWRDNTBlWEJsWFNoMllXeDFaWE1zSUdGalkyVnpjMjl5S1R0Y2NseHVJQ0FnSUNBZ2MyVjBWbUZzZFdVb1pHVndaVzVrWVc1MExtNWhiV1VzSUhzZ2RtRnNkV1U2SUc1bGQxWmhiSFZsTENCMGVYQmxPaUJrWlhCbGJtUmhiblF1ZEhsd1pTQjlMQ0JoWTJObGMzTnZjaXdnWTJGc2JHVmtSR1Z3Wlc1a1pXNWpaWE1wTzF4eVhHNGdJQ0FnZlNrN1hISmNiaUFnZlZ4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQnpaWFJXWVd4MVpVWnZja3hwYzNRZ0tHSnBibVJwYm1jc0lHTm9ZVzVuWlN3Z1lYSnlMQ0JoWTJObGMzTnZjaWtnZTF4eVhHNGdJRTlpYW1WamRGeHlYRzRnSUNBZ0xtdGxlWE1vWTJoaGJtZGxMblpoYkhWbEtWeHlYRzRnSUNBZ0xtWnZja1ZoWTJnb0tHa3BJRDArSUhObGRGWmhiSFZsY3lnZ2NISmxjR0Z5WlVOb1lXNW5aVTlpYW1WamRDaGphR0Z1WjJVdWRtRnNkV1ZiYVYwcExDQmhZMk5sYzNOdmNpNXdZWFJvTG1OdmJtTmhkQ2hpYVc1a2FXNW5MbTVoYldVc0lHa3NJR0pwYm1ScGJtY3ViR2x6ZEVsMFpXMHVibUZ0WlNrcEtUdGNjbHh1WEhKY2JpQWdZMjl1YzNRZ2FXNWtaWGhGY1hWaGJHbDBlU0E5SUdGeVpVVnhkV0ZzS0dGeWNpd2dZMmhoYm1kbExuWmhiSFZsS1R0Y2NseHVJQ0JtYjNKRllXTm9LR2x1WkdWNFJYRjFZV3hwZEhrc0lDaGphR0Z1WjJWUFltb3NJR2xrZUNrZ1BUNGdlMXh5WEc0Z0lDQWdhV1lnS0dOb1lXNW5aVTlpYWk1eVpXMXZkbVVwSUh0Y2NseHVJQ0FnSUNBZ1kyaGhibWRsVDJKcUxuSmxiVzkyWlNBOUlISmxiVzkyWlV4cGMzUkpkR1Z0S0dGeWNpd2dhV1I0TENCaWFXNWthVzVuTENCaFkyTmxjM052Y2lrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjMlZ1WkZSdlVtVnVaR1Z5VVhWbGRXVW9ZV05qWlhOemIzSXVjR0YwYUM1amIyNWpZWFFvWW1sdVpHbHVaeTV1WVcxbExDQnBaSGdzSUdKcGJtUnBibWN1YkdsemRFbDBaVzB1Ym1GdFpTa3NJSHNnVzB4SlFsOUJWRlJTTGtaVlRFeGZRMGhCVGtkRlhUb2dZMmhoYm1kbFQySnFJSDBwTzF4eVhHNGdJSDBwTzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQnpaWFJXWVd4MVpVWnZja052YlhCdmJtVnVkQ0FvWW1sdVpHbHVaeXdnWTJoaGJtZGxMQ0JqYjIxd2IyNWxiblFzSUhOMFlYUmxVR0YwYUNrZ2UxeHlYRzRnSUhObGRGWmhiSFZsY3lnZ2NISmxjR0Z5WlVOb1lXNW5aVTlpYW1WamRDaGphR0Z1WjJVdWRtRnNkV1VwTENCemRHRjBaVkJoZEdndVkyOXVZMkYwS0dKcGJtUnBibWN1Ym1GdFpTa3BPMXh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCdGIyUnBabmxNYVhOMElDaGhZM1JwYjI0c0lHRnlaM01zSUdGalkyVnpjMjl5S1NCN1hISmNiaUFnWTI5dWMzUWdZWEp5SUQwZ1lXTmpaWE56YjNJdWRtRnNkV1Z6TzF4eVhHNGdJR052Ym5OMElHeHBjM1JRWVhSb0lEMGdZV05qWlhOemIzSXVjR0YwYUR0Y2NseHVJQ0JqYjI1emRDQnBkR1Z0VG1GdFpTQTlJR0ZqWTJWemMyOXlMbU52YlhCdmJtVnVkQzVzYVhOMFNYUmxiUzV1WVcxbE8xeHlYRzRnSUdOdmJuTjBJSE4wWVhKMElEMGdZWEpuY3k1emRHRnlkRHRjY2x4dUlDQnNaWFFnWTJoaGJtZGxUMkpxSUQwZ2UzMDdYSEpjYmx4eVhHNGdJSE4zYVhSamFDQW9ZV04wYVc5dUtTQjdYSEpjYmlBZ0lDQmpZWE5sSUNkaFpHUW5PbHh5WEc0Z0lDQWdJQ0JqYUdGdVoyVlBZbW9nUFNCaFpHUlViMHhwYzNRb1lYSnlMQ0J6ZEdGeWRDd2dZWEpuY3k1bGJITXNJR3hwYzNSUVlYUm9MQ0JwZEdWdFRtRnRaU2s3WEhKY2JpQWdJQ0FnSUdKeVpXRnJPMXh5WEc1Y2NseHVJQ0FnSUdOaGMyVWdKM0psYlc5MlpTYzZYSEpjYmlBZ0lDQWdJR052Ym5OMElHVnVaQ0E5SUhOMFlYSjBJQ3NnS0dGeVozTXViblZ0SUh4OElERXBPMXh5WEc0Z0lDQWdJQ0JqYUdGdVoyVlBZbW9nUFNCeVpXMXZkbVZHY205dFRHbHpkQ2hoY25Jc0lITjBZWEowTENCbGJtUXNJR0ZqWTJWemMyOXlMbU52YlhCdmJtVnVkQ3dnWVdOalpYTnpiM0lwTzF4eVhHNGdJQ0FnSUNCaWNtVmhhenRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJR1p2Y2tWaFkyZ29ZMmhoYm1kbFQySnFMQ0FvWTJoaGJtZGxMQ0JwWkhncElEMCtJSE5sYm1SVWIxSmxibVJsY2xGMVpYVmxLR3hwYzNSUVlYUm9MbU52Ym1OaGRDaHBaSGdzSUdsMFpXMU9ZVzFsTENCTVNVSmZRVlJVVWk1R1ZVeE1YME5JUVU1SFJTa3NJR05vWVc1blpVOWlhbHRwWkhoZFcweEpRbDlCVkZSU0xrWlZURXhmUTBoQlRrZEZYU2twTzF4eVhHNWNjbHh1SUNCcFppQW9hWE5EYjJ4c1pXTjBhVzVuUTJoaGJtZGxjeWdwS1NCN1hISmNiaUFnSUNCeVpYUjFjbTRnYm1WM0lGQnliMjFwYzJVb0tISmxjeWtnUFQ0Z1VGSlBUVWxUUlZOZlVrVlRUMHhXUlZNdWNIVnphQ2h5WlhNcEtUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lISmxkSFZ5YmlCaGNIQnNlVU5vWVc1blpYTW9LVHRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z1lXUmtWRzlNYVhOMElDaGhjbklzSUhOMFlYSjBMQ0JsYkhNc0lHeHBjM1JRWVhSb0xDQnBkR1Z0VG1GdFpTa2dlMXh5WEc0Z0lHVnNjeUE5SUdselFYSnlZWGtvWld4ektTQS9JR1ZzY3lBNklGdGxiSE5kTzF4eVhHNWNjbHh1SUNCbGJITXVabTl5UldGamFDZ29aV3dzSUdrcElEMCtJSHRjY2x4dUlDQWdJR0Z5Y2k1emNHeHBZMlVvYVNBcklITjBZWEowTENBd0xDQnVkV3hzS1R0Y2NseHVJQ0FnSUhObGRGWmhiSFZsY3lod2NtVndZWEpsUTJoaGJtZGxUMkpxWldOMEtHVnNLU3dnYkdsemRGQmhkR2d1WTI5dVkyRjBLR2tnS3lCemRHRnlkQ3dnYVhSbGJVNWhiV1VwS1R0Y2NseHVJQ0I5S1R0Y2NseHVYSEpjYmlBZ2NtVjBkWEp1SUhzZ1czTjBZWEowWFRvZ2V5QmJURWxDWDBGVVZGSXVSbFZNVEY5RFNFRk9SMFZkT2lCN0lHRmtaRG9nZXlCemRHRnlkQ3dnWlc1a09pQnpkR0Z5ZENBcklHVnNjeTVzWlc1bmRHZ2dmU0I5SUgwZ2ZUdGNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnY21WdGIzWmxSbkp2YlV4cGMzUWdLR0Z5Y2l3Z2MzUmhjblFzSUdWdVpDd2diR2x6ZEVKcGJtUnBibWNzSUdGalkyVnpjMjl5S1NCN1hISmNiaUFnWTI5dWMzUWdZMmhoYm1kbFQySnFJRDBnZTMwN1hISmNibHh5WEc0Z0lHWnZjaUFvYkdWMElHa2dQU0J6ZEdGeWREc2dhU0E4SUdWdVpEc2dhU3NyS1NCN1hISmNiaUFnSUNCamIyNXpkQ0J5WlcxdmRtVmtSRTlOVG05a1pTQTlJSEpsYlc5MlpVeHBjM1JKZEdWdEtHRnljaXdnYVN3Z2JHbHpkRUpwYm1ScGJtY3NJR0ZqWTJWemMyOXlLVHRjY2x4dUlDQWdJR05vWVc1blpVOWlhbHRwWFNBOUlIc2dXMHhKUWw5QlZGUlNMa1pWVEV4ZlEwaEJUa2RGWFRvZ2V5QnlaVzF2ZG1VNklISmxiVzkyWldSRVQwMU9iMlJsSUgwZ2ZWeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2NtVjBkWEp1SUdOb1lXNW5aVTlpYWp0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdjbVZ0YjNabFRHbHpkRWwwWlcwZ0tHRnljaXdnYVdSNExDQnNhWE4wUW1sdVpHbHVaeXdnWVdOalpYTnpiM0lwSUh0Y2NseHVJQ0JqYjI1emRDQnlaVzF2ZG1Wa1RtOWtaU0E5SUdGeWNpNXpjR3hwWTJVb2FXUjRMQ0F4S1Zzd1hWdHNhWE4wUW1sdVpHbHVaeTVzYVhOMFNYUmxiUzV1WVcxbFhUdGNjbHh1SUNCaFpHUk1hV1psUTNsamJHVkliMjlyS0NkeVpXMXZkbVVuTENCc2FYTjBRbWx1WkdsdVp5NXNhWE4wU1hSbGJTNXpkR0YwWlZ0TVNVSmZRVlJVVWk1VFJVeEdYU3dnY21WdGIzWmxaRTV2WkdVc0lHRmpZMlZ6YzI5eUxDQnBaSGdwTzF4eVhHNGdJSEpsZEhWeWJpQnlaVzF2ZG1Wa1RtOWtaVnRNU1VKZlFWUlVVaTVUUlV4R1hTNWxiRHRjY2x4dWZWeHlYRzRpTENKcGJYQnZjblFnVEVsQ1gwRlVWRklnWm5KdmJTQW5MaTluYkc5aVlXeHpMMkYwZEhKcFluVjBaWE1uTzF4eVhHNXBiWEJ2Y25RZ2V5QjBiMFJoYzJoRFlYTmxJSDBnWm5KdmJTQW5MaTlvWld4d1pYSnpMMk52YlcxdmJpYzdYSEpjYm1sdGNHOXlkQ0I3SUdadmNrVmhZMmdzSUhOd2JHbDBVR2xsWTJVZ2ZTQm1jbTl0SUNjdUwyaGxiSEJsY25NdmIySnFaV04wSnp0Y2NseHVYSEpjYm1sdGNHOXlkQ0I3SUdselRuVnRZbVZ5TENCcGMxVnVaR1ZtYVc1bFpDQjlJR1p5YjIwZ0p5NHZhR1ZzY0dWeWN5OWphR1ZqYTJWeWN5YzdYSEpjYmx4eVhHNXBiWEJ2Y25RZ2V5QmpjbVZoZEdWQlkyTmxjM052Y2lCOUlHWnliMjBnSnk0dlUzUmhkR1VuTzF4eVhHNWNjbHh1YVcxd2IzSjBJSHRjY2x4dUlDQnlaWEJzWVdObFRtOWtaWE1zWEhKY2JpQWdjbVZ0YjNabFRtOWtaU3hjY2x4dUlDQnlaWGR5YVhSbFZHOU9iMlJsTEZ4eVhHNGdJR1Z0Y0hSNVRtOWtaU3hjY2x4dWZTQm1jbTl0SUNjdUwyaGxiSEJsY25NdlpHOXRKenRjY2x4dVhISmNibVY0Y0c5eWRDQjdYSEpjYmlBZ1kzSmxZWFJsUVc1a1FYQndaVzVrVTNSNWJHVnpMRnh5WEc0Z0lISmxibVJsY2tOb1lXNW5aWE5jY2x4dWZUdGNjbHh1WEhKY2JtTnZibk4wSUhKbGJtUmxjaUE5SUh0Y2NseHVJQ0JvZEcxc09pQmhjSEJzZVUxaGNtdDFjQ3hjY2x4dUlDQmpiR0Z6Y3pvZ1lYQndiSGxEYkdGemMyVnpMRnh5WEc0Z0lITjBlV3hsT2lCaGNIQnNlVk4wZVd4bGN5eGNjbHh1SUNCaGRIUnljem9nWVhCd2JIbEJkSFJ5YVdKMWRHVnpMRnh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCeVpXNWtaWEpEYUdGdVoyVnpJQ2hqYUdGdVoyVnpLU0I3WEhKY2JpQWdabTl5UldGamFDaGphR0Z1WjJWekxDQW9ZMjl0Y0c5dVpXNTBRMmhoYm1kbGN5d2daV3hsYldWdWRFbGtLU0E5UGlCN1hISmNiaUFnSUNCamIyNXpkQ0JqYjIxd2IyNWxiblJKWkNBOUlFOWlhbVZqZEM1clpYbHpLR052YlhCdmJtVnVkRU5vWVc1blpYTXBXekJkWEhKY2JpQWdJQ0JqYjI1emRDQmpiMjF3YjI1bGJuUkJZMk5sYzNOdmNpQTlJR055WldGMFpVRmpZMlZ6YzI5eUtGdGxiR1Z0Wlc1MFNXUXNJR052YlhCdmJtVnVkRWxrWFNrN1hISmNiaUFnSUNCaGNIQnNlVTFoY210MWNDaGpiMjF3YjI1bGJuUkJZMk5sYzNOdmNpNWpiMjF3YjI1bGJuUXNJR052YlhCdmJtVnVkRUZqWTJWemMyOXlMblpoYkhWbGN5d2dXMlZzWlcxbGJuUkpaQ3dnWTI5dGNHOXVaVzUwU1dSZExDQmpiMjF3YjI1bGJuUkRhR0Z1WjJWelcyTnZiWEJ2Ym1WdWRFbGtYU2s3WEhKY2JpQWdmU2s3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHRndjR3g1VFdGeWEzVndJQ2hqYjIxd2IyNWxiblFzSUhaaGJIVmxMQ0J6ZEdGMFpWQmhkR2dzSUdOb1lXNW5aWE1wSUh0Y2NseHVJQ0JwWmlBb0lXTnZiWEJ2Ym1WdWRDNXRZWEpyZFhBcElIdGNjbHh1SUNBZ0lISmxkSFZ5Ymp0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUdsbUlDaGpiMjF3YjI1bGJuUXVhWE5NYVhOMEtTQjdYSEpjYmlBZ0lDQnlaWFIxY200Z2NtVnVaR1Z5VEdsemRDaGpiMjF3YjI1bGJuUXNJSFpoYkhWbExDQnpkR0YwWlZCaGRHZ3NJR05vWVc1blpYTXBPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdhV1lnS0dOdmJYQnZibVZ1ZEM1cGMwTnZiWEJ2Ym1WdWRDa2dlMXh5WEc0Z0lDQWdjbVYwZFhKdUlISmxibVJsY2tOdmJYQnZibVZ1ZENoamIyMXdiMjVsYm5Rc0lIWmhiSFZsTENCemRHRjBaVkJoZEdnc0lHTm9ZVzVuWlhNcE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2RtRnNkV1VnUFNCcGMxVnVaR1ZtYVc1bFpDaDJZV3gxWlNrZ1B5QW5KeUE2SUhaaGJIVmxPMXh5WEc1Y2NseHVJQ0JwWmlBb1kyOXRjRzl1Wlc1MExtMWhjbXQxY0M1MFlXZE9ZVzFsSUQwOVBTQW5TVTVRVlZRbktTQjdYSEpjYmlBZ0lDQmpiMjF3YjI1bGJuUXViV0Z5YTNWd0xuWmhiSFZsSUQwZ2RtRnNkV1U3WEhKY2JpQWdJQ0J5WlhSMWNtNDdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQnlaWGR5YVhSbFZHOU9iMlJsS0dOdmJYQnZibVZ1ZEM1dFlYSnJkWEFzSUhaaGJIVmxLVHRjY2x4dVhISmNiaUFnY21WMGRYSnVJR052YlhCdmJtVnVkRHRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2NtVnVaR1Z5UTI5dGNHOXVaVzUwSUNoamIyMXdiMjVsYm5Rc0lIWmhiSFZsTENCemRHRjBaVkJoZEdnc0lHTm9ZVzVuWlhNcElIdGNjbHh1SUNCcFppQW9ZMmhoYm1kbGN5a2dlMXh5WEc0Z0lDQWdjbVYwZFhKdUlIVndaR0YwWlVOdmJYQnZibVZ1ZENoamIyMXdiMjVsYm5Rc0lIWmhiSFZsTENCemRHRjBaVkJoZEdnc0lHTm9ZVzVuWlhNcE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2NtVjBkWEp1SUdSeVlYZERiMjF3YjI1bGJuUW9kbUZzZFdVc0lITjBZWFJsVUdGMGFDazdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUdSeVlYZERiMjF3YjI1bGJuUWdLSFpoYkhWbGN5d2djM1JoZEdWUVlYUm9LU0I3WEhKY2JpQWdZMjl1YzNRZ1lXTmpaWE56YjNJZ1BTQmpjbVZoZEdWQlkyTmxjM052Y2loemRHRjBaVkJoZEdncE8xeHlYRzRnSUdOdmJuTjBJR052YlhCdmJtVnVkQ0E5SUdGalkyVnpjMjl5TG1OdmJYQnZibVZ1ZER0Y2NseHVYSEpjYmlBZ1kyOXVjM1FnYVhSbGJWZHlZWEJ3WlhJZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0Nka2FYWW5LVHRjY2x4dUlDQmpiMjV6ZENCcGRHVnRUV0Z5YTNWd0lEMGdZMjl0Y0c5dVpXNTBMblJsYlhCc1lYUmxMbU5zYjI1bFRtOWtaU2gwY25WbEtUdGNjbHh1SUNCMllXeDFaWE5iVEVsQ1gwRlVWRkl1VTBWTVJsMHVaV3dnUFNCcGRHVnRUV0Z5YTNWd08xeHlYRzRnSUdsMFpXMVhjbUZ3Y0dWeUxtRndjR1Z1WkVOb2FXeGtLR2wwWlcxTllYSnJkWEFwTzF4eVhHNWNjbHh1SUNCcGRHVnRUV0Z5YTNWd0xuTmxkRUYwZEhKcFluVjBaU2hNU1VKZlFWUlVVaTVEVDAxUVQwNUZUbFJmVkZsUVJTd2dLR052YlhCdmJtVnVkQzVwYzB4cGMzUkpkR1Z0S1NBL0lFeEpRbDlCVkZSU0xrbFVSVTBnT2lCTVNVSmZRVlJVVWk1RFQwMVFUMDVGVGxRcE8xeHlYRzVjY2x4dUlDQm1iM0pGWVdOb0tISmxibVJsY2l3Z0tISmxibVJsY2taMWJtTXNJSEpsYm1SbGNsUjVjR1VwSUQwK0lIdGNjbHh1SUNBZ0lHbG1JQ2hqYjIxd2IyNWxiblF1YzNSaGRHVmJURWxDWDBGVVZGSXVVMFZNUmwxYmNtVnVaR1Z5Vkhsd1pWMHBJSHRjY2x4dUlDQWdJQ0FnY21WdVpHVnlSblZ1WXloN0lHMWhjbXQxY0RvZ2FYUmxiVTFoY210MWNDQjlMQ0IyWVd4MVpYTmJURWxDWDBGVVZGSXVVMFZNUmwxYmNtVnVaR1Z5Vkhsd1pWMHBPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lIMHBPMXh5WEc1Y2NseHVJQ0JtYjNKRllXTm9LR052YlhCdmJtVnVkQzV6ZEdGMFpTd2dLR0pwYm1ScGJtY3NJR0pwYm1ScGJtZE9ZVzFsS1NBOVBpQjdYSEpjYmlBZ0lDQnBaaUFvSVdKcGJtUnBibWN1YldGeWEzVndLU0I3WEhKY2JpQWdJQ0FnSUhKbGRIVnlianRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCamIyNXpkQ0JpYVc1a2FXNW5UbTlrWlNBOUlHbDBaVzFYY21Gd2NHVnlMbkYxWlhKNVUyVnNaV04wYjNJb0p5NG5JQ3NnVEVsQ1gwRlVWRkl1VUZKRlJrbFlJQ3NnWW1sdVpHbHVaeTVwWkNrN1hISmNiaUFnSUNCaWFXNWthVzVuVG05a1pTNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtFeEpRbDlCVkZSU0xsQlNSVVpKV0NBcklHSnBibVJwYm1jdWFXUXBPMXh5WEc1Y2NseHVJQ0FnSUdsbUlDaGlhVzVrYVc1bkxtbHpRMjl0Y0c5dVpXNTBLU0I3WEhKY2JpQWdJQ0FnSUdOdmJuTjBJR05vYVd4a1UzUmhkR1ZRWVhSb0lEMGdjM1JoZEdWUVlYUm9MbU52Ym1OaGRDaGlhVzVrYVc1blRtRnRaU2s3WEhKY2JpQWdJQ0FnSUdOdmJuTjBJR05vYVd4a1RXRnlhM1Z3SUQwZ1pISmhkME52YlhCdmJtVnVkQ2gyWVd4MVpYTmJZbWx1WkdsdVowNWhiV1ZkTENCamFHbHNaRk4wWVhSbFVHRjBhQ2s3WEhKY2JpQWdJQ0FnSUhKbGNHeGhZMlZPYjJSbGN5aGlhVzVrYVc1blRtOWtaU3dnWTJocGJHUk5ZWEpyZFhBcE8xeHlYRzRnSUNBZ0lDQnlaWFIxY200N1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdkbUZzZFdWelcySnBibVJwYm1kT1lXMWxYUzVsYkNBOUlHSnBibVJwYm1kT2IyUmxPMXh5WEc1Y2NseHVJQ0FnSUdsbUlDaGlhVzVrYVc1bkxtbHpUR2x6ZENrZ2UxeHlYRzRnSUNBZ0lDQnlaVzVrWlhKTWFYTjBLR0pwYm1ScGJtY3NJSFpoYkhWbGMxdGlhVzVrYVc1blRtRnRaVjBzSUhOMFlYUmxVR0YwYUM1amIyNWpZWFFvWW1sdVpHbHVaMDVoYldVcEtUdGNjbHh1SUNBZ0lDQWdjbVYwZFhKdU8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJR1p2Y2tWaFkyZ29jbVZ1WkdWeUxDQW9jbVZ1WkdWeVJuVnVZeXdnY21WdVpHVnlWSGx3WlNrZ1BUNGdlMXh5WEc0Z0lDQWdJQ0JwWmlBb2NtVnVaR1Z5Vkhsd1pTQTlQVDBnSjJoMGJXd25JQ1ltSUdKcGJtUnBibWN1YUhSdGJDQTlQVDBnYm5Wc2JDQjhmQ0JpYVc1a2FXNW5MbTFoY210MWNDNWphR2xzWkhKbGJpNXNaVzVuZEdncElIdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNDdYSEpjYmlBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnY21WdVpHVnlSblZ1WXloN0lHMWhjbXQxY0RvZ1ltbHVaR2x1WjA1dlpHVWdmU3dnZG1Gc2RXVnpXMkpwYm1ScGJtZE9ZVzFsWFZ0eVpXNWtaWEpVZVhCbFhTd2djM1JoZEdWUVlYUm9LVHRjY2x4dUlDQWdJSDBwTzF4eVhHNGdJSDBwTzF4eVhHNWNjbHh1SUNCeVpYUjFjbTRnYVhSbGJWZHlZWEJ3WlhJdVkyaHBiR1J5Wlc1Yk1GMDdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUhWd1pHRjBaVU52YlhCdmJtVnVkQ0FvWTI5dGNHOXVaVzUwTENCMllXeDFaWE1zSUhOMFlYUmxVR0YwYUN3Z1kyaGhibWRsY3lrZ2UxeHlYRzRnSUdOdmJuTjBJR052YlhCdmJtVnVkRTFoY210MWNDQTlJSFpoYkhWbGMxdE1TVUpmUVZSVVVpNVRSVXhHWFM1bGJEdGNjbHh1WEhKY2JpQWdabTl5UldGamFDaGphR0Z1WjJWekxDQW9ZMmhoYm1kbExDQmlhVzVrYVc1blRtRnRaU2tnUFQ0Z2UxeHlYRzVjY2x4dUlDQWdJR2xtSUNoaWFXNWthVzVuVG1GdFpTQTlQVDBnVEVsQ1gwRlVWRkl1VTBWTVJpa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ1kyaGhibWRsVkhsd1pTQnBiaUJqYUdGdVoyVXBJSHRjY2x4dUlDQWdJQ0FnSUNCeVpXNWtaWEpiWTJoaGJtZGxWSGx3WlYwb2V5QnRZWEpyZFhBNklHTnZiWEJ2Ym1WdWRFMWhjbXQxY0NCOUxDQjJZV3gxWlhOYlRFbENYMEZVVkZJdVUwVk1SbDFiWTJoaGJtZGxWSGx3WlYwcE8xeHlYRzRnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJSEpsZEhWeWJqdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JqYjI1emRDQmlhVzVrYVc1bklEMGdZMjl0Y0c5dVpXNTBMbk4wWVhSbFcySnBibVJwYm1kT1lXMWxYVHRjY2x4dUlDQWdJR052Ym5OMElITjBZWFJsVUdGMGFGUnZRbWx1WkdsdVp5QTlJSE4wWVhSbFVHRjBhQzVqYjI1allYUW9ZbWx1WkdsdVowNWhiV1VwTzF4eVhHNWNjbHh1SUNBZ0lHbG1JQ2hpYVc1a2FXNW5MbWx6UTI5dGNHOXVaVzUwSUh4OElHSnBibVJwYm1jdWFYTk1hWE4wS1NCN1hISmNiaUFnSUNBZ0lHRndjR3g1VFdGeWEzVndLR0pwYm1ScGJtY3NJSFpoYkhWbGMxdGlhVzVrYVc1blRtRnRaVjBzSUhOMFlYUmxVR0YwYUZSdlFtbHVaR2x1Wnl3Z1kyaGhibWRsYzF0aWFXNWthVzVuVG1GdFpWMHBPMXh5WEc0Z0lDQWdJQ0J5WlhSMWNtNDdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnWTI5dWMzUWdaV3dnUFNCMllXeDFaWE5iWW1sdVpHbHVaMDVoYldWZExtVnNYSEpjYmx4eVhHNGdJQ0FnWm05eUlDaHNaWFFnWTJoaGJtZGxWSGx3WlNCcGJpQmphR0Z1WjJVcElIdGNjbHh1SUNBZ0lDQWdZMjl1YzNRZ2JtVjNWbUZzZFdVZ1BTQjJZV3gxWlhOYlltbHVaR2x1WjA1aGJXVmRXMk5vWVc1blpWUjVjR1ZkTzF4eVhHNGdJQ0FnSUNCeVpXNWtaWEpiWTJoaGJtZGxWSGx3WlYwb2V5QnRZWEpyZFhBNklHVnNJSDBzSUc1bGQxWmhiSFZsS1R0Y2NseHVJQ0FnSUgxY2NseHVJQ0I5S1R0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdjbVZ1WkdWeVRHbHpkQ0FvYkdsemRFTnZiWEJ2Ym1WdWRDd2dhWFJsYlhOV1lXeDFaWE1zSUhOMFlYUmxVR0YwYUN3Z1kyaGhibWRsY3lrZ2UxeHlYRzRnSUdsbUlDaGphR0Z1WjJWektTQjdYSEpjYmlBZ0lDQnlaWFIxY200Z2RYQmtZWFJsVEdsemRDaHNhWE4wUTI5dGNHOXVaVzUwTENCcGRHVnRjMVpoYkhWbGN5d2djM1JoZEdWUVlYUm9MQ0JqYUdGdVoyVnpLVHRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJR052Ym5OMElHeHBjM1JHY21GbmJXVnVkQ0E5SUdKMWFXeGtUR2x6ZENoc2FYTjBRMjl0Y0c5dVpXNTBMQ0JwZEdWdGMxWmhiSFZsY3l3Z2MzUmhkR1ZRWVhSb0tUdGNjbHh1WEhKY2JpQWdZMjl1YzNRZ2JHbHpkRTV2WkdVZ1BTQnBkR1Z0YzFaaGJIVmxjeTVsYkR0Y2NseHVJQ0JqYjI1emRDQndZWEpsYm5ST2IyUmxJRDBnYkdsemRFNXZaR1V1Y0dGeVpXNTBUbTlrWlR0Y2NseHVJQ0JqYjI1emRDQnVaWGgwVG05a1pTQTlJR3hwYzNST2IyUmxMbTVsZUhSRmJHVnRaVzUwVTJsaWJHbHVaenRjY2x4dUlDQnlaVzF2ZG1WT2IyUmxLR3hwYzNST2IyUmxLVHRjY2x4dVhISmNiaUFnWTI5dWMzUWdhWE5EYjIxd2IyNWxiblFnUFNCc2FYTjBUbTlrWlM1blpYUkJkSFJ5YVdKMWRHVW9URWxDWDBGVVZGSXVRMDlOVUU5T1JVNVVYMVJaVUVVcE8xeHlYRzRnSUd4cGMzUk9iMlJsTG5ObGRFRjBkSEpwWW5WMFpTaE1TVUpmUVZSVVVpNURUMDFRVDA1RlRsUmZWRmxRUlN3Z1RFbENYMEZVVkZJdVRFbFRWQ2s3WEhKY2JpQWdhV1lnS0dselEyOXRjRzl1Wlc1MEtTQjdYSEpjYmlBZ0lDQnNhWE4wVG05a1pTNXpaWFJCZEhSeWFXSjFkR1VvVEVsQ1gwRlVWRkl1UTA5TlVFOU9SVTVVWDFSWlVFVXNJRXhKUWw5QlZGUlNMa05QVFZCUFRrVk9WRjlNU1ZOVUtUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lHVnRjSFI1VG05a1pTaHNhWE4wVG05a1pTazdYSEpjYmlBZ2JHbHpkRTV2WkdVdVlYQndaVzVrUTJocGJHUW9iR2x6ZEVaeVlXZHRaVzUwS1R0Y2NseHVYSEpjYmlBZ2NHRnlaVzUwVG05a1pTNXBibk5sY25SQ1pXWnZjbVVvYkdsemRFNXZaR1VzSUc1bGVIUk9iMlJsS1R0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdZblZwYkdSTWFYTjBJQ2hzYVhOMFEyOXRjRzl1Wlc1MExDQnBkR1Z0YzFaaGJIVmxjeXdnYzNSaGRHVlFZWFJvTENCeVlXNW5aU2tnZTF4eVhHNGdJR052Ym5OMElITjBZWEowSUQwZ2NtRnVaMlVnUHlCeVlXNW5aUzV6ZEdGeWRDQTZJREE3WEhKY2JpQWdZMjl1YzNRZ1pXNWtJRDBnY21GdVoyVWdQeUJ5WVc1blpTNWxibVFnT2lBb2FYUmxiWE5XWVd4MVpYTXViR1Z1WjNSb0lDc2dNU2s3WEhKY2JseHlYRzRnSUdOdmJuTjBJR3hwYzNSR2NtRm5iV1Z1ZENBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVSdlkzVnRaVzUwUm5KaFoyMWxiblFvS1R0Y2NseHVJQ0JwZEdWdGMxWmhiSFZsYzF4eVhHNGdJQ0FnTG5Oc2FXTmxLSE4wWVhKMExDQmxibVFwWEhKY2JpQWdJQ0F1Wm05eVJXRmphQ2dvYVhSbGJWWmhiSFZsTENCcGRHVnRTVzVrWlhncElEMCtJSHRjY2x4dUlDQWdJQ0FnWTI5dWMzUWdibVYzU1hSbGJVbHVaR1Y0SUQwZ0szTjBZWEowSUNzZ2FYUmxiVWx1WkdWNE8xeHlYRzRnSUNBZ0lDQmpiMjV6ZENCemRHRjBaVkJoZEdoVWIwbDBaVzBnUFNCemRHRjBaVkJoZEdndVkyOXVZMkYwS0Z0dVpYZEpkR1Z0U1c1a1pYZ3NJR3hwYzNSRGIyMXdiMjVsYm5RdWJHbHpkRWwwWlcwdWJtRnRaVjBwTzF4eVhHNGdJQ0FnSUNCamIyNXpkQ0JzYVhOMFNYUmxiVTFoY210MWNDQTlJR1J5WVhkRGIyMXdiMjVsYm5Rb2FYUmxiVlpoYkhWbFcyeHBjM1JEYjIxd2IyNWxiblF1YkdsemRFbDBaVzB1Ym1GdFpWMHNJSE4wWVhSbFVHRjBhRlJ2U1hSbGJTazdYSEpjYmx4eVhHNGdJQ0FnSUNCc2FYTjBTWFJsYlUxaGNtdDFjQzV6WlhSQmRIUnlhV0oxZEdVb1RFbENYMEZVVkZJdVNWUkZUVjlKVGtSRldDd2dibVYzU1hSbGJVbHVaR1Y0S1R0Y2NseHVYSEpjYmlBZ0lDQWdJR3hwYzNSR2NtRm5iV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaHNhWE4wU1hSbGJVMWhjbXQxY0NrN1hISmNiaUFnSUNCOUtUdGNjbHh1WEhKY2JpQWdjbVYwZFhKdUlHeHBjM1JHY21GbmJXVnVkRHRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2RYQmtZWFJsVEdsemRDQW9iR2x6ZEVKcGJtUnBibWNzSUdsMFpXMXpWbUZzZFdWekxDQnpkR0YwWlZCaGRHZ3NJR05vWVc1blpYTXBJSHRjY2x4dUlDQmpiMjV6ZENCc2FYTjBUbTlrWlNBOUlHbDBaVzF6Vm1Gc2RXVnpMbVZzTzF4eVhHNGdJR052Ym5OMElHbDBaVzFPWVcxbElEMGdiR2x6ZEVKcGJtUnBibWN1YkdsemRFbDBaVzB1Ym1GdFpUdGNjbHh1SUNCamIyNXpkQ0JwZEdWdGMwTm9ZVzVuWlhNZ1BTQnpjR3hwZEZCcFpXTmxLR05vWVc1blpYTXNJQ2gyTENCcktTQTlQaUJwYzA1MWJXSmxjaWdyYXlrcE8xeHlYRzRnSUd4bGRDQnlaVzF2ZG1Wa1EyOTFiblFnUFNBd08xeHlYRzRnSUd4bGRDQmxibVFnUFNBd08xeHlYRzVjY2x4dUlDQm1iM0lnS0d4bGRDQmphR0Z1WjJWVWVYQmxJR2x1SUdOb1lXNW5aWE1wSUh0Y2NseHVJQ0FnSUhKbGJtUmxjbHRqYUdGdVoyVlVlWEJsWFNoN0lHMWhjbXQxY0RvZ2JHbHpkRTV2WkdVZ2ZTd2dhWFJsYlhOV1lXeDFaWE5iWTJoaGJtZGxWSGx3WlYwcE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ1ptOXlSV0ZqYUNocGRHVnRjME5vWVc1blpYTXNJQ2hqYUdGdVoyVXNJR2twSUQwK0lIdGNjbHh1SUNBZ0lHTm9ZVzVuWlNBOUlHTm9ZVzVuWlZ0cGRHVnRUbUZ0WlYwN1hISmNiaUFnSUNCamIyNXpkQ0J6ZEdGMFpWQmhkR2hVYjBsMFpXMGdQU0J6ZEdGMFpWQmhkR2d1WTI5dVkyRjBLR2tzSUdsMFpXMU9ZVzFsS1R0Y2NseHVJQ0FnSUdOdmJuTjBJR2wwWlcxQlkyTmxjM052Y2lBOUlHTnlaV0YwWlVGalkyVnpjMjl5S0hOMFlYUmxVR0YwYUZSdlNYUmxiU2s3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0ZqYUdGdVoyVmJURWxDWDBGVVZGSXVSbFZNVEY5RFNFRk9SMFZkS1NCN1hISmNiaUFnSUNBZ0lIVndaR0YwWlVOdmJYQnZibVZ1ZENocGRHVnRRV05qWlhOemIzSXVZMjl0Y0c5dVpXNTBMQ0JwZEdWdGMxWmhiSFZsYzF0cFhWdHBkR1Z0VG1GdFpWMHNJSE4wWVhSbFVHRjBhRlJ2U1hSbGJTd2dZMmhoYm1kbEtUdGNjbHh1SUNBZ0lDQWdjbVYwZFhKdU8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJR2xtSUNoamFHRnVaMlZiVEVsQ1gwRlVWRkl1UmxWTVRGOURTRUZPUjBWZExtRmtaQ0FtSmlCcElENDlJR1Z1WkNrZ2UxeHlYRzRnSUNBZ0lDQmpiMjV6ZENCemRHRnlkQ0E5SUdOb1lXNW5aVnRNU1VKZlFWUlVVaTVHVlV4TVgwTklRVTVIUlYwdVlXUmtMbk4wWVhKME8xeHlYRzRnSUNBZ0lDQmxibVFnUFNCamFHRnVaMlZiVEVsQ1gwRlVWRkl1UmxWTVRGOURTRUZPUjBWZExtRmtaQzVsYm1RN1hISmNibHh5WEc0Z0lDQWdJQ0JtYVhoSmJtUmxlR1Z6S0d4cGMzUk9iMlJsTENCemRHRnlkQ3dnWlc1a0lDMGdjM1JoY25RcE8xeHlYRzRnSUNBZ0lDQmpiMjV6ZENCc2FYTjBSbkpoWjIxbGJuUWdQU0JpZFdsc1pFeHBjM1FvYkdsemRFSnBibVJwYm1jc0lHbDBaVzF6Vm1Gc2RXVnpMQ0J6ZEdGMFpWQmhkR2dzSUhzZ2MzUmhjblFzSUdWdVpDQjlLVHRjY2x4dVhISmNiaUFnSUNBZ0lHbG1JQ2hsYm1RZ1BUMDlJR2wwWlcxelZtRnNkV1Z6TG14bGJtZDBhQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lHeHBjM1JPYjJSbExtRndjR1Z1WkVOb2FXeGtLR3hwYzNSR2NtRm5iV1Z1ZENrN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHlYRzRnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNCc2FYTjBUbTlrWlM1cGJuTmxjblJDWldadmNtVW9iR2x6ZEVaeVlXZHRaVzUwTENCc2FYTjBUbTlrWlM1amFHbHNaSEpsYmx0emRHRnlkRjBwTzF4eVhHNGdJQ0FnSUNCeVpYUjFjbTQ3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2FXWWdLR05vWVc1blpWdE1TVUpmUVZSVVVpNUdWVXhNWDBOSVFVNUhSVjB1Y21WdGIzWmxLU0I3WEhKY2JpQWdJQ0FnSUhKbGJXOTJaVTV2WkdVb1kyaGhibWRsVzB4SlFsOUJWRlJTTGtaVlRFeGZRMGhCVGtkRlhTNXlaVzF2ZG1VcE8xeHlYRzRnSUNBZ0lDQm1hWGhKYm1SbGVHVnpLR3hwYzNST2IyUmxMQ0JwSUMwZ2NtVnRiM1psWkVOdmRXNTBLeXNzSUMweEtUdGNjbHh1SUNBZ0lIMWNjbHh1SUNCOUtUdGNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnWm1sNFNXNWtaWGhsY3lBb2JHbHpkRTV2WkdVc0lITjBZWEowTENCa2FXWm1LU0I3WEhKY2JpQWdZMjl1YzNRZ2FYUmxiWE5PYjJSbGN5QTlJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNXpiR2xqWlM1allXeHNLR3hwYzNST2IyUmxMbU5vYVd4a2NtVnVMQ0J6ZEdGeWRDazdYSEpjYmx4eVhHNGdJR2wwWlcxelRtOWtaWE11Wm05eVJXRmphQ2dvYVhSbGJVNXZaR1VwSUQwK0lIdGNjbHh1SUNBZ0lHTnZibk4wSUhCeVpYWkpaSGdnUFNCcGRHVnRUbTlrWlM1blpYUkJkSFJ5YVdKMWRHVW9URWxDWDBGVVZGSXVTVlJGVFY5SlRrUkZXQ2s3WEhKY2JpQWdJQ0JqYjI1emRDQnVaWGRKWkhnZ1BTQXJjSEpsZGtsa2VDQXJJR1JwWm1ZN1hISmNibHh5WEc0Z0lDQWdhWFJsYlU1dlpHVXVjMlYwUVhSMGNtbGlkWFJsS0V4SlFsOUJWRlJTTGtsVVJVMWZTVTVFUlZnc0lHNWxkMGxrZUNrN1hISmNiaUFnZlNrN1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJR0Z3Y0d4NVFYUjBjbWxpZFhSbGN5QW9ZbWx1WkdsdVp5d2dZWFIwY21saWRYUmxjeWtnZTF4eVhHNGdJRTlpYW1WamRDNWhjM05wWjI0b1ltbHVaR2x1Wnk1dFlYSnJkWEFzSUdGMGRISnBZblYwWlhNcE8xeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJoY0hCc2VVTnNZWE56WlhNZ0tHSnBibVJwYm1jc0lHTnNZWE56WlhNcElIdGNjbHh1SUNCbWIzSWdLR3hsZENCamJHRnpjMDVoYldVZ2FXNGdZMnhoYzNObGN5a2dlMXh5WEc0Z0lDQWdhV1lnS0dOc1lYTnpUbUZ0WlNrZ2UxeHlYRzRnSUNBZ0lDQnBaaUFvWTJ4aGMzTmxjMXRqYkdGemMwNWhiV1ZkS1NCN1hISmNiaUFnSUNBZ0lDQWdZbWx1WkdsdVp5NXRZWEpyZFhBdVkyeGhjM05NYVhOMExtRmtaQ2hqYkdGemMwNWhiV1VwTzF4eVhHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBZ0lHSnBibVJwYm1jdWJXRnlhM1Z3TG1Oc1lYTnpUR2x6ZEM1eVpXMXZkbVVvWTJ4aGMzTk9ZVzFsS1R0Y2NseHVJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZWeHlYRzRnSUgxY2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdZWEJ3YkhsVGRIbHNaWE1nS0dKcGJtUnBibWNzSUhOMGVXeGxjeWtnZTF4eVhHNGdJRTlpYW1WamRDNWhjM05wWjI0b0lHSnBibVJwYm1jdWJXRnlhM1Z3TG5OMGVXeGxMQ0J1YjNKdFlXeHBlbVZUZEhsc1pYTW9jM1I1YkdWektTQXBPMXh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCamNtVmhkR1ZCYm1SQmNIQmxibVJUZEhsc1pYTWdLSE4wZVd4bFQySnFLU0I3WEhKY2JpQWdiR1YwSUhOMGVXeGxVM1J5SUQwZ0p5YzdYSEpjYmlBZ1ptOXlJQ2hzWlhRZ2MyVnNaV04wYjNJZ2FXNGdjM1I1YkdWUFltb3BJSHRjY2x4dUlDQWdJR052Ym5OMElITjBlV3hsY3lBOUlITjBlV3hsVDJKcVczTmxiR1ZqZEc5eVhUdGNjbHh1SUNBZ0lITjBlV3hsVTNSeUlDczlJSE5sYkdWamRHOXlJQ3NnSjNzbk8xeHlYRzRnSUNBZ2JtOXliV0ZzYVhwbFUzUjViR1Z6S0hOMGVXeGxjeWxjY2x4dUlDQWdJR1p2Y2lBb2JHVjBJR0YwZEhJZ2FXNGdjM1I1YkdWektTQjdYSEpjYmlBZ0lDQWdJR052Ym5OMElIWmhiSFZsSUQwZ2MzUjViR1Z6VzJGMGRISmRPMXh5WEc0Z0lDQWdJQ0J6ZEhsc1pWTjBjaUFyUFNCMGIwUmhjMmhEWVhObEtHRjBkSElwSUNzZ0p6b25JQ3NnZG1Gc2RXVWdLeUFuT3ljN1hISmNiaUFnSUNCOVhISmNiaUFnSUNCemRIbHNaVk4wY2lBclBTQW5mVnhjYmljN1hISmNiaUFnZlZ4eVhHNGdJR052Ym5OMElITjBlV3hsUld3Z1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0NkemRIbHNaU2NwTzF4eVhHNGdJSE4wZVd4bFJXd3VZWEJ3Wlc1a1EyaHBiR1FvSUdSdlkzVnRaVzUwTG1OeVpXRjBaVlJsZUhST2IyUmxLSE4wZVd4bFUzUnlLU0FwTzF4eVhHNGdJR1J2WTNWdFpXNTBMbWhsWVdRdVlYQndaVzVrUTJocGJHUW9jM1I1YkdWRmJDazdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUc1dmNtMWhiR2w2WlZOMGVXeGxjeUFvYzNSNWJHVnpLU0I3WEhKY2JpQWdabTl5SUNoc1pYUWdZWFIwY2lCcGJpQnpkSGxzWlhNcElIdGNjbHh1SUNBZ0lHbG1JQ2hwYzA1MWJXSmxjaWh6ZEhsc1pYTmJZWFIwY2wwcEtTQjdYSEpjYmlBZ0lDQWdJSE4wZVd4bGMxdGhkSFJ5WFNBOUlITjBlV3hsYzF0aGRIUnlYU0FySUNkd2VDYzdYSEpjYmlBZ0lDQjlYSEpjYmlBZ2ZWeHlYRzRnSUhKbGRIVnliaUJ6ZEhsc1pYTTdYSEpjYm4xY2NseHVJaXdpWlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1FtbHVaR2x1WjA1dmRFVjRhWE4wYzBWeWNtOXlJR1Y0ZEdWdVpITWdSWEp5YjNJZ2UxeHlYRzRnSUdOdmJuTjBjblZqZEc5eUlDaGlhVzVrYVc1blRtRnRaU3dnWTI5dGNHOXVaVzUwVG1GdFpTd2djR0YwYUNrZ2UxeHlYRzRnSUNBZ2MzVndaWElvS1R0Y2NseHVJQ0FnSUhSb2FYTXViV1Z6YzJGblpTQTlJRndpVlc1aFlteGxJSFJ2SUdGalkyVnpjeUFuWENJZ0t5QmlhVzVrYVc1blRtRnRaU0FySUZ3aUp5QmlhVzVrYVc1bklHOXVJQ2RjSWlBcklHTnZiWEJ2Ym1WdWRFNWhiV1VnS3lCY0lpY2dZMjl0Y0c5dVpXNTBJRzl1SUhCaGRHZ2dLRndpSUNzZ2NHRjBhQzVxYjJsdUtDY2dMVDRnSnlrZ0t5QmNJaWtnWW1WallYVnpaU0JwZENCa2IyVnpiaWQwSUdWNGFYTjBMbHdpWEhKY2JpQWdmVnh5WEc1OVhISmNiaUlzSW1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklFTnZiWEJ2Ym1WdWRGSmxaR1ZtYVc1bFJYSnliM0lnWlhoMFpXNWtjeUJGY25KdmNpQjdYSEpjYmlBZ1kyOXVjM1J5ZFdOMGIzSWdLRzVoYldVcElIdGNjbHh1SUNBZ0lITjFjR1Z5S0NrN1hISmNiaUFnSUNCMGFHbHpMbTFsYzNOaFoyVWdQU0JjSWxSeWVXbHVaeUIwYnlCeVpXUmxabWx1WlNCbGVHbHpkR2x1WnlCamIyMXdiMjVsYm5RNklDZGNJaUFySUc1aGJXVWdLeUJjSWlkY0lqdGNjbHh1SUNCOVhISmNibjFjY2x4dUlpd2laWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVTJOdmNHVk9ZVzFsUTI5c2JHbHphVzl1UlhKeWIzSWdaWGgwWlc1a2N5QkZjbkp2Y2lCN1hISmNiaUFnWTI5dWMzUnlkV04wYjNJZ0tHNWhiV1VwSUh0Y2NseHVJQ0FnSUhOMWNHVnlLQ2s3WEhKY2JpQWdJQ0IwYUdsekxtMWxjM05oWjJVZ1BTQmNJbFJ5ZVdsdVp5QjBieUJoYzNOcFoyNGdZU0J1WVcxbElDZGNJaUFySUc1aGJXVWdLeUJjSWljZ2RHOGdZU0J6ZEdGMFpTQjBhR0YwSUdGc2NtVmhaSGtnWlhocGMzUnpJR2x1SUhSb1pTQmphR0ZwYmk1Y0lqdGNjbHh1SUNCOVhISmNibjFjY2x4dUlpd2lZMjl1YzNRZ1RFbENYMDVCVFVVZ1BTQW5lQ2M3WEhKY2JtTnZibk4wSUVGVVZGSmZVRkpGUmtsWUlEMGdKMlJoZEdFdEp6dGNjbHh1WTI5dWMzUWdVRkpGUmtsWUlEMGdURWxDWDA1QlRVVWdLeUFuTFNjN1hISmNibU52Ym5OMElGUkZUVkJNUVZSRlgwSkpUa1JKVGtjZ1BTQlFVa1ZHU1ZnZ0t5QW5ZaWM3WEhKY2JtTnZibk4wSUZSRlRWQk1RVlJGWDB4SlUxUmZRa2xPUkVsT1J5QTlJRkJTUlVaSldDQXJJQ2RzWWljN1hISmNibU52Ym5OMElFSkpUa1JKVGtkZlNVUWdQU0JCVkZSU1gxQlNSVVpKV0NBcklGQlNSVVpKV0NBcklDZHBaQ2M3WEhKY2JtTnZibk4wSUZOVVFWUkZYMUJCVkVnZ1BTQlFVa1ZHU1ZnZ0t5QW5jM0JoZEdnbk8xeHlYRzVqYjI1emRDQlVSVTFRVEVGVVJWOVFURUZEUlUxRlRsUWdQU0JRVWtWR1NWZ2dLeUFuWld3bk8xeHlYRzVqYjI1emRDQlRWRUZVUlY5T1FVMUZJRDBnVUZKRlJrbFlJQ3NnSjNOMFlYUmxMVzVoYldVbk8xeHlYRzVqYjI1emRDQlRRMDlRUlY5UVVrVkdTVmdnUFNBbmN5YzdYSEpjYm1OdmJuTjBJRWxVUlUxZlNVNUVSVmdnUFNCQlZGUlNYMUJTUlVaSldDQXJJRkJTUlVaSldDQXJJQ2RrZUNjN1hISmNibU52Ym5OMElFTlBUVkJQVGtWT1ZGOVVXVkJGSUQwZ1FWUlVVbDlRVWtWR1NWZ2dLeUJRVWtWR1NWZ2dLeUFuZEhBbk8xeHlYRzVqYjI1emRDQkpWRVZOWDFOVlJrWkpXQ0E5SUNkcEp6dGNjbHh1WTI5dWMzUWdVMVJCVkVWZlJFVk1TVTFKVkVWU0lEMGdKeTBuTzF4eVhHNWpiMjV6ZENCVFJVeEdJRDBnSnljN1hISmNibU52Ym5OMElFWlZURXhmUTBoQlRrZEZJRDBnSnlCZlpuVnNiRjlqYUdGdVoyVmZJQ2M3WEhKY2JseHlYRzVqYjI1emRDQkNRVk5GSUQwZ0p6RW5PMXh5WEc1amIyNXpkQ0JEVDAxUVQwNUZUbFFnUFNBbk1pYzdYSEpjYm1OdmJuTjBJRXhKVTFRZ1BTQW5NeWM3WEhKY2JtTnZibk4wSUVsVVJVMGdQU0FuWDJsMFpXMWZKenRjY2x4dVkyOXVjM1FnUTA5TlVFOU9SVTVVWDB4SlUxUWdQU0FuTlNjN1hISmNibHh5WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEhKY2JpQWdVRkpGUmtsWUxGeHlYRzRnSUZSRlRWQk1RVlJGWDBKSlRrUkpUa2NzWEhKY2JpQWdWRVZOVUV4QlZFVmZURWxUVkY5Q1NVNUVTVTVITEZ4eVhHNGdJRUpKVGtSSlRrZGZTVVFzWEhKY2JpQWdVMVJCVkVWZlVFRlVTQ3hjY2x4dUlDQlVSVTFRVEVGVVJWOVFURUZEUlUxRlRsUXNYSEpjYmlBZ1UxUkJWRVZmVGtGTlJTeGNjbHh1SUNCVFEwOVFSVjlRVWtWR1NWZ3NYSEpjYmlBZ1NWUkZUVjlKVGtSRldDeGNjbHh1SUNCRFQwMVFUMDVGVGxSZlZGbFFSU3hjY2x4dUlDQkpWRVZOWDFOVlJrWkpXQ3hjY2x4dUlDQlRWRUZVUlY5RVJVeEpUVWxVUlZJc1hISmNiaUFnUWtGVFJTeGNjbHh1SUNCRFQwMVFUMDVGVGxRc1hISmNiaUFnVEVsVFZDeGNjbHh1SUNCSlZFVk5MRnh5WEc0Z0lGTkZURVlzWEhKY2JpQWdSbFZNVEY5RFNFRk9SMFVzWEhKY2JpQWdRMDlOVUU5T1JVNVVYMHhKVTFSY2NseHVmVHRjY2x4dUlpd2lZMjl1YzNRZ1UxUlNTVkJmUTA5TlRVVk9WRk1nUFNBdktGeGNMMXhjTHk0cUpDbDhLRnhjTDF4Y0tsdGNYSE5jWEZOZEtqOWNYQ3BjWEM4cGZDaGNYSE1xUFZ0ZUxDbGRLaWdvSnlnL09seGNYRnduZkZ0ZUoxeGNjbHhjYmwwcEtpY3BmQ2hjSWlnL09seGNYRnhjSW54Ylhsd2lYRnh5WEZ4dVhTa3FYQ0lwS1h3b1hGeHpLajFiWGl3cFhTb3BLUzl0Wnp0Y2NseHVZMjl1YzNRZ1FWSkhWVTFGVGxSZlRrRk5SVk1nUFNBdktGdGVYRnh6TEYwcktTOW5PMXh5WEc1Y2NseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHlYRzRnSUZOVVVrbFFYME5QVFUxRlRsUlRMRnh5WEc0Z0lFRlNSMVZOUlU1VVgwNUJUVVZUTEZ4eVhHNTlPMXh5WEc0aUxDSmxlSEJ2Y25RZ2UxeHlYRzRnSUdselJuVnVZM1JwYjI0c1hISmNiaUFnYVhOQmNuSmhlU3hjY2x4dUlDQnBjMDlpYW1WamRDeGNjbHh1SUNCcGMwOWlhbVZqZEVsdVFuSmhZMnRsZEhNc1hISmNiaUFnYVhOUFltcGxZM1JKYmtSdmRXSnNaVUp5WVdOclpYUnpMRnh5WEc0Z0lHbHpVM1J5YVc1bkxGeHlYRzRnSUdselNGUk5URk4wY21sdVp5eGNjbHh1SUNCcGMwNTFiV0psY2l4Y2NseHVJQ0JwYzBSUFRVVnNaVzFsYm5Rc1hISmNiaUFnYVhOVmJtUmxabWx1WldRc1hISmNiaUFnYVhORmJYQjBlU3hjY2x4dUlDQnBjMHhwYm1zc1hISmNibjA3WEhKY2JseHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2FYTkdkVzVqZEdsdmJpaHZZbW9wSUh0Y2NseHVJQ0J5WlhSMWNtNGdaMlYwVDJKcVpXTjBWSGx3WlNodlltb3BJRDA5UFNBblcyOWlhbVZqZENCR2RXNWpkR2x2Ymwwbk8xeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJwYzBGeWNtRjVJQ2h2WW1vcElIdGNjbHh1SUNCeVpYUjFjbTRnWjJWMFQySnFaV04wVkhsd1pTaHZZbW9wSUQwOVBTQW5XMjlpYW1WamRDQkJjbkpoZVYwbk8xeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJwYzA5aWFtVmpkQ0FvYjJKcUtTQjdYSEpjYmlBZ2NtVjBkWEp1SUdkbGRFOWlhbVZqZEZSNWNHVW9iMkpxS1NBOVBUMGdKMXR2WW1wbFkzUWdUMkpxWldOMFhTYzdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUdselQySnFaV04wU1c1Q2NtRmphMlYwY3lBb2IySnFLU0I3WEhKY2JpQWdjbVYwZFhKdUlHbHpRWEp5WVhrb2IySnFLU0FtSmlCdlltb3ViR1Z1WjNSb0lEMDlQU0F4SUNZbUlHbHpUMkpxWldOMEtHOWlhbHN3WFNrN1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJR2x6VDJKcVpXTjBTVzVFYjNWaWJHVkNjbUZqYTJWMGN5QW9iMkpxS1NCN1hISmNiaUFnY21WMGRYSnVJR2x6UVhKeVlYa29iMkpxS1NBbUppQnZZbW91YkdWdVozUm9JRDA5UFNBeElDWW1JR2x6VDJKcVpXTjBTVzVDY21GamEyVjBjeWh2WW1wYk1GMHBPMXh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCcGMxTjBjbWx1WnlBb2IySnFLU0I3WEhKY2JpQWdjbVYwZFhKdUlHZGxkRTlpYW1WamRGUjVjR1VvYjJKcUtTQTlQVDBnSjF0dlltcGxZM1FnVTNSeWFXNW5YU2M3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHbHpTRlJOVEZOMGNtbHVaeUFvYjJKcUtTQjdYSEpjYmlBZ2NtVjBkWEp1SUdselUzUnlhVzVuS0c5aWFpa2dKaVlnYjJKcUxtbHVaR1Y0VDJZb0p6d25LU0E5UFQwZ01EdGNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYVhOT2RXMWlaWElnS0c5aWFpa2dlMXh5WEc0Z0lISmxkSFZ5YmlCblpYUlBZbXBsWTNSVWVYQmxLRzlpYWlrZ1BUMDlJQ2RiYjJKcVpXTjBJRTUxYldKbGNsMG5JQ1ltSUc5aWFpQTlQVDBnYjJKcU8xeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJwYzBSUFRVVnNaVzFsYm5RZ0tHOWlhaWtnZTF4eVhHNGdJSEpsZEhWeWJpQnZZbW9nSmlZZ2RIbHdaVzltSUc5aWFpNTBZV2RPWVcxbElDRTlQU0FuZFc1a1pXWnBibVZrSnp0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdhWE5WYm1SbFptbHVaV1FnS0c5aWFpa2dlMXh5WEc0Z0lISmxkSFZ5YmlCMGVYQmxiMllnYjJKcUlEMDlQU0FuZFc1a1pXWnBibVZrSnp0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdaMlYwVDJKcVpXTjBWSGx3WlNBb2IySnFLU0I3WEhKY2JpQWdjbVYwZFhKdUlFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWRHOVRkSEpwYm1jdVkyRnNiQ2h2WW1vcE8xeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJwYzB4cGJtc2dLRzlpYWlrZ2UxeHlYRzRnSUdOdmJuTjBJSE5zWVhOb1NXUjRJRDBnYjJKcUxtbHVaR1Y0VDJZb0p5OG5LVHRjY2x4dUlDQnlaWFIxY200Z1d6QXNJREVzSURKZExuTnZiV1VvS0dsa2VDa2dQVDRnYVdSNElEMDlQU0J6YkdGemFFbGtlQ2s3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHbHpSVzF3ZEhrZ0tHOWlhaWtnZTF4eVhHNGdJR2xtSUNnaGIySnFLU0I3WEhKY2JpQWdJQ0J5WlhSMWNtNGdkSEoxWlR0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUdsbUlDaHBjMEZ5Y21GNUtHOWlhaWtnZkh3Z2FYTlRkSEpwYm1jb2IySnFLU2tnZTF4eVhHNGdJQ0FnY21WMGRYSnVJQ0Z2WW1vdWJHVnVaM1JvTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnY21WMGRYSnVJQ0ZQWW1wbFkzUXVhMlY1Y3lodlltb3BMbXhsYm1kMGFEdGNjbHh1ZlZ4eVhHNGlMQ0pwYlhCdmNuUWdleUJwYzA5aWFtVmpkQ0I5SUdaeWIyMGdKeTR2WTJobFkydGxjbk1uTzF4eVhHNXBiWEJ2Y25RZ2V5QnpaWFFnZlNCbWNtOXRJQ2N1TDI5aWFtVmpkQ2M3WEhKY2JseHlYRzVsZUhCdmNuUWdlMXh5WEc0Z0lHaGhjeXhjY2x4dUlDQm5aWFJHWVd4elpWQmhkR2h6TEZ4eVhHNGdJSFJ2UkdGemFFTmhjMlVzWEhKY2JpQWdkRzlEWVcxbGJFTmhjMlVzWEhKY2JpQWdaMlYwVTJodmNuUk9ZVzFsTEZ4eVhHNGdJR2RsZEZKbFlXeE9ZVzFsTEZ4eVhHNTlPMXh5WEc1Y2NseHVZMjl1YzNRZ1RrRk5SVk1nUFNCN1hISmNiaUFnY21WaGJEb2dlMzBzWEhKY2JpQWdjMmh2Y25RNklGdGRYSEpjYm4wN1hISmNibHh5WEc1bWRXNWpkR2x2YmlCblpYUlRhRzl5ZEU1aGJXVWdLRzVoYldVcElIdGNjbHh1SUNCcFppQW9Ua0ZOUlZNdWNtVmhiRnR1WVcxbFhTa2dlMXh5WEc0Z0lDQWdjbVYwZFhKdUlFNUJUVVZUTG5KbFlXeGJibUZ0WlYwN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCamIyNXpkQ0J6YUc5eWRFNWhiV1VnUFNCT1FVMUZVeTV6YUc5eWRDNXdkWE5vS0c1aGJXVXBPMXh5WEc0Z0lISmxkSFZ5YmlCT1FVMUZVeTV5WldGc1cyNWhiV1ZkSUQwZ2MyaHZjblJPWVcxbElDMGdNVHRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z1oyVjBVbVZoYkU1aGJXVWdLRzUxYlNrZ2UxeHlYRzRnSUhKbGRIVnliaUJPUVUxRlV5NXphRzl5ZEZ0dWRXMWRPMXh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCb1lYTWdLRzlpYWl3Z1pXd3BJSHRjY2x4dUlDQnBaaUFvYVhOUFltcGxZM1FvYjJKcUtTa2dlMXh5WEc0Z0lDQWdZMjl1YzNRZ2EyVjVjeUE5SUU5aWFtVmpkQzVyWlhsektHOWlhaWs3WEhKY2JpQWdJQ0J5WlhSMWNtNGdhR0Z6S0d0bGVYTXNJR1ZzS1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUhKbGRIVnliaUJ2WW1vdWFXNWtaWGhQWmlobGJDa2dQajBnTUR0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdaMlYwUm1Gc2MyVlFZWFJvY3lBb2IySnFLU0I3WEhKY2JpQWdZMjl1YzNRZ2IyNXNlVVpoYkhObFVHRjBhSE1nUFNCN2ZUdGNjbHh1SUNCblpYUkdZV3h6WlZCaGRHZ29iMkpxTENCdmJteDVSbUZzYzJWUVlYUm9jeXdnVzEwcE8xeHlYRzRnSUhKbGRIVnliaUJ2Ym14NVJtRnNjMlZRWVhSb2N6dGNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnWjJWMFJtRnNjMlZRWVhSb0lDaHZZbW9zSUc5dWJIbEdZV3h6WlZCaGRHaHpMQ0J3WVhSb0tTQjdYSEpjYmlBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUc5aWFpa2dlMXh5WEc0Z0lDQWdhV1lnS0dselQySnFaV04wS0c5aWFsdHJaWGxkS1NrZ2UxeHlYRzRnSUNBZ0lDQm5aWFJHWVd4elpWQmhkR2dvYjJKcVcydGxlVjBzSUc5dWJIbEdZV3h6WlZCaGRHaHpMQ0J3WVhSb0xtTnZibU5oZENoclpYa3BLVHRjY2x4dUlDQWdJQ0FnWTI5dWRHbHVkV1U3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2FXWWdLRzlpYWx0clpYbGRJQ0U5UFNCMGNuVmxLU0I3WEhKY2JpQWdJQ0FnSUhObGRDaHZibXg1Um1Gc2MyVlFZWFJvY3l3Z2NHRjBhQzVqYjI1allYUW9hMlY1S1N3Z2IySnFXMnRsZVYwcE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUgxY2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdkRzlFWVhOb1EyRnpaU0FvYzNSeUtTQjdYSEpjYmlBZ2NtVjBkWEp1SUhOMGNpNXlaWEJzWVdObEtDOG9XMEV0V2wwcEwyY3NJQ2h0WVhSamFDa2dQVDRnSnkwbklDc2diV0YwWTJoYk1GMHVkRzlNYjNkbGNrTmhjMlVvS1NrN1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJSFJ2UTJGdFpXeERZWE5sSUNoemRISXBJSHRjY2x4dUlDQnlaWFIxY200Z2MzUnlMbkpsY0d4aFkyVW9MeTBvTGlrdlp5d2dLRzFoZEdOb0tTQTlQaUJ0WVhSamFGc3hYUzUwYjFWd2NHVnlRMkZ6WlNncEtUdGNjbHh1ZlZ4eVhHNGlMQ0pwYlhCdmNuUWdlMXh5WEc0Z0lHbHpWVzVrWldacGJtVmtMRnh5WEc0Z0lHbHpRWEp5WVhrc1hISmNiaUFnYVhORVQwMUZiR1Z0Wlc1MExGeHlYRzRnSUdselQySnFaV04wTEZ4eVhHNTlJR1p5YjIwZ0p5NHZZMmhsWTJ0bGNuTW5PMXh5WEc1Y2NseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyOXdlVHRjY2x4dVhISmNibVoxYm1OMGFXOXVJR052Y0hrZ0tHUmxjM1JwYm1GMGFXOXVMQ0J6YjNWeVkyVXBJSHRjY2x4dUlDQnBaaUFvSVdSbGMzUnBibUYwYVc5dUtTQjdYSEpjYmlBZ0lDQnlaWFIxY200Z1kyOXdlU0FvZTMwc0lITnZkWEpqWlNrN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCbWIzSWdLR3hsZENCclpYa2dhVzRnYzI5MWNtTmxLU0I3WEhKY2JseHlYRzRnSUNBZ2FXWWdLR2x6Vlc1a1pXWnBibVZrS0hOdmRYSmpaVnRyWlhsZEtTa2dlMXh5WEc0Z0lDQWdJQ0JqYjI1MGFXNTFaVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCcFppQW9jMjkxY21ObExtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa2dKaVlnYVhOUFltcGxZM1FvYzI5MWNtTmxXMnRsZVYwcEtTQjdYSEpjYmlBZ0lDQWdJR2xtSUNnaFpHVnpkR2x1WVhScGIyNWJhMlY1WFNrZ2UxeHlYRzRnSUNBZ0lDQWdJR1JsYzNScGJtRjBhVzl1VzJ0bGVWMGdQU0I3ZlR0Y2NseHVJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQmpiM0I1S0dSbGMzUnBibUYwYVc5dVcydGxlVjBzSUhOdmRYSmpaVnRyWlhsZEtUdGNjbHh1SUNBZ0lDQWdZMjl1ZEdsdWRXVTdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tHbHpRWEp5WVhrb2MyOTFjbU5sVzJ0bGVWMHBLU0I3WEhKY2JpQWdJQ0FnSUdsbUlDZ2haR1Z6ZEdsdVlYUnBiMjViYTJWNVhTa2dlMXh5WEc0Z0lDQWdJQ0FnSUdSbGMzUnBibUYwYVc5dVcydGxlVjBnUFNCYlhUdGNjbHh1SUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0JqYjNCNVFYSnlZWGtvWkdWemRHbHVZWFJwYjI1YmEyVjVYU3dnYzI5MWNtTmxXMnRsZVYwcE8xeHlYRzRnSUNBZ0lDQmpiMjUwYVc1MVpUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JwWmlBb2FYTkVUMDFGYkdWdFpXNTBLSE52ZFhKalpWdHJaWGxkS1NrZ2UxeHlYRzRnSUNBZ0lDQmtaWE4wYVc1aGRHbHZibHRyWlhsZElEMGdjMjkxY21ObFcydGxlVjB1WTJ4dmJtVk9iMlJsS0hSeWRXVXBPMXh5WEc0Z0lDQWdJQ0JqYjI1MGFXNTFaVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCa1pYTjBhVzVoZEdsdmJsdHJaWGxkSUQwZ2MyOTFjbU5sVzJ0bGVWMDdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQnlaWFIxY200Z1pHVnpkR2x1WVhScGIyNDdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUdOdmNIbEJjbkpoZVNBb1pHVnpkR2x1WVhScGIyNHNJSE52ZFhKalpTa2dlMXh5WEc0Z0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2djMjkxY21ObExteGxibWQwYURzZ2FTc3JLU0I3WEhKY2JpQWdJQ0JwWmlBb2FYTlBZbXBsWTNRb2MyOTFjbU5sVzJsZEtTa2dlMXh5WEc0Z0lDQWdJQ0JrWlhOMGFXNWhkR2x2Ymx0cFhTQTlJR1JsYzNScGJtRjBhVzl1VzJsZElIeDhJSHQ5TzF4eVhHNGdJQ0FnSUNCamIzQjVLR1JsYzNScGJtRjBhVzl1VzJsZExDQnpiM1Z5WTJWYmFWMHBPMXh5WEc0Z0lDQWdJQ0JqYjI1MGFXNTFaVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCcFppQW9hWE5CY25KaGVTaHpiM1Z5WTJWYmFWMHBLU0I3WEhKY2JpQWdJQ0FnSUdSbGMzUnBibUYwYVc5dVcybGRJRDBnWkdWemRHbHVZWFJwYjI1YmFWMGdmSHdnVzEwN1hISmNiaUFnSUNBZ0lHTnZjSGxCY25KaGVTaGtaWE4wYVc1aGRHbHZibHRwWFN3Z2MyOTFjbU5sVzJsZEtUdGNjbHh1SUNBZ0lDQWdZMjl1ZEdsdWRXVTdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnWkdWemRHbHVZWFJwYjI1YmFWMGdQU0J6YjNWeVkyVmJhVjA3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0J5WlhSMWNtNGdaR1Z6ZEdsdVlYUnBiMjQ3WEhKY2JuMWNjbHh1SWl3aWFXMXdiM0owSUh0Y2NseHVJQ0JwYzBoVVRVeFRkSEpwYm1jc1hISmNibjBnWm5KdmJTQW5MaTlqYUdWamEyVnljeWM3WEhKY2JseHlYRzVsZUhCdmNuUWdlMXh5WEc0Z0lISmxjR3hoWTJWT2IyUmxjeXhjY2x4dUlDQmpiRzl1WlVoVVRVeE5ZWEpyZFhBc1hISmNiaUFnWTI5c2JHVmpkRWhVVFV4T2IyUmxjeXhjY2x4dUlDQjNZV3hyVG05a1pYTXNYSEpjYmlBZ2NtVnRiM1psVG05a1pTeGNjbHh1SUNCcGJuTmxjblJDWldadmNtVk9iMlJsTEZ4eVhHNGdJSEpsZDNKcGRHVlViMDV2WkdVc1hISmNiaUFnWlcxd2RIbE9iMlJsTEZ4eVhHNTlPMXh5WEc1Y2NseHVablZ1WTNScGIyNGdjbVZ3YkdGalpVNXZaR1Z6SUNodmNtbG5hVzVoYkN3Z2NtVndiR0ZqWlcxbGJuUXBJSHRjY2x4dUlDQnZjbWxuYVc1aGJDNXdZWEpsYm5ST2IyUmxMbkpsY0d4aFkyVkRhR2xzWkNoeVpYQnNZV05sYldWdWRDd2diM0pwWjJsdVlXd3BPMXh5WEc0Z0lISmxkSFZ5YmlCeVpYQnNZV05sYldWdWREdGNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYVc1elpYSjBRbVZtYjNKbFRtOWtaU0FvWld3c0lHNWxlSFJGYkNrZ2UxeHlYRzRnSUc1bGVIUkZiQzV3WVhKbGJuUk9iMlJsTG1sdWMyVnlkRUpsWm05eVpTaGxiQ3dnYm1WNGRFVnNLVHRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z1kyeHZibVZJVkUxTVRXRnlhM1Z3SUNodFlYSnJkWEFwSUh0Y2NseHVJQ0JqYjI1emRDQnRZWEpyZFhCVGRISWdQU0JwYzBoVVRVeFRkSEpwYm1jb2JXRnlhM1Z3TG5SeWFXMG9LU2tnUHlCdFlYSnJkWEFnT2lCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLRzFoY210MWNDa3VhVzV1WlhKSVZFMU1PMXh5WEc0Z0lISmxkSFZ5YmlCamIyNTJaWEowVTNSeWFXNW5WRzlJVkUxTUtHMWhjbXQxY0ZOMGNpazdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUdOdmJuWmxjblJUZEhKcGJtZFViMGhVVFV3Z0tHMWhjbXQxY0ZOMGNtbHVaeWtnZTF4eVhHNGdJR052Ym5OMElIQmhjbk5sY2lBOUlHNWxkeUJFVDAxUVlYSnpaWElvS1R0Y2NseHVJQ0JqYjI1emRDQndZWEp6WldSRWIyTjFiV1Z1ZENBOUlIQmhjbk5sY2k1d1lYSnpaVVp5YjIxVGRISnBibWNvYldGeWEzVndVM1J5YVc1bkxDQW5kR1Y0ZEM5b2RHMXNKeWs3WEhKY2JpQWdjbVYwZFhKdUlIQmhjbk5sWkVSdlkzVnRaVzUwTG1KdlpIa3VabWx5YzNSRmJHVnRaVzUwUTJocGJHUTdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUhkaGJHdE9iMlJsY3lBb2JtOWtaU3dnWTJJcElIdGNjbHh1SUNCcFppQW9JR05pS0c1dlpHVXBJRDA5UFNBdE1Ta2dlMXh5WEc0Z0lDQWdjbVYwZFhKdU8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ1FYSnlZWGt1Y0hKdmRHOTBlWEJsWEhKY2JpQWdJQ0F1YzJ4cFkyVmNjbHh1SUNBZ0lDNWpZV3hzS0c1dlpHVXVZMmhwYkdSeVpXNHBYSEpjYmlBZ0lDQXVabTl5UldGamFDZ29aV3dwSUQwK0lIZGhiR3RPYjJSbGN5aGxiQ3dnWTJJcEtUdGNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnWTI5c2JHVmpkRWhVVFV4T2IyUmxjeUFvY205dmRDd2dhWE5YWVc1MFpXUXBJSHRjY2x4dUlDQmpiMjV6ZENCdWIyUmxjeUE5SUZ0ZE8xeHlYRzRnSUhkaGJHdE9iMlJsY3loeWIyOTBMQ0FvWld3cElEMCtJR2x6VjJGdWRHVmtLR1ZzS1NBL0lHNXZaR1Z6TG5CMWMyZ29aV3dwSURvZ0p5Y3BPMXh5WEc0Z0lISmxkSFZ5YmlCdWIyUmxjenRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2NtVnRiM1psVG05a1pTQW9ibTlrWlNrZ2UxeHlYRzRnSUc1dlpHVXVjR0Z5Wlc1MFRtOWtaUzV5WlcxdmRtVkRhR2xzWkNodWIyUmxLVHRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2NtVjNjbWwwWlZSdlRtOWtaU0FvYm05a1pTd2dkR1Y0ZENrZ2UxeHlYRzRnSUdWdGNIUjVUbTlrWlNodWIyUmxLVHRjY2x4dUlDQjNjbWwwWlZSdlRtOWtaU2h1YjJSbExDQjBaWGgwS1R0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdkM0pwZEdWVWIwNXZaR1VnS0c1dlpHVXNJSFJsZUhRcElIdGNjbHh1SUNCamIyNXpkQ0IwWlhoMFRtOWtaU0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVlJsZUhST2IyUmxLSFJsZUhRcE8xeHlYRzRnSUc1dlpHVXVZWEJ3Wlc1a1EyaHBiR1FvZEdWNGRFNXZaR1VwTzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQmxiWEIwZVU1dlpHVWdLRzV2WkdVcElIdGNjbHh1SUNCM2FHbHNaU0FvYm05a1pTNW9ZWE5EYUdsc1pFNXZaR1Z6S0NrcElIdGNjbHh1SUNBZ0lHNXZaR1V1Y21WdGIzWmxRMmhwYkdRb2JtOWtaUzVtYVhKemRFTm9hV3hrS1R0Y2NseHVJQ0I5WEhKY2JuMWNjbHh1SWl3aWFXMXdiM0owSUh0Y2NseHVJQ0JwYzBGeWNtRjVMRnh5WEc0Z0lHbHpUMkpxWldOMExGeHlYRzRnSUdselZXNWtaV1pwYm1Wa0xGeHlYRzU5SUdaeWIyMGdKeTR2WTJobFkydGxjbk1uTzF4eVhHNWNjbHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZWEpsUlhGMVlXdzdYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQmhjbVZGY1hWaGJDQW9abWx5YzNRc0lITmxZMjl1WkNrZ2UxeHlYRzRnSUdsbUlDaHBjMVZ1WkdWbWFXNWxaQ2htYVhKemRDa2dmSHdnYVhOVmJtUmxabWx1WldRb2MyVmpiMjVrS1NrZ2UxeHlYRzRnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdhV1lnS0hSNWNHVnZaaUJtYVhKemRDQWhQVDBnZEhsd1pXOW1JSE5sWTI5dVpDa2dlMXh5WEc0Z0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnWTI5dWMzUWdjR0Z5Wlc1MFRtOWtaU0E5SUhzZ1kyaHBiR1JPYjJSbE9pQjdmU0I5TzF4eVhHNWNjbHh1SUNCcFppQW9hWE5CY25KaGVTaHpaV052Ym1RcEtTQjdYSEpjYmlBZ0lDQmphR1ZqYTB0bGVYTkZjWFZoYkdsMGVTaGNjbHh1SUNBZ0lDQWdabWx5YzNRZ1B5Qm1hWEp6ZEM1dFlYQW9aV3dnUFQ0Z1pXd3BJRG9nVzEwc1hISmNiaUFnSUNBZ0lITmxZMjl1WkM1dFlYQW9aV3dnUFQ0Z1pXd3BMRnh5WEc0Z0lDQWdJQ0J3WVhKbGJuUk9iMlJsWEhKY2JpQWdJQ0FwTzF4eVhHNWNjbHh1SUNCOUlHVnNjMlVnYVdZZ0tHbHpUMkpxWldOMEtITmxZMjl1WkNrcElIdGNjbHh1SUNBZ0lHTm9aV05yUzJWNWMwVnhkV0ZzYVhSNUtHWnBjbk4wTENCelpXTnZibVFzSUhCaGNtVnVkRTV2WkdVcE8xeHlYRzVjY2x4dUlDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ2NtVjBkWEp1SUdacGNuTjBJRDA5UFNCelpXTnZibVE3WEhKY2JseHlYRzRnSUgxY2NseHVYSEpjYmlBZ2NtVjBkWEp1SUhCaGNtVnVkRTV2WkdVdVkyaHBiR1JPYjJSbE8xeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJqYUdWamEwdGxlWE5GY1hWaGJHbDBlU0FvWm1seWMzUXNJSE5sWTI5dVpDd2djR0Z5Wlc1MFRtOWtaU2tnZTF4eVhHNGdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQnpaV052Ym1RcElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb2FYTkJjbkpoZVNobWFYSnpkQ2twSUh0Y2NseHVJQ0FnSUNBZ2FXWWdLR2x6Vlc1a1pXWnBibVZrS0dacGNuTjBXMnRsZVYwcEtTQjdYSEpjYmlBZ0lDQWdJQ0FnY0dGeVpXNTBUbTlrWlM1amFHbHNaRTV2WkdWYmEyVjVYU0E5SUhzZ1lXUmtPaUIwY25WbElIMDdYSEpjYmlBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnWTI5dWRHbHVkV1U3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2FXWWdLR1pwY25OMFcydGxlVjBnSVQwOUlITmxZMjl1WkZ0clpYbGRLU0I3WEhKY2JpQWdJQ0FnSUhCaGNtVnVkRTV2WkdVdVkyaHBiR1JPYjJSbFcydGxlVjBnUFNCbVlXeHpaVHRjY2x4dUlDQWdJSDFjY2x4dUlDQjlYSEpjYmx4eVhHNGdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQm1hWEp6ZENrZ2UxeHlYRzVjY2x4dUlDQWdJR2xtSUNocGMwRnljbUY1S0dacGNuTjBLU2tnZTF4eVhHNGdJQ0FnSUNCcFppQW9hWE5WYm1SbFptbHVaV1FvYzJWamIyNWtXMnRsZVYwcEtTQjdYSEpjYmlBZ0lDQWdJQ0FnY0dGeVpXNTBUbTlrWlM1amFHbHNaRTV2WkdWYmEyVjVYU0E5SUhzZ2NtVnRiM1psT2lCMGNuVmxJSDA3WEhKY2JpQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ1kyOXVkR2x1ZFdVN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdhV1lnS0dacGNuTjBXMnRsZVYwZ0lUMDlJSE5sWTI5dVpGdHJaWGxkS1NCN1hISmNiaUFnSUNBZ0lIQmhjbVZ1ZEU1dlpHVXVZMmhwYkdST2IyUmxXMnRsZVYwZ1BTQm1ZV3h6WlR0Y2NseHVJQ0FnSUgxY2NseHVJQ0I5WEhKY2JseHlYRzRnSUhKbGRIVnliaUJ3WVhKbGJuUk9iMlJsTzF4eVhHNTlYSEpjYmlJc0ltbHRjRzl5ZENCN1hISmNiaUFnYVhOUFltcGxZM1FzWEhKY2JpQWdhWE5HZFc1amRHbHZiaXhjY2x4dWZTQm1jbTl0SUNjdUwyTm9aV05yWlhKekp6dGNjbHh1WEhKY2JtVjRjRzl5ZENCN1hISmNiaUFnWjJWMExGeHlYRzRnSUhObGRDeGNjbHh1SUNCeVpXMXZkbVVzWEhKY2JpQWdZV1JrUTI5dWMzUkdhV1ZzWkhNc1hISmNiaUFnWm05eVJXRmphQ3hjY2x4dUlDQnRZWEFzWEhKY2JpQWdiV0Z3UzJWNWN5eGNjbHh1SUNCbWFXeDBaWElzWEhKY2JpQWdkRzlQWW1wbFkzUXNYSEpjYmlBZ1puVnNiRTFoY0N4Y2NseHVJQ0J6Y0d4cGRGQnBaV05sTEZ4eVhHNTlPMXh5WEc1Y2NseHVablZ1WTNScGIyNGdaMlYwSUNodlltb3NJSEJoZEdncElIdGNjbHh1SUNCc1pYUWdkbUZzZFdVZ1BTQnZZbW83WEhKY2JpQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J3WVhSb0xteGxibWQwYURzZ2FTc3JLU0I3WEhKY2JseHlYRzRnSUNBZ2RISjVJSHRjY2x4dUlDQWdJQ0FnZG1Gc2RXVWdQU0IyWVd4MVpWdHdZWFJvVzJsZFhUdGNjbHh1WEhKY2JpQWdJQ0I5SUdOaGRHTm9JQ2hsS1NCN1hISmNiaUFnSUNBZ0lISmxkSFZ5YmlCMllXeDFaVHRjY2x4dVhISmNiaUFnSUNCOVhISmNiaUFnZlZ4eVhHNGdJSEpsZEhWeWJpQjJZV3gxWlR0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdjMlYwSUNodlltb3NJSEJoZEdnc0lIWmhiSFZsS1NCN1hISmNiaUFnYVdZZ0tDRndZWFJvTG14bGJtZDBhQ2tnZTF4eVhHNGdJQ0FnYVdZZ0tHbHpUMkpxWldOMEtIWmhiSFZsS1NrZ2UxeHlYRzRnSUNBZ0lDQnlaWFIxY200Z1QySnFaV04wTG1GemMybG5iaWh2WW1vc0lIWmhiSFZsS1R0Y2NseHVJQ0FnSUgxY2NseHVJQ0FnSUhKbGRIVnliaUJ2WW1vZ1BTQjJZV3gxWlR0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUd4bGRDQmtaWE4wSUQwZ2IySnFPMXh5WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2djR0YwYUM1c1pXNW5kR2dnTFNBeE95QnBLeXNwSUh0Y2NseHVJQ0FnSUdsbUlDZ2haR1Z6ZEZzZ2NHRjBhRnRwWFNCZEtTQjdYSEpjYmlBZ0lDQWdJR1JsYzNRZ1BTQmtaWE4wVzNCaGRHaGJhVjFkSUQwZ2UzMDdYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQmtaWE4wSUQwZ1pHVnpkRnR3WVhSb1cybGRYVHRjY2x4dUlDQWdJSDFjY2x4dUlDQjlYSEpjYmx4eVhHNGdJR2xtSUNocGMwOWlhbVZqZENoMllXeDFaU2twSUh0Y2NseHVJQ0FnSUdSbGMzUmJJSEJoZEdoYmFWMGdYU0E5SUdSbGMzUmJJSEJoZEdoYmFWMGdYU0I4ZkNCN2ZUdGNjbHh1SUNBZ0lFOWlhbVZqZEM1aGMzTnBaMjRvWkdWemRGc2djR0YwYUZ0cFhTQmRMQ0IyWVd4MVpTazdYSEpjYmlBZ2ZTQmxiSE5sSUh0Y2NseHVJQ0FnSUdSbGMzUmJJSEJoZEdoYmFWMGdYU0E5SUhaaGJIVmxPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdjbVYwZFhKdUlHOWlhanRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2NtVnRiM1psSUNodlltb3NJSEJoZEdncElIdGNjbHh1SUNCc1pYUWdkbUZzZFdVZ1BTQnZZbW83WEhKY2JpQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0J3WVhSb0xteGxibWQwYUNBdElERTdJR2tyS3lrZ2UxeHlYRzRnSUNBZ2RtRnNkV1VnUFNCMllXeDFaVnR3WVhSb1cybGRYVHRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJR1JsYkdWMFpTQjJZV3gxWlZ0d1lYUm9XMmxkWFR0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdZV1JrUTI5dWMzUkdhV1ZzWkhNZ0tHOWlhaXdnWm1sbGJHUnpLU0I3WEhKY2JpQWdabTl5SUNoc1pYUWdabWxsYkdRZ2FXNGdabWxsYkdSektTQjdYSEpjYmlBZ0lDQlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvYjJKcUxDQm1hV1ZzWkN3Z2UxeHlYRzRnSUNBZ0lDQm5aWFE2SUdaMWJtTjBhVzl1SUNncElIc2djbVYwZFhKdUlHWnBaV3hrYzF0bWFXVnNaRjBnZlN4Y2NseHVJQ0FnSUNBZ2MyVjBPaUJtZFc1amRHbHZiaUFvS1NCN0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2loY0lsUnllV2x1WnlCMGJ5QnlaV1JsWm1sdVpTQmpiMjV6ZENCbWFXVnNaQ0FuWENJZ0t5Qm1hV1ZzWkNBcklGd2lKMXdpS1NCOUxGeHlYRzRnSUNBZ2ZTbGNjbHh1SUNCOVhISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJR1p2Y2tWaFkyZ2dLRzlpYWl3Z1kySXBJSHRjY2x4dUlDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2IySnFLU0I3WEhKY2JpQWdJQ0JqYjI1emRDQndjbTl3SUQwZ2IySnFXMnRsZVYwN1hISmNiaUFnSUNCallpaHdjbTl3TENCclpYa3NJRzlpYWlrN1hISmNiaUFnZlZ4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQnRZWEFvYjJKcUxDQmpZaWtnZTF4eVhHNGdJR052Ym5OMElHNWxkMDlpYWlBOUlIdDlYSEpjYmlBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUc5aWFpa2dlMXh5WEc0Z0lDQWdZMjl1YzNRZ2NISnZjQ0E5SUc5aWFsdHJaWGxkTzF4eVhHNGdJQ0FnYm1WM1QySnFXMnRsZVYwZ1BTQmpZaWh3Y205d0xDQnJaWGtzSUc5aWFpazdYSEpjYmlBZ2ZWeHlYRzRnSUhKbGRIVnliaUJ1WlhkUFltbzdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUcxaGNFdGxlWE1nS0c5aWFpd2dZMklwSUh0Y2NseHVJQ0JqYjI1emRDQnVaWGRQWW1vZ1BTQjdmVnh5WEc0Z0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCdlltb3BJSHRjY2x4dUlDQWdJR052Ym5OMElIQnliM0FnUFNCdlltcGJhMlY1WFR0Y2NseHVJQ0FnSUdOdmJuTjBJRzVsZDB0bGVTQTlJR05pS0d0bGVTd2djSEp2Y0N3Z2IySnFLVHRjY2x4dUlDQWdJRzVsZDA5aWFsdHVaWGRMWlhsZElEMGdjSEp2Y0R0Y2NseHVJQ0I5WEhKY2JpQWdjbVYwZFhKdUlHNWxkMDlpYWp0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdjM0JzYVhSUWFXVmpaU0FvYjJKcUxDQmpZaWtnZTF4eVhHNGdJR052Ym5OMElHNWxkMDlpYWlBOUlIdDlYSEpjYmlBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUc5aWFpa2dlMXh5WEc0Z0lDQWdZMjl1YzNRZ2NISnZjQ0E5SUc5aWFsdHJaWGxkTzF4eVhHNGdJQ0FnYVdZZ0tDQmpZaWh3Y205d0xDQnJaWGtzSUc5aWFpa2dLU0I3WEhKY2JpQWdJQ0FnSUc1bGQwOWlhbHRyWlhsZElEMGdjSEp2Y0R0Y2NseHVJQ0FnSUNBZ1pHVnNaWFJsSUc5aWFsdHJaWGxkTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJSDFjY2x4dUlDQnlaWFIxY200Z2JtVjNUMkpxTzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQm1kV3hzVFdGd0lDaHZZbW9zSUdOaUtTQjdYSEpjYmlBZ1kyOXVjM1FnYm1WM1QySnFJRDBnZTMxY2NseHVJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdiMkpxS1NCN1hISmNiaUFnSUNCamIyNXpkQ0J3Y205d0lEMGdiMkpxVzJ0bGVWMDdYSEpjYmlBZ0lDQmpiMjV6ZENCeVpYTWdQU0JqWWloclpYa3NJSEJ5YjNBc0lHOWlhaWs3WEhKY2JpQWdJQ0J1WlhkUFltcGJJSEpsYzFzd1hTQjhmQ0J5WlhNdWEyVjVJSHg4SUhKbGN5NXJJRjBnUFNCeVpYTmJNVjBnZkh3Z2NtVnpXeWQyWVd4MVpTZGRJSHg4SUhKbGMxc25kaWRkTzF4eVhHNGdJSDFjY2x4dUlDQnlaWFIxY200Z2JtVjNUMkpxTzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQm1hV3gwWlhJZ0tHOWlhaXdnWTJJcElIdGNjbHh1SUNCamIyNXpkQ0J1WlhkUFltb2dQU0I3ZlR0Y2NseHVJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdiMkpxS1NCN1hISmNiaUFnSUNCamIyNXpkQ0J3Y205d0lEMGdiMkpxVzJ0bGVWMDdYSEpjYmlBZ0lDQnBaaUFvSUdOaUtIQnliM0FzSUd0bGVTd2diMkpxS1NBcElIdGNjbHh1SUNBZ0lDQWdibVYzVDJKcVcydGxlVjBnUFNCd2NtOXdPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lIMWNjbHh1SUNCeVpYUjFjbTRnYm1WM1QySnFPMXh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCMGIwOWlhbVZqZENBb1lYSnlMQ0IyWVd3cElIdGNjbHh1SUNCamIyNXpkQ0J1WlhkUFltb2dQU0I3ZlR0Y2NseHVJQ0JoY25JdVptOXlSV0ZqYUNnb2Rpa2dQVDRnZTF4eVhHNGdJQ0FnYm1WM1QySnFXM1pkSUQwZ2FYTkdkVzVqZEdsdmJpaDJZV3dwSUQ4Z2RtRnNLSFlwSURvZ2RtRnNPMXh5WEc0Z0lIMHBPMXh5WEc0Z0lISmxkSFZ5YmlCdVpYZFBZbW83WEhKY2JuMWNjbHh1SWl3aWFXMXdiM0owSUhzZ1pHVm1hVzVsSUgwZ1puSnZiU0FuTGk5RVpXWnBibWwwYVc5dUp6dGNjbHh1YVcxd2IzSjBJSHNnWVhCd2JIa2dmU0JtY205dElDY3VMMUJ5YjJSMVkzUnBiMjRuTzF4eVhHNWNjbHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0I3WEhKY2JpQWdaR1ZtYVc1bExGeHlYRzRnSUdGd2NHeDVMRnh5WEc1OU8xeHlYRzRpWFN3aWMyOTFjbU5sVW05dmRDSTZJaUo5IiwiY29uc3QgTUVTU0FHRV9MSVNURU5FUlMgPSB7fTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VGFiICgpIHtcclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VuZE1lc3NhZ2VUb0N1cnJlbnRUYWIgKGFjdGlvbiwgcGF5bG9hZCwgY2IpIHtcclxuICByZXR1cm4gc2VuZE1lc3NhZ2UoYWN0aW9uLCB7IHRvQ3VycmVudFRhYjogdHJ1ZSwgLi4ucGF5bG9hZCB9LCBjYik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kTWVzc2FnZSAoYWN0aW9uLCBwYXlsb2FkLCBjYikge1xyXG4gIGNvbnN0IGNhbGxiYWNrSWQgPSBwYXlsb2FkLmNhbGxiYWNrSWQgfHwgc2F2ZUNhbGxiYWNrKGFjdGlvbiwgY2IpO1xyXG4gIGNvbnN0IG1lc3NhZ2UgPSB7IGFjdGlvbiwgY2FsbGJhY2tJZCwgLi4ucGF5bG9hZCB9O1xyXG5cclxuICBpZiAocGF5bG9hZC50b0N1cnJlbnRUYWIgPT09IHRydWUpIHtcclxuICAgIHJldHVybiBnZXRDdXJyZW50VGFiKCkudGhlbigodGFiKSA9PiBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiWzBdLmlkLCBtZXNzYWdlKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKG1lc3NhZ2UpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25NZXNzYWdlIChtZXNzYWdlLCBhY3Rpb25zID0ge30pIHtcclxuICBpZiAobWVzc2FnZS5pc0Fuc3dlcikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgTUVTU0FHRV9MSVNURU5FUlNbbWVzc2FnZS5jYWxsYmFja0lkXShtZXNzYWdlKTtcclxuICAgICAgZGVsZXRlIE1FU1NBR0VfTElTVEVORVJTW21lc3NhZ2UuY2FsbGJhY2tJZF07XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgfVxyXG5cclxuICBpZiAoYWN0aW9uc1ttZXNzYWdlLmFjdGlvbl0pIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGFjdGlvbnNbIG1lc3NhZ2UuYWN0aW9uIF0obWVzc2FnZSk7XHJcblxyXG4gICAgaWYgKG1lc3NhZ2UuY2FsbGJhY2tJZCkge1xyXG4gICAgICBzZW5kTWVzc2FnZShtZXNzYWdlLmFjdGlvbiwgeyBjYWxsYmFja0lkOiBtZXNzYWdlLmNhbGxiYWNrSWQsIGlzQW5zd2VyOiB0cnVlLCAuLi5yZXN1bHQgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlQ2FsbGJhY2sgKGFjdGlvbiwgY2IpIHtcclxuICBpZiAoIWNiKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBjYWxsYmFja0lkID0gRGF0ZS5ub3coKSArIE1hdGgucmFuZG9tKCkgKyBhY3Rpb247XHJcbiAgTUVTU0FHRV9MSVNURU5FUlNbY2FsbGJhY2tJZF0gPSBjYjtcclxuXHJcbiAgcmV0dXJuIGNhbGxiYWNrSWQ7XHJcbn1cclxuIiwibGV0IFNUQVRFID0ge307XHJcblxyXG5jb25zdCBDT0xPUlMgPSBbXHJcbiAgJzI1NSwgMjU1LCAyNScsXHJcbiAgJzYwLCAxODAsIDc1JyxcclxuICAnMjMwLCAyNSwgNzUnLFxyXG4gICcwLCAxMzAsIDIwMCcsXHJcbiAgJzI0NSwgMTMwLCA0OCcsXHJcbiAgJzE0NSwgMzAsIDE4MCcsXHJcbiAgJzI0MCwgNTAsIDIzMCcsXHJcbiAgJzEyOCwgMTI4LCAxMjgnLFxyXG4gICcyMTAsIDI0NSwgNjAnLFxyXG4gICcyNTAsIDE5MCwgMTkwJyxcclxuXTtcclxuXHJcbmNvbnN0IERFRkFVTFRfU0VBUkNIX1NUUklORyA9IHsgc3RyaW5nOiAnJywgZmlyc3Q6IHRydWUsIGZvY3VzOiB0cnVlLCBkaXN0YW5jZTogbnVsbCB9O1xyXG5jb25zdCBERUZBVUxUX1NFQVJDSEVTID0gQ09MT1JTLm1hcChpbml0aWF0ZVNlYXJjaE9wdHMpO1xyXG5jb25zdCBERUZBVUxUX1NUQVRFID0ge1xyXG4gIGN1cnJlbnRTZWFyY2hJZHg6IERFRkFVTFRfU0VBUkNIRVNbMV0uY3VycmVudFNlYXJjaElkeCxcclxuICBzZWFyY2hlczogREVGQVVMVF9TRUFSQ0hFUyxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGluaXRpYXRlU2VhcmNoT3B0cyAodiwgaWR4KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNlYXJjaFN0cmluZ3M6IFsgT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9TRUFSQ0hfU1RSSU5HKSBdLFxyXG4gICAgZm91bmRSZXN1bHRzOiAwLFxyXG4gICAgbGFzdEZvY3VzZWQ6IDAsXHJcbiAgICBzZWFyY2hIYXBwZW5lZDogZmFsc2UsXHJcbiAgICBzaG93blJlc3VsdE51bWJlcjogMCxcclxuICAgIGNvbG9yOiBDT0xPUlNbaWR4XSxcclxuICAgIGN1cnJlbnRTZWFyY2hJZHg6IGlkeCxcclxuICAgIGNhc2VTZW5zaXRpdmU6IGZhbHNlLFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNFbXB0eSAoKSB7XHJcbiAgcmV0dXJuICFPYmplY3Qua2V5cyhTVEFURSkubGVuZ3RoO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRGaW5kaW5ncyAoZmluZGluZ3MpIHtcclxuICBTVEFURS5zZWFyY2hlcy5mb3JFYWNoKChzZWFyY2gsIGkpID0+IHtcclxuICAgIGNvbnN0IGZvdW5kUmVzdWx0cyA9IGZpbmRpbmdzW2ldIHx8IDA7XHJcbiAgICBzZWFyY2guZm91bmRSZXN1bHRzID0gZm91bmRSZXN1bHRzO1xyXG4gICAgc2VhcmNoLnNlYXJjaEhhcHBlbmVkID0gZm91bmRSZXN1bHRzO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREZWZhdWx0ICgpIHtcclxuICByZXR1cm4gU1RBVEUgPSBERUZBVUxUX1NUQVRFO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZWFyY2hlc0xlbmd0aCAoKSB7XHJcbiAgcmV0dXJuIFNUQVRFLnNlYXJjaGVzLmxlbmd0aDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U2VhcmNoIChpZHgpIHtcclxuICByZXR1cm4gU1RBVEUuc2VhcmNoZXNbaWR4XTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudFNlYXJjaCAoKSB7XHJcbiAgcmV0dXJuIFNUQVRFLnNlYXJjaGVzWyBTVEFURS5jdXJyZW50U2VhcmNoSWR4IF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEN1cnJlbnRTZWFyY2ggKHNlYXJjaCkge1xyXG4gIFNUQVRFLnNlYXJjaGVzWyBzZWFyY2guY3VycmVudFNlYXJjaElkeCBdID0gc2VhcmNoO1xyXG4gIFNUQVRFLmN1cnJlbnRTZWFyY2hJZHggPSBzZWFyY2guY3VycmVudFNlYXJjaElkeDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRTZWFyY2ggKGlkeCkge1xyXG4gIFNUQVRFLnNlYXJjaGVzW2lkeF0gPSBpbml0aWF0ZVNlYXJjaE9wdHMoQ09MT1JTW2lkeF0sIGlkeCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0QWxsU2VhcmNoZXMgKCkge1xyXG4gIENPTE9SUy5mb3JFYWNoKChjLCBpZHgpID0+IHJlc2V0U2VhcmNoKGlkeCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlU3RhdGUgKHVybCwgc3RhdGUpIHtcclxuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odXJsLCBKU09OLnN0cmluZ2lmeSggc3RhdGUgfHwgU1RBVEUpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFN0YXRlICh1cmwpIHtcclxuICByZXR1cm4gU1RBVEUgPSBKU09OLnBhcnNlKCB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0odXJsKSApO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVIaWdobGlnaHRTdGF0ZSAoeyBjdXJyZW50U2VhcmNoSWR4LCBzaG93blJlc3VsdE51bWJlciwgdXJsIH0pIHtcclxuICBjb25zdCBzdGF0ZSA9IGxvYWRTdGF0ZSh1cmwpO1xyXG4gIHN0YXRlLmN1cnJlbnRTZWFyY2hJZHggPSBjdXJyZW50U2VhcmNoSWR4O1xyXG4gIHN0YXRlLnNlYXJjaGVzWyBjdXJyZW50U2VhcmNoSWR4IF0uc2hvd25SZXN1bHROdW1iZXIgPSBzaG93blJlc3VsdE51bWJlcjtcclxuICBzYXZlU3RhdGUodXJsLCBzdGF0ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBDT0xPUlMsXHJcbiAgaXNFbXB0eSxcclxuICBhZGRGaW5kaW5ncyxcclxuICBzZXREZWZhdWx0LFxyXG4gIHNlYXJjaGVzTGVuZ3RoLFxyXG4gIGdldFNlYXJjaCxcclxuICBnZXRDdXJyZW50U2VhcmNoLFxyXG4gIHNldEN1cnJlbnRTZWFyY2gsXHJcbiAgcmVzZXRBbGxTZWFyY2hlcyxcclxuICByZXNldFNlYXJjaCxcclxuICB1cGRhdGVIaWdobGlnaHRTdGF0ZSxcclxuICBzYXZlU3RhdGUsXHJcbiAgbG9hZFN0YXRlXHJcbn07XHJcbiIsImltcG9ydCBDb3VsaSBmcm9tICdjb3VsaSc7XHJcbmltcG9ydCBTdGF0ZSBmcm9tICcuL2NvbW1vbi9zdGF0ZSc7XHJcbmltcG9ydCAnLi91aS1jb21wb25lbnRzL3NlYXJjaC1zdHJpbmcvaW5kZXgnO1xyXG5pbXBvcnQgJy4vdWktY29tcG9uZW50cy9hcHAvaW5kZXgnO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRDdXJyZW50VGFiLFxyXG4gIHNlbmRNZXNzYWdlLFxyXG4gIHNlbmRNZXNzYWdlVG9DdXJyZW50VGFiLFxyXG4gIG9uTWVzc2FnZSxcclxufSBmcm9tICcuL2NvbW1vbi9pbnRlcmFjdGlvbic7XHJcblxyXG5icm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlKSA9PiBvbk1lc3NhZ2UobWVzc2FnZSkpO1xyXG5cclxuZ2V0Q3VycmVudFRhYigpXHJcbiAgLnRoZW4oKHRhYikgPT4gc2VuZE1lc3NhZ2UoJ3RhYlN0YXRlJywgeyBpZDogdGFiWzBdLmlkIH0sICh7IHNjcmlwdEhhc1J1biB9KSA9PiB7XHJcblxyXG4gICAgbGV0IHJ1blBhZ2VTY3JpcHQgPSBQcm9taXNlLnJlc29sdmUoKTtcclxuXHJcbiAgICBpZiAoIXNjcmlwdEhhc1J1bikge1xyXG5cclxuICAgICAgcnVuUGFnZVNjcmlwdCA9IGJyb3dzZXIudGFicy5leGVjdXRlU2NyaXB0KHsgZmlsZTogJy9wYWdlLXNjcmlwdC5qcycgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBzZW5kTWVzc2FnZVRvQ3VycmVudFRhYignc2F2ZVRhYklkJywgeyB0YWJJZDogdGFiWzBdLmlkIH0pO1xyXG4gICAgICAgICAgc2VuZE1lc3NhZ2UoJ3RhYlN0YXRlJywgeyBpZDogdGFiWzBdLmlkLCBzdGF0ZTogdHJ1ZSB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcnVuUGFnZVNjcmlwdFxyXG4gICAgICAudGhlbigoKSA9PiB0YWJbMF0udXJsKVxyXG4gICAgICAudGhlbihzZXR1cEdsb2JhbEV2ZW50cylcclxuICAgICAgLnRoZW4oc2V0dXBTdGF0ZSlcclxuICAgICAgLnRoZW4obG9hZFByZXZpb3VzbHlGb3VuZClcclxuICAgICAgLnRoZW4oc2V0dXBDb250ZW50UGFnZSlcclxuICAgICAgLnRoZW4oc2V0dXBJbnRlcmZhY2UpXHJcbiAgICAgIC5jYXRjaChyZXBvcnRFeGVjdXRlU2NyaXB0RXJyb3IpO1xyXG5cclxuICB9KSk7XHJcblxyXG5mdW5jdGlvbiBzZXR1cEdsb2JhbEV2ZW50cyAodXJsKSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VubG9hZCcsICgpID0+IHtcclxuICAgIFN0YXRlLnNhdmVTdGF0ZSh1cmwpO1xyXG4gICAgc2VuZE1lc3NhZ2UoJ3BvcHVwU3RhdGUnLCB7IG9wZW46IGZhbHNlIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdXJsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXR1cFN0YXRlICh1cmwpIHtcclxuXHJcbiAgdHJ5IHtcclxuICAgIFN0YXRlLmxvYWRTdGF0ZSh1cmwpO1xyXG5cclxuICAgIGlmIChTdGF0ZS5pc0VtcHR5KCkpIHtcclxuICAgICAgU3RhdGUuc2V0RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIFN0YXRlLnNldERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIHNlbmRNZXNzYWdlKCdwb3B1cFN0YXRlJywgeyBvcGVuOiB0cnVlIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUHJldmlvdXNseUZvdW5kIChzdGF0ZSkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSAoKHJlc29sdmUpID0+IHtcclxuXHJcbiAgICBmZXRjaFByZXZpb3VzbHlGb3VuZCgocmVzcG9uc2UpID0+IHtcclxuICAgICAgU3RhdGUuYWRkRmluZGluZ3MocmVzcG9uc2UpO1xyXG5cclxuICAgICAgcmVzb2x2ZShzdGF0ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwQ29udGVudFBhZ2UgKCkge1xyXG4gIHNlbmRNZXNzYWdlVG9DdXJyZW50VGFiKCdzZXR1cENvbnRlbnRQYWdlJywgeyBjb2xvcnM6IFN0YXRlLkNPTE9SUyB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0dXBJbnRlcmZhY2UgKHN0YXRlKSB7XHJcbiAgQ291bGkuYXBwbHkoJyNhcHAnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmV0Y2hQcmV2aW91c2x5Rm91bmQgKGNiKSB7XHJcbiAgc2VuZE1lc3NhZ2VUb0N1cnJlbnRUYWIoJ2ZldGNoUHJldmlvdXNseUZvdW5kJywgbnVsbCwgY2IpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXBvcnRFeGVjdXRlU2NyaXB0RXJyb3IoZXJyb3IpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Vycm9yLWNvbnRlbnRcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Vycm9yLWNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGVycm9yLm1lc3NhZ2UpICk7XHJcbiAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxufVxyXG4iLCJpbXBvcnQgQ291bGkgZnJvbSAnY291bGknO1xyXG5pbXBvcnQgc3RhdGUgZnJvbSAnLi4vLi4vY29tbW9uL3N0YXRlJztcclxuXHJcbmltcG9ydCBtYXJrdXAgZnJvbSAnLi9tYXJrdXAuaHRtbCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuaW1wb3J0IHsgc2VuZE1lc3NhZ2VUb0N1cnJlbnRUYWIgfSBmcm9tICcuLi8uLi9jb21tb24vaW50ZXJhY3Rpb24nO1xyXG5cclxuY29uc3QgQVBQX1dJRFRIID0gMzgwO1xyXG5jb25zdCBNQVhfSU5QVVRfV0lEVEggPSAyNDU7XHJcbmNvbnN0IEtFWUJPQVJEX0tFWVMgPSBBcnJheSgxMCkuZmlsbCg0OCkucmVkdWNlKChhICwgdiwgaSkgPT4gKGFbaV0gPSA0OCArIGkpICYmIGEgLCB7fSlcclxuT2JqZWN0LmFzc2lnbihLRVlCT0FSRF9LRVlTLCB7XHJcbiAgRU5URVI6IDEzLFxyXG4gIERFTEVURTogNDYsXHJcbiAgdzogODcsXHJcbiAgZTogNjksXHJcbiAgcjogODIsXHJcbiAgYTogNjUsXHJcbiAgczogODMsXHJcbiAgZDogNjgsXHJcbiAgZjogNzAsXHJcbiAgYzogNjcsXHJcbiAgYjogNjYsXHJcbiAgVVA6IDM4LFxyXG4gIExFRlQ6IDM3LFxyXG4gIERPV046IDQwLFxyXG4gIFJJR0hUOiAzOSxcclxufSk7XHJcblxyXG5Db3VsaS5kZWZpbmUoJ2FwcCcsIG1hcmt1cCwge1xyXG5cclxuICBsYXN0Rm9jdXNlZDoge30sXHJcbiAgc2VhcmNoSGFwcGVuZWQ6IHt9LFxyXG4gIGNhc2VTZW5zaXRpdmU6IHt9LFxyXG4gIGNvbG9yOiB7fSxcclxuICBibGlua1NldDoge30sXHJcblxyXG4gIGZvdW5kUmVzdWx0czoge1xyXG4gICAgaHRtbDogKCQpID0+IHtcclxuICAgICAgaWYgKCEkLnNlYXJjaEhhcHBlbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgcmVzdWx0U3RyaW5nID0gJC5mb3VuZFJlc3VsdHMgKyAnIHJlc3VsdHMnO1xyXG5cclxuICAgICAgaWYgKCQuZm91bmRSZXN1bHRzKSB7XHJcbiAgICAgICAgcmVzdWx0U3RyaW5nID0gJyBvZiAnICsgcmVzdWx0U3RyaW5nO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0U3RyaW5nO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHNlYXJjaEJ1dHRvbjogW3sgY2xpY2s6IChlLCBlbCwgY2kpID0+IHNlYXJjaChjaSkgfV0sXHJcblxyXG4gIGN1cnJlbnRTZWFyY2hJZHg6IHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBjbGljazogKGUsIGVsLCBjaSkgPT4gc3dpdGNoQmxpbmsoY2kpLFxyXG5cclxuICAgICAgY29udGV4dG1lbnU6IChlLCBlbCwgY2kpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcmVtb3ZlU2VhcmNoKGNpLCBlLnNoaWZ0S2V5KTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGtleXVwOiAoZSwgZWwsIGNpKSA9PiB7XHJcbiAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoS0VZQk9BUkRfS0VZUykuaW5kZXhPZihlLmtleUNvZGUpIDwgMCkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICAgIGNhc2UgS0VZQk9BUkRfS0VZUy5VUDpcclxuICAgICAgICAgIGNhc2UgS0VZQk9BUkRfS0VZUy5zOlxyXG4gICAgICAgICAgICBtb3ZlVG9IaWdoZXJIaWdobGlnaHRpbmcoY2kpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgY2FzZSBLRVlCT0FSRF9LRVlTLkRPV046XHJcbiAgICAgICAgICBjYXNlIEtFWUJPQVJEX0tFWVMuZDpcclxuICAgICAgICAgICAgbW92ZVRvTG93ZXJIaWdobGlnaHRpbmcoY2kpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgY2FzZSBLRVlCT0FSRF9LRVlTLkVOVEVSOlxyXG4gICAgICAgICAgY2FzZSBLRVlCT0FSRF9LRVlTLmU6XHJcbiAgICAgICAgICAgIHNlYXJjaChjaSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICBjYXNlIEtFWUJPQVJEX0tFWVMuREVMRVRFOlxyXG4gICAgICAgICAgY2FzZSBLRVlCT0FSRF9LRVlTLnI6XHJcbiAgICAgICAgICAgIHJlbW92ZVNlYXJjaChjaSwgZS5zaGlmdEtleSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICBjYXNlIEtFWUJPQVJEX0tFWVMudzpcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0cmluZycpWyBjaS5nZXQoJ2xhc3RGb2N1c2VkJykgXS5mb2N1cygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgY2FzZSBLRVlCT0FSRF9LRVlTLkxFRlQ6XHJcbiAgICAgICAgICBjYXNlIEtFWUJPQVJEX0tFWVMuYTpcclxuICAgICAgICAgICAgc3dpdGNoR3JvdXAoY2ksIHsgaW5jOiAtMSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgIGNhc2UgS0VZQk9BUkRfS0VZUy5SSUdIVDpcclxuICAgICAgICAgIGNhc2UgS0VZQk9BUkRfS0VZUy5mOlxyXG4gICAgICAgICAgICBzd2l0Y2hHcm91cChjaSwgeyBpbmM6IDEgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICBjYXNlIEtFWUJPQVJEX0tFWVMuYzpcclxuICAgICAgICAgICAgc3dpdGNoQ2FzZVNlbnNpdGl2aXR5KGNpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgIGNhc2UgS0VZQk9BUkRfS0VZUy5iOlxyXG4gICAgICAgICAgICBzd2l0Y2hCbGluayhjaSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBzd2l0Y2hHcm91cChjaSwgeyBzZXQ6IGUua2V5Q29kZSAtIDQ4IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHN0eWxlOiAoJCkgPT4gKHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgnICsgICQuY29sb3IgKyAnLCAwLjM1KScsXHJcbiAgICB9KSxcclxuICAgIGhvb2tzOiB7XHJcbiAgICAgIHVwZGF0ZTogKGVsKSA9PiBlbC5mb2N1cygpXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbW92ZUxlZnQ6IFt7IGNsaWNrOiAoZSwgZWwsIGNpKSA9PiBzd2l0Y2hHcm91cChjaSwgeyBpbmM6IC0xIH0pIH1dLFxyXG4gIG1vdmVSaWdodDogW3sgY2xpY2s6IChlLCBlbCwgY2kpID0+IHN3aXRjaEdyb3VwKGNpLCB7IGluYzogMSB9KSB9XSxcclxuXHJcbiAgcmVtb3ZlU2VhcmNoOiB7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgY2xpY2s6IChlLCBlbCwgY2kpID0+IHJlbW92ZVNlYXJjaChjaSwgZS5zaGlmdEtleSlcclxuICAgIH0sXHJcbiAgICBjbGFzczogKCQpID0+ICh7XHJcbiAgICAgIGhpZGRlbjogJC5zZWFyY2hTdHJpbmdzLmxlbmd0aCA9PT0gMSAmJiAhJC5zZWFyY2hTdHJpbmdzWzBdLnN0cmluZy5sZW5ndGggJiYgISQuc2VhcmNoSGFwcGVuZWRcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgY2FzZUJ1dHRvbjoge1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIGNsaWNrOiAoZSwgZWwsIGNpKSA9PiBzd2l0Y2hDYXNlU2Vuc2l0aXZpdHkoY2kpLFxyXG4gICAgfSxcclxuICAgIHN0eWxlOiAoJCkgPT4gKHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAkLmNhc2VTZW5zaXRpdmUgPyAnUGFsZUdyZWVuJyA6ICd3aGl0ZScsXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIHJlc3VsdHM6IHsgY2xhc3M6ICgkKSA9PiAoeyBoaWRkZW46ICEkLnNlYXJjaEhhcHBlbmVkIH0pIH0sXHJcblxyXG4gIGNvbnRyb2xzOiAoJCkgPT4gKHsgaGlkZGVuOiAhJC5mb3VuZFJlc3VsdHMgfSksXHJcblxyXG4gIG1vdmVVcDogW3sgY2xpY2s6IChlLCBlbCwgY2kpID0+IG1vdmVUb0hpZ2hlckhpZ2hsaWdodGluZyhjaSkgfV0sXHJcblxyXG4gIG1vdmVEb3duOiBbeyBjbGljazogKGUsIGVsLCBjaSkgPT4gbW92ZVRvTG93ZXJIaWdobGlnaHRpbmcoY2kpIH1dLFxyXG5cclxuICBibGluazoge1xyXG4gICAgZXZlbnRzOiB7IGNsaWNrOiAoZSwgZWwsIGNpKSA9PiBzd2l0Y2hCbGluayhjaSkgfSxcclxuICAgIHN0eWxlOiAoJCkgPT4gKHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAkLmJsaW5rU2V0ID8gYHJnYmEoJHsgJC5jb2xvciB9LCAwLjM1KWAgOiAnd2hpdGUnLFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAnJzoge1xyXG4gICAgaG9va3M6IHtcclxuICAgICAgbW91bnQ6IChlbCwgZGF0YSwgY2kpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50U2VhcmNoID0gc3RhdGUuZ2V0Q3VycmVudFNlYXJjaCgpO1xyXG4gICAgICAgIGNpLnNldChjdXJyZW50U2VhcmNoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGNpLm1hcmt1cCgnY3VycmVudFNlYXJjaElkeCcpLmZvY3VzKCk7XHJcbiAgICAgICAgICBpZiAoY3VycmVudFNlYXJjaC5zaG93blJlc3VsdE51bWJlcikge1xyXG4gICAgICAgICAgICBtb3ZlVG9IaWdobGlnaHRpbmcoY3VycmVudFNlYXJjaC5jdXJyZW50U2VhcmNoSWR4LCBjdXJyZW50U2VhcmNoLnNob3duUmVzdWx0TnVtYmVyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCAwKTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHVwZGF0ZTogKGVsLCBkYXRhLCBjaSkgPT4ge1xyXG4gICAgICAgIHN0YXRlLnNldEN1cnJlbnRTZWFyY2goY2kuZ2V0KCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59LCBzdHlsZXMoeyBBUFBfV0lEVEgsIE1BWF9JTlBVVF9XSURUSCB9KSk7XHJcblxyXG5mdW5jdGlvbiBzZWFyY2ggKGNpKSB7XHJcbiAgY29uc3Qgc2VhcmNoU3RyaW5ncyA9IGNpLmdldCgnc2VhcmNoU3RyaW5ncycpLnZhbHVlKCk7XHJcbiAgY29uc3QgY3VycmVudFNlYXJjaElkeCA9IGNpLmdldCgnY3VycmVudFNlYXJjaElkeCcpO1xyXG4gIGNvbnN0IGhpZ2hsaWdodENvbG9yID0gY2kuZ2V0KCdjb2xvcicpO1xyXG4gIGNvbnN0IGNhc2VTZW5zaXRpdmUgPSBjaS5nZXQoJ2Nhc2VTZW5zaXRpdmUnKTtcclxuICBjb25zdCBzZWFyY2hTdHJpbmcgPSBzZWFyY2hTdHJpbmdzLm1hcCgoc3RyT2JqKSA9PiBzdHJPYmouc3RyaW5nKS5qb2luKCcgJyk7XHJcblxyXG4gIEZJTkRfQVBJX0lOUFVUX0JVR19GSVhfQkVGT1JFKCgpID0+IHtcclxuXHJcbiAgICBicm93c2VyLmZpbmQuZmluZCggc2VhcmNoU3RyaW5ncy5zaGlmdCgpLnN0cmluZyAsIHsgaW5jbHVkZVJhbmdlRGF0YTogdHJ1ZSwgY2FzZVNlbnNpdGl2ZSB9KVxyXG4gICAgLnRoZW4oKGZvdW5kUmVzdWx0cykgPT4ge1xyXG4gICAgICBGSU5EX0FQSV9JTlBVVF9CVUdfRklYX0FGVEVSKCk7XHJcblxyXG4gICAgICByZWZpbmVGaW5kaW5ncyh7XHJcbiAgICAgICAgc2VhcmNoSWQ6IGN1cnJlbnRTZWFyY2hJZHgsXHJcbiAgICAgICAgZmlyc3RGb3VuZFBhcnQ6IGZvdW5kUmVzdWx0cyxcclxuICAgICAgICBzZWFyY2hSZWZpbmVtZW50czogc2VhcmNoU3RyaW5ncyxcclxuICAgICAgICBoaWdobGlnaHRDb2xvcixcclxuICAgICAgICBjYXNlU2Vuc2l0aXZlLFxyXG4gICAgICAgIHNlYXJjaFN0cmluZyxcclxuICAgICAgfSwgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZm91bmRSZXN1bHRzID0gcmVzcG9uc2UuZm91bmRSZXN1bHRzO1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZU9iaiA9IHsgZm91bmRSZXN1bHRzLCBzZWFyY2hIYXBwZW5lZDogdHJ1ZSwgYmxpbmtTZXQ6IGZhbHNlIH07XHJcbiAgICAgICAgaWYgKGZvdW5kUmVzdWx0cykge1xyXG4gICAgICAgICAgY2hhbmdlT2JqLnNob3duUmVzdWx0TnVtYmVyID0gMTtcclxuICAgICAgICAgIG1vdmVUb0hpZ2hsaWdodGluZyhjdXJyZW50U2VhcmNoSWR4LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNpLnNldChjaGFuZ2VPYmopO1xyXG4gICAgICAgIGNpLmFwcGx5Q2hhbmdlcygpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY2kubWFya3VwKCdjdXJyZW50U2VhcmNoSWR4JykuZm9jdXMoKSwgMCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbW92ZVRvTG93ZXJIaWdobGlnaHRpbmcgKGNpKSB7XHJcbiAgY29uc3Qgc3RhdGUgPSBjaS5nZXQoKTtcclxuICBjb25zdCBzaG93blJlc3VsdE51bWJlciA9IGluY3JlbWVudChzdGF0ZS5zaG93blJlc3VsdE51bWJlciwgMSwgWzEsIHN0YXRlLmZvdW5kUmVzdWx0c10pO1xyXG4gIGNpLnNldCh7IHNob3duUmVzdWx0TnVtYmVyIH0pO1xyXG4gIG1vdmVUb0hpZ2hsaWdodGluZyhzdGF0ZS5jdXJyZW50U2VhcmNoSWR4LCBzaG93blJlc3VsdE51bWJlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdmVUb0hpZ2hlckhpZ2hsaWdodGluZyAoY2kpIHtcclxuICBjb25zdCBzdGF0ZSA9IGNpLmdldCgpO1xyXG4gIGNvbnN0IHNob3duUmVzdWx0TnVtYmVyID0gaW5jcmVtZW50KHN0YXRlLnNob3duUmVzdWx0TnVtYmVyLCAtMSwgWzEsIHN0YXRlLmZvdW5kUmVzdWx0c10pO1xyXG4gIGNpLnNldCh7IHNob3duUmVzdWx0TnVtYmVyIH0pO1xyXG4gIG1vdmVUb0hpZ2hsaWdodGluZyhzdGF0ZS5jdXJyZW50U2VhcmNoSWR4LCBzaG93blJlc3VsdE51bWJlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN3aXRjaEJsaW5rIChjaSkge1xyXG4gIGNvbnN0IHN0YXRlID0gY2kuZ2V0KCk7XHJcbiAgbGV0IG9wZXJhdGlvbjtcclxuXHJcbiAgaWYgKHN0YXRlLmJsaW5rU2V0KSB7XHJcbiAgICBvcGVyYXRpb24gPSAncmVtb3ZlQmxpbmtlckZyb21IaWdobGlnaHRpbmdzJztcclxuICB9IGVsc2Uge1xyXG4gICAgb3BlcmF0aW9uID0gJ2FkZEJsaW5rZXJUb0hpZ2hsaWdodGluZ3MnO1xyXG4gIH1cclxuXHJcbiAgc2VuZE1lc3NhZ2VUb0N1cnJlbnRUYWIob3BlcmF0aW9uLCB7XHJcbiAgICBzZWFyY2hJZDogc3RhdGUuY3VycmVudFNlYXJjaElkeFxyXG4gIH0pO1xyXG5cclxuICBjaS5zZXQoeyBibGlua1NldDogIXN0YXRlLmJsaW5rU2V0IH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbmNyZW1lbnQgKG51bSwgaW5jLCByYW5nZSkge1xyXG4gIGNvbnN0IG5ld051bSA9IG51bSArIGluYztcclxuICBpZiAobmV3TnVtID4gcmFuZ2VbMV0pIHtcclxuICAgIHJldHVybiByYW5nZVswXTtcclxuICB9XHJcblxyXG4gIGlmIChuZXdOdW0gPCByYW5nZVswXSkge1xyXG4gICAgcmV0dXJuIHJhbmdlWzFdO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ld051bTtcclxufVxyXG5cclxuZnVuY3Rpb24gbW92ZVRvSGlnaGxpZ2h0aW5nIChzZWFyY2hJZCwgaWQpIHtcclxuICBzZW5kTWVzc2FnZVRvQ3VycmVudFRhYignbW92ZVRvSGlnaGxpZ2h0aW5nJywgeyBzZWFyY2hJZCwgaWQ6IGlkIC0gMSB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTZWFyY2ggKGNpLCBhbGwpIHtcclxuICBhbGwgPyByZW1vdmVBbGxTZWFyY2hlcyhjaSkgOiByZW1vdmVDdXJyZW50U2VhcmNoKGNpKTtcclxuXHJcbiAgY29uc3QgbmV3U2VhcmNoU3RhdGUgPSBzdGF0ZS5nZXRDdXJyZW50U2VhcmNoKCk7XHJcbiAgY2kuc2V0KG5ld1NlYXJjaFN0YXRlKTtcclxuICBjaS5hcHBseUNoYW5nZXMoKTtcclxuICBzZXRUaW1lb3V0KCgpID0+IGNpLm1hcmt1cCgnY3VycmVudFNlYXJjaElkeCcpLmZvY3VzKCksIDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVDdXJyZW50U2VhcmNoIChjaSkge1xyXG4gIGNvbnN0IGN1cnJlbnRTZWFyY2hJZHggPSBjaS5nZXQoJ2N1cnJlbnRTZWFyY2hJZHgnKTtcclxuICBzdGF0ZS5yZXNldFNlYXJjaChjdXJyZW50U2VhcmNoSWR4KTtcclxuICByZW1vdmVIaWdobGlnaHRpbmdzKGN1cnJlbnRTZWFyY2hJZHgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVBbGxTZWFyY2hlcyAoY2kpIHtcclxuICBzdGF0ZS5yZXNldEFsbFNlYXJjaGVzKCk7XHJcbiAgc3RhdGUuQ09MT1JTLmZvckVhY2goKGVsLCBpKSA9PiByZW1vdmVIaWdobGlnaHRpbmdzKGkpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlSGlnaGxpZ2h0aW5ncyAoc2VhcmNoSWQpIHtcclxuICBzZW5kTWVzc2FnZVRvQ3VycmVudFRhYigncmVtb3ZlSGlnaGxpZ2h0aW5ncycsIHsgc2VhcmNoSWQgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZmluZUZpbmRpbmdzIChvcHRzLCBjYikge1xyXG4gIHNlbmRNZXNzYWdlVG9DdXJyZW50VGFiKCdyZWZpbmVGaW5kaW5ncycsIG9wdHMsIGNiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3dpdGNoR3JvdXAgKGNpLCBjaGFuZ2VPYmopIHtcclxuICBjb25zdCBhY3Rpb24gPSBPYmplY3Qua2V5cyhjaGFuZ2VPYmopWzBdO1xyXG4gIGNvbnN0IHZhbHVlID0gY2hhbmdlT2JqW2FjdGlvbl07XHJcblxyXG4gIGxldCBuZXh0U2VhcmNoSWR4O1xyXG4gIHN3aXRjaCAoYWN0aW9uKSB7XHJcbiAgICBjYXNlICdpbmMnOlxyXG4gICAgICBjb25zdCBjdXJyZW50U2VhcmNoSWR4ID0gY2kuZ2V0KCdjdXJyZW50U2VhcmNoSWR4Jyk7XHJcbiAgICAgIG5leHRTZWFyY2hJZHggPSBpbmNyZW1lbnQoY3VycmVudFNlYXJjaElkeCwgdmFsdWUsIFswLCBzdGF0ZS5zZWFyY2hlc0xlbmd0aCgpIC0gMV0pO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBuZXh0U2VhcmNoSWR4ID0gdmFsdWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbmV4dFNlYXJjaCA9IHN0YXRlLmdldFNlYXJjaChuZXh0U2VhcmNoSWR4KTtcclxuXHJcbiAgY2kuc2V0KG5leHRTZWFyY2gpO1xyXG4gIGlmIChuZXh0U2VhcmNoLmZvdW5kUmVzdWx0cykge1xyXG4gICAgbW92ZVRvSGlnaGxpZ2h0aW5nKG5leHRTZWFyY2hJZHgsIG5leHRTZWFyY2guc2hvd25SZXN1bHROdW1iZXIpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3dpdGNoQ2FzZVNlbnNpdGl2aXR5IChjaSkge1xyXG4gIGNpLnNldCh7IGNhc2VTZW5zaXRpdmU6ICFjaS5nZXQoJ2Nhc2VTZW5zaXRpdmUnKSB9KVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuICAgIFRFTVBPUkFSWSBGSVggRk9SIEZJTkRJTkcgU1RSSU5HUyBUSEFUIEFSRSBFTlRFUkVEIElOIElOUFVUU1xyXG5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5mdW5jdGlvbiBGSU5EX0FQSV9JTlBVVF9CVUdfRklYX0JFRk9SRSAoY2IpIHtcclxuICBzZW5kTWVzc2FnZVRvQ3VycmVudFRhYignRklORF9BUElfSU5QVVRfQlVHX0ZJWF9CRUZPUkUnLCBudWxsLCBjYik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEZJTkRfQVBJX0lOUFVUX0JVR19GSVhfQUZURVIgKCkge1xyXG4gIHNlbmRNZXNzYWdlVG9DdXJyZW50VGFiKCdGSU5EX0FQSV9JTlBVVF9CVUdfRklYX0FGVEVSJyk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxyXFxuICA8dWwgeC1sYj1cXFwic2VhcmNoU3RyaW5nc1xcXCI+XFxyXFxuICAgIDxzZWFyY2gtc3RyaW5nPlxcclxcbiAgPC91bD5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcInVwcGVyQnV0dG9uc1xcXCI+XFxyXFxuICAgIDxidXR0b24geC1iPVxcXCJzZWFyY2hCdXR0b25cXFwiPkZpbmQ8L2J1dHRvbj5cXHJcXG4gICAgPGJ1dHRvbiB4LWI9XFxcImNhc2VCdXR0b25cXFwiIHRpdGxlPVxcXCJDYXNlLXNlbnNpdGl2ZSBvbi9vZmZcXFwiPkM8L2J1dHRvbj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwic2VhcmNoLWNvbnN0cm9sc1xcXCI+XFxyXFxuICAgICAgPGJ1dHRvbiB4LWI9XFxcIm1vdmVMZWZ0XFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgIDxidXR0b24geC1iPVxcXCJjdXJyZW50U2VhcmNoSWR4XFxcIiB0YWJpbmRleD1cXFwiMFxcXCI+PC9idXR0b24+XFxyXFxuICAgICAgPGJ1dHRvbiB4LWI9XFxcInJlbW92ZVNlYXJjaFxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiB0aXRsZT1cXFwiUmVtb3ZlIGN1cnJlbnQgc2VhcmNoXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICA8YnV0dG9uIHgtYj1cXFwibW92ZVJpZ2h0XFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPjwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcbiAgPGRpdiB4LWI9XFxcInJlc3VsdHNcXFwiID5cXHJcXG4gICAgPHNwYW4geC1iPVxcXCJmb3VuZFJlc3VsdHNcXFwiPjwvc3Bhbj5cXHJcXG4gICAgPGRpdiB4LWI9XFxcImNvbnRyb2xzXFxcIiBjbGFzcz1cXFwiaGlkZGVuXFxcIj5cXHJcXG4gICAgICA8YnV0dG9uIHgtYj1cXFwiYmxpbmtcXFwiIHRpdGxlPVxcXCJHZXQgZmluZGluZ3MgdG8gYmxpbmtcXFwiPkJsaW5rPC9idXR0b24+XFxyXFxuICAgICAgPGJ1dHRvbiB4LWI9XFxcIm1vdmVVcFxcXCI+PC9idXR0b24+XFxyXFxuICAgICAgPGJ1dHRvbiB4LWI9XFxcIm1vdmVEb3duXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICA8c3BhbiB4LWI9XFxcInNob3duUmVzdWx0TnVtYmVyXFxcIj48L3NwYW4+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgKHZhcnMpID0+ICh7XHJcblxyXG4gICcnOiB7XHJcbiAgICBmb250U2l6ZTogMTUsXHJcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcclxuICAgIHdpZHRoOiB2YXJzLkFQUF9XSURUSCxcclxuICAgIG1hcmdpblRvcDogMTgsXHJcbiAgfSxcclxuXHJcbiAgJ2J1dHRvbic6IHtcclxuICAgIGJhY2tncm91bmQ6ICdub25lJyxcclxuICAgIGZvbnRTaXplOiAxNSxcclxuICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZScsXHJcbiAgICBib3JkZXI6ICcycHggc29saWQgYmxhY2snLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICB2ZXJ0aWNhbEFsaWduOiAndG9wLCdcclxuICB9LFxyXG5cclxuICAnYnV0dG9uOmhvdmVyJzoge1xyXG4gICAgY29sb3I6ICdEYXJrR3JlZW4nLFxyXG4gICAgYm9yZGVyQ29sb3I6ICdMaW1lR3JlZW4nXHJcbiAgfSxcclxuXHJcbiAgJ2J1dHRvbjpmb2N1cyc6IHtcclxuICAgIG91dGxpbmU6ICdub25lJyxcclxuICB9LFxyXG5cclxuICAnYnV0dG9uOmFjdGl2ZSc6IHtcclxuICAgIG91dGxpbmU6ICcxcHggc29saWQgTGltZUdyZWVuJyxcclxuICB9LFxyXG5cclxuICAnLnVwcGVyQnV0dG9ucyc6IHtcclxuICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgbWFyZ2luVG9wOiA1LFxyXG4gIH0sXHJcblxyXG4gIHNlYXJjaFN0cmluZ3M6IHtcclxuICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgbWFyZ2luOiAwLFxyXG4gICAgcGFkZGluZzogMCxcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgd2lkdGg6IHZhcnMuTUFYX0lOUFVUX1dJRFRILFxyXG4gIH0sXHJcblxyXG4gICcuc2VhcmNoU3RyaW5nOmZpcnN0LWNoaWxkJzoge1xyXG4gICAgbWFyZ2luTGVmdDogMCxcclxuICB9LFxyXG5cclxuICBzZWFyY2hCdXR0b246IHtcclxuICAgIHdpZHRoOiA0NSxcclxuICB9LFxyXG5cclxuICBjYXNlQnV0dG9uOiB7XHJcbiAgICB3aWR0aDogMjAsXHJcbiAgICBtYXJnaW5MZWZ0OiAyLFxyXG4gICAgcGFkZGluZ0xlZnQ6IDAsXHJcbiAgICBwYWRkaW5nUmlnaHQ6IDEsXHJcbiAgfSxcclxuXHJcbiAgJy5zZWFyY2gtY29uc3Ryb2xzJzoge1xyXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICB9LFxyXG5cclxuICBjdXJyZW50U2VhcmNoSWR4OiB7XHJcbiAgICB3aWR0aDogMjAsXHJcbiAgICBoZWlnaHQ6IDIyLFxyXG4gICAgcGFkZGluZ0xlZnQ6IDEsXHJcbiAgICBwYWRkaW5nUmlnaHQ6IDEsXHJcbiAgfSxcclxuXHJcbiAgcmVtb3ZlU2VhcmNoOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICB3aWR0aDogMTQsXHJcbiAgICBoZWlnaHQ6IDE0LFxyXG4gICAgdG9wOiAtMTYsXHJcbiAgICByaWdodDogLTUsXHJcbiAgfSxcclxuXHJcbiAgJ3JlbW92ZVNlYXJjaDo6YmVmb3JlLCByZW1vdmVTZWFyY2g6OmFmdGVyJzoge1xyXG4gICAgY29udGVudDogXCInJ1wiLFxyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6IDIsXHJcbiAgICB0b3A6IDQsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICB9LFxyXG5cclxuICAncmVtb3ZlU2VhcmNoOmhvdmVyJzoge1xyXG4gICAgYm9yZGVyQ29sb3I6ICdPcmFuZ2VSZWQnLFxyXG4gIH0sXHJcblxyXG4gICdyZW1vdmVTZWFyY2g6aG92ZXI6OmJlZm9yZSwgcmVtb3ZlU2VhcmNoOmhvdmVyOjphZnRlcic6IHtcclxuICAgIGJhY2tncm91bmQ6ICdEYXJrUmVkJ1xyXG4gIH0sXHJcblxyXG4gICdyZW1vdmVTZWFyY2g6OmJlZm9yZSc6IHtcclxuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSg0NWRlZyknLFxyXG4gIH0sXHJcblxyXG4gICdyZW1vdmVTZWFyY2g6OmFmdGVyJzoge1xyXG4gICAgdHJhbnNmb3JtOiAncm90YXRlKC00NWRlZyknLFxyXG4gIH0sXHJcblxyXG4gICdjdXJyZW50U2VhcmNoSWR4OmZvY3VzJzoge1xyXG4gICAgY29sb3I6ICdEYXJrR3JlZW4nLFxyXG4gICAgYm9yZGVyQ29sb3I6ICdMaW1lR3JlZW4nLFxyXG4gICAgb3V0bGluZTogJzFweCBzb2xpZCBMaW1lR3JlZW4nLFxyXG4gICAgYW5pbWF0aW9uOiAnb3V0bGluZV9ibGlua2VyIDEuM3MgbGluZWFyIGluZmluaXRlJ1xyXG4gIH0sXHJcblxyXG4gICcuaGlkZGVuJzoge1xyXG4gICAgZGlzcGxheTogJ25vbmUnXHJcbiAgfSxcclxuXHJcbiAgcmVzdWx0czoge1xyXG4gICAgcGFkZGluZ1RvcDogMyxcclxuICAgIHBhZGRpbmdCb3R0b206IDUsXHJcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gIH0sXHJcblxyXG4gIGZvdW5kUmVzdWx0czoge1xyXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICBwYWRkaW5nVG9wOiA5LFxyXG4gICAgcGFkZGluZ1JpZ2h0OiAxMixcclxuICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxyXG4gIH0sXHJcblxyXG4gIHNob3duUmVzdWx0TnVtYmVyOiB7XHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgIHBhZGRpbmdUb3A6IDksXHJcbiAgICBwYWRkaW5nUmlnaHQ6IDMsXHJcbiAgICBwYWRkaW5nTGVmdDogNSxcclxuICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxyXG4gIH0sXHJcblxyXG4gICdmb3VuZFJlc3VsdHMsIGNvbnRyb2xzJzoge1xyXG4gICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgfSxcclxuXHJcbiAgJ2JsaW5rJzoge1xyXG4gICAgaGVpZ2h0OiAyMyxcclxuICAgIHZlcnRpY2FsQWxpZ246ICdib3R0b20nLFxyXG4gICAgbWFyZ2luUmlnaHQ6IDUsXHJcbiAgfSxcclxuXHJcbiAgJ21vdmVVcCwgbW92ZURvd24nOiB7XHJcbiAgICB3aWR0aDogMzIsXHJcbiAgICBoZWlnaHQ6IDIzLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgfSxcclxuXHJcbiAgJ21vdmVVcDo6YmVmb3JlLCBtb3ZlVXA6OmFmdGVyLCBtb3ZlRG93bjo6YmVmb3JlLCBtb3ZlRG93bjo6YWZ0ZXInOiB7XHJcbiAgICBjb250ZW50OiBcIicnXCIsXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxyXG4gICAgd2lkdGg6IDEzLFxyXG4gICAgaGVpZ2h0OiAzLFxyXG4gICAgdG9wOiA4XHJcbiAgfSxcclxuXHJcbiAgJ21vdmVVcDpob3Zlcjo6YmVmb3JlLCBtb3ZlVXA6aG92ZXI6OmFmdGVyLCBtb3ZlRG93bjpob3Zlcjo6YmVmb3JlLCBtb3ZlRG93bjpob3Zlcjo6YWZ0ZXInOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAnRGFya0dyZWVuJ1xyXG4gIH0sXHJcblxyXG4gICdtb3ZlVXA6OmJlZm9yZSwgbW92ZURvd246OmJlZm9yZSc6IHtcclxuICAgIGxlZnQ6IDRcclxuICB9LFxyXG5cclxuICAnbW92ZVVwOjphZnRlciwgbW92ZURvd246OmFmdGVyJzoge1xyXG4gICAgcmlnaHQ6IDRcclxuICB9LFxyXG5cclxuICAnbW92ZURvd246OmJlZm9yZScgOiB7XHJcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoNDVkZWcpJ1xyXG4gIH0sXHJcblxyXG4gICdtb3ZlRG93bjo6YWZ0ZXInIDoge1xyXG4gICAgdHJhbnNmb3JtOiAncm90YXRlKC00NWRlZyknXHJcbiAgfSxcclxuXHJcbiAgJ21vdmVVcDo6YmVmb3JlJyA6IHtcclxuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgtNDVkZWcpJ1xyXG4gIH0sXHJcblxyXG4gICdtb3ZlVXA6OmFmdGVyJyA6IHtcclxuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSg0NWRlZyknXHJcbiAgfSxcclxuXHJcbiAgJ21vdmVMZWZ0OmhvdmVyJzoge1xyXG4gICAgYm9yZGVyVG9wQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICBib3JkZXJCb3R0b21Db2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICB9LFxyXG5cclxuICAnbW92ZVJpZ2h0OmhvdmVyJzoge1xyXG4gICAgYm9yZGVyVG9wQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICBib3JkZXJCb3R0b21Db2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICB9LFxyXG5cclxuICBtb3ZlTGVmdDoge1xyXG4gICAgcGFkZGluZzogMCxcclxuICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxyXG4gICAgbWFyZ2luVG9wOiA0LFxyXG4gICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICBib3JkZXJUb3A6ICc3cHggc29saWQgdHJhbnNwYXJlbnQnLFxyXG4gICAgYm9yZGVyUmlnaHQ6ICc3cHggc29saWQgYmxhY2snLFxyXG4gICAgYm9yZGVyQm90dG9tOiAnN3B4IHNvbGlkIHRyYW5zcGFyZW50JyxcclxuICB9LFxyXG5cclxuICBtb3ZlUmlnaHQ6IHtcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcclxuICAgIG1hcmdpblRvcDogNCxcclxuICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgYm9yZGVyVG9wOiAnN3B4IHNvbGlkIHRyYW5zcGFyZW50JyxcclxuICAgIGJvcmRlckxlZnQ6ICc3cHggc29saWQgYmxhY2snLFxyXG4gICAgYm9yZGVyQm90dG9tOiAnN3B4IHNvbGlkIHRyYW5zcGFyZW50JyxcclxuICB9LFxyXG5cclxufSk7XHJcbiIsImltcG9ydCBDb3VsaSBmcm9tICdjb3VsaSc7XHJcblxyXG5pbXBvcnQgbWFya3VwIGZyb20gJy4vbWFya3VwLmh0bWwnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IEFDVElWRV9TRUFSQ0hfSU5QVVRfTEVOR1RIID0gMTUwO1xyXG5jb25zdCBNQVhfSU5QVVRfV0lEVEggPSAyNTU7XHJcbmNvbnN0IE1JTl9JTlBVVF9XSURUSCA9IDExMDtcclxuY29uc3QgU1BBQ0VfQkVUV0VFTl9JTlBVVFMgPSAzNDtcclxuY29uc3QgTEVUVEVSX1dJRFRIID0gMTE7XHJcbmNvbnN0IFVORk9DVVNFRF9JTlBVVF9QQURESU5HID0gMTQ7XHJcbmNvbnN0IEVOVEVSX0tFWSA9IDEzO1xyXG5jb25zdCBCQUNLU1BBQ0VfS0VZID0gODtcclxuY29uc3QgQUREX1NJR05fUEFERElORyA9IDEyO1xyXG5cclxuQ291bGkuZGVmaW5lKCdzZWFyY2gtc3RyaW5nJywgbWFya3VwLCB7XHJcblxyXG4gIGZvY3VzOiB7fSxcclxuXHJcbiAgc3RyaW5nOiB7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAga2V5dXA6IGZ1bmN0aW9uIGtleXVwIChlLCBlbCwgY2ksIGkpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IHBhcmVudFNjb3BlID0gY2kudXAoMik7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoU3RyaW5ncyA9IHBhcmVudFNjb3BlLmdldCgnc2VhcmNoU3RyaW5ncycpO1xyXG5cclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBFTlRFUl9LRVkgJiYgY2kuZ2V0KCdzdHJpbmcnKSkge1xyXG4gICAgICAgICAgY2kuc2V0KHsgZm9jdXM6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgaWYgKGkgKyAxID09PSBzZWFyY2hTdHJpbmdzLmxlbmd0aCgpKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaFN0cmluZ3MucHVzaChbeyBzdHJpbmc6ICcnLCBmb2N1czogdHJ1ZSwgZGlzdGFuY2U6IDEgfV0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VhcmNoU3RyaW5ncy5nZXQoaSArIDEpLnNldCh7IGZvY3VzOiB0cnVlIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcGFyZW50U2NvcGUuc2V0KHsgbGFzdEZvY3VzZWQ6IGkgKyAxIH0pXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBCQUNLU1BBQ0VfS0VZICYmICFjaS5nZXQoJ3N0cmluZycpLmxlbmd0aCAmJiBzZWFyY2hTdHJpbmdzLmxlbmd0aCgpID4gMSkge1xyXG4gICAgICAgICAgY29uc3QgcHJldmlvdXNTdHJpbmcgPSBzZWFyY2hTdHJpbmdzLmdldChpIC0gMSk7XHJcbiAgICAgICAgICBwcmV2aW91c1N0cmluZy5zZXQoeyBmb2N1czogdHJ1ZSB9KTtcclxuICAgICAgICAgIHBhcmVudFNjb3BlLnNldCh7IGxhc3RGb2N1c2VkOiBpIC0gMSB9KVxyXG4gICAgICAgICAgc2VhcmNoU3RyaW5ncy5yZW1vdmUoaSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaS5zZXQoeyBzdHJpbmc6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICAgICAgfSxcclxuXHJcbiAgICAgIGNsaWNrOiBmdW5jdGlvbiBjbGljayAoZSwgZWwsIGNpLCBpKSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50U2NvcGUgPSBjaS51cCgyKTtcclxuICAgICAgICBjb25zdCBzZWFyY2hTdHJpbmdzID0gcGFyZW50U2NvcGUuZ2V0KCdzZWFyY2hTdHJpbmdzJyk7XHJcbiAgICAgICAgY29uc3QgbGFzdEZvY3VzZWRJbmRleCA9IHBhcmVudFNjb3BlLmdldCgnbGFzdEZvY3VzZWQnKTtcclxuICAgICAgICBjb25zdCBwcmV2aW91c0ZvY3VzZWQgPSBzZWFyY2hTdHJpbmdzLmdldCggbGFzdEZvY3VzZWRJbmRleCApO1xyXG5cclxuICAgICAgICBpZiAoIXByZXZpb3VzRm9jdXNlZC5nZXQoJ3N0cmluZycpLmxlbmd0aCAmJiBsYXN0Rm9jdXNlZEluZGV4ICYmIGkgIT09IGxhc3RGb2N1c2VkSW5kZXggJiYgKGxhc3RGb2N1c2VkSW5kZXggKyAxKSA9PT0gc2VhcmNoU3RyaW5ncy5sZW5ndGgoKSkge1xyXG4gICAgICAgICAgc2VhcmNoU3RyaW5ncy5yZW1vdmUobGFzdEZvY3VzZWRJbmRleCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHByZXZpb3VzRm9jdXNlZC5zZXQoeyBmb2N1czogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwYXJlbnRTY29wZS5zZXQoeyBsYXN0Rm9jdXNlZDogaSB9KTtcclxuICAgICAgICBjaS5zZXQoeyBmb2N1czogdHJ1ZSB9KTtcclxuICAgICAgfSxcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHN0eWxlOiAoJCwgY2kpID0+IHtcclxuICAgICAgbGV0IHdpZHRoO1xyXG5cclxuICAgICAgaWYgKCEkLmZvY3VzKSB7XHJcbiAgICAgICAgd2lkdGggPSBjaS5nZXQoJ3N0cmluZycpLmxlbmd0aCAqIExFVFRFUl9XSURUSCArIFVORk9DVVNFRF9JTlBVVF9QQURESU5HXHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHVuZm9jdXNlZElucHV0cyA9IGNpLnVwKCkuZmlsdGVyKChpbnB1dCkgPT4gIWlucHV0LmZvY3VzKTtcclxuICAgICAgICB3aWR0aCA9IHVuZm9jdXNlZElucHV0cy5yZWR1Y2UoKGZvY3VzZWRJbnB1dExlbmd0aCwgaW5wdXQpID0+IHtcclxuICAgICAgICAgIHJldHVybiBmb2N1c2VkSW5wdXRMZW5ndGggLSBpbnB1dC5zdHJpbmcubGVuZ3RoICogTEVUVEVSX1dJRFRIIC0gVU5GT0NVU0VEX0lOUFVUX1BBRERJTkcgLSBTUEFDRV9CRVRXRUVOX0lOUFVUUztcclxuICAgICAgICB9LCBNQVhfSU5QVVRfV0lEVEgpO1xyXG5cclxuICAgICAgICBpZiAod2lkdGggPCBNSU5fSU5QVVRfV0lEVEgpIHtcclxuICAgICAgICAgIHdpZHRoID0gTUFYX0lOUFVUX1dJRFRIO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2lkdGggPSB3aWR0aCAtIEFERF9TSUdOX1BBRERJTkc7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4geyB3aWR0aCB9O1xyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBkaXN0YW5jZTogW1xyXG4gICAgKGl0ZW0pID0+ICh7XHJcbiAgICAgIGhpZGRlbjogaXRlbS5kaXN0YW5jZSA9PT0gbnVsbCxcclxuICAgIH0pLFxyXG4gICAgW3tcclxuICAgICAga2V5dXA6IChlLCBlbCwgY2kpID0+IGNpLnNldCh7IGRpc3RhbmNlOiB7IGZvcmNlOiB0b051bWJlck9yWmVybyhlLnRhcmdldC52YWx1ZSkgfX0pXHJcbiAgICB9XVxyXG4gIF0sXHJcblxyXG4gIHJlbW92ZToge1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIGNsaWNrOiAoZSwgZWwsIGNpLCBpKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50U2NvcGUgPSBjaS51cCgyKTtcclxuICAgICAgICBjb25zdCBzZWFyY2hTdHJpbmdzID0gY2kudXAoKTtcclxuICAgICAgICBjb25zdCBwcmV2aW91c1N0cmluZyA9IHNlYXJjaFN0cmluZ3MuZ2V0KGkgLSAxKTtcclxuICAgICAgICBwcmV2aW91c1N0cmluZy5zZXQoeyBmb2N1czogdHJ1ZSB9KTtcclxuICAgICAgICBwYXJlbnRTY29wZS5zZXQoeyBsYXN0Rm9jdXNlZDogaSAtIDEgfSlcclxuICAgICAgICBzZWFyY2hTdHJpbmdzLnJlbW92ZShpKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNsYXNzOiAoJCkgPT4gKHsgaGlkZGVuOiAkLmZpcnN0IHx8ICEkLmZvY3VzIH0pLFxyXG4gIH0sXHJcblxyXG4gIGFkZE5ldzoge1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIGNsaWNrOiAoZSwgZWwsIGNpLCBpKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50U2NvcGUgPSBjaS51cCgyKTtcclxuICAgICAgICBjb25zdCBzZWFyY2hTdHJpbmdzID0gcGFyZW50U2NvcGUuZ2V0KCdzZWFyY2hTdHJpbmdzJyk7XHJcbiAgICAgICAgY2kuc2V0KHsgZm9jdXM6IGZhbHNlIH0pO1xyXG4gICAgICAgIHNlYXJjaFN0cmluZ3MuYWRkKGkgKyAxLCBbeyBzdHJpbmc6ICcnLCBmb2N1czogdHJ1ZSwgZGlzdGFuY2U6IDEgfV0pO1xyXG4gICAgICAgIHBhcmVudFNjb3BlLnNldCh7IGxhc3RGb2N1c2VkOiBpICsgMSB9KVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNsYXNzOiAoJCkgPT4gKHsgaGlkZGVuOiAhJC5mb2N1cyB8fCAhJC5zdHJpbmcubGVuZ3RoIH0pLFxyXG4gIH0sXHJcblxyXG4gIGZvY3VzOiB7XHJcbiAgICBob29rczoge1xyXG4gICAgICB1cGRhdGU6IChlbCwgdmFsdWUsIGNpKSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICBjaS5tYXJrdXAoJ3N0cmluZycpLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgJyc6IHtcclxuICAgIGhvb2tzOiB7XHJcbiAgICAgIG1vdW50OiAoZSwgdiwgY2kpID0+IGNpLm1hcmt1cCgnc3RyaW5nJykuZm9jdXMoKSxcclxuICAgIH1cclxuICB9XHJcblxyXG59LCBzdHlsZXMoeyBTUEFDRV9CRVRXRUVOX0lOUFVUUywgQUNUSVZFX1NFQVJDSF9JTlBVVF9MRU5HVEggfSkpO1xyXG5cclxuZnVuY3Rpb24gdG9OdW1iZXJPclplcm8gKHN0cikge1xyXG4gIHJldHVybiArc3RyIHx8IDA7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxsaT5cXHJcXG4gIDxpbnB1dCB4LWI9XFxcInN0cmluZ1xcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcInN0cmluZ1xcXCI+XFxyXFxuICA8aW5wdXQgeC1iPVxcXCJkaXN0YW5jZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImRpc3RhbmNlXFxcIiB0aXRsZT1cXFwiRGlzdGFuY2UgYmV0d2VlbiBzdWJzdHJpbmdzXFxcIj5cXHJcXG4gIDxidXR0b24geC1iPVxcXCJyZW1vdmVcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgdGl0bGU9XFxcIlJlbW92ZSBzdWJzdHJpbmdcXFwiPjwvYnV0dG9uPlxcclxcbiAgPGJ1dHRvbiB4LWI9XFxcImFkZE5ld1xcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiB0aXRsZT1cXFwiQWRkIG5ldyBzdWJzdHJpbmdcXFwiPjwvYnV0dG9uPlxcclxcbjwvbGk+XFxyXFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgKHZhcnMpID0+ICh7XHJcblxyXG4gICcnOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgbWFyZ2luTGVmdDogdmFycy5TUEFDRV9CRVRXRUVOX0lOUFVUUyxcclxuICAgIG1hcmdpblRvcDogNSxcclxuICAgIG1hcmdpbkJvdHRvbTogMTQsXHJcbiAgfSxcclxuXHJcbiAgc3RyaW5nOiB7XHJcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgIGZvbnRTaXplOiAxNSxcclxuICAgIHdpZHRoOiB2YXJzLkFDVElWRV9TRUFSQ0hfSU5QVVRfTEVOR1RILFxyXG4gICAgJy13ZWJraXQtYXBwZWFyYW5jZSc6ICdub25lJyxcclxuICAgIGJvcmRlcldpZHRoOiAwLFxyXG4gICAgYm9yZGVyQm90dG9tOiAnMnB4IHNvbGlkIGJsYWNrJyxcclxuICB9LFxyXG5cclxuICAnc3RyaW5nOmZvY3VzJzoge1xyXG4gICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgYm9yZGVyQ29sb3I6ICdMaW1lR3JlZW4nXHJcbiAgfSxcclxuXHJcbiAgZGlzdGFuY2U6IHtcclxuICAgIHdpZHRoOiB2YXJzLlNQQUNFX0JFVFdFRU5fSU5QVVRTIC0gMTAsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGxlZnQ6IC0zMCxcclxuICAgIHRvcDogLTE3LFxyXG4gICAgJy13ZWJraXQtYXBwZWFyYW5jZSc6ICdub25lJyxcclxuICAgIGJvcmRlcldpZHRoOiAwLFxyXG4gICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyxcclxuICB9LFxyXG5cclxuICAnZGlzdGFuY2U6Zm9jdXMnOiB7XHJcbiAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICBib3JkZXJDb2xvcjogJ0xpbWVHcmVlbidcclxuICB9LFxyXG5cclxuICAnLmhpZGRlbic6IHtcclxuICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gIH0sXHJcblxyXG4gICdhZGROZXcsIHJlbW92ZSc6IHtcclxuICAgIHdpZHRoOiAxMCxcclxuICAgIGhlaWdodDogMTAsXHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBib3JkZXI6ICdub25lJyxcclxuICB9LFxyXG5cclxuICBhZGROZXc6IHtcclxuICAgIHJpZ2h0OiAtMTQsXHJcbiAgICBib3R0b206IDQsXHJcbiAgfSxcclxuXHJcbiAgcmVtb3ZlOiB7XHJcbiAgICBsZWZ0OiAtMTQsXHJcbiAgICBib3R0b206IDQsXHJcbiAgfSxcclxuXHJcbiAgJ2FkZE5ldzo6YmVmb3JlLCBhZGROZXc6OmFmdGVyLCByZW1vdmU6OmJlZm9yZSwgcmVtb3ZlOjphZnRlcic6IHtcclxuICAgIGNvbnRlbnQ6IFwiJydcIixcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJhY2tncm91bmQ6ICdibGFjaycsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuXHJcbiAgJ2FkZE5ldzo6YmVmb3JlLCBhZGROZXc6OmFmdGVyJzoge1xyXG4gICAgYmFja2dyb3VuZDogJ0RhcmtHcmVlbicsXHJcbiAgICBoZWlnaHQ6IDIsXHJcbiAgICB0b3A6IDUsXHJcbiAgfSxcclxuXHJcbiAgJ2FkZE5ldzpob3Zlcjo6YmVmb3JlLCBhZGROZXc6aG92ZXI6OmFmdGVyJzoge1xyXG4gICAgYmFja2dyb3VuZDogJ0xpbWVHcmVlbicsXHJcbiAgfSxcclxuXHJcbiAgJ3JlbW92ZTo6YmVmb3JlLCByZW1vdmU6OmFmdGVyJzoge1xyXG4gICAgYmFja2dyb3VuZDogJ0RhcmtSZWQnLFxyXG4gICAgaGVpZ2h0OiAyLFxyXG4gICAgdG9wOiA1LFxyXG4gIH0sXHJcblxyXG4gICdyZW1vdmU6aG92ZXI6OmJlZm9yZSwgcmVtb3ZlOmhvdmVyOjphZnRlcic6IHtcclxuICAgIGJhY2tncm91bmQ6ICdPcmFuZ2VSZWQnLFxyXG4gIH0sXHJcblxyXG4gICdhZGROZXc6OmJlZm9yZSc6IHtcclxuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSg5MGRlZyknLFxyXG4gIH0sXHJcblxyXG4gICdyZW1vdmU6OmJlZm9yZSc6IHtcclxuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSg0NWRlZyknLFxyXG4gIH0sXHJcblxyXG4gICdyZW1vdmU6OmFmdGVyJzoge1xyXG4gICAgdHJhbnNmb3JtOiAncm90YXRlKC00NWRlZyknLFxyXG4gIH1cclxuXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9