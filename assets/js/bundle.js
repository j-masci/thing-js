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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/shallow-equal/arrays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/shallow-equal/arrays/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function shallowEqualArrays(arrA, arrB) {
  if (arrA === arrB) {
    return true;
  }

  if (!arrA || !arrB) {
    return false;
  }

  var len = arrA.length;

  if (arrB.length !== len) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/shallow-equal/objects/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/shallow-equal/objects/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function shallowEqualObjects(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (!objA || !objB) {
    return false;
  }

  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);
  var len = aKeys.length;

  if (bKeys.length !== len) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    var key = aKeys[i];

    if (objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./src/js/app.jsx":
/*!************************!*\
  !*** ./src/js/app.jsx ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Main */ "./src/js/components/Main.jsx");
/* harmony import */ var _components_JBItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/JBItem */ "./src/js/components/JBItem.jsx");
// import React, { Component } from 'react';
// import React, { useState } from 'react';



(function () {
  console.log("App.jsx");
  var app = {};
  app.Main = React.createRef();

  app.init = function () {
    var root = document.getElementById('app-root');

    if (root) {
      ReactDOM.render(React.createElement(_components_Main__WEBPACK_IMPORTED_MODULE_0__["default"], null), root);
    }

    var jb = document.getElementById('json-builder');

    if (jb) {
      ReactDOM.render(React.createElement(_components_JBItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
        isRoot: 1
      }), jb);
    }
  };

  window.theThing = app;
  window.theThing.init();
})();

/***/ }),

/***/ "./src/js/components/Generic.jsx":
/*!***************************************!*\
  !*** ./src/js/components/Generic.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var shallowEqualObjects = __webpack_require__(/*! shallow-equal/objects */ "./node_modules/shallow-equal/objects/index.js");

var shallowEqualArrays = __webpack_require__(/*! shallow-equal/arrays */ "./node_modules/shallow-equal/arrays/index.js");

var shallowCompare = function shallowCompare(thing1, thing2) {
  if (Array.isArray(thing1) && Array.isArray(thing2)) {
    return shallowEqualArrays(thing1, thing2);
  } else if (_typeof(thing1) === 'object' && _typeof(thing2) === 'object' && thing1 !== null && thing2 !== null) {
    return shallowEqualObjects(thing1, thing2);
  } // not sure what a good fallback is but I think this is fine...
  // although, i don't think === is reliable on arrays and objects...


  return thing1 === thing2 || null;
};

var Debugger = function Debugger(name, component, more) {
  var toString = function toString(thing) {
    // JSON.stringify throws errors when encountering recursion
    // return vuvuzela.stringify( thing );
    // return dump( thing );
    return JSON.prune(thing, 2, 20);
  };

  return React.createElement("div", {
    className: "debugger"
  }, React.createElement("p", null, name, " State: ", toString(component.state)), React.createElement("p", null, name, " Props: ", toString(component.props)), React.createElement("p", null, name, " More: ", toString(more)));
}; // classList
// const wordsWithSpaces = function( words ){
//     // words = words || [];
//     words = words.constructor === Array ? words : [];
//     return words.filter( (word) => { return word || false } ).join( " " );
// };


var Button = function Button(text, onClick, props) {
  props = props || {};
  props.onClick = props.onClick || onClick;
  return React.createElement('button', props, text);
};

var provideTests = function provideTests(comp) {
  var index = 'testProvider_tests';

  comp.addTest = function (name, callback, more_props) {
    comp[index] = comp[index] || [];
    comp[index].push(Button(name, function (e) {
      console.log("Test: " + name);
      callback(e);
    }, more_props));
  };

  comp.renderTests = function () {
    return React.createElement("p", {
      className: "tests"
    }, "Tests: ", comp[index]);
  };
}; // JSON.prune : a function to stringify any object without overflow
// two additional optional parameters :
//   - the maximal depth (default : 6)
//   - the maximal length of arrays (default : 50)
// You can also pass an "options" object.
// examples :
//   var json = JSON.prune(window)
//   var arr = Array.apply(0,Array(1000)); var json = JSON.prune(arr, 4, 20)
//   var json = JSON.prune(window.location, {inheritedProperties:true})
// Web site : http://dystroy.org/JSON.prune/
// JSON.prune on github : https://github.com/Canop/JSON.prune
// This was discussed here : http://stackoverflow.com/q/13861254/263525
// The code is based on Douglas Crockford's code : https://github.com/douglascrockford/JSON-js/blob/master/json2.js
// No effort was done to support old browsers. JSON.prune will fail on IE8.


