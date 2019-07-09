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

/***/ "../couli/dist/couli.js":
/*!******************************!*\
  !*** ../couli/dist/couli.js ***!
  \******************************/
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
  var removedCount = 0;
  (0, _object.forEach)(indexEquality, function (changeObj, idx) {
    if (changeObj.remove) {
      changeObj.remove = removeListItem(arr, idx - removedCount, binding, accessor);
      removedCount++;
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

/***/ }),

/***/ "./src/actions/find.js":
/*!*****************************!*\
  !*** ./src/actions/find.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_interaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/interaction */ "./src/common/interaction.js");
/* harmony import */ var _fixes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fixes */ "./src/actions/fixes.js");




/* harmony default export */ __webpack_exports__["default"] = (find);

function find (searchStrings, caseSensitive, cb) {
  Object(_fixes__WEBPACK_IMPORTED_MODULE_1__["FIND_API_INPUT_BUG_FIX_BEFORE"])();
  
  Object(_common_interaction__WEBPACK_IMPORTED_MODULE_0__["sendMessage"])('find', {
    string: searchStrings.shift().string,
    caseSensitive,
  }, ({ foundResults }) => {
    
    Object(_fixes__WEBPACK_IMPORTED_MODULE_1__["FIND_API_INPUT_BUG_FIX_AFTER"])();

    const allTextNodes = getAllTextNodes();
    const finalResults = filterRanges(foundResults, searchStrings, caseSensitive, allTextNodes);

    cb(finalResults);
  });
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


/***/ }),

/***/ "./src/actions/fixes.js":
/*!******************************!*\
  !*** ./src/actions/fixes.js ***!
  \******************************/
/*! exports provided: FIND_API_INPUT_BUG_FIX_BEFORE, FIND_API_INPUT_BUG_FIX_AFTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIND_API_INPUT_BUG_FIX_BEFORE", function() { return FIND_API_INPUT_BUG_FIX_BEFORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIND_API_INPUT_BUG_FIX_AFTER", function() { return FIND_API_INPUT_BUG_FIX_AFTER; });
/**********************************************************************

  TEMPORARY FIX FOR FINDING STRINGS THAT ARE ENTERED IN INPUTS

***********************************************************************/

function FIND_API_INPUT_BUG_FIX_BEFORE (cb) {
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

/***/ "./src/actions/highlightings.js":
/*!**************************************!*\
  !*** ./src/actions/highlightings.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/store */ "./src/common/store.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "./src/common/constants.js");
/* harmony import */ var _ui_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/index */ "./src/ui/index.js");
/* harmony import */ var _ui_components_highlighting_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/components/highlighting/styles */ "./src/ui/components/highlighting/styles.js");
/* harmony import */ var _ui_components_scrollbarMark_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/components/scrollbarMark/styles */ "./src/ui/components/scrollbarMark/styles.js");







const HIGHLIGHTINGS_POSITIONS = [];

/* harmony default export */ __webpack_exports__["default"] = ({
  create: createHighlightings,
  remove: removeHighlightings,
  moveTo: jumpTo,
  switchBlinking,
});

function createHighlightings (ranges, data) {
  removeHighlightings(data.searchId);

  const doc = document.documentElement;
  const scrollLeft = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  const scrollTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

  ranges.forEach((range, rangeIdx) => {
    const boundingRects = range.getClientRects();
    const topPosition = scrollTop + boundingRects[0].top;

    const highlightData = {
      els: [],
      top: topPosition,
      left: scrollLeft + boundingRects[0].left
    };

    for (let i = 0; i < boundingRects.length; i++) {
      const rect = boundingRects[i];

      const highlightElement = createHightlightElement(rect, scrollTop, scrollLeft, data);
      document.body.appendChild(highlightElement);

      highlightData.els.push(highlightElement);
    }

    const scrollBarMark = createScrollbarMark(topPosition, data, rangeIdx);
    document.body.appendChild(scrollBarMark);

    HIGHLIGHTINGS_POSITIONS[data.searchId].push(highlightData);
  });
}

