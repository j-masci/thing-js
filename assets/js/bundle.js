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

/***/ "./src/js/app.jsx":
/*!************************!*\
  !*** ./src/js/app.jsx ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_OrderForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/OrderForm */ "./src/js/components/OrderForm.jsx");
// import React, { Component } from 'react';
// import React, { useState } from 'react';


(function () {
  console.log("gene-quotes app.jsx");
  var app = {};
  app.eventsTracker = {};

  app.trackEventStart = function () {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
    var merge = arguments.length > 1 ? arguments[1] : undefined;
    var event = {};
    event.start = performance.now();

    if (merge) {
      event.mergeBefore = merge;
    }

    if (!this.eventsTracker[context]) {
      this.eventsTracker[context] = [];
    }

    this.eventsTracker[context].push(event);
  };

  app.trackEventEnd = function () {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
    var merge = arguments.length > 1 ? arguments[1] : undefined;

    if (this.eventsTracker[context]) {
      this.eventsTracker[context] = this.eventsTracker[context].map(function (event) {
        if (event && event.end === undefined) {
          event.end = performance.now();
          event.time = event.end - event.start;

          if (merge) {
            event.mergeAfter = merge;
          }

          console.log("Track Event (" + context + "): ", event.time, event);
        }

        return event;
      });
    }
  }; // helps to store label/value pairs for select/checkboxes etc.


  app.createOptionsArray = function (simpleArray) {
    return simpleArray.map(function (item) {
      return {
        value: item[0],
        name: item[1] || item[0]
      };
    });
  };

  app.optionValueExists = function (groupName, value) {
    var unlikely = "__unlikelyValue";
    return this.getOptionName(groupName, value, unlikely) === unlikely;
  }; // for initial state values or w/e if needed


  app.getOptionFirst = function (groupName) {
    var grp = this.getOptionGroup(groupName); // returning strictly empty string as default might cause issues if grp has
    // the first option with a different false-like value. For now though, everything is fine.

    return grp && grp.length > 0 && grp[0].value ? grp[0].value : "";
  }; // reference the instantiated react component in case it makes any last second modifications,
  // this has a side effect of the this function returning nothing until first render.


  app.getOptionGroup = function (groupName) {
    var ret = this.OrderForm ? this.OrderForm.config.options[groupName] : [];

    if (!ret) {
      console.error("Option group not found", groupName, this.OrderForm, ret);
    }

    return ret;
  }; // ie, f( 'format', 'tubes' ) = "Tubes"
  // references the OrderForm component which may make last second modifications to option groups,
  // therefore, this won't return anything until OrderForm is mounted.


  app.getOptionName = function (groupName, value, ifNotExists) {
    var _this = this;

    // careful or you'll break optionValueExists method - we need to have a predictable ifNotExists value.
    // note: set name now to maybe the incorrect value, and maybe change it below.
    var name = typeof ifNotExists === 'undefined' ? "" : ifNotExists; // console.log('getOptionName...', groupName, value, ifNotExists );

    if (this.OrderForm && this.OrderForm.config.options && this.OrderForm.config.options[groupName]) {
      // console.log('getOptionName.....', this.OrderForm.config.options[groupName] );
      this.OrderForm.config.options[groupName].forEach(function (item) {
        if (_this.compareOptions(value, item.value)) {
          // console.log('getOptionName.......', value, item.value );
          name = item.name;
        }
      });
    }

    return name;
  }; // placeholder is the first option without a value


  app.renderOptions = function (options, placeholder) {
    if (!Array.isArray(options)) {
      options = [];
      console.error("app.renderOptions has non-array options", options);
    }

    if (placeholder) {
      // array unshift would be nice but will modify the referenced array,
      // causing each placeholder to have a permanent effect over time, resulting
      // in many placeholders.
      var _options = [];

      _options.push({
        value: "",
        name: placeholder
      });

      options.forEach(function (option) {
        _options.push(option);
      });
      options = _options;
    }

    return options.map(function (option) {
      // actually, controlled elements in react shouldn't use selected on options,
      // but should set <select value=""> instead. We could turn this on if we
      // end up using non-controlled components
      // let selected = this.compareOptions(option.value, currentValue);
      return React.createElement("option", {
        value: option.value
      }, option.name);
    });
  }; // simply converts to string (in a way that we may have to change over time)
  // to return true of values equate using loose comparison.


  app.compareOptions = function (optionValue, currentValue) {
    // maybe necessary maybe not I don't know how .valueOf()
    // works with strings in all cases.
    if (!optionValue && !currentValue) {
      return true;
    }

    var v1 = new String(optionValue).valueOf();
    var v2 = new String(currentValue).valueOf();
    return v1 === v2;
  };

  app.init = function () {
    var self = this; // each option group can be overriden by previously defined global variable
    // group names correspond to names on <select> or in some cases <input type="checkbox">

    var options = Object.assign({
      format: self.createOptionsArray([["tubes", "Tubes"], ["plate", "Plate"]]),
      delivery_amount: self.createOptionsArray([// indicate that this value needs to be overwritten
      [1, 'Config Error']]),
      vector: self.createOptionsArray([[1, 'Config Error']]),
      mutations: self.createOptionsArray([[1, 'Config Error']]),
      delivery_type: self.createOptionsArray([[1, 'Config Error']])
    }, window.gene_quotes_options || {}); // don't really need anything here

    var defaultConfig = {};
    var config = Object.assign(defaultConfig, window.gene_quotes_config || {}); // now add the options (order matters here)

    config.options = options;
    var order_form = document.getElementById('gq-order-form');

    if (order_form) {
      // call on mount
      var registerSelf = function registerSelf(Component) {
        self.OrderForm = Component;
        console.log("Register Order Form...", Component, self);
      }; // is it necessary now to pass the config into the component? ... We could
      // just store them globally in window.


      ReactDOM.render(React.createElement(_components_OrderForm__WEBPACK_IMPORTED_MODULE_0__["default"], {
        registerSelf: registerSelf,
        config: config
      }), order_form);
    }
  };

  window.geneQuotes = app;
  window.geneQuotes.init();
})();

/***/ }),

/***/ "./src/js/components/BulkImportForm.jsx":
/*!**********************************************!*\
  !*** ./src/js/components/BulkImportForm.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BulkImportForm; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// import Generic from './Generic';

/**
 * Bulk import form.. Download templates files, then attach and upload.
 */
var BulkImportForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BulkImportForm, _React$Component);

  function BulkImportForm(props) {
    var _this;

    _classCallCheck(this, BulkImportForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BulkImportForm).call(this, props));
    _this.submitFile = _this.submitFile.bind(_assertThisInitialized(_this));
    _this.fileInput = React.createRef(); // unlikely that we will need to use isOpenOnMount
    // store state in this component so that parent doesn't have to re-render it.

    _this.state = {
      isOpen: _this.props.isOpenOnMount || false
    }; // async nature of state makes it better to not use state for this.

    _this.isSubmitting = false;
    return _this;
  }

  _createClass(BulkImportForm, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(prevProps, prevState) {
      if (prevState.isOpen !== this.state.isOpen) {
        return true;
      }

      return false;
    }
  }, {
    key: "submitFile",
    value: function submitFile() {
      var _this2 = this;

      console.log("Submit file...", this.fileInput, this.state);

      if (this.isSubmitting) {
        alert("Please wait a few seconds for your last import to finish processing.");
        return;
      } else {
        this.isSubmitting = true;
      }

      var OrderForm = this.props.parent;
      var input = this.fileInput.current;
      var file = input && input.files && input.files[0] ? input.files[0] : false;

      if (!file) {
        this.isSubmitting = false;
        alert("Please attach the file that you want to import.");
        return;
      }

      var formData = new FormData();
      formData.append('ajax_action', 'bulk_import');
      formData.append('bulk_import_file', file);
      axios.post(OrderForm.config.ajax_url, formData, {
        useCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        _this2.isSubmitting = false;
        var data = response.data || {};
        var success = data.success || false;
        var items = Array.isArray(data.items) || [];
        var errors = data.errors || [];
        console.log("Bulk Import Response", data);

        if (errors || !success || !items) {
          errors = errors ? errors : ["[008] An unknown error occurred."]; // todo: show errors to the user...

          console.log(errors);
        } else {
          // in reality, 500 items is probably way too many, both for the client-side
          // and for server-side checkout. Expect 100+ to be very rare however.
          var count = 0;
          var cap = 500;
          var hitCap = false;
          items.forEach(function (item) {
            count++;

            if (count > cap) {
              hitCap = true;
            } else {
              OrderForm._items_.push(OrderForm.generateNewItemObject(OrderForm._items_.length, OrderForm.generateItemKey(), {
                initialState: item
              }));
            }
          });
          setTimeout(function () {
            if (hitCap) {
              alert(count + " items were added. The number of items inserted reached the cap (" + cap + "). Items beyond the cap were not inserted.");
            } else {
              alert(count + " items were added.");
            }
          });
        }
      })["catch"](function (error) {
        _this2.isSubmitting = false;
        alert("[3] An unknown error occurred.");
        console.error("Bulk Import Error", error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var open = this.state.isOpen;
      var downloadSrc = "./assets/fa-png/download.png"; // don't dismount the input type file

      return React.createElement("div", {
        className: "bulk-import-form",
        style: open ? {} : {
          display: "none"
        }
      }, open && React.createElement("div", {
        className: "bulk-import-close"
      }, React.createElement("button", {
        className: "css-reset",
        onClick: this.props.parent.toggleBulkImport
      }, "Close")), React.createElement("table", null, React.createElement("tbody", null, open && React.createElement("tr", null, React.createElement("td", {
        className: "cell-msg"
      }, React.createElement("p", null, "Download 1 or more template files based on the service type of the genes you want to import. To import more than 1 service type, upload multiple files one at a time.")), React.createElement("td", {
        className: "cell-templates"
      }, React.createElement("p", null, React.createElement("a", {
        title: "Download Excel Template",
        href: this.props.gene_synthesis_url
      }, React.createElement("img", {
        src: downloadSrc,
        download: true
      }), " ", "Gene Synthesis Excel Template")), React.createElement("p", null, React.createElement("a", {
        title: "Download Excel Template",
        href: this.props.subcloning_url
      }, React.createElement("img", {
        src: downloadSrc,
        download: true
      }), " ", "Subcloning Only Excel Template")), React.createElement("p", null, React.createElement("a", {
        title: "Download Excel Template",
        href: this.props.mutagenesis_url
      }, React.createElement("img", {
        src: downloadSrc,
        download: true
      }), " ", "Mutagenesis Excel Template")))), React.createElement("tr", null, React.createElement("td", {
        className: "cell-file"
      }, React.createElement("input", {
        ref: this.fileInput,
        type: "file",
        name: "bulk_import_file"
      })), open && React.createElement("td", {
        className: "cell-submit"
      }, React.createElement("div", {
        className: "gq-btn btn-orange"
      }, React.createElement("button", {
        onClick: this.submitFile
      }, "Import")))))));
    }
  }]);

  return BulkImportForm;
}(React.Component);



/***/ }),

/***/ "./src/js/components/Generic.jsx":
/*!***************************************!*\
  !*** ./src/js/components/Generic.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var shallowEqualObjects = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'shallow-equal/objects'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var shallowEqualArrays = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'shallow-equal/arrays'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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
}; // ie. classList


var wordsWithSpaces = function wordsWithSpaces(words) {
  // words = words || [];
  words = words.constructor === Array ? words : [];
  return words.filter(function (word) {
    return word || false;
  }).join(" ");
};

var Button = function Button(text, onClick, props) {
  props = props || {};
  props.onClick = props.onClick || onClick;
  return React.createElement('button', props, text);
};

var OnMount =
/*#__PURE__*/
function () {
  function OnMount() {
    _classCallCheck(this, OnMount);
  }

  _createClass(OnMount, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount().bind(this);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(this.props.tagName, _objectSpread({}, this.props, {
        tagName: undefined
      }));
    }
  }]);

  return OnMount;
}(); // class Select extends React.Component{
//
//     componentDidMount(){
//         this.props.onMount();
//     }
//
//     render(){
//
//     }
// }


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
};

var ShowIf = function ShowIf(props) {
  var p = _objectSpread({}, props, {
    test: undefined,
    style: props.test ? {} : {
      display: 'none'
    }
  });

  return React.createElement("div", p, props.children);
};
/**
 * TODO: would it be better to use a hidden input type checkbox and label with button inside?
 * TODO: ... when using a button the value only exists in the react state and not in a form otherwise
 *
 * @param checked
 * @param onChange
 * @param text
 * @param id
 * @param props
 * @returns {*}
 * @constructor
 */


var CheckableButton = function CheckableButton(_ref) {
  var checked = _ref.checked,
      onChange = _ref.onChange,
      text = _ref.text,
      props = _objectWithoutProperties(_ref, ["checked", "onChange", "text"]);

  props.className = 'css-reset' + (props.checked ? ' active' : '');
  return React.createElement("button", props, text);
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
  CheckableButton: CheckableButton,
  ShowIf: ShowIf,
  Debugger: Debugger,
  Button: Button,
  provideTests: provideTests,
  wordsWithSpaces: wordsWithSpaces,
  shallowCompare: shallowCompare
};

/***/ }),

/***/ "./src/js/components/OrderForm.jsx":
/*!*****************************************!*\
  !*** ./src/js/components/OrderForm.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Generic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Generic */ "./src/js/components/Generic.jsx");