(function () {
  'use strict';

  var DEFAULT_MAX_DEPTH = 6;
  var DEFAULT_ARRAY_MAX_LENGTH = 50;
  var DEFAULT_PRUNED_VALUE = '"-pruned-"';
  var seen; // Same variable used for all stringifications

  var iterator; // either forEachEnumerableOwnProperty, forEachEnumerableProperty or forEachProperty
  // iterates on enumerable own properties (default behavior)

  var forEachEnumerableOwnProperty = function forEachEnumerableOwnProperty(obj, callback) {
    for (var k in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, k)) callback(k);
    }
  }; // iterates on enumerable properties


  var forEachEnumerableProperty = function forEachEnumerableProperty(obj, callback) {
    for (var k in obj) {
      callback(k);
    }
  }; // iterates on properties, even non enumerable and inherited ones
  // This is dangerous


  var forEachProperty = function forEachProperty(obj, callback, excluded) {
    if (obj == null) return;
    excluded = excluded || {};
    Object.getOwnPropertyNames(obj).forEach(function (k) {
      if (!excluded[k]) {
        callback(k);
        excluded[k] = true;
      }
    });
    forEachProperty(Object.getPrototypeOf(obj), callback, excluded);
  };

  Object.defineProperty(Date.prototype, "toPrunedJSON", {
    value: Date.prototype.toJSON
  });
  var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      meta = {
    // table of character substitutions
    '\b': '\\b',
    '\t': '\\t',
    '\n': '\\n',
    '\f': '\\f',
    '\r': '\\r',
    '"': '\\"',
    '\\': '\\\\'
  };

  function quote(string) {
    escapable.lastIndex = 0;
    return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
      var c = meta[a];
      return typeof c === 'string' ? c : "\\u" + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + string + '"';
  }

  var prune = function prune(value, depthDecr, arrayMaxLength) {
    var prunedString = DEFAULT_PRUNED_VALUE;
    var replacer;

    if (_typeof(depthDecr) == "object") {
      var options = depthDecr;
      depthDecr = options.depthDecr;
      arrayMaxLength = options.arrayMaxLength;
      iterator = options.iterator || forEachEnumerableOwnProperty;
      if (options.allProperties) iterator = forEachProperty;else if (options.inheritedProperties) iterator = forEachEnumerableProperty;

      if ("prunedString" in options) {
        prunedString = options.prunedString;
      }

      if (options.replacer) {
        replacer = options.replacer;
      }
    } else {
      iterator = forEachEnumerableOwnProperty;
    }

    seen = [];
    depthDecr = depthDecr || DEFAULT_MAX_DEPTH;
    arrayMaxLength = arrayMaxLength || DEFAULT_ARRAY_MAX_LENGTH;

    function str(key, holder, depthDecr) {
      var i,
          k,
          v,
          length,
          partial,
          value = holder[key];

      if (value && _typeof(value) === 'object' && typeof value.toPrunedJSON === 'function') {
        value = value.toPrunedJSON(key);
      }

      if (value && typeof value.toJSON === 'function') {
        value = value.toJSON();
      }

      switch (_typeof(value)) {
        case 'string':
          return quote(value);

        case 'number':
          return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':
          return String(value);

        case 'object':
          if (!value) {
            return 'null';
          }

          if (depthDecr <= 0 || seen.indexOf(value) !== -1) {
            if (replacer) {
              var replacement = replacer(value, prunedString, true);
              return replacement === undefined ? undefined : '' + replacement;
            }

            return prunedString;
          }

          seen.push(value);
          partial = [];

          if (Object.prototype.toString.apply(value) === '[object Array]') {
            length = Math.min(value.length, arrayMaxLength);

            for (i = 0; i < length; i += 1) {
              partial[i] = str(i, value, depthDecr - 1) || 'null';
            }

            v = '[' + partial.join(',') + ']';
            if (replacer && value.length > arrayMaxLength) return replacer(value, v, false);
            return v;
          }

          iterator(value, function (k) {
            try {
              v = str(k, value, depthDecr - 1);
              if (v) partial.push(quote(k) + ':' + v);
            } catch (e) {// this try/catch due to forbidden accessors on some objects
            }
          });
          return '{' + partial.join(',') + '}';

        case 'function':
        case 'undefined':
          return replacer ? replacer(value, undefined, false) : undefined;
      }
    }

    return str('', {
      '': value
    }, depthDecr);
  };

  prune.log = function () {
    console.log.apply(console, Array.prototype.map.call(arguments, function (v) {
      return JSON.parse(JSON.prune(v));
    }));
  };

  prune.forEachProperty = forEachProperty; // you might want to also assign it to Object.forEachProperty

  JSON.prune = prune;
})();