function createHightlightElement (rect, scrollTop, scrollLeft, data) {
  const highlight = Object(_ui_index__WEBPACK_IMPORTED_MODULE_2__["createElement"])(
    'span',
    Object(_ui_components_highlighting_styles__WEBPACK_IMPORTED_MODULE_3__["default"])({ scrollTop, scrollLeft, rect, ...data })
  );
  
  highlight.classList.add(_common_constants__WEBPACK_IMPORTED_MODULE_1__["EXTENSION_ID"] + data.searchId);

  return highlight;
}

function createScrollbarMark (topPosition, data, rangeIdx) {
  const scrollBarMark = Object(_ui_index__WEBPACK_IMPORTED_MODULE_2__["createElement"])(
    'span',
    Object(_ui_components_scrollbarMark_styles__WEBPACK_IMPORTED_MODULE_4__["default"])({ topPosition, ...data })
  );

  scrollBarMark.title = data.searchString;
  scrollBarMark.onclick = () => {
    jumpTo(data.searchId, rangeIdx);
    _common_store__WEBPACK_IMPORTED_MODULE_0__["default"].moveThroughSearch({ searchId: data.searchId, highlightPosition: rangeIdx + 1 });
  };
  scrollBarMark.classList.add(_common_constants__WEBPACK_IMPORTED_MODULE_1__["EXTENSION_ID"] + data.searchId);

  return scrollBarMark;
}

function jumpTo (searchId, id) {
  const highlightPosition = HIGHLIGHTINGS_POSITIONS[searchId][id];
  const centerHeight = window.innerHeight / 2;
  const centerWidth = window.innerWidth / 2;
  window.scrollTo(
    highlightPosition.left - centerWidth,
    highlightPosition.top - centerHeight
  );
}

function removeHighlightings (searchId) {
  document.querySelectorAll('.' + _common_constants__WEBPACK_IMPORTED_MODULE_1__["EXTENSION_ID"] + searchId)
    .forEach((el) => el.parentNode.removeChild(el));

  HIGHLIGHTINGS_POSITIONS[searchId] = [];
}

function switchBlinking (searchId, operation) {
  HIGHLIGHTINGS_POSITIONS[searchId]
    .forEach((highlightData) => highlightData.els
      .forEach((el) => el.classList[operation](`${_common_constants__WEBPACK_IMPORTED_MODULE_1__["FIND_HELPER_CLASS"]}${searchId}`)));
}


/***/ }),

/***/ "./src/actions/page.js":
/*!*****************************!*\
  !*** ./src/actions/page.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/store */ "./src/common/store.js");
/* harmony import */ var _common_interaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/interaction */ "./src/common/interaction.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  saveTabId,
  notifyOfClosing,
  popupState,
});

function saveTabId (message) {
  _common_store__WEBPACK_IMPORTED_MODULE_0__["default"].tabId(message.tabId);
}

function popupState (state) {
  _common_store__WEBPACK_IMPORTED_MODULE_0__["default"].setPopupState(state.open);
}

function notifyOfClosing (cb) {
  Object(_common_interaction__WEBPACK_IMPORTED_MODULE_1__["sendMessage"])('closingPopup', { tabId: _common_store__WEBPACK_IMPORTED_MODULE_0__["default"].tabId() }, () => cb());
}


/***/ }),

/***/ "./src/common/constants.js":
/*!*********************************!*\
  !*** ./src/common/constants.js ***!
  \*********************************/
/*! exports provided: EXTENSION_ID, FIND_HELPER_CLASS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTENSION_ID", function() { return EXTENSION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIND_HELPER_CLASS", function() { return FIND_HELPER_CLASS; });
const EXTENSION_ID = 'multi-string-search-extension-' + browser.runtime.id.replace(/[{}@]/g, '');
const FIND_HELPER_CLASS = EXTENSION_ID + '-find-helper';

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


/***/ }),

/***/ "./src/common/store.js":
/*!*****************************!*\
  !*** ./src/common/store.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/page */ "./src/actions/page.js");
/* harmony import */ var _actions_highlightings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/highlightings */ "./src/actions/highlightings.js");
/* harmony import */ var _actions_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/find */ "./src/actions/find.js");




const LISTENERS = [];

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

const store = {
  COLORS,
  getCurrentSearch,
  addListener,
  tabId,
  search,
  moveThroughSearch,
  switchCaseSensitivity,
  switchBlink,
  removeSearch,
  getPopupData,
  setPopupState,
  closePopup,
};

const DEFAULT_SEARCH_STRING = { string: '', first: true, focus: true, distance: null };