/* harmony import */ var _Generic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Generic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OrderFormItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderFormItem */ "./src/js/components/OrderFormItem.jsx");
/* harmony import */ var _BulkImportForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BulkImportForm */ "./src/js/components/BulkImportForm.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // import update from 'immutability-helper';
// import { Provider } from 'react-redux';
// import { connect } from 'react-redux';
// import { increment, decrement, reset } from './actionCreators'
// the list of why js is stupid
// 1. had to google how to replace all occurences of a single character in a string
// the answers included using regex or splitting and re-joining a string. there is nothing build into
// the core of JS to achieve this simply.
// 2. had to search how to check if something is an array, got 45 different answers.
// 3. need es5 or 6 or to write your own loop to see if an item is in an array
// links
// this.setState({ class: Object.assign({}, this.state.class, { [element]: value }) }
// https://reactjs.org/docs/react-api.html#createfactory
// React.Children.toArray( this.props.children );
// https://egghead.io/lessons/react-understand-react-children-utilities

var OrderForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(OrderForm, _React$Component);

  function OrderForm(props) {
    var _this;

    _classCallCheck(this, OrderForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OrderForm).call(this, props)); // saves component globally

    _this.props.registerSelf(_assertThisInitialized(_this));

    _this.generateItemKey = _this.generateItemKey.bind(_assertThisInitialized(_this));
    _this.itemAppend = _this.itemAppend.bind(_assertThisInitialized(_this));
    _this.getItemComponent = _this.getItemComponent.bind(_assertThisInitialized(_this));
    _this.setItemComponent = _this.setItemComponent.bind(_assertThisInitialized(_this));
    _this.itemDeleteViaKey = _this.itemDeleteViaKey.bind(_assertThisInitialized(_this));
    _this.itemSetChecked = _this.itemSetChecked.bind(_assertThisInitialized(_this));
    _this.itemEditViaKey = _this.itemEditViaKey.bind(_assertThisInitialized(_this));
    _this.allItemsChecked = _this.allItemsChecked.bind(_assertThisInitialized(_this));
    _this.handleBulkActionSubmit = _this.handleBulkActionSubmit.bind(_assertThisInitialized(_this));
    _this.handleEntriesSubmit = _this.handleEntriesSubmit.bind(_assertThisInitialized(_this));
    _this.handleBulkSelectCheckboxChange = _this.handleBulkSelectCheckboxChange.bind(_assertThisInitialized(_this));
    _this.countChecked = _this.countChecked.bind(_assertThisInitialized(_this));
    _this.resetBulkAction = _this.resetBulkAction.bind(_assertThisInitialized(_this));
    _this.sendToServer = _this.sendToServer.bind(_assertThisInitialized(_this));
    _this.assembleFormData = _this.assembleFormData.bind(_assertThisInitialized(_this));
    _this.saveSessionState = _this.saveSessionState.bind(_assertThisInitialized(_this));
    _this.getSessionState = _this.getSessionState.bind(_assertThisInitialized(_this));
    _this.itemsReIndex = _this.itemsReIndex.bind(_assertThisInitialized(_this));
    _this.itemsMapState = _this.itemsMapState.bind(_assertThisInitialized(_this));
    _this.itemComponentsForEach = _this.itemComponentsForEach.bind(_assertThisInitialized(_this));
    _this.onClickHandleBackToOrderForm = _this.onClickHandleBackToOrderForm.bind(_assertThisInitialized(_this));
    _this.OrderSummarySidebar = _this.OrderSummarySidebar.bind(_assertThisInitialized(_this));
    _this.itemsHaveErrors = _this.itemsHaveErrors.bind(_assertThisInitialized(_this));
    _this.buildItemsMemo = _this.buildItemsMemo.bind(_assertThisInitialized(_this));
    _this.toggleBulkImport = _this.toggleBulkImport.bind(_assertThisInitialized(_this));
    _this.state = {
      format: 'tubes',
      isOrderSummary: false,
      errors: []
    }; // we store a reference to this object in each OrderFormItem,
    // which should be more efficient so that each item
    // references a single object rather than referencing
    // many function objects. Also, might be easier to
    // add items here...

    _this.itemCallbacks = {
      insert: function insert() {
        _this.itemAppend(1);
      },
      deleteViaKey: _this.itemDeleteViaKey,
      setChecked: _this.itemSetChecked,
      editViaKey: _this.itemEditViaKey,
      registerViaKey: _this.setItemComponent,
      sendToServer: _this.sendToServer
    }; // for when we send data to the server.
    // storing this in state might not be reliable to do async
    // nature of this. When we're sending to server, we should
    // show an alert is the value of this is true.

    _this.isLoading = false;
    _this.config = Object.assign({}, _this.props.config || {}); // this already exists, but leaving this here so that you know that it does

    _this.config.options = _this.config.options || {};
    _this.forcedUpdatesQueued = false; // when we want to call setState and forceUpdate at the same time,
    // we can instead increment this value and then include it in the setState
    // call, which may (or may not) help prevent double rendering of the entire
    // component in some instances. Its important because its possible that the setState
    // call sets the same as the last state and in this case i'm pretty sure
    // it still triggers a re-render, but not if

    _this._setUniqueStateCounter = 0; // doesn't need to be in state

    _this.lastItemKey = 0; // new way: I think its best to not store nested state. Instead,
    // we can mutate this freely but have to call forceUpdate manually.

    _this._items_ = [];
    _this.lastItemsUsedInItemsMemo = [];
    _this.itemsChanged = false;

    _this.buildItemsMemo(); // OrderFormItem components indexed by key. So we can do, for example,
    // this.itemComponents[this._items_[0].key].setState()...
    // after appending a new item, the component is put into here upon mounting.
    // see 'ref' callback.


    _this.itemComponents = {}; // <input> for number of entries

    _this.entriesUncontrolledInput = React.createRef();
    _this.bulkImportForm = React.createRef(); // testing

    _this.renderCount = 0;
    _this.localStorageKey = "GeneQuotesOrderForm"; // in seconds

    _this.localStorageDuration = 6 * 3600;
    _Generic__WEBPACK_IMPORTED_MODULE_0___default.a.provideTests(_assertThisInitialized(_this));

    _this.registerTests();

    return _this;
  } // didMount or ref callback tool


  _createClass(OrderForm, [{
    key: "setItemComponent",
    value: function setItemComponent(key, Component) {
      this.itemComponents[key] = Component;
    } // store the entire list of items in a memo. this should provide a decent optimization
    // for when we have lots of items in the form and then perform stateful actions at higher
    // levels, like with the bulk import form or order form controls. Remember also that each
    // item has its own componentShouldUpdate function as well which will compare props and state,
    // which means that doing an extra comparison here is sometimes wasteful. For this purpose
    // we use this.itemsChanged, which we can set to true at certain time when we know that
    // doing this memo comparison would otherwise be wasteful.
    // If this eventually causes issues or is hard to maintain, it shouldn't hurt
    // to simply un-memo it.

  }, {
    key: "buildItemsMemo",
    value: function buildItemsMemo() {
      var _this2 = this;

      var itemsAreEqual = function itemsAreEqual(prevPropsWithNonPrevItemsRef, nextProps) {
        // using this.lastItemsUsedInItemsMemo seems to work, but is hacky. May remove the memo altogether
        var prevItems = _this2.lastItemsUsedInItemsMemo;
        var nextItems = nextProps.items;
        var t1 = performance.now(); // turns out, prevPropsWithNonPrevItemsRef.items and nextProps.items both
        // point the same reference. in other words, they are the same.

        console.log("Are Equal ?", prevItems, nextProps.items, '..prevPropsWithNonPrevItemsRef..:', prevPropsWithNonPrevItemsRef, nextProps); // possible optimization - set to true if we know items have changed.
        // but as far as I can tell, there is very little harm in not using this.

        if (nextProps.itemsChanged) {
          return false;
        }

        if (prevPropsWithNonPrevItemsRef.isOrderSummary !== nextProps.isOrderSummary) {
          return false;
        } // lets us safely assume the same indexes exist in both arrays


        if (prevItems.length !== nextItems.length) {
          return false;
        }

        var i,
            areEqual = true;
        console.time('itemsAreEqual'); // if this loop becomes large, then this entire memo may become useless.
        // not large in number, I mean the body of the loop. Right now its very
        // efficient because we only pass down the items order and whether or not its checked.
        // if we passed down 20 props and looped 100 items, it may be a waste of time to
        // do this in the first place, although 2000 comparisons is not huge, it could
        // add up if we changed the state often, like on an inputs change event.

        for (i = 0; i < prevItems.length; i++) {
          if (prevItems[i].checked !== nextItems[i].checked) {
            areEqual = false;
            break;
          }

          if (prevItems[i].index !== nextItems[i].index) {
            areEqual = false;
            break;
          }
        }

        console.log('items areEqual result...', areEqual);
        console.timeEnd('itemsAreEqual');
        console.log('performance...', performance.now() - t1);
        return areEqual;
      };

      this.OrderFormItems = React.memo(function (props) {
        _this2.lastItemsUsedInItemsMemo = props.items.map(function (item) {
          return {
            checked: item.checked,
            index: item.index
          };
        });
        return React.createElement("div", {
          className: "order-form-items"
        }, props.items.map(function (item) {
          return React.createElement(_OrderFormItem__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
            isOrderSummary: props.isOrderSummary
          }, item));
        }));
      }, itemsAreEqual);
    } // maybe (or.. will) return undefined when an item is appended but not yet mounted
    // between setting state and mounting the item, this can return null.
    // be careful not to pass in component.key. The component itself only has
    // access to _key, although this._items_[{int}].key === this._items_[{}]._key

  }, {
    key: "getItemComponent",
    value: function getItemComponent(key) {
      return this.itemComponents[key];
    }
  }, {
    key: "saveSessionState",
    value: function saveSessionState() {
      var _this3 = this;

      var toSave = {
        time: Math.floor(Date.now() / 1000),
        format: this.state.format,
        isOrderSummary: false,
        items: this._items_.map(function (item) {
          var itemSnapshot = {};
          var key; // build item props (ignoring some)

          for (key in item) {
            if (item.hasOwnProperty(key)) {
              // for now, we don't need to track nested values such as arrays or objects,
              // but the main intention here is to ignore functions. Many functions are passed down
              // as properties, but when loading from session state, that's where we will ensure
              // that each item gets passed the function properties that it needs.
              if (['boolean', 'number', 'string'].includes(_typeof(item[key]))) {
                itemSnapshot[key] = item[key];
              }
            }
          }

          var c = _this3.getItemComponent(item.key); // gets passed down to an item as prop and then initiates state on mounting (or in constructor)


          itemSnapshot.initialState = Object.assign({}, c ? c.state : {}, {
            errors: []
          });
          return itemSnapshot;
        })
      };
      console.log("saveSession...", toSave); // we can store a subset of state or all of it.
      // when loading from local storage we can always choose to
      // ignore some of it. For example, I think its safe to ignore
      // the server response and/or other errors here,
      // if the user comes back at a later time, they'll have to
      // re-submit to get the errors, but their data will remain in tact.
      // warning: if item's state properties are references to other js objects,
      // then json stringify could cause timeout issues. we're def expecting only
      // string/integer values here.

      window.localStorage.setItem(this.localStorageKey, JSON.stringify(toSave));
    } // compareTimeElapsed is likely this.localStorageDuration.
    // if this number is provided and more than this number of seconds has passed, returns
    // an empty object.

  }, {
    key: "getSessionState",
    value: function getSessionState(compareTimeElapsed) {
      compareTimeElapsed = parseInt(compareTimeElapsed) || 0;
      var expired, ret;

      try {
        ret = JSON.parse(window.localStorage.getItem(this.localStorageKey) || "{}");
      } catch (e) {
        ret = {};
      }

      if (compareTimeElapsed) {
        if (ret.time) {
          var timeNow = Math.floor(Date.now() / 1000);
          expired = parseInt(ret.time + compareTimeElapsed) < timeNow;
          console.log("Expired...", timeNow, ret.time, expired);
        } else {
          // if time was not specified when saving, we'll just treat this as invalid/expired
          expired = true;
        }

        return expired ? {} : ret;
      } else {
        // dont do any time comparisons.
        // not likely we'll use this.
        return ret;
      }
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this4 = this;

      var session = this.getSessionState(this.localStorageDuration);
      console.log("componentWillMount...", session);

      if (session && session.items && session.items.length > 0) {
        this._items_ = session.items.map(function (item, index) {
          // generate the item with all the required callbacks and some overrides specified below.
          return _this4.generateNewItemObject(index, _this4.generateItemKey(), {
            initialState: item.initialState || {},
            errors: []
          });
        });
        this.setStateWithForcedNewState({
          isOrderSummary: false,
          format: session.format || 'tubes'
        });
      } else {
        // add one item by default.
        this.itemAppend(1);
      }
    }
  }, {
    key: "itemEditViaKey",
    value: function itemEditViaKey(key) {
      var _this5 = this;

      // open one item and close the rest (stored inside each items state)
      this._items_.forEach(function (item, index) {
        if (_this5.itemComponents[item.key]) {
          _this5.itemComponents[item.key].setState({
            open: item.key === key
          });
        }
      }); // go the the "order form" view


      this.setStateWithForcedNewState({
        isOrderSummary: false
      });
    } // order form item gets this callback passed as prop

  }, {
    key: "itemSetChecked",
    value: function itemSetChecked(itemIndex, booleanChecked) {
      console.log("itemSetChecked", itemIndex, booleanChecked);

      if (this._items_[itemIndex]) {
        this._items_[itemIndex].checked = !!booleanChecked;
      } // force update ensures that bulk actions respond to the number of items checked,
      // the order form items that don't have their checked state changed will benefit
      // from shouldComponentUpdate in order to optimize this when we have a large number
      // of items present.


      this.forceUpdate();
    } // skeleton for inserting new order form item.
    // index must be passed in and is likely the current length of the items
    // key should be auto generated and must be unique among all other items.
    // overrides can be used to set initial state

  }, {
    key: "generateNewItemObject",
    value: function generateNewItemObject(index, key, overrides) {
      key = key || this.generateItemKey(); // @see buildItemsMemo. Any primitive, mutable values must be taken
      // into account there. ie. index and checked. although we can avoid
      // keys and callbacks because those should never change.
      // note: this.props.key not accessible in item component, hence _key.

      var ret = {
        key: key,
        _key: key,
        index: index,
        checked: false,
        callbacks: this.itemCallbacks
      }; // ie. add initial state

      ret = overrides ? Object.assign(ret, overrides) : ret;
      return ret;
    } // if we have to call many functions which all result in a forceUpdate,
    // we can set a global variable so that forceUpdate does nothing and then
    // manually call this function afterwards. This allows us to have functions
    // that mutate this._items_ and then call forceUpdate un-conditionally.

  }, {
    key: "forceUpdateFlushQueue",
    value: function forceUpdateFlushQueue() {
      console.log("Force update flush...");
      this.forcedUpdatesQueued = false;
      this.forceUpdate();
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate() {
      if (this.forcedUpdatesQueued) {
        console.log("Force updates queued...");
      } else {
        _get(_getPrototypeOf(OrderForm.prototype), "forceUpdate", this).call(this);
      }
    } // I think ( but not 100% certain ) that this is more or less identical to:
    // if ( this.shouldComponentUpdate() { this.forceUpdate() }, but only if
    // shouldComponentUpdate exists (and not to mention, you have to feed the previous props
    // and state into shouldComponentUpdate, and I don't know if there is an easy way to do this).
    // does not support first parameter as callback function

  }, {
    key: "setStateWithForcedNewState",
    value: function setStateWithForcedNewState() {
      var objectToMerge = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var cb = arguments.length > 1 ? arguments[1] : undefined;
      this._setUniqueStateCounter++;
      this.setState(Object.assign({}, {
        _setUniqueStateCounter: this._setUniqueStateCounter
      }, objectToMerge), cb);
    } // pass an array of item objects or an integer for the number of items to append,

  }, {
    key: "itemAppend",
    value: function itemAppend() {
      var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      if (!Number.isInteger(count)) {
        // we used to sometimes pass an array of objects and trying to see if we're still doing that
        alert("Item append not integer");
      }

      for (var i = 0; i < count; i++) {
        this._items_.push(this.generateNewItemObject(this._items_.length, this.generateItemKey(), {}));
      }

      this.forceUpdate();
    } // when doing many items at a time this is probably quite a bit more efficient
    // than doing single items multiple times.

  }, {
    key: "itemsDeleteMultipleViaIndex",
    value: function itemsDeleteMultipleViaIndex(indexes) {
      this._items_ = this._items_.filter(function (item, index) {
        return indexes.includes(index);
      });
      this.forceUpdate();
    }
  }, {
    key: "itemDeleteViaKey",
    // huge efficiency concerns here if you call this in a loop with forceUpdate set to true.
    value: function itemDeleteViaKey(key) {
      var forceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      // delete component reference, which in theory, wouldn't have any drawbacks if we didn't.
      if (this.itemComponents[key]) {
        delete this.itemComponents[key];
      } // now delete the item


      this._items_ = this._items_.filter(function (item) {
        return item.key !== key;
      }); // re-index all items

      this.itemsReIndex();

      if (forceUpdate) {
        this.forceUpdate();
      }
    }
  }, {
    key: "registerTests",
    value: function registerTests() {
      var _this6 = this;

      // buttons with callbacks
      this.addTest("Dump", function () {
        console.log("Dump", _this6);
      });
      this.addTest("Dump Events Tracker", function () {
        console.log(window.geneQuotes.eventTracker);
      }); // this causes render to be trigger many times. react cannot possibly know that for example, after the 4th
      // item, there is one more forceUpdate, so that it needs to wait. This is also not running on a specific
      // react callback, so it can't choose to temporarily queue the force updates until the callback is done, ie on onClick
      // or onChange. The result is that every single forceUpdate results in render() before the next forceUpdate is called.

      this.addTest("Interval force update", function () {
        setInterval(function () {
          console.log("Forcing update in interval...");

          _this6.forceUpdate();

          console.log('---');

          _this6.forceUpdate();

          console.log('---');

          _this6.forceUpdate();

          console.log('---');

          _this6.forceUpdate();

          console.log('---');

          _this6.forceUpdate();
        }, 10000);
      }); // this results in only one order form render, evidently, because react dispatched this event
      // manually, via the onClick property of a button. In the dispatching of the event it must have
      // stored some global boolean indicating not to allow forceUpdate to run right away, and then
      // after the callback, checked to see if setState or forceUpdate was called.

      this.addTest("Many force updates", function () {
        _this6.forceUpdate();

        console.log('---');

        _this6.forceUpdate();

        console.log('---');

        _this6.forceUpdate();

        console.log('---');

        _this6.forceUpdate();

        console.log('---');

        _this6.forceUpdate();
      }); // setState actions batched similar to above

      this.addTest("multiple setState", function () {
        var c = 0;

        _this6.setState({
          c: c
        });

        console.log('---');
        c++;

        _this6.setState({
          c: c
        });

        console.log('---');
        c++;

        _this6.setState({
          c: c
        });

        console.log('---');
        c++;
      }); // works similar to forceUpdate above.. render is called immediately after each setState

      this.addTest("multiple setState interval", function () {
        var c = 0;
        setInterval(function () {
          _this6.setState({
            c: c
          });

          console.log('---');
          c++;

          _this6.setState({
            c: c
          });

          console.log('---');
          c++;

          _this6.setState({
            c: c
          });

          console.log('---');
          c++;
        }, 5000);
      });
      this.addTest("Outlines", function () {
        _this6.addClass = _this6.addClass ? "" : "test-outlines";

        _this6.forceUpdate();
      });
      this.addTest("RenderCount", function () {
        alert(_this6.renderCount);
      });
      this.addTest("ShutOffConsoleLog", function () {
        console.log = function () {};
      });
      this.addTest("Toggle Order Summary", function () {
        _this6.setState(function (prev) {
          return {
            isOrderSummary: !prev.isOrderSummary
          };
        });
      });
    }
  }, {
    key: "generateItemKey",
    value: function generateItemKey() {
      // I think its better not to store this in state.
      // changing this alone does not require a re-render, only if/when
      // used to insert an item
      this.lastItemKey++;
      return "_" + this.lastItemKey;
    }
  }, {
    key: "allItemsChecked",
    value: function allItemsChecked() {
      var checked = 0;

      this._items_.forEach(function (item) {
        return checked += item.checked ? 1 : 0;
      });

      return checked === this._items_.length;
    } // silently ignores the case where an item component is not found...
    // which generally shouldn't ever happen.

  }, {
    key: "itemComponentsForEach",
    value: function itemComponentsForEach(callback) {
      var _this7 = this;

      this._items_.forEach(function (item, index) {
        // comp.props._key === item.key
        // comp.props.index === item.index === index
        var comp = _this7.getItemComponent(item.key);

        if (comp) {
          callback(comp);
        }
      });
    } // todo: bad function name... actually changing the "state" of this.items which ends up being the props of each item..., not the state of each of this.items

  }, {
    key: "itemsMapState",
    value: function itemsMapState(itemCallback) {
      this.setState(function (prev) {
        // may want to check that the return value is not undefined...
        // todo: i think this is mutating some stuff
        prev.items = prev.items.map(itemCallback);
        return prev;
      });
    } // call after deleting or re-ordering any items, followed by setState or forceUpdate

  }, {
    key: "itemsReIndex",
    value: function itemsReIndex() {
      var _this8 = this;

      // re-index remaining items
      this._items_.forEach(function (item, index) {
        _this8._items_[index].index = index; // this would do the same thing actually
        // item.index = index;
      });
    }
  }, {
    key: "handleEntriesSubmit",
    value: function handleEntriesSubmit(e) {
      var _this9 = this;

      e && e.preventDefault();
      var current = this._items_.length;
      var desired = parseInt(this.entriesUncontrolledInput.current.value || 0);
      console.log("Entries submit...", current, desired);

      if (current === desired) {
        // or should we just do nothing.. ?
        alert("Your order form already contains " + current + " entries."); // force update anyways, may act as a tool to "refresh" possible sync issues

        this.forceUpdate();
      } else if (current > desired) {
        var removeCount = current - desired;
        var entries = removeCount === 1 ? "entry" : removeCount + " entries";

        if (confirm("This action will result in deleting the last " + entries + ". Do you wish to continue?")) {
          // filter items
          this._items_ = this._items_.filter(function (item, index) {
            if (index >= desired) {
              if (_this9.itemComponents[item.key]) {
                delete _this9.itemComponents[item.key];
              }

              return false;
            }

            return true;
          });
          this.itemsReIndex();
          this.forceUpdate();
        } else {
          console.log("confirm cancel....... force update"); // reset the "entries" box

          this.forceUpdate();
        }
      } else if (current < desired) {
        var toAdd = desired - current;

        var _entries = toAdd === 1 ? "1 entry" : toAdd + " entries";

        this.itemAppend(toAdd);
        setTimeout(function () {
          alert(_entries + " added.");
        });
      }
    } // when a user hits "Go" with items selected an a bulk action selected

  }, {
    key: "handleBulkActionSubmit",
    value: function handleBulkActionSubmit() {
      var _this10 = this;

      switch (this.state.bulk_action) {
        case 'delete_selected':
          var countChecked = 0;

          if (confirm("All data for the selected items will be permanently lost, are you sure you wish to continue?")) {
            this._items_ = this._items_.filter(function (item) {
              if (item.checked) {
                countChecked++;

                if (_this10.itemComponents[item.key]) {
                  delete _this10.itemComponents[item.key];
                }

                return false;
              }

              return true;
            });
            this.itemsReIndex(); // force eventual update of items and bulk action

            this.setStateWithForcedNewState({
              bulk_action: ''
            });
          }

          if (!countChecked) {
            alert("No items were selected to be deleted.");
          }

          break;

        case 'expand_selected':
          this._items_.forEach(function (item) {
            if (item.checked && _this10.itemComponents[item.key]) {
              _this10.itemComponents[item.key].setState({
                open: true
              });
            }
          }); // force eventual update of items and bulk action


          this.setStateWithForcedNewState({
            bulk_action: ''
          });
          break;

        case 'collapse_selected':
          this._items_.forEach(function (item) {
            if (item.checked && _this10.itemComponents[item.key]) {
              _this10.itemComponents[item.key].setState({
                open: false
              });
            }
          }); // force eventual update of items and bulk action


          this.setStateWithForcedNewState({
            bulk_action: ''
          });
          break;

        default:
          alert("Invalid (or no) bulk action selected.");
          break;
      }
    }
  }, {
    key: "countChecked",
    value: function countChecked() {
      var ret = this._items_.reduce(function (result, item) {
        return result + (item.checked ? 1 : 0);
      }, 0);

      console.log("count checked", ret);
      return ret;
    } // unselect all items and set the action back to default.
    // in general we'll probably do this after processing a bulk action,
    // although there may come a time when we don't want to unselect items after
    // a bulk option has been applied to them.

  }, {
    key: "resetBulkAction",
    value: function resetBulkAction() {
      this.unSelectAllItems();
      this.setStateWithForcedNewState({
        bulk_action: ""
      });
    } // dont need to store the state of this checkbox, instead, it is checked
    // if at least 1 other item is checked

  }, {
    key: "handleBulkSelectCheckboxChange",
    value: function handleBulkSelectCheckboxChange(e) {
      var _this11 = this;

      if (this._items_.length < 1) {
        return;
      } // the value after the click did its thing


      var isNowChecked = e.target.checked; // let countChecked = this.countChecked();
      // let countItems = this._items_.count;
      // if (countChecked === countItems) {}
      // if (countChecked < 1) {}

      if (isNowChecked) {
        if (true) {
          this._items_.forEach(function (item, index) {
            _this11._items_[index].checked = true;
          });

          this.forceUpdate();
        } else {}
      } else {
        if (true) {
          this._items_.forEach(function (item, index) {
            _this11._items_[index].checked = false;
          });

          this.forceUpdate();
        } else {}
      }
    }
  }, {
    key: "handleBulkImport",
    value: function handleBulkImport(rawData) {} // wrap up everything into a formData object (including attachments)

  }, {
    key: "assembleFormData",
    value: function assembleFormData() {
      var _this12 = this;

      var appendData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var formData = new FormData(); // ie submit_type = 'calculate_price' or 'checkout'

      for (var key in appendData) {
        if (appendData.hasOwnProperty(key)) {
          formData.append(key, appendData[key]);
        }
      }

      formData.append('format', this.state.format);

      this._items_.forEach(function (item, index) {
        // get component instance to access props/state
        var comp = _this12.getItemComponent(item.key);

        if (!comp) {
          console.error("Component not found for item", item, _this12.itemComponents);
          return;
        } // add a few props to state


        var _item = Object.assign({}, comp.state || {}, {
          key: item.key,
          index: index // aka item.index

        }); // custom vector file upload (depends on _item.key above)


        if (comp.getField('vector') === 'other') {
          var input = comp.vectorFile && comp.vectorFile.current;
          var file = input.files && input.files[0]; // in case of accidental re-indexing of numerically indexed array,
          // maybe we'll index the files by key instead.

          if (file) {
            formData.append('vector_files[' + _item.key + ']', file);
          }
        } // append to form data for regular fields, stored in state, using square bracket notation
        // we JSON encode this, but the server side will automatically identify this as a nested array


        for (var _key in _item) {
          if (_item.hasOwnProperty(_key)) {
            formData.append('items[' + index + '][' + _key + ']', _item[_key]);
          }
        }
      });

      return formData;
    } // send everything to server for validation and maybe price calculation

  }, {
    key: "sendToServer",
    value: function sendToServer(submitType) {
      var _this13 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var appendData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      console.log("SendToServer...", submitType, options, appendData); // probably its always a good idea to do this

      if (options.saveToSession || options.saveToSession === undefined) {
        this.saveSessionState();
      }

      var savedItemKey;

      switch (submitType) {
        case 'calculate_price':
          appendData.submit_type = 'calculate_price'; // pass in item key when clicking "save" on that item. we can choose to
          // not render the order summary if the given item still has errors after
          // all items are validated.

          savedItemKey = options.savedItemKey;
          break;

        case 'checkout':
          appendData.submit_type = 'checkout';
          break;

        default:
          console.error("Invalid submitType", submitType, options, appendData);
          alert("Unknown Error (submit type).");
          return;
      }

      appendData.ajax_action = 'order_form_submit';
      var formData = this.assembleFormData(appendData);
      var config = {
        // cookies ?
        useCredentials: true,
        // for files
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      console.log("Send to server", formData, config);
      this.setState({
        subtotal: null,
        serverResponse: {},
        errors: []
      });
      this.itemComponentsForEach(function (comp) {
        comp.setState({
          errors: [],
          price: null
        });
      });

      if (this.isLoading) {
        alert("Please wait a second while your current action finishes processing.");
        return;
      } else {
        this.isLoading = true;
      }

      axios.post(this.config.ajax_url, formData, config).then(function (response) {
        var data = response.data || {};
        console.log("Axios Response", data);
        var redirect = data.redirect || "";

        if (redirect) {
          window.location = redirect;
          return;
        }

        var errors = data.errors || [];
        var item_errors = data.item_errors || {};
        var item_prices = data.item_prices || {};
        var subtotal = data.subtotal || null; // we could choose to not switch back to order summary on a few conditions
        // 1. if a single item was saved but it still has errors
        // 2. if any items have errors
        // 3. if a single item was saved regardless of errors (the user has to hit calculate price again after correcting all errors)
        // might just go with number 3...
        // nevermind, lets do number 1.

        var savedItemExistsAndHasErrors = !!(savedItemKey && item_errors[savedItemKey]); // if the saved item has errors, we could make it open and all other items not, but it shouldn't
        // be necessary, as normally the item saved is the only open item anyways, and if there are
        // other open items, theres no reason to close them.

        _this13.itemComponentsForEach(function (comp) {
          var thisItemKey = comp.props._key;
          var errors = item_errors[thisItemKey] || [];
          var price = item_prices[thisItemKey] || null;
          console.log("Errors/Price", errors, price, comp);
          comp.setState({
            errors: errors,
            price: price
          });
        }); // if the OrderForm renders before each item component has its state updated,
        // then the receipt can incorrectly determine that no items have errors and
        // render incorrectly.
        // Calling setState on OrderForm after setState on all OrderFormItems *seems*
        // sufficient. However, will put this into a setTimeout just in case it makes any
        // difference at all. I don't know if react will respect the order of setState
        // calls across different components or not.


        _this13.isLoading = false;
        setTimeout(function () {
          _this13.setState({
            subtotal: subtotal,
            serverResponse: response.data || {},
            errors: errors,
            isOrderSummary: !savedItemExistsAndHasErrors
          });
        });
      })["catch"](function (error) {
        alert("An unknown error occurred.");
        console.error("Axios Error", error);
        _this13.isLoading = false;

        _this13.setState({
          serverResponse: {
            serverError: error
          }
        });
      });
    }
  }, {
    key: "onClickHandleBackToOrderForm",
    value: function onClickHandleBackToOrderForm(e) {
      var _this14 = this;

      this._items_.forEach(function (item, index) {
        _this14._items_[index].open = true; // if a user bothers to check an item thats fine let it stay that way
        // this._items_[index].checked = false;
      });

      this.setStateWithForcedNewState({
        isOrderSummary: false
      });
    }
  }, {
    key: "itemsHaveErrors",
    value: function itemsHaveErrors() {
      var ret = false;
      this.itemComponentsForEach(function (comp) {
        if (ret === false) {
          if (comp.state.errors && comp.state.errors.length > 0) {
            ret = true;
          }
        }
      });
      return ret;
    }
  }, {
    key: "toggleBulkImport",
    value: function toggleBulkImport() {
      this.bulkImportForm.current.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    }
  }, {
    key: "OrderSummarySidebar",
    value: function OrderSummarySidebar(props) {
      var _this15 = this;

      if (!this.state.isOrderSummary) {
        return null;
      }

      var _errors = []; // the server-side can inject errors here, but we may decide to add
      // errors to items only, and not also repeat a global "you have errors"
      // message. Therefore, we'll do a default one of those below.

      this.state.errors.forEach(function (error) {
        _errors.push(error);
      });

      if (_errors.length < 1 && this.itemsHaveErrors()) {
        _errors.push("Please fix all errors before proceeding to checkout.");
      }

      var hasErrors = _errors.length > 0;
      return React.createElement("div", {
        className: "order-form-sidebar sidebar-order-summary"
      }, React.createElement("div", {
        className: "sidebar-inner"
      }, React.createElement("p", {
        className: "title"
      }, "Order Summary"), React.createElement("table", {
        className: "gq-receipt"
      }, React.createElement("tr", null, React.createElement("td", null, "Subtotal"), React.createElement("td", null, this.state.subtotal ? "$" + this.state.subtotal : "TBD")), React.createElement("tr", null, React.createElement("td", null, "Tax"), React.createElement("td", null, "TBD")), React.createElement("tr", null, React.createElement("td", null, "Shipping"), React.createElement("td", null, "TBD")), React.createElement("tr", null, React.createElement("td", null, "Total"), React.createElement("td", null, "TBD"))), hasErrors && React.createElement("div", {
        className: "checkout-errors"
      }, _errors.map(function (error) {
        return React.createElement("p", null, error);
      })), !hasErrors && React.createElement("div", {
        className: "gq-btn btn-lg btn-orange gq-checkout"
      }, React.createElement("button", {
        onClick: function onClick(e) {
          _this15.sendToServer('checkout');
        }
      }, "Checkout"))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this16 = this;

      // todo: for now this works but we need to store in other cases also.
      console.log("Render OrderForm...");
      this.saveSessionState(); // order matters

      var itemsChanged = this.itemsChanged;
      this.itemsChanged = false; // just a test thing

      this.renderCount++; // on render except first render when .current is undefined

      if (this.entriesUncontrolledInput.current) {
        // not sure if this is considered bad practice as render() is having side effects,
        // but side effects to the DOM not react state or components
        this.entriesUncontrolledInput.current.value = this._items_.length || 0;
      }

      var countChecked = this.countChecked();
      var cls = "order-form";
      cls += this.state.isOrderSummary ? " is-order-summary has-sidebar" : " is-order-form";
      cls += this.addClass ? " " + this.addClass : "";
      console.time("OrderForm Render");
      var ret = React.createElement("div", {
        className: cls
      }, this.renderTests(), React.createElement("div", {
        className: "temp-response-data"
      }, React.createElement("p", null, "Temp response"), React.createElement("div", null, JSON.stringify(this.state.serverResponse))), React.createElement("div", {
        className: "order-form-header"
      }, React.createElement("div", {
        className: "left"
      }, React.createElement("h1", null, this.state.isOrderSummary ? "Order Summary" : "Gene Quote and Order Form"), React.createElement("p", {
        className: "left"
      }, "Trouble with ordering? Contact ", React.createElement("a", {
        href: "mail:gene@biobasic.com"
      }, "gene@biobasic.com"))), React.createElement("div", {
        className: "calc-price"
      }, this.state.isOrderSummary && React.createElement("div", {
        className: "gq-btn btn-lg btn-blue"
      }, React.createElement("button", {
        onClick: this.onClickHandleBackToOrderForm
      }, "Back to Order Form")), !this.state.isOrderSummary && React.createElement("div", {
        className: "gq-btn btn-lg btn-teal"
      }, React.createElement("button", {
        onClick: function onClick(e) {
          return _this16.sendToServer('calculate_price');
        }
      }, "Calculate Price")))), React.createElement("div", {
        className: "order-form-main"
      }, React.createElement(this.OrderSummarySidebar, null), React.createElement("div", {
        className: "order-form-controls"
      }, React.createElement("div", {
        className: "flex"
      }, React.createElement("div", {
        className: "bulk-actions"
      }, React.createElement("input", {
        title: "Select or De-select all",
        type: "checkbox",
        name: "bulk_select",
        value: "1",
        checked: countChecked > 0,
        onChange: this.handleBulkSelectCheckboxChange
      }), React.createElement("select", {
        className: countChecked > 0 ? 'active' : 'not-active',
        title: "Perform an action on all selected items",
        name: "bulk_action",
        id: "bulk_action",
        value: countChecked > 0 ? this.state.bulk_action : "",
        disabled: countChecked < 1,
        onChange: function onChange(e) {
          _this16.setState({
            bulk_action: e.target.value
          });
        }
      }, React.createElement("option", {
        value: ""
      }, "Action"), React.createElement("option", {
        value: "delete_selected"
      }, "Delete ", countChecked, " Item(s)"), !this.state.isOrderSummary && React.createElement("option", {
        value: "expand_selected"
      }, "Expand ", countChecked, " Item(s)"), !this.state.isOrderSummary && React.createElement("option", {
        value: "collapse_selected"
      }, "Collapse ", countChecked, " Item(s)")), React.createElement("div", {
        className: "gq-btn bulk-action-btn",
        style: this.state.bulk_action ? {} : {
          display: 'none'
        }
      }, React.createElement("button", {
        title: "Proceed with Bulk Action",
        onClick: this.handleBulkActionSubmit
      }, "Go"))), React.createElement("div", {
        className: "number-of-entries"
      }, this.state.isOrderSummary && React.createElement("p", {
        className: "count-genes"
      }, "Number of genes: ", this._items_.length), !this.state.isOrderSummary && React.createElement("label", {
        htmlFor: "gq_entries"
      }, "Number of entries: "), !this.state.isOrderSummary && React.createElement("div", {
        className: "input-wrapper"
      }, React.createElement("input", {
        className: this._items_.length > 90 ? 'width-lg' : '',
        defaultValue: this._items_.length,
        id: "gq_entries",
        type: "number",
        name: "entries",
        min: "0",
        step: "1",
        max: "999",
        onKeyPress: function onKeyPress(e) {
          console.log("KeyPress entries...", e, e.key);

          if (e.key === 'Enter') {
            // do not pass the event in
            _this16.handleEntriesSubmit();
          }
        },
        ref: this.entriesUncontrolledInput
      }), React.createElement("button", {
        className: "css-reset",
        onClick: this.handleEntriesSubmit
      }, "Ok"))), !this.state.isOrderSummary && React.createElement("div", {
        className: "format-select"
      }, React.createElement("label", {
        htmlFor: "gq-format"
      }, "Format: "), React.createElement("select", {
        name: "format",
        id: "gq-format",
        value: this.state.format,
        onChange: function onChange(e) {
          return _this16.setState({
            format: e.target.value
          });
        }
      }, window.geneQuotes.renderOptions(window.geneQuotes.getOptionGroup('format')))), this.state.isOrderSummary && React.createElement("div", {
        className: "format-display"
      }, React.createElement("p", null, "Format: ", window.geneQuotes.getOptionName('format', this.state.format))), !this.state.isOrderSummary && React.createElement("div", {
        className: "bulk-import"
      }, React.createElement("div", {
        className: "gq-btn btn-round btn-orange"
      }, React.createElement("button", {
        onClick: this.toggleBulkImport
      }, "bulk gene import"))))), React.createElement(_BulkImportForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
        ref: this.bulkImportForm,
        parent: this,
        isOpenOnMount: false,
        gene_synthesis_url: this.config.gene_synthesis_template_url,
        subcloning_url: this.config.subcloning_template_url,
        mutagenesis_url: this.config.mutagenesis_template_url
      }), this._items_.length > 0 && React.createElement(this.OrderFormItems, {
        items: this._items_ || [],
        isOrderSummary: this.state.isOrderSummary,
        itemsChanged: itemsChanged
      }), this._items_.length < 1 && React.createElement("div", {
        className: "order-form-items no-results"
      }, React.createElement("div", {
        className: "no-items"
      }, !this.state.isOrderSummary && React.createElement("p", null, "Your order form contains no items. ", React.createElement("a", {
        href: "#",
        onClick: function onClick(e) {
          e.preventDefault();

          _this16.itemAppend(1);
        }
      }, "Click here to add one.")), this.state.isOrderSummary && React.createElement("p", null, "Your order form contains no items. ", React.createElement("a", {
        href: "#",
        onClick: function onClick(e) {
          e.preventDefault();

          _this16.setState({
            isOrderSummary: false
          });
        }
      }, "Go back to the order form to add one."))))));
      console.timeEnd("OrderForm Render");
      return ret;
    }
  }]);

  return OrderForm;
}(React.Component);