module.exports = {
  Debugger: Debugger,
  Button: Button,
  provideTests: provideTests,
  shallowCompare: shallowCompare
};

/***/ }),

/***/ "./src/js/components/JBItem.jsx":
/*!**************************************!*\
  !*** ./src/js/components/JBItem.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JBItem; });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var JBReflection =
/*#__PURE__*/
function (_React$Component) {
  _inherits(JBReflection, _React$Component);

  function JBReflection(props) {
    var _this;

    _classCallCheck(this, JBReflection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JBReflection).call(this, props));
    _this.json = {};
    return _this;
  }

  _createClass(JBReflection, [{
    key: "render",
    value: function render() {
      this.json = this.props.of.getJson();
      return React.createElement("div", {
        className: "jb-reflection"
      }, JSON.stringify(this.json));
    }
  }]);

  return JBReflection;
}(React.Component);

var JBItem =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(JBItem, _React$Component2);

  function JBItem(_props) {
    var _this2;

    _classCallCheck(this, JBItem);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(JBItem).call(this, _props));

    _defineProperty(_assertThisInitialized(_this2), "getJson", function () {
      var orderedChildComponents = [];

      _this2.children.forEach(function (child) {
        var c = _this2.childRefs[child.key];

        if (c) {
          orderedChildComponents.push({
            key: c.getKey(),
            comp: c
          });
        }
      });

      console.log(orderedChildComponents);

      if (orderedChildComponents.length < 1) {
        if (_this2.isRoot) {
          return {};
        }

        if (_this2.r.value.current) {
          return _this2.r.value.current.value;
        }
      }

      var keysAreOrdered = true;
      var counter = 0;
      orderedChildComponents.forEach(function (cc) {
        if (cc.key != counter) {
          keysAreOrdered = false;
        }

        counter++;
      });
      var ret;
      console.log('keys...', keysAreOrdered);

      if (keysAreOrdered) {
        ret = [];
        orderedChildComponents.forEach(function (cc) {
          ret.push(cc.comp.getJson());
        });
      } else {
        ret = {};
        orderedChildComponents.forEach(function (cc) {
          ret[cc.key] = cc.comp.getJson();
        });
      }

      return ret;
    });

    _defineProperty(_assertThisInitialized(_this2), "addChild", function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var key = _this2.f.getUid(_assertThisInitialized(_this2));

      _this2.children.push(Object.assign({
        key: key,
        _key: key,
        iValue: "",
        iKey: _this2.children.length
      }, props));

      _this2.updateReflection();
    });

    _defineProperty(_assertThisInitialized(_this2), "deleteSelf", function () {
      if (_this2.isRoot) {
        return;
      }

      delete _this2.parent.children[_this2.props.index];

      if (_this2.parent.childRefs[_this2.props._key]) {
        delete _this2.parent.childRefs[_this2.props._key];
      }

      _this2.parent.forceUpdate();
    });

    _defineProperty(_assertThisInitialized(_this2), "getKey", function () {
      return _this2.r.key.current && _this2.r.key.current.value;
    });

    _defineProperty(_assertThisInitialized(_this2), "getValue", function () {
      return _this2.r.value.current && _this2.r.value.current.value;
    });

    _defineProperty(_assertThisInitialized(_this2), "updateReflection", function () {
      if (_this2.f.root.reflection.current) {
        _this2.f.root.reflection.current.forceUpdate();
      }
    });

    _this2.isRoot = _this2.props.isRoot || false;
    _this2.reflection = React.createRef();
    _this2.lastUid = 0;
    _this2.r = {
      key: React.createRef(),
      value: React.createRef()
    };
    _this2.parent = _this2.isRoot ? _assertThisInitialized(_this2) : _this2.props.p;
    _this2.type = _this2.props.type || 0;

    if (_this2.isRoot) {
      _this2.type = _this2.props.type || 1;
    } // define only in root


    _this2.f = _this2.props.f || {
      root: _assertThisInitialized(_this2),
      getUid: function getUid(mountedComponent) {
        mountedComponent.lastUid++;
        return "_" + mountedComponent.lastUid;
      }
    };
    _this2.children = [];
    _this2.childRefs = {};
    _this2.Controls = React.memo(function (props) {
      var add = function add(e) {
        _this2.addChild();

        _this2.forceUpdate();
      };

      var del = function del(e) {
        _this2.deleteSelf();
      };

      var primitive = function primitive(e) {
        _this2.type = 0;

        _this2.forceUpdate();
      };

      var arr = function arr(e) {
        _this2.type = 1;

        _this2.forceUpdate();
      };

      var obj = function obj(e) {
        _this2.type = 2;

        _this2.forceUpdate();
      };

      return React.createElement("div", {
        className: "jb-controls"
      }, React.createElement("span", {
        onClick: add
      }, "add"), " ", React.createElement("span", {
        onClick: del
      }, "del"), " ", !_this2.isRoot && React.createElement(React.Fragment, null, React.createElement("span", {
        onClick: primitive
      }, "P"), " "), React.createElement("span", {
        onClick: arr
      }, "A"), " ", React.createElement("span", {
        onClick: obj
      }, "O"));
    });
    return _this2;
  }

  _createClass(JBItem, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.parent) {
        if (this.parent.childRefs[this.props._key]) {
          delete this.parent.childRefs[this.props._key];
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      console.log("ItemRender", this);
      var hide = {
        display: "none"
      };

      if (this.isRoot && this.type === 0) {
        this.type = 2;
      }

      if (this.children.length === 0) {
        if (this.type === 1 || this.type === 2) {
          this.addChild();
        }
      } else {
        if (this.type === 0) {
          this.type = 2;
        }
      }

      return React.createElement(React.Fragment, null, this.isRoot && React.createElement(JBReflection, {
        of: this,
        ref: this.reflection
      }), React.createElement("div", {
        className: "jb-item",
        style: {
          paddingLeft: "20px"
        }
      }, React.createElement(this.Controls, {
        dep1: this.index,
        dep2: this.type
      }), this.isRoot && React.createElement("p", null, "Root"), !this.isRoot && React.createElement(React.Fragment, null, this.parent && this.parent.type === 1 && React.createElement("span", null, this.index), React.createElement("input", {
        type: "text",
        name: "key",
        placeholder: "key",
        ref: this.r.key,
        onChange: this.updateReflection,
        style: this.parent && this.parent.type === 1 ? hide : {}
      }), React.createElement("input", {
        type: "text",
        name: "value",
        placeholder: "value",
        ref: this.r.value,
        onChange: this.updateReflection,
        style: this.type === 1 || this.type === 2 ? hide : {}
      })), React.createElement("span", null, " ", this.type, " - ", this.children.length), (this.type === 1 || this.type === 2) && this.children.map(function (item, index) {
        return React.createElement(JBItem, _extends({
          p: _this3,
          f: _this3.f,
          index: index
        }, item));
      })));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.parent) {
        this.parent.childRefs[this.props._key] = this;
      }

      console.log('mount', this.r);

      if (!this.isRoot) {
        this.r.key.current.value = this.props.iKey;
        this.r.value.current.value = this.props.iValue;
      }
    }
  }]);

  return JBItem;
}(React.Component);



