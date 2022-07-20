(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("dual-range-bar", [], factory);
	else if(typeof exports === 'object')
		exports["dual-range-bar"] = factory();
	else
		root["dual-range-bar"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".drbar-container {\n  /* Colors */\n  --slider-color: #1E88A8;\n  --range-color: #7DB9DE;\n  --bg-color: #aaaaaa44;\n  --slider-active: #08789b;\n  --range-active: #5da8d6;\n  /* Sizes */\n  --slider-wh: 20px;\n  --range-thick: 15px;\n  --bg-thick: 10px;\n  --mini-thick: 4px;\n  --mini-ratio: calc(4/15);\n}\n.drbar-container.drbar-small {\n  --slider-wh: 12px;\n  --range-thick: 10px;\n  --bg-thick: 6px;\n  --mini-thick: 4px;\n  --mini-ratio: calc(4/10);\n}\n.drbar-container.drbar-large {\n  --slider-wh: 25px;\n  --range-thick: 20px;\n  --bg-thick: 12px;\n  --mini-thick: 6px;\n  --mini-ratio: calc(6/20);\n}\n.drbar-container.drbar-huge {\n  --slider-wh: 32px;\n  --range-thick: 24px;\n  --bg-thick: 16px;\n  --mini-thick: 8px;\n  --mini-ratio: calc(8/24);\n}\n\n.drbar-container,\n.drbar-container .drbar-bg,\n.drbar-container .drbar-slider,\n.drbar-container .drbar-range {\n  user-select: none;\n  touch-action: none;\n  -webkit-user-drag: none;\n  -webkit-user-select: none;\n  -webkit-touch-callout: none;\n}\n\n/* Slider rules */\n.drbar-container .drbar-slider {\n  width: var(--slider-wh); height: var(--slider-wh);\n  border-radius: 50%;\n  z-index: 2;\n  transition: background-color 400ms, transform 400ms, opacity 200ms;\n}\n.drbar-container .drbar-slider:not(:active) {\n  background-color: var(--slider-color);\n}\n.drbar-container .drbar-slider:active {\n  background-color: var(--slider-active);\n  transform: scale(1.1);\n  transition: transform 100ms;\n}\n.drbar-container.drbar-minimizes:not(:hover) .drbar-slider {\n  transform: scale(0.25); opacity: 0;\n}\n\n/* Range bar rules */\n.drbar-container .drbar-range {\n  cursor: move;\n  z-index: 1;\n  transition: background-color 400ms, transform 400ms, opacity 400ms;\n}\n.drbar-container.drbar-horizontal .drbar-range {\n  height: var(--range-thick);\n  border-radius: 2px/50%;\n}\n.drbar-container.drbar-vertical .drbar-range {\n  width: var(--range-thick);\n  border-radius: 50%/2px;\n}\n.drbar-container .drbar-range:not(:active) {\n  background-color: var(--range-color);\n}\n.drbar-container .drbar-range:active {\n  background-color: var(--range-active);\n}\n.drbar-container.drbar-horizontal.drbar-minimizes:not(:hover) .drbar-range {\n  transform: scaleY(var(--mini-ratio)); opacity: 0.5;\n}\n.drbar-container.drbar-vertical.drbar-minimizes:not(:hover) .drbar-range {\n  transform: scaleX(var(--mini-ratio)); opacity: 0.5;\n}\n\n/* Background rules */\n.drbar-container.drbar-horizontal .drbar-bg {\n  height: var(--bg-thick);\n  cursor: ew-resize;\n}\n.drbar-container.drbar-vertical .drbar-bg {\n  width: var(--bg-thick);\n  cursor: ns-resize;\n}\n.drbar-container .drbar-bg::before {\n  content: '';\n  display: block;\n  position: absolute;\n  border-radius: calc(var(--bg-thick)/2);\n  z-index: 0;\n  background: var(--bg-color);\n  transition: background-color 400ms, height 400ms, width 400ms, opacity 400ms;\n}\n.drbar-container.drbar-horizontal .drbar-bg::before {\n  top: 50%;\n  width: 100%; height: var(--bg-thick);\n  transform: translateY(-50%);\n}\n.drbar-container.drbar-horizontal.drbar-minimizes:not(:hover) .drbar-bg::before {\n  height: var(--mini-thick); opacity: 0;\n}\n\n.drbar-container.drbar-vertical .drbar-bg::before {\n  left: 50%;\n  width: var(--bg-thick); height: 100%;\n  transform: translateX(-50%);\n}\n.drbar-container.drbar-vertical.drbar-minimizes:not(:hover) .drbar-bg::before {\n  width: var(--mini-thick); opacity: 0;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,uBAAuB;EACvB,sBAAsB;EACtB,qBAAqB;EACrB,wBAAwB;EACxB,uBAAuB;EACvB,UAAU;EACV,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,wBAAwB;AAC1B;AACA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,wBAAwB;AAC1B;AACA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,wBAAwB;AAC1B;AACA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,wBAAwB;AAC1B;;AAEA;;;;EAIE,iBAAiB;EACjB,kBAAkB;EAClB,uBAAuB;EACvB,yBAAyB;EACzB,2BAA2B;AAC7B;;AAEA,iBAAiB;AACjB;EACE,uBAAuB,EAAE,wBAAwB;EACjD,kBAAkB;EAClB,UAAU;EACV,kEAAkE;AACpE;AACA;EACE,qCAAqC;AACvC;AACA;EACE,sCAAsC;EACtC,qBAAqB;EACrB,2BAA2B;AAC7B;AACA;EACE,sBAAsB,EAAE,UAAU;AACpC;;AAEA,oBAAoB;AACpB;EACE,YAAY;EACZ,UAAU;EACV,kEAAkE;AACpE;AACA;EACE,0BAA0B;EAC1B,sBAAsB;AACxB;AACA;EACE,yBAAyB;EACzB,sBAAsB;AACxB;AACA;EACE,oCAAoC;AACtC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,oCAAoC,EAAE,YAAY;AACpD;AACA;EACE,oCAAoC,EAAE,YAAY;AACpD;;AAEA,qBAAqB;AACrB;EACE,uBAAuB;EACvB,iBAAiB;AACnB;AACA;EACE,sBAAsB;EACtB,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,sCAAsC;EACtC,UAAU;EACV,2BAA2B;EAC3B,4EAA4E;AAC9E;AACA;EACE,QAAQ;EACR,WAAW,EAAE,uBAAuB;EACpC,2BAA2B;AAC7B;AACA;EACE,yBAAyB,EAAE,UAAU;AACvC;;AAEA;EACE,SAAS;EACT,sBAAsB,EAAE,YAAY;EACpC,2BAA2B;AAC7B;AACA;EACE,wBAAwB,EAAE,UAAU;AACtC","sourcesContent":[".drbar-container {\n  /* Colors */\n  --slider-color: #1E88A8;\n  --range-color: #7DB9DE;\n  --bg-color: #aaaaaa44;\n  --slider-active: #08789b;\n  --range-active: #5da8d6;\n  /* Sizes */\n  --slider-wh: 20px;\n  --range-thick: 15px;\n  --bg-thick: 10px;\n  --mini-thick: 4px;\n  --mini-ratio: calc(4/15);\n}\n.drbar-container.drbar-small {\n  --slider-wh: 12px;\n  --range-thick: 10px;\n  --bg-thick: 6px;\n  --mini-thick: 4px;\n  --mini-ratio: calc(4/10);\n}\n.drbar-container.drbar-large {\n  --slider-wh: 25px;\n  --range-thick: 20px;\n  --bg-thick: 12px;\n  --mini-thick: 6px;\n  --mini-ratio: calc(6/20);\n}\n.drbar-container.drbar-huge {\n  --slider-wh: 32px;\n  --range-thick: 24px;\n  --bg-thick: 16px;\n  --mini-thick: 8px;\n  --mini-ratio: calc(8/24);\n}\n\n.drbar-container,\n.drbar-container .drbar-bg,\n.drbar-container .drbar-slider,\n.drbar-container .drbar-range {\n  user-select: none;\n  touch-action: none;\n  -webkit-user-drag: none;\n  -webkit-user-select: none;\n  -webkit-touch-callout: none;\n}\n\n/* Slider rules */\n.drbar-container .drbar-slider {\n  width: var(--slider-wh); height: var(--slider-wh);\n  border-radius: 50%;\n  z-index: 2;\n  transition: background-color 400ms, transform 400ms, opacity 200ms;\n}\n.drbar-container .drbar-slider:not(:active) {\n  background-color: var(--slider-color);\n}\n.drbar-container .drbar-slider:active {\n  background-color: var(--slider-active);\n  transform: scale(1.1);\n  transition: transform 100ms;\n}\n.drbar-container.drbar-minimizes:not(:hover) .drbar-slider {\n  transform: scale(0.25); opacity: 0;\n}\n\n/* Range bar rules */\n.drbar-container .drbar-range {\n  cursor: move;\n  z-index: 1;\n  transition: background-color 400ms, transform 400ms, opacity 400ms;\n}\n.drbar-container.drbar-horizontal .drbar-range {\n  height: var(--range-thick);\n  border-radius: 2px/50%;\n}\n.drbar-container.drbar-vertical .drbar-range {\n  width: var(--range-thick);\n  border-radius: 50%/2px;\n}\n.drbar-container .drbar-range:not(:active) {\n  background-color: var(--range-color);\n}\n.drbar-container .drbar-range:active {\n  background-color: var(--range-active);\n}\n.drbar-container.drbar-horizontal.drbar-minimizes:not(:hover) .drbar-range {\n  transform: scaleY(var(--mini-ratio)); opacity: 0.5;\n}\n.drbar-container.drbar-vertical.drbar-minimizes:not(:hover) .drbar-range {\n  transform: scaleX(var(--mini-ratio)); opacity: 0.5;\n}\n\n/* Background rules */\n.drbar-container.drbar-horizontal .drbar-bg {\n  height: var(--bg-thick);\n  cursor: ew-resize;\n}\n.drbar-container.drbar-vertical .drbar-bg {\n  width: var(--bg-thick);\n  cursor: ns-resize;\n}\n.drbar-container .drbar-bg::before {\n  content: '';\n  display: block;\n  position: absolute;\n  border-radius: calc(var(--bg-thick)/2);\n  z-index: 0;\n  background: var(--bg-color);\n  transition: background-color 400ms, height 400ms, width 400ms, opacity 400ms;\n}\n.drbar-container.drbar-horizontal .drbar-bg::before {\n  top: 50%;\n  width: 100%; height: var(--bg-thick);\n  transform: translateY(-50%);\n}\n.drbar-container.drbar-horizontal.drbar-minimizes:not(:hover) .drbar-bg::before {\n  height: var(--mini-thick); opacity: 0;\n}\n\n.drbar-container.drbar-vertical .drbar-bg::before {\n  left: 50%;\n  width: var(--bg-thick); height: 100%;\n  transform: translateX(-50%);\n}\n.drbar-container.drbar-vertical.drbar-minimizes:not(:hover) .drbar-bg::before {\n  width: var(--mini-thick); opacity: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g.Math === Math) {
        return __webpack_require__.g;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/DualHRangeBar.ts":
/*!******************************!*\
  !*** ./src/DualHRangeBar.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var DualRangeBar_1 = __webpack_require__(/*! ./DualRangeBar */ "./src/DualRangeBar.ts");
var DualHRangeBar = /** @class */ (function (_super) {
    __extends(DualHRangeBar, _super);
    function DualHRangeBar(container, config) {
        var _this = _super.call(this, container, config) || this;
        _this.container.classList.add(_this.prefix + "-horizontal");
        // Inline styles
        _this.doms.background.style.width = '100%';
        _this.update();
        return _this;
    }
    DualHRangeBar.prototype.update = function () {
        _super.prototype.update.call(this);
        var barW = this.doms.background.clientWidth;
        var barH = this.doms.background.clientHeight;
        var startSliderW = this.doms.startSlider.clientWidth;
        var startSliderH = this.doms.startSlider.clientHeight;
        var endSliderW = this.doms.endSlider.clientWidth;
        var endSliderH = this.doms.endSlider.clientHeight;
        var rangeSliderW = (this.relative.upper - this.relative.lower) * barW;
        var rangeSliderH = this.doms.rangeSlider.clientHeight;
        var startSliderL = this.relative.lower * barW - startSliderW / 2;
        var startSliderT = barH / 2 - startSliderH / 2;
        var endSliderL = this.relative.upper * barW - endSliderW / 2;
        var endSliderT = barH / 2 - endSliderH / 2;
        var rangeSliderL = this.relative.lower * barW;
        var rangeSliderT = barH / 2 - rangeSliderH / 2;
        this.doms.startSlider.style.left = startSliderL + "px";
        this.doms.startSlider.style.top = startSliderT + "px";
        this.doms.endSlider.style.left = endSliderL + "px";
        this.doms.endSlider.style.top = endSliderT + "px";
        this.doms.rangeSlider.style.left = rangeSliderL + "px";
        this.doms.rangeSlider.style.top = rangeSliderT + "px";
        this.doms.rangeSlider.style.width = rangeSliderW + "px";
    };
    /** Helper function for getting dx via clientX */
    DualHRangeBar.prototype.getDx = function (clientX) {
        var bgRect = this.doms.background.getBoundingClientRect();
        return clientX - bgRect.left;
    };
    DualHRangeBar.prototype.draggingStart = function (event) {
        var _a, _b;
        var clientX = event.clientX
            || ((_b = (_a = event.touches) === null || _a === void 0 ? void 0 : _a.item(0)) === null || _b === void 0 ? void 0 : _b.clientX) || 0;
        var minLower = 0, maxLower = 1 - this.relative.minSpan;
        var newLower = this.getDx(clientX) / this.doms.background.clientWidth;
        if (newLower < minLower)
            newLower = minLower;
        if (newLower > maxLower)
            newLower = maxLower;
        this.relative.lower = newLower;
        if (newLower + this.relative.minSpan > this.relative.upper)
            this.relative.upper = newLower + this.relative.minSpan;
        if (newLower + this.relative.maxSpan < this.relative.upper)
            this.relative.upper = newLower + this.relative.maxSpan;
    };
    DualHRangeBar.prototype.draggingEnd = function (event) {
        var _a, _b;
        var clientX = event.clientX
            || ((_b = (_a = event.touches) === null || _a === void 0 ? void 0 : _a.item(0)) === null || _b === void 0 ? void 0 : _b.clientX) || 0;
        var minUpper = this.relative.minSpan, maxUpper = 1;
        var newUpper = this.getDx(clientX) / this.doms.background.clientWidth;
        if (newUpper < minUpper)
            newUpper = minUpper;
        if (newUpper > maxUpper)
            newUpper = maxUpper;
        this.relative.upper = newUpper;
        if (newUpper - this.relative.minSpan < this.relative.lower)
            this.relative.lower = newUpper - this.relative.minSpan;
        if (newUpper - this.relative.maxSpan > this.relative.lower)
            this.relative.lower = newUpper - this.relative.maxSpan;
    };
    DualHRangeBar.prototype.draggingRange = function (event) {
        var _a, _b;
        var movementX = event.movementX
            || ((((_b = (_a = event.touches) === null || _a === void 0 ? void 0 : _a.item(0)) === null || _b === void 0 ? void 0 : _b.clientX) || 0) - this.prevClientX);
        var maxDx = 1 - this.relative.upper, minDx = -this.relative.lower;
        var dx = movementX / this.doms.background.clientWidth;
        if (dx > maxDx)
            dx = maxDx;
        if (dx < minDx)
            dx = minDx;
        this.relative.lower += dx;
        this.relative.upper += dx;
    };
    DualHRangeBar.prototype.wheelScaling = function (event) {
        var dy = utils_1.getDeltaY(event) / this.doms.background.clientWidth;
        var cursorPos = this.getDx(event.clientX) / this.doms.background.clientWidth;
        var relativeSpan = this.relative.upper - this.relative.lower;
        var newLower = this.relative.lower -
            dy * (cursorPos - this.relative.lower) / relativeSpan;
        var newUpper = this.relative.upper +
            dy * (this.relative.upper - cursorPos) / relativeSpan;
        if (newLower < 0)
            newLower = 0;
        if (newUpper > 1)
            newUpper = 1;
        if (newUpper - newLower < this.relative.minSpan) {
            newLower = cursorPos -
                this.relative.minSpan * (cursorPos - this.relative.lower) / relativeSpan;
            newUpper = cursorPos +
                this.relative.minSpan * (this.relative.upper - cursorPos) / relativeSpan;
        }
        if (newUpper - newLower > this.relative.maxSpan) {
            newLower = cursorPos -
                this.relative.maxSpan * (cursorPos - this.relative.lower) / relativeSpan;
            newUpper = cursorPos +
                this.relative.maxSpan * (this.relative.upper - cursorPos) / relativeSpan;
        }
        this.relative.lower = newLower;
        this.relative.upper = newUpper;
    };
    DualHRangeBar.prototype.wheelScrolling = function (event) {
        var dy = utils_1.getDeltaY(event) / this.doms.background.clientWidth;
        var minDy = -this.relative.lower;
        var maxDy = 1 - this.relative.upper;
        if (dy < minDy)
            dy = minDy;
        if (dy > maxDy)
            dy = maxDy;
        this.relative.lower += dy;
        this.relative.upper += dy;
    };
    return DualHRangeBar;
}(DualRangeBar_1.default));
exports.default = DualHRangeBar;


/***/ }),