/* harmony default export */ __webpack_exports__["default"] = (OrderForm);

/***/ }),

/***/ "./src/js/components/OrderFormItem.jsx":
/*!*********************************************!*\
  !*** ./src/js/components/OrderFormItem.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrderFormItem; });
/* harmony import */ var _Generic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Generic */ "./src/js/components/Generic.jsx");
/* harmony import */ var _Generic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Generic__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 *
 */

var OrderFormItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(OrderFormItem, _React$Component);

  function OrderFormItem(props) {
    var _this;

    _classCallCheck(this, OrderFormItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OrderFormItem).call(this, props)); // give access of this instantiated component to the OrderForm component

    _this.props.callbacks.registerViaKey(_this.props._key, _assertThisInitialized(_this));

    _this.setField = _this.setField.bind(_assertThisInitialized(_this));
    _this.getField = _this.getField.bind(_assertThisInitialized(_this));
    _this.renderOptions = _this.renderOptions.bind(_assertThisInitialized(_this));
    _this.getVectorOptionGroupName = _this.getVectorOptionGroupName.bind(_assertThisInitialized(_this));
    _this.scrollIntoView = _this.scrollIntoView.bind(_assertThisInitialized(_this));
    _this.filterDnaSequence = _this.filterDnaSequence.bind(_assertThisInitialized(_this));
    _this.filterProteinSequence = _this.filterProteinSequence.bind(_assertThisInitialized(_this));
    _this.InvalidCountFromString = _this.InvalidCountFromString.bind(_assertThisInitialized(_this));
    _this.onChangeBasic = _this.onChangeBasic.bind(_assertThisInitialized(_this));
    _this.onChangeCheckbox = _this.onChangeCheckbox.bind(_assertThisInitialized(_this));
    _this.onClickDeleteSelf = _this.onClickDeleteSelf.bind(_assertThisInitialized(_this));
    _this.onClickToggleSelf = _this.onClickToggleSelf.bind(_assertThisInitialized(_this));
    _this.onClickClearSelf = _this.onClickClearSelf.bind(_assertThisInitialized(_this));
    _this.onClickEditSelf = _this.onClickEditSelf.bind(_assertThisInitialized(_this));
    _this.Label = _this.Label.bind(_assertThisInitialized(_this));
    _this.Checkbox = _this.Checkbox.bind(_assertThisInitialized(_this));
    _this.Input = _this.Input.bind(_assertThisInitialized(_this));
    _this.Textarea = _this.Textarea.bind(_assertThisInitialized(_this));
    _this.TextareaPlus = _this.TextareaPlus.bind(_assertThisInitialized(_this));
    _this.getButton = _this.getButton.bind(_assertThisInitialized(_this));
    _this.renderErrors = _this.renderErrors.bind(_assertThisInitialized(_this));
    _this.initMemoComponents = _this.initMemoComponents.bind(_assertThisInitialized(_this));
    _this.getOptionName = window.geneQuotes.getOptionName.bind(window.geneQuotes);
    _this.getOptionGroup = window.geneQuotes.getOptionGroup.bind(window.geneQuotes);
    _this.getOptionFirst = window.geneQuotes.getOptionFirst.bind(window.geneQuotes);
    _this.optionValueExists = window.geneQuotes.optionValueExists.bind(window.geneQuotes);
    _this.memos = {};
    _this.state = _this.getInitialState();
    console.log("On construct initial state...", _this.state);

    _this.initMemoComponents();

    _this.test = {
      render: 0,
      didUpdate: 0
    }; // setField sets this to true. adds optimization shouldComponentUpdate.

    _this.fieldWasSet = false;
    _this.domNode = React.createRef();
    _this.vectorFile = React.createRef();
    _this.regex = {};
    _this.regex.whiteSpace = /[\s]{1,}/;
    _this.regex.stopAndAfter = /[s][t][o][p][\s\S]{0,}/gi;
    _this.regex.notACGT = /[^ACGT]/gi;
    _this.regex.notValidProteinSequence = /[^ARNDCEQGHILKMFPSTWYV*-]/gi; // this has some annoying line break issues unfortunately.
    // if changing this, you may need to check server side code which repeats this value.

    _this.invalidReplacementCharacter = ''; // gives "this" addTest and renderTests methods.

    _Generic__WEBPACK_IMPORTED_MODULE_0___default.a.provideTests(_assertThisInitialized(_this));

    _this.addTest("Set Many Fields", function () {
      _this.setField('testField1', 'testValue1');

      _this.setField('testField1', 'testValue1a');

      _this.setField('testField1', 'testValue1b');

      _this.setField('testField2', 'testValue2');

      _this.setField('testField3', 'testValue3');

      _this.setField('testField4', 'testValue4');
    });

    _this.addTest("Dump", function () {
      console.log("Dump", _assertThisInitialized(_this));
    });

    _this.addTest("Update", function () {
      _this.forceUpdate();
    });

    _this.addTest("Random State", function () {
      _this.setState({
        random: Math.random()
      });
    });

    _this.addTest("Change Test Input State", function () {
      _this.setState({
        testInput: Math.random()
      });
    });

    _this.addTest("Redundant State", function () {
      _this.setState({});
    });

    return _this;
  } // init memo components using arrow functions so that they still have
  // access to "this" without being provided it in props.
  // this also means that if we un-memo some components, we shouldn't
  // have to change much or anything at all in the render body.
  //
  // Breaking each order form item into something like 10 memo components
  // was not desirable, but was a necessary performance optimization.
  // In most cases, we ignore props passed into the components, and reference "this"
  // directly instead, which is in a way, breaking the rules, but unfortunately, I see
  // no other reasonable way. It would be enormously repetitive to pass in every single
  // prop directly in props and achieve literally nothing. Instead, we manually declare
  // the dependencies in props.dependency_{int}, when those props change, the component
  // will re-render.


  _createClass(OrderFormItem, [{
    key: "initMemoComponents",
    value: function initMemoComponents() {
      var _this2 = this;

      this.memos.ItemHeader = React.memo(function (props) {
        return React.createElement("div", {
          className: "item-header"
        }, React.createElement("div", {
          className: "item-header-left"
        }, _this2.Checkbox({
          name: 'checked',
          value: '1',
          checked: _this2.props.checked,
          onChange: function onChange(e) {
            _this2.props.callbacks.setChecked(_this2.props.index, e.target.checked);
          }
        }), !_this2.props.isOrderSummary && React.createElement("div", {
          className: "name"
        }, React.createElement(_this2.Label, {
          name: "gene_name"
        }, _this2.props.index + 1, "."), React.createElement(_this2.Input, {
          name: "gene_name",
          title: "Gene Name",
          placeholder: "Gene Name"
        })), _this2.props.isOrderSummary && React.createElement("p", {
          className: "name-static"
        }, React.createElement("span", {
          className: "number"
        }, _this2.props.index + 1, ". "), React.createElement("span", {
          className: "value"
        }, _this2.getField('gene_name') || "____________")), _this2.props.isOrderSummary && React.createElement("p", {
          className: "price"
        }, React.createElement("span", {
          className: "price-label"
        }, "Price: "), React.createElement("span", {
          className: "price-value"
        }, _this2.state.price ? "$" + _this2.state.price : "TBD")), !_this2.props.isOrderSummary && _this2.state.errors.length > 0 && React.createElement("p", {
          className: "errors-notice"
        }, _this2.state.errors.length, " Errors Found")), React.createElement("div", {
          className: "item-header-right"
        }, !_this2.props.isOrderSummary && React.createElement("button", {
          title: "Toggle",
          className: "css-reset control control-collapse" + (_this2.getField('open') && ' rotated'),
          onClick: _this2.onClickToggleSelf
        }, React.createElement("img", {
          src: "./assets/fa-png/chevron-down.png",
          alt: ""
        })), !_this2.props.isOrderSummary && React.createElement("button", {
          title: "Reset",
          className: "css-reset control control-clear",
          onClick: _this2.onClickClearSelf
        }, React.createElement("img", {
          src: "./assets/fa-png/eraser.png",
          alt: ""
        })), _this2.props.isOrderSummary && React.createElement("button", {
          title: "Edit",
          className: "css-reset control control-edit",
          onClick: _this2.onClickEditSelf
        }, React.createElement("img", {
          src: "./assets/fa-png/edit.png",
          alt: ""
        })), React.createElement("button", {
          title: "Delete",
          className: "css-reset control control-delete",
          onClick: _this2.onClickDeleteSelf
        }, React.createElement("img", {
          src: "./assets/fa-png/trash-o.png",
          alt: ""
        }))));
      });
      this.memos.SequenceAndServiceTypeWrapper = React.memo(function (props) {
        return React.createElement(React.Fragment, null, React.createElement("div", {
          className: "wrapper sequence-type"
        }, React.createElement("p", {
          className: "label"
        }, "Sequence Type"), React.createElement("div", {
          className: "options"
        }, _this2.getButton('sequence_type', 'dna', _this2.getOptionName('sequence_type', 'dna')), _this2.getButton('sequence_type', 'protein', _this2.getOptionName('sequence_type', 'protein'), _this2.getField('service_type') !== 'gene_synthesis'))), React.createElement("div", {
          className: "wrapper service-type"
        }, React.createElement("p", {
          className: "label"
        }, "Service Type"), React.createElement("div", {
          className: "options"
        }, _this2.getButton('service_type', 'gene_synthesis', _this2.getOptionName('service_type', 'gene_synthesis')), _this2.getButton('service_type', 'subcloning', _this2.getOptionName('service_type', 'subcloning')), _this2.getButton('service_type', 'mutagenesis', _this2.getOptionName('service_type', 'mutagenesis')))));
      });
      this.memos.GeneSynthesisDnaWrapper = React.memo(function (props) {
        return React.createElement("div", {
          className: "wrapper sequence service-type-gene-synthesis sequence-type-dna"
        }, React.createElement(_this2.TextareaPlus, {
          doInvalid: true,
          doLength: true,
          lengthLabel: "Length (DNA bases):",
          name: "dna_sequence",
          label: React.createElement("strong", null, "Sequence")
        }));
      });
      this.memos.GeneSynthesisProteinWrapper = React.memo(function (props) {
        return React.createElement("div", {
          className: "wrapper sequence svt-gene-synthesis sqt-protein"
        }, React.createElement("div", {
          className: "sub-wrapper optional-5"
        }, React.createElement("label", {
          htmlFor: _this2.getHtmlId('protein_5_flanking_sequence')
        }, "optional - 5\" Flanking sequence: "), React.createElement(_this2.Input, {
          name: "protein_5_flanking_sequence"
        }), _this2.state.open && _this2.InvalidCountFromString(_this2.getField('protein_5_flanking_sequence'))), React.createElement(_this2.TextareaPlus, {
          doInvalid: true,
          doLength: false,
          name: "protein_sequence",
          title: "Enter protein sequence here",
          placeholder: "Enter protein sequence here"
        }), React.createElement("div", {
          className: "sub-wrapper optional-3"
        }, React.createElement("label", {
          htmlFor: _this2.getHtmlId('protein_3_flanking_sequence')
        }, "optional - 3\" Flanking sequence: "), React.createElement(_this2.Input, {
          name: "protein_3_flanking_sequence"
        }), _this2.InvalidCountFromString(_this2.getField('protein_3_flanking_sequence')), React.createElement("div", {
          className: "length"
        }, "Length (DNA bases):", " ", React.createElement("strong", null, _this2.state.open && _this2.getProteinTotalLength()))));
      });
      this.memos.SubcloningSequenceTargetGene = React.memo(function (props) {
        return React.createElement(_this2.TextareaPlus, {
          doInvalid: true,
          doLength: true,
          name: "subcloning_sequence_target_gene",
          label: React.createElement(React.Fragment, null, React.createElement("strong", {
            className: "td-underline"
          }, "Target Gene Sequence"), " (gene of interest only - without plasmid)")
        });
      });
      this.memos.SubcloningSequenceSourcePlasmid = React.memo(function (props) {
        return React.createElement(_this2.TextareaPlus, {
          doInvalid: true,
          doLength: true,
          name: "subcloning_sequence_source_plasmid",
          label: React.createElement(React.Fragment, null, React.createElement("strong", {
            className: "td-underline"
          }, "Source"), " ", React.createElement("strong", null, "Plasmid"), " (or DNA fragment) ", React.createElement("strong", null, "+ Target Gene Sequence"))
        });
      });
      this.memos.SubcloningSequenceFinalPlasmid = React.memo(function (props) {
        return React.createElement(_this2.TextareaPlus, {
          doInvalid: true,
          doLength: true,
          name: "subcloning_sequence_final_plasmid",
          label: React.createElement(React.Fragment, null, React.createElement("strong", {
            className: "td-underline"
          }, "Final"), " ", React.createElement("strong", null, "Plasmid + Target Gene Sequence"), " (sequence of target gene in final plasmid)")
        });
      });
      this.memos.MutagenesisSequenceFinal = React.memo(function (props) {
        return React.createElement(_this2.TextareaPlus, {
          doInvalid: true,
          doLength: true,
          name: "mutagenesis_sequence_final",
          label: React.createElement(React.Fragment, null, React.createElement("strong", {
            className: "td-underline"
          }, "Final"), " ", React.createElement("strong", null, "Mutant Sequence"), " (including plasmid if applicable)")
        });
      });
      this.memos.MutagenesisSequenceTemplate = React.memo(function (props) {
        return React.createElement(_this2.TextareaPlus, {
          doInvalid: true,
          doLength: true,
          name: "mutagenesis_sequence_template",
          label: React.createElement(React.Fragment, null, React.createElement("strong", {
            className: "td-underline"
          }, "Template"), " ", React.createElement("strong", null, "Sequence (WT)"))
        });
      }); // may be more expensive than it looks due to getting <select> options

      this.memos.MutationsSubWrapper = React.memo(function (props) {
        var active = _this2.getField('service_type') === 'mutagenesis';
        return React.createElement("div", {
          className: "sub-wrapper mutations",
          title: active ? '' : 'For Mutagenesis Only'
        }, React.createElement("label", {
          htmlFor: _this2.getHtmlId('mutations')
        }, "Number of Mutations (or deletions)"), React.createElement("select", {
          name: "mutations",
          value: _this2.getField('mutations') || "",
          onChange: _this2.onChangeBasic,
          disabled: active ? "" : "disabled"
        }, _this2.renderOptions('mutations')));
      });
      this.memos.DeliveryTypeWrapper = React.memo(function (props) {
        return React.createElement("div", {
          className: "wrapper delivery-type"
        }, React.createElement("label", null, "Delivery Type"), _this2.Checkbox({
          name: "delivery_lyophilized",
          wrapperProps: {
            title: "This delivery type is required."
          },
          id: _this2.getHtmlId('delivery_lyophilized'),
          checked: true,
          disabled: true,
          label: _this2.getOptionName('delivery_type', 'delivery_lyophilized'),
          onChange: _this2.onChangeCheckbox
        }), _this2.Checkbox({
          name: "delivery_glycerol",
          id: _this2.getHtmlId('delivery_glycerol'),
          checked: _this2.getField('delivery_glycerol') === "1",
          label: _this2.getOptionName('delivery_type', 'delivery_glycerol'),
          onChange: function onChange(e) {
            if (e.target.checked) {
              _this2.setField('delivery_buffer', false);

              _this2.setField('delivery_glycerol', "1");
            } else {
              _this2.setField('delivery_glycerol', false);
            }
          }
        }), _this2.Checkbox({
          name: "delivery_buffer",
          id: _this2.getHtmlId('delivery_buffer'),
          checked: _this2.getField('delivery_buffer') === "1",
          label: _this2.getOptionName('delivery_type', 'delivery_buffer'),
          value: "1",
          onChange: function onChange(e) {
            if (e.target.checked) {
              _this2.setField('delivery_glycerol', false);

              _this2.setField('delivery_buffer', "1");
            } else {
              _this2.setField('delivery_buffer', false);
            }
          }
        }));
      });
      this.memos.DeliverySubWrapper = React.memo(function (props) {
        return React.createElement("div", {
          className: "sub-wrapper delivery-amount"
        }, React.createElement("label", {
          htmlFor: _this2.getHtmlId('delivery_amount')
        }, "Delivery Amount"), React.createElement("select", {
          name: "delivery_amount",
          value: _this2.getField('delivery_amount') || "",
          onChange: _this2.onChangeBasic
        }, _this2.renderOptions('delivery_amount')));
      });
      this.memos.KozakSequenceWrapper = React.memo(function (props) {
        var allow_optimize_and_kozak = props.allow_optimize_and_kozak;
        return React.createElement("div", {
          className: "wrapper inline add-kozak-sequence" + (allow_optimize_and_kozak ? "" : " disabled"),
          title: allow_optimize_and_kozak ? "" : "Does not apply when service type is Mutagenesis"
        }, React.createElement("div", {
          className: "sub-wrapper"
        }, React.createElement("p", {
          className: "label"
        }, "Add Kozak Sequence?"), React.createElement("div", {
          className: "options"
        }, _this2.Checkbox({
          label: 'Yes',
          name: 'add_kozak_sequence',
          checked: allow_optimize_and_kozak && _this2.getField('add_kozak_sequence') === 'yes',
          disabled: allow_optimize_and_kozak === false,
          value: 'yes'
        }), _this2.Checkbox({
          label: 'No',
          name: 'add_kozak_sequence',
          checked: allow_optimize_and_kozak === false || _this2.getField('add_kozak_sequence') === 'no',
          disabled: allow_optimize_and_kozak === false,
          value: 'no'
        }))), React.createElement("div", {
          className: "sub-wrapper"
        }, React.createElement("label", {
          htmlFor: _this2.getHtmlId('kozak_sequence')
        }, "If Yes, Sequence?"), React.createElement(_this2.Input, {
          name: "kozak_sequence",
          value: allow_optimize_and_kozak ? _this2.getField("kozak_sequence") : "",
          placeholder: "Enter Kozak Sequence",
          disabled: allow_optimize_and_kozak === false || _this2.getField('add_kozak_sequence') !== 'yes'
        })));
      });
      this.memos.OptimizeSequenceWrapper = React.memo(function (props) {
        var allow_optimize_and_kozak = props.allow_optimize_and_kozak;
        return React.createElement("div", {
          className: "wrapper inline optimize-sequence" + (allow_optimize_and_kozak ? "" : " disabled"),
          title: allow_optimize_and_kozak ? "" : "Does not apply when service type is Mutagenesis"
        }, React.createElement("div", {
          className: "sub-wrapper"
        }, React.createElement("p", {
          className: "label"
        }, "Optimize Sequence?"), React.createElement("div", {
          className: "options"
        }, _this2.Checkbox({
          label: 'Yes',
          name: 'optimize_sequence',
          checked: allow_optimize_and_kozak && _this2.getField('optimize_sequence') === 'yes',
          disabled: allow_optimize_and_kozak === false,
          value: 'yes'
        }), _this2.Checkbox({
          label: 'No',
          name: 'optimize_sequence',
          checked: allow_optimize_and_kozak === false || _this2.getField('optimize_sequence') === 'no',
          disabled: allow_optimize_and_kozak === false,
          value: 'no'
        }))), React.createElement("div", {
          className: "sub-wrapper for-expression-system"
        }, React.createElement("label", {
          htmlFor: _this2.getHtmlId('expression_system')
        }, "If Yes, Expression System?"), React.createElement(_this2.Input, {
          name: "expression_system",
          value: allow_optimize_and_kozak ? _this2.getField("expression_system") : "",
          placeholder: "Enter Intended Expression System",
          disabled: allow_optimize_and_kozak === false || _this2.getField('optimize_sequence') !== 'yes'
        })), React.createElement("div", {
          className: "sub-wrapper for-restriction-sites"
        }, React.createElement("label", {
          htmlFor: _this2.getHtmlId('restriction_sites')
        }, "If Yes, Restriction Sites to avoid / maintain?"), React.createElement(_this2.Input, {
          name: "restriction_sites",
          value: allow_optimize_and_kozak ? _this2.getField("restriction_sites") : "",
          placeholder: "Enter restriction sites to avoid / maintain",
          disabled: allow_optimize_and_kozak === false || _this2.getField('optimize_sequence') !== 'yes'
        })));
      }); // may be more expensive than it looks due to getting 90+ <select> options

      this.memos.VectorWrapper = React.memo(function (props) {
        console.log("VectorWrapper Render...", props);

        var vector = _this2.getField('vector');

        var vector_other = vector === 'other'; // note: keep the file upload in the DOM when vector is not 'other'

        return React.createElement("div", {
          className: "wrapper vector"
        }, React.createElement("div", {
          className: "sub-wrapper vector-select"
        }, React.createElement("label", {
          htmlFor: _this2.getHtmlId('vector')
        }, "Vector"), React.createElement("select", {
          name: "vector",
          value: vector || "",
          onChange: _this2.onChangeBasic
        }, _this2.renderOptions(_this2.getVectorOptionGroupName(), "Choose a Vector"))), React.createElement("div", {
          className: "sub-wrapper vector-custom",
          style: vector_other ? {} : {
            display: "none"
          }
        }, vector_other && React.createElement(React.Fragment, null, React.createElement("p", {
          className: "msg"
        }, React.createElement("em", null, "Select vector above or enter vector details and attach vector sequence if not listed.")), React.createElement("div", {
          className: "text-items"
        }, React.createElement("div", {
          className: "item"
        }, React.createElement(_this2.Input, {
          name: "vector_name",
          placeholder: "Vector Name",
          title: "Vector Name"
        })), React.createElement("div", {
          className: "item"
        }, React.createElement(_this2.Input, {
          name: "vector_antibiotic_resistance",
          placeholder: "Antibiotic Resistance",
          title: "Antibiotic Resistance"
        })), React.createElement("div", {
          className: "item"
        }, React.createElement(_this2.Input, {
          name: "vector_growth_conditions",
          placeholder: "Growth Conditions",
          title: "Growth Conditions"
        })))), React.createElement("div", {
          className: "file-item"
        }, React.createElement("input", {
          type: "file",
          name: "vector_file",
          placeholder: "Attach Vector",
          title: "Attach Vector",
          ref: _this2.vectorFile
        }))));
      });
      this.memos.CloningSites = React.memo(function (props) {
        console.log("cloning sites render...", props);
        return React.createElement("div", {
          className: "wrapper cloning-sites"
        }, React.createElement("p", {
          className: "label"
        }, "Cloning sites / method"), React.createElement("table", {
          className: "sub-wrapper cloning-sites-table"
        }, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, React.createElement("label", {
          htmlFor: _this2.getHtmlId('cloning_sites_5')
        }, "5' Restriction Site")), React.createElement("td", null, React.createElement(_this2.Input, {
          name: "cloning_sites_5",
          placeholder: "default is blunt-end"
        }))), React.createElement("tr", null, React.createElement("td", null, React.createElement("label", {
          htmlFor: _this2.getHtmlId('cloning_sites_3')
        }, "3' Restriction Site")), React.createElement("td", null, React.createElement(_this2.Input, {
          name: "cloning_sites_3",
          placeholder: "default is blunt-end"
        }))))));
      }); // this is probably far to small to have any benefit from using memo,
      // but it's here, so i'm not going to move it. Pass in a hardcoded
      // value into props, so that it never changes, and only renders once.
      // I believe that when passing in no props, re-render will occur always.
      // alternatively, we could specify the 2nd parameter of React.memo, which
      // would be a function which always returns true.

      this.memos.addItemButtonWrapper = React.memo(function (props) {
        // todo: insertion should go after the clicked item not at the end of the list.
        return React.createElement("div", {
          className: "wrapper add-another"
        }, React.createElement("div", {
          className: "gq-btn color-orange"
        }, React.createElement("button", {
          onClick: _this2.props.callbacks.insert
        }, "Add Another")));
      });
    } // very necessary performance optimization. Part of this comes from the fact that
    // some values used in the render function of the component are passed down from the parent.
    // therefore when we do things like, set one component to have a status (prop) of checked,
    // the entire parent has to re-render, which includes re-rendering all components. This is
    // very expensive in general, but we achieve very significant performance boosts by instead
    // just comparing props and state and then possibly doing nothing. Therefore, with 50 form
    // items, when we check one box, we'll re-render one item, and run this function on the other
    // 49 items. Still a pretty absurd amount of work just to check a box, but again, much better than
    // before. In the specific case of checking the boxes, we could use uncontrolled inputs which
    // would solve this one issue, but there are many other times when the entire order form
    // has to re-render.

  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      // this is an optimization. If a field was set either with setField or with setState,
      // then eventually, we will figure that out and return true. But, if we used setField,
      // then we can return true immediately, without having to compare all props and state.
      if (this.fieldWasSet) {
        return true;
      } // nope, react actually doesn't expose this code to us and forces us to write our own
      // let ret = React.PureComponent.prototype.shouldComponentUpdate.call(this, nextProps, nextState );
      // most state changes will affect fieldWasSet, therefore, it may
      // be a tiny bt more efficient to compare props first, even though props do contain a lot of callback functions.


      if (!_Generic__WEBPACK_IMPORTED_MODULE_0___default.a.shallowCompare(nextProps, this.props)) {
        return true;
      } // now compare state...


      if (!_Generic__WEBPACK_IMPORTED_MODULE_0___default.a.shallowCompare(nextState, this.state)) {
        return true;
      } // lastly, errors are nested in state, so its important that we account for this here,
      // otherwise, adjusting errors will not result in updating the component


      if (!_Generic__WEBPACK_IMPORTED_MODULE_0___default.a.shallowCompare(nextState.errors, this.state.errors)) {
        return true;
      } // trying to see if/when we did all the work above when changing state in OrderForm
      // a.k.a why are react keys not working as I thought they would?


      console.log("Component should not update...");
      return false;
    } // kind of cheating and using this as "get derived state from state", so that in some cases
    // we can blindly set state to something invalid, and this should sort of validate it.
    // the downside is that this method is static so we wont have access to some methods.

  }, {
    key: "renderOptions",
    // references global config and returns <options>'s
    value: function renderOptions(groupName, placeholder) {
      return window.geneQuotes.renderOptions(this.getOptionGroup(groupName), placeholder);
    } // gets the option group name used to populate vector dropdown list with options, which
    // change based on service type. the values below must correspond to values used
    // in the server-side config.

  }, {
    key: "getVectorOptionGroupName",
    value: function getVectorOptionGroupName() {
      var service_type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (service_type === null) {
        service_type = this.getField('service_type');
      }

      switch (service_type) {
        case 'gene_synthesis':
          return 'vector_gene_synthesis';

        case 'subcloning':
          return 'vector_subcloning';

        case 'mutagenesis':
          return 'vector_mutagenesis';

        default:
          return null;
      }
    } // jQueryTextAreaHighlight() {
    //     let test = $('#' + this.getHtmlId('protein_sequence'));
    //     if (test.length > 0) {
    //         test.highlightWithinTextarea({
    //             highlight: [
    //                 'stop',
    //             ]
    //         });
    //     }
    // }

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // this.jQueryTextAreaHighlight.apply(this);
      // for bulk import possibly
      if (this.props.onMount) {
        this.props.onMount(this);
      } // might be better to use this for bulk import ?


      if (this.props.initialState) {
        this.setState(this.props.initialState);
      }
    } // need function not a variable so we can return to initial state on clear.
    // a variable may get mutated..

  }, {
    key: "getInitialState",
    value: function getInitialState() {
      var initialServiceType = 'gene_synthesis';
      return {
        open: true,
        sequence_type: 'protein',
        service_type: initialServiceType,
        optimize_sequence: 'no',
        add_kozak_sequence: 'no',
        delivery_lyophilized: true,
        errors: [],
        price: null,
        vector: this.getOptionFirst(this.getVectorOptionGroupName(initialServiceType)),
        mutations: this.getOptionFirst('mutations'),
        delivery_amount: this.getOptionFirst('delivery_amount'),
        protein_sequence: ""
      };
    }
  }, {
    key: "resetState",
    value: function resetState() {
      var _this3 = this;

      this.setState(function (prevState) {
        var newState = {}; // can't simply omit the keys we want to removed. setState will never remove anything,
        // instead, we have to provide them with a value of undefined.

        Object.keys(prevState).map(function (key) {
          newState[key] = undefined;
        });
        newState = Object.assign({}, newState, _this3.getInitialState());
        console.log("Reset...", newState); // object containing all keys in current and initial state

        return newState;
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // re-validate vector options if service type changed
      if (prevState.service_type !== this.state.service_type) {
        // console.log("Check vectors...", prevState.service_type, this.state.service_type);
        // most likely different service types will have the same vector options
        if (!this.optionValueExists(this.getVectorOptionGroupName(), this.state.vector)) {
          // console.log("Vector option not valid", this.state.vector, this.getOptionGroup(this.getVectorOptionGroupName()));
          this.setState({
            vector: this.getOptionFirst(this.getVectorOptionGroupName())
          });
        }
      }
    }
  }, {
    key: "getField",
    value: function getField(name, fromState) {
      // allow fromState to be {} although I don't anticipate ever needing this.
      return fromState !== undefined ? fromState[name] : this.state[name];
    }
  }, {
    key: "filterProteinSequence",
    value: function filterProteinSequence(sequence) {
      if (!sequence) {
        return '';
      } // order is pretty important


      sequence = sequence.replace(this.regex.whiteSpace, "", sequence);
      sequence = sequence.replace(this.regex.stopAndAfter, "", sequence);
      sequence = sequence.replace(this.regex.notValidProteinSequence, this.invalidReplacementCharacter, sequence);
      return sequence;
    }
  }, {
    key: "filterDnaSequence",
    value: function filterDnaSequence(sequence) {
      if (!sequence) {
        return '';
      } // order is pretty important


      sequence = sequence.replace(this.regex.whiteSpace, "", sequence); // I think that only protein sequences are likely to contain the word stop.
      // todo: confirm what to do about 'stop' here
      // sequence = sequence.replace( this.regex.stopAndAfter, "", sequence );

      sequence = sequence.replace(this.regex.notACGT, this.invalidReplacementCharacter, sequence);
      return sequence;
    }
  }, {
    key: "getStrlen",
    value: function getStrlen(str) {
      var filterInvalid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!str) {
        return 0;
      }

      if (filterInvalid && str.length > 0) {
        str = str.replace(new RegExp("[" + this.invalidReplacementCharacter + "]", 'gi'), "", str);
      } // console.log('getStrlen', value, str, filterInvalid, str.length );


      return str.length;
    } // checks 3 fields to compute total length with special rules

  }, {
    key: "getProteinTotalLength",
    value: function getProteinTotalLength() {
      var len = 0; // todo: depending on rules for "stop" we may need to re-ensure this calculation is correct.
      // ...for example, if we somehow accomplish the miracle of adding spans around invalid characters
      // rather than using a single invalid character replacement.

      len += this.getStrlen(this.getField('protein_5_flanking_sequence'), true);
      len += this.getStrlen(this.getField('protein_3_flanking_sequence'), true);
      len += 3 * this.getStrlen(this.getField('protein_sequence'), true);
      return len;
    } // callback not optional

  }, {
    key: "filterField",
    value: function filterField(name, value, then) {
      then = then || function (v) {
        return v;
      };

      switch (name) {
        case 'protein_sequence':
          return then(this.filterProteinSequence(value));
          break;

        case 'dna_sequence':
        case 'protein_5_flanking_sequence':
        case 'protein_3_flanking_sequence':
        case 'subcloning_sequence_target_gene':
        case 'subcloning_sequence_source_plasmid':
        case 'subcloning_sequence_final_plasmid':
        case 'mutagenesis_sequence_template':
        case 'mutagenesis_sequence_final':
          return then(this.filterDnaSequence(value));
          break;

        default:
          return then(value);
      }
    }
  }, {
    key: "setField",
    value: function setField(name, value) {
      var _this4 = this;

      this.fieldWasSet = true;
      this.filterField(name, value, function (filteredValue) {
        _this4.setState(_defineProperty({}, name, filteredValue));
      });
    }
  }, {
    key: "onChangeCheckbox",
    value: function onChangeCheckbox(e) {
      this.setField(e.target.name, e.target.checked ? e.target.value : false);
    }
  }, {
    key: "onChangeBasic",
    value: function onChangeBasic(e) {
      this.setField(e.target.name, e.target.value);
    }
  }, {
    key: "getNameAndValue",
    // undefined default value will not clear inputs after resetting the form...
    value: function getNameAndValue(name, defaultValue) {
      defaultValue = defaultValue === undefined ? "" : defaultValue;
      return {
        name: name,
        value: this.getField(name) || defaultValue
      };
    }
  }, {
    key: "getHtmlId",
    value: function getHtmlId(name) {
      return name + "" + this.props._key;
    }
  }, {
    key: "onClickDeleteSelf",
    value: function onClickDeleteSelf(e) {
      // prevent possible form submission
      if (e) {
        e.preventDefault();
      }

      if (confirm("Are you sure you want to delete this entry?")) {
        this.props.callbacks.deleteViaKey(this.props._key);
      }
    }
  }, {
    key: "onClickEditSelf",
    value: function onClickEditSelf(e) {
      e && e.preventDefault(); // tell the parent to handle editing this item

      this.props.callbacks.editViaKey(this.props._key);
    }
  }, {
    key: "onClickClearSelf",
    value: function onClickClearSelf(e) {
      // prevent possible form submission
      if (e) {
        e.preventDefault();
      }

      if (confirm("Are you sure you want to reset this entry?")) {
        this.resetState();
      }
    }
  }, {
    key: "onClickToggleSelf",
    value: function onClickToggleSelf(e) {
      // prevent possible form submission
      if (e) {
        e.preventDefault();
      }

      this.setState(function (prev) {
        return {
          open: !prev.open
        };
      });
    }
  }, {
    key: "getButton",
    value: function getButton(name, value, text, disabled) {
      var _this5 = this;

      var cls = 'gq-btn';

      var onClick = function onClick(e) {
        if (!disabled) {
          _this5.setField(name, value);
        }
      };

      var checked = this.getField(name) === value;
      cls += checked ? ' active' : '';
      cls += disabled ? ' disabled' : '';
      return React.createElement("div", {
        key: value,
        className: cls
      }, React.createElement("button", {
        onClick: onClick
      }, text));
    }
  }, {
    key: "InvalidCountFromString",
    // shows the length of string and possibly the number of "invalid replacement characters" and
    value: function InvalidCountFromString(value) {
      var lengthRaw = this.getStrlen(value, false);
      var lengthFiltered = this.getStrlen(value, true);
      var invalidCount = parseInt(lengthRaw - lengthFiltered);
      var invalidChar = this.invalidReplacementCharacter; // console.log("InvalidCountFromString", lengthRaw, lengthFiltered, invalidCount );

      return this.constructor.InvalidCountFromProps({
        count: invalidCount,
        "char": invalidChar
      });
    }
  }, {
    key: "TextareaPlus",
    // prints label, textarea, possibly invalid count error, and possibly the length of the value,
    value: function TextareaPlus(_ref2) {
      var _this6 = this;

      var label = _ref2.label,
          doLength = _ref2.doLength,
          doInvalid = _ref2.doInvalid,
          lengthLabel = _ref2.lengthLabel,
          props = _objectWithoutProperties(_ref2, ["label", "doLength", "doInvalid", "lengthLabel"]);

      var value = this.getField(props.name); // apparently, lengthLabel is not defined by default in function below ... ?

      var _lengthLabel = lengthLabel;

      var length = doLength && function () {
        var lengthFiltered = _this6.getStrlen(value, true);

        var _lengthLabel = _lengthLabel || "Length:";

        return React.createElement("div", {
          className: "length"
        }, _lengthLabel, " ", React.createElement("strong", null, lengthFiltered));
      }();

      var cls = "sub-wrapper " + "for-" + props.name;
      return React.createElement("div", {
        className: cls
      }, label && React.createElement(this.Label, {
        name: props.name
      }, label), React.createElement(this.Textarea, _extends({
        id: this.getHtmlId(props.name)
      }, props)), doInvalid && this.InvalidCountFromString(value), length || "");
    } // outputs <label htmlFor={this.getHtmlId( props.name )} />
    // but you can just write <this.Label name="" />
    // is it worth it? probably not.

  }, {
    key: "Label",
    value: function Label(_ref3) {
      var name = _ref3.name,
          children = _ref3.children,
          props = _objectWithoutProperties(_ref3, ["name", "children"]);

      var p = Object.assign({}, props, {
        htmlFor: typeof props.htmlFor !== 'undefined' ? props.htmlFor : this.getHtmlId(name)
      });
      return React.createElement("label", p, children);
    } // prints div containing label and input type checkbox

  }, {
    key: "Checkbox",
    value: function Checkbox(_ref4) {
      var disabled = _ref4.disabled,
          wrapperProps = _ref4.wrapperProps,
          label = _ref4.label,
          props = _objectWithoutProperties(_ref4, ["disabled", "wrapperProps", "label"]);

      wrapperProps = wrapperProps || {};
      var value = props.value || "1";
      var p = Object.assign({}, props, {
        id: props.id || this.getHtmlId(props.name) + "_" + value,
        checked: typeof props.checked !== 'undefined' ? props.checked : props.value && this.getField(props.name) === props.value,
        value: value,
        onChange: props.onChange || this.onChangeCheckbox,
        type: props.type || 'checkbox'
      });
      var cls = 'gq-checkbox';
      cls += p.inline ? ' inline' : '';
      cls += p.checked ? ' checked' : '';
      cls += disabled ? ' disabled' : '';
      return React.createElement("div", _extends({
        className: cls
      }, wrapperProps), React.createElement("input", p), label && React.createElement("label", {
        htmlFor: p.id
      }, label));
    } // just a textarea

  }, {
    key: "Textarea",
    value: function Textarea(props) {
      var p = Object.assign({}, props, {
        id: props.id || this.getHtmlId(props.name),
        onChange: props.onChange || this.onChangeBasic,
        value: typeof props.value === 'undefined' ? this.getField(props.name) : props.value
      }); // if we don't do this, we cannot easily clear the field

      p.value = p.value || "";
      return React.createElement("textarea", p);
    }
  }, {
    key: "Input",
    // just an input
    value: function Input(_ref5) {
      var _ref = _ref5._ref,
          props = _objectWithoutProperties(_ref5, ["_ref"]);

      var p = Object.assign({}, props, {
        id: props.id || this.getHtmlId(props.name),
        type: props.type || 'text',
        onChange: props.onChange || this.onChangeBasic,
        value: typeof props.value !== 'undefined' ? props.value : this.getField(props.name)
      });

      if (_ref) {
        p.ref = _ref;
      }

      return React.createElement("input", p);
    }
  }, {
    key: "scrollIntoView",
    value: function scrollIntoView() {
      this.domNode.scrollIntoView();
    }
  }, {
    key: "renderErrors",
    value: function renderErrors() {
      var _this7 = this;

      // maybe return nothing instead of printing a hidden div
      if (this.state.errors.length < 1) {
        return;
      }

      return React.createElement("div", {
        className: "item-errors",
        style: this.state.errors.length > 0 ? {} : {
          display: "none"
        }
      }, React.createElement("div", {
        className: "item-errors-inner"
      }, this.state.errors.map(function (error) {
        return React.createElement("p", null, error);
      })), React.createElement("p", {
        className: "item-errors-extra"
      }, this.props.isOrderSummary && React.createElement("button", {
        className: "css-reset fix-errors",
        onClick: this.onClickEditSelf
      }, "Fix Errors"), !this.props.isOrderSummary && React.createElement("button", {
        className: "css-reset save-changes",
        onClick: function onClick(e) {
          return _this7.props.callbacks.sendToServer('calculate_price', {
            savedItemKey: _this7.props._key
          });
        }
      }, "Save")));
    }
  }, {
    key: "renderOrderSummaryBody",
    value: function renderOrderSummaryBody() {
      var _this8 = this;

      var sqt = this.getField('sequence_type');
      var svt = this.getField('service_type');
      var optimize = this.getField('optimize_sequence') === 'yes';
      var kozak = this.getField('add_kozak_sequence') === 'yes';
      var vector = this.getField('vector');

      var showDeliveryType = function showDeliveryType(field) {
        var v = _this8.getField(field);

        return v && React.createElement("p", null, _this8.getOptionName('delivery_type', field));
      }; // counts valid and invalid chars in input


      var length = function length(input) {
        var total = _this8.getStrlen(input, false);

        var valid = _this8.getStrlen(input, true);

        var invalid = total - valid;
        return React.createElement(React.Fragment, null, total, invalid > 0 && React.createElement("span", {
          className: "invalid-length"
        }, " + ", invalid, " invalid"));
      };

      return React.createElement("div", {
        className: "item-body is-order-summary"
      }, this.renderErrors(), React.createElement("div", {
        className: "cols"
      }, React.createElement("div", {
        className: "col col-sequence"
      }, React.createElement("div", {
        className: "grp grp-sequence"
      }, React.createElement("p", {
        className: "title"
      }, "Sequence"), React.createElement("p", null, this.getOptionName('sequence_type', sqt))), React.createElement("div", {
        className: "grp grp-optimize"
      }, React.createElement("p", null, React.createElement("span", {
        className: "v1"
      }, "Optimize: ", optimize ? "Yes, " : "No"), optimize && React.createElement("span", {
        className: "v2"
      }, this.getField('expression_system')), optimize && React.createElement("span", {
        className: "v3"
      }, this.getField('restriction_sites')))), React.createElement("div", {
        className: "grp grp-kozak"
      }, React.createElement("p", null, React.createElement("span", {
        className: "v1"
      }, "Kozak: ", kozak ? "Yes, " : "No"), kozak && React.createElement("span", {
        className: "v2"
      }, this.getField('kozak_sequence'))))), React.createElement("div", {
        className: "col col-service"
      }, React.createElement("div", {
        className: "grp grp-service"
      }, React.createElement("p", {
        className: "title"
      }, "Service"), React.createElement("p", null, this.getOptionName('service_type', svt)))), React.createElement("div", {
        className: "col col-length"
      }, React.createElement("div", {
        className: "grp grp-service"
      }, React.createElement("p", {
        className: "title"
      }, "Length (bp)"), svt === 'gene_synthesis' && sqt === 'dna' && React.createElement("p", null, length(this.getField('dna_sequence'))), svt === 'gene_synthesis' && sqt === 'protein' && React.createElement("p", null, length(this.getField('protein_5_flanking_sequence'))), svt === 'gene_synthesis' && sqt === 'protein' && React.createElement("p", null, length(this.getField('protein_sequence')), " (x3)"), svt === 'gene_synthesis' && sqt === 'protein' && React.createElement("p", null, length(this.getField('protein_3_flanking_sequence'))), svt === 'subcloning' && React.createElement("p", null, length(this.getField('subcloning_sequence_target_gene'))), svt === 'subcloning' && React.createElement("p", null, length(this.getField('subcloning_sequence_source_plasmid'))), svt === 'subcloning' && React.createElement("p", null, length(this.getField('subcloning_sequence_final_plasmid'))), svt === 'mutagenesis' && React.createElement("p", null, length(this.getField('mutagenesis_sequence_template'))), svt === 'mutagenesis' && React.createElement("p", null, length(this.getField('mutagenesis_sequence_final'))))), React.createElement("div", {
        className: "col col-vector"
      }, React.createElement("div", {
        className: "grp grp-vector"
      }, React.createElement("p", {
        className: "title"
      }, "Vector"), vector !== 'other' && React.createElement("p", null, this.getField('vector')), vector === 'other' && React.createElement("p", null, this.getField('vector_name')), vector === 'other' && React.createElement("p", null, this.getField('vector_antibiotic_resistance')), vector === 'other' && React.createElement("p", null, this.getField('vector_growth_conditions')))), React.createElement("div", {
        className: "col col-amount"
      }, React.createElement("div", {
        className: "grp grp-amount"
      }, React.createElement("p", {
        className: "title"
      }, "Amount"), React.createElement("p", null, this.getField('delivery_amount')))), React.createElement("div", {
        className: "col col-cloning-mutations"
      }, React.createElement("div", {
        className: "grp grp-cloning"
      }, React.createElement("p", {
        className: "title"
      }, "Cloning Sites"), React.createElement("p", null, "5': ", this.getField('cloning_sites_5') || "Blunt end cloning"), React.createElement("p", null, "3': ", this.getField('cloning_sites_3') || "Blunt end cloning")), React.createElement("div", {
        className: "grp grp-mutations"
      }, React.createElement("p", {
        className: "title"
      }, "Mutations / Deletions"), React.createElement("p", null, sqt === 'mutagenesis' ? this.getField('mutations') : "-"))), React.createElement("div", {
        className: "col col-delivery-type"
      }, React.createElement("div", {
        className: "grp grp-delivery-type"
      }, showDeliveryType('delivery_lyophilized'), showDeliveryType('delivery_glycerol'), showDeliveryType('delivery_buffer')))));
    }
  }, {
    key: "render",
    value: function render() {
      this.fieldWasSet = false;
      this.test.render++; // we use these a lot so local var is easier

      var sequence_type = this.getField('sequence_type');
      var service_type = this.getField('service_type');
      var allow_optimize_and_kozak = service_type !== 'mutagenesis';
      var cls = 'order-form-item';
      cls += this.state.errors.length > 0 ? ' has-errors' : '';
      console.time('itemRender' + this.props._key);
      var ret = React.createElement("div", {
        className: cls,
        ref: this.domNode
      }, React.createElement(this.memos.ItemHeader, {
        dependency_1: this.props.checked,
        dependency_2: this.props.index,
        dependency_3: this.props.isOrderSummary,
        dependency_4: this.getField('gene_name'),
        dependency_5: this.state.open,
        dependency_6: this.state.price,
        dependency_7: this.state.errors.length
      }), this.props.isOrderSummary ? this.renderOrderSummaryBody() : React.createElement("div", {
        className: "item-body",
        style: this.state.open ? {} : {
          display: 'none'
        }
      }, this.renderErrors(), React.createElement(this.memos.SequenceAndServiceTypeWrapper, {
        dependency_1: sequence_type,
        dependency_2: service_type
      }), service_type === 'gene_synthesis' && sequence_type === 'dna' && React.createElement(this.memos.GeneSynthesisDnaWrapper, {
        dependency_1: this.getField('dna_sequence')
      }), service_type === 'gene_synthesis' && sequence_type === 'protein' && React.createElement(this.memos.GeneSynthesisProteinWrapper, {
        dependency_1: this.getField('protein_5_flanking_sequence'),
        dependency_2: this.getField('protein_sequence'),
        dependency_3: this.getField('protein_3_flanking_sequence')
      }), service_type === 'subcloning' && React.createElement("div", {
        className: "wrapper sequence svt-subcloning"
      }, React.createElement(this.memos.SubcloningSequenceTargetGene, {
        dependency_1: this.getField('subcloning_sequence_target_gene')
      }), React.createElement(this.memos.SubcloningSequenceSourcePlasmid, {
        dependency_1: this.getField('subcloning_sequence_source_plasmid')
      }), React.createElement(this.memos.SubcloningSequenceFinalPlasmid, {
        dependency_1: this.getField('subcloning_sequence_final_plasmid')
      })), service_type === 'mutagenesis' && React.createElement("div", {
        className: "wrapper sequence svt-mutagenesis"
      }, React.createElement(this.memos.MutagenesisSequenceTemplate, {
        dependency_1: this.getField('mutagenesis_sequence_template')
      }), React.createElement(this.memos.MutagenesisSequenceFinal, {
        dependency_1: this.getField('mutagenesis_sequence_final')
      })), React.createElement(this.memos.OptimizeSequenceWrapper, {
        allow_optimize_and_kozak: allow_optimize_and_kozak,
        dependency_2: this.getField('optimize_sequence'),
        dependency_3: this.getField('expression_system'),
        dependency_4: this.getField('restriction_sites')
      }), React.createElement(this.memos.KozakSequenceWrapper, {
        allow_optimize_and_kozak: allow_optimize_and_kozak,
        dependency_2: this.getField('add_kozak_sequence'),
        dependency_3: this.getField('kozak_sequence')
      }), React.createElement("div", {
        className: "bottom-row"
      }, React.createElement(this.memos.VectorWrapper, {
        dependency_1: this.getField('vector'),
        dependency_2: this.getField('vector_name'),
        dependency_3: this.getField('vector_antibiotic_resistance'),
        dependency_4: this.getField('vector_growth_conditions')
      }), React.createElement(this.memos.CloningSites, {
        dependency_1: this.getField('cloning_sites_3'),
        dependency_2: this.getField('cloning_sites_5')
      }), React.createElement("div", {
        className: "wrapper mutations-delivery"
      }, React.createElement(this.memos.MutationsSubWrapper, {
        dependency_1: this.getField('mutations'),
        dependency_2: service_type
      }), React.createElement(this.memos.DeliverySubWrapper, {
        dependency_1: this.getField('delivery_amount')
      })), React.createElement(this.memos.DeliveryTypeWrapper, {
        dependency_1: this.getField('delivery_lyophilized'),
        dependency_2: this.getField('delivery_glycerol'),
        dependency_3: this.getField('delivery_buffer')
      }), React.createElement(this.memos.addItemButtonWrapper, {
        dependency_1: "dummy_variable_ie_always_used_cached_value"
      }))));
      console.timeEnd('itemRender' + this.props._key);
      return ret;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      // object for updates to state
      var updates = {};
      var sq = state.sequence_type;
      var sv = state.service_type; // protein is only for gene synthesis

      if (sq === 'protein' && (sv === 'subcloning' || sv === 'mutagenesis')) {
        updates.sequence_type = 'dna';
      } // mutagenesis cannot select these custom options
      // in addition we may choose to hide the value of any input into the text boxes in render()


      if (sv === 'mutagenesis') {
        updates.optimize_sequence = 'no';
        updates.add_kozak_sequence = 'no';
      } // checking one box will uncheck the other but this only occurs with user interaction


      if (state.delivery_buffer && state.delivery_glycerol) {
        updates.delivery_glycerol = false;
        updates.delivery_buffer = false;
      } // strictly null to not update the state


      return updates || null;
    }
  }, {
    key: "InvalidCountFromProps",
    // pure component reads only props
    value: function InvalidCountFromProps(props) {
      return React.createElement("p", {
        className: "invalid-count",
        style: props.count > 0 ? {} : {
          display: "none"
        }
      }, props.count, " invalid characters were found and replaced with ", props["char"]);
    }
  }]);

  return OrderFormItem;
}(React.Component);
/**
 * for expensive to render components due to regex, filtering, length etc.
 * could do a class component with a shouldComponentUpdate method
 */