const STATE = {
  popupOpen: true,
  tabId: null,
  searches: COLORS.map(initiateSearchOpts),
  searchId: 1,
};

function initiateSearchOpts (v, i) {
  return {
    searchStrings: [ Object.assign({}, DEFAULT_SEARCH_STRING) ],
    foundResults: 0,
    lastFocused: 0,
    searchHappened: false,
    highlightPosition: 0,
    color: COLORS[i],
    searchId: i,
    caseSensitive: false,
  }
}

function getCurrentSearch () {
  return STATE.searches[ STATE.searchId ];
}

function search (searchStrings) {
  const search = getCurrentSearch();
  const { searchId, color, caseSensitive } = search;
  const searchString = searchStrings.map((strObj) => strObj.string).join(' ');

  return new Promise ((res) => {

    Object(_actions_find__WEBPACK_IMPORTED_MODULE_2__["default"])(searchStrings.slice(), caseSensitive, (foundResults) => {
      _actions_highlightings__WEBPACK_IMPORTED_MODULE_1__["default"].create(foundResults, { searchId, color, searchString });

      const changeObj = { foundResults: foundResults.length, searchHappened: true, blinkSet: false, searchStrings };
  
      if (foundResults.length) {
        changeObj.highlightPosition = 1;
        _actions_highlightings__WEBPACK_IMPORTED_MODULE_1__["default"].moveTo(searchId, 0);
      }
  
      Object.assign(search, changeObj);
      runListeners();
      res();
    });

  });
}

function moveThroughSearch (opts, withMove) {
  const searchId = adjustNumberToBoundaries(opts.searchId, 0, STATE.searches.length - 1, STATE.searchId);
  STATE.searchId = searchId;
  const search = getCurrentSearch();

  const highlightPosition = adjustNumberToBoundaries(opts.highlightPosition, 1, search.foundResults, search.highlightPosition);
  search.highlightPosition = highlightPosition;

  if (withMove && highlightPosition) {
    _actions_highlightings__WEBPACK_IMPORTED_MODULE_1__["default"].moveTo(searchId, highlightPosition - 1);
  }

  return runListeners();
}

function adjustNumberToBoundaries (num, min, max, def) {
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

function removeSearch (all, searchId) {
  const idx = typeof searchId === 'undefined' ? STATE.searchId : searchId;

  all ? removeAllSearches() : removeSearchByIdx(idx);
  return runListeners();
}

function removeSearchByIdx (idx) {
  STATE.searches[idx] = initiateSearchOpts(COLORS[idx], idx);
  _actions_highlightings__WEBPACK_IMPORTED_MODULE_1__["default"].remove(idx);
}

function removeAllSearches () {
  COLORS.forEach((c, idx) => removeSearchByIdx(idx));
}

function switchBlink () {
  const search = getCurrentSearch();

  if (!search.foundResults) {
    return;
  }

  const operation = search.blinkSet ? 'remove' : 'add';

  _actions_highlightings__WEBPACK_IMPORTED_MODULE_1__["default"].switchBlinking(search.searchId, operation);

  search.blinkSet = !search.blinkSet;
  return runListeners();
}

function switchCaseSensitivity () {
  const caseSensitive = STATE.searches[ STATE.searchId ].caseSensitive;
  STATE.searches[ STATE.searchId ].caseSensitive = !caseSensitive;
  return runListeners();
}

function addListener (fn) {
  LISTENERS.push(fn);
}

function runListeners () {
  LISTENERS.forEach((fn) => fn(store));
  return Promise.resolve();
}

function tabId (id) {
  if (id) {
    return STATE.tabId = id
  }

  return STATE.tabId;
}

function getPopupData () {
  return {
    open: STATE.popupOpen,
    searches: STATE.searches.filter((el) => el.searchHappened).map((el) => ({
      color: el.color,
      string: el.searchStrings.map((string) => string.string).join(' '),
      idx: el.searchId,
    }))
  }
}

function closePopup () {
  _actions_page__WEBPACK_IMPORTED_MODULE_0__["default"].notifyOfClosing(() => setPopupState(false));
}

function setPopupState (open) {
  STATE.popupOpen = open;
  return runListeners();
}

/* harmony default export */ __webpack_exports__["default"] = (store);


/***/ }),

