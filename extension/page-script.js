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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db3VsaS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQ291bGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvRGVmaW5pdGlvbi5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9FdmVudEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvUHJvZHVjdGlvbi5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9TdGF0ZS5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9TdGF0ZUNoYW5nZS5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9WaWV3LmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2Vycm9ycy9CaW5kaW5nTm90RXhpc3RzRXJyb3IuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvZXJyb3JzL0NvbXBvbmVudFJlZGVmaW5lRXJyb3IuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvZXJyb3JzL1Njb3BlTmFtZUNvbGxpc2lvbkVycm9yLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2dsb2JhbHMvYXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9nbG9iYWxzL3JlZ2V4cC5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9oZWxwZXJzL2NoZWNrZXJzLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2hlbHBlcnMvY29tbW9uLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2hlbHBlcnMvY29weS5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9oZWxwZXJzL2RvbS5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9oZWxwZXJzL2VxdWFsaXR5LmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2hlbHBlcnMvb2JqZWN0LmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL21haW4uanMiXSwibmFtZXMiOlsiVkFMVUVfVFlQRVMiLCJSRVNFUlZFRF9IT09LU19OQU1FUyIsIkRFRkFVTFRfSE9PS1MiLCJSRVNFUlZFRF9CSU5ESU5HX05BTUVTIiwiY29uY2F0IiwiTElCX0FUVFIiLCJTRUxGIiwiZGVmaW5lIiwiZ2V0Q29tcG9uZW50T3B0cyIsInNob3J0ZW5CaW5kaW5nSWQiLCJpc0NvbXBvbmVudCIsIkNPTVBPTkVOVF9DT1VOVEVSIiwiQ09NUE9ORU5UUyIsIm5hbWUiLCJtYXJrdXAiLCJiaW5kaW5ncyIsInN0eWxlcyIsImFyZ3MiLCJDb21wb25lbnRSZWRlZmluZUVycm9yIiwiY29tcG9uZW50SFRNTE1hcmt1cCIsImNsYXNzTGlzdCIsImFkZCIsImNvbXBvbmVudCIsInN0YXRlIiwic3RhdGVJZCIsInN0YXRlUGF0aCIsInN0YXRlTmFtZXMiLCJldmFsdWF0ZSIsImxpbmtzIiwib3V0ZXJOYW1lcyIsIl9saW5rcyIsImdhdGhlckJpbmRpbmdzRnJvbU1hcmt1cCIsIm5vcm1hbGl6ZWRPcHRpb25zIiwibm9ybWFsaXplVXNlck9wdGlvbnMiLCJwcmVwYXJlQmluZGluZ3MiLCJwcmVwYXJlU3R5bGVzIiwiSFRNTE5vZGUiLCJiaW5kaW5nT3B0cyIsImFuYWx5emVCaW5kaW5nIiwiYmluZGluZyIsImNyZWF0ZUJpbmRpbmciLCJzZXRDb21wb25lbnQiLCJQUkVGSVgiLCJpZCIsImlzTGlzdCIsIml0ZW1Ob2RlIiwiY2hpbGRyZW4iLCJtb2RpZnlUb0xpc3RCaW5kaW5nIiwibGlzdEl0ZW0iLCJjb21wb25lbnRCaW5kaW5nIiwic3ViQ29tcG9uZW50T3B0cyIsIk9iamVjdCIsImFzc2lnbiIsInN0YXRlTmFtZSIsIlNjb3BlTmFtZUNvbGxpc2lvbkVycm9yIiwiY2xvbmVOb2RlIiwicmV2TGlua3MiLCJjdXJyZW50U3RhdGVJZCIsInBhcmVudENvbXBvbmVudCIsImNvbXBvbmVudFdyYXBwZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJCSU5ESU5HX0lEIiwiU1RBVEVfREVMSU1JVEVSIiwiYXBwZW5kQ2hpbGQiLCJzdWJDb21wb25lbnRzIiwiYmluZGluZ05hbWUiLCJvbGRCaW5kaW5nSWQiLCJuZXdCaW5kaW5nSWQiLCJzaG9ydElkIiwiYmluZGluZ05vZGUiLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlIiwic2xpY2UiLCJob29rcyIsInByZXBhcmVSZWFjdGl2ZUZ1bmNzIiwicHVzaCIsIklURU0iLCJzZXR1cENvbXBvbmVudHNMaW5rcyIsInRlbXBsYXRlIiwiZm9yRWFjaCIsInN1YkNvbXBvbmVudCIsImNvbXBvbmVudERhdGEiLCJ0eXBlIiwicmVhY3RpdmVGdW5jIiwicHJlcGFyZVJlYWN0aXZlRnVuYyIsImRlcGVuZGVuY2llc05hbWVzIiwiZ2V0RGVwZW5kZW5jaWVzTmFtZXMiLCJkZXBlbmRlbmN5TmFtZSIsImRlcGVuZGFudHMiLCJ2YWx1ZXMiLCJjb21wb25lbnRJbnRlcmZhY2UiLCJjb21wdXRlIiwiZnVuYyIsImZ1bmNQYXJhbXMiLCJnZXRQYXJhbU5hbWVzIiwidmFsdWVzT2JqUmVnRXhwIiwiUmVnRXhwIiwiZnVuY1N0ciIsInRvU3RyaW5nIiwiZXhlYyIsImZ1bmNTdHJXaXRob3V0Q29tbWVudHMiLCJyZXBsYWNlIiwiUkUiLCJTVFJJUF9DT01NRU5UUyIsInBhcmFtc1N0ciIsImluZGV4T2YiLCJtYXRjaCIsIkFSR1VNRU5UX05BTUVTIiwidmFsdWVzT2JqIiwiY2FsbCIsImsiLCJsaW5rIiwib3B0aW9uc09iaiIsInBhcmVudE9iaiIsInBhcmVudEtleSIsImNsYXNzIiwibGVuZ3RoIiwib3B0aW9uIiwidmFsdWUiLCJldmVudHMiLCJrZXkiLCJlbCIsImdldEF0dHJpYnV0ZSIsIlRFTVBMQVRFX0JJTkRJTkciLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0cmltIiwiVEVNUExBVEVfTElTVF9CSU5ESU5HIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwib2JqIiwiZ2V0Q29tcG9uZW50QnlOYW1lIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJhdHRyaWJ1dGVzIiwiYXR0ciIsIlNUQVRFX05BTUUiLCJpbm5lckxpbmsiLCJjb21wb25lbnRPcHRzIiwiaXNMaXN0SXRlbSIsImVsT3B0cyIsImluaXRWYWx1ZSIsImlubmVySFRNTCIsImxpc3RlbmVycyIsIml0ZW1NYXJrdXAiLCJzcGxpdCIsIm1hcCIsImpvaW4iLCJzdHlsZUFyZyIsInNlbGVjdG9yIiwiY2xhc3NOYW1lIiwiaXNCaW5kaW5nIiwicHJlZml4Iiwic2V0dXBFdmVudEhhbmRsZXJzIiwiZWxlbWVudCIsImV2ZW50SGFuZGxlcnMiLCJnYXRoZXJBbGxFdmVudEhhbmRsZXJzIiwiZXZlbnROYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJleGVjdXRlQWxsQ2FsbGJhY2tzSW5MaXN0IiwiZ2F0aGVyZWRIYW5kbGVycyIsImdhdGhlckV2ZW50SGFuZGxlcnMiLCJkZWNvcmF0ZUV2ZW50IiwiY3VySFRNTE5vZGUiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiYmluZGluZ0lkIiwiZXZlbnRIYW5kbGVyIiwiaW5kZXhsZXNzU3RhdGVQYXRoIiwicG9wIiwic3RhdGVQYXRoVG9JdGVtIiwiZ2V0U3RhdGVQYXRoVG9JdGVtIiwiYWNjZXNzb3JUb0RhdGEiLCJwcm9wYWdhdGlvblN0b3BwZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJiaW5kIiwiZWxlbWVudE5hbWUiLCJnZXRUb0l0ZW1Ob2RlIiwiaWR4IiwiSVRFTV9JTkRFWCIsInVuc2hpZnQiLCJjdXJFbCIsImFwcGx5Iiwicm9vdEVsZW1lbnRTZWxlY3RvciIsInJvb3RFbGVtZW50IiwiSFRNTE5vZGVzIiwic2V0dXBFbGVtZW50IiwiY3JlYXRlQWNjZXNzb3IiLCJnZXRPbmx5VmFsdWVzIiwiZ2V0Q29tcG9uZW50Iiwic2V0U3RhdGUiLCJwcmVwYXJlQ2hhbmdlT2JqZWN0IiwiRUxFTUVOVFMiLCJTVEFURSIsIkVMRU1FTlRfQ09VTlRFUiIsInBhdGgiLCJnZXRTdGF0ZSIsIkNPTVBPTkVOVF9UWVBFIiwiQkFTRSIsImFjY2Vzc29yIiwic3RhcnRUcmFuc2FjdGlvbiIsImFwcGx5Q2hhbmdlcyIsInVwIiwibGV2ZWwiLCJtb3ZlVXBTdGF0ZVBhdGgiLCJkb3duIiwiYWRkaXRpb25hbFBhdGgiLCJzZXQiLCJjaGFuZ2VPYmoiLCJnZXQiLCJnZXRWYWx1ZXMiLCJtb2RpZnlUb0FycmF5QWNjZXNzb3IiLCJ2IiwiZm9yY2VkIiwia2V5cyIsImZvcmNlIiwiaSIsImJpbmRpbmdWYWx1ZXMiLCJnZXRWYWx1ZXNUcmVlIiwidmFsdWVzVHJlZSIsInZhbHMiLCJpdGVtVmFsdWVzIiwiY29tcG9uZW50VmFsdWVzIiwibGFzdElkeCIsIm51bSIsImVscyIsInN0YXJ0Iiwic2hpZnQiLCJtYXBMaXN0IiwiY2IiLCJpdGVyYXRlTGlzdFZhbHVlcyIsImZpbHRlciIsImZpbHRlckxpc3QiLCJuZXdMaXN0Iiwic2V0VmFsdWVzIiwiY3JlYXRlU3RhdGVOb2RlcyIsIm1vZGlmeUxpc3QiLCJzZW5kVG9SZW5kZXJRdWV1ZSIsIkNIQU5HRVMiLCJjaGFuZ2VzIiwiY29sbGVjdGluZyIsIlBST01JU0VTX1JFU09MVkVTIiwiTElGRV9DWUNMRV9IQU5ETEVSUyIsImxpc3QiLCJydW5MaWZlQ3ljbGVIb29rcyIsImxpZmVDeWNsZUhhbmRsZXJzIiwiaCIsImZpbmFsaXplVHJhbnNhY3Rpb24iLCJyZXNvbHZlUHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2hhbmdlIiwiaXNDb2xsZWN0aW5nQ2hhbmdlcyIsImFkZExpZmVDeWNsZUhvb2siLCJob29rVHlwZSIsImhvb2siLCJ2YWx1ZXNOb2RlIiwiY3JlYXRlU3RhdGVOb2RlIiwidmFsdWVzTm9kZXMiLCJ2YWx1ZU5vZGUiLCJyZWR1Y2UiLCJhIiwiY2hhbmdlVmFsdWVzIiwiY2FsbGVkRGVwZW5kZW5jZXMiLCJGVUxMX0NIQU5HRSIsImVuZCIsInNldFZhbHVlIiwicmVzIiwiQmluZGluZ05vdEV4aXN0c0Vycm9yIiwic2V0VmFsdWVGb3JMaXN0Iiwic2V0VmFsdWVGb3JDb21wb25lbnQiLCJlcXVhbCIsImh0bWwiLCJkZXBlbmRhbnQiLCJkZXBlbmRhbnRLZXkiLCJuZXdWYWx1ZSIsImFyciIsImluZGV4RXF1YWxpdHkiLCJyZW1vdmVkQ291bnQiLCJyZW1vdmVMaXN0SXRlbSIsImFjdGlvbiIsImxpc3RQYXRoIiwiaXRlbU5hbWUiLCJhZGRUb0xpc3QiLCJyZW1vdmVGcm9tTGlzdCIsInNwbGljZSIsImxpc3RCaW5kaW5nIiwicmVtb3ZlZERPTU5vZGUiLCJyZW1vdmVkTm9kZSIsImNyZWF0ZUFuZEFwcGVuZFN0eWxlcyIsInJlbmRlckNoYW5nZXMiLCJyZW5kZXIiLCJhcHBseU1hcmt1cCIsImFwcGx5Q2xhc3NlcyIsInN0eWxlIiwiYXBwbHlTdHlsZXMiLCJhdHRycyIsImFwcGx5QXR0cmlidXRlcyIsImNvbXBvbmVudENoYW5nZXMiLCJlbGVtZW50SWQiLCJjb21wb25lbnRJZCIsImNvbXBvbmVudEFjY2Vzc29yIiwicmVuZGVyTGlzdCIsInJlbmRlckNvbXBvbmVudCIsInVwZGF0ZUNvbXBvbmVudCIsImRyYXdDb21wb25lbnQiLCJpdGVtV3JhcHBlciIsIkNPTVBPTkVOVCIsInJlbmRlckZ1bmMiLCJyZW5kZXJUeXBlIiwiY2hpbGRTdGF0ZVBhdGgiLCJjaGlsZE1hcmt1cCIsImNvbXBvbmVudE1hcmt1cCIsImNoYW5nZVR5cGUiLCJzdGF0ZVBhdGhUb0JpbmRpbmciLCJsaXN0Q29tcG9uZW50IiwiaXRlbXNWYWx1ZXMiLCJ1cGRhdGVMaXN0IiwibGlzdEZyYWdtZW50IiwiYnVpbGRMaXN0IiwibGlzdE5vZGUiLCJuZXh0Tm9kZSIsIm5leHRFbGVtZW50U2libGluZyIsIkxJU1QiLCJDT01QT05FTlRfTElTVCIsImluc2VydEJlZm9yZSIsInJhbmdlIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsIml0ZW1WYWx1ZSIsIml0ZW1JbmRleCIsIm5ld0l0ZW1JbmRleCIsImxpc3RJdGVtTWFya3VwIiwiaXRlbXNDaGFuZ2VzIiwiaXRlbUFjY2Vzc29yIiwiZml4SW5kZXhlcyIsImRpZmYiLCJpdGVtc05vZGVzIiwicHJldklkeCIsIm5ld0lkeCIsImNsYXNzZXMiLCJub3JtYWxpemVTdHlsZXMiLCJzdHlsZU9iaiIsInN0eWxlU3RyIiwic3R5bGVFbCIsImNyZWF0ZVRleHROb2RlIiwiaGVhZCIsImNvbXBvbmVudE5hbWUiLCJtZXNzYWdlIiwiRXJyb3IiLCJMSUJfTkFNRSIsIkFUVFJfUFJFRklYIiwiU1RBVEVfUEFUSCIsIlRFTVBMQVRFX1BMQUNFTUVOVCIsIlNDT1BFX1BSRUZJWCIsIklURU1fU1VGRklYIiwiaXNGdW5jdGlvbiIsImlzQXJyYXkiLCJpc09iamVjdCIsImlzT2JqZWN0SW5CcmFja2V0cyIsImlzT2JqZWN0SW5Eb3VibGVCcmFja2V0cyIsImlzU3RyaW5nIiwiaXNIVE1MU3RyaW5nIiwiaXNOdW1iZXIiLCJpc0RPTUVsZW1lbnQiLCJpc1VuZGVmaW5lZCIsImlzRW1wdHkiLCJpc0xpbmsiLCJnZXRPYmplY3RUeXBlIiwic2xhc2hJZHgiLCJzb21lIiwiaGFzIiwiZ2V0RmFsc2VQYXRocyIsInRvRGFzaENhc2UiLCJ0b0NhbWVsQ2FzZSIsImdldFNob3J0TmFtZSIsImdldFJlYWxOYW1lIiwiTkFNRVMiLCJyZWFsIiwic2hvcnQiLCJzaG9ydE5hbWUiLCJvbmx5RmFsc2VQYXRocyIsImdldEZhbHNlUGF0aCIsInN0ciIsInRvVXBwZXJDYXNlIiwiY29weSIsImRlc3RpbmF0aW9uIiwic291cmNlIiwiaGFzT3duUHJvcGVydHkiLCJjb3B5QXJyYXkiLCJyZXBsYWNlTm9kZXMiLCJjbG9uZUhUTUxNYXJrdXAiLCJjb2xsZWN0SFRNTE5vZGVzIiwid2Fsa05vZGVzIiwicmVtb3ZlTm9kZSIsImluc2VydEJlZm9yZU5vZGUiLCJyZXdyaXRlVG9Ob2RlIiwiZW1wdHlOb2RlIiwib3JpZ2luYWwiLCJyZXBsYWNlbWVudCIsInJlcGxhY2VDaGlsZCIsIm5leHRFbCIsIm1hcmt1cFN0ciIsImNvbnZlcnRTdHJpbmdUb0hUTUwiLCJtYXJrdXBTdHJpbmciLCJwYXJzZXIiLCJET01QYXJzZXIiLCJwYXJzZWREb2N1bWVudCIsInBhcnNlRnJvbVN0cmluZyIsImJvZHkiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIm5vZGUiLCJyb290IiwiaXNXYW50ZWQiLCJub2RlcyIsInJlbW92ZUNoaWxkIiwidGV4dCIsIndyaXRlVG9Ob2RlIiwidGV4dE5vZGUiLCJoYXNDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZCIsImFyZUVxdWFsIiwiZmlyc3QiLCJzZWNvbmQiLCJjaGlsZE5vZGUiLCJjaGVja0tleXNFcXVhbGl0eSIsImFkZENvbnN0RmllbGRzIiwibWFwS2V5cyIsInRvT2JqZWN0IiwiZnVsbE1hcCIsInNwbGl0UGllY2UiLCJkZXN0IiwiZmllbGRzIiwiZmllbGQiLCJkZWZpbmVQcm9wZXJ0eSIsInByb3AiLCJuZXdPYmoiLCJuZXdLZXkiLCJ2YWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7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QUFJck0sT0FBSixDQUFZLFVBQUNxSSxDQUFELEVBQU87QUFDakIrTixXQUFPL04sQ0FBUCxJQUFZLDBCQUFXaU8sR0FBWCxJQUFrQkEsSUFBSWpPLENBQUosQ0FBbEIsR0FBMkJpTyxHQUF2QztBQUNELEdBRkQ7QUFHQSxTQUFPRixNQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7QUNoSkQ7O0FBQ0E7O0FBRUFHLE9BQU9DLE9BQVAsR0FBaUI7QUFDZmxiLDRCQURlO0FBRWZpTDtBQUZlLENBQWpCLEMiLCJmaWxlIjoiY291bGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJDb3VsaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJDb3VsaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4uanNcIik7XG4iLCJpbXBvcnQgTElCX0FUVFIgZnJvbSAnLi9nbG9iYWxzL2F0dHJpYnV0ZXMnO1xyXG5pbXBvcnQgUkUgZnJvbSAnLi9nbG9iYWxzL3JlZ2V4cCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNsb25lSFRNTE1hcmt1cCxcclxuICB3YWxrTm9kZXMsXHJcbn0gZnJvbSAnLi9oZWxwZXJzL2RvbSc7XHJcblxyXG5pbXBvcnQgeyBzZXQsIGZvckVhY2gsIG1hcCwgbWFwS2V5cywgdG9PYmplY3QgfSBmcm9tICcuL2hlbHBlcnMvb2JqZWN0JztcclxuXHJcbmltcG9ydCBjb3B5IGZyb20gJy4vaGVscGVycy9jb3B5JztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNBcnJheSxcclxuICBpc0Z1bmN0aW9uLFxyXG4gIGlzT2JqZWN0LFxyXG4gIGlzRW1wdHksXHJcbn0gZnJvbSAnLi9oZWxwZXJzL2NoZWNrZXJzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgdG9DYW1lbENhc2UsXHJcbiAgZ2V0U2hvcnROYW1lLFxyXG59IGZyb20gJy4vaGVscGVycy9jb21tb24nO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRPbmx5VmFsdWVzLFxyXG59IGZyb20gJy4vU3RhdGUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBjcmVhdGVBbmRBcHBlbmRTdHlsZXMsXHJcbn0gZnJvbSAnLi9WaWV3JztcclxuXHJcbmltcG9ydCBDb21wb25lbnRSZWRlZmluZUVycm9yIGZyb20gJy4vZXJyb3JzL0NvbXBvbmVudFJlZGVmaW5lRXJyb3InO1xyXG5pbXBvcnQgU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3IgZnJvbSAnLi9lcnJvcnMvU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3InO1xyXG5cclxuXHJcbmNvbnN0IFZBTFVFX1RZUEVTID0gWydzdHlsZScsICdjbGFzcycsICd2YWx1ZScsICdhdHRycycsICdodG1sJ107XHJcbmNvbnN0IFJFU0VSVkVEX0hPT0tTX05BTUVTID0gWydtb3VudCcsICd1cGRhdGUnLCAncmVtb3ZlJ107XHJcbmNvbnN0IERFRkFVTFRfSE9PS1MgPSB0b09iamVjdChSRVNFUlZFRF9IT09LU19OQU1FUywgKCkgPT4gKCkgPT4ge30pO1xyXG5jb25zdCBSRVNFUlZFRF9CSU5ESU5HX05BTUVTID0gVkFMVUVfVFlQRVMuY29uY2F0KFsnZXZlbnRzJywgJ2hvb2tzJywgJ2xpc3RJdGVtJywgTElCX0FUVFIuU0VMRl0pO1xyXG5cclxuZXhwb3J0IHtcclxuICBkZWZpbmUsXHJcbiAgZ2V0Q29tcG9uZW50T3B0cyxcclxuICBzaG9ydGVuQmluZGluZ0lkLFxyXG4gIGlzQ29tcG9uZW50LFxyXG4gIFZBTFVFX1RZUEVTLFxyXG4gIFJFU0VSVkVEX0JJTkRJTkdfTkFNRVMsXHJcbn07XHJcblxyXG5sZXQgQ09NUE9ORU5UX0NPVU5URVIgPSAwO1xyXG5jb25zdCBDT01QT05FTlRTID0ge307XHJcblxyXG5mdW5jdGlvbiBkZWZpbmUgKG5hbWUsIG1hcmt1cCwgYmluZGluZ3MsIHN0eWxlcykge1xyXG4gIGNvbnN0IGFyZ3MgPSBpc09iamVjdChuYW1lKSA/IG5hbWUgOiB7IG5hbWUsIG1hcmt1cCwgYmluZGluZ3MsIHN0eWxlcyB9O1xyXG5cclxuICBuYW1lID0gdG9DYW1lbENhc2UoYXJncy5uYW1lKTtcclxuXHJcbiAgaWYgKENPTVBPTkVOVFNbbmFtZV0pIHtcclxuICAgIHRocm93IG5ldyBDb21wb25lbnRSZWRlZmluZUVycm9yKG5hbWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tcG9uZW50SFRNTE1hcmt1cCA9IGNsb25lSFRNTE1hcmt1cChhcmdzLm1hcmt1cCk7XHJcbiAgY29tcG9uZW50SFRNTE1hcmt1cC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xyXG5cclxuICBDT01QT05FTlRfQ09VTlRFUiA9IDA7XHJcbiAgY29uc3QgY29tcG9uZW50ID0ge1xyXG4gICAgbmFtZSxcclxuICAgIHN0YXRlOiB7IFtMSUJfQVRUUi5TRUxGXToge30gfSxcclxuICAgIHN0YXRlSWQ6IG5hbWUsXHJcbiAgICBzdGF0ZVBhdGg6IFtuYW1lXSxcclxuICAgIHN0YXRlTmFtZXM6IHt9LFxyXG4gICAgbWFya3VwOiBjb21wb25lbnRIVE1MTWFya3VwLFxyXG4gICAgZXZhbHVhdGU6IHt9LFxyXG4gICAgbGlua3M6IHt9LFxyXG4gICAgaXNDb21wb25lbnQ6IHRydWUsXHJcbiAgICBvdXRlck5hbWVzOiB7fSxcclxuICAgIF9saW5rczoge30sXHJcbiAgfTtcclxuXHJcbiAgZ2F0aGVyQmluZGluZ3NGcm9tTWFya3VwKGNvbXBvbmVudEhUTUxNYXJrdXAsIGNvbXBvbmVudCk7XHJcblxyXG4gIGNvbnN0IG5vcm1hbGl6ZWRPcHRpb25zID0gbm9ybWFsaXplVXNlck9wdGlvbnMoYXJncy5iaW5kaW5ncywgeyBzdGF0ZToge30gfSk7XHJcbiAgY29weShjb21wb25lbnQsIG5vcm1hbGl6ZWRPcHRpb25zKTtcclxuXHJcbiAgcHJlcGFyZUJpbmRpbmdzIChjb21wb25lbnQsIGNvbXBvbmVudC5zdGF0ZUlkLCB7IHN0YXRlUGF0aDogW10sIGxpbmtzOiB7fSwgc3RhdGVOYW1lczogY29tcG9uZW50LnN0YXRlTmFtZXMgfSk7XHJcblxyXG4gIGNyZWF0ZUFuZEFwcGVuZFN0eWxlcyggcHJlcGFyZVN0eWxlcyhhcmdzLnN0eWxlcywgY29tcG9uZW50KSApO1xyXG5cclxuICByZXR1cm4gQ09NUE9ORU5UU1tuYW1lXSA9IGNvbXBvbmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2F0aGVyQmluZGluZ3NGcm9tTWFya3VwIChjb21wb25lbnRIVE1MTWFya3VwLCBjb21wb25lbnQpIHtcclxuICB3YWxrTm9kZXMoY29tcG9uZW50SFRNTE1hcmt1cCwgKEhUTUxOb2RlKSA9PiB7XHJcbiAgICBjb25zdCBiaW5kaW5nT3B0cyA9IGFuYWx5emVCaW5kaW5nKEhUTUxOb2RlKTtcclxuXHJcbiAgICBpZiAoIWJpbmRpbmdPcHRzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiaW5kaW5nID0gY3JlYXRlQmluZGluZyhiaW5kaW5nT3B0cy5uYW1lLCBjb21wb25lbnQsIEhUTUxOb2RlKTtcclxuXHJcbiAgICBpZiAoYmluZGluZ09wdHMuaXNDb21wb25lbnQpIHtcclxuICAgICAgc2V0Q29tcG9uZW50KGJpbmRpbmcsIGJpbmRpbmdPcHRzKTtcclxuICAgICAgSFRNTE5vZGUuY2xhc3NMaXN0LmFkZChMSUJfQVRUUi5QUkVGSVggKyBiaW5kaW5nLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnQuc3RhdGVbYmluZGluZy5uYW1lXSA9IGJpbmRpbmc7XHJcbiAgICBiaW5kaW5nLm1hcmt1cC5jbGFzc0xpc3QuYWRkKExJQl9BVFRSLlBSRUZJWCArIGJpbmRpbmcuaWQsIGNvbXBvbmVudC5uYW1lICsgJy0nICsgYmluZGluZy5uYW1lKTtcclxuXHJcbiAgICBpZiAoYmluZGluZ09wdHMuaXNMaXN0KSB7XHJcbiAgICAgIGNvbnN0IGl0ZW1Ob2RlID0gSFRNTE5vZGUuY2hpbGRyZW5bMF07XHJcbiAgICAgIG1vZGlmeVRvTGlzdEJpbmRpbmcoYmluZGluZywgaXRlbU5vZGUpO1xyXG5cclxuICAgICAgaWYgKGlzQ29tcG9uZW50KGl0ZW1Ob2RlKSkge1xyXG4gICAgICAgIHNldENvbXBvbmVudChiaW5kaW5nLmxpc3RJdGVtLCBnZXRDb21wb25lbnRPcHRzKGl0ZW1Ob2RlKSk7XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBnYXRoZXJCaW5kaW5nc0Zyb21NYXJrdXAoaXRlbU5vZGUsIGJpbmRpbmcubGlzdEl0ZW0pO1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldENvbXBvbmVudCAoY29tcG9uZW50QmluZGluZywgc3ViQ29tcG9uZW50T3B0cykge1xyXG4gIGNvbnN0IHN0YXRlTmFtZXMgPSBPYmplY3QuYXNzaWduKGNvbXBvbmVudEJpbmRpbmcuc3RhdGVOYW1lcywgc3ViQ29tcG9uZW50T3B0cy5jb21wb25lbnQuc3RhdGVOYW1lcyk7XHJcbiAgbGV0IHN0YXRlSWQgPSBzdWJDb21wb25lbnRPcHRzLmNvbXBvbmVudC5uYW1lICsgJ3gnICsgQ09NUE9ORU5UX0NPVU5URVIrKztcclxuXHJcbiAgaWYgKHN1YkNvbXBvbmVudE9wdHMuc3RhdGVOYW1lKSB7XHJcbiAgICBpZiAoc3RhdGVOYW1lc1tzdWJDb21wb25lbnRPcHRzLnN0YXRlTmFtZV0pIHtcclxuICAgICAgdGhyb3cgbmV3IFNjb3BlTmFtZUNvbGxpc2lvbkVycm9yKHN1YkNvbXBvbmVudE9wdHMuc3RhdGVOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0ZUlkID0gc3ViQ29tcG9uZW50T3B0cy5zdGF0ZU5hbWU7XHJcbiAgICBjb21wb25lbnRCaW5kaW5nLnN0YXRlTmFtZXNbc3RhdGVJZF0gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgY29weShjb21wb25lbnRCaW5kaW5nLCBzdWJDb21wb25lbnRPcHRzLmNvbXBvbmVudCk7XHJcblxyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKCBjb21wb25lbnRCaW5kaW5nLCB7XHJcbiAgICBpZDogc3RhdGVJZCxcclxuICAgIHN0YXRlSWQsXHJcbiAgICBuYW1lOiBzdGF0ZUlkLFxyXG4gICAgc3RhdGVOYW1lOiBzdWJDb21wb25lbnRPcHRzLnN0YXRlTmFtZSxcclxuICAgIHN0YXRlUGF0aDogY29tcG9uZW50QmluZGluZy5zdGF0ZVBhdGguY29uY2F0KHN0YXRlSWQpLFxyXG4gICAgbWFya3VwOiBzdWJDb21wb25lbnRPcHRzLmNvbXBvbmVudC5tYXJrdXAuY2xvbmVOb2RlKHRydWUpLFxyXG4gICAgaXNDb21wb25lbnQ6IHRydWUsXHJcbiAgICBzdGF0ZU5hbWVzLFxyXG4gICAgX2xpbmtzOiBPYmplY3QuYXNzaWduKHt9LCBzdWJDb21wb25lbnRPcHRzLmxpbmtzKSxcclxuICAgIG91dGVyTmFtZXM6IE9iamVjdC5hc3NpZ24oe30sIHN1YkNvbXBvbmVudE9wdHMucmV2TGlua3MpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVwYXJlQmluZGluZ3MgKGNvbXBvbmVudCwgY3VycmVudFN0YXRlSWQsIHBhcmVudENvbXBvbmVudCkge1xyXG4gIGNvbnN0IGNvbXBvbmVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb21wb25lbnQubWFya3VwLnNldEF0dHJpYnV0ZShMSUJfQVRUUi5CSU5ESU5HX0lELCBzaG9ydGVuQmluZGluZ0lkKCBjdXJyZW50U3RhdGVJZCArIExJQl9BVFRSLlNUQVRFX0RFTElNSVRFUiArIExJQl9BVFRSLlNFTEYgKSk7XHJcbiAgY29tcG9uZW50V3JhcHBlci5hcHBlbmRDaGlsZChjb21wb25lbnQubWFya3VwKTtcclxuICBjb21wb25lbnQuc3RhdGVQYXRoID0gcGFyZW50Q29tcG9uZW50LnN0YXRlUGF0aC5jb25jYXQoY29tcG9uZW50LnN0YXRlSWQpO1xyXG4gIGNvbXBvbmVudC5zdGF0ZU5hbWVzID0gcGFyZW50Q29tcG9uZW50LnN0YXRlTmFtZXM7XHJcblxyXG4gIGNvbnN0IHN1YkNvbXBvbmVudHMgPSBbXTtcclxuXHJcbiAgZm9yRWFjaChjb21wb25lbnQuc3RhdGUsIChiaW5kaW5nLCBiaW5kaW5nTmFtZSkgPT4ge1xyXG4gICAgY29uc3Qgb2xkQmluZGluZ0lkID0gYmluZGluZy5pZDtcclxuICAgIGNvbnN0IG5ld0JpbmRpbmdJZCA9IGN1cnJlbnRTdGF0ZUlkICsgTElCX0FUVFIuU1RBVEVfREVMSU1JVEVSICsgYmluZGluZ05hbWU7XHJcbiAgICBjb25zdCBzaG9ydElkID0gc2hvcnRlbkJpbmRpbmdJZChuZXdCaW5kaW5nSWQpO1xyXG5cclxuICAgIGlmIChiaW5kaW5nLm1hcmt1cCkge1xyXG4gICAgICBjb25zdCBiaW5kaW5nTm9kZSA9IGNvbXBvbmVudFdyYXBwZXIucXVlcnlTZWxlY3RvcignLicgKyBMSUJfQVRUUi5QUkVGSVggKyBvbGRCaW5kaW5nSWQpO1xyXG4gICAgICBiaW5kaW5nTm9kZS5zZXRBdHRyaWJ1dGUoTElCX0FUVFIuQklORElOR19JRCwgc2hvcnRJZCk7XHJcbiAgICAgIGJpbmRpbmdOb2RlLmNsYXNzTGlzdC5yZW1vdmUoTElCX0FUVFIuUFJFRklYICsgb2xkQmluZGluZ0lkKTtcclxuICAgICAgYmluZGluZ05vZGUuY2xhc3NMaXN0LmFkZChMSUJfQVRUUi5QUkVGSVggKyBuZXdCaW5kaW5nSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5hc3NpZ24oYmluZGluZywge1xyXG4gICAgICBzdGF0ZVBhdGg6IGNvbXBvbmVudC5zdGF0ZVBhdGguc2xpY2UoKSxcclxuICAgICAgaG9va3M6IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfSE9PS1MsIGJpbmRpbmcuaG9va3MpLFxyXG4gICAgICBpZDogbmV3QmluZGluZ0lkLFxyXG4gICAgICBzaG9ydElkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcHJlcGFyZVJlYWN0aXZlRnVuY3MoYmluZGluZywgY29tcG9uZW50KTtcclxuXHJcbiAgICBpZiAoYmluZGluZy5pc0xpc3QpIHtcclxuICAgICAgYmluZGluZy5zdGF0ZVBhdGgucHVzaChiaW5kaW5nTmFtZSk7XHJcbiAgICAgIGJpbmRpbmcuc3RhdGVOYW1lcyA9IGNvbXBvbmVudC5zdGF0ZU5hbWVzO1xyXG5cclxuICAgICAgcHJlcGFyZUJpbmRpbmdzIChiaW5kaW5nLmxpc3RJdGVtLCBuZXdCaW5kaW5nSWQgKyBMSUJfQVRUUi5TVEFURV9ERUxJTUlURVIgKyBMSUJfQVRUUi5JVEVNICsgYmluZGluZy5saXN0SXRlbS5uYW1lLCBiaW5kaW5nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChiaW5kaW5nLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgIHN1YkNvbXBvbmVudHMucHVzaChiaW5kaW5nKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgc2V0dXBDb21wb25lbnRzTGlua3MoY29tcG9uZW50LCBwYXJlbnRDb21wb25lbnQpO1xyXG4gIGNvbXBvbmVudC50ZW1wbGF0ZSA9IGNvbXBvbmVudC5tYXJrdXAuY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuICBzdWJDb21wb25lbnRzLmZvckVhY2goKHN1YkNvbXBvbmVudCkgPT4ge1xyXG4gICAgcHJlcGFyZUJpbmRpbmdzIChzdWJDb21wb25lbnQsIGN1cnJlbnRTdGF0ZUlkICsgTElCX0FUVFIuU1RBVEVfREVMSU1JVEVSICsgc3ViQ29tcG9uZW50LnN0YXRlSWQsIGNvbXBvbmVudCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXBhcmVSZWFjdGl2ZUZ1bmNzIChiaW5kaW5nLCBjb21wb25lbnREYXRhKSB7XHJcbiAgVkFMVUVfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xyXG4gICAgY29uc3QgcmVhY3RpdmVGdW5jID0gYmluZGluZ1t0eXBlXTtcclxuICAgIGlmICghcmVhY3RpdmVGdW5jKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kaW5nLmV2YWx1YXRlW3R5cGVdID0gcHJlcGFyZVJlYWN0aXZlRnVuYyhiaW5kaW5nLCB0eXBlLCByZWFjdGl2ZUZ1bmMsIGNvbXBvbmVudERhdGEpXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXBhcmVSZWFjdGl2ZUZ1bmMgKGJpbmRpbmcsIHR5cGUsIHJlYWN0aXZlRnVuYywgY29tcG9uZW50RGF0YSkge1xyXG4gIGNvbnN0IGRlcGVuZGVuY2llc05hbWVzID0gZ2V0RGVwZW5kZW5jaWVzTmFtZXMocmVhY3RpdmVGdW5jKTtcclxuXHJcbiAgZGVwZW5kZW5jaWVzTmFtZXMuZm9yRWFjaCgoZGVwZW5kZW5jeU5hbWUpID0+IHtcclxuICAgIGlmIChpc0VtcHR5KGNvbXBvbmVudERhdGEuc3RhdGVbZGVwZW5kZW5jeU5hbWVdKSkge1xyXG4gICAgICBjb21wb25lbnREYXRhLnN0YXRlW2RlcGVuZGVuY3lOYW1lXSA9IGNyZWF0ZUJpbmRpbmcoZGVwZW5kZW5jeU5hbWUsIGNvbXBvbmVudERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERhdGEuc3RhdGVbZGVwZW5kZW5jeU5hbWVdLmRlcGVuZGFudHNbIGJpbmRpbmcubmFtZSArICc6JyArIHR5cGUgXSA9IHsgbmFtZTogYmluZGluZy5uYW1lLCB0eXBlIH07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAodmFsdWVzLCBjb21wb25lbnRJbnRlcmZhY2UpID0+IGNvbXB1dGUgKHJlYWN0aXZlRnVuYywgdmFsdWVzLCBjb21wb25lbnRJbnRlcmZhY2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREZXBlbmRlbmNpZXNOYW1lcyhmdW5jKSB7XHJcbiAgY29uc3QgZnVuY1BhcmFtcyA9IGdldFBhcmFtTmFtZXMoZnVuYyk7XHJcbiAgY29uc3QgdmFsdWVzT2JqUmVnRXhwID0gIG5ldyBSZWdFeHAoJ1xcXFwnICsgZnVuY1BhcmFtc1swXSArICdcXFxcLihcXFxcRFteXFxcXHNcXFxcV10rKScsICdnJyk7XHJcbiAgY29uc3QgZGVwZW5kZW5jaWVzTmFtZXMgPSBbXTtcclxuICBjb25zdCBmdW5jU3RyID0gZnVuYy50b1N0cmluZygpO1xyXG4gIGxldCBkZXBlbmRlbmN5TmFtZTtcclxuICB3aGlsZSAoKGRlcGVuZGVuY3lOYW1lID0gdmFsdWVzT2JqUmVnRXhwLmV4ZWMoZnVuY1N0cikpKSB7XHJcbiAgICBkZXBlbmRlbmNpZXNOYW1lcy5wdXNoKGRlcGVuZGVuY3lOYW1lWzFdKTtcclxuICB9XHJcbiAgcmV0dXJuIGRlcGVuZGVuY2llc05hbWVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYXJhbU5hbWVzKGZ1bmMpIHtcclxuICBjb25zdCBmdW5jU3RyV2l0aG91dENvbW1lbnRzID0gZnVuYy50b1N0cmluZygpLnJlcGxhY2UoUkUuU1RSSVBfQ09NTUVOVFMsICcnKTtcclxuICBjb25zdCBwYXJhbXNTdHIgPSBmdW5jU3RyV2l0aG91dENvbW1lbnRzLnNsaWNlKFxyXG4gICAgZnVuY1N0cldpdGhvdXRDb21tZW50cy5pbmRleE9mKCcoJykgKzEsXHJcbiAgICBmdW5jU3RyV2l0aG91dENvbW1lbnRzLmluZGV4T2YoJyknKVxyXG4gICk7XHJcbiAgcmV0dXJuIHBhcmFtc1N0ci5tYXRjaChSRS5BUkdVTUVOVF9OQU1FUykgfHwgW107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXB1dGUgKGZ1bmMsIHZhbHVlc09iaiwgY29tcG9uZW50SW50ZXJmYWNlKSB7XHJcbiAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBnZXRPbmx5VmFsdWVzKHZhbHVlc09iaiksIGNvbXBvbmVudEludGVyZmFjZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwQ29tcG9uZW50c0xpbmtzIChjb21wb25lbnQsIHBhcmVudENvbXBvbmVudCkge1xyXG4gIE9iamVjdC5hc3NpZ24oXHJcbiAgICBwYXJlbnRDb21wb25lbnQubGlua3MsXHJcbiAgICBtYXAoY29tcG9uZW50Lm91dGVyTmFtZXMsIChrKSA9PiAoeyBsaW5rOiBrLCBjb21wb25lbnQ6IGNvbXBvbmVudC5zdGF0ZUlkIH0pKVxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVVzZXJPcHRpb25zIChvcHRpb25zT2JqLCBwYXJlbnRPYmosIHBhcmVudEtleSkge1xyXG4gIGlmIChpc0Z1bmN0aW9uIChvcHRpb25zT2JqKSkge1xyXG4gICAgcmV0dXJuIHNldChwYXJlbnRPYmosIFtwYXJlbnRLZXldLCB7IGNsYXNzOiBvcHRpb25zT2JqIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzQXJyYXkob3B0aW9uc09iaikpIHtcclxuXHJcbiAgICBpZiAob3B0aW9uc09iai5sZW5ndGggPiAxKSB7XHJcbiAgICAgIG9wdGlvbnNPYmouZm9yRWFjaCgob3B0aW9uKSA9PiBub3JtYWxpemVVc2VyT3B0aW9ucyAob3B0aW9uLCBwYXJlbnRPYmosIHBhcmVudEtleSkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9uc09ialswXSkpIHtcclxuICAgICAgcmV0dXJuIHNldChwYXJlbnRPYmosIFtwYXJlbnRLZXldLCB7IHZhbHVlOiBvcHRpb25zT2JqWzBdIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzT2JqZWN0KG9wdGlvbnNPYmpbMF0pKSB7XHJcbiAgICAgIHJldHVybiBzZXQocGFyZW50T2JqLCBbcGFyZW50S2V5XSwgeyBldmVudHM6IG9wdGlvbnNPYmpbMF0gfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JFYWNoKG9wdGlvbnNPYmosICh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICBkZWxldGUgb3B0aW9uc09ialtrZXldO1xyXG4gICAgY29uc3QgYmluZGluZyA9IGNyZWF0ZUJpbmRpbmcoa2V5KTtcclxuXHJcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgIHBhcmVudE9ialsnc3RhdGUnXVtrZXldID0gT2JqZWN0LmFzc2lnbihiaW5kaW5nLCB2YWx1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwYXJlbnRPYmpbJ3N0YXRlJ11ba2V5XSA9IGJpbmRpbmc7XHJcbiAgICBub3JtYWxpemVVc2VyT3B0aW9ucyh2YWx1ZSwgcGFyZW50T2JqWydzdGF0ZSddLCBrZXkpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcGFyZW50T2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbmFseXplQmluZGluZyAoZWwpIHtcclxuICBpZiAoaXNDb21wb25lbnQoZWwpKSB7XHJcbiAgICByZXR1cm4gZ2V0Q29tcG9uZW50T3B0cyhlbCk7XHJcbiAgfVxyXG5cclxuICBpZiAoIWVsLmdldEF0dHJpYnV0ZSkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBsZXQgbmFtZSA9IGVsLmdldEF0dHJpYnV0ZShMSUJfQVRUUi5URU1QTEFURV9CSU5ESU5HKTtcclxuICBlbC5yZW1vdmVBdHRyaWJ1dGUoTElCX0FUVFIuVEVNUExBVEVfQklORElORyk7XHJcblxyXG4gIGlmIChuYW1lKSB7XHJcbiAgICByZXR1cm4geyBuYW1lOiBuYW1lLnRyaW0oKSB9O1xyXG4gIH1cclxuXHJcbiAgbmFtZSA9IGVsLmdldEF0dHJpYnV0ZShMSUJfQVRUUi5URU1QTEFURV9MSVNUX0JJTkRJTkcpO1xyXG4gIGVsLnJlbW92ZUF0dHJpYnV0ZShMSUJfQVRUUi5URU1QTEFURV9MSVNUX0JJTkRJTkcpO1xyXG5cclxuICBpZiAobmFtZSkge1xyXG4gICAgcmV0dXJuIHsgbmFtZTogbmFtZS50cmltKCksIGlzTGlzdDogdHJ1ZSB9O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNDb21wb25lbnQgKGVsKSB7XHJcbiAgY29uc3QgdGFnTmFtZSA9IGVsLnRhZ05hbWUgJiYgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gIHJldHVybiB0YWdOYW1lICYmIENPTVBPTkVOVFNbIHRvQ2FtZWxDYXNlKHRhZ05hbWUpIF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvbXBvbmVudE9wdHMgKG9iaikge1xyXG4gIGNvbnN0IG5hbWUgPSB0b0NhbWVsQ2FzZSggb2JqLnRhZ05hbWUudG9Mb3dlckNhc2UoKSApO1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IGdldENvbXBvbmVudEJ5TmFtZShuYW1lKTtcclxuICBjb25zdCBsaW5rcyA9IHt9O1xyXG4gIGNvbnN0IHJldkxpbmtzID0ge307XHJcbiAgbGV0IHN0YXRlTmFtZSA9IG51bGw7XHJcblxyXG4gIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG9iai5hdHRyaWJ1dGVzKVxyXG4gICAgLmZvckVhY2goKGF0dHIpID0+IHtcclxuXHJcbiAgICAgIGlmIChhdHRyLm5hbWUgPT09IExJQl9BVFRSLlNUQVRFX05BTUUpIHtcclxuICAgICAgICBzdGF0ZU5hbWUgPSBhdHRyLnZhbHVlO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgaW5uZXJMaW5rID0gdG9DYW1lbENhc2UoYXR0ci5uYW1lKTtcclxuICAgICAgbGlua3NbaW5uZXJMaW5rXSA9IGF0dHIudmFsdWU7XHJcbiAgICAgIHJldkxpbmtzW2F0dHIudmFsdWVdID0gaW5uZXJMaW5rO1xyXG4gICAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjb21wb25lbnQsXHJcbiAgICBsaW5rczogbGlua3MsXHJcbiAgICByZXZMaW5rczogcmV2TGlua3MsXHJcbiAgICBzdGF0ZU5hbWUsXHJcbiAgICBuYW1lLFxyXG4gICAgaXNDb21wb25lbnQ6IHRydWUsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50QnlOYW1lIChuYW1lKSB7XHJcbiAgcmV0dXJuIENPTVBPTkVOVFNbIHRvQ2FtZWxDYXNlKG5hbWUpIF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJpbmRpbmcgKG5hbWUsIGNvbXBvbmVudCwgZWwpIHtcclxuICBjb25zdCBjb21wb25lbnRPcHRzID0gKGNvbXBvbmVudCkgPyB7XHJcbiAgICBpZDogY29tcG9uZW50LnN0YXRlSWQgKyBMSUJfQVRUUi5TVEFURV9ERUxJTUlURVIgKyBuYW1lLFxyXG4gICAgc3RhdGVQYXRoOiBjb21wb25lbnQuc3RhdGVQYXRoLFxyXG4gICAgc3RhdGVOYW1lczogY29tcG9uZW50LnN0YXRlTmFtZXMsXHJcbiAgICBpc0xpc3RJdGVtOiBjb21wb25lbnQuaXNMaXN0LFxyXG4gICAgc3RhdGVJZDogbmFtZSxcclxuICB9IDoge307XHJcblxyXG4gIGNvbnN0IGVsT3B0cyA9IChlbCkgPyB7XHJcbiAgICBpbml0VmFsdWU6IGVsLnZhbHVlIHx8IGVsLmlubmVySFRNTFxyXG4gIH0gOiB7fTtcclxuXHJcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe1xyXG4gICAgbmFtZSxcclxuICAgIGxpc3RlbmVyczogW10sXHJcbiAgICBtYXJrdXA6IGVsLFxyXG4gICAgZGVwZW5kYW50czoge30sXHJcbiAgICBldmVudHM6IHt9LFxyXG4gICAgZXZhbHVhdGU6IHt9LFxyXG4gICAgbGlua3M6IHt9LFxyXG4gICAgc3RhdGU6IHsgW0xJQl9BVFRSLlNFTEZdOiB7fSB9LFxyXG4gICAgb3V0ZXJOYW1lczoge30sXHJcbiAgICBfbGlua3M6IHt9LFxyXG5cclxuICB9LCBjb21wb25lbnRPcHRzLCBlbE9wdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb2RpZnlUb0xpc3RCaW5kaW5nIChiaW5kaW5nLCBpdGVtTWFya3VwKSB7XHJcbiAgYmluZGluZy5pc0xpc3QgPSB0cnVlO1xyXG5cclxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihiaW5kaW5nLCB7XHJcbiAgICBtYXJrdXA6IGl0ZW1NYXJrdXAsXHJcbiAgICBsaXN0SXRlbTogY3JlYXRlQmluZGluZyhpdGVtTWFya3VwLnRhZ05hbWUsIGJpbmRpbmcsIGl0ZW1NYXJrdXApLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG9ydGVuQmluZGluZ0lkIChpZCkge1xyXG4gIHJldHVybiBpZFxyXG4gICAgLnNwbGl0KExJQl9BVFRSLlNUQVRFX0RFTElNSVRFUilcclxuICAgIC5tYXAoKGVsKSA9PiBnZXRTaG9ydE5hbWUoZWwpKVxyXG4gICAgLmpvaW4oTElCX0FUVFIuU1RBVEVfREVMSU1JVEVSKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlcGFyZVN0eWxlcyAoc3R5bGVBcmcsIGNvbXBvbmVudCkge1xyXG4gIHJldHVybiBtYXBLZXlzKHN0eWxlQXJnLCAoa2V5KSA9PiBrZXlcclxuICAgIC5zcGxpdCgnLCcpXHJcbiAgICAubWFwKChzZWxlY3RvcikgPT4gc2VsZWN0b3IudHJpbSgpKVxyXG4gICAgLm1hcCgoc2VsZWN0b3IpID0+IHtcclxuXHJcbiAgICAgIGxldCBjbGFzc05hbWUgPSAgJy4nICsgY29tcG9uZW50Lm5hbWU7XHJcblxyXG4gICAgICBpZiAoc2VsZWN0b3IpIHtcclxuICAgICAgICBjb25zdCBpc0JpbmRpbmcgPSBjb21wb25lbnQuc3RhdGVbIHNlbGVjdG9yLnNwbGl0KCcgJylbMF0uc3BsaXQoJzo6JylbMF0uc3BsaXQoJzonKVswXSBdO1xyXG4gICAgICAgIGNvbnN0IHByZWZpeCA9IGlzQmluZGluZyA/IGNsYXNzTmFtZSArICctJyA6ICcnO1xyXG4gICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBwcmVmaXggKyBzZWxlY3RvcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcclxuICAgIH0pXHJcbiAgICAuam9pbignLCcpXHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgTElCX0FUVFIgZnJvbSAnLi9nbG9iYWxzL2F0dHJpYnV0ZXMnO1xyXG5cclxuaW1wb3J0IHsgZm9yRWFjaCB9IGZyb20gJy4vaGVscGVycy9vYmplY3QnO1xyXG5pbXBvcnQgeyBnZXRSZWFsTmFtZSwgaGFzIH0gZnJvbSAnLi9oZWxwZXJzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUFjY2Vzc29yLFxyXG59IGZyb20gJy4vU3RhdGUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBzdGFydFRyYW5zYWN0aW9uLFxyXG4gIGFwcGx5Q2hhbmdlc1xyXG59IGZyb20gJy4vU3RhdGVDaGFuZ2UnO1xyXG5cclxuZXhwb3J0IHtcclxuICBzZXR1cEV2ZW50SGFuZGxlcnNcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNldHVwRXZlbnRIYW5kbGVycyAoZWxlbWVudCkge1xyXG4gIGNvbnN0IGV2ZW50SGFuZGxlcnMgPSB7fTtcclxuICBnYXRoZXJBbGxFdmVudEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50SGFuZGxlcnMpO1xyXG5cclxuICBjb25zdCBtYXJrdXAgPSBlbGVtZW50LmVsO1xyXG4gIGZvciAobGV0IGV2ZW50TmFtZSBpbiBldmVudEhhbmRsZXJzKSB7XHJcbiAgICBtYXJrdXAuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIChlKSA9PiBleGVjdXRlQWxsQ2FsbGJhY2tzSW5MaXN0KGUsIGV2ZW50SGFuZGxlcnNbZXZlbnROYW1lXSwgZWxlbWVudCkpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2F0aGVyQWxsRXZlbnRIYW5kbGVycyAoY29tcG9uZW50LCBnYXRoZXJlZEhhbmRsZXJzKSB7XHJcbiAgZ2F0aGVyRXZlbnRIYW5kbGVycyAoY29tcG9uZW50LCBnYXRoZXJlZEhhbmRsZXJzKTtcclxuXHJcbiAgaWYgKGNvbXBvbmVudC5zdGF0ZSkge1xyXG4gICAgZm9yRWFjaChjb21wb25lbnQuc3RhdGUsIChiaW5kaW5nKSA9PiBnYXRoZXJBbGxFdmVudEhhbmRsZXJzKGJpbmRpbmcsIGdhdGhlcmVkSGFuZGxlcnMpKTtcclxuICB9XHJcblxyXG4gIGlmIChjb21wb25lbnQubGlzdEl0ZW0pIHtcclxuICAgIGdhdGhlckFsbEV2ZW50SGFuZGxlcnMoY29tcG9uZW50Lmxpc3RJdGVtLCBnYXRoZXJlZEhhbmRsZXJzKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdhdGhlckV2ZW50SGFuZGxlcnMgKGJpbmRpbmcsIGdhdGhlcmVkSGFuZGxlcnMpIHtcclxuICBpZiAoIWJpbmRpbmcuZXZlbnRzKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBldmVudE5hbWUgaW4gYmluZGluZy5ldmVudHMpIHtcclxuICAgIGlmICghZ2F0aGVyZWRIYW5kbGVyc1tldmVudE5hbWVdKSB7XHJcbiAgICAgIGdhdGhlcmVkSGFuZGxlcnNbZXZlbnROYW1lXSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGdhdGhlcmVkSGFuZGxlcnNbZXZlbnROYW1lXVtiaW5kaW5nLnNob3J0SWRdID0gYmluZGluZy5ldmVudHNbZXZlbnROYW1lXTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4ZWN1dGVBbGxDYWxsYmFja3NJbkxpc3QgKGUsIGV2ZW50SGFuZGxlcnMsIGVsZW1lbnQpIHtcclxuICBkZWNvcmF0ZUV2ZW50KGUpO1xyXG4gIHN0YXJ0VHJhbnNhY3Rpb24oKTtcclxuICBcclxuICBsZXQgY3VySFRNTE5vZGUgPSBlLnRhcmdldDtcclxuICB3aGlsZSAoY3VySFRNTE5vZGUgIT09IGVsZW1lbnQuZWwucGFyZW50Tm9kZSkge1xyXG4gICAgY29uc3QgYmluZGluZ0lkID0gY3VySFRNTE5vZGUuZ2V0QXR0cmlidXRlKExJQl9BVFRSLkJJTkRJTkdfSUQpO1xyXG4gICAgY29uc3QgZXZlbnRIYW5kbGVyID0gZXZlbnRIYW5kbGVyc1tiaW5kaW5nSWRdO1xyXG5cclxuICAgIGlmIChldmVudEhhbmRsZXIpIHtcclxuICAgICAgY29uc3QgaW5kZXhsZXNzU3RhdGVQYXRoID0gYmluZGluZ0lkLnNwbGl0KExJQl9BVFRSLlNUQVRFX0RFTElNSVRFUik7XHJcbiAgICAgIGluZGV4bGVzc1N0YXRlUGF0aC5wb3AoKTtcclxuICAgICAgY29uc3Qgc3RhdGVQYXRoVG9JdGVtID0gZ2V0U3RhdGVQYXRoVG9JdGVtKGN1ckhUTUxOb2RlLCBpbmRleGxlc3NTdGF0ZVBhdGgpO1xyXG4gICAgICBjb25zdCBhY2Nlc3NvclRvRGF0YSA9IGNyZWF0ZUFjY2Vzc29yKFtlbGVtZW50LmlkXS5jb25jYXQoc3RhdGVQYXRoVG9JdGVtKSk7XHJcblxyXG4gICAgICBldmVudEhhbmRsZXIuY2FsbCh0aGlzLCBlLCBjdXJIVE1MTm9kZSwgYWNjZXNzb3JUb0RhdGEsICtzdGF0ZVBhdGhUb0l0ZW0uc2xpY2UoLTIpWzBdKTtcclxuXHJcbiAgICAgIGlmIChlLnByb3BhZ2F0aW9uU3RvcHBlZCkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjdXJIVE1MTm9kZSA9IGN1ckhUTUxOb2RlLnBhcmVudE5vZGU7XHJcbiAgfVxyXG5cclxuICBhcHBseUNoYW5nZXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVjb3JhdGVFdmVudCAoZSkge1xyXG4gIGNvbnN0IHN0b3BQcm9wYWdhdGlvbiA9IGUuc3RvcFByb3BhZ2F0aW9uLmJpbmQoZSk7XHJcbiAgZS5zdG9wUHJvcGFnYXRpb24gPSAoKSA9PiB7XHJcbiAgICBlLnByb3BhZ2F0aW9uU3RvcHBlZCA9IHRydWU7XHJcbiAgICBzdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0YXRlUGF0aFRvSXRlbSAoZWwsIGluZGV4bGVzc1N0YXRlUGF0aCkge1xyXG4gIGNvbnN0IHN0YXRlUGF0aCA9IFtdO1xyXG5cclxuICBsZXQgZWxlbWVudE5hbWU7XHJcbiAgd2hpbGUgKChlbGVtZW50TmFtZSA9IGdldFJlYWxOYW1lKCBpbmRleGxlc3NTdGF0ZVBhdGgucG9wKCkgKSkpIHtcclxuXHJcbiAgICBpZiAoaGFzKGVsZW1lbnROYW1lLCBMSUJfQVRUUi5JVEVNKSkge1xyXG4gICAgICBlbGVtZW50TmFtZSA9IGVsZW1lbnROYW1lLnNsaWNlKExJQl9BVFRSLklURU0ubGVuZ3RoKTtcclxuICAgICAgZWwgPSBnZXRUb0l0ZW1Ob2RlKGVsKTtcclxuICAgICAgY29uc3QgaWR4ID0gZWwuZ2V0QXR0cmlidXRlKExJQl9BVFRSLklURU1fSU5ERVgpO1xyXG4gICAgICBlbCA9IGVsLnBhcmVudE5vZGU7XHJcbiAgICAgIHN0YXRlUGF0aC51bnNoaWZ0KGlkeCwgZWxlbWVudE5hbWUpO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0ZVBhdGgudW5zaGlmdChlbGVtZW50TmFtZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RhdGVQYXRoO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUb0l0ZW1Ob2RlIChlbCkge1xyXG4gIGxldCBjdXJFbCA9IGVsO1xyXG5cclxuICB3aGlsZSAoY3VyRWwudGFnTmFtZSAhPT0gJ0JPRFknKSB7XHJcbiAgICBpZiAoY3VyRWwuZ2V0QXR0cmlidXRlKExJQl9BVFRSLklURU1fSU5ERVgpKSB7XHJcbiAgICAgIHJldHVybiBjdXJFbDtcclxuICAgIH1cclxuICAgIGN1ckVsID0gY3VyRWwucGFyZW50Tm9kZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICByZXBsYWNlTm9kZXMsXHJcbiAgY29sbGVjdEhUTUxOb2RlcyxcclxufSBmcm9tICcuL2hlbHBlcnMvZG9tJ1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRDb21wb25lbnRPcHRzLFxyXG4gIGlzQ29tcG9uZW50LFxyXG59IGZyb20gJy4vRGVmaW5pdGlvbic7XHJcblxyXG5pbXBvcnQgeyBzZXR1cEV2ZW50SGFuZGxlcnMgfSBmcm9tICcuL0V2ZW50SGFuZGxlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi9TdGF0ZSc7XHJcblxyXG5leHBvcnQgeyBhcHBseSB9O1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFwcGx5IChyb290RWxlbWVudFNlbGVjdG9yKSB7XHJcbiAgY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJvb3RFbGVtZW50U2VsZWN0b3IpO1xyXG4gIGNvbnN0IEhUTUxOb2RlcyA9IGNvbGxlY3RIVE1MTm9kZXMocm9vdEVsZW1lbnQsIGlzQ29tcG9uZW50KTtcclxuXHJcbiAgSFRNTE5vZGVzLmZvckVhY2goKEhUTUxOb2RlKSA9PiB7XHJcbiAgICBjb25zdCBjb21wb25lbnRPcHRzID0gZ2V0Q29tcG9uZW50T3B0cyhIVE1MTm9kZSk7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gc2V0dXBFbGVtZW50KGNvbXBvbmVudE9wdHMpO1xyXG5cclxuICAgIHJlcGxhY2VOb2RlcyhIVE1MTm9kZSwgZWxlbWVudC5lbCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwRWxlbWVudCAoY29tcG9uZW50T3B0cykge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KGNvbXBvbmVudE9wdHMpO1xyXG4gIHNldHVwRXZlbnRIYW5kbGVycyhlbGVtZW50KTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG4iLCJpbXBvcnQgTElCX0FUVFIgZnJvbSAnLi9nbG9iYWxzL2F0dHJpYnV0ZXMnO1xyXG5cclxuaW1wb3J0IHsgZ2V0LCBzZXQsIGZvckVhY2gsIG1hcCB9IGZyb20gJy4vaGVscGVycy9vYmplY3QnO1xyXG5cclxuaW1wb3J0IHsgaGFzIH0gZnJvbSAnLi9oZWxwZXJzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBSRVNFUlZFRF9CSU5ESU5HX05BTUVTIH0gZnJvbSAnLi9EZWZpbml0aW9uJztcclxuXHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlU3RhdGVOb2RlcyxcclxuICBzZXRWYWx1ZXMsXHJcbiAgbW9kaWZ5TGlzdCxcclxuICBzdGFydFRyYW5zYWN0aW9uLFxyXG4gIHNlbmRUb1JlbmRlclF1ZXVlLFxyXG4gIGFwcGx5Q2hhbmdlcyxcclxufSBmcm9tICcuL1N0YXRlQ2hhbmdlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNBcnJheSxcclxuICBpc1N0cmluZyxcclxuICBpc051bWJlcixcclxuICBpc09iamVjdCxcclxufSBmcm9tICcuL2hlbHBlcnMvY2hlY2tlcnMnO1xyXG5cclxuZXhwb3J0IHtcclxuICBjcmVhdGVFbGVtZW50LFxyXG4gIGNyZWF0ZUFjY2Vzc29yLFxyXG4gIGdldE9ubHlWYWx1ZXMsXHJcbiAgZ2V0Q29tcG9uZW50LFxyXG4gIHNldFN0YXRlLFxyXG4gIHByZXBhcmVDaGFuZ2VPYmplY3QsXHJcbn07XHJcblxyXG5jb25zdCBFTEVNRU5UUyA9IHt9O1xyXG5jb25zdCBTVEFURSA9IHt9O1xyXG5sZXQgRUxFTUVOVF9DT1VOVEVSID0gMTtcclxuXHJcbmZ1bmN0aW9uIHNldFN0YXRlIChwYXRoLCB2YWx1ZSkge1xyXG4gIHNldChTVEFURSwgcGF0aCwgdmFsdWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdGF0ZSAocGF0aCkge1xyXG4gIHJldHVybiBnZXQoU1RBVEUsIHBhdGgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50IChjb21wb25lbnRPcHRzKSB7XHJcbiAgY29uc3QgaWQgPSBFTEVNRU5UX0NPVU5URVIrKztcclxuICBjb25zdCBuYW1lID0gY29tcG9uZW50T3B0cy5uYW1lO1xyXG5cclxuICBjb25zdCBlbGVtZW50ID0gRUxFTUVOVFNbaWRdID0ge1xyXG4gICAgaWQsXHJcbiAgICBzdGF0ZTogeyBbbmFtZV06IGNvbXBvbmVudE9wdHMuY29tcG9uZW50IH0sXHJcbiAgfTtcclxuXHJcbiAgU1RBVEVbaWRdID0ge307XHJcblxyXG4gIGNyZWF0ZVN0YXRlTm9kZXMoW2lkLCBuYW1lXSk7XHJcblxyXG4gIHNlbmRUb1JlbmRlclF1ZXVlKFtpZF0sIHsgW25hbWVdOiBmYWxzZSB9KTtcclxuICBhcHBseUNoYW5nZXMoKTtcclxuICBlbGVtZW50LmVsID0gU1RBVEVbaWRdW25hbWVdW0xJQl9BVFRSLlNFTEZdLmVsO1xyXG4gIGVsZW1lbnQuZWwuc2V0QXR0cmlidXRlKExJQl9BVFRSLkNPTVBPTkVOVF9UWVBFLCBMSUJfQVRUUi5CQVNFKTtcclxuXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFjY2Vzc29yIChwYXRoKSB7XHJcbiAgY29uc3QgdmFsdWVzID0gZ2V0U3RhdGUocGF0aCk7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gZ2V0Q29tcG9uZW50KHBhdGgpO1xyXG5cclxuICBjb25zdCBhY2Nlc3NvciA9IHtcclxuICAgIGNvbXBvbmVudCxcclxuICAgIHZhbHVlcyxcclxuICAgIHBhdGgsXHJcbiAgICBzdGFydFRyYW5zYWN0aW9uLFxyXG4gICAgYXBwbHlDaGFuZ2VzLFxyXG4gICAgdXA6IChsZXZlbCkgPT4gbW92ZVVwU3RhdGVQYXRoKGxldmVsLCBwYXRoLnNsaWNlKCkpLFxyXG4gICAgZG93bjogKGFkZGl0aW9uYWxQYXRoKSA9PiBjcmVhdGVBY2Nlc3NvcihwYXRoLmNvbmNhdChhZGRpdGlvbmFsUGF0aCkpLFxyXG4gICAgc2V0OiAoY2hhbmdlT2JqKSA9PiBzZXRWYWx1ZXMoIHByZXBhcmVDaGFuZ2VPYmplY3QoY2hhbmdlT2JqKSwgcGF0aCksXHJcbiAgICBnZXQ6IChrZXkpID0+IGdldFZhbHVlcyhhY2Nlc3Nvciwga2V5LCBwYXRoKSxcclxuICAgIG1hcmt1cDogKGtleSkgPT4ga2V5ID8gYWNjZXNzb3IudmFsdWVzW2tleV0uZWwgOiBhY2Nlc3Nvci52YWx1ZXNbTElCX0FUVFIuU0VMRl0uZWwsXHJcbiAgfVxyXG5cclxuICBpZiAoaXNBcnJheSh2YWx1ZXMpKSB7XHJcbiAgICBtb2RpZnlUb0FycmF5QWNjZXNzb3IoYWNjZXNzb3IpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGFjY2Vzc29yO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVwYXJlQ2hhbmdlT2JqZWN0IChjaGFuZ2VPYmopIHtcclxuICByZXR1cm4gbWFwKGNoYW5nZU9iaiwgKHYpID0+IHtcclxuICAgIGNvbnN0IGZvcmNlZCA9IGlzT2JqZWN0KHYpICYmIE9iamVjdC5rZXlzKHYpWzBdID09PSAnZm9yY2UnO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZhbHVlOiBmb3JjZWQgPyB2Wydmb3JjZSddIDogdixcclxuICAgICAgdHlwZTogJ3ZhbHVlJyxcclxuICAgICAgZm9yY2U6IGZvcmNlZCxcclxuICAgIH07XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvbXBvbmVudCAocGF0aCkge1xyXG4gIGxldCBjb21wb25lbnQgPSBFTEVNRU5UU1sgcGF0aFswXSBdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMTsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbXBvbmVudCA9IGNvbXBvbmVudC5zdGF0ZVsgcGF0aFtpXSBdO1xyXG4gICAgXHJcbiAgICBpZiAoY29tcG9uZW50LmlzTGlzdCAmJiBpICE9PSAocGF0aC5sZW5ndGggLTEpKSB7XHJcbiAgICAgIGNvbXBvbmVudCA9IGNvbXBvbmVudC5saXN0SXRlbTtcclxuICAgICAgaSs9MjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE9ubHlWYWx1ZXMgKG9iaikge1xyXG4gIHJldHVybiBtYXAob2JqLCAoYmluZGluZ1ZhbHVlcykgPT4gYmluZGluZ1ZhbHVlc1sndmFsdWUnXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZhbHVlcyAoYWNjZXNzb3IsIGtleSwgc3RhdGVQYXRoKSB7XHJcbiAgY29uc3QgdmFsdWVzID0gYWNjZXNzb3IudmFsdWVzO1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IGFjY2Vzc29yLmNvbXBvbmVudDtcclxuXHJcbiAgaWYgKCFrZXkpIHtcclxuICAgIHJldHVybiBnZXRWYWx1ZXNUcmVlKHZhbHVlcywgY29tcG9uZW50LCB7fSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBiaW5kaW5nID0gY29tcG9uZW50LnN0YXRlW2tleV07XHJcbiAgaWYgKGJpbmRpbmcuaXNMaXN0IHx8IGJpbmRpbmcuaXNDb21wb25lbnQpIHtcclxuICAgIHJldHVybiBjcmVhdGVBY2Nlc3NvcihzdGF0ZVBhdGguY29uY2F0KGtleSkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHZhbHVlc1trZXldLnZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWYWx1ZXNUcmVlICh2YWx1ZXMsIGNvbXBvbmVudCwgdmFsdWVzVHJlZSkge1xyXG4gIGZvckVhY2godmFsdWVzLCAodmFscywgYmluZGluZ05hbWUpID0+IHtcclxuICAgIGlmIChoYXMoUkVTRVJWRURfQklORElOR19OQU1FUywgYmluZGluZ05hbWUpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiaW5kaW5nID0gY29tcG9uZW50LnN0YXRlW2JpbmRpbmdOYW1lXTtcclxuXHJcbiAgICBpZiAoYmluZGluZy5pc0xpc3QpIHtcclxuICAgICAgdmFsdWVzVHJlZVtiaW5kaW5nTmFtZV0gPSBbXTtcclxuICAgICAgdmFsdWVzW2JpbmRpbmdOYW1lXS5mb3JFYWNoKChlbCwgaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1WYWx1ZXMgPSB2YWx1ZXNUcmVlW2JpbmRpbmdOYW1lXVtpXSA9IHt9O1xyXG4gICAgICAgIGdldFZhbHVlc1RyZWUodmFsdWVzW2JpbmRpbmdOYW1lXVtpXVtiaW5kaW5nLmxpc3RJdGVtLm5hbWVdLCBiaW5kaW5nLmxpc3RJdGVtLCBpdGVtVmFsdWVzKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYmluZGluZy5pc0NvbXBvbmVudCkge1xyXG4gICAgICBjb25zdCBjb21wb25lbnRWYWx1ZXMgPSB2YWx1ZXNUcmVlW2JpbmRpbmdOYW1lXSA9IHt9O1xyXG4gICAgICBnZXRWYWx1ZXNUcmVlKHZhbHVlc1tiaW5kaW5nTmFtZV0sIGJpbmRpbmcsIGNvbXBvbmVudFZhbHVlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWVzVHJlZVsgY29tcG9uZW50Ll9saW5rc1tiaW5kaW5nTmFtZV0gfHwgYmluZGluZ05hbWUgXSA9IHZhbHMudmFsdWU7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB2YWx1ZXNUcmVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb3ZlVXBTdGF0ZVBhdGggKGxldmVsLCBzdGF0ZVBhdGgpIHtcclxuICBsZXQgbGFzdElkeCA9IHN0YXRlUGF0aC5sZW5ndGg7XHJcblxyXG4gIGlmIChsZXZlbCA9PT0gJycpIHtcclxuICAgIHJldHVybiBjcmVhdGVBY2Nlc3NvcihzdGF0ZVBhdGguc2xpY2UoMCwgMikpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzU3RyaW5nKGxldmVsKSkge1xyXG4gICAgd2hpbGUgKGxhc3RJZHgtLSkge1xyXG4gICAgICBpZiAoc3RhdGVQYXRoW2xhc3RJZHhdID09PSBsZXZlbCkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNyZWF0ZUFjY2Vzc29yKHN0YXRlUGF0aC5zbGljZSgwLCBsYXN0SWR4ICsgMSkpO1xyXG4gIH1cclxuXHJcbiAgbGV2ZWwgPSBsZXZlbCB8fCAxO1xyXG4gIHdoaWxlIChsYXN0SWR4LS0gJiYgbGV2ZWwtLSkge1xyXG4gICAgaWYgKGlzTnVtYmVyKCtzdGF0ZVBhdGhbbGFzdElkeCAtIDFdKSkge1xyXG4gICAgICBsYXN0SWR4LS07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoLnNsaWNlKDAsIGxhc3RJZHggKyAxKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vZGlmeVRvQXJyYXlBY2Nlc3NvciAoYWNjZXNzb3IpIHtcclxuICBPYmplY3QuYXNzaWduKGFjY2Vzc29yLCB7XHJcbiAgICBnZXQ6IChudW0pID0+IGNyZWF0ZUFjY2Vzc29yKGFjY2Vzc29yLnBhdGguY29uY2F0KG51bSwgYWNjZXNzb3IuY29tcG9uZW50Lmxpc3RJdGVtLm5hbWUpKSxcclxuXHJcbiAgICBwdXNoOiAoZWxzKSA9PiBtb2RpZnlMaXN0KCdhZGQnLCB7IHN0YXJ0OiBhY2Nlc3Nvci52YWx1ZXMubGVuZ3RoLCBlbHMgfSwgYWNjZXNzb3IpLFxyXG4gICAgdW5zaGlmdDogKGVscykgPT4gbW9kaWZ5TGlzdCgnYWRkJywgeyBzdGFydDogMCwgZWxzIH0sIGFjY2Vzc29yKSxcclxuICAgIGFkZDogKHN0YXJ0LCBlbHMpID0+IG1vZGlmeUxpc3QoJ2FkZCcsIHsgc3RhcnQsIGVscyB9LCBhY2Nlc3NvciksXHJcblxyXG4gICAgcG9wOiAobnVtKSA9PiBtb2RpZnlMaXN0KCdyZW1vdmUnLCB7IHN0YXJ0OiBhY2Nlc3Nvci52YWx1ZXMubGVuZ3RoIC0gKG51bSB8fCAxKSwgbnVtIH0sIGFjY2Vzc29yKSxcclxuICAgIHNoaWZ0OiAobnVtKSA9PiBtb2RpZnlMaXN0KCdyZW1vdmUnLCB7IHN0YXJ0OiAwLCBudW0gfSwgYWNjZXNzb3IpLFxyXG4gICAgcmVtb3ZlOiAoc3RhcnQsIG51bSkgPT4gbW9kaWZ5TGlzdCgncmVtb3ZlJywgeyBzdGFydCwgbnVtIH0sIGFjY2Vzc29yKSxcclxuXHJcbiAgICBsZW5ndGg6ICgpID0+IGFjY2Vzc29yLnZhbHVlcy5sZW5ndGgsXHJcbiAgICB2YWx1ZTogKCkgPT4gbWFwTGlzdChhY2Nlc3NvciksXHJcbiAgICBmb3JFYWNoOiAoY2IpID0+IGl0ZXJhdGVMaXN0VmFsdWVzKGFjY2Vzc29yLCBjYiksXHJcbiAgICBmaWx0ZXI6IChjYikgPT4gZmlsdGVyTGlzdChhY2Nlc3NvciwgY2IpLFxyXG4gICAgbWFwOiAoY2IpID0+IG1hcExpc3QoYWNjZXNzb3IsIGNiKSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXRlcmF0ZUxpc3RWYWx1ZXMgKGFjY2Vzc29yLCBjYikge1xyXG4gIGFjY2Vzc29yLnZhbHVlcy5mb3JFYWNoKChlbCwgaSkgPT5cclxuICAgIGNiKFxyXG4gICAgICBnZXRWYWx1ZXNUcmVlKGVsW2FjY2Vzc29yLmNvbXBvbmVudC5saXN0SXRlbS5uYW1lXSwgYWNjZXNzb3IuY29tcG9uZW50Lmxpc3RJdGVtLCB7fSksXHJcbiAgICAgIGlcclxuICApKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyTGlzdCAoYWNjZXNzb3IsIGNiKSB7XHJcbiAgY29uc3QgbmV3TGlzdCA9IFtdO1xyXG5cclxuICBpdGVyYXRlTGlzdFZhbHVlcyhhY2Nlc3NvciwgKGVsLCBpKSA9PiB7XHJcbiAgICBpZiAoY2IoZWwsIGkpKSB7XHJcbiAgICAgIG5ld0xpc3QucHVzaChlbCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBuZXdMaXN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBMaXN0IChhY2Nlc3NvciwgY2IpIHtcclxuICBjb25zdCBuZXdMaXN0ID0gW107XHJcbiAgaXRlcmF0ZUxpc3RWYWx1ZXMoYWNjZXNzb3IsIChlbCwgaSkgPT4gbmV3TGlzdC5wdXNoKCBjYiA/IGNiKGVsLCBpKSA6IGVsICkpO1xyXG4gIHJldHVybiBuZXdMaXN0O1xyXG59XHJcbiIsImltcG9ydCBMSUJfQVRUUiBmcm9tICcuL2dsb2JhbHMvYXR0cmlidXRlcyc7XHJcblxyXG5pbXBvcnQgeyBzZXQsIGZvckVhY2gsIG1hcCwgdG9PYmplY3QgfSBmcm9tICcuL2hlbHBlcnMvb2JqZWN0JztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNFbXB0eSxcclxuICBpc0FycmF5LFxyXG4gIGlzT2JqZWN0LFxyXG59IGZyb20gJy4vaGVscGVycy9jaGVja2Vycyc7XHJcblxyXG5pbXBvcnQgYXJlRXF1YWwgZnJvbSAnLi9oZWxwZXJzL2VxdWFsaXR5JztcclxuaW1wb3J0IHsgaGFzIH0gZnJvbSAnLi9oZWxwZXJzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldENvbXBvbmVudCxcclxuICBjcmVhdGVBY2Nlc3NvcixcclxuICBwcmVwYXJlQ2hhbmdlT2JqZWN0LFxyXG4gIGdldE9ubHlWYWx1ZXMsXHJcbiAgc2V0U3RhdGUsXHJcbn0gZnJvbSAnLi9TdGF0ZSc7XHJcblxyXG5pbXBvcnQgeyByZW5kZXJDaGFuZ2VzIH0gZnJvbSAnLi9WaWV3JztcclxuXHJcbmltcG9ydCB7IFZBTFVFX1RZUEVTIH0gZnJvbSAnLi9EZWZpbml0aW9uJztcclxuXHJcbmltcG9ydCBCaW5kaW5nTm90RXhpc3RzRXJyb3IgZnJvbSAnLi9lcnJvcnMvQmluZGluZ05vdEV4aXN0c0Vycm9yJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgc2V0VmFsdWVzLFxyXG4gIGNyZWF0ZVN0YXRlTm9kZXMsXHJcbiAgbW9kaWZ5TGlzdCxcclxuICBzdGFydFRyYW5zYWN0aW9uLFxyXG4gIGFwcGx5Q2hhbmdlcyxcclxuICBzZW5kVG9SZW5kZXJRdWV1ZSxcclxufTtcclxuXHJcbmNvbnN0IENIQU5HRVMgPSB7IGNoYW5nZXM6IHt9LCBjb2xsZWN0aW5nOiBmYWxzZSB9O1xyXG5jb25zdCBQUk9NSVNFU19SRVNPTFZFUyA9IFtdO1xyXG5jb25zdCBMSUZFX0NZQ0xFX0hBTkRMRVJTID0geyBsaXN0OiBbXSB9O1xyXG5cclxuZnVuY3Rpb24gc3RhcnRUcmFuc2FjdGlvbiAoKSB7XHJcbiAgYXBwbHlDaGFuZ2VzKCk7XHJcbiAgQ0hBTkdFUy5jb2xsZWN0aW5nID0gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlDaGFuZ2VzICgpIHtcclxuICBjb25zdCBjaGFuZ2VzID0gQ0hBTkdFUy5jaGFuZ2VzO1xyXG4gIENIQU5HRVMuY2hhbmdlcyA9IHt9O1xyXG4gIHJlbmRlckNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgcmV0dXJuIHJ1bkxpZmVDeWNsZUhvb2tzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJ1bkxpZmVDeWNsZUhvb2tzICgpIHtcclxuICBjb25zdCBsaWZlQ3ljbGVIYW5kbGVycyA9IExJRkVfQ1lDTEVfSEFORExFUlMubGlzdDtcclxuICBMSUZFX0NZQ0xFX0hBTkRMRVJTLmxpc3QgPSBbXTtcclxuICBsaWZlQ3ljbGVIYW5kbGVycy5mb3JFYWNoKChoKSA9PiBoKCkpO1xyXG5cclxuICBpZiAoIWlzRW1wdHkoQ0hBTkdFUy5jaGFuZ2VzKSkge1xyXG4gICAgcmV0dXJuIGFwcGx5Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZpbmFsaXplVHJhbnNhY3Rpb24oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmluYWxpemVUcmFuc2FjdGlvbiAoKSB7XHJcbiAgQ0hBTkdFUy5jb2xsZWN0aW5nID0gZmFsc2U7XHJcbiAgbGV0IHJlc29sdmVQcm9taXNlO1xyXG5cclxuICB3aGlsZSAoKHJlc29sdmVQcm9taXNlID0gUFJPTUlTRVNfUkVTT0xWRVMucG9wKCkpKSB7XHJcbiAgICByZXNvbHZlUHJvbWlzZSh0cnVlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRUb1JlbmRlclF1ZXVlIChwYXRoLCBjaGFuZ2UpIHtcclxuICBzZXQoQ0hBTkdFUy5jaGFuZ2VzLCBwYXRoLCBjaGFuZ2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0NvbGxlY3RpbmdDaGFuZ2VzICgpIHtcclxuICByZXR1cm4gQ0hBTkdFUy5jb2xsZWN0aW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRMaWZlQ3ljbGVIb29rIChob29rVHlwZSwgYmluZGluZywgdmFsdWVzLCBhY2Nlc3NvciwgaWR4KSB7XHJcbiAgY29uc3QgaG9vayA9IGJpbmRpbmcuaG9va3NbaG9va1R5cGVdO1xyXG4gIFxyXG4gIExJRkVfQ1lDTEVfSEFORExFUlMubGlzdC5wdXNoKCgpID0+IHtcclxuICAgIGNvbnN0IGVsID0gdmFsdWVzW2JpbmRpbmcubmFtZSB8fCBMSUJfQVRUUi5TRUxGXS5lbDtcclxuICAgIGNvbnN0IHZhbHMgPSAhYmluZGluZy5uYW1lID8gZ2V0T25seVZhbHVlcyh2YWx1ZXMpIDogdmFsdWVzW2JpbmRpbmcubmFtZV0udmFsdWU7XHJcbiAgICBob29rKGVsLCB2YWxzLCBhY2Nlc3NvciwgaWR4KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3RhdGVOb2RlcyAoc3RhdGVQYXRoKSB7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gZ2V0Q29tcG9uZW50KHN0YXRlUGF0aCk7XHJcbiAgY29uc3QgdmFsdWVzTm9kZSA9IGNyZWF0ZVN0YXRlTm9kZShjb21wb25lbnQpO1xyXG4gIHNldFN0YXRlKHN0YXRlUGF0aCwgdmFsdWVzTm9kZSk7XHJcblxyXG4gIGZvckVhY2goY29tcG9uZW50LnN0YXRlLCAoYmluZGluZywgYmluZGluZ05hbWUpID0+IHtcclxuICAgIGlmIChiaW5kaW5nLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgIGNyZWF0ZVN0YXRlTm9kZXMoc3RhdGVQYXRoLmNvbmNhdChiaW5kaW5nTmFtZSkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBhY2Nlc3NvciA9IGNyZWF0ZUFjY2Vzc29yKHN0YXRlUGF0aCk7XHJcbiAgYWRkTGlmZUN5Y2xlSG9vaygnbW91bnQnLCBjb21wb25lbnQuc3RhdGVbTElCX0FUVFIuU0VMRl0sIHZhbHVlc05vZGUsIGFjY2Vzc29yLCBzdGF0ZVBhdGguc2xpY2UoLTIpWzBdKTtcclxuXHJcbiAgcmV0dXJuIHZhbHVlc05vZGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0YXRlTm9kZSAoY29tcG9uZW50KSB7XHJcbiAgY29uc3QgdmFsdWVzTm9kZXMgPSBtYXAoY29tcG9uZW50LnN0YXRlLCAoYmluZGluZykgPT4ge1xyXG4gICAgY29uc3QgdmFsdWVOb2RlID0gYmluZGluZy5pc0xpc3QgPyBbXSA6IHt9O1xyXG5cclxuICAgIHJldHVybiBWQUxVRV9UWVBFUy5yZWR1Y2UoKGEsIGtleSkgPT4ge1xyXG4gICAgICBsZXQgdmFsdWU7XHJcblxyXG4gICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2UgJ3ZhbHVlJzpcclxuICAgICAgICBjYXNlICdodG1sJzpcclxuICAgICAgICAgIHZhbHVlID0gYmluZGluZy5pbml0VmFsdWUgfHwgJydcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdmFsdWUgPSB7fTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYVtrZXldID0gdmFsdWU7XHJcblxyXG4gICAgICByZXR1cm4gYTtcclxuICAgIH0sIHZhbHVlTm9kZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHZhbHVlc05vZGVzLCB7IFtMSUJfQVRUUi5TRUxGXTogdG9PYmplY3QoVkFMVUVfVFlQRVMsIHt9KSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VmFsdWVzIChjaGFuZ2VWYWx1ZXMsIHN0YXRlUGF0aCwgY2FsbGVkRGVwZW5kZW5jZXMpIHtcclxuICBjYWxsZWREZXBlbmRlbmNlcyA9IGNhbGxlZERlcGVuZGVuY2VzIHx8IFtdO1xyXG4gIGNvbnN0IGFjY2Vzc29yID0gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoKTtcclxuXHJcbiAgaWYgKCFhY2Nlc3Nvci52YWx1ZXMpIHtcclxuICAgIGFjY2Vzc29yLnZhbHVlcyA9IGNyZWF0ZVN0YXRlTm9kZXMoc3RhdGVQYXRoKTtcclxuICAgIGNvbnN0IHN0YXJ0ID0gK3N0YXRlUGF0aC5zbGljZSgtMilbMF07XHJcbiAgICBzZW5kVG9SZW5kZXJRdWV1ZShzdGF0ZVBhdGgsIHsgW0xJQl9BVFRSLkZVTExfQ0hBTkdFXTogeyBhZGQ6IHsgc3RhcnQsIGVuZDogc3RhcnQgKyAxIH0gfSB9KVxyXG4gIH1cclxuXHJcbiAgZm9yRWFjaChjaGFuZ2VWYWx1ZXMsIChjaGFuZ2UsIGJpbmRpbmdOYW1lKSA9PiBzZXRWYWx1ZShiaW5kaW5nTmFtZSwgY2hhbmdlLCBhY2Nlc3NvciwgY2FsbGVkRGVwZW5kZW5jZXMpKTtcclxuXHJcbiAgYWRkTGlmZUN5Y2xlSG9vaygndXBkYXRlJywgYWNjZXNzb3IuY29tcG9uZW50LnN0YXRlW0xJQl9BVFRSLlNFTEZdLCBhY2Nlc3Nvci52YWx1ZXMsIGFjY2Vzc29yLCBzdGF0ZVBhdGguc2xpY2UoLTIpWzBdKTtcclxuXHJcbiAgaWYgKGlzQ29sbGVjdGluZ0NoYW5nZXMoKSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IFBST01JU0VTX1JFU09MVkVTLnB1c2gocmVzKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXBwbHlDaGFuZ2VzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFZhbHVlIChiaW5kaW5nTmFtZSwgY2hhbmdlLCBhY2Nlc3NvciwgY2FsbGVkRGVwZW5kZW5jZXMpIHtcclxuICBjb25zdCBzdGF0ZVBhdGggPSBhY2Nlc3Nvci5wYXRoO1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IGFjY2Vzc29yLmNvbXBvbmVudDtcclxuICBjb25zdCB2YWx1ZXMgPSBhY2Nlc3Nvci52YWx1ZXM7XHJcbiAgbGV0IGJpbmRpbmcgPSBjb21wb25lbnQuc3RhdGVbYmluZGluZ05hbWVdO1xyXG5cclxuICBpZiAoIWJpbmRpbmcpIHtcclxuICAgIGJpbmRpbmdOYW1lID0gY29tcG9uZW50Lm91dGVyTmFtZXNbYmluZGluZ05hbWVdO1xyXG4gICAgYmluZGluZyA9IGNvbXBvbmVudC5zdGF0ZVtiaW5kaW5nTmFtZV07XHJcbiAgfVxyXG5cclxuICBpZiAoIWJpbmRpbmcpIHtcclxuICAgIHRocm93IG5ldyBCaW5kaW5nTm90RXhpc3RzRXJyb3IoYmluZGluZ05hbWUsIGNvbXBvbmVudC5uYW1lLCBzdGF0ZVBhdGgpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNoYW5nZS50eXBlID09PSAndmFsdWUnKSB7XHJcbiAgICBpZiAoYmluZGluZy5pc0xpc3QpIHtcclxuICAgICAgcmV0dXJuIHNldFZhbHVlRm9yTGlzdChiaW5kaW5nLCBjaGFuZ2UsIHZhbHVlc1tiaW5kaW5nTmFtZV0sIGFjY2Vzc29yKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNPYmplY3QoY2hhbmdlLnZhbHVlKSAmJiBiaW5kaW5nLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgIHJldHVybiBzZXRWYWx1ZUZvckNvbXBvbmVudChiaW5kaW5nLCBjaGFuZ2UsIGNvbXBvbmVudCwgc3RhdGVQYXRoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGVxdWFsID0gYXJlRXF1YWwodmFsdWVzW2JpbmRpbmdOYW1lXVtjaGFuZ2UudHlwZV0sIGNoYW5nZS52YWx1ZSk7XHJcblxyXG4gIGlmICghZXF1YWwgfHwgIWlzRW1wdHkoZXF1YWwpIHx8IGNoYW5nZS5mb3JjZSkge1xyXG4gICAgdmFsdWVzW2JpbmRpbmdOYW1lXVtjaGFuZ2UudHlwZV0gPSBjaGFuZ2UudmFsdWU7XHJcblxyXG4gICAgaWYgKGNoYW5nZS50eXBlICE9PSAndmFsdWUnKSB7XHJcbiAgICAgIHJldHVybiBzZW5kVG9SZW5kZXJRdWV1ZShzdGF0ZVBhdGguY29uY2F0KGJpbmRpbmdOYW1lKSwgeyBbY2hhbmdlLnR5cGVdOiBmYWxzZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaWZlQ3ljbGVIb29rKCd1cGRhdGUnLCBiaW5kaW5nLCB2YWx1ZXMsIGFjY2Vzc29yLCBzdGF0ZVBhdGguc2xpY2UoLTIpWzBdKTtcclxuICAgIGNhbGxlZERlcGVuZGVuY2VzLnB1c2goYmluZGluZ05hbWUgKyAnOicgKyBjaGFuZ2UudHlwZSk7XHJcblxyXG4gICAgaWYgKCFiaW5kaW5nLmh0bWwpIHtcclxuICAgICAgc2V0VmFsdWUoYmluZGluZ05hbWUsIHsgdmFsdWU6IGNoYW5nZS52YWx1ZSwgdHlwZTogJ2h0bWwnLCBmb3JjZTogY2hhbmdlLmZvcmNlIH0sIGFjY2Vzc29yLCBjYWxsZWREZXBlbmRlbmNlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGluayA9IGNvbXBvbmVudC5saW5rc1tiaW5kaW5nTmFtZV07XHJcbiAgICBpZiAobGluaykge1xyXG4gICAgICBzZXRWYWx1ZShsaW5rLmxpbmssIHsgdmFsdWU6IGNoYW5nZS52YWx1ZSwgdHlwZTogJ3ZhbHVlJywgZm9yY2U6IGNoYW5nZS5mb3JjZSB9LCBhY2Nlc3Nvci5kb3duKGxpbmsuY29tcG9uZW50KSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIGZvckVhY2goYmluZGluZy5kZXBlbmRhbnRzLCAoZGVwZW5kYW50LCBkZXBlbmRhbnRLZXkpID0+IHtcclxuICAgICAgaWYgKGhhcyhjYWxsZWREZXBlbmRlbmNlcywgZGVwZW5kYW50S2V5KSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbmV3VmFsdWUgPSBjb21wb25lbnQuc3RhdGVbZGVwZW5kYW50Lm5hbWVdLmV2YWx1YXRlW2RlcGVuZGFudC50eXBlXSh2YWx1ZXMsIGFjY2Vzc29yKTtcclxuICAgICAgc2V0VmFsdWUoZGVwZW5kYW50Lm5hbWUsIHsgdmFsdWU6IG5ld1ZhbHVlLCB0eXBlOiBkZXBlbmRhbnQudHlwZSB9LCBhY2Nlc3NvciwgY2FsbGVkRGVwZW5kZW5jZXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRWYWx1ZUZvckxpc3QgKGJpbmRpbmcsIGNoYW5nZSwgYXJyLCBhY2Nlc3Nvcikge1xyXG4gIE9iamVjdFxyXG4gICAgLmtleXMoY2hhbmdlLnZhbHVlKVxyXG4gICAgLmZvckVhY2goKGkpID0+IHNldFZhbHVlcyggcHJlcGFyZUNoYW5nZU9iamVjdChjaGFuZ2UudmFsdWVbaV0pLCBhY2Nlc3Nvci5wYXRoLmNvbmNhdChiaW5kaW5nLm5hbWUsIGksIGJpbmRpbmcubGlzdEl0ZW0ubmFtZSkpKTtcclxuXHJcbiAgY29uc3QgaW5kZXhFcXVhbGl0eSA9IGFyZUVxdWFsKGFyciwgY2hhbmdlLnZhbHVlKTtcclxuICBsZXQgcmVtb3ZlZENvdW50ID0gMDtcclxuICBmb3JFYWNoKGluZGV4RXF1YWxpdHksIChjaGFuZ2VPYmosIGlkeCkgPT4ge1xyXG4gICAgaWYgKGNoYW5nZU9iai5yZW1vdmUpIHtcclxuICAgICAgY2hhbmdlT2JqLnJlbW92ZSA9IHJlbW92ZUxpc3RJdGVtKGFyciwgaWR4IC0gcmVtb3ZlZENvdW50LCBiaW5kaW5nLCBhY2Nlc3Nvcik7XHJcbiAgICAgIHJlbW92ZWRDb3VudCsrO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmRUb1JlbmRlclF1ZXVlKGFjY2Vzc29yLnBhdGguY29uY2F0KGJpbmRpbmcubmFtZSwgaWR4LCBiaW5kaW5nLmxpc3RJdGVtLm5hbWUpLCB7IFtMSUJfQVRUUi5GVUxMX0NIQU5HRV06IGNoYW5nZU9iaiB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VmFsdWVGb3JDb21wb25lbnQgKGJpbmRpbmcsIGNoYW5nZSwgY29tcG9uZW50LCBzdGF0ZVBhdGgpIHtcclxuICBzZXRWYWx1ZXMoIHByZXBhcmVDaGFuZ2VPYmplY3QoY2hhbmdlLnZhbHVlKSwgc3RhdGVQYXRoLmNvbmNhdChiaW5kaW5nLm5hbWUpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kaWZ5TGlzdCAoYWN0aW9uLCBhcmdzLCBhY2Nlc3Nvcikge1xyXG4gIGNvbnN0IGFyciA9IGFjY2Vzc29yLnZhbHVlcztcclxuICBjb25zdCBsaXN0UGF0aCA9IGFjY2Vzc29yLnBhdGg7XHJcbiAgY29uc3QgaXRlbU5hbWUgPSBhY2Nlc3Nvci5jb21wb25lbnQubGlzdEl0ZW0ubmFtZTtcclxuICBjb25zdCBzdGFydCA9IGFyZ3Muc3RhcnQ7XHJcbiAgbGV0IGNoYW5nZU9iaiA9IHt9O1xyXG5cclxuICBzd2l0Y2ggKGFjdGlvbikge1xyXG4gICAgY2FzZSAnYWRkJzpcclxuICAgICAgY2hhbmdlT2JqID0gYWRkVG9MaXN0KGFyciwgc3RhcnQsIGFyZ3MuZWxzLCBsaXN0UGF0aCwgaXRlbU5hbWUpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICdyZW1vdmUnOlxyXG4gICAgICBjb25zdCBlbmQgPSBzdGFydCArIChhcmdzLm51bSB8fCAxKTtcclxuICAgICAgY2hhbmdlT2JqID0gcmVtb3ZlRnJvbUxpc3QoYXJyLCBzdGFydCwgZW5kLCBhY2Nlc3Nvci5jb21wb25lbnQsIGFjY2Vzc29yKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG5cclxuICBmb3JFYWNoKGNoYW5nZU9iaiwgKGNoYW5nZSwgaWR4KSA9PiBzZW5kVG9SZW5kZXJRdWV1ZShsaXN0UGF0aC5jb25jYXQoaWR4LCBpdGVtTmFtZSwgTElCX0FUVFIuRlVMTF9DSEFOR0UpLCBjaGFuZ2VPYmpbaWR4XVtMSUJfQVRUUi5GVUxMX0NIQU5HRV0pKTtcclxuXHJcbiAgaWYgKGlzQ29sbGVjdGluZ0NoYW5nZXMoKSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IFBST01JU0VTX1JFU09MVkVTLnB1c2gocmVzKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXBwbHlDaGFuZ2VzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRvTGlzdCAoYXJyLCBzdGFydCwgZWxzLCBsaXN0UGF0aCwgaXRlbU5hbWUpIHtcclxuICBlbHMgPSBpc0FycmF5KGVscykgPyBlbHMgOiBbZWxzXTtcclxuXHJcbiAgZWxzLmZvckVhY2goKGVsLCBpKSA9PiB7XHJcbiAgICBhcnIuc3BsaWNlKGkgKyBzdGFydCwgMCwgbnVsbCk7XHJcbiAgICBzZXRWYWx1ZXMocHJlcGFyZUNoYW5nZU9iamVjdChlbCksIGxpc3RQYXRoLmNvbmNhdChpICsgc3RhcnQsIGl0ZW1OYW1lKSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7IFtzdGFydF06IHsgW0xJQl9BVFRSLkZVTExfQ0hBTkdFXTogeyBhZGQ6IHsgc3RhcnQsIGVuZDogc3RhcnQgKyBlbHMubGVuZ3RoIH0gfSB9IH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUZyb21MaXN0IChhcnIsIHN0YXJ0LCBlbmQsIGxpc3RCaW5kaW5nLCBhY2Nlc3Nvcikge1xyXG4gIGNvbnN0IGNoYW5nZU9iaiA9IHt9O1xyXG5cclxuICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgY29uc3QgcmVtb3ZlZERPTU5vZGUgPSByZW1vdmVMaXN0SXRlbShhcnIsIGksIGxpc3RCaW5kaW5nLCBhY2Nlc3Nvcik7XHJcbiAgICBjaGFuZ2VPYmpbaV0gPSB7IFtMSUJfQVRUUi5GVUxMX0NIQU5HRV06IHsgcmVtb3ZlOiByZW1vdmVkRE9NTm9kZSB9IH1cclxuICB9XHJcblxyXG4gIHJldHVybiBjaGFuZ2VPYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUxpc3RJdGVtIChhcnIsIGlkeCwgbGlzdEJpbmRpbmcsIGFjY2Vzc29yKSB7XHJcbiAgY29uc3QgcmVtb3ZlZE5vZGUgPSBhcnIuc3BsaWNlKGlkeCwgMSlbMF1bbGlzdEJpbmRpbmcubGlzdEl0ZW0ubmFtZV07XHJcbiAgYWRkTGlmZUN5Y2xlSG9vaygncmVtb3ZlJywgbGlzdEJpbmRpbmcubGlzdEl0ZW0uc3RhdGVbTElCX0FUVFIuU0VMRl0sIHJlbW92ZWROb2RlLCBhY2Nlc3NvciwgaWR4KTtcclxuICByZXR1cm4gcmVtb3ZlZE5vZGVbTElCX0FUVFIuU0VMRl0uZWw7XHJcbn1cclxuIiwiaW1wb3J0IExJQl9BVFRSIGZyb20gJy4vZ2xvYmFscy9hdHRyaWJ1dGVzJztcclxuaW1wb3J0IHsgdG9EYXNoQ2FzZSB9IGZyb20gJy4vaGVscGVycy9jb21tb24nO1xyXG5pbXBvcnQgeyBmb3JFYWNoLCBzcGxpdFBpZWNlIH0gZnJvbSAnLi9oZWxwZXJzL29iamVjdCc7XHJcblxyXG5pbXBvcnQgeyBpc051bWJlciwgaXNVbmRlZmluZWQgfSBmcm9tICcuL2hlbHBlcnMvY2hlY2tlcnMnO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlQWNjZXNzb3IgfSBmcm9tICcuL1N0YXRlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgcmVwbGFjZU5vZGVzLFxyXG4gIHJlbW92ZU5vZGUsXHJcbiAgcmV3cml0ZVRvTm9kZSxcclxuICBlbXB0eU5vZGUsXHJcbn0gZnJvbSAnLi9oZWxwZXJzL2RvbSc7XHJcblxyXG5leHBvcnQge1xyXG4gIGNyZWF0ZUFuZEFwcGVuZFN0eWxlcyxcclxuICByZW5kZXJDaGFuZ2VzXHJcbn07XHJcblxyXG5jb25zdCByZW5kZXIgPSB7XHJcbiAgaHRtbDogYXBwbHlNYXJrdXAsXHJcbiAgY2xhc3M6IGFwcGx5Q2xhc3NlcyxcclxuICBzdHlsZTogYXBwbHlTdHlsZXMsXHJcbiAgYXR0cnM6IGFwcGx5QXR0cmlidXRlcyxcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ2hhbmdlcyAoY2hhbmdlcykge1xyXG4gIGZvckVhY2goY2hhbmdlcywgKGNvbXBvbmVudENoYW5nZXMsIGVsZW1lbnRJZCkgPT4ge1xyXG4gICAgY29uc3QgY29tcG9uZW50SWQgPSBPYmplY3Qua2V5cyhjb21wb25lbnRDaGFuZ2VzKVswXVxyXG4gICAgY29uc3QgY29tcG9uZW50QWNjZXNzb3IgPSBjcmVhdGVBY2Nlc3NvcihbZWxlbWVudElkLCBjb21wb25lbnRJZF0pO1xyXG4gICAgYXBwbHlNYXJrdXAoY29tcG9uZW50QWNjZXNzb3IuY29tcG9uZW50LCBjb21wb25lbnRBY2Nlc3Nvci52YWx1ZXMsIFtlbGVtZW50SWQsIGNvbXBvbmVudElkXSwgY29tcG9uZW50Q2hhbmdlc1tjb21wb25lbnRJZF0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseU1hcmt1cCAoY29tcG9uZW50LCB2YWx1ZSwgc3RhdGVQYXRoLCBjaGFuZ2VzKSB7XHJcbiAgaWYgKCFjb21wb25lbnQubWFya3VwKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoY29tcG9uZW50LmlzTGlzdCkge1xyXG4gICAgcmV0dXJuIHJlbmRlckxpc3QoY29tcG9uZW50LCB2YWx1ZSwgc3RhdGVQYXRoLCBjaGFuZ2VzKTtcclxuICB9XHJcblxyXG4gIGlmIChjb21wb25lbnQuaXNDb21wb25lbnQpIHtcclxuICAgIHJldHVybiByZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCB2YWx1ZSwgc3RhdGVQYXRoLCBjaGFuZ2VzKTtcclxuICB9XHJcblxyXG4gIHZhbHVlID0gaXNVbmRlZmluZWQodmFsdWUpID8gJycgOiB2YWx1ZTtcclxuXHJcbiAgaWYgKGNvbXBvbmVudC5tYXJrdXAudGFnTmFtZSA9PT0gJ0lOUFVUJykge1xyXG4gICAgY29tcG9uZW50Lm1hcmt1cC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgcmV3cml0ZVRvTm9kZShjb21wb25lbnQubWFya3VwLCB2YWx1ZSk7XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudCAoY29tcG9uZW50LCB2YWx1ZSwgc3RhdGVQYXRoLCBjaGFuZ2VzKSB7XHJcbiAgaWYgKGNoYW5nZXMpIHtcclxuICAgIHJldHVybiB1cGRhdGVDb21wb25lbnQoY29tcG9uZW50LCB2YWx1ZSwgc3RhdGVQYXRoLCBjaGFuZ2VzKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkcmF3Q29tcG9uZW50KHZhbHVlLCBzdGF0ZVBhdGgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3Q29tcG9uZW50ICh2YWx1ZXMsIHN0YXRlUGF0aCkge1xyXG4gIGNvbnN0IGFjY2Vzc29yID0gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoKTtcclxuICBjb25zdCBjb21wb25lbnQgPSBhY2Nlc3Nvci5jb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0IGl0ZW1XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaXRlbU1hcmt1cCA9IGNvbXBvbmVudC50ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgdmFsdWVzW0xJQl9BVFRSLlNFTEZdLmVsID0gaXRlbU1hcmt1cDtcclxuICBpdGVtV3JhcHBlci5hcHBlbmRDaGlsZChpdGVtTWFya3VwKTtcclxuXHJcbiAgaXRlbU1hcmt1cC5zZXRBdHRyaWJ1dGUoTElCX0FUVFIuQ09NUE9ORU5UX1RZUEUsIChjb21wb25lbnQuaXNMaXN0SXRlbSkgPyBMSUJfQVRUUi5JVEVNIDogTElCX0FUVFIuQ09NUE9ORU5UKTtcclxuXHJcbiAgZm9yRWFjaChyZW5kZXIsIChyZW5kZXJGdW5jLCByZW5kZXJUeXBlKSA9PiB7XHJcbiAgICBpZiAoY29tcG9uZW50LnN0YXRlW0xJQl9BVFRSLlNFTEZdW3JlbmRlclR5cGVdKSB7XHJcbiAgICAgIHJlbmRlckZ1bmMoeyBtYXJrdXA6IGl0ZW1NYXJrdXAgfSwgdmFsdWVzW0xJQl9BVFRSLlNFTEZdW3JlbmRlclR5cGVdKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZm9yRWFjaChjb21wb25lbnQuc3RhdGUsIChiaW5kaW5nLCBiaW5kaW5nTmFtZSkgPT4ge1xyXG4gICAgaWYgKCFiaW5kaW5nLm1hcmt1cCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmluZGluZ05vZGUgPSBpdGVtV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuJyArIExJQl9BVFRSLlBSRUZJWCArIGJpbmRpbmcuaWQpO1xyXG4gICAgYmluZGluZ05vZGUuY2xhc3NMaXN0LnJlbW92ZShMSUJfQVRUUi5QUkVGSVggKyBiaW5kaW5nLmlkKTtcclxuXHJcbiAgICBpZiAoYmluZGluZy5pc0NvbXBvbmVudCkge1xyXG4gICAgICBjb25zdCBjaGlsZFN0YXRlUGF0aCA9IHN0YXRlUGF0aC5jb25jYXQoYmluZGluZ05hbWUpO1xyXG4gICAgICBjb25zdCBjaGlsZE1hcmt1cCA9IGRyYXdDb21wb25lbnQodmFsdWVzW2JpbmRpbmdOYW1lXSwgY2hpbGRTdGF0ZVBhdGgpO1xyXG4gICAgICByZXBsYWNlTm9kZXMoYmluZGluZ05vZGUsIGNoaWxkTWFya3VwKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlc1tiaW5kaW5nTmFtZV0uZWwgPSBiaW5kaW5nTm9kZTtcclxuXHJcbiAgICBpZiAoYmluZGluZy5pc0xpc3QpIHtcclxuICAgICAgcmVuZGVyTGlzdChiaW5kaW5nLCB2YWx1ZXNbYmluZGluZ05hbWVdLCBzdGF0ZVBhdGguY29uY2F0KGJpbmRpbmdOYW1lKSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBmb3JFYWNoKHJlbmRlciwgKHJlbmRlckZ1bmMsIHJlbmRlclR5cGUpID0+IHtcclxuICAgICAgaWYgKHJlbmRlclR5cGUgPT09ICdodG1sJyAmJiBiaW5kaW5nLmh0bWwgPT09IG51bGwgfHwgYmluZGluZy5tYXJrdXAuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHJlbmRlckZ1bmMoeyBtYXJrdXA6IGJpbmRpbmdOb2RlIH0sIHZhbHVlc1tiaW5kaW5nTmFtZV1bcmVuZGVyVHlwZV0sIHN0YXRlUGF0aCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGl0ZW1XcmFwcGVyLmNoaWxkcmVuWzBdO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDb21wb25lbnQgKGNvbXBvbmVudCwgdmFsdWVzLCBzdGF0ZVBhdGgsIGNoYW5nZXMpIHtcclxuICBjb25zdCBjb21wb25lbnRNYXJrdXAgPSB2YWx1ZXNbTElCX0FUVFIuU0VMRl0uZWw7XHJcblxyXG4gIGZvckVhY2goY2hhbmdlcywgKGNoYW5nZSwgYmluZGluZ05hbWUpID0+IHtcclxuXHJcbiAgICBpZiAoYmluZGluZ05hbWUgPT09IExJQl9BVFRSLlNFTEYpIHtcclxuXHJcbiAgICAgIGZvciAobGV0IGNoYW5nZVR5cGUgaW4gY2hhbmdlKSB7XHJcbiAgICAgICAgcmVuZGVyW2NoYW5nZVR5cGVdKHsgbWFya3VwOiBjb21wb25lbnRNYXJrdXAgfSwgdmFsdWVzW0xJQl9BVFRSLlNFTEZdW2NoYW5nZVR5cGVdKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmluZGluZyA9IGNvbXBvbmVudC5zdGF0ZVtiaW5kaW5nTmFtZV07XHJcbiAgICBjb25zdCBzdGF0ZVBhdGhUb0JpbmRpbmcgPSBzdGF0ZVBhdGguY29uY2F0KGJpbmRpbmdOYW1lKTtcclxuXHJcbiAgICBpZiAoYmluZGluZy5pc0NvbXBvbmVudCB8fCBiaW5kaW5nLmlzTGlzdCkge1xyXG4gICAgICBhcHBseU1hcmt1cChiaW5kaW5nLCB2YWx1ZXNbYmluZGluZ05hbWVdLCBzdGF0ZVBhdGhUb0JpbmRpbmcsIGNoYW5nZXNbYmluZGluZ05hbWVdKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVsID0gdmFsdWVzW2JpbmRpbmdOYW1lXS5lbFxyXG5cclxuICAgIGZvciAobGV0IGNoYW5nZVR5cGUgaW4gY2hhbmdlKSB7XHJcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWVzW2JpbmRpbmdOYW1lXVtjaGFuZ2VUeXBlXTtcclxuICAgICAgcmVuZGVyW2NoYW5nZVR5cGVdKHsgbWFya3VwOiBlbCB9LCBuZXdWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckxpc3QgKGxpc3RDb21wb25lbnQsIGl0ZW1zVmFsdWVzLCBzdGF0ZVBhdGgsIGNoYW5nZXMpIHtcclxuICBpZiAoY2hhbmdlcykge1xyXG4gICAgcmV0dXJuIHVwZGF0ZUxpc3QobGlzdENvbXBvbmVudCwgaXRlbXNWYWx1ZXMsIHN0YXRlUGF0aCwgY2hhbmdlcyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBsaXN0RnJhZ21lbnQgPSBidWlsZExpc3QobGlzdENvbXBvbmVudCwgaXRlbXNWYWx1ZXMsIHN0YXRlUGF0aCk7XHJcblxyXG4gIGNvbnN0IGxpc3ROb2RlID0gaXRlbXNWYWx1ZXMuZWw7XHJcbiAgY29uc3QgcGFyZW50Tm9kZSA9IGxpc3ROb2RlLnBhcmVudE5vZGU7XHJcbiAgY29uc3QgbmV4dE5vZGUgPSBsaXN0Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgcmVtb3ZlTm9kZShsaXN0Tm9kZSk7XHJcblxyXG4gIGNvbnN0IGlzQ29tcG9uZW50ID0gbGlzdE5vZGUuZ2V0QXR0cmlidXRlKExJQl9BVFRSLkNPTVBPTkVOVF9UWVBFKTtcclxuICBsaXN0Tm9kZS5zZXRBdHRyaWJ1dGUoTElCX0FUVFIuQ09NUE9ORU5UX1RZUEUsIExJQl9BVFRSLkxJU1QpO1xyXG4gIGlmIChpc0NvbXBvbmVudCkge1xyXG4gICAgbGlzdE5vZGUuc2V0QXR0cmlidXRlKExJQl9BVFRSLkNPTVBPTkVOVF9UWVBFLCBMSUJfQVRUUi5DT01QT05FTlRfTElTVCk7XHJcbiAgfVxyXG5cclxuICBlbXB0eU5vZGUobGlzdE5vZGUpO1xyXG4gIGxpc3ROb2RlLmFwcGVuZENoaWxkKGxpc3RGcmFnbWVudCk7XHJcblxyXG4gIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGxpc3ROb2RlLCBuZXh0Tm9kZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkTGlzdCAobGlzdENvbXBvbmVudCwgaXRlbXNWYWx1ZXMsIHN0YXRlUGF0aCwgcmFuZ2UpIHtcclxuICBjb25zdCBzdGFydCA9IHJhbmdlID8gcmFuZ2Uuc3RhcnQgOiAwO1xyXG4gIGNvbnN0IGVuZCA9IHJhbmdlID8gcmFuZ2UuZW5kIDogKGl0ZW1zVmFsdWVzLmxlbmd0aCArIDEpO1xyXG5cclxuICBjb25zdCBsaXN0RnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgaXRlbXNWYWx1ZXNcclxuICAgIC5zbGljZShzdGFydCwgZW5kKVxyXG4gICAgLmZvckVhY2goKGl0ZW1WYWx1ZSwgaXRlbUluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0l0ZW1JbmRleCA9ICtzdGFydCArIGl0ZW1JbmRleDtcclxuICAgICAgY29uc3Qgc3RhdGVQYXRoVG9JdGVtID0gc3RhdGVQYXRoLmNvbmNhdChbbmV3SXRlbUluZGV4LCBsaXN0Q29tcG9uZW50Lmxpc3RJdGVtLm5hbWVdKTtcclxuICAgICAgY29uc3QgbGlzdEl0ZW1NYXJrdXAgPSBkcmF3Q29tcG9uZW50KGl0ZW1WYWx1ZVtsaXN0Q29tcG9uZW50Lmxpc3RJdGVtLm5hbWVdLCBzdGF0ZVBhdGhUb0l0ZW0pO1xyXG5cclxuICAgICAgbGlzdEl0ZW1NYXJrdXAuc2V0QXR0cmlidXRlKExJQl9BVFRSLklURU1fSU5ERVgsIG5ld0l0ZW1JbmRleCk7XHJcblxyXG4gICAgICBsaXN0RnJhZ21lbnQuYXBwZW5kQ2hpbGQobGlzdEl0ZW1NYXJrdXApO1xyXG4gICAgfSk7XHJcblxyXG4gIHJldHVybiBsaXN0RnJhZ21lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpc3QgKGxpc3RCaW5kaW5nLCBpdGVtc1ZhbHVlcywgc3RhdGVQYXRoLCBjaGFuZ2VzKSB7XHJcbiAgY29uc3QgbGlzdE5vZGUgPSBpdGVtc1ZhbHVlcy5lbDtcclxuICBjb25zdCBpdGVtTmFtZSA9IGxpc3RCaW5kaW5nLmxpc3RJdGVtLm5hbWU7XHJcbiAgY29uc3QgaXRlbXNDaGFuZ2VzID0gc3BsaXRQaWVjZShjaGFuZ2VzLCAodiwgaykgPT4gaXNOdW1iZXIoK2spKTtcclxuICBsZXQgcmVtb3ZlZENvdW50ID0gMDtcclxuICBsZXQgZW5kID0gMDtcclxuXHJcbiAgZm9yIChsZXQgY2hhbmdlVHlwZSBpbiBjaGFuZ2VzKSB7XHJcbiAgICByZW5kZXJbY2hhbmdlVHlwZV0oeyBtYXJrdXA6IGxpc3ROb2RlIH0sIGl0ZW1zVmFsdWVzW2NoYW5nZVR5cGVdKTtcclxuICB9XHJcblxyXG4gIGZvckVhY2goaXRlbXNDaGFuZ2VzLCAoY2hhbmdlLCBpKSA9PiB7XHJcbiAgICBjaGFuZ2UgPSBjaGFuZ2VbaXRlbU5hbWVdO1xyXG4gICAgY29uc3Qgc3RhdGVQYXRoVG9JdGVtID0gc3RhdGVQYXRoLmNvbmNhdChpLCBpdGVtTmFtZSk7XHJcbiAgICBjb25zdCBpdGVtQWNjZXNzb3IgPSBjcmVhdGVBY2Nlc3NvcihzdGF0ZVBhdGhUb0l0ZW0pO1xyXG5cclxuICAgIGlmICghY2hhbmdlW0xJQl9BVFRSLkZVTExfQ0hBTkdFXSkge1xyXG4gICAgICB1cGRhdGVDb21wb25lbnQoaXRlbUFjY2Vzc29yLmNvbXBvbmVudCwgaXRlbXNWYWx1ZXNbaV1baXRlbU5hbWVdLCBzdGF0ZVBhdGhUb0l0ZW0sIGNoYW5nZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlW0xJQl9BVFRSLkZVTExfQ0hBTkdFXS5hZGQgJiYgaSA+PSBlbmQpIHtcclxuICAgICAgY29uc3Qgc3RhcnQgPSBjaGFuZ2VbTElCX0FUVFIuRlVMTF9DSEFOR0VdLmFkZC5zdGFydDtcclxuICAgICAgZW5kID0gY2hhbmdlW0xJQl9BVFRSLkZVTExfQ0hBTkdFXS5hZGQuZW5kO1xyXG5cclxuICAgICAgZml4SW5kZXhlcyhsaXN0Tm9kZSwgc3RhcnQsIGVuZCAtIHN0YXJ0KTtcclxuICAgICAgY29uc3QgbGlzdEZyYWdtZW50ID0gYnVpbGRMaXN0KGxpc3RCaW5kaW5nLCBpdGVtc1ZhbHVlcywgc3RhdGVQYXRoLCB7IHN0YXJ0LCBlbmQgfSk7XHJcblxyXG4gICAgICBpZiAoZW5kID09PSBpdGVtc1ZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICBsaXN0Tm9kZS5hcHBlbmRDaGlsZChsaXN0RnJhZ21lbnQpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGlzdE5vZGUuaW5zZXJ0QmVmb3JlKGxpc3RGcmFnbWVudCwgbGlzdE5vZGUuY2hpbGRyZW5bc3RhcnRdKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VbTElCX0FUVFIuRlVMTF9DSEFOR0VdLnJlbW92ZSkge1xyXG4gICAgICByZW1vdmVOb2RlKGNoYW5nZVtMSUJfQVRUUi5GVUxMX0NIQU5HRV0ucmVtb3ZlKTtcclxuICAgICAgZml4SW5kZXhlcyhsaXN0Tm9kZSwgaSAtIHJlbW92ZWRDb3VudCsrLCAtMSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpeEluZGV4ZXMgKGxpc3ROb2RlLCBzdGFydCwgZGlmZikge1xyXG4gIGNvbnN0IGl0ZW1zTm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChsaXN0Tm9kZS5jaGlsZHJlbiwgc3RhcnQpO1xyXG5cclxuICBpdGVtc05vZGVzLmZvckVhY2goKGl0ZW1Ob2RlKSA9PiB7XHJcbiAgICBjb25zdCBwcmV2SWR4ID0gaXRlbU5vZGUuZ2V0QXR0cmlidXRlKExJQl9BVFRSLklURU1fSU5ERVgpO1xyXG4gICAgY29uc3QgbmV3SWR4ID0gK3ByZXZJZHggKyBkaWZmO1xyXG5cclxuICAgIGl0ZW1Ob2RlLnNldEF0dHJpYnV0ZShMSUJfQVRUUi5JVEVNX0lOREVYLCBuZXdJZHgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseUF0dHJpYnV0ZXMgKGJpbmRpbmcsIGF0dHJpYnV0ZXMpIHtcclxuICBPYmplY3QuYXNzaWduKGJpbmRpbmcubWFya3VwLCBhdHRyaWJ1dGVzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlDbGFzc2VzIChiaW5kaW5nLCBjbGFzc2VzKSB7XHJcbiAgZm9yIChsZXQgY2xhc3NOYW1lIGluIGNsYXNzZXMpIHtcclxuICAgIGlmIChjbGFzc05hbWUpIHtcclxuICAgICAgaWYgKGNsYXNzZXNbY2xhc3NOYW1lXSkge1xyXG4gICAgICAgIGJpbmRpbmcubWFya3VwLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBiaW5kaW5nLm1hcmt1cC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5U3R5bGVzIChiaW5kaW5nLCBzdHlsZXMpIHtcclxuICBPYmplY3QuYXNzaWduKCBiaW5kaW5nLm1hcmt1cC5zdHlsZSwgbm9ybWFsaXplU3R5bGVzKHN0eWxlcykgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQW5kQXBwZW5kU3R5bGVzIChzdHlsZU9iaikge1xyXG4gIGxldCBzdHlsZVN0ciA9ICcnO1xyXG4gIGZvciAobGV0IHNlbGVjdG9yIGluIHN0eWxlT2JqKSB7XHJcbiAgICBjb25zdCBzdHlsZXMgPSBzdHlsZU9ialtzZWxlY3Rvcl07XHJcbiAgICBzdHlsZVN0ciArPSBzZWxlY3RvciArICd7JztcclxuICAgIG5vcm1hbGl6ZVN0eWxlcyhzdHlsZXMpXHJcbiAgICBmb3IgKGxldCBhdHRyIGluIHN0eWxlcykge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlc1thdHRyXTtcclxuICAgICAgc3R5bGVTdHIgKz0gdG9EYXNoQ2FzZShhdHRyKSArICc6JyArIHZhbHVlICsgJzsnO1xyXG4gICAgfVxyXG4gICAgc3R5bGVTdHIgKz0gJ31cXG4nO1xyXG4gIH1cclxuICBjb25zdCBzdHlsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICBzdHlsZUVsLmFwcGVuZENoaWxkKCBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHlsZVN0cikgKTtcclxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlRWwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVTdHlsZXMgKHN0eWxlcykge1xyXG4gIGZvciAobGV0IGF0dHIgaW4gc3R5bGVzKSB7XHJcbiAgICBpZiAoaXNOdW1iZXIoc3R5bGVzW2F0dHJdKSkge1xyXG4gICAgICBzdHlsZXNbYXR0cl0gPSBzdHlsZXNbYXR0cl0gKyAncHgnO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gc3R5bGVzO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpbmRpbmdOb3RFeGlzdHNFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICBjb25zdHJ1Y3RvciAoYmluZGluZ05hbWUsIGNvbXBvbmVudE5hbWUsIHBhdGgpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBcIlVuYWJsZSB0byBhY2Nlc3MgJ1wiICsgYmluZGluZ05hbWUgKyBcIicgYmluZGluZyBvbiAnXCIgKyBjb21wb25lbnROYW1lICsgXCInIGNvbXBvbmVudCBvbiBwYXRoIChcIiArIHBhdGguam9pbignIC0+ICcpICsgXCIpIGJlY2F1c2UgaXQgZG9lc24ndCBleGlzdC5cIlxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRSZWRlZmluZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yIChuYW1lKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gXCJUcnlpbmcgdG8gcmVkZWZpbmUgZXhpc3RpbmcgY29tcG9uZW50OiAnXCIgKyBuYW1lICsgXCInXCI7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3BlTmFtZUNvbGxpc2lvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yIChuYW1lKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gXCJUcnlpbmcgdG8gYXNzaWduIGEgbmFtZSAnXCIgKyBuYW1lICsgXCInIHRvIGEgc3RhdGUgdGhhdCBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgY2hhaW4uXCI7XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IExJQl9OQU1FID0gJ3gnO1xyXG5jb25zdCBBVFRSX1BSRUZJWCA9ICdkYXRhLSc7XHJcbmNvbnN0IFBSRUZJWCA9IExJQl9OQU1FICsgJy0nO1xyXG5jb25zdCBURU1QTEFURV9CSU5ESU5HID0gUFJFRklYICsgJ2InO1xyXG5jb25zdCBURU1QTEFURV9MSVNUX0JJTkRJTkcgPSBQUkVGSVggKyAnbGInO1xyXG5jb25zdCBCSU5ESU5HX0lEID0gQVRUUl9QUkVGSVggKyBQUkVGSVggKyAnaWQnO1xyXG5jb25zdCBTVEFURV9QQVRIID0gUFJFRklYICsgJ3NwYXRoJztcclxuY29uc3QgVEVNUExBVEVfUExBQ0VNRU5UID0gUFJFRklYICsgJ2VsJztcclxuY29uc3QgU1RBVEVfTkFNRSA9IFBSRUZJWCArICdzdGF0ZS1uYW1lJztcclxuY29uc3QgU0NPUEVfUFJFRklYID0gJ3MnO1xyXG5jb25zdCBJVEVNX0lOREVYID0gQVRUUl9QUkVGSVggKyBQUkVGSVggKyAnZHgnO1xyXG5jb25zdCBDT01QT05FTlRfVFlQRSA9IEFUVFJfUFJFRklYICsgUFJFRklYICsgJ3RwJztcclxuY29uc3QgSVRFTV9TVUZGSVggPSAnaSc7XHJcbmNvbnN0IFNUQVRFX0RFTElNSVRFUiA9ICctJztcclxuY29uc3QgU0VMRiA9ICcnO1xyXG5jb25zdCBGVUxMX0NIQU5HRSA9ICcgX2Z1bGxfY2hhbmdlXyAnO1xyXG5cclxuY29uc3QgQkFTRSA9ICcxJztcclxuY29uc3QgQ09NUE9ORU5UID0gJzInO1xyXG5jb25zdCBMSVNUID0gJzMnO1xyXG5jb25zdCBJVEVNID0gJ19pdGVtXyc7XHJcbmNvbnN0IENPTVBPTkVOVF9MSVNUID0gJzUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIFBSRUZJWCxcclxuICBURU1QTEFURV9CSU5ESU5HLFxyXG4gIFRFTVBMQVRFX0xJU1RfQklORElORyxcclxuICBCSU5ESU5HX0lELFxyXG4gIFNUQVRFX1BBVEgsXHJcbiAgVEVNUExBVEVfUExBQ0VNRU5ULFxyXG4gIFNUQVRFX05BTUUsXHJcbiAgU0NPUEVfUFJFRklYLFxyXG4gIElURU1fSU5ERVgsXHJcbiAgQ09NUE9ORU5UX1RZUEUsXHJcbiAgSVRFTV9TVUZGSVgsXHJcbiAgU1RBVEVfREVMSU1JVEVSLFxyXG4gIEJBU0UsXHJcbiAgQ09NUE9ORU5ULFxyXG4gIExJU1QsXHJcbiAgSVRFTSxcclxuICBTRUxGLFxyXG4gIEZVTExfQ0hBTkdFLFxyXG4gIENPTVBPTkVOVF9MSVNUXHJcbn07XHJcbiIsImNvbnN0IFNUUklQX0NPTU1FTlRTID0gLyhcXC9cXC8uKiQpfChcXC9cXCpbXFxzXFxTXSo/XFwqXFwvKXwoXFxzKj1bXiwpXSooKCcoPzpcXFxcJ3xbXidcXHJcXG5dKSonKXwoXCIoPzpcXFxcXCJ8W15cIlxcclxcbl0pKlwiKSl8KFxccyo9W14sKV0qKSkvbWc7XHJcbmNvbnN0IEFSR1VNRU5UX05BTUVTID0gLyhbXlxccyxdKykvZztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBTVFJJUF9DT01NRU5UUyxcclxuICBBUkdVTUVOVF9OQU1FUyxcclxufTtcclxuIiwiZXhwb3J0IHtcclxuICBpc0Z1bmN0aW9uLFxyXG4gIGlzQXJyYXksXHJcbiAgaXNPYmplY3QsXHJcbiAgaXNPYmplY3RJbkJyYWNrZXRzLFxyXG4gIGlzT2JqZWN0SW5Eb3VibGVCcmFja2V0cyxcclxuICBpc1N0cmluZyxcclxuICBpc0hUTUxTdHJpbmcsXHJcbiAgaXNOdW1iZXIsXHJcbiAgaXNET01FbGVtZW50LFxyXG4gIGlzVW5kZWZpbmVkLFxyXG4gIGlzRW1wdHksXHJcbiAgaXNMaW5rLFxyXG59O1xyXG5cclxuXHJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XHJcbiAgcmV0dXJuIGdldE9iamVjdFR5cGUob2JqKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNBcnJheSAob2JqKSB7XHJcbiAgcmV0dXJuIGdldE9iamVjdFR5cGUob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNPYmplY3QgKG9iaikge1xyXG4gIHJldHVybiBnZXRPYmplY3RUeXBlKG9iaikgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc09iamVjdEluQnJhY2tldHMgKG9iaikge1xyXG4gIHJldHVybiBpc0FycmF5KG9iaikgJiYgb2JqLmxlbmd0aCA9PT0gMSAmJiBpc09iamVjdChvYmpbMF0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc09iamVjdEluRG91YmxlQnJhY2tldHMgKG9iaikge1xyXG4gIHJldHVybiBpc0FycmF5KG9iaikgJiYgb2JqLmxlbmd0aCA9PT0gMSAmJiBpc09iamVjdEluQnJhY2tldHMob2JqWzBdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNTdHJpbmcgKG9iaikge1xyXG4gIHJldHVybiBnZXRPYmplY3RUeXBlKG9iaikgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0hUTUxTdHJpbmcgKG9iaikge1xyXG4gIHJldHVybiBpc1N0cmluZyhvYmopICYmIG9iai5pbmRleE9mKCc8JykgPT09IDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTnVtYmVyIChvYmopIHtcclxuICByZXR1cm4gZ2V0T2JqZWN0VHlwZShvYmopID09PSAnW29iamVjdCBOdW1iZXJdJyAmJiBvYmogPT09IG9iajtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNET01FbGVtZW50IChvYmopIHtcclxuICByZXR1cm4gb2JqICYmIHR5cGVvZiBvYmoudGFnTmFtZSAhPT0gJ3VuZGVmaW5lZCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVW5kZWZpbmVkIChvYmopIHtcclxuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE9iamVjdFR5cGUgKG9iaikge1xyXG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNMaW5rIChvYmopIHtcclxuICBjb25zdCBzbGFzaElkeCA9IG9iai5pbmRleE9mKCcvJyk7XHJcbiAgcmV0dXJuIFswLCAxLCAyXS5zb21lKChpZHgpID0+IGlkeCA9PT0gc2xhc2hJZHgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0VtcHR5IChvYmopIHtcclxuICBpZiAoIW9iaikge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNBcnJheShvYmopIHx8IGlzU3RyaW5nKG9iaikpIHtcclxuICAgIHJldHVybiAhb2JqLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIHJldHVybiAhT2JqZWN0LmtleXMob2JqKS5sZW5ndGg7XHJcbn1cclxuIiwiaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuL2NoZWNrZXJzJztcclxuaW1wb3J0IHsgc2V0IH0gZnJvbSAnLi9vYmplY3QnO1xyXG5cclxuZXhwb3J0IHtcclxuICBoYXMsXHJcbiAgZ2V0RmFsc2VQYXRocyxcclxuICB0b0Rhc2hDYXNlLFxyXG4gIHRvQ2FtZWxDYXNlLFxyXG4gIGdldFNob3J0TmFtZSxcclxuICBnZXRSZWFsTmFtZSxcclxufTtcclxuXHJcbmNvbnN0IE5BTUVTID0ge1xyXG4gIHJlYWw6IHt9LFxyXG4gIHNob3J0OiBbXVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0U2hvcnROYW1lIChuYW1lKSB7XHJcbiAgaWYgKE5BTUVTLnJlYWxbbmFtZV0pIHtcclxuICAgIHJldHVybiBOQU1FUy5yZWFsW25hbWVdO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2hvcnROYW1lID0gTkFNRVMuc2hvcnQucHVzaChuYW1lKTtcclxuICByZXR1cm4gTkFNRVMucmVhbFtuYW1lXSA9IHNob3J0TmFtZSAtIDE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJlYWxOYW1lIChudW0pIHtcclxuICByZXR1cm4gTkFNRVMuc2hvcnRbbnVtXTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzIChvYmosIGVsKSB7XHJcbiAgaWYgKGlzT2JqZWN0KG9iaikpIHtcclxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xyXG4gICAgcmV0dXJuIGhhcyhrZXlzLCBlbCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gb2JqLmluZGV4T2YoZWwpID49IDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZhbHNlUGF0aHMgKG9iaikge1xyXG4gIGNvbnN0IG9ubHlGYWxzZVBhdGhzID0ge307XHJcbiAgZ2V0RmFsc2VQYXRoKG9iaiwgb25seUZhbHNlUGF0aHMsIFtdKTtcclxuICByZXR1cm4gb25seUZhbHNlUGF0aHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZhbHNlUGF0aCAob2JqLCBvbmx5RmFsc2VQYXRocywgcGF0aCkge1xyXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcclxuICAgIGlmIChpc09iamVjdChvYmpba2V5XSkpIHtcclxuICAgICAgZ2V0RmFsc2VQYXRoKG9ialtrZXldLCBvbmx5RmFsc2VQYXRocywgcGF0aC5jb25jYXQoa2V5KSk7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvYmpba2V5XSAhPT0gdHJ1ZSkge1xyXG4gICAgICBzZXQob25seUZhbHNlUGF0aHMsIHBhdGguY29uY2F0KGtleSksIG9ialtrZXldKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvRGFzaENhc2UgKHN0cikge1xyXG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAobWF0Y2gpID0+ICctJyArIG1hdGNoWzBdLnRvTG93ZXJDYXNlKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b0NhbWVsQ2FzZSAoc3RyKSB7XHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8tKC4pL2csIChtYXRjaCkgPT4gbWF0Y2hbMV0udG9VcHBlckNhc2UoKSk7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBpc1VuZGVmaW5lZCxcclxuICBpc0FycmF5LFxyXG4gIGlzRE9NRWxlbWVudCxcclxuICBpc09iamVjdCxcclxufSBmcm9tICcuL2NoZWNrZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvcHk7XHJcblxyXG5mdW5jdGlvbiBjb3B5IChkZXN0aW5hdGlvbiwgc291cmNlKSB7XHJcbiAgaWYgKCFkZXN0aW5hdGlvbikge1xyXG4gICAgcmV0dXJuIGNvcHkgKHt9LCBzb3VyY2UpO1xyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQga2V5IGluIHNvdXJjZSkge1xyXG5cclxuICAgIGlmIChpc1VuZGVmaW5lZChzb3VyY2Vba2V5XSkpIHtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xyXG4gICAgICBpZiAoIWRlc3RpbmF0aW9uW2tleV0pIHtcclxuICAgICAgICBkZXN0aW5hdGlvbltrZXldID0ge307XHJcbiAgICAgIH1cclxuICAgICAgY29weShkZXN0aW5hdGlvbltrZXldLCBzb3VyY2Vba2V5XSk7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0FycmF5KHNvdXJjZVtrZXldKSkge1xyXG4gICAgICBpZiAoIWRlc3RpbmF0aW9uW2tleV0pIHtcclxuICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gW107XHJcbiAgICAgIH1cclxuICAgICAgY29weUFycmF5KGRlc3RpbmF0aW9uW2tleV0sIHNvdXJjZVtrZXldKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzRE9NRWxlbWVudChzb3VyY2Vba2V5XSkpIHtcclxuICAgICAgZGVzdGluYXRpb25ba2V5XSA9IHNvdXJjZVtrZXldLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdGluYXRpb25ba2V5XSA9IHNvdXJjZVtrZXldO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRlc3RpbmF0aW9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb3B5QXJyYXkgKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNvdXJjZS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtpXSkpIHtcclxuICAgICAgZGVzdGluYXRpb25baV0gPSBkZXN0aW5hdGlvbltpXSB8fCB7fTtcclxuICAgICAgY29weShkZXN0aW5hdGlvbltpXSwgc291cmNlW2ldKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzQXJyYXkoc291cmNlW2ldKSkge1xyXG4gICAgICBkZXN0aW5hdGlvbltpXSA9IGRlc3RpbmF0aW9uW2ldIHx8IFtdO1xyXG4gICAgICBjb3B5QXJyYXkoZGVzdGluYXRpb25baV0sIHNvdXJjZVtpXSk7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3RpbmF0aW9uW2ldID0gc291cmNlW2ldO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRlc3RpbmF0aW9uO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgaXNIVE1MU3RyaW5nLFxyXG59IGZyb20gJy4vY2hlY2tlcnMnO1xyXG5cclxuZXhwb3J0IHtcclxuICByZXBsYWNlTm9kZXMsXHJcbiAgY2xvbmVIVE1MTWFya3VwLFxyXG4gIGNvbGxlY3RIVE1MTm9kZXMsXHJcbiAgd2Fsa05vZGVzLFxyXG4gIHJlbW92ZU5vZGUsXHJcbiAgaW5zZXJ0QmVmb3JlTm9kZSxcclxuICByZXdyaXRlVG9Ob2RlLFxyXG4gIGVtcHR5Tm9kZSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlcGxhY2VOb2RlcyAob3JpZ2luYWwsIHJlcGxhY2VtZW50KSB7XHJcbiAgb3JpZ2luYWwucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQocmVwbGFjZW1lbnQsIG9yaWdpbmFsKTtcclxuICByZXR1cm4gcmVwbGFjZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydEJlZm9yZU5vZGUgKGVsLCBuZXh0RWwpIHtcclxuICBuZXh0RWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWwsIG5leHRFbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb25lSFRNTE1hcmt1cCAobWFya3VwKSB7XHJcbiAgY29uc3QgbWFya3VwU3RyID0gaXNIVE1MU3RyaW5nKG1hcmt1cC50cmltKCkpID8gbWFya3VwIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtYXJrdXApLmlubmVySFRNTDtcclxuICByZXR1cm4gY29udmVydFN0cmluZ1RvSFRNTChtYXJrdXBTdHIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0U3RyaW5nVG9IVE1MIChtYXJrdXBTdHJpbmcpIHtcclxuICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XHJcbiAgY29uc3QgcGFyc2VkRG9jdW1lbnQgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKG1hcmt1cFN0cmluZywgJ3RleHQvaHRtbCcpO1xyXG4gIHJldHVybiBwYXJzZWREb2N1bWVudC5ib2R5LmZpcnN0RWxlbWVudENoaWxkO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3YWxrTm9kZXMgKG5vZGUsIGNiKSB7XHJcbiAgaWYgKCBjYihub2RlKSA9PT0gLTEpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEFycmF5LnByb3RvdHlwZVxyXG4gICAgLnNsaWNlXHJcbiAgICAuY2FsbChub2RlLmNoaWxkcmVuKVxyXG4gICAgLmZvckVhY2goKGVsKSA9PiB3YWxrTm9kZXMoZWwsIGNiKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbGxlY3RIVE1MTm9kZXMgKHJvb3QsIGlzV2FudGVkKSB7XHJcbiAgY29uc3Qgbm9kZXMgPSBbXTtcclxuICB3YWxrTm9kZXMocm9vdCwgKGVsKSA9PiBpc1dhbnRlZChlbCkgPyBub2Rlcy5wdXNoKGVsKSA6ICcnKTtcclxuICByZXR1cm4gbm9kZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZU5vZGUgKG5vZGUpIHtcclxuICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJld3JpdGVUb05vZGUgKG5vZGUsIHRleHQpIHtcclxuICBlbXB0eU5vZGUobm9kZSk7XHJcbiAgd3JpdGVUb05vZGUobm9kZSwgdGV4dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyaXRlVG9Ob2RlIChub2RlLCB0ZXh0KSB7XHJcbiAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTtcclxuICBub2RlLmFwcGVuZENoaWxkKHRleHROb2RlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZW1wdHlOb2RlIChub2RlKSB7XHJcbiAgd2hpbGUgKG5vZGUuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgaXNBcnJheSxcclxuICBpc09iamVjdCxcclxuICBpc1VuZGVmaW5lZCxcclxufSBmcm9tICcuL2NoZWNrZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFyZUVxdWFsO1xyXG5cclxuZnVuY3Rpb24gYXJlRXF1YWwgKGZpcnN0LCBzZWNvbmQpIHtcclxuICBpZiAoaXNVbmRlZmluZWQoZmlyc3QpIHx8IGlzVW5kZWZpbmVkKHNlY29uZCkpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgZmlyc3QgIT09IHR5cGVvZiBzZWNvbmQpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBhcmVudE5vZGUgPSB7IGNoaWxkTm9kZToge30gfTtcclxuXHJcbiAgaWYgKGlzQXJyYXkoc2Vjb25kKSkge1xyXG4gICAgY2hlY2tLZXlzRXF1YWxpdHkoXHJcbiAgICAgIGZpcnN0ID8gZmlyc3QubWFwKGVsID0+IGVsKSA6IFtdLFxyXG4gICAgICBzZWNvbmQubWFwKGVsID0+IGVsKSxcclxuICAgICAgcGFyZW50Tm9kZVxyXG4gICAgKTtcclxuXHJcbiAgfSBlbHNlIGlmIChpc09iamVjdChzZWNvbmQpKSB7XHJcbiAgICBjaGVja0tleXNFcXVhbGl0eShmaXJzdCwgc2Vjb25kLCBwYXJlbnROb2RlKTtcclxuXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmaXJzdCA9PT0gc2Vjb25kO1xyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiBwYXJlbnROb2RlLmNoaWxkTm9kZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tLZXlzRXF1YWxpdHkgKGZpcnN0LCBzZWNvbmQsIHBhcmVudE5vZGUpIHtcclxuICBmb3IgKGxldCBrZXkgaW4gc2Vjb25kKSB7XHJcblxyXG4gICAgaWYgKGlzQXJyYXkoZmlyc3QpKSB7XHJcbiAgICAgIGlmIChpc1VuZGVmaW5lZChmaXJzdFtrZXldKSkge1xyXG4gICAgICAgIHBhcmVudE5vZGUuY2hpbGROb2RlW2tleV0gPSB7IGFkZDogdHJ1ZSB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaXJzdFtrZXldICE9PSBzZWNvbmRba2V5XSkge1xyXG4gICAgICBwYXJlbnROb2RlLmNoaWxkTm9kZVtrZXldID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBrZXkgaW4gZmlyc3QpIHtcclxuXHJcbiAgICBpZiAoaXNBcnJheShmaXJzdCkpIHtcclxuICAgICAgaWYgKGlzVW5kZWZpbmVkKHNlY29uZFtrZXldKSkge1xyXG4gICAgICAgIHBhcmVudE5vZGUuY2hpbGROb2RlW2tleV0gPSB7IHJlbW92ZTogdHJ1ZSB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaXJzdFtrZXldICE9PSBzZWNvbmRba2V5XSkge1xyXG4gICAgICBwYXJlbnROb2RlLmNoaWxkTm9kZVtrZXldID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGFyZW50Tm9kZTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGlzT2JqZWN0LFxyXG4gIGlzRnVuY3Rpb24sXHJcbn0gZnJvbSAnLi9jaGVja2Vycyc7XHJcblxyXG5leHBvcnQge1xyXG4gIGdldCxcclxuICBzZXQsXHJcbiAgcmVtb3ZlLFxyXG4gIGFkZENvbnN0RmllbGRzLFxyXG4gIGZvckVhY2gsXHJcbiAgbWFwLFxyXG4gIG1hcEtleXMsXHJcbiAgZmlsdGVyLFxyXG4gIHRvT2JqZWN0LFxyXG4gIGZ1bGxNYXAsXHJcbiAgc3BsaXRQaWVjZSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldCAob2JqLCBwYXRoKSB7XHJcbiAgbGV0IHZhbHVlID0gb2JqO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIHZhbHVlID0gdmFsdWVbcGF0aFtpXV07XHJcblxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldCAob2JqLCBwYXRoLCB2YWx1ZSkge1xyXG4gIGlmICghcGF0aC5sZW5ndGgpIHtcclxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ob2JqLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBsZXQgZGVzdCA9IG9iajtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICBpZiAoIWRlc3RbIHBhdGhbaV0gXSkge1xyXG4gICAgICBkZXN0ID0gZGVzdFtwYXRoW2ldXSA9IHt9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVzdCA9IGRlc3RbcGF0aFtpXV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICBkZXN0WyBwYXRoW2ldIF0gPSBkZXN0WyBwYXRoW2ldIF0gfHwge307XHJcbiAgICBPYmplY3QuYXNzaWduKGRlc3RbIHBhdGhbaV0gXSwgdmFsdWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkZXN0WyBwYXRoW2ldIF0gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZSAob2JqLCBwYXRoKSB7XHJcbiAgbGV0IHZhbHVlID0gb2JqO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgIHZhbHVlID0gdmFsdWVbcGF0aFtpXV07XHJcbiAgfVxyXG5cclxuICBkZWxldGUgdmFsdWVbcGF0aFtpXV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbnN0RmllbGRzIChvYmosIGZpZWxkcykge1xyXG4gIGZvciAobGV0IGZpZWxkIGluIGZpZWxkcykge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgZmllbGQsIHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBmaWVsZHNbZmllbGRdIH0sXHJcbiAgICAgIHNldDogZnVuY3Rpb24gKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJUcnlpbmcgdG8gcmVkZWZpbmUgY29uc3QgZmllbGQgJ1wiICsgZmllbGQgKyBcIidcIikgfSxcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JFYWNoIChvYmosIGNiKSB7XHJcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xyXG4gICAgY29uc3QgcHJvcCA9IG9ialtrZXldO1xyXG4gICAgY2IocHJvcCwga2V5LCBvYmopO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFwKG9iaiwgY2IpIHtcclxuICBjb25zdCBuZXdPYmogPSB7fVxyXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcclxuICAgIGNvbnN0IHByb3AgPSBvYmpba2V5XTtcclxuICAgIG5ld09ialtrZXldID0gY2IocHJvcCwga2V5LCBvYmopO1xyXG4gIH1cclxuICByZXR1cm4gbmV3T2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBLZXlzIChvYmosIGNiKSB7XHJcbiAgY29uc3QgbmV3T2JqID0ge31cclxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICBjb25zdCBwcm9wID0gb2JqW2tleV07XHJcbiAgICBjb25zdCBuZXdLZXkgPSBjYihrZXksIHByb3AsIG9iaik7XHJcbiAgICBuZXdPYmpbbmV3S2V5XSA9IHByb3A7XHJcbiAgfVxyXG4gIHJldHVybiBuZXdPYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNwbGl0UGllY2UgKG9iaiwgY2IpIHtcclxuICBjb25zdCBuZXdPYmogPSB7fVxyXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcclxuICAgIGNvbnN0IHByb3AgPSBvYmpba2V5XTtcclxuICAgIGlmICggY2IocHJvcCwga2V5LCBvYmopICkge1xyXG4gICAgICBuZXdPYmpba2V5XSA9IHByb3A7XHJcbiAgICAgIGRlbGV0ZSBvYmpba2V5XTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG5ld09iajtcclxufVxyXG5cclxuZnVuY3Rpb24gZnVsbE1hcCAob2JqLCBjYikge1xyXG4gIGNvbnN0IG5ld09iaiA9IHt9XHJcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xyXG4gICAgY29uc3QgcHJvcCA9IG9ialtrZXldO1xyXG4gICAgY29uc3QgcmVzID0gY2Ioa2V5LCBwcm9wLCBvYmopO1xyXG4gICAgbmV3T2JqWyByZXNbMF0gfHwgcmVzLmtleSB8fCByZXMuayBdID0gcmVzWzFdIHx8IHJlc1sndmFsdWUnXSB8fCByZXNbJ3YnXTtcclxuICB9XHJcbiAgcmV0dXJuIG5ld09iajtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyIChvYmosIGNiKSB7XHJcbiAgY29uc3QgbmV3T2JqID0ge307XHJcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xyXG4gICAgY29uc3QgcHJvcCA9IG9ialtrZXldO1xyXG4gICAgaWYgKCBjYihwcm9wLCBrZXksIG9iaikgKSB7XHJcbiAgICAgIG5ld09ialtrZXldID0gcHJvcDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG5ld09iajtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9PYmplY3QgKGFyciwgdmFsKSB7XHJcbiAgY29uc3QgbmV3T2JqID0ge307XHJcbiAgYXJyLmZvckVhY2goKHYpID0+IHtcclxuICAgIG5ld09ialt2XSA9IGlzRnVuY3Rpb24odmFsKSA/IHZhbCh2KSA6IHZhbDtcclxuICB9KTtcclxuICByZXR1cm4gbmV3T2JqO1xyXG59XHJcbiIsImltcG9ydCB7IGRlZmluZSB9IGZyb20gJy4vRGVmaW5pdGlvbic7XHJcbmltcG9ydCB7IGFwcGx5IH0gZnJvbSAnLi9Qcm9kdWN0aW9uJztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGRlZmluZSxcclxuICBhcHBseSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2NvdWxpL2Rpc3QvY291bGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvZmluZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9maXhlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9oaWdobGlnaHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pbnRlcmFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlLXNjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9jb250cm9scy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9jb250cm9scy9tYXJrdXAuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9jb250cm9scy9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaGlnaGxpZ2h0aW5nL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9wb3B1cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9wb3B1cC9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvc2Nyb2xsYmFyTWFyay9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoLXN0cmluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9zZWFyY2gtc3RyaW5nL21hcmt1cC5odG1sIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL3NlYXJjaC1zdHJpbmcvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy91aS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxJQUFJLElBQXlEO0FBQzdEO0FBQ0EsTUFBTSxFQUtzQjtBQUM1QixDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGdDQUFnQztBQUNsRjtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFF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QUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw4REFBWSxDQUFDO0FBQ2hDLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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dURBQU0sRUFBRSxtREFBbUQ7O0FBRTlEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkpBLHdXOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7OztBQzdHSDtBQUFBO0FBQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiJwYWdlLXNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2Utc2NyaXB0LmpzXCIpO1xuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQ291bGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQ291bGlcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi5qc1wiKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuL3NyYy9EZWZpbml0aW9uLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvRGVmaW5pdGlvbi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlJFU0VSVkVEX0JJTkRJTkdfTkFNRVMgPSBleHBvcnRzLlZBTFVFX1RZUEVTID0gZXhwb3J0cy5pc0NvbXBvbmVudCA9IGV4cG9ydHMuc2hvcnRlbkJpbmRpbmdJZCA9IGV4cG9ydHMuZ2V0Q29tcG9uZW50T3B0cyA9IGV4cG9ydHMuZGVmaW5lID0gdW5kZWZpbmVkO1xuXG52YXIgX2F0dHJpYnV0ZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2dsb2JhbHMvYXR0cmlidXRlcyAqLyBcIi4vc3JjL2dsb2JhbHMvYXR0cmlidXRlcy5qc1wiKTtcblxudmFyIF9hdHRyaWJ1dGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F0dHJpYnV0ZXMpO1xuXG52YXIgX3JlZ2V4cCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZ2xvYmFscy9yZWdleHAgKi8gXCIuL3NyYy9nbG9iYWxzL3JlZ2V4cC5qc1wiKTtcblxudmFyIF9yZWdleHAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVnZXhwKTtcblxudmFyIF9kb20gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlcnMvZG9tICovIFwiLi9zcmMvaGVscGVycy9kb20uanNcIik7XG5cbnZhciBfb2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9oZWxwZXJzL29iamVjdCAqLyBcIi4vc3JjL2hlbHBlcnMvb2JqZWN0LmpzXCIpO1xuXG52YXIgX2NvcHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlcnMvY29weSAqLyBcIi4vc3JjL2hlbHBlcnMvY29weS5qc1wiKTtcblxudmFyIF9jb3B5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvcHkpO1xuXG52YXIgX2NoZWNrZXJzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9oZWxwZXJzL2NoZWNrZXJzICovIFwiLi9zcmMvaGVscGVycy9jaGVja2Vycy5qc1wiKTtcblxudmFyIF9jb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlcnMvY29tbW9uICovIFwiLi9zcmMvaGVscGVycy9jb21tb24uanNcIik7XG5cbnZhciBfU3RhdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1N0YXRlICovIFwiLi9zcmMvU3RhdGUuanNcIik7XG5cbnZhciBfVmlldyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vVmlldyAqLyBcIi4vc3JjL1ZpZXcuanNcIik7XG5cbnZhciBfQ29tcG9uZW50UmVkZWZpbmVFcnJvciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZXJyb3JzL0NvbXBvbmVudFJlZGVmaW5lRXJyb3IgKi8gXCIuL3NyYy9lcnJvcnMvQ29tcG9uZW50UmVkZWZpbmVFcnJvci5qc1wiKTtcblxudmFyIF9Db21wb25lbnRSZWRlZmluZUVycm9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbXBvbmVudFJlZGVmaW5lRXJyb3IpO1xuXG52YXIgX1Njb3BlTmFtZUNvbGxpc2lvbkVycm9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9lcnJvcnMvU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3IgKi8gXCIuL3NyYy9lcnJvcnMvU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3IuanNcIik7XG5cbnZhciBfU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgVkFMVUVfVFlQRVMgPSBbJ3N0eWxlJywgJ2NsYXNzJywgJ3ZhbHVlJywgJ2F0dHJzJywgJ2h0bWwnXTtcbnZhciBSRVNFUlZFRF9IT09LU19OQU1FUyA9IFsnbW91bnQnLCAndXBkYXRlJywgJ3JlbW92ZSddO1xudmFyIERFRkFVTFRfSE9PS1MgPSAoMCwgX29iamVjdC50b09iamVjdCkoUkVTRVJWRURfSE9PS1NfTkFNRVMsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHt9O1xufSk7XG52YXIgUkVTRVJWRURfQklORElOR19OQU1FUyA9IFZBTFVFX1RZUEVTLmNvbmNhdChbJ2V2ZW50cycsICdob29rcycsICdsaXN0SXRlbScsIF9hdHRyaWJ1dGVzMi5kZWZhdWx0LlNFTEZdKTtcblxuZXhwb3J0cy5kZWZpbmUgPSBkZWZpbmU7XG5leHBvcnRzLmdldENvbXBvbmVudE9wdHMgPSBnZXRDb21wb25lbnRPcHRzO1xuZXhwb3J0cy5zaG9ydGVuQmluZGluZ0lkID0gc2hvcnRlbkJpbmRpbmdJZDtcbmV4cG9ydHMuaXNDb21wb25lbnQgPSBpc0NvbXBvbmVudDtcbmV4cG9ydHMuVkFMVUVfVFlQRVMgPSBWQUxVRV9UWVBFUztcbmV4cG9ydHMuUkVTRVJWRURfQklORElOR19OQU1FUyA9IFJFU0VSVkVEX0JJTkRJTkdfTkFNRVM7XG5cblxudmFyIENPTVBPTkVOVF9DT1VOVEVSID0gMDtcbnZhciBDT01QT05FTlRTID0ge307XG5cbmZ1bmN0aW9uIGRlZmluZShuYW1lLCBtYXJrdXAsIGJpbmRpbmdzLCBzdHlsZXMpIHtcbiAgdmFyIGFyZ3MgPSAoMCwgX2NoZWNrZXJzLmlzT2JqZWN0KShuYW1lKSA/IG5hbWUgOiB7IG5hbWU6IG5hbWUsIG1hcmt1cDogbWFya3VwLCBiaW5kaW5nczogYmluZGluZ3MsIHN0eWxlczogc3R5bGVzIH07XG5cbiAgbmFtZSA9ICgwLCBfY29tbW9uLnRvQ2FtZWxDYXNlKShhcmdzLm5hbWUpO1xuXG4gIGlmIChDT01QT05FTlRTW25hbWVdKSB7XG4gICAgdGhyb3cgbmV3IF9Db21wb25lbnRSZWRlZmluZUVycm9yMi5kZWZhdWx0KG5hbWUpO1xuICB9XG5cbiAgdmFyIGNvbXBvbmVudEhUTUxNYXJrdXAgPSAoMCwgX2RvbS5jbG9uZUhUTUxNYXJrdXApKGFyZ3MubWFya3VwKTtcbiAgY29tcG9uZW50SFRNTE1hcmt1cC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuXG4gIENPTVBPTkVOVF9DT1VOVEVSID0gMDtcbiAgdmFyIGNvbXBvbmVudCA9IHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIHN0YXRlOiBfZGVmaW5lUHJvcGVydHkoe30sIF9hdHRyaWJ1dGVzMi5kZWZhdWx0LlNFTEYsIHt9KSxcbiAgICBzdGF0ZUlkOiBuYW1lLFxuICAgIHN0YXRlUGF0aDogW25hbWVdLFxuICAgIHN0YXRlTmFtZXM6IHt9LFxuICAgIG1hcmt1cDogY29tcG9uZW50SFRNTE1hcmt1cCxcbiAgICBldmFsdWF0ZToge30sXG4gICAgbGlua3M6IHt9LFxuICAgIGlzQ29tcG9uZW50OiB0cnVlLFxuICAgIG91dGVyTmFtZXM6IHt9LFxuICAgIF9saW5rczoge31cbiAgfTtcblxuICBnYXRoZXJCaW5kaW5nc0Zyb21NYXJrdXAoY29tcG9uZW50SFRNTE1hcmt1cCwgY29tcG9uZW50KTtcblxuICB2YXIgbm9ybWFsaXplZE9wdGlvbnMgPSBub3JtYWxpemVVc2VyT3B0aW9ucyhhcmdzLmJpbmRpbmdzLCB7IHN0YXRlOiB7fSB9KTtcbiAgKDAsIF9jb3B5Mi5kZWZhdWx0KShjb21wb25lbnQsIG5vcm1hbGl6ZWRPcHRpb25zKTtcblxuICBwcmVwYXJlQmluZGluZ3MoY29tcG9uZW50LCBjb21wb25lbnQuc3RhdGVJZCwgeyBzdGF0ZVBhdGg6IFtdLCBsaW5rczoge30sIHN0YXRlTmFtZXM6IGNvbXBvbmVudC5zdGF0ZU5hbWVzIH0pO1xuXG4gICgwLCBfVmlldy5jcmVhdGVBbmRBcHBlbmRTdHlsZXMpKHByZXBhcmVTdHlsZXMoYXJncy5zdHlsZXMsIGNvbXBvbmVudCkpO1xuXG4gIHJldHVybiBDT01QT05FTlRTW25hbWVdID0gY29tcG9uZW50O1xufVxuXG5mdW5jdGlvbiBnYXRoZXJCaW5kaW5nc0Zyb21NYXJrdXAoY29tcG9uZW50SFRNTE1hcmt1cCwgY29tcG9uZW50KSB7XG4gICgwLCBfZG9tLndhbGtOb2RlcykoY29tcG9uZW50SFRNTE1hcmt1cCwgZnVuY3Rpb24gKEhUTUxOb2RlKSB7XG4gICAgdmFyIGJpbmRpbmdPcHRzID0gYW5hbHl6ZUJpbmRpbmcoSFRNTE5vZGUpO1xuXG4gICAgaWYgKCFiaW5kaW5nT3B0cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBiaW5kaW5nID0gY3JlYXRlQmluZGluZyhiaW5kaW5nT3B0cy5uYW1lLCBjb21wb25lbnQsIEhUTUxOb2RlKTtcblxuICAgIGlmIChiaW5kaW5nT3B0cy5pc0NvbXBvbmVudCkge1xuICAgICAgc2V0Q29tcG9uZW50KGJpbmRpbmcsIGJpbmRpbmdPcHRzKTtcbiAgICAgIEhUTUxOb2RlLmNsYXNzTGlzdC5hZGQoX2F0dHJpYnV0ZXMyLmRlZmF1bHQuUFJFRklYICsgYmluZGluZy5pZCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50LnN0YXRlW2JpbmRpbmcubmFtZV0gPSBiaW5kaW5nO1xuICAgIGJpbmRpbmcubWFya3VwLmNsYXNzTGlzdC5hZGQoX2F0dHJpYnV0ZXMyLmRlZmF1bHQuUFJFRklYICsgYmluZGluZy5pZCwgY29tcG9uZW50Lm5hbWUgKyAnLScgKyBiaW5kaW5nLm5hbWUpO1xuXG4gICAgaWYgKGJpbmRpbmdPcHRzLmlzTGlzdCkge1xuICAgICAgdmFyIGl0ZW1Ob2RlID0gSFRNTE5vZGUuY2hpbGRyZW5bMF07XG4gICAgICBtb2RpZnlUb0xpc3RCaW5kaW5nKGJpbmRpbmcsIGl0ZW1Ob2RlKTtcblxuICAgICAgaWYgKGlzQ29tcG9uZW50KGl0ZW1Ob2RlKSkge1xuICAgICAgICBzZXRDb21wb25lbnQoYmluZGluZy5saXN0SXRlbSwgZ2V0Q29tcG9uZW50T3B0cyhpdGVtTm9kZSkpO1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG5cbiAgICAgIGdhdGhlckJpbmRpbmdzRnJvbU1hcmt1cChpdGVtTm9kZSwgYmluZGluZy5saXN0SXRlbSk7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5mdW5jdGlvbiBzZXRDb21wb25lbnQoY29tcG9uZW50QmluZGluZywgc3ViQ29tcG9uZW50T3B0cykge1xuICB2YXIgc3RhdGVOYW1lcyA9IE9iamVjdC5hc3NpZ24oY29tcG9uZW50QmluZGluZy5zdGF0ZU5hbWVzLCBzdWJDb21wb25lbnRPcHRzLmNvbXBvbmVudC5zdGF0ZU5hbWVzKTtcbiAgdmFyIHN0YXRlSWQgPSBzdWJDb21wb25lbnRPcHRzLmNvbXBvbmVudC5uYW1lICsgJ3gnICsgQ09NUE9ORU5UX0NPVU5URVIrKztcblxuICBpZiAoc3ViQ29tcG9uZW50T3B0cy5zdGF0ZU5hbWUpIHtcbiAgICBpZiAoc3RhdGVOYW1lc1tzdWJDb21wb25lbnRPcHRzLnN0YXRlTmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBfU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3IyLmRlZmF1bHQoc3ViQ29tcG9uZW50T3B0cy5zdGF0ZU5hbWUpO1xuICAgIH1cblxuICAgIHN0YXRlSWQgPSBzdWJDb21wb25lbnRPcHRzLnN0YXRlTmFtZTtcbiAgICBjb21wb25lbnRCaW5kaW5nLnN0YXRlTmFtZXNbc3RhdGVJZF0gPSB0cnVlO1xuICB9XG5cbiAgKDAsIF9jb3B5Mi5kZWZhdWx0KShjb21wb25lbnRCaW5kaW5nLCBzdWJDb21wb25lbnRPcHRzLmNvbXBvbmVudCk7XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oY29tcG9uZW50QmluZGluZywge1xuICAgIGlkOiBzdGF0ZUlkLFxuICAgIHN0YXRlSWQ6IHN0YXRlSWQsXG4gICAgbmFtZTogc3RhdGVJZCxcbiAgICBzdGF0ZU5hbWU6IHN1YkNvbXBvbmVudE9wdHMuc3RhdGVOYW1lLFxuICAgIHN0YXRlUGF0aDogY29tcG9uZW50QmluZGluZy5zdGF0ZVBhdGguY29uY2F0KHN0YXRlSWQpLFxuICAgIG1hcmt1cDogc3ViQ29tcG9uZW50T3B0cy5jb21wb25lbnQubWFya3VwLmNsb25lTm9kZSh0cnVlKSxcbiAgICBpc0NvbXBvbmVudDogdHJ1ZSxcbiAgICBzdGF0ZU5hbWVzOiBzdGF0ZU5hbWVzLFxuICAgIF9saW5rczogT2JqZWN0LmFzc2lnbih7fSwgc3ViQ29tcG9uZW50T3B0cy5saW5rcyksXG4gICAgb3V0ZXJOYW1lczogT2JqZWN0LmFzc2lnbih7fSwgc3ViQ29tcG9uZW50T3B0cy5yZXZMaW5rcylcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVCaW5kaW5ncyhjb21wb25lbnQsIGN1cnJlbnRTdGF0ZUlkLCBwYXJlbnRDb21wb25lbnQpIHtcbiAgdmFyIGNvbXBvbmVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29tcG9uZW50Lm1hcmt1cC5zZXRBdHRyaWJ1dGUoX2F0dHJpYnV0ZXMyLmRlZmF1bHQuQklORElOR19JRCwgc2hvcnRlbkJpbmRpbmdJZChjdXJyZW50U3RhdGVJZCArIF9hdHRyaWJ1dGVzMi5kZWZhdWx0LlNUQVRFX0RFTElNSVRFUiArIF9hdHRyaWJ1dGVzMi5kZWZhdWx0LlNFTEYpKTtcbiAgY29tcG9uZW50V3JhcHBlci5hcHBlbmRDaGlsZChjb21wb25lbnQubWFya3VwKTtcbiAgY29tcG9uZW50LnN0YXRlUGF0aCA9IHBhcmVudENvbXBvbmVudC5zdGF0ZVBhdGguY29uY2F0KGNvbXBvbmVudC5zdGF0ZUlkKTtcbiAgY29tcG9uZW50LnN0YXRlTmFtZXMgPSBwYXJlbnRDb21wb25lbnQuc3RhdGVOYW1lcztcblxuICB2YXIgc3ViQ29tcG9uZW50cyA9IFtdO1xuXG4gICgwLCBfb2JqZWN0LmZvckVhY2gpKGNvbXBvbmVudC5zdGF0ZSwgZnVuY3Rpb24gKGJpbmRpbmcsIGJpbmRpbmdOYW1lKSB7XG4gICAgdmFyIG9sZEJpbmRpbmdJZCA9IGJpbmRpbmcuaWQ7XG4gICAgdmFyIG5ld0JpbmRpbmdJZCA9IGN1cnJlbnRTdGF0ZUlkICsgX2F0dHJpYnV0ZXMyLmRlZmF1bHQuU1RBVEVfREVMSU1JVEVSICsgYmluZGluZ05hbWU7XG4gICAgdmFyIHNob3J0SWQgPSBzaG9ydGVuQmluZGluZ0lkKG5ld0JpbmRpbmdJZCk7XG5cbiAgICBpZiAoYmluZGluZy5tYXJrdXApIHtcbiAgICAgIHZhciBiaW5kaW5nTm9kZSA9IGNvbXBvbmVudFdyYXBwZXIucXVlcnlTZWxlY3RvcignLicgKyBfYXR0cmlidXRlczIuZGVmYXVsdC5QUkVGSVggKyBvbGRCaW5kaW5nSWQpO1xuICAgICAgYmluZGluZ05vZGUuc2V0QXR0cmlidXRlKF9hdHRyaWJ1dGVzMi5kZWZhdWx0LkJJTkRJTkdfSUQsIHNob3J0SWQpO1xuICAgICAgYmluZGluZ05vZGUuY2xhc3NMaXN0LnJlbW92ZShfYXR0cmlidXRlczIuZGVmYXVsdC5QUkVGSVggKyBvbGRCaW5kaW5nSWQpO1xuICAgICAgYmluZGluZ05vZGUuY2xhc3NMaXN0LmFkZChfYXR0cmlidXRlczIuZGVmYXVsdC5QUkVGSVggKyBuZXdCaW5kaW5nSWQpO1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24oYmluZGluZywge1xuICAgICAgc3RhdGVQYXRoOiBjb21wb25lbnQuc3RhdGVQYXRoLnNsaWNlKCksXG4gICAgICBob29rczogT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9IT09LUywgYmluZGluZy5ob29rcyksXG4gICAgICBpZDogbmV3QmluZGluZ0lkLFxuICAgICAgc2hvcnRJZDogc2hvcnRJZFxuICAgIH0pO1xuXG4gICAgcHJlcGFyZVJlYWN0aXZlRnVuY3MoYmluZGluZywgY29tcG9uZW50KTtcblxuICAgIGlmIChiaW5kaW5nLmlzTGlzdCkge1xuICAgICAgYmluZGluZy5zdGF0ZVBhdGgucHVzaChiaW5kaW5nTmFtZSk7XG4gICAgICBiaW5kaW5nLnN0YXRlTmFtZXMgPSBjb21wb25lbnQuc3RhdGVOYW1lcztcblxuICAgICAgcHJlcGFyZUJpbmRpbmdzKGJpbmRpbmcubGlzdEl0ZW0sIG5ld0JpbmRpbmdJZCArIF9hdHRyaWJ1dGVzMi5kZWZhdWx0LlNUQVRFX0RFTElNSVRFUiArIF9hdHRyaWJ1dGVzMi5kZWZhdWx0LklURU0gKyBiaW5kaW5nLmxpc3RJdGVtLm5hbWUsIGJpbmRpbmcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChiaW5kaW5nLmlzQ29tcG9uZW50KSB7XG4gICAgICBzdWJDb21wb25lbnRzLnB1c2goYmluZGluZyk7XG4gICAgfVxuICB9KTtcblxuICBzZXR1cENvbXBvbmVudHNMaW5rcyhjb21wb25lbnQsIHBhcmVudENvbXBvbmVudCk7XG4gIGNvbXBvbmVudC50ZW1wbGF0ZSA9IGNvbXBvbmVudC5tYXJrdXAuY2xvbmVOb2RlKHRydWUpO1xuXG4gIHN1YkNvbXBvbmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc3ViQ29tcG9uZW50KSB7XG4gICAgcHJlcGFyZUJpbmRpbmdzKHN1YkNvbXBvbmVudCwgY3VycmVudFN0YXRlSWQgKyBfYXR0cmlidXRlczIuZGVmYXVsdC5TVEFURV9ERUxJTUlURVIgKyBzdWJDb21wb25lbnQuc3RhdGVJZCwgY29tcG9uZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVSZWFjdGl2ZUZ1bmNzKGJpbmRpbmcsIGNvbXBvbmVudERhdGEpIHtcbiAgVkFMVUVfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgIHZhciByZWFjdGl2ZUZ1bmMgPSBiaW5kaW5nW3R5cGVdO1xuICAgIGlmICghcmVhY3RpdmVGdW5jKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYmluZGluZy5ldmFsdWF0ZVt0eXBlXSA9IHByZXBhcmVSZWFjdGl2ZUZ1bmMoYmluZGluZywgdHlwZSwgcmVhY3RpdmVGdW5jLCBjb21wb25lbnREYXRhKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVSZWFjdGl2ZUZ1bmMoYmluZGluZywgdHlwZSwgcmVhY3RpdmVGdW5jLCBjb21wb25lbnREYXRhKSB7XG4gIHZhciBkZXBlbmRlbmNpZXNOYW1lcyA9IGdldERlcGVuZGVuY2llc05hbWVzKHJlYWN0aXZlRnVuYyk7XG5cbiAgZGVwZW5kZW5jaWVzTmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoZGVwZW5kZW5jeU5hbWUpIHtcbiAgICBpZiAoKDAsIF9jaGVja2Vycy5pc0VtcHR5KShjb21wb25lbnREYXRhLnN0YXRlW2RlcGVuZGVuY3lOYW1lXSkpIHtcbiAgICAgIGNvbXBvbmVudERhdGEuc3RhdGVbZGVwZW5kZW5jeU5hbWVdID0gY3JlYXRlQmluZGluZyhkZXBlbmRlbmN5TmFtZSwgY29tcG9uZW50RGF0YSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGF0YS5zdGF0ZVtkZXBlbmRlbmN5TmFtZV0uZGVwZW5kYW50c1tiaW5kaW5nLm5hbWUgKyAnOicgKyB0eXBlXSA9IHsgbmFtZTogYmluZGluZy5uYW1lLCB0eXBlOiB0eXBlIH07XG4gIH0pO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWVzLCBjb21wb25lbnRJbnRlcmZhY2UpIHtcbiAgICByZXR1cm4gY29tcHV0ZShyZWFjdGl2ZUZ1bmMsIHZhbHVlcywgY29tcG9uZW50SW50ZXJmYWNlKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVwZW5kZW5jaWVzTmFtZXMoZnVuYykge1xuICB2YXIgZnVuY1BhcmFtcyA9IGdldFBhcmFtTmFtZXMoZnVuYyk7XG4gIHZhciB2YWx1ZXNPYmpSZWdFeHAgPSBuZXcgUmVnRXhwKCdcXFxcJyArIGZ1bmNQYXJhbXNbMF0gKyAnXFxcXC4oXFxcXERbXlxcXFxzXFxcXFddKyknLCAnZycpO1xuICB2YXIgZGVwZW5kZW5jaWVzTmFtZXMgPSBbXTtcbiAgdmFyIGZ1bmNTdHIgPSBmdW5jLnRvU3RyaW5nKCk7XG4gIHZhciBkZXBlbmRlbmN5TmFtZSA9IHZvaWQgMDtcbiAgd2hpbGUgKGRlcGVuZGVuY3lOYW1lID0gdmFsdWVzT2JqUmVnRXhwLmV4ZWMoZnVuY1N0cikpIHtcbiAgICBkZXBlbmRlbmNpZXNOYW1lcy5wdXNoKGRlcGVuZGVuY3lOYW1lWzFdKTtcbiAgfVxuICByZXR1cm4gZGVwZW5kZW5jaWVzTmFtZXM7XG59XG5cbmZ1bmN0aW9uIGdldFBhcmFtTmFtZXMoZnVuYykge1xuICB2YXIgZnVuY1N0cldpdGhvdXRDb21tZW50cyA9IGZ1bmMudG9TdHJpbmcoKS5yZXBsYWNlKF9yZWdleHAyLmRlZmF1bHQuU1RSSVBfQ09NTUVOVFMsICcnKTtcbiAgdmFyIHBhcmFtc1N0ciA9IGZ1bmNTdHJXaXRob3V0Q29tbWVudHMuc2xpY2UoZnVuY1N0cldpdGhvdXRDb21tZW50cy5pbmRleE9mKCcoJykgKyAxLCBmdW5jU3RyV2l0aG91dENvbW1lbnRzLmluZGV4T2YoJyknKSk7XG4gIHJldHVybiBwYXJhbXNTdHIubWF0Y2goX3JlZ2V4cDIuZGVmYXVsdC5BUkdVTUVOVF9OQU1FUykgfHwgW107XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGUoZnVuYywgdmFsdWVzT2JqLCBjb21wb25lbnRJbnRlcmZhY2UpIHtcbiAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCAoMCwgX1N0YXRlLmdldE9ubHlWYWx1ZXMpKHZhbHVlc09iaiksIGNvbXBvbmVudEludGVyZmFjZSk7XG59XG5cbmZ1bmN0aW9uIHNldHVwQ29tcG9uZW50c0xpbmtzKGNvbXBvbmVudCwgcGFyZW50Q29tcG9uZW50KSB7XG4gIE9iamVjdC5hc3NpZ24ocGFyZW50Q29tcG9uZW50LmxpbmtzLCAoMCwgX29iamVjdC5tYXApKGNvbXBvbmVudC5vdXRlck5hbWVzLCBmdW5jdGlvbiAoaykge1xuICAgIHJldHVybiB7IGxpbms6IGssIGNvbXBvbmVudDogY29tcG9uZW50LnN0YXRlSWQgfTtcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVVc2VyT3B0aW9ucyhvcHRpb25zT2JqLCBwYXJlbnRPYmosIHBhcmVudEtleSkge1xuICBpZiAoKDAsIF9jaGVja2Vycy5pc0Z1bmN0aW9uKShvcHRpb25zT2JqKSkge1xuICAgIHJldHVybiAoMCwgX29iamVjdC5zZXQpKHBhcmVudE9iaiwgW3BhcmVudEtleV0sIHsgY2xhc3M6IG9wdGlvbnNPYmogfSk7XG4gIH1cblxuICBpZiAoKDAsIF9jaGVja2Vycy5pc0FycmF5KShvcHRpb25zT2JqKSkge1xuXG4gICAgaWYgKG9wdGlvbnNPYmoubGVuZ3RoID4gMSkge1xuICAgICAgb3B0aW9uc09iai5mb3JFYWNoKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZVVzZXJPcHRpb25zKG9wdGlvbiwgcGFyZW50T2JqLCBwYXJlbnRLZXkpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCgwLCBfY2hlY2tlcnMuaXNGdW5jdGlvbikob3B0aW9uc09ialswXSkpIHtcbiAgICAgIHJldHVybiAoMCwgX29iamVjdC5zZXQpKHBhcmVudE9iaiwgW3BhcmVudEtleV0sIHsgdmFsdWU6IG9wdGlvbnNPYmpbMF0gfSk7XG4gICAgfVxuICAgIGlmICgoMCwgX2NoZWNrZXJzLmlzT2JqZWN0KShvcHRpb25zT2JqWzBdKSkge1xuICAgICAgcmV0dXJuICgwLCBfb2JqZWN0LnNldCkocGFyZW50T2JqLCBbcGFyZW50S2V5XSwgeyBldmVudHM6IG9wdGlvbnNPYmpbMF0gfSk7XG4gICAgfVxuICB9XG5cbiAgKDAsIF9vYmplY3QuZm9yRWFjaCkob3B0aW9uc09iaiwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICBkZWxldGUgb3B0aW9uc09ialtrZXldO1xuICAgIHZhciBiaW5kaW5nID0gY3JlYXRlQmluZGluZyhrZXkpO1xuXG4gICAgaWYgKCgwLCBfY2hlY2tlcnMuaXNPYmplY3QpKHZhbHVlKSkge1xuICAgICAgcGFyZW50T2JqWydzdGF0ZSddW2tleV0gPSBPYmplY3QuYXNzaWduKGJpbmRpbmcsIHZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwYXJlbnRPYmpbJ3N0YXRlJ11ba2V5XSA9IGJpbmRpbmc7XG4gICAgbm9ybWFsaXplVXNlck9wdGlvbnModmFsdWUsIHBhcmVudE9ialsnc3RhdGUnXSwga2V5KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcmVudE9iajtcbn1cblxuZnVuY3Rpb24gYW5hbHl6ZUJpbmRpbmcoZWwpIHtcbiAgaWYgKGlzQ29tcG9uZW50KGVsKSkge1xuICAgIHJldHVybiBnZXRDb21wb25lbnRPcHRzKGVsKTtcbiAgfVxuXG4gIGlmICghZWwuZ2V0QXR0cmlidXRlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbmFtZSA9IGVsLmdldEF0dHJpYnV0ZShfYXR0cmlidXRlczIuZGVmYXVsdC5URU1QTEFURV9CSU5ESU5HKTtcbiAgZWwucmVtb3ZlQXR0cmlidXRlKF9hdHRyaWJ1dGVzMi5kZWZhdWx0LlRFTVBMQVRFX0JJTkRJTkcpO1xuXG4gIGlmIChuYW1lKSB7XG4gICAgcmV0dXJuIHsgbmFtZTogbmFtZS50cmltKCkgfTtcbiAgfVxuXG4gIG5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoX2F0dHJpYnV0ZXMyLmRlZmF1bHQuVEVNUExBVEVfTElTVF9CSU5ESU5HKTtcbiAgZWwucmVtb3ZlQXR0cmlidXRlKF9hdHRyaWJ1dGVzMi5kZWZhdWx0LlRFTVBMQVRFX0xJU1RfQklORElORyk7XG5cbiAgaWYgKG5hbWUpIHtcbiAgICByZXR1cm4geyBuYW1lOiBuYW1lLnRyaW0oKSwgaXNMaXN0OiB0cnVlIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNDb21wb25lbnQoZWwpIHtcbiAgdmFyIHRhZ05hbWUgPSBlbC50YWdOYW1lICYmIGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuIHRhZ05hbWUgJiYgQ09NUE9ORU5UU1soMCwgX2NvbW1vbi50b0NhbWVsQ2FzZSkodGFnTmFtZSldO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnRPcHRzKG9iaikge1xuICB2YXIgbmFtZSA9ICgwLCBfY29tbW9uLnRvQ2FtZWxDYXNlKShvYmoudGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgdmFyIGNvbXBvbmVudCA9IGdldENvbXBvbmVudEJ5TmFtZShuYW1lKTtcbiAgdmFyIGxpbmtzID0ge307XG4gIHZhciByZXZMaW5rcyA9IHt9O1xuICB2YXIgc3RhdGVOYW1lID0gbnVsbDtcblxuICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChvYmouYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuXG4gICAgaWYgKGF0dHIubmFtZSA9PT0gX2F0dHJpYnV0ZXMyLmRlZmF1bHQuU1RBVEVfTkFNRSkge1xuICAgICAgc3RhdGVOYW1lID0gYXR0ci52YWx1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaW5uZXJMaW5rID0gKDAsIF9jb21tb24udG9DYW1lbENhc2UpKGF0dHIubmFtZSk7XG4gICAgbGlua3NbaW5uZXJMaW5rXSA9IGF0dHIudmFsdWU7XG4gICAgcmV2TGlua3NbYXR0ci52YWx1ZV0gPSBpbm5lckxpbms7XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgbGlua3M6IGxpbmtzLFxuICAgIHJldkxpbmtzOiByZXZMaW5rcyxcbiAgICBzdGF0ZU5hbWU6IHN0YXRlTmFtZSxcbiAgICBuYW1lOiBuYW1lLFxuICAgIGlzQ29tcG9uZW50OiB0cnVlXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudEJ5TmFtZShuYW1lKSB7XG4gIHJldHVybiBDT01QT05FTlRTWygwLCBfY29tbW9uLnRvQ2FtZWxDYXNlKShuYW1lKV07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJpbmRpbmcobmFtZSwgY29tcG9uZW50LCBlbCkge1xuICB2YXIgY29tcG9uZW50T3B0cyA9IGNvbXBvbmVudCA/IHtcbiAgICBpZDogY29tcG9uZW50LnN0YXRlSWQgKyBfYXR0cmlidXRlczIuZGVmYXVsdC5TVEFURV9ERUxJTUlURVIgKyBuYW1lLFxuICAgIHN0YXRlUGF0aDogY29tcG9uZW50LnN0YXRlUGF0aCxcbiAgICBzdGF0ZU5hbWVzOiBjb21wb25lbnQuc3RhdGVOYW1lcyxcbiAgICBpc0xpc3RJdGVtOiBjb21wb25lbnQuaXNMaXN0LFxuICAgIHN0YXRlSWQ6IG5hbWVcbiAgfSA6IHt9O1xuXG4gIHZhciBlbE9wdHMgPSBlbCA/IHtcbiAgICBpbml0VmFsdWU6IGVsLnZhbHVlIHx8IGVsLmlubmVySFRNTFxuICB9IDoge307XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe1xuICAgIG5hbWU6IG5hbWUsXG4gICAgbGlzdGVuZXJzOiBbXSxcbiAgICBtYXJrdXA6IGVsLFxuICAgIGRlcGVuZGFudHM6IHt9LFxuICAgIGV2ZW50czoge30sXG4gICAgZXZhbHVhdGU6IHt9LFxuICAgIGxpbmtzOiB7fSxcbiAgICBzdGF0ZTogX2RlZmluZVByb3BlcnR5KHt9LCBfYXR0cmlidXRlczIuZGVmYXVsdC5TRUxGLCB7fSksXG4gICAgb3V0ZXJOYW1lczoge30sXG4gICAgX2xpbmtzOiB7fVxuXG4gIH0sIGNvbXBvbmVudE9wdHMsIGVsT3B0cyk7XG59XG5cbmZ1bmN0aW9uIG1vZGlmeVRvTGlzdEJpbmRpbmcoYmluZGluZywgaXRlbU1hcmt1cCkge1xuICBiaW5kaW5nLmlzTGlzdCA9IHRydWU7XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYmluZGluZywge1xuICAgIG1hcmt1cDogaXRlbU1hcmt1cCxcbiAgICBsaXN0SXRlbTogY3JlYXRlQmluZGluZyhpdGVtTWFya3VwLnRhZ05hbWUsIGJpbmRpbmcsIGl0ZW1NYXJrdXApXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG9ydGVuQmluZGluZ0lkKGlkKSB7XG4gIHJldHVybiBpZC5zcGxpdChfYXR0cmlidXRlczIuZGVmYXVsdC5TVEFURV9ERUxJTUlURVIpLm1hcChmdW5jdGlvbiAoZWwpIHtcbiAgICByZXR1cm4gKDAsIF9jb21tb24uZ2V0U2hvcnROYW1lKShlbCk7XG4gIH0pLmpvaW4oX2F0dHJpYnV0ZXMyLmRlZmF1bHQuU1RBVEVfREVMSU1JVEVSKTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVN0eWxlcyhzdHlsZUFyZywgY29tcG9uZW50KSB7XG4gIHJldHVybiAoMCwgX29iamVjdC5tYXBLZXlzKShzdHlsZUFyZywgZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBrZXkuc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3IudHJpbSgpO1xuICAgIH0pLm1hcChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcblxuICAgICAgdmFyIGNsYXNzTmFtZSA9ICcuJyArIGNvbXBvbmVudC5uYW1lO1xuXG4gICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgdmFyIGlzQmluZGluZyA9IGNvbXBvbmVudC5zdGF0ZVtzZWxlY3Rvci5zcGxpdCgnICcpWzBdLnNwbGl0KCc6OicpWzBdLnNwbGl0KCc6JylbMF1dO1xuICAgICAgICB2YXIgcHJlZml4ID0gaXNCaW5kaW5nID8gY2xhc3NOYW1lICsgJy0nIDogJyc7XG4gICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBwcmVmaXggKyBzZWxlY3RvcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9KS5qb2luKCcsJyk7XG4gIH0pO1xufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9FdmVudEhhbmRsZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL0V2ZW50SGFuZGxlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuc2V0dXBFdmVudEhhbmRsZXJzID0gdW5kZWZpbmVkO1xuXG52YXIgX2F0dHJpYnV0ZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2dsb2JhbHMvYXR0cmlidXRlcyAqLyBcIi4vc3JjL2dsb2JhbHMvYXR0cmlidXRlcy5qc1wiKTtcblxudmFyIF9hdHRyaWJ1dGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F0dHJpYnV0ZXMpO1xuXG52YXIgX29iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVycy9vYmplY3QgKi8gXCIuL3NyYy9oZWxwZXJzL29iamVjdC5qc1wiKTtcblxudmFyIF9jb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlcnMvY29tbW9uICovIFwiLi9zcmMvaGVscGVycy9jb21tb24uanNcIik7XG5cbnZhciBfU3RhdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1N0YXRlICovIFwiLi9zcmMvU3RhdGUuanNcIik7XG5cbnZhciBfU3RhdGVDaGFuZ2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1N0YXRlQ2hhbmdlICovIFwiLi9zcmMvU3RhdGVDaGFuZ2UuanNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuc2V0dXBFdmVudEhhbmRsZXJzID0gc2V0dXBFdmVudEhhbmRsZXJzO1xuXG5cbmZ1bmN0aW9uIHNldHVwRXZlbnRIYW5kbGVycyhlbGVtZW50KSB7XG4gIHZhciBldmVudEhhbmRsZXJzID0ge307XG4gIGdhdGhlckFsbEV2ZW50SGFuZGxlcnMoZWxlbWVudCwgZXZlbnRIYW5kbGVycyk7XG5cbiAgdmFyIG1hcmt1cCA9IGVsZW1lbnQuZWw7XG5cbiAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoZXZlbnROYW1lKSB7XG4gICAgbWFya3VwLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGV4ZWN1dGVBbGxDYWxsYmFja3NJbkxpc3QoZSwgZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdLCBlbGVtZW50KTtcbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBldmVudE5hbWUgaW4gZXZlbnRIYW5kbGVycykge1xuICAgIF9sb29wKGV2ZW50TmFtZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2F0aGVyQWxsRXZlbnRIYW5kbGVycyhjb21wb25lbnQsIGdhdGhlcmVkSGFuZGxlcnMpIHtcbiAgZ2F0aGVyRXZlbnRIYW5kbGVycyhjb21wb25lbnQsIGdhdGhlcmVkSGFuZGxlcnMpO1xuXG4gIGlmIChjb21wb25lbnQuc3RhdGUpIHtcbiAgICAoMCwgX29iamVjdC5mb3JFYWNoKShjb21wb25lbnQuc3RhdGUsIGZ1bmN0aW9uIChiaW5kaW5nKSB7XG4gICAgICByZXR1cm4gZ2F0aGVyQWxsRXZlbnRIYW5kbGVycyhiaW5kaW5nLCBnYXRoZXJlZEhhbmRsZXJzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChjb21wb25lbnQubGlzdEl0ZW0pIHtcbiAgICBnYXRoZXJBbGxFdmVudEhhbmRsZXJzKGNvbXBvbmVudC5saXN0SXRlbSwgZ2F0aGVyZWRIYW5kbGVycyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2F0aGVyRXZlbnRIYW5kbGVycyhiaW5kaW5nLCBnYXRoZXJlZEhhbmRsZXJzKSB7XG4gIGlmICghYmluZGluZy5ldmVudHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBmb3IgKHZhciBldmVudE5hbWUgaW4gYmluZGluZy5ldmVudHMpIHtcbiAgICBpZiAoIWdhdGhlcmVkSGFuZGxlcnNbZXZlbnROYW1lXSkge1xuICAgICAgZ2F0aGVyZWRIYW5kbGVyc1tldmVudE5hbWVdID0ge307XG4gICAgfVxuXG4gICAgZ2F0aGVyZWRIYW5kbGVyc1tldmVudE5hbWVdW2JpbmRpbmcuc2hvcnRJZF0gPSBiaW5kaW5nLmV2ZW50c1tldmVudE5hbWVdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVBbGxDYWxsYmFja3NJbkxpc3QoZSwgZXZlbnRIYW5kbGVycywgZWxlbWVudCkge1xuICBkZWNvcmF0ZUV2ZW50KGUpO1xuICAoMCwgX1N0YXRlQ2hhbmdlLnN0YXJ0VHJhbnNhY3Rpb24pKCk7XG5cbiAgdmFyIGN1ckhUTUxOb2RlID0gZS50YXJnZXQ7XG4gIHdoaWxlIChjdXJIVE1MTm9kZSAhPT0gZWxlbWVudC5lbC5wYXJlbnROb2RlKSB7XG4gICAgdmFyIGJpbmRpbmdJZCA9IGN1ckhUTUxOb2RlLmdldEF0dHJpYnV0ZShfYXR0cmlidXRlczIuZGVmYXVsdC5CSU5ESU5HX0lEKTtcbiAgICB2YXIgZXZlbnRIYW5kbGVyID0gZXZlbnRIYW5kbGVyc1tiaW5kaW5nSWRdO1xuXG4gICAgaWYgKGV2ZW50SGFuZGxlcikge1xuICAgICAgdmFyIGluZGV4bGVzc1N0YXRlUGF0aCA9IGJpbmRpbmdJZC5zcGxpdChfYXR0cmlidXRlczIuZGVmYXVsdC5TVEFURV9ERUxJTUlURVIpO1xuICAgICAgaW5kZXhsZXNzU3RhdGVQYXRoLnBvcCgpO1xuICAgICAgdmFyIHN0YXRlUGF0aFRvSXRlbSA9IGdldFN0YXRlUGF0aFRvSXRlbShjdXJIVE1MTm9kZSwgaW5kZXhsZXNzU3RhdGVQYXRoKTtcbiAgICAgIHZhciBhY2Nlc3NvclRvRGF0YSA9ICgwLCBfU3RhdGUuY3JlYXRlQWNjZXNzb3IpKFtlbGVtZW50LmlkXS5jb25jYXQoc3RhdGVQYXRoVG9JdGVtKSk7XG5cbiAgICAgIGV2ZW50SGFuZGxlci5jYWxsKHRoaXMsIGUsIGN1ckhUTUxOb2RlLCBhY2Nlc3NvclRvRGF0YSwgK3N0YXRlUGF0aFRvSXRlbS5zbGljZSgtMilbMF0pO1xuXG4gICAgICBpZiAoZS5wcm9wYWdhdGlvblN0b3BwZWQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGN1ckhUTUxOb2RlID0gY3VySFRNTE5vZGUucGFyZW50Tm9kZTtcbiAgfVxuXG4gICgwLCBfU3RhdGVDaGFuZ2UuYXBwbHlDaGFuZ2VzKSgpO1xufVxuXG5mdW5jdGlvbiBkZWNvcmF0ZUV2ZW50KGUpIHtcbiAgdmFyIHN0b3BQcm9wYWdhdGlvbiA9IGUuc3RvcFByb3BhZ2F0aW9uLmJpbmQoZSk7XG4gIGUuc3RvcFByb3BhZ2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIGUucHJvcGFnYXRpb25TdG9wcGVkID0gdHJ1ZTtcbiAgICBzdG9wUHJvcGFnYXRpb24oKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhdGVQYXRoVG9JdGVtKGVsLCBpbmRleGxlc3NTdGF0ZVBhdGgpIHtcbiAgdmFyIHN0YXRlUGF0aCA9IFtdO1xuXG4gIHZhciBlbGVtZW50TmFtZSA9IHZvaWQgMDtcbiAgd2hpbGUgKGVsZW1lbnROYW1lID0gKDAsIF9jb21tb24uZ2V0UmVhbE5hbWUpKGluZGV4bGVzc1N0YXRlUGF0aC5wb3AoKSkpIHtcblxuICAgIGlmICgoMCwgX2NvbW1vbi5oYXMpKGVsZW1lbnROYW1lLCBfYXR0cmlidXRlczIuZGVmYXVsdC5JVEVNKSkge1xuICAgICAgZWxlbWVudE5hbWUgPSBlbGVtZW50TmFtZS5zbGljZShfYXR0cmlidXRlczIuZGVmYXVsdC5JVEVNLmxlbmd0aCk7XG4gICAgICBlbCA9IGdldFRvSXRlbU5vZGUoZWwpO1xuICAgICAgdmFyIGlkeCA9IGVsLmdldEF0dHJpYnV0ZShfYXR0cmlidXRlczIuZGVmYXVsdC5JVEVNX0lOREVYKTtcbiAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcbiAgICAgIHN0YXRlUGF0aC51bnNoaWZ0KGlkeCwgZWxlbWVudE5hbWUpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgc3RhdGVQYXRoLnVuc2hpZnQoZWxlbWVudE5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlUGF0aDtcbn1cblxuZnVuY3Rpb24gZ2V0VG9JdGVtTm9kZShlbCkge1xuICB2YXIgY3VyRWwgPSBlbDtcblxuICB3aGlsZSAoY3VyRWwudGFnTmFtZSAhPT0gJ0JPRFknKSB7XG4gICAgaWYgKGN1ckVsLmdldEF0dHJpYnV0ZShfYXR0cmlidXRlczIuZGVmYXVsdC5JVEVNX0lOREVYKSkge1xuICAgICAgcmV0dXJuIGN1ckVsO1xuICAgIH1cbiAgICBjdXJFbCA9IGN1ckVsLnBhcmVudE5vZGU7XG4gIH1cbn1cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvUHJvZHVjdGlvbi5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL1Byb2R1Y3Rpb24uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5hcHBseSA9IHVuZGVmaW5lZDtcblxudmFyIF9kb20gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlcnMvZG9tICovIFwiLi9zcmMvaGVscGVycy9kb20uanNcIik7XG5cbnZhciBfRGVmaW5pdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vRGVmaW5pdGlvbiAqLyBcIi4vc3JjL0RlZmluaXRpb24uanNcIik7XG5cbnZhciBfRXZlbnRIYW5kbGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9FdmVudEhhbmRsZXIgKi8gXCIuL3NyYy9FdmVudEhhbmRsZXIuanNcIik7XG5cbnZhciBfU3RhdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1N0YXRlICovIFwiLi9zcmMvU3RhdGUuanNcIik7XG5cbmV4cG9ydHMuYXBwbHkgPSBhcHBseTtcblxuXG5mdW5jdGlvbiBhcHBseShyb290RWxlbWVudFNlbGVjdG9yKSB7XG4gIHZhciByb290RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iocm9vdEVsZW1lbnRTZWxlY3Rvcik7XG4gIHZhciBIVE1MTm9kZXMgPSAoMCwgX2RvbS5jb2xsZWN0SFRNTE5vZGVzKShyb290RWxlbWVudCwgX0RlZmluaXRpb24uaXNDb21wb25lbnQpO1xuXG4gIEhUTUxOb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChIVE1MTm9kZSkge1xuICAgIHZhciBjb21wb25lbnRPcHRzID0gKDAsIF9EZWZpbml0aW9uLmdldENvbXBvbmVudE9wdHMpKEhUTUxOb2RlKTtcbiAgICB2YXIgZWxlbWVudCA9IHNldHVwRWxlbWVudChjb21wb25lbnRPcHRzKTtcblxuICAgICgwLCBfZG9tLnJlcGxhY2VOb2RlcykoSFRNTE5vZGUsIGVsZW1lbnQuZWwpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0dXBFbGVtZW50KGNvbXBvbmVudE9wdHMpIHtcbiAgdmFyIGVsZW1lbnQgPSAoMCwgX1N0YXRlLmNyZWF0ZUVsZW1lbnQpKGNvbXBvbmVudE9wdHMpO1xuICAoMCwgX0V2ZW50SGFuZGxlci5zZXR1cEV2ZW50SGFuZGxlcnMpKGVsZW1lbnQpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvU3RhdGUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvU3RhdGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucHJlcGFyZUNoYW5nZU9iamVjdCA9IGV4cG9ydHMuc2V0U3RhdGUgPSBleHBvcnRzLmdldENvbXBvbmVudCA9IGV4cG9ydHMuZ2V0T25seVZhbHVlcyA9IGV4cG9ydHMuY3JlYXRlQWNjZXNzb3IgPSBleHBvcnRzLmNyZWF0ZUVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cbnZhciBfYXR0cmlidXRlcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZ2xvYmFscy9hdHRyaWJ1dGVzICovIFwiLi9zcmMvZ2xvYmFscy9hdHRyaWJ1dGVzLmpzXCIpO1xuXG52YXIgX2F0dHJpYnV0ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXR0cmlidXRlcyk7XG5cbnZhciBfb2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9oZWxwZXJzL29iamVjdCAqLyBcIi4vc3JjL2hlbHBlcnMvb2JqZWN0LmpzXCIpO1xuXG52YXIgX2NvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVycy9jb21tb24gKi8gXCIuL3NyYy9oZWxwZXJzL2NvbW1vbi5qc1wiKTtcblxudmFyIF9EZWZpbml0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9EZWZpbml0aW9uICovIFwiLi9zcmMvRGVmaW5pdGlvbi5qc1wiKTtcblxudmFyIF9TdGF0ZUNoYW5nZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vU3RhdGVDaGFuZ2UgKi8gXCIuL3NyYy9TdGF0ZUNoYW5nZS5qc1wiKTtcblxudmFyIF9jaGVja2VycyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVycy9jaGVja2VycyAqLyBcIi4vc3JjL2hlbHBlcnMvY2hlY2tlcnMuanNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmV4cG9ydHMuY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQ7XG5leHBvcnRzLmNyZWF0ZUFjY2Vzc29yID0gY3JlYXRlQWNjZXNzb3I7XG5leHBvcnRzLmdldE9ubHlWYWx1ZXMgPSBnZXRPbmx5VmFsdWVzO1xuZXhwb3J0cy5nZXRDb21wb25lbnQgPSBnZXRDb21wb25lbnQ7XG5leHBvcnRzLnNldFN0YXRlID0gc2V0U3RhdGU7XG5leHBvcnRzLnByZXBhcmVDaGFuZ2VPYmplY3QgPSBwcmVwYXJlQ2hhbmdlT2JqZWN0O1xuXG5cbnZhciBFTEVNRU5UUyA9IHt9O1xudmFyIFNUQVRFID0ge307XG52YXIgRUxFTUVOVF9DT1VOVEVSID0gMTtcblxuZnVuY3Rpb24gc2V0U3RhdGUocGF0aCwgdmFsdWUpIHtcbiAgKDAsIF9vYmplY3Quc2V0KShTVEFURSwgcGF0aCwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBnZXRTdGF0ZShwYXRoKSB7XG4gIHJldHVybiAoMCwgX29iamVjdC5nZXQpKFNUQVRFLCBwYXRoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChjb21wb25lbnRPcHRzKSB7XG4gIHZhciBpZCA9IEVMRU1FTlRfQ09VTlRFUisrO1xuICB2YXIgbmFtZSA9IGNvbXBvbmVudE9wdHMubmFtZTtcblxuICB2YXIgZWxlbWVudCA9IEVMRU1FTlRTW2lkXSA9IHtcbiAgICBpZDogaWQsXG4gICAgc3RhdGU6IF9kZWZpbmVQcm9wZXJ0eSh7fSwgbmFtZSwgY29tcG9uZW50T3B0cy5jb21wb25lbnQpXG4gIH07XG5cbiAgU1RBVEVbaWRdID0ge307XG5cbiAgKDAsIF9TdGF0ZUNoYW5nZS5jcmVhdGVTdGF0ZU5vZGVzKShbaWQsIG5hbWVdKTtcblxuICAoMCwgX1N0YXRlQ2hhbmdlLnNlbmRUb1JlbmRlclF1ZXVlKShbaWRdLCBfZGVmaW5lUHJvcGVydHkoe30sIG5hbWUsIGZhbHNlKSk7XG4gICgwLCBfU3RhdGVDaGFuZ2UuYXBwbHlDaGFuZ2VzKSgpO1xuICBlbGVtZW50LmVsID0gU1RBVEVbaWRdW25hbWVdW19hdHRyaWJ1dGVzMi5kZWZhdWx0LlNFTEZdLmVsO1xuICBlbGVtZW50LmVsLnNldEF0dHJpYnV0ZShfYXR0cmlidXRlczIuZGVmYXVsdC5DT01QT05FTlRfVFlQRSwgX2F0dHJpYnV0ZXMyLmRlZmF1bHQuQkFTRSk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFjY2Vzc29yKHBhdGgpIHtcbiAgdmFyIHZhbHVlcyA9IGdldFN0YXRlKHBhdGgpO1xuICB2YXIgY29tcG9uZW50ID0gZ2V0Q29tcG9uZW50KHBhdGgpO1xuXG4gIHZhciBhY2Nlc3NvciA9IHtcbiAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICBwYXRoOiBwYXRoLFxuICAgIHN0YXJ0VHJhbnNhY3Rpb246IF9TdGF0ZUNoYW5nZS5zdGFydFRyYW5zYWN0aW9uLFxuICAgIGFwcGx5Q2hhbmdlczogX1N0YXRlQ2hhbmdlLmFwcGx5Q2hhbmdlcyxcbiAgICB1cDogZnVuY3Rpb24gdXAobGV2ZWwpIHtcbiAgICAgIHJldHVybiBtb3ZlVXBTdGF0ZVBhdGgobGV2ZWwsIHBhdGguc2xpY2UoKSk7XG4gICAgfSxcbiAgICBkb3duOiBmdW5jdGlvbiBkb3duKGFkZGl0aW9uYWxQYXRoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlQWNjZXNzb3IocGF0aC5jb25jYXQoYWRkaXRpb25hbFBhdGgpKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KGNoYW5nZU9iaikge1xuICAgICAgcmV0dXJuICgwLCBfU3RhdGVDaGFuZ2Uuc2V0VmFsdWVzKShwcmVwYXJlQ2hhbmdlT2JqZWN0KGNoYW5nZU9iaiksIHBhdGgpO1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgICByZXR1cm4gZ2V0VmFsdWVzKGFjY2Vzc29yLCBrZXksIHBhdGgpO1xuICAgIH0sXG4gICAgbWFya3VwOiBmdW5jdGlvbiBtYXJrdXAoa2V5KSB7XG4gICAgICByZXR1cm4ga2V5ID8gYWNjZXNzb3IudmFsdWVzW2tleV0uZWwgOiBhY2Nlc3Nvci52YWx1ZXNbX2F0dHJpYnV0ZXMyLmRlZmF1bHQuU0VMRl0uZWw7XG4gICAgfVxuICB9O1xuXG4gIGlmICgoMCwgX2NoZWNrZXJzLmlzQXJyYXkpKHZhbHVlcykpIHtcbiAgICBtb2RpZnlUb0FycmF5QWNjZXNzb3IoYWNjZXNzb3IpO1xuICB9XG5cbiAgcmV0dXJuIGFjY2Vzc29yO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlQ2hhbmdlT2JqZWN0KGNoYW5nZU9iaikge1xuICByZXR1cm4gKDAsIF9vYmplY3QubWFwKShjaGFuZ2VPYmosIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIGZvcmNlZCA9ICgwLCBfY2hlY2tlcnMuaXNPYmplY3QpKHYpICYmIE9iamVjdC5rZXlzKHYpWzBdID09PSAnZm9yY2UnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBmb3JjZWQgPyB2Wydmb3JjZSddIDogdixcbiAgICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgICBmb3JjZTogZm9yY2VkXG4gICAgfTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudChwYXRoKSB7XG4gIHZhciBjb21wb25lbnQgPSBFTEVNRU5UU1twYXRoWzBdXTtcblxuICBmb3IgKHZhciBpID0gMTsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICBjb21wb25lbnQgPSBjb21wb25lbnQuc3RhdGVbcGF0aFtpXV07XG5cbiAgICBpZiAoY29tcG9uZW50LmlzTGlzdCAmJiBpICE9PSBwYXRoLmxlbmd0aCAtIDEpIHtcbiAgICAgIGNvbXBvbmVudCA9IGNvbXBvbmVudC5saXN0SXRlbTtcbiAgICAgIGkgKz0gMjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5mdW5jdGlvbiBnZXRPbmx5VmFsdWVzKG9iaikge1xuICByZXR1cm4gKDAsIF9vYmplY3QubWFwKShvYmosIGZ1bmN0aW9uIChiaW5kaW5nVmFsdWVzKSB7XG4gICAgcmV0dXJuIGJpbmRpbmdWYWx1ZXNbJ3ZhbHVlJ107XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZXMoYWNjZXNzb3IsIGtleSwgc3RhdGVQYXRoKSB7XG4gIHZhciB2YWx1ZXMgPSBhY2Nlc3Nvci52YWx1ZXM7XG4gIHZhciBjb21wb25lbnQgPSBhY2Nlc3Nvci5jb21wb25lbnQ7XG5cbiAgaWYgKCFrZXkpIHtcbiAgICByZXR1cm4gZ2V0VmFsdWVzVHJlZSh2YWx1ZXMsIGNvbXBvbmVudCwge30pO1xuICB9XG5cbiAgdmFyIGJpbmRpbmcgPSBjb21wb25lbnQuc3RhdGVba2V5XTtcbiAgaWYgKGJpbmRpbmcuaXNMaXN0IHx8IGJpbmRpbmcuaXNDb21wb25lbnQpIHtcbiAgICByZXR1cm4gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoLmNvbmNhdChrZXkpKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZXNba2V5XS52YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVzVHJlZSh2YWx1ZXMsIGNvbXBvbmVudCwgdmFsdWVzVHJlZSkge1xuICAoMCwgX29iamVjdC5mb3JFYWNoKSh2YWx1ZXMsIGZ1bmN0aW9uICh2YWxzLCBiaW5kaW5nTmFtZSkge1xuICAgIGlmICgoMCwgX2NvbW1vbi5oYXMpKF9EZWZpbml0aW9uLlJFU0VSVkVEX0JJTkRJTkdfTkFNRVMsIGJpbmRpbmdOYW1lKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBiaW5kaW5nID0gY29tcG9uZW50LnN0YXRlW2JpbmRpbmdOYW1lXTtcblxuICAgIGlmIChiaW5kaW5nLmlzTGlzdCkge1xuICAgICAgdmFsdWVzVHJlZVtiaW5kaW5nTmFtZV0gPSBbXTtcbiAgICAgIHZhbHVlc1tiaW5kaW5nTmFtZV0uZm9yRWFjaChmdW5jdGlvbiAoZWwsIGkpIHtcbiAgICAgICAgdmFyIGl0ZW1WYWx1ZXMgPSB2YWx1ZXNUcmVlW2JpbmRpbmdOYW1lXVtpXSA9IHt9O1xuICAgICAgICBnZXRWYWx1ZXNUcmVlKHZhbHVlc1tiaW5kaW5nTmFtZV1baV1bYmluZGluZy5saXN0SXRlbS5uYW1lXSwgYmluZGluZy5saXN0SXRlbSwgaXRlbVZhbHVlcyk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoYmluZGluZy5pc0NvbXBvbmVudCkge1xuICAgICAgdmFyIGNvbXBvbmVudFZhbHVlcyA9IHZhbHVlc1RyZWVbYmluZGluZ05hbWVdID0ge307XG4gICAgICBnZXRWYWx1ZXNUcmVlKHZhbHVlc1tiaW5kaW5nTmFtZV0sIGJpbmRpbmcsIGNvbXBvbmVudFZhbHVlcyk7XG4gICAgfVxuXG4gICAgdmFsdWVzVHJlZVtjb21wb25lbnQuX2xpbmtzW2JpbmRpbmdOYW1lXSB8fCBiaW5kaW5nTmFtZV0gPSB2YWxzLnZhbHVlO1xuICB9KTtcblxuICByZXR1cm4gdmFsdWVzVHJlZTtcbn1cblxuZnVuY3Rpb24gbW92ZVVwU3RhdGVQYXRoKGxldmVsLCBzdGF0ZVBhdGgpIHtcbiAgdmFyIGxhc3RJZHggPSBzdGF0ZVBhdGgubGVuZ3RoO1xuXG4gIGlmIChsZXZlbCA9PT0gJycpIHtcbiAgICByZXR1cm4gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoLnNsaWNlKDAsIDIpKTtcbiAgfVxuXG4gIGlmICgoMCwgX2NoZWNrZXJzLmlzU3RyaW5nKShsZXZlbCkpIHtcbiAgICB3aGlsZSAobGFzdElkeC0tKSB7XG4gICAgICBpZiAoc3RhdGVQYXRoW2xhc3RJZHhdID09PSBsZXZlbCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoLnNsaWNlKDAsIGxhc3RJZHggKyAxKSk7XG4gIH1cblxuICBsZXZlbCA9IGxldmVsIHx8IDE7XG4gIHdoaWxlIChsYXN0SWR4LS0gJiYgbGV2ZWwtLSkge1xuICAgIGlmICgoMCwgX2NoZWNrZXJzLmlzTnVtYmVyKSgrc3RhdGVQYXRoW2xhc3RJZHggLSAxXSkpIHtcbiAgICAgIGxhc3RJZHgtLTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoLnNsaWNlKDAsIGxhc3RJZHggKyAxKSk7XG59XG5cbmZ1bmN0aW9uIG1vZGlmeVRvQXJyYXlBY2Nlc3NvcihhY2Nlc3Nvcikge1xuICBPYmplY3QuYXNzaWduKGFjY2Vzc29yLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQobnVtKSB7XG4gICAgICByZXR1cm4gY3JlYXRlQWNjZXNzb3IoYWNjZXNzb3IucGF0aC5jb25jYXQobnVtLCBhY2Nlc3Nvci5jb21wb25lbnQubGlzdEl0ZW0ubmFtZSkpO1xuICAgIH0sXG5cbiAgICBwdXNoOiBmdW5jdGlvbiBwdXNoKGVscykge1xuICAgICAgcmV0dXJuICgwLCBfU3RhdGVDaGFuZ2UubW9kaWZ5TGlzdCkoJ2FkZCcsIHsgc3RhcnQ6IGFjY2Vzc29yLnZhbHVlcy5sZW5ndGgsIGVsczogZWxzIH0sIGFjY2Vzc29yKTtcbiAgICB9LFxuICAgIHVuc2hpZnQ6IGZ1bmN0aW9uIHVuc2hpZnQoZWxzKSB7XG4gICAgICByZXR1cm4gKDAsIF9TdGF0ZUNoYW5nZS5tb2RpZnlMaXN0KSgnYWRkJywgeyBzdGFydDogMCwgZWxzOiBlbHMgfSwgYWNjZXNzb3IpO1xuICAgIH0sXG4gICAgYWRkOiBmdW5jdGlvbiBhZGQoc3RhcnQsIGVscykge1xuICAgICAgcmV0dXJuICgwLCBfU3RhdGVDaGFuZ2UubW9kaWZ5TGlzdCkoJ2FkZCcsIHsgc3RhcnQ6IHN0YXJ0LCBlbHM6IGVscyB9LCBhY2Nlc3Nvcik7XG4gICAgfSxcblxuICAgIHBvcDogZnVuY3Rpb24gcG9wKG51bSkge1xuICAgICAgcmV0dXJuICgwLCBfU3RhdGVDaGFuZ2UubW9kaWZ5TGlzdCkoJ3JlbW92ZScsIHsgc3RhcnQ6IGFjY2Vzc29yLnZhbHVlcy5sZW5ndGggLSAobnVtIHx8IDEpLCBudW06IG51bSB9LCBhY2Nlc3Nvcik7XG4gICAgfSxcbiAgICBzaGlmdDogZnVuY3Rpb24gc2hpZnQobnVtKSB7XG4gICAgICByZXR1cm4gKDAsIF9TdGF0ZUNoYW5nZS5tb2RpZnlMaXN0KSgncmVtb3ZlJywgeyBzdGFydDogMCwgbnVtOiBudW0gfSwgYWNjZXNzb3IpO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoc3RhcnQsIG51bSkge1xuICAgICAgcmV0dXJuICgwLCBfU3RhdGVDaGFuZ2UubW9kaWZ5TGlzdCkoJ3JlbW92ZScsIHsgc3RhcnQ6IHN0YXJ0LCBudW06IG51bSB9LCBhY2Nlc3Nvcik7XG4gICAgfSxcblxuICAgIGxlbmd0aDogZnVuY3Rpb24gbGVuZ3RoKCkge1xuICAgICAgcmV0dXJuIGFjY2Vzc29yLnZhbHVlcy5sZW5ndGg7XG4gICAgfSxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICByZXR1cm4gbWFwTGlzdChhY2Nlc3Nvcik7XG4gICAgfSxcbiAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNiKSB7XG4gICAgICByZXR1cm4gaXRlcmF0ZUxpc3RWYWx1ZXMoYWNjZXNzb3IsIGNiKTtcbiAgICB9LFxuICAgIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNiKSB7XG4gICAgICByZXR1cm4gZmlsdGVyTGlzdChhY2Nlc3NvciwgY2IpO1xuICAgIH0sXG4gICAgbWFwOiBmdW5jdGlvbiBtYXAoY2IpIHtcbiAgICAgIHJldHVybiBtYXBMaXN0KGFjY2Vzc29yLCBjYik7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gaXRlcmF0ZUxpc3RWYWx1ZXMoYWNjZXNzb3IsIGNiKSB7XG4gIGFjY2Vzc29yLnZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCwgaSkge1xuICAgIHJldHVybiBjYihnZXRWYWx1ZXNUcmVlKGVsW2FjY2Vzc29yLmNvbXBvbmVudC5saXN0SXRlbS5uYW1lXSwgYWNjZXNzb3IuY29tcG9uZW50Lmxpc3RJdGVtLCB7fSksIGkpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyTGlzdChhY2Nlc3NvciwgY2IpIHtcbiAgdmFyIG5ld0xpc3QgPSBbXTtcblxuICBpdGVyYXRlTGlzdFZhbHVlcyhhY2Nlc3NvciwgZnVuY3Rpb24gKGVsLCBpKSB7XG4gICAgaWYgKGNiKGVsLCBpKSkge1xuICAgICAgbmV3TGlzdC5wdXNoKGVsKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBuZXdMaXN0O1xufVxuXG5mdW5jdGlvbiBtYXBMaXN0KGFjY2Vzc29yLCBjYikge1xuICB2YXIgbmV3TGlzdCA9IFtdO1xuICBpdGVyYXRlTGlzdFZhbHVlcyhhY2Nlc3NvciwgZnVuY3Rpb24gKGVsLCBpKSB7XG4gICAgcmV0dXJuIG5ld0xpc3QucHVzaChjYiA/IGNiKGVsLCBpKSA6IGVsKTtcbiAgfSk7XG4gIHJldHVybiBuZXdMaXN0O1xufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9TdGF0ZUNoYW5nZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9TdGF0ZUNoYW5nZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5zZW5kVG9SZW5kZXJRdWV1ZSA9IGV4cG9ydHMuYXBwbHlDaGFuZ2VzID0gZXhwb3J0cy5zdGFydFRyYW5zYWN0aW9uID0gZXhwb3J0cy5tb2RpZnlMaXN0ID0gZXhwb3J0cy5jcmVhdGVTdGF0ZU5vZGVzID0gZXhwb3J0cy5zZXRWYWx1ZXMgPSB1bmRlZmluZWQ7XG5cbnZhciBfYXR0cmlidXRlcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZ2xvYmFscy9hdHRyaWJ1dGVzICovIFwiLi9zcmMvZ2xvYmFscy9hdHRyaWJ1dGVzLmpzXCIpO1xuXG52YXIgX2F0dHJpYnV0ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXR0cmlidXRlcyk7XG5cbnZhciBfb2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9oZWxwZXJzL29iamVjdCAqLyBcIi4vc3JjL2hlbHBlcnMvb2JqZWN0LmpzXCIpO1xuXG52YXIgX2NoZWNrZXJzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9oZWxwZXJzL2NoZWNrZXJzICovIFwiLi9zcmMvaGVscGVycy9jaGVja2Vycy5qc1wiKTtcblxudmFyIF9lcXVhbGl0eSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVycy9lcXVhbGl0eSAqLyBcIi4vc3JjL2hlbHBlcnMvZXF1YWxpdHkuanNcIik7XG5cbnZhciBfZXF1YWxpdHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXF1YWxpdHkpO1xuXG52YXIgX2NvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVycy9jb21tb24gKi8gXCIuL3NyYy9oZWxwZXJzL2NvbW1vbi5qc1wiKTtcblxudmFyIF9TdGF0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vU3RhdGUgKi8gXCIuL3NyYy9TdGF0ZS5qc1wiKTtcblxudmFyIF9WaWV3ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9WaWV3ICovIFwiLi9zcmMvVmlldy5qc1wiKTtcblxudmFyIF9EZWZpbml0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9EZWZpbml0aW9uICovIFwiLi9zcmMvRGVmaW5pdGlvbi5qc1wiKTtcblxudmFyIF9CaW5kaW5nTm90RXhpc3RzRXJyb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Vycm9ycy9CaW5kaW5nTm90RXhpc3RzRXJyb3IgKi8gXCIuL3NyYy9lcnJvcnMvQmluZGluZ05vdEV4aXN0c0Vycm9yLmpzXCIpO1xuXG52YXIgX0JpbmRpbmdOb3RFeGlzdHNFcnJvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CaW5kaW5nTm90RXhpc3RzRXJyb3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5leHBvcnRzLnNldFZhbHVlcyA9IHNldFZhbHVlcztcbmV4cG9ydHMuY3JlYXRlU3RhdGVOb2RlcyA9IGNyZWF0ZVN0YXRlTm9kZXM7XG5leHBvcnRzLm1vZGlmeUxpc3QgPSBtb2RpZnlMaXN0O1xuZXhwb3J0cy5zdGFydFRyYW5zYWN0aW9uID0gc3RhcnRUcmFuc2FjdGlvbjtcbmV4cG9ydHMuYXBwbHlDaGFuZ2VzID0gYXBwbHlDaGFuZ2VzO1xuZXhwb3J0cy5zZW5kVG9SZW5kZXJRdWV1ZSA9IHNlbmRUb1JlbmRlclF1ZXVlO1xuXG5cbnZhciBDSEFOR0VTID0geyBjaGFuZ2VzOiB7fSwgY29sbGVjdGluZzogZmFsc2UgfTtcbnZhciBQUk9NSVNFU19SRVNPTFZFUyA9IFtdO1xudmFyIExJRkVfQ1lDTEVfSEFORExFUlMgPSB7IGxpc3Q6IFtdIH07XG5cbmZ1bmN0aW9uIHN0YXJ0VHJhbnNhY3Rpb24oKSB7XG4gIGFwcGx5Q2hhbmdlcygpO1xuICBDSEFOR0VTLmNvbGxlY3RpbmcgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBhcHBseUNoYW5nZXMoKSB7XG4gIHZhciBjaGFuZ2VzID0gQ0hBTkdFUy5jaGFuZ2VzO1xuICBDSEFOR0VTLmNoYW5nZXMgPSB7fTtcbiAgKDAsIF9WaWV3LnJlbmRlckNoYW5nZXMpKGNoYW5nZXMpO1xuICByZXR1cm4gcnVuTGlmZUN5Y2xlSG9va3MoKTtcbn1cblxuZnVuY3Rpb24gcnVuTGlmZUN5Y2xlSG9va3MoKSB7XG4gIHZhciBsaWZlQ3ljbGVIYW5kbGVycyA9IExJRkVfQ1lDTEVfSEFORExFUlMubGlzdDtcbiAgTElGRV9DWUNMRV9IQU5ETEVSUy5saXN0ID0gW107XG4gIGxpZmVDeWNsZUhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24gKGgpIHtcbiAgICByZXR1cm4gaCgpO1xuICB9KTtcblxuICBpZiAoISgwLCBfY2hlY2tlcnMuaXNFbXB0eSkoQ0hBTkdFUy5jaGFuZ2VzKSkge1xuICAgIHJldHVybiBhcHBseUNoYW5nZXMoKTtcbiAgfVxuXG4gIHJldHVybiBmaW5hbGl6ZVRyYW5zYWN0aW9uKCk7XG59XG5cbmZ1bmN0aW9uIGZpbmFsaXplVHJhbnNhY3Rpb24oKSB7XG4gIENIQU5HRVMuY29sbGVjdGluZyA9IGZhbHNlO1xuICB2YXIgcmVzb2x2ZVByb21pc2UgPSB2b2lkIDA7XG5cbiAgd2hpbGUgKHJlc29sdmVQcm9taXNlID0gUFJPTUlTRVNfUkVTT0xWRVMucG9wKCkpIHtcbiAgICByZXNvbHZlUHJvbWlzZSh0cnVlKTtcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIHNlbmRUb1JlbmRlclF1ZXVlKHBhdGgsIGNoYW5nZSkge1xuICAoMCwgX29iamVjdC5zZXQpKENIQU5HRVMuY2hhbmdlcywgcGF0aCwgY2hhbmdlKTtcbn1cblxuZnVuY3Rpb24gaXNDb2xsZWN0aW5nQ2hhbmdlcygpIHtcbiAgcmV0dXJuIENIQU5HRVMuY29sbGVjdGluZztcbn1cblxuZnVuY3Rpb24gYWRkTGlmZUN5Y2xlSG9vayhob29rVHlwZSwgYmluZGluZywgdmFsdWVzLCBhY2Nlc3NvciwgaWR4KSB7XG4gIHZhciBob29rID0gYmluZGluZy5ob29rc1tob29rVHlwZV07XG5cbiAgTElGRV9DWUNMRV9IQU5ETEVSUy5saXN0LnB1c2goZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbCA9IHZhbHVlc1tiaW5kaW5nLm5hbWUgfHwgX2F0dHJpYnV0ZXMyLmRlZmF1bHQuU0VMRl0uZWw7XG4gICAgdmFyIHZhbHMgPSAhYmluZGluZy5uYW1lID8gKDAsIF9TdGF0ZS5nZXRPbmx5VmFsdWVzKSh2YWx1ZXMpIDogdmFsdWVzW2JpbmRpbmcubmFtZV0udmFsdWU7XG4gICAgaG9vayhlbCwgdmFscywgYWNjZXNzb3IsIGlkeCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdGF0ZU5vZGVzKHN0YXRlUGF0aCkge1xuICB2YXIgY29tcG9uZW50ID0gKDAsIF9TdGF0ZS5nZXRDb21wb25lbnQpKHN0YXRlUGF0aCk7XG4gIHZhciB2YWx1ZXNOb2RlID0gY3JlYXRlU3RhdGVOb2RlKGNvbXBvbmVudCk7XG4gICgwLCBfU3RhdGUuc2V0U3RhdGUpKHN0YXRlUGF0aCwgdmFsdWVzTm9kZSk7XG5cbiAgKDAsIF9vYmplY3QuZm9yRWFjaCkoY29tcG9uZW50LnN0YXRlLCBmdW5jdGlvbiAoYmluZGluZywgYmluZGluZ05hbWUpIHtcbiAgICBpZiAoYmluZGluZy5pc0NvbXBvbmVudCkge1xuICAgICAgY3JlYXRlU3RhdGVOb2RlcyhzdGF0ZVBhdGguY29uY2F0KGJpbmRpbmdOYW1lKSk7XG4gICAgfVxuICB9KTtcblxuICB2YXIgYWNjZXNzb3IgPSAoMCwgX1N0YXRlLmNyZWF0ZUFjY2Vzc29yKShzdGF0ZVBhdGgpO1xuICBhZGRMaWZlQ3ljbGVIb29rKCdtb3VudCcsIGNvbXBvbmVudC5zdGF0ZVtfYXR0cmlidXRlczIuZGVmYXVsdC5TRUxGXSwgdmFsdWVzTm9kZSwgYWNjZXNzb3IsIHN0YXRlUGF0aC5zbGljZSgtMilbMF0pO1xuXG4gIHJldHVybiB2YWx1ZXNOb2RlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdGF0ZU5vZGUoY29tcG9uZW50KSB7XG4gIHZhciB2YWx1ZXNOb2RlcyA9ICgwLCBfb2JqZWN0Lm1hcCkoY29tcG9uZW50LnN0YXRlLCBmdW5jdGlvbiAoYmluZGluZykge1xuICAgIHZhciB2YWx1ZU5vZGUgPSBiaW5kaW5nLmlzTGlzdCA/IFtdIDoge307XG5cbiAgICByZXR1cm4gX0RlZmluaXRpb24uVkFMVUVfVFlQRVMucmVkdWNlKGZ1bmN0aW9uIChhLCBrZXkpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHZvaWQgMDtcblxuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSAndmFsdWUnOlxuICAgICAgICBjYXNlICdodG1sJzpcbiAgICAgICAgICB2YWx1ZSA9IGJpbmRpbmcuaW5pdFZhbHVlIHx8ICcnO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdmFsdWUgPSB7fTtcbiAgICAgIH1cblxuICAgICAgYVtrZXldID0gdmFsdWU7XG5cbiAgICAgIHJldHVybiBhO1xuICAgIH0sIHZhbHVlTm9kZSk7XG4gIH0pO1xuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHZhbHVlc05vZGVzLCBfZGVmaW5lUHJvcGVydHkoe30sIF9hdHRyaWJ1dGVzMi5kZWZhdWx0LlNFTEYsICgwLCBfb2JqZWN0LnRvT2JqZWN0KShfRGVmaW5pdGlvbi5WQUxVRV9UWVBFUywge30pKSk7XG59XG5cbmZ1bmN0aW9uIHNldFZhbHVlcyhjaGFuZ2VWYWx1ZXMsIHN0YXRlUGF0aCwgY2FsbGVkRGVwZW5kZW5jZXMpIHtcbiAgY2FsbGVkRGVwZW5kZW5jZXMgPSBjYWxsZWREZXBlbmRlbmNlcyB8fCBbXTtcbiAgdmFyIGFjY2Vzc29yID0gKDAsIF9TdGF0ZS5jcmVhdGVBY2Nlc3Nvcikoc3RhdGVQYXRoKTtcblxuICBpZiAoIWFjY2Vzc29yLnZhbHVlcykge1xuICAgIGFjY2Vzc29yLnZhbHVlcyA9IGNyZWF0ZVN0YXRlTm9kZXMoc3RhdGVQYXRoKTtcbiAgICB2YXIgc3RhcnQgPSArc3RhdGVQYXRoLnNsaWNlKC0yKVswXTtcbiAgICBzZW5kVG9SZW5kZXJRdWV1ZShzdGF0ZVBhdGgsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgX2F0dHJpYnV0ZXMyLmRlZmF1bHQuRlVMTF9DSEFOR0UsIHsgYWRkOiB7IHN0YXJ0OiBzdGFydCwgZW5kOiBzdGFydCArIDEgfSB9KSk7XG4gIH1cblxuICAoMCwgX29iamVjdC5mb3JFYWNoKShjaGFuZ2VWYWx1ZXMsIGZ1bmN0aW9uIChjaGFuZ2UsIGJpbmRpbmdOYW1lKSB7XG4gICAgcmV0dXJuIHNldFZhbHVlKGJpbmRpbmdOYW1lLCBjaGFuZ2UsIGFjY2Vzc29yLCBjYWxsZWREZXBlbmRlbmNlcyk7XG4gIH0pO1xuXG4gIGFkZExpZmVDeWNsZUhvb2soJ3VwZGF0ZScsIGFjY2Vzc29yLmNvbXBvbmVudC5zdGF0ZVtfYXR0cmlidXRlczIuZGVmYXVsdC5TRUxGXSwgYWNjZXNzb3IudmFsdWVzLCBhY2Nlc3Nvciwgc3RhdGVQYXRoLnNsaWNlKC0yKVswXSk7XG5cbiAgaWYgKGlzQ29sbGVjdGluZ0NoYW5nZXMoKSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzKSB7XG4gICAgICByZXR1cm4gUFJPTUlTRVNfUkVTT0xWRVMucHVzaChyZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGFwcGx5Q2hhbmdlcygpO1xufVxuXG5mdW5jdGlvbiBzZXRWYWx1ZShiaW5kaW5nTmFtZSwgY2hhbmdlLCBhY2Nlc3NvciwgY2FsbGVkRGVwZW5kZW5jZXMpIHtcbiAgdmFyIHN0YXRlUGF0aCA9IGFjY2Vzc29yLnBhdGg7XG4gIHZhciBjb21wb25lbnQgPSBhY2Nlc3Nvci5jb21wb25lbnQ7XG4gIHZhciB2YWx1ZXMgPSBhY2Nlc3Nvci52YWx1ZXM7XG4gIHZhciBiaW5kaW5nID0gY29tcG9uZW50LnN0YXRlW2JpbmRpbmdOYW1lXTtcblxuICBpZiAoIWJpbmRpbmcpIHtcbiAgICBiaW5kaW5nTmFtZSA9IGNvbXBvbmVudC5vdXRlck5hbWVzW2JpbmRpbmdOYW1lXTtcbiAgICBiaW5kaW5nID0gY29tcG9uZW50LnN0YXRlW2JpbmRpbmdOYW1lXTtcbiAgfVxuXG4gIGlmICghYmluZGluZykge1xuICAgIHRocm93IG5ldyBfQmluZGluZ05vdEV4aXN0c0Vycm9yMi5kZWZhdWx0KGJpbmRpbmdOYW1lLCBjb21wb25lbnQubmFtZSwgc3RhdGVQYXRoKTtcbiAgfVxuXG4gIGlmIChjaGFuZ2UudHlwZSA9PT0gJ3ZhbHVlJykge1xuICAgIGlmIChiaW5kaW5nLmlzTGlzdCkge1xuICAgICAgcmV0dXJuIHNldFZhbHVlRm9yTGlzdChiaW5kaW5nLCBjaGFuZ2UsIHZhbHVlc1tiaW5kaW5nTmFtZV0sIGFjY2Vzc29yKTtcbiAgICB9XG5cbiAgICBpZiAoKDAsIF9jaGVja2Vycy5pc09iamVjdCkoY2hhbmdlLnZhbHVlKSAmJiBiaW5kaW5nLmlzQ29tcG9uZW50KSB7XG4gICAgICByZXR1cm4gc2V0VmFsdWVGb3JDb21wb25lbnQoYmluZGluZywgY2hhbmdlLCBjb21wb25lbnQsIHN0YXRlUGF0aCk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVxdWFsID0gKDAsIF9lcXVhbGl0eTIuZGVmYXVsdCkodmFsdWVzW2JpbmRpbmdOYW1lXVtjaGFuZ2UudHlwZV0sIGNoYW5nZS52YWx1ZSk7XG5cbiAgaWYgKCFlcXVhbCB8fCAhKDAsIF9jaGVja2Vycy5pc0VtcHR5KShlcXVhbCkgfHwgY2hhbmdlLmZvcmNlKSB7XG4gICAgdmFsdWVzW2JpbmRpbmdOYW1lXVtjaGFuZ2UudHlwZV0gPSBjaGFuZ2UudmFsdWU7XG5cbiAgICBpZiAoY2hhbmdlLnR5cGUgIT09ICd2YWx1ZScpIHtcbiAgICAgIHJldHVybiBzZW5kVG9SZW5kZXJRdWV1ZShzdGF0ZVBhdGguY29uY2F0KGJpbmRpbmdOYW1lKSwgX2RlZmluZVByb3BlcnR5KHt9LCBjaGFuZ2UudHlwZSwgZmFsc2UpKTtcbiAgICB9XG5cbiAgICBhZGRMaWZlQ3ljbGVIb29rKCd1cGRhdGUnLCBiaW5kaW5nLCB2YWx1ZXMsIGFjY2Vzc29yLCBzdGF0ZVBhdGguc2xpY2UoLTIpWzBdKTtcbiAgICBjYWxsZWREZXBlbmRlbmNlcy5wdXNoKGJpbmRpbmdOYW1lICsgJzonICsgY2hhbmdlLnR5cGUpO1xuXG4gICAgaWYgKCFiaW5kaW5nLmh0bWwpIHtcbiAgICAgIHNldFZhbHVlKGJpbmRpbmdOYW1lLCB7IHZhbHVlOiBjaGFuZ2UudmFsdWUsIHR5cGU6ICdodG1sJywgZm9yY2U6IGNoYW5nZS5mb3JjZSB9LCBhY2Nlc3NvciwgY2FsbGVkRGVwZW5kZW5jZXMpO1xuICAgIH1cblxuICAgIHZhciBsaW5rID0gY29tcG9uZW50LmxpbmtzW2JpbmRpbmdOYW1lXTtcbiAgICBpZiAobGluaykge1xuICAgICAgc2V0VmFsdWUobGluay5saW5rLCB7IHZhbHVlOiBjaGFuZ2UudmFsdWUsIHR5cGU6ICd2YWx1ZScsIGZvcmNlOiBjaGFuZ2UuZm9yY2UgfSwgYWNjZXNzb3IuZG93bihsaW5rLmNvbXBvbmVudCksIFtdKTtcbiAgICB9XG5cbiAgICAoMCwgX29iamVjdC5mb3JFYWNoKShiaW5kaW5nLmRlcGVuZGFudHMsIGZ1bmN0aW9uIChkZXBlbmRhbnQsIGRlcGVuZGFudEtleSkge1xuICAgICAgaWYgKCgwLCBfY29tbW9uLmhhcykoY2FsbGVkRGVwZW5kZW5jZXMsIGRlcGVuZGFudEtleSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3VmFsdWUgPSBjb21wb25lbnQuc3RhdGVbZGVwZW5kYW50Lm5hbWVdLmV2YWx1YXRlW2RlcGVuZGFudC50eXBlXSh2YWx1ZXMsIGFjY2Vzc29yKTtcbiAgICAgIHNldFZhbHVlKGRlcGVuZGFudC5uYW1lLCB7IHZhbHVlOiBuZXdWYWx1ZSwgdHlwZTogZGVwZW5kYW50LnR5cGUgfSwgYWNjZXNzb3IsIGNhbGxlZERlcGVuZGVuY2VzKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRWYWx1ZUZvckxpc3QoYmluZGluZywgY2hhbmdlLCBhcnIsIGFjY2Vzc29yKSB7XG4gIE9iamVjdC5rZXlzKGNoYW5nZS52YWx1ZSkuZm9yRWFjaChmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBzZXRWYWx1ZXMoKDAsIF9TdGF0ZS5wcmVwYXJlQ2hhbmdlT2JqZWN0KShjaGFuZ2UudmFsdWVbaV0pLCBhY2Nlc3Nvci5wYXRoLmNvbmNhdChiaW5kaW5nLm5hbWUsIGksIGJpbmRpbmcubGlzdEl0ZW0ubmFtZSkpO1xuICB9KTtcblxuICB2YXIgaW5kZXhFcXVhbGl0eSA9ICgwLCBfZXF1YWxpdHkyLmRlZmF1bHQpKGFyciwgY2hhbmdlLnZhbHVlKTtcbiAgdmFyIHJlbW92ZWRDb3VudCA9IDA7XG4gICgwLCBfb2JqZWN0LmZvckVhY2gpKGluZGV4RXF1YWxpdHksIGZ1bmN0aW9uIChjaGFuZ2VPYmosIGlkeCkge1xuICAgIGlmIChjaGFuZ2VPYmoucmVtb3ZlKSB7XG4gICAgICBjaGFuZ2VPYmoucmVtb3ZlID0gcmVtb3ZlTGlzdEl0ZW0oYXJyLCBpZHggLSByZW1vdmVkQ291bnQsIGJpbmRpbmcsIGFjY2Vzc29yKTtcbiAgICAgIHJlbW92ZWRDb3VudCsrO1xuICAgIH1cblxuICAgIHNlbmRUb1JlbmRlclF1ZXVlKGFjY2Vzc29yLnBhdGguY29uY2F0KGJpbmRpbmcubmFtZSwgaWR4LCBiaW5kaW5nLmxpc3RJdGVtLm5hbWUpLCBfZGVmaW5lUHJvcGVydHkoe30sIF9hdHRyaWJ1dGVzMi5kZWZhdWx0LkZVTExfQ0hBTkdFLCBjaGFuZ2VPYmopKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldFZhbHVlRm9yQ29tcG9uZW50KGJpbmRpbmcsIGNoYW5nZSwgY29tcG9uZW50LCBzdGF0ZVBhdGgpIHtcbiAgc2V0VmFsdWVzKCgwLCBfU3RhdGUucHJlcGFyZUNoYW5nZU9iamVjdCkoY2hhbmdlLnZhbHVlKSwgc3RhdGVQYXRoLmNvbmNhdChiaW5kaW5nLm5hbWUpKTtcbn1cblxuZnVuY3Rpb24gbW9kaWZ5TGlzdChhY3Rpb24sIGFyZ3MsIGFjY2Vzc29yKSB7XG4gIHZhciBhcnIgPSBhY2Nlc3Nvci52YWx1ZXM7XG4gIHZhciBsaXN0UGF0aCA9IGFjY2Vzc29yLnBhdGg7XG4gIHZhciBpdGVtTmFtZSA9IGFjY2Vzc29yLmNvbXBvbmVudC5saXN0SXRlbS5uYW1lO1xuICB2YXIgc3RhcnQgPSBhcmdzLnN0YXJ0O1xuICB2YXIgY2hhbmdlT2JqID0ge307XG5cbiAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICBjYXNlICdhZGQnOlxuICAgICAgY2hhbmdlT2JqID0gYWRkVG9MaXN0KGFyciwgc3RhcnQsIGFyZ3MuZWxzLCBsaXN0UGF0aCwgaXRlbU5hbWUpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdyZW1vdmUnOlxuICAgICAgdmFyIGVuZCA9IHN0YXJ0ICsgKGFyZ3MubnVtIHx8IDEpO1xuICAgICAgY2hhbmdlT2JqID0gcmVtb3ZlRnJvbUxpc3QoYXJyLCBzdGFydCwgZW5kLCBhY2Nlc3Nvci5jb21wb25lbnQsIGFjY2Vzc29yKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgKDAsIF9vYmplY3QuZm9yRWFjaCkoY2hhbmdlT2JqLCBmdW5jdGlvbiAoY2hhbmdlLCBpZHgpIHtcbiAgICByZXR1cm4gc2VuZFRvUmVuZGVyUXVldWUobGlzdFBhdGguY29uY2F0KGlkeCwgaXRlbU5hbWUsIF9hdHRyaWJ1dGVzMi5kZWZhdWx0LkZVTExfQ0hBTkdFKSwgY2hhbmdlT2JqW2lkeF1bX2F0dHJpYnV0ZXMyLmRlZmF1bHQuRlVMTF9DSEFOR0VdKTtcbiAgfSk7XG5cbiAgaWYgKGlzQ29sbGVjdGluZ0NoYW5nZXMoKSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzKSB7XG4gICAgICByZXR1cm4gUFJPTUlTRVNfUkVTT0xWRVMucHVzaChyZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGFwcGx5Q2hhbmdlcygpO1xufVxuXG5mdW5jdGlvbiBhZGRUb0xpc3QoYXJyLCBzdGFydCwgZWxzLCBsaXN0UGF0aCwgaXRlbU5hbWUpIHtcbiAgZWxzID0gKDAsIF9jaGVja2Vycy5pc0FycmF5KShlbHMpID8gZWxzIDogW2Vsc107XG5cbiAgZWxzLmZvckVhY2goZnVuY3Rpb24gKGVsLCBpKSB7XG4gICAgYXJyLnNwbGljZShpICsgc3RhcnQsIDAsIG51bGwpO1xuICAgIHNldFZhbHVlcygoMCwgX1N0YXRlLnByZXBhcmVDaGFuZ2VPYmplY3QpKGVsKSwgbGlzdFBhdGguY29uY2F0KGkgKyBzdGFydCwgaXRlbU5hbWUpKTtcbiAgfSk7XG5cbiAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgc3RhcnQsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgX2F0dHJpYnV0ZXMyLmRlZmF1bHQuRlVMTF9DSEFOR0UsIHsgYWRkOiB7IHN0YXJ0OiBzdGFydCwgZW5kOiBzdGFydCArIGVscy5sZW5ndGggfSB9KSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZyb21MaXN0KGFyciwgc3RhcnQsIGVuZCwgbGlzdEJpbmRpbmcsIGFjY2Vzc29yKSB7XG4gIHZhciBjaGFuZ2VPYmogPSB7fTtcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIHZhciByZW1vdmVkRE9NTm9kZSA9IHJlbW92ZUxpc3RJdGVtKGFyciwgaSwgbGlzdEJpbmRpbmcsIGFjY2Vzc29yKTtcbiAgICBjaGFuZ2VPYmpbaV0gPSBfZGVmaW5lUHJvcGVydHkoe30sIF9hdHRyaWJ1dGVzMi5kZWZhdWx0LkZVTExfQ0hBTkdFLCB7IHJlbW92ZTogcmVtb3ZlZERPTU5vZGUgfSk7XG4gIH1cblxuICByZXR1cm4gY2hhbmdlT2JqO1xufVxuXG5mdW5jdGlvbiByZW1vdmVMaXN0SXRlbShhcnIsIGlkeCwgbGlzdEJpbmRpbmcsIGFjY2Vzc29yKSB7XG4gIHZhciByZW1vdmVkTm9kZSA9IGFyci5zcGxpY2UoaWR4LCAxKVswXVtsaXN0QmluZGluZy5saXN0SXRlbS5uYW1lXTtcbiAgYWRkTGlmZUN5Y2xlSG9vaygncmVtb3ZlJywgbGlzdEJpbmRpbmcubGlzdEl0ZW0uc3RhdGVbX2F0dHJpYnV0ZXMyLmRlZmF1bHQuU0VMRl0sIHJlbW92ZWROb2RlLCBhY2Nlc3NvciwgaWR4KTtcbiAgcmV0dXJuIHJlbW92ZWROb2RlW19hdHRyaWJ1dGVzMi5kZWZhdWx0LlNFTEZdLmVsO1xufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9WaWV3LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvVmlldy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlbmRlckNoYW5nZXMgPSBleHBvcnRzLmNyZWF0ZUFuZEFwcGVuZFN0eWxlcyA9IHVuZGVmaW5lZDtcblxudmFyIF9hdHRyaWJ1dGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9nbG9iYWxzL2F0dHJpYnV0ZXMgKi8gXCIuL3NyYy9nbG9iYWxzL2F0dHJpYnV0ZXMuanNcIik7XG5cbnZhciBfYXR0cmlidXRlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hdHRyaWJ1dGVzKTtcblxudmFyIF9jb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlcnMvY29tbW9uICovIFwiLi9zcmMvaGVscGVycy9jb21tb24uanNcIik7XG5cbnZhciBfb2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9oZWxwZXJzL29iamVjdCAqLyBcIi4vc3JjL2hlbHBlcnMvb2JqZWN0LmpzXCIpO1xuXG52YXIgX2NoZWNrZXJzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9oZWxwZXJzL2NoZWNrZXJzICovIFwiLi9zcmMvaGVscGVycy9jaGVja2Vycy5qc1wiKTtcblxudmFyIF9TdGF0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vU3RhdGUgKi8gXCIuL3NyYy9TdGF0ZS5qc1wiKTtcblxudmFyIF9kb20gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlcnMvZG9tICovIFwiLi9zcmMvaGVscGVycy9kb20uanNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuY3JlYXRlQW5kQXBwZW5kU3R5bGVzID0gY3JlYXRlQW5kQXBwZW5kU3R5bGVzO1xuZXhwb3J0cy5yZW5kZXJDaGFuZ2VzID0gcmVuZGVyQ2hhbmdlcztcblxuXG52YXIgcmVuZGVyID0ge1xuICBodG1sOiBhcHBseU1hcmt1cCxcbiAgY2xhc3M6IGFwcGx5Q2xhc3NlcyxcbiAgc3R5bGU6IGFwcGx5U3R5bGVzLFxuICBhdHRyczogYXBwbHlBdHRyaWJ1dGVzXG59O1xuXG5mdW5jdGlvbiByZW5kZXJDaGFuZ2VzKGNoYW5nZXMpIHtcbiAgKDAsIF9vYmplY3QuZm9yRWFjaCkoY2hhbmdlcywgZnVuY3Rpb24gKGNvbXBvbmVudENoYW5nZXMsIGVsZW1lbnRJZCkge1xuICAgIHZhciBjb21wb25lbnRJZCA9IE9iamVjdC5rZXlzKGNvbXBvbmVudENoYW5nZXMpWzBdO1xuICAgIHZhciBjb21wb25lbnRBY2Nlc3NvciA9ICgwLCBfU3RhdGUuY3JlYXRlQWNjZXNzb3IpKFtlbGVtZW50SWQsIGNvbXBvbmVudElkXSk7XG4gICAgYXBwbHlNYXJrdXAoY29tcG9uZW50QWNjZXNzb3IuY29tcG9uZW50LCBjb21wb25lbnRBY2Nlc3Nvci52YWx1ZXMsIFtlbGVtZW50SWQsIGNvbXBvbmVudElkXSwgY29tcG9uZW50Q2hhbmdlc1tjb21wb25lbnRJZF0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYXBwbHlNYXJrdXAoY29tcG9uZW50LCB2YWx1ZSwgc3RhdGVQYXRoLCBjaGFuZ2VzKSB7XG4gIGlmICghY29tcG9uZW50Lm1hcmt1cCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjb21wb25lbnQuaXNMaXN0KSB7XG4gICAgcmV0dXJuIHJlbmRlckxpc3QoY29tcG9uZW50LCB2YWx1ZSwgc3RhdGVQYXRoLCBjaGFuZ2VzKTtcbiAgfVxuXG4gIGlmIChjb21wb25lbnQuaXNDb21wb25lbnQpIHtcbiAgICByZXR1cm4gcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgdmFsdWUsIHN0YXRlUGF0aCwgY2hhbmdlcyk7XG4gIH1cblxuICB2YWx1ZSA9ICgwLCBfY2hlY2tlcnMuaXNVbmRlZmluZWQpKHZhbHVlKSA/ICcnIDogdmFsdWU7XG5cbiAgaWYgKGNvbXBvbmVudC5tYXJrdXAudGFnTmFtZSA9PT0gJ0lOUFVUJykge1xuICAgIGNvbXBvbmVudC5tYXJrdXAudmFsdWUgPSB2YWx1ZTtcbiAgICByZXR1cm47XG4gIH1cblxuICAoMCwgX2RvbS5yZXdyaXRlVG9Ob2RlKShjb21wb25lbnQubWFya3VwLCB2YWx1ZSk7XG5cbiAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgdmFsdWUsIHN0YXRlUGF0aCwgY2hhbmdlcykge1xuICBpZiAoY2hhbmdlcykge1xuICAgIHJldHVybiB1cGRhdGVDb21wb25lbnQoY29tcG9uZW50LCB2YWx1ZSwgc3RhdGVQYXRoLCBjaGFuZ2VzKTtcbiAgfVxuXG4gIHJldHVybiBkcmF3Q29tcG9uZW50KHZhbHVlLCBzdGF0ZVBhdGgpO1xufVxuXG5mdW5jdGlvbiBkcmF3Q29tcG9uZW50KHZhbHVlcywgc3RhdGVQYXRoKSB7XG4gIHZhciBhY2Nlc3NvciA9ICgwLCBfU3RhdGUuY3JlYXRlQWNjZXNzb3IpKHN0YXRlUGF0aCk7XG4gIHZhciBjb21wb25lbnQgPSBhY2Nlc3Nvci5jb21wb25lbnQ7XG5cbiAgdmFyIGl0ZW1XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhciBpdGVtTWFya3VwID0gY29tcG9uZW50LnRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgdmFsdWVzW19hdHRyaWJ1dGVzMi5kZWZhdWx0LlNFTEZdLmVsID0gaXRlbU1hcmt1cDtcbiAgaXRlbVdyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbU1hcmt1cCk7XG5cbiAgaXRlbU1hcmt1cC5zZXRBdHRyaWJ1dGUoX2F0dHJpYnV0ZXMyLmRlZmF1bHQuQ09NUE9ORU5UX1RZUEUsIGNvbXBvbmVudC5pc0xpc3RJdGVtID8gX2F0dHJpYnV0ZXMyLmRlZmF1bHQuSVRFTSA6IF9hdHRyaWJ1dGVzMi5kZWZhdWx0LkNPTVBPTkVOVCk7XG5cbiAgKDAsIF9vYmplY3QuZm9yRWFjaCkocmVuZGVyLCBmdW5jdGlvbiAocmVuZGVyRnVuYywgcmVuZGVyVHlwZSkge1xuICAgIGlmIChjb21wb25lbnQuc3RhdGVbX2F0dHJpYnV0ZXMyLmRlZmF1bHQuU0VMRl1bcmVuZGVyVHlwZV0pIHtcbiAgICAgIHJlbmRlckZ1bmMoeyBtYXJrdXA6IGl0ZW1NYXJrdXAgfSwgdmFsdWVzW19hdHRyaWJ1dGVzMi5kZWZhdWx0LlNFTEZdW3JlbmRlclR5cGVdKTtcbiAgICB9XG4gIH0pO1xuXG4gICgwLCBfb2JqZWN0LmZvckVhY2gpKGNvbXBvbmVudC5zdGF0ZSwgZnVuY3Rpb24gKGJpbmRpbmcsIGJpbmRpbmdOYW1lKSB7XG4gICAgaWYgKCFiaW5kaW5nLm1hcmt1cCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBiaW5kaW5nTm9kZSA9IGl0ZW1XcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy4nICsgX2F0dHJpYnV0ZXMyLmRlZmF1bHQuUFJFRklYICsgYmluZGluZy5pZCk7XG4gICAgYmluZGluZ05vZGUuY2xhc3NMaXN0LnJlbW92ZShfYXR0cmlidXRlczIuZGVmYXVsdC5QUkVGSVggKyBiaW5kaW5nLmlkKTtcblxuICAgIGlmIChiaW5kaW5nLmlzQ29tcG9uZW50KSB7XG4gICAgICB2YXIgY2hpbGRTdGF0ZVBhdGggPSBzdGF0ZVBhdGguY29uY2F0KGJpbmRpbmdOYW1lKTtcbiAgICAgIHZhciBjaGlsZE1hcmt1cCA9IGRyYXdDb21wb25lbnQodmFsdWVzW2JpbmRpbmdOYW1lXSwgY2hpbGRTdGF0ZVBhdGgpO1xuICAgICAgKDAsIF9kb20ucmVwbGFjZU5vZGVzKShiaW5kaW5nTm9kZSwgY2hpbGRNYXJrdXApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhbHVlc1tiaW5kaW5nTmFtZV0uZWwgPSBiaW5kaW5nTm9kZTtcblxuICAgIGlmIChiaW5kaW5nLmlzTGlzdCkge1xuICAgICAgcmVuZGVyTGlzdChiaW5kaW5nLCB2YWx1ZXNbYmluZGluZ05hbWVdLCBzdGF0ZVBhdGguY29uY2F0KGJpbmRpbmdOYW1lKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgKDAsIF9vYmplY3QuZm9yRWFjaCkocmVuZGVyLCBmdW5jdGlvbiAocmVuZGVyRnVuYywgcmVuZGVyVHlwZSkge1xuICAgICAgaWYgKHJlbmRlclR5cGUgPT09ICdodG1sJyAmJiBiaW5kaW5nLmh0bWwgPT09IG51bGwgfHwgYmluZGluZy5tYXJrdXAuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJlbmRlckZ1bmMoeyBtYXJrdXA6IGJpbmRpbmdOb2RlIH0sIHZhbHVlc1tiaW5kaW5nTmFtZV1bcmVuZGVyVHlwZV0sIHN0YXRlUGF0aCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBpdGVtV3JhcHBlci5jaGlsZHJlblswXTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCwgdmFsdWVzLCBzdGF0ZVBhdGgsIGNoYW5nZXMpIHtcbiAgdmFyIGNvbXBvbmVudE1hcmt1cCA9IHZhbHVlc1tfYXR0cmlidXRlczIuZGVmYXVsdC5TRUxGXS5lbDtcblxuICAoMCwgX29iamVjdC5mb3JFYWNoKShjaGFuZ2VzLCBmdW5jdGlvbiAoY2hhbmdlLCBiaW5kaW5nTmFtZSkge1xuXG4gICAgaWYgKGJpbmRpbmdOYW1lID09PSBfYXR0cmlidXRlczIuZGVmYXVsdC5TRUxGKSB7XG5cbiAgICAgIGZvciAodmFyIGNoYW5nZVR5cGUgaW4gY2hhbmdlKSB7XG4gICAgICAgIHJlbmRlcltjaGFuZ2VUeXBlXSh7IG1hcmt1cDogY29tcG9uZW50TWFya3VwIH0sIHZhbHVlc1tfYXR0cmlidXRlczIuZGVmYXVsdC5TRUxGXVtjaGFuZ2VUeXBlXSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGJpbmRpbmcgPSBjb21wb25lbnQuc3RhdGVbYmluZGluZ05hbWVdO1xuICAgIHZhciBzdGF0ZVBhdGhUb0JpbmRpbmcgPSBzdGF0ZVBhdGguY29uY2F0KGJpbmRpbmdOYW1lKTtcblxuICAgIGlmIChiaW5kaW5nLmlzQ29tcG9uZW50IHx8IGJpbmRpbmcuaXNMaXN0KSB7XG4gICAgICBhcHBseU1hcmt1cChiaW5kaW5nLCB2YWx1ZXNbYmluZGluZ05hbWVdLCBzdGF0ZVBhdGhUb0JpbmRpbmcsIGNoYW5nZXNbYmluZGluZ05hbWVdKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZWwgPSB2YWx1ZXNbYmluZGluZ05hbWVdLmVsO1xuXG4gICAgZm9yICh2YXIgX2NoYW5nZVR5cGUgaW4gY2hhbmdlKSB7XG4gICAgICB2YXIgbmV3VmFsdWUgPSB2YWx1ZXNbYmluZGluZ05hbWVdW19jaGFuZ2VUeXBlXTtcbiAgICAgIHJlbmRlcltfY2hhbmdlVHlwZV0oeyBtYXJrdXA6IGVsIH0sIG5ld1ZhbHVlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJMaXN0KGxpc3RDb21wb25lbnQsIGl0ZW1zVmFsdWVzLCBzdGF0ZVBhdGgsIGNoYW5nZXMpIHtcbiAgaWYgKGNoYW5nZXMpIHtcbiAgICByZXR1cm4gdXBkYXRlTGlzdChsaXN0Q29tcG9uZW50LCBpdGVtc1ZhbHVlcywgc3RhdGVQYXRoLCBjaGFuZ2VzKTtcbiAgfVxuXG4gIHZhciBsaXN0RnJhZ21lbnQgPSBidWlsZExpc3QobGlzdENvbXBvbmVudCwgaXRlbXNWYWx1ZXMsIHN0YXRlUGF0aCk7XG5cbiAgdmFyIGxpc3ROb2RlID0gaXRlbXNWYWx1ZXMuZWw7XG4gIHZhciBwYXJlbnROb2RlID0gbGlzdE5vZGUucGFyZW50Tm9kZTtcbiAgdmFyIG5leHROb2RlID0gbGlzdE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAoMCwgX2RvbS5yZW1vdmVOb2RlKShsaXN0Tm9kZSk7XG5cbiAgdmFyIGlzQ29tcG9uZW50ID0gbGlzdE5vZGUuZ2V0QXR0cmlidXRlKF9hdHRyaWJ1dGVzMi5kZWZhdWx0LkNPTVBPTkVOVF9UWVBFKTtcbiAgbGlzdE5vZGUuc2V0QXR0cmlidXRlKF9hdHRyaWJ1dGVzMi5kZWZhdWx0LkNPTVBPTkVOVF9UWVBFLCBfYXR0cmlidXRlczIuZGVmYXVsdC5MSVNUKTtcbiAgaWYgKGlzQ29tcG9uZW50KSB7XG4gICAgbGlzdE5vZGUuc2V0QXR0cmlidXRlKF9hdHRyaWJ1dGVzMi5kZWZhdWx0LkNPTVBPTkVOVF9UWVBFLCBfYXR0cmlidXRlczIuZGVmYXVsdC5DT01QT05FTlRfTElTVCk7XG4gIH1cblxuICAoMCwgX2RvbS5lbXB0eU5vZGUpKGxpc3ROb2RlKTtcbiAgbGlzdE5vZGUuYXBwZW5kQ2hpbGQobGlzdEZyYWdtZW50KTtcblxuICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShsaXN0Tm9kZSwgbmV4dE5vZGUpO1xufVxuXG5mdW5jdGlvbiBidWlsZExpc3QobGlzdENvbXBvbmVudCwgaXRlbXNWYWx1ZXMsIHN0YXRlUGF0aCwgcmFuZ2UpIHtcbiAgdmFyIHN0YXJ0ID0gcmFuZ2UgPyByYW5nZS5zdGFydCA6IDA7XG4gIHZhciBlbmQgPSByYW5nZSA/IHJhbmdlLmVuZCA6IGl0ZW1zVmFsdWVzLmxlbmd0aCArIDE7XG5cbiAgdmFyIGxpc3RGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgaXRlbXNWYWx1ZXMuc2xpY2Uoc3RhcnQsIGVuZCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbVZhbHVlLCBpdGVtSW5kZXgpIHtcbiAgICB2YXIgbmV3SXRlbUluZGV4ID0gK3N0YXJ0ICsgaXRlbUluZGV4O1xuICAgIHZhciBzdGF0ZVBhdGhUb0l0ZW0gPSBzdGF0ZVBhdGguY29uY2F0KFtuZXdJdGVtSW5kZXgsIGxpc3RDb21wb25lbnQubGlzdEl0ZW0ubmFtZV0pO1xuICAgIHZhciBsaXN0SXRlbU1hcmt1cCA9IGRyYXdDb21wb25lbnQoaXRlbVZhbHVlW2xpc3RDb21wb25lbnQubGlzdEl0ZW0ubmFtZV0sIHN0YXRlUGF0aFRvSXRlbSk7XG5cbiAgICBsaXN0SXRlbU1hcmt1cC5zZXRBdHRyaWJ1dGUoX2F0dHJpYnV0ZXMyLmRlZmF1bHQuSVRFTV9JTkRFWCwgbmV3SXRlbUluZGV4KTtcblxuICAgIGxpc3RGcmFnbWVudC5hcHBlbmRDaGlsZChsaXN0SXRlbU1hcmt1cCk7XG4gIH0pO1xuXG4gIHJldHVybiBsaXN0RnJhZ21lbnQ7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpc3QobGlzdEJpbmRpbmcsIGl0ZW1zVmFsdWVzLCBzdGF0ZVBhdGgsIGNoYW5nZXMpIHtcbiAgdmFyIGxpc3ROb2RlID0gaXRlbXNWYWx1ZXMuZWw7XG4gIHZhciBpdGVtTmFtZSA9IGxpc3RCaW5kaW5nLmxpc3RJdGVtLm5hbWU7XG4gIHZhciBpdGVtc0NoYW5nZXMgPSAoMCwgX29iamVjdC5zcGxpdFBpZWNlKShjaGFuZ2VzLCBmdW5jdGlvbiAodiwgaykge1xuICAgIHJldHVybiAoMCwgX2NoZWNrZXJzLmlzTnVtYmVyKSgrayk7XG4gIH0pO1xuICB2YXIgcmVtb3ZlZENvdW50ID0gMDtcbiAgdmFyIGVuZCA9IDA7XG5cbiAgZm9yICh2YXIgY2hhbmdlVHlwZSBpbiBjaGFuZ2VzKSB7XG4gICAgcmVuZGVyW2NoYW5nZVR5cGVdKHsgbWFya3VwOiBsaXN0Tm9kZSB9LCBpdGVtc1ZhbHVlc1tjaGFuZ2VUeXBlXSk7XG4gIH1cblxuICAoMCwgX29iamVjdC5mb3JFYWNoKShpdGVtc0NoYW5nZXMsIGZ1bmN0aW9uIChjaGFuZ2UsIGkpIHtcbiAgICBjaGFuZ2UgPSBjaGFuZ2VbaXRlbU5hbWVdO1xuICAgIHZhciBzdGF0ZVBhdGhUb0l0ZW0gPSBzdGF0ZVBhdGguY29uY2F0KGksIGl0ZW1OYW1lKTtcbiAgICB2YXIgaXRlbUFjY2Vzc29yID0gKDAsIF9TdGF0ZS5jcmVhdGVBY2Nlc3Nvcikoc3RhdGVQYXRoVG9JdGVtKTtcblxuICAgIGlmICghY2hhbmdlW19hdHRyaWJ1dGVzMi5kZWZhdWx0LkZVTExfQ0hBTkdFXSkge1xuICAgICAgdXBkYXRlQ29tcG9uZW50KGl0ZW1BY2Nlc3Nvci5jb21wb25lbnQsIGl0ZW1zVmFsdWVzW2ldW2l0ZW1OYW1lXSwgc3RhdGVQYXRoVG9JdGVtLCBjaGFuZ2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VbX2F0dHJpYnV0ZXMyLmRlZmF1bHQuRlVMTF9DSEFOR0VdLmFkZCAmJiBpID49IGVuZCkge1xuICAgICAgdmFyIHN0YXJ0ID0gY2hhbmdlW19hdHRyaWJ1dGVzMi5kZWZhdWx0LkZVTExfQ0hBTkdFXS5hZGQuc3RhcnQ7XG4gICAgICBlbmQgPSBjaGFuZ2VbX2F0dHJpYnV0ZXMyLmRlZmF1bHQuRlVMTF9DSEFOR0VdLmFkZC5lbmQ7XG5cbiAgICAgIGZpeEluZGV4ZXMobGlzdE5vZGUsIHN0YXJ0LCBlbmQgLSBzdGFydCk7XG4gICAgICB2YXIgbGlzdEZyYWdtZW50ID0gYnVpbGRMaXN0KGxpc3RCaW5kaW5nLCBpdGVtc1ZhbHVlcywgc3RhdGVQYXRoLCB7IHN0YXJ0OiBzdGFydCwgZW5kOiBlbmQgfSk7XG5cbiAgICAgIGlmIChlbmQgPT09IGl0ZW1zVmFsdWVzLmxlbmd0aCkge1xuICAgICAgICBsaXN0Tm9kZS5hcHBlbmRDaGlsZChsaXN0RnJhZ21lbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxpc3ROb2RlLmluc2VydEJlZm9yZShsaXN0RnJhZ21lbnQsIGxpc3ROb2RlLmNoaWxkcmVuW3N0YXJ0XSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZVtfYXR0cmlidXRlczIuZGVmYXVsdC5GVUxMX0NIQU5HRV0ucmVtb3ZlKSB7XG4gICAgICAoMCwgX2RvbS5yZW1vdmVOb2RlKShjaGFuZ2VbX2F0dHJpYnV0ZXMyLmRlZmF1bHQuRlVMTF9DSEFOR0VdLnJlbW92ZSk7XG4gICAgICBmaXhJbmRleGVzKGxpc3ROb2RlLCBpIC0gcmVtb3ZlZENvdW50KyssIC0xKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmaXhJbmRleGVzKGxpc3ROb2RlLCBzdGFydCwgZGlmZikge1xuICB2YXIgaXRlbXNOb2RlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGxpc3ROb2RlLmNoaWxkcmVuLCBzdGFydCk7XG5cbiAgaXRlbXNOb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtTm9kZSkge1xuICAgIHZhciBwcmV2SWR4ID0gaXRlbU5vZGUuZ2V0QXR0cmlidXRlKF9hdHRyaWJ1dGVzMi5kZWZhdWx0LklURU1fSU5ERVgpO1xuICAgIHZhciBuZXdJZHggPSArcHJldklkeCArIGRpZmY7XG5cbiAgICBpdGVtTm9kZS5zZXRBdHRyaWJ1dGUoX2F0dHJpYnV0ZXMyLmRlZmF1bHQuSVRFTV9JTkRFWCwgbmV3SWR4KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5QXR0cmlidXRlcyhiaW5kaW5nLCBhdHRyaWJ1dGVzKSB7XG4gIE9iamVjdC5hc3NpZ24oYmluZGluZy5tYXJrdXAsIGF0dHJpYnV0ZXMpO1xufVxuXG5mdW5jdGlvbiBhcHBseUNsYXNzZXMoYmluZGluZywgY2xhc3Nlcykge1xuICBmb3IgKHZhciBjbGFzc05hbWUgaW4gY2xhc3Nlcykge1xuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIGlmIChjbGFzc2VzW2NsYXNzTmFtZV0pIHtcbiAgICAgICAgYmluZGluZy5tYXJrdXAuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmluZGluZy5tYXJrdXAuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVN0eWxlcyhiaW5kaW5nLCBzdHlsZXMpIHtcbiAgT2JqZWN0LmFzc2lnbihiaW5kaW5nLm1hcmt1cC5zdHlsZSwgbm9ybWFsaXplU3R5bGVzKHN0eWxlcykpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBbmRBcHBlbmRTdHlsZXMoc3R5bGVPYmopIHtcbiAgdmFyIHN0eWxlU3RyID0gJyc7XG4gIGZvciAodmFyIHNlbGVjdG9yIGluIHN0eWxlT2JqKSB7XG4gICAgdmFyIHN0eWxlcyA9IHN0eWxlT2JqW3NlbGVjdG9yXTtcbiAgICBzdHlsZVN0ciArPSBzZWxlY3RvciArICd7JztcbiAgICBub3JtYWxpemVTdHlsZXMoc3R5bGVzKTtcbiAgICBmb3IgKHZhciBhdHRyIGluIHN0eWxlcykge1xuICAgICAgdmFyIHZhbHVlID0gc3R5bGVzW2F0dHJdO1xuICAgICAgc3R5bGVTdHIgKz0gKDAsIF9jb21tb24udG9EYXNoQ2FzZSkoYXR0cikgKyAnOicgKyB2YWx1ZSArICc7JztcbiAgICB9XG4gICAgc3R5bGVTdHIgKz0gJ31cXG4nO1xuICB9XG4gIHZhciBzdHlsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGVFbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHlsZVN0cikpO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlRWwpO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVTdHlsZXMoc3R5bGVzKSB7XG4gIGZvciAodmFyIGF0dHIgaW4gc3R5bGVzKSB7XG4gICAgaWYgKCgwLCBfY2hlY2tlcnMuaXNOdW1iZXIpKHN0eWxlc1thdHRyXSkpIHtcbiAgICAgIHN0eWxlc1thdHRyXSA9IHN0eWxlc1thdHRyXSArICdweCc7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXM7XG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2Vycm9ycy9CaW5kaW5nTm90RXhpc3RzRXJyb3IuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9lcnJvcnMvQmluZGluZ05vdEV4aXN0c0Vycm9yLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQmluZGluZ05vdEV4aXN0c0Vycm9yID0gZnVuY3Rpb24gKF9FcnJvcikge1xuICBfaW5oZXJpdHMoQmluZGluZ05vdEV4aXN0c0Vycm9yLCBfRXJyb3IpO1xuXG4gIGZ1bmN0aW9uIEJpbmRpbmdOb3RFeGlzdHNFcnJvcihiaW5kaW5nTmFtZSwgY29tcG9uZW50TmFtZSwgcGF0aCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCaW5kaW5nTm90RXhpc3RzRXJyb3IpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEJpbmRpbmdOb3RFeGlzdHNFcnJvci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEJpbmRpbmdOb3RFeGlzdHNFcnJvcikpLmNhbGwodGhpcykpO1xuXG4gICAgX3RoaXMubWVzc2FnZSA9IFwiVW5hYmxlIHRvIGFjY2VzcyAnXCIgKyBiaW5kaW5nTmFtZSArIFwiJyBiaW5kaW5nIG9uICdcIiArIGNvbXBvbmVudE5hbWUgKyBcIicgY29tcG9uZW50IG9uIHBhdGggKFwiICsgcGF0aC5qb2luKCcgLT4gJykgKyBcIikgYmVjYXVzZSBpdCBkb2Vzbid0IGV4aXN0LlwiO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHJldHVybiBCaW5kaW5nTm90RXhpc3RzRXJyb3I7XG59KEVycm9yKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQmluZGluZ05vdEV4aXN0c0Vycm9yO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9lcnJvcnMvQ29tcG9uZW50UmVkZWZpbmVFcnJvci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9lcnJvcnMvQ29tcG9uZW50UmVkZWZpbmVFcnJvci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDb21wb25lbnRSZWRlZmluZUVycm9yID0gZnVuY3Rpb24gKF9FcnJvcikge1xuICBfaW5oZXJpdHMoQ29tcG9uZW50UmVkZWZpbmVFcnJvciwgX0Vycm9yKTtcblxuICBmdW5jdGlvbiBDb21wb25lbnRSZWRlZmluZUVycm9yKG5hbWUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29tcG9uZW50UmVkZWZpbmVFcnJvcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ29tcG9uZW50UmVkZWZpbmVFcnJvci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvbXBvbmVudFJlZGVmaW5lRXJyb3IpKS5jYWxsKHRoaXMpKTtcblxuICAgIF90aGlzLm1lc3NhZ2UgPSBcIlRyeWluZyB0byByZWRlZmluZSBleGlzdGluZyBjb21wb25lbnQ6ICdcIiArIG5hbWUgKyBcIidcIjtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICByZXR1cm4gQ29tcG9uZW50UmVkZWZpbmVFcnJvcjtcbn0oRXJyb3IpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDb21wb25lbnRSZWRlZmluZUVycm9yO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9lcnJvcnMvU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3IuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2Vycm9ycy9TY29wZU5hbWVDb2xsaXNpb25FcnJvci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3IgPSBmdW5jdGlvbiAoX0Vycm9yKSB7XG4gIF9pbmhlcml0cyhTY29wZU5hbWVDb2xsaXNpb25FcnJvciwgX0Vycm9yKTtcblxuICBmdW5jdGlvbiBTY29wZU5hbWVDb2xsaXNpb25FcnJvcihuYW1lKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNjb3BlTmFtZUNvbGxpc2lvbkVycm9yKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTY29wZU5hbWVDb2xsaXNpb25FcnJvci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNjb3BlTmFtZUNvbGxpc2lvbkVycm9yKSkuY2FsbCh0aGlzKSk7XG5cbiAgICBfdGhpcy5tZXNzYWdlID0gXCJUcnlpbmcgdG8gYXNzaWduIGEgbmFtZSAnXCIgKyBuYW1lICsgXCInIHRvIGEgc3RhdGUgdGhhdCBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgY2hhaW4uXCI7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgcmV0dXJuIFNjb3BlTmFtZUNvbGxpc2lvbkVycm9yO1xufShFcnJvcik7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFNjb3BlTmFtZUNvbGxpc2lvbkVycm9yO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9nbG9iYWxzL2F0dHJpYnV0ZXMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2dsb2JhbHMvYXR0cmlidXRlcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBMSUJfTkFNRSA9ICd4JztcbnZhciBBVFRSX1BSRUZJWCA9ICdkYXRhLSc7XG52YXIgUFJFRklYID0gTElCX05BTUUgKyAnLSc7XG52YXIgVEVNUExBVEVfQklORElORyA9IFBSRUZJWCArICdiJztcbnZhciBURU1QTEFURV9MSVNUX0JJTkRJTkcgPSBQUkVGSVggKyAnbGInO1xudmFyIEJJTkRJTkdfSUQgPSBBVFRSX1BSRUZJWCArIFBSRUZJWCArICdpZCc7XG52YXIgU1RBVEVfUEFUSCA9IFBSRUZJWCArICdzcGF0aCc7XG52YXIgVEVNUExBVEVfUExBQ0VNRU5UID0gUFJFRklYICsgJ2VsJztcbnZhciBTVEFURV9OQU1FID0gUFJFRklYICsgJ3N0YXRlLW5hbWUnO1xudmFyIFNDT1BFX1BSRUZJWCA9ICdzJztcbnZhciBJVEVNX0lOREVYID0gQVRUUl9QUkVGSVggKyBQUkVGSVggKyAnZHgnO1xudmFyIENPTVBPTkVOVF9UWVBFID0gQVRUUl9QUkVGSVggKyBQUkVGSVggKyAndHAnO1xudmFyIElURU1fU1VGRklYID0gJ2knO1xudmFyIFNUQVRFX0RFTElNSVRFUiA9ICctJztcbnZhciBTRUxGID0gJyc7XG52YXIgRlVMTF9DSEFOR0UgPSAnIF9mdWxsX2NoYW5nZV8gJztcblxudmFyIEJBU0UgPSAnMSc7XG52YXIgQ09NUE9ORU5UID0gJzInO1xudmFyIExJU1QgPSAnMyc7XG52YXIgSVRFTSA9ICdfaXRlbV8nO1xudmFyIENPTVBPTkVOVF9MSVNUID0gJzUnO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIFBSRUZJWDogUFJFRklYLFxuICBURU1QTEFURV9CSU5ESU5HOiBURU1QTEFURV9CSU5ESU5HLFxuICBURU1QTEFURV9MSVNUX0JJTkRJTkc6IFRFTVBMQVRFX0xJU1RfQklORElORyxcbiAgQklORElOR19JRDogQklORElOR19JRCxcbiAgU1RBVEVfUEFUSDogU1RBVEVfUEFUSCxcbiAgVEVNUExBVEVfUExBQ0VNRU5UOiBURU1QTEFURV9QTEFDRU1FTlQsXG4gIFNUQVRFX05BTUU6IFNUQVRFX05BTUUsXG4gIFNDT1BFX1BSRUZJWDogU0NPUEVfUFJFRklYLFxuICBJVEVNX0lOREVYOiBJVEVNX0lOREVYLFxuICBDT01QT05FTlRfVFlQRTogQ09NUE9ORU5UX1RZUEUsXG4gIElURU1fU1VGRklYOiBJVEVNX1NVRkZJWCxcbiAgU1RBVEVfREVMSU1JVEVSOiBTVEFURV9ERUxJTUlURVIsXG4gIEJBU0U6IEJBU0UsXG4gIENPTVBPTkVOVDogQ09NUE9ORU5ULFxuICBMSVNUOiBMSVNULFxuICBJVEVNOiBJVEVNLFxuICBTRUxGOiBTRUxGLFxuICBGVUxMX0NIQU5HRTogRlVMTF9DSEFOR0UsXG4gIENPTVBPTkVOVF9MSVNUOiBDT01QT05FTlRfTElTVFxufTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvZ2xvYmFscy9yZWdleHAuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvZ2xvYmFscy9yZWdleHAuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBTVFJJUF9DT01NRU5UUyA9IC8oXFwvXFwvLiokKXwoXFwvXFwqW1xcc1xcU10qP1xcKlxcLyl8KFxccyo9W14sKV0qKCgnKD86XFxcXCd8W14nXFxyXFxuXSkqJyl8KFwiKD86XFxcXFwifFteXCJcXHJcXG5dKSpcIikpfChcXHMqPVteLCldKikpL21nO1xudmFyIEFSR1VNRU5UX05BTUVTID0gLyhbXlxccyxdKykvZztcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBTVFJJUF9DT01NRU5UUzogU1RSSVBfQ09NTUVOVFMsXG4gIEFSR1VNRU5UX05BTUVTOiBBUkdVTUVOVF9OQU1FU1xufTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvaGVscGVycy9jaGVja2Vycy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2hlbHBlcnMvY2hlY2tlcnMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5leHBvcnRzLmlzT2JqZWN0SW5CcmFja2V0cyA9IGlzT2JqZWN0SW5CcmFja2V0cztcbmV4cG9ydHMuaXNPYmplY3RJbkRvdWJsZUJyYWNrZXRzID0gaXNPYmplY3RJbkRvdWJsZUJyYWNrZXRzO1xuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuZXhwb3J0cy5pc0hUTUxTdHJpbmcgPSBpc0hUTUxTdHJpbmc7XG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG5leHBvcnRzLmlzRE9NRWxlbWVudCA9IGlzRE9NRWxlbWVudDtcbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcbmV4cG9ydHMuaXNFbXB0eSA9IGlzRW1wdHk7XG5leHBvcnRzLmlzTGluayA9IGlzTGluaztcblxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICByZXR1cm4gZ2V0T2JqZWN0VHlwZShvYmopID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5KG9iaikge1xuICByZXR1cm4gZ2V0T2JqZWN0VHlwZShvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgcmV0dXJuIGdldE9iamVjdFR5cGUob2JqKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0SW5CcmFja2V0cyhvYmopIHtcbiAgcmV0dXJuIGlzQXJyYXkob2JqKSAmJiBvYmoubGVuZ3RoID09PSAxICYmIGlzT2JqZWN0KG9ialswXSk7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0SW5Eb3VibGVCcmFja2V0cyhvYmopIHtcbiAgcmV0dXJuIGlzQXJyYXkob2JqKSAmJiBvYmoubGVuZ3RoID09PSAxICYmIGlzT2JqZWN0SW5CcmFja2V0cyhvYmpbMF0pO1xufVxuXG5mdW5jdGlvbiBpc1N0cmluZyhvYmopIHtcbiAgcmV0dXJuIGdldE9iamVjdFR5cGUob2JqKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59XG5cbmZ1bmN0aW9uIGlzSFRNTFN0cmluZyhvYmopIHtcbiAgcmV0dXJuIGlzU3RyaW5nKG9iaikgJiYgb2JqLmluZGV4T2YoJzwnKSA9PT0gMDtcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIob2JqKSB7XG4gIHJldHVybiBnZXRPYmplY3RUeXBlKG9iaikgPT09ICdbb2JqZWN0IE51bWJlcl0nICYmIG9iaiA9PT0gb2JqO1xufVxuXG5mdW5jdGlvbiBpc0RPTUVsZW1lbnQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIG9iai50YWdOYW1lICE9PSAndW5kZWZpbmVkJztcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJztcbn1cblxuZnVuY3Rpb24gZ2V0T2JqZWN0VHlwZShvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopO1xufVxuXG5mdW5jdGlvbiBpc0xpbmsob2JqKSB7XG4gIHZhciBzbGFzaElkeCA9IG9iai5pbmRleE9mKCcvJyk7XG4gIHJldHVybiBbMCwgMSwgMl0uc29tZShmdW5jdGlvbiAoaWR4KSB7XG4gICAgcmV0dXJuIGlkeCA9PT0gc2xhc2hJZHg7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpc0VtcHR5KG9iaikge1xuICBpZiAoIW9iaikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSB8fCBpc1N0cmluZyhvYmopKSB7XG4gICAgcmV0dXJuICFvYmoubGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuICFPYmplY3Qua2V5cyhvYmopLmxlbmd0aDtcbn1cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvaGVscGVycy9jb21tb24uanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaGVscGVycy9jb21tb24uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0UmVhbE5hbWUgPSBleHBvcnRzLmdldFNob3J0TmFtZSA9IGV4cG9ydHMudG9DYW1lbENhc2UgPSBleHBvcnRzLnRvRGFzaENhc2UgPSBleHBvcnRzLmdldEZhbHNlUGF0aHMgPSBleHBvcnRzLmhhcyA9IHVuZGVmaW5lZDtcblxudmFyIF9jaGVja2VycyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2hlY2tlcnMgKi8gXCIuL3NyYy9oZWxwZXJzL2NoZWNrZXJzLmpzXCIpO1xuXG52YXIgX29iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vb2JqZWN0ICovIFwiLi9zcmMvaGVscGVycy9vYmplY3QuanNcIik7XG5cbmV4cG9ydHMuaGFzID0gaGFzO1xuZXhwb3J0cy5nZXRGYWxzZVBhdGhzID0gZ2V0RmFsc2VQYXRocztcbmV4cG9ydHMudG9EYXNoQ2FzZSA9IHRvRGFzaENhc2U7XG5leHBvcnRzLnRvQ2FtZWxDYXNlID0gdG9DYW1lbENhc2U7XG5leHBvcnRzLmdldFNob3J0TmFtZSA9IGdldFNob3J0TmFtZTtcbmV4cG9ydHMuZ2V0UmVhbE5hbWUgPSBnZXRSZWFsTmFtZTtcblxuXG52YXIgTkFNRVMgPSB7XG4gIHJlYWw6IHt9LFxuICBzaG9ydDogW11cbn07XG5cbmZ1bmN0aW9uIGdldFNob3J0TmFtZShuYW1lKSB7XG4gIGlmIChOQU1FUy5yZWFsW25hbWVdKSB7XG4gICAgcmV0dXJuIE5BTUVTLnJlYWxbbmFtZV07XG4gIH1cblxuICB2YXIgc2hvcnROYW1lID0gTkFNRVMuc2hvcnQucHVzaChuYW1lKTtcbiAgcmV0dXJuIE5BTUVTLnJlYWxbbmFtZV0gPSBzaG9ydE5hbWUgLSAxO1xufVxuXG5mdW5jdGlvbiBnZXRSZWFsTmFtZShudW0pIHtcbiAgcmV0dXJuIE5BTUVTLnNob3J0W251bV07XG59XG5cbmZ1bmN0aW9uIGhhcyhvYmosIGVsKSB7XG4gIGlmICgoMCwgX2NoZWNrZXJzLmlzT2JqZWN0KShvYmopKSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIHJldHVybiBoYXMoa2V5cywgZWwpO1xuICB9XG5cbiAgcmV0dXJuIG9iai5pbmRleE9mKGVsKSA+PSAwO1xufVxuXG5mdW5jdGlvbiBnZXRGYWxzZVBhdGhzKG9iaikge1xuICB2YXIgb25seUZhbHNlUGF0aHMgPSB7fTtcbiAgZ2V0RmFsc2VQYXRoKG9iaiwgb25seUZhbHNlUGF0aHMsIFtdKTtcbiAgcmV0dXJuIG9ubHlGYWxzZVBhdGhzO1xufVxuXG5mdW5jdGlvbiBnZXRGYWxzZVBhdGgob2JqLCBvbmx5RmFsc2VQYXRocywgcGF0aCkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKCgwLCBfY2hlY2tlcnMuaXNPYmplY3QpKG9ialtrZXldKSkge1xuICAgICAgZ2V0RmFsc2VQYXRoKG9ialtrZXldLCBvbmx5RmFsc2VQYXRocywgcGF0aC5jb25jYXQoa2V5KSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAob2JqW2tleV0gIT09IHRydWUpIHtcbiAgICAgICgwLCBfb2JqZWN0LnNldCkob25seUZhbHNlUGF0aHMsIHBhdGguY29uY2F0KGtleSksIG9ialtrZXldKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9EYXNoQ2FzZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiAnLScgKyBtYXRjaFswXS50b0xvd2VyQ2FzZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG9DYW1lbENhc2Uoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvLSguKS9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gbWF0Y2hbMV0udG9VcHBlckNhc2UoKTtcbiAgfSk7XG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2hlbHBlcnMvY29weS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaGVscGVycy9jb3B5LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NoZWNrZXJzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jaGVja2VycyAqLyBcIi4vc3JjL2hlbHBlcnMvY2hlY2tlcnMuanNcIik7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNvcHk7XG5cblxuZnVuY3Rpb24gY29weShkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gIGlmICghZGVzdGluYXRpb24pIHtcbiAgICByZXR1cm4gY29weSh7fSwgc291cmNlKTtcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcblxuICAgIGlmICgoMCwgX2NoZWNrZXJzLmlzVW5kZWZpbmVkKShzb3VyY2Vba2V5XSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAoMCwgX2NoZWNrZXJzLmlzT2JqZWN0KShzb3VyY2Vba2V5XSkpIHtcbiAgICAgIGlmICghZGVzdGluYXRpb25ba2V5XSkge1xuICAgICAgICBkZXN0aW5hdGlvbltrZXldID0ge307XG4gICAgICB9XG4gICAgICBjb3B5KGRlc3RpbmF0aW9uW2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICgoMCwgX2NoZWNrZXJzLmlzQXJyYXkpKHNvdXJjZVtrZXldKSkge1xuICAgICAgaWYgKCFkZXN0aW5hdGlvbltrZXldKSB7XG4gICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGNvcHlBcnJheShkZXN0aW5hdGlvbltrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoKDAsIF9jaGVja2Vycy5pc0RPTUVsZW1lbnQpKHNvdXJjZVtrZXldKSkge1xuICAgICAgZGVzdGluYXRpb25ba2V5XSA9IHNvdXJjZVtrZXldLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGRlc3RpbmF0aW9uW2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiBkZXN0aW5hdGlvbjtcbn1cblxuZnVuY3Rpb24gY29weUFycmF5KGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2UubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoKDAsIF9jaGVja2Vycy5pc09iamVjdCkoc291cmNlW2ldKSkge1xuICAgICAgZGVzdGluYXRpb25baV0gPSBkZXN0aW5hdGlvbltpXSB8fCB7fTtcbiAgICAgIGNvcHkoZGVzdGluYXRpb25baV0sIHNvdXJjZVtpXSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoKDAsIF9jaGVja2Vycy5pc0FycmF5KShzb3VyY2VbaV0pKSB7XG4gICAgICBkZXN0aW5hdGlvbltpXSA9IGRlc3RpbmF0aW9uW2ldIHx8IFtdO1xuICAgICAgY29weUFycmF5KGRlc3RpbmF0aW9uW2ldLCBzb3VyY2VbaV0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgZGVzdGluYXRpb25baV0gPSBzb3VyY2VbaV07XG4gIH1cblxuICByZXR1cm4gZGVzdGluYXRpb247XG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2hlbHBlcnMvZG9tLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2hlbHBlcnMvZG9tLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmVtcHR5Tm9kZSA9IGV4cG9ydHMucmV3cml0ZVRvTm9kZSA9IGV4cG9ydHMuaW5zZXJ0QmVmb3JlTm9kZSA9IGV4cG9ydHMucmVtb3ZlTm9kZSA9IGV4cG9ydHMud2Fsa05vZGVzID0gZXhwb3J0cy5jb2xsZWN0SFRNTE5vZGVzID0gZXhwb3J0cy5jbG9uZUhUTUxNYXJrdXAgPSBleHBvcnRzLnJlcGxhY2VOb2RlcyA9IHVuZGVmaW5lZDtcblxudmFyIF9jaGVja2VycyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2hlY2tlcnMgKi8gXCIuL3NyYy9oZWxwZXJzL2NoZWNrZXJzLmpzXCIpO1xuXG5leHBvcnRzLnJlcGxhY2VOb2RlcyA9IHJlcGxhY2VOb2RlcztcbmV4cG9ydHMuY2xvbmVIVE1MTWFya3VwID0gY2xvbmVIVE1MTWFya3VwO1xuZXhwb3J0cy5jb2xsZWN0SFRNTE5vZGVzID0gY29sbGVjdEhUTUxOb2RlcztcbmV4cG9ydHMud2Fsa05vZGVzID0gd2Fsa05vZGVzO1xuZXhwb3J0cy5yZW1vdmVOb2RlID0gcmVtb3ZlTm9kZTtcbmV4cG9ydHMuaW5zZXJ0QmVmb3JlTm9kZSA9IGluc2VydEJlZm9yZU5vZGU7XG5leHBvcnRzLnJld3JpdGVUb05vZGUgPSByZXdyaXRlVG9Ob2RlO1xuZXhwb3J0cy5lbXB0eU5vZGUgPSBlbXB0eU5vZGU7XG5cblxuZnVuY3Rpb24gcmVwbGFjZU5vZGVzKG9yaWdpbmFsLCByZXBsYWNlbWVudCkge1xuICBvcmlnaW5hbC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChyZXBsYWNlbWVudCwgb3JpZ2luYWwpO1xuICByZXR1cm4gcmVwbGFjZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGluc2VydEJlZm9yZU5vZGUoZWwsIG5leHRFbCkge1xuICBuZXh0RWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWwsIG5leHRFbCk7XG59XG5cbmZ1bmN0aW9uIGNsb25lSFRNTE1hcmt1cChtYXJrdXApIHtcbiAgdmFyIG1hcmt1cFN0ciA9ICgwLCBfY2hlY2tlcnMuaXNIVE1MU3RyaW5nKShtYXJrdXAudHJpbSgpKSA/IG1hcmt1cCA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWFya3VwKS5pbm5lckhUTUw7XG4gIHJldHVybiBjb252ZXJ0U3RyaW5nVG9IVE1MKG1hcmt1cFN0cik7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRTdHJpbmdUb0hUTUwobWFya3VwU3RyaW5nKSB7XG4gIHZhciBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gIHZhciBwYXJzZWREb2N1bWVudCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcobWFya3VwU3RyaW5nLCAndGV4dC9odG1sJyk7XG4gIHJldHVybiBwYXJzZWREb2N1bWVudC5ib2R5LmZpcnN0RWxlbWVudENoaWxkO1xufVxuXG5mdW5jdGlvbiB3YWxrTm9kZXMobm9kZSwgY2IpIHtcbiAgaWYgKGNiKG5vZGUpID09PSAtMSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG5vZGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgcmV0dXJuIHdhbGtOb2RlcyhlbCwgY2IpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY29sbGVjdEhUTUxOb2Rlcyhyb290LCBpc1dhbnRlZCkge1xuICB2YXIgbm9kZXMgPSBbXTtcbiAgd2Fsa05vZGVzKHJvb3QsIGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiBpc1dhbnRlZChlbCkgPyBub2Rlcy5wdXNoKGVsKSA6ICcnO1xuICB9KTtcbiAgcmV0dXJuIG5vZGVzO1xufVxuXG5mdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcbiAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuXG5mdW5jdGlvbiByZXdyaXRlVG9Ob2RlKG5vZGUsIHRleHQpIHtcbiAgZW1wdHlOb2RlKG5vZGUpO1xuICB3cml0ZVRvTm9kZShub2RlLCB0ZXh0KTtcbn1cblxuZnVuY3Rpb24gd3JpdGVUb05vZGUobm9kZSwgdGV4dCkge1xuICB2YXIgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTtcbiAgbm9kZS5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG59XG5cbmZ1bmN0aW9uIGVtcHR5Tm9kZShub2RlKSB7XG4gIHdoaWxlIChub2RlLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5maXJzdENoaWxkKTtcbiAgfVxufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9oZWxwZXJzL2VxdWFsaXR5LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaGVscGVycy9lcXVhbGl0eS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9jaGVja2VycyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2hlY2tlcnMgKi8gXCIuL3NyYy9oZWxwZXJzL2NoZWNrZXJzLmpzXCIpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBhcmVFcXVhbDtcblxuXG5mdW5jdGlvbiBhcmVFcXVhbChmaXJzdCwgc2Vjb25kKSB7XG4gIGlmICgoMCwgX2NoZWNrZXJzLmlzVW5kZWZpbmVkKShmaXJzdCkgfHwgKDAsIF9jaGVja2Vycy5pc1VuZGVmaW5lZCkoc2Vjb25kKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICgodHlwZW9mIGZpcnN0ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihmaXJzdCkpICE9PSAodHlwZW9mIHNlY29uZCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yoc2Vjb25kKSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcGFyZW50Tm9kZSA9IHsgY2hpbGROb2RlOiB7fSB9O1xuXG4gIGlmICgoMCwgX2NoZWNrZXJzLmlzQXJyYXkpKHNlY29uZCkpIHtcbiAgICBjaGVja0tleXNFcXVhbGl0eShmaXJzdCA/IGZpcnN0Lm1hcChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIHJldHVybiBlbDtcbiAgICB9KSA6IFtdLCBzZWNvbmQubWFwKGZ1bmN0aW9uIChlbCkge1xuICAgICAgcmV0dXJuIGVsO1xuICAgIH0pLCBwYXJlbnROb2RlKTtcbiAgfSBlbHNlIGlmICgoMCwgX2NoZWNrZXJzLmlzT2JqZWN0KShzZWNvbmQpKSB7XG4gICAgY2hlY2tLZXlzRXF1YWxpdHkoZmlyc3QsIHNlY29uZCwgcGFyZW50Tm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZpcnN0ID09PSBzZWNvbmQ7XG4gIH1cblxuICByZXR1cm4gcGFyZW50Tm9kZS5jaGlsZE5vZGU7XG59XG5cbmZ1bmN0aW9uIGNoZWNrS2V5c0VxdWFsaXR5KGZpcnN0LCBzZWNvbmQsIHBhcmVudE5vZGUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNlY29uZCkge1xuXG4gICAgaWYgKCgwLCBfY2hlY2tlcnMuaXNBcnJheSkoZmlyc3QpKSB7XG4gICAgICBpZiAoKDAsIF9jaGVja2Vycy5pc1VuZGVmaW5lZCkoZmlyc3Rba2V5XSkpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5jaGlsZE5vZGVba2V5XSA9IHsgYWRkOiB0cnVlIH07XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoZmlyc3Rba2V5XSAhPT0gc2Vjb25kW2tleV0pIHtcbiAgICAgIHBhcmVudE5vZGUuY2hpbGROb2RlW2tleV0gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBfa2V5IGluIGZpcnN0KSB7XG5cbiAgICBpZiAoKDAsIF9jaGVja2Vycy5pc0FycmF5KShmaXJzdCkpIHtcbiAgICAgIGlmICgoMCwgX2NoZWNrZXJzLmlzVW5kZWZpbmVkKShzZWNvbmRbX2tleV0pKSB7XG4gICAgICAgIHBhcmVudE5vZGUuY2hpbGROb2RlW19rZXldID0geyByZW1vdmU6IHRydWUgfTtcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChmaXJzdFtfa2V5XSAhPT0gc2Vjb25kW19rZXldKSB7XG4gICAgICBwYXJlbnROb2RlLmNoaWxkTm9kZVtfa2V5XSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJlbnROb2RlO1xufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9oZWxwZXJzL29iamVjdC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9oZWxwZXJzL29iamVjdC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5zcGxpdFBpZWNlID0gZXhwb3J0cy5mdWxsTWFwID0gZXhwb3J0cy50b09iamVjdCA9IGV4cG9ydHMuZmlsdGVyID0gZXhwb3J0cy5tYXBLZXlzID0gZXhwb3J0cy5tYXAgPSBleHBvcnRzLmZvckVhY2ggPSBleHBvcnRzLmFkZENvbnN0RmllbGRzID0gZXhwb3J0cy5yZW1vdmUgPSBleHBvcnRzLnNldCA9IGV4cG9ydHMuZ2V0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NoZWNrZXJzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jaGVja2VycyAqLyBcIi4vc3JjL2hlbHBlcnMvY2hlY2tlcnMuanNcIik7XG5cbmV4cG9ydHMuZ2V0ID0gZ2V0O1xuZXhwb3J0cy5zZXQgPSBzZXQ7XG5leHBvcnRzLnJlbW92ZSA9IHJlbW92ZTtcbmV4cG9ydHMuYWRkQ29uc3RGaWVsZHMgPSBhZGRDb25zdEZpZWxkcztcbmV4cG9ydHMuZm9yRWFjaCA9IGZvckVhY2g7XG5leHBvcnRzLm1hcCA9IG1hcDtcbmV4cG9ydHMubWFwS2V5cyA9IG1hcEtleXM7XG5leHBvcnRzLmZpbHRlciA9IGZpbHRlcjtcbmV4cG9ydHMudG9PYmplY3QgPSB0b09iamVjdDtcbmV4cG9ydHMuZnVsbE1hcCA9IGZ1bGxNYXA7XG5leHBvcnRzLnNwbGl0UGllY2UgPSBzcGxpdFBpZWNlO1xuXG5cbmZ1bmN0aW9uIGdldChvYmosIHBhdGgpIHtcbiAgdmFyIHZhbHVlID0gb2JqO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcblxuICAgIHRyeSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlW3BhdGhbaV1dO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBzZXQob2JqLCBwYXRoLCB2YWx1ZSkge1xuICBpZiAoIXBhdGgubGVuZ3RoKSB7XG4gICAgaWYgKCgwLCBfY2hlY2tlcnMuaXNPYmplY3QpKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ob2JqLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBvYmogPSB2YWx1ZTtcbiAgfVxuXG4gIHZhciBkZXN0ID0gb2JqO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgaWYgKCFkZXN0W3BhdGhbaV1dKSB7XG4gICAgICBkZXN0ID0gZGVzdFtwYXRoW2ldXSA9IHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXN0ID0gZGVzdFtwYXRoW2ldXTtcbiAgICB9XG4gIH1cblxuICBpZiAoKDAsIF9jaGVja2Vycy5pc09iamVjdCkodmFsdWUpKSB7XG4gICAgZGVzdFtwYXRoW2ldXSA9IGRlc3RbcGF0aFtpXV0gfHwge307XG4gICAgT2JqZWN0LmFzc2lnbihkZXN0W3BhdGhbaV1dLCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgZGVzdFtwYXRoW2ldXSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKG9iaiwgcGF0aCkge1xuICB2YXIgdmFsdWUgPSBvYmo7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICB2YWx1ZSA9IHZhbHVlW3BhdGhbaV1dO1xuICB9XG5cbiAgZGVsZXRlIHZhbHVlW3BhdGhbaV1dO1xufVxuXG5mdW5jdGlvbiBhZGRDb25zdEZpZWxkcyhvYmosIGZpZWxkcykge1xuICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChmaWVsZCkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGZpZWxkLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkc1tmaWVsZF07XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRyeWluZyB0byByZWRlZmluZSBjb25zdCBmaWVsZCAnXCIgKyBmaWVsZCArIFwiJ1wiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBmaWVsZCBpbiBmaWVsZHMpIHtcbiAgICBfbG9vcChmaWVsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9yRWFjaChvYmosIGNiKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICB2YXIgcHJvcCA9IG9ialtrZXldO1xuICAgIGNiKHByb3AsIGtleSwgb2JqKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXAob2JqLCBjYikge1xuICB2YXIgbmV3T2JqID0ge307XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICB2YXIgcHJvcCA9IG9ialtrZXldO1xuICAgIG5ld09ialtrZXldID0gY2IocHJvcCwga2V5LCBvYmopO1xuICB9XG4gIHJldHVybiBuZXdPYmo7XG59XG5cbmZ1bmN0aW9uIG1hcEtleXMob2JqLCBjYikge1xuICB2YXIgbmV3T2JqID0ge307XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICB2YXIgcHJvcCA9IG9ialtrZXldO1xuICAgIHZhciBuZXdLZXkgPSBjYihrZXksIHByb3AsIG9iaik7XG4gICAgbmV3T2JqW25ld0tleV0gPSBwcm9wO1xuICB9XG4gIHJldHVybiBuZXdPYmo7XG59XG5cbmZ1bmN0aW9uIHNwbGl0UGllY2Uob2JqLCBjYikge1xuICB2YXIgbmV3T2JqID0ge307XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICB2YXIgcHJvcCA9IG9ialtrZXldO1xuICAgIGlmIChjYihwcm9wLCBrZXksIG9iaikpIHtcbiAgICAgIG5ld09ialtrZXldID0gcHJvcDtcbiAgICAgIGRlbGV0ZSBvYmpba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ld09iajtcbn1cblxuZnVuY3Rpb24gZnVsbE1hcChvYmosIGNiKSB7XG4gIHZhciBuZXdPYmogPSB7fTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIHZhciBwcm9wID0gb2JqW2tleV07XG4gICAgdmFyIHJlcyA9IGNiKGtleSwgcHJvcCwgb2JqKTtcbiAgICBuZXdPYmpbcmVzWzBdIHx8IHJlcy5rZXkgfHwgcmVzLmtdID0gcmVzWzFdIHx8IHJlc1sndmFsdWUnXSB8fCByZXNbJ3YnXTtcbiAgfVxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIob2JqLCBjYikge1xuICB2YXIgbmV3T2JqID0ge307XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICB2YXIgcHJvcCA9IG9ialtrZXldO1xuICAgIGlmIChjYihwcm9wLCBrZXksIG9iaikpIHtcbiAgICAgIG5ld09ialtrZXldID0gcHJvcDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ld09iajtcbn1cblxuZnVuY3Rpb24gdG9PYmplY3QoYXJyLCB2YWwpIHtcbiAgdmFyIG5ld09iaiA9IHt9O1xuICBhcnIuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgIG5ld09ialt2XSA9ICgwLCBfY2hlY2tlcnMuaXNGdW5jdGlvbikodmFsKSA/IHZhbCh2KSA6IHZhbDtcbiAgfSk7XG4gIHJldHVybiBuZXdPYmo7XG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL21haW4uanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9tYWluLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIF9EZWZpbml0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9EZWZpbml0aW9uICovIFwiLi9zcmMvRGVmaW5pdGlvbi5qc1wiKTtcblxudmFyIF9Qcm9kdWN0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9Qcm9kdWN0aW9uICovIFwiLi9zcmMvUHJvZHVjdGlvbi5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRlZmluZTogX0RlZmluaXRpb24uZGVmaW5lLFxuICBhcHBseTogX1Byb2R1Y3Rpb24uYXBwbHlcbn07XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTlEYjNWc2FTOTNaV0p3WVdOckwzVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0aUxDSjNaV0p3WVdOck9pOHZRMjkxYkdrdmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBaUxDSjNaV0p3WVdOck9pOHZRMjkxYkdrdkxpOXpjbU12UkdWbWFXNXBkR2x2Ymk1cWN5SXNJbmRsWW5CaFkyczZMeTlEYjNWc2FTOHVMM055WXk5RmRtVnVkRWhoYm1Sc1pYSXVhbk1pTENKM1pXSndZV05yT2k4dlEyOTFiR2t2TGk5emNtTXZVSEp2WkhWamRHbHZiaTVxY3lJc0luZGxZbkJoWTJzNkx5OURiM1ZzYVM4dUwzTnlZeTlUZEdGMFpTNXFjeUlzSW5kbFluQmhZMnM2THk5RGIzVnNhUzh1TDNOeVl5OVRkR0YwWlVOb1lXNW5aUzVxY3lJc0luZGxZbkJoWTJzNkx5OURiM1ZzYVM4dUwzTnlZeTlXYVdWM0xtcHpJaXdpZDJWaWNHRmphem92TDBOdmRXeHBMeTR2YzNKakwyVnljbTl5Y3k5Q2FXNWthVzVuVG05MFJYaHBjM1J6UlhKeWIzSXVhbk1pTENKM1pXSndZV05yT2k4dlEyOTFiR2t2TGk5emNtTXZaWEp5YjNKekwwTnZiWEJ2Ym1WdWRGSmxaR1ZtYVc1bFJYSnliM0l1YW5NaUxDSjNaV0p3WVdOck9pOHZRMjkxYkdrdkxpOXpjbU12WlhKeWIzSnpMMU5qYjNCbFRtRnRaVU52Ykd4cGMybHZia1Z5Y205eUxtcHpJaXdpZDJWaWNHRmphem92TDBOdmRXeHBMeTR2YzNKakwyZHNiMkpoYkhNdllYUjBjbWxpZFhSbGN5NXFjeUlzSW5kbFluQmhZMnM2THk5RGIzVnNhUzh1TDNOeVl5OW5iRzlpWVd4ekwzSmxaMlY0Y0M1cWN5SXNJbmRsWW5CaFkyczZMeTlEYjNWc2FTOHVMM055WXk5b1pXeHdaWEp6TDJOb1pXTnJaWEp6TG1weklpd2lkMlZpY0dGamF6b3ZMME52ZFd4cEx5NHZjM0pqTDJobGJIQmxjbk12WTI5dGJXOXVMbXB6SWl3aWQyVmljR0ZqYXpvdkwwTnZkV3hwTHk0dmMzSmpMMmhsYkhCbGNuTXZZMjl3ZVM1cWN5SXNJbmRsWW5CaFkyczZMeTlEYjNWc2FTOHVMM055WXk5b1pXeHdaWEp6TDJSdmJTNXFjeUlzSW5kbFluQmhZMnM2THk5RGIzVnNhUzh1TDNOeVl5OW9aV3h3WlhKekwyVnhkV0ZzYVhSNUxtcHpJaXdpZDJWaWNHRmphem92TDBOdmRXeHBMeTR2YzNKakwyaGxiSEJsY25NdmIySnFaV04wTG1weklpd2lkMlZpY0dGamF6b3ZMME52ZFd4cEx5NHZjM0pqTDIxaGFXNHVhbk1pWFN3aWJtRnRaWE1pT2xzaVZrRk1WVVZmVkZsUVJWTWlMQ0pTUlZORlVsWkZSRjlJVDA5TFUxOU9RVTFGVXlJc0lrUkZSa0ZWVEZSZlNFOVBTMU1pTENKU1JWTkZVbFpGUkY5Q1NVNUVTVTVIWDA1QlRVVlRJaXdpWTI5dVkyRjBJaXdpVEVsQ1gwRlVWRklpTENKVFJVeEdJaXdpWkdWbWFXNWxJaXdpWjJWMFEyOXRjRzl1Wlc1MFQzQjBjeUlzSW5Ob2IzSjBaVzVDYVc1a2FXNW5TV1FpTENKcGMwTnZiWEJ2Ym1WdWRDSXNJa05QVFZCUFRrVk9WRjlEVDFWT1ZFVlNJaXdpUTA5TlVFOU9SVTVVVXlJc0ltNWhiV1VpTENKdFlYSnJkWEFpTENKaWFXNWthVzVuY3lJc0luTjBlV3hsY3lJc0ltRnlaM01pTENKRGIyMXdiMjVsYm5SU1pXUmxabWx1WlVWeWNtOXlJaXdpWTI5dGNHOXVaVzUwU0ZSTlRFMWhjbXQxY0NJc0ltTnNZWE56VEdsemRDSXNJbUZrWkNJc0ltTnZiWEJ2Ym1WdWRDSXNJbk4wWVhSbElpd2ljM1JoZEdWSlpDSXNJbk4wWVhSbFVHRjBhQ0lzSW5OMFlYUmxUbUZ0WlhNaUxDSmxkbUZzZFdGMFpTSXNJbXhwYm10eklpd2liM1YwWlhKT1lXMWxjeUlzSWw5c2FXNXJjeUlzSW1kaGRHaGxja0pwYm1ScGJtZHpSbkp2YlUxaGNtdDFjQ0lzSW01dmNtMWhiR2w2WldSUGNIUnBiMjV6SWl3aWJtOXliV0ZzYVhwbFZYTmxjazl3ZEdsdmJuTWlMQ0p3Y21Wd1lYSmxRbWx1WkdsdVozTWlMQ0p3Y21Wd1lYSmxVM1I1YkdWeklpd2lTRlJOVEU1dlpHVWlMQ0ppYVc1a2FXNW5UM0IwY3lJc0ltRnVZV3g1ZW1WQ2FXNWthVzVuSWl3aVltbHVaR2x1WnlJc0ltTnlaV0YwWlVKcGJtUnBibWNpTENKelpYUkRiMjF3YjI1bGJuUWlMQ0pRVWtWR1NWZ2lMQ0pwWkNJc0ltbHpUR2x6ZENJc0ltbDBaVzFPYjJSbElpd2lZMmhwYkdSeVpXNGlMQ0p0YjJScFpubFViMHhwYzNSQ2FXNWthVzVuSWl3aWJHbHpkRWwwWlcwaUxDSmpiMjF3YjI1bGJuUkNhVzVrYVc1bklpd2ljM1ZpUTI5dGNHOXVaVzUwVDNCMGN5SXNJazlpYW1WamRDSXNJbUZ6YzJsbmJpSXNJbk4wWVhSbFRtRnRaU0lzSWxOamIzQmxUbUZ0WlVOdmJHeHBjMmx2YmtWeWNtOXlJaXdpWTJ4dmJtVk9iMlJsSWl3aWNtVjJUR2x1YTNNaUxDSmpkWEp5Wlc1MFUzUmhkR1ZKWkNJc0luQmhjbVZ1ZEVOdmJYQnZibVZ1ZENJc0ltTnZiWEJ2Ym1WdWRGZHlZWEJ3WlhJaUxDSmtiMk4xYldWdWRDSXNJbU55WldGMFpVVnNaVzFsYm5RaUxDSnpaWFJCZEhSeWFXSjFkR1VpTENKQ1NVNUVTVTVIWDBsRUlpd2lVMVJCVkVWZlJFVk1TVTFKVkVWU0lpd2lZWEJ3Wlc1a1EyaHBiR1FpTENKemRXSkRiMjF3YjI1bGJuUnpJaXdpWW1sdVpHbHVaMDVoYldVaUxDSnZiR1JDYVc1a2FXNW5TV1FpTENKdVpYZENhVzVrYVc1blNXUWlMQ0p6YUc5eWRFbGtJaXdpWW1sdVpHbHVaMDV2WkdVaUxDSnhkV1Z5ZVZObGJHVmpkRzl5SWl3aWNtVnRiM1psSWl3aWMyeHBZMlVpTENKb2IyOXJjeUlzSW5CeVpYQmhjbVZTWldGamRHbDJaVVoxYm1Oeklpd2ljSFZ6YUNJc0lrbFVSVTBpTENKelpYUjFjRU52YlhCdmJtVnVkSE5NYVc1cmN5SXNJblJsYlhCc1lYUmxJaXdpWm05eVJXRmphQ0lzSW5OMVlrTnZiWEJ2Ym1WdWRDSXNJbU52YlhCdmJtVnVkRVJoZEdFaUxDSjBlWEJsSWl3aWNtVmhZM1JwZG1WR2RXNWpJaXdpY0hKbGNHRnlaVkpsWVdOMGFYWmxSblZ1WXlJc0ltUmxjR1Z1WkdWdVkybGxjMDVoYldWeklpd2laMlYwUkdWd1pXNWtaVzVqYVdWelRtRnRaWE1pTENKa1pYQmxibVJsYm1ONVRtRnRaU0lzSW1SbGNHVnVaR0Z1ZEhNaUxDSjJZV3gxWlhNaUxDSmpiMjF3YjI1bGJuUkpiblJsY21aaFkyVWlMQ0pqYjIxd2RYUmxJaXdpWm5WdVl5SXNJbVoxYm1OUVlYSmhiWE1pTENKblpYUlFZWEpoYlU1aGJXVnpJaXdpZG1Gc2RXVnpUMkpxVW1WblJYaHdJaXdpVW1WblJYaHdJaXdpWm5WdVkxTjBjaUlzSW5SdlUzUnlhVzVuSWl3aVpYaGxZeUlzSW1aMWJtTlRkSEpYYVhSb2IzVjBRMjl0YldWdWRITWlMQ0p5WlhCc1lXTmxJaXdpVWtVaUxDSlRWRkpKVUY5RFQwMU5SVTVVVXlJc0luQmhjbUZ0YzFOMGNpSXNJbWx1WkdWNFQyWWlMQ0p0WVhSamFDSXNJa0ZTUjFWTlJVNVVYMDVCVFVWVElpd2lkbUZzZFdWelQySnFJaXdpWTJGc2JDSXNJbXNpTENKc2FXNXJJaXdpYjNCMGFXOXVjMDlpYWlJc0luQmhjbVZ1ZEU5aWFpSXNJbkJoY21WdWRFdGxlU0lzSW1Oc1lYTnpJaXdpYkdWdVozUm9JaXdpYjNCMGFXOXVJaXdpZG1Gc2RXVWlMQ0psZG1WdWRITWlMQ0pyWlhraUxDSmxiQ0lzSW1kbGRFRjBkSEpwWW5WMFpTSXNJbFJGVFZCTVFWUkZYMEpKVGtSSlRrY2lMQ0p5WlcxdmRtVkJkSFJ5YVdKMWRHVWlMQ0owY21sdElpd2lWRVZOVUV4QlZFVmZURWxUVkY5Q1NVNUVTVTVISWl3aWRHRm5UbUZ0WlNJc0luUnZURzkzWlhKRFlYTmxJaXdpYjJKcUlpd2laMlYwUTI5dGNHOXVaVzUwUW5sT1lXMWxJaXdpUVhKeVlYa2lMQ0p3Y205MGIzUjVjR1VpTENKaGRIUnlhV0oxZEdWeklpd2lZWFIwY2lJc0lsTlVRVlJGWDA1QlRVVWlMQ0pwYm01bGNreHBibXNpTENKamIyMXdiMjVsYm5SUGNIUnpJaXdpYVhOTWFYTjBTWFJsYlNJc0ltVnNUM0IwY3lJc0ltbHVhWFJXWVd4MVpTSXNJbWx1Ym1WeVNGUk5UQ0lzSW14cGMzUmxibVZ5Y3lJc0ltbDBaVzFOWVhKcmRYQWlMQ0p6Y0d4cGRDSXNJbTFoY0NJc0ltcHZhVzRpTENKemRIbHNaVUZ5WnlJc0luTmxiR1ZqZEc5eUlpd2lZMnhoYzNOT1lXMWxJaXdpYVhOQ2FXNWthVzVuSWl3aWNISmxabWw0SWl3aWMyVjBkWEJGZG1WdWRFaGhibVJzWlhKeklpd2laV3hsYldWdWRDSXNJbVYyWlc1MFNHRnVaR3hsY25NaUxDSm5ZWFJvWlhKQmJHeEZkbVZ1ZEVoaGJtUnNaWEp6SWl3aVpYWmxiblJPWVcxbElpd2lZV1JrUlhabGJuUk1hWE4wWlc1bGNpSXNJbVVpTENKbGVHVmpkWFJsUVd4c1EyRnNiR0poWTJ0elNXNU1hWE4wSWl3aVoyRjBhR1Z5WldSSVlXNWtiR1Z5Y3lJc0ltZGhkR2hsY2tWMlpXNTBTR0Z1Wkd4bGNuTWlMQ0prWldOdmNtRjBaVVYyWlc1MElpd2lZM1Z5U0ZSTlRFNXZaR1VpTENKMFlYSm5aWFFpTENKd1lYSmxiblJPYjJSbElpd2lZbWx1WkdsdVowbGtJaXdpWlhabGJuUklZVzVrYkdWeUlpd2lhVzVrWlhoc1pYTnpVM1JoZEdWUVlYUm9JaXdpY0c5d0lpd2ljM1JoZEdWUVlYUm9WRzlKZEdWdElpd2laMlYwVTNSaGRHVlFZWFJvVkc5SmRHVnRJaXdpWVdOalpYTnpiM0pVYjBSaGRHRWlMQ0p3Y205d1lXZGhkR2x2YmxOMGIzQndaV1FpTENKemRHOXdVSEp2Y0dGbllYUnBiMjRpTENKaWFXNWtJaXdpWld4bGJXVnVkRTVoYldVaUxDSm5aWFJVYjBsMFpXMU9iMlJsSWl3aWFXUjRJaXdpU1ZSRlRWOUpUa1JGV0NJc0luVnVjMmhwWm5RaUxDSmpkWEpGYkNJc0ltRndjR3g1SWl3aWNtOXZkRVZzWlcxbGJuUlRaV3hsWTNSdmNpSXNJbkp2YjNSRmJHVnRaVzUwSWl3aVNGUk5URTV2WkdWeklpd2ljMlYwZFhCRmJHVnRaVzUwSWl3aVkzSmxZWFJsUVdOalpYTnpiM0lpTENKblpYUlBibXg1Vm1Gc2RXVnpJaXdpWjJWMFEyOXRjRzl1Wlc1MElpd2ljMlYwVTNSaGRHVWlMQ0p3Y21Wd1lYSmxRMmhoYm1kbFQySnFaV04wSWl3aVJVeEZUVVZPVkZNaUxDSlRWRUZVUlNJc0lrVk1SVTFGVGxSZlEwOVZUbFJGVWlJc0luQmhkR2dpTENKblpYUlRkR0YwWlNJc0lrTlBUVkJQVGtWT1ZGOVVXVkJGSWl3aVFrRlRSU0lzSW1GalkyVnpjMjl5SWl3aWMzUmhjblJVY21GdWMyRmpkR2x2YmlJc0ltRndjR3g1UTJoaGJtZGxjeUlzSW5Wd0lpd2liR1YyWld3aUxDSnRiM1psVlhCVGRHRjBaVkJoZEdnaUxDSmtiM2R1SWl3aVlXUmthWFJwYjI1aGJGQmhkR2dpTENKelpYUWlMQ0pqYUdGdVoyVlBZbW9pTENKblpYUWlMQ0puWlhSV1lXeDFaWE1pTENKdGIyUnBabmxVYjBGeWNtRjVRV05qWlhOemIzSWlMQ0oySWl3aVptOXlZMlZrSWl3aWEyVjVjeUlzSW1admNtTmxJaXdpYVNJc0ltSnBibVJwYm1kV1lXeDFaWE1pTENKblpYUldZV3gxWlhOVWNtVmxJaXdpZG1Gc2RXVnpWSEpsWlNJc0luWmhiSE1pTENKcGRHVnRWbUZzZFdWeklpd2lZMjl0Y0c5dVpXNTBWbUZzZFdWeklpd2liR0Z6ZEVsa2VDSXNJbTUxYlNJc0ltVnNjeUlzSW5OMFlYSjBJaXdpYzJocFpuUWlMQ0p0WVhCTWFYTjBJaXdpWTJJaUxDSnBkR1Z5WVhSbFRHbHpkRlpoYkhWbGN5SXNJbVpwYkhSbGNpSXNJbVpwYkhSbGNreHBjM1FpTENKdVpYZE1hWE4wSWl3aWMyVjBWbUZzZFdWeklpd2lZM0psWVhSbFUzUmhkR1ZPYjJSbGN5SXNJbTF2WkdsbWVVeHBjM1FpTENKelpXNWtWRzlTWlc1a1pYSlJkV1YxWlNJc0lrTklRVTVIUlZNaUxDSmphR0Z1WjJWeklpd2lZMjlzYkdWamRHbHVaeUlzSWxCU1QwMUpVMFZUWDFKRlUwOU1Wa1ZUSWl3aVRFbEdSVjlEV1VOTVJWOUlRVTVFVEVWU1V5SXNJbXhwYzNRaUxDSnlkVzVNYVdabFEzbGpiR1ZJYjI5cmN5SXNJbXhwWm1WRGVXTnNaVWhoYm1Sc1pYSnpJaXdpYUNJc0ltWnBibUZzYVhwbFZISmhibk5oWTNScGIyNGlMQ0p5WlhOdmJIWmxVSEp2YldselpTSXNJbEJ5YjIxcGMyVWlMQ0p5WlhOdmJIWmxJaXdpWTJoaGJtZGxJaXdpYVhORGIyeHNaV04wYVc1blEyaGhibWRsY3lJc0ltRmtaRXhwWm1WRGVXTnNaVWh2YjJzaUxDSm9iMjlyVkhsd1pTSXNJbWh2YjJzaUxDSjJZV3gxWlhOT2IyUmxJaXdpWTNKbFlYUmxVM1JoZEdWT2IyUmxJaXdpZG1Gc2RXVnpUbTlrWlhNaUxDSjJZV3gxWlU1dlpHVWlMQ0p5WldSMVkyVWlMQ0poSWl3aVkyaGhibWRsVm1Gc2RXVnpJaXdpWTJGc2JHVmtSR1Z3Wlc1a1pXNWpaWE1pTENKR1ZVeE1YME5JUVU1SFJTSXNJbVZ1WkNJc0luTmxkRlpoYkhWbElpd2ljbVZ6SWl3aVFtbHVaR2x1WjA1dmRFVjRhWE4wYzBWeWNtOXlJaXdpYzJWMFZtRnNkV1ZHYjNKTWFYTjBJaXdpYzJWMFZtRnNkV1ZHYjNKRGIyMXdiMjVsYm5RaUxDSmxjWFZoYkNJc0ltaDBiV3dpTENKa1pYQmxibVJoYm5RaUxDSmtaWEJsYm1SaGJuUkxaWGtpTENKdVpYZFdZV3gxWlNJc0ltRnljaUlzSW1sdVpHVjRSWEYxWVd4cGRIa2lMQ0p5WlcxdmRtVmtRMjkxYm5RaUxDSnlaVzF2ZG1WTWFYTjBTWFJsYlNJc0ltRmpkR2x2YmlJc0lteHBjM1JRWVhSb0lpd2lhWFJsYlU1aGJXVWlMQ0poWkdSVWIweHBjM1FpTENKeVpXMXZkbVZHY205dFRHbHpkQ0lzSW5Od2JHbGpaU0lzSW14cGMzUkNhVzVrYVc1bklpd2ljbVZ0YjNabFpFUlBUVTV2WkdVaUxDSnlaVzF2ZG1Wa1RtOWtaU0lzSW1OeVpXRjBaVUZ1WkVGd2NHVnVaRk4wZVd4bGN5SXNJbkpsYm1SbGNrTm9ZVzVuWlhNaUxDSnlaVzVrWlhJaUxDSmhjSEJzZVUxaGNtdDFjQ0lzSW1Gd2NHeDVRMnhoYzNObGN5SXNJbk4wZVd4bElpd2lZWEJ3YkhsVGRIbHNaWE1pTENKaGRIUnljeUlzSW1Gd2NHeDVRWFIwY21saWRYUmxjeUlzSW1OdmJYQnZibVZ1ZEVOb1lXNW5aWE1pTENKbGJHVnRaVzUwU1dRaUxDSmpiMjF3YjI1bGJuUkpaQ0lzSW1OdmJYQnZibVZ1ZEVGalkyVnpjMjl5SWl3aWNtVnVaR1Z5VEdsemRDSXNJbkpsYm1SbGNrTnZiWEJ2Ym1WdWRDSXNJblZ3WkdGMFpVTnZiWEJ2Ym1WdWRDSXNJbVJ5WVhkRGIyMXdiMjVsYm5RaUxDSnBkR1Z0VjNKaGNIQmxjaUlzSWtOUFRWQlBUa1ZPVkNJc0luSmxibVJsY2taMWJtTWlMQ0p5Wlc1a1pYSlVlWEJsSWl3aVkyaHBiR1JUZEdGMFpWQmhkR2dpTENKamFHbHNaRTFoY210MWNDSXNJbU52YlhCdmJtVnVkRTFoY210MWNDSXNJbU5vWVc1blpWUjVjR1VpTENKemRHRjBaVkJoZEdoVWIwSnBibVJwYm1jaUxDSnNhWE4wUTI5dGNHOXVaVzUwSWl3aWFYUmxiWE5XWVd4MVpYTWlMQ0oxY0dSaGRHVk1hWE4wSWl3aWJHbHpkRVp5WVdkdFpXNTBJaXdpWW5WcGJHUk1hWE4wSWl3aWJHbHpkRTV2WkdVaUxDSnVaWGgwVG05a1pTSXNJbTVsZUhSRmJHVnRaVzUwVTJsaWJHbHVaeUlzSWt4SlUxUWlMQ0pEVDAxUVQwNUZUbFJmVEVsVFZDSXNJbWx1YzJWeWRFSmxabTl5WlNJc0luSmhibWRsSWl3aVkzSmxZWFJsUkc5amRXMWxiblJHY21GbmJXVnVkQ0lzSW1sMFpXMVdZV3gxWlNJc0ltbDBaVzFKYm1SbGVDSXNJbTVsZDBsMFpXMUpibVJsZUNJc0lteHBjM1JKZEdWdFRXRnlhM1Z3SWl3aWFYUmxiWE5EYUdGdVoyVnpJaXdpYVhSbGJVRmpZMlZ6YzI5eUlpd2labWw0U1c1a1pYaGxjeUlzSW1ScFptWWlMQ0pwZEdWdGMwNXZaR1Z6SWl3aWNISmxka2xrZUNJc0ltNWxkMGxrZUNJc0ltTnNZWE56WlhNaUxDSnViM0p0WVd4cGVtVlRkSGxzWlhNaUxDSnpkSGxzWlU5aWFpSXNJbk4wZVd4bFUzUnlJaXdpYzNSNWJHVkZiQ0lzSW1OeVpXRjBaVlJsZUhST2IyUmxJaXdpYUdWaFpDSXNJbU52YlhCdmJtVnVkRTVoYldVaUxDSnRaWE56WVdkbElpd2lSWEp5YjNJaUxDSk1TVUpmVGtGTlJTSXNJa0ZVVkZKZlVGSkZSa2xZSWl3aVUxUkJWRVZmVUVGVVNDSXNJbFJGVFZCTVFWUkZYMUJNUVVORlRVVk9WQ0lzSWxORFQxQkZYMUJTUlVaSldDSXNJa2xVUlUxZlUxVkdSa2xZSWl3aWFYTkdkVzVqZEdsdmJpSXNJbWx6UVhKeVlYa2lMQ0pwYzA5aWFtVmpkQ0lzSW1selQySnFaV04wU1c1Q2NtRmphMlYwY3lJc0ltbHpUMkpxWldOMFNXNUViM1ZpYkdWQ2NtRmphMlYwY3lJc0ltbHpVM1J5YVc1bklpd2lhWE5JVkUxTVUzUnlhVzVuSWl3aWFYTk9kVzFpWlhJaUxDSnBjMFJQVFVWc1pXMWxiblFpTENKcGMxVnVaR1ZtYVc1bFpDSXNJbWx6Ulcxd2RIa2lMQ0pwYzB4cGJtc2lMQ0puWlhSUFltcGxZM1JVZVhCbElpd2ljMnhoYzJoSlpIZ2lMQ0p6YjIxbElpd2lhR0Z6SWl3aVoyVjBSbUZzYzJWUVlYUm9jeUlzSW5SdlJHRnphRU5oYzJVaUxDSjBiME5oYldWc1EyRnpaU0lzSW1kbGRGTm9iM0owVG1GdFpTSXNJbWRsZEZKbFlXeE9ZVzFsSWl3aVRrRk5SVk1pTENKeVpXRnNJaXdpYzJodmNuUWlMQ0p6YUc5eWRFNWhiV1VpTENKdmJteDVSbUZzYzJWUVlYUm9jeUlzSW1kbGRFWmhiSE5sVUdGMGFDSXNJbk4wY2lJc0luUnZWWEJ3WlhKRFlYTmxJaXdpWTI5d2VTSXNJbVJsYzNScGJtRjBhVzl1SWl3aWMyOTFjbU5sSWl3aWFHRnpUM2R1VUhKdmNHVnlkSGtpTENKamIzQjVRWEp5WVhraUxDSnlaWEJzWVdObFRtOWtaWE1pTENKamJHOXVaVWhVVFV4TllYSnJkWEFpTENKamIyeHNaV04wU0ZSTlRFNXZaR1Z6SWl3aWQyRnNhMDV2WkdWeklpd2ljbVZ0YjNabFRtOWtaU0lzSW1sdWMyVnlkRUpsWm05eVpVNXZaR1VpTENKeVpYZHlhWFJsVkc5T2IyUmxJaXdpWlcxd2RIbE9iMlJsSWl3aWIzSnBaMmx1WVd3aUxDSnlaWEJzWVdObGJXVnVkQ0lzSW5KbGNHeGhZMlZEYUdsc1pDSXNJbTVsZUhSRmJDSXNJbTFoY210MWNGTjBjaUlzSW1OdmJuWmxjblJUZEhKcGJtZFViMGhVVFV3aUxDSnRZWEpyZFhCVGRISnBibWNpTENKd1lYSnpaWElpTENKRVQwMVFZWEp6WlhJaUxDSndZWEp6WldSRWIyTjFiV1Z1ZENJc0luQmhjbk5sUm5KdmJWTjBjbWx1WnlJc0ltSnZaSGtpTENKbWFYSnpkRVZzWlcxbGJuUkRhR2xzWkNJc0ltNXZaR1VpTENKeWIyOTBJaXdpYVhOWFlXNTBaV1FpTENKdWIyUmxjeUlzSW5KbGJXOTJaVU5vYVd4a0lpd2lkR1Y0ZENJc0luZHlhWFJsVkc5T2IyUmxJaXdpZEdWNGRFNXZaR1VpTENKb1lYTkRhR2xzWkU1dlpHVnpJaXdpWm1seWMzUkRhR2xzWkNJc0ltRnlaVVZ4ZFdGc0lpd2labWx5YzNRaUxDSnpaV052Ym1RaUxDSmphR2xzWkU1dlpHVWlMQ0pqYUdWamEwdGxlWE5GY1hWaGJHbDBlU0lzSW1Ga1pFTnZibk4wUm1sbGJHUnpJaXdpYldGd1MyVjVjeUlzSW5SdlQySnFaV04wSWl3aVpuVnNiRTFoY0NJc0luTndiR2wwVUdsbFkyVWlMQ0prWlhOMElpd2labWxsYkdSeklpd2labWxsYkdRaUxDSmtaV1pwYm1WUWNtOXdaWEowZVNJc0luQnliM0FpTENKdVpYZFBZbW9pTENKdVpYZExaWGtpTENKMllXd2lMQ0p0YjJSMWJHVWlMQ0psZUhCdmNuUnpJbDBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRE8wRkJRMFFzVHp0QlExWkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96czdRVUZIUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2EwUkJRVEJETEdkRFFVRm5RenRCUVVNeFJUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHZEZRVUYzUkN4clFrRkJhMEk3UVVGRE1VVTdRVUZEUVN4NVJFRkJhVVFzWTBGQll6dEJRVU12UkRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVSQlFYbERMR2xEUVVGcFF6dEJRVU14UlN4M1NFRkJaMGdzYlVKQlFXMUNMRVZCUVVVN1FVRkRja2s3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h0UTBGQk1rSXNNRUpCUVRCQ0xFVkJRVVU3UVVGRGRrUXNlVU5CUVdsRExHVkJRV1U3UVVGRGFFUTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzT0VSQlFYTkVMQ3RFUVVFclJEczdRVUZGY2tnN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVRzN096czdPenM3T3pzN096czdPenM3T3pzN1FVTnNSa0U3T3pzN1FVRkRRVHM3T3p0QlFVVkJPenRCUVV0Qk96dEJRVVZCT3pzN08wRkJSVUU3TzBGQlQwRTdPMEZCUzBFN08wRkJTVUU3TzBGQlNVRTdPenM3UVVGRFFUczdPenM3T3pzN1FVRkhRU3hKUVVGTlFTeGpRVUZqTEVOQlFVTXNUMEZCUkN4RlFVRlZMRTlCUVZZc1JVRkJiVUlzVDBGQmJrSXNSVUZCTkVJc1QwRkJOVUlzUlVGQmNVTXNUVUZCY2tNc1EwRkJjRUk3UVVGRFFTeEpRVUZOUXl4MVFrRkJkVUlzUTBGQlF5eFBRVUZFTEVWQlFWVXNVVUZCVml4RlFVRnZRaXhSUVVGd1FpeERRVUUzUWp0QlFVTkJMRWxCUVUxRExHZENRVUZuUWl4elFrRkJVMFFzYjBKQlFWUXNSVUZCSzBJN1FVRkJRU3hUUVVGTkxGbEJRVTBzUTBGQlJTeERRVUZrTzBGQlFVRXNRMEZCTDBJc1EwRkJkRUk3UVVGRFFTeEpRVUZOUlN4NVFrRkJlVUpJTEZsQlFWbEpMRTFCUVZvc1EwRkJiVUlzUTBGQlF5eFJRVUZFTEVWQlFWY3NUMEZCV0N4RlFVRnZRaXhWUVVGd1FpeEZRVUZuUTBNc2NVSkJRVk5ETEVsQlFYcERMRU5CUVc1Q0xFTkJRUzlDT3p0UlFVZEZReXhOTEVkQlFVRkJMRTA3VVVGRFFVTXNaMElzUjBGQlFVRXNaMEk3VVVGRFFVTXNaMElzUjBGQlFVRXNaMEk3VVVGRFFVTXNWeXhIUVVGQlFTeFhPMUZCUTBGV0xGY3NSMEZCUVVFc1Z6dFJRVU5CUnl4elFpeEhRVUZCUVN4elFqczdPMEZCUjBZc1NVRkJTVkVzYjBKQlFXOUNMRU5CUVhoQ08wRkJRMEVzU1VGQlRVTXNZVUZCWVN4RlFVRnVRanM3UVVGRlFTeFRRVUZUVEN4TlFVRlVMRU5CUVdsQ1RTeEpRVUZxUWl4RlFVRjFRa01zVFVGQmRrSXNSVUZCSzBKRExGRkJRUzlDTEVWQlFYbERReXhOUVVGNlF5eEZRVUZwUkR0QlFVTXZReXhOUVVGTlF5eFBRVUZQTEhkQ1FVRlRTaXhKUVVGVUxFbEJRV2xDUVN4SlFVRnFRaXhIUVVGM1FpeEZRVUZGUVN4VlFVRkdMRVZCUVZGRExHTkJRVklzUlVGQlowSkRMR3RDUVVGb1FpeEZRVUV3UWtNc1kwRkJNVUlzUlVGQmNrTTdPMEZCUlVGSUxGTkJRVThzZVVKQlFWbEpMRXRCUVV0S0xFbEJRV3BDTEVOQlFWQTdPMEZCUlVFc1RVRkJTVVFzVjBGQlYwTXNTVUZCV0N4RFFVRktMRVZCUVhOQ08wRkJRM0JDTEZWQlFVMHNTVUZCU1Vzc1owTkJRVW9zUTBGQk1rSk1MRWxCUVROQ0xFTkJRVTQ3UVVGRFJEczdRVUZGUkN4TlFVRk5UU3h6UWtGQmMwSXNNRUpCUVdkQ1JpeExRVUZMU0N4TlFVRnlRaXhEUVVFMVFqdEJRVU5CU3l4elFrRkJiMEpETEZOQlFYQkNMRU5CUVRoQ1F5eEhRVUU1UWl4RFFVRnJRMUlzU1VGQmJFTTdPMEZCUlVGR0xITkNRVUZ2UWl4RFFVRndRanRCUVVOQkxFMUJRVTFYTEZsQlFWazdRVUZEYUVKVUxHTkJSR2RDTzBGQlJXaENWU3dyUWtGQlZXeENMSEZDUVVGVFF5eEpRVUZ1UWl4RlFVRXdRaXhGUVVFeFFpeERRVVpuUWp0QlFVZG9RbXRDTEdGQlFWTllMRWxCU0U4N1FVRkphRUpaTEdWQlFWY3NRMEZCUTFvc1NVRkJSQ3hEUVVwTE8wRkJTMmhDWVN4blFrRkJXU3hGUVV4Sk8wRkJUV2hDV2l4WlFVRlJTeXh0UWtGT1VUdEJRVTlvUWxFc1kwRkJWU3hGUVZCTk8wRkJVV2hDUXl4WFFVRlBMRVZCVWxNN1FVRlRhRUpzUWl4cFFrRkJZU3hKUVZSSE8wRkJWV2hDYlVJc1owSkJRVmtzUlVGV1NUdEJRVmRvUWtNc1dVRkJVVHRCUVZoUkxFZEJRV3hDT3p0QlFXTkJReXd5UWtGQmVVSmFMRzFDUVVGNlFpeEZRVUU0UTBjc1UwRkJPVU03TzBGQlJVRXNUVUZCVFZVc2IwSkJRVzlDUXl4eFFrRkJjVUpvUWl4TFFVRkxSaXhSUVVFeFFpeEZRVUZ2UXl4RlFVRkZVU3hQUVVGUExFVkJRVlFzUlVGQmNFTXNRMEZCTVVJN1FVRkRRU3h6UWtGQlMwUXNVMEZCVEN4RlFVRm5RbFVzYVVKQlFXaENPenRCUVVWQlJTeHJRa0ZCYVVKYUxGTkJRV3BDTEVWQlFUUkNRU3hWUVVGVlJTeFBRVUYwUXl4RlFVRXJReXhGUVVGRlF5eFhRVUZYTEVWQlFXSXNSVUZCYVVKSExFOUJRVThzUlVGQmVFSXNSVUZCTkVKR0xGbEJRVmxLTEZWQlFWVkpMRlZCUVd4RUxFVkJRUzlET3p0QlFVVkJMRzFEUVVGMVFsTXNZMEZCWTJ4Q0xFdEJRVXRFTEUxQlFXNUNMRVZCUVRKQ1RTeFRRVUV6UWl4RFFVRjJRanM3UVVGRlFTeFRRVUZQVml4WFFVRlhReXhKUVVGWUxFbEJRVzFDVXl4VFFVRXhRanRCUVVORU96dEJRVVZFTEZOQlFWTlRMSGRDUVVGVUxFTkJRVzFEV2l4dFFrRkJia01zUlVGQmQwUkhMRk5CUVhoRUxFVkJRVzFGTzBGQlEycEZMSE5DUVVGVlNDeHRRa0ZCVml4RlFVRXJRaXhWUVVGRGFVSXNVVUZCUkN4RlFVRmpPMEZCUXpORExGRkJRVTFETEdOQlFXTkRMR1ZCUVdWR0xGRkJRV1lzUTBGQmNFSTdPMEZCUlVFc1VVRkJTU3hEUVVGRFF5eFhRVUZNTEVWQlFXdENPMEZCUTJoQ08wRkJRMFE3TzBGQlJVUXNVVUZCVFVVc1ZVRkJWVU1zWTBGQlkwZ3NXVUZCV1hoQ0xFbEJRVEZDTEVWQlFXZERVeXhUUVVGb1F5eEZRVUV5UTJNc1VVRkJNME1zUTBGQmFFSTdPMEZCUlVFc1VVRkJTVU1zV1VGQldUTkNMRmRCUVdoQ0xFVkJRVFpDTzBGQlF6TkNLMElzYlVKQlFXRkdMRTlCUVdJc1JVRkJjMEpHTEZkQlFYUkNPMEZCUTBGRUxHVkJRVk5vUWl4VFFVRlVMRU5CUVcxQ1F5eEhRVUZ1UWl4RFFVRjFRbWhDTEhGQ1FVRlRjVU1zVFVGQlZDeEhRVUZyUWtnc1VVRkJVVWtzUlVGQmFrUTdRVUZEUkRzN1FVRkZSSEpDTEdOQlFWVkRMRXRCUVZZc1EwRkJaMEpuUWl4UlFVRlJNVUlzU1VGQmVFSXNTVUZCWjBNd1FpeFBRVUZvUXp0QlFVTkJRU3haUVVGUmVrSXNUVUZCVWl4RFFVRmxUU3hUUVVGbUxFTkJRWGxDUXl4SFFVRjZRaXhEUVVFMlFtaENMSEZDUVVGVGNVTXNUVUZCVkN4SFFVRnJRa2dzVVVGQlVVa3NSVUZCZGtRc1JVRkJNa1J5UWl4VlFVRlZWQ3hKUVVGV0xFZEJRV2xDTEVkQlFXcENMRWRCUVhWQ01FSXNVVUZCVVRGQ0xFbEJRVEZHT3p0QlFVVkJMRkZCUVVsM1FpeFpRVUZaVHl4TlFVRm9RaXhGUVVGM1FqdEJRVU4wUWl4VlFVRk5ReXhYUVVGWFZDeFRRVUZUVlN4UlFVRlVMRU5CUVd0Q0xFTkJRV3hDTEVOQlFXcENPMEZCUTBGRExEQkNRVUZ2UWxJc1QwRkJjRUlzUlVGQk5rSk5MRkZCUVRkQ096dEJRVVZCTEZWQlFVbHVReXhaUVVGWmJVTXNVVUZCV2l4RFFVRktMRVZCUVRKQ08wRkJRM3BDU2l4eFFrRkJZVVlzVVVGQlVWTXNVVUZCY2tJc1JVRkJLMEo0UXl4cFFrRkJhVUp4UXl4UlFVRnFRaXhEUVVFdlFqdEJRVU5CTEdWQlFVOHNRMEZCUXl4RFFVRlNPMEZCUTBRN08wRkJSVVJrTEN0Q1FVRjVRbU1zVVVGQmVrSXNSVUZCYlVOT0xGRkJRVkZUTEZGQlFUTkRPMEZCUTBFc1lVRkJUeXhEUVVGRExFTkJRVkk3UVVGRFJEdEJRVU5HTEVkQk4wSkVPenRCUVN0Q1FTeFRRVUZQTVVJc1UwRkJVRHRCUVVORU96dEJRVVZFTEZOQlFWTnRRaXhaUVVGVUxFTkJRWFZDVVN4blFrRkJka0lzUlVGQmVVTkRMR2RDUVVGNlF5eEZRVUV5UkR0QlFVTjZSQ3hOUVVGTmVFSXNZVUZCWVhsQ0xFOUJRVTlETEUxQlFWQXNRMEZCWTBnc2FVSkJRV2xDZGtJc1ZVRkJMMElzUlVGQk1rTjNRaXhwUWtGQmFVSTFRaXhUUVVGcVFpeERRVUV5UWtrc1ZVRkJkRVVzUTBGQmJrSTdRVUZEUVN4TlFVRkpSaXhWUVVGVk1FSXNhVUpCUVdsQ05VSXNVMEZCYWtJc1EwRkJNa0pVTEVsQlFUTkNMRWRCUVd0RExFZEJRV3hETEVkQlFYZERSaXh0UWtGQmRFUTdPMEZCUlVFc1RVRkJTWFZETEdsQ1FVRnBRa2NzVTBGQmNrSXNSVUZCWjBNN1FVRkRPVUlzVVVGQlNUTkNMRmRCUVZkM1FpeHBRa0ZCYVVKSExGTkJRVFZDTEVOQlFVb3NSVUZCTkVNN1FVRkRNVU1zV1VGQlRTeEpRVUZKUXl4cFEwRkJTaXhEUVVFMFFrb3NhVUpCUVdsQ1J5eFRRVUUzUXl4RFFVRk9PMEZCUTBRN08wRkJSVVEzUWl4alFVRlZNRUlzYVVKQlFXbENSeXhUUVVFelFqdEJRVU5CU2l4eFFrRkJhVUoyUWl4VlFVRnFRaXhEUVVFMFFrWXNUMEZCTlVJc1NVRkJkVU1zU1VGQmRrTTdRVUZEUkRzN1FVRkZSQ3h6UWtGQlMzbENMR2RDUVVGTUxFVkJRWFZDUXl4cFFrRkJhVUkxUWl4VFFVRjRRenM3UVVGRlFTeFRRVUZQTmtJc1QwRkJUME1zVFVGQlVDeERRVUZsU0N4blFrRkJaaXhGUVVGcFF6dEJRVU4wUTA0c1VVRkJTVzVDTEU5QlJHdERPMEZCUlhSRFFTeHZRa0ZHYzBNN1FVRkhkRU5ZTEZWQlFVMVhMRTlCU0dkRE8wRkJTWFJETmtJc1pVRkJWMGdzYVVKQlFXbENSeXhUUVVwVk8wRkJTM1JETlVJc1pVRkJWM2RDTEdsQ1FVRnBRbmhDTEZOQlFXcENMRU5CUVRKQ2NrSXNUVUZCTTBJc1EwRkJhME52UWl4UFFVRnNReXhEUVV3eVFqdEJRVTEwUTFZc1dVRkJVVzlETEdsQ1FVRnBRalZDTEZOQlFXcENMRU5CUVRKQ1VpeE5RVUV6UWl4RFFVRnJRM2xETEZOQlFXeERMRU5CUVRSRExFbEJRVFZETEVOQlRqaENPMEZCVDNSRE4wTXNhVUpCUVdFc1NVRlFlVUk3UVVGUmRFTm5RaXd3UWtGU2MwTTdRVUZUZEVOSkxGbEJRVkZ4UWl4UFFVRlBReXhOUVVGUUxFTkJRV01zUlVGQlpDeEZRVUZyUWtZc2FVSkJRV2xDZEVJc1MwRkJia01zUTBGVU9FSTdRVUZWZEVORExHZENRVUZaYzBJc1QwRkJUME1zVFVGQlVDeERRVUZqTEVWQlFXUXNSVUZCYTBKR0xHbENRVUZwUWswc1VVRkJia003UVVGV01FSXNSMEZCYWtNc1EwRkJVRHRCUVZsRU96dEJRVVZFTEZOQlFWTjBRaXhsUVVGVUxFTkJRVEJDV2l4VFFVRXhRaXhGUVVGeFEyMURMR05CUVhKRExFVkJRWEZFUXl4bFFVRnlSQ3hGUVVGelJUdEJRVU53UlN4TlFVRk5ReXh0UWtGQmJVSkRMRk5CUVZORExHRkJRVlFzUTBGQmRVSXNTMEZCZGtJc1EwRkJla0k3UVVGRFFYWkRMRmxCUVZWU0xFMUJRVllzUTBGQmFVSm5SQ3haUVVGcVFpeERRVUU0UW5wRUxIRkNRVUZUTUVRc1ZVRkJka01zUlVGQmJVUjBSQ3hwUWtGQmEwSm5SQ3hwUWtGQmFVSndSQ3h4UWtGQlV6SkVMR1ZCUVRGQ0xFZEJRVFJETTBRc2NVSkJRVk5ETEVsQlFYWkZMRU5CUVc1RU8wRkJRMEZ4UkN4dFFrRkJhVUpOTEZkQlFXcENMRU5CUVRaQ00wTXNWVUZCVlZJc1RVRkJka003UVVGRFFWRXNXVUZCVlVjc1UwRkJWaXhIUVVGelFtbERMR2RDUVVGblFtcERMRk5CUVdoQ0xFTkJRVEJDY2tJc1RVRkJNVUlzUTBGQmFVTnJRaXhWUVVGVlJTeFBRVUV6UXl4RFFVRjBRanRCUVVOQlJpeFpRVUZWU1N4VlFVRldMRWRCUVhWQ1owTXNaMEpCUVdkQ2FFTXNWVUZCZGtNN08wRkJSVUVzVFVGQlRYZERMR2RDUVVGblFpeEZRVUYwUWpzN1FVRkZRU3gxUWtGQlVUVkRMRlZCUVZWRExFdEJRV3hDTEVWQlFYbENMRlZCUVVOblFpeFBRVUZFTEVWQlFWVTBRaXhYUVVGV0xFVkJRVEJDTzBGQlEycEVMRkZCUVUxRExHVkJRV1UzUWl4UlFVRlJTU3hGUVVFM1FqdEJRVU5CTEZGQlFVMHdRaXhsUVVGbFdpeHBRa0ZCYVVKd1JDeHhRa0ZCVXpKRUxHVkJRVEZDTEVkQlFUUkRSeXhYUVVGcVJUdEJRVU5CTEZGQlFVMUhMRlZCUVZVM1JDeHBRa0ZCYVVJMFJDeFpRVUZxUWl4RFFVRm9RanM3UVVGRlFTeFJRVUZKT1VJc1VVRkJVWHBDTEUxQlFWb3NSVUZCYjBJN1FVRkRiRUlzVlVGQlRYbEVMR05CUVdOYUxHbENRVUZwUW1Fc1lVRkJha0lzUTBGQkswSXNUVUZCVFc1RkxIRkNRVUZUY1VNc1RVRkJaaXhIUVVGM1FqQkNMRmxCUVhaRUxFTkJRWEJDTzBGQlEwRkhMR3RDUVVGWlZDeFpRVUZhTEVOQlFYbENla1FzY1VKQlFWTXdSQ3hWUVVGc1F5eEZRVUU0UTA4c1QwRkJPVU03UVVGRFFVTXNhMEpCUVZsdVJDeFRRVUZhTEVOQlFYTkNjVVFzVFVGQmRFSXNRMEZCTmtKd1JTeHhRa0ZCVTNGRExFMUJRVlFzUjBGQmEwSXdRaXhaUVVFdlF6dEJRVU5CUnl4clFrRkJXVzVFTEZOQlFWb3NRMEZCYzBKRExFZEJRWFJDTEVOQlFUQkNhRUlzY1VKQlFWTnhReXhOUVVGVUxFZEJRV3RDTWtJc1dVRkJOVU03UVVGRFJEczdRVUZGUkd4Q0xGZEJRVTlETEUxQlFWQXNRMEZCWTJJc1QwRkJaQ3hGUVVGMVFqdEJRVU55UW1Rc2FVSkJRVmRJTEZWQlFWVkhMRk5CUVZZc1EwRkJiMEpwUkN4TFFVRndRaXhGUVVSVk8wRkJSWEpDUXl4aFFVRlBlRUlzVDBGQlQwTXNUVUZCVUN4RFFVRmpMRVZCUVdRc1JVRkJhMEpzUkN4aFFVRnNRaXhGUVVGcFEzRkRMRkZCUVZGdlF5eExRVUY2UXl4RFFVWmpPMEZCUjNKQ2FFTXNWVUZCU1RCQ0xGbEJTR2xDTzBGQlNYSkNRenRCUVVweFFpeExRVUYyUWpzN1FVRlBRVTBzZVVKQlFYRkNja01zVDBGQmNrSXNSVUZCT0VKcVFpeFRRVUU1UWpzN1FVRkZRU3hSUVVGSmFVSXNVVUZCVVVzc1RVRkJXaXhGUVVGdlFqdEJRVU5zUWt3c1kwRkJVV1FzVTBGQlVpeERRVUZyUW05RUxFbEJRV3hDTEVOQlFYVkNWaXhYUVVGMlFqdEJRVU5CTlVJc1kwRkJVV0lzVlVGQlVpeEhRVUZ4UWtvc1ZVRkJWVWtzVlVGQkwwSTdPMEZCUlVGUkxITkNRVUZwUWtzc1VVRkJVVk1zVVVGQmVrSXNSVUZCYlVOeFFpeGxRVUZsYUVVc2NVSkJRVk15UkN4bFFVRjRRaXhIUVVFd1F6TkVMSEZDUVVGVGVVVXNTVUZCYmtRc1IwRkJNRVIyUXl4UlFVRlJVeXhSUVVGU0xFTkJRV2xDYmtNc1NVRkJPVWNzUlVGQmIwZ3dRaXhQUVVGd1NEdEJRVU5CTzBGQlEwUTdPMEZCUlVRc1VVRkJTVUVzVVVGQlVUZENMRmRCUVZvc1JVRkJlVUk3UVVGRGRrSjNSQ3h2UWtGQlkxY3NTVUZCWkN4RFFVRnRRblJETEU5QlFXNUNPMEZCUTBRN1FVRkRSaXhIUVdoRFJEczdRVUZyUTBGM1F5eDFRa0ZCY1VKNlJDeFRRVUZ5UWl4RlFVRm5RMjlETEdWQlFXaERPMEZCUTBGd1F5eFpRVUZWTUVRc1VVRkJWaXhIUVVGeFFqRkVMRlZCUVZWU0xFMUJRVllzUTBGQmFVSjVReXhUUVVGcVFpeERRVUV5UWl4SlFVRXpRaXhEUVVGeVFqczdRVUZGUVZjc1owSkJRV05sTEU5QlFXUXNRMEZCYzBJc1ZVRkJRME1zV1VGQlJDeEZRVUZyUWp0QlFVTjBRMmhFTEc5Q1FVRnBRbWRFTEZsQlFXcENMRVZCUVN0Q2VrSXNhVUpCUVdsQ2NFUXNjVUpCUVZNeVJDeGxRVUV4UWl4SFFVRTBRMnRDTEdGQlFXRXhSQ3hQUVVGNFJpeEZRVUZwUjBZc1UwRkJha2M3UVVGRFJDeEhRVVpFTzBGQlIwUTdPMEZCUlVRc1UwRkJVM05FTEc5Q1FVRlVMRU5CUVN0Q2NrTXNUMEZCTDBJc1JVRkJkME0wUXl4aFFVRjRReXhGUVVGMVJEdEJRVU55Ukc1R0xHTkJRVmxwUml4UFFVRmFMRU5CUVc5Q0xGVkJRVU5ITEVsQlFVUXNSVUZCVlR0QlFVTTFRaXhSUVVGTlF5eGxRVUZsT1VNc1VVRkJVVFpETEVsQlFWSXNRMEZCY2tJN1FVRkRRU3hSUVVGSkxFTkJRVU5ETEZsQlFVd3NSVUZCYlVJN1FVRkRha0k3UVVGRFJEczdRVUZGUkRsRExGbEJRVkZhTEZGQlFWSXNRMEZCYVVKNVJDeEpRVUZxUWl4SlFVRjVRa1VzYjBKQlFXOUNMME1zVDBGQmNFSXNSVUZCTmtJMlF5eEpRVUUzUWl4RlFVRnRRME1zV1VGQmJrTXNSVUZCYVVSR0xHRkJRV3BFTEVOQlFYcENPMEZCUTBRc1IwRlFSRHRCUVZGRU96dEJRVVZFTEZOQlFWTkhMRzFDUVVGVUxFTkJRVGhDTDBNc1QwRkJPVUlzUlVGQmRVTTJReXhKUVVGMlF5eEZRVUUyUTBNc1dVRkJOME1zUlVGQk1rUkdMR0ZCUVRORUxFVkJRVEJGTzBGQlEzaEZMRTFCUVUxSkxHOUNRVUZ2UWtNc2NVSkJRWEZDU0N4WlFVRnlRaXhEUVVFeFFqczdRVUZGUVVVc2IwSkJRV3RDVGl4UFFVRnNRaXhEUVVFd1FpeFZRVUZEVVN4alFVRkVMRVZCUVc5Q08wRkJRelZETEZGQlFVa3NkVUpCUVZGT0xHTkJRV00xUkN4TFFVRmtMRU5CUVc5Q2EwVXNZMEZCY0VJc1EwRkJVaXhEUVVGS0xFVkJRV3RFTzBGQlEyaEVUaXh2UWtGQll6VkVMRXRCUVdRc1EwRkJiMEpyUlN4alFVRndRaXhKUVVGelEycEVMR05CUVdOcFJDeGpRVUZrTEVWQlFUaENUaXhoUVVFNVFpeERRVUYwUXp0QlFVTkVPenRCUVVWRVFTeHJRa0ZCWXpWRUxFdEJRV1FzUTBGQmIwSnJSU3hqUVVGd1FpeEZRVUZ2UTBNc1ZVRkJjRU1zUTBGQlowUnVSQ3hSUVVGUk1VSXNTVUZCVWl4SFFVRmxMRWRCUVdZc1IwRkJjVUoxUlN4SlFVRnlSU3hKUVVFNFJTeEZRVUZGZGtVc1RVRkJUVEJDTEZGQlFWRXhRaXhKUVVGb1FpeEZRVUZ6UW5WRkxGVkJRWFJDTEVWQlFUbEZPMEZCUTBRc1IwRk9SRHM3UVVGUlFTeFRRVUZQTEZWQlFVTlBMRTFCUVVRc1JVRkJVME1zYTBKQlFWUTdRVUZCUVN4WFFVRm5RME1zVVVGQlUxSXNXVUZCVkN4RlFVRjFRazBzVFVGQmRrSXNSVUZCSzBKRExHdENRVUV2UWl4RFFVRm9RenRCUVVGQkxFZEJRVkE3UVVGRFJEczdRVUZGUkN4VFFVRlRTaXh2UWtGQlZDeERRVUU0UWswc1NVRkJPVUlzUlVGQmIwTTdRVUZEYkVNc1RVRkJUVU1zWVVGQllVTXNZMEZCWTBZc1NVRkJaQ3hEUVVGdVFqdEJRVU5CTEUxQlFVMUhMR3RDUVVGdFFpeEpRVUZKUXl4TlFVRktMRU5CUVZjc1QwRkJUMGdzVjBGQlZ5eERRVUZZTEVOQlFWQXNSMEZCZFVJc2IwSkJRV3hETEVWQlFYZEVMRWRCUVhoRUxFTkJRWHBDTzBGQlEwRXNUVUZCVFZJc2IwSkJRVzlDTEVWQlFURkNPMEZCUTBFc1RVRkJUVmtzVlVGQlZVd3NTMEZCUzAwc1VVRkJUQ3hGUVVGb1FqdEJRVU5CTEUxQlFVbFlMSFZDUVVGS08wRkJRMEVzVTBGQlVVRXNhVUpCUVdsQ1VTeG5Ra0ZCWjBKSkxFbEJRV2hDTEVOQlFYRkNSaXhQUVVGeVFpeERRVUY2UWl4RlFVRjVSRHRCUVVOMlJGb3NjMEpCUVd0Q1ZpeEpRVUZzUWl4RFFVRjFRbGtzWlVGQlpTeERRVUZtTEVOQlFYWkNPMEZCUTBRN1FVRkRSQ3hUUVVGUFJpeHBRa0ZCVUR0QlFVTkVPenRCUVVWRUxGTkJRVk5UTEdGQlFWUXNRMEZCZFVKR0xFbEJRWFpDTEVWQlFUWkNPMEZCUXpOQ0xFMUJRVTFSTEhsQ1FVRjVRbElzUzBGQlMwMHNVVUZCVEN4SFFVRm5Ra2NzVDBGQmFFSXNRMEZCZDBKRExHbENRVUZIUXl4alFVRXpRaXhGUVVFeVF5eEZRVUV6UXl4RFFVRXZRanRCUVVOQkxFMUJRVTFETEZsQlFWbEtMSFZDUVVGMVFqVkNMRXRCUVhaQ0xFTkJRMmhDTkVJc2RVSkJRWFZDU3l4UFFVRjJRaXhEUVVFclFpeEhRVUV2UWl4SlFVRnhReXhEUVVSeVFpeEZRVVZvUWt3c2RVSkJRWFZDU3l4UFFVRjJRaXhEUVVFclFpeEhRVUV2UWl4RFFVWm5RaXhEUVVGc1FqdEJRVWxCTEZOQlFVOUVMRlZCUVZWRkxFdEJRVllzUTBGQlowSktMR2xDUVVGSFN5eGpRVUZ1UWl4TFFVRnpReXhGUVVFM1F6dEJRVU5FT3p0QlFVVkVMRk5CUVZOb1FpeFBRVUZVTEVOQlFXdENReXhKUVVGc1FpeEZRVUYzUW1kQ0xGTkJRWGhDTEVWQlFXMURiRUlzYTBKQlFXNURMRVZCUVhWRU8wRkJRM0pFTEZOQlFVOUZMRXRCUVV0cFFpeEpRVUZNTEVOQlFWVXNTVUZCVml4RlFVRm5RaXd3UWtGQlkwUXNVMEZCWkN4RFFVRm9RaXhGUVVFd1EyeENMR3RDUVVFeFF5eERRVUZRTzBGQlEwUTdPMEZCUlVRc1UwRkJVMklzYjBKQlFWUXNRMEZCSzBKNlJDeFRRVUV2UWl4RlFVRXdRMjlETEdWQlFURkRMRVZCUVRKRU8wRkJRM3BFVUN4VFFVRlBReXhOUVVGUUxFTkJRMFZOTEdkQ1FVRm5RamxDTEV0QlJHeENMRVZCUlVVc2FVSkJRVWxPTEZWQlFWVlBMRlZCUVdRc1JVRkJNRUlzVlVGQlEyMUdMRU5CUVVRN1FVRkJRU3hYUVVGUkxFVkJRVVZETEUxQlFVMUVMRU5CUVZJc1JVRkJWekZHTEZkQlFWZEJMRlZCUVZWRkxFOUJRV2hETEVWQlFWSTdRVUZCUVN4SFFVRXhRaXhEUVVaR08wRkJTVVE3TzBGQlJVUXNVMEZCVTFNc2IwSkJRVlFzUTBGQkswSnBSaXhWUVVFdlFpeEZRVUV5UTBNc1UwRkJNME1zUlVGQmMwUkRMRk5CUVhSRUxFVkJRV2xGTzBGQlF5OUVMRTFCUVVrc01FSkJRVmxHTEZWQlFWb3NRMEZCU2l4RlFVRTJRanRCUVVNelFpeFhRVUZQTEdsQ1FVRkpReXhUUVVGS0xFVkJRV1VzUTBGQlEwTXNVMEZCUkN4RFFVRm1MRVZCUVRSQ0xFVkJRVVZETEU5QlFVOUlMRlZCUVZRc1JVRkJOVUlzUTBGQlVEdEJRVU5FT3p0QlFVVkVMRTFCUVVrc2RVSkJRVkZCTEZWQlFWSXNRMEZCU2l4RlFVRjVRanM3UVVGRmRrSXNVVUZCU1VFc1YwRkJWMGtzVFVGQldDeEhRVUZ2UWl4RFFVRjRRaXhGUVVFeVFqdEJRVU42UWtvc2FVSkJRVmRxUXl4UFFVRllMRU5CUVcxQ0xGVkJRVU56UXl4TlFVRkVPMEZCUVVFc1pVRkJXWFJHTEhGQ1FVRnpRbk5HTEUxQlFYUkNMRVZCUVRoQ1NpeFRRVUU1UWl4RlFVRjVRME1zVTBGQmVrTXNRMEZCV2p0QlFVRkJMRTlCUVc1Q08wRkJRMEU3UVVGRFJEczdRVUZGUkN4UlFVRkpMREJDUVVGWFJpeFhRVUZYTEVOQlFWZ3NRMEZCV0N4RFFVRktMRVZCUVN0Q08wRkJRemRDTEdGQlFVOHNhVUpCUVVsRExGTkJRVW9zUlVGQlpTeERRVUZEUXl4VFFVRkVMRU5CUVdZc1JVRkJORUlzUlVGQlJVa3NUMEZCVDA0c1YwRkJWeXhEUVVGWUxFTkJRVlFzUlVGQk5VSXNRMEZCVUR0QlFVTkVPMEZCUTBRc1VVRkJTU3gzUWtGQlUwRXNWMEZCVnl4RFFVRllMRU5CUVZRc1EwRkJTaXhGUVVFMlFqdEJRVU16UWl4aFFVRlBMR2xDUVVGSlF5eFRRVUZLTEVWQlFXVXNRMEZCUTBNc1UwRkJSQ3hEUVVGbUxFVkJRVFJDTEVWQlFVVkxMRkZCUVZGUUxGZEJRVmNzUTBGQldDeERRVUZXTEVWQlFUVkNMRU5CUVZBN1FVRkRSRHRCUVVOR096dEJRVVZFTEhWQ1FVRlJRU3hWUVVGU0xFVkJRVzlDTEZWQlFVTk5MRXRCUVVRc1JVRkJVVVVzUjBGQlVpeEZRVUZuUWp0QlFVTnNReXhYUVVGUFVpeFhRVUZYVVN4SFFVRllMRU5CUVZBN1FVRkRRU3hSUVVGTmJrWXNWVUZCVlVNc1kwRkJZMnRHTEVkQlFXUXNRMEZCYUVJN08wRkJSVUVzVVVGQlNTeDNRa0ZCVTBZc1MwRkJWQ3hEUVVGS0xFVkJRWEZDTzBGQlEyNUNUQ3huUWtGQlZTeFBRVUZXTEVWQlFXMUNUeXhIUVVGdVFpeEpRVUV3UW5aRkxFOUJRVTlETEUxQlFWQXNRMEZCWTJJc1QwRkJaQ3hGUVVGMVFtbEdMRXRCUVhaQ0xFTkJRVEZDTzBGQlEwRTdRVUZEUkRzN1FVRkZSRXdzWTBGQlZTeFBRVUZXTEVWQlFXMUNUeXhIUVVGdVFpeEpRVUV3UW01R0xFOUJRVEZDTzBGQlEwRk9MSGxDUVVGeFFuVkdMRXRCUVhKQ0xFVkJRVFJDVEN4VlFVRlZMRTlCUVZZc1EwRkJOVUlzUlVGQlowUlBMRWRCUVdoRU8wRkJRMFFzUjBGWVJEczdRVUZoUVN4VFFVRlBVQ3hUUVVGUU8wRkJRMFE3TzBGQlJVUXNVMEZCVXpkRkxHTkJRVlFzUTBGQmVVSnhSaXhGUVVGNlFpeEZRVUUyUWp0QlFVTXpRaXhOUVVGSmFrZ3NXVUZCV1dsSUxFVkJRVm9zUTBGQlNpeEZRVUZ4UWp0QlFVTnVRaXhYUVVGUGJrZ3NhVUpCUVdsQ2JVZ3NSVUZCYWtJc1EwRkJVRHRCUVVORU96dEJRVVZFTEUxQlFVa3NRMEZCUTBFc1IwRkJSME1zV1VGQlVpeEZRVUZ6UWp0QlFVTndRaXhYUVVGUExFbEJRVkE3UVVGRFJEczdRVUZGUkN4TlFVRkpMMGNzVDBGQlR6aEhMRWRCUVVkRExGbEJRVWdzUTBGQlowSjJTQ3h4UWtGQlUzZElMR2RDUVVGNlFpeERRVUZZTzBGQlEwRkdMRXRCUVVkSExHVkJRVWdzUTBGQmJVSjZTQ3h4UWtGQlUzZElMR2RDUVVFMVFqczdRVUZGUVN4TlFVRkphRWdzU1VGQlNpeEZRVUZWTzBGQlExSXNWMEZCVHl4RlFVRkZRU3hOUVVGTlFTeExRVUZMYTBnc1NVRkJUQ3hGUVVGU0xFVkJRVkE3UVVGRFJEczdRVUZGUkd4SUxGTkJRVTg0Unl4SFFVRkhReXhaUVVGSUxFTkJRV2RDZGtnc2NVSkJRVk15U0N4eFFrRkJla0lzUTBGQlVEdEJRVU5CVEN4TFFVRkhSeXhsUVVGSUxFTkJRVzFDZWtnc2NVSkJRVk15U0N4eFFrRkJOVUk3TzBGQlJVRXNUVUZCU1c1SUxFbEJRVW9zUlVGQlZUdEJRVU5TTEZkQlFVOHNSVUZCUlVFc1RVRkJUVUVzUzBGQlMydElMRWxCUVV3c1JVRkJVaXhGUVVGeFFtNUdMRkZCUVZFc1NVRkJOMElzUlVGQlVEdEJRVU5FTzBGQlEwWTdPMEZCUlVRc1UwRkJVMnhETEZkQlFWUXNRMEZCYzBKcFNDeEZRVUYwUWl4RlFVRXdRanRCUVVONFFpeE5RVUZOVFN4VlFVRlZUaXhIUVVGSFRTeFBRVUZJTEVsQlFXTk9MRWRCUVVkTkxFOUJRVWdzUTBGQlYwTXNWMEZCV0N4RlFVRTVRanRCUVVOQkxGTkJRVTlFTEZkQlFWZHlTQ3hYUVVGWkxIbENRVUZaY1Vnc1QwRkJXaXhEUVVGYUxFTkJRV3hDTzBGQlEwUTdPMEZCUlVRc1UwRkJVM3BJTEdkQ1FVRlVMRU5CUVRKQ01rZ3NSMEZCTTBJc1JVRkJaME03UVVGRE9VSXNUVUZCVFhSSUxFOUJRVThzZVVKQlFXRnpTQ3hKUVVGSlJpeFBRVUZLTEVOQlFWbERMRmRCUVZvc1JVRkJZaXhEUVVGaU8wRkJRMEVzVFVGQlRUVkhMRmxCUVZrNFJ5eHRRa0ZCYlVKMlNDeEpRVUZ1UWl4RFFVRnNRanRCUVVOQkxFMUJRVTFsTEZGQlFWRXNSVUZCWkR0QlFVTkJMRTFCUVUwMFFpeFhRVUZYTEVWQlFXcENPMEZCUTBFc1RVRkJTVWdzV1VGQldTeEpRVUZvUWpzN1FVRkZRV2RHTEZGQlFVMURMRk5CUVU0c1EwRkJaMEkxUkN4TFFVRm9RaXhEUVVGelFuRkRMRWxCUVhSQ0xFTkJRVEpDYjBJc1NVRkJTVWtzVlVGQkwwSXNSVUZEUjNSRUxFOUJSRWdzUTBGRFZ5eFZRVUZEZFVRc1NVRkJSQ3hGUVVGVk96dEJRVVZxUWl4UlFVRkpRU3hMUVVGTE0wZ3NTVUZCVEN4TFFVRmpVaXh4UWtGQlUyOUpMRlZCUVROQ0xFVkJRWFZETzBGQlEzSkRjRVlzYTBKQlFWbHRSaXhMUVVGTGFFSXNTMEZCYWtJN1FVRkRRVHRCUVVORU96dEJRVVZFTEZGQlFVMXJRaXhaUVVGWkxIbENRVUZaUml4TFFVRkxNMGdzU1VGQmFrSXNRMEZCYkVJN1FVRkRRV1VzVlVGQlRUaEhMRk5CUVU0c1NVRkJiVUpHTEV0QlFVdG9RaXhMUVVGNFFqdEJRVU5CYUVVc1lVRkJVMmRHTEV0QlFVdG9RaXhMUVVGa0xFbEJRWFZDYTBJc1UwRkJka0k3UVVGRFJDeEhRVmhJT3p0QlFXRkJMRk5CUVU4N1FVRkRUSEJJTEhkQ1FVUkxPMEZCUlV4TkxGZEJRVTlCTEV0QlJrWTdRVUZIVERSQ0xHTkJRVlZCTEZGQlNFdzdRVUZKVEVnc2QwSkJTa3M3UVVGTFRIaERMR05CVEVzN1FVRk5URWdzYVVKQlFXRTdRVUZPVWl4SFFVRlFPMEZCVVVRN08wRkJSVVFzVTBGQlV6QklMR3RDUVVGVUxFTkJRVFpDZGtnc1NVRkJOMElzUlVGQmJVTTdRVUZEYWtNc1UwRkJUMFFzVjBGQldTeDVRa0ZCV1VNc1NVRkJXaXhEUVVGYUxFTkJRVkE3UVVGRFJEczdRVUZGUkN4VFFVRlRNa0lzWVVGQlZDeERRVUYzUWpOQ0xFbEJRWGhDTEVWQlFUaENVeXhUUVVFNVFpeEZRVUY1UTNGSExFVkJRWHBETEVWQlFUWkRPMEZCUXpORExFMUJRVTFuUWl4blFrRkJhVUp5U0N4VFFVRkVMRWRCUVdNN1FVRkRiRU54UWl4UlFVRkpja0lzVlVGQlZVVXNUMEZCVml4SFFVRnZRbTVDTEhGQ1FVRlRNa1FzWlVGQk4wSXNSMEZCSzBOdVJDeEpRVVJxUWp0QlFVVnNRMWtzWlVGQlYwZ3NWVUZCVlVjc1UwRkdZVHRCUVVkc1EwTXNaMEpCUVZsS0xGVkJRVlZKTEZWQlNGazdRVUZKYkVOclNDeG5Ra0ZCV1hSSUxGVkJRVlZ6UWl4TlFVcFpPMEZCUzJ4RGNFSXNZVUZCVTFnN1FVRk1lVUlzUjBGQlpDeEhRVTFzUWl4RlFVNUtPenRCUVZGQkxFMUJRVTFuU1N4VFFVRlZiRUlzUlVGQlJDeEhRVUZQTzBGQlEzQkNiVUlzWlVGQlYyNUNMRWRCUVVkSUxFdEJRVWdzU1VGQldVY3NSMEZCUjI5Q08wRkJSRTRzUjBGQlVDeEhRVVZZTEVWQlJrbzdPMEZCU1VFc1UwRkJUelZHTEU5QlFVOURMRTFCUVZBc1EwRkJZenRCUVVOdVFuWkRMR05CUkcxQ08wRkJSVzVDYlVrc1pVRkJWeXhGUVVaUk8wRkJSMjVDYkVrc1dVRkJVVFpITEVWQlNGYzdRVUZKYmtKcVF5eG5Ra0ZCV1N4RlFVcFBPMEZCUzI1Q0swSXNXVUZCVVN4RlFVeFhPMEZCVFc1Q09VWXNZMEZCVlN4RlFVNVRPMEZCVDI1Q1F5eFhRVUZQTEVWQlVGazdRVUZSYmtKTUxDdENRVUZWYkVJc2NVSkJRVk5ETEVsQlFXNUNMRVZCUVRCQ0xFVkJRVEZDTEVOQlVtMUNPMEZCVTI1Q2RVSXNaMEpCUVZrc1JVRlVUenRCUVZWdVFrTXNXVUZCVVRzN1FVRldWeXhIUVVGa0xFVkJXVW8yUnl4aFFWcEpMRVZCV1ZkRkxFMUJXbGdzUTBGQlVEdEJRV0ZFT3p0QlFVVkVMRk5CUVZNNVJpeHRRa0ZCVkN4RFFVRTRRbElzVDBGQk9VSXNSVUZCZFVNd1J5eFZRVUYyUXl4RlFVRnRSRHRCUVVOcVJERkhMRlZCUVZGTExFMUJRVklzUjBGQmFVSXNTVUZCYWtJN08wRkJSVUVzVTBGQlQwOHNUMEZCVDBNc1RVRkJVQ3hEUVVGallpeFBRVUZrTEVWQlFYVkNPMEZCUXpWQ2VrSXNXVUZCVVcxSkxGVkJSRzlDTzBGQlJUVkNha2NzWTBGQlZWSXNZMEZCWTNsSExGZEJRVmRvUWl4UFFVRjZRaXhGUVVGclF6RkdMRTlCUVd4RExFVkJRVEpETUVjc1ZVRkJNME03UVVGR2EwSXNSMEZCZGtJc1EwRkJVRHRCUVVsRU96dEJRVVZFTEZOQlFWTjRTU3huUWtGQlZDeERRVUV5UW10RExFVkJRVE5DTEVWQlFTdENPMEZCUXpkQ0xGTkJRVTlCTEVkQlEwcDFSeXhMUVVSSkxFTkJRMFUzU1N4eFFrRkJVekpFTEdWQlJGZ3NSVUZGU20xR0xFZEJSa2tzUTBGRlFTeFZRVUZEZUVJc1JVRkJSRHRCUVVGQkxGZEJRVkVzTUVKQlFXRkJMRVZCUVdJc1EwRkJVanRCUVVGQkxFZEJSa0VzUlVGSFNubENMRWxCU0Vrc1EwRkhReTlKTEhGQ1FVRlRNa1FzWlVGSVZpeERRVUZRTzBGQlNVUTdPMEZCUlVRc1UwRkJVemRDTEdGQlFWUXNRMEZCZDBKclNDeFJRVUY0UWl4RlFVRnJReTlJTEZOQlFXeERMRVZCUVRaRE8wRkJRek5ETEZOQlFVOHNjVUpCUVZFclNDeFJRVUZTTEVWQlFXdENMRlZCUVVNelFpeEhRVUZFTzBGQlFVRXNWMEZCVTBFc1NVRkRMMEozUWl4TFFVUXJRaXhEUVVONlFpeEhRVVI1UWl4RlFVVXZRa01zUjBGR0swSXNRMEZGTTBJc1ZVRkJRMGNzVVVGQlJEdEJRVUZCTEdGQlFXTkJMRk5CUVZOMlFpeEpRVUZVTEVWQlFXUTdRVUZCUVN4TFFVWXlRaXhGUVVjdlFtOUNMRWRCU0N0Q0xFTkJSek5DTEZWQlFVTkhMRkZCUVVRc1JVRkJZenM3UVVGRmFrSXNWVUZCU1VNc1dVRkJZU3hOUVVGTmFra3NWVUZCVlZRc1NVRkJha003TzBGQlJVRXNWVUZCU1hsSkxGRkJRVW9zUlVGQll6dEJRVU5hTEZsQlFVMUZMRmxCUVZsc1NTeFZRVUZWUXl4TFFVRldMRU5CUVdsQ0swZ3NVMEZCVTBvc1MwRkJWQ3hEUVVGbExFZEJRV1lzUlVGQmIwSXNRMEZCY0VJc1JVRkJkVUpCTEV0QlFYWkNMRU5CUVRaQ0xFbEJRVGRDTEVWQlFXMURMRU5CUVc1RExFVkJRWE5EUVN4TFFVRjBReXhEUVVFMFF5eEhRVUUxUXl4RlFVRnBSQ3hEUVVGcVJDeERRVUZxUWl4RFFVRnNRanRCUVVOQkxGbEJRVTFQTEZOQlFWTkVMRmxCUVZsRUxGbEJRVmtzUjBGQmVFSXNSMEZCT0VJc1JVRkJOME03UVVGRFFVRXNjVUpCUVdFc1RVRkJUVVVzVFVGQlRpeEhRVUZsU0N4UlFVRTFRanRCUVVORU96dEJRVVZFTEdGQlFVOURMRk5CUVZBN1FVRkRSQ3hMUVdRclFpeEZRV1V2UWtnc1NVRm1LMElzUTBGbE1VSXNSMEZtTUVJc1EwRkJWRHRCUVVGQkxFZEJRV3hDTEVOQlFWQTdRVUZwUWtRc1F6czdPenM3T3pzN096czdPenM3T3pzN096dEJRM3BoUkRzN096dEJRVVZCT3p0QlFVTkJPenRCUVVWQk96dEJRVWxCT3pzN08xRkJUVVZOTEd0Q0xFZEJRVUZCTEd0Q096czdRVUZIUml4VFFVRlRRU3hyUWtGQlZDeERRVUUyUWtNc1QwRkJOMElzUlVGQmMwTTdRVUZEY0VNc1RVRkJUVU1zWjBKQlFXZENMRVZCUVhSQ08wRkJRMEZETEhsQ1FVRjFRa1lzVDBGQmRrSXNSVUZCWjBORExHRkJRV2hET3p0QlFVVkJMRTFCUVUwNVNTeFRRVUZUTmtrc1VVRkJVV2hETEVWQlFYWkNPenRCUVVwdlF5dzJRa0ZMTTBKdFF5eFRRVXd5UWp0QlFVMXNRMmhLTEZkQlFVOXBTaXhuUWtGQlVDeERRVUYzUWtRc1UwRkJlRUlzUlVGQmJVTXNWVUZCUTBVc1EwRkJSRHRCUVVGQkxHRkJRVTlETERCQ1FVRXdRa1FzUTBGQk1VSXNSVUZCTmtKS0xHTkJRV05GTEZOQlFXUXNRMEZCTjBJc1JVRkJkVVJJTEU5QlFYWkVMRU5CUVZBN1FVRkJRU3hMUVVGdVF6dEJRVTVyUXpzN1FVRkxjRU1zVDBGQlN5eEpRVUZKUnl4VFFVRlVMRWxCUVhOQ1JpeGhRVUYwUWl4RlFVRnhRenRCUVVGQkxGVkJRVFZDUlN4VFFVRTBRanRCUVVWd1F6dEJRVU5HT3p0QlFVVkVMRk5CUVZORUxITkNRVUZVTEVOQlFXbERka2tzVTBGQmFrTXNSVUZCTkVNMFNTeG5Ra0ZCTlVNc1JVRkJPRVE3UVVGRE5VUkRMSE5DUVVGeFFqZEpMRk5CUVhKQ0xFVkJRV2RETkVrc1owSkJRV2hET3p0QlFVVkJMRTFCUVVrMVNTeFZRVUZWUXl4TFFVRmtMRVZCUVhGQ08wRkJRMjVDTEhsQ1FVRlJSQ3hWUVVGVlF5eExRVUZzUWl4RlFVRjVRaXhWUVVGRFowSXNUMEZCUkR0QlFVRkJMR0ZCUVdGelNDeDFRa0ZCZFVKMFNDeFBRVUYyUWl4RlFVRm5RekpJTEdkQ1FVRm9ReXhEUVVGaU8wRkJRVUVzUzBGQmVrSTdRVUZEUkRzN1FVRkZSQ3hOUVVGSk5Va3NWVUZCVlRCQ0xGRkJRV1FzUlVGQmQwSTdRVUZEZEVJMlJ5d3lRa0ZCZFVKMlNTeFZRVUZWTUVJc1VVRkJha01zUlVGQk1rTnJTQ3huUWtGQk0wTTdRVUZEUkR0QlFVTkdPenRCUVVWRUxGTkJRVk5ETEcxQ1FVRlVMRU5CUVRoQ05VZ3NUMEZCT1VJc1JVRkJkVU15U0N4blFrRkJka01zUlVGQmVVUTdRVUZEZGtRc1RVRkJTU3hEUVVGRE0wZ3NVVUZCVVd0R0xFMUJRV0lzUlVGQmNVSTdRVUZEYmtJN1FVRkRSRHM3UVVGRlJDeFBRVUZMTEVsQlFVbHhReXhUUVVGVUxFbEJRWE5DZGtnc1VVRkJVV3RHTEUxQlFUbENMRVZCUVhORE8wRkJRM0JETEZGQlFVa3NRMEZCUTNsRExHbENRVUZwUWtvc1UwRkJha0lzUTBGQlRDeEZRVUZyUXp0QlFVTm9RMGtzZFVKQlFXbENTaXhUUVVGcVFpeEpRVUU0UWl4RlFVRTVRanRCUVVORU96dEJRVVZFU1N4eFFrRkJhVUpLTEZOQlFXcENMRVZCUVRSQ2RrZ3NVVUZCVVN0Q0xFOUJRWEJETEVsQlFTdERMMElzVVVGQlVXdEdMRTFCUVZJc1EwRkJaWEZETEZOQlFXWXNRMEZCTDBNN1FVRkRSRHRCUVVOR096dEJRVVZFTEZOQlFWTkhMSGxDUVVGVUxFTkJRVzlEUkN4RFFVRndReXhGUVVGMVEwb3NZVUZCZGtNc1JVRkJjMFJFTEU5QlFYUkVMRVZCUVN0RU8wRkJRemRFVXl4blFrRkJZMG9zUTBGQlpEdEJRVU5CT3p0QlFVVkJMRTFCUVVsTExHTkJRV05NTEVWQlFVVk5MRTFCUVhCQ08wRkJRMEVzVTBGQlQwUXNaMEpCUVdkQ1ZpeFJRVUZSYUVNc1JVRkJVaXhEUVVGWE5FTXNWVUZCYkVNc1JVRkJPRU03UVVGRE5VTXNVVUZCVFVNc1dVRkJXVWdzV1VGQldYcERMRmxCUVZvc1EwRkJlVUoyU0N4eFFrRkJVekJFTEZWQlFXeERMRU5CUVd4Q08wRkJRMEVzVVVGQlRUQkhMR1ZCUVdWaUxHTkJRV05aTEZOQlFXUXNRMEZCY2tJN08wRkJSVUVzVVVGQlNVTXNXVUZCU2l4RlFVRnJRanRCUVVOb1FpeFZRVUZOUXl4eFFrRkJjVUpHTEZWQlFWVjBRaXhMUVVGV0xFTkJRV2RDTjBrc2NVSkJRVk15UkN4bFFVRjZRaXhEUVVFelFqdEJRVU5CTUVjc2VVSkJRVzFDUXl4SFFVRnVRanRCUVVOQkxGVkJRVTFETEd0Q1FVRnJRa01zYlVKQlFXMUNVaXhYUVVGdVFpeEZRVUZuUTBzc2EwSkJRV2hETEVOQlFYaENPMEZCUTBFc1ZVRkJUVWtzYVVKQlFXbENMREpDUVVGbExFTkJRVU51UWl4UlFVRlJhRWdzUlVGQlZDeEZRVUZoZGtNc1RVRkJZaXhEUVVGdlFuZExMR1ZCUVhCQ0xFTkJRV1lzUTBGQmRrSTdPMEZCUlVGSUxHMUNRVUZoTVVRc1NVRkJZaXhEUVVGclFpeEpRVUZzUWl4RlFVRjNRbWxFTEVOQlFYaENMRVZCUVRKQ1N5eFhRVUV6UWl4RlFVRjNRMU1zWTBGQmVFTXNSVUZCZDBRc1EwRkJRMFlzWjBKQlFXZENiRWNzUzBGQmFFSXNRMEZCYzBJc1EwRkJReXhEUVVGMlFpeEZRVUV3UWl4RFFVRXhRaXhEUVVGNlJEczdRVUZGUVN4VlFVRkpjMFlzUlVGQlJXVXNhMEpCUVU0c1JVRkJNRUk3UVVGRGVFSTdRVUZEUkR0QlFVTkdPMEZCUTBSV0xHdENRVUZqUVN4WlFVRlpSU3hWUVVFeFFqdEJRVU5FT3p0QlFVVkVPMEZCUTBRN08wRkJSVVFzVTBGQlUwZ3NZVUZCVkN4RFFVRjNRa29zUTBGQmVFSXNSVUZCTWtJN1FVRkRla0lzVFVGQlRXZENMR3RDUVVGclFtaENMRVZCUVVWblFpeGxRVUZHTEVOQlFXdENReXhKUVVGc1FpeERRVUYxUW1wQ0xFTkJRWFpDTEVOQlFYaENPMEZCUTBGQkxFbEJRVVZuUWl4bFFVRkdMRWRCUVc5Q0xGbEJRVTA3UVVGRGVFSm9RaXhOUVVGRlpTeHJRa0ZCUml4SFFVRjFRaXhKUVVGMlFqdEJRVU5CUXp0QlFVTkVMRWRCU0VRN1FVRkpSRHM3UVVGRlJDeFRRVUZUU0N4clFrRkJWQ3hEUVVFMlFteEVMRVZCUVRkQ0xFVkJRV2xESzBNc2EwSkJRV3BETEVWQlFYRkVPMEZCUTI1RUxFMUJRVTFxU2l4WlFVRlpMRVZCUVd4Q096dEJRVVZCTEUxQlFVbDVTaXh2UWtGQlNqdEJRVU5CTEZOQlFWRkJMR05CUVdNc2VVSkJRV0ZTTEcxQ1FVRnRRa01zUjBGQmJrSXNSVUZCWWl4RFFVRjBRaXhGUVVGblJUczdRVUZGT1VRc1VVRkJTU3hwUWtGQlNVOHNWMEZCU2l4RlFVRnBRamRMTEhGQ1FVRlRlVVVzU1VGQk1VSXNRMEZCU2l4RlFVRnhRenRCUVVOdVEyOUhMRzlDUVVGalFTeFpRVUZaZUVjc1MwRkJXaXhEUVVGclFuSkZMSEZDUVVGVGVVVXNTVUZCVkN4RFFVRmpkME1zVFVGQmFFTXNRMEZCWkR0QlFVTkJTeXhYUVVGTGQwUXNZMEZCWTNoRUxFVkJRV1FzUTBGQlREdEJRVU5CTEZWQlFVMTVSQ3hOUVVGTmVrUXNSMEZCUjBNc1dVRkJTQ3hEUVVGblFuWklMSEZDUVVGVFowd3NWVUZCZWtJc1EwRkJXanRCUVVOQk1VUXNWMEZCUzBFc1IwRkJSelJETEZWQlFWSTdRVUZEUVRsSkxHZENRVUZWTmtvc1QwRkJWaXhEUVVGclFrWXNSMEZCYkVJc1JVRkJkVUpHTEZkQlFYWkNPMEZCUTBFN1FVRkRSRHM3UVVGRlJIcEtMR05CUVZVMlNpeFBRVUZXTEVOQlFXdENTaXhYUVVGc1FqdEJRVU5FT3p0QlFVVkVMRk5CUVU5NlNpeFRRVUZRTzBGQlEwUTdPMEZCUlVRc1UwRkJVekJLTEdGQlFWUXNRMEZCZDBKNFJDeEZRVUY0UWl4RlFVRTBRanRCUVVNeFFpeE5RVUZKTkVRc1VVRkJVVFZFTEVWQlFWbzdPMEZCUlVFc1UwRkJUelJFTEUxQlFVMTBSQ3hQUVVGT0xFdEJRV3RDTEUxQlFYcENMRVZCUVdsRE8wRkJReTlDTEZGQlFVbHpSQ3hOUVVGTk0wUXNXVUZCVGl4RFFVRnRRblpJTEhGQ1FVRlRaMHdzVlVGQk5VSXNRMEZCU2l4RlFVRTJRenRCUVVNelF5eGhRVUZQUlN4TFFVRlFPMEZCUTBRN1FVRkRSRUVzV1VGQlVVRXNUVUZCVFdoQ0xGVkJRV1E3UVVGRFJEdEJRVU5HTEVNN096czdPenM3T3pzN096czdPenM3T3pzN1FVTjJTRVE3TzBGQlMwRTdPMEZCUzBFN08wRkJSVUU3TzFGQlJWTnBRaXhMTEVkQlFVRkJMRXM3T3p0QlFVZFVMRk5CUVZOQkxFdEJRVlFzUTBGQlowSkRMRzFDUVVGb1FpeEZRVUZ4UXp0QlFVTnVReXhOUVVGTlF5eGpRVUZqT1Vnc1UwRkJVMWtzWVVGQlZDeERRVUYxUW1sSUxHMUNRVUYyUWl4RFFVRndRanRCUVVOQkxFMUJRVTFGTEZsQlFWa3NNa0pCUVdsQ1JDeFhRVUZxUWl4RlFVRTRRbWhNTEhWQ1FVRTVRaXhEUVVGc1FqczdRVUZGUVdsTUxGbEJRVlV4Unl4UFFVRldMRU5CUVd0Q0xGVkJRVU0zUXl4UlFVRkVMRVZCUVdNN1FVRkRPVUlzVVVGQlRYVkhMR2RDUVVGblFpeHJRMEZCYVVKMlJ5eFJRVUZxUWl4RFFVRjBRanRCUVVOQkxGRkJRVTExU0N4VlFVRlZhVU1zWVVGQllXcEVMR0ZCUVdJc1EwRkJhRUk3TzBGQlJVRXNNa0pCUVdGMlJ5eFJRVUZpTEVWQlFYVkNkVWdzVVVGQlVXaERMRVZCUVM5Q08wRkJRMFFzUjBGTVJEdEJRVTFFT3p0QlFVVkVMRk5CUVZOcFJTeFpRVUZVTEVOQlFYVkNha1FzWVVGQmRrSXNSVUZCYzBNN1FVRkRjRU1zVFVGQlRXZENMRlZCUVZVc01FSkJRV05vUWl4aFFVRmtMRU5CUVdoQ08wRkJRMEVzZDBOQlFXMUNaMElzVDBGQmJrSTdRVUZEUVN4VFFVRlBRU3hQUVVGUU8wRkJRMFFzUXpzN096czdPenM3T3pzN096czdPenM3T3p0QlEycERSRHM3T3p0QlFVVkJPenRCUVVWQk96dEJRVVZCT3p0QlFVVkJPenRCUVZOQk96czdPenM3VVVGUlJUbEdMR0VzUjBGQlFVRXNZVHRSUVVOQlowa3NZeXhIUVVGQlFTeGpPMUZCUTBGRExHRXNSMEZCUVVFc1lUdFJRVU5CUXl4WkxFZEJRVUZCTEZrN1VVRkRRVU1zVVN4SFFVRkJRU3hSTzFGQlEwRkRMRzFDTEVkQlFVRkJMRzFDT3pzN1FVRkhSaXhKUVVGTlF5eFhRVUZYTEVWQlFXcENPMEZCUTBFc1NVRkJUVU1zVVVGQlVTeEZRVUZrTzBGQlEwRXNTVUZCU1VNc2EwSkJRV3RDTEVOQlFYUkNPenRCUVVWQkxGTkJRVk5LTEZGQlFWUXNRMEZCYlVKTExFbEJRVzVDTEVWQlFYbENOMFVzUzBGQmVrSXNSVUZCWjBNN1FVRkRPVUlzYlVKQlFVa3lSU3hMUVVGS0xFVkJRVmRGTEVsQlFWZ3NSVUZCYVVJM1JTeExRVUZxUWp0QlFVTkVPenRCUVVWRUxGTkJRVk00UlN4UlFVRlVMRU5CUVcxQ1JDeEpRVUZ1UWl4RlFVRjVRanRCUVVOMlFpeFRRVUZQTEdsQ1FVRkpSaXhMUVVGS0xFVkJRVmRGTEVsQlFWZ3NRMEZCVUR0QlFVTkVPenRCUVVWRUxGTkJRVk40U1N4aFFVRlVMRU5CUVhkQ09FVXNZVUZCZUVJc1JVRkJkVU03UVVGRGNrTXNUVUZCVFdoSExFdEJRVXQ1U2l4cFFrRkJXRHRCUVVOQkxFMUJRVTEyVEN4UFFVRlBPRWdzWTBGQll6bElMRWxCUVROQ096dEJRVVZCTEUxQlFVMDRTU3hWUVVGVmRVTXNVMEZCVTNaS0xFVkJRVlFzU1VGQlpUdEJRVU0zUWtFc1ZVRkVOa0k3UVVGRk4wSndRaXdyUWtGQlZWWXNTVUZCVml4RlFVRnBRamhJTEdOQlFXTnlTQ3hUUVVFdlFqdEJRVVkyUWl4SFFVRXZRanM3UVVGTFFUWkxMRkZCUVUxNFNpeEZRVUZPTEVsQlFWa3NSVUZCV2pzN1FVRkZRU3h4UTBGQmFVSXNRMEZCUTBFc1JVRkJSQ3hGUVVGTE9VSXNTVUZCVEN4RFFVRnFRanM3UVVGRlFTeHpRMEZCYTBJc1EwRkJRemhDTEVWQlFVUXNRMEZCYkVJc2MwSkJRVEpDT1VJc1NVRkJNMElzUlVGQmEwTXNTMEZCYkVNN1FVRkRRVHRCUVVOQk9Fa3NWVUZCVVdoRExFVkJRVklzUjBGQllYZEZMRTFCUVUxNFNpeEZRVUZPTEVWQlFWVTVRaXhKUVVGV0xFVkJRV2RDVWl4eFFrRkJVME1zU1VGQmVrSXNSVUZCSzBKeFNDeEZRVUUxUXp0QlFVTkJaME1zVlVGQlVXaERMRVZCUVZJc1EwRkJWemRFTEZsQlFWZ3NRMEZCZDBKNlJDeHhRa0ZCVTJ0TkxHTkJRV3BETEVWQlFXbEViRTBzY1VKQlFWTnRUU3hKUVVFeFJEczdRVUZGUVN4VFFVRlBOME1zVDBGQlVEdEJRVU5FT3p0QlFVVkVMRk5CUVZOclF5eGpRVUZVTEVOQlFYbENVU3hKUVVGNlFpeEZRVUVyUWp0QlFVTTNRaXhOUVVGTk1VY3NVMEZCVXpKSExGTkJRVk5FTEVsQlFWUXNRMEZCWmp0QlFVTkJMRTFCUVUwdlN5eFpRVUZaZVVzc1lVRkJZVTBzU1VGQllpeERRVUZzUWpzN1FVRkZRU3hOUVVGTlNTeFhRVUZYTzBGQlEyWnVUQ3gzUWtGRVpUdEJRVVZtY1VVc2EwSkJSbVU3UVVGSFpqQkhMR05CU0dVN1FVRkpaa3NzYlVSQlNtVTdRVUZMWmtNc01rTkJUR1U3UVVGTlprTXNVVUZCU1N4WlFVRkRReXhMUVVGRU8wRkJRVUVzWVVGQlYwTXNaMEpCUVdkQ1JDeExRVUZvUWl4RlFVRjFRbElzUzBGQlN6TklMRXRCUVV3c1JVRkJka0lzUTBGQldEdEJRVUZCTEV0QlRsYzdRVUZQWm5GSkxGVkJRVTBzWTBGQlEwTXNZMEZCUkR0QlFVRkJMR0ZCUVc5Q2JrSXNaVUZCWlZFc1MwRkJTMnBOTEUxQlFVd3NRMEZCV1RSTkxHTkJRVm9zUTBGQlppeERRVUZ3UWp0QlFVRkJMRXRCVUZNN1FVRlJaa01zVTBGQlN5eGhRVUZEUXl4VFFVRkVPMEZCUVVFc1lVRkJaU3cwUWtGQlYycENMRzlDUVVGdlFtbENMRk5CUVhCQ0xFTkJRVmdzUlVGQk1rTmlMRWxCUVRORExFTkJRV1k3UVVGQlFTeExRVkpWTzBGQlUyWmpMRk5CUVVzc1lVRkJRM3BHTEVkQlFVUTdRVUZCUVN4aFFVRlRNRVlzVlVGQlZWZ3NVVUZCVml4RlFVRnZRaTlGTEVkQlFYQkNMRVZCUVhsQ01rVXNTVUZCZWtJc1EwRkJWRHRCUVVGQkxFdEJWRlU3UVVGVlpuWk1MRmxCUVZFc1owSkJRVU0wUnl4SFFVRkVPMEZCUVVFc1lVRkJVMEVzVFVGQlRTdEZMRk5CUVZNNVJ5eE5RVUZVTEVOQlFXZENLMElzUjBGQmFFSXNSVUZCY1VKRExFVkJRVE5DTEVkQlFXZERPRVVzVTBGQlV6bEhMRTFCUVZRc1EwRkJaMEowUml4eFFrRkJVME1zU1VGQmVrSXNSVUZCSzBKeFNDeEZRVUY0UlR0QlFVRkJPMEZCVms4c1IwRkJha0k3TzBGQllVRXNUVUZCU1N4MVFrRkJVV2hETEUxQlFWSXNRMEZCU2l4RlFVRnhRanRCUVVOdVFqQklMREJDUVVGelFsb3NVVUZCZEVJN1FVRkRSRHM3UVVGRlJDeFRRVUZQUVN4UlFVRlFPMEZCUTBRN08wRkJSVVFzVTBGQlUxSXNiVUpCUVZRc1EwRkJPRUpwUWl4VFFVRTVRaXhGUVVGNVF6dEJRVU4yUXl4VFFVRlBMR2xDUVVGSlFTeFRRVUZLTEVWQlFXVXNWVUZCUTBrc1EwRkJSQ3hGUVVGUE8wRkJRek5DTEZGQlFVMURMRk5CUVZNc2QwSkJRVk5FTEVOQlFWUXNTMEZCWlc1TExFOUJRVTl4U3l4SlFVRlFMRU5CUVZsR0xFTkJRVm9zUlVGQlpTeERRVUZtTEUxQlFYTkNMRTlCUVhCRU96dEJRVVZCTEZkQlFVODdRVUZEVERsR0xHRkJRVThyUml4VFFVRlRSQ3hGUVVGRkxFOUJRVVlzUTBGQlZDeEhRVUZ6UWtFc1EwRkVlRUk3UVVGRlRHeEpMRmxCUVUwc1QwRkdSRHRCUVVkTWNVa3NZVUZCVDBZN1FVRklSaXhMUVVGUU8wRkJTMFFzUjBGU1RTeERRVUZRTzBGQlUwUTdPMEZCUlVRc1UwRkJVM2hDTEZsQlFWUXNRMEZCZFVKTkxFbEJRWFpDTEVWQlFUWkNPMEZCUXpOQ0xFMUJRVWt2U3l4WlFVRlpORXNzVTBGQlZVY3NTMEZCU3l4RFFVRk1MRU5CUVZZc1EwRkJhRUk3TzBGQlJVRXNUMEZCU3l4SlFVRkpjVUlzU1VGQlNTeERRVUZpTEVWQlFXZENRU3hKUVVGSmNrSXNTMEZCU3k5RkxFMUJRWHBDTEVWQlFXbERiMGNzUjBGQmFrTXNSVUZCYzBNN1FVRkRjRU53VFN4blFrRkJXVUVzVlVGQlZVTXNTMEZCVml4RFFVRnBRamhMTEV0QlFVdHhRaXhEUVVGTUxFTkJRV3BDTEVOQlFWbzdPMEZCUlVFc1VVRkJTWEJOTEZWQlFWVnpRaXhOUVVGV0xFbEJRVzlDT0Vzc1RVRkJUM0pDTEV0QlFVc3ZSU3hOUVVGTUxFZEJRV0VzUTBGQk5VTXNSVUZCWjBRN1FVRkRPVU5vUnl4clFrRkJXVUVzVlVGQlZUQkNMRkZCUVhSQ08wRkJRMEV3U3l4WFFVRkhMRU5CUVVnN1FVRkRSRHRCUVVOR096dEJRVVZFTEZOQlFVOXdUU3hUUVVGUU8wRkJRMFE3TzBGQlJVUXNVMEZCVTNkTExHRkJRVlFzUTBGQmQwSXpSQ3hIUVVGNFFpeEZRVUUyUWp0QlFVTXpRaXhUUVVGUExHbENRVUZKUVN4SFFVRktMRVZCUVZNc1ZVRkJRM2RHTEdGQlFVUTdRVUZCUVN4WFFVRnRRa0VzWTBGQll5eFBRVUZrTEVOQlFXNUNPMEZCUVVFc1IwRkJWQ3hEUVVGUU8wRkJRMFE3TzBGQlJVUXNVMEZCVTFBc1UwRkJWQ3hEUVVGdlFsZ3NVVUZCY0VJc1JVRkJPRUl2UlN4SFFVRTVRaXhGUVVGdFEycEhMRk5CUVc1RExFVkJRVGhETzBGQlF6VkRMRTFCUVUxclJTeFRRVUZUT0Vjc1UwRkJVemxITEUxQlFYaENPMEZCUTBFc1RVRkJUWEpGTEZsQlFWbHRUQ3hUUVVGVGJrd3NVMEZCTTBJN08wRkJSVUVzVFVGQlNTeERRVUZEYjBjc1IwRkJUQ3hGUVVGVk8wRkJRMUlzVjBGQlQydEhMR05CUVdOcVNTeE5RVUZrTEVWQlFYTkNja1VzVTBGQmRFSXNSVUZCYVVNc1JVRkJha01zUTBGQlVEdEJRVU5FT3p0QlFVVkVMRTFCUVUxcFFpeFZRVUZWYWtJc1ZVRkJWVU1zUzBGQlZpeERRVUZuUW0xSExFZEJRV2hDTEVOQlFXaENPMEZCUTBFc1RVRkJTVzVHTEZGQlFWRkxMRTFCUVZJc1NVRkJhMEpNTEZGQlFWRTNRaXhYUVVFNVFpeEZRVUV5UXp0QlFVTjZReXhYUVVGUGJVd3NaVUZCWlhCTExGVkJRVlZ5UWl4TlFVRldMRU5CUVdsQ2MwZ3NSMEZCYWtJc1EwRkJaaXhEUVVGUU8wRkJRMFE3TzBGQlJVUXNVMEZCVHk5Q0xFOUJRVThyUWl4SFFVRlFMRVZCUVZsR0xFdEJRVzVDTzBGQlEwUTdPMEZCUlVRc1UwRkJVMjlITEdGQlFWUXNRMEZCZDBKcVNTeE5RVUY0UWl4RlFVRm5RM0pGTEZOQlFXaERMRVZCUVRKRGRVMHNWVUZCTTBNc1JVRkJkVVE3UVVGRGNrUXNkVUpCUVZGc1NTeE5RVUZTTEVWQlFXZENMRlZCUVVOdFNTeEpRVUZFTEVWQlFVOHpTaXhYUVVGUUxFVkJRWFZDTzBGQlEzSkRMRkZCUVVrc2FVSkJRVWxvUlN4clEwRkJTaXhGUVVFMFFtZEZMRmRCUVRWQ0xFTkJRVW9zUlVGQk9FTTdRVUZETlVNN1FVRkRSRHM3UVVGRlJDeFJRVUZOTlVJc1ZVRkJWV3BDTEZWQlFWVkRMRXRCUVZZc1EwRkJaMEkwUXl4WFFVRm9RaXhEUVVGb1FqczdRVUZGUVN4UlFVRkpOVUlzVVVGQlVVc3NUVUZCV2l4RlFVRnZRanRCUVVOc1FtbE1MR2xDUVVGWE1Vb3NWMEZCV0N4SlFVRXdRaXhGUVVFeFFqdEJRVU5CZDBJc1lVRkJUM2hDTEZkQlFWQXNSVUZCYjBKakxFOUJRWEJDTEVOQlFUUkNMRlZCUVVNd1F5eEZRVUZFTEVWQlFVc3JSaXhEUVVGTUxFVkJRVmM3UVVGRGNrTXNXVUZCVFVzc1lVRkJZVVlzVjBGQlZ6RktMRmRCUVZnc1JVRkJkMEoxU2l4RFFVRjRRaXhKUVVFMlFpeEZRVUZvUkR0QlFVTkJSU3h6UWtGQlkycEpMRTlCUVU5NFFpeFhRVUZRTEVWQlFXOUNkVW9zUTBGQmNFSXNSVUZCZFVKdVRDeFJRVUZSVXl4UlFVRlNMRU5CUVdsQ2JrTXNTVUZCZUVNc1EwRkJaQ3hGUVVFMlJEQkNMRkZCUVZGVExGRkJRWEpGTEVWQlFTdEZLMHNzVlVGQkwwVTdRVUZEUkN4UFFVaEVPMEZCU1VFN1FVRkRSRHM3UVVGRlJDeFJRVUZKZUV3c1VVRkJVVGRDTEZkQlFWb3NSVUZCZVVJN1FVRkRka0lzVlVGQlRYTk9MR3RDUVVGclFrZ3NWMEZCVnpGS0xGZEJRVmdzU1VGQk1FSXNSVUZCYkVRN1FVRkRRWGxLTEc5Q1FVRmpha2tzVDBGQlQzaENMRmRCUVZBc1EwRkJaQ3hGUVVGdFF6VkNMRTlCUVc1RExFVkJRVFJEZVV3c1pVRkJOVU03UVVGRFJEczdRVUZGUkVnc1pVRkJXWFpOTEZWQlFWVlJMRTFCUVZZc1EwRkJhVUp4UXl4WFFVRnFRaXhMUVVGcFEwRXNWMEZCTjBNc1NVRkJOa1F5U2l4TFFVRkxkRWNzUzBGQmJFVTdRVUZEUkN4SFFYUkNSRHM3UVVGM1FrRXNVMEZCVDNGSExGVkJRVkE3UVVGRFJEczdRVUZGUkN4VFFVRlRaaXhsUVVGVUxFTkJRVEJDUkN4TFFVRXhRaXhGUVVGcFEzQk1MRk5CUVdwRExFVkJRVFJETzBGQlF6RkRMRTFCUVVsM1RTeFZRVUZWZUUwc1ZVRkJWVFpHTEUxQlFYaENPenRCUVVWQkxFMUJRVWwxUml4VlFVRlZMRVZCUVdRc1JVRkJhMEk3UVVGRGFFSXNWMEZCVDJoQ0xHVkJRV1Z3U3l4VlFVRlZhVVFzUzBGQlZpeERRVUZuUWl4RFFVRm9RaXhGUVVGdFFpeERRVUZ1UWl4RFFVRm1MRU5CUVZBN1FVRkRSRHM3UVVGRlJDeE5RVUZKTEhkQ1FVRlRiVWtzUzBGQlZDeERRVUZLTEVWQlFYRkNPMEZCUTI1Q0xGZEJRVTl2UWl4VFFVRlFMRVZCUVd0Q08wRkJRMmhDTEZWQlFVbDRUU3hWUVVGVmQwMHNUMEZCVml4TlFVRjFRbkJDTEV0QlFUTkNMRVZCUVd0RE8wRkJRMmhETzBGQlEwUTdRVUZEUmpzN1FVRkZSQ3hYUVVGUGFFSXNaVUZCWlhCTExGVkJRVlZwUkN4TFFVRldMRU5CUVdkQ0xFTkJRV2hDTEVWQlFXMUNkVW9zVlVGQlZTeERRVUUzUWl4RFFVRm1MRU5CUVZBN1FVRkRSRHM3UVVGRlJIQkNMRlZCUVZGQkxGTkJRVk1zUTBGQmFrSTdRVUZEUVN4VFFVRlBiMElzWVVGQllYQkNMRTlCUVhCQ0xFVkJRVFpDTzBGQlF6TkNMRkZCUVVrc2QwSkJRVk1zUTBGQlEzQk1MRlZCUVZWM1RTeFZRVUZWTEVOQlFYQkNMRU5CUVZZc1EwRkJTaXhGUVVGMVF6dEJRVU55UTBFN1FVRkRSRHRCUVVOR096dEJRVVZFTEZOQlFVOXdReXhsUVVGbGNFc3NWVUZCVldsRUxFdEJRVllzUTBGQlowSXNRMEZCYUVJc1JVRkJiVUoxU2l4VlFVRlZMRU5CUVRkQ0xFTkJRV1lzUTBGQlVEdEJRVU5FT3p0QlFVVkVMRk5CUVZOYUxIRkNRVUZVTEVOQlFXZERXaXhSUVVGb1F5eEZRVUV3UXp0QlFVTjRRM1JLTEZOQlFVOURMRTFCUVZBc1EwRkJZM0ZLTEZGQlFXUXNSVUZCZDBJN1FVRkRkRUpWTEZOQlFVc3NZVUZCUTJVc1IwRkJSRHRCUVVGQkxHRkJRVk55UXl4bFFVRmxXU3hUUVVGVFNpeEpRVUZVTEVOQlFXTnFUU3hOUVVGa0xFTkJRWEZDT0U0c1IwRkJja0lzUlVGQk1FSjZRaXhUUVVGVGJrd3NVMEZCVkN4RFFVRnRRakJDTEZGQlFXNUNMRU5CUVRSQ2JrTXNTVUZCZEVRc1EwRkJaaXhEUVVGVU8wRkJRVUVzUzBGRWFVSTdPMEZCUjNSQ1owVXNWVUZCVFN4alFVRkRjMG9zUjBGQlJEdEJRVUZCTEdGQlFWTXNOa0pCUVZjc1MwRkJXQ3hGUVVGclFpeEZRVUZGUXl4UFFVRlBNMElzVTBGQlV6bEhMRTFCUVZRc1EwRkJaMEl5UWl4TlFVRjZRaXhGUVVGcFF6WkhMRkZCUVdwRExFVkJRV3hDTEVWQlFUQkVNVUlzVVVGQk1VUXNRMEZCVkR0QlFVRkJMRXRCU0dkQ08wRkJTWFJDYmtJc1lVRkJVeXhwUWtGQlF6WkRMRWRCUVVRN1FVRkJRU3hoUVVGVExEWkNRVUZYTEV0QlFWZ3NSVUZCYTBJc1JVRkJSVU1zVDBGQlR5eERRVUZVTEVWQlFWbEVMRkZCUVZvc1JVRkJiRUlzUlVGQmNVTXhRaXhSUVVGeVF5eERRVUZVTzBGQlFVRXNTMEZLWVR0QlFVdDBRbkJNTEZOQlFVc3NZVUZCUXl0TkxFdEJRVVFzUlVGQlVVUXNSMEZCVWp0QlFVRkJMR0ZCUVdkQ0xEWkNRVUZYTEV0QlFWZ3NSVUZCYTBJc1JVRkJSVU1zV1VGQlJpeEZRVUZUUkN4UlFVRlVMRVZCUVd4Q0xFVkJRV3RETVVJc1VVRkJiRU1zUTBGQmFFSTdRVUZCUVN4TFFVeHBRanM3UVVGUGRFSTVRaXhUUVVGTExHRkJRVU4xUkN4SFFVRkVPMEZCUVVFc1lVRkJVeXcyUWtGQlZ5eFJRVUZZTEVWQlFYRkNMRVZCUVVWRkxFOUJRVTh6UWl4VFFVRlRPVWNzVFVGQlZDeERRVUZuUWpKQ0xFMUJRV2hDTEVsQlFUQkNORWNzVDBGQlR5eERRVUZxUXl4RFFVRlVMRVZCUVRoRFFTeFJRVUU1UXl4RlFVRnlRaXhGUVVFd1JYcENMRkZCUVRGRkxFTkJRVlE3UVVGQlFTeExRVkJwUWp0QlFWRjBRalJDTEZkQlFVOHNaVUZCUTBnc1IwRkJSRHRCUVVGQkxHRkJRVk1zTmtKQlFWY3NVVUZCV0N4RlFVRnhRaXhGUVVGRlJTeFBRVUZQTEVOQlFWUXNSVUZCV1VZc1VVRkJXaXhGUVVGeVFpeEZRVUYzUTNwQ0xGRkJRWGhETEVOQlFWUTdRVUZCUVN4TFFWSmxPMEZCVTNSQ2FFa3NXVUZCVVN4blFrRkJRekpLTEV0QlFVUXNSVUZCVVVZc1IwRkJVanRCUVVGQkxHRkJRV2RDTERaQ1FVRlhMRkZCUVZnc1JVRkJjVUlzUlVGQlJVVXNXVUZCUml4RlFVRlRSaXhSUVVGVUxFVkJRWEpDTEVWQlFYRkRla0lzVVVGQmNrTXNRMEZCYUVJN1FVRkJRU3hMUVZSak96dEJRVmQwUW01R0xGbEJRVkU3UVVGQlFTeGhRVUZOYlVZc1UwRkJVemxITEUxQlFWUXNRMEZCWjBJeVFpeE5RVUYwUWp0QlFVRkJMRXRCV0dNN1FVRlpkRUpGTEZkQlFVODdRVUZCUVN4aFFVRk5PRWNzVVVGQlVUZENMRkZCUVZJc1EwRkJUanRCUVVGQkxFdEJXbVU3UVVGaGRFSjRTQ3hoUVVGVExHbENRVUZEYzBvc1JVRkJSRHRCUVVGQkxHRkJRVkZETEd0Q1FVRnJRaTlDTEZGQlFXeENMRVZCUVRSQ09FSXNSVUZCTlVJc1EwRkJVanRCUVVGQkxFdEJZbUU3UVVGamRFSkZMRmxCUVZFc1owSkJRVU5HTEVWQlFVUTdRVUZCUVN4aFFVRlJSeXhYUVVGWGFrTXNVVUZCV0N4RlFVRnhRamhDTEVWQlFYSkNMRU5CUVZJN1FVRkJRU3hMUVdSak8wRkJaWFJDY0VZc1UwRkJTeXhoUVVGRGIwWXNSVUZCUkR0QlFVRkJMR0ZCUVZGRUxGRkJRVkUzUWl4UlFVRlNMRVZCUVd0Q09FSXNSVUZCYkVJc1EwRkJVanRCUVVGQk8wRkJabWxDTEVkQlFYaENPMEZCYVVKRU96dEJRVVZFTEZOQlFWTkRMR2xDUVVGVUxFTkJRVFJDTDBJc1VVRkJOVUlzUlVGQmMwTTRRaXhGUVVGMFF5eEZRVUV3UXp0QlFVTjRRemxDTEZkQlFWTTVSeXhOUVVGVUxFTkJRV2RDVml4UFFVRm9RaXhEUVVGM1FpeFZRVUZETUVNc1JVRkJSQ3hGUVVGTEswWXNRMEZCVER0QlFVRkJMRmRCUTNSQ1lTeEhRVU5GV0N4alFVRmpha2NzUjBGQlJ6aEZMRk5CUVZOdVRDeFRRVUZVTEVOQlFXMUNNRUlzVVVGQmJrSXNRMEZCTkVKdVF5eEpRVUV2UWl4RFFVRmtMRVZCUVc5RU5Fd3NVMEZCVTI1TUxGTkJRVlFzUTBGQmJVSXdRaXhSUVVGMlJTeEZRVUZwUml4RlFVRnFSaXhEUVVSR0xFVkJSVVV3U3l4RFFVWkdMRU5CUkhOQ08wRkJRVUVzUjBGQmVFSTdRVUZMUkRzN1FVRkZSQ3hUUVVGVFowSXNWVUZCVkN4RFFVRnhRbXBETEZGQlFYSkNMRVZCUVN0Q09FSXNSVUZCTDBJc1JVRkJiVU03UVVGRGFrTXNUVUZCVFVrc1ZVRkJWU3hGUVVGb1FqczdRVUZGUVVnc2IwSkJRV3RDTDBJc1VVRkJiRUlzUlVGQk5FSXNWVUZCUXpsRkxFVkJRVVFzUlVGQlN5dEdMRU5CUVV3c1JVRkJWenRCUVVOeVF5eFJRVUZKWVN4SFFVRkhOVWNzUlVGQlNDeEZRVUZQSzBZc1EwRkJVQ3hEUVVGS0xFVkJRV1U3UVVGRFltbENMR05CUVZFNVNpeEpRVUZTTEVOQlFXRTRReXhGUVVGaU8wRkJRMFE3UVVGRFJpeEhRVXBFT3p0QlFVMUJMRk5CUVU5blNDeFBRVUZRTzBGQlEwUTdPMEZCUlVRc1UwRkJVMHdzVDBGQlZDeERRVUZyUWpkQ0xGRkJRV3hDTEVWQlFUUkNPRUlzUlVGQk5VSXNSVUZCWjBNN1FVRkRPVUlzVFVGQlRVa3NWVUZCVlN4RlFVRm9RanRCUVVOQlNDeHZRa0ZCYTBJdlFpeFJRVUZzUWl4RlFVRTBRaXhWUVVGRE9VVXNSVUZCUkN4RlFVRkxLMFlzUTBGQlREdEJRVUZCTEZkQlFWZHBRaXhSUVVGUk9Vb3NTVUZCVWl4RFFVRmpNRW9zUzBGQlMwRXNSMEZCUnpWSExFVkJRVWdzUlVGQlR5dEdMRU5CUVZBc1EwRkJUQ3hIUVVGcFFpOUdMRVZCUVM5Q0xFTkJRVmc3UVVGQlFTeEhRVUUxUWp0QlFVTkJMRk5CUVU5blNDeFBRVUZRTzBGQlEwUXNRenM3T3pzN096czdPenM3T3pzN096czdPenRCUXpWUFJEczdPenRCUVVWQk96dEJRVVZCT3p0QlFVMUJPenM3TzBGQlEwRTdPMEZCUlVFN08wRkJVVUU3TzBGQlJVRTdPMEZCUlVFN096czdPenM3TzFGQlIwVkRMRk1zUjBGQlFVRXNVenRSUVVOQlF5eG5RaXhIUVVGQlFTeG5RanRSUVVOQlF5eFZMRWRCUVVGQkxGVTdVVUZEUVhCRExHZENMRWRCUVVGQkxHZENPMUZCUTBGRExGa3NSMEZCUVVFc1dUdFJRVU5CYjBNc2FVSXNSMEZCUVVFc2FVSTdPenRCUVVkR0xFbEJRVTFETEZWQlFWVXNSVUZCUlVNc1UwRkJVeXhGUVVGWUxFVkJRV1ZETEZsQlFWa3NTMEZCTTBJc1JVRkJhRUk3UVVGRFFTeEpRVUZOUXl4dlFrRkJiMElzUlVGQk1VSTdRVUZEUVN4SlFVRk5ReXh6UWtGQmMwSXNSVUZCUlVNc1RVRkJUU3hGUVVGU0xFVkJRVFZDT3p0QlFVVkJMRk5CUVZNelF5eG5Ra0ZCVkN4SFFVRTJRanRCUVVNelFrTTdRVUZEUVhGRExGVkJRVkZGTEZWQlFWSXNSMEZCY1VJc1NVRkJja0k3UVVGRFJEczdRVUZGUkN4VFFVRlRka01zV1VGQlZDeEhRVUY1UWp0QlFVTjJRaXhOUVVGTmMwTXNWVUZCVlVRc1VVRkJVVU1zVDBGQmVFSTdRVUZEUVVRc1ZVRkJVVU1zVDBGQlVpeEhRVUZyUWl4RlFVRnNRanRCUVVOQkxESkNRVUZqUVN4UFFVRmtPMEZCUTBFc1UwRkJUMHNzYlVKQlFWQTdRVUZEUkRzN1FVRkZSQ3hUUVVGVFFTeHBRa0ZCVkN4SFFVRTRRanRCUVVNMVFpeE5RVUZOUXl4dlFrRkJiMEpJTEc5Q1FVRnZRa01zU1VGQk9VTTdRVUZEUVVRc2MwSkJRVzlDUXl4SlFVRndRaXhIUVVFeVFpeEZRVUV6UWp0QlFVTkJSU3h2UWtGQmEwSjBTeXhQUVVGc1FpeERRVUV3UWl4VlFVRkRkVXNzUTBGQlJEdEJRVUZCTEZkQlFVOUJMRWRCUVZBN1FVRkJRU3hIUVVFeFFqczdRVUZGUVN4TlFVRkpMRU5CUVVNc2RVSkJRVkZTTEZGQlFWRkRMRTlCUVdoQ0xFTkJRVXdzUlVGQkswSTdRVUZETjBJc1YwRkJUM1JETEdOQlFWQTdRVUZEUkRzN1FVRkZSQ3hUUVVGUE9FTXNjVUpCUVZBN1FVRkRSRHM3UVVGRlJDeFRRVUZUUVN4dFFrRkJWQ3hIUVVGblF6dEJRVU01UWxRc1ZVRkJVVVVzVlVGQlVpeEhRVUZ4UWl4TFFVRnlRanRCUVVOQkxFMUJRVWxSTEhWQ1FVRktPenRCUVVWQkxGTkJRVkZCTEdsQ1FVRnBRbEFzYTBKQlFXdENlRVVzUjBGQmJFSXNSVUZCZWtJc1JVRkJiVVE3UVVGRGFrUXJSU3h0UWtGQlpTeEpRVUZtTzBGQlEwUTdPMEZCUlVRc1UwRkJUME1zVVVGQlVVTXNUMEZCVWl4RFFVRm5RaXhKUVVGb1FpeERRVUZRTzBGQlEwUTdPMEZCUlVRc1UwRkJVMklzYVVKQlFWUXNRMEZCTkVJeFF5eEpRVUUxUWl4RlFVRnJRM2RFTEUxQlFXeERMRVZCUVRCRE8wRkJRM2hETEcxQ1FVRkpZaXhSUVVGUlF5eFBRVUZhTEVWQlFYRkNOVU1zU1VGQmNrSXNSVUZCTWtKM1JDeE5RVUV6UWp0QlFVTkVPenRCUVVWRUxGTkJRVk5ETEcxQ1FVRlVMRWRCUVdkRE8wRkJRemxDTEZOQlFVOWtMRkZCUVZGRkxGVkJRV1k3UVVGRFJEczdRVUZGUkN4VFFVRlRZU3huUWtGQlZDeERRVUV5UWtNc1VVRkJNMElzUlVGQmNVTjZUaXhQUVVGeVF5eEZRVUU0UTI5RUxFMUJRVGxETEVWQlFYTkVPRWNzVVVGQmRFUXNSVUZCWjBWeVFpeEhRVUZvUlN4RlFVRnhSVHRCUVVOdVJTeE5RVUZOTmtVc1QwRkJUekZPTEZGQlFWRnZReXhMUVVGU0xFTkJRV054VEN4UlFVRmtMRU5CUVdJN08wRkJSVUZhTEhOQ1FVRnZRa01zU1VGQmNFSXNRMEZCZVVKNFN5eEpRVUY2UWl4RFFVRTRRaXhaUVVGTk8wRkJRMnhETEZGQlFVMDRReXhMUVVGTGFFTXNUMEZCVDNCRUxGRkJRVkV4UWl4SlFVRlNMRWxCUVdkQ1VpeHhRa0ZCVTBNc1NVRkJhRU1zUlVGQmMwTnhTQ3hGUVVGcVJEdEJRVU5CTEZGQlFVMXRSeXhQUVVGUExFTkJRVU4yVEN4UlFVRlJNVUlzU1VGQlZDeEhRVUZuUWl3d1FrRkJZemhGTEUxQlFXUXNRMEZCYUVJc1IwRkJkME5CTEU5QlFVOXdSQ3hSUVVGUk1VSXNTVUZCWml4RlFVRnhRakpITEV0QlFURkZPMEZCUTBGNVNTeFRRVUZMZEVrc1JVRkJUQ3hGUVVGVGJVY3NTVUZCVkN4RlFVRmxja0lzVVVGQlppeEZRVUY1UW5KQ0xFZEJRWHBDTzBGQlEwUXNSMEZLUkR0QlFVdEVPenRCUVVWRUxGTkJRVk41UkN4blFrRkJWQ3hEUVVFeVFuQk9MRk5CUVROQ0xFVkJRWE5ETzBGQlEzQkRMRTFCUVUxSUxGbEJRVmtzZVVKQlFXRkhMRk5CUVdJc1EwRkJiRUk3UVVGRFFTeE5RVUZOZVU4c1lVRkJZVU1zWjBKQlFXZENOMDhzVTBGQmFFSXNRMEZCYmtJN1FVRkRRU3gxUWtGQlUwY3NVMEZCVkN4RlFVRnZRbmxQTEZWQlFYQkNPenRCUVVWQkxIVkNRVUZSTlU4c1ZVRkJWVU1zUzBGQmJFSXNSVUZCZVVJc1ZVRkJRMmRDTEU5QlFVUXNSVUZCVlRSQ0xGZEJRVllzUlVGQk1FSTdRVUZEYWtRc1VVRkJTVFZDTEZGQlFWRTNRaXhYUVVGYUxFVkJRWGxDTzBGQlEzWkNiVThzZFVKQlFXbENjRTRzVlVGQlZYSkNMRTFCUVZZc1EwRkJhVUlyUkN4WFFVRnFRaXhEUVVGcVFqdEJRVU5FTzBGQlEwWXNSMEZLUkRzN1FVRk5RU3hOUVVGTmMwa3NWMEZCVnl3eVFrRkJaV2hNTEZOQlFXWXNRMEZCYWtJN1FVRkRRWE5QTEcxQ1FVRnBRaXhQUVVGcVFpeEZRVUV3UW5wUExGVkJRVlZETEV0QlFWWXNRMEZCWjBKc1FpeHhRa0ZCVTBNc1NVRkJla0lzUTBGQk1VSXNSVUZCTUVRMFVDeFZRVUV4UkN4RlFVRnpSWHBFTEZGQlFYUkZMRVZCUVdkR2FFd3NWVUZCVldsRUxFdEJRVllzUTBGQlowSXNRMEZCUXl4RFFVRnFRaXhGUVVGdlFpeERRVUZ3UWl4RFFVRm9SanM3UVVGRlFTeFRRVUZQZDB3c1ZVRkJVRHRCUVVORU96dEJRVVZFTEZOQlFWTkRMR1ZCUVZRc1EwRkJNRUkzVHl4VFFVRXhRaXhGUVVGeFF6dEJRVU51UXl4TlFVRk5PRThzWTBGQll5eHBRa0ZCU1RsUExGVkJRVlZETEV0QlFXUXNSVUZCY1VJc1ZVRkJRMmRDTEU5QlFVUXNSVUZCWVR0QlFVTndSQ3hSUVVGTk9FNHNXVUZCV1RsT0xGRkJRVkZMTEUxQlFWSXNSMEZCYVVJc1JVRkJha0lzUjBGQmMwSXNSVUZCZUVNN08wRkJSVUVzVjBGQlR6VkRMSGRDUVVGWmMxRXNUVUZCV2l4RFFVRnRRaXhWUVVGRFF5eERRVUZFTEVWQlFVazNTU3hIUVVGS0xFVkJRVms3UVVGRGNFTXNWVUZCU1VZc1kwRkJTanM3UVVGRlFTeGpRVUZSUlN4SFFVRlNPMEZCUTBVc1lVRkJTeXhQUVVGTU8wRkJRMEVzWVVGQlN5eE5RVUZNTzBGQlEwVkdMR3RDUVVGUmFrWXNVVUZCVVhWSExGTkJRVklzU1VGQmNVSXNSVUZCTjBJN1FVRkRRVHM3UVVGRlJqdEJRVU5GZEVJc2EwSkJRVkVzUlVGQlVqdEJRVkJLT3p0QlFWVkJLMGtzVVVGQlJUZEpMRWRCUVVZc1NVRkJVMFlzUzBGQlZEczdRVUZGUVN4aFFVRlBLMGtzUTBGQlVEdEJRVU5FTEV0QmFFSk5MRVZCWjBKS1JpeFRRV2hDU1N4RFFVRlFPMEZCYVVKRUxFZEJjRUp0UWl4RFFVRndRanM3UVVGelFrRXNVMEZCVDJ4T0xFOUJRVTlETEUxQlFWQXNRMEZCWTJkT0xGZEJRV1FzYzBKQlFUaENMMUFzY1VKQlFWTkRMRWxCUVhaRExFVkJRVGhETEhOQ1FVRlRUaXgxUWtGQlZDeEZRVUZ6UWl4RlFVRjBRaXhEUVVFNVF5eEZRVUZRTzBGQlEwUTdPMEZCUlVRc1UwRkJVelJQTEZOQlFWUXNRMEZCYjBJMFFpeFpRVUZ3UWl4RlFVRnJReTlQTEZOQlFXeERMRVZCUVRaRFoxQXNhVUpCUVRkRExFVkJRV2RGTzBGQlF6bEVRU3h6UWtGQmIwSkJMSEZDUVVGeFFpeEZRVUY2UXp0QlFVTkJMRTFCUVUxb1JTeFhRVUZYTERKQ1FVRmxhRXdzVTBGQlppeERRVUZxUWpzN1FVRkZRU3hOUVVGSkxFTkJRVU5uVEN4VFFVRlRPVWNzVFVGQlpDeEZRVUZ6UWp0QlFVTndRamhITEdGQlFWTTVSeXhOUVVGVUxFZEJRV3RDYTBvc2FVSkJRV2xDY0U0c1UwRkJha0lzUTBGQmJFSTdRVUZEUVN4UlFVRk5NazBzVVVGQlVTeERRVUZETTAwc1ZVRkJWV2xFTEV0QlFWWXNRMEZCWjBJc1EwRkJReXhEUVVGcVFpeEZRVUZ2UWl4RFFVRndRaXhEUVVGbU8wRkJRMEZ4U3l4elFrRkJhMEowVGl4VFFVRnNRaXh6UWtGQlowTndRaXh4UWtGQlUzRlJMRmRCUVhwRExFVkJRWFZFTEVWQlFVVnlVQ3hMUVVGTExFVkJRVVVyVFN4WlFVRkdMRVZCUVZOMVF5eExRVUZMZGtNc1VVRkJVU3hEUVVGMFFpeEZRVUZRTEVWQlFYWkVPMEZCUTBRN08wRkJSVVFzZFVKQlFWRnZReXhaUVVGU0xFVkJRWE5DTEZWQlFVTllMRTFCUVVRc1JVRkJVekZNTEZkQlFWUTdRVUZCUVN4WFFVRjVRbmxOTEZOQlFWTjZUU3hYUVVGVUxFVkJRWE5DTUV3c1RVRkJkRUlzUlVGQk9FSndSQ3hSUVVFNVFpeEZRVUYzUTJkRkxHbENRVUY0UXl4RFFVRjZRanRCUVVGQkxFZEJRWFJDT3p0QlFVVkJWaXh0UWtGQmFVSXNVVUZCYWtJc1JVRkJNa0owUkN4VFFVRlRia3dzVTBGQlZDeERRVUZ0UWtNc1MwRkJia0lzUTBGQmVVSnNRaXh4UWtGQlUwTXNTVUZCYkVNc1EwRkJNMElzUlVGQmIwVnRUU3hUUVVGVE9VY3NUVUZCTjBVc1JVRkJjVVk0Unl4UlFVRnlSaXhGUVVFclJtaE1MRlZCUVZWcFJDeExRVUZXTEVOQlFXZENMRU5CUVVNc1EwRkJha0lzUlVGQmIwSXNRMEZCY0VJc1EwRkJMMFk3TzBGQlJVRXNUVUZCU1c5TUxIRkNRVUZLTEVWQlFUSkNPMEZCUTNwQ0xGZEJRVThzU1VGQlNVZ3NUMEZCU2l4RFFVRlpMRlZCUVVOclFpeEhRVUZFTzBGQlFVRXNZVUZCVXpGQ0xHdENRVUZyUW5STExFbEJRV3hDTEVOQlFYVkNaMDBzUjBGQmRrSXNRMEZCVkR0QlFVRkJMRXRCUVZvc1EwRkJVRHRCUVVORU96dEJRVVZFTEZOQlFVOXNSU3hqUVVGUU8wRkJRMFE3TzBGQlJVUXNVMEZCVTJsRkxGRkJRVlFzUTBGQmJVSjZUU3hYUVVGdVFpeEZRVUZuUXpCTUxFMUJRV2hETEVWQlFYZERjRVFzVVVGQmVFTXNSVUZCYTBSblJTeHBRa0ZCYkVRc1JVRkJjVVU3UVVGRGJrVXNUVUZCVFdoUUxGbEJRVmxuVEN4VFFVRlRTaXhKUVVFelFqdEJRVU5CTEUxQlFVMHZTeXhaUVVGWmJVd3NVMEZCVTI1TUxGTkJRVE5DTzBGQlEwRXNUVUZCVFhGRkxGTkJRVk00Unl4VFFVRlRPVWNzVFVGQmVFSTdRVUZEUVN4TlFVRkpjRVFzVlVGQlZXcENMRlZCUVZWRExFdEJRVllzUTBGQlowSTBReXhYUVVGb1FpeERRVUZrT3p0QlFVVkJMRTFCUVVrc1EwRkJRelZDTEU5QlFVd3NSVUZCWXp0QlFVTmFORUlzYTBKQlFXTTNReXhWUVVGVlR5eFZRVUZXTEVOQlFYRkNjME1zVjBGQmNrSXNRMEZCWkR0QlFVTkJOVUlzWTBGQlZXcENMRlZCUVZWRExFdEJRVllzUTBGQlowSTBReXhYUVVGb1FpeERRVUZXTzBGQlEwUTdPMEZCUlVRc1RVRkJTU3hEUVVGRE5VSXNUMEZCVEN4RlFVRmpPMEZCUTFvc1ZVRkJUU3hKUVVGSmRVOHNLMEpCUVVvc1EwRkJNRUl6VFN4WFFVRXhRaXhGUVVGMVF6ZERMRlZCUVZWVUxFbEJRV3BFTEVWQlFYVkVXU3hUUVVGMlJDeERRVUZPTzBGQlEwUTdPMEZCUlVRc1RVRkJTVzlQTEU5QlFVOTZTeXhKUVVGUUxFdEJRV2RDTEU5QlFYQkNMRVZCUVRaQ08wRkJRek5DTEZGQlFVazNReXhSUVVGUlN5eE5RVUZhTEVWQlFXOUNPMEZCUTJ4Q0xHRkJRVTl0VHl4blFrRkJaMEo0VHl4UFFVRm9RaXhGUVVGNVFuTk9MRTFCUVhwQ0xFVkJRV2xEYkVzc1QwRkJUM2hDTEZkQlFWQXNRMEZCYWtNc1JVRkJjMFJ6U1N4UlFVRjBSQ3hEUVVGUU8wRkJRMFE3TzBGQlJVUXNVVUZCU1N4M1FrRkJVMjlFTEU5QlFVOXlTU3hMUVVGb1FpeExRVUV3UW1wR0xGRkJRVkUzUWl4WFFVRjBReXhGUVVGdFJEdEJRVU5xUkN4aFFVRlBjMUVzY1VKQlFYRkNlazhzVDBGQmNrSXNSVUZCT0VKelRpeE5RVUU1UWl4RlFVRnpRM1pQTEZOQlFYUkRMRVZCUVdsRVJ5eFRRVUZxUkN4RFFVRlFPMEZCUTBRN1FVRkRSanM3UVVGRlJDeE5RVUZOZDFBc1VVRkJVU3gzUWtGQlUzUk1MRTlCUVU5NFFpeFhRVUZRTEVWQlFXOUNNRXdzVDBGQlQzcExMRWxCUVROQ0xFTkJRVlFzUlVGQk1rTjVTeXhQUVVGUGNra3NTMEZCYkVRc1EwRkJaRHM3UVVGRlFTeE5RVUZKTEVOQlFVTjVTaXhMUVVGRUxFbEJRVlVzUTBGQlF5eDFRa0ZCVVVFc1MwRkJVaXhEUVVGWUxFbEJRVFpDY0VJc1QwRkJUM0JETEV0QlFYaERMRVZCUVN0RE8wRkJRemRET1Vnc1YwRkJUM2hDTEZkQlFWQXNSVUZCYjBJd1RDeFBRVUZQZWtzc1NVRkJNMElzU1VGQmJVTjVTeXhQUVVGUGNra3NTMEZCTVVNN08wRkJSVUVzVVVGQlNYRkpMRTlCUVU5NlN5eEpRVUZRTEV0QlFXZENMRTlCUVhCQ0xFVkJRVFpDTzBGQlF6TkNMR0ZCUVU4eVNpeHJRa0ZCYTBKMFRpeFZRVUZWY2tJc1RVRkJWaXhEUVVGcFFpdEVMRmRCUVdwQ0xFTkJRV3hDTEhOQ1FVRnZSREJNTEU5QlFVOTZTeXhKUVVFelJDeEZRVUZyUlN4TFFVRnNSU3hGUVVGUU8wRkJRMFE3TzBGQlJVUXlTeXh4UWtGQmFVSXNVVUZCYWtJc1JVRkJNa0o0VGl4UFFVRXpRaXhGUVVGdlEyOUVMRTFCUVhCRExFVkJRVFJET0Vjc1VVRkJOVU1zUlVGQmMwUm9UQ3hWUVVGVmFVUXNTMEZCVml4RFFVRm5RaXhEUVVGRExFTkJRV3BDTEVWQlFXOUNMRU5CUVhCQ0xFTkJRWFJFTzBGQlEwRXJUQ3h6UWtGQmEwSTFUQ3hKUVVGc1FpeERRVUYxUWxZc1kwRkJZeXhIUVVGa0xFZEJRVzlDTUV3c1QwRkJUM3BMTEVsQlFXeEVPenRCUVVWQkxGRkJRVWtzUTBGQlF6ZERMRkZCUVZFeVR5eEpRVUZpTEVWQlFXMUNPMEZCUTJwQ1RpeGxRVUZUZWswc1YwRkJWQ3hGUVVGelFpeEZRVUZGY1VRc1QwRkJUM0ZKTEU5QlFVOXlTU3hMUVVGb1FpeEZRVUYxUW5CRExFMUJRVTBzVFVGQk4wSXNSVUZCY1VOeFNTeFBRVUZQYjBNc1QwRkJUM0JETEV0QlFXNUVMRVZCUVhSQ0xFVkJRV3RHYUVJc1VVRkJiRVlzUlVGQk5FWm5SU3hwUWtGQk5VWTdRVUZEUkRzN1FVRkZSQ3hSUVVGTmVFb3NUMEZCVHpOR0xGVkJRVlZOTEV0QlFWWXNRMEZCWjBKMVF5eFhRVUZvUWl4RFFVRmlPMEZCUTBFc1VVRkJTVGhETEVsQlFVb3NSVUZCVlR0QlFVTlNNa29zWlVGQlV6TktMRXRCUVV0QkxFbEJRV1FzUlVGQmIwSXNSVUZCUlU4c1QwRkJUM0ZKTEU5QlFVOXlTU3hMUVVGb1FpeEZRVUYxUW5CRExFMUJRVTBzVDBGQk4wSXNSVUZCYzBOeFNTeFBRVUZQYjBNc1QwRkJUM0JETEV0QlFYQkVMRVZCUVhCQ0xFVkJRV2xHYUVJc1UwRkJVMDBzU1VGQlZDeERRVUZqT1VZc1MwRkJTek5HTEZOQlFXNUNMRU5CUVdwR0xFVkJRV2RJTEVWQlFXaElPMEZCUTBRN08wRkJSVVFzZVVKQlFWRnBRaXhSUVVGUmJVUXNWVUZCYUVJc1JVRkJORUlzVlVGQlEzbE1MRk5CUVVRc1JVRkJXVU1zV1VGQldpeEZRVUUyUWp0QlFVTjJSQ3hWUVVGSkxHbENRVUZKV0N4cFFrRkJTaXhGUVVGMVFsY3NXVUZCZGtJc1EwRkJTaXhGUVVFd1F6dEJRVU40UXp0QlFVTkVPenRCUVVWRUxGVkJRVTFETEZkQlFWY3ZVQ3hWUVVGVlF5eExRVUZXTEVOQlFXZENORkFzVlVGQlZYUlJMRWxCUVRGQ0xFVkJRV2REWXl4UlFVRm9ReXhEUVVGNVEzZFFMRlZCUVZVdlRDeEpRVUZ1UkN4RlFVRjVSRThzVFVGQmVrUXNSVUZCYVVVNFJ5eFJRVUZxUlN4RFFVRnFRanRCUVVOQmJVVXNaVUZCVTA4c1ZVRkJWWFJSTEVsQlFXNUNMRVZCUVhsQ0xFVkJRVVV5Unl4UFFVRlBOa29zVVVGQlZDeEZRVUZ0UW1wTkxFMUJRVTByVEN4VlFVRlZMMHdzU1VGQmJrTXNSVUZCZWtJc1JVRkJiMFZ4U0N4UlFVRndSU3hGUVVFNFJXZEZMR2xDUVVFNVJUdEJRVU5FTEV0QlVFUTdRVUZSUkR0QlFVTkdPenRCUVVWRUxGTkJRVk5OTEdWQlFWUXNRMEZCTUVKNFR5eFBRVUV4UWl4RlFVRnRRM05PTEUxQlFXNURMRVZCUVRKRGVVSXNSMEZCTTBNc1JVRkJaMFEzUlN4UlFVRm9SQ3hGUVVFd1JEdEJRVU40UkhSS0xGTkJRMGR4U3l4SlFVUklMRU5CUTFGeFF5eFBRVUZQY2trc1MwRkVaaXhGUVVWSGRrTXNUMEZHU0N4RFFVVlhMRlZCUVVONVNTeERRVUZFTzBGQlFVRXNWMEZCVDJ0Q0xGVkJRVmNzWjBOQlFXOUNhVUlzVDBGQlQzSkpMRXRCUVZBc1EwRkJZV3RITEVOQlFXSXNRMEZCY0VJc1EwRkJXQ3hGUVVGcFJHcENMRk5CUVZOS0xFbEJRVlFzUTBGQlkycE5MRTFCUVdRc1EwRkJjVUp0UXl4UlFVRlJNVUlzU1VGQk4wSXNSVUZCYlVNMlRTeERRVUZ1UXl4RlFVRnpRMjVNTEZGQlFWRlRMRkZCUVZJc1EwRkJhVUp1UXl4SlFVRjJSQ3hEUVVGcVJDeERRVUZRTzBGQlFVRXNSMEZHV0RzN1FVRkpRU3hOUVVGTk1GRXNaMEpCUVdkQ0xIZENRVUZUUkN4SFFVRlVMRVZCUVdONlFpeFBRVUZQY2trc1MwRkJja0lzUTBGQmRFSTdRVUZEUVN4TlFVRkpaMHNzWlVGQlpTeERRVUZ1UWp0QlFVTkJMSFZDUVVGUlJDeGhRVUZTTEVWQlFYVkNMRlZCUVVOeVJTeFRRVUZFTEVWQlFWazVRaXhIUVVGYUxFVkJRVzlDTzBGQlEzcERMRkZCUVVrNFFpeFZRVUZWZWtrc1RVRkJaQ3hGUVVGelFqdEJRVU53UW5sSkxHZENRVUZWZWtrc1RVRkJWaXhIUVVGdFFtZE9MR1ZCUVdWSUxFZEJRV1lzUlVGQmIwSnNSeXhOUVVGTmIwY3NXVUZCTVVJc1JVRkJkME5xVUN4UFFVRjRReXhGUVVGcFJHdExMRkZCUVdwRUxFTkJRVzVDTzBGQlEwRXJSVHRCUVVORU96dEJRVVZFZWtNc2MwSkJRV3RDZEVNc1UwRkJVMG9zU1VGQlZDeERRVUZqYWswc1RVRkJaQ3hEUVVGeFFtMURMRkZCUVZFeFFpeEpRVUUzUWl4RlFVRnRRM1ZMTEVkQlFXNURMRVZCUVhkRE4wa3NVVUZCVVZNc1VVRkJVaXhEUVVGcFFtNURMRWxCUVhwRUxFTkJRV3hDTEhOQ1FVRnhSbElzY1VKQlFWTnhVU3hYUVVFNVJpeEZRVUUwUjNoRUxGTkJRVFZITzBGQlEwUXNSMEZRUkR0QlFWRkVPenRCUVVWRUxGTkJRVk00UkN4dlFrRkJWQ3hEUVVFclFucFBMRTlCUVM5Q0xFVkJRWGREYzA0c1RVRkJlRU1zUlVGQlowUjJUeXhUUVVGb1JDeEZRVUV5UkVjc1UwRkJNMFFzUlVGQmMwVTdRVUZEY0VWdFRpeFpRVUZYTEdkRFFVRnZRbWxDTEU5QlFVOXlTU3hMUVVFelFpeERRVUZZTEVWQlFUaERMMFlzVlVGQlZYSkNMRTFCUVZZc1EwRkJhVUp0UXl4UlFVRlJNVUlzU1VGQmVrSXNRMEZCT1VNN1FVRkRSRHM3UVVGRlJDeFRRVUZUYVU4c1ZVRkJWQ3hEUVVGeFFqUkRMRTFCUVhKQ0xFVkJRVFpDZWxFc1NVRkJOMElzUlVGQmJVTjNUQ3hSUVVGdVF5eEZRVUUyUXp0QlFVTXpReXhOUVVGTk5rVXNUVUZCVFRkRkxGTkJRVk01Unl4TlFVRnlRanRCUVVOQkxFMUJRVTFuVFN4WFFVRlhiRVlzVTBGQlUwb3NTVUZCTVVJN1FVRkRRU3hOUVVGTmRVWXNWMEZCVjI1R0xGTkJRVk51VEN4VFFVRlVMRU5CUVcxQ01FSXNVVUZCYmtJc1EwRkJORUp1UXl4SlFVRTNRenRCUVVOQkxFMUJRVTExVGl4UlFVRlJiazRzUzBGQlMyMU9MRXRCUVc1Q08wRkJRMEVzVFVGQlNXeENMRmxCUVZrc1JVRkJhRUk3TzBGQlJVRXNWVUZCVVhkRkxFMUJRVkk3UVVGRFJTeFRRVUZMTEV0QlFVdzdRVUZEUlhoRkxHdENRVUZaTWtVc1ZVRkJWVkFzUjBGQlZpeEZRVUZsYkVRc1MwRkJaaXhGUVVGelFtNU9MRXRCUVV0clRpeEhRVUV6UWl4RlFVRm5RM2RFTEZGQlFXaERMRVZCUVRCRFF5eFJRVUV4UXl4RFFVRmFPMEZCUTBFN08wRkJSVVlzVTBGQlN5eFJRVUZNTzBGQlEwVXNWVUZCVFdwQ0xFMUJRVTEyUXl4VFFVRlRiazRzUzBGQlMybE9MRWRCUVV3c1NVRkJXU3hEUVVGeVFpeERRVUZhTzBGQlEwRm9RaXhyUWtGQldUUkZMR1ZCUVdWU0xFZEJRV1lzUlVGQmIwSnNSQ3hMUVVGd1FpeEZRVUV5UW5WRExFZEJRVE5DTEVWQlFXZERiRVVzVTBGQlUyNU1MRk5CUVhwRExFVkJRVzlFYlV3c1VVRkJjRVFzUTBGQldqdEJRVU5CTzBGQlVrbzdPMEZCVjBFc2RVSkJRVkZUTEZOQlFWSXNSVUZCYlVJc1ZVRkJRekpETEUxQlFVUXNSVUZCVTNwRkxFZEJRVlE3UVVGQlFTeFhRVUZwUWpKRUxHdENRVUZyUWpSRExGTkJRVk4yVWl4TlFVRlVMRU5CUVdkQ1owd3NSMEZCYUVJc1JVRkJjVUozUnl4UlFVRnlRaXhGUVVFclFuWlNMSEZDUVVGVGNWRXNWMEZCZUVNc1EwRkJiRUlzUlVGQmQwVjRSQ3hWUVVGVk9VSXNSMEZCVml4RlFVRmxMMHNzY1VKQlFWTnhVU3hYUVVGNFFpeERRVUY0UlN4RFFVRnFRanRCUVVGQkxFZEJRVzVDT3p0QlFVVkJMRTFCUVVsYUxIRkNRVUZLTEVWQlFUSkNPMEZCUTNwQ0xGZEJRVThzU1VGQlNVZ3NUMEZCU2l4RFFVRlpMRlZCUVVOclFpeEhRVUZFTzBGQlFVRXNZVUZCVXpGQ0xHdENRVUZyUW5STExFbEJRV3hDTEVOQlFYVkNaMDBzUjBGQmRrSXNRMEZCVkR0QlFVRkJMRXRCUVZvc1EwRkJVRHRCUVVORU96dEJRVVZFTEZOQlFVOXNSU3hqUVVGUU8wRkJRMFE3TzBGQlJVUXNVMEZCVTJ0R0xGTkJRVlFzUTBGQmIwSlFMRWRCUVhCQ0xFVkJRWGxDYkVRc1MwRkJla0lzUlVGQlowTkVMRWRCUVdoRExFVkJRWEZEZDBRc1VVRkJja01zUlVGQkswTkRMRkZCUVM5RExFVkJRWGxFTzBGQlEzWkVla1FzVVVGQlRTeDFRa0ZCVVVFc1IwRkJVaXhKUVVGbFFTeEhRVUZtTEVkQlFYRkNMRU5CUVVOQkxFZEJRVVFzUTBGQk0wSTdPMEZCUlVGQkxFMUJRVWxzU2l4UFFVRktMRU5CUVZrc1ZVRkJRekJETEVWQlFVUXNSVUZCU3l0R0xFTkJRVXdzUlVGQlZ6dEJRVU55UWpSRUxGRkJRVWxUTEUxQlFVb3NRMEZCVjNKRkxFbEJRVWxWTEV0QlFXWXNSVUZCYzBJc1EwRkJkRUlzUlVGQmVVSXNTVUZCZWtJN1FVRkRRVkVzWTBGQlZTeG5RMEZCYjBKcVNDeEZRVUZ3UWl4RFFVRldMRVZCUVcxRFowc3NVMEZCVTNaU0xFMUJRVlFzUTBGQlowSnpUaXhKUVVGSlZTeExRVUZ3UWl4RlFVRXlRbmRFTEZGQlFUTkNMRU5CUVc1RE8wRkJRMFFzUjBGSVJEczdRVUZMUVN3MlFrRkJWWGhFTEV0QlFWWXNjMEpCUVhGQ0wwNHNjVUpCUVZOeFVTeFhRVUU1UWl4RlFVRTBReXhGUVVGRmNsQXNTMEZCU3l4RlFVRkZLMDBzV1VGQlJpeEZRVUZUZFVNc1MwRkJTM1pETEZGQlFWRkVMRWxCUVVrM1J5eE5RVUV4UWl4RlFVRlFMRVZCUVRWRE8wRkJRMFE3TzBGQlJVUXNVMEZCVTNkTExHTkJRVlFzUTBGQmVVSlNMRWRCUVhwQ0xFVkJRVGhDYkVRc1MwRkJPVUlzUlVGQmNVTjFReXhIUVVGeVF5eEZRVUV3UTNGQ0xGZEJRVEZETEVWQlFYVkVka1lzVVVGQmRrUXNSVUZCYVVVN1FVRkRMMFFzVFVGQlRWTXNXVUZCV1N4RlFVRnNRanM3UVVGRlFTeFBRVUZMTEVsQlFVbFJMRWxCUVVsVkxFdEJRV0lzUlVGQmIwSldMRWxCUVVscFJDeEhRVUY0UWl4RlFVRTJRbXBFTEVkQlFUZENMRVZCUVd0RE8wRkJRMmhETEZGQlFVMTFSU3hwUWtGQmFVSlNMR1ZCUVdWSUxFZEJRV1lzUlVGQmIwSTFSQ3hEUVVGd1FpeEZRVUYxUW5ORkxGZEJRWFpDTEVWQlFXOURka1lzVVVGQmNFTXNRMEZCZGtJN1FVRkRRVk1zWTBGQlZWRXNRMEZCVml4M1FrRkJhMEp5VGl4eFFrRkJVM0ZSTEZkQlFUTkNMRVZCUVhsRExFVkJRVVZxVFN4UlFVRlJkMDRzWTBGQlZpeEZRVUY2UXp0QlFVTkVPenRCUVVWRUxGTkJRVTh2UlN4VFFVRlFPMEZCUTBRN08wRkJSVVFzVTBGQlUzVkZMR05CUVZRc1EwRkJlVUpJTEVkQlFYcENMRVZCUVRoQ2JFY3NSMEZCT1VJc1JVRkJiVU0wUnl4WFFVRnVReXhGUVVGblJIWkdMRkZCUVdoRUxFVkJRVEJFTzBGQlEzaEVMRTFCUVUxNVJpeGpRVUZqV2l4SlFVRkpVeXhOUVVGS0xFTkJRVmN6Unl4SFFVRllMRVZCUVdkQ0xFTkJRV2hDTEVWQlFXMUNMRU5CUVc1Q0xFVkJRWE5DTkVjc1dVRkJXV2hRTEZGQlFWb3NRMEZCY1VKdVF5eEpRVUV6UXl4RFFVRndRanRCUVVOQmExQXNiVUpCUVdsQ0xGRkJRV3BDTEVWQlFUSkNhVU1zV1VGQldXaFFMRkZCUVZvc1EwRkJjVUo2UWl4TFFVRnlRaXhEUVVFeVFteENMSEZDUVVGVFF5eEpRVUZ3UXl4RFFVRXpRaXhGUVVGelJUUlNMRmRCUVhSRkxFVkJRVzFHZWtZc1VVRkJia1lzUlVGQk5rWnlRaXhIUVVFM1JqdEJRVU5CTEZOQlFVODRSeXhaUVVGWk4xSXNjVUpCUVZORExFbEJRWEpDTEVWQlFUSkNjVWdzUlVGQmJFTTdRVUZEUkN4RE96czdPenM3T3pzN096czdPenM3T3pzN08wRkRhRk5FT3pzN08wRkJRMEU3TzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3TzBGQlJVRTdPenM3VVVGUlJYZExMSEZDTEVkQlFVRkJMSEZDTzFGQlEwRkRMR0VzUjBGQlFVRXNZVHM3TzBGQlIwWXNTVUZCVFVNc1UwRkJVenRCUVVOaWJrSXNVVUZCVFc5Q0xGZEJSRTg3UVVGRlltcE1MRk5CUVU5clRDeFpRVVpOTzBGQlIySkRMRk5CUVU5RExGZEJTRTA3UVVGSllrTXNVMEZCVDBNN1FVRktUU3hEUVVGbU96dEJRVTlCTEZOQlFWTlFMR0ZCUVZRc1EwRkJkMEp1UkN4UFFVRjRRaXhGUVVGcFF6dEJRVU12UWl4MVFrRkJVVUVzVDBGQlVpeEZRVUZwUWl4VlFVRkRNa1FzWjBKQlFVUXNSVUZCYlVKRExGTkJRVzVDTEVWQlFXbERPMEZCUTJoRUxGRkJRVTFETEdOQlFXTXpVQ3hQUVVGUGNVc3NTVUZCVUN4RFFVRlpiMFlzWjBKQlFWb3NSVUZCT0VJc1EwRkJPVUlzUTBGQmNFSTdRVUZEUVN4UlFVRk5SeXh2UWtGQmIwSXNNa0pCUVdVc1EwRkJRMFlzVTBGQlJDeEZRVUZaUXl4WFFVRmFMRU5CUVdZc1EwRkJNVUk3UVVGRFFWSXNaMEpCUVZsVExHdENRVUZyUW5wU0xGTkJRVGxDTEVWQlFYbERlVklzYTBKQlFXdENjRTRzVFVGQk0wUXNSVUZCYlVVc1EwRkJRMnRPTEZOQlFVUXNSVUZCV1VNc1YwRkJXaXhEUVVGdVJTeEZRVUUyUmtZc2FVSkJRV2xDUlN4WFFVRnFRaXhEUVVFM1JqdEJRVU5FTEVkQlNrUTdRVUZMUkRzN1FVRkZSQ3hUUVVGVFVpeFhRVUZVTEVOQlFYTkNhRklzVTBGQmRFSXNSVUZCYVVOclJ5eExRVUZxUXl4RlFVRjNReTlHTEZOQlFYaERMRVZCUVcxRWQwNHNUMEZCYmtRc1JVRkJORVE3UVVGRE1VUXNUVUZCU1N4RFFVRkRNMDRzVlVGQlZWSXNUVUZCWml4RlFVRjFRanRCUVVOeVFqdEJRVU5FT3p0QlFVVkVMRTFCUVVsUkxGVkJRVlZ6UWl4TlFVRmtMRVZCUVhOQ08wRkJRM0JDTEZkQlFVOXZVU3hYUVVGWE1WSXNVMEZCV0N4RlFVRnpRbXRITEV0QlFYUkNMRVZCUVRaQ0wwWXNVMEZCTjBJc1JVRkJkME4zVGl4UFFVRjRReXhEUVVGUU8wRkJRMFE3TzBGQlJVUXNUVUZCU1ROT0xGVkJRVlZhTEZkQlFXUXNSVUZCTWtJN1FVRkRla0lzVjBGQlQzVlRMR2RDUVVGblFqTlNMRk5CUVdoQ0xFVkJRVEpDYTBjc1MwRkJNMElzUlVGQmEwTXZSaXhUUVVGc1F5eEZRVUUyUTNkT0xFOUJRVGRETEVOQlFWQTdRVUZEUkRzN1FVRkZSSHBJTEZWQlFWRXNNa0pCUVZsQkxFdEJRVm9zU1VGQmNVSXNSVUZCY2tJc1IwRkJNRUpCTEV0QlFXeERPenRCUVVWQkxFMUJRVWxzUnl4VlFVRlZVaXhOUVVGV0xFTkJRV2xDYlVnc1QwRkJha0lzUzBGQk5rSXNUMEZCYWtNc1JVRkJNRU03UVVGRGVFTXpSeXhqUVVGVlVpeE5RVUZXTEVOQlFXbENNRWNzUzBGQmFrSXNSMEZCZVVKQkxFdEJRWHBDTzBGQlEwRTdRVUZEUkRzN1FVRkZSQ3d3UWtGQlkyeEhMRlZCUVZWU0xFMUJRWGhDTEVWQlFXZERNRWNzUzBGQmFFTTdPMEZCUlVFc1UwRkJUMnhITEZOQlFWQTdRVUZEUkRzN1FVRkZSQ3hUUVVGVE1sSXNaVUZCVkN4RFFVRXdRak5TTEZOQlFURkNMRVZCUVhGRGEwY3NTMEZCY2tNc1JVRkJORU12Uml4VFFVRTFReXhGUVVGMVJIZE9MRTlCUVhaRUxFVkJRV2RGTzBGQlF6bEVMRTFCUVVsQkxFOUJRVW9zUlVGQllUdEJRVU5ZTEZkQlFVOXBSU3huUWtGQlowSTFVaXhUUVVGb1FpeEZRVUV5UW10SExFdEJRVE5DTEVWQlFXdERMMFlzVTBGQmJFTXNSVUZCTmtOM1RpeFBRVUUzUXl4RFFVRlFPMEZCUTBRN08wRkJSVVFzVTBGQlQydEZMR05CUVdNelRDeExRVUZrTEVWQlFYRkNMMFlzVTBGQmNrSXNRMEZCVUR0QlFVTkVPenRCUVVWRUxGTkJRVk13VWl4aFFVRlVMRU5CUVhkQ2VFNHNUVUZCZUVJc1JVRkJaME5zUlN4VFFVRm9ReXhGUVVFeVF6dEJRVU42UXl4TlFVRk5aMHdzVjBGQlZ5d3lRa0ZCWldoTUxGTkJRV1lzUTBGQmFrSTdRVUZEUVN4TlFVRk5TQ3haUVVGWmJVd3NVMEZCVTI1TUxGTkJRVE5DT3p0QlFVVkJMRTFCUVUwNFVpeGpRVUZqZUZBc1UwRkJVME1zWVVGQlZDeERRVUYxUWl4TFFVRjJRaXhEUVVGd1FqdEJRVU5CTEUxQlFVMXZSaXhoUVVGaE0wZ3NWVUZCVlRCRUxGRkJRVllzUTBGQmJVSjZRaXhUUVVGdVFpeERRVUUyUWl4SlFVRTNRaXhEUVVGdVFqdEJRVU5CYjBNc1UwRkJUM1JHTEhGQ1FVRlRReXhKUVVGb1FpeEZRVUZ6UW5GSUxFVkJRWFJDTEVkQlFUSkNjMElzVlVGQk0wSTdRVUZEUVcxTExHTkJRVmx1VUN4WFFVRmFMRU5CUVhkQ1owWXNWVUZCZUVJN08wRkJSVUZCTEdGQlFWZHVSaXhaUVVGWUxFTkJRWGRDZWtRc2NVSkJRVk5yVFN4alFVRnFReXhGUVVGclJHcE1MRlZCUVZWelNDeFZRVUZZTEVkQlFYbENka2tzY1VKQlFWTjVSU3hKUVVGc1F5eEhRVUY1UTNwRkxIRkNRVUZUWjFRc1UwRkJia2M3TzBGQlJVRXNkVUpCUVZGb1FpeE5RVUZTTEVWQlFXZENMRlZCUVVOcFFpeFZRVUZFTEVWQlFXRkRMRlZCUVdJc1JVRkJORUk3UVVGRE1VTXNVVUZCU1dwVExGVkJRVlZETEV0QlFWWXNRMEZCWjBKc1FpeHhRa0ZCVTBNc1NVRkJla0lzUlVGQkswSnBWQ3hWUVVFdlFpeERRVUZLTEVWQlFXZEVPMEZCUXpsRFJDeHBRa0ZCVnl4RlFVRkZlRk1zVVVGQlVXMUpMRlZCUVZZc1JVRkJXQ3hGUVVGdFEzUkVMRTlCUVU5MFJpeHhRa0ZCVTBNc1NVRkJhRUlzUlVGQmMwSnBWQ3hWUVVGMFFpeERRVUZ1UXp0QlFVTkVPMEZCUTBZc1IwRktSRHM3UVVGTlFTeDFRa0ZCVVdwVExGVkJRVlZETEV0QlFXeENMRVZCUVhsQ0xGVkJRVU5uUWl4UFFVRkVMRVZCUVZVMFFpeFhRVUZXTEVWQlFUQkNPMEZCUTJwRUxGRkJRVWtzUTBGQlF6VkNMRkZCUVZGNlFpeE5RVUZpTEVWQlFYRkNPMEZCUTI1Q08wRkJRMFE3TzBGQlJVUXNVVUZCVFhsRUxHTkJRV00yVHl4WlFVRlpOVThzWVVGQldpeERRVUV3UWl4TlFVRk5ia1VzY1VKQlFWTnhReXhOUVVGbUxFZEJRWGRDU0N4UlFVRlJTU3hGUVVFeFJDeERRVUZ3UWp0QlFVTkJORUlzWjBKQlFWbHVSQ3hUUVVGYUxFTkJRWE5DY1VRc1RVRkJkRUlzUTBGQk5rSndSU3h4UWtGQlUzRkRMRTFCUVZRc1IwRkJhMEpJTEZGQlFWRkpMRVZCUVhaRU96dEJRVVZCTEZGQlFVbEtMRkZCUVZFM1FpeFhRVUZhTEVWQlFYbENPMEZCUTNaQ0xGVkJRVTA0VXl4cFFrRkJhVUl2VWl4VlFVRlZja0lzVFVGQlZpeERRVUZwUWl0RUxGZEJRV3BDTEVOQlFYWkNPMEZCUTBFc1ZVRkJUWE5RTEdOQlFXTk9MR05CUVdONFRpeFBRVUZQZUVJc1YwRkJVQ3hEUVVGa0xFVkJRVzFEY1ZBc1kwRkJia01zUTBGQmNFSTdRVUZEUVN3MlFrRkJZV3BRTEZkQlFXSXNSVUZCTUVKclVDeFhRVUV4UWp0QlFVTkJPMEZCUTBRN08wRkJSVVE1VGl4WFFVRlBlRUlzVjBGQlVDeEZRVUZ2UW5kRUxFVkJRWEJDTEVkQlFYbENjRVFzVjBGQmVrSTdPMEZCUlVFc1VVRkJTV2hETEZGQlFWRkxMRTFCUVZvc1JVRkJiMEk3UVVGRGJFSnZVU3hwUWtGQlYzcFJMRTlCUVZnc1JVRkJiMEp2UkN4UFFVRlBlRUlzVjBGQlVDeERRVUZ3UWl4RlFVRjVRekZETEZWQlFWVnlRaXhOUVVGV0xFTkJRV2xDSzBRc1YwRkJha0lzUTBGQmVrTTdRVUZEUVR0QlFVTkVPenRCUVVWRUxIbENRVUZSYTA4c1RVRkJVaXhGUVVGblFpeFZRVUZEYVVJc1ZVRkJSQ3hGUVVGaFF5eFZRVUZpTEVWQlFUUkNPMEZCUXpGRExGVkJRVWxCTEdWQlFXVXNUVUZCWml4SlFVRjVRbWhTTEZGQlFWRXlUeXhKUVVGU0xFdEJRV2xDTEVsQlFURkRMRWxCUVd0RU0wOHNVVUZCVVhwQ0xFMUJRVklzUTBGQlpXZERMRkZCUVdZc1EwRkJkMEozUlN4TlFVRTVSU3hGUVVGelJqdEJRVU53Ump0QlFVTkVPMEZCUTBSblRTeHBRa0ZCVnl4RlFVRkZlRk1zVVVGQlVYbEVMRmRCUVZZc1JVRkJXQ3hGUVVGdlEyOUNMRTlCUVU5NFFpeFhRVUZRTEVWQlFXOUNiMUFzVlVGQmNFSXNRMEZCY0VNc1JVRkJjVVU1VWl4VFFVRnlSVHRCUVVORUxFdEJURVE3UVVGTlJDeEhRVFZDUkRzN1FVRTRRa0VzVTBGQlR6SlNMRmxCUVZsMFVTeFJRVUZhTEVOQlFYRkNMRU5CUVhKQ0xFTkJRVkE3UVVGRFJEczdRVUZGUkN4VFFVRlRiMUVzWlVGQlZDeERRVUV3UWpWU0xGTkJRVEZDTEVWQlFYRkRjVVVzVFVGQmNrTXNSVUZCTmtOc1JTeFRRVUUzUXl4RlFVRjNSSGRPTEU5QlFYaEVMRVZCUVdsRk8wRkJReTlFTEUxQlFVMTVSU3hyUWtGQmEwSXZUaXhQUVVGUGRFWXNjVUpCUVZORExFbEJRV2hDTEVWQlFYTkNjVWdzUlVGQk9VTTdPMEZCUlVFc2RVSkJRVkZ6U0N4UFFVRlNMRVZCUVdsQ0xGVkJRVU5aTEUxQlFVUXNSVUZCVXpGTUxGZEJRVlFzUlVGQmVVSTdPMEZCUlhoRExGRkJRVWxCTEdkQ1FVRm5RamxFTEhGQ1FVRlRReXhKUVVFM1FpeEZRVUZ0UXpzN1FVRkZha01zVjBGQlN5eEpRVUZKY1ZRc1ZVRkJWQ3hKUVVGMVFqbEVMRTFCUVhaQ0xFVkJRU3RDTzBGQlF6ZENkME1zWlVGQlQzTkNMRlZCUVZBc1JVRkJiVUlzUlVGQlJUZFRMRkZCUVZFMFV5eGxRVUZXTEVWQlFXNUNMRVZCUVdkRUwwNHNUMEZCVDNSR0xIRkNRVUZUUXl4SlFVRm9RaXhGUVVGelFuRlVMRlZCUVhSQ0xFTkJRV2hFTzBGQlEwUTdRVUZEUkR0QlFVTkVPenRCUVVWRUxGRkJRVTF3VWl4VlFVRlZha0lzVlVGQlZVTXNTMEZCVml4RFFVRm5RalJETEZkQlFXaENMRU5CUVdoQ08wRkJRMEVzVVVGQlRYbFFMSEZDUVVGeFFtNVRMRlZCUVZWeVFpeE5RVUZXTEVOQlFXbENLMFFzVjBGQmFrSXNRMEZCTTBJN08wRkJSVUVzVVVGQlNUVkNMRkZCUVZFM1FpeFhRVUZTTEVsQlFYVkNOa0lzVVVGQlVVc3NUVUZCYmtNc1JVRkJNa003UVVGRGVrTXdVQ3hyUWtGQldTOVFMRTlCUVZvc1JVRkJjVUp2UkN4UFFVRlBlRUlzVjBGQlVDeERRVUZ5UWl4RlFVRXdRM2xRTEd0Q1FVRXhReXhGUVVFNFJETkZMRkZCUVZFNVN5eFhRVUZTTEVOQlFUbEVPMEZCUTBFN1FVRkRSRHM3UVVGRlJDeFJRVUZOZDBRc1MwRkJTMmhETEU5QlFVOTRRaXhYUVVGUUxFVkJRVzlDZDBRc1JVRkJMMEk3TzBGQlJVRXNVMEZCU3l4SlFVRkpaMDBzVjBGQlZDeEpRVUYxUWpsRUxFMUJRWFpDTEVWQlFTdENPMEZCUXpkQ0xGVkJRVTEzUWl4WFFVRlhNVXdzVDBGQlQzaENMRmRCUVZBc1JVRkJiMEozVUN4WFFVRndRaXhEUVVGcVFqdEJRVU5CZEVJc1lVRkJUM05DTEZkQlFWQXNSVUZCYlVJc1JVRkJSVGRUTEZGQlFWRTJSeXhGUVVGV0xFVkJRVzVDTEVWQlFXMURNRW9zVVVGQmJrTTdRVUZEUkR0QlFVTkdMRWRCZUVKRU8wRkJlVUpFT3p0QlFVVkVMRk5CUVZNeVFpeFZRVUZVTEVOQlFYRkNZU3hoUVVGeVFpeEZRVUZ2UTBNc1YwRkJjRU1zUlVGQmFVUnlVeXhUUVVGcVJDeEZRVUUwUkhkT0xFOUJRVFZFTEVWQlFYRkZPMEZCUTI1RkxFMUJRVWxCTEU5QlFVb3NSVUZCWVR0QlFVTllMRmRCUVU4NFJTeFhRVUZYUml4aFFVRllMRVZCUVRCQ1F5eFhRVUV4UWl4RlFVRjFRM0pUTEZOQlFYWkRMRVZCUVd0RWQwNHNUMEZCYkVRc1EwRkJVRHRCUVVORU96dEJRVVZFTEUxQlFVMHJSU3hsUVVGbFF5eFZRVUZWU2l4aFFVRldMRVZCUVhsQ1F5eFhRVUY2UWl4RlFVRnpRM0pUTEZOQlFYUkRMRU5CUVhKQ096dEJRVVZCTEUxQlFVMTVVeXhYUVVGWFNpeFpRVUZaYmswc1JVRkJOMEk3UVVGRFFTeE5RVUZOTkVNc1lVRkJZVEpLTEZOQlFWTXpTaXhWUVVFMVFqdEJRVU5CTEUxQlFVMDBTaXhYUVVGWFJDeFRRVUZUUlN4clFrRkJNVUk3UVVGRFFTeDFRa0ZCVjBZc1VVRkJXRHM3UVVGRlFTeE5RVUZOZUZRc1kwRkJZM2RVTEZOQlFWTjBUU3haUVVGVUxFTkJRWE5DZGtnc2NVSkJRVk5yVFN4alFVRXZRaXhEUVVGd1FqdEJRVU5CTWtnc1YwRkJVM0JSTEZsQlFWUXNRMEZCYzBKNlJDeHhRa0ZCVTJ0TkxHTkJRUzlDTEVWQlFTdERiRTBzY1VKQlFWTm5WU3hKUVVGNFJEdEJRVU5CTEUxQlFVa3pWQ3hYUVVGS0xFVkJRV2xDTzBGQlEyWjNWQ3hoUVVGVGNGRXNXVUZCVkN4RFFVRnpRbnBFTEhGQ1FVRlRhMDBzWTBGQkwwSXNSVUZCSzBOc1RTeHhRa0ZCVTJsVkxHTkJRWGhFTzBGQlEwUTdPMEZCUlVRc2MwSkJRVlZLTEZGQlFWWTdRVUZEUVVFc1YwRkJVMnBSTEZkQlFWUXNRMEZCY1VJclVDeFpRVUZ5UWpzN1FVRkZRWHBLTEdGQlFWZG5TeXhaUVVGWUxFTkJRWGRDVEN4UlFVRjRRaXhGUVVGclEwTXNVVUZCYkVNN1FVRkRSRHM3UVVGRlJDeFRRVUZUUml4VFFVRlVMRU5CUVc5Q1NpeGhRVUZ3UWl4RlFVRnRRME1zVjBGQmJrTXNSVUZCWjBSeVV5eFRRVUZvUkN4RlFVRXlSQ3RUTEV0QlFUTkVMRVZCUVd0Rk8wRkJRMmhGTEUxQlFVMXdSeXhSUVVGUmIwY3NVVUZCVVVFc1RVRkJUWEJITEV0QlFXUXNSMEZCYzBJc1EwRkJjRU03UVVGRFFTeE5RVUZOZFVNc1RVRkJUVFpFTEZGQlFWRkJMRTFCUVUwM1JDeEhRVUZrTEVkQlFYRkNiVVFzV1VGQldYaE5MRTFCUVZvc1IwRkJjVUlzUTBGQmRFUTdPMEZCUlVFc1RVRkJUVEJOTEdWQlFXVndVU3hUUVVGVE5sRXNjMEpCUVZRc1JVRkJja0k3UVVGRFFWZ3NZMEZEUjNCUUxFdEJSRWdzUTBGRFV6QktMRXRCUkZRc1JVRkRaMEoxUXl4SFFVUm9RaXhGUVVWSE1Vd3NUMEZHU0N4RFFVVlhMRlZCUVVONVVDeFRRVUZFTEVWQlFWbERMRk5CUVZvc1JVRkJNRUk3UVVGRGFrTXNVVUZCVFVNc1pVRkJaU3hEUVVGRGVFY3NTMEZCUkN4SFFVRlRkVWNzVTBGQk9VSTdRVUZEUVN4UlFVRk5MMG9zYTBKQlFXdENia29zVlVGQlZYSkNMRTFCUVZZc1EwRkJhVUlzUTBGQlEzZFZMRmxCUVVRc1JVRkJaV1lzWTBGQll6ZFJMRkZCUVdRc1EwRkJkVUp1UXl4SlFVRjBReXhEUVVGcVFpeERRVUY0UWp0QlFVTkJMRkZCUVUxblZTeHBRa0ZCYVVJeFFpeGpRVUZqZFVJc1ZVRkJWV0lzWTBGQll6ZFJMRkZCUVdRc1EwRkJkVUp1UXl4SlFVRnFReXhEUVVGa0xFVkJRWE5FSzBvc1pVRkJkRVFzUTBGQmRrSTdPMEZCUlVGcFN5eHRRa0ZCWlM5UkxGbEJRV1lzUTBGQk5FSjZSQ3h4UWtGQlUyZE1MRlZCUVhKRExFVkJRV2xFZFVvc1dVRkJha1E3TzBGQlJVRmFMR2xDUVVGaEwxQXNWMEZCWWl4RFFVRjVRalJSTEdOQlFYcENPMEZCUTBRc1IwRldTRHM3UVVGWlFTeFRRVUZQWWl4WlFVRlFPMEZCUTBRN08wRkJSVVFzVTBGQlUwUXNWVUZCVkN4RFFVRnhRaTlDTEZkQlFYSkNMRVZCUVd0RE9FSXNWMEZCYkVNc1JVRkJLME55VXl4VFFVRXZReXhGUVVFd1JIZE9MRTlCUVRGRUxFVkJRVzFGTzBGQlEycEZMRTFCUVUxcFJpeFhRVUZYU2l4WlFVRlpiazBzUlVGQk4wSTdRVUZEUVN4TlFVRk5hVXNzVjBGQlYwa3NXVUZCV1doUUxGRkJRVm9zUTBGQmNVSnVReXhKUVVGMFF6dEJRVU5CTEUxQlFVMXBWU3hsUVVGbExIZENRVUZYTjBZc1QwRkJXQ3hGUVVGdlFpeFZRVUZETTBJc1EwRkJSQ3hGUVVGSmRFY3NRMEZCU2p0QlFVRkJMRmRCUVZVc2QwSkJRVk1zUTBGQlEwRXNRMEZCVml4RFFVRldPMEZCUVVFc1IwRkJjRUlzUTBGQmNrSTdRVUZEUVN4TlFVRkpkMHNzWlVGQlpTeERRVUZ1UWp0QlFVTkJMRTFCUVVsaUxFMUJRVTBzUTBGQlZqczdRVUZGUVN4UFFVRkxMRWxCUVVsblJDeFZRVUZVTEVsQlFYVkNNVVVzVDBGQmRrSXNSVUZCWjBNN1FVRkRPVUp2UkN4WFFVRlBjMElzVlVGQlVDeEZRVUZ0UWl4RlFVRkZOMU1zVVVGQlVXOVVMRkZCUVZZc1JVRkJia0lzUlVGQmVVTktMRmxCUVZsSUxGVkJRVm9zUTBGQmVrTTdRVUZEUkRzN1FVRkZSQ3gxUWtGQlVXMUNMRmxCUVZJc1JVRkJjMElzVlVGQlEycEdMRTFCUVVRc1JVRkJVMjVETEVOQlFWUXNSVUZCWlR0QlFVTnVRMjFETEdGQlFWTkJMRTlCUVU4clFpeFJRVUZRTEVOQlFWUTdRVUZEUVN4UlFVRk5hRWdzYTBKQlFXdENia29zVlVGQlZYSkNMRTFCUVZZc1EwRkJhVUp6VGl4RFFVRnFRaXhGUVVGdlFtdEZMRkZCUVhCQ0xFTkJRWGhDTzBGQlEwRXNVVUZCVFcxRUxHVkJRV1VzTWtKQlFXVnVTeXhsUVVGbUxFTkJRWEpDT3p0QlFVVkJMRkZCUVVrc1EwRkJRMmxHTEU5QlFVOTRVQ3h4UWtGQlUzRlJMRmRCUVdoQ0xFTkJRVXdzUlVGQmJVTTdRVUZEYWtOM1F5eHpRa0ZCWjBJMlFpeGhRVUZoZWxRc1UwRkJOMElzUlVGQmQwTjNVeXhaUVVGWmNFY3NRMEZCV2l4RlFVRmxhMFVzVVVGQlppeERRVUY0UXl4RlFVRnJSV2hJTEdWQlFXeEZMRVZCUVcxR2FVWXNUVUZCYmtZN1FVRkRRVHRCUVVORU96dEJRVVZFTEZGQlFVbEJMRTlCUVU5NFVDeHhRa0ZCVTNGUkxGZEJRV2hDTEVWQlFUWkNjbEFzUjBGQk4wSXNTVUZCYjBOeFRTeExRVUZMYVVRc1IwRkJOME1zUlVGQmEwUTdRVUZEYUVRc1ZVRkJUWFpETEZGQlFWRjVRaXhQUVVGUGVGQXNjVUpCUVZOeFVTeFhRVUZvUWl4RlFVRTJRbkpRTEVkQlFUZENMRU5CUVdsREswMHNTMEZCTDBNN1FVRkRRWFZETEZsQlFVMWtMRTlCUVU5NFVDeHhRa0ZCVTNGUkxGZEJRV2hDTEVWQlFUWkNjbEFzUjBGQk4wSXNRMEZCYVVOelVDeEhRVUYyUXpzN1FVRkZRWEZGTEdsQ1FVRlhaQ3hSUVVGWUxFVkJRWEZDT1VZc1MwRkJja0lzUlVGQk5FSjFReXhOUVVGTmRrTXNTMEZCYkVNN1FVRkRRU3hWUVVGTk5FWXNaVUZCWlVNc1ZVRkJWV3BETEZkQlFWWXNSVUZCZFVJNFFpeFhRVUYyUWl4RlFVRnZRM0pUTEZOQlFYQkRMRVZCUVN0RExFVkJRVVV5VFN4WlFVRkdMRVZCUVZOMVF5eFJRVUZVTEVWQlFTOURMRU5CUVhKQ096dEJRVVZCTEZWQlFVbEJMRkZCUVZGdFJDeFpRVUZaZUUwc1RVRkJlRUlzUlVGQlowTTdRVUZET1VJMFRTeHBRa0ZCVTJwUkxGZEJRVlFzUTBGQmNVSXJVQ3haUVVGeVFqdEJRVU5CTzBGQlEwUTdPMEZCUlVSRkxHVkJRVk5MTEZsQlFWUXNRMEZCYzBKUUxGbEJRWFJDTEVWQlFXOURSU3hUUVVGVGNGSXNVVUZCVkN4RFFVRnJRbk5NTEV0QlFXeENMRU5CUVhCRE8wRkJRMEU3UVVGRFJEczdRVUZGUkN4UlFVRkplVUlzVDBGQlQzaFFMSEZDUVVGVGNWRXNWMEZCYUVJc1JVRkJOa0pxVFN4TlFVRnFReXhGUVVGNVF6dEJRVU4yUXl3eVFrRkJWMjlNTEU5QlFVOTRVQ3h4UWtGQlUzRlJMRmRCUVdoQ0xFVkJRVFpDYWswc1RVRkJlRU03UVVGRFFYVlJMR2xDUVVGWFpDeFJRVUZZTEVWQlFYRkNlRWNzU1VGQlNUaEVMR05CUVhwQ0xFVkJRWGxETEVOQlFVTXNRMEZCTVVNN1FVRkRSRHRCUVVOR0xFZEJPVUpFTzBGQkswSkVPenRCUVVWRUxGTkJRVk4zUkN4VlFVRlVMRU5CUVhGQ1pDeFJRVUZ5UWl4RlFVRXJRamxHTEV0QlFTOUNMRVZCUVhORE5rY3NTVUZCZEVNc1JVRkJORU03UVVGRE1VTXNUVUZCVFVNc1lVRkJZVGROTEUxQlFVMURMRk5CUVU0c1EwRkJaMEkxUkN4TFFVRm9RaXhEUVVGelFuRkRMRWxCUVhSQ0xFTkJRVEpDYlU0c1UwRkJVM0JTTEZGQlFYQkRMRVZCUVRoRGMwd3NTMEZCT1VNc1EwRkJia0k3TzBGQlJVRTRSeXhoUVVGWGFsRXNUMEZCV0N4RFFVRnRRaXhWUVVGRGNFTXNVVUZCUkN4RlFVRmpPMEZCUXk5Q0xGRkJRVTF6VXl4VlFVRlZkRk1zVTBGQlV5dEZMRmxCUVZRc1EwRkJjMEoyU0N4eFFrRkJVMmRNTEZWQlFTOUNMRU5CUVdoQ08wRkJRMEVzVVVGQlRTdEtMRk5CUVZNc1EwRkJRMFFzVDBGQlJDeEhRVUZYUml4SlFVRXhRanM3UVVGRlFYQlRMR0ZCUVZOcFFpeFpRVUZVTEVOQlFYTkNla1FzY1VKQlFWTm5UQ3hWUVVFdlFpeEZRVUV5UXl0S0xFMUJRVE5ETzBGQlEwUXNSMEZNUkR0QlFVMUVPenRCUVVWRUxGTkJRVk42UXl4bFFVRlVMRU5CUVRCQ2NGRXNUMEZCTVVJc1JVRkJiVU5uUnl4VlFVRnVReXhGUVVFclF6dEJRVU0zUTNCR0xGTkJRVTlETEUxQlFWQXNRMEZCWTJJc1VVRkJVWHBDTEUxQlFYUkNMRVZCUVRoQ2VVZ3NWVUZCT1VJN1FVRkRSRHM3UVVGRlJDeFRRVUZUWjBzc1dVRkJWQ3hEUVVGMVFtaFJMRTlCUVhaQ0xFVkJRV2RET0ZNc1QwRkJhRU1zUlVGQmVVTTdRVUZEZGtNc1QwRkJTeXhKUVVGSk9Vd3NVMEZCVkN4SlFVRnpRamhNTEU5QlFYUkNMRVZCUVN0Q08wRkJRemRDTEZGQlFVazVUQ3hUUVVGS0xFVkJRV1U3UVVGRFlpeFZRVUZKT0V3c1VVRkJVVGxNTEZOQlFWSXNRMEZCU2l4RlFVRjNRanRCUVVOMFFtaElMR2RDUVVGUmVrSXNUVUZCVWl4RFFVRmxUU3hUUVVGbUxFTkJRWGxDUXl4SFFVRjZRaXhEUVVFMlFtdEpMRk5CUVRkQ08wRkJRMFFzVDBGR1JDeE5RVVZQTzBGQlEweG9TQ3huUWtGQlVYcENMRTFCUVZJc1EwRkJaVTBzVTBGQlppeERRVUY1UW5GRUxFMUJRWHBDTEVOQlFXZERPRVVzVTBGQmFFTTdRVUZEUkR0QlFVTkdPMEZCUTBZN1FVRkRSanM3UVVGRlJDeFRRVUZUYTBvc1YwRkJWQ3hEUVVGelFteFJMRTlCUVhSQ0xFVkJRU3RDZGtJc1RVRkJMMElzUlVGQmRVTTdRVUZEY2tOdFF5eFRRVUZQUXl4TlFVRlFMRU5CUVdWaUxGRkJRVkY2UWl4TlFVRlNMRU5CUVdVd1VpeExRVUU1UWl4RlFVRnhRemhETEdkQ1FVRm5RblJWTEUxQlFXaENMRU5CUVhKRE8wRkJRMFE3TzBGQlJVUXNVMEZCVTIxU0xIRkNRVUZVTEVOQlFXZERiMFFzVVVGQmFFTXNSVUZCTUVNN1FVRkRlRU1zVFVGQlNVTXNWMEZCVnl4RlFVRm1PMEZCUTBFc1QwRkJTeXhKUVVGSmJFMHNVVUZCVkN4SlFVRnhRbWxOTEZGQlFYSkNMRVZCUVN0Q08wRkJRemRDTEZGQlFVMTJWU3hUUVVGVGRWVXNVMEZCVTJwTkxGRkJRVlFzUTBGQlpqdEJRVU5CYTAwc1owSkJRVmxzVFN4WFFVRlhMRWRCUVhaQ08wRkJRMEZuVFN4dlFrRkJaMEowVlN4TlFVRm9RanRCUVVOQkxGTkJRVXNzU1VGQlNYZElMRWxCUVZRc1NVRkJhVUo0U0N4TlFVRnFRaXhGUVVGNVFqdEJRVU4yUWl4VlFVRk5kMGNzVVVGQlVYaEhMRTlCUVU5M1NDeEpRVUZRTEVOQlFXUTdRVUZEUVdkT0xHdENRVUZaTEhkQ1FVRlhhRTRzU1VGQldDeEpRVUZ0UWl4SFFVRnVRaXhIUVVGNVFtaENMRXRCUVhwQ0xFZEJRV2xETEVkQlFUZERPMEZCUTBRN1FVRkRSR2RQTEdkQ1FVRlpMRXRCUVZvN1FVRkRSRHRCUVVORUxFMUJRVTFETEZWQlFWVTNVaXhUUVVGVFF5eGhRVUZVTEVOQlFYVkNMRTlCUVhaQ0xFTkJRV2hDTzBGQlEwRTBVaXhWUVVGUmVGSXNWMEZCVWl4RFFVRnhRa3dzVTBGQlV6aFNMR05CUVZRc1EwRkJkMEpHTEZGQlFYaENMRU5CUVhKQ08wRkJRMEUxVWl4WFFVRlRLMUlzU1VGQlZDeERRVUZqTVZJc1YwRkJaQ3hEUVVFd1FuZFNMRTlCUVRGQ08wRkJRMFE3TzBGQlJVUXNVMEZCVTBnc1pVRkJWQ3hEUVVFd1FuUlZMRTFCUVRGQ0xFVkJRV3RETzBGQlEyaERMRTlCUVVzc1NVRkJTWGRJTEVsQlFWUXNTVUZCYVVKNFNDeE5RVUZxUWl4RlFVRjVRanRCUVVOMlFpeFJRVUZKTEhkQ1FVRlRRU3hQUVVGUGQwZ3NTVUZCVUN4RFFVRlVMRU5CUVVvc1JVRkJORUk3UVVGRE1VSjRTQ3hoUVVGUGQwZ3NTVUZCVUN4SlFVRmxlRWdzVDBGQlQzZElMRWxCUVZBc1NVRkJaU3hKUVVFNVFqdEJRVU5FTzBGQlEwWTdRVUZEUkN4VFFVRlBlRWdzVFVGQlVEdEJRVU5FTEVNN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRKUTI1VGIwSTRVQ3h4UWpzN08wRkJRMjVDTEdsRFFVRmhNMDBzVjBGQllpeEZRVUV3UW5sU0xHRkJRVEZDTEVWQlFYbERka29zU1VGQmVrTXNSVUZCSzBNN1FVRkJRVHM3UVVGQlFUczdRVUZGTjBNc1ZVRkJTM2RLTEU5QlFVd3NSMEZCWlN4MVFrRkJkVUl4VWl4WFFVRjJRaXhIUVVGeFF5eG5Ra0ZCY2tNc1IwRkJkMFI1VWl4aFFVRjRSQ3hIUVVGM1JTeDFRa0ZCZUVVc1IwRkJhMGQyU2l4TFFVRkxha1FzU1VGQlRDeERRVUZWTEUxQlFWWXNRMEZCYkVjc1IwRkJjMGdzTmtKQlFYSkpPMEZCUmpaRE8wRkJSemxET3pzN1JVRktaMFF3VFN4TE96dHJRa0ZCT1VKb1JpeHhRanM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wbERRVUUxVUN4elFqczdPMEZCUTI1Q0xHdERRVUZoVEN4SlFVRmlMRVZCUVcxQ08wRkJRVUU3TzBGQlFVRTdPMEZCUldwQ0xGVkJRVXRuVml4UFFVRk1MRWRCUVdVc05rTkJRVFpEYUZZc1NVRkJOME1zUjBGQmIwUXNSMEZCYmtVN1FVRkdhVUk3UVVGSGJFSTdPenRGUVVwcFJHbFdMRXM3TzJ0Q1FVRXZRalZWTEhOQ096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3U1VOQlFXOURMSFZDT3pzN1FVRkRia0lzYlVOQlFXRjZReXhKUVVGaUxFVkJRVzFDTzBGQlFVRTdPMEZCUVVFN08wRkJSV3BDTEZWQlFVdG5WaXhQUVVGTUxFZEJRV1VzT0VKQlFUaENhRllzU1VGQk9VSXNSMEZCY1VNc1owUkJRWEJFTzBGQlJtbENPMEZCUjJ4Q096czdSVUZLYTBScFZpeExPenRyUWtGQmFFTjRVeXgxUWpzN096czdPenM3T3pzN096czdPenM3UVVOQmNrSXNTVUZCVFhsVExGZEJRVmNzUjBGQmFrSTdRVUZEUVN4SlFVRk5ReXhqUVVGakxFOUJRWEJDTzBGQlEwRXNTVUZCVFhSVUxGTkJRVk54VkN4WFFVRlhMRWRCUVRGQ08wRkJRMEVzU1VGQlRXeFBMRzFDUVVGdFFtNUdMRk5CUVZNc1IwRkJiRU03UVVGRFFTeEpRVUZOYzBZc2QwSkJRWGRDZEVZc1UwRkJVeXhKUVVGMlF6dEJRVU5CTEVsQlFVMXhRaXhoUVVGaGFWTXNZMEZCWTNSVUxFMUJRV1FzUjBGQmRVSXNTVUZCTVVNN1FVRkRRU3hKUVVGTmRWUXNZVUZCWVhaVUxGTkJRVk1zVDBGQk5VSTdRVUZEUVN4SlFVRk5kMVFzY1VKQlFYRkNlRlFzVTBGQlV5eEpRVUZ3UXp0QlFVTkJMRWxCUVUwclJpeGhRVUZoTDBZc1UwRkJVeXhaUVVFMVFqdEJRVU5CTEVsQlFVMTVWQ3hsUVVGbExFZEJRWEpDTzBGQlEwRXNTVUZCVFRsTExHRkJRV0V5U3l4alFVRmpkRlFzVFVGQlpDeEhRVUYxUWl4SlFVRXhRenRCUVVOQkxFbEJRVTAyU2l4cFFrRkJhVUo1U2l4alFVRmpkRlFzVFVGQlpDeEhRVUYxUWl4SlFVRTVRenRCUVVOQkxFbEJRVTB3VkN4alFVRmpMRWRCUVhCQ08wRkJRMEVzU1VGQlRYQlRMR3RDUVVGclFpeEhRVUY0UWp0QlFVTkJMRWxCUVUweFJDeFBRVUZQTEVWQlFXSTdRVUZEUVN4SlFVRk5iMUVzWTBGQll5eHBRa0ZCY0VJN08wRkJSVUVzU1VGQlRXeEZMRTlCUVU4c1IwRkJZanRCUVVOQkxFbEJRVTAyUnl4WlFVRlpMRWRCUVd4Q08wRkJRMEVzU1VGQlRXZENMRTlCUVU4c1IwRkJZanRCUVVOQkxFbEJRVTEyVUN4UFFVRlBMRkZCUVdJN1FVRkRRU3hKUVVGTmQxQXNhVUpCUVdsQ0xFZEJRWFpDT3p0clFrRkZaVHRCUVVOaU5WSXNaMEpCUkdFN1FVRkZZbTFHTEc5RFFVWmhPMEZCUjJKSExEaERRVWhoTzBGQlNXSnFSU3gzUWtGS1lUdEJRVXRpYTFNc2QwSkJUR0U3UVVGTllrTXNkME5CVG1FN1FVRlBZbnBPTEhkQ1FWQmhPMEZCVVdJd1RpdzBRa0ZTWVR0QlFWTmlPVXNzZDBKQlZHRTdRVUZWWW10Q0xHZERRVlpoTzBGQlYySTJTaXd3UWtGWVlUdEJRVmxpY0ZNc2EwTkJXbUU3UVVGaFluZEpMRmxCWW1FN1FVRmpZalpITEhOQ1FXUmhPMEZCWldKblFpeFpRV1poTzBGQlowSmlkbEFzV1VGb1FtRTdRVUZwUW1KNFJTeFpRV3BDWVR0QlFXdENZbTlSTERCQ1FXeENZVHRCUVcxQ1lqUkVPMEZCYmtKaExFTTdPenM3T3pzN096czdPenM3T3pzN08wRkRka0ptTEVsQlFVMDNUaXhwUWtGQmFVSXNkVWRCUVhaQ08wRkJRMEVzU1VGQlRVa3NhVUpCUVdsQ0xGbEJRWFpDT3p0clFrRkZaVHRCUVVOaVNpeG5RMEZFWVR0QlFVVmlTVHRCUVVaaExFTTdPenM3T3pzN096czdPenM3T3pzN08xRkRSbUozVUN4VkxFZEJRVUZCTEZVN1VVRkRRVU1zVHl4SFFVRkJRU3hQTzFGQlEwRkRMRkVzUjBGQlFVRXNVVHRSUVVOQlF5eHJRaXhIUVVGQlFTeHJRanRSUVVOQlF5eDNRaXhIUVVGQlFTeDNRanRSUVVOQlF5eFJMRWRCUVVGQkxGRTdVVUZEUVVNc1dTeEhRVUZCUVN4Wk8xRkJRMEZETEZFc1IwRkJRVUVzVVR0UlFVTkJReXhaTEVkQlFVRkJMRms3VVVGRFFVTXNWeXhIUVVGQlFTeFhPMUZCUTBGRExFOHNSMEZCUVVFc1R6dFJRVU5CUXl4TkxFZEJRVUZCTEUwN096dEJRVWxHTEZOQlFWTllMRlZCUVZRc1EwRkJiMEpzVHl4SFFVRndRaXhGUVVGNVFqdEJRVU4yUWl4VFFVRlBPRThzWTBGQll6bFBMRWRCUVdRc1RVRkJkVUlzYlVKQlFUbENPMEZCUTBRN08wRkJSVVFzVTBGQlUyMVBMRTlCUVZRc1EwRkJhMEp1VHl4SFFVRnNRaXhGUVVGMVFqdEJRVU55UWl4VFFVRlBPRThzWTBGQll6bFBMRWRCUVdRc1RVRkJkVUlzWjBKQlFUbENPMEZCUTBRN08wRkJSVVFzVTBGQlUyOVBMRkZCUVZRc1EwRkJiVUp3VHl4SFFVRnVRaXhGUVVGM1FqdEJRVU4wUWl4VFFVRlBPRThzWTBGQll6bFBMRWRCUVdRc1RVRkJkVUlzYVVKQlFUbENPMEZCUTBRN08wRkJSVVFzVTBGQlUzRlBMR3RDUVVGVUxFTkJRVFpDY2s4c1IwRkJOMElzUlVGQmEwTTdRVUZEYUVNc1UwRkJUMjFQTEZGQlFWRnVUeXhIUVVGU0xFdEJRV2RDUVN4SlFVRkpZaXhOUVVGS0xFdEJRV1VzUTBGQkwwSXNTVUZCYjBOcFVDeFRRVUZUY0U4c1NVRkJTU3hEUVVGS0xFTkJRVlFzUTBGQk0wTTdRVUZEUkRzN1FVRkZSQ3hUUVVGVGMwOHNkMEpCUVZRc1EwRkJiVU4wVHl4SFFVRnVReXhGUVVGM1F6dEJRVU4wUXl4VFFVRlBiVThzVVVGQlVXNVBMRWRCUVZJc1MwRkJaMEpCTEVsQlFVbGlMRTFCUVVvc1MwRkJaU3hEUVVFdlFpeEpRVUZ2UTJ0UUxHMUNRVUZ0UW5KUExFbEJRVWtzUTBGQlNpeERRVUZ1UWl4RFFVRXpRenRCUVVORU96dEJRVVZFTEZOQlFWTjFUeXhSUVVGVUxFTkJRVzFDZGs4c1IwRkJia0lzUlVGQmQwSTdRVUZEZEVJc1UwRkJUemhQTEdOQlFXTTVUeXhIUVVGa0xFMUJRWFZDTEdsQ1FVRTVRanRCUVVORU96dEJRVVZFTEZOQlFWTjNUeXhaUVVGVUxFTkJRWFZDZUU4c1IwRkJka0lzUlVGQk5FSTdRVUZETVVJc1UwRkJUM1ZQTEZOQlFWTjJUeXhIUVVGVUxFdEJRV2xDUVN4SlFVRkplRUlzVDBGQlNpeERRVUZaTEVkQlFWb3NUVUZCY1VJc1EwRkJOME03UVVGRFJEczdRVUZGUkN4VFFVRlRhVkVzVVVGQlZDeERRVUZ0UW5wUExFZEJRVzVDTEVWQlFYZENPMEZCUTNSQ0xGTkJRVTg0VHl4alFVRmpPVThzUjBGQlpDeE5RVUYxUWl4cFFrRkJka0lzU1VGQk5FTkJMRkZCUVZGQkxFZEJRVE5FTzBGQlEwUTdPMEZCUlVRc1UwRkJVekJQTEZsQlFWUXNRMEZCZFVJeFR5eEhRVUYyUWl4RlFVRTBRanRCUVVNeFFpeFRRVUZQUVN4UFFVRlBMRTlCUVU5QkxFbEJRVWxHTEU5QlFWZ3NTMEZCZFVJc1YwRkJja003UVVGRFJEczdRVUZGUkN4VFFVRlROazhzVjBGQlZDeERRVUZ6UWpOUExFZEJRWFJDTEVWQlFUSkNPMEZCUTNwQ0xGTkJRVThzVDBGQlQwRXNSMEZCVUN4TFFVRmxMRmRCUVhSQ08wRkJRMFE3TzBGQlJVUXNVMEZCVXpoUExHRkJRVlFzUTBGQmQwSTVUeXhIUVVGNFFpeEZRVUUyUWp0QlFVTXpRaXhUUVVGUGFFWXNUMEZCVDIxR0xGTkJRVkFzUTBGQmFVSnNReXhSUVVGcVFpeERRVUV3UWxjc1NVRkJNVUlzUTBGQkswSnZRaXhIUVVFdlFpeERRVUZRTzBGQlEwUTdPMEZCUlVRc1UwRkJVelpQTEUxQlFWUXNRMEZCYVVJM1R5eEhRVUZxUWl4RlFVRnpRanRCUVVOd1FpeE5RVUZOSzA4c1YwRkJWeTlQTEVsQlFVbDRRaXhQUVVGS0xFTkJRVmtzUjBGQldpeERRVUZxUWp0QlFVTkJMRk5CUVU4c1EwRkJReXhEUVVGRUxFVkJRVWtzUTBGQlNpeEZRVUZQTEVOQlFWQXNSVUZCVlhkUkxFbEJRVllzUTBGQlpTeFZRVUZETDB3c1IwRkJSRHRCUVVGQkxGZEJRVk5CTEZGQlFWRTRUQ3hSUVVGcVFqdEJRVUZCTEVkQlFXWXNRMEZCVUR0QlFVTkVPenRCUVVWRUxGTkJRVk5JTEU5QlFWUXNRMEZCYTBJMVR5eEhRVUZzUWl4RlFVRjFRanRCUVVOeVFpeE5RVUZKTEVOQlFVTkJMRWRCUVV3c1JVRkJWVHRCUVVOU0xGZEJRVThzU1VGQlVEdEJRVU5FT3p0QlFVVkVMRTFCUVVsdFR5eFJRVUZSYms4c1IwRkJVaXhMUVVGblFuVlBMRk5CUVZOMlR5eEhRVUZVTEVOQlFYQkNMRVZCUVcxRE8wRkJRMnBETEZkQlFVOHNRMEZCUTBFc1NVRkJTV0lzVFVGQldqdEJRVU5FT3p0QlFVVkVMRk5CUVU4c1EwRkJRMjVGTEU5QlFVOXhTeXhKUVVGUUxFTkJRVmx5Uml4SFFVRmFMRVZCUVdsQ1lpeE5RVUY2UWp0QlFVTkVMRU03T3pzN096czdPenM3T3pzN096czdPenM3UVVNelJVUTdPMEZCUTBFN08xRkJSMFU0VUN4SExFZEJRVUZCTEVjN1VVRkRRVU1zWVN4SFFVRkJRU3hoTzFGQlEwRkRMRlVzUjBGQlFVRXNWVHRSUVVOQlF5eFhMRWRCUVVGQkxGYzdVVUZEUVVNc1dTeEhRVUZCUVN4Wk8xRkJRMEZETEZjc1IwRkJRVUVzVnpzN08wRkJSMFlzU1VGQlRVTXNVVUZCVVR0QlFVTmFReXhSUVVGTkxFVkJSRTA3UVVGRldrTXNVMEZCVHp0QlFVWkxMRU5CUVdRN08wRkJTMEVzVTBGQlUwb3NXVUZCVkN4RFFVRjFRak5YTEVsQlFYWkNMRVZCUVRaQ08wRkJRek5DTEUxQlFVazJWeXhOUVVGTlF5eEpRVUZPTEVOQlFWYzVWeXhKUVVGWUxFTkJRVW9zUlVGQmMwSTdRVUZEY0VJc1YwRkJUelpYTEUxQlFVMURMRWxCUVU0c1EwRkJWemxYTEVsQlFWZ3NRMEZCVUR0QlFVTkVPenRCUVVWRUxFMUJRVTFuV0N4WlFVRlpTQ3hOUVVGTlJTeExRVUZPTEVOQlFWa3ZVeXhKUVVGYUxFTkJRV2xDYUVVc1NVRkJha0lzUTBGQmJFSTdRVUZEUVN4VFFVRlBObGNzVFVGQlRVTXNTVUZCVGl4RFFVRlhPVmNzU1VGQldDeEpRVUZ0UW1kWUxGbEJRVmtzUTBGQmRFTTdRVUZEUkRzN1FVRkZSQ3hUUVVGVFNpeFhRVUZVTEVOQlFYTkNka29zUjBGQmRFSXNSVUZCTWtJN1FVRkRla0lzVTBGQlQzZEtMRTFCUVUxRkxFdEJRVTRzUTBGQldURktMRWRCUVZvc1EwRkJVRHRCUVVORU96dEJRVVZFTEZOQlFWTnJTaXhIUVVGVUxFTkJRV05xVUN4SFFVRmtMRVZCUVcxQ1VpeEZRVUZ1UWl4RlFVRjFRanRCUVVOeVFpeE5RVUZKTEhkQ1FVRlRVU3hIUVVGVUxFTkJRVW9zUlVGQmJVSTdRVUZEYWtJc1VVRkJUWEZHTEU5QlFVOXlTeXhQUVVGUGNVc3NTVUZCVUN4RFFVRlpja1lzUjBGQldpeERRVUZpTzBGQlEwRXNWMEZCVDJsUUxFbEJRVWsxU2l4SlFVRktMRVZCUVZVM1JpeEZRVUZXTEVOQlFWQTdRVUZEUkRzN1FVRkZSQ3hUUVVGUFVTeEpRVUZKZUVJc1QwRkJTaXhEUVVGWlowSXNSVUZCV2l4TFFVRnRRaXhEUVVFeFFqdEJRVU5FT3p0QlFVVkVMRk5CUVZNd1VDeGhRVUZVTEVOQlFYZENiRkFzUjBGQmVFSXNSVUZCTmtJN1FVRkRNMElzVFVGQlRUSlFMR2xDUVVGcFFpeEZRVUYyUWp0QlFVTkJReXhsUVVGaE5WQXNSMEZCWWl4RlFVRnJRakpRTEdOQlFXeENMRVZCUVd0RExFVkJRV3hETzBGQlEwRXNVMEZCVDBFc1kwRkJVRHRCUVVORU96dEJRVVZFTEZOQlFWTkRMRmxCUVZRc1EwRkJkVUkxVUN4SFFVRjJRaXhGUVVFMFFqSlFMR05CUVRWQ0xFVkJRVFJEZWt3c1NVRkJOVU1zUlVGQmEwUTdRVUZEYUVRc1QwRkJTeXhKUVVGSk0wVXNSMEZCVkN4SlFVRm5RbE1zUjBGQmFFSXNSVUZCY1VJN1FVRkRia0lzVVVGQlNTeDNRa0ZCVTBFc1NVRkJTVlFzUjBGQlNpeERRVUZVTEVOQlFVb3NSVUZCZDBJN1FVRkRkRUp4VVN4dFFrRkJZVFZRTEVsQlFVbFVMRWRCUVVvc1EwRkJZaXhGUVVGMVFtOVJMR05CUVhaQ0xFVkJRWFZEZWt3c1MwRkJTMnBOTEUxQlFVd3NRMEZCV1hOSUxFZEJRVm9zUTBGQmRrTTdRVUZEUVR0QlFVTkVPenRCUVVWRUxGRkJRVWxUTEVsQlFVbFVMRWRCUVVvc1RVRkJZU3hKUVVGcVFpeEZRVUYxUWp0QlFVTnlRaXgxUWtGQlNXOVJMR05CUVVvc1JVRkJiMEo2VEN4TFFVRkxhazBzVFVGQlRDeERRVUZaYzBnc1IwRkJXaXhEUVVGd1FpeEZRVUZ6UTFNc1NVRkJTVlFzUjBGQlNpeERRVUYwUXp0QlFVTkVPMEZCUTBZN1FVRkRSanM3UVVGRlJDeFRRVUZUTkZBc1ZVRkJWQ3hEUVVGeFFsVXNSMEZCY2tJc1JVRkJNRUk3UVVGRGVFSXNVMEZCVDBFc1NVRkJTWHBTTEU5QlFVb3NRMEZCV1N4VlFVRmFMRVZCUVhkQ0xGVkJRVU5MTEV0QlFVUTdRVUZCUVN4WFFVRlhMRTFCUVUxQkxFMUJRVTBzUTBGQlRpeEZRVUZUYzBJc1YwRkJWQ3hGUVVGcVFqdEJRVUZCTEVkQlFYaENMRU5CUVZBN1FVRkRSRHM3UVVGRlJDeFRRVUZUY1ZBc1YwRkJWQ3hEUVVGelFsTXNSMEZCZEVJc1JVRkJNa0k3UVVGRGVrSXNVMEZCVDBFc1NVRkJTWHBTTEU5QlFVb3NRMEZCV1N4UFFVRmFMRVZCUVhGQ0xGVkJRVU5MTEV0QlFVUTdRVUZCUVN4WFFVRlhRU3hOUVVGTkxFTkJRVTRzUlVGQlUzRlNMRmRCUVZRc1JVRkJXRHRCUVVGQkxFZEJRWEpDTEVOQlFWQTdRVUZEUkN4RE96czdPenM3T3pzN096czdPenM3T3pzN1FVTm9SVVE3TzJ0Q1FVOWxReXhKT3pzN1FVRkZaaXhUUVVGVFFTeEpRVUZVTEVOQlFXVkRMRmRCUVdZc1JVRkJORUpETEUxQlFUVkNMRVZCUVc5RE8wRkJRMnhETEUxQlFVa3NRMEZCUTBRc1YwRkJUQ3hGUVVGclFqdEJRVU5vUWl4WFFVRlBSQ3hMUVVGTkxFVkJRVTRzUlVGQlZVVXNUVUZCVml4RFFVRlFPMEZCUTBRN08wRkJSVVFzVDBGQlN5eEpRVUZKTVZFc1IwRkJWQ3hKUVVGblFqQlJMRTFCUVdoQ0xFVkJRWGRDT3p0QlFVVjBRaXhSUVVGSkxESkNRVUZaUVN4UFFVRlBNVkVzUjBGQlVDeERRVUZhTEVOQlFVb3NSVUZCT0VJN1FVRkROVUk3UVVGRFJEczdRVUZGUkN4UlFVRkpNRkVzVDBGQlQwTXNZMEZCVUN4RFFVRnpRak5STEVkQlFYUkNMRXRCUVRoQ0xIZENRVUZUTUZFc1QwRkJUekZSTEVkQlFWQXNRMEZCVkN4RFFVRnNReXhGUVVGNVJEdEJRVU4yUkN4VlFVRkpMRU5CUVVONVVTeFpRVUZaZWxFc1IwRkJXaXhEUVVGTUxFVkJRWFZDTzBGQlEzSkNlVkVzYjBKQlFWbDZVU3hIUVVGYUxFbEJRVzFDTEVWQlFXNUNPMEZCUTBRN1FVRkRSSGRSTEZkQlFVdERMRmxCUVZsNlVTeEhRVUZhTEVOQlFVd3NSVUZCZFVJd1VTeFBRVUZQTVZFc1IwRkJVQ3hEUVVGMlFqdEJRVU5CTzBGQlEwUTdPMEZCUlVRc1VVRkJTU3gxUWtGQlVUQlJMRTlCUVU4eFVTeEhRVUZRTEVOQlFWSXNRMEZCU2l4RlFVRXdRanRCUVVONFFpeFZRVUZKTEVOQlFVTjVVU3haUVVGWmVsRXNSMEZCV2l4RFFVRk1MRVZCUVhWQ08wRkJRM0pDZVZFc2IwSkJRVmw2VVN4SFFVRmFMRWxCUVcxQ0xFVkJRVzVDTzBGQlEwUTdRVUZEUkRSUkxHZENRVUZWU0N4WlFVRlplbEVzUjBGQldpeERRVUZXTEVWQlFUUkNNRkVzVDBGQlR6RlJMRWRCUVZBc1EwRkJOVUk3UVVGRFFUdEJRVU5FT3p0QlFVVkVMRkZCUVVrc05FSkJRV0V3VVN4UFFVRlBNVkVzUjBGQlVDeERRVUZpTEVOQlFVb3NSVUZCSzBJN1FVRkROMEo1VVN4clFrRkJXWHBSTEVkQlFWb3NTVUZCYlVJd1VTeFBRVUZQTVZFc1IwRkJVQ3hGUVVGWmJrVXNVMEZCV2l4RFFVRnpRaXhKUVVGMFFpeERRVUZ1UWp0QlFVTkJPMEZCUTBRN08wRkJSVVEwVlN4blFrRkJXWHBSTEVkQlFWb3NTVUZCYlVJd1VTeFBRVUZQTVZFc1IwRkJVQ3hEUVVGdVFqdEJRVU5FT3p0QlFVVkVMRk5CUVU5NVVTeFhRVUZRTzBGQlEwUTdPMEZCUlVRc1UwRkJVMGNzVTBGQlZDeERRVUZ2UWtnc1YwRkJjRUlzUlVGQmFVTkRMRTFCUVdwRExFVkJRWGxETzBGQlEzWkRMRTlCUVVzc1NVRkJTVEZMTEVsQlFVa3NRMEZCWWl4RlFVRm5Ra0VzU1VGQlNUQkxMRTlCUVU4NVVTeE5RVUV6UWl4RlFVRnRRMjlITEVkQlFXNURMRVZCUVhkRE8wRkJRM1JETEZGQlFVa3NkMEpCUVZNd1N5eFBRVUZQTVVzc1EwRkJVQ3hEUVVGVUxFTkJRVW9zUlVGQmVVSTdRVUZEZGtKNVN5eHJRa0ZCV1hwTExFTkJRVm9zU1VGQmFVSjVTeXhaUVVGWmVrc3NRMEZCV2l4TFFVRnJRaXhGUVVGdVF6dEJRVU5CZDBzc1YwRkJTME1zV1VGQldYcExMRU5CUVZvc1EwRkJUQ3hGUVVGeFFqQkxMRTlCUVU4eFN5eERRVUZRTEVOQlFYSkNPMEZCUTBFN1FVRkRSRHM3UVVGRlJDeFJRVUZKTEhWQ1FVRlJNRXNzVDBGQlR6RkxMRU5CUVZBc1EwRkJVaXhEUVVGS0xFVkJRWGRDTzBGQlEzUkNlVXNzYTBKQlFWbDZTeXhEUVVGYUxFbEJRV2xDZVVzc1dVRkJXWHBMTEVOQlFWb3NTMEZCYTBJc1JVRkJia003UVVGRFFUUkxMR2RDUVVGVlNDeFpRVUZaZWtzc1EwRkJXaXhEUVVGV0xFVkJRVEJDTUVzc1QwRkJUekZMTEVOQlFWQXNRMEZCTVVJN1FVRkRRVHRCUVVORU96dEJRVVZFZVVzc1owSkJRVmw2U3l4RFFVRmFMRWxCUVdsQ01Fc3NUMEZCVHpGTExFTkJRVkFzUTBGQmFrSTdRVUZEUkRzN1FVRkZSQ3hUUVVGUGVVc3NWMEZCVUR0QlFVTkVMRU03T3pzN096czdPenM3T3pzN096czdPenM3UVVOcVJVUTdPMUZCUzBWSkxGa3NSMEZCUVVFc1dUdFJRVU5CUXl4bExFZEJRVUZCTEdVN1VVRkRRVU1zWjBJc1IwRkJRVUVzWjBJN1VVRkRRVU1zVXl4SFFVRkJRU3hUTzFGQlEwRkRMRlVzUjBGQlFVRXNWVHRSUVVOQlF5eG5RaXhIUVVGQlFTeG5RanRSUVVOQlF5eGhMRWRCUVVGQkxHRTdVVUZEUVVNc1V5eEhRVUZCUVN4VE96czdRVUZIUml4VFFVRlRVQ3haUVVGVUxFTkJRWFZDVVN4UlFVRjJRaXhGUVVGcFEwTXNWMEZCYWtNc1JVRkJPRU03UVVGRE5VTkVMRmRCUVZONFR5eFZRVUZVTEVOQlFXOUNNRThzV1VGQmNFSXNRMEZCYVVORUxGZEJRV3BETEVWQlFUaERSQ3hSUVVFNVF6dEJRVU5CTEZOQlFVOURMRmRCUVZBN1FVRkRSRHM3UVVGRlJDeFRRVUZUU2l4blFrRkJWQ3hEUVVFeVFtcFNMRVZCUVROQ0xFVkJRU3RDZFZJc1RVRkJMMElzUlVGQmRVTTdRVUZEY2tOQkxGTkJRVTh6VHl4VlFVRlFMRU5CUVd0Q1owc3NXVUZCYkVJc1EwRkJLMEkxVFN4RlFVRXZRaXhGUVVGdFEzVlNMRTFCUVc1RE8wRkJRMFE3TzBGQlJVUXNVMEZCVTFZc1pVRkJWQ3hEUVVFd1FqRllMRTFCUVRGQ0xFVkJRV3RETzBGQlEyaERMRTFCUVUxeFdTeFpRVUZaTERSQ1FVRmhjbGtzVDBGQlQybElMRWxCUVZBc1JVRkJZaXhKUVVFNFFtcElMRTFCUVRsQ0xFZEJRWFZET0VNc1UwRkJVMWtzWVVGQlZDeERRVUYxUWpGRUxFMUJRWFpDTEVWQlFTdENhVWtzVTBGQmVFWTdRVUZEUVN4VFFVRlBjVkVzYjBKQlFXOUNSQ3hUUVVGd1FpeERRVUZRTzBGQlEwUTdPMEZCUlVRc1UwRkJVME1zYlVKQlFWUXNRMEZCT0VKRExGbEJRVGxDTEVWQlFUUkRPMEZCUXpGRExFMUJRVTFETEZOQlFWTXNTVUZCU1VNc1UwRkJTaXhGUVVGbU8wRkJRMEVzVFVGQlRVTXNhVUpCUVdsQ1JpeFBRVUZQUnl4bFFVRlFMRU5CUVhWQ1NpeFpRVUYyUWl4RlFVRnhReXhYUVVGeVF5eERRVUYyUWp0QlFVTkJMRk5CUVU5SExHVkJRV1ZGTEVsQlFXWXNRMEZCYjBKRExHbENRVUV6UWp0QlFVTkVPenRCUVVWRUxGTkJRVk5xUWl4VFFVRlVMRU5CUVc5Q2EwSXNTVUZCY0VJc1JVRkJNRUp5VEN4RlFVRXhRaXhGUVVFNFFqdEJRVU0xUWl4TlFVRkxRU3hIUVVGSGNVd3NTVUZCU0N4TlFVRmhMRU5CUVVNc1EwRkJia0lzUlVGQmMwSTdRVUZEY0VJN1FVRkRSRHM3UVVGRlJIWlNMRkZCUVUxRExGTkJRVTRzUTBGRFJ6VkVMRXRCUkVnc1EwRkZSM0ZETEVsQlJrZ3NRMEZGVVRaVExFdEJRVXM1Vnl4UlFVWmlMRVZCUjBkdFF5eFBRVWhJTEVOQlIxY3NWVUZCUXpCRExFVkJRVVE3UVVGQlFTeFhRVUZSSzFFc1ZVRkJWUzlSTEVWQlFWWXNSVUZCWXpSSExFVkJRV1FzUTBGQlVqdEJRVUZCTEVkQlNGZzdRVUZKUkRzN1FVRkZSQ3hUUVVGVGEwc3NaMEpCUVZRc1EwRkJNa0p2UWl4SlFVRXpRaXhGUVVGcFEwTXNVVUZCYWtNc1JVRkJNa003UVVGRGVrTXNUVUZCVFVNc1VVRkJVU3hGUVVGa08wRkJRMEZ5UWl4WlFVRlZiVUlzU1VGQlZpeEZRVUZuUWl4VlFVRkRiRk1zUlVGQlJEdEJRVUZCTEZkQlFWRnRVeXhUUVVGVGJsTXNSVUZCVkN4SlFVRmxiMU1zVFVGQlRXeFdMRWxCUVU0c1EwRkJWemhETEVWQlFWZ3NRMEZCWml4SFFVRm5ReXhGUVVGNFF6dEJRVUZCTEVkQlFXaENPMEZCUTBFc1UwRkJUMjlUTEV0QlFWQTdRVUZEUkRzN1FVRkZSQ3hUUVVGVGNFSXNWVUZCVkN4RFFVRnhRbWxDTEVsQlFYSkNMRVZCUVRKQ08wRkJRM3BDUVN4UFFVRkxjbEFzVlVGQlRDeERRVUZuUW5sUUxGZEJRV2hDTEVOQlFUUkNTaXhKUVVFMVFqdEJRVU5FT3p0QlFVVkVMRk5CUVZObUxHRkJRVlFzUTBGQmQwSmxMRWxCUVhoQ0xFVkJRVGhDU3l4SlFVRTVRaXhGUVVGdlF6dEJRVU5zUTI1Q0xGbEJRVlZqTEVsQlFWWTdRVUZEUVUwc1kwRkJXVTRzU1VGQldpeEZRVUZyUWtzc1NVRkJiRUk3UVVGRFJEczdRVUZGUkN4VFFVRlRReXhYUVVGVUxFTkJRWE5DVGl4SlFVRjBRaXhGUVVFMFFrc3NTVUZCTlVJc1JVRkJhME03UVVGRGFFTXNUVUZCVFVVc1YwRkJWM1pYTEZOQlFWTTRVaXhqUVVGVUxFTkJRWGRDZFVVc1NVRkJlRUlzUTBGQmFrSTdRVUZEUVV3c1QwRkJTek5XTEZkQlFVd3NRMEZCYVVKclZ5eFJRVUZxUWp0QlFVTkVPenRCUVVWRUxGTkJRVk55UWl4VFFVRlVMRU5CUVc5Q1l5eEpRVUZ3UWl4RlFVRXdRanRCUVVONFFpeFRRVUZQUVN4TFFVRkxVU3hoUVVGTUxFVkJRVkFzUlVGQk5rSTdRVUZETTBKU0xGTkJRVXRKTEZkQlFVd3NRMEZCYVVKS0xFdEJRVXRUTEZWQlFYUkNPMEZCUTBRN1FVRkRSaXhET3pzN096czdPenM3T3pzN096czdPenM3T3p0QlEzUkZSRHM3YTBKQlRXVkRMRkU3T3p0QlFVVm1MRk5CUVZOQkxGRkJRVlFzUTBGQmJVSkRMRXRCUVc1Q0xFVkJRVEJDUXl4TlFVRXhRaXhGUVVGclF6dEJRVU5vUXl4TlFVRkpMREpDUVVGWlJDeExRVUZhTEV0QlFYTkNMREpDUVVGWlF5eE5RVUZhTEVOQlFURkNMRVZCUVN0RE8wRkJRemRETEZkQlFVOHNTMEZCVUR0QlFVTkVPenRCUVVWRUxFMUJRVWtzVVVGQlQwUXNTMEZCVUN4NVEwRkJUMEVzUzBGQlVDeGxRVUYzUWtNc1RVRkJlRUlzZVVOQlFYZENRU3hOUVVGNFFpeEZRVUZLTEVWQlFXOURPMEZCUTJ4RExGZEJRVThzUzBGQlVEdEJRVU5FT3p0QlFVVkVMRTFCUVUxcVVTeGhRVUZoTEVWQlFVVnJVU3hYUVVGWExFVkJRV0lzUlVGQmJrSTdPMEZCUlVFc1RVRkJTU3gxUWtGQlVVUXNUVUZCVWl4RFFVRktMRVZCUVhGQ08wRkJRMjVDUlN4elFrRkRSVWdzVVVGQlVVRXNUVUZCVFhCU0xFZEJRVTRzUTBGQlZUdEJRVUZCTEdGQlFVMTRRaXhGUVVGT08wRkJRVUVzUzBGQlZpeERRVUZTTEVkQlFUaENMRVZCUkdoRExFVkJSVVUyVXl4UFFVRlBjbElzUjBGQlVDeERRVUZYTzBGQlFVRXNZVUZCVFhoQ0xFVkJRVTQ3UVVGQlFTeExRVUZZTEVOQlJrWXNSVUZIUlRSRExGVkJTRVk3UVVGTlJDeEhRVkJFTEUxQlQwOHNTVUZCU1N4M1FrRkJVMmxSTEUxQlFWUXNRMEZCU2l4RlFVRnpRanRCUVVNelFrVXNjMEpCUVd0Q1NDeExRVUZzUWl4RlFVRjVRa01zVFVGQmVrSXNSVUZCYVVOcVVTeFZRVUZxUXp0QlFVVkVMRWRCU0Uwc1RVRkhRVHRCUVVOTUxGZEJRVTluVVN4VlFVRlZReXhOUVVGcVFqdEJRVVZFT3p0QlFVVkVMRk5CUVU5cVVTeFhRVUZYYTFFc1UwRkJiRUk3UVVGRFJEczdRVUZGUkN4VFFVRlRReXhwUWtGQlZDeERRVUUwUWtnc1MwRkJOVUlzUlVGQmJVTkRMRTFCUVc1RExFVkJRVEpEYWxFc1ZVRkJNME1zUlVGQmRVUTdRVUZEY2tRc1QwRkJTeXhKUVVGSk4wTXNSMEZCVkN4SlFVRm5RamhUTEUxQlFXaENMRVZCUVhkQ096dEJRVVYwUWl4UlFVRkpMSFZDUVVGUlJDeExRVUZTTEVOQlFVb3NSVUZCYjBJN1FVRkRiRUlzVlVGQlNTd3lRa0ZCV1VFc1RVRkJUVGRUTEVkQlFVNHNRMEZCV2l4RFFVRktMRVZCUVRaQ08wRkJRek5DTmtNc2JVSkJRVmRyVVN4VFFVRllMRU5CUVhGQ0wxTXNSMEZCY2tJc1NVRkJORUlzUlVGQlJYSkhMRXRCUVVzc1NVRkJVQ3hGUVVFMVFqdEJRVU5FTzBGQlEwUTdRVUZEUkRzN1FVRkZSQ3hSUVVGSmExb3NUVUZCVFRkVExFZEJRVTRzVFVGQlpUaFRMRTlCUVU4NVV5eEhRVUZRTEVOQlFXNUNMRVZCUVdkRE8wRkJRemxDTmtNc2FVSkJRVmRyVVN4VFFVRllMRU5CUVhGQ0wxTXNSMEZCY2tJc1NVRkJORUlzUzBGQk5VSTdRVUZEUkR0QlFVTkdPenRCUVVWRUxFOUJRVXNzU1VGQlNVRXNTVUZCVkN4SlFVRm5RalpUTEV0QlFXaENMRVZCUVhWQ096dEJRVVZ5UWl4UlFVRkpMSFZDUVVGUlFTeExRVUZTTEVOQlFVb3NSVUZCYjBJN1FVRkRiRUlzVlVGQlNTd3lRa0ZCV1VNc1QwRkJUemxUTEVsQlFWQXNRMEZCV2l4RFFVRktMRVZCUVRoQ08wRkJRelZDTmtNc2JVSkJRVmRyVVN4VFFVRllMRU5CUVhGQ0wxTXNTVUZCY2tJc1NVRkJORUlzUlVGQlJXcEVMRkZCUVZFc1NVRkJWaXhGUVVFMVFqdEJRVU5FTzBGQlEwUTdRVUZEUkRzN1FVRkZSQ3hSUVVGSk9GWXNUVUZCVFRkVExFbEJRVTRzVFVGQlpUaFRMRTlCUVU4NVV5eEpRVUZRTEVOQlFXNUNMRVZCUVdkRE8wRkJRemxDTmtNc2FVSkJRVmRyVVN4VFFVRllMRU5CUVhGQ0wxTXNTVUZCY2tJc1NVRkJORUlzUzBGQk5VSTdRVUZEUkR0QlFVTkdPenRCUVVWRUxGTkJRVTgyUXl4VlFVRlFPMEZCUTBRc1F6czdPenM3T3pzN096czdPenM3T3pzN096dEJRMjVGUkRzN1VVRk5SVFJETEVjc1IwRkJRVUVzUnp0UlFVTkJSaXhITEVkQlFVRkJMRWM3VVVGRFFYaEpMRTBzUjBGQlFVRXNUVHRSUVVOQmExY3NZeXhIUVVGQlFTeGpPMUZCUTBFeFZpeFBMRWRCUVVGQkxFODdVVUZEUVd0RkxFY3NSMEZCUVVFc1J6dFJRVU5CZVZJc1R5eEhRVUZCUVN4UE8xRkJRMEZ1VFN4TkxFZEJRVUZCTEUwN1VVRkRRVzlOTEZFc1IwRkJRVUVzVVR0UlFVTkJReXhQTEVkQlFVRkJMRTg3VVVGRFFVTXNWU3hIUVVGQlFTeFZPenM3UVVGSFJpeFRRVUZUTlU0c1IwRkJWQ3hEUVVGamFFWXNSMEZCWkN4RlFVRnRRbXRGTEVsQlFXNUNMRVZCUVhsQ08wRkJRM1pDTEUxQlFVazNSU3hSUVVGUlZ5eEhRVUZhTzBGQlEwRXNUMEZCU3l4SlFVRkpkVVlzU1VGQlNTeERRVUZpTEVWQlFXZENRU3hKUVVGSmNrSXNTMEZCU3k5RkxFMUJRWHBDTEVWQlFXbERiMGNzUjBGQmFrTXNSVUZCYzBNN08wRkJSWEJETEZGQlFVazdRVUZEUm14SExHTkJRVkZCTEUxQlFVMDJSU3hMUVVGTGNVSXNRMEZCVEN4RFFVRk9MRU5CUVZJN1FVRkZSQ3hMUVVoRUxFTkJSMFVzVDBGQlR6RkVMRU5CUVZBc1JVRkJWVHRCUVVOV0xHRkJRVTk0UXl4TFFVRlFPMEZCUlVRN1FVRkRSanRCUVVORUxGTkJRVTlCTEV0QlFWQTdRVUZEUkRzN1FVRkZSQ3hUUVVGVGVVWXNSMEZCVkN4RFFVRmpPVVVzUjBGQlpDeEZRVUZ0UW10RkxFbEJRVzVDTEVWQlFYbENOMFVzUzBGQmVrSXNSVUZCWjBNN1FVRkRPVUlzVFVGQlNTeERRVUZETmtVc1MwRkJTeTlGTEUxQlFWWXNSVUZCYTBJN1FVRkRhRUlzVVVGQlNTeDNRa0ZCVTBVc1MwRkJWQ3hEUVVGS0xFVkJRWEZDTzBGQlEyNUNMR0ZCUVU5eVJTeFBRVUZQUXl4TlFVRlFMRU5CUVdNclJTeEhRVUZrTEVWQlFXMUNXQ3hMUVVGdVFpeERRVUZRTzBGQlEwUTdRVUZEUkN4WFFVRlBWeXhOUVVGTldDeExRVUZpTzBGQlEwUTdPMEZCUlVRc1RVRkJTWGRVTEU5QlFVODNVeXhIUVVGWU8wRkJRMEVzVDBGQlN5eEpRVUZKZFVZc1NVRkJTU3hEUVVGaUxFVkJRV2RDUVN4SlFVRkpja0lzUzBGQlN5OUZMRTFCUVV3c1IwRkJZeXhEUVVGc1F5eEZRVUZ4UTI5SExFZEJRWEpETEVWQlFUQkRPMEZCUTNoRExGRkJRVWtzUTBGQlEzTk9MRXRCUVUwelR5eExRVUZMY1VJc1EwRkJUQ3hEUVVGT0xFTkJRVXdzUlVGQmMwSTdRVUZEY0VKelRpeGhRVUZQUVN4TFFVRkxNMDhzUzBGQlMzRkNMRU5CUVV3c1EwRkJUQ3hKUVVGblFpeEZRVUYyUWp0QlFVTkVMRXRCUmtRc1RVRkZUenRCUVVOTWMwNHNZVUZCVDBFc1MwRkJTek5QTEV0QlFVdHhRaXhEUVVGTUxFTkJRVXdzUTBGQlVEdEJRVU5FTzBGQlEwWTdPMEZCUlVRc1RVRkJTU3gzUWtGQlUyeEhMRXRCUVZRc1EwRkJTaXhGUVVGeFFqdEJRVU51UW5kVUxGTkJRVTB6VHl4TFFVRkxjVUlzUTBGQlRDeERRVUZPTEVsQlFXdENjMDRzUzBGQlRUTlBMRXRCUVV0eFFpeERRVUZNTEVOQlFVNHNTMEZCYlVJc1JVRkJja003UVVGRFFYWkxMRmRCUVU5RExFMUJRVkFzUTBGQll6UllMRXRCUVUwelR5eExRVUZMY1VJc1EwRkJUQ3hEUVVGT0xFTkJRV1FzUlVGQkswSnNSeXhMUVVFdlFqdEJRVU5FTEVkQlNFUXNUVUZIVHp0QlFVTk1kMVFzVTBGQlRUTlBMRXRCUVV0eFFpeERRVUZNTEVOQlFVNHNTVUZCYTBKc1J5eExRVUZzUWp0QlFVTkVPenRCUVVWRUxGTkJRVTlYTEVkQlFWQTdRVUZEUkRzN1FVRkZSQ3hUUVVGVE1VUXNUVUZCVkN4RFFVRnBRakJFTEVkQlFXcENMRVZCUVhOQ2EwVXNTVUZCZEVJc1JVRkJORUk3UVVGRE1VSXNUVUZCU1RkRkxGRkJRVkZYTEVkQlFWbzdRVUZEUVN4UFFVRkxMRWxCUVVsMVJpeEpRVUZKTEVOQlFXSXNSVUZCWjBKQkxFbEJRVWx5UWl4TFFVRkxMMFVzVFVGQlRDeEhRVUZqTEVOQlFXeERMRVZCUVhGRGIwY3NSMEZCY2tNc1JVRkJNRU03UVVGRGVFTnNSeXhaUVVGUlFTeE5RVUZOTmtVc1MwRkJTM0ZDTEVOQlFVd3NRMEZCVGl4RFFVRlNPMEZCUTBRN08wRkJSVVFzVTBGQlQyeEhMRTFCUVUwMlJTeExRVUZMY1VJc1EwRkJUQ3hEUVVGT0xFTkJRVkE3UVVGRFJEczdRVUZGUkN4VFFVRlRhVTRzWTBGQlZDeERRVUY1UW5oVExFZEJRWHBDTEVWQlFUaENPRk1zVFVGQk9VSXNSVUZCYzBNN1FVRkJRU3cyUWtGRE0wSkRMRXRCUkRKQ08wRkJSV3hETDFnc1YwRkJUMmRaTEdOQlFWQXNRMEZCYzBKb1ZDeEhRVUYwUWl4RlFVRXlRaXRUTEV0QlFUTkNMRVZCUVd0RE8wRkJRMmhETDA0c1YwRkJTeXhsUVVGWk8wRkJRVVVzWlVGQlR6aE9MRTlCUVU5RExFdEJRVkFzUTBGQlVEdEJRVUZ6UWl4UFFVUlVPMEZCUldoRGFrOHNWMEZCU3l4bFFVRlpPMEZCUVVVc1kwRkJUU3hKUVVGSk5ra3NTMEZCU2l4RFFVRlZMSEZEUVVGeFEyOUdMRXRCUVhKRExFZEJRVFpETEVkQlFYWkVMRU5CUVU0N1FVRkJiVVU3UVVGR2RFUXNTMEZCYkVNN1FVRkdhME03TzBGQlEzQkRMRTlCUVVzc1NVRkJTVUVzUzBGQlZDeEpRVUZyUWtRc1RVRkJiRUlzUlVGQk1FSTdRVUZCUVN4VlFVRnFRa01zUzBGQmFVSTdRVUZMZWtJN1FVRkRSanM3UVVGRlJDeFRRVUZUYWxjc1QwRkJWQ3hEUVVGclFtdEVMRWRCUVd4Q0xFVkJRWFZDYjBjc1JVRkJka0lzUlVGQk1rSTdRVUZEZWtJc1QwRkJTeXhKUVVGSk4wY3NSMEZCVkN4SlFVRm5RbE1zUjBGQmFFSXNSVUZCY1VJN1FVRkRia0lzVVVGQlRXbFVMRTlCUVU5cVZDeEpRVUZKVkN4SFFVRktMRU5CUVdJN1FVRkRRVFpITEU5QlFVYzJUU3hKUVVGSUxFVkJRVk14VkN4SFFVRlVMRVZCUVdOVExFZEJRV1E3UVVGRFJEdEJRVU5HT3p0QlFVVkVMRk5CUVZOblFpeEhRVUZVTEVOQlFXRm9RaXhIUVVGaUxFVkJRV3RDYjBjc1JVRkJiRUlzUlVGQmMwSTdRVUZEY0VJc1RVRkJUVGhOTEZOQlFWTXNSVUZCWmp0QlFVTkJMRTlCUVVzc1NVRkJTVE5VTEVkQlFWUXNTVUZCWjBKVExFZEJRV2hDTEVWQlFYRkNPMEZCUTI1Q0xGRkJRVTFwVkN4UFFVRlBhbFFzU1VGQlNWUXNSMEZCU2l4RFFVRmlPMEZCUTBFeVZDeFhRVUZQTTFRc1IwRkJVQ3hKUVVGak5rY3NSMEZCUnpaTkxFbEJRVWdzUlVGQlV6RlVMRWRCUVZRc1JVRkJZMU1zUjBGQlpDeERRVUZrTzBGQlEwUTdRVUZEUkN4VFFVRlBhMVFzVFVGQlVEdEJRVU5FT3p0QlFVVkVMRk5CUVZOVUxFOUJRVlFzUTBGQmEwSjZVeXhIUVVGc1FpeEZRVUYxUW05SExFVkJRWFpDTEVWQlFUSkNPMEZCUTNwQ0xFMUJRVTA0VFN4VFFVRlRMRVZCUVdZN1FVRkRRU3hQUVVGTExFbEJRVWt6VkN4SFFVRlVMRWxCUVdkQ1V5eEhRVUZvUWl4RlFVRnhRanRCUVVOdVFpeFJRVUZOYVZRc1QwRkJUMnBVTEVsQlFVbFVMRWRCUVVvc1EwRkJZanRCUVVOQkxGRkJRVTAwVkN4VFFVRlRMMDBzUjBGQlJ6ZEhMRWRCUVVnc1JVRkJVVEJVTEVsQlFWSXNSVUZCWTJwVUxFZEJRV1FzUTBGQlpqdEJRVU5CYTFRc1YwRkJUME1zVFVGQlVDeEpRVUZwUWtZc1NVRkJha0k3UVVGRFJEdEJRVU5FTEZOQlFVOURMRTFCUVZBN1FVRkRSRHM3UVVGRlJDeFRRVUZUVGl4VlFVRlVMRU5CUVhGQ05WTXNSMEZCY2tJc1JVRkJNRUp2Unl4RlFVRXhRaXhGUVVFNFFqdEJRVU0xUWl4TlFVRk5PRTBzVTBGQlV5eEZRVUZtTzBGQlEwRXNUMEZCU3l4SlFVRkpNMVFzUjBGQlZDeEpRVUZuUWxNc1IwRkJhRUlzUlVGQmNVSTdRVUZEYmtJc1VVRkJUV2xVTEU5QlFVOXFWQ3hKUVVGSlZDeEhRVUZLTEVOQlFXSTdRVUZEUVN4UlFVRkxOa2NzUjBGQlJ6Wk5MRWxCUVVnc1JVRkJVekZVTEVkQlFWUXNSVUZCWTFNc1IwRkJaQ3hEUVVGTUxFVkJRVEJDTzBGQlEzaENhMVFzWVVGQlR6TlVMRWRCUVZBc1NVRkJZekJVTEVsQlFXUTdRVUZEUVN4aFFVRlBhbFFzU1VGQlNWUXNSMEZCU2l4RFFVRlFPMEZCUTBRN1FVRkRSanRCUVVORUxGTkJRVTh5VkN4TlFVRlFPMEZCUTBRN08wRkJSVVFzVTBGQlUxQXNUMEZCVkN4RFFVRnJRak5UTEVkQlFXeENMRVZCUVhWQ2IwY3NSVUZCZGtJc1JVRkJNa0k3UVVGRGVrSXNUVUZCVFRoTkxGTkJRVk1zUlVGQlpqdEJRVU5CTEU5QlFVc3NTVUZCU1ROVUxFZEJRVlFzU1VGQlowSlRMRWRCUVdoQ0xFVkJRWEZDTzBGQlEyNUNMRkZCUVUxcFZDeFBRVUZQYWxRc1NVRkJTVlFzUjBGQlNpeERRVUZpTzBGQlEwRXNVVUZCVFcxS0xFMUJRVTEwUXl4SFFVRkhOMGNzUjBGQlNDeEZRVUZSTUZRc1NVRkJVaXhGUVVGamFsUXNSMEZCWkN4RFFVRmFPMEZCUTBGclZDeFhRVUZSZUVzc1NVRkJTU3hEUVVGS0xFdEJRVlZCTEVsQlFVbHVTaXhIUVVGa0xFbEJRWEZDYlVvc1NVRkJTVGRLTEVOQlFXcERMRWxCUVhWRE5rb3NTVUZCU1N4RFFVRktMRXRCUVZWQkxFbEJRVWtzVDBGQlNpeERRVUZXTEVsQlFUQkNRU3hKUVVGSkxFZEJRVW9zUTBGQmFrVTdRVUZEUkR0QlFVTkVMRk5CUVU5M1N5eE5RVUZRTzBGQlEwUTdPMEZCUlVRc1UwRkJVelZOTEUxQlFWUXNRMEZCYVVKMFJ5eEhRVUZxUWl4RlFVRnpRbTlITEVWQlFYUkNMRVZCUVRCQ08wRkJRM2hDTEUxQlFVMDRUU3hUUVVGVExFVkJRV1k3UVVGRFFTeFBRVUZMTEVsQlFVa3pWQ3hIUVVGVUxFbEJRV2RDVXl4SFFVRm9RaXhGUVVGeFFqdEJRVU51UWl4UlFVRk5hVlFzVDBGQlQycFVMRWxCUVVsVUxFZEJRVW9zUTBGQllqdEJRVU5CTEZGQlFVczJSeXhIUVVGSE5rMHNTVUZCU0N4RlFVRlRNVlFzUjBGQlZDeEZRVUZqVXl4SFFVRmtMRU5CUVV3c1JVRkJNRUk3UVVGRGVFSnJWQ3hoUVVGUE0xUXNSMEZCVUN4SlFVRmpNRlFzU1VGQlpEdEJRVU5FTzBGQlEwWTdRVUZEUkN4VFFVRlBReXhOUVVGUU8wRkJRMFE3TzBGQlJVUXNVMEZCVTFJc1VVRkJWQ3hEUVVGdFFuWktMRWRCUVc1Q0xFVkJRWGRDYVVzc1IwRkJlRUlzUlVGQk5rSTdRVUZETTBJc1RVRkJUVVlzVTBGQlV5eEZRVUZtTzBGQlEwRXZTaXhOUVVGSmNrMHNUMEZCU2l4RFFVRlpMRlZCUVVOeFNTeERRVUZFTEVWQlFVODdRVUZEYWtJclRpeFhRVUZQTDA0c1EwRkJVQ3hKUVVGWkxEQkNRVUZYYVU4c1IwRkJXQ3hKUVVGclFrRXNTVUZCU1dwUExFTkJRVW9zUTBGQmJFSXNSMEZCTWtKcFR5eEhRVUYyUXp0QlFVTkVMRWRCUmtRN1FVRkhRU3hUUVVGUFJpeE5RVUZRTzBGQlEwUXNRenM3T3pzN096czdPenM3T3pzN1FVTm9Ta1E3TzBGQlEwRTdPMEZCUlVGSExFOUJRVTlETEU5QlFWQXNSMEZCYVVJN1FVRkRabXhpTERSQ1FVUmxPMEZCUldacFREdEJRVVpsTEVOQlFXcENMRU1pTENKbWFXeGxJam9pWTI5MWJHa3Vhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJb1puVnVZM1JwYjI0Z2QyVmljR0ZqYTFWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRvY205dmRDd2dabUZqZEc5eWVTa2dlMXh1WEhScFppaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY2dKaVlnZEhsd1pXOW1JRzF2WkhWc1pTQTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1ZV04wYjNKNUtDazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1JsWm1sdVpTQTlQVDBnSjJaMWJtTjBhVzl1SnlBbUppQmtaV1pwYm1VdVlXMWtLVnh1WEhSY2RHUmxabWx1WlNoYlhTd2dabUZqZEc5eWVTazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuS1Z4dVhIUmNkR1Y0Y0c5eWRITmJYQ0pEYjNWc2FWd2lYU0E5SUdaaFkzUnZjbmtvS1R0Y2JseDBaV3h6WlZ4dVhIUmNkSEp2YjNSYlhDSkRiM1ZzYVZ3aVhTQTlJR1poWTNSdmNua29LVHRjYm4wcEtIUm9hWE1zSUdaMWJtTjBhVzl1S0NrZ2UxeHVjbVYwZFhKdUlDSXNJaUJjZEM4dklGUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkSFpoY2lCcGJuTjBZV3hzWldSTmIyUjFiR1Z6SUQwZ2UzMDdYRzVjYmlCY2RDOHZJRlJvWlNCeVpYRjFhWEpsSUdaMWJtTjBhVzl1WEc0Z1hIUm1kVzVqZEdsdmJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRzF2WkhWc1pVbGtLU0I3WEc1Y2JpQmNkRngwTHk4Z1EyaGxZMnNnYVdZZ2JXOWtkV3hsSUdseklHbHVJR05oWTJobFhHNGdYSFJjZEdsbUtHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZEtTQjdYRzRnWEhSY2RGeDBjbVYwZFhKdUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtVjRjRzl5ZEhNN1hHNGdYSFJjZEgxY2JpQmNkRngwTHk4Z1EzSmxZWFJsSUdFZ2JtVjNJRzF2WkhWc1pTQW9ZVzVrSUhCMWRDQnBkQ0JwYm5SdklIUm9aU0JqWVdOb1pTbGNiaUJjZEZ4MGRtRnlJRzF2WkhWc1pTQTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRJRDBnZTF4dUlGeDBYSFJjZEdrNklHMXZaSFZzWlVsa0xGeHVJRngwWEhSY2RHdzZJR1poYkhObExGeHVJRngwWEhSY2RHVjRjRzl5ZEhNNklIdDlYRzRnWEhSY2RIMDdYRzVjYmlCY2RGeDBMeThnUlhobFkzVjBaU0IwYUdVZ2JXOWtkV3hsSUdaMWJtTjBhVzl1WEc0Z1hIUmNkRzF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbU5oYkd3b2JXOWtkV3hsTG1WNGNHOXlkSE1zSUcxdlpIVnNaU3dnYlc5a2RXeGxMbVY0Y0c5eWRITXNJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThwTzF4dVhHNGdYSFJjZEM4dklFWnNZV2NnZEdobElHMXZaSFZzWlNCaGN5QnNiMkZrWldSY2JpQmNkRngwYlc5a2RXeGxMbXdnUFNCMGNuVmxPMXh1WEc0Z1hIUmNkQzh2SUZKbGRIVnliaUIwYUdVZ1pYaHdiM0owY3lCdlppQjBhR1VnYlc5a2RXeGxYRzRnWEhSY2RISmxkSFZ5YmlCdGIyUjFiR1V1Wlhod2IzSjBjenRjYmlCY2RIMWNibHh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaWE1nYjJKcVpXTjBJQ2hmWDNkbFluQmhZMnRmYlc5a2RXeGxjMTlmS1Z4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV0SUQwZ2JXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVZeUE5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdSbFptbHVaU0JuWlhSMFpYSWdablZ1WTNScGIyNGdabTl5SUdoaGNtMXZibmtnWlhod2IzSjBjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtJRDBnWm5WdVkzUnBiMjRvWlhod2IzSjBjeXdnYm1GdFpTd2daMlYwZEdWeUtTQjdYRzRnWEhSY2RHbG1LQ0ZmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04b1pYaHdiM0owY3l3Z2JtRnRaU2twSUh0Y2JpQmNkRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dibUZ0WlN3Z2V5QmxiblZ0WlhKaFlteGxPaUIwY25WbExDQm5aWFE2SUdkbGRIUmxjaUI5S1R0Y2JpQmNkRngwZlZ4dUlGeDBmVHRjYmx4dUlGeDBMeThnWkdWbWFXNWxJRjlmWlhOTmIyUjFiR1VnYjI0Z1pYaHdiM0owYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV5SUQwZ1puVnVZM1JwYjI0b1pYaHdiM0owY3lrZ2UxeHVJRngwWEhScFppaDBlWEJsYjJZZ1UzbHRZbTlzSUNFOVBTQW5kVzVrWldacGJtVmtKeUFtSmlCVGVXMWliMnd1ZEc5VGRISnBibWRVWVdjcElIdGNiaUJjZEZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnVTNsdFltOXNMblJ2VTNSeWFXNW5WR0ZuTENCN0lIWmhiSFZsT2lBblRXOWtkV3hsSnlCOUtUdGNiaUJjZEZ4MGZWeHVJRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dKMTlmWlhOTmIyUjFiR1VuTENCN0lIWmhiSFZsT2lCMGNuVmxJSDBwTzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnWTNKbFlYUmxJR0VnWm1GclpTQnVZVzFsYzNCaFkyVWdiMkpxWldOMFhHNGdYSFF2THlCdGIyUmxJQ1lnTVRvZ2RtRnNkV1VnYVhNZ1lTQnRiMlIxYkdVZ2FXUXNJSEpsY1hWcGNtVWdhWFJjYmlCY2RDOHZJRzF2WkdVZ0ppQXlPaUJ0WlhKblpTQmhiR3dnY0hKdmNHVnlkR2xsY3lCdlppQjJZV3gxWlNCcGJuUnZJSFJvWlNCdWMxeHVJRngwTHk4Z2JXOWtaU0FtSURRNklISmxkSFZ5YmlCMllXeDFaU0IzYUdWdUlHRnNjbVZoWkhrZ2JuTWdiMkpxWldOMFhHNGdYSFF2THlCdGIyUmxJQ1lnT0h3eE9pQmlaV2hoZG1VZ2JHbHJaU0J5WlhGMWFYSmxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuUWdQU0JtZFc1amRHbHZiaWgyWVd4MVpTd2diVzlrWlNrZ2UxeHVJRngwWEhScFppaHRiMlJsSUNZZ01Ta2dkbUZzZFdVZ1BTQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLSFpoYkhWbEtUdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlEZ3BJSEpsZEhWeWJpQjJZV3gxWlR0Y2JpQmNkRngwYVdZb0tHMXZaR1VnSmlBMEtTQW1KaUIwZVhCbGIyWWdkbUZzZFdVZ1BUMDlJQ2R2WW1wbFkzUW5JQ1ltSUhaaGJIVmxJQ1ltSUhaaGJIVmxMbDlmWlhOTmIyUjFiR1VwSUhKbGRIVnliaUIyWVd4MVpUdGNiaUJjZEZ4MGRtRnlJRzV6SUQwZ1QySnFaV04wTG1OeVpXRjBaU2h1ZFd4c0tUdGNiaUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXlLRzV6S1R0Y2JpQmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHNXpMQ0FuWkdWbVlYVnNkQ2NzSUhzZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN3Z2RtRnNkV1U2SUhaaGJIVmxJSDBwTzF4dUlGeDBYSFJwWmlodGIyUmxJQ1lnTWlBbUppQjBlWEJsYjJZZ2RtRnNkV1VnSVQwZ0ozTjBjbWx1WnljcElHWnZjaWgyWVhJZ2EyVjVJR2x1SUhaaGJIVmxLU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1Rb2JuTXNJR3RsZVN3Z1puVnVZM1JwYjI0b2EyVjVLU0I3SUhKbGRIVnliaUIyWVd4MVpWdHJaWGxkT3lCOUxtSnBibVFvYm5Wc2JDd2dhMlY1S1NrN1hHNGdYSFJjZEhKbGRIVnliaUJ1Y3p0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdkbGRFUmxabUYxYkhSRmVIQnZjblFnWm5WdVkzUnBiMjRnWm05eUlHTnZiWEJoZEdsaWFXeHBkSGtnZDJsMGFDQnViMjR0YUdGeWJXOXVlU0J0YjJSMWJHVnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtNGdQU0JtZFc1amRHbHZiaWh0YjJSMWJHVXBJSHRjYmlCY2RGeDBkbUZ5SUdkbGRIUmxjaUE5SUcxdlpIVnNaU0FtSmlCdGIyUjFiR1V1WDE5bGMwMXZaSFZzWlNBL1hHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBSR1ZtWVhWc2RDZ3BJSHNnY21WMGRYSnVJRzF2WkhWc1pWc25aR1ZtWVhWc2RDZGRPeUI5SURwY2JpQmNkRngwWEhSbWRXNWpkR2x2YmlCblpYUk5iMlIxYkdWRmVIQnZjblJ6S0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsT3lCOU8xeHVJRngwWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUW9aMlYwZEdWeUxDQW5ZU2NzSUdkbGRIUmxjaWs3WEc0Z1hIUmNkSEpsZEhWeWJpQm5aWFIwWlhJN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd4Y2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlBOUlHWjFibU4wYVc5dUtHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcElIc2djbVYwZFhKdUlFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaHZZbXBsWTNRc0lIQnliM0JsY25SNUtUc2dmVHRjYmx4dUlGeDBMeThnWDE5M1pXSndZV05yWDNCMVlteHBZMTl3WVhSb1gxOWNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNDQTlJRndpWENJN1hHNWNibHh1SUZ4MEx5OGdURzloWkNCbGJuUnllU0J0YjJSMWJHVWdZVzVrSUhKbGRIVnliaUJsZUhCdmNuUnpYRzRnWEhSeVpYUjFjbTRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuTWdQU0JjSWk0dmMzSmpMMjFoYVc0dWFuTmNJaWs3WEc0aUxDSnBiWEJ2Y25RZ1RFbENYMEZVVkZJZ1puSnZiU0FuTGk5bmJHOWlZV3h6TDJGMGRISnBZblYwWlhNbk8xeHlYRzVwYlhCdmNuUWdVa1VnWm5KdmJTQW5MaTluYkc5aVlXeHpMM0psWjJWNGNDYzdYSEpjYmx4eVhHNXBiWEJ2Y25RZ2UxeHlYRzRnSUdOc2IyNWxTRlJOVEUxaGNtdDFjQ3hjY2x4dUlDQjNZV3hyVG05a1pYTXNYSEpjYm4wZ1puSnZiU0FuTGk5b1pXeHdaWEp6TDJSdmJTYzdYSEpjYmx4eVhHNXBiWEJ2Y25RZ2V5QnpaWFFzSUdadmNrVmhZMmdzSUcxaGNDd2diV0Z3UzJWNWN5d2dkRzlQWW1wbFkzUWdmU0JtY205dElDY3VMMmhsYkhCbGNuTXZiMkpxWldOMEp6dGNjbHh1WEhKY2JtbHRjRzl5ZENCamIzQjVJR1p5YjIwZ0p5NHZhR1ZzY0dWeWN5OWpiM0I1Snp0Y2NseHVYSEpjYm1sdGNHOXlkQ0I3WEhKY2JpQWdhWE5CY25KaGVTeGNjbHh1SUNCcGMwWjFibU4wYVc5dUxGeHlYRzRnSUdselQySnFaV04wTEZ4eVhHNGdJR2x6Ulcxd2RIa3NYSEpjYm4wZ1puSnZiU0FuTGk5b1pXeHdaWEp6TDJOb1pXTnJaWEp6Snp0Y2NseHVYSEpjYm1sdGNHOXlkQ0I3WEhKY2JpQWdkRzlEWVcxbGJFTmhjMlVzWEhKY2JpQWdaMlYwVTJodmNuUk9ZVzFsTEZ4eVhHNTlJR1p5YjIwZ0p5NHZhR1ZzY0dWeWN5OWpiMjF0YjI0bk8xeHlYRzVjY2x4dWFXMXdiM0owSUh0Y2NseHVJQ0JuWlhSUGJteDVWbUZzZFdWekxGeHlYRzU5SUdaeWIyMGdKeTR2VTNSaGRHVW5PMXh5WEc1Y2NseHVhVzF3YjNKMElIdGNjbHh1SUNCamNtVmhkR1ZCYm1SQmNIQmxibVJUZEhsc1pYTXNYSEpjYm4wZ1puSnZiU0FuTGk5V2FXVjNKenRjY2x4dVhISmNibWx0Y0c5eWRDQkRiMjF3YjI1bGJuUlNaV1JsWm1sdVpVVnljbTl5SUdaeWIyMGdKeTR2WlhKeWIzSnpMME52YlhCdmJtVnVkRkpsWkdWbWFXNWxSWEp5YjNJbk8xeHlYRzVwYlhCdmNuUWdVMk52Y0dWT1lXMWxRMjlzYkdsemFXOXVSWEp5YjNJZ1puSnZiU0FuTGk5bGNuSnZjbk12VTJOdmNHVk9ZVzFsUTI5c2JHbHphVzl1UlhKeWIzSW5PMXh5WEc1Y2NseHVYSEpjYm1OdmJuTjBJRlpCVEZWRlgxUlpVRVZUSUQwZ1d5ZHpkSGxzWlNjc0lDZGpiR0Z6Y3ljc0lDZDJZV3gxWlNjc0lDZGhkSFJ5Y3ljc0lDZG9kRzFzSjEwN1hISmNibU52Ym5OMElGSkZVMFZTVmtWRVgwaFBUMHRUWDA1QlRVVlRJRDBnV3lkdGIzVnVkQ2NzSUNkMWNHUmhkR1VuTENBbmNtVnRiM1psSjEwN1hISmNibU52Ym5OMElFUkZSa0ZWVEZSZlNFOVBTMU1nUFNCMGIwOWlhbVZqZENoU1JWTkZVbFpGUkY5SVQwOUxVMTlPUVUxRlV5d2dLQ2tnUFQ0Z0tDa2dQVDRnZTMwcE8xeHlYRzVqYjI1emRDQlNSVk5GVWxaRlJGOUNTVTVFU1U1SFgwNUJUVVZUSUQwZ1ZrRk1WVVZmVkZsUVJWTXVZMjl1WTJGMEtGc25aWFpsYm5Sekp5d2dKMmh2YjJ0ekp5d2dKMnhwYzNSSmRHVnRKeXdnVEVsQ1gwRlVWRkl1VTBWTVJsMHBPMXh5WEc1Y2NseHVaWGh3YjNKMElIdGNjbHh1SUNCa1pXWnBibVVzWEhKY2JpQWdaMlYwUTI5dGNHOXVaVzUwVDNCMGN5eGNjbHh1SUNCemFHOXlkR1Z1UW1sdVpHbHVaMGxrTEZ4eVhHNGdJR2x6UTI5dGNHOXVaVzUwTEZ4eVhHNGdJRlpCVEZWRlgxUlpVRVZUTEZ4eVhHNGdJRkpGVTBWU1ZrVkVYMEpKVGtSSlRrZGZUa0ZOUlZNc1hISmNibjA3WEhKY2JseHlYRzVzWlhRZ1EwOU5VRTlPUlU1VVgwTlBWVTVVUlZJZ1BTQXdPMXh5WEc1amIyNXpkQ0JEVDAxUVQwNUZUbFJUSUQwZ2UzMDdYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQmtaV1pwYm1VZ0tHNWhiV1VzSUcxaGNtdDFjQ3dnWW1sdVpHbHVaM01zSUhOMGVXeGxjeWtnZTF4eVhHNGdJR052Ym5OMElHRnlaM01nUFNCcGMwOWlhbVZqZENodVlXMWxLU0EvSUc1aGJXVWdPaUI3SUc1aGJXVXNJRzFoY210MWNDd2dZbWx1WkdsdVozTXNJSE4wZVd4bGN5QjlPMXh5WEc1Y2NseHVJQ0J1WVcxbElEMGdkRzlEWVcxbGJFTmhjMlVvWVhKbmN5NXVZVzFsS1R0Y2NseHVYSEpjYmlBZ2FXWWdLRU5QVFZCUFRrVk9WRk5iYm1GdFpWMHBJSHRjY2x4dUlDQWdJSFJvY205M0lHNWxkeUJEYjIxd2IyNWxiblJTWldSbFptbHVaVVZ5Y205eUtHNWhiV1VwTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnWTI5dWMzUWdZMjl0Y0c5dVpXNTBTRlJOVEUxaGNtdDFjQ0E5SUdOc2IyNWxTRlJOVEUxaGNtdDFjQ2hoY21kekxtMWhjbXQxY0NrN1hISmNiaUFnWTI5dGNHOXVaVzUwU0ZSTlRFMWhjbXQxY0M1amJHRnpjMHhwYzNRdVlXUmtLRzVoYldVcE8xeHlYRzVjY2x4dUlDQkRUMDFRVDA1RlRsUmZRMDlWVGxSRlVpQTlJREE3WEhKY2JpQWdZMjl1YzNRZ1kyOXRjRzl1Wlc1MElEMGdlMXh5WEc0Z0lDQWdibUZ0WlN4Y2NseHVJQ0FnSUhOMFlYUmxPaUI3SUZ0TVNVSmZRVlJVVWk1VFJVeEdYVG9nZTMwZ2ZTeGNjbHh1SUNBZ0lITjBZWFJsU1dRNklHNWhiV1VzWEhKY2JpQWdJQ0J6ZEdGMFpWQmhkR2c2SUZ0dVlXMWxYU3hjY2x4dUlDQWdJSE4wWVhSbFRtRnRaWE02SUh0OUxGeHlYRzRnSUNBZ2JXRnlhM1Z3T2lCamIyMXdiMjVsYm5SSVZFMU1UV0Z5YTNWd0xGeHlYRzRnSUNBZ1pYWmhiSFZoZEdVNklIdDlMRnh5WEc0Z0lDQWdiR2x1YTNNNklIdDlMRnh5WEc0Z0lDQWdhWE5EYjIxd2IyNWxiblE2SUhSeWRXVXNYSEpjYmlBZ0lDQnZkWFJsY2s1aGJXVnpPaUI3ZlN4Y2NseHVJQ0FnSUY5c2FXNXJjem9nZTMwc1hISmNiaUFnZlR0Y2NseHVYSEpjYmlBZ1oyRjBhR1Z5UW1sdVpHbHVaM05HY205dFRXRnlhM1Z3S0dOdmJYQnZibVZ1ZEVoVVRVeE5ZWEpyZFhBc0lHTnZiWEJ2Ym1WdWRDazdYSEpjYmx4eVhHNGdJR052Ym5OMElHNXZjbTFoYkdsNlpXUlBjSFJwYjI1eklEMGdibTl5YldGc2FYcGxWWE5sY2s5d2RHbHZibk1vWVhKbmN5NWlhVzVrYVc1bmN5d2dleUJ6ZEdGMFpUb2dlMzBnZlNrN1hISmNiaUFnWTI5d2VTaGpiMjF3YjI1bGJuUXNJRzV2Y20xaGJHbDZaV1JQY0hScGIyNXpLVHRjY2x4dVhISmNiaUFnY0hKbGNHRnlaVUpwYm1ScGJtZHpJQ2hqYjIxd2IyNWxiblFzSUdOdmJYQnZibVZ1ZEM1emRHRjBaVWxrTENCN0lITjBZWFJsVUdGMGFEb2dXMTBzSUd4cGJtdHpPaUI3ZlN3Z2MzUmhkR1ZPWVcxbGN6b2dZMjl0Y0c5dVpXNTBMbk4wWVhSbFRtRnRaWE1nZlNrN1hISmNibHh5WEc0Z0lHTnlaV0YwWlVGdVpFRndjR1Z1WkZOMGVXeGxjeWdnY0hKbGNHRnlaVk4wZVd4bGN5aGhjbWR6TG5OMGVXeGxjeXdnWTI5dGNHOXVaVzUwS1NBcE8xeHlYRzVjY2x4dUlDQnlaWFIxY200Z1EwOU5VRTlPUlU1VVUxdHVZVzFsWFNBOUlHTnZiWEJ2Ym1WdWREdGNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnWjJGMGFHVnlRbWx1WkdsdVozTkdjbTl0VFdGeWEzVndJQ2hqYjIxd2IyNWxiblJJVkUxTVRXRnlhM1Z3TENCamIyMXdiMjVsYm5RcElIdGNjbHh1SUNCM1lXeHJUbTlrWlhNb1kyOXRjRzl1Wlc1MFNGUk5URTFoY210MWNDd2dLRWhVVFV4T2IyUmxLU0E5UGlCN1hISmNiaUFnSUNCamIyNXpkQ0JpYVc1a2FXNW5UM0IwY3lBOUlHRnVZV3g1ZW1WQ2FXNWthVzVuS0VoVVRVeE9iMlJsS1R0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSVdKcGJtUnBibWRQY0hSektTQjdYSEpjYmlBZ0lDQWdJSEpsZEhWeWJqdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JqYjI1emRDQmlhVzVrYVc1bklEMGdZM0psWVhSbFFtbHVaR2x1WnloaWFXNWthVzVuVDNCMGN5NXVZVzFsTENCamIyMXdiMjVsYm5Rc0lFaFVUVXhPYjJSbEtUdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb1ltbHVaR2x1WjA5d2RITXVhWE5EYjIxd2IyNWxiblFwSUh0Y2NseHVJQ0FnSUNBZ2MyVjBRMjl0Y0c5dVpXNTBLR0pwYm1ScGJtY3NJR0pwYm1ScGJtZFBjSFJ6S1R0Y2NseHVJQ0FnSUNBZ1NGUk5URTV2WkdVdVkyeGhjM05NYVhOMExtRmtaQ2hNU1VKZlFWUlVVaTVRVWtWR1NWZ2dLeUJpYVc1a2FXNW5MbWxrS1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQmpiMjF3YjI1bGJuUXVjM1JoZEdWYlltbHVaR2x1Wnk1dVlXMWxYU0E5SUdKcGJtUnBibWM3WEhKY2JpQWdJQ0JpYVc1a2FXNW5MbTFoY210MWNDNWpiR0Z6YzB4cGMzUXVZV1JrS0V4SlFsOUJWRlJTTGxCU1JVWkpXQ0FySUdKcGJtUnBibWN1YVdRc0lHTnZiWEJ2Ym1WdWRDNXVZVzFsSUNzZ0p5MG5JQ3NnWW1sdVpHbHVaeTV1WVcxbEtUdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb1ltbHVaR2x1WjA5d2RITXVhWE5NYVhOMEtTQjdYSEpjYmlBZ0lDQWdJR052Ym5OMElHbDBaVzFPYjJSbElEMGdTRlJOVEU1dlpHVXVZMmhwYkdSeVpXNWJNRjA3WEhKY2JpQWdJQ0FnSUcxdlpHbG1lVlJ2VEdsemRFSnBibVJwYm1jb1ltbHVaR2x1Wnl3Z2FYUmxiVTV2WkdVcE8xeHlYRzVjY2x4dUlDQWdJQ0FnYVdZZ0tHbHpRMjl0Y0c5dVpXNTBLR2wwWlcxT2IyUmxLU2tnZTF4eVhHNGdJQ0FnSUNBZ0lITmxkRU52YlhCdmJtVnVkQ2hpYVc1a2FXNW5MbXhwYzNSSmRHVnRMQ0JuWlhSRGIyMXdiMjVsYm5SUGNIUnpLR2wwWlcxT2IyUmxLU2s3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUMweE8xeHlYRzRnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNCbllYUm9aWEpDYVc1a2FXNW5jMFp5YjIxTllYSnJkWEFvYVhSbGJVNXZaR1VzSUdKcGJtUnBibWN1YkdsemRFbDBaVzBwTzF4eVhHNGdJQ0FnSUNCeVpYUjFjbTRnTFRFN1hISmNiaUFnSUNCOVhISmNiaUFnZlNrN1hISmNibHh5WEc0Z0lISmxkSFZ5YmlCamIyMXdiMjVsYm5RN1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJSE5sZEVOdmJYQnZibVZ1ZENBb1kyOXRjRzl1Wlc1MFFtbHVaR2x1Wnl3Z2MzVmlRMjl0Y0c5dVpXNTBUM0IwY3lrZ2UxeHlYRzRnSUdOdmJuTjBJSE4wWVhSbFRtRnRaWE1nUFNCUFltcGxZM1F1WVhOemFXZHVLR052YlhCdmJtVnVkRUpwYm1ScGJtY3VjM1JoZEdWT1lXMWxjeXdnYzNWaVEyOXRjRzl1Wlc1MFQzQjBjeTVqYjIxd2IyNWxiblF1YzNSaGRHVk9ZVzFsY3lrN1hISmNiaUFnYkdWMElITjBZWFJsU1dRZ1BTQnpkV0pEYjIxd2IyNWxiblJQY0hSekxtTnZiWEJ2Ym1WdWRDNXVZVzFsSUNzZ0ozZ25JQ3NnUTA5TlVFOU9SVTVVWDBOUFZVNVVSVklyS3p0Y2NseHVYSEpjYmlBZ2FXWWdLSE4xWWtOdmJYQnZibVZ1ZEU5d2RITXVjM1JoZEdWT1lXMWxLU0I3WEhKY2JpQWdJQ0JwWmlBb2MzUmhkR1ZPWVcxbGMxdHpkV0pEYjIxd2IyNWxiblJQY0hSekxuTjBZWFJsVG1GdFpWMHBJSHRjY2x4dUlDQWdJQ0FnZEdoeWIzY2dibVYzSUZOamIzQmxUbUZ0WlVOdmJHeHBjMmx2YmtWeWNtOXlLSE4xWWtOdmJYQnZibVZ1ZEU5d2RITXVjM1JoZEdWT1lXMWxLVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCemRHRjBaVWxrSUQwZ2MzVmlRMjl0Y0c5dVpXNTBUM0IwY3k1emRHRjBaVTVoYldVN1hISmNiaUFnSUNCamIyMXdiMjVsYm5SQ2FXNWthVzVuTG5OMFlYUmxUbUZ0WlhOYmMzUmhkR1ZKWkYwZ1BTQjBjblZsTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnWTI5d2VTaGpiMjF3YjI1bGJuUkNhVzVrYVc1bkxDQnpkV0pEYjIxd2IyNWxiblJQY0hSekxtTnZiWEJ2Ym1WdWRDazdYSEpjYmx4eVhHNGdJSEpsZEhWeWJpQlBZbXBsWTNRdVlYTnphV2R1S0NCamIyMXdiMjVsYm5SQ2FXNWthVzVuTENCN1hISmNiaUFnSUNCcFpEb2djM1JoZEdWSlpDeGNjbHh1SUNBZ0lITjBZWFJsU1dRc1hISmNiaUFnSUNCdVlXMWxPaUJ6ZEdGMFpVbGtMRnh5WEc0Z0lDQWdjM1JoZEdWT1lXMWxPaUJ6ZFdKRGIyMXdiMjVsYm5SUGNIUnpMbk4wWVhSbFRtRnRaU3hjY2x4dUlDQWdJSE4wWVhSbFVHRjBhRG9nWTI5dGNHOXVaVzUwUW1sdVpHbHVaeTV6ZEdGMFpWQmhkR2d1WTI5dVkyRjBLSE4wWVhSbFNXUXBMRnh5WEc0Z0lDQWdiV0Z5YTNWd09pQnpkV0pEYjIxd2IyNWxiblJQY0hSekxtTnZiWEJ2Ym1WdWRDNXRZWEpyZFhBdVkyeHZibVZPYjJSbEtIUnlkV1VwTEZ4eVhHNGdJQ0FnYVhORGIyMXdiMjVsYm5RNklIUnlkV1VzWEhKY2JpQWdJQ0J6ZEdGMFpVNWhiV1Z6TEZ4eVhHNGdJQ0FnWDJ4cGJtdHpPaUJQWW1wbFkzUXVZWE56YVdkdUtIdDlMQ0J6ZFdKRGIyMXdiMjVsYm5SUGNIUnpMbXhwYm10ektTeGNjbHh1SUNBZ0lHOTFkR1Z5VG1GdFpYTTZJRTlpYW1WamRDNWhjM05wWjI0b2UzMHNJSE4xWWtOdmJYQnZibVZ1ZEU5d2RITXVjbVYyVEdsdWEzTXBMRnh5WEc0Z0lIMHBPMXh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCd2NtVndZWEpsUW1sdVpHbHVaM01nS0dOdmJYQnZibVZ1ZEN3Z1kzVnljbVZ1ZEZOMFlYUmxTV1FzSUhCaGNtVnVkRU52YlhCdmJtVnVkQ2tnZTF4eVhHNGdJR052Ym5OMElHTnZiWEJ2Ym1WdWRGZHlZWEJ3WlhJZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0Nka2FYWW5LVHRjY2x4dUlDQmpiMjF3YjI1bGJuUXViV0Z5YTNWd0xuTmxkRUYwZEhKcFluVjBaU2hNU1VKZlFWUlVVaTVDU1U1RVNVNUhYMGxFTENCemFHOXlkR1Z1UW1sdVpHbHVaMGxrS0NCamRYSnlaVzUwVTNSaGRHVkpaQ0FySUV4SlFsOUJWRlJTTGxOVVFWUkZYMFJGVEVsTlNWUkZVaUFySUV4SlFsOUJWRlJTTGxORlRFWWdLU2s3WEhKY2JpQWdZMjl0Y0c5dVpXNTBWM0poY0hCbGNpNWhjSEJsYm1SRGFHbHNaQ2hqYjIxd2IyNWxiblF1YldGeWEzVndLVHRjY2x4dUlDQmpiMjF3YjI1bGJuUXVjM1JoZEdWUVlYUm9JRDBnY0dGeVpXNTBRMjl0Y0c5dVpXNTBMbk4wWVhSbFVHRjBhQzVqYjI1allYUW9ZMjl0Y0c5dVpXNTBMbk4wWVhSbFNXUXBPMXh5WEc0Z0lHTnZiWEJ2Ym1WdWRDNXpkR0YwWlU1aGJXVnpJRDBnY0dGeVpXNTBRMjl0Y0c5dVpXNTBMbk4wWVhSbFRtRnRaWE03WEhKY2JseHlYRzRnSUdOdmJuTjBJSE4xWWtOdmJYQnZibVZ1ZEhNZ1BTQmJYVHRjY2x4dVhISmNiaUFnWm05eVJXRmphQ2hqYjIxd2IyNWxiblF1YzNSaGRHVXNJQ2hpYVc1a2FXNW5MQ0JpYVc1a2FXNW5UbUZ0WlNrZ1BUNGdlMXh5WEc0Z0lDQWdZMjl1YzNRZ2IyeGtRbWx1WkdsdVowbGtJRDBnWW1sdVpHbHVaeTVwWkR0Y2NseHVJQ0FnSUdOdmJuTjBJRzVsZDBKcGJtUnBibWRKWkNBOUlHTjFjbkpsYm5SVGRHRjBaVWxrSUNzZ1RFbENYMEZVVkZJdVUxUkJWRVZmUkVWTVNVMUpWRVZTSUNzZ1ltbHVaR2x1WjA1aGJXVTdYSEpjYmlBZ0lDQmpiMjV6ZENCemFHOXlkRWxrSUQwZ2MyaHZjblJsYmtKcGJtUnBibWRKWkNodVpYZENhVzVrYVc1blNXUXBPMXh5WEc1Y2NseHVJQ0FnSUdsbUlDaGlhVzVrYVc1bkxtMWhjbXQxY0NrZ2UxeHlYRzRnSUNBZ0lDQmpiMjV6ZENCaWFXNWthVzVuVG05a1pTQTlJR052YlhCdmJtVnVkRmR5WVhCd1pYSXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxpY2dLeUJNU1VKZlFWUlVVaTVRVWtWR1NWZ2dLeUJ2YkdSQ2FXNWthVzVuU1dRcE8xeHlYRzRnSUNBZ0lDQmlhVzVrYVc1blRtOWtaUzV6WlhSQmRIUnlhV0oxZEdVb1RFbENYMEZVVkZJdVFrbE9SRWxPUjE5SlJDd2djMmh2Y25SSlpDazdYSEpjYmlBZ0lDQWdJR0pwYm1ScGJtZE9iMlJsTG1Oc1lYTnpUR2x6ZEM1eVpXMXZkbVVvVEVsQ1gwRlVWRkl1VUZKRlJrbFlJQ3NnYjJ4a1FtbHVaR2x1WjBsa0tUdGNjbHh1SUNBZ0lDQWdZbWx1WkdsdVowNXZaR1V1WTJ4aGMzTk1hWE4wTG1Ga1pDaE1TVUpmUVZSVVVpNVFVa1ZHU1ZnZ0t5QnVaWGRDYVc1a2FXNW5TV1FwTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lFOWlhbVZqZEM1aGMzTnBaMjRvWW1sdVpHbHVaeXdnZTF4eVhHNGdJQ0FnSUNCemRHRjBaVkJoZEdnNklHTnZiWEJ2Ym1WdWRDNXpkR0YwWlZCaGRHZ3VjMnhwWTJVb0tTeGNjbHh1SUNBZ0lDQWdhRzl2YTNNNklFOWlhbVZqZEM1aGMzTnBaMjRvZTMwc0lFUkZSa0ZWVEZSZlNFOVBTMU1zSUdKcGJtUnBibWN1YUc5dmEzTXBMRnh5WEc0Z0lDQWdJQ0JwWkRvZ2JtVjNRbWx1WkdsdVowbGtMRnh5WEc0Z0lDQWdJQ0J6YUc5eWRFbGtMRnh5WEc0Z0lDQWdmU2s3WEhKY2JseHlYRzRnSUNBZ2NISmxjR0Z5WlZKbFlXTjBhWFpsUm5WdVkzTW9ZbWx1WkdsdVp5d2dZMjl0Y0c5dVpXNTBLVHRjY2x4dVhISmNiaUFnSUNCcFppQW9ZbWx1WkdsdVp5NXBjMHhwYzNRcElIdGNjbHh1SUNBZ0lDQWdZbWx1WkdsdVp5NXpkR0YwWlZCaGRHZ3VjSFZ6YUNoaWFXNWthVzVuVG1GdFpTazdYSEpjYmlBZ0lDQWdJR0pwYm1ScGJtY3VjM1JoZEdWT1lXMWxjeUE5SUdOdmJYQnZibVZ1ZEM1emRHRjBaVTVoYldWek8xeHlYRzVjY2x4dUlDQWdJQ0FnY0hKbGNHRnlaVUpwYm1ScGJtZHpJQ2hpYVc1a2FXNW5MbXhwYzNSSmRHVnRMQ0J1WlhkQ2FXNWthVzVuU1dRZ0t5Qk1TVUpmUVZSVVVpNVRWRUZVUlY5RVJVeEpUVWxVUlZJZ0t5Qk1TVUpmUVZSVVVpNUpWRVZOSUNzZ1ltbHVaR2x1Wnk1c2FYTjBTWFJsYlM1dVlXMWxMQ0JpYVc1a2FXNW5LVHRjY2x4dUlDQWdJQ0FnY21WMGRYSnVPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdsbUlDaGlhVzVrYVc1bkxtbHpRMjl0Y0c5dVpXNTBLU0I3WEhKY2JpQWdJQ0FnSUhOMVlrTnZiWEJ2Ym1WdWRITXVjSFZ6YUNoaWFXNWthVzVuS1R0Y2NseHVJQ0FnSUgxY2NseHVJQ0I5S1R0Y2NseHVYSEpjYmlBZ2MyVjBkWEJEYjIxd2IyNWxiblJ6VEdsdWEzTW9ZMjl0Y0c5dVpXNTBMQ0J3WVhKbGJuUkRiMjF3YjI1bGJuUXBPMXh5WEc0Z0lHTnZiWEJ2Ym1WdWRDNTBaVzF3YkdGMFpTQTlJR052YlhCdmJtVnVkQzV0WVhKcmRYQXVZMnh2Ym1WT2IyUmxLSFJ5ZFdVcE8xeHlYRzVjY2x4dUlDQnpkV0pEYjIxd2IyNWxiblJ6TG1admNrVmhZMmdvS0hOMVlrTnZiWEJ2Ym1WdWRDa2dQVDRnZTF4eVhHNGdJQ0FnY0hKbGNHRnlaVUpwYm1ScGJtZHpJQ2h6ZFdKRGIyMXdiMjVsYm5Rc0lHTjFjbkpsYm5SVGRHRjBaVWxrSUNzZ1RFbENYMEZVVkZJdVUxUkJWRVZmUkVWTVNVMUpWRVZTSUNzZ2MzVmlRMjl0Y0c5dVpXNTBMbk4wWVhSbFNXUXNJR052YlhCdmJtVnVkQ2s3WEhKY2JpQWdmU2s3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlIQnlaWEJoY21WU1pXRmpkR2wyWlVaMWJtTnpJQ2hpYVc1a2FXNW5MQ0JqYjIxd2IyNWxiblJFWVhSaEtTQjdYSEpjYmlBZ1ZrRk1WVVZmVkZsUVJWTXVabTl5UldGamFDZ29kSGx3WlNrZ1BUNGdlMXh5WEc0Z0lDQWdZMjl1YzNRZ2NtVmhZM1JwZG1WR2RXNWpJRDBnWW1sdVpHbHVaMXQwZVhCbFhUdGNjbHh1SUNBZ0lHbG1JQ2doY21WaFkzUnBkbVZHZFc1aktTQjdYSEpjYmlBZ0lDQWdJSEpsZEhWeWJqdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JpYVc1a2FXNW5MbVYyWVd4MVlYUmxXM1I1Y0dWZElEMGdjSEpsY0dGeVpWSmxZV04wYVhabFJuVnVZeWhpYVc1a2FXNW5MQ0IwZVhCbExDQnlaV0ZqZEdsMlpVWjFibU1zSUdOdmJYQnZibVZ1ZEVSaGRHRXBYSEpjYmlBZ2ZTazdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUhCeVpYQmhjbVZTWldGamRHbDJaVVoxYm1NZ0tHSnBibVJwYm1jc0lIUjVjR1VzSUhKbFlXTjBhWFpsUm5WdVl5d2dZMjl0Y0c5dVpXNTBSR0YwWVNrZ2UxeHlYRzRnSUdOdmJuTjBJR1JsY0dWdVpHVnVZMmxsYzA1aGJXVnpJRDBnWjJWMFJHVndaVzVrWlc1amFXVnpUbUZ0WlhNb2NtVmhZM1JwZG1WR2RXNWpLVHRjY2x4dVhISmNiaUFnWkdWd1pXNWtaVzVqYVdWelRtRnRaWE11Wm05eVJXRmphQ2dvWkdWd1pXNWtaVzVqZVU1aGJXVXBJRDArSUh0Y2NseHVJQ0FnSUdsbUlDaHBjMFZ0Y0hSNUtHTnZiWEJ2Ym1WdWRFUmhkR0V1YzNSaGRHVmJaR1Z3Wlc1a1pXNWplVTVoYldWZEtTa2dlMXh5WEc0Z0lDQWdJQ0JqYjIxd2IyNWxiblJFWVhSaExuTjBZWFJsVzJSbGNHVnVaR1Z1WTNsT1lXMWxYU0E5SUdOeVpXRjBaVUpwYm1ScGJtY29aR1Z3Wlc1a1pXNWplVTVoYldVc0lHTnZiWEJ2Ym1WdWRFUmhkR0VwTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHTnZiWEJ2Ym1WdWRFUmhkR0V1YzNSaGRHVmJaR1Z3Wlc1a1pXNWplVTVoYldWZExtUmxjR1Z1WkdGdWRITmJJR0pwYm1ScGJtY3VibUZ0WlNBcklDYzZKeUFySUhSNWNHVWdYU0E5SUhzZ2JtRnRaVG9nWW1sdVpHbHVaeTV1WVcxbExDQjBlWEJsSUgwN1hISmNiaUFnZlNrN1hISmNibHh5WEc0Z0lISmxkSFZ5YmlBb2RtRnNkV1Z6TENCamIyMXdiMjVsYm5SSmJuUmxjbVpoWTJVcElEMCtJR052YlhCMWRHVWdLSEpsWVdOMGFYWmxSblZ1WXl3Z2RtRnNkV1Z6TENCamIyMXdiMjVsYm5SSmJuUmxjbVpoWTJVcE8xeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJuWlhSRVpYQmxibVJsYm1OcFpYTk9ZVzFsY3lobWRXNWpLU0I3WEhKY2JpQWdZMjl1YzNRZ1puVnVZMUJoY21GdGN5QTlJR2RsZEZCaGNtRnRUbUZ0WlhNb1puVnVZeWs3WEhKY2JpQWdZMjl1YzNRZ2RtRnNkV1Z6VDJKcVVtVm5SWGh3SUQwZ0lHNWxkeUJTWldkRmVIQW9KMXhjWEZ3bklDc2dablZ1WTFCaGNtRnRjMXN3WFNBcklDZGNYRnhjTGloY1hGeGNSRnRlWEZ4Y1hITmNYRnhjVjEwcktTY3NJQ2RuSnlrN1hISmNiaUFnWTI5dWMzUWdaR1Z3Wlc1a1pXNWphV1Z6VG1GdFpYTWdQU0JiWFR0Y2NseHVJQ0JqYjI1emRDQm1kVzVqVTNSeUlEMGdablZ1WXk1MGIxTjBjbWx1WnlncE8xeHlYRzRnSUd4bGRDQmtaWEJsYm1SbGJtTjVUbUZ0WlR0Y2NseHVJQ0IzYUdsc1pTQW9LR1JsY0dWdVpHVnVZM2xPWVcxbElEMGdkbUZzZFdWelQySnFVbVZuUlhod0xtVjRaV01vWm5WdVkxTjBjaWtwS1NCN1hISmNiaUFnSUNCa1pYQmxibVJsYm1OcFpYTk9ZVzFsY3k1d2RYTm9LR1JsY0dWdVpHVnVZM2xPWVcxbFd6RmRLVHRjY2x4dUlDQjlYSEpjYmlBZ2NtVjBkWEp1SUdSbGNHVnVaR1Z1WTJsbGMwNWhiV1Z6TzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQm5aWFJRWVhKaGJVNWhiV1Z6S0daMWJtTXBJSHRjY2x4dUlDQmpiMjV6ZENCbWRXNWpVM1J5VjJsMGFHOTFkRU52YlcxbGJuUnpJRDBnWm5WdVl5NTBiMU4wY21sdVp5Z3BMbkpsY0d4aFkyVW9Va1V1VTFSU1NWQmZRMDlOVFVWT1ZGTXNJQ2NuS1R0Y2NseHVJQ0JqYjI1emRDQndZWEpoYlhOVGRISWdQU0JtZFc1alUzUnlWMmwwYUc5MWRFTnZiVzFsYm5SekxuTnNhV05sS0Z4eVhHNGdJQ0FnWm5WdVkxTjBjbGRwZEdodmRYUkRiMjF0Wlc1MGN5NXBibVJsZUU5bUtDY29KeWtnS3pFc1hISmNiaUFnSUNCbWRXNWpVM1J5VjJsMGFHOTFkRU52YlcxbGJuUnpMbWx1WkdWNFQyWW9KeWtuS1Z4eVhHNGdJQ2s3WEhKY2JpQWdjbVYwZFhKdUlIQmhjbUZ0YzFOMGNpNXRZWFJqYUNoU1JTNUJVa2RWVFVWT1ZGOU9RVTFGVXlrZ2ZId2dXMTA3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHTnZiWEIxZEdVZ0tHWjFibU1zSUhaaGJIVmxjMDlpYWl3Z1kyOXRjRzl1Wlc1MFNXNTBaWEptWVdObEtTQjdYSEpjYmlBZ2NtVjBkWEp1SUdaMWJtTXVZMkZzYkNoMGFHbHpMQ0JuWlhSUGJteDVWbUZzZFdWektIWmhiSFZsYzA5aWFpa3NJR052YlhCdmJtVnVkRWx1ZEdWeVptRmpaU2s3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlITmxkSFZ3UTI5dGNHOXVaVzUwYzB4cGJtdHpJQ2hqYjIxd2IyNWxiblFzSUhCaGNtVnVkRU52YlhCdmJtVnVkQ2tnZTF4eVhHNGdJRTlpYW1WamRDNWhjM05wWjI0b1hISmNiaUFnSUNCd1lYSmxiblJEYjIxd2IyNWxiblF1YkdsdWEzTXNYSEpjYmlBZ0lDQnRZWEFvWTI5dGNHOXVaVzUwTG05MWRHVnlUbUZ0WlhNc0lDaHJLU0E5UGlBb2V5QnNhVzVyT2lCckxDQmpiMjF3YjI1bGJuUTZJR052YlhCdmJtVnVkQzV6ZEdGMFpVbGtJSDBwS1Z4eVhHNGdJQ2s3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHNXZjbTFoYkdsNlpWVnpaWEpQY0hScGIyNXpJQ2h2Y0hScGIyNXpUMkpxTENCd1lYSmxiblJQWW1vc0lIQmhjbVZ1ZEV0bGVTa2dlMXh5WEc0Z0lHbG1JQ2hwYzBaMWJtTjBhVzl1SUNodmNIUnBiMjV6VDJKcUtTa2dlMXh5WEc0Z0lDQWdjbVYwZFhKdUlITmxkQ2h3WVhKbGJuUlBZbW9zSUZ0d1lYSmxiblJMWlhsZExDQjdJR05zWVhOek9pQnZjSFJwYjI1elQySnFJSDBwTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnYVdZZ0tHbHpRWEp5WVhrb2IzQjBhVzl1YzA5aWFpa3BJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9iM0IwYVc5dWMwOWlhaTVzWlc1bmRHZ2dQaUF4S1NCN1hISmNiaUFnSUNBZ0lHOXdkR2x2Ym5OUFltb3VabTl5UldGamFDZ29iM0IwYVc5dUtTQTlQaUJ1YjNKdFlXeHBlbVZWYzJWeVQzQjBhVzl1Y3lBb2IzQjBhVzl1TENCd1lYSmxiblJQWW1vc0lIQmhjbVZ1ZEV0bGVTa3BPMXh5WEc0Z0lDQWdJQ0J5WlhSMWNtNDdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tHbHpSblZ1WTNScGIyNG9iM0IwYVc5dWMwOWlhbHN3WFNrcElIdGNjbHh1SUNBZ0lDQWdjbVYwZFhKdUlITmxkQ2h3WVhKbGJuUlBZbW9zSUZ0d1lYSmxiblJMWlhsZExDQjdJSFpoYkhWbE9pQnZjSFJwYjI1elQySnFXekJkSUgwcE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ2FXWWdLR2x6VDJKcVpXTjBLRzl3ZEdsdmJuTlBZbXBiTUYwcEtTQjdYSEpjYmlBZ0lDQWdJSEpsZEhWeWJpQnpaWFFvY0dGeVpXNTBUMkpxTENCYmNHRnlaVzUwUzJWNVhTd2dleUJsZG1WdWRITTZJRzl3ZEdsdmJuTlBZbXBiTUYwZ2ZTazdYSEpjYmlBZ0lDQjlYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQm1iM0pGWVdOb0tHOXdkR2x2Ym5OUFltb3NJQ2gyWVd4MVpTd2dhMlY1S1NBOVBpQjdYSEpjYmlBZ0lDQmtaV3hsZEdVZ2IzQjBhVzl1YzA5aWFsdHJaWGxkTzF4eVhHNGdJQ0FnWTI5dWMzUWdZbWx1WkdsdVp5QTlJR055WldGMFpVSnBibVJwYm1jb2EyVjVLVHRjY2x4dVhISmNiaUFnSUNCcFppQW9hWE5QWW1wbFkzUW9kbUZzZFdVcEtTQjdYSEpjYmlBZ0lDQWdJSEJoY21WdWRFOWlhbHNuYzNSaGRHVW5YVnRyWlhsZElEMGdUMkpxWldOMExtRnpjMmxuYmloaWFXNWthVzVuTENCMllXeDFaU2s3WEhKY2JpQWdJQ0FnSUhKbGRIVnlianRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCd1lYSmxiblJQWW1wYkozTjBZWFJsSjExYmEyVjVYU0E5SUdKcGJtUnBibWM3WEhKY2JpQWdJQ0J1YjNKdFlXeHBlbVZWYzJWeVQzQjBhVzl1Y3loMllXeDFaU3dnY0dGeVpXNTBUMkpxV3lkemRHRjBaU2RkTENCclpYa3BPMXh5WEc0Z0lIMHBPMXh5WEc1Y2NseHVJQ0J5WlhSMWNtNGdjR0Z5Wlc1MFQySnFPMXh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCaGJtRnNlWHBsUW1sdVpHbHVaeUFvWld3cElIdGNjbHh1SUNCcFppQW9hWE5EYjIxd2IyNWxiblFvWld3cEtTQjdYSEpjYmlBZ0lDQnlaWFIxY200Z1oyVjBRMjl0Y0c5dVpXNTBUM0IwY3lobGJDazdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQnBaaUFvSVdWc0xtZGxkRUYwZEhKcFluVjBaU2tnZTF4eVhHNGdJQ0FnY21WMGRYSnVJRzUxYkd3N1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCc1pYUWdibUZ0WlNBOUlHVnNMbWRsZEVGMGRISnBZblYwWlNoTVNVSmZRVlJVVWk1VVJVMVFURUZVUlY5Q1NVNUVTVTVIS1R0Y2NseHVJQ0JsYkM1eVpXMXZkbVZCZEhSeWFXSjFkR1VvVEVsQ1gwRlVWRkl1VkVWTlVFeEJWRVZmUWtsT1JFbE9SeWs3WEhKY2JseHlYRzRnSUdsbUlDaHVZVzFsS1NCN1hISmNiaUFnSUNCeVpYUjFjbTRnZXlCdVlXMWxPaUJ1WVcxbExuUnlhVzBvS1NCOU8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2JtRnRaU0E5SUdWc0xtZGxkRUYwZEhKcFluVjBaU2hNU1VKZlFWUlVVaTVVUlUxUVRFRlVSVjlNU1ZOVVgwSkpUa1JKVGtjcE8xeHlYRzRnSUdWc0xuSmxiVzkyWlVGMGRISnBZblYwWlNoTVNVSmZRVlJVVWk1VVJVMVFURUZVUlY5TVNWTlVYMEpKVGtSSlRrY3BPMXh5WEc1Y2NseHVJQ0JwWmlBb2JtRnRaU2tnZTF4eVhHNGdJQ0FnY21WMGRYSnVJSHNnYm1GdFpUb2dibUZ0WlM1MGNtbHRLQ2tzSUdselRHbHpkRG9nZEhKMVpTQjlPMXh5WEc0Z0lIMWNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYVhORGIyMXdiMjVsYm5RZ0tHVnNLU0I3WEhKY2JpQWdZMjl1YzNRZ2RHRm5UbUZ0WlNBOUlHVnNMblJoWjA1aGJXVWdKaVlnWld3dWRHRm5UbUZ0WlM1MGIweHZkMlZ5UTJGelpTZ3BPMXh5WEc0Z0lISmxkSFZ5YmlCMFlXZE9ZVzFsSUNZbUlFTlBUVkJQVGtWT1ZGTmJJSFJ2UTJGdFpXeERZWE5sS0hSaFowNWhiV1VwSUYwN1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJR2RsZEVOdmJYQnZibVZ1ZEU5d2RITWdLRzlpYWlrZ2UxeHlYRzRnSUdOdmJuTjBJRzVoYldVZ1BTQjBiME5oYldWc1EyRnpaU2dnYjJKcUxuUmhaMDVoYldVdWRHOU1iM2RsY2tOaGMyVW9LU0FwTzF4eVhHNGdJR052Ym5OMElHTnZiWEJ2Ym1WdWRDQTlJR2RsZEVOdmJYQnZibVZ1ZEVKNVRtRnRaU2h1WVcxbEtUdGNjbHh1SUNCamIyNXpkQ0JzYVc1cmN5QTlJSHQ5TzF4eVhHNGdJR052Ym5OMElISmxka3hwYm10eklEMGdlMzA3WEhKY2JpQWdiR1YwSUhOMFlYUmxUbUZ0WlNBOUlHNTFiR3c3WEhKY2JseHlYRzRnSUVGeWNtRjVMbkJ5YjNSdmRIbHdaUzV6YkdsalpTNWpZV3hzS0c5aWFpNWhkSFJ5YVdKMWRHVnpLVnh5WEc0Z0lDQWdMbVp2Y2tWaFkyZ29LR0YwZEhJcElEMCtJSHRjY2x4dVhISmNiaUFnSUNBZ0lHbG1JQ2hoZEhSeUxtNWhiV1VnUFQwOUlFeEpRbDlCVkZSU0xsTlVRVlJGWDA1QlRVVXBJSHRjY2x4dUlDQWdJQ0FnSUNCemRHRjBaVTVoYldVZ1BTQmhkSFJ5TG5aaGJIVmxPMXh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnlianRjY2x4dUlDQWdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDQWdZMjl1YzNRZ2FXNXVaWEpNYVc1cklEMGdkRzlEWVcxbGJFTmhjMlVvWVhSMGNpNXVZVzFsS1R0Y2NseHVJQ0FnSUNBZ2JHbHVhM05iYVc1dVpYSk1hVzVyWFNBOUlHRjBkSEl1ZG1Gc2RXVTdYSEpjYmlBZ0lDQWdJSEpsZGt4cGJtdHpXMkYwZEhJdWRtRnNkV1ZkSUQwZ2FXNXVaWEpNYVc1ck8xeHlYRzRnSUNBZ2ZTazdYSEpjYmx4eVhHNGdJSEpsZEhWeWJpQjdYSEpjYmlBZ0lDQmpiMjF3YjI1bGJuUXNYSEpjYmlBZ0lDQnNhVzVyY3pvZ2JHbHVhM01zWEhKY2JpQWdJQ0J5WlhaTWFXNXJjem9nY21WMlRHbHVhM01zWEhKY2JpQWdJQ0J6ZEdGMFpVNWhiV1VzWEhKY2JpQWdJQ0J1WVcxbExGeHlYRzRnSUNBZ2FYTkRiMjF3YjI1bGJuUTZJSFJ5ZFdVc1hISmNiaUFnZlR0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdaMlYwUTI5dGNHOXVaVzUwUW5sT1lXMWxJQ2h1WVcxbEtTQjdYSEpjYmlBZ2NtVjBkWEp1SUVOUFRWQlBUa1ZPVkZOYklIUnZRMkZ0Wld4RFlYTmxLRzVoYldVcElGMDdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUdOeVpXRjBaVUpwYm1ScGJtY2dLRzVoYldVc0lHTnZiWEJ2Ym1WdWRDd2daV3dwSUh0Y2NseHVJQ0JqYjI1emRDQmpiMjF3YjI1bGJuUlBjSFJ6SUQwZ0tHTnZiWEJ2Ym1WdWRDa2dQeUI3WEhKY2JpQWdJQ0JwWkRvZ1kyOXRjRzl1Wlc1MExuTjBZWFJsU1dRZ0t5Qk1TVUpmUVZSVVVpNVRWRUZVUlY5RVJVeEpUVWxVUlZJZ0t5QnVZVzFsTEZ4eVhHNGdJQ0FnYzNSaGRHVlFZWFJvT2lCamIyMXdiMjVsYm5RdWMzUmhkR1ZRWVhSb0xGeHlYRzRnSUNBZ2MzUmhkR1ZPWVcxbGN6b2dZMjl0Y0c5dVpXNTBMbk4wWVhSbFRtRnRaWE1zWEhKY2JpQWdJQ0JwYzB4cGMzUkpkR1Z0T2lCamIyMXdiMjVsYm5RdWFYTk1hWE4wTEZ4eVhHNGdJQ0FnYzNSaGRHVkpaRG9nYm1GdFpTeGNjbHh1SUNCOUlEb2dlMzA3WEhKY2JseHlYRzRnSUdOdmJuTjBJR1ZzVDNCMGN5QTlJQ2hsYkNrZ1B5QjdYSEpjYmlBZ0lDQnBibWwwVm1Gc2RXVTZJR1ZzTG5aaGJIVmxJSHg4SUdWc0xtbHVibVZ5U0ZSTlRGeHlYRzRnSUgwZ09pQjdmVHRjY2x4dVhISmNiaUFnY21WMGRYSnVJRTlpYW1WamRDNWhjM05wWjI0b2UxeHlYRzRnSUNBZ2JtRnRaU3hjY2x4dUlDQWdJR3hwYzNSbGJtVnljem9nVzEwc1hISmNiaUFnSUNCdFlYSnJkWEE2SUdWc0xGeHlYRzRnSUNBZ1pHVndaVzVrWVc1MGN6b2dlMzBzWEhKY2JpQWdJQ0JsZG1WdWRITTZJSHQ5TEZ4eVhHNGdJQ0FnWlhaaGJIVmhkR1U2SUh0OUxGeHlYRzRnSUNBZ2JHbHVhM002SUh0OUxGeHlYRzRnSUNBZ2MzUmhkR1U2SUhzZ1cweEpRbDlCVkZSU0xsTkZURVpkT2lCN2ZTQjlMRnh5WEc0Z0lDQWdiM1YwWlhKT1lXMWxjem9nZTMwc1hISmNiaUFnSUNCZmJHbHVhM002SUh0OUxGeHlYRzVjY2x4dUlDQjlMQ0JqYjIxd2IyNWxiblJQY0hSekxDQmxiRTl3ZEhNcE8xeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJ0YjJScFpubFViMHhwYzNSQ2FXNWthVzVuSUNoaWFXNWthVzVuTENCcGRHVnRUV0Z5YTNWd0tTQjdYSEpjYmlBZ1ltbHVaR2x1Wnk1cGMweHBjM1FnUFNCMGNuVmxPMXh5WEc1Y2NseHVJQ0J5WlhSMWNtNGdUMkpxWldOMExtRnpjMmxuYmloaWFXNWthVzVuTENCN1hISmNiaUFnSUNCdFlYSnJkWEE2SUdsMFpXMU5ZWEpyZFhBc1hISmNiaUFnSUNCc2FYTjBTWFJsYlRvZ1kzSmxZWFJsUW1sdVpHbHVaeWhwZEdWdFRXRnlhM1Z3TG5SaFowNWhiV1VzSUdKcGJtUnBibWNzSUdsMFpXMU5ZWEpyZFhBcExGeHlYRzRnSUgwcE8xeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJ6YUc5eWRHVnVRbWx1WkdsdVowbGtJQ2hwWkNrZ2UxeHlYRzRnSUhKbGRIVnliaUJwWkZ4eVhHNGdJQ0FnTG5Od2JHbDBLRXhKUWw5QlZGUlNMbE5VUVZSRlgwUkZURWxOU1ZSRlVpbGNjbHh1SUNBZ0lDNXRZWEFvS0dWc0tTQTlQaUJuWlhSVGFHOXlkRTVoYldVb1pXd3BLVnh5WEc0Z0lDQWdMbXB2YVc0b1RFbENYMEZVVkZJdVUxUkJWRVZmUkVWTVNVMUpWRVZTS1R0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdjSEpsY0dGeVpWTjBlV3hsY3lBb2MzUjViR1ZCY21jc0lHTnZiWEJ2Ym1WdWRDa2dlMXh5WEc0Z0lISmxkSFZ5YmlCdFlYQkxaWGx6S0hOMGVXeGxRWEpuTENBb2EyVjVLU0E5UGlCclpYbGNjbHh1SUNBZ0lDNXpjR3hwZENnbkxDY3BYSEpjYmlBZ0lDQXViV0Z3S0NoelpXeGxZM1J2Y2lrZ1BUNGdjMlZzWldOMGIzSXVkSEpwYlNncEtWeHlYRzRnSUNBZ0xtMWhjQ2dvYzJWc1pXTjBiM0lwSUQwK0lIdGNjbHh1WEhKY2JpQWdJQ0FnSUd4bGRDQmpiR0Z6YzA1aGJXVWdQU0FnSnk0bklDc2dZMjl0Y0c5dVpXNTBMbTVoYldVN1hISmNibHh5WEc0Z0lDQWdJQ0JwWmlBb2MyVnNaV04wYjNJcElIdGNjbHh1SUNBZ0lDQWdJQ0JqYjI1emRDQnBjMEpwYm1ScGJtY2dQU0JqYjIxd2IyNWxiblF1YzNSaGRHVmJJSE5sYkdWamRHOXlMbk53YkdsMEtDY2dKeWxiTUYwdWMzQnNhWFFvSnpvNkp5bGJNRjB1YzNCc2FYUW9Kem9uS1Zzd1hTQmRPMXh5WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSEJ5WldacGVDQTlJR2x6UW1sdVpHbHVaeUEvSUdOc1lYTnpUbUZ0WlNBcklDY3RKeUE2SUNjbk8xeHlYRzRnSUNBZ0lDQWdJR05zWVhOelRtRnRaU0FyUFNBbklDY2dLeUJ3Y21WbWFYZ2dLeUJ6Wld4bFkzUnZjanRjY2x4dUlDQWdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDQWdjbVYwZFhKdUlHTnNZWE56VG1GdFpUdGNjbHh1SUNBZ0lIMHBYSEpjYmlBZ0lDQXVhbTlwYmlnbkxDY3BYSEpjYmlBZ0tUdGNjbHh1ZlZ4eVhHNGlMQ0pwYlhCdmNuUWdURWxDWDBGVVZGSWdabkp2YlNBbkxpOW5iRzlpWVd4ekwyRjBkSEpwWW5WMFpYTW5PMXh5WEc1Y2NseHVhVzF3YjNKMElIc2dabTl5UldGamFDQjlJR1p5YjIwZ0p5NHZhR1ZzY0dWeWN5OXZZbXBsWTNRbk8xeHlYRzVwYlhCdmNuUWdleUJuWlhSU1pXRnNUbUZ0WlN3Z2FHRnpJSDBnWm5KdmJTQW5MaTlvWld4d1pYSnpMMk52YlcxdmJpYzdYSEpjYmx4eVhHNXBiWEJ2Y25RZ2UxeHlYRzRnSUdOeVpXRjBaVUZqWTJWemMyOXlMRnh5WEc1OUlHWnliMjBnSnk0dlUzUmhkR1VuTzF4eVhHNWNjbHh1YVcxd2IzSjBJSHRjY2x4dUlDQnpkR0Z5ZEZSeVlXNXpZV04wYVc5dUxGeHlYRzRnSUdGd2NHeDVRMmhoYm1kbGMxeHlYRzU5SUdaeWIyMGdKeTR2VTNSaGRHVkRhR0Z1WjJVbk8xeHlYRzVjY2x4dVpYaHdiM0owSUh0Y2NseHVJQ0J6WlhSMWNFVjJaVzUwU0dGdVpHeGxjbk5jY2x4dWZUdGNjbHh1WEhKY2JtWjFibU4wYVc5dUlITmxkSFZ3UlhabGJuUklZVzVrYkdWeWN5QW9aV3hsYldWdWRDa2dlMXh5WEc0Z0lHTnZibk4wSUdWMlpXNTBTR0Z1Wkd4bGNuTWdQU0I3ZlR0Y2NseHVJQ0JuWVhSb1pYSkJiR3hGZG1WdWRFaGhibVJzWlhKektHVnNaVzFsYm5Rc0lHVjJaVzUwU0dGdVpHeGxjbk1wTzF4eVhHNWNjbHh1SUNCamIyNXpkQ0J0WVhKcmRYQWdQU0JsYkdWdFpXNTBMbVZzTzF4eVhHNGdJR1p2Y2lBb2JHVjBJR1YyWlc1MFRtRnRaU0JwYmlCbGRtVnVkRWhoYm1Sc1pYSnpLU0I3WEhKY2JpQWdJQ0J0WVhKcmRYQXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpaGxkbVZ1ZEU1aGJXVXNJQ2hsS1NBOVBpQmxlR1ZqZFhSbFFXeHNRMkZzYkdKaFkydHpTVzVNYVhOMEtHVXNJR1YyWlc1MFNHRnVaR3hsY25OYlpYWmxiblJPWVcxbFhTd2daV3hsYldWdWRDa3BPMXh5WEc0Z0lIMWNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnWjJGMGFHVnlRV3hzUlhabGJuUklZVzVrYkdWeWN5QW9ZMjl0Y0c5dVpXNTBMQ0JuWVhSb1pYSmxaRWhoYm1Sc1pYSnpLU0I3WEhKY2JpQWdaMkYwYUdWeVJYWmxiblJJWVc1a2JHVnljeUFvWTI5dGNHOXVaVzUwTENCbllYUm9aWEpsWkVoaGJtUnNaWEp6S1R0Y2NseHVYSEpjYmlBZ2FXWWdLR052YlhCdmJtVnVkQzV6ZEdGMFpTa2dlMXh5WEc0Z0lDQWdabTl5UldGamFDaGpiMjF3YjI1bGJuUXVjM1JoZEdVc0lDaGlhVzVrYVc1bktTQTlQaUJuWVhSb1pYSkJiR3hGZG1WdWRFaGhibVJzWlhKektHSnBibVJwYm1jc0lHZGhkR2hsY21Wa1NHRnVaR3hsY25NcEtUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lHbG1JQ2hqYjIxd2IyNWxiblF1YkdsemRFbDBaVzBwSUh0Y2NseHVJQ0FnSUdkaGRHaGxja0ZzYkVWMlpXNTBTR0Z1Wkd4bGNuTW9ZMjl0Y0c5dVpXNTBMbXhwYzNSSmRHVnRMQ0JuWVhSb1pYSmxaRWhoYm1Sc1pYSnpLVHRjY2x4dUlDQjlYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUdkaGRHaGxja1YyWlc1MFNHRnVaR3hsY25NZ0tHSnBibVJwYm1jc0lHZGhkR2hsY21Wa1NHRnVaR3hsY25NcElIdGNjbHh1SUNCcFppQW9JV0pwYm1ScGJtY3VaWFpsYm5SektTQjdYSEpjYmlBZ0lDQnlaWFIxY200N1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCbWIzSWdLR3hsZENCbGRtVnVkRTVoYldVZ2FXNGdZbWx1WkdsdVp5NWxkbVZ1ZEhNcElIdGNjbHh1SUNBZ0lHbG1JQ2doWjJGMGFHVnlaV1JJWVc1a2JHVnljMXRsZG1WdWRFNWhiV1ZkS1NCN1hISmNiaUFnSUNBZ0lHZGhkR2hsY21Wa1NHRnVaR3hsY25OYlpYWmxiblJPWVcxbFhTQTlJSHQ5TzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHZGhkR2hsY21Wa1NHRnVaR3hsY25OYlpYWmxiblJPWVcxbFhWdGlhVzVrYVc1bkxuTm9iM0owU1dSZElEMGdZbWx1WkdsdVp5NWxkbVZ1ZEhOYlpYWmxiblJPWVcxbFhUdGNjbHh1SUNCOVhISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJR1Y0WldOMWRHVkJiR3hEWVd4c1ltRmphM05KYmt4cGMzUWdLR1VzSUdWMlpXNTBTR0Z1Wkd4bGNuTXNJR1ZzWlcxbGJuUXBJSHRjY2x4dUlDQmtaV052Y21GMFpVVjJaVzUwS0dVcE8xeHlYRzRnSUhOMFlYSjBWSEpoYm5OaFkzUnBiMjRvS1R0Y2NseHVJQ0JjY2x4dUlDQnNaWFFnWTNWeVNGUk5URTV2WkdVZ1BTQmxMblJoY21kbGREdGNjbHh1SUNCM2FHbHNaU0FvWTNWeVNGUk5URTV2WkdVZ0lUMDlJR1ZzWlcxbGJuUXVaV3d1Y0dGeVpXNTBUbTlrWlNrZ2UxeHlYRzRnSUNBZ1kyOXVjM1FnWW1sdVpHbHVaMGxrSUQwZ1kzVnlTRlJOVEU1dlpHVXVaMlYwUVhSMGNtbGlkWFJsS0V4SlFsOUJWRlJTTGtKSlRrUkpUa2RmU1VRcE8xeHlYRzRnSUNBZ1kyOXVjM1FnWlhabGJuUklZVzVrYkdWeUlEMGdaWFpsYm5SSVlXNWtiR1Z5YzF0aWFXNWthVzVuU1dSZE8xeHlYRzVjY2x4dUlDQWdJR2xtSUNobGRtVnVkRWhoYm1Sc1pYSXBJSHRjY2x4dUlDQWdJQ0FnWTI5dWMzUWdhVzVrWlhoc1pYTnpVM1JoZEdWUVlYUm9JRDBnWW1sdVpHbHVaMGxrTG5Od2JHbDBLRXhKUWw5QlZGUlNMbE5VUVZSRlgwUkZURWxOU1ZSRlVpazdYSEpjYmlBZ0lDQWdJR2x1WkdWNGJHVnpjMU4wWVhSbFVHRjBhQzV3YjNBb0tUdGNjbHh1SUNBZ0lDQWdZMjl1YzNRZ2MzUmhkR1ZRWVhSb1ZHOUpkR1Z0SUQwZ1oyVjBVM1JoZEdWUVlYUm9WRzlKZEdWdEtHTjFja2hVVFV4T2IyUmxMQ0JwYm1SbGVHeGxjM05UZEdGMFpWQmhkR2dwTzF4eVhHNGdJQ0FnSUNCamIyNXpkQ0JoWTJObGMzTnZjbFJ2UkdGMFlTQTlJR055WldGMFpVRmpZMlZ6YzI5eUtGdGxiR1Z0Wlc1MExtbGtYUzVqYjI1allYUW9jM1JoZEdWUVlYUm9WRzlKZEdWdEtTazdYSEpjYmx4eVhHNGdJQ0FnSUNCbGRtVnVkRWhoYm1Sc1pYSXVZMkZzYkNoMGFHbHpMQ0JsTENCamRYSklWRTFNVG05a1pTd2dZV05qWlhOemIzSlViMFJoZEdFc0lDdHpkR0YwWlZCaGRHaFViMGwwWlcwdWMyeHBZMlVvTFRJcFd6QmRLVHRjY2x4dVhISmNiaUFnSUNBZ0lHbG1JQ2hsTG5CeWIzQmhaMkYwYVc5dVUzUnZjSEJsWkNrZ2UxeHlYRzRnSUNBZ0lDQWdJR0p5WldGck8xeHlYRzRnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQmpkWEpJVkUxTVRtOWtaU0E5SUdOMWNraFVUVXhPYjJSbExuQmhjbVZ1ZEU1dlpHVTdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQmhjSEJzZVVOb1lXNW5aWE1vS1R0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdaR1ZqYjNKaGRHVkZkbVZ1ZENBb1pTa2dlMXh5WEc0Z0lHTnZibk4wSUhOMGIzQlFjbTl3WVdkaGRHbHZiaUE5SUdVdWMzUnZjRkJ5YjNCaFoyRjBhVzl1TG1KcGJtUW9aU2s3WEhKY2JpQWdaUzV6ZEc5d1VISnZjR0ZuWVhScGIyNGdQU0FvS1NBOVBpQjdYSEpjYmlBZ0lDQmxMbkJ5YjNCaFoyRjBhVzl1VTNSdmNIQmxaQ0E5SUhSeWRXVTdYSEpjYmlBZ0lDQnpkRzl3VUhKdmNHRm5ZWFJwYjI0b0tUdGNjbHh1SUNCOVhISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJR2RsZEZOMFlYUmxVR0YwYUZSdlNYUmxiU0FvWld3c0lHbHVaR1Y0YkdWemMxTjBZWFJsVUdGMGFDa2dlMXh5WEc0Z0lHTnZibk4wSUhOMFlYUmxVR0YwYUNBOUlGdGRPMXh5WEc1Y2NseHVJQ0JzWlhRZ1pXeGxiV1Z1ZEU1aGJXVTdYSEpjYmlBZ2QyaHBiR1VnS0NobGJHVnRaVzUwVG1GdFpTQTlJR2RsZEZKbFlXeE9ZVzFsS0NCcGJtUmxlR3hsYzNOVGRHRjBaVkJoZEdndWNHOXdLQ2tnS1NrcElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb2FHRnpLR1ZzWlcxbGJuUk9ZVzFsTENCTVNVSmZRVlJVVWk1SlZFVk5LU2tnZTF4eVhHNGdJQ0FnSUNCbGJHVnRaVzUwVG1GdFpTQTlJR1ZzWlcxbGJuUk9ZVzFsTG5Oc2FXTmxLRXhKUWw5QlZGUlNMa2xVUlUwdWJHVnVaM1JvS1R0Y2NseHVJQ0FnSUNBZ1pXd2dQU0JuWlhSVWIwbDBaVzFPYjJSbEtHVnNLVHRjY2x4dUlDQWdJQ0FnWTI5dWMzUWdhV1I0SUQwZ1pXd3VaMlYwUVhSMGNtbGlkWFJsS0V4SlFsOUJWRlJTTGtsVVJVMWZTVTVFUlZncE8xeHlYRzRnSUNBZ0lDQmxiQ0E5SUdWc0xuQmhjbVZ1ZEU1dlpHVTdYSEpjYmlBZ0lDQWdJSE4wWVhSbFVHRjBhQzUxYm5Ob2FXWjBLR2xrZUN3Z1pXeGxiV1Z1ZEU1aGJXVXBPMXh5WEc0Z0lDQWdJQ0JqYjI1MGFXNTFaVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCemRHRjBaVkJoZEdndWRXNXphR2xtZENobGJHVnRaVzUwVG1GdFpTazdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQnlaWFIxY200Z2MzUmhkR1ZRWVhSb08xeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJuWlhSVWIwbDBaVzFPYjJSbElDaGxiQ2tnZTF4eVhHNGdJR3hsZENCamRYSkZiQ0E5SUdWc08xeHlYRzVjY2x4dUlDQjNhR2xzWlNBb1kzVnlSV3d1ZEdGblRtRnRaU0FoUFQwZ0owSlBSRmtuS1NCN1hISmNiaUFnSUNCcFppQW9ZM1Z5Uld3dVoyVjBRWFIwY21saWRYUmxLRXhKUWw5QlZGUlNMa2xVUlUxZlNVNUVSVmdwS1NCN1hISmNiaUFnSUNBZ0lISmxkSFZ5YmlCamRYSkZiRHRjY2x4dUlDQWdJSDFjY2x4dUlDQWdJR04xY2tWc0lEMGdZM1Z5Uld3dWNHRnlaVzUwVG05a1pUdGNjbHh1SUNCOVhISmNibjFjY2x4dUlpd2lhVzF3YjNKMElIdGNjbHh1SUNCeVpYQnNZV05sVG05a1pYTXNYSEpjYmlBZ1kyOXNiR1ZqZEVoVVRVeE9iMlJsY3l4Y2NseHVmU0JtY205dElDY3VMMmhsYkhCbGNuTXZaRzl0SjF4eVhHNWNjbHh1YVcxd2IzSjBJSHRjY2x4dUlDQm5aWFJEYjIxd2IyNWxiblJQY0hSekxGeHlYRzRnSUdselEyOXRjRzl1Wlc1MExGeHlYRzU5SUdaeWIyMGdKeTR2UkdWbWFXNXBkR2x2YmljN1hISmNibHh5WEc1cGJYQnZjblFnZXlCelpYUjFjRVYyWlc1MFNHRnVaR3hsY25NZ2ZTQm1jbTl0SUNjdUwwVjJaVzUwU0dGdVpHeGxjaWM3WEhKY2JseHlYRzVwYlhCdmNuUWdleUJqY21WaGRHVkZiR1Z0Wlc1MElIMGdabkp2YlNBbkxpOVRkR0YwWlNjN1hISmNibHh5WEc1bGVIQnZjblFnZXlCaGNIQnNlU0I5TzF4eVhHNWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHRndjR3g1SUNoeWIyOTBSV3hsYldWdWRGTmxiR1ZqZEc5eUtTQjdYSEpjYmlBZ1kyOXVjM1FnY205dmRFVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0hKdmIzUkZiR1Z0Wlc1MFUyVnNaV04wYjNJcE8xeHlYRzRnSUdOdmJuTjBJRWhVVFV4T2IyUmxjeUE5SUdOdmJHeGxZM1JJVkUxTVRtOWtaWE1vY205dmRFVnNaVzFsYm5Rc0lHbHpRMjl0Y0c5dVpXNTBLVHRjY2x4dVhISmNiaUFnU0ZSTlRFNXZaR1Z6TG1admNrVmhZMmdvS0VoVVRVeE9iMlJsS1NBOVBpQjdYSEpjYmlBZ0lDQmpiMjV6ZENCamIyMXdiMjVsYm5SUGNIUnpJRDBnWjJWMFEyOXRjRzl1Wlc1MFQzQjBjeWhJVkUxTVRtOWtaU2s3WEhKY2JpQWdJQ0JqYjI1emRDQmxiR1Z0Wlc1MElEMGdjMlYwZFhCRmJHVnRaVzUwS0dOdmJYQnZibVZ1ZEU5d2RITXBPMXh5WEc1Y2NseHVJQ0FnSUhKbGNHeGhZMlZPYjJSbGN5aElWRTFNVG05a1pTd2daV3hsYldWdWRDNWxiQ2s3WEhKY2JpQWdmU2s3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlITmxkSFZ3Uld4bGJXVnVkQ0FvWTI5dGNHOXVaVzUwVDNCMGN5a2dlMXh5WEc0Z0lHTnZibk4wSUdWc1pXMWxiblFnUFNCamNtVmhkR1ZGYkdWdFpXNTBLR052YlhCdmJtVnVkRTl3ZEhNcE8xeHlYRzRnSUhObGRIVndSWFpsYm5SSVlXNWtiR1Z5Y3lobGJHVnRaVzUwS1R0Y2NseHVJQ0J5WlhSMWNtNGdaV3hsYldWdWREdGNjbHh1ZlZ4eVhHNGlMQ0pwYlhCdmNuUWdURWxDWDBGVVZGSWdabkp2YlNBbkxpOW5iRzlpWVd4ekwyRjBkSEpwWW5WMFpYTW5PMXh5WEc1Y2NseHVhVzF3YjNKMElIc2daMlYwTENCelpYUXNJR1p2Y2tWaFkyZ3NJRzFoY0NCOUlHWnliMjBnSnk0dmFHVnNjR1Z5Y3k5dlltcGxZM1FuTzF4eVhHNWNjbHh1YVcxd2IzSjBJSHNnYUdGeklIMGdabkp2YlNBbkxpOW9aV3h3WlhKekwyTnZiVzF2YmljN1hISmNibHh5WEc1cGJYQnZjblFnZXlCU1JWTkZVbFpGUkY5Q1NVNUVTVTVIWDA1QlRVVlRJSDBnWm5KdmJTQW5MaTlFWldacGJtbDBhVzl1Snp0Y2NseHVYSEpjYm1sdGNHOXlkQ0I3WEhKY2JpQWdZM0psWVhSbFUzUmhkR1ZPYjJSbGN5eGNjbHh1SUNCelpYUldZV3gxWlhNc1hISmNiaUFnYlc5a2FXWjVUR2x6ZEN4Y2NseHVJQ0J6ZEdGeWRGUnlZVzV6WVdOMGFXOXVMRnh5WEc0Z0lITmxibVJVYjFKbGJtUmxjbEYxWlhWbExGeHlYRzRnSUdGd2NHeDVRMmhoYm1kbGN5eGNjbHh1ZlNCbWNtOXRJQ2N1TDFOMFlYUmxRMmhoYm1kbEp6dGNjbHh1WEhKY2JtbHRjRzl5ZENCN1hISmNiaUFnYVhOQmNuSmhlU3hjY2x4dUlDQnBjMU4wY21sdVp5eGNjbHh1SUNCcGMwNTFiV0psY2l4Y2NseHVJQ0JwYzA5aWFtVmpkQ3hjY2x4dWZTQm1jbTl0SUNjdUwyaGxiSEJsY25NdlkyaGxZMnRsY25Nbk8xeHlYRzVjY2x4dVpYaHdiM0owSUh0Y2NseHVJQ0JqY21WaGRHVkZiR1Z0Wlc1MExGeHlYRzRnSUdOeVpXRjBaVUZqWTJWemMyOXlMRnh5WEc0Z0lHZGxkRTl1YkhsV1lXeDFaWE1zWEhKY2JpQWdaMlYwUTI5dGNHOXVaVzUwTEZ4eVhHNGdJSE5sZEZOMFlYUmxMRnh5WEc0Z0lIQnlaWEJoY21WRGFHRnVaMlZQWW1wbFkzUXNYSEpjYm4wN1hISmNibHh5WEc1amIyNXpkQ0JGVEVWTlJVNVVVeUE5SUh0OU8xeHlYRzVqYjI1emRDQlRWRUZVUlNBOUlIdDlPMXh5WEc1c1pYUWdSVXhGVFVWT1ZGOURUMVZPVkVWU0lEMGdNVHRjY2x4dVhISmNibVoxYm1OMGFXOXVJSE5sZEZOMFlYUmxJQ2h3WVhSb0xDQjJZV3gxWlNrZ2UxeHlYRzRnSUhObGRDaFRWRUZVUlN3Z2NHRjBhQ3dnZG1Gc2RXVXBPMXh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCblpYUlRkR0YwWlNBb2NHRjBhQ2tnZTF4eVhHNGdJSEpsZEhWeWJpQm5aWFFvVTFSQlZFVXNJSEJoZEdncE8xeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJqY21WaGRHVkZiR1Z0Wlc1MElDaGpiMjF3YjI1bGJuUlBjSFJ6S1NCN1hISmNiaUFnWTI5dWMzUWdhV1FnUFNCRlRFVk5SVTVVWDBOUFZVNVVSVklyS3p0Y2NseHVJQ0JqYjI1emRDQnVZVzFsSUQwZ1kyOXRjRzl1Wlc1MFQzQjBjeTV1WVcxbE8xeHlYRzVjY2x4dUlDQmpiMjV6ZENCbGJHVnRaVzUwSUQwZ1JVeEZUVVZPVkZOYmFXUmRJRDBnZTF4eVhHNGdJQ0FnYVdRc1hISmNiaUFnSUNCemRHRjBaVG9nZXlCYmJtRnRaVjA2SUdOdmJYQnZibVZ1ZEU5d2RITXVZMjl0Y0c5dVpXNTBJSDBzWEhKY2JpQWdmVHRjY2x4dVhISmNiaUFnVTFSQlZFVmJhV1JkSUQwZ2UzMDdYSEpjYmx4eVhHNGdJR055WldGMFpWTjBZWFJsVG05a1pYTW9XMmxrTENCdVlXMWxYU2s3WEhKY2JseHlYRzRnSUhObGJtUlViMUpsYm1SbGNsRjFaWFZsS0Z0cFpGMHNJSHNnVzI1aGJXVmRPaUJtWVd4elpTQjlLVHRjY2x4dUlDQmhjSEJzZVVOb1lXNW5aWE1vS1R0Y2NseHVJQ0JsYkdWdFpXNTBMbVZzSUQwZ1UxUkJWRVZiYVdSZFcyNWhiV1ZkVzB4SlFsOUJWRlJTTGxORlRFWmRMbVZzTzF4eVhHNGdJR1ZzWlcxbGJuUXVaV3d1YzJWMFFYUjBjbWxpZFhSbEtFeEpRbDlCVkZSU0xrTlBUVkJQVGtWT1ZGOVVXVkJGTENCTVNVSmZRVlJVVWk1Q1FWTkZLVHRjY2x4dVhISmNiaUFnY21WMGRYSnVJR1ZzWlcxbGJuUTdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUdOeVpXRjBaVUZqWTJWemMyOXlJQ2h3WVhSb0tTQjdYSEpjYmlBZ1kyOXVjM1FnZG1Gc2RXVnpJRDBnWjJWMFUzUmhkR1VvY0dGMGFDazdYSEpjYmlBZ1kyOXVjM1FnWTI5dGNHOXVaVzUwSUQwZ1oyVjBRMjl0Y0c5dVpXNTBLSEJoZEdncE8xeHlYRzVjY2x4dUlDQmpiMjV6ZENCaFkyTmxjM052Y2lBOUlIdGNjbHh1SUNBZ0lHTnZiWEJ2Ym1WdWRDeGNjbHh1SUNBZ0lIWmhiSFZsY3l4Y2NseHVJQ0FnSUhCaGRHZ3NYSEpjYmlBZ0lDQnpkR0Z5ZEZSeVlXNXpZV04wYVc5dUxGeHlYRzRnSUNBZ1lYQndiSGxEYUdGdVoyVnpMRnh5WEc0Z0lDQWdkWEE2SUNoc1pYWmxiQ2tnUFQ0Z2JXOTJaVlZ3VTNSaGRHVlFZWFJvS0d4bGRtVnNMQ0J3WVhSb0xuTnNhV05sS0NrcExGeHlYRzRnSUNBZ1pHOTNiam9nS0dGa1pHbDBhVzl1WVd4UVlYUm9LU0E5UGlCamNtVmhkR1ZCWTJObGMzTnZjaWh3WVhSb0xtTnZibU5oZENoaFpHUnBkR2x2Ym1Gc1VHRjBhQ2twTEZ4eVhHNGdJQ0FnYzJWME9pQW9ZMmhoYm1kbFQySnFLU0E5UGlCelpYUldZV3gxWlhNb0lIQnlaWEJoY21WRGFHRnVaMlZQWW1wbFkzUW9ZMmhoYm1kbFQySnFLU3dnY0dGMGFDa3NYSEpjYmlBZ0lDQm5aWFE2SUNoclpYa3BJRDArSUdkbGRGWmhiSFZsY3loaFkyTmxjM052Y2l3Z2EyVjVMQ0J3WVhSb0tTeGNjbHh1SUNBZ0lHMWhjbXQxY0RvZ0tHdGxlU2tnUFQ0Z2EyVjVJRDhnWVdOalpYTnpiM0l1ZG1Gc2RXVnpXMnRsZVYwdVpXd2dPaUJoWTJObGMzTnZjaTUyWVd4MVpYTmJURWxDWDBGVVZGSXVVMFZNUmwwdVpXd3NYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQnBaaUFvYVhOQmNuSmhlU2gyWVd4MVpYTXBLU0I3WEhKY2JpQWdJQ0J0YjJScFpubFViMEZ5Y21GNVFXTmpaWE56YjNJb1lXTmpaWE56YjNJcE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2NtVjBkWEp1SUdGalkyVnpjMjl5TzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQndjbVZ3WVhKbFEyaGhibWRsVDJKcVpXTjBJQ2hqYUdGdVoyVlBZbW9wSUh0Y2NseHVJQ0J5WlhSMWNtNGdiV0Z3S0dOb1lXNW5aVTlpYWl3Z0tIWXBJRDArSUh0Y2NseHVJQ0FnSUdOdmJuTjBJR1p2Y21ObFpDQTlJR2x6VDJKcVpXTjBLSFlwSUNZbUlFOWlhbVZqZEM1clpYbHpLSFlwV3pCZElEMDlQU0FuWm05eVkyVW5PMXh5WEc1Y2NseHVJQ0FnSUhKbGRIVnliaUI3WEhKY2JpQWdJQ0FnSUhaaGJIVmxPaUJtYjNKalpXUWdQeUIyV3lkbWIzSmpaU2RkSURvZ2RpeGNjbHh1SUNBZ0lDQWdkSGx3WlRvZ0ozWmhiSFZsSnl4Y2NseHVJQ0FnSUNBZ1ptOXlZMlU2SUdadmNtTmxaQ3hjY2x4dUlDQWdJSDA3WEhKY2JpQWdmU2s3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHZGxkRU52YlhCdmJtVnVkQ0FvY0dGMGFDa2dlMXh5WEc0Z0lHeGxkQ0JqYjIxd2IyNWxiblFnUFNCRlRFVk5SVTVVVTFzZ2NHRjBhRnN3WFNCZE8xeHlYRzVjY2x4dUlDQm1iM0lnS0d4bGRDQnBJRDBnTVRzZ2FTQThJSEJoZEdndWJHVnVaM1JvT3lCcEt5c3BJSHRjY2x4dUlDQWdJR052YlhCdmJtVnVkQ0E5SUdOdmJYQnZibVZ1ZEM1emRHRjBaVnNnY0dGMGFGdHBYU0JkTzF4eVhHNGdJQ0FnWEhKY2JpQWdJQ0JwWmlBb1kyOXRjRzl1Wlc1MExtbHpUR2x6ZENBbUppQnBJQ0U5UFNBb2NHRjBhQzVzWlc1bmRHZ2dMVEVwS1NCN1hISmNiaUFnSUNBZ0lHTnZiWEJ2Ym1WdWRDQTlJR052YlhCdmJtVnVkQzVzYVhOMFNYUmxiVHRjY2x4dUlDQWdJQ0FnYVNzOU1qdGNjbHh1SUNBZ0lIMWNjbHh1SUNCOVhISmNibHh5WEc0Z0lISmxkSFZ5YmlCamIyMXdiMjVsYm5RN1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJR2RsZEU5dWJIbFdZV3gxWlhNZ0tHOWlhaWtnZTF4eVhHNGdJSEpsZEhWeWJpQnRZWEFvYjJKcUxDQW9ZbWx1WkdsdVoxWmhiSFZsY3lrZ1BUNGdZbWx1WkdsdVoxWmhiSFZsYzFzbmRtRnNkV1VuWFNrN1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJR2RsZEZaaGJIVmxjeUFvWVdOalpYTnpiM0lzSUd0bGVTd2djM1JoZEdWUVlYUm9LU0I3WEhKY2JpQWdZMjl1YzNRZ2RtRnNkV1Z6SUQwZ1lXTmpaWE56YjNJdWRtRnNkV1Z6TzF4eVhHNGdJR052Ym5OMElHTnZiWEJ2Ym1WdWRDQTlJR0ZqWTJWemMyOXlMbU52YlhCdmJtVnVkRHRjY2x4dVhISmNiaUFnYVdZZ0tDRnJaWGtwSUh0Y2NseHVJQ0FnSUhKbGRIVnliaUJuWlhSV1lXeDFaWE5VY21WbEtIWmhiSFZsY3l3Z1kyOXRjRzl1Wlc1MExDQjdmU2s3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0JqYjI1emRDQmlhVzVrYVc1bklEMGdZMjl0Y0c5dVpXNTBMbk4wWVhSbFcydGxlVjA3WEhKY2JpQWdhV1lnS0dKcGJtUnBibWN1YVhOTWFYTjBJSHg4SUdKcGJtUnBibWN1YVhORGIyMXdiMjVsYm5RcElIdGNjbHh1SUNBZ0lISmxkSFZ5YmlCamNtVmhkR1ZCWTJObGMzTnZjaWh6ZEdGMFpWQmhkR2d1WTI5dVkyRjBLR3RsZVNrcE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2NtVjBkWEp1SUhaaGJIVmxjMXRyWlhsZExuWmhiSFZsTzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQm5aWFJXWVd4MVpYTlVjbVZsSUNoMllXeDFaWE1zSUdOdmJYQnZibVZ1ZEN3Z2RtRnNkV1Z6VkhKbFpTa2dlMXh5WEc0Z0lHWnZja1ZoWTJnb2RtRnNkV1Z6TENBb2RtRnNjeXdnWW1sdVpHbHVaMDVoYldVcElEMCtJSHRjY2x4dUlDQWdJR2xtSUNob1lYTW9Va1ZUUlZKV1JVUmZRa2xPUkVsT1IxOU9RVTFGVXl3Z1ltbHVaR2x1WjA1aGJXVXBLU0I3WEhKY2JpQWdJQ0FnSUhKbGRIVnlianRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCamIyNXpkQ0JpYVc1a2FXNW5JRDBnWTI5dGNHOXVaVzUwTG5OMFlYUmxXMkpwYm1ScGJtZE9ZVzFsWFR0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvWW1sdVpHbHVaeTVwYzB4cGMzUXBJSHRjY2x4dUlDQWdJQ0FnZG1Gc2RXVnpWSEpsWlZ0aWFXNWthVzVuVG1GdFpWMGdQU0JiWFR0Y2NseHVJQ0FnSUNBZ2RtRnNkV1Z6VzJKcGJtUnBibWRPWVcxbFhTNW1iM0pGWVdOb0tDaGxiQ3dnYVNrZ1BUNGdlMXh5WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR2wwWlcxV1lXeDFaWE1nUFNCMllXeDFaWE5VY21WbFcySnBibVJwYm1kT1lXMWxYVnRwWFNBOUlIdDlPMXh5WEc0Z0lDQWdJQ0FnSUdkbGRGWmhiSFZsYzFSeVpXVW9kbUZzZFdWelcySnBibVJwYm1kT1lXMWxYVnRwWFZ0aWFXNWthVzVuTG14cGMzUkpkR1Z0TG01aGJXVmRMQ0JpYVc1a2FXNW5MbXhwYzNSSmRHVnRMQ0JwZEdWdFZtRnNkV1Z6S1R0Y2NseHVJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQWdJSEpsZEhWeWJqdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JwWmlBb1ltbHVaR2x1Wnk1cGMwTnZiWEJ2Ym1WdWRDa2dlMXh5WEc0Z0lDQWdJQ0JqYjI1emRDQmpiMjF3YjI1bGJuUldZV3gxWlhNZ1BTQjJZV3gxWlhOVWNtVmxXMkpwYm1ScGJtZE9ZVzFsWFNBOUlIdDlPMXh5WEc0Z0lDQWdJQ0JuWlhSV1lXeDFaWE5VY21WbEtIWmhiSFZsYzF0aWFXNWthVzVuVG1GdFpWMHNJR0pwYm1ScGJtY3NJR052YlhCdmJtVnVkRlpoYkhWbGN5azdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnZG1Gc2RXVnpWSEpsWlZzZ1kyOXRjRzl1Wlc1MExsOXNhVzVyYzF0aWFXNWthVzVuVG1GdFpWMGdmSHdnWW1sdVpHbHVaMDVoYldVZ1hTQTlJSFpoYkhNdWRtRnNkV1U3WEhKY2JpQWdmU2s3WEhKY2JseHlYRzRnSUhKbGRIVnliaUIyWVd4MVpYTlVjbVZsTzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQnRiM1psVlhCVGRHRjBaVkJoZEdnZ0tHeGxkbVZzTENCemRHRjBaVkJoZEdncElIdGNjbHh1SUNCc1pYUWdiR0Z6ZEVsa2VDQTlJSE4wWVhSbFVHRjBhQzVzWlc1bmRHZzdYSEpjYmx4eVhHNGdJR2xtSUNoc1pYWmxiQ0E5UFQwZ0p5Y3BJSHRjY2x4dUlDQWdJSEpsZEhWeWJpQmpjbVZoZEdWQlkyTmxjM052Y2loemRHRjBaVkJoZEdndWMyeHBZMlVvTUN3Z01pa3BPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdhV1lnS0dselUzUnlhVzVuS0d4bGRtVnNLU2tnZTF4eVhHNGdJQ0FnZDJocGJHVWdLR3hoYzNSSlpIZ3RMU2tnZTF4eVhHNGdJQ0FnSUNCcFppQW9jM1JoZEdWUVlYUm9XMnhoYzNSSlpIaGRJRDA5UFNCc1pYWmxiQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lHSnlaV0ZyTzF4eVhHNGdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjbVYwZFhKdUlHTnlaV0YwWlVGalkyVnpjMjl5S0hOMFlYUmxVR0YwYUM1emJHbGpaU2d3TENCc1lYTjBTV1I0SUNzZ01Ta3BPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdiR1YyWld3Z1BTQnNaWFpsYkNCOGZDQXhPMXh5WEc0Z0lIZG9hV3hsSUNoc1lYTjBTV1I0TFMwZ0ppWWdiR1YyWld3dExTa2dlMXh5WEc0Z0lDQWdhV1lnS0dselRuVnRZbVZ5S0N0emRHRjBaVkJoZEdoYmJHRnpkRWxrZUNBdElERmRLU2tnZTF4eVhHNGdJQ0FnSUNCc1lYTjBTV1I0TFMwN1hISmNiaUFnSUNCOVhISmNiaUFnZlZ4eVhHNWNjbHh1SUNCeVpYUjFjbTRnWTNKbFlYUmxRV05qWlhOemIzSW9jM1JoZEdWUVlYUm9Mbk5zYVdObEtEQXNJR3hoYzNSSlpIZ2dLeUF4S1NrN1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJRzF2WkdsbWVWUnZRWEp5WVhsQlkyTmxjM052Y2lBb1lXTmpaWE56YjNJcElIdGNjbHh1SUNCUFltcGxZM1F1WVhOemFXZHVLR0ZqWTJWemMyOXlMQ0I3WEhKY2JpQWdJQ0JuWlhRNklDaHVkVzBwSUQwK0lHTnlaV0YwWlVGalkyVnpjMjl5S0dGalkyVnpjMjl5TG5CaGRHZ3VZMjl1WTJGMEtHNTFiU3dnWVdOalpYTnpiM0l1WTI5dGNHOXVaVzUwTG14cGMzUkpkR1Z0TG01aGJXVXBLU3hjY2x4dVhISmNiaUFnSUNCd2RYTm9PaUFvWld4ektTQTlQaUJ0YjJScFpubE1hWE4wS0NkaFpHUW5MQ0I3SUhOMFlYSjBPaUJoWTJObGMzTnZjaTUyWVd4MVpYTXViR1Z1WjNSb0xDQmxiSE1nZlN3Z1lXTmpaWE56YjNJcExGeHlYRzRnSUNBZ2RXNXphR2xtZERvZ0tHVnNjeWtnUFQ0Z2JXOWthV1o1VEdsemRDZ25ZV1JrSnl3Z2V5QnpkR0Z5ZERvZ01Dd2daV3h6SUgwc0lHRmpZMlZ6YzI5eUtTeGNjbHh1SUNBZ0lHRmtaRG9nS0hOMFlYSjBMQ0JsYkhNcElEMCtJRzF2WkdsbWVVeHBjM1FvSjJGa1pDY3NJSHNnYzNSaGNuUXNJR1ZzY3lCOUxDQmhZMk5sYzNOdmNpa3NYSEpjYmx4eVhHNGdJQ0FnY0c5d09pQW9iblZ0S1NBOVBpQnRiMlJwWm5sTWFYTjBLQ2R5WlcxdmRtVW5MQ0I3SUhOMFlYSjBPaUJoWTJObGMzTnZjaTUyWVd4MVpYTXViR1Z1WjNSb0lDMGdLRzUxYlNCOGZDQXhLU3dnYm5WdElIMHNJR0ZqWTJWemMyOXlLU3hjY2x4dUlDQWdJSE5vYVdaME9pQW9iblZ0S1NBOVBpQnRiMlJwWm5sTWFYTjBLQ2R5WlcxdmRtVW5MQ0I3SUhOMFlYSjBPaUF3TENCdWRXMGdmU3dnWVdOalpYTnpiM0lwTEZ4eVhHNGdJQ0FnY21WdGIzWmxPaUFvYzNSaGNuUXNJRzUxYlNrZ1BUNGdiVzlrYVdaNVRHbHpkQ2duY21WdGIzWmxKeXdnZXlCemRHRnlkQ3dnYm5WdElIMHNJR0ZqWTJWemMyOXlLU3hjY2x4dVhISmNiaUFnSUNCc1pXNW5kR2c2SUNncElEMCtJR0ZqWTJWemMyOXlMblpoYkhWbGN5NXNaVzVuZEdnc1hISmNiaUFnSUNCMllXeDFaVG9nS0NrZ1BUNGdiV0Z3VEdsemRDaGhZMk5sYzNOdmNpa3NYSEpjYmlBZ0lDQm1iM0pGWVdOb09pQW9ZMklwSUQwK0lHbDBaWEpoZEdWTWFYTjBWbUZzZFdWektHRmpZMlZ6YzI5eUxDQmpZaWtzWEhKY2JpQWdJQ0JtYVd4MFpYSTZJQ2hqWWlrZ1BUNGdabWxzZEdWeVRHbHpkQ2hoWTJObGMzTnZjaXdnWTJJcExGeHlYRzRnSUNBZ2JXRndPaUFvWTJJcElEMCtJRzFoY0V4cGMzUW9ZV05qWlhOemIzSXNJR05pS1N4Y2NseHVJQ0I5S1R0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdhWFJsY21GMFpVeHBjM1JXWVd4MVpYTWdLR0ZqWTJWemMyOXlMQ0JqWWlrZ2UxeHlYRzRnSUdGalkyVnpjMjl5TG5aaGJIVmxjeTVtYjNKRllXTm9LQ2hsYkN3Z2FTa2dQVDVjY2x4dUlDQWdJR05pS0Z4eVhHNGdJQ0FnSUNCblpYUldZV3gxWlhOVWNtVmxLR1ZzVzJGalkyVnpjMjl5TG1OdmJYQnZibVZ1ZEM1c2FYTjBTWFJsYlM1dVlXMWxYU3dnWVdOalpYTnpiM0l1WTI5dGNHOXVaVzUwTG14cGMzUkpkR1Z0TENCN2ZTa3NYSEpjYmlBZ0lDQWdJR2xjY2x4dUlDQXBLVHRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z1ptbHNkR1Z5VEdsemRDQW9ZV05qWlhOemIzSXNJR05pS1NCN1hISmNiaUFnWTI5dWMzUWdibVYzVEdsemRDQTlJRnRkTzF4eVhHNWNjbHh1SUNCcGRHVnlZWFJsVEdsemRGWmhiSFZsY3loaFkyTmxjM052Y2l3Z0tHVnNMQ0JwS1NBOVBpQjdYSEpjYmlBZ0lDQnBaaUFvWTJJb1pXd3NJR2twS1NCN1hISmNiaUFnSUNBZ0lHNWxkMHhwYzNRdWNIVnphQ2hsYkNrN1hISmNiaUFnSUNCOVhISmNiaUFnZlNrN1hISmNibHh5WEc0Z0lISmxkSFZ5YmlCdVpYZE1hWE4wTzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQnRZWEJNYVhOMElDaGhZMk5sYzNOdmNpd2dZMklwSUh0Y2NseHVJQ0JqYjI1emRDQnVaWGRNYVhOMElEMGdXMTA3WEhKY2JpQWdhWFJsY21GMFpVeHBjM1JXWVd4MVpYTW9ZV05qWlhOemIzSXNJQ2hsYkN3Z2FTa2dQVDRnYm1WM1RHbHpkQzV3ZFhOb0tDQmpZaUEvSUdOaUtHVnNMQ0JwS1NBNklHVnNJQ2twTzF4eVhHNGdJSEpsZEhWeWJpQnVaWGRNYVhOME8xeHlYRzU5WEhKY2JpSXNJbWx0Y0c5eWRDQk1TVUpmUVZSVVVpQm1jbTl0SUNjdUwyZHNiMkpoYkhNdllYUjBjbWxpZFhSbGN5YzdYSEpjYmx4eVhHNXBiWEJ2Y25RZ2V5QnpaWFFzSUdadmNrVmhZMmdzSUcxaGNDd2dkRzlQWW1wbFkzUWdmU0JtY205dElDY3VMMmhsYkhCbGNuTXZiMkpxWldOMEp6dGNjbHh1WEhKY2JtbHRjRzl5ZENCN1hISmNiaUFnYVhORmJYQjBlU3hjY2x4dUlDQnBjMEZ5Y21GNUxGeHlYRzRnSUdselQySnFaV04wTEZ4eVhHNTlJR1p5YjIwZ0p5NHZhR1ZzY0dWeWN5OWphR1ZqYTJWeWN5YzdYSEpjYmx4eVhHNXBiWEJ2Y25RZ1lYSmxSWEYxWVd3Z1puSnZiU0FuTGk5b1pXeHdaWEp6TDJWeGRXRnNhWFI1Snp0Y2NseHVhVzF3YjNKMElIc2dhR0Z6SUgwZ1puSnZiU0FuTGk5b1pXeHdaWEp6TDJOdmJXMXZiaWM3WEhKY2JseHlYRzVwYlhCdmNuUWdlMXh5WEc0Z0lHZGxkRU52YlhCdmJtVnVkQ3hjY2x4dUlDQmpjbVZoZEdWQlkyTmxjM052Y2l4Y2NseHVJQ0J3Y21Wd1lYSmxRMmhoYm1kbFQySnFaV04wTEZ4eVhHNGdJR2RsZEU5dWJIbFdZV3gxWlhNc1hISmNiaUFnYzJWMFUzUmhkR1VzWEhKY2JuMGdabkp2YlNBbkxpOVRkR0YwWlNjN1hISmNibHh5WEc1cGJYQnZjblFnZXlCeVpXNWtaWEpEYUdGdVoyVnpJSDBnWm5KdmJTQW5MaTlXYVdWM0p6dGNjbHh1WEhKY2JtbHRjRzl5ZENCN0lGWkJURlZGWDFSWlVFVlRJSDBnWm5KdmJTQW5MaTlFWldacGJtbDBhVzl1Snp0Y2NseHVYSEpjYm1sdGNHOXlkQ0JDYVc1a2FXNW5UbTkwUlhocGMzUnpSWEp5YjNJZ1puSnZiU0FuTGk5bGNuSnZjbk12UW1sdVpHbHVaMDV2ZEVWNGFYTjBjMFZ5Y205eUp6dGNjbHh1WEhKY2JtVjRjRzl5ZENCN1hISmNiaUFnYzJWMFZtRnNkV1Z6TEZ4eVhHNGdJR055WldGMFpWTjBZWFJsVG05a1pYTXNYSEpjYmlBZ2JXOWthV1o1VEdsemRDeGNjbHh1SUNCemRHRnlkRlJ5WVc1ellXTjBhVzl1TEZ4eVhHNGdJR0Z3Y0d4NVEyaGhibWRsY3l4Y2NseHVJQ0J6Wlc1a1ZHOVNaVzVrWlhKUmRXVjFaU3hjY2x4dWZUdGNjbHh1WEhKY2JtTnZibk4wSUVOSVFVNUhSVk1nUFNCN0lHTm9ZVzVuWlhNNklIdDlMQ0JqYjJ4c1pXTjBhVzVuT2lCbVlXeHpaU0I5TzF4eVhHNWpiMjV6ZENCUVVrOU5TVk5GVTE5U1JWTlBURlpGVXlBOUlGdGRPMXh5WEc1amIyNXpkQ0JNU1VaRlgwTlpRMHhGWDBoQlRrUk1SVkpUSUQwZ2V5QnNhWE4wT2lCYlhTQjlPMXh5WEc1Y2NseHVablZ1WTNScGIyNGdjM1JoY25SVWNtRnVjMkZqZEdsdmJpQW9LU0I3WEhKY2JpQWdZWEJ3YkhsRGFHRnVaMlZ6S0NrN1hISmNiaUFnUTBoQlRrZEZVeTVqYjJ4c1pXTjBhVzVuSUQwZ2RISjFaVHRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z1lYQndiSGxEYUdGdVoyVnpJQ2dwSUh0Y2NseHVJQ0JqYjI1emRDQmphR0Z1WjJWeklEMGdRMGhCVGtkRlV5NWphR0Z1WjJWek8xeHlYRzRnSUVOSVFVNUhSVk11WTJoaGJtZGxjeUE5SUh0OU8xeHlYRzRnSUhKbGJtUmxja05vWVc1blpYTW9ZMmhoYm1kbGN5azdYSEpjYmlBZ2NtVjBkWEp1SUhKMWJreHBabVZEZVdOc1pVaHZiMnR6S0NrN1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJSEoxYmt4cFptVkRlV05zWlVodmIydHpJQ2dwSUh0Y2NseHVJQ0JqYjI1emRDQnNhV1psUTNsamJHVklZVzVrYkdWeWN5QTlJRXhKUmtWZlExbERURVZmU0VGT1JFeEZVbE11YkdsemREdGNjbHh1SUNCTVNVWkZYME5aUTB4RlgwaEJUa1JNUlZKVExteHBjM1FnUFNCYlhUdGNjbHh1SUNCc2FXWmxRM2xqYkdWSVlXNWtiR1Z5Y3k1bWIzSkZZV05vS0Nob0tTQTlQaUJvS0NrcE8xeHlYRzVjY2x4dUlDQnBaaUFvSVdselJXMXdkSGtvUTBoQlRrZEZVeTVqYUdGdVoyVnpLU2tnZTF4eVhHNGdJQ0FnY21WMGRYSnVJR0Z3Y0d4NVEyaGhibWRsY3lncE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2NtVjBkWEp1SUdacGJtRnNhWHBsVkhKaGJuTmhZM1JwYjI0b0tUdGNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnWm1sdVlXeHBlbVZVY21GdWMyRmpkR2x2YmlBb0tTQjdYSEpjYmlBZ1EwaEJUa2RGVXk1amIyeHNaV04wYVc1bklEMGdabUZzYzJVN1hISmNiaUFnYkdWMElISmxjMjlzZG1WUWNtOXRhWE5sTzF4eVhHNWNjbHh1SUNCM2FHbHNaU0FvS0hKbGMyOXNkbVZRY205dGFYTmxJRDBnVUZKUFRVbFRSVk5mVWtWVFQweFdSVk11Y0c5d0tDa3BLU0I3WEhKY2JpQWdJQ0J5WlhOdmJIWmxVSEp2YldselpTaDBjblZsS1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUhKbGRIVnliaUJRY205dGFYTmxMbkpsYzI5c2RtVW9kSEoxWlNrN1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJSE5sYm1SVWIxSmxibVJsY2xGMVpYVmxJQ2h3WVhSb0xDQmphR0Z1WjJVcElIdGNjbHh1SUNCelpYUW9RMGhCVGtkRlV5NWphR0Z1WjJWekxDQndZWFJvTENCamFHRnVaMlVwTzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQnBjME52Ykd4bFkzUnBibWREYUdGdVoyVnpJQ2dwSUh0Y2NseHVJQ0J5WlhSMWNtNGdRMGhCVGtkRlV5NWpiMnhzWldOMGFXNW5PMXh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCaFpHUk1hV1psUTNsamJHVkliMjlySUNob2IyOXJWSGx3WlN3Z1ltbHVaR2x1Wnl3Z2RtRnNkV1Z6TENCaFkyTmxjM052Y2l3Z2FXUjRLU0I3WEhKY2JpQWdZMjl1YzNRZ2FHOXZheUE5SUdKcGJtUnBibWN1YUc5dmEzTmJhRzl2YTFSNWNHVmRPMXh5WEc0Z0lGeHlYRzRnSUV4SlJrVmZRMWxEVEVWZlNFRk9SRXhGVWxNdWJHbHpkQzV3ZFhOb0tDZ3BJRDArSUh0Y2NseHVJQ0FnSUdOdmJuTjBJR1ZzSUQwZ2RtRnNkV1Z6VzJKcGJtUnBibWN1Ym1GdFpTQjhmQ0JNU1VKZlFWUlVVaTVUUlV4R1hTNWxiRHRjY2x4dUlDQWdJR052Ym5OMElIWmhiSE1nUFNBaFltbHVaR2x1Wnk1dVlXMWxJRDhnWjJWMFQyNXNlVlpoYkhWbGN5aDJZV3gxWlhNcElEb2dkbUZzZFdWelcySnBibVJwYm1jdWJtRnRaVjB1ZG1Gc2RXVTdYSEpjYmlBZ0lDQm9iMjlyS0dWc0xDQjJZV3h6TENCaFkyTmxjM052Y2l3Z2FXUjRLVHRjY2x4dUlDQjlLVHRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z1kzSmxZWFJsVTNSaGRHVk9iMlJsY3lBb2MzUmhkR1ZRWVhSb0tTQjdYSEpjYmlBZ1kyOXVjM1FnWTI5dGNHOXVaVzUwSUQwZ1oyVjBRMjl0Y0c5dVpXNTBLSE4wWVhSbFVHRjBhQ2s3WEhKY2JpQWdZMjl1YzNRZ2RtRnNkV1Z6VG05a1pTQTlJR055WldGMFpWTjBZWFJsVG05a1pTaGpiMjF3YjI1bGJuUXBPMXh5WEc0Z0lITmxkRk4wWVhSbEtITjBZWFJsVUdGMGFDd2dkbUZzZFdWelRtOWtaU2s3WEhKY2JseHlYRzRnSUdadmNrVmhZMmdvWTI5dGNHOXVaVzUwTG5OMFlYUmxMQ0FvWW1sdVpHbHVaeXdnWW1sdVpHbHVaMDVoYldVcElEMCtJSHRjY2x4dUlDQWdJR2xtSUNoaWFXNWthVzVuTG1selEyOXRjRzl1Wlc1MEtTQjdYSEpjYmlBZ0lDQWdJR055WldGMFpWTjBZWFJsVG05a1pYTW9jM1JoZEdWUVlYUm9MbU52Ym1OaGRDaGlhVzVrYVc1blRtRnRaU2twTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJSDBwTzF4eVhHNWNjbHh1SUNCamIyNXpkQ0JoWTJObGMzTnZjaUE5SUdOeVpXRjBaVUZqWTJWemMyOXlLSE4wWVhSbFVHRjBhQ2s3WEhKY2JpQWdZV1JrVEdsbVpVTjVZMnhsU0c5dmF5Z25iVzkxYm5RbkxDQmpiMjF3YjI1bGJuUXVjM1JoZEdWYlRFbENYMEZVVkZJdVUwVk1SbDBzSUhaaGJIVmxjMDV2WkdVc0lHRmpZMlZ6YzI5eUxDQnpkR0YwWlZCaGRHZ3VjMnhwWTJVb0xUSXBXekJkS1R0Y2NseHVYSEpjYmlBZ2NtVjBkWEp1SUhaaGJIVmxjMDV2WkdVN1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJR055WldGMFpWTjBZWFJsVG05a1pTQW9ZMjl0Y0c5dVpXNTBLU0I3WEhKY2JpQWdZMjl1YzNRZ2RtRnNkV1Z6VG05a1pYTWdQU0J0WVhBb1kyOXRjRzl1Wlc1MExuTjBZWFJsTENBb1ltbHVaR2x1WnlrZ1BUNGdlMXh5WEc0Z0lDQWdZMjl1YzNRZ2RtRnNkV1ZPYjJSbElEMGdZbWx1WkdsdVp5NXBjMHhwYzNRZ1B5QmJYU0E2SUh0OU8xeHlYRzVjY2x4dUlDQWdJSEpsZEhWeWJpQldRVXhWUlY5VVdWQkZVeTV5WldSMVkyVW9LR0VzSUd0bGVTa2dQVDRnZTF4eVhHNGdJQ0FnSUNCc1pYUWdkbUZzZFdVN1hISmNibHh5WEc0Z0lDQWdJQ0J6ZDJsMFkyZ2dLR3RsZVNrZ2UxeHlYRzRnSUNBZ0lDQWdJR05oYzJVZ0ozWmhiSFZsSnpwY2NseHVJQ0FnSUNBZ0lDQmpZWE5sSUNkb2RHMXNKenBjY2x4dUlDQWdJQ0FnSUNBZ0lIWmhiSFZsSUQwZ1ltbHVaR2x1Wnk1cGJtbDBWbUZzZFdVZ2ZId2dKeWRjY2x4dUlDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JrWldaaGRXeDBPbHh5WEc0Z0lDQWdJQ0FnSUNBZ2RtRnNkV1VnUFNCN2ZUdGNjbHh1SUNBZ0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUNBZ1lWdHJaWGxkSUQwZ2RtRnNkV1U3WEhKY2JseHlYRzRnSUNBZ0lDQnlaWFIxY200Z1lUdGNjbHh1SUNBZ0lIMHNJSFpoYkhWbFRtOWtaU2s3WEhKY2JpQWdmU2s3WEhKY2JseHlYRzRnSUhKbGRIVnliaUJQWW1wbFkzUXVZWE56YVdkdUtIWmhiSFZsYzA1dlpHVnpMQ0I3SUZ0TVNVSmZRVlJVVWk1VFJVeEdYVG9nZEc5UFltcGxZM1FvVmtGTVZVVmZWRmxRUlZNc0lIdDlLU0I5S1R0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdjMlYwVm1Gc2RXVnpJQ2hqYUdGdVoyVldZV3gxWlhNc0lITjBZWFJsVUdGMGFDd2dZMkZzYkdWa1JHVndaVzVrWlc1alpYTXBJSHRjY2x4dUlDQmpZV3hzWldSRVpYQmxibVJsYm1ObGN5QTlJR05oYkd4bFpFUmxjR1Z1WkdWdVkyVnpJSHg4SUZ0ZE8xeHlYRzRnSUdOdmJuTjBJR0ZqWTJWemMyOXlJRDBnWTNKbFlYUmxRV05qWlhOemIzSW9jM1JoZEdWUVlYUm9LVHRjY2x4dVhISmNiaUFnYVdZZ0tDRmhZMk5sYzNOdmNpNTJZV3gxWlhNcElIdGNjbHh1SUNBZ0lHRmpZMlZ6YzI5eUxuWmhiSFZsY3lBOUlHTnlaV0YwWlZOMFlYUmxUbTlrWlhNb2MzUmhkR1ZRWVhSb0tUdGNjbHh1SUNBZ0lHTnZibk4wSUhOMFlYSjBJRDBnSzNOMFlYUmxVR0YwYUM1emJHbGpaU2d0TWlsYk1GMDdYSEpjYmlBZ0lDQnpaVzVrVkc5U1pXNWtaWEpSZFdWMVpTaHpkR0YwWlZCaGRHZ3NJSHNnVzB4SlFsOUJWRlJTTGtaVlRFeGZRMGhCVGtkRlhUb2dleUJoWkdRNklIc2djM1JoY25Rc0lHVnVaRG9nYzNSaGNuUWdLeUF4SUgwZ2ZTQjlLVnh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdabTl5UldGamFDaGphR0Z1WjJWV1lXeDFaWE1zSUNoamFHRnVaMlVzSUdKcGJtUnBibWRPWVcxbEtTQTlQaUJ6WlhSV1lXeDFaU2hpYVc1a2FXNW5UbUZ0WlN3Z1kyaGhibWRsTENCaFkyTmxjM052Y2l3Z1kyRnNiR1ZrUkdWd1pXNWtaVzVqWlhNcEtUdGNjbHh1WEhKY2JpQWdZV1JrVEdsbVpVTjVZMnhsU0c5dmF5Z25kWEJrWVhSbEp5d2dZV05qWlhOemIzSXVZMjl0Y0c5dVpXNTBMbk4wWVhSbFcweEpRbDlCVkZSU0xsTkZURVpkTENCaFkyTmxjM052Y2k1MllXeDFaWE1zSUdGalkyVnpjMjl5TENCemRHRjBaVkJoZEdndWMyeHBZMlVvTFRJcFd6QmRLVHRjY2x4dVhISmNiaUFnYVdZZ0tHbHpRMjlzYkdWamRHbHVaME5vWVc1blpYTW9LU2tnZTF4eVhHNGdJQ0FnY21WMGRYSnVJRzVsZHlCUWNtOXRhWE5sS0NoeVpYTXBJRDArSUZCU1QwMUpVMFZUWDFKRlUwOU1Wa1ZUTG5CMWMyZ29jbVZ6S1NrN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCeVpYUjFjbTRnWVhCd2JIbERhR0Z1WjJWektDazdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUhObGRGWmhiSFZsSUNoaWFXNWthVzVuVG1GdFpTd2dZMmhoYm1kbExDQmhZMk5sYzNOdmNpd2dZMkZzYkdWa1JHVndaVzVrWlc1alpYTXBJSHRjY2x4dUlDQmpiMjV6ZENCemRHRjBaVkJoZEdnZ1BTQmhZMk5sYzNOdmNpNXdZWFJvTzF4eVhHNGdJR052Ym5OMElHTnZiWEJ2Ym1WdWRDQTlJR0ZqWTJWemMyOXlMbU52YlhCdmJtVnVkRHRjY2x4dUlDQmpiMjV6ZENCMllXeDFaWE1nUFNCaFkyTmxjM052Y2k1MllXeDFaWE03WEhKY2JpQWdiR1YwSUdKcGJtUnBibWNnUFNCamIyMXdiMjVsYm5RdWMzUmhkR1ZiWW1sdVpHbHVaMDVoYldWZE8xeHlYRzVjY2x4dUlDQnBaaUFvSVdKcGJtUnBibWNwSUh0Y2NseHVJQ0FnSUdKcGJtUnBibWRPWVcxbElEMGdZMjl0Y0c5dVpXNTBMbTkxZEdWeVRtRnRaWE5iWW1sdVpHbHVaMDVoYldWZE8xeHlYRzRnSUNBZ1ltbHVaR2x1WnlBOUlHTnZiWEJ2Ym1WdWRDNXpkR0YwWlZ0aWFXNWthVzVuVG1GdFpWMDdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQnBaaUFvSVdKcGJtUnBibWNwSUh0Y2NseHVJQ0FnSUhSb2NtOTNJRzVsZHlCQ2FXNWthVzVuVG05MFJYaHBjM1J6UlhKeWIzSW9ZbWx1WkdsdVowNWhiV1VzSUdOdmJYQnZibVZ1ZEM1dVlXMWxMQ0J6ZEdGMFpWQmhkR2dwTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnYVdZZ0tHTm9ZVzVuWlM1MGVYQmxJRDA5UFNBbmRtRnNkV1VuS1NCN1hISmNiaUFnSUNCcFppQW9ZbWx1WkdsdVp5NXBjMHhwYzNRcElIdGNjbHh1SUNBZ0lDQWdjbVYwZFhKdUlITmxkRlpoYkhWbFJtOXlUR2x6ZENoaWFXNWthVzVuTENCamFHRnVaMlVzSUhaaGJIVmxjMXRpYVc1a2FXNW5UbUZ0WlYwc0lHRmpZMlZ6YzI5eUtUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JwWmlBb2FYTlBZbXBsWTNRb1kyaGhibWRsTG5aaGJIVmxLU0FtSmlCaWFXNWthVzVuTG1selEyOXRjRzl1Wlc1MEtTQjdYSEpjYmlBZ0lDQWdJSEpsZEhWeWJpQnpaWFJXWVd4MVpVWnZja052YlhCdmJtVnVkQ2hpYVc1a2FXNW5MQ0JqYUdGdVoyVXNJR052YlhCdmJtVnVkQ3dnYzNSaGRHVlFZWFJvS1R0Y2NseHVJQ0FnSUgxY2NseHVJQ0I5WEhKY2JseHlYRzRnSUdOdmJuTjBJR1Z4ZFdGc0lEMGdZWEpsUlhGMVlXd29kbUZzZFdWelcySnBibVJwYm1kT1lXMWxYVnRqYUdGdVoyVXVkSGx3WlYwc0lHTm9ZVzVuWlM1MllXeDFaU2s3WEhKY2JseHlYRzRnSUdsbUlDZ2haWEYxWVd3Z2ZId2dJV2x6Ulcxd2RIa29aWEYxWVd3cElIeDhJR05vWVc1blpTNW1iM0pqWlNrZ2UxeHlYRzRnSUNBZ2RtRnNkV1Z6VzJKcGJtUnBibWRPWVcxbFhWdGphR0Z1WjJVdWRIbHdaVjBnUFNCamFHRnVaMlV1ZG1Gc2RXVTdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tHTm9ZVzVuWlM1MGVYQmxJQ0U5UFNBbmRtRnNkV1VuS1NCN1hISmNiaUFnSUNBZ0lISmxkSFZ5YmlCelpXNWtWRzlTWlc1a1pYSlJkV1YxWlNoemRHRjBaVkJoZEdndVkyOXVZMkYwS0dKcGJtUnBibWRPWVcxbEtTd2dleUJiWTJoaGJtZGxMblI1Y0dWZE9pQm1ZV3h6WlNCOUtUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JoWkdSTWFXWmxRM2xqYkdWSWIyOXJLQ2QxY0dSaGRHVW5MQ0JpYVc1a2FXNW5MQ0IyWVd4MVpYTXNJR0ZqWTJWemMyOXlMQ0J6ZEdGMFpWQmhkR2d1YzJ4cFkyVW9MVElwV3pCZEtUdGNjbHh1SUNBZ0lHTmhiR3hsWkVSbGNHVnVaR1Z1WTJWekxuQjFjMmdvWW1sdVpHbHVaMDVoYldVZ0t5QW5PaWNnS3lCamFHRnVaMlV1ZEhsd1pTazdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDRmlhVzVrYVc1bkxtaDBiV3dwSUh0Y2NseHVJQ0FnSUNBZ2MyVjBWbUZzZFdVb1ltbHVaR2x1WjA1aGJXVXNJSHNnZG1Gc2RXVTZJR05vWVc1blpTNTJZV3gxWlN3Z2RIbHdaVG9nSjJoMGJXd25MQ0JtYjNKalpUb2dZMmhoYm1kbExtWnZjbU5sSUgwc0lHRmpZMlZ6YzI5eUxDQmpZV3hzWldSRVpYQmxibVJsYm1ObGN5azdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnWTI5dWMzUWdiR2x1YXlBOUlHTnZiWEJ2Ym1WdWRDNXNhVzVyYzF0aWFXNWthVzVuVG1GdFpWMDdYSEpjYmlBZ0lDQnBaaUFvYkdsdWF5a2dlMXh5WEc0Z0lDQWdJQ0J6WlhSV1lXeDFaU2hzYVc1ckxteHBibXNzSUhzZ2RtRnNkV1U2SUdOb1lXNW5aUzUyWVd4MVpTd2dkSGx3WlRvZ0ozWmhiSFZsSnl3Z1ptOXlZMlU2SUdOb1lXNW5aUzVtYjNKalpTQjlMQ0JoWTJObGMzTnZjaTVrYjNkdUtHeHBibXN1WTI5dGNHOXVaVzUwS1N3Z1cxMHBPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdadmNrVmhZMmdvWW1sdVpHbHVaeTVrWlhCbGJtUmhiblJ6TENBb1pHVndaVzVrWVc1MExDQmtaWEJsYm1SaGJuUkxaWGtwSUQwK0lIdGNjbHh1SUNBZ0lDQWdhV1lnS0doaGN5aGpZV3hzWldSRVpYQmxibVJsYm1ObGN5d2daR1Z3Wlc1a1lXNTBTMlY1S1NrZ2UxeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJqdGNjbHh1SUNBZ0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUNBZ1kyOXVjM1FnYm1WM1ZtRnNkV1VnUFNCamIyMXdiMjVsYm5RdWMzUmhkR1ZiWkdWd1pXNWtZVzUwTG01aGJXVmRMbVYyWVd4MVlYUmxXMlJsY0dWdVpHRnVkQzUwZVhCbFhTaDJZV3gxWlhNc0lHRmpZMlZ6YzI5eUtUdGNjbHh1SUNBZ0lDQWdjMlYwVm1Gc2RXVW9aR1Z3Wlc1a1lXNTBMbTVoYldVc0lIc2dkbUZzZFdVNklHNWxkMVpoYkhWbExDQjBlWEJsT2lCa1pYQmxibVJoYm5RdWRIbHdaU0I5TENCaFkyTmxjM052Y2l3Z1kyRnNiR1ZrUkdWd1pXNWtaVzVqWlhNcE8xeHlYRzRnSUNBZ2ZTazdYSEpjYmlBZ2ZWeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJ6WlhSV1lXeDFaVVp2Y2t4cGMzUWdLR0pwYm1ScGJtY3NJR05vWVc1blpTd2dZWEp5TENCaFkyTmxjM052Y2lrZ2UxeHlYRzRnSUU5aWFtVmpkRnh5WEc0Z0lDQWdMbXRsZVhNb1kyaGhibWRsTG5aaGJIVmxLVnh5WEc0Z0lDQWdMbVp2Y2tWaFkyZ29LR2twSUQwK0lITmxkRlpoYkhWbGN5Z2djSEpsY0dGeVpVTm9ZVzVuWlU5aWFtVmpkQ2hqYUdGdVoyVXVkbUZzZFdWYmFWMHBMQ0JoWTJObGMzTnZjaTV3WVhSb0xtTnZibU5oZENoaWFXNWthVzVuTG01aGJXVXNJR2tzSUdKcGJtUnBibWN1YkdsemRFbDBaVzB1Ym1GdFpTa3BLVHRjY2x4dVhISmNiaUFnWTI5dWMzUWdhVzVrWlhoRmNYVmhiR2wwZVNBOUlHRnlaVVZ4ZFdGc0tHRnljaXdnWTJoaGJtZGxMblpoYkhWbEtUdGNjbHh1SUNCc1pYUWdjbVZ0YjNabFpFTnZkVzUwSUQwZ01EdGNjbHh1SUNCbWIzSkZZV05vS0dsdVpHVjRSWEYxWVd4cGRIa3NJQ2hqYUdGdVoyVlBZbW9zSUdsa2VDa2dQVDRnZTF4eVhHNGdJQ0FnYVdZZ0tHTm9ZVzVuWlU5aWFpNXlaVzF2ZG1VcElIdGNjbHh1SUNBZ0lDQWdZMmhoYm1kbFQySnFMbkpsYlc5MlpTQTlJSEpsYlc5MlpVeHBjM1JKZEdWdEtHRnljaXdnYVdSNElDMGdjbVZ0YjNabFpFTnZkVzUwTENCaWFXNWthVzVuTENCaFkyTmxjM052Y2lrN1hISmNiaUFnSUNBZ0lISmxiVzkyWldSRGIzVnVkQ3NyTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lITmxibVJVYjFKbGJtUmxjbEYxWlhWbEtHRmpZMlZ6YzI5eUxuQmhkR2d1WTI5dVkyRjBLR0pwYm1ScGJtY3VibUZ0WlN3Z2FXUjRMQ0JpYVc1a2FXNW5MbXhwYzNSSmRHVnRMbTVoYldVcExDQjdJRnRNU1VKZlFWUlVVaTVHVlV4TVgwTklRVTVIUlYwNklHTm9ZVzVuWlU5aWFpQjlLVHRjY2x4dUlDQjlLVHRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2MyVjBWbUZzZFdWR2IzSkRiMjF3YjI1bGJuUWdLR0pwYm1ScGJtY3NJR05vWVc1blpTd2dZMjl0Y0c5dVpXNTBMQ0J6ZEdGMFpWQmhkR2dwSUh0Y2NseHVJQ0J6WlhSV1lXeDFaWE1vSUhCeVpYQmhjbVZEYUdGdVoyVlBZbXBsWTNRb1kyaGhibWRsTG5aaGJIVmxLU3dnYzNSaGRHVlFZWFJvTG1OdmJtTmhkQ2hpYVc1a2FXNW5MbTVoYldVcEtUdGNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYlc5a2FXWjVUR2x6ZENBb1lXTjBhVzl1TENCaGNtZHpMQ0JoWTJObGMzTnZjaWtnZTF4eVhHNGdJR052Ym5OMElHRnljaUE5SUdGalkyVnpjMjl5TG5aaGJIVmxjenRjY2x4dUlDQmpiMjV6ZENCc2FYTjBVR0YwYUNBOUlHRmpZMlZ6YzI5eUxuQmhkR2c3WEhKY2JpQWdZMjl1YzNRZ2FYUmxiVTVoYldVZ1BTQmhZMk5sYzNOdmNpNWpiMjF3YjI1bGJuUXViR2x6ZEVsMFpXMHVibUZ0WlR0Y2NseHVJQ0JqYjI1emRDQnpkR0Z5ZENBOUlHRnlaM011YzNSaGNuUTdYSEpjYmlBZ2JHVjBJR05vWVc1blpVOWlhaUE5SUh0OU8xeHlYRzVjY2x4dUlDQnpkMmwwWTJnZ0tHRmpkR2x2YmlrZ2UxeHlYRzRnSUNBZ1kyRnpaU0FuWVdSa0p6cGNjbHh1SUNBZ0lDQWdZMmhoYm1kbFQySnFJRDBnWVdSa1ZHOU1hWE4wS0dGeWNpd2djM1JoY25Rc0lHRnlaM011Wld4ekxDQnNhWE4wVUdGMGFDd2dhWFJsYlU1aGJXVXBPMXh5WEc0Z0lDQWdJQ0JpY21WaGF6dGNjbHh1WEhKY2JpQWdJQ0JqWVhObElDZHlaVzF2ZG1Vbk9seHlYRzRnSUNBZ0lDQmpiMjV6ZENCbGJtUWdQU0J6ZEdGeWRDQXJJQ2hoY21kekxtNTFiU0I4ZkNBeEtUdGNjbHh1SUNBZ0lDQWdZMmhoYm1kbFQySnFJRDBnY21WdGIzWmxSbkp2YlV4cGMzUW9ZWEp5TENCemRHRnlkQ3dnWlc1a0xDQmhZMk5sYzNOdmNpNWpiMjF3YjI1bGJuUXNJR0ZqWTJWemMyOXlLVHRjY2x4dUlDQWdJQ0FnWW5KbFlXczdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQm1iM0pGWVdOb0tHTm9ZVzVuWlU5aWFpd2dLR05vWVc1blpTd2dhV1I0S1NBOVBpQnpaVzVrVkc5U1pXNWtaWEpSZFdWMVpTaHNhWE4wVUdGMGFDNWpiMjVqWVhRb2FXUjRMQ0JwZEdWdFRtRnRaU3dnVEVsQ1gwRlVWRkl1UmxWTVRGOURTRUZPUjBVcExDQmphR0Z1WjJWUFltcGJhV1I0WFZ0TVNVSmZRVlJVVWk1R1ZVeE1YME5JUVU1SFJWMHBLVHRjY2x4dVhISmNiaUFnYVdZZ0tHbHpRMjlzYkdWamRHbHVaME5vWVc1blpYTW9LU2tnZTF4eVhHNGdJQ0FnY21WMGRYSnVJRzVsZHlCUWNtOXRhWE5sS0NoeVpYTXBJRDArSUZCU1QwMUpVMFZUWDFKRlUwOU1Wa1ZUTG5CMWMyZ29jbVZ6S1NrN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCeVpYUjFjbTRnWVhCd2JIbERhR0Z1WjJWektDazdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUdGa1pGUnZUR2x6ZENBb1lYSnlMQ0J6ZEdGeWRDd2daV3h6TENCc2FYTjBVR0YwYUN3Z2FYUmxiVTVoYldVcElIdGNjbHh1SUNCbGJITWdQU0JwYzBGeWNtRjVLR1ZzY3lrZ1B5QmxiSE1nT2lCYlpXeHpYVHRjY2x4dVhISmNiaUFnWld4ekxtWnZja1ZoWTJnb0tHVnNMQ0JwS1NBOVBpQjdYSEpjYmlBZ0lDQmhjbkl1YzNCc2FXTmxLR2tnS3lCemRHRnlkQ3dnTUN3Z2JuVnNiQ2s3WEhKY2JpQWdJQ0J6WlhSV1lXeDFaWE1vY0hKbGNHRnlaVU5vWVc1blpVOWlhbVZqZENobGJDa3NJR3hwYzNSUVlYUm9MbU52Ym1OaGRDaHBJQ3NnYzNSaGNuUXNJR2wwWlcxT1lXMWxLU2s3WEhKY2JpQWdmU2s3WEhKY2JseHlYRzRnSUhKbGRIVnliaUI3SUZ0emRHRnlkRjA2SUhzZ1cweEpRbDlCVkZSU0xrWlZURXhmUTBoQlRrZEZYVG9nZXlCaFpHUTZJSHNnYzNSaGNuUXNJR1Z1WkRvZ2MzUmhjblFnS3lCbGJITXViR1Z1WjNSb0lIMGdmU0I5SUgwN1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJSEpsYlc5MlpVWnliMjFNYVhOMElDaGhjbklzSUhOMFlYSjBMQ0JsYm1Rc0lHeHBjM1JDYVc1a2FXNW5MQ0JoWTJObGMzTnZjaWtnZTF4eVhHNGdJR052Ym5OMElHTm9ZVzVuWlU5aWFpQTlJSHQ5TzF4eVhHNWNjbHh1SUNCbWIzSWdLR3hsZENCcElEMGdjM1JoY25RN0lHa2dQQ0JsYm1RN0lHa3JLeWtnZTF4eVhHNGdJQ0FnWTI5dWMzUWdjbVZ0YjNabFpFUlBUVTV2WkdVZ1BTQnlaVzF2ZG1WTWFYTjBTWFJsYlNoaGNuSXNJR2tzSUd4cGMzUkNhVzVrYVc1bkxDQmhZMk5sYzNOdmNpazdYSEpjYmlBZ0lDQmphR0Z1WjJWUFltcGJhVjBnUFNCN0lGdE1TVUpmUVZSVVVpNUdWVXhNWDBOSVFVNUhSVjA2SUhzZ2NtVnRiM1psT2lCeVpXMXZkbVZrUkU5TlRtOWtaU0I5SUgxY2NseHVJQ0I5WEhKY2JseHlYRzRnSUhKbGRIVnliaUJqYUdGdVoyVlBZbW83WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlISmxiVzkyWlV4cGMzUkpkR1Z0SUNoaGNuSXNJR2xrZUN3Z2JHbHpkRUpwYm1ScGJtY3NJR0ZqWTJWemMyOXlLU0I3WEhKY2JpQWdZMjl1YzNRZ2NtVnRiM1psWkU1dlpHVWdQU0JoY25JdWMzQnNhV05sS0dsa2VDd2dNU2xiTUYxYmJHbHpkRUpwYm1ScGJtY3ViR2x6ZEVsMFpXMHVibUZ0WlYwN1hISmNiaUFnWVdSa1RHbG1aVU41WTJ4bFNHOXZheWduY21WdGIzWmxKeXdnYkdsemRFSnBibVJwYm1jdWJHbHpkRWwwWlcwdWMzUmhkR1ZiVEVsQ1gwRlVWRkl1VTBWTVJsMHNJSEpsYlc5MlpXUk9iMlJsTENCaFkyTmxjM052Y2l3Z2FXUjRLVHRjY2x4dUlDQnlaWFIxY200Z2NtVnRiM1psWkU1dlpHVmJURWxDWDBGVVZGSXVVMFZNUmwwdVpXdzdYSEpjYm4xY2NseHVJaXdpYVcxd2IzSjBJRXhKUWw5QlZGUlNJR1p5YjIwZ0p5NHZaMnh2WW1Gc2N5OWhkSFJ5YVdKMWRHVnpKenRjY2x4dWFXMXdiM0owSUhzZ2RHOUVZWE5vUTJGelpTQjlJR1p5YjIwZ0p5NHZhR1ZzY0dWeWN5OWpiMjF0YjI0bk8xeHlYRzVwYlhCdmNuUWdleUJtYjNKRllXTm9MQ0J6Y0d4cGRGQnBaV05sSUgwZ1puSnZiU0FuTGk5b1pXeHdaWEp6TDI5aWFtVmpkQ2M3WEhKY2JseHlYRzVwYlhCdmNuUWdleUJwYzA1MWJXSmxjaXdnYVhOVmJtUmxabWx1WldRZ2ZTQm1jbTl0SUNjdUwyaGxiSEJsY25NdlkyaGxZMnRsY25Nbk8xeHlYRzVjY2x4dWFXMXdiM0owSUhzZ1kzSmxZWFJsUVdOalpYTnpiM0lnZlNCbWNtOXRJQ2N1TDFOMFlYUmxKenRjY2x4dVhISmNibWx0Y0c5eWRDQjdYSEpjYmlBZ2NtVndiR0ZqWlU1dlpHVnpMRnh5WEc0Z0lISmxiVzkyWlU1dlpHVXNYSEpjYmlBZ2NtVjNjbWwwWlZSdlRtOWtaU3hjY2x4dUlDQmxiWEIwZVU1dlpHVXNYSEpjYm4wZ1puSnZiU0FuTGk5b1pXeHdaWEp6TDJSdmJTYzdYSEpjYmx4eVhHNWxlSEJ2Y25RZ2UxeHlYRzRnSUdOeVpXRjBaVUZ1WkVGd2NHVnVaRk4wZVd4bGN5eGNjbHh1SUNCeVpXNWtaWEpEYUdGdVoyVnpYSEpjYm4wN1hISmNibHh5WEc1amIyNXpkQ0J5Wlc1a1pYSWdQU0I3WEhKY2JpQWdhSFJ0YkRvZ1lYQndiSGxOWVhKcmRYQXNYSEpjYmlBZ1kyeGhjM002SUdGd2NHeDVRMnhoYzNObGN5eGNjbHh1SUNCemRIbHNaVG9nWVhCd2JIbFRkSGxzWlhNc1hISmNiaUFnWVhSMGNuTTZJR0Z3Y0d4NVFYUjBjbWxpZFhSbGN5eGNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnY21WdVpHVnlRMmhoYm1kbGN5QW9ZMmhoYm1kbGN5a2dlMXh5WEc0Z0lHWnZja1ZoWTJnb1kyaGhibWRsY3l3Z0tHTnZiWEJ2Ym1WdWRFTm9ZVzVuWlhNc0lHVnNaVzFsYm5SSlpDa2dQVDRnZTF4eVhHNGdJQ0FnWTI5dWMzUWdZMjl0Y0c5dVpXNTBTV1FnUFNCUFltcGxZM1F1YTJWNWN5aGpiMjF3YjI1bGJuUkRhR0Z1WjJWektWc3dYVnh5WEc0Z0lDQWdZMjl1YzNRZ1kyOXRjRzl1Wlc1MFFXTmpaWE56YjNJZ1BTQmpjbVZoZEdWQlkyTmxjM052Y2loYlpXeGxiV1Z1ZEVsa0xDQmpiMjF3YjI1bGJuUkpaRjBwTzF4eVhHNGdJQ0FnWVhCd2JIbE5ZWEpyZFhBb1kyOXRjRzl1Wlc1MFFXTmpaWE56YjNJdVkyOXRjRzl1Wlc1MExDQmpiMjF3YjI1bGJuUkJZMk5sYzNOdmNpNTJZV3gxWlhNc0lGdGxiR1Z0Wlc1MFNXUXNJR052YlhCdmJtVnVkRWxrWFN3Z1kyOXRjRzl1Wlc1MFEyaGhibWRsYzF0amIyMXdiMjVsYm5SSlpGMHBPMXh5WEc0Z0lIMHBPMXh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCaGNIQnNlVTFoY210MWNDQW9ZMjl0Y0c5dVpXNTBMQ0IyWVd4MVpTd2djM1JoZEdWUVlYUm9MQ0JqYUdGdVoyVnpLU0I3WEhKY2JpQWdhV1lnS0NGamIyMXdiMjVsYm5RdWJXRnlhM1Z3S1NCN1hISmNiaUFnSUNCeVpYUjFjbTQ3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0JwWmlBb1kyOXRjRzl1Wlc1MExtbHpUR2x6ZENrZ2UxeHlYRzRnSUNBZ2NtVjBkWEp1SUhKbGJtUmxja3hwYzNRb1kyOXRjRzl1Wlc1MExDQjJZV3gxWlN3Z2MzUmhkR1ZRWVhSb0xDQmphR0Z1WjJWektUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lHbG1JQ2hqYjIxd2IyNWxiblF1YVhORGIyMXdiMjVsYm5RcElIdGNjbHh1SUNBZ0lISmxkSFZ5YmlCeVpXNWtaWEpEYjIxd2IyNWxiblFvWTI5dGNHOXVaVzUwTENCMllXeDFaU3dnYzNSaGRHVlFZWFJvTENCamFHRnVaMlZ6S1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUhaaGJIVmxJRDBnYVhOVmJtUmxabWx1WldRb2RtRnNkV1VwSUQ4Z0p5Y2dPaUIyWVd4MVpUdGNjbHh1WEhKY2JpQWdhV1lnS0dOdmJYQnZibVZ1ZEM1dFlYSnJkWEF1ZEdGblRtRnRaU0E5UFQwZ0owbE9VRlZVSnlrZ2UxeHlYRzRnSUNBZ1kyOXRjRzl1Wlc1MExtMWhjbXQxY0M1MllXeDFaU0E5SUhaaGJIVmxPMXh5WEc0Z0lDQWdjbVYwZFhKdU8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2NtVjNjbWwwWlZSdlRtOWtaU2hqYjIxd2IyNWxiblF1YldGeWEzVndMQ0IyWVd4MVpTazdYSEpjYmx4eVhHNGdJSEpsZEhWeWJpQmpiMjF3YjI1bGJuUTdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUhKbGJtUmxja052YlhCdmJtVnVkQ0FvWTI5dGNHOXVaVzUwTENCMllXeDFaU3dnYzNSaGRHVlFZWFJvTENCamFHRnVaMlZ6S1NCN1hISmNiaUFnYVdZZ0tHTm9ZVzVuWlhNcElIdGNjbHh1SUNBZ0lISmxkSFZ5YmlCMWNHUmhkR1ZEYjIxd2IyNWxiblFvWTI5dGNHOXVaVzUwTENCMllXeDFaU3dnYzNSaGRHVlFZWFJvTENCamFHRnVaMlZ6S1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUhKbGRIVnliaUJrY21GM1EyOXRjRzl1Wlc1MEtIWmhiSFZsTENCemRHRjBaVkJoZEdncE8xeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJrY21GM1EyOXRjRzl1Wlc1MElDaDJZV3gxWlhNc0lITjBZWFJsVUdGMGFDa2dlMXh5WEc0Z0lHTnZibk4wSUdGalkyVnpjMjl5SUQwZ1kzSmxZWFJsUVdOalpYTnpiM0lvYzNSaGRHVlFZWFJvS1R0Y2NseHVJQ0JqYjI1emRDQmpiMjF3YjI1bGJuUWdQU0JoWTJObGMzTnZjaTVqYjIxd2IyNWxiblE3WEhKY2JseHlYRzRnSUdOdmJuTjBJR2wwWlcxWGNtRndjR1Z5SUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2duWkdsMkp5azdYSEpjYmlBZ1kyOXVjM1FnYVhSbGJVMWhjbXQxY0NBOUlHTnZiWEJ2Ym1WdWRDNTBaVzF3YkdGMFpTNWpiRzl1WlU1dlpHVW9kSEoxWlNrN1hISmNiaUFnZG1Gc2RXVnpXMHhKUWw5QlZGUlNMbE5GVEVaZExtVnNJRDBnYVhSbGJVMWhjbXQxY0R0Y2NseHVJQ0JwZEdWdFYzSmhjSEJsY2k1aGNIQmxibVJEYUdsc1pDaHBkR1Z0VFdGeWEzVndLVHRjY2x4dVhISmNiaUFnYVhSbGJVMWhjbXQxY0M1elpYUkJkSFJ5YVdKMWRHVW9URWxDWDBGVVZGSXVRMDlOVUU5T1JVNVVYMVJaVUVVc0lDaGpiMjF3YjI1bGJuUXVhWE5NYVhOMFNYUmxiU2tnUHlCTVNVSmZRVlJVVWk1SlZFVk5JRG9nVEVsQ1gwRlVWRkl1UTA5TlVFOU9SVTVVS1R0Y2NseHVYSEpjYmlBZ1ptOXlSV0ZqYUNoeVpXNWtaWElzSUNoeVpXNWtaWEpHZFc1akxDQnlaVzVrWlhKVWVYQmxLU0E5UGlCN1hISmNiaUFnSUNCcFppQW9ZMjl0Y0c5dVpXNTBMbk4wWVhSbFcweEpRbDlCVkZSU0xsTkZURVpkVzNKbGJtUmxjbFI1Y0dWZEtTQjdYSEpjYmlBZ0lDQWdJSEpsYm1SbGNrWjFibU1vZXlCdFlYSnJkWEE2SUdsMFpXMU5ZWEpyZFhBZ2ZTd2dkbUZzZFdWelcweEpRbDlCVkZSU0xsTkZURVpkVzNKbGJtUmxjbFI1Y0dWZEtUdGNjbHh1SUNBZ0lIMWNjbHh1SUNCOUtUdGNjbHh1WEhKY2JpQWdabTl5UldGamFDaGpiMjF3YjI1bGJuUXVjM1JoZEdVc0lDaGlhVzVrYVc1bkxDQmlhVzVrYVc1blRtRnRaU2tnUFQ0Z2UxeHlYRzRnSUNBZ2FXWWdLQ0ZpYVc1a2FXNW5MbTFoY210MWNDa2dlMXh5WEc0Z0lDQWdJQ0J5WlhSMWNtNDdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnWTI5dWMzUWdZbWx1WkdsdVowNXZaR1VnUFNCcGRHVnRWM0poY0hCbGNpNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdUp5QXJJRXhKUWw5QlZGUlNMbEJTUlVaSldDQXJJR0pwYm1ScGJtY3VhV1FwTzF4eVhHNGdJQ0FnWW1sdVpHbHVaMDV2WkdVdVkyeGhjM05NYVhOMExuSmxiVzkyWlNoTVNVSmZRVlJVVWk1UVVrVkdTVmdnS3lCaWFXNWthVzVuTG1sa0tUdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb1ltbHVaR2x1Wnk1cGMwTnZiWEJ2Ym1WdWRDa2dlMXh5WEc0Z0lDQWdJQ0JqYjI1emRDQmphR2xzWkZOMFlYUmxVR0YwYUNBOUlITjBZWFJsVUdGMGFDNWpiMjVqWVhRb1ltbHVaR2x1WjA1aGJXVXBPMXh5WEc0Z0lDQWdJQ0JqYjI1emRDQmphR2xzWkUxaGNtdDFjQ0E5SUdSeVlYZERiMjF3YjI1bGJuUW9kbUZzZFdWelcySnBibVJwYm1kT1lXMWxYU3dnWTJocGJHUlRkR0YwWlZCaGRHZ3BPMXh5WEc0Z0lDQWdJQ0J5WlhCc1lXTmxUbTlrWlhNb1ltbHVaR2x1WjA1dlpHVXNJR05vYVd4a1RXRnlhM1Z3S1R0Y2NseHVJQ0FnSUNBZ2NtVjBkWEp1TzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lIWmhiSFZsYzF0aWFXNWthVzVuVG1GdFpWMHVaV3dnUFNCaWFXNWthVzVuVG05a1pUdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb1ltbHVaR2x1Wnk1cGMweHBjM1FwSUh0Y2NseHVJQ0FnSUNBZ2NtVnVaR1Z5VEdsemRDaGlhVzVrYVc1bkxDQjJZV3gxWlhOYlltbHVaR2x1WjA1aGJXVmRMQ0J6ZEdGMFpWQmhkR2d1WTI5dVkyRjBLR0pwYm1ScGJtZE9ZVzFsS1NrN1hISmNiaUFnSUNBZ0lISmxkSFZ5Ymp0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQm1iM0pGWVdOb0tISmxibVJsY2l3Z0tISmxibVJsY2taMWJtTXNJSEpsYm1SbGNsUjVjR1VwSUQwK0lIdGNjbHh1SUNBZ0lDQWdhV1lnS0hKbGJtUmxjbFI1Y0dVZ1BUMDlJQ2RvZEcxc0p5QW1KaUJpYVc1a2FXNW5MbWgwYld3Z1BUMDlJRzUxYkd3Z2ZId2dZbWx1WkdsdVp5NXRZWEpyZFhBdVkyaHBiR1J5Wlc0dWJHVnVaM1JvS1NCN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHlYRzRnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJSEpsYm1SbGNrWjFibU1vZXlCdFlYSnJkWEE2SUdKcGJtUnBibWRPYjJSbElIMHNJSFpoYkhWbGMxdGlhVzVrYVc1blRtRnRaVjFiY21WdVpHVnlWSGx3WlYwc0lITjBZWFJsVUdGMGFDazdYSEpjYmlBZ0lDQjlLVHRjY2x4dUlDQjlLVHRjY2x4dVhISmNiaUFnY21WMGRYSnVJR2wwWlcxWGNtRndjR1Z5TG1Ob2FXeGtjbVZ1V3pCZE8xeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUIxY0dSaGRHVkRiMjF3YjI1bGJuUWdLR052YlhCdmJtVnVkQ3dnZG1Gc2RXVnpMQ0J6ZEdGMFpWQmhkR2dzSUdOb1lXNW5aWE1wSUh0Y2NseHVJQ0JqYjI1emRDQmpiMjF3YjI1bGJuUk5ZWEpyZFhBZ1BTQjJZV3gxWlhOYlRFbENYMEZVVkZJdVUwVk1SbDB1Wld3N1hISmNibHh5WEc0Z0lHWnZja1ZoWTJnb1kyaGhibWRsY3l3Z0tHTm9ZVzVuWlN3Z1ltbHVaR2x1WjA1aGJXVXBJRDArSUh0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvWW1sdVpHbHVaMDVoYldVZ1BUMDlJRXhKUWw5QlZGUlNMbE5GVEVZcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUdadmNpQW9iR1YwSUdOb1lXNW5aVlI1Y0dVZ2FXNGdZMmhoYm1kbEtTQjdYSEpjYmlBZ0lDQWdJQ0FnY21WdVpHVnlXMk5vWVc1blpWUjVjR1ZkS0hzZ2JXRnlhM1Z3T2lCamIyMXdiMjVsYm5STllYSnJkWEFnZlN3Z2RtRnNkV1Z6VzB4SlFsOUJWRlJTTGxORlRFWmRXMk5vWVc1blpWUjVjR1ZkS1R0Y2NseHVJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQnlaWFIxY200N1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdZMjl1YzNRZ1ltbHVaR2x1WnlBOUlHTnZiWEJ2Ym1WdWRDNXpkR0YwWlZ0aWFXNWthVzVuVG1GdFpWMDdYSEpjYmlBZ0lDQmpiMjV6ZENCemRHRjBaVkJoZEdoVWIwSnBibVJwYm1jZ1BTQnpkR0YwWlZCaGRHZ3VZMjl1WTJGMEtHSnBibVJwYm1kT1lXMWxLVHRjY2x4dVhISmNiaUFnSUNCcFppQW9ZbWx1WkdsdVp5NXBjME52YlhCdmJtVnVkQ0I4ZkNCaWFXNWthVzVuTG1selRHbHpkQ2tnZTF4eVhHNGdJQ0FnSUNCaGNIQnNlVTFoY210MWNDaGlhVzVrYVc1bkxDQjJZV3gxWlhOYlltbHVaR2x1WjA1aGJXVmRMQ0J6ZEdGMFpWQmhkR2hVYjBKcGJtUnBibWNzSUdOb1lXNW5aWE5iWW1sdVpHbHVaMDVoYldWZEtUdGNjbHh1SUNBZ0lDQWdjbVYwZFhKdU8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJR052Ym5OMElHVnNJRDBnZG1Gc2RXVnpXMkpwYm1ScGJtZE9ZVzFsWFM1bGJGeHlYRzVjY2x4dUlDQWdJR1p2Y2lBb2JHVjBJR05vWVc1blpWUjVjR1VnYVc0Z1kyaGhibWRsS1NCN1hISmNiaUFnSUNBZ0lHTnZibk4wSUc1bGQxWmhiSFZsSUQwZ2RtRnNkV1Z6VzJKcGJtUnBibWRPWVcxbFhWdGphR0Z1WjJWVWVYQmxYVHRjY2x4dUlDQWdJQ0FnY21WdVpHVnlXMk5vWVc1blpWUjVjR1ZkS0hzZ2JXRnlhM1Z3T2lCbGJDQjlMQ0J1WlhkV1lXeDFaU2s3WEhKY2JpQWdJQ0I5WEhKY2JpQWdmU2s3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlISmxibVJsY2t4cGMzUWdLR3hwYzNSRGIyMXdiMjVsYm5Rc0lHbDBaVzF6Vm1Gc2RXVnpMQ0J6ZEdGMFpWQmhkR2dzSUdOb1lXNW5aWE1wSUh0Y2NseHVJQ0JwWmlBb1kyaGhibWRsY3lrZ2UxeHlYRzRnSUNBZ2NtVjBkWEp1SUhWd1pHRjBaVXhwYzNRb2JHbHpkRU52YlhCdmJtVnVkQ3dnYVhSbGJYTldZV3gxWlhNc0lITjBZWFJsVUdGMGFDd2dZMmhoYm1kbGN5azdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQmpiMjV6ZENCc2FYTjBSbkpoWjIxbGJuUWdQU0JpZFdsc1pFeHBjM1FvYkdsemRFTnZiWEJ2Ym1WdWRDd2dhWFJsYlhOV1lXeDFaWE1zSUhOMFlYUmxVR0YwYUNrN1hISmNibHh5WEc0Z0lHTnZibk4wSUd4cGMzUk9iMlJsSUQwZ2FYUmxiWE5XWVd4MVpYTXVaV3c3WEhKY2JpQWdZMjl1YzNRZ2NHRnlaVzUwVG05a1pTQTlJR3hwYzNST2IyUmxMbkJoY21WdWRFNXZaR1U3WEhKY2JpQWdZMjl1YzNRZ2JtVjRkRTV2WkdVZ1BTQnNhWE4wVG05a1pTNXVaWGgwUld4bGJXVnVkRk5wWW14cGJtYzdYSEpjYmlBZ2NtVnRiM1psVG05a1pTaHNhWE4wVG05a1pTazdYSEpjYmx4eVhHNGdJR052Ym5OMElHbHpRMjl0Y0c5dVpXNTBJRDBnYkdsemRFNXZaR1V1WjJWMFFYUjBjbWxpZFhSbEtFeEpRbDlCVkZSU0xrTlBUVkJQVGtWT1ZGOVVXVkJGS1R0Y2NseHVJQ0JzYVhOMFRtOWtaUzV6WlhSQmRIUnlhV0oxZEdVb1RFbENYMEZVVkZJdVEwOU5VRTlPUlU1VVgxUlpVRVVzSUV4SlFsOUJWRlJTTGt4SlUxUXBPMXh5WEc0Z0lHbG1JQ2hwYzBOdmJYQnZibVZ1ZENrZ2UxeHlYRzRnSUNBZ2JHbHpkRTV2WkdVdWMyVjBRWFIwY21saWRYUmxLRXhKUWw5QlZGUlNMa05QVFZCUFRrVk9WRjlVV1ZCRkxDQk1TVUpmUVZSVVVpNURUMDFRVDA1RlRsUmZURWxUVkNrN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCbGJYQjBlVTV2WkdVb2JHbHpkRTV2WkdVcE8xeHlYRzRnSUd4cGMzUk9iMlJsTG1Gd2NHVnVaRU5vYVd4a0tHeHBjM1JHY21GbmJXVnVkQ2s3WEhKY2JseHlYRzRnSUhCaGNtVnVkRTV2WkdVdWFXNXpaWEowUW1WbWIzSmxLR3hwYzNST2IyUmxMQ0J1WlhoMFRtOWtaU2s3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHSjFhV3hrVEdsemRDQW9iR2x6ZEVOdmJYQnZibVZ1ZEN3Z2FYUmxiWE5XWVd4MVpYTXNJSE4wWVhSbFVHRjBhQ3dnY21GdVoyVXBJSHRjY2x4dUlDQmpiMjV6ZENCemRHRnlkQ0E5SUhKaGJtZGxJRDhnY21GdVoyVXVjM1JoY25RZ09pQXdPMXh5WEc0Z0lHTnZibk4wSUdWdVpDQTlJSEpoYm1kbElEOGdjbUZ1WjJVdVpXNWtJRG9nS0dsMFpXMXpWbUZzZFdWekxteGxibWQwYUNBcklERXBPMXh5WEc1Y2NseHVJQ0JqYjI1emRDQnNhWE4wUm5KaFoyMWxiblFnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZFYjJOMWJXVnVkRVp5WVdkdFpXNTBLQ2s3WEhKY2JpQWdhWFJsYlhOV1lXeDFaWE5jY2x4dUlDQWdJQzV6YkdsalpTaHpkR0Z5ZEN3Z1pXNWtLVnh5WEc0Z0lDQWdMbVp2Y2tWaFkyZ29LR2wwWlcxV1lXeDFaU3dnYVhSbGJVbHVaR1Y0S1NBOVBpQjdYSEpjYmlBZ0lDQWdJR052Ym5OMElHNWxkMGwwWlcxSmJtUmxlQ0E5SUN0emRHRnlkQ0FySUdsMFpXMUpibVJsZUR0Y2NseHVJQ0FnSUNBZ1kyOXVjM1FnYzNSaGRHVlFZWFJvVkc5SmRHVnRJRDBnYzNSaGRHVlFZWFJvTG1OdmJtTmhkQ2hiYm1WM1NYUmxiVWx1WkdWNExDQnNhWE4wUTI5dGNHOXVaVzUwTG14cGMzUkpkR1Z0TG01aGJXVmRLVHRjY2x4dUlDQWdJQ0FnWTI5dWMzUWdiR2x6ZEVsMFpXMU5ZWEpyZFhBZ1BTQmtjbUYzUTI5dGNHOXVaVzUwS0dsMFpXMVdZV3gxWlZ0c2FYTjBRMjl0Y0c5dVpXNTBMbXhwYzNSSmRHVnRMbTVoYldWZExDQnpkR0YwWlZCaGRHaFViMGwwWlcwcE8xeHlYRzVjY2x4dUlDQWdJQ0FnYkdsemRFbDBaVzFOWVhKcmRYQXVjMlYwUVhSMGNtbGlkWFJsS0V4SlFsOUJWRlJTTGtsVVJVMWZTVTVFUlZnc0lHNWxkMGwwWlcxSmJtUmxlQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQnNhWE4wUm5KaFoyMWxiblF1WVhCd1pXNWtRMmhwYkdRb2JHbHpkRWwwWlcxTllYSnJkWEFwTzF4eVhHNGdJQ0FnZlNrN1hISmNibHh5WEc0Z0lISmxkSFZ5YmlCc2FYTjBSbkpoWjIxbGJuUTdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUhWd1pHRjBaVXhwYzNRZ0tHeHBjM1JDYVc1a2FXNW5MQ0JwZEdWdGMxWmhiSFZsY3l3Z2MzUmhkR1ZRWVhSb0xDQmphR0Z1WjJWektTQjdYSEpjYmlBZ1kyOXVjM1FnYkdsemRFNXZaR1VnUFNCcGRHVnRjMVpoYkhWbGN5NWxiRHRjY2x4dUlDQmpiMjV6ZENCcGRHVnRUbUZ0WlNBOUlHeHBjM1JDYVc1a2FXNW5MbXhwYzNSSmRHVnRMbTVoYldVN1hISmNiaUFnWTI5dWMzUWdhWFJsYlhORGFHRnVaMlZ6SUQwZ2MzQnNhWFJRYVdWalpTaGphR0Z1WjJWekxDQW9kaXdnYXlrZ1BUNGdhWE5PZFcxaVpYSW9LMnNwS1R0Y2NseHVJQ0JzWlhRZ2NtVnRiM1psWkVOdmRXNTBJRDBnTUR0Y2NseHVJQ0JzWlhRZ1pXNWtJRDBnTUR0Y2NseHVYSEpjYmlBZ1ptOXlJQ2hzWlhRZ1kyaGhibWRsVkhsd1pTQnBiaUJqYUdGdVoyVnpLU0I3WEhKY2JpQWdJQ0J5Wlc1a1pYSmJZMmhoYm1kbFZIbHdaVjBvZXlCdFlYSnJkWEE2SUd4cGMzUk9iMlJsSUgwc0lHbDBaVzF6Vm1Gc2RXVnpXMk5vWVc1blpWUjVjR1ZkS1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUdadmNrVmhZMmdvYVhSbGJYTkRhR0Z1WjJWekxDQW9ZMmhoYm1kbExDQnBLU0E5UGlCN1hISmNiaUFnSUNCamFHRnVaMlVnUFNCamFHRnVaMlZiYVhSbGJVNWhiV1ZkTzF4eVhHNGdJQ0FnWTI5dWMzUWdjM1JoZEdWUVlYUm9WRzlKZEdWdElEMGdjM1JoZEdWUVlYUm9MbU52Ym1OaGRDaHBMQ0JwZEdWdFRtRnRaU2s3WEhKY2JpQWdJQ0JqYjI1emRDQnBkR1Z0UVdOalpYTnpiM0lnUFNCamNtVmhkR1ZCWTJObGMzTnZjaWh6ZEdGMFpWQmhkR2hVYjBsMFpXMHBPMXh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2hZMmhoYm1kbFcweEpRbDlCVkZSU0xrWlZURXhmUTBoQlRrZEZYU2tnZTF4eVhHNGdJQ0FnSUNCMWNHUmhkR1ZEYjIxd2IyNWxiblFvYVhSbGJVRmpZMlZ6YzI5eUxtTnZiWEJ2Ym1WdWRDd2dhWFJsYlhOV1lXeDFaWE5iYVYxYmFYUmxiVTVoYldWZExDQnpkR0YwWlZCaGRHaFViMGwwWlcwc0lHTm9ZVzVuWlNrN1hISmNiaUFnSUNBZ0lISmxkSFZ5Ymp0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnBaaUFvWTJoaGJtZGxXMHhKUWw5QlZGUlNMa1pWVEV4ZlEwaEJUa2RGWFM1aFpHUWdKaVlnYVNBK1BTQmxibVFwSUh0Y2NseHVJQ0FnSUNBZ1kyOXVjM1FnYzNSaGNuUWdQU0JqYUdGdVoyVmJURWxDWDBGVVZGSXVSbFZNVEY5RFNFRk9SMFZkTG1Ga1pDNXpkR0Z5ZER0Y2NseHVJQ0FnSUNBZ1pXNWtJRDBnWTJoaGJtZGxXMHhKUWw5QlZGUlNMa1pWVEV4ZlEwaEJUa2RGWFM1aFpHUXVaVzVrTzF4eVhHNWNjbHh1SUNBZ0lDQWdabWw0U1c1a1pYaGxjeWhzYVhOMFRtOWtaU3dnYzNSaGNuUXNJR1Z1WkNBdElITjBZWEowS1R0Y2NseHVJQ0FnSUNBZ1kyOXVjM1FnYkdsemRFWnlZV2R0Wlc1MElEMGdZblZwYkdSTWFYTjBLR3hwYzNSQ2FXNWthVzVuTENCcGRHVnRjMVpoYkhWbGN5d2djM1JoZEdWUVlYUm9MQ0I3SUhOMFlYSjBMQ0JsYm1RZ2ZTazdYSEpjYmx4eVhHNGdJQ0FnSUNCcFppQW9aVzVrSUQwOVBTQnBkR1Z0YzFaaGJIVmxjeTVzWlc1bmRHZ3BJSHRjY2x4dUlDQWdJQ0FnSUNCc2FYTjBUbTlrWlM1aGNIQmxibVJEYUdsc1pDaHNhWE4wUm5KaFoyMWxiblFwTzF4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5Ymp0Y2NseHVJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQ0FnYkdsemRFNXZaR1V1YVc1elpYSjBRbVZtYjNKbEtHeHBjM1JHY21GbmJXVnVkQ3dnYkdsemRFNXZaR1V1WTJocGJHUnlaVzViYzNSaGNuUmRLVHRjY2x4dUlDQWdJQ0FnY21WMGRYSnVPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdsbUlDaGphR0Z1WjJWYlRFbENYMEZVVkZJdVJsVk1URjlEU0VGT1IwVmRMbkpsYlc5MlpTa2dlMXh5WEc0Z0lDQWdJQ0J5WlcxdmRtVk9iMlJsS0dOb1lXNW5aVnRNU1VKZlFWUlVVaTVHVlV4TVgwTklRVTVIUlYwdWNtVnRiM1psS1R0Y2NseHVJQ0FnSUNBZ1ptbDRTVzVrWlhobGN5aHNhWE4wVG05a1pTd2dhU0F0SUhKbGJXOTJaV1JEYjNWdWRDc3JMQ0F0TVNrN1hISmNiaUFnSUNCOVhISmNiaUFnZlNrN1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJR1pwZUVsdVpHVjRaWE1nS0d4cGMzUk9iMlJsTENCemRHRnlkQ3dnWkdsbVppa2dlMXh5WEc0Z0lHTnZibk4wSUdsMFpXMXpUbTlrWlhNZ1BTQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWMyeHBZMlV1WTJGc2JDaHNhWE4wVG05a1pTNWphR2xzWkhKbGJpd2djM1JoY25RcE8xeHlYRzVjY2x4dUlDQnBkR1Z0YzA1dlpHVnpMbVp2Y2tWaFkyZ29LR2wwWlcxT2IyUmxLU0E5UGlCN1hISmNiaUFnSUNCamIyNXpkQ0J3Y21WMlNXUjRJRDBnYVhSbGJVNXZaR1V1WjJWMFFYUjBjbWxpZFhSbEtFeEpRbDlCVkZSU0xrbFVSVTFmU1U1RVJWZ3BPMXh5WEc0Z0lDQWdZMjl1YzNRZ2JtVjNTV1I0SUQwZ0szQnlaWFpKWkhnZ0t5QmthV1ptTzF4eVhHNWNjbHh1SUNBZ0lHbDBaVzFPYjJSbExuTmxkRUYwZEhKcFluVjBaU2hNU1VKZlFWUlVVaTVKVkVWTlgwbE9SRVZZTENCdVpYZEpaSGdwTzF4eVhHNGdJSDBwTzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQmhjSEJzZVVGMGRISnBZblYwWlhNZ0tHSnBibVJwYm1jc0lHRjBkSEpwWW5WMFpYTXBJSHRjY2x4dUlDQlBZbXBsWTNRdVlYTnphV2R1S0dKcGJtUnBibWN1YldGeWEzVndMQ0JoZEhSeWFXSjFkR1Z6S1R0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdZWEJ3YkhsRGJHRnpjMlZ6SUNoaWFXNWthVzVuTENCamJHRnpjMlZ6S1NCN1hISmNiaUFnWm05eUlDaHNaWFFnWTJ4aGMzTk9ZVzFsSUdsdUlHTnNZWE56WlhNcElIdGNjbHh1SUNBZ0lHbG1JQ2hqYkdGemMwNWhiV1VwSUh0Y2NseHVJQ0FnSUNBZ2FXWWdLR05zWVhOelpYTmJZMnhoYzNOT1lXMWxYU2tnZTF4eVhHNGdJQ0FnSUNBZ0lHSnBibVJwYm1jdWJXRnlhM1Z3TG1Oc1lYTnpUR2x6ZEM1aFpHUW9ZMnhoYzNOT1lXMWxLVHRjY2x4dUlDQWdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnSUNCaWFXNWthVzVuTG0xaGNtdDFjQzVqYkdGemMweHBjM1F1Y21WdGIzWmxLR05zWVhOelRtRnRaU2s3WEhKY2JpQWdJQ0FnSUgxY2NseHVJQ0FnSUgxY2NseHVJQ0I5WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHRndjR3g1VTNSNWJHVnpJQ2hpYVc1a2FXNW5MQ0J6ZEhsc1pYTXBJSHRjY2x4dUlDQlBZbXBsWTNRdVlYTnphV2R1S0NCaWFXNWthVzVuTG0xaGNtdDFjQzV6ZEhsc1pTd2dibTl5YldGc2FYcGxVM1I1YkdWektITjBlV3hsY3lrZ0tUdGNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnWTNKbFlYUmxRVzVrUVhCd1pXNWtVM1I1YkdWeklDaHpkSGxzWlU5aWFpa2dlMXh5WEc0Z0lHeGxkQ0J6ZEhsc1pWTjBjaUE5SUNjbk8xeHlYRzRnSUdadmNpQW9iR1YwSUhObGJHVmpkRzl5SUdsdUlITjBlV3hsVDJKcUtTQjdYSEpjYmlBZ0lDQmpiMjV6ZENCemRIbHNaWE1nUFNCemRIbHNaVTlpYWx0elpXeGxZM1J2Y2wwN1hISmNiaUFnSUNCemRIbHNaVk4wY2lBclBTQnpaV3hsWTNSdmNpQXJJQ2Q3Snp0Y2NseHVJQ0FnSUc1dmNtMWhiR2w2WlZOMGVXeGxjeWh6ZEhsc1pYTXBYSEpjYmlBZ0lDQm1iM0lnS0d4bGRDQmhkSFJ5SUdsdUlITjBlV3hsY3lrZ2UxeHlYRzRnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhOMGVXeGxjMXRoZEhSeVhUdGNjbHh1SUNBZ0lDQWdjM1I1YkdWVGRISWdLejBnZEc5RVlYTm9RMkZ6WlNoaGRIUnlLU0FySUNjNkp5QXJJSFpoYkhWbElDc2dKenNuTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnYzNSNWJHVlRkSElnS3owZ0ozMWNYRzRuTzF4eVhHNGdJSDFjY2x4dUlDQmpiMjV6ZENCemRIbHNaVVZzSUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2duYzNSNWJHVW5LVHRjY2x4dUlDQnpkSGxzWlVWc0xtRndjR1Z1WkVOb2FXeGtLQ0JrYjJOMWJXVnVkQzVqY21WaGRHVlVaWGgwVG05a1pTaHpkSGxzWlZOMGNpa2dLVHRjY2x4dUlDQmtiMk4xYldWdWRDNW9aV0ZrTG1Gd2NHVnVaRU5vYVd4a0tITjBlV3hsUld3cE8xeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJ1YjNKdFlXeHBlbVZUZEhsc1pYTWdLSE4wZVd4bGN5a2dlMXh5WEc0Z0lHWnZjaUFvYkdWMElHRjBkSElnYVc0Z2MzUjViR1Z6S1NCN1hISmNiaUFnSUNCcFppQW9hWE5PZFcxaVpYSW9jM1I1YkdWelcyRjBkSEpkS1NrZ2UxeHlYRzRnSUNBZ0lDQnpkSGxzWlhOYllYUjBjbDBnUFNCemRIbHNaWE5iWVhSMGNsMGdLeUFuY0hnbk8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUgxY2NseHVJQ0J5WlhSMWNtNGdjM1I1YkdWek8xeHlYRzU5WEhKY2JpSXNJbVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUVKcGJtUnBibWRPYjNSRmVHbHpkSE5GY25KdmNpQmxlSFJsYm1SeklFVnljbTl5SUh0Y2NseHVJQ0JqYjI1emRISjFZM1J2Y2lBb1ltbHVaR2x1WjA1aGJXVXNJR052YlhCdmJtVnVkRTVoYldVc0lIQmhkR2dwSUh0Y2NseHVJQ0FnSUhOMWNHVnlLQ2s3WEhKY2JpQWdJQ0IwYUdsekxtMWxjM05oWjJVZ1BTQmNJbFZ1WVdKc1pTQjBieUJoWTJObGMzTWdKMXdpSUNzZ1ltbHVaR2x1WjA1aGJXVWdLeUJjSWljZ1ltbHVaR2x1WnlCdmJpQW5YQ0lnS3lCamIyMXdiMjVsYm5ST1lXMWxJQ3NnWENJbklHTnZiWEJ2Ym1WdWRDQnZiaUJ3WVhSb0lDaGNJaUFySUhCaGRHZ3VhbTlwYmlnbklDMCtJQ2NwSUNzZ1hDSXBJR0psWTJGMWMyVWdhWFFnWkc5bGMyNG5kQ0JsZUdsemRDNWNJbHh5WEc0Z0lIMWNjbHh1ZlZ4eVhHNGlMQ0psZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCRGIyMXdiMjVsYm5SU1pXUmxabWx1WlVWeWNtOXlJR1Y0ZEdWdVpITWdSWEp5YjNJZ2UxeHlYRzRnSUdOdmJuTjBjblZqZEc5eUlDaHVZVzFsS1NCN1hISmNiaUFnSUNCemRYQmxjaWdwTzF4eVhHNGdJQ0FnZEdocGN5NXRaWE56WVdkbElEMGdYQ0pVY25scGJtY2dkRzhnY21Wa1pXWnBibVVnWlhocGMzUnBibWNnWTI5dGNHOXVaVzUwT2lBblhDSWdLeUJ1WVcxbElDc2dYQ0luWENJN1hISmNiaUFnZlZ4eVhHNTlYSEpjYmlJc0ltVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRk5qYjNCbFRtRnRaVU52Ykd4cGMybHZia1Z5Y205eUlHVjRkR1Z1WkhNZ1JYSnliM0lnZTF4eVhHNGdJR052Ym5OMGNuVmpkRzl5SUNodVlXMWxLU0I3WEhKY2JpQWdJQ0J6ZFhCbGNpZ3BPMXh5WEc0Z0lDQWdkR2hwY3k1dFpYTnpZV2RsSUQwZ1hDSlVjbmxwYm1jZ2RHOGdZWE56YVdkdUlHRWdibUZ0WlNBblhDSWdLeUJ1WVcxbElDc2dYQ0luSUhSdklHRWdjM1JoZEdVZ2RHaGhkQ0JoYkhKbFlXUjVJR1Y0YVhOMGN5QnBiaUIwYUdVZ1kyaGhhVzR1WENJN1hISmNiaUFnZlZ4eVhHNTlYSEpjYmlJc0ltTnZibk4wSUV4SlFsOU9RVTFGSUQwZ0ozZ25PMXh5WEc1amIyNXpkQ0JCVkZSU1gxQlNSVVpKV0NBOUlDZGtZWFJoTFNjN1hISmNibU52Ym5OMElGQlNSVVpKV0NBOUlFeEpRbDlPUVUxRklDc2dKeTBuTzF4eVhHNWpiMjV6ZENCVVJVMVFURUZVUlY5Q1NVNUVTVTVISUQwZ1VGSkZSa2xZSUNzZ0oySW5PMXh5WEc1amIyNXpkQ0JVUlUxUVRFRlVSVjlNU1ZOVVgwSkpUa1JKVGtjZ1BTQlFVa1ZHU1ZnZ0t5QW5iR0luTzF4eVhHNWpiMjV6ZENCQ1NVNUVTVTVIWDBsRUlEMGdRVlJVVWw5UVVrVkdTVmdnS3lCUVVrVkdTVmdnS3lBbmFXUW5PMXh5WEc1amIyNXpkQ0JUVkVGVVJWOVFRVlJJSUQwZ1VGSkZSa2xZSUNzZ0ozTndZWFJvSnp0Y2NseHVZMjl1YzNRZ1ZFVk5VRXhCVkVWZlVFeEJRMFZOUlU1VUlEMGdVRkpGUmtsWUlDc2dKMlZzSnp0Y2NseHVZMjl1YzNRZ1UxUkJWRVZmVGtGTlJTQTlJRkJTUlVaSldDQXJJQ2R6ZEdGMFpTMXVZVzFsSnp0Y2NseHVZMjl1YzNRZ1UwTlBVRVZmVUZKRlJrbFlJRDBnSjNNbk8xeHlYRzVqYjI1emRDQkpWRVZOWDBsT1JFVllJRDBnUVZSVVVsOVFVa1ZHU1ZnZ0t5QlFVa1ZHU1ZnZ0t5QW5aSGduTzF4eVhHNWpiMjV6ZENCRFQwMVFUMDVGVGxSZlZGbFFSU0E5SUVGVVZGSmZVRkpGUmtsWUlDc2dVRkpGUmtsWUlDc2dKM1J3Snp0Y2NseHVZMjl1YzNRZ1NWUkZUVjlUVlVaR1NWZ2dQU0FuYVNjN1hISmNibU52Ym5OMElGTlVRVlJGWDBSRlRFbE5TVlJGVWlBOUlDY3RKenRjY2x4dVkyOXVjM1FnVTBWTVJpQTlJQ2NuTzF4eVhHNWpiMjV6ZENCR1ZVeE1YME5JUVU1SFJTQTlJQ2NnWDJaMWJHeGZZMmhoYm1kbFh5QW5PMXh5WEc1Y2NseHVZMjl1YzNRZ1FrRlRSU0E5SUNjeEp6dGNjbHh1WTI5dWMzUWdRMDlOVUU5T1JVNVVJRDBnSnpJbk8xeHlYRzVqYjI1emRDQk1TVk5VSUQwZ0p6TW5PMXh5WEc1amIyNXpkQ0JKVkVWTklEMGdKMTlwZEdWdFh5YzdYSEpjYm1OdmJuTjBJRU5QVFZCUFRrVk9WRjlNU1ZOVUlEMGdKelVuTzF4eVhHNWNjbHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh5WEc0Z0lGQlNSVVpKV0N4Y2NseHVJQ0JVUlUxUVRFRlVSVjlDU1U1RVNVNUhMRnh5WEc0Z0lGUkZUVkJNUVZSRlgweEpVMVJmUWtsT1JFbE9SeXhjY2x4dUlDQkNTVTVFU1U1SFgwbEVMRnh5WEc0Z0lGTlVRVlJGWDFCQlZFZ3NYSEpjYmlBZ1ZFVk5VRXhCVkVWZlVFeEJRMFZOUlU1VUxGeHlYRzRnSUZOVVFWUkZYMDVCVFVVc1hISmNiaUFnVTBOUFVFVmZVRkpGUmtsWUxGeHlYRzRnSUVsVVJVMWZTVTVFUlZnc1hISmNiaUFnUTA5TlVFOU9SVTVVWDFSWlVFVXNYSEpjYmlBZ1NWUkZUVjlUVlVaR1NWZ3NYSEpjYmlBZ1UxUkJWRVZmUkVWTVNVMUpWRVZTTEZ4eVhHNGdJRUpCVTBVc1hISmNiaUFnUTA5TlVFOU9SVTVVTEZ4eVhHNGdJRXhKVTFRc1hISmNiaUFnU1ZSRlRTeGNjbHh1SUNCVFJVeEdMRnh5WEc0Z0lFWlZURXhmUTBoQlRrZEZMRnh5WEc0Z0lFTlBUVkJQVGtWT1ZGOU1TVk5VWEhKY2JuMDdYSEpjYmlJc0ltTnZibk4wSUZOVVVrbFFYME5QVFUxRlRsUlRJRDBnTHloY1hDOWNYQzh1S2lRcGZDaGNYQzljWENwYlhGeHpYRnhUWFNvL1hGd3FYRnd2S1h3b1hGeHpLajFiWGl3cFhTb29LQ2NvUHpwY1hGeGNKM3hiWGlkY1hISmNYRzVkS1NvbktYd29YQ0lvUHpwY1hGeGNYQ0o4VzE1Y0lseGNjbHhjYmwwcEtsd2lLU2w4S0Z4Y2N5bzlXMTRzS1YwcUtTa3ZiV2M3WEhKY2JtTnZibk4wSUVGU1IxVk5SVTVVWDA1QlRVVlRJRDBnTHloYlhseGNjeXhkS3lrdlp6dGNjbHh1WEhKY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2NseHVJQ0JUVkZKSlVGOURUMDFOUlU1VVV5eGNjbHh1SUNCQlVrZFZUVVZPVkY5T1FVMUZVeXhjY2x4dWZUdGNjbHh1SWl3aVpYaHdiM0owSUh0Y2NseHVJQ0JwYzBaMWJtTjBhVzl1TEZ4eVhHNGdJR2x6UVhKeVlYa3NYSEpjYmlBZ2FYTlBZbXBsWTNRc1hISmNiaUFnYVhOUFltcGxZM1JKYmtKeVlXTnJaWFJ6TEZ4eVhHNGdJR2x6VDJKcVpXTjBTVzVFYjNWaWJHVkNjbUZqYTJWMGN5eGNjbHh1SUNCcGMxTjBjbWx1Wnl4Y2NseHVJQ0JwYzBoVVRVeFRkSEpwYm1jc1hISmNiaUFnYVhOT2RXMWlaWElzWEhKY2JpQWdhWE5FVDAxRmJHVnRaVzUwTEZ4eVhHNGdJR2x6Vlc1a1pXWnBibVZrTEZ4eVhHNGdJR2x6Ulcxd2RIa3NYSEpjYmlBZ2FYTk1hVzVyTEZ4eVhHNTlPMXh5WEc1Y2NseHVYSEpjYm1aMWJtTjBhVzl1SUdselJuVnVZM1JwYjI0b2IySnFLU0I3WEhKY2JpQWdjbVYwZFhKdUlHZGxkRTlpYW1WamRGUjVjR1VvYjJKcUtTQTlQVDBnSjF0dlltcGxZM1FnUm5WdVkzUnBiMjVkSnp0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdhWE5CY25KaGVTQW9iMkpxS1NCN1hISmNiaUFnY21WMGRYSnVJR2RsZEU5aWFtVmpkRlI1Y0dVb2IySnFLU0E5UFQwZ0oxdHZZbXBsWTNRZ1FYSnlZWGxkSnp0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdhWE5QWW1wbFkzUWdLRzlpYWlrZ2UxeHlYRzRnSUhKbGRIVnliaUJuWlhSUFltcGxZM1JVZVhCbEtHOWlhaWtnUFQwOUlDZGJiMkpxWldOMElFOWlhbVZqZEYwbk8xeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJwYzA5aWFtVmpkRWx1UW5KaFkydGxkSE1nS0c5aWFpa2dlMXh5WEc0Z0lISmxkSFZ5YmlCcGMwRnljbUY1S0c5aWFpa2dKaVlnYjJKcUxteGxibWQwYUNBOVBUMGdNU0FtSmlCcGMwOWlhbVZqZENodlltcGJNRjBwTzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQnBjMDlpYW1WamRFbHVSRzkxWW14bFFuSmhZMnRsZEhNZ0tHOWlhaWtnZTF4eVhHNGdJSEpsZEhWeWJpQnBjMEZ5Y21GNUtHOWlhaWtnSmlZZ2IySnFMbXhsYm1kMGFDQTlQVDBnTVNBbUppQnBjMDlpYW1WamRFbHVRbkpoWTJ0bGRITW9iMkpxV3pCZEtUdGNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYVhOVGRISnBibWNnS0c5aWFpa2dlMXh5WEc0Z0lISmxkSFZ5YmlCblpYUlBZbXBsWTNSVWVYQmxLRzlpYWlrZ1BUMDlJQ2RiYjJKcVpXTjBJRk4wY21sdVoxMG5PMXh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCcGMwaFVUVXhUZEhKcGJtY2dLRzlpYWlrZ2UxeHlYRzRnSUhKbGRIVnliaUJwYzFOMGNtbHVaeWh2WW1vcElDWW1JRzlpYWk1cGJtUmxlRTltS0NjOEp5a2dQVDA5SURBN1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJR2x6VG5WdFltVnlJQ2h2WW1vcElIdGNjbHh1SUNCeVpYUjFjbTRnWjJWMFQySnFaV04wVkhsd1pTaHZZbW9wSUQwOVBTQW5XMjlpYW1WamRDQk9kVzFpWlhKZEp5QW1KaUJ2WW1vZ1BUMDlJRzlpYWp0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdhWE5FVDAxRmJHVnRaVzUwSUNodlltb3BJSHRjY2x4dUlDQnlaWFIxY200Z2IySnFJQ1ltSUhSNWNHVnZaaUJ2WW1vdWRHRm5UbUZ0WlNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2M3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHbHpWVzVrWldacGJtVmtJQ2h2WW1vcElIdGNjbHh1SUNCeVpYUjFjbTRnZEhsd1pXOW1JRzlpYWlBOVBUMGdKM1Z1WkdWbWFXNWxaQ2M3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHZGxkRTlpYW1WamRGUjVjR1VnS0c5aWFpa2dlMXh5WEc0Z0lISmxkSFZ5YmlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG5SdlUzUnlhVzVuTG1OaGJHd29iMkpxS1R0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdhWE5NYVc1cklDaHZZbW9wSUh0Y2NseHVJQ0JqYjI1emRDQnpiR0Z6YUVsa2VDQTlJRzlpYWk1cGJtUmxlRTltS0Njdkp5azdYSEpjYmlBZ2NtVjBkWEp1SUZzd0xDQXhMQ0F5WFM1emIyMWxLQ2hwWkhncElEMCtJR2xrZUNBOVBUMGdjMnhoYzJoSlpIZ3BPMXh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCcGMwVnRjSFI1SUNodlltb3BJSHRjY2x4dUlDQnBaaUFvSVc5aWFpa2dlMXh5WEc0Z0lDQWdjbVYwZFhKdUlIUnlkV1U3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0JwWmlBb2FYTkJjbkpoZVNodlltb3BJSHg4SUdselUzUnlhVzVuS0c5aWFpa3BJSHRjY2x4dUlDQWdJSEpsZEhWeWJpQWhiMkpxTG14bGJtZDBhRHRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJSEpsZEhWeWJpQWhUMkpxWldOMExtdGxlWE1vYjJKcUtTNXNaVzVuZEdnN1hISmNibjFjY2x4dUlpd2lhVzF3YjNKMElIc2dhWE5QWW1wbFkzUWdmU0JtY205dElDY3VMMk5vWldOclpYSnpKenRjY2x4dWFXMXdiM0owSUhzZ2MyVjBJSDBnWm5KdmJTQW5MaTl2WW1wbFkzUW5PMXh5WEc1Y2NseHVaWGh3YjNKMElIdGNjbHh1SUNCb1lYTXNYSEpjYmlBZ1oyVjBSbUZzYzJWUVlYUm9jeXhjY2x4dUlDQjBiMFJoYzJoRFlYTmxMRnh5WEc0Z0lIUnZRMkZ0Wld4RFlYTmxMRnh5WEc0Z0lHZGxkRk5vYjNKMFRtRnRaU3hjY2x4dUlDQm5aWFJTWldGc1RtRnRaU3hjY2x4dWZUdGNjbHh1WEhKY2JtTnZibk4wSUU1QlRVVlRJRDBnZTF4eVhHNGdJSEpsWVd3NklIdDlMRnh5WEc0Z0lITm9iM0owT2lCYlhWeHlYRzU5TzF4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnWjJWMFUyaHZjblJPWVcxbElDaHVZVzFsS1NCN1hISmNiaUFnYVdZZ0tFNUJUVVZUTG5KbFlXeGJibUZ0WlYwcElIdGNjbHh1SUNBZ0lISmxkSFZ5YmlCT1FVMUZVeTV5WldGc1cyNWhiV1ZkTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnWTI5dWMzUWdjMmh2Y25ST1lXMWxJRDBnVGtGTlJWTXVjMmh2Y25RdWNIVnphQ2h1WVcxbEtUdGNjbHh1SUNCeVpYUjFjbTRnVGtGTlJWTXVjbVZoYkZ0dVlXMWxYU0E5SUhOb2IzSjBUbUZ0WlNBdElERTdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUdkbGRGSmxZV3hPWVcxbElDaHVkVzBwSUh0Y2NseHVJQ0J5WlhSMWNtNGdUa0ZOUlZNdWMyaHZjblJiYm5WdFhUdGNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYUdGeklDaHZZbW9zSUdWc0tTQjdYSEpjYmlBZ2FXWWdLR2x6VDJKcVpXTjBLRzlpYWlrcElIdGNjbHh1SUNBZ0lHTnZibk4wSUd0bGVYTWdQU0JQWW1wbFkzUXVhMlY1Y3lodlltb3BPMXh5WEc0Z0lDQWdjbVYwZFhKdUlHaGhjeWhyWlhsekxDQmxiQ2s3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0J5WlhSMWNtNGdiMkpxTG1sdVpHVjRUMllvWld3cElENDlJREE3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHZGxkRVpoYkhObFVHRjBhSE1nS0c5aWFpa2dlMXh5WEc0Z0lHTnZibk4wSUc5dWJIbEdZV3h6WlZCaGRHaHpJRDBnZTMwN1hISmNiaUFnWjJWMFJtRnNjMlZRWVhSb0tHOWlhaXdnYjI1c2VVWmhiSE5sVUdGMGFITXNJRnRkS1R0Y2NseHVJQ0J5WlhSMWNtNGdiMjVzZVVaaGJITmxVR0YwYUhNN1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJR2RsZEVaaGJITmxVR0YwYUNBb2IySnFMQ0J2Ym14NVJtRnNjMlZRWVhSb2N5d2djR0YwYUNrZ2UxeHlYRzRnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJ2WW1vcElIdGNjbHh1SUNBZ0lHbG1JQ2hwYzA5aWFtVmpkQ2h2WW1wYmEyVjVYU2twSUh0Y2NseHVJQ0FnSUNBZ1oyVjBSbUZzYzJWUVlYUm9LRzlpYWx0clpYbGRMQ0J2Ym14NVJtRnNjMlZRWVhSb2N5d2djR0YwYUM1amIyNWpZWFFvYTJWNUtTazdYSEpjYmlBZ0lDQWdJR052Ym5ScGJuVmxPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdsbUlDaHZZbXBiYTJWNVhTQWhQVDBnZEhKMVpTa2dlMXh5WEc0Z0lDQWdJQ0J6WlhRb2IyNXNlVVpoYkhObFVHRjBhSE1zSUhCaGRHZ3VZMjl1WTJGMEtHdGxlU2tzSUc5aWFsdHJaWGxkS1R0Y2NseHVJQ0FnSUgxY2NseHVJQ0I5WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlIUnZSR0Z6YUVOaGMyVWdLSE4wY2lrZ2UxeHlYRzRnSUhKbGRIVnliaUJ6ZEhJdWNtVndiR0ZqWlNndktGdEJMVnBkS1M5bkxDQW9iV0YwWTJncElEMCtJQ2N0SnlBcklHMWhkR05vV3pCZExuUnZURzkzWlhKRFlYTmxLQ2twTzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQjBiME5oYldWc1EyRnpaU0FvYzNSeUtTQjdYSEpjYmlBZ2NtVjBkWEp1SUhOMGNpNXlaWEJzWVdObEtDOHRLQzRwTDJjc0lDaHRZWFJqYUNrZ1BUNGdiV0YwWTJoYk1WMHVkRzlWY0hCbGNrTmhjMlVvS1NrN1hISmNibjFjY2x4dUlpd2lhVzF3YjNKMElIdGNjbHh1SUNCcGMxVnVaR1ZtYVc1bFpDeGNjbHh1SUNCcGMwRnljbUY1TEZ4eVhHNGdJR2x6UkU5TlJXeGxiV1Z1ZEN4Y2NseHVJQ0JwYzA5aWFtVmpkQ3hjY2x4dWZTQm1jbTl0SUNjdUwyTm9aV05yWlhKekp6dGNjbHh1WEhKY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOdmNIazdYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQmpiM0I1SUNoa1pYTjBhVzVoZEdsdmJpd2djMjkxY21ObEtTQjdYSEpjYmlBZ2FXWWdLQ0ZrWlhOMGFXNWhkR2x2YmlrZ2UxeHlYRzRnSUNBZ2NtVjBkWEp1SUdOdmNIa2dLSHQ5TENCemIzVnlZMlVwTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnWm05eUlDaHNaWFFnYTJWNUlHbHVJSE52ZFhKalpTa2dlMXh5WEc1Y2NseHVJQ0FnSUdsbUlDaHBjMVZ1WkdWbWFXNWxaQ2h6YjNWeVkyVmJhMlY1WFNrcElIdGNjbHh1SUNBZ0lDQWdZMjl1ZEdsdWRXVTdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tITnZkWEpqWlM1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcElDWW1JR2x6VDJKcVpXTjBLSE52ZFhKalpWdHJaWGxkS1NrZ2UxeHlYRzRnSUNBZ0lDQnBaaUFvSVdSbGMzUnBibUYwYVc5dVcydGxlVjBwSUh0Y2NseHVJQ0FnSUNBZ0lDQmtaWE4wYVc1aGRHbHZibHRyWlhsZElEMGdlMzA3WEhKY2JpQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ1kyOXdlU2hrWlhOMGFXNWhkR2x2Ymx0clpYbGRMQ0J6YjNWeVkyVmJhMlY1WFNrN1hISmNiaUFnSUNBZ0lHTnZiblJwYm5WbE8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJR2xtSUNocGMwRnljbUY1S0hOdmRYSmpaVnRyWlhsZEtTa2dlMXh5WEc0Z0lDQWdJQ0JwWmlBb0lXUmxjM1JwYm1GMGFXOXVXMnRsZVYwcElIdGNjbHh1SUNBZ0lDQWdJQ0JrWlhOMGFXNWhkR2x2Ymx0clpYbGRJRDBnVzEwN1hISmNiaUFnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdZMjl3ZVVGeWNtRjVLR1JsYzNScGJtRjBhVzl1VzJ0bGVWMHNJSE52ZFhKalpWdHJaWGxkS1R0Y2NseHVJQ0FnSUNBZ1kyOXVkR2x1ZFdVN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdhV1lnS0dselJFOU5SV3hsYldWdWRDaHpiM1Z5WTJWYmEyVjVYU2twSUh0Y2NseHVJQ0FnSUNBZ1pHVnpkR2x1WVhScGIyNWJhMlY1WFNBOUlITnZkWEpqWlZ0clpYbGRMbU5zYjI1bFRtOWtaU2gwY25WbEtUdGNjbHh1SUNBZ0lDQWdZMjl1ZEdsdWRXVTdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnWkdWemRHbHVZWFJwYjI1YmEyVjVYU0E5SUhOdmRYSmpaVnRyWlhsZE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2NtVjBkWEp1SUdSbGMzUnBibUYwYVc5dU8xeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJqYjNCNVFYSnlZWGtnS0dSbGMzUnBibUYwYVc5dUxDQnpiM1Z5WTJVcElIdGNjbHh1SUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElITnZkWEpqWlM1c1pXNW5kR2c3SUdrckt5a2dlMXh5WEc0Z0lDQWdhV1lnS0dselQySnFaV04wS0hOdmRYSmpaVnRwWFNrcElIdGNjbHh1SUNBZ0lDQWdaR1Z6ZEdsdVlYUnBiMjViYVYwZ1BTQmtaWE4wYVc1aGRHbHZibHRwWFNCOGZDQjdmVHRjY2x4dUlDQWdJQ0FnWTI5d2VTaGtaWE4wYVc1aGRHbHZibHRwWFN3Z2MyOTFjbU5sVzJsZEtUdGNjbHh1SUNBZ0lDQWdZMjl1ZEdsdWRXVTdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tHbHpRWEp5WVhrb2MyOTFjbU5sVzJsZEtTa2dlMXh5WEc0Z0lDQWdJQ0JrWlhOMGFXNWhkR2x2Ymx0cFhTQTlJR1JsYzNScGJtRjBhVzl1VzJsZElIeDhJRnRkTzF4eVhHNGdJQ0FnSUNCamIzQjVRWEp5WVhrb1pHVnpkR2x1WVhScGIyNWJhVjBzSUhOdmRYSmpaVnRwWFNrN1hISmNiaUFnSUNBZ0lHTnZiblJwYm5WbE8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJR1JsYzNScGJtRjBhVzl1VzJsZElEMGdjMjkxY21ObFcybGRPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdjbVYwZFhKdUlHUmxjM1JwYm1GMGFXOXVPMXh5WEc1OVhISmNiaUlzSW1sdGNHOXlkQ0I3WEhKY2JpQWdhWE5JVkUxTVUzUnlhVzVuTEZ4eVhHNTlJR1p5YjIwZ0p5NHZZMmhsWTJ0bGNuTW5PMXh5WEc1Y2NseHVaWGh3YjNKMElIdGNjbHh1SUNCeVpYQnNZV05sVG05a1pYTXNYSEpjYmlBZ1kyeHZibVZJVkUxTVRXRnlhM1Z3TEZ4eVhHNGdJR052Ykd4bFkzUklWRTFNVG05a1pYTXNYSEpjYmlBZ2QyRnNhMDV2WkdWekxGeHlYRzRnSUhKbGJXOTJaVTV2WkdVc1hISmNiaUFnYVc1elpYSjBRbVZtYjNKbFRtOWtaU3hjY2x4dUlDQnlaWGR5YVhSbFZHOU9iMlJsTEZ4eVhHNGdJR1Z0Y0hSNVRtOWtaU3hjY2x4dWZUdGNjbHh1WEhKY2JtWjFibU4wYVc5dUlISmxjR3hoWTJWT2IyUmxjeUFvYjNKcFoybHVZV3dzSUhKbGNHeGhZMlZ0Wlc1MEtTQjdYSEpjYmlBZ2IzSnBaMmx1WVd3dWNHRnlaVzUwVG05a1pTNXlaWEJzWVdObFEyaHBiR1FvY21Wd2JHRmpaVzFsYm5Rc0lHOXlhV2RwYm1Gc0tUdGNjbHh1SUNCeVpYUjFjbTRnY21Wd2JHRmpaVzFsYm5RN1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJR2x1YzJWeWRFSmxabTl5WlU1dlpHVWdLR1ZzTENCdVpYaDBSV3dwSUh0Y2NseHVJQ0J1WlhoMFJXd3VjR0Z5Wlc1MFRtOWtaUzVwYm5ObGNuUkNaV1p2Y21Vb1pXd3NJRzVsZUhSRmJDazdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUdOc2IyNWxTRlJOVEUxaGNtdDFjQ0FvYldGeWEzVndLU0I3WEhKY2JpQWdZMjl1YzNRZ2JXRnlhM1Z3VTNSeUlEMGdhWE5JVkUxTVUzUnlhVzVuS0cxaGNtdDFjQzUwY21sdEtDa3BJRDhnYldGeWEzVndJRG9nWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpaHRZWEpyZFhBcExtbHVibVZ5U0ZSTlREdGNjbHh1SUNCeVpYUjFjbTRnWTI5dWRtVnlkRk4wY21sdVoxUnZTRlJOVENodFlYSnJkWEJUZEhJcE8xeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJqYjI1MlpYSjBVM1J5YVc1blZHOUlWRTFNSUNodFlYSnJkWEJUZEhKcGJtY3BJSHRjY2x4dUlDQmpiMjV6ZENCd1lYSnpaWElnUFNCdVpYY2dSRTlOVUdGeWMyVnlLQ2s3WEhKY2JpQWdZMjl1YzNRZ2NHRnljMlZrUkc5amRXMWxiblFnUFNCd1lYSnpaWEl1Y0dGeWMyVkdjbTl0VTNSeWFXNW5LRzFoY210MWNGTjBjbWx1Wnl3Z0ozUmxlSFF2YUhSdGJDY3BPMXh5WEc0Z0lISmxkSFZ5YmlCd1lYSnpaV1JFYjJOMWJXVnVkQzVpYjJSNUxtWnBjbk4wUld4bGJXVnVkRU5vYVd4a08xeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUIzWVd4clRtOWtaWE1nS0c1dlpHVXNJR05pS1NCN1hISmNiaUFnYVdZZ0tDQmpZaWh1YjJSbEtTQTlQVDBnTFRFcElIdGNjbHh1SUNBZ0lISmxkSFZ5Ymp0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUVGeWNtRjVMbkJ5YjNSdmRIbHdaVnh5WEc0Z0lDQWdMbk5zYVdObFhISmNiaUFnSUNBdVkyRnNiQ2h1YjJSbExtTm9hV3hrY21WdUtWeHlYRzRnSUNBZ0xtWnZja1ZoWTJnb0tHVnNLU0E5UGlCM1lXeHJUbTlrWlhNb1pXd3NJR05pS1NrN1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJR052Ykd4bFkzUklWRTFNVG05a1pYTWdLSEp2YjNRc0lHbHpWMkZ1ZEdWa0tTQjdYSEpjYmlBZ1kyOXVjM1FnYm05a1pYTWdQU0JiWFR0Y2NseHVJQ0IzWVd4clRtOWtaWE1vY205dmRDd2dLR1ZzS1NBOVBpQnBjMWRoYm5SbFpDaGxiQ2tnUHlCdWIyUmxjeTV3ZFhOb0tHVnNLU0E2SUNjbktUdGNjbHh1SUNCeVpYUjFjbTRnYm05a1pYTTdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUhKbGJXOTJaVTV2WkdVZ0tHNXZaR1VwSUh0Y2NseHVJQ0J1YjJSbExuQmhjbVZ1ZEU1dlpHVXVjbVZ0YjNabFEyaHBiR1FvYm05a1pTazdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUhKbGQzSnBkR1ZVYjA1dlpHVWdLRzV2WkdVc0lIUmxlSFFwSUh0Y2NseHVJQ0JsYlhCMGVVNXZaR1VvYm05a1pTazdYSEpjYmlBZ2QzSnBkR1ZVYjA1dlpHVW9ibTlrWlN3Z2RHVjRkQ2s3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlIZHlhWFJsVkc5T2IyUmxJQ2h1YjJSbExDQjBaWGgwS1NCN1hISmNiaUFnWTI5dWMzUWdkR1Y0ZEU1dlpHVWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVlVaWGgwVG05a1pTaDBaWGgwS1R0Y2NseHVJQ0J1YjJSbExtRndjR1Z1WkVOb2FXeGtLSFJsZUhST2IyUmxLVHRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z1pXMXdkSGxPYjJSbElDaHViMlJsS1NCN1hISmNiaUFnZDJocGJHVWdLRzV2WkdVdWFHRnpRMmhwYkdST2IyUmxjeWdwS1NCN1hISmNiaUFnSUNCdWIyUmxMbkpsYlc5MlpVTm9hV3hrS0c1dlpHVXVabWx5YzNSRGFHbHNaQ2s3WEhKY2JpQWdmVnh5WEc1OVhISmNiaUlzSW1sdGNHOXlkQ0I3WEhKY2JpQWdhWE5CY25KaGVTeGNjbHh1SUNCcGMwOWlhbVZqZEN4Y2NseHVJQ0JwYzFWdVpHVm1hVzVsWkN4Y2NseHVmU0JtY205dElDY3VMMk5vWldOclpYSnpKenRjY2x4dVhISmNibVY0Y0c5eWRDQmtaV1poZFd4MElHRnlaVVZ4ZFdGc08xeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z1lYSmxSWEYxWVd3Z0tHWnBjbk4wTENCelpXTnZibVFwSUh0Y2NseHVJQ0JwWmlBb2FYTlZibVJsWm1sdVpXUW9abWx5YzNRcElIeDhJR2x6Vlc1a1pXWnBibVZrS0hObFkyOXVaQ2twSUh0Y2NseHVJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lHbG1JQ2gwZVhCbGIyWWdabWx5YzNRZ0lUMDlJSFI1Y0dWdlppQnpaV052Ym1RcElIdGNjbHh1SUNBZ0lISmxkSFZ5YmlCbVlXeHpaVHRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJR052Ym5OMElIQmhjbVZ1ZEU1dlpHVWdQU0I3SUdOb2FXeGtUbTlrWlRvZ2UzMGdmVHRjY2x4dVhISmNiaUFnYVdZZ0tHbHpRWEp5WVhrb2MyVmpiMjVrS1NrZ2UxeHlYRzRnSUNBZ1kyaGxZMnRMWlhselJYRjFZV3hwZEhrb1hISmNiaUFnSUNBZ0lHWnBjbk4wSUQ4Z1ptbHljM1F1YldGd0tHVnNJRDArSUdWc0tTQTZJRnRkTEZ4eVhHNGdJQ0FnSUNCelpXTnZibVF1YldGd0tHVnNJRDArSUdWc0tTeGNjbHh1SUNBZ0lDQWdjR0Z5Wlc1MFRtOWtaVnh5WEc0Z0lDQWdLVHRjY2x4dVhISmNiaUFnZlNCbGJITmxJR2xtSUNocGMwOWlhbVZqZENoelpXTnZibVFwS1NCN1hISmNiaUFnSUNCamFHVmphMHRsZVhORmNYVmhiR2wwZVNobWFYSnpkQ3dnYzJWamIyNWtMQ0J3WVhKbGJuUk9iMlJsS1R0Y2NseHVYSEpjYmlBZ2ZTQmxiSE5sSUh0Y2NseHVJQ0FnSUhKbGRIVnliaUJtYVhKemRDQTlQVDBnYzJWamIyNWtPMXh5WEc1Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUhKbGRIVnliaUJ3WVhKbGJuUk9iMlJsTG1Ob2FXeGtUbTlrWlR0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdZMmhsWTJ0TFpYbHpSWEYxWVd4cGRIa2dLR1pwY25OMExDQnpaV052Ym1Rc0lIQmhjbVZ1ZEU1dlpHVXBJSHRjY2x4dUlDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2MyVmpiMjVrS1NCN1hISmNibHh5WEc0Z0lDQWdhV1lnS0dselFYSnlZWGtvWm1seWMzUXBLU0I3WEhKY2JpQWdJQ0FnSUdsbUlDaHBjMVZ1WkdWbWFXNWxaQ2htYVhKemRGdHJaWGxkS1NrZ2UxeHlYRzRnSUNBZ0lDQWdJSEJoY21WdWRFNXZaR1V1WTJocGJHUk9iMlJsVzJ0bGVWMGdQU0I3SUdGa1pEb2dkSEoxWlNCOU8xeHlYRzRnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJR052Ym5ScGJuVmxPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdsbUlDaG1hWEp6ZEZ0clpYbGRJQ0U5UFNCelpXTnZibVJiYTJWNVhTa2dlMXh5WEc0Z0lDQWdJQ0J3WVhKbGJuUk9iMlJsTG1Ob2FXeGtUbTlrWlZ0clpYbGRJRDBnWm1Gc2MyVTdYSEpjYmlBZ0lDQjlYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z1ptbHljM1FwSUh0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvYVhOQmNuSmhlU2htYVhKemRDa3BJSHRjY2x4dUlDQWdJQ0FnYVdZZ0tHbHpWVzVrWldacGJtVmtLSE5sWTI5dVpGdHJaWGxkS1NrZ2UxeHlYRzRnSUNBZ0lDQWdJSEJoY21WdWRFNXZaR1V1WTJocGJHUk9iMlJsVzJ0bGVWMGdQU0I3SUhKbGJXOTJaVG9nZEhKMVpTQjlPMXh5WEc0Z0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUdOdmJuUnBiblZsTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHbG1JQ2htYVhKemRGdHJaWGxkSUNFOVBTQnpaV052Ym1SYmEyVjVYU2tnZTF4eVhHNGdJQ0FnSUNCd1lYSmxiblJPYjJSbExtTm9hV3hrVG05a1pWdHJaWGxkSUQwZ1ptRnNjMlU3WEhKY2JpQWdJQ0I5WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0J5WlhSMWNtNGdjR0Z5Wlc1MFRtOWtaVHRjY2x4dWZWeHlYRzRpTENKcGJYQnZjblFnZTF4eVhHNGdJR2x6VDJKcVpXTjBMRnh5WEc0Z0lHbHpSblZ1WTNScGIyNHNYSEpjYm4wZ1puSnZiU0FuTGk5amFHVmphMlZ5Y3ljN1hISmNibHh5WEc1bGVIQnZjblFnZTF4eVhHNGdJR2RsZEN4Y2NseHVJQ0J6WlhRc1hISmNiaUFnY21WdGIzWmxMRnh5WEc0Z0lHRmtaRU52Ym5OMFJtbGxiR1J6TEZ4eVhHNGdJR1p2Y2tWaFkyZ3NYSEpjYmlBZ2JXRndMRnh5WEc0Z0lHMWhjRXRsZVhNc1hISmNiaUFnWm1sc2RHVnlMRnh5WEc0Z0lIUnZUMkpxWldOMExGeHlYRzRnSUdaMWJHeE5ZWEFzWEhKY2JpQWdjM0JzYVhSUWFXVmpaU3hjY2x4dWZUdGNjbHh1WEhKY2JtWjFibU4wYVc5dUlHZGxkQ0FvYjJKcUxDQndZWFJvS1NCN1hISmNiaUFnYkdWMElIWmhiSFZsSUQwZ2IySnFPMXh5WEc0Z0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2djR0YwYUM1c1pXNW5kR2c3SUdrckt5a2dlMXh5WEc1Y2NseHVJQ0FnSUhSeWVTQjdYSEpjYmlBZ0lDQWdJSFpoYkhWbElEMGdkbUZzZFdWYmNHRjBhRnRwWFYwN1hISmNibHh5WEc0Z0lDQWdmU0JqWVhSamFDQW9aU2tnZTF4eVhHNGdJQ0FnSUNCeVpYUjFjbTRnZG1Gc2RXVTdYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNGdJSDFjY2x4dUlDQnlaWFIxY200Z2RtRnNkV1U3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlITmxkQ0FvYjJKcUxDQndZWFJvTENCMllXeDFaU2tnZTF4eVhHNGdJR2xtSUNnaGNHRjBhQzVzWlc1bmRHZ3BJSHRjY2x4dUlDQWdJR2xtSUNocGMwOWlhbVZqZENoMllXeDFaU2twSUh0Y2NseHVJQ0FnSUNBZ2NtVjBkWEp1SUU5aWFtVmpkQzVoYzNOcFoyNG9iMkpxTENCMllXeDFaU2s3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0J5WlhSMWNtNGdiMkpxSUQwZ2RtRnNkV1U3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0JzWlhRZ1pHVnpkQ0E5SUc5aWFqdGNjbHh1SUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElIQmhkR2d1YkdWdVozUm9JQzBnTVRzZ2FTc3JLU0I3WEhKY2JpQWdJQ0JwWmlBb0lXUmxjM1JiSUhCaGRHaGJhVjBnWFNrZ2UxeHlYRzRnSUNBZ0lDQmtaWE4wSUQwZ1pHVnpkRnR3WVhSb1cybGRYU0E5SUh0OU8xeHlYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVJQ0FnSUNBZ1pHVnpkQ0E5SUdSbGMzUmJjR0YwYUZ0cFhWMDdYSEpjYmlBZ0lDQjlYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQnBaaUFvYVhOUFltcGxZM1FvZG1Gc2RXVXBLU0I3WEhKY2JpQWdJQ0JrWlhOMFd5QndZWFJvVzJsZElGMGdQU0JrWlhOMFd5QndZWFJvVzJsZElGMGdmSHdnZTMwN1hISmNiaUFnSUNCUFltcGxZM1F1WVhOemFXZHVLR1JsYzNSYklIQmhkR2hiYVYwZ1hTd2dkbUZzZFdVcE8xeHlYRzRnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0JrWlhOMFd5QndZWFJvVzJsZElGMGdQU0IyWVd4MVpUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lISmxkSFZ5YmlCdlltbzdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUhKbGJXOTJaU0FvYjJKcUxDQndZWFJvS1NCN1hISmNiaUFnYkdWMElIWmhiSFZsSUQwZ2IySnFPMXh5WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2djR0YwYUM1c1pXNW5kR2dnTFNBeE95QnBLeXNwSUh0Y2NseHVJQ0FnSUhaaGJIVmxJRDBnZG1Gc2RXVmJjR0YwYUZ0cFhWMDdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQmtaV3hsZEdVZ2RtRnNkV1ZiY0dGMGFGdHBYVjA3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHRmtaRU52Ym5OMFJtbGxiR1J6SUNodlltb3NJR1pwWld4a2N5a2dlMXh5WEc0Z0lHWnZjaUFvYkdWMElHWnBaV3hrSUdsdUlHWnBaV3hrY3lrZ2UxeHlYRzRnSUNBZ1QySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLRzlpYWl3Z1ptbGxiR1FzSUh0Y2NseHVJQ0FnSUNBZ1oyVjBPaUJtZFc1amRHbHZiaUFvS1NCN0lISmxkSFZ5YmlCbWFXVnNaSE5iWm1sbGJHUmRJSDBzWEhKY2JpQWdJQ0FnSUhObGREb2dablZ1WTNScGIyNGdLQ2tnZXlCMGFISnZkeUJ1WlhjZ1JYSnliM0lvWENKVWNubHBibWNnZEc4Z2NtVmtaV1pwYm1VZ1kyOXVjM1FnWm1sbGJHUWdKMXdpSUNzZ1ptbGxiR1FnS3lCY0lpZGNJaWtnZlN4Y2NseHVJQ0FnSUgwcFhISmNiaUFnZlZ4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQm1iM0pGWVdOb0lDaHZZbW9zSUdOaUtTQjdYSEpjYmlBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUc5aWFpa2dlMXh5WEc0Z0lDQWdZMjl1YzNRZ2NISnZjQ0E5SUc5aWFsdHJaWGxkTzF4eVhHNGdJQ0FnWTJJb2NISnZjQ3dnYTJWNUxDQnZZbW9wTzF4eVhHNGdJSDFjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2JXRndLRzlpYWl3Z1kySXBJSHRjY2x4dUlDQmpiMjV6ZENCdVpYZFBZbW9nUFNCN2ZWeHlYRzRnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJ2WW1vcElIdGNjbHh1SUNBZ0lHTnZibk4wSUhCeWIzQWdQU0J2WW1wYmEyVjVYVHRjY2x4dUlDQWdJRzVsZDA5aWFsdHJaWGxkSUQwZ1kySW9jSEp2Y0N3Z2EyVjVMQ0J2WW1vcE8xeHlYRzRnSUgxY2NseHVJQ0J5WlhSMWNtNGdibVYzVDJKcU8xeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJ0WVhCTFpYbHpJQ2h2WW1vc0lHTmlLU0I3WEhKY2JpQWdZMjl1YzNRZ2JtVjNUMkpxSUQwZ2UzMWNjbHh1SUNCbWIzSWdLR3hsZENCclpYa2dhVzRnYjJKcUtTQjdYSEpjYmlBZ0lDQmpiMjV6ZENCd2NtOXdJRDBnYjJKcVcydGxlVjA3WEhKY2JpQWdJQ0JqYjI1emRDQnVaWGRMWlhrZ1BTQmpZaWhyWlhrc0lIQnliM0FzSUc5aWFpazdYSEpjYmlBZ0lDQnVaWGRQWW1wYmJtVjNTMlY1WFNBOUlIQnliM0E3WEhKY2JpQWdmVnh5WEc0Z0lISmxkSFZ5YmlCdVpYZFBZbW83WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlITndiR2wwVUdsbFkyVWdLRzlpYWl3Z1kySXBJSHRjY2x4dUlDQmpiMjV6ZENCdVpYZFBZbW9nUFNCN2ZWeHlYRzRnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJ2WW1vcElIdGNjbHh1SUNBZ0lHTnZibk4wSUhCeWIzQWdQU0J2WW1wYmEyVjVYVHRjY2x4dUlDQWdJR2xtSUNnZ1kySW9jSEp2Y0N3Z2EyVjVMQ0J2WW1vcElDa2dlMXh5WEc0Z0lDQWdJQ0J1WlhkUFltcGJhMlY1WFNBOUlIQnliM0E3WEhKY2JpQWdJQ0FnSUdSbGJHVjBaU0J2WW1wYmEyVjVYVHRjY2x4dUlDQWdJSDFjY2x4dUlDQjlYSEpjYmlBZ2NtVjBkWEp1SUc1bGQwOWlhanRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z1puVnNiRTFoY0NBb2IySnFMQ0JqWWlrZ2UxeHlYRzRnSUdOdmJuTjBJRzVsZDA5aWFpQTlJSHQ5WEhKY2JpQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlHOWlhaWtnZTF4eVhHNGdJQ0FnWTI5dWMzUWdjSEp2Y0NBOUlHOWlhbHRyWlhsZE8xeHlYRzRnSUNBZ1kyOXVjM1FnY21WeklEMGdZMklvYTJWNUxDQndjbTl3TENCdlltb3BPMXh5WEc0Z0lDQWdibVYzVDJKcVd5QnlaWE5iTUYwZ2ZId2djbVZ6TG10bGVTQjhmQ0J5WlhNdWF5QmRJRDBnY21Weld6RmRJSHg4SUhKbGMxc25kbUZzZFdVblhTQjhmQ0J5WlhOYkozWW5YVHRjY2x4dUlDQjlYSEpjYmlBZ2NtVjBkWEp1SUc1bGQwOWlhanRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z1ptbHNkR1Z5SUNodlltb3NJR05pS1NCN1hISmNiaUFnWTI5dWMzUWdibVYzVDJKcUlEMGdlMzA3WEhKY2JpQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlHOWlhaWtnZTF4eVhHNGdJQ0FnWTI5dWMzUWdjSEp2Y0NBOUlHOWlhbHRyWlhsZE8xeHlYRzRnSUNBZ2FXWWdLQ0JqWWlod2NtOXdMQ0JyWlhrc0lHOWlhaWtnS1NCN1hISmNiaUFnSUNBZ0lHNWxkMDlpYWx0clpYbGRJRDBnY0hKdmNEdGNjbHh1SUNBZ0lIMWNjbHh1SUNCOVhISmNiaUFnY21WMGRYSnVJRzVsZDA5aWFqdGNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnZEc5UFltcGxZM1FnS0dGeWNpd2dkbUZzS1NCN1hISmNiaUFnWTI5dWMzUWdibVYzVDJKcUlEMGdlMzA3WEhKY2JpQWdZWEp5TG1admNrVmhZMmdvS0hZcElEMCtJSHRjY2x4dUlDQWdJRzVsZDA5aWFsdDJYU0E5SUdselJuVnVZM1JwYjI0b2RtRnNLU0EvSUhaaGJDaDJLU0E2SUhaaGJEdGNjbHh1SUNCOUtUdGNjbHh1SUNCeVpYUjFjbTRnYm1WM1QySnFPMXh5WEc1OVhISmNiaUlzSW1sdGNHOXlkQ0I3SUdSbFptbHVaU0I5SUdaeWIyMGdKeTR2UkdWbWFXNXBkR2x2YmljN1hISmNibWx0Y0c5eWRDQjdJR0Z3Y0d4NUlIMGdabkp2YlNBbkxpOVFjbTlrZFdOMGFXOXVKenRjY2x4dVhISmNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdlMXh5WEc0Z0lHUmxabWx1WlN4Y2NseHVJQ0JoY0hCc2VTeGNjbHh1ZlR0Y2NseHVJbDBzSW5OdmRYSmpaVkp2YjNRaU9pSWlmUT09IiwiaW1wb3J0IHsgc2VuZE1lc3NhZ2UgfSBmcm9tICcuLi9jb21tb24vaW50ZXJhY3Rpb24nO1xyXG5cclxuaW1wb3J0IHsgRklORF9BUElfSU5QVVRfQlVHX0ZJWF9CRUZPUkUsIEZJTkRfQVBJX0lOUFVUX0JVR19GSVhfQUZURVIgfSBmcm9tICcuL2ZpeGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpbmQ7XHJcblxyXG5mdW5jdGlvbiBmaW5kIChzZWFyY2hTdHJpbmdzLCBjYXNlU2Vuc2l0aXZlLCBjYikge1xyXG4gIEZJTkRfQVBJX0lOUFVUX0JVR19GSVhfQkVGT1JFKCk7XHJcbiAgXHJcbiAgc2VuZE1lc3NhZ2UoJ2ZpbmQnLCB7XHJcbiAgICBzdHJpbmc6IHNlYXJjaFN0cmluZ3Muc2hpZnQoKS5zdHJpbmcsXHJcbiAgICBjYXNlU2Vuc2l0aXZlLFxyXG4gIH0sICh7IGZvdW5kUmVzdWx0cyB9KSA9PiB7XHJcbiAgICBcclxuICAgIEZJTkRfQVBJX0lOUFVUX0JVR19GSVhfQUZURVIoKTtcclxuXHJcbiAgICBjb25zdCBhbGxUZXh0Tm9kZXMgPSBnZXRBbGxUZXh0Tm9kZXMoKTtcclxuICAgIGNvbnN0IGZpbmFsUmVzdWx0cyA9IGZpbHRlclJhbmdlcyhmb3VuZFJlc3VsdHMsIHNlYXJjaFN0cmluZ3MsIGNhc2VTZW5zaXRpdmUsIGFsbFRleHROb2Rlcyk7XHJcblxyXG4gICAgY2IoZmluYWxSZXN1bHRzKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QWxsVGV4dE5vZGVzICgpIHtcclxuICBjb25zdCBhbGxUZXh0Tm9kZXMgPSBbXTtcclxuICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGRvY3VtZW50LCB3aW5kb3cuTm9kZUZpbHRlci5TSE9XX1RFWFQsIG51bGwsIGZhbHNlKTtcclxuICBsZXQgbm9kZTtcclxuICB3aGlsZShub2RlID0gd2Fsa2VyLm5leHROb2RlKCkpIHtcclxuICAgIGFsbFRleHROb2Rlcy5wdXNoKG5vZGUpO1xyXG4gIH1cclxuICByZXR1cm4gYWxsVGV4dE5vZGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJSYW5nZXMgKGZpcnN0Rm91bmRQYXJ0LCBzZWFyY2hSZWZpbmVtZW50cywgY2FzZVNlbnNpdGl2ZSwgYWxsVGV4dE5vZGVzKSB7XHJcbiAgY29uc3QgZmluYWxSYW5nZXMgPSBbXTtcclxuICBmaXJzdEZvdW5kUGFydC5yYW5nZURhdGEuZm9yRWFjaCgocmFuZ2VPcHRzKSA9PiB7XHJcblxyXG4gICAgbGV0IGVuZE5vZGVQb3MgPSByYW5nZU9wdHMuZW5kVGV4dE5vZGVQb3M7XHJcbiAgICBsZXQgZW5kTm9kZSA9IGFsbFRleHROb2Rlc1tyYW5nZU9wdHMuZW5kVGV4dE5vZGVQb3NdO1xyXG4gICAgbGV0IGVuZE9mZnNldCA9IHJhbmdlT3B0cy5lbmRPZmZzZXQ7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWFyY2hSZWZpbmVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCByZWZpbmVtZW50ID0gc2VhcmNoUmVmaW5lbWVudHNbaV07XHJcblxyXG4gICAgICBsZXQgbmV4dE5vZGUgPSBlbmROb2RlO1xyXG4gICAgICBjb25zdCBzZWFyY2hEaXN0YW5jZSA9ICtyZWZpbmVtZW50LmRpc3RhbmNlICsgcmVmaW5lbWVudC5zdHJpbmcubGVuZ3RoO1xyXG4gICAgICBsZXQgcmVtYWluaW5nU2VhcmNoRGlzdGFuY2UgPSBzZWFyY2hEaXN0YW5jZSArIGVuZE9mZnNldDtcclxuICAgICAgbGV0IG5leHRPZmZzZXQgPSByZW1haW5pbmdTZWFyY2hEaXN0YW5jZTtcclxuICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcclxuICAgICAgbGV0IHByZXZOb2Rlc0xlbmd0aCA9IDA7XHJcblxyXG4gICAgICBkbyB7XHJcblxyXG4gICAgICAgIGxldCBub2RlVmFsdWVMZW5ndGggPSBuZXh0Tm9kZS5ub2RlVmFsdWUubGVuZ3RoO1xyXG4gICAgICAgIGlmIChuZXh0T2Zmc2V0ID4gbm9kZVZhbHVlTGVuZ3RoKSB7XHJcbiAgICAgICAgICBuZXh0T2Zmc2V0ID0gbm9kZVZhbHVlTGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWF0Y2hQb3MgPSBpc1N0cmluZ0luUmFuZ2UoXHJcbiAgICAgICAgICBlbmROb2RlLCBlbmRPZmZzZXQsXHJcbiAgICAgICAgICBuZXh0Tm9kZSwgbmV4dE9mZnNldCxcclxuICAgICAgICAgIHJlZmluZW1lbnQuc3RyaW5nLFxyXG4gICAgICAgICAgY2FzZVNlbnNpdGl2ZSxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAobWF0Y2hQb3MgPj0gMCkge1xyXG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XHJcbiAgICAgICAgICBlbmROb2RlID0gbmV4dE5vZGU7XHJcbiAgICAgICAgICBlbmRPZmZzZXQgPSBlbmRPZmZzZXQgKyBtYXRjaFBvcyAtIHByZXZOb2Rlc0xlbmd0aCArIHJlZmluZW1lbnQuc3RyaW5nLmxlbmd0aDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVtYWluaW5nU2VhcmNoRGlzdGFuY2UgPSByZW1haW5pbmdTZWFyY2hEaXN0YW5jZSAtIG5vZGVWYWx1ZUxlbmd0aDtcclxuICAgICAgICBuZXh0T2Zmc2V0ID0gcmVtYWluaW5nU2VhcmNoRGlzdGFuY2U7XHJcbiAgICAgICAgcHJldk5vZGVzTGVuZ3RoICs9IG5vZGVWYWx1ZUxlbmd0aDtcclxuICAgICAgICBuZXh0Tm9kZSA9IGFsbFRleHROb2Rlc1srK2VuZE5vZGVQb3NdO1xyXG5cclxuICAgICAgfSB3aGlsZSAoIHJlbWFpbmluZ1NlYXJjaERpc3RhbmNlID4gMCAmJiAhc3VjY2VzcyAmJiBuZXh0Tm9kZSApXHJcblxyXG4gICAgICBpZiAoIXN1Y2Nlc3MpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzdGFydE5vZGUgPSBhbGxUZXh0Tm9kZXNbcmFuZ2VPcHRzLnN0YXJ0VGV4dE5vZGVQb3NdO1xyXG4gICAgICBjb25zdCByYW5nZSA9IG5ldyBSYW5nZSgpO1xyXG4gICAgICByYW5nZS5zZXRTdGFydChzdGFydE5vZGUsIHJhbmdlT3B0cy5zdGFydE9mZnNldCk7XHJcbiAgICAgIHJhbmdlLnNldEVuZChlbmROb2RlLCBlbmRPZmZzZXQpO1xyXG5cclxuICAgICAgZmluYWxSYW5nZXMucHVzaChyYW5nZSk7XHJcbiAgICB9IGNhdGNoIChlKSB7fVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZmluYWxSYW5nZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU3RyaW5nSW5SYW5nZShzdGFydE5vZGUsIHN0YXJ0T2Zmc2V0LCBlbmROb2RlLCBlbmRPZmZzZXQsIHN0cmluZywgY2FzZVNlbnNpdGl2ZSkge1xyXG4gIGNvbnN0IHJhbmdlID0gbmV3IFJhbmdlKCk7XHJcbiAgcmFuZ2Uuc2V0U3RhcnQoc3RhcnROb2RlLCBzdGFydE9mZnNldCk7XHJcbiAgcmFuZ2Uuc2V0RW5kKGVuZE5vZGUsICBlbmRPZmZzZXQpO1xyXG4gIGxldCByYW5nZVRleHQgPSByYW5nZS50b1N0cmluZygpO1xyXG5cclxuICBpZiAoIWNhc2VTZW5zaXRpdmUpIHtcclxuICAgIHN0cmluZyA9IHN0cmluZy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgcmFuZ2VUZXh0ID0gcmFuZ2VUZXh0LnRvTG93ZXJDYXNlKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBtYXRjaFBvcyA9IHJhbmdlVGV4dC5pbmRleE9mKHN0cmluZyk7XHJcbiAgcmV0dXJuIG1hdGNoUG9zO1xyXG59XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4gIFRFTVBPUkFSWSBGSVggRk9SIEZJTkRJTkcgU1RSSU5HUyBUSEFUIEFSRSBFTlRFUkVEIElOIElOUFVUU1xyXG5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRklORF9BUElfSU5QVVRfQlVHX0ZJWF9CRUZPUkUgKGNiKSB7XHJcbiAgd2luZG93LmlucHV0VmFsdWVzID0gW107XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKS5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgaW5wdXRWYWx1ZXMucHVzaChpbnB1dC52YWx1ZSk7XHJcbiAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRklORF9BUElfSU5QVVRfQlVHX0ZJWF9BRlRFUiAoKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKS5mb3JFYWNoKChpbnB1dCwgaSkgPT4ge1xyXG4gICAgaW5wdXQudmFsdWUgPSB3aW5kb3cuaW5wdXRWYWx1ZXNbaV07XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IFN0b3JlIGZyb20gJy4uL2NvbW1vbi9zdG9yZSc7XHJcbmltcG9ydCB7IEVYVEVOU0lPTl9JRCwgRklORF9IRUxQRVJfQ0xBU1MgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi91aS9pbmRleCc7XHJcbmltcG9ydCBoaWdobGlnaHRpbmdTdHlsZXMgZnJvbSAnLi4vdWkvY29tcG9uZW50cy9oaWdobGlnaHRpbmcvc3R5bGVzJztcclxuaW1wb3J0IHNjcm9sbEJhck1hcmtTdHlsZXMgZnJvbSAnLi4vdWkvY29tcG9uZW50cy9zY3JvbGxiYXJNYXJrL3N0eWxlcyc7XHJcblxyXG5jb25zdCBISUdITElHSFRJTkdTX1BPU0lUSU9OUyA9IFtdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNyZWF0ZTogY3JlYXRlSGlnaGxpZ2h0aW5ncyxcclxuICByZW1vdmU6IHJlbW92ZUhpZ2hsaWdodGluZ3MsXHJcbiAgbW92ZVRvOiBqdW1wVG8sXHJcbiAgc3dpdGNoQmxpbmtpbmcsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhpZ2hsaWdodGluZ3MgKHJhbmdlcywgZGF0YSkge1xyXG4gIHJlbW92ZUhpZ2hsaWdodGluZ3MoZGF0YS5zZWFyY2hJZCk7XHJcblxyXG4gIGNvbnN0IGRvYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICBjb25zdCBzY3JvbGxMZWZ0ID0gKHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2Muc2Nyb2xsTGVmdCkgLSAoZG9jLmNsaWVudExlZnQgfHwgMCk7XHJcbiAgY29uc3Qgc2Nyb2xsVG9wID0gKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2Muc2Nyb2xsVG9wKSAgLSAoZG9jLmNsaWVudFRvcCB8fCAwKTtcclxuXHJcbiAgcmFuZ2VzLmZvckVhY2goKHJhbmdlLCByYW5nZUlkeCkgPT4ge1xyXG4gICAgY29uc3QgYm91bmRpbmdSZWN0cyA9IHJhbmdlLmdldENsaWVudFJlY3RzKCk7XHJcbiAgICBjb25zdCB0b3BQb3NpdGlvbiA9IHNjcm9sbFRvcCArIGJvdW5kaW5nUmVjdHNbMF0udG9wO1xyXG5cclxuICAgIGNvbnN0IGhpZ2hsaWdodERhdGEgPSB7XHJcbiAgICAgIGVsczogW10sXHJcbiAgICAgIHRvcDogdG9wUG9zaXRpb24sXHJcbiAgICAgIGxlZnQ6IHNjcm9sbExlZnQgKyBib3VuZGluZ1JlY3RzWzBdLmxlZnRcclxuICAgIH07XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGluZ1JlY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJlY3QgPSBib3VuZGluZ1JlY3RzW2ldO1xyXG5cclxuICAgICAgY29uc3QgaGlnaGxpZ2h0RWxlbWVudCA9IGNyZWF0ZUhpZ2h0bGlnaHRFbGVtZW50KHJlY3QsIHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCwgZGF0YSk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGlnaGxpZ2h0RWxlbWVudCk7XHJcblxyXG4gICAgICBoaWdobGlnaHREYXRhLmVscy5wdXNoKGhpZ2hsaWdodEVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNjcm9sbEJhck1hcmsgPSBjcmVhdGVTY3JvbGxiYXJNYXJrKHRvcFBvc2l0aW9uLCBkYXRhLCByYW5nZUlkeCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbEJhck1hcmspO1xyXG5cclxuICAgIEhJR0hMSUdIVElOR1NfUE9TSVRJT05TW2RhdGEuc2VhcmNoSWRdLnB1c2goaGlnaGxpZ2h0RGF0YSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhpZ2h0bGlnaHRFbGVtZW50IChyZWN0LCBzY3JvbGxUb3AsIHNjcm9sbExlZnQsIGRhdGEpIHtcclxuICBjb25zdCBoaWdobGlnaHQgPSBjcmVhdGVFbGVtZW50KFxyXG4gICAgJ3NwYW4nLFxyXG4gICAgaGlnaGxpZ2h0aW5nU3R5bGVzKHsgc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0LCByZWN0LCAuLi5kYXRhIH0pXHJcbiAgKTtcclxuICBcclxuICBoaWdobGlnaHQuY2xhc3NMaXN0LmFkZChFWFRFTlNJT05fSUQgKyBkYXRhLnNlYXJjaElkKTtcclxuXHJcbiAgcmV0dXJuIGhpZ2hsaWdodDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU2Nyb2xsYmFyTWFyayAodG9wUG9zaXRpb24sIGRhdGEsIHJhbmdlSWR4KSB7XHJcbiAgY29uc3Qgc2Nyb2xsQmFyTWFyayA9IGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAnc3BhbicsXHJcbiAgICBzY3JvbGxCYXJNYXJrU3R5bGVzKHsgdG9wUG9zaXRpb24sIC4uLmRhdGEgfSlcclxuICApO1xyXG5cclxuICBzY3JvbGxCYXJNYXJrLnRpdGxlID0gZGF0YS5zZWFyY2hTdHJpbmc7XHJcbiAgc2Nyb2xsQmFyTWFyay5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAganVtcFRvKGRhdGEuc2VhcmNoSWQsIHJhbmdlSWR4KTtcclxuICAgIFN0b3JlLm1vdmVUaHJvdWdoU2VhcmNoKHsgc2VhcmNoSWQ6IGRhdGEuc2VhcmNoSWQsIGhpZ2hsaWdodFBvc2l0aW9uOiByYW5nZUlkeCArIDEgfSk7XHJcbiAgfTtcclxuICBzY3JvbGxCYXJNYXJrLmNsYXNzTGlzdC5hZGQoRVhURU5TSU9OX0lEICsgZGF0YS5zZWFyY2hJZCk7XHJcblxyXG4gIHJldHVybiBzY3JvbGxCYXJNYXJrO1xyXG59XHJcblxyXG5mdW5jdGlvbiBqdW1wVG8gKHNlYXJjaElkLCBpZCkge1xyXG4gIGNvbnN0IGhpZ2hsaWdodFBvc2l0aW9uID0gSElHSExJR0hUSU5HU19QT1NJVElPTlNbc2VhcmNoSWRdW2lkXTtcclxuICBjb25zdCBjZW50ZXJIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xyXG4gIGNvbnN0IGNlbnRlcldpZHRoID0gd2luZG93LmlubmVyV2lkdGggLyAyO1xyXG4gIHdpbmRvdy5zY3JvbGxUbyhcclxuICAgIGhpZ2hsaWdodFBvc2l0aW9uLmxlZnQgLSBjZW50ZXJXaWR0aCxcclxuICAgIGhpZ2hsaWdodFBvc2l0aW9uLnRvcCAtIGNlbnRlckhlaWdodFxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUhpZ2hsaWdodGluZ3MgKHNlYXJjaElkKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBFWFRFTlNJT05fSUQgKyBzZWFyY2hJZClcclxuICAgIC5mb3JFYWNoKChlbCkgPT4gZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCkpO1xyXG5cclxuICBISUdITElHSFRJTkdTX1BPU0lUSU9OU1tzZWFyY2hJZF0gPSBbXTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3dpdGNoQmxpbmtpbmcgKHNlYXJjaElkLCBvcGVyYXRpb24pIHtcclxuICBISUdITElHSFRJTkdTX1BPU0lUSU9OU1tzZWFyY2hJZF1cclxuICAgIC5mb3JFYWNoKChoaWdobGlnaHREYXRhKSA9PiBoaWdobGlnaHREYXRhLmVsc1xyXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdFtvcGVyYXRpb25dKGAke0ZJTkRfSEVMUEVSX0NMQVNTfSR7c2VhcmNoSWR9YCkpKTtcclxufVxyXG4iLCJpbXBvcnQgU3RvcmUgZnJvbSAnLi4vY29tbW9uL3N0b3JlJztcclxuaW1wb3J0IHsgc2VuZE1lc3NhZ2UgfSBmcm9tICcuLi9jb21tb24vaW50ZXJhY3Rpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHNhdmVUYWJJZCxcclxuICBub3RpZnlPZkNsb3NpbmcsXHJcbiAgcG9wdXBTdGF0ZSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNhdmVUYWJJZCAobWVzc2FnZSkge1xyXG4gIFN0b3JlLnRhYklkKG1lc3NhZ2UudGFiSWQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwb3B1cFN0YXRlIChzdGF0ZSkge1xyXG4gIFN0b3JlLnNldFBvcHVwU3RhdGUoc3RhdGUub3Blbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vdGlmeU9mQ2xvc2luZyAoY2IpIHtcclxuICBzZW5kTWVzc2FnZSgnY2xvc2luZ1BvcHVwJywgeyB0YWJJZDogU3RvcmUudGFiSWQoKSB9LCAoKSA9PiBjYigpKTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgRVhURU5TSU9OX0lEID0gJ211bHRpLXN0cmluZy1zZWFyY2gtZXh0ZW5zaW9uLScgKyBicm93c2VyLnJ1bnRpbWUuaWQucmVwbGFjZSgvW3t9QF0vZywgJycpO1xyXG5leHBvcnQgY29uc3QgRklORF9IRUxQRVJfQ0xBU1MgPSBFWFRFTlNJT05fSUQgKyAnLWZpbmQtaGVscGVyJzsiLCJjb25zdCBNRVNTQUdFX0xJU1RFTkVSUyA9IHt9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRUYWIgKCkge1xyXG4gIHJldHVybiBicm93c2VyLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kTWVzc2FnZSAoYWN0aW9uLCBwYXlsb2FkLCBjYikge1xyXG4gIGNvbnN0IGNhbGxiYWNrSWQgPSBwYXlsb2FkLmNhbGxiYWNrSWQgfHwgc2F2ZUNhbGxiYWNrKGFjdGlvbiwgY2IpO1xyXG4gIGNvbnN0IG1lc3NhZ2UgPSB7IGFjdGlvbiwgY2FsbGJhY2tJZCwgLi4ucGF5bG9hZCB9O1xyXG5cclxuICBpZiAod2luZG93Ll9fSVNfQkFDS0dST1VORF9TQ1JJUFRfXykge1xyXG4gICAgcmV0dXJuIGdldEN1cnJlbnRUYWIoKS50aGVuKCh0YWIpID0+IGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWJbMF0uaWQsIG1lc3NhZ2UpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobWVzc2FnZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBvbk1lc3NhZ2UgKG1lc3NhZ2UsIGFjdGlvbnMgPSB7fSkge1xyXG4gIGlmIChtZXNzYWdlLmlzQW5zd2VyKSB7XHJcbiAgICBNRVNTQUdFX0xJU1RFTkVSU1ttZXNzYWdlLmNhbGxiYWNrSWRdKG1lc3NhZ2UpO1xyXG4gICAgZGVsZXRlIE1FU1NBR0VfTElTVEVORVJTW21lc3NhZ2UuY2FsbGJhY2tJZF07XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoYWN0aW9uc1ttZXNzYWdlLmFjdGlvbl0pIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFjdGlvbnNbIG1lc3NhZ2UuYWN0aW9uIF0obWVzc2FnZSk7XHJcbiAgICBcclxuICAgIGlmIChtZXNzYWdlLmNhbGxiYWNrSWQpIHtcclxuICAgICAgc2VuZE1lc3NhZ2UobWVzc2FnZS5hY3Rpb24sIHsgY2FsbGJhY2tJZDogbWVzc2FnZS5jYWxsYmFja0lkLCBpc0Fuc3dlcjogdHJ1ZSwgLi4ucmVzdWx0IH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZUNhbGxiYWNrIChhY3Rpb24sIGNiKSB7XHJcbiAgaWYgKCFjYikge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2FsbGJhY2tJZCA9IERhdGUubm93KCkgKyBNYXRoLnJhbmRvbSgpICsgYWN0aW9uO1xyXG4gIE1FU1NBR0VfTElTVEVORVJTW2NhbGxiYWNrSWRdID0gY2I7XHJcblxyXG4gIHJldHVybiBjYWxsYmFja0lkO1xyXG59XHJcbiIsImltcG9ydCBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvcGFnZSc7XHJcbmltcG9ydCBIaWdobGlnaHRpbmdzIGZyb20gJy4uL2FjdGlvbnMvaGlnaGxpZ2h0aW5ncyc7XHJcbmltcG9ydCBmaW5kIGZyb20gJy4uL2FjdGlvbnMvZmluZCc7XHJcblxyXG5jb25zdCBMSVNURU5FUlMgPSBbXTtcclxuXHJcbmNvbnN0IENPTE9SUyA9IFtcclxuICAnMjU1LCAyNTUsIDI1JyxcclxuICAnNjAsIDE4MCwgNzUnLFxyXG4gICcyMzAsIDI1LCA3NScsXHJcbiAgJzAsIDEzMCwgMjAwJyxcclxuICAnMjQ1LCAxMzAsIDQ4JyxcclxuICAnMTQ1LCAzMCwgMTgwJyxcclxuICAnMjQwLCA1MCwgMjMwJyxcclxuICAnMTI4LCAxMjgsIDEyOCcsXHJcbiAgJzIxMCwgMjQ1LCA2MCcsXHJcbiAgJzI1MCwgMTkwLCAxOTAnLFxyXG5dO1xyXG5cclxuY29uc3Qgc3RvcmUgPSB7XHJcbiAgQ09MT1JTLFxyXG4gIGdldEN1cnJlbnRTZWFyY2gsXHJcbiAgYWRkTGlzdGVuZXIsXHJcbiAgdGFiSWQsXHJcbiAgc2VhcmNoLFxyXG4gIG1vdmVUaHJvdWdoU2VhcmNoLFxyXG4gIHN3aXRjaENhc2VTZW5zaXRpdml0eSxcclxuICBzd2l0Y2hCbGluayxcclxuICByZW1vdmVTZWFyY2gsXHJcbiAgZ2V0UG9wdXBEYXRhLFxyXG4gIHNldFBvcHVwU3RhdGUsXHJcbiAgY2xvc2VQb3B1cCxcclxufTtcclxuXHJcbmNvbnN0IERFRkFVTFRfU0VBUkNIX1NUUklORyA9IHsgc3RyaW5nOiAnJywgZmlyc3Q6IHRydWUsIGZvY3VzOiB0cnVlLCBkaXN0YW5jZTogbnVsbCB9O1xyXG5cclxuY29uc3QgU1RBVEUgPSB7XHJcbiAgcG9wdXBPcGVuOiB0cnVlLFxyXG4gIHRhYklkOiBudWxsLFxyXG4gIHNlYXJjaGVzOiBDT0xPUlMubWFwKGluaXRpYXRlU2VhcmNoT3B0cyksXHJcbiAgc2VhcmNoSWQ6IDEsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBpbml0aWF0ZVNlYXJjaE9wdHMgKHYsIGkpIHtcclxuICByZXR1cm4ge1xyXG4gICAgc2VhcmNoU3RyaW5nczogWyBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX1NFQVJDSF9TVFJJTkcpIF0sXHJcbiAgICBmb3VuZFJlc3VsdHM6IDAsXHJcbiAgICBsYXN0Rm9jdXNlZDogMCxcclxuICAgIHNlYXJjaEhhcHBlbmVkOiBmYWxzZSxcclxuICAgIGhpZ2hsaWdodFBvc2l0aW9uOiAwLFxyXG4gICAgY29sb3I6IENPTE9SU1tpXSxcclxuICAgIHNlYXJjaElkOiBpLFxyXG4gICAgY2FzZVNlbnNpdGl2ZTogZmFsc2UsXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50U2VhcmNoICgpIHtcclxuICByZXR1cm4gU1RBVEUuc2VhcmNoZXNbIFNUQVRFLnNlYXJjaElkIF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaCAoc2VhcmNoU3RyaW5ncykge1xyXG4gIGNvbnN0IHNlYXJjaCA9IGdldEN1cnJlbnRTZWFyY2goKTtcclxuICBjb25zdCB7IHNlYXJjaElkLCBjb2xvciwgY2FzZVNlbnNpdGl2ZSB9ID0gc2VhcmNoO1xyXG4gIGNvbnN0IHNlYXJjaFN0cmluZyA9IHNlYXJjaFN0cmluZ3MubWFwKChzdHJPYmopID0+IHN0ck9iai5zdHJpbmcpLmpvaW4oJyAnKTtcclxuXHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlICgocmVzKSA9PiB7XHJcblxyXG4gICAgZmluZChzZWFyY2hTdHJpbmdzLnNsaWNlKCksIGNhc2VTZW5zaXRpdmUsIChmb3VuZFJlc3VsdHMpID0+IHtcclxuICAgICAgSGlnaGxpZ2h0aW5ncy5jcmVhdGUoZm91bmRSZXN1bHRzLCB7IHNlYXJjaElkLCBjb2xvciwgc2VhcmNoU3RyaW5nIH0pO1xyXG5cclxuICAgICAgY29uc3QgY2hhbmdlT2JqID0geyBmb3VuZFJlc3VsdHM6IGZvdW5kUmVzdWx0cy5sZW5ndGgsIHNlYXJjaEhhcHBlbmVkOiB0cnVlLCBibGlua1NldDogZmFsc2UsIHNlYXJjaFN0cmluZ3MgfTtcclxuICBcclxuICAgICAgaWYgKGZvdW5kUmVzdWx0cy5sZW5ndGgpIHtcclxuICAgICAgICBjaGFuZ2VPYmouaGlnaGxpZ2h0UG9zaXRpb24gPSAxO1xyXG4gICAgICAgIEhpZ2hsaWdodGluZ3MubW92ZVRvKHNlYXJjaElkLCAwKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBPYmplY3QuYXNzaWduKHNlYXJjaCwgY2hhbmdlT2JqKTtcclxuICAgICAgcnVuTGlzdGVuZXJzKCk7XHJcbiAgICAgIHJlcygpO1xyXG4gICAgfSk7XHJcblxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb3ZlVGhyb3VnaFNlYXJjaCAob3B0cywgd2l0aE1vdmUpIHtcclxuICBjb25zdCBzZWFyY2hJZCA9IGFkanVzdE51bWJlclRvQm91bmRhcmllcyhvcHRzLnNlYXJjaElkLCAwLCBTVEFURS5zZWFyY2hlcy5sZW5ndGggLSAxLCBTVEFURS5zZWFyY2hJZCk7XHJcbiAgU1RBVEUuc2VhcmNoSWQgPSBzZWFyY2hJZDtcclxuICBjb25zdCBzZWFyY2ggPSBnZXRDdXJyZW50U2VhcmNoKCk7XHJcblxyXG4gIGNvbnN0IGhpZ2hsaWdodFBvc2l0aW9uID0gYWRqdXN0TnVtYmVyVG9Cb3VuZGFyaWVzKG9wdHMuaGlnaGxpZ2h0UG9zaXRpb24sIDEsIHNlYXJjaC5mb3VuZFJlc3VsdHMsIHNlYXJjaC5oaWdobGlnaHRQb3NpdGlvbik7XHJcbiAgc2VhcmNoLmhpZ2hsaWdodFBvc2l0aW9uID0gaGlnaGxpZ2h0UG9zaXRpb247XHJcblxyXG4gIGlmICh3aXRoTW92ZSAmJiBoaWdobGlnaHRQb3NpdGlvbikge1xyXG4gICAgSGlnaGxpZ2h0aW5ncy5tb3ZlVG8oc2VhcmNoSWQsIGhpZ2hsaWdodFBvc2l0aW9uIC0gMSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcnVuTGlzdGVuZXJzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkanVzdE51bWJlclRvQm91bmRhcmllcyAobnVtLCBtaW4sIG1heCwgZGVmKSB7XHJcbiAgc3dpdGNoIChudW0pIHtcclxuICAgIGNhc2UgbWluIC0gMTpcclxuICAgICAgcmV0dXJuIG1heDtcclxuXHJcbiAgICBjYXNlIHVuZGVmaW5lZDpcclxuICAgICAgcmV0dXJuIGRlZjtcclxuXHJcbiAgICBjYXNlIG1heCArIDE6XHJcbiAgICAgIHJldHVybiBtaW47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVtO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTZWFyY2ggKGFsbCwgc2VhcmNoSWQpIHtcclxuICBjb25zdCBpZHggPSB0eXBlb2Ygc2VhcmNoSWQgPT09ICd1bmRlZmluZWQnID8gU1RBVEUuc2VhcmNoSWQgOiBzZWFyY2hJZDtcclxuXHJcbiAgYWxsID8gcmVtb3ZlQWxsU2VhcmNoZXMoKSA6IHJlbW92ZVNlYXJjaEJ5SWR4KGlkeCk7XHJcbiAgcmV0dXJuIHJ1bkxpc3RlbmVycygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTZWFyY2hCeUlkeCAoaWR4KSB7XHJcbiAgU1RBVEUuc2VhcmNoZXNbaWR4XSA9IGluaXRpYXRlU2VhcmNoT3B0cyhDT0xPUlNbaWR4XSwgaWR4KTtcclxuICBIaWdobGlnaHRpbmdzLnJlbW92ZShpZHgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVBbGxTZWFyY2hlcyAoKSB7XHJcbiAgQ09MT1JTLmZvckVhY2goKGMsIGlkeCkgPT4gcmVtb3ZlU2VhcmNoQnlJZHgoaWR4KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN3aXRjaEJsaW5rICgpIHtcclxuICBjb25zdCBzZWFyY2ggPSBnZXRDdXJyZW50U2VhcmNoKCk7XHJcblxyXG4gIGlmICghc2VhcmNoLmZvdW5kUmVzdWx0cykge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3BlcmF0aW9uID0gc2VhcmNoLmJsaW5rU2V0ID8gJ3JlbW92ZScgOiAnYWRkJztcclxuXHJcbiAgSGlnaGxpZ2h0aW5ncy5zd2l0Y2hCbGlua2luZyhzZWFyY2guc2VhcmNoSWQsIG9wZXJhdGlvbik7XHJcblxyXG4gIHNlYXJjaC5ibGlua1NldCA9ICFzZWFyY2guYmxpbmtTZXQ7XHJcbiAgcmV0dXJuIHJ1bkxpc3RlbmVycygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzd2l0Y2hDYXNlU2Vuc2l0aXZpdHkgKCkge1xyXG4gIGNvbnN0IGNhc2VTZW5zaXRpdmUgPSBTVEFURS5zZWFyY2hlc1sgU1RBVEUuc2VhcmNoSWQgXS5jYXNlU2Vuc2l0aXZlO1xyXG4gIFNUQVRFLnNlYXJjaGVzWyBTVEFURS5zZWFyY2hJZCBdLmNhc2VTZW5zaXRpdmUgPSAhY2FzZVNlbnNpdGl2ZTtcclxuICByZXR1cm4gcnVuTGlzdGVuZXJzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZExpc3RlbmVyIChmbikge1xyXG4gIExJU1RFTkVSUy5wdXNoKGZuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcnVuTGlzdGVuZXJzICgpIHtcclxuICBMSVNURU5FUlMuZm9yRWFjaCgoZm4pID0+IGZuKHN0b3JlKSk7XHJcbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0YWJJZCAoaWQpIHtcclxuICBpZiAoaWQpIHtcclxuICAgIHJldHVybiBTVEFURS50YWJJZCA9IGlkXHJcbiAgfVxyXG5cclxuICByZXR1cm4gU1RBVEUudGFiSWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBvcHVwRGF0YSAoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG9wZW46IFNUQVRFLnBvcHVwT3BlbixcclxuICAgIHNlYXJjaGVzOiBTVEFURS5zZWFyY2hlcy5maWx0ZXIoKGVsKSA9PiBlbC5zZWFyY2hIYXBwZW5lZCkubWFwKChlbCkgPT4gKHtcclxuICAgICAgY29sb3I6IGVsLmNvbG9yLFxyXG4gICAgICBzdHJpbmc6IGVsLnNlYXJjaFN0cmluZ3MubWFwKChzdHJpbmcpID0+IHN0cmluZy5zdHJpbmcpLmpvaW4oJyAnKSxcclxuICAgICAgaWR4OiBlbC5zZWFyY2hJZCxcclxuICAgIH0pKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VQb3B1cCAoKSB7XHJcbiAgYWN0aW9ucy5ub3RpZnlPZkNsb3NpbmcoKCkgPT4gc2V0UG9wdXBTdGF0ZShmYWxzZSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRQb3B1cFN0YXRlIChvcGVuKSB7XHJcbiAgU1RBVEUucG9wdXBPcGVuID0gb3BlbjtcclxuICByZXR1cm4gcnVuTGlzdGVuZXJzKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG4iLCJpbXBvcnQgeyBFWFRFTlNJT05fSUQsIEZJTkRfSEVMUEVSX0NMQVNTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9zdG9yZSc7XHJcblxyXG5leHBvcnQgbGV0IHN0eWxlc1N0cmluZyA9IFN0b3JlLkNPTE9SUy5tYXAoKGNvbG9yLCBpZHgpID0+IGBcclxuICBAa2V5ZnJhbWVzICR7RklORF9IRUxQRVJfQ0xBU1N9JHtpZHh9IHtcclxuICAgIDAlIHtcclxuICAgICAgb3V0bGluZS1jb2xvcjogcmdiYSgke2NvbG9yfSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG91dGxpbmUtY29sb3I6IHJnYmEoJHtjb2xvcn0sIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLiR7RklORF9IRUxQRVJfQ0xBU1N9JHtpZHh9IHtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiAnJHtGSU5EX0hFTFBFUl9DTEFTU30ke2lkeH0nO1xyXG4gICAgb3V0bGluZS1zdHlsZTogc29saWQ7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuM3M7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICB9XHJcbmApLmpvaW4oJycpO1xyXG5cclxuc3R5bGVzU3RyaW5nICs9IGBcclxuICBAa2V5ZnJhbWVzICR7RVhURU5TSU9OX0lEfV9vdXRsaW5lX2JsaW5rZXIge1xyXG4gICAgNTAlIHtcclxuICAgICAgb3V0bGluZS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kU3R5bGVzIChzdHlsZVN0cikge1xyXG4gIGNvbnN0IHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gIHN0eWxlRWwuYXBwZW5kQ2hpbGQoIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0eWxlU3RyKSApO1xyXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbCk7XHJcbn1cclxuIiwiaW1wb3J0IENvdWxpIGZyb20gJ2NvdWxpJztcclxuaW1wb3J0IFN0b3JlIGZyb20gJy4vY29tbW9uL3N0b3JlJztcclxuaW1wb3J0ICcuL3VpL2NvbXBvbmVudHMvc2VhcmNoLXN0cmluZy9pbmRleCc7XHJcbmltcG9ydCAnLi91aS9jb21wb25lbnRzL2NvbnRyb2xzL2luZGV4JztcclxuaW1wb3J0ICcuL3VpL2NvbXBvbmVudHMvcG9wdXAvaW5kZXgnO1xyXG5cclxuaW1wb3J0IHsgRVhURU5TSU9OX0lEIH0gZnJvbSAnLi9jb21tb24vY29uc3RhbnRzJztcclxuXHJcbmltcG9ydCB7IG9uTWVzc2FnZSwgc2VuZE1lc3NhZ2UgfSBmcm9tICcuL2NvbW1vbi9pbnRlcmFjdGlvbic7XHJcbmltcG9ydCB7IGFwcGVuZFN0eWxlcywgc3R5bGVzU3RyaW5nIH0gZnJvbSAnLi9jb21tb24vc3R5bGVzJztcclxuXHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucy9wYWdlJztcclxuXHJcbmFwcGVuZFN0eWxlcyhzdHlsZXNTdHJpbmcpO1xyXG5pbml0aWFsaXplUG9wdXAoKTtcclxuXHJcbndpbmRvdy5vbnVubG9hZCA9ICgpID0+IHsgc2VuZE1lc3NhZ2UoJ2Nsb3NpbmdUYWInLCB7IHRhYklkOiBTdG9yZS50YWJJZCgpIH0pIH1cclxuXHJcbmJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UpID0+IG9uTWVzc2FnZShtZXNzYWdlLCBhY3Rpb25zKSk7XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplUG9wdXAgKCkge1xyXG4gIGNvbnN0IHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcG9wdXBDb250YWluZXIuc3R5bGUuekluZGV4ID0gMjE0NzQ4MzY0NztcclxuICBwb3B1cENvbnRhaW5lci5pZCA9IEVYVEVOU0lPTl9JRDtcclxuXHJcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwb3B1cCcpO1xyXG4gIHBvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKHBvcHVwKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcHVwQ29udGFpbmVyKTtcclxuXHJcbiAgQ291bGkuYXBwbHkoJyMnICsgRVhURU5TSU9OX0lEKTtcclxuXHJcbiAgcmV0dXJuIHdpbmRvdy5FWFRFTlNJT05fUE9QVVBfSU5URVJGQUNFO1xyXG59XHJcbiIsImltcG9ydCBDb3VsaSBmcm9tICdjb3VsaSc7XHJcbmltcG9ydCBTdG9yZSBmcm9tICcuLi8uLi8uLi9jb21tb24vc3RvcmUnO1xyXG5cclxuaW1wb3J0IG1hcmt1cCBmcm9tICcuL21hcmt1cC5odG1sJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5jb25zdCBBUFBfV0lEVEggPSAzOTA7XHJcbmNvbnN0IE1BWF9JTlBVVF9XSURUSCA9IDI0NTtcclxuY29uc3QgS0VZQk9BUkRfS0VZUyA9IEFycmF5KDEwKS5maWxsKDQ4KS5yZWR1Y2UoKGEgLCB2LCBpKSA9PiAoYVtpXSA9IDQ4ICsgaSkgJiYgYSAsIHt9KVxyXG5PYmplY3QuYXNzaWduKEtFWUJPQVJEX0tFWVMsIHtcclxuICBFU0M6IDI3LFxyXG4gIEVOVEVSOiAxMyxcclxuICBERUxFVEU6IDQ2LFxyXG4gIHc6IDg3LFxyXG4gIGU6IDY5LFxyXG4gIHI6IDgyLFxyXG4gIGE6IDY1LFxyXG4gIHM6IDgzLFxyXG4gIGQ6IDY4LFxyXG4gIGY6IDcwLFxyXG4gIGM6IDY3LFxyXG4gIGI6IDY2LFxyXG4gIFVQOiAzOCxcclxuICBMRUZUOiAzNyxcclxuICBET1dOOiA0MCxcclxuICBSSUdIVDogMzksXHJcbn0pO1xyXG5cclxuQ291bGkuZGVmaW5lKCdjb250cm9scycsIG1hcmt1cCwge1xyXG5cclxuICBsYXN0Rm9jdXNlZDoge30sXHJcbiAgc2VhcmNoSGFwcGVuZWQ6IHt9LFxyXG4gIGNhc2VTZW5zaXRpdmU6IHt9LFxyXG4gIGNvbG9yOiB7fSxcclxuICBibGlua1NldDoge30sXHJcblxyXG4gIGZvdW5kUmVzdWx0czoge1xyXG4gICAgaHRtbDogKCQpID0+IHtcclxuICAgICAgaWYgKCEkLnNlYXJjaEhhcHBlbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgcmVzdWx0U3RyaW5nID0gJC5mb3VuZFJlc3VsdHMgKyAnIHJlc3VsdHMnO1xyXG5cclxuICAgICAgaWYgKCQuZm91bmRSZXN1bHRzKSB7XHJcbiAgICAgICAgcmVzdWx0U3RyaW5nID0gJyBvZiAnICsgcmVzdWx0U3RyaW5nO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0U3RyaW5nO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHNlYXJjaEJ1dHRvbjogW3sgY2xpY2s6IChlLCBlbCwgY2kpID0+IFN0b3JlLnNlYXJjaCggY2kuZ2V0KCdzZWFyY2hTdHJpbmdzJykudmFsdWUoKSApLnRoZW4oKCkgPT4gY2kubWFya3VwKCdzZWFyY2hJZCcpLmZvY3VzKCkpIH1dLFxyXG5cclxuICBzZWFyY2hJZDoge1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIGNsaWNrOiAoKSA9PiBTdG9yZS5zd2l0Y2hCbGluaygpLFxyXG5cclxuICAgICAgY29udGV4dG1lbnU6IChlLCBlbCwgY2kpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgU3RvcmUucmVtb3ZlU2VhcmNoKGUuc2hpZnRLZXkpLnRoZW4oKCkgPT4gY2kubWFya3VwKCdzZWFyY2hJZCcpLmZvY3VzKCkpO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAga2V5dXA6IChlLCBlbCwgY2kpID0+IHtcclxuICAgICAgICBpZiAoT2JqZWN0LnZhbHVlcyhLRVlCT0FSRF9LRVlTKS5pbmRleE9mKGUua2V5Q29kZSkgPCAwKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgICAgY2FzZSBLRVlCT0FSRF9LRVlTLlVQOlxyXG4gICAgICAgICAgY2FzZSBLRVlCT0FSRF9LRVlTLnM6XHJcbiAgICAgICAgICAgIFN0b3JlLm1vdmVUaHJvdWdoU2VhcmNoKHsgaGlnaGxpZ2h0UG9zaXRpb246IGNpLmdldCgnaGlnaGxpZ2h0UG9zaXRpb24nKSAtIDEgfSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICBjYXNlIEtFWUJPQVJEX0tFWVMuRE9XTjpcclxuICAgICAgICAgIGNhc2UgS0VZQk9BUkRfS0VZUy5kOlxyXG4gICAgICAgICAgICBTdG9yZS5tb3ZlVGhyb3VnaFNlYXJjaCh7IGhpZ2hsaWdodFBvc2l0aW9uOiBjaS5nZXQoJ2hpZ2hsaWdodFBvc2l0aW9uJykgKyAxIH0sIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgY2FzZSBLRVlCT0FSRF9LRVlTLkVOVEVSOlxyXG4gICAgICAgICAgY2FzZSBLRVlCT0FSRF9LRVlTLmU6XHJcbiAgICAgICAgICAgIFN0b3JlLnNlYXJjaCggY2kuZ2V0KCdzZWFyY2hTdHJpbmdzJykudmFsdWUoKSApLnRoZW4oKCkgPT4gY2kubWFya3VwKCdzZWFyY2hJZCcpLmZvY3VzKCkpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgY2FzZSBLRVlCT0FSRF9LRVlTLkRFTEVURTpcclxuICAgICAgICAgIGNhc2UgS0VZQk9BUkRfS0VZUy5yOlxyXG4gICAgICAgICAgICBTdG9yZS5yZW1vdmVTZWFyY2goZS5zaGlmdEtleSkudGhlbigoKSA9PiBjaS5tYXJrdXAoJ3NlYXJjaElkJykuZm9jdXMoKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICBjYXNlIEtFWUJPQVJEX0tFWVMudzpcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0cmluZycpWyBjaS5nZXQoJ2xhc3RGb2N1c2VkJykgXS5mb2N1cygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgY2FzZSBLRVlCT0FSRF9LRVlTLkxFRlQ6XHJcbiAgICAgICAgICBjYXNlIEtFWUJPQVJEX0tFWVMuYTpcclxuICAgICAgICAgICAgU3RvcmUubW92ZVRocm91Z2hTZWFyY2goeyBzZWFyY2hJZDogY2kuZ2V0KCdzZWFyY2hJZCcpIC0gMSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgIGNhc2UgS0VZQk9BUkRfS0VZUy5SSUdIVDpcclxuICAgICAgICAgIGNhc2UgS0VZQk9BUkRfS0VZUy5mOlxyXG4gICAgICAgICAgICBTdG9yZS5tb3ZlVGhyb3VnaFNlYXJjaCh7IHNlYXJjaElkOiBjaS5nZXQoJ3NlYXJjaElkJykgKyAxIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgY2FzZSBLRVlCT0FSRF9LRVlTLmM6XHJcbiAgICAgICAgICAgIFN0b3JlLnN3aXRjaENhc2VTZW5zaXRpdml0eSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgY2FzZSBLRVlCT0FSRF9LRVlTLmI6XHJcbiAgICAgICAgICAgIFN0b3JlLnN3aXRjaEJsaW5rKClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgIGNhc2UgS0VZQk9BUkRfS0VZUy5FU0M6XHJcbiAgICAgICAgICAgIFN0b3JlLmNsb3NlUG9wdXAoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIFN0b3JlLm1vdmVUaHJvdWdoU2VhcmNoKHsgc2VhcmNoSWQ6IGUua2V5Q29kZSAtIDQ4IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHN0eWxlOiAoJCkgPT4gKHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgnICsgICQuY29sb3IgKyAnLCAwLjM1KScsXHJcbiAgICB9KSxcclxuICAgIGhvb2tzOiB7XHJcbiAgICAgIHVwZGF0ZTogKGVsKSA9PiBlbC5mb2N1cygpXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbW92ZUxlZnQ6IFt7IGNsaWNrOiAoZSwgZWwsIGNpKSA9PiBTdG9yZS5tb3ZlVGhyb3VnaFNlYXJjaCh7IHNlYXJjaElkOiBjaS5nZXQoJ3NlYXJjaElkJykgLSAxIH0pIH1dLFxyXG5cclxuICBtb3ZlUmlnaHQ6IFt7IGNsaWNrOiAoZSwgZWwsIGNpKSA9PiBTdG9yZS5tb3ZlVGhyb3VnaFNlYXJjaCh7IHNlYXJjaElkOiBjaS5nZXQoJ3NlYXJjaElkJykgKyAxIH0pIH1dLFxyXG5cclxuICByZW1vdmVTZWFyY2g6IHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBjbGljazogKGUsIGVsLCBjaSkgPT4gU3RvcmUucmVtb3ZlU2VhcmNoKGUuc2hpZnRLZXkpLnRoZW4oKCkgPT4gY2kubWFya3VwKCdzZWFyY2hJZCcpLmZvY3VzKCkpXHJcbiAgICB9LFxyXG4gICAgY2xhc3M6ICgkKSA9PiAoe1xyXG4gICAgICBoaWRkZW46ICQuc2VhcmNoU3RyaW5ncy5sZW5ndGggPT09IDEgJiYgISQuc2VhcmNoU3RyaW5nc1swXS5zdHJpbmcubGVuZ3RoICYmICEkLnNlYXJjaEhhcHBlbmVkXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGNhc2VCdXR0b246IHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBjbGljazogKCkgPT4gU3RvcmUuc3dpdGNoQ2FzZVNlbnNpdGl2aXR5KCksXHJcbiAgICB9LFxyXG4gICAgc3R5bGU6ICgkKSA9PiAoe1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICQuY2FzZVNlbnNpdGl2ZSA/ICdQYWxlR3JlZW4nIDogJ3doaXRlJyxcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgcmVzdWx0czogeyBjbGFzczogKCQpID0+ICh7IGhpZGRlbjogISQuc2VhcmNoSGFwcGVuZWQgfSkgfSxcclxuXHJcbiAgY29udHJvbHM6ICgkKSA9PiAoeyBoaWRkZW46ICEkLmZvdW5kUmVzdWx0cyB9KSxcclxuXHJcbiAgbW92ZVVwOiBbeyBjbGljazogKGUsIGVsLCBjaSkgPT4gU3RvcmUubW92ZVRocm91Z2hTZWFyY2goeyBoaWdobGlnaHRQb3NpdGlvbjogY2kuZ2V0KCdoaWdobGlnaHRQb3NpdGlvbicpIC0gMSB9LCB0cnVlKSB9XSxcclxuXHJcbiAgbW92ZURvd246IFt7IGNsaWNrOiAoZSwgZWwsIGNpKSA9PiBTdG9yZS5tb3ZlVGhyb3VnaFNlYXJjaCh7IGhpZ2hsaWdodFBvc2l0aW9uOiBjaS5nZXQoJ2hpZ2hsaWdodFBvc2l0aW9uJykgKyAxIH0sIHRydWUpIH1dLFxyXG5cclxuICBibGluazoge1xyXG4gICAgZXZlbnRzOiB7IGNsaWNrOiAoKSA9PiBTdG9yZS5zd2l0Y2hCbGluaygpIH0sXHJcbiAgICBzdHlsZTogKCQpID0+ICh7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJC5ibGlua1NldCA/IGByZ2JhKCR7ICQuY29sb3IgfSwgMC4zNSlgIDogJ3doaXRlJyxcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgJyc6IHtcclxuICAgIGhvb2tzOiB7XHJcbiAgICAgIG1vdW50OiAoZWwsIGRhdGEsIGNpKSA9PiB7XHJcbiAgICAgICAgY2kuc2V0KCBTdG9yZS5nZXRDdXJyZW50U2VhcmNoKCkgKTtcclxuICAgICAgICBTdG9yZS5hZGRMaXN0ZW5lcigoc3RvcmUpID0+IGNpLnNldCggc3RvcmUuZ2V0Q3VycmVudFNlYXJjaCgpICkpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgY2kubWFya3VwKCdzZWFyY2hJZCcpLmZvY3VzKCk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0sIHN0eWxlcyh7IEFQUF9XSURUSCwgTUFYX0lOUFVUX1dJRFRIIH0pKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxyXFxuICA8dWwgeC1sYj1cXFwic2VhcmNoU3RyaW5nc1xcXCI+XFxyXFxuICAgIDxzZWFyY2gtc3RyaW5nPlxcclxcbiAgPC91bD5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcInVwcGVyQnV0dG9uc1xcXCI+XFxyXFxuICAgIDxidXR0b24geC1iPVxcXCJzZWFyY2hCdXR0b25cXFwiPkZpbmQ8L2J1dHRvbj5cXHJcXG4gICAgPGJ1dHRvbiB4LWI9XFxcImNhc2VCdXR0b25cXFwiIHRpdGxlPVxcXCJDYXNlLXNlbnNpdGl2ZSBvbi9vZmZcXFwiPkM8L2J1dHRvbj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwic2VhcmNoLWNvbnN0cm9sc1xcXCI+XFxyXFxuICAgICAgPGJ1dHRvbiB4LWI9XFxcIm1vdmVMZWZ0XFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgIDxidXR0b24geC1iPVxcXCJzZWFyY2hJZFxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgIDxidXR0b24geC1iPVxcXCJyZW1vdmVTZWFyY2hcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgdGl0bGU9XFxcIlJlbW92ZSBjdXJyZW50IHNlYXJjaFxcXCI+PC9idXR0b24+XFxyXFxuICAgICAgPGJ1dHRvbiB4LWI9XFxcIm1vdmVSaWdodFxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG5cXHJcXG4gIDxkaXYgeC1iPVxcXCJyZXN1bHRzXFxcIiA+XFxyXFxuICAgIDxzcGFuIHgtYj1cXFwiZm91bmRSZXN1bHRzXFxcIj48L3NwYW4+XFxyXFxuICAgIDxkaXYgeC1iPVxcXCJjb250cm9sc1xcXCIgY2xhc3M9XFxcImhpZGRlblxcXCI+XFxyXFxuICAgICAgPGJ1dHRvbiB4LWI9XFxcImJsaW5rXFxcIiB0aXRsZT1cXFwiR2V0IGZpbmRpbmdzIHRvIGJsaW5rXFxcIj5CbGluazwvYnV0dG9uPlxcclxcbiAgICAgIDxidXR0b24geC1iPVxcXCJtb3ZlVXBcXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgIDxidXR0b24geC1iPVxcXCJtb3ZlRG93blxcXCI+PC9idXR0b24+XFxyXFxuICAgICAgPHNwYW4geC1iPVxcXCJoaWdobGlnaHRQb3NpdGlvblxcXCI+PC9zcGFuPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiOyIsImltcG9ydCB7IEVYVEVOU0lPTl9JRCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHZhcnMpID0+ICh7XHJcblxyXG4gICcnOiB7XHJcbiAgICBmb250U2l6ZTogMTUsXHJcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcclxuICAgIHdpZHRoOiB2YXJzLkFQUF9XSURUSCxcclxuICAgIG1hcmdpblRvcDogMTgsXHJcbiAgICBtYXJnaW5MZWZ0OiAxMCxcclxuICAgIG1hcmdpblJpZ2h0OiAxMCxcclxuICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgbGluZUhlaWdodDogJ25vcm1hbCcsXHJcbiAgfSxcclxuXHJcbiAgJ2J1dHRvbic6IHtcclxuICAgIGJhY2tncm91bmQ6ICdub25lJyxcclxuICAgIGZvbnRTaXplOiAxNSxcclxuICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZScsXHJcbiAgICBib3JkZXI6ICcycHggc29saWQgYmxhY2snLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgIGZvbnRXZWlnaHQ6ICc0MDAnLFxyXG4gICAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxyXG4gICAgcGFkZGluZzogJzAgOHB4JyxcclxuICAgIGxpbmVIZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgd29yZFdyYXA6ICdub3JtYWwnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgaGVpZ2h0OiAyNCxcclxuICB9LFxyXG5cclxuICAnaW5wdXQnOiB7XHJcbiAgICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXHJcbiAgICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcclxuICAgIHBhZGRpbmc6ICcxcHggMXB4JyxcclxuICAgIGZvbnRTaXplOiAxNSxcclxuICAgIGhlaWdodDogMjQsXHJcbiAgfSxcclxuXHJcbiAgJ2J1dHRvbjpob3Zlcic6IHtcclxuICAgIGNvbG9yOiAnRGFya0dyZWVuJyxcclxuICAgIGJvcmRlckNvbG9yOiAnTGltZUdyZWVuJ1xyXG4gIH0sXHJcblxyXG4gICdidXR0b246Zm9jdXMnOiB7XHJcbiAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgfSxcclxuXHJcbiAgJ2J1dHRvbjphY3RpdmUnOiB7XHJcbiAgICBvdXRsaW5lOiAnMXB4IHNvbGlkIExpbWVHcmVlbicsXHJcbiAgfSxcclxuXHJcbiAgJy51cHBlckJ1dHRvbnMnOiB7XHJcbiAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgIG1hcmdpblRvcDogNSxcclxuICB9LFxyXG5cclxuICBzZWFyY2hTdHJpbmdzOiB7XHJcbiAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgIG1hcmdpbjogMCxcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgIHdpZHRoOiB2YXJzLk1BWF9JTlBVVF9XSURUSCxcclxuICB9LFxyXG5cclxuICAnLnNlYXJjaFN0cmluZzpmaXJzdC1jaGlsZCc6IHtcclxuICAgIG1hcmdpbkxlZnQ6IDAsXHJcbiAgfSxcclxuXHJcbiAgc2VhcmNoQnV0dG9uOiB7XHJcbiAgICB3aWR0aDogNTAsXHJcbiAgfSxcclxuXHJcbiAgY2FzZUJ1dHRvbjoge1xyXG4gICAgd2lkdGg6IDIyLFxyXG4gICAgbWFyZ2luTGVmdDogMixcclxuICAgIHBhZGRpbmdMZWZ0OiAwLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiAxLFxyXG4gIH0sXHJcblxyXG4gICcuc2VhcmNoLWNvbnN0cm9scyc6IHtcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgfSxcclxuXHJcbiAgc2VhcmNoSWQ6IHtcclxuICAgIHdpZHRoOiAyMixcclxuICAgIHBhZGRpbmdMZWZ0OiAxLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiAxLFxyXG4gIH0sXHJcblxyXG4gIHJlbW92ZVNlYXJjaDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gICAgd2lkdGg6IDE0LFxyXG4gICAgaGVpZ2h0OiAxNCxcclxuICAgIHRvcDogLTE2LFxyXG4gICAgcmlnaHQ6IC01LFxyXG4gIH0sXHJcblxyXG4gICdyZW1vdmVTZWFyY2g6OmJlZm9yZSwgcmVtb3ZlU2VhcmNoOjphZnRlcic6IHtcclxuICAgIGNvbnRlbnQ6IFwiJydcIixcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJhY2tncm91bmQ6ICdibGFjaycsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAyLFxyXG4gICAgdG9wOiA0LFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgfSxcclxuXHJcbiAgJ3JlbW92ZVNlYXJjaDpob3Zlcic6IHtcclxuICAgIGJvcmRlckNvbG9yOiAnT3JhbmdlUmVkJyxcclxuICB9LFxyXG5cclxuICAncmVtb3ZlU2VhcmNoOmhvdmVyOjpiZWZvcmUsIHJlbW92ZVNlYXJjaDpob3Zlcjo6YWZ0ZXInOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAnRGFya1JlZCdcclxuICB9LFxyXG5cclxuICAncmVtb3ZlU2VhcmNoOjpiZWZvcmUnOiB7XHJcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoNDVkZWcpJyxcclxuICB9LFxyXG5cclxuICAncmVtb3ZlU2VhcmNoOjphZnRlcic6IHtcclxuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgtNDVkZWcpJyxcclxuICB9LFxyXG5cclxuICAnc2VhcmNoSWQ6Zm9jdXMnOiB7XHJcbiAgICBjb2xvcjogJ0RhcmtHcmVlbicsXHJcbiAgICBib3JkZXJDb2xvcjogJ0xpbWVHcmVlbicsXHJcbiAgICBvdXRsaW5lOiAnMXB4IHNvbGlkIExpbWVHcmVlbicsXHJcbiAgICBhbmltYXRpb246IGAnJHtFWFRFTlNJT05fSUR9X291dGxpbmVfYmxpbmtlcicgMS4zcyBsaW5lYXIgaW5maW5pdGVgXHJcbiAgfSxcclxuXHJcbiAgJy5oaWRkZW4nOiB7XHJcbiAgICBkaXNwbGF5OiAnbm9uZSdcclxuICB9LFxyXG5cclxuICByZXN1bHRzOiB7XHJcbiAgICBwYWRkaW5nVG9wOiAzLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogOSxcclxuICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgfSxcclxuXHJcbiAgZm91bmRSZXN1bHRzOiB7XHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgIHBhZGRpbmdUb3A6IDksXHJcbiAgICBwYWRkaW5nUmlnaHQ6IDEyLFxyXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXHJcbiAgfSxcclxuXHJcbiAgaGlnaGxpZ2h0UG9zaXRpb246IHtcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgcGFkZGluZ1RvcDogOSxcclxuICAgIHBhZGRpbmdSaWdodDogMyxcclxuICAgIHBhZGRpbmdMZWZ0OiA1LFxyXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXHJcbiAgfSxcclxuXHJcbiAgJ2ZvdW5kUmVzdWx0cywgY29udHJvbHMnOiB7XHJcbiAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICB9LFxyXG5cclxuICAnYmxpbmsnOiB7XHJcbiAgICBoZWlnaHQ6IDIzLFxyXG4gICAgdmVydGljYWxBbGlnbjogJ2JvdHRvbScsXHJcbiAgICBtYXJnaW5SaWdodDogNSxcclxuICB9LFxyXG5cclxuICAnbW92ZVVwLCBtb3ZlRG93bic6IHtcclxuICAgIHdpZHRoOiAzMixcclxuICAgIGhlaWdodDogMjMsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICB9LFxyXG5cclxuICAnbW92ZVVwOjpiZWZvcmUsIG1vdmVVcDo6YWZ0ZXIsIG1vdmVEb3duOjpiZWZvcmUsIG1vdmVEb3duOjphZnRlcic6IHtcclxuICAgIGNvbnRlbnQ6IFwiJydcIixcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJhY2tncm91bmQ6ICdibGFjaycsXHJcbiAgICB3aWR0aDogMTMsXHJcbiAgICBoZWlnaHQ6IDMsXHJcbiAgICB0b3A6IDhcclxuICB9LFxyXG5cclxuICAnbW92ZVVwOmhvdmVyOjpiZWZvcmUsIG1vdmVVcDpob3Zlcjo6YWZ0ZXIsIG1vdmVEb3duOmhvdmVyOjpiZWZvcmUsIG1vdmVEb3duOmhvdmVyOjphZnRlcic6IHtcclxuICAgIGJhY2tncm91bmQ6ICdEYXJrR3JlZW4nXHJcbiAgfSxcclxuXHJcbiAgJ21vdmVVcDo6YmVmb3JlLCBtb3ZlRG93bjo6YmVmb3JlJzoge1xyXG4gICAgbGVmdDogNFxyXG4gIH0sXHJcblxyXG4gICdtb3ZlVXA6OmFmdGVyLCBtb3ZlRG93bjo6YWZ0ZXInOiB7XHJcbiAgICByaWdodDogNFxyXG4gIH0sXHJcblxyXG4gICdtb3ZlRG93bjo6YmVmb3JlJyA6IHtcclxuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSg0NWRlZyknXHJcbiAgfSxcclxuXHJcbiAgJ21vdmVEb3duOjphZnRlcicgOiB7XHJcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoLTQ1ZGVnKSdcclxuICB9LFxyXG5cclxuICAnbW92ZVVwOjpiZWZvcmUnIDoge1xyXG4gICAgdHJhbnNmb3JtOiAncm90YXRlKC00NWRlZyknXHJcbiAgfSxcclxuXHJcbiAgJ21vdmVVcDo6YWZ0ZXInIDoge1xyXG4gICAgdHJhbnNmb3JtOiAncm90YXRlKDQ1ZGVnKSdcclxuICB9LFxyXG5cclxuICAnbW92ZUxlZnQ6aG92ZXInOiB7XHJcbiAgICBib3JkZXJUb3BDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gIH0sXHJcblxyXG4gICdtb3ZlUmlnaHQ6aG92ZXInOiB7XHJcbiAgICBib3JkZXJUb3BDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gIH0sXHJcblxyXG4gIG1vdmVMZWZ0OiB7XHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXHJcbiAgICBtYXJnaW5Ub3A6IDUsXHJcbiAgICBoZWlnaHQ6IDE0LFxyXG4gICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICBib3JkZXJUb3A6ICc3cHggc29saWQgdHJhbnNwYXJlbnQnLFxyXG4gICAgYm9yZGVyUmlnaHQ6ICc3cHggc29saWQgYmxhY2snLFxyXG4gICAgYm9yZGVyQm90dG9tOiAnN3B4IHNvbGlkIHRyYW5zcGFyZW50JyxcclxuICB9LFxyXG5cclxuICBtb3ZlUmlnaHQ6IHtcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcclxuICAgIG1hcmdpblRvcDogNSxcclxuICAgIGhlaWdodDogMTQsXHJcbiAgICBib3JkZXI6ICdub25lJyxcclxuICAgIGJvcmRlclRvcDogJzdweCBzb2xpZCB0cmFuc3BhcmVudCcsXHJcbiAgICBib3JkZXJMZWZ0OiAnN3B4IHNvbGlkIGJsYWNrJyxcclxuICAgIGJvcmRlckJvdHRvbTogJzdweCBzb2xpZCB0cmFuc3BhcmVudCcsXHJcbiAgfSxcclxuXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAodmFycykgPT4gKHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICBoZWlnaHQ6IHZhcnMucmVjdC5oZWlnaHQgKyAncHgnLFxyXG4gIHdpZHRoOiB2YXJzLnJlY3Qud2lkdGggKyAncHgnLFxyXG4gIHRvcDogdmFycy5zY3JvbGxUb3AgKyB2YXJzLnJlY3QueSArICdweCcsXHJcbiAgbGVmdDogdmFycy5zY3JvbGxMZWZ0ICsgdmFycy5yZWN0LnggKyAncHgnLFxyXG4gICd6LWluZGV4JzogMjE0NzQ4MzY0NSxcclxuICAncG9pbnRlci1ldmVudHMnOiAnbm9uZScsXHJcbiAgYmFja2dyb3VuZDogJ3JnYmEoJyArICB2YXJzLmNvbG9yICsgJywgMC4yNSknLFxyXG4gICdvdXRsaW5lLXdpZHRoJzogJzNweCcsXHJcbn0pO1xyXG4iLCJpbXBvcnQgQ291bGkgZnJvbSAnY291bGknO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IFN0b3JlIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zdG9yZSc7XHJcblxyXG5jb25zdCBJTklUSUFMX1BPUFVQX1BPU0lUSU9OID0geyB0b3A6IDIwLCBsZWZ0OiAnYXV0bycsIHJpZ2h0OiAyMCB9O1xyXG5cclxuQ291bGkuZGVmaW5lKCdwb3B1cCcsIFxyXG4gIGA8ZGl2PlxyXG4gICAgPGRpdiB4LWI9XCJ0b3BiYXJcIj5cclxuICAgICAgPHVsIHgtbGI9XCJzZWFyY2hlc1wiPlxyXG4gICAgICAgIDxsaSB4LWI9XCJzdHJpbmdcIj5cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdiB4LWI9XCJjbG9zZUJ1dHRvblwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Y29udHJvbHMgeC1zdGF0ZS1uYW1lPVwiY29udHJvbHNcIj48L2NvbnRyb2xzPlxyXG4gIDwvZGl2PmAsIHtcclxuXHJcbiAgb3Blbjoge1xyXG4gICAgaG9va3M6IHtcclxuICAgICAgdXBkYXRlOiAoZWwsIHZhbHVlLCBjaSkgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgY2kuZG93bignY29udHJvbHMnKS5tYXJrdXAoJ3NlYXJjaElkJykuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBzZWFyY2hlczoge1xyXG4gICAgbGlzdEl0ZW06IHtcclxuICAgICAgc3RhdGU6IHtcclxuICAgICAgICBjb2xvcjoge30sXHJcbiAgICAgICAgaWR4OiB7fSxcclxuICAgICAgICBzdHJpbmc6IHtcclxuICAgICAgICAgIGF0dHJzOiAoJCkgPT4gKHsgdGl0bGU6ICQuc3RyaW5nIH0pLFxyXG4gICAgICAgICAgc3R5bGU6ICgkKSA9PiAoeyBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKCcgKyAgJC5jb2xvciArICcsIDAuNSknLCB9KSxcclxuICAgICAgICAgIGh0bWw6ICgpID0+ICcnLFxyXG4gICAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICAgIGNsaWNrOiAoZSwgZWwsIGNpKSA9PiBTdG9yZS5tb3ZlVGhyb3VnaFNlYXJjaCh7IHNlYXJjaElkOiBjaS5nZXQoJ2lkeCcpIH0sIHRydWUpLFxyXG4gICAgICAgICAgICBjb250ZXh0bWVudTogKGUsIGVsLCBjaSkgPT4ge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBTdG9yZS5yZW1vdmVTZWFyY2goZS5zaGlmdEtleSwgY2kuZ2V0KCdpZHgnKSkudGhlbigoKSA9PlxyXG4gICAgICAgICAgICAgICAgY2kudXAoKS51cCgpLmRvd24oJ2NvbnRyb2xzJykubWFya3VwKCdzZWFyY2hJZCcpLmZvY3VzKClcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHRvcGJhcjoge1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIG1vdXNlZG93bjogKGUsIGVsLCBjaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBvcHVwRWwgPSBjaS5tYXJrdXAoKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzaGlmdFggPSBlLmNsaWVudFggLSBwb3B1cEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICAgICAgY29uc3Qgc2hpZnRZID0gZS5jbGllbnRZIC0gcG9wdXBFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGUpIHtcclxuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHBvcHVwRWwuc3R5bGUubGVmdCA9IGUuY2xpZW50WCAtIHNoaWZ0WCArICdweCc7XHJcbiAgICAgICAgICAgIHBvcHVwRWwuc3R5bGUudG9wID0gZS5jbGllbnRZIC0gc2hpZnRZICsgJ3B4JztcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb25Nb3VzZVVwIChlKSB7XHJcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGRyYWdzdGFydDogKCkgPT4gZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBjbG9zZUJ1dHRvbjoge1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIGNsaWNrOiAoKSA9PiBTdG9yZS5jbG9zZVBvcHVwKClcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAnJzoge1xyXG4gICAgc3R5bGU6ICgkKSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0eWxlcyA9IHsgZGlzcGxheTogJC5vcGVuID8gJ2Jsb2NrJyA6ICdub25lJyB9O1xyXG5cclxuICAgICAgaWYgKCQub3Blbikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oc3R5bGVzLCBJTklUSUFMX1BPUFVQX1BPU0lUSU9OKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHN0eWxlcztcclxuICAgIH0sXHJcblxyXG4gICAgaG9va3M6IHtcclxuICAgICAgbW91bnQ6IChlbCwgZGF0YSwgY2kpID0+IHtcclxuICAgICAgICBjaS5zZXQoeyBvcGVuOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICBTdG9yZS5hZGRMaXN0ZW5lcigoc3RvcmUpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHBvcHVwRGF0YSA9IHN0b3JlLmdldFBvcHVwRGF0YSgpO1xyXG5cclxuICAgICAgICAgIGlmIChjaS5nZXQoJ29wZW4nKSAmJiBwb3B1cERhdGEub3Blbikge1xyXG4gICAgICAgICAgICBkZWxldGUgcG9wdXBEYXRhLm9wZW47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY2kuc2V0KHBvcHVwRGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0sIHN0eWxlcyh7IElOSVRJQUxfUE9QVVBfUE9TSVRJT04gfSkpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAodmFycykgPT4gKHtcclxuICAnJzoge1xyXG4gICAgd2lkdGg6IDQxNSxcclxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgIGJvcmRlcjogJzNweCBzb2xpZCBibGFjaycsXHJcbiAgICB6SW5kZXg6ICcyMTQ3NDgzNjQ3JyxcclxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgLi4udmFycy5JTklUSUFMX1BPUFVQX1BPU0lUSU9OXHJcbiAgfSxcclxuXHJcbiAgdG9wYmFyOiB7XHJcbiAgICBoZWlnaHQ6IDE1LFxyXG4gICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyxcclxuICAgIGN1cnNvcjogJ2dyYWInLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBiYWNrZ3JvdW5kOiAnI2Q2ZjVkNicsXHJcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICB9LFxyXG5cclxuICBzZWFyY2hlczoge1xyXG4gICAgbWFyZ2luOiAwLFxyXG4gICAgcGFkZGluZzogMCxcclxuICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gIH0sXHJcblxyXG4gICdzZWFyY2hlcyBsaSc6IHtcclxuICAgIGZsb2F0OiAnbGVmdCcsXHJcbiAgICB3aWR0aDogMjcsXHJcbiAgICBoZWlnaHQ6IDE1LFxyXG4gICAgYm9yZGVyUmlnaHQ6ICcxcHggc29saWQgYmxhY2snLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgfSxcclxuXHJcbiAgY2xvc2VCdXR0b246IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgcmlnaHQ6IDAsXHJcbiAgICBib3R0b206IDAsXHJcbiAgICB3aWR0aDogMzIsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIGJvcmRlckxlZnQ6ICcxcHggc29saWQgYmxhY2snLFxyXG4gICAgYmFja2dyb3VuZDogJ3JnYmEoMjU1LCA3OSwgNDMsIDAuODUpJyxcclxuICB9LFxyXG5cclxuICAnY2xvc2VCdXR0b246aG92ZXInOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAncmdiKDI1NSwgNzksIDQzKSdcclxuICB9LFxyXG5cclxuICAnY2xvc2VCdXR0b246OmJlZm9yZSwgY2xvc2VCdXR0b246OmFmdGVyJzoge1xyXG4gICAgY29udGVudDogXCInJ1wiLFxyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcclxuICAgIHdpZHRoOiAxMSxcclxuICAgIGhlaWdodDogMixcclxuICAgIHRvcDogNixcclxuICAgIGxlZnQ6IDExLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgfSxcclxuXHJcbiAgJ2Nsb3NlQnV0dG9uOjpiZWZvcmUnOiB7XHJcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoNDVkZWcpJyxcclxuICB9LFxyXG5cclxuICAnY2xvc2VCdXR0b246OmFmdGVyJzoge1xyXG4gICAgdHJhbnNmb3JtOiAncm90YXRlKC00NWRlZyknLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAodmFycykgPT4gKHtcclxuICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICBoZWlnaHQ6ICc1cHgnLFxyXG4gIHdpZHRoOiAnMTVweCcsXHJcbiAgdG9wOiB3aW5kb3cuaW5uZXJIZWlnaHQgLyBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCAqIHZhcnMudG9wUG9zaXRpb24gKyAncHgnLFxyXG4gIHJpZ2h0OiAnMHB4JyxcclxuICAnei1pbmRleCc6IDIxNDc0ODM2NDUsXHJcbiAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgYmFja2dyb3VuZDogJ3JnYmEoJyArICB2YXJzLmNvbG9yICsgJywgMC41KScsXHJcbn0pO1xyXG4iLCJpbXBvcnQgQ291bGkgZnJvbSAnY291bGknO1xyXG5cclxuaW1wb3J0IG1hcmt1cCBmcm9tICcuL21hcmt1cC5odG1sJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5jb25zdCBBQ1RJVkVfU0VBUkNIX0lOUFVUX0xFTkdUSCA9IDE1MDtcclxuY29uc3QgTUFYX0lOUFVUX1dJRFRIID0gMjU1O1xyXG5jb25zdCBNSU5fSU5QVVRfV0lEVEggPSAxMTA7XHJcbmNvbnN0IFNQQUNFX0JFVFdFRU5fSU5QVVRTID0gMzQ7XHJcbmNvbnN0IExFVFRFUl9XSURUSCA9IDExO1xyXG5jb25zdCBVTkZPQ1VTRURfSU5QVVRfUEFERElORyA9IDE0O1xyXG5jb25zdCBFTlRFUl9LRVkgPSAxMztcclxuY29uc3QgQkFDS1NQQUNFX0tFWSA9IDg7XHJcbmNvbnN0IEFERF9TSUdOX1BBRERJTkcgPSAxMjtcclxuXHJcbkNvdWxpLmRlZmluZSgnc2VhcmNoLXN0cmluZycsIG1hcmt1cCwge1xyXG5cclxuICBmb2N1czoge30sXHJcblxyXG4gIHN0cmluZzoge1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIGtleXVwOiBmdW5jdGlvbiBrZXl1cCAoZSwgZWwsIGNpLCBpKSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBjb25zdCBwYXJlbnRTY29wZSA9IGNpLnVwKDIpO1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaFN0cmluZ3MgPSBwYXJlbnRTY29wZS5nZXQoJ3NlYXJjaFN0cmluZ3MnKTtcclxuXHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gRU5URVJfS0VZICYmIGNpLmdldCgnc3RyaW5nJykpIHtcclxuICAgICAgICAgIGNpLnNldCh7IGZvY3VzOiBmYWxzZSB9KTtcclxuICAgICAgICAgIGlmIChpICsgMSA9PT0gc2VhcmNoU3RyaW5ncy5sZW5ndGgoKSkge1xyXG4gICAgICAgICAgICBzZWFyY2hTdHJpbmdzLnB1c2goW3sgc3RyaW5nOiAnJywgZm9jdXM6IHRydWUsIGRpc3RhbmNlOiAxIH1dKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlYXJjaFN0cmluZ3MuZ2V0KGkgKyAxKS5zZXQoeyBmb2N1czogdHJ1ZSB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHBhcmVudFNjb3BlLnNldCh7IGxhc3RGb2N1c2VkOiBpICsgMSB9KVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gQkFDS1NQQUNFX0tFWSAmJiAhY2kuZ2V0KCdzdHJpbmcnKS5sZW5ndGggJiYgc2VhcmNoU3RyaW5ncy5sZW5ndGgoKSA+IDEpIHtcclxuICAgICAgICAgIGNvbnN0IHByZXZpb3VzU3RyaW5nID0gc2VhcmNoU3RyaW5ncy5nZXQoaSAtIDEpO1xyXG4gICAgICAgICAgcHJldmlvdXNTdHJpbmcuc2V0KHsgZm9jdXM6IHRydWUgfSk7XHJcbiAgICAgICAgICBwYXJlbnRTY29wZS5zZXQoeyBsYXN0Rm9jdXNlZDogaSAtIDEgfSlcclxuICAgICAgICAgIHNlYXJjaFN0cmluZ3MucmVtb3ZlKGkpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2kuc2V0KHsgc3RyaW5nOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBjbGljazogZnVuY3Rpb24gY2xpY2sgKGUsIGVsLCBjaSwgaSkge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudFNjb3BlID0gY2kudXAoMik7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoU3RyaW5ncyA9IHBhcmVudFNjb3BlLmdldCgnc2VhcmNoU3RyaW5ncycpO1xyXG4gICAgICAgIGNvbnN0IGxhc3RGb2N1c2VkSW5kZXggPSBwYXJlbnRTY29wZS5nZXQoJ2xhc3RGb2N1c2VkJyk7XHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNGb2N1c2VkID0gc2VhcmNoU3RyaW5ncy5nZXQoIGxhc3RGb2N1c2VkSW5kZXggKTtcclxuXHJcbiAgICAgICAgaWYgKCFwcmV2aW91c0ZvY3VzZWQuZ2V0KCdzdHJpbmcnKS5sZW5ndGggJiYgbGFzdEZvY3VzZWRJbmRleCAmJiBpICE9PSBsYXN0Rm9jdXNlZEluZGV4ICYmIChsYXN0Rm9jdXNlZEluZGV4ICsgMSkgPT09IHNlYXJjaFN0cmluZ3MubGVuZ3RoKCkpIHtcclxuICAgICAgICAgIHNlYXJjaFN0cmluZ3MucmVtb3ZlKGxhc3RGb2N1c2VkSW5kZXgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwcmV2aW91c0ZvY3VzZWQuc2V0KHsgZm9jdXM6IGZhbHNlIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFyZW50U2NvcGUuc2V0KHsgbGFzdEZvY3VzZWQ6IGkgfSk7XHJcbiAgICAgICAgY2kuc2V0KHsgZm9jdXM6IHRydWUgfSk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzdHlsZTogKCQsIGNpKSA9PiB7XHJcbiAgICAgIGxldCB3aWR0aDtcclxuXHJcbiAgICAgIGlmICghJC5mb2N1cykge1xyXG4gICAgICAgIHdpZHRoID0gY2kuZ2V0KCdzdHJpbmcnKS5sZW5ndGggKiBMRVRURVJfV0lEVEggKyBVTkZPQ1VTRURfSU5QVVRfUEFERElOR1xyXG5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB1bmZvY3VzZWRJbnB1dHMgPSBjaS51cCgpLmZpbHRlcigoaW5wdXQpID0+ICFpbnB1dC5mb2N1cyk7XHJcbiAgICAgICAgd2lkdGggPSB1bmZvY3VzZWRJbnB1dHMucmVkdWNlKChmb2N1c2VkSW5wdXRMZW5ndGgsIGlucHV0KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gZm9jdXNlZElucHV0TGVuZ3RoIC0gaW5wdXQuc3RyaW5nLmxlbmd0aCAqIExFVFRFUl9XSURUSCAtIFVORk9DVVNFRF9JTlBVVF9QQURESU5HIC0gU1BBQ0VfQkVUV0VFTl9JTlBVVFM7XHJcbiAgICAgICAgfSwgTUFYX0lOUFVUX1dJRFRIKTtcclxuXHJcbiAgICAgICAgaWYgKHdpZHRoIDwgTUlOX0lOUFVUX1dJRFRIKSB7XHJcbiAgICAgICAgICB3aWR0aCA9IE1BWF9JTlBVVF9XSURUSDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpZHRoID0gd2lkdGggLSBBRERfU0lHTl9QQURESU5HO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHsgd2lkdGggfTtcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgZGlzdGFuY2U6IFtcclxuICAgIChpdGVtKSA9PiAoe1xyXG4gICAgICBoaWRkZW46IGl0ZW0uZGlzdGFuY2UgPT09IG51bGwsXHJcbiAgICB9KSxcclxuICAgIFt7XHJcbiAgICAgIGtleXVwOiAoZSwgZWwsIGNpKSA9PiBjaS5zZXQoeyBkaXN0YW5jZTogeyBmb3JjZTogdG9OdW1iZXJPclplcm8oZS50YXJnZXQudmFsdWUpIH19KVxyXG4gICAgfV1cclxuICBdLFxyXG5cclxuICByZW1vdmU6IHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBjbGljazogKGUsIGVsLCBjaSwgaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudFNjb3BlID0gY2kudXAoMik7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoU3RyaW5ncyA9IGNpLnVwKCk7XHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNTdHJpbmcgPSBzZWFyY2hTdHJpbmdzLmdldChpIC0gMSk7XHJcbiAgICAgICAgcHJldmlvdXNTdHJpbmcuc2V0KHsgZm9jdXM6IHRydWUgfSk7XHJcbiAgICAgICAgcGFyZW50U2NvcGUuc2V0KHsgbGFzdEZvY3VzZWQ6IGkgLSAxIH0pXHJcbiAgICAgICAgc2VhcmNoU3RyaW5ncy5yZW1vdmUoaSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjbGFzczogKCQpID0+ICh7IGhpZGRlbjogJC5maXJzdCB8fCAhJC5mb2N1cyB9KSxcclxuICB9LFxyXG5cclxuICBhZGROZXc6IHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBjbGljazogKGUsIGVsLCBjaSwgaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudFNjb3BlID0gY2kudXAoMik7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoU3RyaW5ncyA9IHBhcmVudFNjb3BlLmdldCgnc2VhcmNoU3RyaW5ncycpO1xyXG4gICAgICAgIGNpLnNldCh7IGZvY3VzOiBmYWxzZSB9KTtcclxuICAgICAgICBzZWFyY2hTdHJpbmdzLmFkZChpICsgMSwgW3sgc3RyaW5nOiAnJywgZm9jdXM6IHRydWUsIGRpc3RhbmNlOiAxIH1dKTtcclxuICAgICAgICBwYXJlbnRTY29wZS5zZXQoeyBsYXN0Rm9jdXNlZDogaSArIDEgfSlcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjbGFzczogKCQpID0+ICh7IGhpZGRlbjogISQuZm9jdXMgfHwgISQuc3RyaW5nLmxlbmd0aCB9KSxcclxuICB9LFxyXG5cclxuICBmb2N1czoge1xyXG4gICAgaG9va3M6IHtcclxuICAgICAgdXBkYXRlOiAoZWwsIHZhbHVlLCBjaSkgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgY2kubWFya3VwKCdzdHJpbmcnKS5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gICcnOiB7XHJcbiAgICBob29rczoge1xyXG4gICAgICBtb3VudDogKGUsIHYsIGNpKSA9PiBjaS5tYXJrdXAoJ3N0cmluZycpLmZvY3VzKCksXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSwgc3R5bGVzKHsgU1BBQ0VfQkVUV0VFTl9JTlBVVFMsIEFDVElWRV9TRUFSQ0hfSU5QVVRfTEVOR1RIIH0pKTtcclxuXHJcbmZ1bmN0aW9uIHRvTnVtYmVyT3JaZXJvIChzdHIpIHtcclxuICByZXR1cm4gK3N0ciB8fCAwO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8bGk+XFxyXFxuICA8aW5wdXQgeC1iPVxcXCJzdHJpbmdcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJzdHJpbmdcXFwiPlxcclxcbiAgPGlucHV0IHgtYj1cXFwiZGlzdGFuY2VcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJkaXN0YW5jZVxcXCIgdGl0bGU9XFxcIkRpc3RhbmNlIGJldHdlZW4gc3Vic3RyaW5nc1xcXCI+XFxyXFxuICA8YnV0dG9uIHgtYj1cXFwicmVtb3ZlXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIHRpdGxlPVxcXCJSZW1vdmUgc3Vic3RyaW5nXFxcIj48L2J1dHRvbj5cXHJcXG4gIDxidXR0b24geC1iPVxcXCJhZGROZXdcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgdGl0bGU9XFxcIkFkZCBuZXcgc3Vic3RyaW5nXFxcIj48L2J1dHRvbj5cXHJcXG48L2xpPlxcclxcblwiOyIsImV4cG9ydCBkZWZhdWx0ICh2YXJzKSA9PiAoe1xyXG5cclxuICAnJzoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgIG1hcmdpbkxlZnQ6IHZhcnMuU1BBQ0VfQkVUV0VFTl9JTlBVVFMsXHJcbiAgICBtYXJnaW5Ub3A6IDUsXHJcbiAgICBtYXJnaW5Cb3R0b206IDE0LFxyXG4gIH0sXHJcblxyXG4gIHN0cmluZzoge1xyXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICBmb250U2l6ZTogMTUsXHJcbiAgICB3aWR0aDogdmFycy5BQ1RJVkVfU0VBUkNIX0lOUFVUX0xFTkdUSCxcclxuICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZScsXHJcbiAgICBib3JkZXJXaWR0aDogMCxcclxuICAgIGJvcmRlckJvdHRvbTogJzJweCBzb2xpZCBibGFjaycsXHJcbiAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgY29sb3I6ICdibGFjaycsXHJcbiAgICBwYWRkaW5nOiAxLFxyXG4gIH0sXHJcblxyXG4gICdzdHJpbmc6Zm9jdXMnOiB7XHJcbiAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICBib3JkZXJDb2xvcjogJ0xpbWVHcmVlbidcclxuICB9LFxyXG5cclxuICBkaXN0YW5jZToge1xyXG4gICAgd2lkdGg6IHZhcnMuU1BBQ0VfQkVUV0VFTl9JTlBVVFMgLSAxMCxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgbGVmdDogLTMwLFxyXG4gICAgdG9wOiAtMTcsXHJcbiAgICAnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ25vbmUnLFxyXG4gICAgYm9yZGVyV2lkdGg6IDAsXHJcbiAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snLFxyXG4gICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgZm9udFNpemU6IDEzLFxyXG4gICAgaGVpZ2h0OiAxNixcclxuICB9LFxyXG5cclxuICAnZGlzdGFuY2U6Zm9jdXMnOiB7XHJcbiAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICBib3JkZXJDb2xvcjogJ0xpbWVHcmVlbidcclxuICB9LFxyXG5cclxuICAnLmhpZGRlbic6IHtcclxuICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gIH0sXHJcblxyXG4gICdhZGROZXcsIHJlbW92ZSc6IHtcclxuICAgIHdpZHRoOiAxMCxcclxuICAgIGhlaWdodDogMTAsXHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBib3JkZXI6ICdub25lJyxcclxuICB9LFxyXG5cclxuICBhZGROZXc6IHtcclxuICAgIHJpZ2h0OiAtMTQsXHJcbiAgICBib3R0b206IDQsXHJcbiAgfSxcclxuXHJcbiAgcmVtb3ZlOiB7XHJcbiAgICBsZWZ0OiAtMTQsXHJcbiAgICBib3R0b206IDQsXHJcbiAgfSxcclxuXHJcbiAgJ2FkZE5ldzo6YmVmb3JlLCBhZGROZXc6OmFmdGVyLCByZW1vdmU6OmJlZm9yZSwgcmVtb3ZlOjphZnRlcic6IHtcclxuICAgIGNvbnRlbnQ6IFwiJydcIixcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJhY2tncm91bmQ6ICdibGFjaycsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuXHJcbiAgJ2FkZE5ldzo6YmVmb3JlLCBhZGROZXc6OmFmdGVyJzoge1xyXG4gICAgYmFja2dyb3VuZDogJ0RhcmtHcmVlbicsXHJcbiAgICBoZWlnaHQ6IDIsXHJcbiAgICB0b3A6IDUsXHJcbiAgfSxcclxuXHJcbiAgJ2FkZE5ldzpob3Zlcjo6YmVmb3JlLCBhZGROZXc6aG92ZXI6OmFmdGVyJzoge1xyXG4gICAgYmFja2dyb3VuZDogJ0xpbWVHcmVlbicsXHJcbiAgfSxcclxuXHJcbiAgJ3JlbW92ZTo6YmVmb3JlLCByZW1vdmU6OmFmdGVyJzoge1xyXG4gICAgYmFja2dyb3VuZDogJ0RhcmtSZWQnLFxyXG4gICAgaGVpZ2h0OiAyLFxyXG4gICAgdG9wOiA1LFxyXG4gIH0sXHJcblxyXG4gICdyZW1vdmU6aG92ZXI6OmJlZm9yZSwgcmVtb3ZlOmhvdmVyOjphZnRlcic6IHtcclxuICAgIGJhY2tncm91bmQ6ICdPcmFuZ2VSZWQnLFxyXG4gIH0sXHJcblxyXG4gICdhZGROZXc6OmJlZm9yZSc6IHtcclxuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSg5MGRlZyknLFxyXG4gIH0sXHJcblxyXG4gICdyZW1vdmU6OmJlZm9yZSc6IHtcclxuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSg0NWRlZyknLFxyXG4gIH0sXHJcblxyXG4gICdyZW1vdmU6OmFmdGVyJzoge1xyXG4gICAgdHJhbnNmb3JtOiAncm90YXRlKC00NWRlZyknLFxyXG4gIH1cclxuXHJcbn0pO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCAodHlwZSwgc3R5bGVzKSB7XHJcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xyXG5cclxuICBmb3IgKGxldCBhdHRyIGluIHN0eWxlcykge1xyXG4gICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoYXR0ciwgc3R5bGVzW2F0dHJdLCAnaW1wb3J0YW50Jyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZWw7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==