/***/ "./src/DualRangeBar.ts":
/*!*****************************!*\
  !*** ./src/DualRangeBar.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/** Common logic for a dual range bar object
 * @author Celestial Phineas */
__webpack_require__(/*! ./style.css */ "./src/style.css");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var resize_observer_polyfill_1 = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
var DualRangeBar = /** @class */ (function () {
    /** Dual range bar contructor
     * @constructor
     * @param {string | HTMLDivElement} container The container element of the dual range bar */
    function DualRangeBar(container, config) {
        var _this = this;
        /** Constructed elements */
        this.doms = {
            /** Backgroud div */
            background: document.createElement('div'),
            /** Div of the starting slider */
            startSlider: document.createElement('div'),
            /** Div of the ending slider */
            endSlider: document.createElement('div'),
            /** Div of the range slider */
            rangeSlider: document.createElement('div')
        };
        /** A unique prefix for everything in dual-range-bar */
        this.prefix = 'drbar';
        /** The slider that is under dragging */
        this.underDragging = null;
        /** Relative values are used for calculating layout,
         * this should range from 0 to 1. */
        this.relative = {
            /** Corresponding value of the starting slider */
            lower: 0,
            /** Corresponding value of the ending slider */
            upper: 1,
            /** Minimum span of the range slider, in ratio to 1 */
            minSpan: 0.2,
            /** Maximum span of the range slider, in ratio to 1 */
            maxSpan: 1,
        };
        //#region Absolute preperties
        /** Minimum possible value of the ranges */
        this.lowerBound = 0;
        /** Maximum possible value of the ranges */
        this.upperBound = 1;
        //#endregion
        /** Saved touchstart clientX */ this.prevClientX = 0;
        /** Saved touchstart clientY */ this.prevClientY = 0;
        //#region Initializing the container
        if (typeof (container) === 'string')
            this.container = document.getElementById(container);
        else
            this.container = container;
        // Throw an error if failed
        if (!this.container)
            throw Error(container + " is not a <div> element.");
        // Add an id to the container if the container does not have one
        if (this.container.id === null)
            this.container.id = this.getUniqueID();
        (function (x) {
            if (!_this.container.classList.contains(x)) {
                _this.container.classList.add(x);
            }
        })(this.prefix + "-container");
        //#endregion
        //#region DOM element initializing
        // Set class for the div elements
        this.doms.background.classList.add(this.prefix + "-bg");
        this.doms.startSlider.classList.add(this.prefix + "-slider", this.prefix + "-start");
        this.doms.endSlider.classList.add(this.prefix + "-slider", this.prefix + "-end");
        this.doms.rangeSlider.classList.add(this.prefix + "-range");
        // Insert the DOMs
        this.container.appendChild(this.doms.background);
        this.doms.background.appendChild(this.doms.rangeSlider);
        this.doms.background.appendChild(this.doms.startSlider);
        this.doms.background.appendChild(this.doms.endSlider);
        //#endregion
        //#region Inline styles of the DOM elements
        utils_1.setStyle(this.container, {
            display: 'flex', overflow: 'visible',
            alignItems: 'center', justifyContent: 'center'
        });
        var elementStyle = {
            display: 'block', overflow: 'visible', position: 'absolute'
        };
        utils_1.setStyle(this.doms.background, elementStyle);
        utils_1.setStyle(this.doms.startSlider, elementStyle);
        utils_1.setStyle(this.doms.endSlider, elementStyle);
        utils_1.setStyle(this.doms.rangeSlider, elementStyle);
        //#endregion
        //#region Handling configuration
        if (config === null || config === void 0 ? void 0 : config.minimizes)
            this.container.classList.add(this.prefix + "-minimizes");
        // Size configuration
        if (config === null || config === void 0 ? void 0 : config.size) {
            this.container.classList.remove(this.prefix + "-small", this.prefix + "-large", this.prefix + "-huge");
            if (config.size !== 'default')
                this.container.classList.add(this.prefix + "-" + config.size);
        }
        // Declarative data attributes
        if (this.container.dataset.lowerBound !== undefined)
            this.lowerBound = parseFloat(this.container.dataset.lowerBound);
        if (this.container.dataset.upperBound !== undefined)
            this.upperBound = parseFloat(this.container.dataset.upperBound);
        if (this.container.dataset.minSpan !== undefined)
            this.minSpan = parseFloat(this.container.dataset.minSpan);
        if (this.container.dataset.maxSpan !== undefined)
            this.maxSpan = parseFloat(this.container.dataset.maxSpan);
        if (this.container.dataset.lower !== undefined)
            this.lower = parseFloat(this.container.dataset.lower);
        if (this.container.dataset.upper !== undefined)
            this.upper = parseFloat(this.container.dataset.upper);
        // Values in the config
        if ((config === null || config === void 0 ? void 0 : config.lowerBound) !== undefined)
            this.lowerBound = config.lowerBound;
        if ((config === null || config === void 0 ? void 0 : config.upperBound) !== undefined)
            this.upperBound = config.upperBound;
        if ((config === null || config === void 0 ? void 0 : config.minSpan) !== undefined)
            this.minSpan = config.minSpan;
        if ((config === null || config === void 0 ? void 0 : config.maxSpan) !== undefined)
            this.maxSpan = config.maxSpan;
        if ((config === null || config === void 0 ? void 0 : config.lower) !== undefined)
            this.lower = config.lower;
        if ((config === null || config === void 0 ? void 0 : config.upper) !== undefined)
            this.upper = config.upper;
        // Handling color config
        var colorConfig = {};
        if (config === null || config === void 0 ? void 0 : config.sliderColor)
            colorConfig['--slider-color'] = config.sliderColor;
        if (config === null || config === void 0 ? void 0 : config.sliderActiveColor)
            colorConfig['--slider-active'] = config.sliderActiveColor;
        if (config === null || config === void 0 ? void 0 : config.rangeColor)
            colorConfig['--range-color'] = config.rangeColor;
        if (config === null || config === void 0 ? void 0 : config.rangeActiveColor)
            colorConfig['--range-active'] = config.rangeActiveColor;
        if (config === null || config === void 0 ? void 0 : config.bgColor)
            colorConfig['--bg-color'] = config.bgColor;
        if (Object.keys(colorConfig).length > 0) {
            var cssString = "#" + this.container.id + "{";
            for (var key in colorConfig)
                cssString += key + ":" + colorConfig[key] + ";";
            cssString += '}';
            var sheet = document.createElement('style');
            sheet.innerText = cssString;
            document.head.appendChild(sheet);
        }
        //#endregion
        this.handleEvents();
    }
    DualRangeBar.prototype.emitEvent = function (type) {
        if (type === void 0) { type = 'update'; }
        var event = new CustomEvent(type, {
            detail: this
        });
        this.container.dispatchEvent(event);
    };
    /** An helper function for generating a unique ID */
    DualRangeBar.prototype.getUniqueID = function () {
        return this.prefix + "-" + Math.random().toString(36).substr(2, 9);
    };
    /** Update element locations */
    DualRangeBar.prototype.update = function () {
        // Update data attributes
        this.container.dataset.lowerBound = this.lowerBound.toString();
        this.container.dataset.upperBound = this.upperBound.toString();
        this.container.dataset.minSpan = this.minSpan.toString();
        this.container.dataset.maxSpan = this.maxSpan.toString();
        this.container.dataset.lower = this.lower.toString();
        this.container.dataset.upper = this.upper.toString();
    };
    Object.defineProperty(DualRangeBar.prototype, "boundSpan", {
        /** Difference of the upper bound and the lower bound */
        get: function () { return this.upperBound - this.lowerBound; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DualRangeBar.prototype, "lower", {
        /** Absolute lower range */
        get: function () { return this.relative.lower * this.boundSpan + this.lowerBound; },
        set: function (newVal) {
            if (this.boundSpan === 0)
                throw Error('"lowerBound" should not equal to "upperBound"');
            var relativeLower = (newVal - this.lowerBound) / this.boundSpan;
            if (relativeLower < 0 || relativeLower > 1)
                throw Error('"lower" value out of bound');
            this.relative.lower = relativeLower;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DualRangeBar.prototype, "upper", {
        /** Absolute upper range */
        get: function () { return this.relative.upper * this.boundSpan + this.lowerBound; },
        set: function (newVal) {
            if (this.boundSpan === 0)
                throw Error('"lowerBound" should not equal to "upperBound"');
            var relativeUpper = (newVal - this.lowerBound) / this.boundSpan;
            if (relativeUpper < 0 || relativeUpper > 1)
                throw Error('"upper" value out of bound');
            this.relative.upper = relativeUpper;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DualRangeBar.prototype, "minSpan", {
        /** Absolute minimum range span */
        get: function () { return this.relative.minSpan * this.boundSpan; },
        set: function (newVal) {
            if (this.boundSpan === 0)
                throw Error('"lowerBound" should not equal to "upperBound"');
            var relativeSpan = Math.abs(newVal / this.boundSpan);
            if (relativeSpan > 1)
                throw Error('Invalid "minSpan" specification');
            this.relative.minSpan = relativeSpan;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DualRangeBar.prototype, "maxSpan", {
        /** Absolute maximum range span */
        get: function () { return this.relative.maxSpan * this.boundSpan; },
        set: function (newVal) {
            if (this.boundSpan === 0)
                throw Error('"lowerBound" should not equal to "upperBound"');
            var relativeSpan = Math.abs(newVal / this.boundSpan);
            if (relativeSpan > 1)
                throw Error('Invalid "maxSpan" specification');
            this.relative.maxSpan = relativeSpan;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    /** TouchEvent type guard */
    DualRangeBar.prototype.isTouchEvent = function (event) {
        return event.touches !== undefined;
    };
    /** Handling events */
    DualRangeBar.prototype.handleEvents = function () {
        var _this = this;
        // Update bar when the container resizes
        var resizeObserver = new resize_observer_polyfill_1.default(function () {
            _this.update();
        });
        resizeObserver.observe(this.container);
        // `underDragging` status update
        var saveClientXY = function (e) {
            var _a, _b;
            _this.prevClientX = ((_a = e.touches.item(0)) === null || _a === void 0 ? void 0 : _a.clientX) || 0;
            _this.prevClientY = ((_b = e.touches.item(0)) === null || _b === void 0 ? void 0 : _b.clientY) || 0;
        };
        this.doms.startSlider.addEventListener('mousedown', function () {
            _this.underDragging = 'start';
        });
        this.doms.startSlider.addEventListener('touchstart', function (e) {
            saveClientXY(e);
            _this.underDragging = 'start';
        });
        this.doms.endSlider.addEventListener('mousedown', function () {
            _this.underDragging = 'end';
        });
        this.doms.endSlider.addEventListener('touchstart', function (e) {
            saveClientXY(e);
            _this.underDragging = 'end';
        });
        this.doms.rangeSlider.addEventListener('mousedown', function () {
            _this.underDragging = 'range';
        });
        this.doms.rangeSlider.addEventListener('touchstart', function (e) {
            saveClientXY(e);
            _this.underDragging = 'range';
        });
        // Moving pointer
        var pointerMove = function (e) {
            if (_this.underDragging !== null)
                e.preventDefault();
            switch (_this.underDragging) {
                case null: return;
                case 'start':
                    _this.draggingStart(e);
                    break;
                case 'end':
                    _this.draggingEnd(e);
                    break;
                case 'range':
                    _this.draggingRange(e);
                    break;
            }
            if (_this.isTouchEvent(e))
                saveClientXY(e);
            _this.update();
            _this.emitEvent();
        };
        window.addEventListener('mousemove', pointerMove);
        window.addEventListener('touchmove', pointerMove);
        // Pointer up
        var pointerUp = function () {
            if (_this.underDragging === null)
                return;
            _this.underDragging = null;
            _this.update();
            _this.emitEvent();
            _this.emitEvent('change');
        };
        window.addEventListener('mouseup', pointerUp);
        window.addEventListener('touchend', pointerUp);
        window.addEventListener('touchcancel', pointerUp);
        // Wheel behaviour
        this.doms.rangeSlider.addEventListener('wheel', function (e) {
            e.preventDefault();
            e.stopPropagation();
            _this.wheelScaling(e);
            _this.update();
            _this.emitEvent();
        });
        this.doms.background.addEventListener('wheel', function (e) {
            e.preventDefault();
            e.stopPropagation();
            _this.wheelScrolling(e);
            _this.update();
            _this.emitEvent();
        });
    };
    // Implementing the EventTarget interface
    DualRangeBar.prototype.addEventListener = function (type, listener, options) {
        this.container.addEventListener(type, listener, options);
    };
    DualRangeBar.prototype.dispatchEvent = function (event) {
        return this.container.dispatchEvent(event);
    };
    DualRangeBar.prototype.removeEventListener = function (type, callback, options) {
        this.container.removeEventListener(type, callback, options);
    };
    return DualRangeBar;
}());
exports.default = DualRangeBar;


/***/ }),

/***/ "./src/DualVRangeBar.ts":
/*!******************************!*\
  !*** ./src/DualVRangeBar.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var DualRangeBar_1 = __webpack_require__(/*! ./DualRangeBar */ "./src/DualRangeBar.ts");
var DualVRangeBar = /** @class */ (function (_super) {
    __extends(DualVRangeBar, _super);
    function DualVRangeBar(container, config) {
        var _this = _super.call(this, container, config) || this;
        _this.container.classList.add(_this.prefix + "-vertical");
        // Inline styles
        _this.doms.background.style.height = '100%';
        _this.update();
        return _this;
    }
    DualVRangeBar.prototype.update = function () {
        _super.prototype.update.call(this);
        var barW = this.doms.background.clientWidth;
        var barH = this.doms.background.clientHeight;
        var startSliderW = this.doms.startSlider.clientWidth;
        var startSliderH = this.doms.startSlider.clientHeight;
        var endSliderW = this.doms.endSlider.clientWidth;
        var endSliderH = this.doms.endSlider.clientHeight;
        var rangeSliderW = this.doms.rangeSlider.clientWidth;
        var rangeSliderH = (this.relative.upper - this.relative.lower) * barH;
        var startSliderL = barW / 2 - startSliderW / 2;
        var startSliderT = this.relative.lower * barH - startSliderH / 2;
        var endSliderL = barW / 2 - endSliderW / 2;
        var endSliderT = this.relative.upper * barH - endSliderH / 2;
        var rangeSliderL = barW / 2 - rangeSliderW / 2;
        var rangeSliderT = this.relative.lower * barH;
        this.doms.startSlider.style.left = startSliderL + "px";
        this.doms.startSlider.style.top = startSliderT + "px";
        this.doms.endSlider.style.left = endSliderL + "px";
        this.doms.endSlider.style.top = endSliderT + "px";
        this.doms.rangeSlider.style.left = rangeSliderL + "px";
        this.doms.rangeSlider.style.top = rangeSliderT + "px";
        this.doms.rangeSlider.style.height = rangeSliderH + "px";
    };
    /** Helper function for getting dx via clientX */
    DualVRangeBar.prototype.getDy = function (clientY) {
        var bgRect = this.doms.background.getBoundingClientRect();
        return clientY - bgRect.top;
    };
    DualVRangeBar.prototype.draggingStart = function (event) {
        var _a, _b;
        var clientY = event.clientY
            || ((_b = (_a = event.touches) === null || _a === void 0 ? void 0 : _a.item(0)) === null || _b === void 0 ? void 0 : _b.clientY) || 0;
        var minLower = 0, maxLower = 1 - this.relative.minSpan;
        var newLower = this.getDy(clientY) / this.doms.background.clientHeight;
        if (newLower < minLower)
            newLower = minLower;
        if (newLower > maxLower)
            newLower = maxLower;
        this.relative.lower = newLower;
        if (newLower + this.relative.minSpan > this.relative.upper)
            this.relative.upper = newLower + this.relative.minSpan;
        if (newLower + this.relative.maxSpan < this.relative.upper)
            this.relative.upper = newLower + this.relative.maxSpan;
    };
    DualVRangeBar.prototype.draggingEnd = function (event) {
        var _a, _b;
        var clientY = event.clientY
            || ((_b = (_a = event.touches) === null || _a === void 0 ? void 0 : _a.item(0)) === null || _b === void 0 ? void 0 : _b.clientY) || 0;
        var minUpper = this.relative.minSpan, maxUpper = 1;
        var newUpper = this.getDy(clientY) / this.doms.background.clientHeight;
        if (newUpper < minUpper)
            newUpper = minUpper;
        if (newUpper > maxUpper)
            newUpper = maxUpper;
        this.relative.upper = newUpper;
        if (newUpper - this.relative.minSpan < this.relative.lower)
            this.relative.lower = newUpper - this.relative.minSpan;
        if (newUpper - this.relative.maxSpan > this.relative.lower)
            this.relative.lower = newUpper - this.relative.maxSpan;
    };
    DualVRangeBar.prototype.draggingRange = function (event) {
        var _a, _b;
        var movementY = event.movementY
            || ((((_b = (_a = event.touches) === null || _a === void 0 ? void 0 : _a.item(0)) === null || _b === void 0 ? void 0 : _b.clientY) || 0) - this.prevClientY);
        var maxDx = 1 - this.relative.upper, minDx = -this.relative.lower;
        var dx = movementY / this.doms.background.clientHeight;
        if (dx > maxDx)
            dx = maxDx;
        if (dx < minDx)
            dx = minDx;
        this.relative.lower += dx;
        this.relative.upper += dx;
    };
    DualVRangeBar.prototype.wheelScaling = function (event) {
        var dy = utils_1.getDeltaY(event) / this.doms.background.clientHeight;
        var cursorPos = this.getDy(event.clientY) / this.doms.background.clientHeight;
        var relativeSpan = this.relative.upper - this.relative.lower;
        var newLower = this.relative.lower -
            dy * (cursorPos - this.relative.lower) / relativeSpan;
        var newUpper = this.relative.upper +
            dy * (this.relative.upper - cursorPos) / relativeSpan;
        if (newLower < 0)
            newLower = 0;
        if (newUpper > 1)
            newUpper = 1;
        if (newUpper - newLower < this.relative.minSpan) {
            newLower = cursorPos -
                this.relative.minSpan * (cursorPos - this.relative.lower) / relativeSpan;
            newUpper = cursorPos +
                this.relative.minSpan * (this.relative.upper - cursorPos) / relativeSpan;
        }
        if (newUpper - newLower > this.relative.maxSpan) {
            newLower = cursorPos -
                this.relative.maxSpan * (cursorPos - this.relative.lower) / relativeSpan;
            newUpper = cursorPos +
                this.relative.maxSpan * (this.relative.upper - cursorPos) / relativeSpan;
        }
        this.relative.lower = newLower;
        this.relative.upper = newUpper;
    };
    DualVRangeBar.prototype.wheelScrolling = function (event) {
        var dy = utils_1.getDeltaY(event) / this.doms.background.clientHeight;
        var minDy = -this.relative.lower;
        var maxDy = 1 - this.relative.upper;
        if (dy < minDy)
            dy = minDy;
        if (dy > maxDy)
            dy = maxDy;
        this.relative.lower += dy;
        this.relative.upper += dy;
    };
    return DualVRangeBar;
}(DualRangeBar_1.default));
exports.default = DualVRangeBar;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DualVRangeBar = exports.DualHRangeBar = void 0;
var DualHRangeBar_1 = __webpack_require__(/*! ./DualHRangeBar */ "./src/DualHRangeBar.ts");
exports.DualHRangeBar = DualHRangeBar_1.default;
var DualVRangeBar_1 = __webpack_require__(/*! ./DualVRangeBar */ "./src/DualVRangeBar.ts");
exports.DualVRangeBar = DualVRangeBar_1.default;
window.addEventListener('load', function () {
    var dualRangeBars = document.getElementsByClassName('drbar-container');
    for (var i = 0; i < dualRangeBars.length; i++) {
        var bar = dualRangeBars.item(i);
        if ((bar === null || bar === void 0 ? void 0 : bar.nodeName) !== 'DIV')
            continue;
        if ((bar === null || bar === void 0 ? void 0 : bar.childElementCount) > 0)
            continue;
        if (bar === null || bar === void 0 ? void 0 : bar.classList.contains('drbar-vertical')) {
            new DualVRangeBar_1.default(bar);
        }
        else {
            new DualHRangeBar_1.default(bar);
        }
    }
});
window.DualHRange = DualHRangeBar_1.default;
window.DualVRange = DualVRangeBar_1.default;


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getDeltaY = exports.setStyle = void 0;
/** Fast set styles for a HTML element, tricky AnyScript */
function setStyle(htmlElement, styleSpec) {
    Object.assign(htmlElement.style, styleSpec);
}
exports.setStyle = setStyle;
/** Return a calculated value of deltaY from a WheelEvent,
 * since Firefox would return `deltaMode === 0x02` or `deltaMode === 0x03` */
function getDeltaY(event) {
    var r = event.deltaMode === 0x01 ? 16 : 1;
    return event.deltaY * r;
}
exports.getDeltaY = getDeltaY;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.ts");
/******/ })()
;
});
//# sourceMappingURL=dual-range-bar.js.map