// class SequenceInput extends React.Component{
//
//     constructor(props){
//         super(props);
//
//         this.handleChange = this.handleChange.bind(this);
//     }
//
//     shouldComponentUpdate( prevProps ){
//
//         if ( prevProps.value !== this.props.value ) {
//             return true;
//         }
//
//         return false;
//     }
//
//     handleChange(e){
//         this.props.setField( this.props.name, e.target.value );
//     };
//
//     render(){
//
//         let filtered = this.props.filterDna( this.props.value );
//         console.log("si render...", filtered, this.props );
//
//         return (
//             <div className="sequence-input">
//                 <input type="text" name={this.props.name} id={this.props.id} onChange={this.handleChange} value={this.props.value || ''} />
//             </div>
//         );
//     }
// }
// memo thing..
// class MyComponent extends React.Component{
//
//     constructor(){
//
//         super(props);
//
//         this.state = {
//             thing_1: "",
//             thing_2: "",
//         };
//
//         // proper pure component, only depends on props.
//         this.EasyToCalculateComponent = ( props ) => {
//             return (
//                 <p>{props.thing_1}</p>
//             )
//         };
//
//         // improper pure component which ignores props being passed in.
//         // may access this.props or this.state freely.
//         // however, we manually pass in the props that we know are the only
//         // dependencies that should possibly trigger a re-render of this component.
//         this.HardToCalculateComponent = ( props ) => {
//
//             // accessing the same thing passed in via props, but making a decision not to use props.
//             let result = this.expensiveFunction( this.aFunctionThatReturnsThing2FromState() );
//
//             // its redundant to pass down an onClick function. Instead, we want
//             // access to "this" and the methods from within.
//             let onClick = (e) => {
//                 this.registerButtonValue(e.target.value)
//             };
//
//             return (
//                 <div className="hard-to-calculate">
//                     <button onClick={onClick} value={result}></button>
//                 </div>
//             )
//         };
//     }
//
//     render(){
//         return (
//             <div className="my-component">
//                 <EasyToCalculateComponent prop_1={this.state.thing_1} />
//                 <this.HardToCalculateComponent dependency_1={this.state.thing_2} />
//             </div>
//         );
//     }
// }
// (?!s)[a-z]
// (?![sf])[a-z]
// (?!(,[\d],))[a-z]
// maybe this:
// [,]{1}[^,]{0,}
// [,]{2}[^,]{0,}
// [,]{3}[^,]{0,}
// etc.
// first grp replaces with : ,
// second: ,,
// third: ,,,
// etc.
// nevermind this is dumb....
// unless, we replace in the correct order..
// let orderedReplacements = [];
//
// let str = this.getField('protein_sequence') || "";
// str = str.replace(this.regex.whiteSpace, "", str);
//
// str = str.replace(this.regex.stopAndAfter, (match, offset, string) => {
//     orderedReplacements.push('stop');
//     return ',' + ( orderedReplacements.length - 1 ) + ',';
// }, str);
//
// str = str.replace(this.regex.notValidProteinSequence, (match, offset, string) => {
//     orderedReplacements.push(match);
//     return ',' + ( orderedReplacements.length - 1 ) + ',';
// }, str);
//
// console.log("1...", str, orderedReplacements);
//
// // replace ",{integer},"
// str = str.replace(/(,([0-9]{1,}),)/g, (match, group_1, group_2) => {
//
//     if (group_2 < orderedReplacements.length) {
//         return '<strong>' + orderedReplacements[group_2] + '</strong>';
//     }
//
//     console.error("Possible regex issue...");
//     // shouldn't get to here ideally... wouldn't hurt to return "" probably
//     return match;
//
// }, str);
//
// return str || "TEMP...";




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map