/***/ "./src/common/styles.js":
/*!******************************!*\
  !*** ./src/common/styles.js ***!
  \******************************/
/*! exports provided: stylesString, appendStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stylesString", function() { return stylesString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendStyles", function() { return appendStyles; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/common/constants.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/common/store.js");



let stylesString = _store__WEBPACK_IMPORTED_MODULE_1__["default"].COLORS.map((color, idx) => `
  @keyframes ${_constants__WEBPACK_IMPORTED_MODULE_0__["FIND_HELPER_CLASS"]}${idx} {
    0% {
      outline-color: rgba(${color}, 1);
    }

    100% {
      outline-color: rgba(${color}, 0);
    }
  }

  .${_constants__WEBPACK_IMPORTED_MODULE_0__["FIND_HELPER_CLASS"]}${idx} {
    animation-name: '${_constants__WEBPACK_IMPORTED_MODULE_0__["FIND_HELPER_CLASS"]}${idx}';
    outline-style: solid;
    animation-duration: 1.3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`).join('');

stylesString += `
  @keyframes ${_constants__WEBPACK_IMPORTED_MODULE_0__["EXTENSION_ID"]}_outline_blinker {
    50% {
      outline-color: rgba(0, 0, 0, 0);
    }
  }
`;

function appendStyles (styleStr) {
  const styleEl = document.createElement('style');
  styleEl.appendChild( document.createTextNode(styleStr) );
  document.head.appendChild(styleEl);
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
/* harmony import */ var couli__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! couli */ "../couli/dist/couli.js");
/* harmony import */ var couli__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(couli__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/store */ "./src/common/store.js");
/* harmony import */ var _ui_components_search_string_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/components/search-string/index */ "./src/ui/components/search-string/index.js");
/* harmony import */ var _ui_components_controls_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/components/controls/index */ "./src/ui/components/controls/index.js");
/* harmony import */ var _ui_components_popup_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/components/popup/index */ "./src/ui/components/popup/index.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/constants */ "./src/common/constants.js");
/* harmony import */ var _common_interaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/interaction */ "./src/common/interaction.js");
/* harmony import */ var _common_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/styles */ "./src/common/styles.js");
/* harmony import */ var _actions_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./actions/page */ "./src/actions/page.js");













Object(_common_styles__WEBPACK_IMPORTED_MODULE_7__["appendStyles"])(_common_styles__WEBPACK_IMPORTED_MODULE_7__["stylesString"]);
initializePopup();

window.onunload = () => { Object(_common_interaction__WEBPACK_IMPORTED_MODULE_6__["sendMessage"])('closingTab', { tabId: _common_store__WEBPACK_IMPORTED_MODULE_1__["default"].tabId() }) }

browser.runtime.onMessage.addListener((message) => Object(_common_interaction__WEBPACK_IMPORTED_MODULE_6__["onMessage"])(message, _actions_page__WEBPACK_IMPORTED_MODULE_8__["default"]));

function initializePopup () {
  const popupContainer = document.createElement('div');
  popupContainer.style.zIndex = 2147483647;
  popupContainer.id = _common_constants__WEBPACK_IMPORTED_MODULE_5__["EXTENSION_ID"];

  const popup = document.createElement('popup');
  popupContainer.appendChild(popup);
  document.body.appendChild(popupContainer);

  couli__WEBPACK_IMPORTED_MODULE_0___default.a.apply('#' + _common_constants__WEBPACK_IMPORTED_MODULE_5__["EXTENSION_ID"]);

  return window.EXTENSION_POPUP_INTERFACE;
}


/***/ }),

/***/ "./src/ui/components/controls/index.js":
/*!*********************************************!*\
  !*** ./src/ui/components/controls/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var couli__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! couli */ "../couli/dist/couli.js");
/* harmony import */ var couli__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(couli__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/store */ "./src/common/store.js");
/* harmony import */ var _markup_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./markup.html */ "./src/ui/components/controls/markup.html");
/* harmony import */ var _markup_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_markup_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/ui/components/controls/styles.js");