/***/ }),

/***/ "./src/js/components/Main.jsx":
/*!************************************!*\
  !*** ./src/js/components/Main.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var _TheThing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheThing */ "./src/js/components/TheThing.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Main =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main(props) {
    var _this;

    _classCallCheck(this, Main);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Main).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement("p", null, "Main..."), React.createElement(_TheThing__WEBPACK_IMPORTED_MODULE_0__["default"], null));
    }
  }]);

  return Main;
}(React.Component);



/***/ }),

/***/ "./src/js/components/TheThing.jsx":
/*!****************************************!*\
  !*** ./src/js/components/TheThing.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TheThing; });
/* harmony import */ var _Generic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Generic */ "./src/js/components/Generic.jsx");
/* harmony import */ var _Generic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Generic__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import AThing from './AThing';


var TheThing =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TheThing, _React$Component);

  function TheThing(_props) {
    var _this;

    _classCallCheck(this, TheThing);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TheThing).call(this, _props));

    _defineProperty(_assertThisInitialized(_this), "del", function () {
      _this.things = _this.things.filter(function (thing, index) {
        return index !== 0;
      }).map(function (thing, index) {
        thing.index = index;
        return thing;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "insert", function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _this.things.push(Object.assign({}, {
        key: _this.getKey()
      }, props));
    });

    _defineProperty(_assertThisInitialized(_this), "getKey", function () {
      _this.key++;
      return _this.key;
    });

    _this.key = 0;
    _this.things = [];

    for (var x = 0; x < 2; x++) {
      _this.things.push({
        key: _this.getKey()
      });
    }

    _this.dir = 1;
    _this.thingRefs = {};
    _this.reflectionRefs = {};
    _this.c = React.createRef();
    _Generic__WEBPACK_IMPORTED_MODULE_0___default.a.provideTests(_assertThisInitialized(_this));

    _this.addTest('Add', function () {
      _this.insert();

      _this.forceUpdate();
    });

    _this.addTest('Minus', function () {
      _this.del();

      _this.forceUpdate();
    });

    return _this;
  }

  _createClass(TheThing, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.c);
      console.dir(this.c);
      var ctx = this.c.getContext("2d");
      ctx.moveTo(0, 0);
      ctx.lineTo(200, 100);
      ctx.stroke();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(React.Fragment, null, this.renderTests(), React.createElement("div", {
        className: "the-thing",
        style: {
          position: 'relative',
          width: '800px',
          height: '800px',
          border: '2px solid blue'
        }
      }, this.things.map(function (thing, index) {
        return React.createElement(AThing, _extends({}, thing, {
          key: thing.key,
          parent: _this2,
          _key: thing.key,
          index: index,
          onInit: function onInit(comp) {
            _this2.thingRefs[thing.key] = comp;
          },
          getLinked: function getLinked() {
            return _this2.reflectionRefs[thing.key];
          }
        }));
      }), this.things.map(function (thing, index) {
        return React.createElement(Reflection, {
          key: thing.key,
          parent: _this2,
          _key: thing.key,
          index: index,
          onInit: function onInit(comp) {
            _this2.reflectionRefs[thing.key] = comp;
          },
          getLinked: function getLinked() {
            return _this2.thingRefs[thing.key];
          }
        });
      })), React.createElement("canvas", {
        id: "shit",
        width: "800",
        height: "800",
        ref: function ref(ele) {
          if (ele) {
            _this2.c = ele;
          }
        },
        style: {
          border: "1px solid green",
          margin: "40px auto"
        }
      }));
    }
  }]);

  return TheThing;
}(React.Component);