const APP_WIDTH = 390;
const MAX_INPUT_WIDTH = 245;
const KEYBOARD_KEYS = Array(10).fill(48).reduce((a , v, i) => (a[i] = 48 + i) && a , {})
Object.assign(KEYBOARD_KEYS, {
  ESC: 27,
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

couli__WEBPACK_IMPORTED_MODULE_0___default.a.define('controls', _markup_html__WEBPACK_IMPORTED_MODULE_2___default.a, {

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

  searchButton: [{ click: (e, el, ci) => _common_store__WEBPACK_IMPORTED_MODULE_1__["default"].search( ci.get('searchStrings').value() ).then(() => ci.markup('searchId').focus()) }],

  searchId: {
    events: {
      click: () => _common_store__WEBPACK_IMPORTED_MODULE_1__["default"].switchBlink(),

      contextmenu: (e, el, ci) => {
        e.preventDefault();
        _common_store__WEBPACK_IMPORTED_MODULE_1__["default"].removeSearch(e.shiftKey).then(() => ci.markup('searchId').focus());
      },

      keyup: (e, el, ci) => {
        if (Object.values(KEYBOARD_KEYS).indexOf(e.keyCode) < 0) {
          return;
        }

        switch (e.keyCode) {
          case KEYBOARD_KEYS.UP:
          case KEYBOARD_KEYS.s:
            _common_store__WEBPACK_IMPORTED_MODULE_1__["default"].moveThroughSearch({ highlightPosition: ci.get('highlightPosition') - 1 }, true);
            return;

          case KEYBOARD_KEYS.DOWN:
          case KEYBOARD_KEYS.d:
            _common_store__WEBPACK_IMPORTED_MODULE_1__["default"].moveThroughSearch({ highlightPosition: ci.get('highlightPosition') + 1 }, true);
            return;

          case KEYBOARD_KEYS.ENTER:
          case KEYBOARD_KEYS.e:
            _common_store__WEBPACK_IMPORTED_MODULE_1__["default"].search( ci.get('searchStrings').value() ).then(() => ci.markup('searchId').focus());
            return;

          case KEYBOARD_KEYS.DELETE:
          case KEYBOARD_KEYS.r:
            _common_store__WEBPACK_IMPORTED_MODULE_1__["default"].removeSearch(e.shiftKey).then(() => ci.markup('searchId').focus());
            return;

          case KEYBOARD_KEYS.w:
            document.querySelectorAll('.string')[ ci.get('lastFocused') ].focus();
            return;

          case KEYBOARD_KEYS.LEFT:
          case KEYBOARD_KEYS.a:
            _common_store__WEBPACK_IMPORTED_MODULE_1__["default"].moveThroughSearch({ searchId: ci.get('searchId') - 1 });
            return;

          case KEYBOARD_KEYS.RIGHT:
          case KEYBOARD_KEYS.f:
            _common_store__WEBPACK_IMPORTED_MODULE_1__["default"].moveThroughSearch({ searchId: ci.get('searchId') + 1 });
            return;

          case KEYBOARD_KEYS.c:
            _common_store__WEBPACK_IMPORTED_MODULE_1__["default"].switchCaseSensitivity();
            return;

          case KEYBOARD_KEYS.b:
            _common_store__WEBPACK_IMPORTED_MODULE_1__["default"].switchBlink()
            return;

          case KEYBOARD_KEYS.ESC:
            _common_store__WEBPACK_IMPORTED_MODULE_1__["default"].closePopup();
            return;

          default:
            _common_store__WEBPACK_IMPORTED_MODULE_1__["default"].moveThroughSearch({ searchId: e.keyCode - 48 });
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

  moveLeft: [{ click: (e, el, ci) => _common_store__WEBPACK_IMPORTED_MODULE_1__["default"].moveThroughSearch({ searchId: ci.get('searchId') - 1 }) }],

  moveRight: [{ click: (e, el, ci) => _common_store__WEBPACK_IMPORTED_MODULE_1__["default"].moveThroughSearch({ searchId: ci.get('searchId') + 1 }) }],

  removeSearch: {
    events: {
      click: (e, el, ci) => _common_store__WEBPACK_IMPORTED_MODULE_1__["default"].removeSearch(e.shiftKey).then(() => ci.markup('searchId').focus())
    },
    class: ($) => ({
      hidden: $.searchStrings.length === 1 && !$.searchStrings[0].string.length && !$.searchHappened
    })
  },

  caseButton: {
    events: {
      click: () => _common_store__WEBPACK_IMPORTED_MODULE_1__["default"].switchCaseSensitivity(),
    },
    style: ($) => ({
      backgroundColor: $.caseSensitive ? 'PaleGreen' : 'white',
    })
  },

  results: { class: ($) => ({ hidden: !$.searchHappened }) },

  controls: ($) => ({ hidden: !$.foundResults }),

  moveUp: [{ click: (e, el, ci) => _common_store__WEBPACK_IMPORTED_MODULE_1__["default"].moveThroughSearch({ highlightPosition: ci.get('highlightPosition') - 1 }, true) }],

  moveDown: [{ click: (e, el, ci) => _common_store__WEBPACK_IMPORTED_MODULE_1__["default"].moveThroughSearch({ highlightPosition: ci.get('highlightPosition') + 1 }, true) }],

  blink: {
    events: { click: () => _common_store__WEBPACK_IMPORTED_MODULE_1__["default"].switchBlink() },
    style: ($) => ({
      backgroundColor: $.blinkSet ? `rgba(${ $.color }, 0.35)` : 'white',
    })
  },

  '': {
    hooks: {
      mount: (el, data, ci) => {
        ci.set( _common_store__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentSearch() );
        _common_store__WEBPACK_IMPORTED_MODULE_1__["default"].addListener((store) => ci.set( store.getCurrentSearch() ));
        setTimeout(() => {
          ci.markup('searchId').focus();
        }, 0);
      }
    }
  }
}, Object(_styles__WEBPACK_IMPORTED_MODULE_3__["default"])({ APP_WIDTH, MAX_INPUT_WIDTH }));


/***/ }),

/***/ "./src/ui/components/controls/markup.html":
/*!************************************************!*\
  !*** ./src/ui/components/controls/markup.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <ul x-lb=\"searchStrings\">\r\n    <search-string>\r\n  </ul>\r\n  <div class=\"upperButtons\">\r\n    <button x-b=\"searchButton\">Find</button>\r\n    <button x-b=\"caseButton\" title=\"Case-sensitive on/off\">C</button>\r\n    <div class=\"search-constrols\">\r\n      <button x-b=\"moveLeft\" tabindex=\"-1\"></button>\r\n      <button x-b=\"searchId\" tabindex=\"0\"></button>\r\n      <button x-b=\"removeSearch\" tabindex=\"-1\" title=\"Remove current search\"></button>\r\n      <button x-b=\"moveRight\" tabindex=\"-1\"></button>\r\n    </div>\r\n  </div>\r\n\r\n  <div x-b=\"results\" >\r\n    <span x-b=\"foundResults\"></span>\r\n    <div x-b=\"controls\" class=\"hidden\">\r\n      <button x-b=\"blink\" title=\"Get findings to blink\">Blink</button>\r\n      <button x-b=\"moveUp\"></button>\r\n      <button x-b=\"moveDown\"></button>\r\n      <span x-b=\"highlightPosition\"></span>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ "./src/ui/components/controls/styles.js":
/*!**********************************************!*\
  !*** ./src/ui/components/controls/styles.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/constants */ "./src/common/constants.js");


/* harmony default export */ __webpack_exports__["default"] = ((vars) => ({

  '': {
    fontSize: 15,
    boxSizing: 'border-box',
    fontFamily: 'sans-serif',
    width: vars.APP_WIDTH,
    marginTop: 18,
    marginLeft: 10,
    marginRight: 10,
    color: 'black',
    lineHeight: 'normal',
  },

  'button': {
    background: 'none',
    fontSize: 15,
    '-webkit-appearance': 'none',
    border: '2px solid black',
    cursor: 'pointer',
    color: 'black',
    fontWeight: '400',
    fontFamily: 'sans-serif',
    padding: '0 8px',
    lineHeight: 'normal',
    wordWrap: 'normal',
    borderRadius: 0,
    height: 24,
  },

  'input': {
    fontFamily: 'sans-serif',
    lineHeight: 'normal',
    padding: '1px 1px',
    fontSize: 15,
    height: 24,
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
    width: 50,
  },

  caseButton: {
    width: 22,
    marginLeft: 2,
    paddingLeft: 0,
    paddingRight: 1,
  },

  '.search-constrols': {
    display: 'inline-block',
    position: 'relative',
  },

  searchId: {
    width: 22,
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

  'searchId:focus': {
    color: 'DarkGreen',
    borderColor: 'LimeGreen',
    outline: '1px solid LimeGreen',
    animation: `'${_common_constants__WEBPACK_IMPORTED_MODULE_0__["EXTENSION_ID"]}_outline_blinker' 1.3s linear infinite`
  },

  '.hidden': {
    display: 'none'
  },

  results: {
    paddingTop: 3,
    paddingBottom: 9,
    overflow: 'auto',
  },

  foundResults: {
    display: 'inline-block',
    paddingTop: 9,
    paddingRight: 12,
    verticalAlign: 'middle',
  },

  highlightPosition: {
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
    marginTop: 5,
    height: 14,
    border: 'none',
    borderTop: '7px solid transparent',
    borderRight: '7px solid black',
    borderBottom: '7px solid transparent',
  },

  moveRight: {
    padding: 0,
    verticalAlign: 'top',
    marginTop: 5,
    height: 14,
    border: 'none',
    borderTop: '7px solid transparent',
    borderLeft: '7px solid black',
    borderBottom: '7px solid transparent',
  },

}));


/***/ }),

/***/ "./src/ui/components/highlighting/styles.js":
/*!**************************************************!*\
  !*** ./src/ui/components/highlighting/styles.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((vars) => ({
  position: 'absolute',
  height: vars.rect.height + 'px',
  width: vars.rect.width + 'px',
  top: vars.scrollTop + vars.rect.y + 'px',
  left: vars.scrollLeft + vars.rect.x + 'px',
  'z-index': 2147483645,
  'pointer-events': 'none',
  background: 'rgba(' +  vars.color + ', 0.25)',
  'outline-width': '3px',
}));


/***/ }),