var AThing =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(AThing, _React$Component2);

  function AThing(props) {
    var _this3;

    _classCallCheck(this, AThing);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(AThing).call(this, props));

    _defineProperty(_assertThisInitialized(_this3), "rand", function (pos) {
      var next = pos + 10 * (2 * Math.random() - 1);

      if (next < 1 || next > 99) {
        _this3.edges++;
        next = Math.abs(100 - next);

        if (_this3.props.parent.things.length > 55) {
          _this3.props.parent.dir = -1;
        }

        if (_this3.props.parent.things.length < 3) {
          _this3.props.parent.dir = 1;
        }

        if (_this3.props.parent.dir < 0) {
          if (Math.random() > 0.9) {
            _this3.props.parent.del();

            _this3.props.parent.forceUpdate();
          }
        } else {
          if (Math.random() > 0.5) {
            for (var x = 0; x < 10; x++) {
              _this3.props.parent.insert({
                startX: _this3.x,
                startY: _this3.y
              });
            }

            _this3.props.parent.forceUpdate();
          }
        }
      }

      return next;
    });

    _this3.props.onInit(_assertThisInitialized(_this3));

    _this3.interval = undefined;
    _this3.x = _this3.props.startX !== undefined ? _this3.props.startX : 100 * Math.random();
    _this3.y = _this3.props.startY !== undefined ? _this3.props.startY : 100 * Math.random();
    _this3.steps = 0;
    _this3.edges = 0;
    return _this3;
  }

  _createClass(AThing, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      this.interval = setInterval(function () {
        _this4.steps++;
        _this4.x = _this4.rand(_this4.x);
        _this4.y = _this4.rand(_this4.y);

        _this4.forceUpdate();
      }, 500);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // probably not needed... ?
      if (this.interval) {
        clearInterval(this.interval);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var reflection = this.props.getLinked();

      if (reflection) {
        reflection.forceUpdate();
      }

      return React.createElement("div", {
        className: "a-thing",
        style: {
          position: "absolute",
          bottom: this.x + "%",
          left: this.y + "%",
          borderRadius: "10px",
          transition: "all .5s linear",
          width: "5px",
          height: "5px",
          background: "black"
        }
      });
    }
  }]);

  return AThing;
}(React.Component);

var Reflection =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Reflection, _React$Component3);

  function Reflection(props) {
    var _this5;

    _classCallCheck(this, Reflection);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(Reflection).call(this, props));

    _this5.props.onInit(_assertThisInitialized(_this5));

    return _this5;
  }

  _createClass(Reflection, [{
    key: "render",
    value: function render() {
      var thing = this.props.getLinked() || {};
      return React.createElement("div", {
        className: "reflection",
        style: {
          fontSize: "9px"
        }
      }, thing.props.index, ": ", thing.steps, ", ", thing.edges);
    }
  }]);

  return Reflection;
}(React.Component);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map