/***/ "./src/ui/components/popup/index.js":
/*!******************************************!*\
  !*** ./src/ui/components/popup/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var couli__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! couli */ "../couli/dist/couli.js");
/* harmony import */ var couli__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(couli__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/ui/components/popup/styles.js");
/* harmony import */ var _common_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/store */ "./src/common/store.js");




const INITIAL_POPUP_POSITION = { top: 20, left: 'auto', right: 20 };

couli__WEBPACK_IMPORTED_MODULE_0___default.a.define('popup', 
  `<div>
    <div x-b="topbar">
      <ul x-lb="searches">
        <li x-b="string">
      </ul>
      <div x-b="closeButton"></div>
    </div>
    <controls x-state-name="controls"></controls>
  </div>`, {

  open: {
    hooks: {
      update: (el, value, ci) => {
        if (value) {
          ci.down('controls').markup('searchId').focus();
        }
      }
    }
  },

  searches: {
    listItem: {
      state: {
        color: {},
        idx: {},
        string: {
          attrs: ($) => ({ title: $.string }),
          style: ($) => ({ backgroundColor: 'rgba(' +  $.color + ', 0.5)', }),
          html: () => '',
          events: {
            click: (e, el, ci) => _common_store__WEBPACK_IMPORTED_MODULE_2__["default"].moveThroughSearch({ searchId: ci.get('idx') }, true),
            contextmenu: (e, el, ci) => {
              e.preventDefault();
              _common_store__WEBPACK_IMPORTED_MODULE_2__["default"].removeSearch(e.shiftKey, ci.get('idx')).then(() =>
                ci.up().up().down('controls').markup('searchId').focus()
              );
            },
          }
        }
      }
    }
  },

  topbar: {
    events: {
      mousedown: (e, el, ci) => {
        const popupEl = ci.markup();
        
        const shiftX = e.clientX - popupEl.getBoundingClientRect().left;
        const shiftY = e.clientY - popupEl.getBoundingClientRect().top;

        function onMouseMove(e) {
          requestAnimationFrame(() => {
            popupEl.style.left = e.clientX - shiftX + 'px';
            popupEl.style.top = e.clientY - shiftY + 'px';
          });
        }

        function onMouseUp (e) {
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
          el.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mouseup', onMouseUp);
        el.addEventListener('mouseup', onMouseUp);

        document.addEventListener('mousemove', onMouseMove);
      },

      dragstart: () => false
    }
  },

  closeButton: {
    events: {
      click: () => _common_store__WEBPACK_IMPORTED_MODULE_2__["default"].closePopup()
    }
  },

  '': {
    style: ($) => {
      const styles = { display: $.open ? 'block' : 'none' };

      if ($.open) {
        Object.assign(styles, INITIAL_POPUP_POSITION);
      }

      return styles;
    },

    hooks: {
      mount: (el, data, ci) => {
        ci.set({ open: true });

        _common_store__WEBPACK_IMPORTED_MODULE_2__["default"].addListener((store) => {
          const popupData = store.getPopupData();

          if (ci.get('open') && popupData.open) {
            delete popupData.open;
          }

          ci.set(popupData);
        });
      }
    }
  }
}, Object(_styles__WEBPACK_IMPORTED_MODULE_1__["default"])({ INITIAL_POPUP_POSITION }));


/***/ }),

/***/ "./src/ui/components/popup/styles.js":
/*!*******************************************!*\
  !*** ./src/ui/components/popup/styles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((vars) => ({
  '': {
    width: 415,
    position: 'fixed',
    background: 'white',
    border: '3px solid black',
    zIndex: '2147483647',
    boxSizing: 'border-box',
    ...vars.INITIAL_POPUP_POSITION
  },

  topbar: {
    height: 15,
    borderBottom: '1px solid black',
    cursor: 'grab',
    position: 'relative',
    background: '#d6f5d6',
    boxSizing: 'border-box',
  },

  searches: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },

  'searches li': {
    float: 'left',
    width: 27,
    height: 15,
    borderRight: '1px solid black',
    cursor: 'pointer',
  },

  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: 32,
    cursor: 'pointer',
    borderLeft: '1px solid black',
    background: 'rgba(255, 79, 43, 0.85)',
  },

  'closeButton:hover': {
    background: 'rgb(255, 79, 43)'
  },

  'closeButton::before, closeButton::after': {
    content: "''",
    display: 'block',
    position: 'absolute',
    background: 'black',
    width: 11,
    height: 2,
    top: 6,
    left: 11,
    cursor: 'pointer',
  },

  'closeButton::before': {
    transform: 'rotate(45deg)',
  },

  'closeButton::after': {
    transform: 'rotate(-45deg)',
  },
}));


/***/ }),

/***/ "./src/ui/components/scrollbarMark/styles.js":
/*!***************************************************!*\
  !*** ./src/ui/components/scrollbarMark/styles.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((vars) => ({
  position: 'fixed',
  height: '5px',
  width: '15px',
  top: window.innerHeight / document.body.scrollHeight * vars.topPosition + 'px',
  right: '0px',
  'z-index': 2147483645,
  cursor: 'pointer',
  background: 'rgba(' +  vars.color + ', 0.5)',
}));


/***/ }),

/***/ "./src/ui/components/search-string/index.js":
/*!**************************************************!*\
  !*** ./src/ui/components/search-string/index.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var couli__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! couli */ "../couli/dist/couli.js");
/* harmony import */ var couli__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(couli__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _markup_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markup.html */ "./src/ui/components/search-string/markup.html");
/* harmony import */ var _markup_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_markup_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/ui/components/search-string/styles.js");





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

/***/ "./src/ui/components/search-string/markup.html":
/*!*****************************************************!*\
  !*** ./src/ui/components/search-string/markup.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li>\r\n  <input x-b=\"string\" type=\"text\" class=\"string\">\r\n  <input x-b=\"distance\" type=\"text\" class=\"distance\" title=\"Distance between substrings\">\r\n  <button x-b=\"remove\" tabindex=\"-1\" title=\"Remove substring\"></button>\r\n  <button x-b=\"addNew\" tabindex=\"-1\" title=\"Add new substring\"></button>\r\n</li>\r\n";

/***/ }),

/***/ "./src/ui/components/search-string/styles.js":
/*!***************************************************!*\
  !*** ./src/ui/components/search-string/styles.js ***!
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
    background: 'white',
    color: 'black',
    padding: 1,
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
    background: 'white',
    color: 'black',
    fontSize: 13,
    height: 16,
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


/***/ }),

/***/ "./src/ui/index.js":
/*!*************************!*\
  !*** ./src/ui/index.js ***!
  \*************************/
/*! exports provided: createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
function createElement (type, styles) {
  const el = document.createElement(type);

  for (let attr in styles) {
    el.style.setProperty(attr, styles[attr], 'important');
  }

  return el;
}


/***/ })

/******/ });