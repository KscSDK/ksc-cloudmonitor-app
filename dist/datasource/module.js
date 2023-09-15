define(["@grafana/data","@grafana/runtime","@grafana/ui","lodash","moment","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_runtime__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_moment__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./datasource/module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@xobotyi/scrollbar-width/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ../node_modules/@xobotyi/scrollbar-width/dist/index.esm.js ***!
  \******************************************************************/
/*! exports provided: scrollbarWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollbarWidth", function() { return e; });
var e=function(t){if("undefined"==typeof document)return 0;if(document.body&&(!document.readyState||"loading"!==document.readyState)){if(!0!==t&&"number"==typeof e.__cache)return e.__cache;var o=document.createElement("div"),d=o.style;d.display="block",d.position="absolute",d.width="100px",d.height="100px",d.left="-999px",d.top="-999px",d.overflow="scroll",document.body.insertBefore(o,null);var n=o.clientWidth;if(0!==n)return e.__cache=100-n,document.body.removeChild(o),e.__cache;document.body.removeChild(o)}};


/***/ }),

/***/ "../node_modules/copy-to-clipboard/index.js":
/*!**************************************************!*\
  !*** ../node_modules/copy-to-clipboard/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deselectCurrent = __webpack_require__(/*! toggle-selection */ "../node_modules/toggle-selection/index.js");

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/dist/cjs.js!./datasource/styles/common.css":
/*!****************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--8-1!../node_modules/postcss-loader/src??ref--8-2!../node_modules/sass-loader/dist/cjs.js!./datasource/styles/common.css ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n/* .gf-form-select-box__control {\n  width: 280px;\n  margin-right: 0px;\n}\n.gf-form-input {\n  width: auto;\n} */\n.gf-form-input {\n  width: 280px;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n\n.gf-form-input-query {\n  width: 100%;\n}\n\n.upper-flex-content > div {\n  /* flex-basis: fit-content !important; */\n  width: calc(100% - 130px);\n}\n\n.flex-content {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n/* .custom-select-style div {\n  display: inline-flex;\n} */\n.desc {\n  margin-left: 8px;\n}\n\n.common-content {\n  margin-top: 8px;\n}\n\n.common-content .form-field {\n  margin-bottom: 8px;\n}\n\n.common-content .gf-form .gf-form-label {\n  width: 112px;\n}\n\n.common-content .gf-form div {\n  margin: 0px 8px;\n}\n\n.inline-content {\n  display: inline-block;\n}\n\n.inline-input {\n  display: inline-flex;\n  margin: 8px;\n}\n\n.inline-icon {\n  display: inline-block;\n  margin-left: 8px;\n  height: auto;\n}\n\n.inline-button-add {\n  display: inline-block;\n  margin-left: 16px;\n}\n\n.filter-cart {\n  display: block;\n}\n\n/* 过滤条件内容部分 */\n.filter-content {\n  /* padding: 24px; */\n  padding-left: 0px;\n}\n\n/* 详情查询instance content */\n.detail-content-desc {\n  padding: 16px;\n  background-color: #22252b;\n}\n\n.detail-content-desc a {\n  text-align: right;\n  color: cornflowerblue;\n  margin-left: 8px;\n}\n\n/* 帮助文档 */\n.help-content a {\n  text-align: right;\n  color: cornflowerblue;\n  margin-left: 8px;\n}\n\n.detail-content-fileds {\n  margin-top: 8px;\n  padding-top: 0px;\n  background-color: #181b20;\n  padding: 8px;\n}\n\n.repeat-field {\n  padding-bottom: 8px;\n}\n\n/* select 宽度*/\n.gf-form-select-box__value-container, .gf-form-select-box__value-container > div {\n  display: inline-block;\n}\n\n.gf-form-select-box__control {\n  overflow: unset;\n}", "",{"version":3,"sources":["common.css"],"names":[],"mappings":"AAAA,gBAAgB;AAChB;;;;;;GAMG;AACH;EACE,YAAY;EACZ,8BAAsB;EAAtB,2BAAsB;EAAtB,sBAAsB;AACxB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,wCAAwC;EACxC,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;;GAEG;AACH;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,cAAc;AAChB;;AAEA,aAAa;AACb;EACE,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA,yBAAyB;AACzB;EACE,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA,SAAS;AACT;EACE,iBAAiB;EACjB,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA,aAAa;AACb;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB","file":"common.css","sourcesContent":["@charset \"UTF-8\";\n/* .gf-form-select-box__control {\n  width: 280px;\n  margin-right: 0px;\n}\n.gf-form-input {\n  width: auto;\n} */\n.gf-form-input {\n  width: 280px;\n  min-width: fit-content;\n}\n\n.gf-form-input-query {\n  width: 100%;\n}\n\n.upper-flex-content > div {\n  /* flex-basis: fit-content !important; */\n  width: calc(100% - 130px);\n}\n\n.flex-content {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n/* .custom-select-style div {\n  display: inline-flex;\n} */\n.desc {\n  margin-left: 8px;\n}\n\n.common-content {\n  margin-top: 8px;\n}\n\n.common-content .form-field {\n  margin-bottom: 8px;\n}\n\n.common-content .gf-form .gf-form-label {\n  width: 112px;\n}\n\n.common-content .gf-form div {\n  margin: 0px 8px;\n}\n\n.inline-content {\n  display: inline-block;\n}\n\n.inline-input {\n  display: inline-flex;\n  margin: 8px;\n}\n\n.inline-icon {\n  display: inline-block;\n  margin-left: 8px;\n  height: auto;\n}\n\n.inline-button-add {\n  display: inline-block;\n  margin-left: 16px;\n}\n\n.filter-cart {\n  display: block;\n}\n\n/* 过滤条件内容部分 */\n.filter-content {\n  /* padding: 24px; */\n  padding-left: 0px;\n}\n\n/* 详情查询instance content */\n.detail-content-desc {\n  padding: 16px;\n  background-color: #22252b;\n}\n\n.detail-content-desc a {\n  text-align: right;\n  color: cornflowerblue;\n  margin-left: 8px;\n}\n\n/* 帮助文档 */\n.help-content a {\n  text-align: right;\n  color: cornflowerblue;\n  margin-left: 8px;\n}\n\n.detail-content-fileds {\n  margin-top: 8px;\n  padding-top: 0px;\n  background-color: #181b20;\n  padding: 8px;\n}\n\n.repeat-field {\n  padding-bottom: 8px;\n}\n\n/* select 宽度*/\n.gf-form-select-box__value-container, .gf-form-select-box__value-container > div {\n  display: inline-block;\n}\n\n.gf-form-select-box__control {\n  overflow: unset;\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

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

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../node_modules/fast-deep-equal/react.js":
/*!************************************************!*\
  !*** ../node_modules/fast-deep-equal/react.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        continue;
      }

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ "../node_modules/fast-shallow-equal/index.js":
/*!***************************************************!*\
  !*** ../node_modules/fast-shallow-equal/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var keyList = Object.keys;

exports.equal = function equal (a, b) {
  if (a === b) return true;
  if (!(a instanceof Object) || !(b instanceof Object)) return false;

  var keys = keyList(a);
  var length = keys.length;

  for (var i = 0; i < length; i++)
    if (!(keys[i] in b)) return false;

  for (var i = 0; i < length; i++)
    if (a[keys[i]] !== b[keys[i]]) return false;

  return length === keyList(b).length;
};


/***/ }),

/***/ "../node_modules/js-cookie/src/js.cookie.js":
/*!**************************************************!*\
  !*** ../node_modules/js-cookie/src/js.cookie.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "../node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js":
/*!***************************************************************************!*\
  !*** ../node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pkgName = 'nano-css';

module.exports = function warnOnMissingDependencies (addon, renderer, deps) {
    var missing = [];

    for (var i = 0; i < deps.length; i++) {
        var name = deps[i];

        if (!renderer[name]) {
            missing.push(name);
        }
    }

    if (missing.length) {
        var str = 'Addon "' + addon + '" is missing the following dependencies:';

        for (var j = 0; j < missing.length; j++) {
            str += '\n require("' + pkgName + '/addon/' + missing[j] + '").addon(nano);';
        }

        throw new Error(str);
    }
};


/***/ }),

/***/ "../node_modules/nano-css/addon/cssom.js":
/*!***********************************************!*\
  !*** ../node_modules/nano-css/addon/cssom.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.addon = function (renderer) {
    // CSSOM support only browser environment.
    if (!renderer.client) return;

    if (true) {
        __webpack_require__(/*! ./__dev__/warnOnMissingDependencies */ "../node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js")('cssom', renderer, ['sh']);
    }

    // Style sheet for media queries.
    document.head.appendChild(renderer.msh = document.createElement('style'));

    renderer.createRule = function (selector, prelude) {
        var rawCss = selector + '{}';
        if (prelude) rawCss = prelude + '{' + rawCss + '}';
        var sheet = prelude ? renderer.msh.sheet : renderer.sh.sheet;
        var index = sheet.insertRule(rawCss, sheet.cssRules.length);
        var rule = (sheet.cssRules || sheet.rules)[index];

        // Keep track of `index` where rule was inserted in the sheet. This is
        // needed for rule deletion.
        rule.index = index;

        if (prelude) {
            // If rule has media query (it has prelude), move style (CSSStyleDeclaration)
            // object to the "top" to normalize it with a rule without the media
            // query, so that both rules have `.style` property available.
            var selectorRule = (rule.cssRules || rule.rules)[0];
            rule.style = selectorRule.style;
            rule.styleMap = selectorRule.styleMap;
        }

        return rule;
    };
};


/***/ }),

/***/ "../node_modules/nano-css/addon/vcssom.js":
/*!************************************************!*\
  !*** ../node_modules/nano-css/addon/vcssom.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var removeRule = __webpack_require__(/*! ./vcssom/removeRule */ "../node_modules/nano-css/addon/vcssom/removeRule.js").removeRule;

exports.addon = function (renderer) {
    // VCSSOM support only browser environment.
    if (!renderer.client) return;

    if (true) {
        __webpack_require__(/*! ./__dev__/warnOnMissingDependencies */ "../node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js")('cssom', renderer, ['createRule']); // cssom
    }

    var kebab = renderer.kebab;

    function VRule (selector, prelude) {
        this.rule = renderer.createRule(selector, prelude);
        this.decl = {};
    }
    VRule.prototype.diff = function (newDecl) {
        var oldDecl = this.decl;
        var style = this.rule.style;
        var property;
        for (property in oldDecl)
            if (newDecl[property] === undefined)
                style.removeProperty(property);
        for (property in newDecl)
            if (newDecl[property] !== oldDecl[property])
                style.setProperty(kebab(property), newDecl[property]);
        this.decl = newDecl;
    };
    VRule.prototype.del = function () {
        removeRule(this.rule);
    };

    function VSheet () {
        /**
         * {
         *   '<at-rule-prelude>': {
         *     '<selector>': {
         *       color: 'red
         *     }
         *   }
         * }
         */
        this.tree = {};
    }
    VSheet.prototype.diff = function (newTree) {
        var oldTree = this.tree;

        // Remove media queries not present in new tree.
        for (var prelude in oldTree) {
            if (newTree[prelude] === undefined) {
                var rules = oldTree[prelude];
                for (var selector in rules)
                    rules[selector].del();
            }
        }

        for (var prelude in newTree) {
            if (oldTree[prelude] === undefined) {
                // Whole media query is new.
                for (var selector in newTree[prelude]) {
                    var rule = new VRule(selector, prelude);
                    rule.diff(newTree[prelude][selector]);
                    newTree[prelude][selector] = rule;
                }
            } else {
                // Old tree already has rules with this media query.
                var oldRules = oldTree[prelude];
                var newRules = newTree[prelude];

                // Remove rules not present in new tree.
                for (var selector in oldRules)
                    if (!newRules[selector])
                        oldRules[selector].del();

                // Apply new rules.
                for (var selector in newRules) {
                    var rule = oldRules[selector];
                    if (rule) {
                        rule.diff(newRules[selector]);
                        newRules[selector] = rule;
                    } else {
                        rule = new VRule(selector, prelude);
                        rule.diff(newRules[selector]);
                        newRules[selector] = rule;
                    }
                }
            }
        }

        this.tree = newTree;
    };

    renderer.VRule = VRule;
    renderer.VSheet = VSheet;
};


/***/ }),

/***/ "../node_modules/nano-css/addon/vcssom/cssToTree.js":
/*!**********************************************************!*\
  !*** ../node_modules/nano-css/addon/vcssom/cssToTree.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function cssToTree (tree, css, selector, prelude) {
    var declarations = {};
    var hasDeclarations = false;
    var key, value;

    for (key in css) {
        value = css[key];
        if (typeof value !== 'object') {
            hasDeclarations = true;
            declarations[key] = value;
        }
    }

    if (hasDeclarations) {
        if (!tree[prelude]) tree[prelude] = {};
        tree[prelude][selector] = declarations;
    }

    for (key in css) {
        value = css[key];
        if (typeof value === 'object') {
            if (key[0] === '@') {
                cssToTree(tree, value, selector, key);
            } else {
                var hasCurrentSymbol = key.indexOf('&') > -1;
                var selectorParts = selector.split(',');
                if (hasCurrentSymbol) {
                    for (var i = 0; i < selectorParts.length; i++) {
                        selectorParts[i] = key.replace(/&/g, selectorParts[i]);
                    }
                } else {
                    for (var i = 0; i < selectorParts.length; i++) {
                        selectorParts[i] = selectorParts[i] + ' ' + key;
                    }
                }
                cssToTree(tree, value, selectorParts.join(','), prelude);
            }
        }
    }
};

exports.cssToTree = cssToTree;


/***/ }),

/***/ "../node_modules/nano-css/addon/vcssom/removeRule.js":
/*!***********************************************************!*\
  !*** ../node_modules/nano-css/addon/vcssom/removeRule.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function removeRule (rule) {
    var maxIndex = rule.index;
    var sh = rule.parentStyleSheet;
    var rules = sh.cssRules || sh.rules;
    maxIndex = Math.max(maxIndex, rules.length - 1);
    while (maxIndex >= 0) {
        if (rules[maxIndex] === rule) {
            sh.deleteRule(maxIndex);
            break;
        }
        maxIndex--;
    }
}

exports.removeRule = removeRule;


/***/ }),

/***/ "../node_modules/nano-css/index.js":
/*!*****************************************!*\
  !*** ../node_modules/nano-css/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KEBAB_REGEX = /[A-Z]/g;

var hash = function (str) {
    var h = 5381, i = str.length;

    while (i) h = (h * 33) ^ str.charCodeAt(--i);

    return '_' + (h >>> 0).toString(36);
};

exports.create = function (config) {
    config = config || {};
    var assign = config.assign || Object.assign;
    var client = typeof window === 'object';

    // Check if we are really in browser environment.
    if (true) {
        if (client) {
            if ((typeof document !== 'object') || !document.getElementsByTagName('HTML')) {
                console.error(
                    'nano-css detected browser environment because of "window" global, but ' +
                    '"document" global seems to be defective.'
                );
            }
        }
    }

    var renderer = assign({
        raw: '',
        pfx: '_',
        client: client,
        assign: assign,
        stringify: JSON.stringify,
        kebab: function (prop) {
            return prop.replace(KEBAB_REGEX, '-$&').toLowerCase();
        },
        decl: function (key, value) {
            key = renderer.kebab(key);
            return key + ':' + value + ';';
        },
        hash: function (obj) {
            return hash(renderer.stringify(obj));
        },
        selector: function (parent, selector) {
            return parent + (selector[0] === ':' ? ''  : ' ') + selector;
        },
        putRaw: function (rawCssRule) {
            renderer.raw += rawCssRule;
        }
    }, config);

    if (renderer.client) {
        if (!renderer.sh)
            document.head.appendChild(renderer.sh = document.createElement('style'));

        if (true) {
            renderer.sh.setAttribute('data-nano-css-dev', '');

            // Test style sheet used in DEV mode to test if .insetRule() would throw.
            renderer.shTest = document.createElement('style');
            renderer.shTest.setAttribute('data-nano-css-dev-tests', '');
            document.head.appendChild(renderer.shTest);
        }

        renderer.putRaw = function (rawCssRule) {
            // .insertRule() is faster than .appendChild(), that's why we use it in PROD.
            // But CSS injected using .insertRule() is not displayed in Chrome Devtools,
            // that's why we use .appendChild in DEV.
            if (false) { var sheet; } else {
                // Test if .insertRule() works in dev mode. Unknown pseudo-selectors will throw when
                // .insertRule() is used, but .appendChild() will not throw.
                try {
                    renderer.shTest.sheet.insertRule(rawCssRule, renderer.shTest.sheet.cssRules.length);
                } catch (error) {
                    if (config.verbose) {
                        console.error(error);
                    }
                }

                // Insert pretty-printed CSS for dev mode.
                renderer.sh.appendChild(document.createTextNode(rawCssRule));
            }
        };
    }

    renderer.put = function (selector, decls, atrule) {
        var str = '';
        var prop, value;
        var postponed = [];

        for (prop in decls) {
            value = decls[prop];

            if ((value instanceof Object) && !(value instanceof Array)) {
                postponed.push(prop);
            } else {
                if (( true) && !renderer.sourcemaps) {
                    str += '    ' + renderer.decl(prop, value, selector, atrule) + '\n';
                } else {
                    str += renderer.decl(prop, value, selector, atrule);
                }
            }
        }

        if (str) {
            if (( true) && !renderer.sourcemaps) {
                str = '\n' + selector + ' {\n' + str + '}\n';
            } else {
                str = selector + '{' + str + '}';
            }
            renderer.putRaw(atrule ? atrule + '{' + str + '}' : str);
        }

        for (var i = 0; i < postponed.length; i++) {
            prop = postponed[i];

            if (prop[0] === '@' && prop !== '@font-face') {
                renderer.putAt(selector, decls[prop], prop);
            } else {
                renderer.put(renderer.selector(selector, prop), decls[prop], atrule);
            }
        }
    };

    renderer.putAt = renderer.put;

    return renderer;
};


/***/ }),

/***/ "../node_modules/react-universal-interface/lib/addClassDecoratorSupport.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/react-universal-interface/lib/addClassDecoratorSupport.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var wrapInStatefulComponent_1 = tslib_1.__importDefault(__webpack_require__(/*! ./wrapInStatefulComponent */ "../node_modules/react-universal-interface/lib/wrapInStatefulComponent.js"));
var addClassDecoratorSupport = function (Comp) {
    var isSFC = !Comp.prototype;
    return !isSFC ? Comp : wrapInStatefulComponent_1.default(Comp);
};
exports.default = addClassDecoratorSupport;
//# sourceMappingURL=addClassDecoratorSupport.js.map

/***/ }),

/***/ "../node_modules/react-universal-interface/lib/createEnhancer.js":
/*!***********************************************************************!*\
  !*** ../node_modules/react-universal-interface/lib/createEnhancer.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.divWrapper = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var React = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
var addClassDecoratorSupport_1 = tslib_1.__importDefault(__webpack_require__(/*! ./addClassDecoratorSupport */ "../node_modules/react-universal-interface/lib/addClassDecoratorSupport.js"));
var h = React.createElement;
var noWrap = function (Comp, propName, props, state) {
    var _a;
    return h(Comp, propName ? tslib_1.__assign((_a = {}, _a[propName] = state, _a), props) : tslib_1.__assign(tslib_1.__assign({}, state), props));
};
exports.divWrapper = function (Comp, propName, props, state) {
    return h('div', null, noWrap(Comp, propName, props, state));
};
var createEnhancer = function (Facc, prop, wrapper) {
    if (wrapper === void 0) { wrapper = noWrap; }
    var enhancer = function (Comp, propName, faccProps) {
        if (propName === void 0) { propName = prop; }
        if (faccProps === void 0) { faccProps = null; }
        var isClassDecoratorMethodCall = typeof Comp === 'string';
        if (isClassDecoratorMethodCall) {
            return function (Klass) { return enhancer(Klass, Comp || prop, propName); };
        }
        var Enhanced = function (props) {
            return h(Facc, faccProps, function (state) { return wrapper(Comp, propName, props, state); });
        };
        if (true) {
            Enhanced.displayName = (Facc.displayName || Facc.name) + "(" + (Comp.displayName || Comp.name) + ")";
        }
        return isClassDecoratorMethodCall ? addClassDecoratorSupport_1.default(Enhanced) : Enhanced;
    };
    return enhancer;
};
exports.default = createEnhancer;
//# sourceMappingURL=createEnhancer.js.map

/***/ }),

/***/ "../node_modules/react-universal-interface/lib/hookToRenderProp.js":
/*!*************************************************************************!*\
  !*** ../node_modules/react-universal-interface/lib/hookToRenderProp.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var render_1 = tslib_1.__importDefault(__webpack_require__(/*! ./render */ "../node_modules/react-universal-interface/lib/render.js"));
var defaultMapPropsToArgs = function (props) { return [props]; };
var hookToRenderProp = function (hook, mapPropsToArgs) {
    if (mapPropsToArgs === void 0) { mapPropsToArgs = defaultMapPropsToArgs; }
    return function (props) { return render_1.default(props, hook.apply(void 0, mapPropsToArgs(props))); };
};
exports.default = hookToRenderProp;
//# sourceMappingURL=hookToRenderProp.js.map

/***/ }),

/***/ "../node_modules/react-universal-interface/lib/index.js":
/*!**************************************************************!*\
  !*** ../node_modules/react-universal-interface/lib/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.hookToRenderProp = exports.createEnhancer = exports.render = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var render_1 = tslib_1.__importDefault(__webpack_require__(/*! ./render */ "../node_modules/react-universal-interface/lib/render.js"));
exports.render = render_1.default;
var createEnhancer_1 = tslib_1.__importDefault(__webpack_require__(/*! ./createEnhancer */ "../node_modules/react-universal-interface/lib/createEnhancer.js"));
exports.createEnhancer = createEnhancer_1.default;
var hookToRenderProp_1 = tslib_1.__importDefault(__webpack_require__(/*! ./hookToRenderProp */ "../node_modules/react-universal-interface/lib/hookToRenderProp.js"));
exports.hookToRenderProp = hookToRenderProp_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/react-universal-interface/lib/render.js":
/*!***************************************************************!*\
  !*** ../node_modules/react-universal-interface/lib/render.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var react_1 = __webpack_require__(/*! react */ "react");
var isReact16Plus = parseInt(react_1.version.substr(0, react_1.version.indexOf('.'))) > 15;
var isFn = function (fn) { return typeof fn === 'function'; };
var render = function (props, data) {
    var more = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        more[_i - 2] = arguments[_i];
    }
    if (true) {
        if (typeof props !== 'object') {
            throw new TypeError('renderChildren(props, data) first argument must be a props object.');
        }
        var children_1 = props.children, render_1 = props.render;
        if (isFn(children_1) && isFn(render_1)) {
            console.warn('Both "render" and "children" are specified for in a universal interface component. ' +
                'Children will be used.');
            console.trace();
        }
        if (typeof data !== 'object') {
            console.warn('Universal component interface normally expects data to be an object, ' +
                ("\"" + typeof data + "\" received."));
            console.trace();
        }
    }
    var render = props.render, _a = props.children, children = _a === void 0 ? render : _a, component = props.component, _b = props.comp, comp = _b === void 0 ? component : _b;
    if (isFn(children))
        return children.apply(void 0, tslib_1.__spreadArrays([data], more));
    if (comp) {
        return react_1.createElement(comp, data);
    }
    if (children instanceof Array)
        return isReact16Plus ? children : react_1.createElement.apply(void 0, tslib_1.__spreadArrays(['div', null], children));
    if (children && (children instanceof Object)) {
        if (true) {
            if (!children.type || ((typeof children.type !== 'string') && (typeof children.type !== 'function') && (typeof children.type !== 'symbol'))) {
                console.warn('Universal component interface received object as children, ' +
                    'expected React element, but received unexpected React "type".');
                console.trace();
            }
            if (typeof children.type === 'string')
                return children;
            return react_1.cloneElement(children, Object.assign({}, children.props, data));
        }
        else {}
    }
    return children || null;
};
exports.default = render;
//# sourceMappingURL=render.js.map

/***/ }),

/***/ "../node_modules/react-universal-interface/lib/wrapInStatefulComponent.js":
/*!********************************************************************************!*\
  !*** ../node_modules/react-universal-interface/lib/wrapInStatefulComponent.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var React = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
var wrapInStatefulComponent = function (Comp) {
    var Decorated = (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.render = function () {
            return Comp(this.props, this.context);
        };
        return class_1;
    }(React.Component));
    if (true) {
        Decorated.displayName = "Decorated(" + (Comp.displayName || Comp.name) + ")";
    }
    return Decorated;
};
exports.default = wrapInStatefulComponent;
//# sourceMappingURL=wrapInStatefulComponent.js.map

/***/ }),

/***/ "../node_modules/react-use/esm/factory/createBreakpoint.js":
/*!*****************************************************************!*\
  !*** ../node_modules/react-use/esm/factory/createBreakpoint.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../misc/util */ "../node_modules/react-use/esm/misc/util.js");


var createBreakpoint = function (breakpoints) {
    if (breakpoints === void 0) { breakpoints = { laptopL: 1440, laptop: 1024, tablet: 768 }; }
    return function () {
        var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_misc_util__WEBPACK_IMPORTED_MODULE_1__["isBrowser"] ? window.innerWidth : 0), screen = _a[0], setScreen = _a[1];
        Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
            var setSideScreen = function () {
                setScreen(window.innerWidth);
            };
            setSideScreen();
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'resize', setSideScreen);
            return function () {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'resize', setSideScreen);
            };
        });
        var sortedBreakpoints = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return Object.entries(breakpoints).sort(function (a, b) { return (a[1] >= b[1] ? 1 : -1); }); }, [breakpoints]);
        var result = sortedBreakpoints.reduce(function (acc, _a) {
            var name = _a[0], width = _a[1];
            if (screen >= width) {
                return name;
            }
            else {
                return acc;
            }
        }, sortedBreakpoints[0][0]);
        return result;
    };
};
/* harmony default export */ __webpack_exports__["default"] = (createBreakpoint);


/***/ }),

/***/ "../node_modules/react-use/esm/factory/createGlobalState.js":
/*!******************************************************************!*\
  !*** ../node_modules/react-use/esm/factory/createGlobalState.js ***!
  \******************************************************************/
/*! exports provided: createGlobalState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalState", function() { return createGlobalState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_hookState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../misc/hookState */ "../node_modules/react-use/esm/misc/hookState.js");
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useEffectOnce */ "../node_modules/react-use/esm/useEffectOnce.js");
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useIsomorphicLayoutEffect */ "../node_modules/react-use/esm/useIsomorphicLayoutEffect.js");




function createGlobalState(initialState) {
    var store = {
        state: initialState instanceof Function ? initialState() : initialState,
        setState: function (nextState) {
            store.state = Object(_misc_hookState__WEBPACK_IMPORTED_MODULE_1__["resolveHookState"])(nextState, store.state);
            store.setters.forEach(function (setter) { return setter(store.state); });
        },
        setters: [],
    };
    return function () {
        var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(store.state), globalState = _a[0], stateSetter = _a[1];
        Object(_useEffectOnce__WEBPACK_IMPORTED_MODULE_2__["default"])(function () { return function () {
            store.setters = store.setters.filter(function (setter) { return setter !== stateSetter; });
        }; });
        Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
            if (!store.setters.includes(stateSetter)) {
                store.setters.push(stateSetter);
            }
        });
        return [globalState, store.setState];
    };
}
/* harmony default export */ __webpack_exports__["default"] = (createGlobalState);


/***/ }),

/***/ "../node_modules/react-use/esm/factory/createHTMLMediaHook.js":
/*!********************************************************************!*\
  !*** ../node_modules/react-use/esm/factory/createHTMLMediaHook.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createHTMLMediaHook; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useSetState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useSetState */ "../node_modules/react-use/esm/useSetState.js");
/* harmony import */ var _misc_parseTimeRanges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../misc/parseTimeRanges */ "../node_modules/react-use/esm/misc/parseTimeRanges.js");





function createHTMLMediaHook(tag) {
    return function (elOrProps) {
        var element;
        var props;
        if (react__WEBPACK_IMPORTED_MODULE_1__["isValidElement"](elOrProps)) {
            element = elOrProps;
            props = element.props;
        }
        else {
            props = elOrProps;
        }
        var _a = Object(_useSetState__WEBPACK_IMPORTED_MODULE_2__["default"])({
            buffered: [],
            time: 0,
            duration: 0,
            paused: true,
            muted: false,
            volume: 1,
            playing: false,
        }), state = _a[0], setState = _a[1];
        var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
        var wrapEvent = function (userEvent, proxyEvent) {
            return function (event) {
                try {
                    proxyEvent && proxyEvent(event);
                }
                finally {
                    userEvent && userEvent(event);
                }
            };
        };
        var onPlay = function () { return setState({ paused: false }); };
        var onPlaying = function () { return setState({ playing: true }); };
        var onWaiting = function () { return setState({ playing: false }); };
        var onPause = function () { return setState({ paused: true, playing: false }); };
        var onVolumeChange = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            setState({
                muted: el.muted,
                volume: el.volume,
            });
        };
        var onDurationChange = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            var duration = el.duration, buffered = el.buffered;
            setState({
                duration: duration,
                buffered: Object(_misc_parseTimeRanges__WEBPACK_IMPORTED_MODULE_3__["default"])(buffered),
            });
        };
        var onTimeUpdate = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            setState({ time: el.currentTime });
        };
        var onProgress = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            setState({ buffered: Object(_misc_parseTimeRanges__WEBPACK_IMPORTED_MODULE_3__["default"])(el.buffered) });
        };
        if (element) {
            element = react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"](element, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ controls: false }, props), { ref: ref, onPlay: wrapEvent(props.onPlay, onPlay), onPlaying: wrapEvent(props.onPlaying, onPlaying), onWaiting: wrapEvent(props.onWaiting, onWaiting), onPause: wrapEvent(props.onPause, onPause), onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange), onDurationChange: wrapEvent(props.onDurationChange, onDurationChange), onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate), onProgress: wrapEvent(props.onProgress, onProgress) }));
        }
        else {
            element = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](tag, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ controls: false }, props), { ref: ref, onPlay: wrapEvent(props.onPlay, onPlay), onPlaying: wrapEvent(props.onPlaying, onPlaying), onWaiting: wrapEvent(props.onWaiting, onWaiting), onPause: wrapEvent(props.onPause, onPause), onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange), onDurationChange: wrapEvent(props.onDurationChange, onDurationChange), onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate), onProgress: wrapEvent(props.onProgress, onProgress) })); // TODO: fix this typing.
        }
        // Some browsers return `Promise` on `.play()` and may throw errors
        // if one tries to execute another `.play()` or `.pause()` while that
        // promise is resolving. So we prevent that with this lock.
        // See: https://bugs.chromium.org/p/chromium/issues/detail?id=593273
        var lockPlay = false;
        var controls = {
            play: function () {
                var el = ref.current;
                if (!el) {
                    return undefined;
                }
                if (!lockPlay) {
                    var promise = el.play();
                    var isPromise = typeof promise === 'object';
                    if (isPromise) {
                        lockPlay = true;
                        var resetLock = function () {
                            lockPlay = false;
                        };
                        promise.then(resetLock, resetLock);
                    }
                    return promise;
                }
                return undefined;
            },
            pause: function () {
                var el = ref.current;
                if (el && !lockPlay) {
                    return el.pause();
                }
            },
            seek: function (time) {
                var el = ref.current;
                if (!el || state.duration === undefined) {
                    return;
                }
                time = Math.min(state.duration, Math.max(0, time));
                el.currentTime = time;
            },
            volume: function (volume) {
                var el = ref.current;
                if (!el) {
                    return;
                }
                volume = Math.min(1, Math.max(0, volume));
                el.volume = volume;
                setState({ volume: volume });
            },
            mute: function () {
                var el = ref.current;
                if (!el) {
                    return;
                }
                el.muted = true;
            },
            unmute: function () {
                var el = ref.current;
                if (!el) {
                    return;
                }
                el.muted = false;
            },
        };
        Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
            var el = ref.current;
            if (!el) {
                if (true) {
                    if (tag === 'audio') {
                        console.error('useAudio() ref to <audio> element is empty at mount. ' +
                            'It seem you have not rendered the audio element, which it ' +
                            'returns as the first argument const [audio] = useAudio(...).');
                    }
                    else if (tag === 'video') {
                        console.error('useVideo() ref to <video> element is empty at mount. ' +
                            'It seem you have not rendered the video element, which it ' +
                            'returns as the first argument const [video] = useVideo(...).');
                    }
                }
                return;
            }
            setState({
                volume: el.volume,
                muted: el.muted,
                paused: el.paused,
            });
            // Start media, if autoPlay requested.
            if (props.autoPlay && el.paused) {
                controls.play();
            }
        }, [props.src]);
        return [element, state, controls, ref];
    };
}


/***/ }),

/***/ "../node_modules/react-use/esm/factory/createMemo.js":
/*!***********************************************************!*\
  !*** ../node_modules/react-use/esm/factory/createMemo.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var createMemo = function (fn) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return fn.apply(void 0, args); }, args);
    };
};
/* harmony default export */ __webpack_exports__["default"] = (createMemo);


/***/ }),

/***/ "../node_modules/react-use/esm/factory/createReducer.js":
/*!**************************************************************!*\
  !*** ../node_modules/react-use/esm/factory/createReducer.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useUpdateEffect */ "../node_modules/react-use/esm/useUpdateEffect.js");


function composeMiddleware(chain) {
    return function (context, dispatch) {
        return chain.reduceRight(function (res, middleware) {
            return middleware(context)(res);
        }, dispatch);
    };
}
var createReducer = function () {
    var middlewares = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        middlewares[_i] = arguments[_i];
    }
    var composedMiddleware = composeMiddleware(middlewares);
    return function (reducer, initialState, initializer) {
        if (initializer === void 0) { initializer = function (value) { return value; }; }
        var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(initializer(initialState));
        var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(ref.current), setState = _a[1];
        var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (action) {
            ref.current = reducer(ref.current, action);
            setState(ref.current);
            return action;
        }, [reducer]);
        var dispatchRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(composedMiddleware({
            getState: function () { return ref.current; },
            dispatch: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return dispatchRef.current.apply(dispatchRef, args);
            },
        }, dispatch));
        Object(_useUpdateEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
            dispatchRef.current = composedMiddleware({
                getState: function () { return ref.current; },
                dispatch: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return dispatchRef.current.apply(dispatchRef, args);
                },
            }, dispatch);
        }, [dispatch]);
        return [ref.current, dispatchRef.current];
    };
};
/* harmony default export */ __webpack_exports__["default"] = (createReducer);


/***/ }),

/***/ "../node_modules/react-use/esm/factory/createReducerContext.js":
/*!*********************************************************************!*\
  !*** ../node_modules/react-use/esm/factory/createReducerContext.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var createReducerContext = function (reducer, defaultInitialState) {
    var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(undefined);
    var providerFactory = function (props, children) { return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(context.Provider, props, children); };
    var ReducerProvider = function (_a) {
        var children = _a.children, initialState = _a.initialState;
        var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState !== undefined ? initialState : defaultInitialState);
        return providerFactory({ value: state }, children);
    };
    var useReducerContext = function () {
        var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);
        if (state == null) {
            throw new Error("useReducerContext must be used inside a ReducerProvider.");
        }
        return state;
    };
    return [useReducerContext, ReducerProvider, context];
};
/* harmony default export */ __webpack_exports__["default"] = (createReducerContext);


/***/ }),

/***/ "../node_modules/react-use/esm/factory/createStateContext.js":
/*!*******************************************************************!*\
  !*** ../node_modules/react-use/esm/factory/createStateContext.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var createStateContext = function (defaultInitialValue) {
    var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(undefined);
    var providerFactory = function (props, children) { return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(context.Provider, props, children); };
    var StateProvider = function (_a) {
        var children = _a.children, initialValue = _a.initialValue;
        var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue !== undefined ? initialValue : defaultInitialValue);
        return providerFactory({ value: state }, children);
    };
    var useStateContext = function () {
        var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);
        if (state == null) {
            throw new Error("useStateContext must be used inside a StateProvider.");
        }
        return state;
    };
    return [useStateContext, StateProvider, context];
};
/* harmony default export */ __webpack_exports__["default"] = (createStateContext);


/***/ }),

/***/ "../node_modules/react-use/esm/index.js":
/*!**********************************************!*\
  !*** ../node_modules/react-use/esm/index.js ***!
  \**********************************************/
/*! exports provided: createMemo, createReducerContext, createReducer, createStateContext, useAsync, useAsyncFn, useAsyncRetry, useAudio, useBattery, useBeforeUnload, useBoolean, useClickAway, useCookie, useCopyToClipboard, useCounter, useCss, useCustomCompareEffect, useDebounce, useDeepCompareEffect, useDefault, useDrop, useDropArea, useEffectOnce, useEnsuredForwardedRef, ensuredForwardRef, useEvent, useError, useFavicon, useFullscreen, useGeolocation, useGetSet, useGetSetState, useHarmonicIntervalFn, useHover, useHoverDirty, useIdle, useIntersection, useInterval, useIsomorphicLayoutEffect, useKey, createBreakpoint, useKeyPress, useKeyPressEvent, useLatest, useLifecycles, useList, useLocalStorage, useLocation, useLockBodyScroll, useLogger, useLongPress, useMap, useMedia, useMediaDevices, useMediatedState, useMethods, useMotion, useMount, useMountedState, useMouse, useMouseHovered, useMouseWheel, useNetworkState, useNumber, useObservable, useOrientation, usePageLeave, usePermission, usePrevious, usePreviousDistinct, usePromise, useQueue, useRaf, useRafLoop, useRafState, useSearchParam, useScratch, useScroll, useScrolling, useSessionStorage, useSetState, useShallowCompareEffect, useSize, useSlider, useSpeech, useStartTyping, useStateWithHistory, useStateList, useThrottle, useThrottleFn, useTimeout, useTimeoutFn, useTitle, useToggle, useTween, useUnmount, useUnmountPromise, useUpdate, useUpdateEffect, useUpsert, useVibrate, useVideo, useStateValidator, useScrollbarWidth, useMultiStateValidator, useWindowScroll, useWindowSize, useMeasure, useRendersCount, useFirstMountState, useSet, createGlobalState, useHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _factory_createMemo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory/createMemo */ "../node_modules/react-use/esm/factory/createMemo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMemo", function() { return _factory_createMemo__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _factory_createReducerContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factory/createReducerContext */ "../node_modules/react-use/esm/factory/createReducerContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReducerContext", function() { return _factory_createReducerContext__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _factory_createReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factory/createReducer */ "../node_modules/react-use/esm/factory/createReducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReducer", function() { return _factory_createReducer__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _factory_createStateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factory/createStateContext */ "../node_modules/react-use/esm/factory/createStateContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStateContext", function() { return _factory_createStateContext__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _useAsync__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useAsync */ "../node_modules/react-use/esm/useAsync.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAsync", function() { return _useAsync__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _useAsyncFn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useAsyncFn */ "../node_modules/react-use/esm/useAsyncFn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAsyncFn", function() { return _useAsyncFn__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _useAsyncRetry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useAsyncRetry */ "../node_modules/react-use/esm/useAsyncRetry.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAsyncRetry", function() { return _useAsyncRetry__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _useAudio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useAudio */ "../node_modules/react-use/esm/useAudio.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAudio", function() { return _useAudio__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _useBattery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useBattery */ "../node_modules/react-use/esm/useBattery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useBattery", function() { return _useBattery__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _useBeforeUnload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useBeforeUnload */ "../node_modules/react-use/esm/useBeforeUnload.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useBeforeUnload", function() { return _useBeforeUnload__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _useBoolean__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useBoolean */ "../node_modules/react-use/esm/useBoolean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useBoolean", function() { return _useBoolean__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _useClickAway__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useClickAway */ "../node_modules/react-use/esm/useClickAway.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useClickAway", function() { return _useClickAway__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _useCookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./useCookie */ "../node_modules/react-use/esm/useCookie.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCookie", function() { return _useCookie__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _useCopyToClipboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./useCopyToClipboard */ "../node_modules/react-use/esm/useCopyToClipboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCopyToClipboard", function() { return _useCopyToClipboard__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _useCounter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./useCounter */ "../node_modules/react-use/esm/useCounter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCounter", function() { return _useCounter__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _useCss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./useCss */ "../node_modules/react-use/esm/useCss.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCss", function() { return _useCss__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _useCustomCompareEffect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./useCustomCompareEffect */ "../node_modules/react-use/esm/useCustomCompareEffect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCustomCompareEffect", function() { return _useCustomCompareEffect__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _useDebounce__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./useDebounce */ "../node_modules/react-use/esm/useDebounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebounce", function() { return _useDebounce__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _useDeepCompareEffect__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./useDeepCompareEffect */ "../node_modules/react-use/esm/useDeepCompareEffect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDeepCompareEffect", function() { return _useDeepCompareEffect__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _useDefault__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./useDefault */ "../node_modules/react-use/esm/useDefault.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDefault", function() { return _useDefault__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _useDrop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./useDrop */ "../node_modules/react-use/esm/useDrop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDrop", function() { return _useDrop__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _useDropArea__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./useDropArea */ "../node_modules/react-use/esm/useDropArea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDropArea", function() { return _useDropArea__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./useEffectOnce */ "../node_modules/react-use/esm/useEffectOnce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEffectOnce", function() { return _useEffectOnce__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _useEnsuredForwardedRef__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./useEnsuredForwardedRef */ "../node_modules/react-use/esm/useEnsuredForwardedRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEnsuredForwardedRef", function() { return _useEnsuredForwardedRef__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ensuredForwardRef", function() { return _useEnsuredForwardedRef__WEBPACK_IMPORTED_MODULE_23__["ensuredForwardRef"]; });

/* harmony import */ var _useEvent__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./useEvent */ "../node_modules/react-use/esm/useEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEvent", function() { return _useEvent__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _useError__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./useError */ "../node_modules/react-use/esm/useError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useError", function() { return _useError__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _useFavicon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./useFavicon */ "../node_modules/react-use/esm/useFavicon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFavicon", function() { return _useFavicon__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _useFullscreen__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./useFullscreen */ "../node_modules/react-use/esm/useFullscreen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFullscreen", function() { return _useFullscreen__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _useGeolocation__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./useGeolocation */ "../node_modules/react-use/esm/useGeolocation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGeolocation", function() { return _useGeolocation__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _useGetSet__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./useGetSet */ "../node_modules/react-use/esm/useGetSet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGetSet", function() { return _useGetSet__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _useGetSetState__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./useGetSetState */ "../node_modules/react-use/esm/useGetSetState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGetSetState", function() { return _useGetSetState__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _useHarmonicIntervalFn__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./useHarmonicIntervalFn */ "../node_modules/react-use/esm/useHarmonicIntervalFn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHarmonicIntervalFn", function() { return _useHarmonicIntervalFn__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _useHover__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./useHover */ "../node_modules/react-use/esm/useHover.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHover", function() { return _useHover__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _useHoverDirty__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./useHoverDirty */ "../node_modules/react-use/esm/useHoverDirty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHoverDirty", function() { return _useHoverDirty__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _useIdle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./useIdle */ "../node_modules/react-use/esm/useIdle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIdle", function() { return _useIdle__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _useIntersection__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./useIntersection */ "../node_modules/react-use/esm/useIntersection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIntersection", function() { return _useIntersection__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _useInterval__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./useInterval */ "../node_modules/react-use/esm/useInterval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useInterval", function() { return _useInterval__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "../node_modules/react-use/esm/useIsomorphicLayoutEffect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIsomorphicLayoutEffect", function() { return _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _useKey__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./useKey */ "../node_modules/react-use/esm/useKey.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useKey", function() { return _useKey__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _factory_createBreakpoint__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./factory/createBreakpoint */ "../node_modules/react-use/esm/factory/createBreakpoint.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBreakpoint", function() { return _factory_createBreakpoint__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _useKeyPress__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./useKeyPress */ "../node_modules/react-use/esm/useKeyPress.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useKeyPress", function() { return _useKeyPress__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _useKeyPressEvent__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./useKeyPressEvent */ "../node_modules/react-use/esm/useKeyPressEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useKeyPressEvent", function() { return _useKeyPressEvent__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _useLatest__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./useLatest */ "../node_modules/react-use/esm/useLatest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLatest", function() { return _useLatest__WEBPACK_IMPORTED_MODULE_42__["default"]; });

/* harmony import */ var _useLifecycles__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./useLifecycles */ "../node_modules/react-use/esm/useLifecycles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLifecycles", function() { return _useLifecycles__WEBPACK_IMPORTED_MODULE_43__["default"]; });

/* harmony import */ var _useList__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./useList */ "../node_modules/react-use/esm/useList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useList", function() { return _useList__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/* harmony import */ var _useLocalStorage__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./useLocalStorage */ "../node_modules/react-use/esm/useLocalStorage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocalStorage", function() { return _useLocalStorage__WEBPACK_IMPORTED_MODULE_45__["default"]; });

/* harmony import */ var _useLocation__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./useLocation */ "../node_modules/react-use/esm/useLocation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocation", function() { return _useLocation__WEBPACK_IMPORTED_MODULE_46__["default"]; });

/* harmony import */ var _useLockBodyScroll__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./useLockBodyScroll */ "../node_modules/react-use/esm/useLockBodyScroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLockBodyScroll", function() { return _useLockBodyScroll__WEBPACK_IMPORTED_MODULE_47__["default"]; });

/* harmony import */ var _useLogger__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./useLogger */ "../node_modules/react-use/esm/useLogger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLogger", function() { return _useLogger__WEBPACK_IMPORTED_MODULE_48__["default"]; });

/* harmony import */ var _useLongPress__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./useLongPress */ "../node_modules/react-use/esm/useLongPress.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLongPress", function() { return _useLongPress__WEBPACK_IMPORTED_MODULE_49__["default"]; });

/* harmony import */ var _useMap__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./useMap */ "../node_modules/react-use/esm/useMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMap", function() { return _useMap__WEBPACK_IMPORTED_MODULE_50__["default"]; });

/* harmony import */ var _useMedia__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./useMedia */ "../node_modules/react-use/esm/useMedia.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMedia", function() { return _useMedia__WEBPACK_IMPORTED_MODULE_51__["default"]; });

/* harmony import */ var _useMediaDevices__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./useMediaDevices */ "../node_modules/react-use/esm/useMediaDevices.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMediaDevices", function() { return _useMediaDevices__WEBPACK_IMPORTED_MODULE_52__["default"]; });

/* harmony import */ var _useMediatedState__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./useMediatedState */ "../node_modules/react-use/esm/useMediatedState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMediatedState", function() { return _useMediatedState__WEBPACK_IMPORTED_MODULE_53__["useMediatedState"]; });

/* harmony import */ var _useMethods__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./useMethods */ "../node_modules/react-use/esm/useMethods.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMethods", function() { return _useMethods__WEBPACK_IMPORTED_MODULE_54__["default"]; });

/* harmony import */ var _useMotion__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./useMotion */ "../node_modules/react-use/esm/useMotion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMotion", function() { return _useMotion__WEBPACK_IMPORTED_MODULE_55__["default"]; });

/* harmony import */ var _useMount__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./useMount */ "../node_modules/react-use/esm/useMount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMount", function() { return _useMount__WEBPACK_IMPORTED_MODULE_56__["default"]; });

/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./useMountedState */ "../node_modules/react-use/esm/useMountedState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMountedState", function() { return _useMountedState__WEBPACK_IMPORTED_MODULE_57__["default"]; });

/* harmony import */ var _useMouse__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./useMouse */ "../node_modules/react-use/esm/useMouse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMouse", function() { return _useMouse__WEBPACK_IMPORTED_MODULE_58__["default"]; });

/* harmony import */ var _useMouseHovered__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./useMouseHovered */ "../node_modules/react-use/esm/useMouseHovered.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMouseHovered", function() { return _useMouseHovered__WEBPACK_IMPORTED_MODULE_59__["default"]; });

/* harmony import */ var _useMouseWheel__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./useMouseWheel */ "../node_modules/react-use/esm/useMouseWheel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMouseWheel", function() { return _useMouseWheel__WEBPACK_IMPORTED_MODULE_60__["default"]; });

/* harmony import */ var _useNetworkState__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./useNetworkState */ "../node_modules/react-use/esm/useNetworkState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNetworkState", function() { return _useNetworkState__WEBPACK_IMPORTED_MODULE_61__["default"]; });

/* harmony import */ var _useNumber__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./useNumber */ "../node_modules/react-use/esm/useNumber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNumber", function() { return _useNumber__WEBPACK_IMPORTED_MODULE_62__["default"]; });

/* harmony import */ var _useObservable__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./useObservable */ "../node_modules/react-use/esm/useObservable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useObservable", function() { return _useObservable__WEBPACK_IMPORTED_MODULE_63__["default"]; });

/* harmony import */ var _useOrientation__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./useOrientation */ "../node_modules/react-use/esm/useOrientation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOrientation", function() { return _useOrientation__WEBPACK_IMPORTED_MODULE_64__["default"]; });

/* harmony import */ var _usePageLeave__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./usePageLeave */ "../node_modules/react-use/esm/usePageLeave.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageLeave", function() { return _usePageLeave__WEBPACK_IMPORTED_MODULE_65__["default"]; });

/* harmony import */ var _usePermission__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./usePermission */ "../node_modules/react-use/esm/usePermission.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePermission", function() { return _usePermission__WEBPACK_IMPORTED_MODULE_66__["default"]; });

/* harmony import */ var _usePrevious__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./usePrevious */ "../node_modules/react-use/esm/usePrevious.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePrevious", function() { return _usePrevious__WEBPACK_IMPORTED_MODULE_67__["default"]; });

/* harmony import */ var _usePreviousDistinct__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./usePreviousDistinct */ "../node_modules/react-use/esm/usePreviousDistinct.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePreviousDistinct", function() { return _usePreviousDistinct__WEBPACK_IMPORTED_MODULE_68__["default"]; });

/* harmony import */ var _usePromise__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./usePromise */ "../node_modules/react-use/esm/usePromise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePromise", function() { return _usePromise__WEBPACK_IMPORTED_MODULE_69__["default"]; });

/* harmony import */ var _useQueue__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./useQueue */ "../node_modules/react-use/esm/useQueue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQueue", function() { return _useQueue__WEBPACK_IMPORTED_MODULE_70__["default"]; });

/* harmony import */ var _useRaf__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./useRaf */ "../node_modules/react-use/esm/useRaf.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRaf", function() { return _useRaf__WEBPACK_IMPORTED_MODULE_71__["default"]; });

/* harmony import */ var _useRafLoop__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./useRafLoop */ "../node_modules/react-use/esm/useRafLoop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRafLoop", function() { return _useRafLoop__WEBPACK_IMPORTED_MODULE_72__["default"]; });

/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./useRafState */ "../node_modules/react-use/esm/useRafState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRafState", function() { return _useRafState__WEBPACK_IMPORTED_MODULE_73__["default"]; });

/* harmony import */ var _useSearchParam__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./useSearchParam */ "../node_modules/react-use/esm/useSearchParam.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSearchParam", function() { return _useSearchParam__WEBPACK_IMPORTED_MODULE_74__["default"]; });

/* harmony import */ var _useScratch__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./useScratch */ "../node_modules/react-use/esm/useScratch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScratch", function() { return _useScratch__WEBPACK_IMPORTED_MODULE_75__["default"]; });

/* harmony import */ var _useScroll__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./useScroll */ "../node_modules/react-use/esm/useScroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScroll", function() { return _useScroll__WEBPACK_IMPORTED_MODULE_76__["default"]; });

/* harmony import */ var _useScrolling__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./useScrolling */ "../node_modules/react-use/esm/useScrolling.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScrolling", function() { return _useScrolling__WEBPACK_IMPORTED_MODULE_77__["default"]; });

/* harmony import */ var _useSessionStorage__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./useSessionStorage */ "../node_modules/react-use/esm/useSessionStorage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSessionStorage", function() { return _useSessionStorage__WEBPACK_IMPORTED_MODULE_78__["default"]; });

/* harmony import */ var _useSetState__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./useSetState */ "../node_modules/react-use/esm/useSetState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSetState", function() { return _useSetState__WEBPACK_IMPORTED_MODULE_79__["default"]; });

/* harmony import */ var _useShallowCompareEffect__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./useShallowCompareEffect */ "../node_modules/react-use/esm/useShallowCompareEffect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useShallowCompareEffect", function() { return _useShallowCompareEffect__WEBPACK_IMPORTED_MODULE_80__["default"]; });

/* harmony import */ var _useSize__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./useSize */ "../node_modules/react-use/esm/useSize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSize", function() { return _useSize__WEBPACK_IMPORTED_MODULE_81__["default"]; });

/* harmony import */ var _useSlider__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./useSlider */ "../node_modules/react-use/esm/useSlider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSlider", function() { return _useSlider__WEBPACK_IMPORTED_MODULE_82__["default"]; });

/* harmony import */ var _useSpeech__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./useSpeech */ "../node_modules/react-use/esm/useSpeech.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSpeech", function() { return _useSpeech__WEBPACK_IMPORTED_MODULE_83__["default"]; });

/* harmony import */ var _useStartTyping__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./useStartTyping */ "../node_modules/react-use/esm/useStartTyping.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStartTyping", function() { return _useStartTyping__WEBPACK_IMPORTED_MODULE_84__["default"]; });

/* harmony import */ var _useStateWithHistory__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./useStateWithHistory */ "../node_modules/react-use/esm/useStateWithHistory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStateWithHistory", function() { return _useStateWithHistory__WEBPACK_IMPORTED_MODULE_85__["useStateWithHistory"]; });

/* harmony import */ var _useStateList__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./useStateList */ "../node_modules/react-use/esm/useStateList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStateList", function() { return _useStateList__WEBPACK_IMPORTED_MODULE_86__["default"]; });

/* harmony import */ var _useThrottle__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./useThrottle */ "../node_modules/react-use/esm/useThrottle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useThrottle", function() { return _useThrottle__WEBPACK_IMPORTED_MODULE_87__["default"]; });

/* harmony import */ var _useThrottleFn__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./useThrottleFn */ "../node_modules/react-use/esm/useThrottleFn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useThrottleFn", function() { return _useThrottleFn__WEBPACK_IMPORTED_MODULE_88__["default"]; });

/* harmony import */ var _useTimeout__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./useTimeout */ "../node_modules/react-use/esm/useTimeout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTimeout", function() { return _useTimeout__WEBPACK_IMPORTED_MODULE_89__["default"]; });

/* harmony import */ var _useTimeoutFn__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./useTimeoutFn */ "../node_modules/react-use/esm/useTimeoutFn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTimeoutFn", function() { return _useTimeoutFn__WEBPACK_IMPORTED_MODULE_90__["default"]; });

/* harmony import */ var _useTitle__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./useTitle */ "../node_modules/react-use/esm/useTitle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTitle", function() { return _useTitle__WEBPACK_IMPORTED_MODULE_91__["default"]; });

/* harmony import */ var _useToggle__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./useToggle */ "../node_modules/react-use/esm/useToggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useToggle", function() { return _useToggle__WEBPACK_IMPORTED_MODULE_92__["default"]; });

/* harmony import */ var _useTween__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./useTween */ "../node_modules/react-use/esm/useTween.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTween", function() { return _useTween__WEBPACK_IMPORTED_MODULE_93__["default"]; });

/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./useUnmount */ "../node_modules/react-use/esm/useUnmount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUnmount", function() { return _useUnmount__WEBPACK_IMPORTED_MODULE_94__["default"]; });

/* harmony import */ var _useUnmountPromise__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./useUnmountPromise */ "../node_modules/react-use/esm/useUnmountPromise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUnmountPromise", function() { return _useUnmountPromise__WEBPACK_IMPORTED_MODULE_95__["default"]; });

/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./useUpdate */ "../node_modules/react-use/esm/useUpdate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdate", function() { return _useUpdate__WEBPACK_IMPORTED_MODULE_96__["default"]; });

/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./useUpdateEffect */ "../node_modules/react-use/esm/useUpdateEffect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdateEffect", function() { return _useUpdateEffect__WEBPACK_IMPORTED_MODULE_97__["default"]; });

/* harmony import */ var _useUpsert__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./useUpsert */ "../node_modules/react-use/esm/useUpsert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpsert", function() { return _useUpsert__WEBPACK_IMPORTED_MODULE_98__["default"]; });

/* harmony import */ var _useVibrate__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./useVibrate */ "../node_modules/react-use/esm/useVibrate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useVibrate", function() { return _useVibrate__WEBPACK_IMPORTED_MODULE_99__["default"]; });

/* harmony import */ var _useVideo__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./useVideo */ "../node_modules/react-use/esm/useVideo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useVideo", function() { return _useVideo__WEBPACK_IMPORTED_MODULE_100__["default"]; });

/* harmony import */ var _useStateValidator__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./useStateValidator */ "../node_modules/react-use/esm/useStateValidator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStateValidator", function() { return _useStateValidator__WEBPACK_IMPORTED_MODULE_101__["default"]; });

/* harmony import */ var _useScrollbarWidth__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./useScrollbarWidth */ "../node_modules/react-use/esm/useScrollbarWidth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScrollbarWidth", function() { return _useScrollbarWidth__WEBPACK_IMPORTED_MODULE_102__["useScrollbarWidth"]; });

/* harmony import */ var _useMultiStateValidator__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./useMultiStateValidator */ "../node_modules/react-use/esm/useMultiStateValidator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMultiStateValidator", function() { return _useMultiStateValidator__WEBPACK_IMPORTED_MODULE_103__["useMultiStateValidator"]; });

/* harmony import */ var _useWindowScroll__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./useWindowScroll */ "../node_modules/react-use/esm/useWindowScroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWindowScroll", function() { return _useWindowScroll__WEBPACK_IMPORTED_MODULE_104__["default"]; });

/* harmony import */ var _useWindowSize__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./useWindowSize */ "../node_modules/react-use/esm/useWindowSize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWindowSize", function() { return _useWindowSize__WEBPACK_IMPORTED_MODULE_105__["default"]; });

/* harmony import */ var _useMeasure__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./useMeasure */ "../node_modules/react-use/esm/useMeasure.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMeasure", function() { return _useMeasure__WEBPACK_IMPORTED_MODULE_106__["default"]; });

/* harmony import */ var _useRendersCount__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./useRendersCount */ "../node_modules/react-use/esm/useRendersCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRendersCount", function() { return _useRendersCount__WEBPACK_IMPORTED_MODULE_107__["useRendersCount"]; });

/* harmony import */ var _useFirstMountState__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./useFirstMountState */ "../node_modules/react-use/esm/useFirstMountState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFirstMountState", function() { return _useFirstMountState__WEBPACK_IMPORTED_MODULE_108__["useFirstMountState"]; });

/* harmony import */ var _useSet__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./useSet */ "../node_modules/react-use/esm/useSet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSet", function() { return _useSet__WEBPACK_IMPORTED_MODULE_109__["default"]; });

/* harmony import */ var _factory_createGlobalState__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./factory/createGlobalState */ "../node_modules/react-use/esm/factory/createGlobalState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createGlobalState", function() { return _factory_createGlobalState__WEBPACK_IMPORTED_MODULE_110__["createGlobalState"]; });

/* harmony import */ var _useHash__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./useHash */ "../node_modules/react-use/esm/useHash.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHash", function() { return _useHash__WEBPACK_IMPORTED_MODULE_111__["useHash"]; });









































// not exported because of peer dependency
// export { default as useKeyboardJs } from './useKeyboardJs';












































// not exported because of peer dependency
// export { default as useSpring } from './useSpring';






























/***/ }),

/***/ "../node_modules/react-use/esm/misc/hookState.js":
/*!*******************************************************!*\
  !*** ../node_modules/react-use/esm/misc/hookState.js ***!
  \*******************************************************/
/*! exports provided: resolveHookState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveHookState", function() { return resolveHookState; });
function resolveHookState(nextState, currentState) {
    if (typeof nextState === 'function') {
        return nextState.length ? nextState(currentState) : nextState();
    }
    return nextState;
}


/***/ }),

/***/ "../node_modules/react-use/esm/misc/isDeepEqual.js":
/*!*********************************************************!*\
  !*** ../node_modules/react-use/esm/misc/isDeepEqual.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fast_deep_equal_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-deep-equal/react */ "../node_modules/fast-deep-equal/react.js");
/* harmony import */ var fast_deep_equal_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal_react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (fast_deep_equal_react__WEBPACK_IMPORTED_MODULE_0___default.a);


/***/ }),

/***/ "../node_modules/react-use/esm/misc/parseTimeRanges.js":
/*!*************************************************************!*\
  !*** ../node_modules/react-use/esm/misc/parseTimeRanges.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseTimeRanges; });
function parseTimeRanges(ranges) {
    var result = [];
    for (var i = 0; i < ranges.length; i++) {
        result.push({
            start: ranges.start(i),
            end: ranges.end(i),
        });
    }
    return result;
}


/***/ }),

/***/ "../node_modules/react-use/esm/misc/util.js":
/*!**************************************************!*\
  !*** ../node_modules/react-use/esm/misc/util.js ***!
  \**************************************************/
/*! exports provided: noop, on, off, isBrowser, isNavigator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNavigator", function() { return isNavigator; });
var noop = function () { };
function on(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (obj && obj.addEventListener) {
        obj.addEventListener.apply(obj, args);
    }
}
function off(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (obj && obj.removeEventListener) {
        obj.removeEventListener.apply(obj, args);
    }
}
var isBrowser = typeof window !== 'undefined';
var isNavigator = typeof navigator !== 'undefined';


/***/ }),

/***/ "../node_modules/react-use/esm/useAsync.js":
/*!*************************************************!*\
  !*** ../node_modules/react-use/esm/useAsync.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useAsync; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useAsyncFn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useAsyncFn */ "../node_modules/react-use/esm/useAsyncFn.js");


function useAsync(fn, deps) {
    if (deps === void 0) { deps = []; }
    var _a = Object(_useAsyncFn__WEBPACK_IMPORTED_MODULE_1__["default"])(fn, deps, {
        loading: true,
    }), state = _a[0], callback = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        callback();
    }, [callback]);
    return state;
}


/***/ }),

/***/ "../node_modules/react-use/esm/useAsyncFn.js":
/*!***************************************************!*\
  !*** ../node_modules/react-use/esm/useAsyncFn.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useAsyncFn; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useMountedState */ "../node_modules/react-use/esm/useMountedState.js");



function useAsyncFn(fn, deps, initialState) {
    if (deps === void 0) { deps = []; }
    if (initialState === void 0) { initialState = { loading: false }; }
    var lastCallId = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(0);
    var isMounted = Object(_useMountedState__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialState), state = _a[0], set = _a[1];
    var callback = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var callId = ++lastCallId.current;
        if (!state.loading) {
            set(function (prevState) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prevState), { loading: true })); });
        }
        return fn.apply(void 0, args).then(function (value) {
            isMounted() && callId === lastCallId.current && set({ value: value, loading: false });
            return value;
        }, function (error) {
            isMounted() && callId === lastCallId.current && set({ error: error, loading: false });
            return error;
        });
    }, deps);
    return [state, callback];
}


/***/ }),

/***/ "../node_modules/react-use/esm/useAsyncRetry.js":
/*!******************************************************!*\
  !*** ../node_modules/react-use/esm/useAsyncRetry.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useAsync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useAsync */ "../node_modules/react-use/esm/useAsync.js");



var useAsyncRetry = function (fn, deps) {
    if (deps === void 0) { deps = []; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0), attempt = _a[0], setAttempt = _a[1];
    var state = Object(_useAsync__WEBPACK_IMPORTED_MODULE_2__["default"])(fn, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(deps, [attempt]));
    var stateLoading = state.loading;
    var retry = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
        if (stateLoading) {
            if (true) {
                console.log('You are calling useAsyncRetry hook retry() method while loading in progress, this is a no-op.');
            }
            return;
        }
        setAttempt(function (currentAttempt) { return currentAttempt + 1; });
    }, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(deps, [stateLoading]));
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { retry: retry });
};
/* harmony default export */ __webpack_exports__["default"] = (useAsyncRetry);


/***/ }),

/***/ "../node_modules/react-use/esm/useAudio.js":
/*!*************************************************!*\
  !*** ../node_modules/react-use/esm/useAudio.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _factory_createHTMLMediaHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory/createHTMLMediaHook */ "../node_modules/react-use/esm/factory/createHTMLMediaHook.js");

var useAudio = Object(_factory_createHTMLMediaHook__WEBPACK_IMPORTED_MODULE_0__["default"])('audio');
/* harmony default export */ __webpack_exports__["default"] = (useAudio);


/***/ }),

/***/ "../node_modules/react-use/esm/useBattery.js":
/*!***************************************************!*\
  !*** ../node_modules/react-use/esm/useBattery.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");
/* harmony import */ var _misc_isDeepEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/isDeepEqual */ "../node_modules/react-use/esm/misc/isDeepEqual.js");



var nav = _misc_util__WEBPACK_IMPORTED_MODULE_1__["isNavigator"] ? navigator : undefined;
var isBatteryApiSupported = nav && typeof nav.getBattery === 'function';
function useBatteryMock() {
    return { isSupported: false };
}
function useBattery() {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({ isSupported: true, fetched: false }), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var isMounted = true;
        var battery = null;
        var handleChange = function () {
            if (!isMounted || !battery) {
                return;
            }
            var newState = {
                isSupported: true,
                fetched: true,
                level: battery.level,
                charging: battery.charging,
                dischargingTime: battery.dischargingTime,
                chargingTime: battery.chargingTime,
            };
            !Object(_misc_isDeepEqual__WEBPACK_IMPORTED_MODULE_2__["default"])(state, newState) && setState(newState);
        };
        nav.getBattery().then(function (bat) {
            if (!isMounted) {
                return;
            }
            battery = bat;
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(battery, 'chargingchange', handleChange);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(battery, 'chargingtimechange', handleChange);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(battery, 'dischargingtimechange', handleChange);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(battery, 'levelchange', handleChange);
            handleChange();
        });
        return function () {
            isMounted = false;
            if (battery) {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(battery, 'chargingchange', handleChange);
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(battery, 'chargingtimechange', handleChange);
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(battery, 'dischargingtimechange', handleChange);
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(battery, 'levelchange', handleChange);
            }
        };
    }, []);
    return state;
}
/* harmony default export */ __webpack_exports__["default"] = (isBatteryApiSupported ? useBattery : useBatteryMock);


/***/ }),

/***/ "../node_modules/react-use/esm/useBeforeUnload.js":
/*!********************************************************!*\
  !*** ../node_modules/react-use/esm/useBeforeUnload.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var useBeforeUnload = function (enabled, message) {
    if (enabled === void 0) { enabled = true; }
    var handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
        var finalEnabled = typeof enabled === 'function' ? enabled() : true;
        if (!finalEnabled) {
            return;
        }
        event.preventDefault();
        if (message) {
            event.returnValue = message;
        }
        return message;
    }, [enabled, message]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!enabled) {
            return;
        }
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'beforeunload', handler);
        return function () { return Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'beforeunload', handler); };
    }, [enabled, handler]);
};
/* harmony default export */ __webpack_exports__["default"] = (useBeforeUnload);


/***/ }),

/***/ "../node_modules/react-use/esm/useBoolean.js":
/*!***************************************************!*\
  !*** ../node_modules/react-use/esm/useBoolean.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useToggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useToggle */ "../node_modules/react-use/esm/useToggle.js");

/* harmony default export */ __webpack_exports__["default"] = (_useToggle__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../node_modules/react-use/esm/useClickAway.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-use/esm/useClickAway.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var defaultEvents = ['mousedown', 'touchstart'];
var useClickAway = function (ref, onClickAway, events) {
    if (events === void 0) { events = defaultEvents; }
    var savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(onClickAway);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        savedCallback.current = onClickAway;
    }, [onClickAway]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var handler = function (event) {
            var el = ref.current;
            el && !el.contains(event.target) && savedCallback.current(event);
        };
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var eventName = events_1[_i];
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(document, eventName, handler);
        }
        return function () {
            for (var _i = 0, events_2 = events; _i < events_2.length; _i++) {
                var eventName = events_2[_i];
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(document, eventName, handler);
            }
        };
    }, [events, ref]);
};
/* harmony default export */ __webpack_exports__["default"] = (useClickAway);


/***/ }),

/***/ "../node_modules/react-use/esm/useCookie.js":
/*!**************************************************!*\
  !*** ../node_modules/react-use/esm/useCookie.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "../node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);


var useCookie = function (cookieName) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () { return js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get(cookieName) || null; }), value = _a[0], setValue = _a[1];
    var updateCookie = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (newValue, options) {
        js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set(cookieName, newValue, options);
        setValue(newValue);
    }, [cookieName]);
    var deleteCookie = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove(cookieName);
        setValue(null);
    }, [cookieName]);
    return [value, updateCookie, deleteCookie];
};
/* harmony default export */ __webpack_exports__["default"] = (useCookie);


/***/ }),

/***/ "../node_modules/react-use/esm/useCopyToClipboard.js":
/*!***********************************************************!*\
  !*** ../node_modules/react-use/esm/useCopyToClipboard.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! copy-to-clipboard */ "../node_modules/copy-to-clipboard/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useMountedState */ "../node_modules/react-use/esm/useMountedState.js");
/* harmony import */ var _useSetState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useSetState */ "../node_modules/react-use/esm/useSetState.js");




var useCopyToClipboard = function () {
    var isMounted = Object(_useMountedState__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var _a = Object(_useSetState__WEBPACK_IMPORTED_MODULE_3__["default"])({
        value: undefined,
        error: undefined,
        noUserInteraction: true,
    }), state = _a[0], setState = _a[1];
    var copyToClipboard = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (value) {
        if (!isMounted()) {
            return;
        }
        var noUserInteraction;
        var normalizedValue;
        try {
            // only strings and numbers casted to strings can be copied to clipboard
            if (typeof value !== 'string' && typeof value !== 'number') {
                var error = new Error("Cannot copy typeof " + typeof value + " to clipboard, must be a string");
                if (true)
                    console.error(error);
                setState({
                    value: value,
                    error: error,
                    noUserInteraction: true,
                });
                return;
            }
            // empty strings are also considered invalid
            else if (value === '') {
                var error = new Error("Cannot copy empty string to clipboard.");
                if (true)
                    console.error(error);
                setState({
                    value: value,
                    error: error,
                    noUserInteraction: true,
                });
                return;
            }
            normalizedValue = value.toString();
            noUserInteraction = copy_to_clipboard__WEBPACK_IMPORTED_MODULE_0___default()(normalizedValue);
            setState({
                value: normalizedValue,
                error: undefined,
                noUserInteraction: noUserInteraction,
            });
        }
        catch (error) {
            setState({
                value: normalizedValue,
                error: error,
                noUserInteraction: noUserInteraction,
            });
        }
    }, []);
    return [state, copyToClipboard];
};
/* harmony default export */ __webpack_exports__["default"] = (useCopyToClipboard);


/***/ }),

/***/ "../node_modules/react-use/esm/useCounter.js":
/*!***************************************************!*\
  !*** ../node_modules/react-use/esm/useCounter.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCounter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useGetSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useGetSet */ "../node_modules/react-use/esm/useGetSet.js");
/* harmony import */ var _misc_hookState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/hookState */ "../node_modules/react-use/esm/misc/hookState.js");



function useCounter(initialValue, max, min) {
    if (initialValue === void 0) { initialValue = 0; }
    if (max === void 0) { max = null; }
    if (min === void 0) { min = null; }
    var init = Object(_misc_hookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(initialValue);
    typeof init !== 'number' &&
        console.error('initialValue has to be a number, got ' + typeof initialValue);
    if (typeof min === 'number') {
        init = Math.max(init, min);
    }
    else if (min !== null) {
        console.error('min has to be a number, got ' + typeof min);
    }
    if (typeof max === 'number') {
        init = Math.min(init, max);
    }
    else if (max !== null) {
        console.error('max has to be a number, got ' + typeof max);
    }
    var _a = Object(_useGetSet__WEBPACK_IMPORTED_MODULE_1__["default"])(init), get = _a[0], setInternal = _a[1];
    return [
        get(),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
            var set = function (newState) {
                var prevState = get();
                var rState = Object(_misc_hookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(newState, prevState);
                if (prevState !== rState) {
                    if (typeof min === 'number') {
                        rState = Math.max(rState, min);
                    }
                    if (typeof max === 'number') {
                        rState = Math.min(rState, max);
                    }
                    prevState !== rState && setInternal(rState);
                }
            };
            return {
                get: get,
                set: set,
                inc: function (delta) {
                    if (delta === void 0) { delta = 1; }
                    var rDelta = Object(_misc_hookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(delta, get());
                    if (typeof rDelta !== 'number') {
                        console.error('delta has to be a number or function returning a number, got ' + typeof rDelta);
                    }
                    set(function (num) { return num + rDelta; });
                },
                dec: function (delta) {
                    if (delta === void 0) { delta = 1; }
                    var rDelta = Object(_misc_hookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(delta, get());
                    if (typeof rDelta !== 'number') {
                        console.error('delta has to be a number or function returning a number, got ' + typeof rDelta);
                    }
                    set(function (num) { return num - rDelta; });
                },
                reset: function (value) {
                    if (value === void 0) { value = init; }
                    var rValue = Object(_misc_hookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(value, get());
                    if (typeof rValue !== 'number') {
                        console.error('value has to be a number or function returning a number, got ' + typeof rValue);
                    }
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    init = rValue;
                    set(rValue);
                },
            };
        }, [init, min, max]),
    ];
}


/***/ }),

/***/ "../node_modules/react-use/esm/useCss.js":
/*!***********************************************!*\
  !*** ../node_modules/react-use/esm/useCss.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nano_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nano-css */ "../node_modules/nano-css/index.js");
/* harmony import */ var nano_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nano_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nano_css_addon_cssom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nano-css/addon/cssom */ "../node_modules/nano-css/addon/cssom.js");
/* harmony import */ var nano_css_addon_cssom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nano_css_addon_cssom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nano_css_addon_vcssom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nano-css/addon/vcssom */ "../node_modules/nano-css/addon/vcssom.js");
/* harmony import */ var nano_css_addon_vcssom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nano_css_addon_vcssom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nano_css_addon_vcssom_cssToTree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nano-css/addon/vcssom/cssToTree */ "../node_modules/nano-css/addon/vcssom/cssToTree.js");
/* harmony import */ var nano_css_addon_vcssom_cssToTree__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nano_css_addon_vcssom_cssToTree__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "../node_modules/react-use/esm/useIsomorphicLayoutEffect.js");






var nano = Object(nano_css__WEBPACK_IMPORTED_MODULE_0__["create"])();
Object(nano_css_addon_cssom__WEBPACK_IMPORTED_MODULE_1__["addon"])(nano);
Object(nano_css_addon_vcssom__WEBPACK_IMPORTED_MODULE_2__["addon"])(nano);
var counter = 0;
var useCss = function (css) {
    var className = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () { return 'react-use-css-' + (counter++).toString(36); }, []);
    var sheet = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () { return new nano.VSheet(); }, []);
    Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
        var tree = {};
        Object(nano_css_addon_vcssom_cssToTree__WEBPACK_IMPORTED_MODULE_3__["cssToTree"])(tree, css, '.' + className, '');
        sheet.diff(tree);
        return function () {
            sheet.diff({});
        };
    });
    return className;
};
/* harmony default export */ __webpack_exports__["default"] = (useCss);


/***/ }),

/***/ "../node_modules/react-use/esm/useCustomCompareEffect.js":
/*!***************************************************************!*\
  !*** ../node_modules/react-use/esm/useCustomCompareEffect.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var isPrimitive = function (val) { return val !== Object(val); };
var useCustomCompareEffect = function (effect, deps, depsEqual) {
    if (true) {
        if (!(deps instanceof Array) || !deps.length) {
            console.warn('`useCustomCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
        }
        if (deps.every(isPrimitive)) {
            console.warn('`useCustomCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
        }
        if (typeof depsEqual !== 'function') {
            console.warn('`useCustomCompareEffect` should be used with depsEqual callback for comparing deps list');
        }
    }
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(undefined);
    if (!ref.current || !depsEqual(deps, ref.current)) {
        ref.current = deps;
    }
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(effect, ref.current);
};
/* harmony default export */ __webpack_exports__["default"] = (useCustomCompareEffect);


/***/ }),

/***/ "../node_modules/react-use/esm/useDebounce.js":
/*!****************************************************!*\
  !*** ../node_modules/react-use/esm/useDebounce.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useDebounce; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useTimeoutFn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useTimeoutFn */ "../node_modules/react-use/esm/useTimeoutFn.js");


function useDebounce(fn, ms, deps) {
    if (ms === void 0) { ms = 0; }
    if (deps === void 0) { deps = []; }
    var _a = Object(_useTimeoutFn__WEBPACK_IMPORTED_MODULE_1__["default"])(fn, ms), isReady = _a[0], cancel = _a[1], reset = _a[2];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(reset, deps);
    return [isReady, cancel];
}


/***/ }),

/***/ "../node_modules/react-use/esm/useDeepCompareEffect.js":
/*!*************************************************************!*\
  !*** ../node_modules/react-use/esm/useDeepCompareEffect.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useCustomCompareEffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useCustomCompareEffect */ "../node_modules/react-use/esm/useCustomCompareEffect.js");
/* harmony import */ var _misc_isDeepEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/isDeepEqual */ "../node_modules/react-use/esm/misc/isDeepEqual.js");


var isPrimitive = function (val) { return val !== Object(val); };
var useDeepCompareEffect = function (effect, deps) {
    if (true) {
        if (!(deps instanceof Array) || !deps.length) {
            console.warn('`useDeepCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
        }
        if (deps.every(isPrimitive)) {
            console.warn('`useDeepCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
        }
    }
    Object(_useCustomCompareEffect__WEBPACK_IMPORTED_MODULE_0__["default"])(effect, deps, _misc_isDeepEqual__WEBPACK_IMPORTED_MODULE_1__["default"]);
};
/* harmony default export */ __webpack_exports__["default"] = (useDeepCompareEffect);


/***/ }),

/***/ "../node_modules/react-use/esm/useDefault.js":
/*!***************************************************!*\
  !*** ../node_modules/react-use/esm/useDefault.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useDefault = function (defaultValue, initialValue) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue), value = _a[0], setValue = _a[1];
    if (value === undefined || value === null) {
        return [defaultValue, setValue];
    }
    return [value, setValue];
};
/* harmony default export */ __webpack_exports__["default"] = (useDefault);


/***/ }),

/***/ "../node_modules/react-use/esm/useDrop.js":
/*!************************************************!*\
  !*** ../node_modules/react-use/esm/useDrop.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");



var createProcess = function (options) { return function (dataTransfer, event) {
    var uri = dataTransfer.getData('text/uri-list');
    if (uri) {
        (options.onUri || _misc_util__WEBPACK_IMPORTED_MODULE_2__["noop"])(uri, event);
        return;
    }
    if (dataTransfer.files && dataTransfer.files.length) {
        (options.onFiles || _misc_util__WEBPACK_IMPORTED_MODULE_2__["noop"])(Array.from(dataTransfer.files), event);
        return;
    }
    if (event.clipboardData) {
        var text = event.clipboardData.getData('text');
        (options.onText || _misc_util__WEBPACK_IMPORTED_MODULE_2__["noop"])(text, event);
        return;
    }
}; };
var useDrop = function (options, args) {
    if (options === void 0) { options = {}; }
    if (args === void 0) { args = []; }
    var onFiles = options.onFiles, onText = options.onText, onUri = options.onUri;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), over = _a[0], setOverRaw = _a[1];
    var setOver = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(setOverRaw, []);
    var process = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () { return createProcess(options); }, [onFiles, onText, onUri]);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        var onDragOver = function (event) {
            event.preventDefault();
            setOver(true);
        };
        var onDragEnter = function (event) {
            event.preventDefault();
            setOver(true);
        };
        var onDragLeave = function () {
            setOver(false);
        };
        var onDragExit = function () {
            setOver(false);
        };
        var onDrop = function (event) {
            event.preventDefault();
            setOver(false);
            process(event.dataTransfer, event);
        };
        var onPaste = function (event) {
            process(event.clipboardData, event);
        };
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["on"])(document, 'dragover', onDragOver);
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["on"])(document, 'dragenter', onDragEnter);
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["on"])(document, 'dragleave', onDragLeave);
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["on"])(document, 'dragexit', onDragExit);
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["on"])(document, 'drop', onDrop);
        if (onText) {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["on"])(document, 'paste', onPaste);
        }
        return function () {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["off"])(document, 'dragover', onDragOver);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["off"])(document, 'dragenter', onDragEnter);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["off"])(document, 'dragleave', onDragLeave);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["off"])(document, 'dragexit', onDragExit);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["off"])(document, 'drop', onDrop);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["off"])(document, 'paste', onPaste);
        };
    }, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([process], args));
    return { over: over };
};
/* harmony default export */ __webpack_exports__["default"] = (useDrop);


/***/ }),

/***/ "../node_modules/react-use/esm/useDropArea.js":
/*!****************************************************!*\
  !*** ../node_modules/react-use/esm/useDropArea.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMountedState */ "../node_modules/react-use/esm/useMountedState.js");
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");



/*
const defaultState: DropAreaState = {
  over: false,
};
*/
var createProcess = function (options, mounted) { return function (dataTransfer, event) {
    var uri = dataTransfer.getData('text/uri-list');
    if (uri) {
        (options.onUri || _misc_util__WEBPACK_IMPORTED_MODULE_2__["noop"])(uri, event);
        return;
    }
    if (dataTransfer.files && dataTransfer.files.length) {
        (options.onFiles || _misc_util__WEBPACK_IMPORTED_MODULE_2__["noop"])(Array.from(dataTransfer.files), event);
        return;
    }
    if (dataTransfer.items && dataTransfer.items.length) {
        dataTransfer.items[0].getAsString(function (text) {
            if (mounted) {
                (options.onText || _misc_util__WEBPACK_IMPORTED_MODULE_2__["noop"])(text, event);
            }
        });
    }
}; };
var createBond = function (process, setOver) { return ({
    onDragOver: function (event) {
        event.preventDefault();
    },
    onDragEnter: function (event) {
        event.preventDefault();
        setOver(true);
    },
    onDragLeave: function () {
        setOver(false);
    },
    onDrop: function (event) {
        event.preventDefault();
        event.persist();
        setOver(false);
        process(event.dataTransfer, event);
    },
    onPaste: function (event) {
        event.persist();
        process(event.clipboardData, event);
    },
}); };
var useDropArea = function (options) {
    if (options === void 0) { options = {}; }
    var onFiles = options.onFiles, onText = options.onText, onUri = options.onUri;
    var isMounted = Object(_useMountedState__WEBPACK_IMPORTED_MODULE_1__["default"])();
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), over = _a[0], setOver = _a[1];
    var process = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return createProcess(options, isMounted()); }, [onFiles, onText, onUri]);
    var bond = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return createBond(process, setOver); }, [process, setOver]);
    return [bond, { over: over }];
};
/* harmony default export */ __webpack_exports__["default"] = (useDropArea);


/***/ }),

/***/ "../node_modules/react-use/esm/useEffectOnce.js":
/*!******************************************************!*\
  !*** ../node_modules/react-use/esm/useEffectOnce.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useEffectOnce = function (effect) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(effect, []);
};
/* harmony default export */ __webpack_exports__["default"] = (useEffectOnce);


/***/ }),

/***/ "../node_modules/react-use/esm/useEnsuredForwardedRef.js":
/*!***************************************************************!*\
  !*** ../node_modules/react-use/esm/useEnsuredForwardedRef.js ***!
  \***************************************************************/
/*! exports provided: default, ensuredForwardRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useEnsuredForwardedRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensuredForwardRef", function() { return ensuredForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useEnsuredForwardedRef(forwardedRef) {
    var ensuredRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(forwardedRef && forwardedRef.current);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!forwardedRef) {
            return;
        }
        forwardedRef.current = ensuredRef.current;
    }, [forwardedRef]);
    return ensuredRef;
}
function ensuredForwardRef(Component) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
        var ensuredRef = useEnsuredForwardedRef(ref);
        return Component(props, ensuredRef);
    });
}


/***/ }),

/***/ "../node_modules/react-use/esm/useError.js":
/*!*************************************************!*\
  !*** ../node_modules/react-use/esm/useError.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useError = function () {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), error = _a[0], setError = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (error) {
            throw error;
        }
    }, [error]);
    var dispatchError = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (err) {
        setError(err);
    }, []);
    return dispatchError;
};
/* harmony default export */ __webpack_exports__["default"] = (useError);


/***/ }),

/***/ "../node_modules/react-use/esm/useEvent.js":
/*!*************************************************!*\
  !*** ../node_modules/react-use/esm/useEvent.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var defaultTarget = _misc_util__WEBPACK_IMPORTED_MODULE_1__["isBrowser"] ? window : null;
var isListenerType1 = function (target) {
    return !!target.addEventListener;
};
var isListenerType2 = function (target) {
    return !!target.on;
};
var useEvent = function (name, handler, target, options) {
    if (target === void 0) { target = defaultTarget; }
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!handler) {
            return;
        }
        if (!target) {
            return;
        }
        if (isListenerType1(target)) {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(target, name, handler, options);
        }
        else if (isListenerType2(target)) {
            target.on(name, handler, options);
        }
        return function () {
            if (isListenerType1(target)) {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(target, name, handler, options);
            }
            else if (isListenerType2(target)) {
                target.off(name, handler, options);
            }
        };
    }, [name, handler, target, JSON.stringify(options)]);
};
/* harmony default export */ __webpack_exports__["default"] = (useEvent);


/***/ }),

/***/ "../node_modules/react-use/esm/useFavicon.js":
/*!***************************************************!*\
  !*** ../node_modules/react-use/esm/useFavicon.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useFavicon = function (href) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = href;
        document.getElementsByTagName('head')[0].appendChild(link);
    }, [href]);
};
/* harmony default export */ __webpack_exports__["default"] = (useFavicon);


/***/ }),

/***/ "../node_modules/react-use/esm/useFirstMountState.js":
/*!***********************************************************!*\
  !*** ../node_modules/react-use/esm/useFirstMountState.js ***!
  \***********************************************************/
/*! exports provided: useFirstMountState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFirstMountState", function() { return useFirstMountState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useFirstMountState() {
    var isFirst = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
    if (isFirst.current) {
        isFirst.current = false;
        return true;
    }
    return isFirst.current;
}


/***/ }),

/***/ "../node_modules/react-use/esm/useFullscreen.js":
/*!******************************************************!*\
  !*** ../node_modules/react-use/esm/useFullscreen.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! screenfull */ "../node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "../node_modules/react-use/esm/useIsomorphicLayoutEffect.js");
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");




var useFullscreen = function (ref, enabled, options) {
    if (options === void 0) { options = {}; }
    var video = options.video, _a = options.onClose, onClose = _a === void 0 ? _misc_util__WEBPACK_IMPORTED_MODULE_3__["noop"] : _a;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(enabled), isFullscreen = _b[0], setIsFullscreen = _b[1];
    Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
        if (!enabled) {
            return;
        }
        if (!ref.current) {
            return;
        }
        var onWebkitEndFullscreen = function () {
            if (video === null || video === void 0 ? void 0 : video.current) {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_3__["off"])(video.current, 'webkitendfullscreen', onWebkitEndFullscreen);
            }
            onClose();
        };
        var onChange = function () {
            if (screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.isEnabled) {
                var isScreenfullFullscreen = screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.isFullscreen;
                setIsFullscreen(isScreenfullFullscreen);
                if (!isScreenfullFullscreen) {
                    onClose();
                }
            }
        };
        if (screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.isEnabled) {
            try {
                screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.request(ref.current);
                setIsFullscreen(true);
            }
            catch (error) {
                onClose(error);
                setIsFullscreen(false);
            }
            screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.on('change', onChange);
        }
        else if (video && video.current && video.current.webkitEnterFullscreen) {
            video.current.webkitEnterFullscreen();
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_3__["on"])(video.current, 'webkitendfullscreen', onWebkitEndFullscreen);
            setIsFullscreen(true);
        }
        else {
            onClose();
            setIsFullscreen(false);
        }
        return function () {
            setIsFullscreen(false);
            if (screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.isEnabled) {
                try {
                    screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.off('change', onChange);
                    screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.exit();
                }
                catch (_a) { }
            }
            else if (video && video.current && video.current.webkitExitFullscreen) {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_3__["off"])(video.current, 'webkitendfullscreen', onWebkitEndFullscreen);
                video.current.webkitExitFullscreen();
            }
        };
    }, [enabled, video, ref]);
    return isFullscreen;
};
/* harmony default export */ __webpack_exports__["default"] = (useFullscreen);


/***/ }),

/***/ "../node_modules/react-use/esm/useGeolocation.js":
/*!*******************************************************!*\
  !*** ../node_modules/react-use/esm/useGeolocation.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var useGeolocation = function (options) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
        loading: true,
        accuracy: null,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: null,
        longitude: null,
        speed: null,
        timestamp: Date.now(),
    }), state = _a[0], setState = _a[1];
    var mounted = true;
    var watchId;
    var onEvent = function (event) {
        if (mounted) {
            setState({
                loading: false,
                accuracy: event.coords.accuracy,
                altitude: event.coords.altitude,
                altitudeAccuracy: event.coords.altitudeAccuracy,
                heading: event.coords.heading,
                latitude: event.coords.latitude,
                longitude: event.coords.longitude,
                speed: event.coords.speed,
                timestamp: event.timestamp,
            });
        }
    };
    var onEventError = function (error) {
        return mounted && setState(function (oldState) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, oldState), { loading: false, error: error })); });
    };
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        navigator.geolocation.getCurrentPosition(onEvent, onEventError, options);
        watchId = navigator.geolocation.watchPosition(onEvent, onEventError, options);
        return function () {
            mounted = false;
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useGeolocation);


/***/ }),

/***/ "../node_modules/react-use/esm/useGetSet.js":
/*!**************************************************!*\
  !*** ../node_modules/react-use/esm/useGetSet.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useGetSet; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUpdate */ "../node_modules/react-use/esm/useUpdate.js");
/* harmony import */ var _misc_hookState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/hookState */ "../node_modules/react-use/esm/misc/hookState.js");



function useGetSet(initialState) {
    var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(Object(_misc_hookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(initialState));
    var update = Object(_useUpdate__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return [
        function () { return state.current; },
        function (newState) {
            state.current = Object(_misc_hookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(newState, state.current);
            update();
        },
    ]; }, []);
}


/***/ }),

/***/ "../node_modules/react-use/esm/useGetSetState.js":
/*!*******************************************************!*\
  !*** ../node_modules/react-use/esm/useGetSetState.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useUpdate */ "../node_modules/react-use/esm/useUpdate.js");



var useGetSetState = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    if (true) {
        if (typeof initialState !== 'object') {
            console.error('useGetSetState initial state must be an object.');
        }
    }
    var update = Object(_useUpdate__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var state = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, initialState));
    var get = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () { return state.current; }, []);
    var set = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (patch) {
        if (!patch) {
            return;
        }
        if (true) {
            if (typeof patch !== 'object') {
                console.error('useGetSetState setter patch must be an object.');
            }
        }
        Object.assign(state.current, patch);
        update();
    }, []);
    return [get, set];
};
/* harmony default export */ __webpack_exports__["default"] = (useGetSetState);


/***/ }),

/***/ "../node_modules/react-use/esm/useHarmonicIntervalFn.js":
/*!**************************************************************!*\
  !*** ../node_modules/react-use/esm/useHarmonicIntervalFn.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var set_harmonic_interval__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! set-harmonic-interval */ "../node_modules/set-harmonic-interval/lib/index.esm.js");


var useHarmonicIntervalFn = function (fn, delay) {
    if (delay === void 0) { delay = 0; }
    var latestCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(function () { });
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        latestCallback.current = fn;
    });
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (delay !== null) {
            var interval_1 = Object(set_harmonic_interval__WEBPACK_IMPORTED_MODULE_1__["setHarmonicInterval"])(function () { return latestCallback.current(); }, delay);
            return function () { return Object(set_harmonic_interval__WEBPACK_IMPORTED_MODULE_1__["clearHarmonicInterval"])(interval_1); };
        }
        return undefined;
    }, [delay]);
};
/* harmony default export */ __webpack_exports__["default"] = (useHarmonicIntervalFn);


/***/ }),

/***/ "../node_modules/react-use/esm/useHash.js":
/*!************************************************!*\
  !*** ../node_modules/react-use/esm/useHash.js ***!
  \************************************************/
/*! exports provided: useHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHash", function() { return useHash; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useLifecycles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useLifecycles */ "../node_modules/react-use/esm/useLifecycles.js");
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");



/**
 * read and write url hash, response to url hash change
 */
var useHash = function () {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () { return window.location.hash; }), hash = _a[0], setHash = _a[1];
    var onHashChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        setHash(window.location.hash);
    }, []);
    Object(_useLifecycles__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["on"])(window, 'hashchange', onHashChange);
    }, function () {
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["off"])(window, 'hashchange', onHashChange);
    });
    var _setHash = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (newHash) {
        if (newHash !== hash) {
            window.location.hash = newHash;
        }
    }, [hash]);
    return [hash, _setHash];
};


/***/ }),

/***/ "../node_modules/react-use/esm/useHover.js":
/*!*************************************************!*\
  !*** ../node_modules/react-use/esm/useHover.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"];
var useHover = function (element) {
    var _a = useState(false), state = _a[0], setState = _a[1];
    var onMouseEnter = function (originalOnMouseEnter) { return function (event) {
        (originalOnMouseEnter || _misc_util__WEBPACK_IMPORTED_MODULE_1__["noop"])(event);
        setState(true);
    }; };
    var onMouseLeave = function (originalOnMouseLeave) { return function (event) {
        (originalOnMouseLeave || _misc_util__WEBPACK_IMPORTED_MODULE_1__["noop"])(event);
        setState(false);
    }; };
    if (typeof element === 'function') {
        element = element(state);
    }
    var el = react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](element, {
        onMouseEnter: onMouseEnter(element.props.onMouseEnter),
        onMouseLeave: onMouseLeave(element.props.onMouseLeave),
    });
    return [el, state];
};
/* harmony default export */ __webpack_exports__["default"] = (useHover);


/***/ }),

/***/ "../node_modules/react-use/esm/useHoverDirty.js":
/*!******************************************************!*\
  !*** ../node_modules/react-use/esm/useHoverDirty.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


// kudos: https://usehooks.com/
var useHoverDirty = function (ref, enabled) {
    if (enabled === void 0) { enabled = true; }
    if (true) {
        if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
            console.error('useHoverDirty expects a single ref argument.');
        }
    }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), value = _a[0], setValue = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var onMouseOver = function () { return setValue(true); };
        var onMouseOut = function () { return setValue(false); };
        if (enabled && ref && ref.current) {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(ref.current, 'mouseover', onMouseOver);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(ref.current, 'mouseout', onMouseOut);
        }
        // fixes react-hooks/exhaustive-deps warning about stale ref elements
        var current = ref.current;
        return function () {
            if (enabled && current) {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(current, 'mouseover', onMouseOver);
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(current, 'mouseout', onMouseOut);
            }
        };
    }, [enabled, ref]);
    return value;
};
/* harmony default export */ __webpack_exports__["default"] = (useHoverDirty);


/***/ }),

/***/ "../node_modules/react-use/esm/useIdle.js":
/*!************************************************!*\
  !*** ../node_modules/react-use/esm/useIdle.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! throttle-debounce */ "../node_modules/throttle-debounce/esm/index.js");
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");



var defaultEvents = ['mousemove', 'mousedown', 'resize', 'keydown', 'touchstart', 'wheel'];
var oneMinute = 60e3;
var useIdle = function (ms, initialState, events) {
    if (ms === void 0) { ms = oneMinute; }
    if (initialState === void 0) { initialState = false; }
    if (events === void 0) { events = defaultEvents; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var mounted = true;
        var timeout;
        var localState = state;
        var set = function (newState) {
            if (mounted) {
                localState = newState;
                setState(newState);
            }
        };
        var onEvent = Object(throttle_debounce__WEBPACK_IMPORTED_MODULE_1__["throttle"])(50, function () {
            if (localState) {
                set(false);
            }
            clearTimeout(timeout);
            timeout = setTimeout(function () { return set(true); }, ms);
        });
        var onVisibility = function () {
            if (!document.hidden) {
                onEvent();
            }
        };
        for (var i = 0; i < events.length; i++) {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["on"])(window, events[i], onEvent);
        }
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["on"])(document, 'visibilitychange', onVisibility);
        timeout = setTimeout(function () { return set(true); }, ms);
        return function () {
            mounted = false;
            for (var i = 0; i < events.length; i++) {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["off"])(window, events[i], onEvent);
            }
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["off"])(document, 'visibilitychange', onVisibility);
        };
    }, [ms, events]);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useIdle);


/***/ }),

/***/ "../node_modules/react-use/esm/useIntersection.js":
/*!********************************************************!*\
  !*** ../node_modules/react-use/esm/useIntersection.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useIntersection = function (ref, options) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), intersectionObserverEntry = _a[0], setIntersectionObserverEntry = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (ref.current && typeof IntersectionObserver === 'function') {
            var handler = function (entries) {
                setIntersectionObserverEntry(entries[0]);
            };
            var observer_1 = new IntersectionObserver(handler, options);
            observer_1.observe(ref.current);
            return function () {
                setIntersectionObserverEntry(null);
                observer_1.disconnect();
            };
        }
        return function () { };
    }, [ref.current, options.threshold, options.root, options.rootMargin]);
    return intersectionObserverEntry;
};
/* harmony default export */ __webpack_exports__["default"] = (useIntersection);


/***/ }),

/***/ "../node_modules/react-use/esm/useInterval.js":
/*!****************************************************!*\
  !*** ../node_modules/react-use/esm/useInterval.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useInterval = function (callback, delay) {
    var savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(function () { });
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        savedCallback.current = callback;
    });
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (delay !== null) {
            var interval_1 = setInterval(function () { return savedCallback.current(); }, delay || 0);
            return function () { return clearInterval(interval_1); };
        }
        return undefined;
    }, [delay]);
};
/* harmony default export */ __webpack_exports__["default"] = (useInterval);


/***/ }),

/***/ "../node_modules/react-use/esm/useIsomorphicLayoutEffect.js":
/*!******************************************************************!*\
  !*** ../node_modules/react-use/esm/useIsomorphicLayoutEffect.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var useIsomorphicLayoutEffect = _misc_util__WEBPACK_IMPORTED_MODULE_1__["isBrowser"] ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];
/* harmony default export */ __webpack_exports__["default"] = (useIsomorphicLayoutEffect);


/***/ }),

/***/ "../node_modules/react-use/esm/useKey.js":
/*!***********************************************!*\
  !*** ../node_modules/react-use/esm/useKey.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEvent */ "../node_modules/react-use/esm/useEvent.js");
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");



var createKeyPredicate = function (keyFilter) {
    return typeof keyFilter === 'function'
        ? keyFilter
        : typeof keyFilter === 'string'
            ? function (event) { return event.key === keyFilter; }
            : keyFilter
                ? function () { return true; }
                : function () { return false; };
};
var useKey = function (key, fn, opts, deps) {
    if (fn === void 0) { fn = _misc_util__WEBPACK_IMPORTED_MODULE_2__["noop"]; }
    if (opts === void 0) { opts = {}; }
    if (deps === void 0) { deps = [key]; }
    var _a = opts.event, event = _a === void 0 ? 'keydown' : _a, target = opts.target, options = opts.options;
    var useMemoHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var predicate = createKeyPredicate(key);
        var handler = function (handlerEvent) {
            if (predicate(handlerEvent)) {
                return fn(handlerEvent);
            }
        };
        return handler;
    }, deps);
    Object(_useEvent__WEBPACK_IMPORTED_MODULE_1__["default"])(event, useMemoHandler, target, options);
};
/* harmony default export */ __webpack_exports__["default"] = (useKey);


/***/ }),

/***/ "../node_modules/react-use/esm/useKeyPress.js":
/*!****************************************************!*\
  !*** ../node_modules/react-use/esm/useKeyPress.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useKey */ "../node_modules/react-use/esm/useKey.js");


var useKeyPress = function (keyFilter) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([false, null]), state = _a[0], set = _a[1];
    Object(_useKey__WEBPACK_IMPORTED_MODULE_1__["default"])(keyFilter, function (event) { return set([true, event]); }, { event: 'keydown' }, [state]);
    Object(_useKey__WEBPACK_IMPORTED_MODULE_1__["default"])(keyFilter, function (event) { return set([false, event]); }, { event: 'keyup' }, [state]);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useKeyPress);


/***/ }),

/***/ "../node_modules/react-use/esm/useKeyPressEvent.js":
/*!*********************************************************!*\
  !*** ../node_modules/react-use/esm/useKeyPressEvent.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useKeyPress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useKeyPress */ "../node_modules/react-use/esm/useKeyPress.js");
/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUpdateEffect */ "../node_modules/react-use/esm/useUpdateEffect.js");


var useKeyPressEvent = function (key, keydown, keyup, useKeyPress) {
    if (useKeyPress === void 0) { useKeyPress = _useKeyPress__WEBPACK_IMPORTED_MODULE_0__["default"]; }
    var _a = useKeyPress(key), pressed = _a[0], event = _a[1];
    Object(_useUpdateEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        if (!pressed && keyup) {
            keyup(event);
        }
        else if (pressed && keydown) {
            keydown(event);
        }
    }, [pressed]);
};
/* harmony default export */ __webpack_exports__["default"] = (useKeyPressEvent);


/***/ }),

/***/ "../node_modules/react-use/esm/useLatest.js":
/*!**************************************************!*\
  !*** ../node_modules/react-use/esm/useLatest.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useLatest = function (value) {
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
    ref.current = value;
    return ref;
};
/* harmony default export */ __webpack_exports__["default"] = (useLatest);


/***/ }),

/***/ "../node_modules/react-use/esm/useLifecycles.js":
/*!******************************************************!*\
  !*** ../node_modules/react-use/esm/useLifecycles.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useLifecycles = function (mount, unmount) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (mount) {
            mount();
        }
        return function () {
            if (unmount) {
                unmount();
            }
        };
    }, []);
};
/* harmony default export */ __webpack_exports__["default"] = (useLifecycles);


/***/ }),

/***/ "../node_modules/react-use/esm/useList.js":
/*!************************************************!*\
  !*** ../node_modules/react-use/esm/useList.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUpdate */ "../node_modules/react-use/esm/useUpdate.js");
/* harmony import */ var _misc_hookState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/hookState */ "../node_modules/react-use/esm/misc/hookState.js");



function useList(initialList) {
    if (initialList === void 0) { initialList = []; }
    var list = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(Object(_misc_hookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(initialList));
    var update = Object(_useUpdate__WEBPACK_IMPORTED_MODULE_1__["default"])();
    var actions = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var a = {
            set: function (newList) {
                list.current = Object(_misc_hookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(newList, list.current);
                update();
            },
            push: function () {
                var items = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    items[_i] = arguments[_i];
                }
                items.length && actions.set(function (curr) { return curr.concat(items); });
            },
            updateAt: function (index, item) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    arr[index] = item;
                    return arr;
                });
            },
            insertAt: function (index, item) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    index > arr.length ? (arr[index] = item) : arr.splice(index, 0, item);
                    return arr;
                });
            },
            update: function (predicate, newItem) {
                actions.set(function (curr) { return curr.map(function (item) { return (predicate(item, newItem) ? newItem : item); }); });
            },
            updateFirst: function (predicate, newItem) {
                var index = list.current.findIndex(function (item) { return predicate(item, newItem); });
                index >= 0 && actions.updateAt(index, newItem);
            },
            upsert: function (predicate, newItem) {
                var index = list.current.findIndex(function (item) { return predicate(item, newItem); });
                index >= 0 ? actions.updateAt(index, newItem) : actions.push(newItem);
            },
            sort: function (compareFn) {
                actions.set(function (curr) { return curr.slice().sort(compareFn); });
            },
            filter: function (callbackFn, thisArg) {
                actions.set(function (curr) { return curr.slice().filter(callbackFn, thisArg); });
            },
            removeAt: function (index) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    arr.splice(index, 1);
                    return arr;
                });
            },
            clear: function () {
                actions.set([]);
            },
            reset: function () {
                actions.set(Object(_misc_hookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(initialList).slice());
            },
        };
        /**
         * @deprecated Use removeAt method instead
         */
        a.remove = a.removeAt;
        return a;
    }, []);
    return [list.current, actions];
}
/* harmony default export */ __webpack_exports__["default"] = (useList);


/***/ }),

/***/ "../node_modules/react-use/esm/useLocalStorage.js":
/*!********************************************************!*\
  !*** ../node_modules/react-use/esm/useLocalStorage.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var useLocalStorage = function (key, initialValue, options) {
    if (!_misc_util__WEBPACK_IMPORTED_MODULE_1__["isBrowser"]) {
        return [initialValue, _misc_util__WEBPACK_IMPORTED_MODULE_1__["noop"], _misc_util__WEBPACK_IMPORTED_MODULE_1__["noop"]];
    }
    if (!key) {
        throw new Error('useLocalStorage key may not be falsy');
    }
    var deserializer = options
        ? options.raw
            ? function (value) { return value; }
            : options.deserializer
        : JSON.parse;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var initializer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(function (key) {
        try {
            var serializer = options ? (options.raw ? String : options.serializer) : JSON.stringify;
            var localStorageValue = localStorage.getItem(key);
            if (localStorageValue !== null) {
                return deserializer(localStorageValue);
            }
            else {
                initialValue && localStorage.setItem(key, serializer(initialValue));
                return initialValue;
            }
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw. JSON.parse and JSON.stringify
            // can throw, too.
            return initialValue;
        }
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () { return initializer.current(key); }), state = _a[0], setState = _a[1];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () { return setState(initializer.current(key)); }, [key]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var set = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (valOrFunc) {
        try {
            var newState = typeof valOrFunc === 'function' ? valOrFunc(state) : valOrFunc;
            if (typeof newState === 'undefined')
                return;
            var value = void 0;
            if (options)
                if (options.raw)
                    if (typeof newState === 'string')
                        value = newState;
                    else
                        value = JSON.stringify(newState);
                else if (options.serializer)
                    value = options.serializer(newState);
                else
                    value = JSON.stringify(newState);
            else
                value = JSON.stringify(newState);
            localStorage.setItem(key, value);
            setState(deserializer(value));
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw. Also JSON.stringify can throw.
        }
    }, [key, setState]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var remove = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        try {
            localStorage.removeItem(key);
            setState(undefined);
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw.
        }
    }, [key, setState]);
    return [state, set, remove];
};
/* harmony default export */ __webpack_exports__["default"] = (useLocalStorage);


/***/ }),

/***/ "../node_modules/react-use/esm/useLocation.js":
/*!****************************************************!*\
  !*** ../node_modules/react-use/esm/useLocation.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var patchHistoryMethod = function (method) {
    var history = window.history;
    var original = history[method];
    history[method] = function (state) {
        var result = original.apply(this, arguments);
        var event = new Event(method.toLowerCase());
        event.state = state;
        window.dispatchEvent(event);
        return result;
    };
};
if (_misc_util__WEBPACK_IMPORTED_MODULE_1__["isBrowser"]) {
    patchHistoryMethod('pushState');
    patchHistoryMethod('replaceState');
}
var useLocationServer = function () { return ({
    trigger: 'load',
    length: 1,
}); };
var buildState = function (trigger) {
    var _a = window.history, state = _a.state, length = _a.length;
    var _b = window.location, hash = _b.hash, host = _b.host, hostname = _b.hostname, href = _b.href, origin = _b.origin, pathname = _b.pathname, port = _b.port, protocol = _b.protocol, search = _b.search;
    return {
        trigger: trigger,
        state: state,
        length: length,
        hash: hash,
        host: host,
        hostname: hostname,
        href: href,
        origin: origin,
        pathname: pathname,
        port: port,
        protocol: protocol,
        search: search,
    };
};
var useLocationBrowser = function () {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(buildState('load')), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var onPopstate = function () { return setState(buildState('popstate')); };
        var onPushstate = function () { return setState(buildState('pushstate')); };
        var onReplacestate = function () { return setState(buildState('replacestate')); };
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'popstate', onPopstate);
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'pushstate', onPushstate);
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'replacestate', onReplacestate);
        return function () {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'popstate', onPopstate);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'pushstate', onPushstate);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'replacestate', onReplacestate);
        };
    }, []);
    return state;
};
var hasEventConstructor = typeof Event === 'function';
/* harmony default export */ __webpack_exports__["default"] = (_misc_util__WEBPACK_IMPORTED_MODULE_1__["isBrowser"] && hasEventConstructor ? useLocationBrowser : useLocationServer);


/***/ }),

/***/ "../node_modules/react-use/esm/useLockBodyScroll.js":
/*!**********************************************************!*\
  !*** ../node_modules/react-use/esm/useLockBodyScroll.js ***!
  \**********************************************************/
/*! exports provided: getClosestBody, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClosestBody", function() { return getClosestBody; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


function getClosestBody(el) {
    if (!el) {
        return null;
    }
    else if (el.tagName === 'BODY') {
        return el;
    }
    else if (el.tagName === 'IFRAME') {
        var document_1 = el.contentDocument;
        return document_1 ? document_1.body : null;
    }
    else if (!el.offsetParent) {
        return null;
    }
    return getClosestBody(el.offsetParent);
}
function preventDefault(rawEvent) {
    var e = rawEvent || window.event;
    // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
    if (e.touches.length > 1)
        return true;
    if (e.preventDefault)
        e.preventDefault();
    return false;
}
var isIosDevice = _misc_util__WEBPACK_IMPORTED_MODULE_1__["isBrowser"] &&
    window.navigator &&
    window.navigator.platform &&
    /iP(ad|hone|od)/.test(window.navigator.platform);
var bodies = new Map();
var doc = typeof document === 'object' ? document : undefined;
var documentListenerAdded = false;
/* harmony default export */ __webpack_exports__["default"] = (!doc
    ? function useLockBodyMock(_locked, _elementRef) {
        if (_locked === void 0) { _locked = true; }
    }
    : function useLockBody(locked, elementRef) {
        if (locked === void 0) { locked = true; }
        var bodyRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(doc.body);
        elementRef = elementRef || bodyRef;
        var lock = function (body) {
            var bodyInfo = bodies.get(body);
            if (!bodyInfo) {
                bodies.set(body, { counter: 1, initialOverflow: body.style.overflow });
                if (isIosDevice) {
                    if (!documentListenerAdded) {
                        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(document, 'touchmove', preventDefault, { passive: false });
                        documentListenerAdded = true;
                    }
                }
                else {
                    body.style.overflow = 'hidden';
                }
            }
            else {
                bodies.set(body, {
                    counter: bodyInfo.counter + 1,
                    initialOverflow: bodyInfo.initialOverflow,
                });
            }
        };
        var unlock = function (body) {
            var bodyInfo = bodies.get(body);
            if (bodyInfo) {
                if (bodyInfo.counter === 1) {
                    bodies.delete(body);
                    if (isIosDevice) {
                        body.ontouchmove = null;
                        if (documentListenerAdded) {
                            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(document, 'touchmove', preventDefault);
                            documentListenerAdded = false;
                        }
                    }
                    else {
                        body.style.overflow = bodyInfo.initialOverflow;
                    }
                }
                else {
                    bodies.set(body, {
                        counter: bodyInfo.counter - 1,
                        initialOverflow: bodyInfo.initialOverflow,
                    });
                }
            }
        };
        Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
            var body = getClosestBody(elementRef.current);
            if (!body) {
                return;
            }
            if (locked) {
                lock(body);
            }
            else {
                unlock(body);
            }
        }, [locked, elementRef.current]);
        // clean up, on un-mount
        Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
            var body = getClosestBody(elementRef.current);
            if (!body) {
                return;
            }
            return function () {
                unlock(body);
            };
        }, []);
    });


/***/ }),

/***/ "../node_modules/react-use/esm/useLogger.js":
/*!**************************************************!*\
  !*** ../node_modules/react-use/esm/useLogger.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEffectOnce */ "../node_modules/react-use/esm/useEffectOnce.js");
/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useUpdateEffect */ "../node_modules/react-use/esm/useUpdateEffect.js");



var useLogger = function (componentName) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    Object(_useEffectOnce__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        console.log.apply(console, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([componentName + " mounted"], rest));
        return function () { return console.log(componentName + " unmounted"); };
    });
    Object(_useUpdateEffect__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
        console.log.apply(console, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([componentName + " updated"], rest));
    });
};
/* harmony default export */ __webpack_exports__["default"] = (useLogger);


/***/ }),

/***/ "../node_modules/react-use/esm/useLongPress.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-use/esm/useLongPress.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var isTouchEvent = function (ev) {
    return 'touches' in ev;
};
var preventDefault = function (ev) {
    if (!isTouchEvent(ev))
        return;
    if (ev.touches.length < 2 && ev.preventDefault) {
        ev.preventDefault();
    }
};
var useLongPress = function (callback, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isPreventDefault, isPreventDefault = _c === void 0 ? true : _c, _d = _b.delay, delay = _d === void 0 ? 300 : _d;
    var timeout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var target = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var start = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
        // prevent ghost click on mobile devices
        if (isPreventDefault && event.target) {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(event.target, 'touchend', preventDefault, { passive: false });
            target.current = event.target;
        }
        timeout.current = setTimeout(function () { return callback(event); }, delay);
    }, [callback, delay, isPreventDefault]);
    var clear = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        // clearTimeout and removeEventListener
        timeout.current && clearTimeout(timeout.current);
        if (isPreventDefault && target.current) {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(target.current, 'touchend', preventDefault);
        }
    }, [isPreventDefault]);
    return {
        onMouseDown: function (e) { return start(e); },
        onTouchStart: function (e) { return start(e); },
        onMouseUp: clear,
        onMouseLeave: clear,
        onTouchEnd: clear,
    };
};
/* harmony default export */ __webpack_exports__["default"] = (useLongPress);


/***/ }),

/***/ "../node_modules/react-use/esm/useMap.js":
/*!***********************************************!*\
  !*** ../node_modules/react-use/esm/useMap.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var useMap = function (initialMap) {
    if (initialMap === void 0) { initialMap = {}; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialMap), map = _a[0], set = _a[1];
    var stableActions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () { return ({
        set: function (key, entry) {
            set(function (prevMap) {
                var _a;
                return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prevMap), (_a = {}, _a[key] = entry, _a)));
            });
        },
        setAll: function (newMap) {
            set(newMap);
        },
        remove: function (key) {
            set(function (prevMap) {
                var _a = prevMap, _b = key, omit = _a[_b], rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, [typeof _b === "symbol" ? _b : _b + ""]);
                return rest;
            });
        },
        reset: function () { return set(initialMap); },
    }); }, [set]);
    var utils = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ get: Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (key) { return map[key]; }, [map]) }, stableActions);
    return [map, utils];
};
/* harmony default export */ __webpack_exports__["default"] = (useMap);


/***/ }),

/***/ "../node_modules/react-use/esm/useMeasure.js":
/*!***************************************************!*\
  !*** ../node_modules/react-use/esm/useMeasure.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "../node_modules/react-use/esm/useIsomorphicLayoutEffect.js");
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");



var defaultState = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
};
function useMeasure() {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), element = _a[0], ref = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultState), rect = _b[0], setRect = _b[1];
    var observer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        return new window.ResizeObserver(function (entries) {
            if (entries[0]) {
                var _a = entries[0].contentRect, x = _a.x, y = _a.y, width = _a.width, height = _a.height, top_1 = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
                setRect({ x: x, y: y, width: width, height: height, top: top_1, left: left, bottom: bottom, right: right });
            }
        });
    }, []);
    Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        if (!element)
            return;
        observer.observe(element);
        return function () {
            observer.disconnect();
        };
    }, [element]);
    return [ref, rect];
}
/* harmony default export */ __webpack_exports__["default"] = (_misc_util__WEBPACK_IMPORTED_MODULE_2__["isBrowser"] && typeof window.ResizeObserver !== 'undefined'
    ? useMeasure
    : (function () { return [_misc_util__WEBPACK_IMPORTED_MODULE_2__["noop"], defaultState]; }));


/***/ }),

/***/ "../node_modules/react-use/esm/useMedia.js":
/*!*************************************************!*\
  !*** ../node_modules/react-use/esm/useMedia.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var getInitialState = function (query, defaultState) {
    // Prevent a React hydration mismatch when a default value is provided by not defaulting to window.matchMedia(query).matches.
    if (defaultState !== undefined) {
        return defaultState;
    }
    if (_misc_util__WEBPACK_IMPORTED_MODULE_1__["isBrowser"]) {
        return window.matchMedia(query).matches;
    }
    // A default value has not been provided, and you are rendering on the server, warn of a possible hydration mismatch when defaulting to false.
    if (true) {
        console.warn('`useMedia` When server side rendering, defaultState should be defined to prevent a hydration mismatches.');
    }
    return false;
};
var useMedia = function (query, defaultState) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getInitialState(query, defaultState)), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var mounted = true;
        var mql = window.matchMedia(query);
        var onChange = function () {
            if (!mounted) {
                return;
            }
            setState(!!mql.matches);
        };
        mql.addListener(onChange);
        setState(mql.matches);
        return function () {
            mounted = false;
            mql.removeListener(onChange);
        };
    }, [query]);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useMedia);


/***/ }),

/***/ "../node_modules/react-use/esm/useMediaDevices.js":
/*!********************************************************!*\
  !*** ../node_modules/react-use/esm/useMediaDevices.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var useMediaDevices = function () {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var mounted = true;
        var onChange = function () {
            navigator.mediaDevices
                .enumerateDevices()
                .then(function (devices) {
                if (mounted) {
                    setState({
                        devices: devices.map(function (_a) {
                            var deviceId = _a.deviceId, groupId = _a.groupId, kind = _a.kind, label = _a.label;
                            return ({
                                deviceId: deviceId,
                                groupId: groupId,
                                kind: kind,
                                label: label,
                            });
                        }),
                    });
                }
            })
                .catch(_misc_util__WEBPACK_IMPORTED_MODULE_1__["noop"]);
        };
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(navigator.mediaDevices, 'devicechange', onChange);
        onChange();
        return function () {
            mounted = false;
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(navigator.mediaDevices, 'devicechange', onChange);
        };
    }, []);
    return state;
};
var useMediaDevicesMock = function () { return ({}); };
/* harmony default export */ __webpack_exports__["default"] = (_misc_util__WEBPACK_IMPORTED_MODULE_1__["isNavigator"] && !!navigator.mediaDevices ? useMediaDevices : useMediaDevicesMock);


/***/ }),

/***/ "../node_modules/react-use/esm/useMediatedState.js":
/*!*********************************************************!*\
  !*** ../node_modules/react-use/esm/useMediatedState.js ***!
  \*********************************************************/
/*! exports provided: useMediatedState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMediatedState", function() { return useMediatedState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useMediatedState(mediator, initialState) {
    var mediatorFn = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(mediator);
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], setMediatedState = _a[1];
    var setState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (newState) {
        if (mediatorFn.current.length === 2) {
            mediatorFn.current(newState, setMediatedState);
        }
        else {
            setMediatedState(mediatorFn.current(newState));
        }
    }, [state]);
    return [state, setState];
}


/***/ }),

/***/ "../node_modules/react-use/esm/useMethods.js":
/*!***************************************************!*\
  !*** ../node_modules/react-use/esm/useMethods.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useMethods = function (createMethods, initialState) {
    var reducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return function (reducerState, action) {
        var _a;
        return (_a = createMethods(reducerState))[action.type].apply(_a, action.payload);
    }; }, [createMethods]);
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState), state = _a[0], dispatch = _a[1];
    var wrappedMethods = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var actionTypes = Object.keys(createMethods(initialState));
        return actionTypes.reduce(function (acc, type) {
            acc[type] = function () {
                var payload = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    payload[_i] = arguments[_i];
                }
                return dispatch({ type: type, payload: payload });
            };
            return acc;
        }, {});
    }, [createMethods, initialState]);
    return [state, wrappedMethods];
};
/* harmony default export */ __webpack_exports__["default"] = (useMethods);


/***/ }),

/***/ "../node_modules/react-use/esm/useMotion.js":
/*!**************************************************!*\
  !*** ../node_modules/react-use/esm/useMotion.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var defaultState = {
    acceleration: {
        x: null,
        y: null,
        z: null,
    },
    accelerationIncludingGravity: {
        x: null,
        y: null,
        z: null,
    },
    rotationRate: {
        alpha: null,
        beta: null,
        gamma: null,
    },
    interval: 16,
};
var useMotion = function (initialState) {
    if (initialState === void 0) { initialState = defaultState; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var handler = function (event) {
            var acceleration = event.acceleration, accelerationIncludingGravity = event.accelerationIncludingGravity, rotationRate = event.rotationRate, interval = event.interval;
            setState({
                acceleration: {
                    x: acceleration.x,
                    y: acceleration.y,
                    z: acceleration.z,
                },
                accelerationIncludingGravity: {
                    x: accelerationIncludingGravity.x,
                    y: accelerationIncludingGravity.y,
                    z: accelerationIncludingGravity.z,
                },
                rotationRate: {
                    alpha: rotationRate.alpha,
                    beta: rotationRate.beta,
                    gamma: rotationRate.gamma,
                },
                interval: interval,
            });
        };
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'devicemotion', handler);
        return function () {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'devicemotion', handler);
        };
    }, []);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useMotion);


/***/ }),

/***/ "../node_modules/react-use/esm/useMount.js":
/*!*************************************************!*\
  !*** ../node_modules/react-use/esm/useMount.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useEffectOnce */ "../node_modules/react-use/esm/useEffectOnce.js");

var useMount = function (fn) {
    Object(_useEffectOnce__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
        fn();
    });
};
/* harmony default export */ __webpack_exports__["default"] = (useMount);


/***/ }),

/***/ "../node_modules/react-use/esm/useMountedState.js":
/*!********************************************************!*\
  !*** ../node_modules/react-use/esm/useMountedState.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMountedState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useMountedState() {
    var mountedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    var get = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () { return mountedRef.current; }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        mountedRef.current = true;
        return function () {
            mountedRef.current = false;
        };
    }, []);
    return get;
}


/***/ }),

/***/ "../node_modules/react-use/esm/useMouse.js":
/*!*************************************************!*\
  !*** ../node_modules/react-use/esm/useMouse.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRafState */ "../node_modules/react-use/esm/useRafState.js");
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");



var useMouse = function (ref) {
    if (true) {
        if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
            console.error('useMouse expects a single ref argument.');
        }
    }
    var _a = Object(_useRafState__WEBPACK_IMPORTED_MODULE_1__["default"])({
        docX: 0,
        docY: 0,
        posX: 0,
        posY: 0,
        elX: 0,
        elY: 0,
        elH: 0,
        elW: 0,
    }), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var moveHandler = function (event) {
            if (ref && ref.current) {
                var _a = ref.current.getBoundingClientRect(), left = _a.left, top_1 = _a.top, elW = _a.width, elH = _a.height;
                var posX = left + window.pageXOffset;
                var posY = top_1 + window.pageYOffset;
                var elX = event.pageX - posX;
                var elY = event.pageY - posY;
                setState({
                    docX: event.pageX,
                    docY: event.pageY,
                    posX: posX,
                    posY: posY,
                    elX: elX,
                    elY: elY,
                    elH: elH,
                    elW: elW,
                });
            }
        };
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["on"])(document, 'mousemove', moveHandler);
        return function () {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["off"])(document, 'mousemove', moveHandler);
        };
    }, [ref]);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useMouse);


/***/ }),

/***/ "../node_modules/react-use/esm/useMouseHovered.js":
/*!********************************************************!*\
  !*** ../node_modules/react-use/esm/useMouseHovered.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useHoverDirty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useHoverDirty */ "../node_modules/react-use/esm/useHoverDirty.js");
/* harmony import */ var _useMouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMouse */ "../node_modules/react-use/esm/useMouse.js");


var nullRef = { current: null };
var useMouseHovered = function (ref, options) {
    if (options === void 0) { options = {}; }
    var whenHovered = !!options.whenHovered;
    var bound = !!options.bound;
    var isHovered = Object(_useHoverDirty__WEBPACK_IMPORTED_MODULE_0__["default"])(ref, whenHovered);
    var state = Object(_useMouse__WEBPACK_IMPORTED_MODULE_1__["default"])(whenHovered && !isHovered ? nullRef : ref);
    if (bound) {
        state.elX = Math.max(0, Math.min(state.elX, state.elW));
        state.elY = Math.max(0, Math.min(state.elY, state.elH));
    }
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useMouseHovered);


/***/ }),

/***/ "../node_modules/react-use/esm/useMouseWheel.js":
/*!******************************************************!*\
  !*** ../node_modules/react-use/esm/useMouseWheel.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), mouseWheelScrolled = _a[0], setMouseWheelScrolled = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var updateScroll = function (e) {
            setMouseWheelScrolled(e.deltaY + mouseWheelScrolled);
        };
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'wheel', updateScroll, false);
        return function () { return Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'wheel', updateScroll); };
    });
    return mouseWheelScrolled;
});


/***/ }),

/***/ "../node_modules/react-use/esm/useMultiStateValidator.js":
/*!***************************************************************!*\
  !*** ../node_modules/react-use/esm/useMultiStateValidator.js ***!
  \***************************************************************/
/*! exports provided: useMultiStateValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMultiStateValidator", function() { return useMultiStateValidator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useMultiStateValidator(states, validator, initialValidity) {
    if (initialValidity === void 0) { initialValidity = [undefined]; }
    if (typeof states !== 'object') {
        throw new Error('states expected to be an object or array, got ' + typeof states);
    }
    var validatorInner = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(validator);
    var statesInner = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(states);
    validatorInner.current = validator;
    statesInner.current = states;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValidity), validity = _a[0], setValidity = _a[1];
    var validate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        if (validatorInner.current.length >= 2) {
            validatorInner.current(statesInner.current, setValidity);
        }
        else {
            setValidity(validatorInner.current(statesInner.current));
        }
    }, [setValidity]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        validate();
    }, Object.values(states));
    return [validity, validate];
}


/***/ }),

/***/ "../node_modules/react-use/esm/useNetworkState.js":
/*!********************************************************!*\
  !*** ../node_modules/react-use/esm/useNetworkState.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useNetworkState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var nav = _misc_util__WEBPACK_IMPORTED_MODULE_1__["isNavigator"] ? navigator : undefined;
var conn = nav && (nav.connection || nav.mozConnection || nav.webkitConnection);
function getConnectionState(previousState) {
    var online = nav === null || nav === void 0 ? void 0 : nav.onLine;
    var previousOnline = previousState === null || previousState === void 0 ? void 0 : previousState.online;
    return {
        online: online,
        previous: previousOnline,
        since: online !== previousOnline ? new Date() : previousState === null || previousState === void 0 ? void 0 : previousState.since,
        downlink: conn === null || conn === void 0 ? void 0 : conn.downlink,
        downlinkMax: conn === null || conn === void 0 ? void 0 : conn.downlinkMax,
        effectiveType: conn === null || conn === void 0 ? void 0 : conn.effectiveType,
        rtt: conn === null || conn === void 0 ? void 0 : conn.rtt,
        saveData: conn === null || conn === void 0 ? void 0 : conn.saveData,
        type: conn === null || conn === void 0 ? void 0 : conn.type,
    };
}
function useNetworkState(initialState) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState !== null && initialState !== void 0 ? initialState : getConnectionState), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var handleStateChange = function () {
            setState(getConnectionState);
        };
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'online', handleStateChange, { passive: true });
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'offline', handleStateChange, { passive: true });
        if (conn) {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(conn, 'change', handleStateChange, { passive: true });
        }
        return function () {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'online', handleStateChange);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'offline', handleStateChange);
            if (conn) {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(conn, 'change', handleStateChange);
            }
        };
    }, []);
    return state;
}


/***/ }),

/***/ "../node_modules/react-use/esm/useNumber.js":
/*!**************************************************!*\
  !*** ../node_modules/react-use/esm/useNumber.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useCounter */ "../node_modules/react-use/esm/useCounter.js");

/* harmony default export */ __webpack_exports__["default"] = (_useCounter__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../node_modules/react-use/esm/useObservable.js":
/*!******************************************************!*\
  !*** ../node_modules/react-use/esm/useObservable.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "../node_modules/react-use/esm/useIsomorphicLayoutEffect.js");


function useObservable(observable$, initialValue) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue), value = _a[0], update = _a[1];
    Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        var s = observable$.subscribe(update);
        return function () { return s.unsubscribe(); };
    }, [observable$]);
    return value;
}
/* harmony default export */ __webpack_exports__["default"] = (useObservable);


/***/ }),

/***/ "../node_modules/react-use/esm/useOrientation.js":
/*!*******************************************************!*\
  !*** ../node_modules/react-use/esm/useOrientation.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var defaultState = {
    angle: 0,
    type: 'landscape-primary',
};
var useOrientation = function (initialState) {
    if (initialState === void 0) { initialState = defaultState; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var screen = window.screen;
        var mounted = true;
        var onChange = function () {
            if (mounted) {
                var orientation_1 = screen.orientation;
                if (orientation_1) {
                    var angle = orientation_1.angle, type = orientation_1.type;
                    setState({ angle: angle, type: type });
                }
                else if (window.orientation !== undefined) {
                    setState({
                        angle: typeof window.orientation === 'number' ? window.orientation : 0,
                        type: '',
                    });
                }
                else {
                    setState(initialState);
                }
            }
        };
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'orientationchange', onChange);
        onChange();
        return function () {
            mounted = false;
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'orientationchange', onChange);
        };
    }, []);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useOrientation);


/***/ }),

/***/ "../node_modules/react-use/esm/usePageLeave.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-use/esm/usePageLeave.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var usePageLeave = function (onPageLeave, args) {
    if (args === void 0) { args = []; }
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!onPageLeave) {
            return;
        }
        var handler = function (event) {
            event = event ? event : window.event;
            var from = event.relatedTarget || event.toElement;
            if (!from || from.nodeName === 'HTML') {
                onPageLeave();
            }
        };
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(document, 'mouseout', handler);
        return function () {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(document, 'mouseout', handler);
        };
    }, args);
};
/* harmony default export */ __webpack_exports__["default"] = (usePageLeave);


/***/ }),

/***/ "../node_modules/react-use/esm/usePermission.js":
/*!******************************************************!*\
  !*** ../node_modules/react-use/esm/usePermission.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


// const usePermission = <T extends PermissionDescriptor>(permissionDesc: T): IState => {
var usePermission = function (permissionDesc) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var mounted = true;
        var permissionStatus = null;
        var onChange = function () {
            if (!mounted) {
                return;
            }
            setState(function () { var _a; return (_a = permissionStatus === null || permissionStatus === void 0 ? void 0 : permissionStatus.state) !== null && _a !== void 0 ? _a : ''; });
        };
        navigator.permissions
            .query(permissionDesc)
            .then(function (status) {
            permissionStatus = status;
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(permissionStatus, 'change', onChange);
            onChange();
        })
            .catch(_misc_util__WEBPACK_IMPORTED_MODULE_1__["noop"]);
        return function () {
            permissionStatus && Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(permissionStatus, 'change', onChange);
            mounted = false;
            permissionStatus = null;
        };
    }, [permissionDesc]);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (usePermission);


/***/ }),

/***/ "../node_modules/react-use/esm/usePrevious.js":
/*!****************************************************!*\
  !*** ../node_modules/react-use/esm/usePrevious.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePrevious; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function usePrevious(state) {
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        ref.current = state;
    });
    return ref.current;
}


/***/ }),

/***/ "../node_modules/react-use/esm/usePreviousDistinct.js":
/*!************************************************************!*\
  !*** ../node_modules/react-use/esm/usePreviousDistinct.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePreviousDistinct; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useFirstMountState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFirstMountState */ "../node_modules/react-use/esm/useFirstMountState.js");


var strictEquals = function (prev, next) { return prev === next; };
function usePreviousDistinct(value, compare) {
    if (compare === void 0) { compare = strictEquals; }
    var prevRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var curRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
    var isFirstMount = Object(_useFirstMountState__WEBPACK_IMPORTED_MODULE_1__["useFirstMountState"])();
    if (!isFirstMount && !compare(curRef.current, value)) {
        prevRef.current = curRef.current;
        curRef.current = value;
    }
    return prevRef.current;
}


/***/ }),

/***/ "../node_modules/react-use/esm/usePromise.js":
/*!***************************************************!*\
  !*** ../node_modules/react-use/esm/usePromise.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMountedState */ "../node_modules/react-use/esm/useMountedState.js");


var usePromise = function () {
    var isMounted = Object(_useMountedState__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (promise) {
        return new Promise(function (resolve, reject) {
            var onValue = function (value) {
                isMounted() && resolve(value);
            };
            var onError = function (error) {
                isMounted() && reject(error);
            };
            promise.then(onValue, onError);
        });
    }, []);
};
/* harmony default export */ __webpack_exports__["default"] = (usePromise);


/***/ }),

/***/ "../node_modules/react-use/esm/useQueue.js":
/*!*************************************************!*\
  !*** ../node_modules/react-use/esm/useQueue.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var useQueue = function (initialValue) {
    if (initialValue === void 0) { initialValue = []; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialValue), state = _a[0], set = _a[1];
    return {
        add: function (value) {
            set(function (queue) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(queue, [value]); });
        },
        remove: function () {
            var result;
            set(function (_a) {
                var first = _a[0], rest = _a.slice(1);
                result = first;
                return rest;
            });
            return result;
        },
        get first() {
            return state[0];
        },
        get last() {
            return state[state.length - 1];
        },
        get size() {
            return state.length;
        },
    };
};
/* harmony default export */ __webpack_exports__["default"] = (useQueue);


/***/ }),

/***/ "../node_modules/react-use/esm/useRaf.js":
/*!***********************************************!*\
  !*** ../node_modules/react-use/esm/useRaf.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "../node_modules/react-use/esm/useIsomorphicLayoutEffect.js");


var useRaf = function (ms, delay) {
    if (ms === void 0) { ms = 1e12; }
    if (delay === void 0) { delay = 0; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), elapsed = _a[0], set = _a[1];
    Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        var raf;
        var timerStop;
        var start;
        var onFrame = function () {
            var time = Math.min(1, (Date.now() - start) / ms);
            set(time);
            loop();
        };
        var loop = function () {
            raf = requestAnimationFrame(onFrame);
        };
        var onStart = function () {
            timerStop = setTimeout(function () {
                cancelAnimationFrame(raf);
                set(1);
            }, ms);
            start = Date.now();
            loop();
        };
        var timerDelay = setTimeout(onStart, delay);
        return function () {
            clearTimeout(timerStop);
            clearTimeout(timerDelay);
            cancelAnimationFrame(raf);
        };
    }, [ms, delay]);
    return elapsed;
};
/* harmony default export */ __webpack_exports__["default"] = (useRaf);


/***/ }),

/***/ "../node_modules/react-use/esm/useRafLoop.js":
/*!***************************************************!*\
  !*** ../node_modules/react-use/esm/useRafLoop.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useRafLoop; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useRafLoop(callback, initiallyActive) {
    if (initiallyActive === void 0) { initiallyActive = true; }
    var raf = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var rafActivity = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    var rafCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(callback);
    rafCallback.current = callback;
    var step = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (time) {
        if (rafActivity.current) {
            rafCallback.current(time);
            raf.current = requestAnimationFrame(step);
        }
    }, []);
    var result = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        return [
            function () {
                // stop
                if (rafActivity.current) {
                    rafActivity.current = false;
                    raf.current && cancelAnimationFrame(raf.current);
                }
            },
            function () {
                // start
                if (!rafActivity.current) {
                    rafActivity.current = true;
                    raf.current = requestAnimationFrame(step);
                }
            },
            function () { return rafActivity.current; },
        ];
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (initiallyActive) {
            result[1]();
        }
        return result[0];
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return result;
}


/***/ }),

/***/ "../node_modules/react-use/esm/useRafState.js":
/*!****************************************************!*\
  !*** ../node_modules/react-use/esm/useRafState.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUnmount */ "../node_modules/react-use/esm/useUnmount.js");


var useRafState = function (initialState) {
    var frame = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], setState = _a[1];
    var setRafState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value) {
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(function () {
            setState(value);
        });
    }, []);
    Object(_useUnmount__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        cancelAnimationFrame(frame.current);
    });
    return [state, setRafState];
};
/* harmony default export */ __webpack_exports__["default"] = (useRafState);


/***/ }),

/***/ "../node_modules/react-use/esm/useRendersCount.js":
/*!********************************************************!*\
  !*** ../node_modules/react-use/esm/useRendersCount.js ***!
  \********************************************************/
/*! exports provided: useRendersCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRendersCount", function() { return useRendersCount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useRendersCount() {
    return ++Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0).current;
}


/***/ }),

/***/ "../node_modules/react-use/esm/useScratch.js":
/*!***************************************************!*\
  !*** ../node_modules/react-use/esm/useScratch.js ***!
  \***************************************************/
/*! exports provided: ScratchSensor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScratchSensor", function() { return ScratchSensor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_universal_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-universal-interface */ "../node_modules/react-universal-interface/lib/index.js");
/* harmony import */ var react_universal_interface__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_universal_interface__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useLatest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useLatest */ "../node_modules/react-use/esm/useLatest.js");
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");





var useScratch = function (params) {
    if (params === void 0) { params = {}; }
    var disabled = params.disabled;
    var paramsRef = Object(_useLatest__WEBPACK_IMPORTED_MODULE_3__["default"])(params);
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({ isScratching: false }), state = _a[0], setState = _a[1];
    var refState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(state);
    var refScratching = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
    var refAnimationFrame = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null), el = _b[0], setEl = _b[1];
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        if (disabled)
            return;
        if (!el)
            return;
        var onMoveEvent = function (docX, docY) {
            cancelAnimationFrame(refAnimationFrame.current);
            refAnimationFrame.current = requestAnimationFrame(function () {
                var _a = el.getBoundingClientRect(), left = _a.left, top = _a.top;
                var elX = left + window.scrollX;
                var elY = top + window.scrollY;
                var x = docX - elX;
                var y = docY - elY;
                setState(function (oldState) {
                    var newState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, oldState), { dx: x - (oldState.x || 0), dy: y - (oldState.y || 0), end: Date.now(), isScratching: true });
                    refState.current = newState;
                    (paramsRef.current.onScratch || _misc_util__WEBPACK_IMPORTED_MODULE_4__["noop"])(newState);
                    return newState;
                });
            });
        };
        var onMouseMove = function (event) {
            onMoveEvent(event.pageX, event.pageY);
        };
        var onTouchMove = function (event) {
            onMoveEvent(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
        };
        var onMouseUp;
        var onTouchEnd;
        var stopScratching = function () {
            if (!refScratching.current)
                return;
            refScratching.current = false;
            refState.current = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, refState.current), { isScratching: false });
            (paramsRef.current.onScratchEnd || _misc_util__WEBPACK_IMPORTED_MODULE_4__["noop"])(refState.current);
            setState({ isScratching: false });
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["off"])(window, 'mousemove', onMouseMove);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["off"])(window, 'touchmove', onTouchMove);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["off"])(window, 'mouseup', onMouseUp);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["off"])(window, 'touchend', onTouchEnd);
        };
        onMouseUp = stopScratching;
        onTouchEnd = stopScratching;
        var startScratching = function (docX, docY) {
            if (!refScratching.current)
                return;
            var _a = el.getBoundingClientRect(), left = _a.left, top = _a.top;
            var elX = left + window.scrollX;
            var elY = top + window.scrollY;
            var x = docX - elX;
            var y = docY - elY;
            var time = Date.now();
            var newState = {
                isScratching: true,
                start: time,
                end: time,
                docX: docX,
                docY: docY,
                x: x,
                y: y,
                dx: 0,
                dy: 0,
                elH: el.offsetHeight,
                elW: el.offsetWidth,
                elX: elX,
                elY: elY,
            };
            refState.current = newState;
            (paramsRef.current.onScratchStart || _misc_util__WEBPACK_IMPORTED_MODULE_4__["noop"])(newState);
            setState(newState);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["on"])(window, 'mousemove', onMouseMove);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["on"])(window, 'touchmove', onTouchMove);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["on"])(window, 'mouseup', onMouseUp);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["on"])(window, 'touchend', onTouchEnd);
        };
        var onMouseDown = function (event) {
            refScratching.current = true;
            startScratching(event.pageX, event.pageY);
        };
        var onTouchStart = function (event) {
            refScratching.current = true;
            startScratching(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
        };
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["on"])(el, 'mousedown', onMouseDown);
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["on"])(el, 'touchstart', onTouchStart);
        return function () {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["off"])(el, 'mousedown', onMouseDown);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["off"])(el, 'touchstart', onTouchStart);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["off"])(window, 'mousemove', onMouseMove);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["off"])(window, 'touchmove', onTouchMove);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["off"])(window, 'mouseup', onMouseUp);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["off"])(window, 'touchend', onTouchEnd);
            if (refAnimationFrame.current)
                cancelAnimationFrame(refAnimationFrame.current);
            refAnimationFrame.current = null;
            refScratching.current = false;
            refState.current = { isScratching: false };
            setState(refState.current);
        };
    }, [el, disabled, paramsRef]);
    return [setEl, state];
};
var ScratchSensor = function (props) {
    var children = props.children, params = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(props, ["children"]);
    var _a = useScratch(params), ref = _a[0], state = _a[1];
    var element = Object(react_universal_interface__WEBPACK_IMPORTED_MODULE_2__["render"])(props, state);
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(element, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, element.props), { ref: function (el) {
            if (element.props.ref) {
                if (typeof element.props.ref === 'object')
                    element.props.ref.current = el;
                if (typeof element.props.ref === 'function')
                    element.props.ref(el);
            }
            ref(el);
        } }));
};
/* harmony default export */ __webpack_exports__["default"] = (useScratch);


/***/ }),

/***/ "../node_modules/react-use/esm/useScroll.js":
/*!**************************************************!*\
  !*** ../node_modules/react-use/esm/useScroll.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRafState */ "../node_modules/react-use/esm/useRafState.js");
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");



var useScroll = function (ref) {
    if (true) {
        if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
            console.error('`useScroll` expects a single ref argument.');
        }
    }
    var _a = Object(_useRafState__WEBPACK_IMPORTED_MODULE_1__["default"])({
        x: 0,
        y: 0,
    }), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var handler = function () {
            if (ref.current) {
                setState({
                    x: ref.current.scrollLeft,
                    y: ref.current.scrollTop,
                });
            }
        };
        if (ref.current) {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["on"])(ref.current, 'scroll', handler, {
                capture: false,
                passive: true,
            });
        }
        return function () {
            if (ref.current) {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["off"])(ref.current, 'scroll', handler);
            }
        };
    }, [ref]);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useScroll);


/***/ }),

/***/ "../node_modules/react-use/esm/useScrollbarWidth.js":
/*!**********************************************************!*\
  !*** ../node_modules/react-use/esm/useScrollbarWidth.js ***!
  \**********************************************************/
/*! exports provided: useScrollbarWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScrollbarWidth", function() { return useScrollbarWidth; });
/* harmony import */ var _xobotyi_scrollbar_width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @xobotyi/scrollbar-width */ "../node_modules/@xobotyi/scrollbar-width/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useScrollbarWidth() {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(_xobotyi_scrollbar_width__WEBPACK_IMPORTED_MODULE_0__["scrollbarWidth"])()), sbw = _a[0], setSbw = _a[1];
    // this needed to ensure the scrollbar width in case hook called before the DOM is ready
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        if (typeof sbw !== 'undefined') {
            return;
        }
        var raf = requestAnimationFrame(function () {
            setSbw(Object(_xobotyi_scrollbar_width__WEBPACK_IMPORTED_MODULE_0__["scrollbarWidth"])());
        });
        return function () { return cancelAnimationFrame(raf); };
    }, []);
    return sbw;
}


/***/ }),

/***/ "../node_modules/react-use/esm/useScrolling.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-use/esm/useScrolling.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var useScrolling = function (ref) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), scrolling = _a[0], setScrolling = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (ref.current) {
            var scrollingTimeout_1;
            var handleScrollEnd_1 = function () {
                setScrolling(false);
            };
            var handleScroll_1 = function () {
                setScrolling(true);
                clearTimeout(scrollingTimeout_1);
                scrollingTimeout_1 = setTimeout(function () { return handleScrollEnd_1(); }, 150);
            };
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(ref.current, 'scroll', handleScroll_1, false);
            return function () {
                if (ref.current) {
                    Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(ref.current, 'scroll', handleScroll_1, false);
                }
            };
        }
        return function () { };
    }, [ref]);
    return scrolling;
};
/* harmony default export */ __webpack_exports__["default"] = (useScrolling);


/***/ }),

/***/ "../node_modules/react-use/esm/useSearchParam.js":
/*!*******************************************************!*\
  !*** ../node_modules/react-use/esm/useSearchParam.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var getValue = function (search, param) { return new URLSearchParams(search).get(param); };
var useSearchParam = function (param) {
    var location = window.location;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () { return getValue(location.search, param); }), value = _a[0], setValue = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var onChange = function () {
            setValue(getValue(location.search, param));
        };
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'popstate', onChange);
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'pushstate', onChange);
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'replacestate', onChange);
        return function () {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'popstate', onChange);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'pushstate', onChange);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'replacestate', onChange);
        };
    }, []);
    return value;
};
var useSearchParamServer = function () { return null; };
/* harmony default export */ __webpack_exports__["default"] = (_misc_util__WEBPACK_IMPORTED_MODULE_1__["isBrowser"] ? useSearchParam : useSearchParamServer);


/***/ }),

/***/ "../node_modules/react-use/esm/useSessionStorage.js":
/*!**********************************************************!*\
  !*** ../node_modules/react-use/esm/useSessionStorage.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var useSessionStorage = function (key, initialValue, raw) {
    if (!_misc_util__WEBPACK_IMPORTED_MODULE_1__["isBrowser"]) {
        return [initialValue, function () { }];
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
        try {
            var sessionStorageValue = sessionStorage.getItem(key);
            if (typeof sessionStorageValue !== 'string') {
                sessionStorage.setItem(key, raw ? String(initialValue) : JSON.stringify(initialValue));
                return initialValue;
            }
            else {
                return raw ? sessionStorageValue : JSON.parse(sessionStorageValue || 'null');
            }
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // sessionStorage can throw. JSON.parse and JSON.stringify
            // can throw, too.
            return initialValue;
        }
    }), state = _a[0], setState = _a[1];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        try {
            var serializedState = raw ? String(state) : JSON.stringify(state);
            sessionStorage.setItem(key, serializedState);
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // sessionStorage can throw. Also JSON.stringify can throw.
        }
    });
    return [state, setState];
};
/* harmony default export */ __webpack_exports__["default"] = (useSessionStorage);


/***/ }),

/***/ "../node_modules/react-use/esm/useSet.js":
/*!***********************************************!*\
  !*** ../node_modules/react-use/esm/useSet.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var useSet = function (initialSet) {
    if (initialSet === void 0) { initialSet = new Set(); }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialSet), set = _a[0], setSet = _a[1];
    var stableActions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
        var add = function (item) { return setSet(function (prevSet) { return new Set(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(Array.from(prevSet), [item])); }); };
        var remove = function (item) {
            return setSet(function (prevSet) { return new Set(Array.from(prevSet).filter(function (i) { return i !== item; })); });
        };
        var toggle = function (item) {
            return setSet(function (prevSet) {
                return prevSet.has(item)
                    ? new Set(Array.from(prevSet).filter(function (i) { return i !== item; }))
                    : new Set(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(Array.from(prevSet), [item]));
            });
        };
        return { add: add, remove: remove, toggle: toggle, reset: function () { return setSet(initialSet); } };
    }, [setSet]);
    var utils = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ has: Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (item) { return set.has(item); }, [set]) }, stableActions);
    return [set, utils];
};
/* harmony default export */ __webpack_exports__["default"] = (useSet);


/***/ }),

/***/ "../node_modules/react-use/esm/useSetState.js":
/*!****************************************************!*\
  !*** ../node_modules/react-use/esm/useSetState.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useSetState = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], set = _a[1];
    var setState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (patch) {
        set(function (prevState) {
            return Object.assign({}, prevState, patch instanceof Function ? patch(prevState) : patch);
        });
    }, []);
    return [state, setState];
};
/* harmony default export */ __webpack_exports__["default"] = (useSetState);


/***/ }),

/***/ "../node_modules/react-use/esm/useShallowCompareEffect.js":
/*!****************************************************************!*\
  !*** ../node_modules/react-use/esm/useShallowCompareEffect.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fast_shallow_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-shallow-equal */ "../node_modules/fast-shallow-equal/index.js");
/* harmony import */ var fast_shallow_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_shallow_equal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useCustomCompareEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCustomCompareEffect */ "../node_modules/react-use/esm/useCustomCompareEffect.js");


var isPrimitive = function (val) { return val !== Object(val); };
var shallowEqualDepsList = function (prevDeps, nextDeps) {
    return prevDeps.every(function (dep, index) { return Object(fast_shallow_equal__WEBPACK_IMPORTED_MODULE_0__["equal"])(dep, nextDeps[index]); });
};
var useShallowCompareEffect = function (effect, deps) {
    if (true) {
        if (!(deps instanceof Array) || !deps.length) {
            console.warn('`useShallowCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
        }
        if (deps.every(isPrimitive)) {
            console.warn('`useShallowCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
        }
    }
    Object(_useCustomCompareEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(effect, deps, shallowEqualDepsList);
};
/* harmony default export */ __webpack_exports__["default"] = (useShallowCompareEffect);


/***/ }),

/***/ "../node_modules/react-use/esm/useSize.js":
/*!************************************************!*\
  !*** ../node_modules/react-use/esm/useSize.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");



var useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"], useEffect = react__WEBPACK_IMPORTED_MODULE_1__["useEffect"], useRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"];
var DRAF = function (callback) { return setTimeout(callback, 35); };
var useSize = function (element, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.width, width = _c === void 0 ? Infinity : _c, _d = _b.height, height = _d === void 0 ? Infinity : _d;
    if (!_misc_util__WEBPACK_IMPORTED_MODULE_2__["isBrowser"]) {
        return [
            typeof element === 'function' ? element({ width: width, height: height }) : element,
            { width: width, height: height },
        ];
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var _e = useState({ width: width, height: height }), state = _e[0], setState = _e[1];
    if (typeof element === 'function') {
        element = element(state);
    }
    var style = element.props.style || {};
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var ref = useRef(null);
    var window = null;
    var setSize = function () {
        var iframe = ref.current;
        var size = iframe
            ? {
                width: iframe.offsetWidth,
                height: iframe.offsetHeight,
            }
            : { width: width, height: height };
        setState(size);
    };
    var onWindow = function (windowToListenOn) {
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["on"])(windowToListenOn, 'resize', setSize);
        DRAF(setSize);
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(function () {
        var iframe = ref.current;
        if (!iframe) {
            // iframe will be undefined if component is already unmounted
            return;
        }
        if (iframe.contentWindow) {
            window = iframe.contentWindow;
            onWindow(window);
        }
        else {
            var onLoad_1 = function () {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["on"])(iframe, 'load', onLoad_1);
                window = iframe.contentWindow;
                onWindow(window);
            };
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["off"])(iframe, 'load', onLoad_1);
        }
        return function () {
            if (window && window.removeEventListener) {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["off"])(window, 'resize', setSize);
            }
        };
    }, []);
    style.position = 'relative';
    var sized = react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"].apply(react__WEBPACK_IMPORTED_MODULE_1__, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([element, { style: style }], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]('iframe', {
            ref: ref,
            style: {
                background: 'transparent',
                border: 'none',
                height: '100%',
                left: 0,
                position: 'absolute',
                top: 0,
                width: '100%',
                zIndex: -1,
            },
        })
    ], react__WEBPACK_IMPORTED_MODULE_1__["Children"].toArray(element.props.children))));
    return [sized, state];
};
/* harmony default export */ __webpack_exports__["default"] = (useSize);


/***/ }),

/***/ "../node_modules/react-use/esm/useSlider.js":
/*!**************************************************!*\
  !*** ../node_modules/react-use/esm/useSlider.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useMountedState */ "../node_modules/react-use/esm/useMountedState.js");
/* harmony import */ var _useSetState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useSetState */ "../node_modules/react-use/esm/useSetState.js");




var useSlider = function (ref, options) {
    if (options === void 0) { options = {}; }
    var isMounted = Object(_useMountedState__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var isSliding = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    var valueRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    var frame = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    var _a = Object(_useSetState__WEBPACK_IMPORTED_MODULE_3__["default"])({
        isSliding: false,
        value: 0,
    }), state = _a[0], setState = _a[1];
    valueRef.current = state.value;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (_misc_util__WEBPACK_IMPORTED_MODULE_1__["isBrowser"]) {
            var styles = options.styles === undefined ? true : options.styles;
            var reverse_1 = options.reverse === undefined ? false : options.reverse;
            if (ref.current && styles) {
                ref.current.style.userSelect = 'none';
            }
            var startScrubbing_1 = function () {
                if (!isSliding.current && isMounted()) {
                    (options.onScrubStart || _misc_util__WEBPACK_IMPORTED_MODULE_1__["noop"])();
                    isSliding.current = true;
                    setState({ isSliding: true });
                    bindEvents_1();
                }
            };
            var stopScrubbing_1 = function () {
                if (isSliding.current && isMounted()) {
                    (options.onScrubStop || _misc_util__WEBPACK_IMPORTED_MODULE_1__["noop"])(valueRef.current);
                    isSliding.current = false;
                    setState({ isSliding: false });
                    unbindEvents_1();
                }
            };
            var onMouseDown_1 = function (event) {
                startScrubbing_1();
                onMouseMove_1(event);
            };
            var onMouseMove_1 = options.vertical
                ? function (event) { return onScrub_1(event.clientY); }
                : function (event) { return onScrub_1(event.clientX); };
            var onTouchStart_1 = function (event) {
                startScrubbing_1();
                onTouchMove_1(event);
            };
            var onTouchMove_1 = options.vertical
                ? function (event) { return onScrub_1(event.changedTouches[0].clientY); }
                : function (event) { return onScrub_1(event.changedTouches[0].clientX); };
            var bindEvents_1 = function () {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(document, 'mousemove', onMouseMove_1);
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(document, 'mouseup', stopScrubbing_1);
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(document, 'touchmove', onTouchMove_1);
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(document, 'touchend', stopScrubbing_1);
            };
            var unbindEvents_1 = function () {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(document, 'mousemove', onMouseMove_1);
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(document, 'mouseup', stopScrubbing_1);
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(document, 'touchmove', onTouchMove_1);
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(document, 'touchend', stopScrubbing_1);
            };
            var onScrub_1 = function (clientXY) {
                cancelAnimationFrame(frame.current);
                frame.current = requestAnimationFrame(function () {
                    if (isMounted() && ref.current) {
                        var rect = ref.current.getBoundingClientRect();
                        var pos = options.vertical ? rect.top : rect.left;
                        var length_1 = options.vertical ? rect.height : rect.width;
                        // Prevent returning 0 when element is hidden by CSS
                        if (!length_1) {
                            return;
                        }
                        var value = (clientXY - pos) / length_1;
                        if (value > 1) {
                            value = 1;
                        }
                        else if (value < 0) {
                            value = 0;
                        }
                        if (reverse_1) {
                            value = 1 - value;
                        }
                        setState({
                            value: value,
                        });
                        (options.onScrub || _misc_util__WEBPACK_IMPORTED_MODULE_1__["noop"])(value);
                    }
                });
            };
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(ref.current, 'mousedown', onMouseDown_1);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(ref.current, 'touchstart', onTouchStart_1);
            return function () {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(ref.current, 'mousedown', onMouseDown_1);
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(ref.current, 'touchstart', onTouchStart_1);
            };
        }
        else {
            return undefined;
        }
    }, [ref, options.vertical]);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useSlider);


/***/ }),

/***/ "../node_modules/react-use/esm/useSpeech.js":
/*!**************************************************!*\
  !*** ../node_modules/react-use/esm/useSpeech.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var Status;
(function (Status) {
    Status[Status["init"] = 0] = "init";
    Status[Status["play"] = 1] = "play";
    Status[Status["pause"] = 2] = "pause";
    Status[Status["end"] = 3] = "end";
})(Status || (Status = {}));
var useSpeech = function (text, options) {
    var mounted = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(function () {
        var _a = options.voice || {}, _b = _a.lang, lang = _b === void 0 ? 'default' : _b, _c = _a.name, name = _c === void 0 ? '' : _c;
        return {
            isPlaying: false,
            status: Status[Status.init],
            lang: options.lang || 'default',
            voiceInfo: { lang: lang, name: name },
            rate: options.rate || 1,
            pitch: options.pitch || 1,
            volume: options.volume || 1,
        };
    }), state = _a[0], setState = _a[1];
    var handlePlay = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
        if (!mounted.current) {
            return;
        }
        setState(function (preState) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, preState), { isPlaying: true, status: Status[Status.play] });
        });
    }, []);
    var handlePause = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
        if (!mounted.current) {
            return;
        }
        setState(function (preState) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, preState), { isPlaying: false, status: Status[Status.pause] });
        });
    }, []);
    var handleEnd = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
        if (!mounted.current) {
            return;
        }
        setState(function (preState) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, preState), { isPlaying: false, status: Status[Status.end] });
        });
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        mounted.current = true;
        var utterance = new SpeechSynthesisUtterance(text);
        options.lang && (utterance.lang = options.lang);
        options.voice && (utterance.voice = options.voice);
        utterance.rate = options.rate || 1;
        utterance.pitch = options.pitch || 1;
        utterance.volume = options.volume || 1;
        utterance.onstart = handlePlay;
        utterance.onpause = handlePause;
        utterance.onresume = handlePlay;
        utterance.onend = handleEnd;
        window.speechSynthesis.speak(utterance);
        return function () {
            mounted.current = false;
        };
    }, []);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useSpeech);


/***/ }),

/***/ "../node_modules/react-use/esm/useStartTyping.js":
/*!*******************************************************!*\
  !*** ../node_modules/react-use/esm/useStartTyping.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "../node_modules/react-use/esm/useIsomorphicLayoutEffect.js");
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var isFocusedElementEditable = function () {
    var activeElement = document.activeElement, body = document.body;
    if (!activeElement) {
        return false;
    }
    // If not element has focus, we assume it is not editable, too.
    if (activeElement === body) {
        return false;
    }
    // Assume <input> and <textarea> elements are editable.
    switch (activeElement.tagName) {
        case 'INPUT':
        case 'TEXTAREA':
            return true;
    }
    // Check if any other focused element id editable.
    return activeElement.hasAttribute('contenteditable');
};
var isTypedCharGood = function (_a) {
    var keyCode = _a.keyCode, metaKey = _a.metaKey, ctrlKey = _a.ctrlKey, altKey = _a.altKey;
    if (metaKey || ctrlKey || altKey) {
        return false;
    }
    // 0...9
    if (keyCode >= 48 && keyCode <= 57) {
        return true;
    }
    // a...z
    if (keyCode >= 65 && keyCode <= 90) {
        return true;
    }
    // All other keys.
    return false;
};
var useStartTyping = function (onStartTyping) {
    Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
        var keydown = function (event) {
            !isFocusedElementEditable() && isTypedCharGood(event) && onStartTyping(event);
        };
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(document, 'keydown', keydown);
        return function () {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(document, 'keydown', keydown);
        };
    }, []);
};
/* harmony default export */ __webpack_exports__["default"] = (useStartTyping);


/***/ }),

/***/ "../node_modules/react-use/esm/useStateList.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-use/esm/useStateList.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useStateList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useMountedState */ "../node_modules/react-use/esm/useMountedState.js");
/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useUpdate */ "../node_modules/react-use/esm/useUpdate.js");
/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useUpdateEffect */ "../node_modules/react-use/esm/useUpdateEffect.js");





function useStateList(stateSet) {
    if (stateSet === void 0) { stateSet = []; }
    var isMounted = Object(_useMountedState__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var update = Object(_useUpdate__WEBPACK_IMPORTED_MODULE_3__["default"])();
    var index = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(0);
    // If new state list is shorter that before - switch to the last element
    Object(_useUpdateEffect__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
        if (stateSet.length <= index.current) {
            index.current = stateSet.length - 1;
            update();
        }
    }, [stateSet.length]);
    var actions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () { return ({
        next: function () { return actions.setStateAt(index.current + 1); },
        prev: function () { return actions.setStateAt(index.current - 1); },
        setStateAt: function (newIndex) {
            // do nothing on unmounted component
            if (!isMounted())
                return;
            // do nothing on empty states list
            if (!stateSet.length)
                return;
            // in case new index is equal current - do nothing
            if (newIndex === index.current)
                return;
            // it gives the ability to travel through the left and right borders.
            // 4ex: if list contains 5 elements, attempt to set index 9 will bring use to 5th element
            // in case of negative index it will start counting from the right, so -17 will bring us to 4th element
            index.current =
                newIndex >= 0
                    ? newIndex % stateSet.length
                    : stateSet.length + (newIndex % stateSet.length);
            update();
        },
        setState: function (state) {
            // do nothing on unmounted component
            if (!isMounted())
                return;
            var newIndex = stateSet.length ? stateSet.indexOf(state) : -1;
            if (newIndex === -1) {
                throw new Error("State '" + state + "' is not a valid state (does not exist in state list)");
            }
            index.current = newIndex;
            update();
        },
    }); }, [stateSet]);
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ state: stateSet[index.current], currentIndex: index.current }, actions);
}


/***/ }),

/***/ "../node_modules/react-use/esm/useStateValidator.js":
/*!**********************************************************!*\
  !*** ../node_modules/react-use/esm/useStateValidator.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useStateValidator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useStateValidator(state, validator, initialState) {
    if (initialState === void 0) { initialState = [undefined]; }
    var validatorInner = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(validator);
    var stateInner = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(state);
    validatorInner.current = validator;
    stateInner.current = state;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), validity = _a[0], setValidity = _a[1];
    var validate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        if (validatorInner.current.length >= 2) {
            validatorInner.current(stateInner.current, setValidity);
        }
        else {
            setValidity(validatorInner.current(stateInner.current));
        }
    }, [setValidity]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        validate();
    }, [state]);
    return [validity, validate];
}


/***/ }),

/***/ "../node_modules/react-use/esm/useStateWithHistory.js":
/*!************************************************************!*\
  !*** ../node_modules/react-use/esm/useStateWithHistory.js ***!
  \************************************************************/
/*! exports provided: useStateWithHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStateWithHistory", function() { return useStateWithHistory; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useFirstMountState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFirstMountState */ "../node_modules/react-use/esm/useFirstMountState.js");
/* harmony import */ var _misc_hookState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/hookState */ "../node_modules/react-use/esm/misc/hookState.js");



function useStateWithHistory(initialState, capacity, initialHistory) {
    if (capacity === void 0) { capacity = 10; }
    if (capacity < 1) {
        throw new Error("Capacity has to be greater than 1, got '" + capacity + "'");
    }
    var isFirstMount = Object(_useFirstMountState__WEBPACK_IMPORTED_MODULE_1__["useFirstMountState"])();
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], innerSetState = _a[1];
    var history = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])((initialHistory !== null && initialHistory !== void 0 ? initialHistory : []));
    var historyPosition = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    // do the states manipulation only on first mount, no sense to load re-renders with useless calculations
    if (isFirstMount) {
        if (history.current.length) {
            // if last element of history !== initial - push initial to history
            if (history.current[history.current.length - 1] !== initialState) {
                history.current.push(initialState);
            }
            // if initial history bigger that capacity - crop the first elements out
            if (history.current.length > capacity) {
                history.current = history.current.slice(history.current.length - capacity);
            }
        }
        else {
            // initiate the history with initial state
            history.current.push(initialState);
        }
        historyPosition.current = history.current.length && history.current.length - 1;
    }
    var setState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (newState) {
        innerSetState(function (currentState) {
            newState = Object(_misc_hookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(newState, currentState);
            // is state has changed
            if (newState !== currentState) {
                // if current position is not the last - pop element to the right
                if (historyPosition.current < history.current.length - 1) {
                    history.current = history.current.slice(0, historyPosition.current + 1);
                }
                historyPosition.current = history.current.push(newState) - 1;
                // if capacity is reached - shift first elements
                if (history.current.length > capacity) {
                    history.current = history.current.slice(history.current.length - capacity);
                }
            }
            return newState;
        });
    }, [state, capacity]);
    var historyState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return ({
        history: history.current,
        position: historyPosition.current,
        capacity: capacity,
        back: function (amount) {
            if (amount === void 0) { amount = 1; }
            // don't do anything if we already at the left border
            if (!historyPosition.current) {
                return;
            }
            innerSetState(function () {
                historyPosition.current -= Math.min(amount, historyPosition.current);
                return history.current[historyPosition.current];
            });
        },
        forward: function (amount) {
            if (amount === void 0) { amount = 1; }
            // don't do anything if we already at the right border
            if (historyPosition.current === history.current.length - 1) {
                return;
            }
            innerSetState(function () {
                historyPosition.current = Math.min(historyPosition.current + amount, history.current.length - 1);
                return history.current[historyPosition.current];
            });
        },
        go: function (position) {
            if (position === historyPosition.current) {
                return;
            }
            innerSetState(function () {
                historyPosition.current =
                    position < 0
                        ? Math.max(history.current.length + position, 0)
                        : Math.min(history.current.length - 1, position);
                return history.current[historyPosition.current];
            });
        },
    }); }, [state]);
    return [state, setState, historyState];
}


/***/ }),

/***/ "../node_modules/react-use/esm/useThrottle.js":
/*!****************************************************!*\
  !*** ../node_modules/react-use/esm/useThrottle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUnmount */ "../node_modules/react-use/esm/useUnmount.js");


var useThrottle = function (value, ms) {
    if (ms === void 0) { ms = 200; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value), state = _a[0], setState = _a[1];
    var timeout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var nextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var hasNextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!timeout.current) {
            setState(value);
            var timeoutCallback_1 = function () {
                if (hasNextValue.current) {
                    hasNextValue.current = false;
                    setState(nextValue.current);
                    timeout.current = setTimeout(timeoutCallback_1, ms);
                }
                else {
                    timeout.current = undefined;
                }
            };
            timeout.current = setTimeout(timeoutCallback_1, ms);
        }
        else {
            nextValue.current = value;
            hasNextValue.current = true;
        }
    }, [value]);
    Object(_useUnmount__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        timeout.current && clearTimeout(timeout.current);
    });
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useThrottle);


/***/ }),

/***/ "../node_modules/react-use/esm/useThrottleFn.js":
/*!******************************************************!*\
  !*** ../node_modules/react-use/esm/useThrottleFn.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUnmount */ "../node_modules/react-use/esm/useUnmount.js");


var useThrottleFn = function (fn, ms, args) {
    if (ms === void 0) { ms = 200; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), state = _a[0], setState = _a[1];
    var timeout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var nextArgs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!timeout.current) {
            setState(fn.apply(void 0, args));
            var timeoutCallback_1 = function () {
                if (nextArgs.current) {
                    setState(fn.apply(void 0, nextArgs.current));
                    nextArgs.current = undefined;
                    timeout.current = setTimeout(timeoutCallback_1, ms);
                }
                else {
                    timeout.current = undefined;
                }
            };
            timeout.current = setTimeout(timeoutCallback_1, ms);
        }
        else {
            nextArgs.current = args;
        }
    }, args);
    Object(_useUnmount__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        timeout.current && clearTimeout(timeout.current);
    });
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useThrottleFn);


/***/ }),

/***/ "../node_modules/react-use/esm/useTimeout.js":
/*!***************************************************!*\
  !*** ../node_modules/react-use/esm/useTimeout.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTimeout; });
/* harmony import */ var _useTimeoutFn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useTimeoutFn */ "../node_modules/react-use/esm/useTimeoutFn.js");
/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUpdate */ "../node_modules/react-use/esm/useUpdate.js");


function useTimeout(ms) {
    if (ms === void 0) { ms = 0; }
    var update = Object(_useUpdate__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return Object(_useTimeoutFn__WEBPACK_IMPORTED_MODULE_0__["default"])(update, ms);
}


/***/ }),

/***/ "../node_modules/react-use/esm/useTimeoutFn.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-use/esm/useTimeoutFn.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTimeoutFn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useTimeoutFn(fn, ms) {
    if (ms === void 0) { ms = 0; }
    var ready = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    var timeout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var callback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(fn);
    var isReady = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () { return ready.current; }, []);
    var set = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        ready.current = false;
        timeout.current && clearTimeout(timeout.current);
        timeout.current = setTimeout(function () {
            ready.current = true;
            callback.current();
        }, ms);
    }, [ms]);
    var clear = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        ready.current = null;
        timeout.current && clearTimeout(timeout.current);
    }, []);
    // update ref when function changes
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        callback.current = fn;
    }, [fn]);
    // set on mount, clear on unmount
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        set();
        return clear;
    }, [ms]);
    return [isReady, clear, set];
}


/***/ }),

/***/ "../node_modules/react-use/esm/useTitle.js":
/*!*************************************************!*\
  !*** ../node_modules/react-use/esm/useTitle.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DEFAULT_USE_TITLE_OPTIONS = {
    restoreOnUnmount: false,
};
function useTitle(title, options) {
    if (options === void 0) { options = DEFAULT_USE_TITLE_OPTIONS; }
    var prevTitleRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(document.title);
    if (document.title !== title)
        document.title = title;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (options && options.restoreOnUnmount) {
            return function () {
                document.title = prevTitleRef.current;
            };
        }
        else {
            return;
        }
    }, []);
}
/* harmony default export */ __webpack_exports__["default"] = (typeof document !== 'undefined' ? useTitle : function (_title) { });


/***/ }),

/***/ "../node_modules/react-use/esm/useToggle.js":
/*!**************************************************!*\
  !*** ../node_modules/react-use/esm/useToggle.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var toggleReducer = function (state, nextValue) {
    return typeof nextValue === 'boolean' ? nextValue : !state;
};
var useToggle = function (initialValue) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(toggleReducer, initialValue);
};
/* harmony default export */ __webpack_exports__["default"] = (useToggle);


/***/ }),

/***/ "../node_modules/react-use/esm/useTween.js":
/*!*************************************************!*\
  !*** ../node_modules/react-use/esm/useTween.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ts_easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-easing */ "../node_modules/ts-easing/lib/index.js");
/* harmony import */ var ts_easing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ts_easing__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useRaf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRaf */ "../node_modules/react-use/esm/useRaf.js");


var useTween = function (easingName, ms, delay) {
    if (easingName === void 0) { easingName = 'inCirc'; }
    if (ms === void 0) { ms = 200; }
    if (delay === void 0) { delay = 0; }
    var fn = ts_easing__WEBPACK_IMPORTED_MODULE_0__["easing"][easingName];
    var t = Object(_useRaf__WEBPACK_IMPORTED_MODULE_1__["default"])(ms, delay);
    if (true) {
        if (typeof fn !== 'function') {
            console.error('useTween() expected "easingName" property to be a valid easing function name, like:' +
                '"' +
                Object.keys(ts_easing__WEBPACK_IMPORTED_MODULE_0__["easing"]).join('", "') +
                '".');
            console.trace();
            return 0;
        }
    }
    return fn(t);
};
/* harmony default export */ __webpack_exports__["default"] = (useTween);


/***/ }),

/***/ "../node_modules/react-use/esm/useUnmount.js":
/*!***************************************************!*\
  !*** ../node_modules/react-use/esm/useUnmount.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEffectOnce */ "../node_modules/react-use/esm/useEffectOnce.js");


var useUnmount = function (fn) {
    var fnRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(fn);
    // update the ref each render so if it change the newest callback will be invoked
    fnRef.current = fn;
    Object(_useEffectOnce__WEBPACK_IMPORTED_MODULE_1__["default"])(function () { return function () { return fnRef.current(); }; });
};
/* harmony default export */ __webpack_exports__["default"] = (useUnmount);


/***/ }),

/***/ "../node_modules/react-use/esm/useUnmountPromise.js":
/*!**********************************************************!*\
  !*** ../node_modules/react-use/esm/useUnmountPromise.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEffectOnce */ "../node_modules/react-use/esm/useEffectOnce.js");


var useUnmountPromise = function () {
    var refUnmounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    Object(_useEffectOnce__WEBPACK_IMPORTED_MODULE_1__["default"])(function () { return function () {
        refUnmounted.current = true;
    }; });
    var wrapper = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var race = function (promise, onError) {
            var newPromise = new Promise(function (resolve, reject) {
                promise.then(function (result) {
                    if (!refUnmounted.current)
                        resolve(result);
                }, function (error) {
                    if (!refUnmounted.current)
                        reject(error);
                    else if (onError)
                        onError(error);
                    else
                        console.error('useUnmountPromise', error);
                });
            });
            return newPromise;
        };
        return race;
    }, []);
    return wrapper;
};
/* harmony default export */ __webpack_exports__["default"] = (useUnmountPromise);


/***/ }),

/***/ "../node_modules/react-use/esm/useUpdate.js":
/*!**************************************************!*\
  !*** ../node_modules/react-use/esm/useUpdate.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useUpdate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var updateReducer = function (num) { return (num + 1) % 1000000; };
function useUpdate() {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(updateReducer, 0), update = _a[1];
    return update;
}


/***/ }),

/***/ "../node_modules/react-use/esm/useUpdateEffect.js":
/*!********************************************************!*\
  !*** ../node_modules/react-use/esm/useUpdateEffect.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useFirstMountState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFirstMountState */ "../node_modules/react-use/esm/useFirstMountState.js");


var useUpdateEffect = function (effect, deps) {
    var isFirstMount = Object(_useFirstMountState__WEBPACK_IMPORTED_MODULE_1__["useFirstMountState"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!isFirstMount) {
            return effect();
        }
    }, deps);
};
/* harmony default export */ __webpack_exports__["default"] = (useUpdateEffect);


/***/ }),

/***/ "../node_modules/react-use/esm/useUpsert.js":
/*!**************************************************!*\
  !*** ../node_modules/react-use/esm/useUpsert.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useUpsert; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _useList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useList */ "../node_modules/react-use/esm/useList.js");


/**
 * @deprecated Use `useList` hook's upsert action instead
 */
function useUpsert(predicate, initialList) {
    if (initialList === void 0) { initialList = []; }
    var _a = Object(_useList__WEBPACK_IMPORTED_MODULE_1__["default"])(initialList), list = _a[0], listActions = _a[1];
    return [
        list,
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, listActions), { upsert: function (newItem) {
                listActions.upsert(predicate, newItem);
            } }),
    ];
}


/***/ }),

/***/ "../node_modules/react-use/esm/useVibrate.js":
/*!***************************************************!*\
  !*** ../node_modules/react-use/esm/useVibrate.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var isVibrationApiSupported = _misc_util__WEBPACK_IMPORTED_MODULE_1__["isNavigator"] && 'vibrate' in navigator;
function useVibrate(enabled, pattern, loop) {
    if (enabled === void 0) { enabled = true; }
    if (pattern === void 0) { pattern = [1000, 1000]; }
    if (loop === void 0) { loop = true; }
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var interval;
        if (enabled) {
            navigator.vibrate(pattern);
            if (loop) {
                var duration = pattern instanceof Array ? pattern.reduce(function (a, b) { return a + b; }) : pattern;
                interval = setInterval(function () {
                    navigator.vibrate(pattern);
                }, duration);
            }
        }
        return function () {
            if (enabled) {
                navigator.vibrate(0);
                if (loop) {
                    clearInterval(interval);
                }
            }
        };
    }, [enabled]);
}
/* harmony default export */ __webpack_exports__["default"] = (isVibrationApiSupported ? useVibrate : _misc_util__WEBPACK_IMPORTED_MODULE_1__["noop"]);


/***/ }),

/***/ "../node_modules/react-use/esm/useVideo.js":
/*!*************************************************!*\
  !*** ../node_modules/react-use/esm/useVideo.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _factory_createHTMLMediaHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory/createHTMLMediaHook */ "../node_modules/react-use/esm/factory/createHTMLMediaHook.js");

var useVideo = Object(_factory_createHTMLMediaHook__WEBPACK_IMPORTED_MODULE_0__["default"])('video');
/* harmony default export */ __webpack_exports__["default"] = (useVideo);


/***/ }),

/***/ "../node_modules/react-use/esm/useWindowScroll.js":
/*!********************************************************!*\
  !*** ../node_modules/react-use/esm/useWindowScroll.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");
/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useRafState */ "../node_modules/react-use/esm/useRafState.js");



var useWindowScroll = function () {
    var _a = Object(_useRafState__WEBPACK_IMPORTED_MODULE_2__["default"])(function () { return ({
        x: _misc_util__WEBPACK_IMPORTED_MODULE_1__["isBrowser"] ? window.pageXOffset : 0,
        y: _misc_util__WEBPACK_IMPORTED_MODULE_1__["isBrowser"] ? window.pageYOffset : 0,
    }); }), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var handler = function () {
            setState(function (state) {
                var pageXOffset = window.pageXOffset, pageYOffset = window.pageYOffset;
                //Check state for change, return same state if no change happened to prevent rerender
                //(see useState/setState documentation). useState/setState is used internally in useRafState/setState.
                return state.x !== pageXOffset || state.y !== pageYOffset
                    ? {
                        x: pageXOffset,
                        y: pageYOffset,
                    }
                    : state;
            });
        };
        //We have to update window scroll at mount, before subscription.
        //Window scroll may be changed between render and effect handler.
        handler();
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'scroll', handler, {
            capture: false,
            passive: true,
        });
        return function () {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'scroll', handler);
        };
    }, []);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useWindowScroll);


/***/ }),

/***/ "../node_modules/react-use/esm/useWindowSize.js":
/*!******************************************************!*\
  !*** ../node_modules/react-use/esm/useWindowSize.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRafState */ "../node_modules/react-use/esm/useRafState.js");
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");



var useWindowSize = function (initialWidth, initialHeight) {
    if (initialWidth === void 0) { initialWidth = Infinity; }
    if (initialHeight === void 0) { initialHeight = Infinity; }
    var _a = Object(_useRafState__WEBPACK_IMPORTED_MODULE_1__["default"])({
        width: _misc_util__WEBPACK_IMPORTED_MODULE_2__["isBrowser"] ? window.innerWidth : initialWidth,
        height: _misc_util__WEBPACK_IMPORTED_MODULE_2__["isBrowser"] ? window.innerHeight : initialHeight,
    }), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (_misc_util__WEBPACK_IMPORTED_MODULE_2__["isBrowser"]) {
            var handler_1 = function () {
                setState({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["on"])(window, 'resize', handler_1);
            return function () {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["off"])(window, 'resize', handler_1);
            };
        }
    }, []);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useWindowSize);


/***/ }),

/***/ "../node_modules/screenfull/dist/screenfull.js":
/*!*****************************************************!*\
  !*** ../node_modules/screenfull/dist/screenfull.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* screenfull
* v5.2.0 - 2021-11-03
* (c) Sindre Sorhus; MIT License
*/
(function () {
	'use strict';

	var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
	var isCommonjs =  true && module.exports;

	var fn = (function () {
		var val;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// New WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// Old WebKit
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0; i < val.length; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var eventNameMap = {
		change: fn.fullscreenchange,
		error: fn.fullscreenerror
	};

	var screenfull = {
		request: function (element, options) {
			return new Promise(function (resolve, reject) {
				var onFullScreenEntered = function () {
					this.off('change', onFullScreenEntered);
					resolve();
				}.bind(this);

				this.on('change', onFullScreenEntered);

				element = element || document.documentElement;

				var returnPromise = element[fn.requestFullscreen](options);

				if (returnPromise instanceof Promise) {
					returnPromise.then(onFullScreenEntered).catch(reject);
				}
			}.bind(this));
		},
		exit: function () {
			return new Promise(function (resolve, reject) {
				if (!this.isFullscreen) {
					resolve();
					return;
				}

				var onFullScreenExit = function () {
					this.off('change', onFullScreenExit);
					resolve();
				}.bind(this);

				this.on('change', onFullScreenExit);

				var returnPromise = document[fn.exitFullscreen]();

				if (returnPromise instanceof Promise) {
					returnPromise.then(onFullScreenExit).catch(reject);
				}
			}.bind(this));
		},
		toggle: function (element, options) {
			return this.isFullscreen ? this.exit() : this.request(element, options);
		},
		onchange: function (callback) {
			this.on('change', callback);
		},
		onerror: function (callback) {
			this.on('error', callback);
		},
		on: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.addEventListener(eventName, callback, false);
			}
		},
		off: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.removeEventListener(eventName, callback, false);
			}
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = {isEnabled: false};
		} else {
			window.screenfull = {isEnabled: false};
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return Boolean(document[fn.fullscreenElement]);
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		isEnabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();


/***/ }),

/***/ "../node_modules/set-harmonic-interval/lib/index.esm.js":
/*!**************************************************************!*\
  !*** ../node_modules/set-harmonic-interval/lib/index.esm.js ***!
  \**************************************************************/
/*! exports provided: clearHarmonicInterval, setHarmonicInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearHarmonicInterval", function() { return clearHarmonicInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHarmonicInterval", function() { return setHarmonicInterval; });
var counter = 0;
var buckets = {};
var setHarmonicInterval = function (fn, ms) {
    var _a;
    var id = counter++;
    if (buckets[ms]) {
        buckets[ms].listeners[id] = fn;
    }
    else {
        var timer = setInterval(function () {
            var listeners = buckets[ms].listeners;
            var didThrow = false;
            var lastError;
            for (var _i = 0, _a = Object.values(listeners); _i < _a.length; _i++) {
                var listener = _a[_i];
                try {
                    listener();
                }
                catch (error) {
                    didThrow = true;
                    lastError = error;
                }
            }
            if (didThrow)
                throw lastError;
        }, ms);
        buckets[ms] = {
            ms: ms,
            timer: timer,
            listeners: (_a = {},
                _a[id] = fn,
                _a),
        };
    }
    return {
        bucket: buckets[ms],
        id: id,
    };
};
var clearHarmonicInterval = function (_a) {
    var bucket = _a.bucket, id = _a.id;
    delete bucket.listeners[id];
    var hasListeners = false;
    for (var listener in bucket.listeners) {
        hasListeners = true;
        break;
    }
    if (!hasListeners) {
        clearInterval(bucket.timer);
        delete buckets[bucket.ms];
    }
};




/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
    var nonce =  true ? __webpack_require__.nc : undefined;

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

  if (sourceMap && btoa) {
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

/***/ "../node_modules/throttle-debounce/esm/index.js":
/*!******************************************************!*\
  !*** ../node_modules/throttle-debounce/esm/index.js ***!
  \******************************************************/
/*! exports provided: debounce, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset).
 * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function}  A new, throttled, function.
 */
function throttle (delay, noTrailing, callback, debounceMode) {
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */
  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  } // `noTrailing` defaults to falsy.


  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = undefined;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }

    var self = this;
    var elapsed = Date.now() - lastExec;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      /*
       * In throttle mode, if `delay` time has been exceeded, execute
       * `callback`.
       */
      exec();
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

/* eslint-disable no-undefined */
/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                  to `callback` when the debounced-function is executed.
 *
 * @returns {Function} A new, debounced function.
 */

function debounce (delay, atBegin, callback) {
  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "../node_modules/toggle-selection/index.js":
/*!*************************************************!*\
  !*** ../node_modules/toggle-selection/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ "../node_modules/ts-easing/lib/index.js":
/*!**********************************************!*\
  !*** ../node_modules/ts-easing/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.easing = {
    // No easing, no acceleration
    linear: function (t) { return t; },
    // Accelerates fast, then slows quickly towards end.
    quadratic: function (t) { return t * (-(t * t) * t + 4 * t * t - 6 * t + 4); },
    // Overshoots over 1 and then returns to 1 towards end.
    cubic: function (t) { return t * (4 * t * t - 9 * t + 6); },
    // Overshoots over 1 multiple times - wiggles around 1.
    elastic: function (t) { return t * (33 * t * t * t * t - 106 * t * t * t + 126 * t * t - 67 * t + 15); },
    // Accelerating from zero velocity
    inQuad: function (t) { return t * t; },
    // Decelerating to zero velocity
    outQuad: function (t) { return t * (2 - t); },
    // Acceleration until halfway, then deceleration
    inOutQuad: function (t) { return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t; },
    // Accelerating from zero velocity
    inCubic: function (t) { return t * t * t; },
    // Decelerating to zero velocity
    outCubic: function (t) { return (--t) * t * t + 1; },
    // Acceleration until halfway, then deceleration
    inOutCubic: function (t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; },
    // Accelerating from zero velocity
    inQuart: function (t) { return t * t * t * t; },
    // Decelerating to zero velocity
    outQuart: function (t) { return 1 - (--t) * t * t * t; },
    // Acceleration until halfway, then deceleration
    inOutQuart: function (t) { return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; },
    // Accelerating from zero velocity
    inQuint: function (t) { return t * t * t * t * t; },
    // Decelerating to zero velocity
    outQuint: function (t) { return 1 + (--t) * t * t * t * t; },
    // Acceleration until halfway, then deceleration
    inOutQuint: function (t) { return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t; },
    // Accelerating from zero velocity
    inSine: function (t) { return -Math.cos(t * (Math.PI / 2)) + 1; },
    // Decelerating to zero velocity
    outSine: function (t) { return Math.sin(t * (Math.PI / 2)); },
    // Accelerating until halfway, then decelerating
    inOutSine: function (t) { return -(Math.cos(Math.PI * t) - 1) / 2; },
    // Exponential accelerating from zero velocity
    inExpo: function (t) { return Math.pow(2, 10 * (t - 1)); },
    // Exponential decelerating to zero velocity
    outExpo: function (t) { return -Math.pow(2, -10 * t) + 1; },
    // Exponential accelerating until halfway, then decelerating
    inOutExpo: function (t) {
        t /= .5;
        if (t < 1)
            return Math.pow(2, 10 * (t - 1)) / 2;
        t--;
        return (-Math.pow(2, -10 * t) + 2) / 2;
    },
    // Circular accelerating from zero velocity
    inCirc: function (t) { return -Math.sqrt(1 - t * t) + 1; },
    // Circular decelerating to zero velocity Moves VERY fast at the beginning and
    // then quickly slows down in the middle. This tween can actually be used
    // in continuous transitions where target value changes all the time,
    // because of the very quick start, it hides the jitter between target value changes.
    outCirc: function (t) { return Math.sqrt(1 - (t = t - 1) * t); },
    // Circular acceleration until halfway, then deceleration
    inOutCirc: function (t) {
        t /= .5;
        if (t < 1)
            return -(Math.sqrt(1 - t * t) - 1) / 2;
        t -= 2;
        return (Math.sqrt(1 - t * t) + 1) / 2;
    }
};


/***/ }),

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "./datasource/components/common/CustomIncrement.tsx":
/*!**********************************************************!*\
  !*** ./datasource/components/common/CustomIncrement.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CustomInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomInput */ "./datasource/components/common/CustomInput.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);






var CustomIncrement = function CustomIncrement(_a) {
  var datasource = _a.datasource,
      onAdd = _a.onAdd,
      onDelete = _a.onDelete,
      onValueChange = _a.onValueChange,
      label = _a.label,
      tooltip = _a.tooltip;

  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(datasource), 2),
      incrementData = _b[0],
      setIncrement = _b[1]; // onInputChange


  var dealValueByIndex = function dealValueByIndex(value, index) {
    var sourceList = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.cloneDeep(incrementData);

    sourceList[index] = value;
    setIncrement(sourceList);
    var filterEmptyList = sourceList.filter(function (item) {
      return item !== "";
    });
    onValueChange && onValueChange(filterEmptyList);
  };

  var addItem = function addItem() {
    if (incrementData.length === 100) {
      return;
    }

    var addArrays = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.cloneDeep(incrementData);

    var addArr = addArrays.concat([""]);
    setIncrement(addArr);
    onAdd && onAdd(addArr);
  }; // delete


  var deleteItem = function deleteItem(delIndex) {
    if (incrementData.length === 0) {
      return;
    }

    var delArrays = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.cloneDeep(incrementData);

    var delArr = delArrays.filter(function (item, index) {
      return index !== delIndex;
    });
    setIncrement(delArr);
    var filterEmptyList = delArr.filter(function (item) {
      return item !== "";
    });
    onValueChange && onValueChange(filterEmptyList);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, label || tooltip ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineLabel"], {
    width: 24,
    tooltip: tooltip ? tooltip : undefined
  }, label) : null, incrementData.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CustomInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      defaultValue: item,
      onChange: function onChange(value) {
        return dealValueByIndex(value, index);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
      className: "inline-button",
      name: "minus",
      onClick: function onClick() {
        return deleteItem(index);
      }
    }));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    className: "inline-button-add",
    name: "plus",
    onClick: function onClick() {
      return addItem();
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomIncrement);

/***/ }),

/***/ "./datasource/components/common/CustomInput.tsx":
/*!******************************************************!*\
  !*** ./datasource/components/common/CustomInput.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_query_QueryEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/query/QueryEditor */ "./datasource/components/query/QueryEditor.tsx");





var CustomInput = function CustomInput(_a) {
  var label = _a.label,
      defaultValue = _a.defaultValue,
      _onChange = _a.onChange,
      tooltip = _a.tooltip;

  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(), 2),
      innerValue = _b[0],
      setInnerValue = _b[1];

  var dataSourceData = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_query_QueryEditor__WEBPACK_IMPORTED_MODULE_3__["DatasourceContext"]);
  var list = dataSourceData && (dataSourceData === null || dataSourceData === void 0 ? void 0 : dataSourceData.projectOptions) ? dataSourceData === null || dataSourceData === void 0 ? void 0 : dataSourceData.projectOptions : [];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setInnerValue(defaultValue);
  }, [defaultValue]);

  var dealInputChange = function dealInputChange(event) {
    var target = event.target;
    setInnerValue(target.value);
    _onChange && _onChange(target.value);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, label ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineLabel"], {
    width: 24,
    tooltip: tooltip ? tooltip : ""
  }, label) : null, label === "ProjectId" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    width: 30,
    value: list.map(function (i) {
      return {
        label: i.ProjectName,
        value: i.ProjectId
      };
    }).find(function (i) {
      return i.value === defaultValue;
    }),
    options: list.map(function (i) {
      return {
        label: i.ProjectName,
        value: i.ProjectId
      };
    }),
    onChange: function onChange(v) {
      _onChange && _onChange(v.value);
    }
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    className: "inline-input",
    value: innerValue,
    width: 20,
    placeholder: " ",
    onChange: dealInputChange
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomInput);

/***/ }),

/***/ "./datasource/components/common/MetricSubSelect.tsx":
/*!**********************************************************!*\
  !*** ./datasource/components/common/MetricSubSelect.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);



var Select = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"].Select;

var MetricSubSelect = function MetricSubSelect(_a) {
  var _b = _a.subChosed,
      subChosed = _b === void 0 ? {} : _b,
      onChange = _a.onChange,
      defaultValue = _a.defaultValue;
  var subSeletValues = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])([]);

  var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]), 2),
      subValues = _c[0],
      setSubValues = _c[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    subSeletValues.current = [];
    setSubValues([]);
    console.log("subchosed", subChosed);
  }, [subChosed]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log("defaultValue", defaultValue);

    if (defaultValue && defaultValue.includes("[") && defaultValue.includes("]")) {
      var subChoseArray = defaultValue.split("[")[1].split("]")[0].split(",");
      var defaultSubValue = subChoseArray.map(function (i) {
        return {
          label: i,
          value: i
        };
      });
      setSubValues(defaultSubValue);
      subSeletValues.current = defaultSubValue;
    } else {
      subSeletValues.current = [];
      setSubValues([]);
    }
  }, [defaultValue]);

  var onMetricItemChange = function onMetricItemChange(value, index) {
    subSeletValues.current[index] = value;
    setSubValues(function (state) {
      state[index] = value;
      return state;
    });

    if (subSeletValues.current.length !== Object.keys(subChosed).length) {
      return;
    }

    var stringMetric = subSeletValues.current.map(function (i) {
      return i.value;
    }).toString();
    onChange && onChange(stringMetric);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Array.isArray(Object.keys(subChosed)) && Object.keys(subChosed).map(function (item, index) {
    var subChosedOptions = Array.from(new Set(subChosed[Number(item)] || [])).map(function (i) {
      return {
        label: i,
        value: i
      };
    });
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: item + index + subValues[index]
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Select, {
      width: "auto",
      value: subValues[index],
      options: subChosedOptions,
      allowCustomValue: true,
      isSearchable: true,
      onChange: function onChange(value) {
        return onMetricItemChange(value, index);
      },
      placeholder: " "
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MetricSubSelect);

/***/ }),

/***/ "./datasource/components/common/SwitchInput.tsx":
/*!******************************************************!*\
  !*** ./datasource/components/common/SwitchInput.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_query_QueryEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/query/QueryEditor */ "./datasource/components/query/QueryEditor.tsx");



 // switch 开关控制输入

var SwitchInput = function SwitchInput(_a) {
  var label = _a.label,
      _onChange = _a.onChange,
      tooltip = _a.tooltip;

  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), 2),
      inputState = _b[0],
      setInputState = _b[1];

  var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(), 2),
      innerValue = _c[0],
      setInnerValue = _c[1];

  var dataSourceData = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_query_QueryEditor__WEBPACK_IMPORTED_MODULE_3__["DatasourceContext"]);
  var list = dataSourceData && (dataSourceData === null || dataSourceData === void 0 ? void 0 : dataSourceData.projectOptions) ? dataSourceData === null || dataSourceData === void 0 ? void 0 : dataSourceData.projectOptions : [];

  var dealInputChange = function dealInputChange(event) {
    var target = event.target;
    setInnerValue(target.value);
    _onChange && _onChange(target.value);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineField"], {
    label: label,
    labelWidth: 24,
    tooltip: tooltip ? tooltip : undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineSwitch"], {
    className: "switch",
    value: inputState,
    onChange: function onChange(v) {
      if (!v.target.checked) {
        setInnerValue("");
        label === "ProjectId" ? _onChange([]) : _onChange("");
      }

      setInputState(v.target.checked);
    }
  })), inputState ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, label !== "ProjectId" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    className: "inline-input",
    value: innerValue,
    width: 20,
    placeholder: " ",
    onChange: dealInputChange
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["MultiSelect"], {
    width: 80,
    options: list.map(function (i) {
      return {
        label: i.ProjectName,
        value: i.ProjectId
      };
    }),
    onChange: function onChange(v) {
      var projectIds = v.map(function (i) {
        return i.value;
      });
      _onChange && _onChange(projectIds);
    }
  })) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (SwitchInput);

/***/ }),

/***/ "./datasource/components/common/SwtichIncrement.tsx":
/*!**********************************************************!*\
  !*** ./datasource/components/common/SwtichIncrement.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CustomIncrement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomIncrement */ "./datasource/components/common/CustomIncrement.tsx");
/* harmony import */ var _components_query_QueryEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/query/QueryEditor */ "./datasource/components/query/QueryEditor.tsx");






var SwtichIncrement = function SwtichIncrement(_a) {
  var label = _a.label,
      datasource = _a.datasource,
      _onChange = _a.onChange,
      tooltip = _a.tooltip;

  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), 2),
      canIncrement = _b[0],
      setCanIncrement = _b[1];

  var dataSourceData = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_query_QueryEditor__WEBPACK_IMPORTED_MODULE_4__["DatasourceContext"]);
  var list = dataSourceData && (dataSourceData === null || dataSourceData === void 0 ? void 0 : dataSourceData.projectOptions) ? dataSourceData === null || dataSourceData === void 0 ? void 0 : dataSourceData.projectOptions : [];
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineField"], {
    labelWidth: 24,
    label: label,
    tooltip: tooltip ? tooltip : undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineSwitch"], {
    className: "switch",
    value: canIncrement,
    onChange: function onChange(v) {
      if (!v.target.checked) {
        _onChange && _onChange([""]);
      }

      setCanIncrement(v.target.checked);
    }
  })), canIncrement ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, label === "ProjectId" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      padding: "8px"
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["MultiSelect"], {
    width: 80,
    options: list.map(function (i) {
      return {
        label: i.ProjectName,
        value: i.ProjectId
      };
    }),
    onChange: function onChange(v) {
      var projectids = v.map(function (i) {
        return i.value;
      });
      _onChange && _onChange(projectids);
    }
  })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CustomIncrement__WEBPACK_IMPORTED_MODULE_3__["default"], {
    datasource: datasource,
    onValueChange: function onValueChange(values) {
      _onChange && _onChange(values);
    }
  })) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (SwtichIncrement);

/***/ }),

/***/ "./datasource/components/config/ConfigEditor.tsx":
/*!*******************************************************!*\
  !*** ./datasource/components/config/ConfigEditor.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _type_monitors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../type_monitors */ "./datasource/type_monitors/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var SecretFormField = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"].SecretFormField,
    FormField = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"].FormField;

var ConfigEditor = function ConfigEditor(_a) {
  var onOptionsChange = _a.onOptionsChange,
      options = _a.options;
  var jsonData = options.jsonData,
      secureJsonFields = options.secureJsonFields,
      secureJsonData = options.secureJsonData;

  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_type_monitors__WEBPACK_IMPORTED_MODULE_3__["MonitorServices"]), 2),
      filterList = _b[0],
      setFilterList = _b[1];

  var onAccessKeyChange = function onAccessKeyChange(event) {
    var jsonData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.jsonData), {
      AccessKey: event.target.value
    });

    onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
      jsonData: jsonData
    }));
  }; // Secure field (only sent to the backend)


  var onAPIKeyChange = function onAPIKeyChange(event) {
    onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
      secureJsonData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.secureJsonData), {
        secretKey: event.target.value
      })
    }));
  }; // 是否私网方式 internal取值方式


  var onIntranetChange = function onIntranetChange(event) {
    var jsonData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.jsonData), {
      intranet: event.target.checked
    });

    onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
      jsonData: jsonData
    }));
  };

  var onResetAPIKey = function onResetAPIKey() {
    onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
      secureJsonFields: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.secureJsonFields), {
        secretKey: false
      }),
      secureJsonData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.secureJsonData), {
        secretKey: ""
      })
    }));
  };

  var filterServiceList = function filterServiceList(event) {
    var filterName = event.target.value;
    var filterResult = _type_monitors__WEBPACK_IMPORTED_MODULE_3__["MonitorServices"].filter(function (i) {
      return i.label.includes(filterName);
    });
    setFilterList(filterResult);
  }; // 全选 & 反选


  var allCheckedChange = function allCheckedChange(checked) {
    var _a; // 存储选中项


    var filterServices = new Map(Object.entries(((_a = options.jsonData) === null || _a === void 0 ? void 0 : _a.service) || {}));

    if (checked) {
      _type_monitors__WEBPACK_IMPORTED_MODULE_3__["MonitorServices"].forEach(function (item) {
        filterServices.set(item.namespace, checked);
      });
    } else {
      filterServices.clear();
    }

    var result = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"])(filterServices);
    var filterObj = Object.fromEntries(result.entries());

    var jsonData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.jsonData), {
      service: filterObj,
      allChecked: checked
    });

    onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
      jsonData: jsonData
    }));
  }; // 单个services选中状态修改


  var onServiceCheckedChange = function onServiceCheckedChange(service, checked) {
    var _a;

    var filterServices = new Map(Object.entries(((_a = options.jsonData) === null || _a === void 0 ? void 0 : _a.service) || {}));

    if (!filterServices || !(filterServices === null || filterServices === void 0 ? void 0 : filterServices.size)) {
      filterServices = new Map();
    }

    if (checked) {
      filterServices.set(service, true);
    } else {
      filterServices["delete"](service);
    }

    var result = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"])(filterServices);
    var filterObj = Object.fromEntries(result.entries());

    var jsonData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.jsonData), {
      service: filterObj,
      allChecked: filterServices.size === _type_monitors__WEBPACK_IMPORTED_MODULE_3__["MonitorServices"].length ? true : false
    });

    onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
      jsonData: jsonData
    }));
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form-group"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
    label: "AccessKey",
    labelWidth: 8,
    inputWidth: 20,
    onChange: onAccessKeyChange,
    value: jsonData.AccessKey || "",
    placeholder: "json field returned to frontend"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form-inline"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SecretFormField, {
    isConfigured: secureJsonFields && secureJsonFields.secretKey,
    value: (secureJsonData === null || secureJsonData === void 0 ? void 0 : secureJsonData.secretKey) || "",
    label: "SecretAccessKey",
    placeholder: "secure json field (backend only)",
    labelWidth: 8,
    inputWidth: 20,
    onReset: onResetAPIKey,
    onChange: onAPIKeyChange
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineField"], {
    label: "\u5F00\u542F\u5185\u7F51API\u6A21\u5F0F",
    labelWidth: 20
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineSwitch"], {
    value: jsonData.intranet,
    onChange: onIntranetChange
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    style: {
      marginTop: "32px"
    },
    className: "page-heading"
  }, "Monitor Services"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: "gf-form-input width-20",
    type: "search",
    onChange: Object(lodash__WEBPACK_IMPORTED_MODULE_4__["debounce"])(filterServiceList, 1000),
    placeholder: "Input keyword to filter..."
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "gf-form-label query-keyword"
  }, "Select All"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineSwitch"], {
    value: jsonData === null || jsonData === void 0 ? void 0 : jsonData.allChecked,
    onChange: function onChange(v) {
      return allCheckedChange(v.target.checked);
    }
  })), Array.isArray(filterList) && filterList.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form",
      key: index + item.namespace
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "gf-form-label width-20"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: item.href,
      rel: "noreferrer"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, item === null || item === void 0 ? void 0 : item.label))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineSwitch"], {
      value: (jsonData === null || jsonData === void 0 ? void 0 : jsonData.service) && (jsonData === null || jsonData === void 0 ? void 0 : jsonData.service[item.namespace]) ? true : false,
      onChange: function onChange(v) {
        return onServiceCheckedChange(item.namespace, v.target.checked);
      }
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ConfigEditor);

/***/ }),

/***/ "./datasource/components/query/QueryEditor.tsx":
/*!*****************************************************!*\
  !*** ./datasource/components/query/QueryEditor.tsx ***!
  \*****************************************************/
/*! exports provided: DatasourceContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasourceContext", function() { return DatasourceContext; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use */ "../node_modules/react-use/esm/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types */ "./datasource/types.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_MetricSubSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/MetricSubSelect */ "./datasource/components/common/MetricSubSelect.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_common_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/common.css */ "./datasource/styles/common.css");
/* harmony import */ var _styles_common_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_common_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _type_monitors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../type_monitors */ "./datasource/type_monitors/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils */ "./datasource/utils/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services */ "./datasource/components/services/index.ts");











var Select = _grafana_ui__WEBPACK_IMPORTED_MODULE_4__["LegacyForms"].Select;
var AggregateOptions = [{
  label: "均值",
  value: "Average"
}, {
  label: "最大值",
  value: "Max"
}, {
  label: "最小值",
  value: "Min"
}];
var DatasourceContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({
  projectOptions: []
});

var QueryEditor = function QueryEditor(_a) {
  var _b, _c, _d, _e, _f, _g, _h;

  var onRunQuery = _a.onRunQuery,
      _onChange = _a.onChange,
      query = _a.query,
      datasource = _a.datasource,
      queries = _a.queries;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    onRunQuery();
  }, [queries === null || queries === void 0 ? void 0 : queries.length, onRunQuery]);
  var metricMap = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(); // 当前namespace

  var serviceItem = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var _a;

    return ((_a = query === null || query === void 0 ? void 0 : query.Namespace) === null || _a === void 0 ? void 0 : _a.value) ? _type_monitors__WEBPACK_IMPORTED_MODULE_8__["MonitorServices"].find(function (item) {
      var _a;

      return item.namespace === ((_a = query === null || query === void 0 ? void 0 : query.Namespace) === null || _a === void 0 ? void 0 : _a.value);
    }) : undefined;
  }, [query]); // instance可查询类型根据Namespace设置options

  var instanceTypeOptions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var _a;

    if (_utils__WEBPACK_IMPORTED_MODULE_9__["withoutIpServices"].includes((_a = query === null || query === void 0 ? void 0 : query.Namespace) === null || _a === void 0 ? void 0 : _a.value)) {
      var filterOptions = _utils__WEBPACK_IMPORTED_MODULE_9__["InstanceTypes"].filter(function (item) {
        return item.value !== "InstanceIp";
      });

      if ((query === null || query === void 0 ? void 0 : query.InstanceType) && (query === null || query === void 0 ? void 0 : query.InstanceType.value) === "InstanceIp") {
        _onChange && _onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
          InstanceType: {
            value: "InstanceId",
            label: "As InstanceId"
          }
        }));
      }

      return filterOptions;
    }

    return _utils__WEBPACK_IMPORTED_MODULE_9__["InstanceTypes"];
  }, [query, _onChange]);
  var projectList = Object(react_use__WEBPACK_IMPORTED_MODULE_2__["useAsync"])(function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
      var resData;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , Object(_utils__WEBPACK_IMPORTED_MODULE_9__["request"])(datasource.instanceSetting, "iam", {
              action: "GetAccountAllProjectList",
              version: "2015-11-01"
            })];

          case 1:
            resData = _a.sent();
            return [2
            /*return*/
            , resData === null || resData === void 0 ? void 0 : resData.data.ListProjectResult.ProjectList.map(function (i) {
              return {
                ProjectId: i.ProjectId,
                ProjectName: i.ProjectName
              };
            })];
        }
      });
    });
  }, [datasource.instanceSetting]).value; // 所有有权限projectid 生成查询string

  var projectQueryString = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var _a;

    var namespace = (query === null || query === void 0 ? void 0 : query.Namespace) && ((_a = query.Namespace) === null || _a === void 0 ? void 0 : _a.value);

    if (!projectList || !(projectList === null || projectList === void 0 ? void 0 : projectList.length) || !namespace) {
      return "";
    }

    if (namespace === "KRDS" || namespace === "PGS") {
      return;
    }

    var queryString = "";
    var projectKey = namespace !== "KCS" ? "ProjectId" : "iamProjectId";
    projectList.forEach(function (item, index) {
      queryString += "&" + projectKey + "." + (index + 1) + "=" + item.ProjectId;
    });
    return queryString;
  }, [projectList, query.Namespace]); // 详情显示状态

  var _j = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), 2),
      detailState = _j[0],
      setDetail = _j[1]; // 生成namespace 下拉选项


  var NameSpaceOptions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(_type_monitors__WEBPACK_IMPORTED_MODULE_8__["generageCheckedNamespace"])(datasource);
  }, [datasource]); // InstanceList

  var _k = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]), 2),
      instanceOptions = _k[0],
      setInstanceOptions = _k[1]; // 指标下拉options


  var _l = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]), 2),
      metricOptions = _l[0],
      setMetricOptions = _l[1]; // interval下拉options


  var _m = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(((_b = query === null || query === void 0 ? void 0 : query.MetricName) === null || _b === void 0 ? void 0 : _b.interval) ? Object(_utils__WEBPACK_IMPORTED_MODULE_9__["generatePeriodOptions"])(query.MetricName.interval) : []), 2),
      periodOptions = _m[0],
      setPerionOptions = _m[1]; // 获取数据其他查询条件


  var _o = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""), 2),
      extenInstanceQuery = _o[0],
      setExtenQuery = _o[1];

  var customOptions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])((query === null || query === void 0 ? void 0 : query.InstanceID) || []); // 获取region

  var regionOptions = Object(react_use__WEBPACK_IMPORTED_MODULE_2__["useAsync"])(function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
      var regionRes, regionSet;

      var _a;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , Object(_utils__WEBPACK_IMPORTED_MODULE_9__["request"])(datasource.instanceSetting, "kec", {
              action: "DescribeRegions",
              version: "2016-03-04"
            })];

          case 1:
            regionRes = _b.sent();
            regionSet = ((_a = regionRes === null || regionRes === void 0 ? void 0 : regionRes.data) === null || _a === void 0 ? void 0 : _a.RegionSet) || [];
            return [2
            /*return*/
            , regionSet.map(function (item) {
              return {
                label: "" + (item === null || item === void 0 ? void 0 : item.RegionName),
                value: item === null || item === void 0 ? void 0 : item.Region
              };
            })];
        }
      });
    });
  }, []).value; // 不同service change后触发，filter

  var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (query) {
    var extenParams = "";

    var _loop_1 = function _loop_1(key) {
      if (Object.prototype.hasOwnProperty.call(query, key)) {
        var element = query[key];

        if ((typeof element === "string" || typeof element === "number") && element !== "") {
          extenParams += "&" + key + "=" + element;
        } else if (Array.isArray(element)) {
          element.forEach(function (el, index) {
            if (el !== "") {
              extenParams += "&" + key + "." + (index + 1) + "=" + el;
            }
          });
        } else if (key === "Filter") {
          var filterString = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["dealQueryFilter"])(query[key]);
          extenParams += "&" + filterString;
        } else {
          extenParams += "";
        }
      }
    };

    for (var key in query) {
      _loop_1(key);
    }

    setExtenQuery(extenParams ? extenParams : "");
  }, []); // 渲染不同service的可选项

  var renderByService = function renderByService(service) {
    switch (service) {
      case "KEC":
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_services__WEBPACK_IMPORTED_MODULE_10__["Querykec"], {
          onChange: lodash__WEBPACK_IMPORTED_MODULE_6___default.a.debounce(handleChange, 500)
        });

      case "EIP":
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_services__WEBPACK_IMPORTED_MODULE_10__["QueryIp"], {
          onChange: lodash__WEBPACK_IMPORTED_MODULE_6___default.a.debounce(handleChange, 500)
        });

      case "BWS":
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_services__WEBPACK_IMPORTED_MODULE_10__["QueryBws"], {
          onChange: lodash__WEBPACK_IMPORTED_MODULE_6___default.a.debounce(handleChange, 500)
        });

      case "EPC":
      case "GEPC":
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_services__WEBPACK_IMPORTED_MODULE_10__["QueryEpc"], {
          onChange: lodash__WEBPACK_IMPORTED_MODULE_6___default.a.debounce(handleChange, 500)
        });

      case "KCS":
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_services__WEBPACK_IMPORTED_MODULE_10__["QueryKcs"], {
          onChange: lodash__WEBPACK_IMPORTED_MODULE_6___default.a.debounce(handleChange, 500)
        });

      case "NAT":
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_services__WEBPACK_IMPORTED_MODULE_10__["QueryNat"], {
          onChange: lodash__WEBPACK_IMPORTED_MODULE_6___default.a.debounce(handleChange, 500)
        });

      case "SLB":
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_services__WEBPACK_IMPORTED_MODULE_10__["QuerySlb"], {
          onChange: lodash__WEBPACK_IMPORTED_MODULE_6___default.a.debounce(handleChange, 500)
        });

      case "Listener":
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_services__WEBPACK_IMPORTED_MODULE_10__["QueryListener"], {
          onChange: lodash__WEBPACK_IMPORTED_MODULE_6___default.a.debounce(handleChange, 500)
        });

      case "VPC":
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_services__WEBPACK_IMPORTED_MODULE_10__["QueryVpc"], {
          onChange: lodash__WEBPACK_IMPORTED_MODULE_6___default.a.debounce(handleChange, 500)
        });

      case "KRDS":
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_services__WEBPACK_IMPORTED_MODULE_10__["QueryKrds"], {
          onChange: lodash__WEBPACK_IMPORTED_MODULE_6___default.a.debounce(handleChange, 500)
        });

      case "PEER":
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_services__WEBPACK_IMPORTED_MODULE_10__["QueryPeering"], {
          onChange: lodash__WEBPACK_IMPORTED_MODULE_6___default.a.debounce(handleChange, 500)
        });

      case "PGS":
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_services__WEBPACK_IMPORTED_MODULE_10__["QueryPGS"], {
          onChange: lodash__WEBPACK_IMPORTED_MODULE_6___default.a.debounce(handleChange, 500)
        });

      case "KCE":
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_services__WEBPACK_IMPORTED_MODULE_10__["QueryKce"], {
          onChange: lodash__WEBPACK_IMPORTED_MODULE_6___default.a.debounce(handleChange, 500)
        });

      default:
        return null;
    }
  }; // namespace变更


  var onNamespaceChange = function onNamespaceChange(namespace) {
    // name space change 其他select 值重置
    setExtenQuery("");
    setInstanceOptions([]);
    setMetricOptions([]);

    _onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
      Namespace: namespace,
      MetricName: {},
      InstanceID: [],
      Period: {}
    }));

    onRunQuery();
  }; // region change


  var onRegionChange = function onRegionChange(region) {
    setInstanceOptions([]);
    setMetricOptions([]); // 获取实例列表

    _onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
      Region: region
    }));

    try {
      (region === null || region === void 0 ? void 0 : region.value) && localStorage.setItem("region", region === null || region === void 0 ? void 0 : region.value);
    } catch (error) {
      console.error(error);
    }
  }; // 实例chage


  var onInstanceChange = function onInstanceChange(instanceId) {
    _onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
      InstanceID: Array.isArray(instanceId) ? instanceId : [instanceId]
    }));
  }; // 指标change


  var onMetricChange = function onMetricChange(metric) {
    _onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
      MetricName: metric,
      Period: _types__WEBPACK_IMPORTED_MODULE_3__["defaultQuery"].Period
    }));

    if (metric.interval) {
      var periodOptions_1 = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["generatePeriodOptions"])(metric.interval);
      setPerionOptions(periodOptions_1);
    } // 如果metric含有sub Select，暂不请求接口


    if (metric.metricSubChose) {
      return;
    }

    onRunQuery();
  };

  var onMetricSubSeletChange = function onMetricSubSeletChange(concat) {
    var behandName = query.MetricName.value.split("[")[0];
    var allMetricName = behandName + "[" + concat + "]";

    _onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
      MetricName: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query.MetricName), {
        value: allMetricName
      })
    }));

    onRunQuery();
  }; // period change


  var onPeriodChange = function onPeriodChange(period) {
    _onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
      Period: period
    }));

    onRunQuery();
  };
  /** 请求实例列表接口
   * namespace： 业务线
   */


  var getInstanceIds = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (extenQuery) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
      var service, extendQuery, projectQuery, filterProjectQuery, dealRegion, currentService, instanceIdRes, opsItem;

      var _a, _b, _c, _d;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_e) {
        switch (_e.label) {
          case 0:
            service = query.Namespace.service;

            if (!query.Region || !serviceItem) {
              return [2
              /*return*/
              , console.error("ServiceConfig \u4E2D\u672A\u627E\u5230" + service + "\u6216region\u4E3A\u7A7A")];
            }

            setMetricOptions([]);
            setInstanceOptions([]);
            customOptions.current = [];
            extendQuery = !extenQuery || typeof extenQuery !== "string" ? extenQuery : "";
            projectQuery = "" + (projectQueryString ? projectQueryString : "");
            filterProjectQuery = extenInstanceQuery && extenInstanceQuery.includes("ProjectId") ? extenInstanceQuery : (extenInstanceQuery ? extenInstanceQuery : "") + projectQuery;
            dealRegion = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["replaceRealValue"])(query.Region.value);
            currentService = _type_monitors__WEBPACK_IMPORTED_MODULE_8__["ServiceMap"].get(query.Namespace.service + "/" + dealRegion);
            return [4
            /*yield*/
            , Object(_utils__WEBPACK_IMPORTED_MODULE_9__["request"])(datasource.instanceSetting, query.Namespace.service + "/" + dealRegion, {
              action: (serviceItem === null || serviceItem === void 0 ? void 0 : serviceItem.instanceAction) || "",
              version: (currentService === null || currentService === void 0 ? void 0 : currentService.version) || "",
              extenQuery: extendQuery ? extendQuery + ("" + (filterProjectQuery ? filterProjectQuery : "")) : "" + (filterProjectQuery ? filterProjectQuery : ""),
              region: dealRegion
            })];

          case 1:
            instanceIdRes = _e.sent();

            if ((instanceIdRes === null || instanceIdRes === void 0 ? void 0 : instanceIdRes.status) !== 200) {
              Object(_utils__WEBPACK_IMPORTED_MODULE_9__["alertError"])((_b = (_a = instanceIdRes === null || instanceIdRes === void 0 ? void 0 : instanceIdRes.data) === null || _a === void 0 ? void 0 : _a.Error) === null || _b === void 0 ? void 0 : _b.Message);
              return [2
              /*return*/
              ];
            }

            if (instanceIdRes && (instanceIdRes === null || instanceIdRes === void 0 ? void 0 : instanceIdRes.data)) {
              opsItem = _utils__WEBPACK_IMPORTED_MODULE_9__["GenerageInstanceOptions"][(_c = query === null || query === void 0 ? void 0 : query.Namespace) === null || _c === void 0 ? void 0 : _c.value].options(instanceIdRes === null || instanceIdRes === void 0 ? void 0 : instanceIdRes.data, ((_d = query.InstanceType) === null || _d === void 0 ? void 0 : _d.value) || "InstanceId"); // const instanceData = dealInstanceRequest(service, instanceIdRes?.data);
              // const instanceOptions = dealInstanceByService(namespace, instanceData, query.InstanceType?.value);

              setInstanceOptions(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(opsItem), false));
            }

            return [2
            /*return*/
            ];
        }
      });
    });
  }, [query, datasource.instanceSetting, extenInstanceQuery, projectQueryString, serviceItem]); // 生成metric options

  var generateMetricOptions = function generateMetricOptions(metricsList) {
    metricMap.current = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["generageMetricOptions"])(metricsList);
    var metricMapKeys = Array.from(metricMap.current.keys());
    var metricsOptions = metricMapKeys.map(function (item) {
      var metricMapItem = metricMap.current && metricMap.current.get(item);
      return {
        label: item,
        value: item,
        unit: metricMapItem["unit"],
        interval: metricMapItem && metricMapItem["Period"] ? metricMapItem["Period"] : "60",
        metricSubChose: metricMapItem && metricMapItem["metricSubChose"] ? metricMapItem["metricSubChose"] : undefined
      };
    });
    setMetricOptions(metricsOptions);
  }; // 请求指标接口


  var getMetricNames = function getMetricNames() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
      var instanceIdItem, instanceid, namespace, defaultExtenQuery, metricNamesData, metricsList;

      var _a, _b, _c, _d, _e, _f, _g, _h, _j;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_k) {
        switch (_k.label) {
          case 0:
            instanceIdItem = ((_b = (_a = query.InstanceID) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.value) || "";
            instanceid = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["replaceRealValue"])(instanceIdItem).split(",")[0];
            namespace = query.Namespace.value;

            if (!instanceid) {
              return [2
              /*return*/
              ];
            }

            defaultExtenQuery = "&InstanceID=" + instanceid + "&Namespace=" + namespace + "&PageIndex=1";

            if (namespace === "KCE") {
              defaultExtenQuery = "&Dimensions.0.Name=ClusterId&Dimensions.0.Value=" + instanceid + "&Namespace=" + namespace + "&PageIndex=1";
            }

            return [4
            /*yield*/
            , Object(_utils__WEBPACK_IMPORTED_MODULE_9__["request"])(datasource.instanceSetting, "monitor", {
              action: "ListMetrics",
              version: "2010-05-25",
              extenQuery: defaultExtenQuery,
              region: Object(_utils__WEBPACK_IMPORTED_MODULE_9__["replaceRealValue"])(query.Region.value)
            })];

          case 1:
            metricNamesData = _k.sent();

            if ((metricNamesData === null || metricNamesData === void 0 ? void 0 : metricNamesData.status) !== 200) {
              Object(_utils__WEBPACK_IMPORTED_MODULE_9__["alertError"])(((_d = (_c = metricNamesData === null || metricNamesData === void 0 ? void 0 : metricNamesData.data) === null || _c === void 0 ? void 0 : _c.Error) === null || _d === void 0 ? void 0 : _d.Message) || ((_f = (_e = metricNamesData === null || metricNamesData === void 0 ? void 0 : metricNamesData.data) === null || _e === void 0 ? void 0 : _e.error) === null || _f === void 0 ? void 0 : _f.message));
              return [2
              /*return*/
              ];
            }

            metricsList = (_j = (_h = (_g = metricNamesData === null || metricNamesData === void 0 ? void 0 : metricNamesData.data) === null || _g === void 0 ? void 0 : _g.listMetricsResult) === null || _h === void 0 ? void 0 : _h.metrics) === null || _j === void 0 ? void 0 : _j.member;
            generateMetricOptions(metricsList);
            return [2
            /*return*/
            ];
        }
      });
    });
  }; // 显示Instance ID 产品线


  var NormalInstanceField = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["InlineField"], {
    labelWidth: 18,
    label: "InstanceID"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex-content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Select, {
    width: 180,
    options: instanceTypeOptions,
    defaultValue: {},
    value: query.InstanceType ? query.InstanceType : _types__WEBPACK_IMPORTED_MODULE_3__["defaultQuery"].InstanceType,
    onChange: function onChange(instanceType) {
      _onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        InstanceType: instanceType,
        InstanceID: []
      }));
    },
    isSearchable: true,
    placeholder: " "
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["MultiSelect"], {
    width: 40,
    options: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(instanceOptions), false), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(customOptions.current), false),
    defaultValue: query.InstanceID,
    value: query.InstanceID,
    onChange: onInstanceChange,
    onOpenMenu: getInstanceIds,
    onBlur: function onBlur() {
      if ((query === null || query === void 0 ? void 0 : query.MetricName) && (query === null || query === void 0 ? void 0 : query.MetricName.value)) {
        onRunQuery();
      }
    },
    closeMenuOnSelect: false,
    allowCustomValue: true,
    isSearchable: true,
    placeholder: " ",
    onCreateOption: function onCreateOption(v) {
      var customValue = {
        value: v,
        label: v
      };
      customOptions.current = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(customOptions.current), false), [customValue], false);

      _onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        InstanceID: [customValue]
      }));
    }
  })))); // KCE 获取集群表单项

  var KecInstanceField = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["InlineField"], {
    labelWidth: 18,
    label: "ClusterID"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex-content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Select, {
    width: 180,
    options: _utils__WEBPACK_IMPORTED_MODULE_9__["ClusterTypes"],
    defaultValue: {},
    value: query.InstanceType ? query.InstanceType : "InstanceId",
    onChange: function onChange(instanceType) {
      _onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        InstanceType: instanceType,
        InstanceID: []
      }));
    },
    isSearchable: true,
    placeholder: " "
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Select, {
    width: 40,
    options: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(instanceOptions), false),
    defaultValue: (_c = query.InstanceID) === null || _c === void 0 ? void 0 : _c[0],
    value: (_d = query.InstanceID) === null || _d === void 0 ? void 0 : _d[0],
    onChange: onInstanceChange,
    onOpenMenu: getInstanceIds,
    onBlur: function onBlur() {
      if ((query === null || query === void 0 ? void 0 : query.MetricName) && (query === null || query === void 0 ? void 0 : query.MetricName.value)) {
        onRunQuery();
      }
    },
    closeMenuOnSelect: false,
    allowCustomValue: true,
    isSearchable: true,
    placeholder: " ",
    onCreateOption: function onCreateOption(v) {
      var customValue = {
        value: v,
        label: v
      };

      _onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        InstanceID: [customValue]
      }));
    }
  }))));
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["InlineField"], {
    labelWidth: 18,
    label: "Namespace"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Select, {
    width: 180,
    options: NameSpaceOptions,
    value: query.Namespace,
    onChange: onNamespaceChange
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["InlineField"], {
    labelWidth: 18,
    label: "Region"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Select, {
    allowCustomValue: true,
    isSearchable: true,
    isClearable: true,
    width: 180,
    options: regionOptions,
    value: query.Region,
    onChange: onRegionChange,
    placeholder: " "
  })), ((_e = query === null || query === void 0 ? void 0 : query.Namespace) === null || _e === void 0 ? void 0 : _e.value) === "KCE" ? KecInstanceField : NormalInstanceField, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["InlineField"], {
    labelWidth: 18,
    label: "MetricName",
    className: "upper-flex-content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex-content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Select, {
    width: 180,
    options: metricOptions,
    value: query.MetricName,
    allowCustomValue: true,
    isSearchable: true,
    onChange: onMetricChange,
    onOpenMenu: getMetricNames,
    placeholder: " "
  }), ((_f = query.MetricName) === null || _f === void 0 ? void 0 : _f["metricSubChose"]) && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_MetricSubSelect__WEBPACK_IMPORTED_MODULE_5__["default"], {
    subChosed: query.MetricName["metricSubChose"],
    onChange: onMetricSubSeletChange,
    defaultValue: (_g = query.MetricName) === null || _g === void 0 ? void 0 : _g.value
  }), query.MetricName && query.MetricName["unit"] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      marginLeft: "8px",
      lineHeight: "32px"
    }
  }, "\uFF08\u5355\u4F4D\uFF1A", query.MetricName["unit"] || "", "\uFF09"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["InlineField"], {
    labelWidth: 18,
    label: "Metric alias"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    width: 35,
    defaultValue: query.Alias,
    placeholder: "Metric alias",
    onChange: lodash__WEBPACK_IMPORTED_MODULE_6___default.a.debounce(function (e) {
      _onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        Alias: e.target.value
      }));

      onRunQuery();
    }, 1000)
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["InlineField"], {
    labelWidth: 18,
    label: "Period",
    tooltip: "(\u65F6\u95F4\u5355\u4F4D\uFF1A\u79D2)"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex-content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Select, {
    allowCustomValue: true,
    isSearchable: true,
    width: 180,
    options: periodOptions,
    value: query.Period,
    onChange: onPeriodChange,
    placeholder: " "
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["MultiSelect"], {
    width: 40,
    options: AggregateOptions,
    value: query.Aggregate ? query.Aggregate : _types__WEBPACK_IMPORTED_MODULE_3__["defaultQuery"].Aggregate,
    onChange: function onChange(Aggregate) {
      return _onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        Aggregate: Aggregate
      }));
    },
    onBlur: function onBlur() {
      return onRunQuery();
    },
    closeMenuOnSelect: false,
    placeholder: " ",
    isClearable: false
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["InlineField"], {
    label: "Show Instance Query Details"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["InlineSwitch"], {
    value: detailState,
    onChange: function onChange(v) {
      if (!v.target.checked) {
        setExtenQuery("");
      }

      setDetail(v.target.checked);
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      marginLeft: "8px"
    }
  }, "(\u6309\u7167\u5177\u4F53\u7684\u67E5\u8BE2\u6761\u4EF6\u641C\u7D22\u5B9E\u4F8B\uFF0C", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: {
      color: "cornflowerblue"
    },
    onClick: function onClick() {
      var hrefItem = _type_monitors__WEBPACK_IMPORTED_MODULE_8__["MonitorServices"].find(function (i) {
        var _a;

        return i.namespace === ((_a = query === null || query === void 0 ? void 0 : query.Namespace) === null || _a === void 0 ? void 0 : _a.value);
      });
      console.log("hrefItem", hrefItem);

      if (hrefItem && (hrefItem === null || hrefItem === void 0 ? void 0 : hrefItem.apihref)) {
        window.open(hrefItem === null || hrefItem === void 0 ? void 0 : hrefItem.apihref);
      }
    }
  }, "\u8BE6\u60C5\u89C1\u5404\u4EA7\u54C1\u7EBF\u6587\u6863"), ")"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DatasourceContext.Provider, {
    value: {
      projectOptions: projectList
    }
  }, detailState ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "detail-content-fileds"
  }, renderByService((_h = query.Namespace) === null || _h === void 0 ? void 0 : _h.value))) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (QueryEditor);

/***/ }),

/***/ "./datasource/components/query/VariableQueryEditor.tsx":
/*!*************************************************************!*\
  !*** ./datasource/components/query/VariableQueryEditor.tsx ***!
  \*************************************************************/
/*! exports provided: VariableQueryEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariableQueryEditor", function() { return VariableQueryEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
 // Dashbord Variable Setting面板自定义query变量部分



var VariableQueryEditor = function VariableQueryEditor(_a) {
  var onChange = _a.onChange,
      query = _a.query;

  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(query), 2),
      state = _b[0],
      setState = _b[1];

  var saveQuery = function saveQuery() {
    onChange(state);
  };

  var handleChange = function handleChange(event) {
    return setState(event.currentTarget.value);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form help-content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineLabel"], {
    width: 20
  }, "Query"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    name: "rawQuery",
    className: "gf-form-input gf-form-input-query",
    onBlur: saveQuery,
    onChange: handleChange,
    value: state
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      padding: "6px 8px"
    }
  }, "Query\u5E2E\u52A9\u6587\u6863\uFF1A", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: {
      color: "cornflowerblue"
    },
    onClick: function onClick() {
      window.open("https://docs.ksyun.com/documents/41740?type=3");
    }
  }, "https://docs.ksyun.com/documents/41740?type=3")));
};

/***/ }),

/***/ "./datasource/components/services/QueryBws.tsx":
/*!*****************************************************!*\
  !*** ./datasource/components/services/QueryBws.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_SwtichIncrement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/SwtichIncrement */ "./datasource/components/common/SwtichIncrement.tsx");
/* harmony import */ var _common_CustomIncrement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/CustomIncrement */ "./datasource/components/common/CustomIncrement.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__);






var QueryBws = function QueryBws(_a) {
  var onChange = _a.onChange;

  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), 2),
      filterState = _b[0],
      setFilterState = _b[1];

  var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}), 2),
      bwsQuery = _c[0],
      setBws = _c[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    onChange && onChange(bwsQuery);
  }, [bwsQuery, onChange]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "common-content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_SwtichIncrement__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "BandWidthShareId",
    tooltip: "\u9ED8\u8BA4: \u67E5\u8BE2region\u4E0B\u6240\u6709\u7684\u5171\u4EAB\u5E26\u5BBD\u7684ID",
    datasource: [""],
    onChange: function onChange(value) {
      return setBws(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          BandWidthShareId: value
        });
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_SwtichIncrement__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "ProjectId",
    tooltip: "\u7F3A\u7701\u503C: \u9ED8\u8BA4\u9879\u76EE",
    datasource: [""],
    onChange: function onChange(value) {
      return setBws(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          ProjectId: value
        });
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["InlineField"], {
    labelWidth: 24,
    label: "Filter"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["InlineSwitch"], {
    onChange: function onChange(v) {
      if (!v.target.checked) {
        setBws(function (state) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
            Filter: {}
          });
        });
      }

      setFilterState(v.target.checked);
    }
  })), filterState ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_CustomIncrement__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "allocation-id",
    tooltip: "\u5F39\u6027IP\u7684ID",
    datasource: [""],
    onValueChange: function onValueChange(value) {
      return setBws(function (state) {
        var _a;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          Filter: (_a = {}, _a["allocation-id"] = value, _a)
        });
      });
    }
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (QueryBws);

/***/ }),

/***/ "./datasource/components/services/QueryEpc.tsx":
/*!*****************************************************!*\
  !*** ./datasource/components/services/QueryEpc.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_CustomIncrement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/CustomIncrement */ "./datasource/components/common/CustomIncrement.tsx");
/* harmony import */ var _common_SwtichIncrement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/SwtichIncrement */ "./datasource/components/common/SwtichIncrement.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






var FormField = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"].FormField;
var epcoptions = [{
  label: "host-name",
  key: "host-name",
  tooltip: "裸金属服务器的名称，仅支持精确查询"
}, {
  label: "vpc-id",
  key: "vpc-id",
  tooltip: "裸金属服务器的VPC ID"
}, {
  label: "subnet-id",
  key: "subnet-id",
  tooltip: "裸金属服务器的子网ID"
}, {
  label: "cabinet-id",
  key: "cabinet-id",
  tooltip: "托管裸金属服务器的机柜ID"
}, {
  label: "host-type",
  key: "host-type",
  tooltip: "裸金属服务器类型"
}, {
  label: "epc-host-status",
  key: "epc-host-status",
  tooltip: "裸金属服务器状态"
}, {
  label: "os-name",
  key: "os-name",
  tooltip: "操作系统名称"
}, {
  label: "product-type",
  key: "product-type",
  tooltip: "类型"
}];

var QueryEpc = function QueryEpc(_a) {
  var onChange = _a.onChange;

  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), 2),
      filterState = _b[0],
      setFilterState = _b[1];

  var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}), 2),
      epcquery = _c[0],
      setEpc = _c[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    onChange && onChange(epcquery);
  }, [epcquery, onChange]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "common-content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-field"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
    label: "MaxResults",
    type: "number",
    labelWidth: 8,
    inputWidth: 20,
    placeholder: "\u53D6\u503C\u8303\u56F4\uFF1A 5- 1000",
    value: epcquery.MaxResults,
    onChange: function onChange(e) {
      return setEpc(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          MaxResults: e.target.value
        });
      });
    },
    tooltip: "单次调用所返回的最大实例数目，取值范围： 5- 1000"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-field"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
    label: "NextToken",
    type: "number",
    labelWidth: 8,
    inputWidth: 20,
    placeholder: "NextToken Input",
    value: epcquery.NextToken,
    onChange: function onChange(e) {
      return setEpc(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          NextToken: e.target.value
        });
      });
    },
    tooltip: "获取另一页返回结果的 token"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_SwtichIncrement__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "HostId",
    tooltip: "\u88F8\u91D1\u5C5E\u670D\u52A1\u5668\u8D44\u6E90ID\uFF0C\u53D6\u503C\u8303\u56F4\uFF1A1-100",
    datasource: [""],
    onChange: function onChange(value) {
      return setEpc(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          HostId: value
        });
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_SwtichIncrement__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "ProjectId",
    datasource: [""],
    onChange: function onChange(value) {
      return setEpc(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          ProjectId: value
        });
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineField"], {
    labelWidth: 24,
    label: "Filter"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineSwitch"], {
    value: filterState,
    onChange: function onChange(v) {
      setFilterState(v.target.checked);

      if (!v.target.checked) {
        setEpc(function (state) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
            Filter: {}
          });
        });
      }
    }
  })), filterState ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, epcoptions.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_CustomIncrement__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item.key,
      label: item.label,
      tooltip: item.tooltip,
      datasource: [""],
      onValueChange: function onValueChange(value) {
        var Filter = (epcquery === null || epcquery === void 0 ? void 0 : epcquery.Filter) || {};

        lodash__WEBPACK_IMPORTED_MODULE_5___default.a.set(Filter, [item.key], value);

        setEpc(function (state) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
            Filter: Filter
          });
        });
      }
    });
  })) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (QueryEpc);

/***/ }),

/***/ "./datasource/components/services/QueryIp.tsx":
/*!****************************************************!*\
  !*** ./datasource/components/services/QueryIp.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_SwtichIncrement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/SwtichIncrement */ "./datasource/components/common/SwtichIncrement.tsx");
/* harmony import */ var _common_CustomIncrement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/CustomIncrement */ "./datasource/components/common/CustomIncrement.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);


 // import CustomInput from '../common/CustomInput';




var FormField = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"].FormField;
var filtercondition = [{
  label: "network-interface-id",
  key: "network-interface-id",
  tooltip: "主机的网卡信息"
}, {
  label: "instance-type",
  key: "instance-type",
  tooltip: "弹性IP绑定的实例类型，slb | ipfwd(云主机、裸金属均为ipfwd)"
}, {
  label: "internet-gateway-id",
  key: "internet-gateway-id",
  tooltip: "互联网网关的ID"
}, {
  label: "band-width-share-id",
  key: "band-width-share-id",
  tooltip: "共享带宽ID"
}, {
  label: "line-id",
  key: "line-id",
  tooltip: "线路的ID"
}, {
  label: "public-ip",
  key: "public-ip",
  tooltip: "弹性IP的IP"
}, {
  label: "project-id",
  key: "project-id",
  tooltip: "项目的ID"
}];

var QueryIp = function QueryIp(_a) {
  var onChange = _a.onChange;

  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), 2),
      filterState = _b[0],
      setFilterState = _b[1];

  var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(), 2),
      eipQuery = _c[0],
      setEipQuery = _c[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    onChange && onChange(eipQuery);
  }, [eipQuery, onChange]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "common-content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-field"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
    tooltip: "\u5355\u6B21\u8C03\u7528\u53EF\u8FD4\u56DE\u7684\u6700\u5927\u6761\u76EE\u6570\u91CF. \u4F20\u5165\u8FD4\u56DE\u7684 NextToken \u503C\u53EF\u4EE5\u83B7\u53D6\u5269\u4F59\u7684\u5176\u5B83\u6761\u76EE. \u8FD9\u4E2A\u503C\u53EF\u4EE5\u5141\u8BB8\u7684\u8303\u56F4\u662F 5 - 1000",
    label: "MaxResults",
    labelWidth: 10,
    inputWidth: 20,
    placeholder: "\u53EF\u8F93\u5165\u503C\u8303\u56F4\uFF1A5~1000",
    onChange: function onChange(e) {
      return setEipQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          MaxResults: e.target.value
        });
      });
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-field"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
    tooltip: "\u83B7\u53D6\u53E6\u4E00\u9875\u8FD4\u56DE\u7ED3\u679C\u7684 token",
    label: "NextToken",
    labelWidth: 10,
    inputWidth: 20,
    placeholder: "NextToken",
    onChange: function onChange(e) {
      return setEipQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          NextToken: e.target.value
        });
      });
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-field"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
    tooltip: "\u5F39\u6027 IP \u7684\u7248\u672C\uFF0C\xA0ipv4 | ipv6 | all",
    label: "IpVersion",
    labelWidth: 10,
    inputWidth: 20,
    placeholder: "IpVersion",
    onChange: function onChange(e) {
      return setEipQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          IpVersion: e.target.value
        });
      });
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_SwtichIncrement__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "AllocationId",
    tooltip: "\u67E5\u8BE2region\u4E0B\u6240\u6709\u7684\u5F39\u6027IP\u7684ID",
    datasource: [""],
    onChange: function onChange(value) {
      return setEipQuery(function (state) {
        var _a;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), (_a = {}, _a["AllocationId"] = value, _a));
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_SwtichIncrement__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "ProjectId",
    tooltip: "EIP\u6240\u5C5E\u9879\u76EE\u7684ID",
    datasource: [""],
    onChange: function onChange(value) {
      return setEipQuery(function (state) {
        var _a;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), (_a = {}, _a["ProjectId"] = value, _a));
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineField"], {
    labelWidth: 24,
    label: "Filter"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineSwitch"], {
    value: filterState,
    onChange: function onChange(v) {
      if (!v.target.checked) {
        setEipQuery(undefined);
      }

      setFilterState(v.target.checked);
    }
  })), filterState ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, filtercondition.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_CustomIncrement__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: item.key,
      label: item.label,
      tooltip: item.tooltip,
      datasource: [""],
      onValueChange: function onValueChange(value) {
        var Filter = (eipQuery === null || eipQuery === void 0 ? void 0 : eipQuery.Filter) || {};

        lodash__WEBPACK_IMPORTED_MODULE_5___default.a.set(Filter, [item.key], value);

        setEipQuery(function (state) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
            Filter: Filter
          });
        });
      }
    });
  })) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (QueryIp);

/***/ }),

/***/ "./datasource/components/services/QueryKce.tsx":
/*!*****************************************************!*\
  !*** ./datasource/components/services/QueryKce.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_SwitchInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/SwitchInput */ "./datasource/components/common/SwitchInput.tsx");




var FormField = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"].FormField;

var Querykce = function Querykce(_a) {
  var onChange = _a.onChange;

  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(), 2),
      kceQuery = _b[0],
      setKceQuery = _b[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    onChange && onChange(kceQuery);
  }, [kceQuery, onChange]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "common-content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-field"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
    tooltip: "\u5355\u6B21\u8C03\u7528\u6240\u8FD4\u56DE\u7684\u6700\u5927\u5B9E\u4F8B\u6570\u76EE\uFF0C\u9ED8\u8BA410\uFF0C \u8303\u56F4(0-20]\u3002",
    label: "MaxResults",
    labelWidth: 10,
    inputWidth: 20,
    placeholder: "\u53EF\u8F93\u5165\u503C\u8303\u56F4\uFF1A0~20",
    onChange: function onChange(e) {
      return setKceQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          MaxResults: e.target.value
        });
      });
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-field"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
    tooltip: "\u5206\u9875\u6807\u8BC6\uFF0C\u5355\u6B21\u8C03\u7528\u672A\u8FD4\u56DE\u5168\u90E8\u5B9E\u4F8B\u65F6\uFF0C\u6807\u8BB0\u4E0B\u6B21\u8C03\u7528\u7684\u8FD4\u56DE\u503C\u7684\u8D77\u70B9\uFF0C\u9ED8\u8BA4\u503C\u662F0\u3002",
    label: "Marker",
    labelWidth: 10,
    inputWidth: 20,
    defaultValue: 0,
    placeholder: "Marker",
    onChange: function onChange(e) {
      return setKceQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          Marker: e.target.value
        });
      });
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_SwitchInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Search",
    tooltip: "\u6A21\u7CCA\u5339\u914D\uFF0C\u53EF\u5339\u914D\u5982\u4E0B\u5B57\u6BB5\uFF1A\u96C6\u7FA4\u540D\u79F0(ClusterName)\u3002",
    onChange: function onChange(value) {
      return setKceQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          Search: value
        });
      });
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Querykce);

/***/ }),

/***/ "./datasource/components/services/QueryKcs.tsx":
/*!*****************************************************!*\
  !*** ./datasource/components/services/QueryKcs.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);



var FormField = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"].FormField;
var KcsQueryOptions = [{
  label: "AvailableZone",
  key: "AvailableZone",
  tooltip: "默认：对应机房的a区"
}, {
  label: "CacheId",
  key: "CacheId",
  tooltip: "缓存服务ID"
}, {
  label: "Name",
  key: "Name",
  tooltip: "缓存服务名称"
}, {
  label: "Vip",
  key: "Vip",
  tooltip: "缓存服务VIP"
}, {
  label: "VpcId",
  key: "VpcId",
  tooltip: "虚拟网络ID"
}, {
  label: "VnetId",
  key: "VnetId",
  tooltip: "终端子网ID"
}, {
  label: "Offset",
  key: "Offset",
  tooltip: "数据偏移量"
}, {
  label: "Limit",
  key: "Limit",
  tooltip: "每页数量",
  placeholder: "取值范围为：1~100"
}, {
  label: "IamProjectId",
  key: "IamProjectId",
  tooltip: "默认：查询全部项目，可传入多个的项目ID，‘,’隔开"
}, {
  label: "FuzzySearch",
  key: "FuzzySearch",
  tooltip: "模糊条件查询，可根据ID，IP，名称进行过滤"
}, {
  label: "Protocol",
  key: "Protocol",
  tooltip: "版本号，默认：查询所有，版本号：4.0、5.0"
}, {
  label: "TagKey",
  key: "TagKey",
  tooltip: "标签的key",
  placeholder: "必须同标签值一同传入"
}, {
  label: "TagValue",
  key: "TagValue",
  tooltip: "标签的value",
  placeholder: "必须同标签名一同传入"
}];

var QueryKcs = function QueryKcs(_a) {
  var onChange = _a.onChange;

  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}), 2),
      kcsquery = _b[0],
      setKcs = _b[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    onChange && onChange(kcsquery);
  }, [kcsquery, onChange]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "common-content"
  }, KcsQueryOptions.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "repeat-field",
      key: item.key + index
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
      label: item.label,
      labelWidth: 8,
      inputWidth: 20,
      placeholder: (item === null || item === void 0 ? void 0 : item.placeholder) || "",
      onChange: function onChange(e) {
        setKcs(function (state) {
          var _a;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), (_a = {}, _a[item.key] = e.target.value, _a));
        });
      },
      tooltip: item.tooltip
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (QueryKcs);

/***/ }),

/***/ "./datasource/components/services/QueryKrds.tsx":
/*!******************************************************!*\
  !*** ./datasource/components/services/QueryKrds.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_CustomIncrement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/CustomIncrement */ "./datasource/components/common/CustomIncrement.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__);




var FormField = _grafana_ui__WEBPACK_IMPORTED_MODULE_3__["LegacyForms"].FormField;
var krdsoption = [{
  label: "DBInstanceStatus",
  key: "DBInstanceStatus",
  tooltip: "实例状态：ACTIVE（运行中）/INVALID（请续费）"
}, {
  label: "DBInstanceType",
  key: "DBInstanceType",
  tooltip: "HRDS（高可用）,RR（只读实例）,TRDS（临时实例）,SINGLERDS(单机版)，ERDS（三节点企业版），CDS_HRDS(高可用_云盘版)、CDS_TRDS（临时云盘版）"
}, {
  label: "Keyword",
  key: "Keyword",
  tooltip: "按名称/VIP模糊过滤"
}, {
  label: "ProjectId",
  key: "ProjectId",
  tooltip: "项目制Id"
}, {
  label: "Marker",
  key: "Marker",
  tooltip: "记录开始偏移量"
}, {
  label: "MaxRecords",
  key: "MaxRecords",
  placeholder: "取值范围：1-100",
  tooltip: "每页结果中包含的最大条数"
}];
var krdsSwitchOption = [{
  label: "DBInstanceIdentifierIn",
  key: "DBInstanceIdentifierIn",
  tooltip: "实例ids"
}, {
  label: "DBInstanceNameIn",
  key: "DBInstanceNameIn",
  tooltip: "实例名称"
}, {
  label: "VipIn",
  key: "VipIn",
  tooltip: "按vip过滤"
}, {
  label: "EIPIn",
  key: "EIPIn",
  tooltip: "按eip过滤"
}, {
  label: "ExpiryDateLessThan",
  key: "ExpiryDateLessThan",
  tooltip: "按照实例过期时间过滤，取值范围：>0"
}];

var QueryKrds = function QueryKrds(_a) {
  var onChange = _a.onChange;

  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(), 2),
      krdsquery = _b[0],
      setKrds = _b[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    onChange && onChange(krdsquery);
  }, [krdsquery, onChange]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "common-content"
  }, krdsoption.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "repeat-field",
      key: item.key + index
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
      label: item.label,
      labelWidth: 10,
      inputWidth: 20,
      placeholder: (item === null || item === void 0 ? void 0 : item.placeholder) || "",
      onChange: function onChange(e) {
        return setKrds(function (state) {
          var _a;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), (_a = {}, _a[item.key] = e.target.value, _a));
        });
      },
      tooltip: (item === null || item === void 0 ? void 0 : item.tooltip) || ""
    }));
  }), krdsSwitchOption.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_CustomIncrement__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.key,
      label: item.key,
      tooltip: (item === null || item === void 0 ? void 0 : item.tooltip) || "",
      datasource: [""],
      onValueChange: function onValueChange(value) {
        return setKrds(function (state) {
          var _a;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), (_a = {}, _a[item.key] = value, _a));
        });
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (QueryKrds);

/***/ }),

/***/ "./datasource/components/services/QueryListener.tsx":
/*!**********************************************************!*\
  !*** ./datasource/components/services/QueryListener.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_SwtichIncrement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/SwtichIncrement */ "./datasource/components/common/SwtichIncrement.tsx");
/* harmony import */ var _common_CustomIncrement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/CustomIncrement */ "./datasource/components/common/CustomIncrement.tsx");






var QueryListener = function QueryListener(_a) {
  var onChange = _a.onChange;

  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), 2),
      filterState = _b[0],
      setFilterState = _b[1];

  var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}), 2),
      listenquery = _c[0],
      setListenQuery = _c[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    onChange && onChange(listenquery);
  }, [listenquery, onChange]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "common-content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_SwtichIncrement__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "ListenerId",
    tooltip: "\u76D1\u542C\u5668\u7684ID",
    datasource: [""],
    onChange: function onChange(value) {
      return setListenQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          ListenerId: value
        });
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineLabel"], {
    width: 24
  }, "Filter"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineSwitch"], {
    value: filterState,
    onChange: function onChange(v) {
      setFilterState(v.target.checked);

      if (!v.target.checked) {
        setListenQuery(function (state) {
          var _a;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), (_a = {}, _a["load-balancer-id"] = "", _a));
        });
      }
    }
  })), filterState ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_CustomIncrement__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "load-balancer-id",
    tooltip: "\u8D1F\u8F7D\u5747\u8861\u7684ID",
    datasource: [""],
    onValueChange: function onValueChange(value) {
      var Filter = (listenquery === null || listenquery === void 0 ? void 0 : listenquery.Filter) || {};
      Filter["load-balancer-id"] = value;
      setListenQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          Filter: Filter
        });
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_CustomIncrement__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "certificate-id",
    tooltip: "\u8BC1\u4E66\u7684ID",
    datasource: [""],
    onValueChange: function onValueChange(value) {
      var Filter = (listenquery === null || listenquery === void 0 ? void 0 : listenquery.Filter) || {};
      Filter["certificate-id"] = value;
      setListenQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          Filter: Filter
        });
      });
    }
  })) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (QueryListener);

/***/ }),

/***/ "./datasource/components/services/QueryNat.tsx":
/*!*****************************************************!*\
  !*** ./datasource/components/services/QueryNat.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_SwtichIncrement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/SwtichIncrement */ "./datasource/components/common/SwtichIncrement.tsx");
/* harmony import */ var _common_CustomIncrement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/CustomIncrement */ "./datasource/components/common/CustomIncrement.tsx");






var QueryNat = function QueryNat(_a) {
  var onChange = _a.onChange;

  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), 2),
      filterState = _b[0],
      setFilterState = _b[1];

  var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}), 2),
      natQuery = _c[0],
      setNatQuery = _c[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    onChange && onChange(natQuery);
  }, [natQuery, onChange]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "common-content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_SwtichIncrement__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "NatId",
    tooltip: "\u67E5\u8BE2region\u4E0B\u6240\u6709\u7684NAT\u4FE1\u606F",
    datasource: [""],
    onChange: function onChange(value) {
      return setNatQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          NatId: value
        });
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_SwtichIncrement__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "ProjectId",
    tooltip: "\u67E5\u8BE2\u9ED8\u8BA4\u9879\u76EE\u4E0B\u6240\u6709\u7684 NAT \u4FE1\u606F",
    datasource: [""],
    onChange: function onChange(value) {
      return setNatQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          ProjectId: value
        });
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineField"], {
    labelWidth: 24,
    label: "Filter"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineSwitch"], {
    value: filterState,
    onChange: function onChange(v) {
      setFilterState(v.target.checked);

      if (!v.target.checked) {
        setNatQuery(function (state) {
          var _a;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), (_a = {}, _a["vpc-id"] = "", _a));
        });
      }
    }
  })), filterState ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_CustomIncrement__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "vpc-id",
    tooltip: "VPC\u7684ID",
    datasource: [""],
    onValueChange: function onValueChange(value) {
      var Filter = (natQuery === null || natQuery === void 0 ? void 0 : natQuery.Filter) || {};
      Filter["vpc-id"] = value;
      setNatQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          Filter: Filter
        });
      });
    }
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (QueryNat);

/***/ }),

/***/ "./datasource/components/services/QueryPGS.tsx":
/*!*****************************************************!*\
  !*** ./datasource/components/services/QueryPGS.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_CustomIncrement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/CustomIncrement */ "./datasource/components/common/CustomIncrement.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__);




var FormField = _grafana_ui__WEBPACK_IMPORTED_MODULE_3__["LegacyForms"].FormField;
var pgsoption = [{
  label: "DBInstanceIdentifier",
  key: "DBInstanceIdentifier",
  tooltip: "实例id 传入实例ID，获取的是该实例的详情，否则则获取list"
}, {
  label: "DBInstanceStatus",
  key: "DBInstanceStatus",
  tooltip: "按实例状态过滤 ACTIVE（运行中）、INVALID（请续费）"
}, {
  label: "GroupId",
  key: "GroupId",
  tooltip: "实例分组id"
}, {
  label: "DBInstanceType",
  key: "DBInstanceType",
  tooltip: "取值范围: HRDS_PG高可用实例  TRDS_PG临时实例  RR_PG只读实例"
}, {
  label: "Keyword",
  key: "Keyword",
  tooltip: "按单个名称/单个VIP模糊过滤"
}, {
  label: "ProjectId",
  key: "ProjectId",
  tooltip: "默认值为所有项目"
}, {
  label: "Marker",
  key: "Marker",
  tooltip: "记录开始偏移量"
}, {
  label: "MaxRecords",
  key: "MaxRecords",
  tooltip: "每页结果中包含的最大条数",
  placeholder: "取值范围：1-100"
}, {
  label: "ExpiryDateLessThan",
  key: "ExpiryDateLessThan",
  tooltip: "按照实例过期时间过滤",
  placeholder: "取值范围>0"
}, {
  label: "Order",
  key: "Order",
  tooltip: "区分大小写，取值范围：DEFAULT（默认排序方式），GROUP（按复制组排序，会把只读实例排在所属主实例的后面）"
}];
var pgsSwitchOption = [{
  label: "DBInstanceIdentifierIn",
  key: "DBInstanceIdentifierIn",
  tooltip: "实例id列表"
}, {
  label: "DBInstanceNameIn",
  key: "DBInstanceNameIn",
  tooltip: "实例名称列表,支持模糊查询"
}, {
  label: "VipIn",
  key: "VipIn",
  tooltip: "vip列表"
}];

var QueryPGS = function QueryPGS(_a) {
  var onChange = _a.onChange;

  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(), 2),
      pgsquery = _b[0],
      setPgs = _b[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    onChange && onChange(pgsquery);
  }, [pgsquery, onChange]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "common-content"
  }, pgsoption.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "repeat-field",
      key: item.key + index
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
      label: item.label,
      labelWidth: 10,
      inputWidth: 20,
      placeholder: (item === null || item === void 0 ? void 0 : item.placeholder) || "",
      onChange: function onChange(e) {
        return setPgs(function (state) {
          var _a;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), (_a = {}, _a[item.key] = e.target.value, _a));
        });
      },
      tooltip: (item === null || item === void 0 ? void 0 : item.tooltip) || ""
    }));
  }), pgsSwitchOption.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_CustomIncrement__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.key,
      label: item.key,
      tooltip: (item === null || item === void 0 ? void 0 : item.tooltip) || "",
      datasource: [""],
      onValueChange: function onValueChange(value) {
        return setPgs(function (state) {
          var _a;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), (_a = {}, _a[item.key] = value, _a));
        });
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (QueryPGS);

/***/ }),

/***/ "./datasource/components/services/QueryPeering.tsx":
/*!*********************************************************!*\
  !*** ./datasource/components/services/QueryPeering.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_SwtichIncrement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/SwtichIncrement */ "./datasource/components/common/SwtichIncrement.tsx");
/* harmony import */ var _common_CustomIncrement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/CustomIncrement */ "./datasource/components/common/CustomIncrement.tsx");





var FormField = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"].FormField;

var QueryPeering = function QueryPeering(_a) {
  var onChange = _a.onChange;

  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), 2),
      filterState = _b[0],
      setFilterState = _b[1];

  var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}), 2),
      peeringquery = _c[0],
      setPeerQuery = _c[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    onChange && onChange(peeringquery);
  }, [peeringquery, onChange]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "common-content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-field"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
    tooltip: "\u5355\u6B21\u8C03\u7528\u53EF\u8FD4\u56DE\u7684\u6700\u5927\u6761\u76EE\u6570\u91CF. \u4F20\u5165\u8FD4\u56DE\u7684 NextToken \u503C\u53EF\u4EE5\u83B7\u53D6\u5269\u4F59\u7684\u5176\u5B83\u6761\u76EE. \u8FD9\u4E2A\u503C\u53EF\u4EE5\u5141\u8BB8\u7684\u8303\u56F4\u662F 5 - 1000",
    label: "MaxResults",
    labelWidth: 10,
    inputWidth: 20,
    placeholder: "\u53EF\u8F93\u5165\u503C\u8303\u56F4\uFF1A5~1000",
    onChange: function onChange(e) {
      return setPeerQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          MaxResults: e.target.value
        });
      });
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-field"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
    tooltip: "\u83B7\u53D6\u53E6\u4E00\u9875\u8FD4\u56DE\u7ED3\u679C\u7684 token",
    label: "NextToken",
    labelWidth: 10,
    inputWidth: 20,
    placeholder: "NextToken",
    onChange: function onChange(e) {
      return setPeerQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          NextToken: e.target.value
        });
      });
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_SwtichIncrement__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "ProjectId",
    tooltip: "\u76D1\u542C\u5668\u7684ID",
    datasource: [""],
    onChange: function onChange(value) {
      return setPeerQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          ProjectId: value
        });
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_SwtichIncrement__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "VpcPeeringConnectionId",
    tooltip: "\u76D1\u542C\u5668\u7684ID",
    datasource: [""],
    onChange: function onChange(value) {
      return setPeerQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          VpcPeeringConnectionId: value
        });
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineLabel"], {
    width: 24
  }, "Filter"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineSwitch"], {
    value: filterState,
    onChange: function onChange(v) {
      setFilterState(v.target.checked);

      if (!v.target.checked) {
        setPeerQuery(function (state) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
            Filter: {}
          });
        });
      }
    }
  })), filterState ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_CustomIncrement__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "vpc-id",
    tooltip: "\u9700\u8981\u67E5\u8BE2\u7684\u53D1\u8D77\u7AEFVPC\u7684ID",
    datasource: [""],
    onValueChange: function onValueChange(value) {
      var Filter = (peeringquery === null || peeringquery === void 0 ? void 0 : peeringquery.Filter) || {};
      Filter["vpc-id"] = value;
      setPeerQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          Filter: Filter
        });
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_CustomIncrement__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "accept-vpc-id",
    tooltip: "\u9700\u8981\u67E5\u8BE2\u7684\u63A5\u53D7\u7AEFVPC\u7684ID",
    datasource: [""],
    onValueChange: function onValueChange(value) {
      var Filter = (peeringquery === null || peeringquery === void 0 ? void 0 : peeringquery.Filter) || {};
      Filter["accept-vpc-id"] = value;
      setPeerQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          Filter: Filter
        });
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_CustomIncrement__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "state",
    tooltip: "peering\u7684\u72B6\u6001\uFF0C\u7533\u8BF7\u4E2D\uFF08pending-acceptance\uFF09\u72B6\u6001\u7684\u53EA\u80FD\u7531\u53D1\u8D77\u7AEF\u5220\u9664\uFF0C\u5DF2\u8FDE\u63A5\uFF08active \uFF09\u72B6\u6001\u7684\u53D1\u8D77\u7AEF\u548C\u63A5\u53D7\u7AEF\u90FD\u53EF\u4EE5\u5220\u9664\uFF0C\u5DF2\u62D2\u7EDD\uFF08rejected \uFF09\uFF0C\u8FDE\u63A5\u5931\u8D25\uFF08failed \uFF09\u662F\u5BF9\u7AEF\u7F51\u6BB5\u91CD\u590D\u6216\u5176\u4ED6\u5F02\u5E38\u7684\u5BFC\u81F4\u5931\u8D25\u7684\u72B6\u6001\uFF0C\u5DF2\u8FC7\u671F\uFF08expired \uFF09\uFF0C\u8FDE\u63A5\u4E2D\uFF08provisioning \uFF09\u662F\u5BF9\u65B9\u5DF2\u7ECF\u63A5\u53D7\uFF0C\u5BF9\u7B49\u8FDE\u63A5\u8054\u901A\u7684\u72B6\u6001",
    datasource: [""],
    onValueChange: function onValueChange(value) {
      var Filter = (peeringquery === null || peeringquery === void 0 ? void 0 : peeringquery.Filter) || {};
      Filter["state"] = value;
      setPeerQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          Filter: Filter
        });
      });
    }
  })) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (QueryPeering);

/***/ }),

/***/ "./datasource/components/services/QuerySlb.tsx":
/*!*****************************************************!*\
  !*** ./datasource/components/services/QuerySlb.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_SwtichIncrement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/SwtichIncrement */ "./datasource/components/common/SwtichIncrement.tsx");
/* harmony import */ var _common_CustomIncrement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/CustomIncrement */ "./datasource/components/common/CustomIncrement.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__);





var FormField = _grafana_ui__WEBPACK_IMPORTED_MODULE_4__["LegacyForms"].FormField;

var QuerySlb = function QuerySlb(_a) {
  var onChange = _a.onChange;

  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), 2),
      filterState = _b[0],
      setFilterState = _b[1];

  var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(), 2),
      slbquery = _c[0],
      setSlb = _c[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    onChange && onChange(slbquery);
  }, [slbquery, onChange]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "common-content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-field"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
    tooltip: "\u8D1F\u8F7D\u5747\u8861\u7684\u72B6\u6001\uFF0C\u5DF2\u7ED1\u5B9A\uFF0C\u672A\u7ED1\u5B9A\uFF0Cassociate|disassociate",
    label: "State",
    labelWidth: 12,
    inputWidth: 20,
    placeholder: " ",
    onChange: function onChange(e) {
      return setSlb(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          State: e.target.value
        });
      });
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_SwtichIncrement__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "LoadBalancerId",
    tooltip: "\u7F3A\u7701\u5219\u63CF\u8FF0region\u4E0B\u6240\u6709\u7684\u8D1F\u8F7D\u5747\u8861\u4FE1\u606F",
    datasource: [""],
    onChange: function onChange(value) {
      return setSlb(function (state) {
        var _a;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), (_a = {}, _a["LoadBalancerId"] = value, _a));
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_SwtichIncrement__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "ProjectId",
    tooltip: "\u7F3A\u7701\u9ED8\u8BA4\u9879\u76EE",
    datasource: [""],
    onChange: function onChange(value) {
      return setSlb(function (state) {
        var _a;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), (_a = {}, _a["ProjectId"] = value, _a));
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["InlineField"], {
    labelWidth: 24,
    label: "Filter",
    tooltip: "\u6700\u591A\u53EF\u6DFB\u52A0100\u4E2A"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["InlineSwitch"], {
    value: filterState,
    onChange: function onChange(v) {
      if (!v.target.checked) {
        setSlb(function (state) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
            Filter: {}
          });
        });
      }

      setFilterState(v.target.checked);
    }
  })), filterState ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_CustomIncrement__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "vpc-id",
    tooltip: "VPC\u7684ID",
    datasource: [""],
    onValueChange: function onValueChange(value) {
      var Filter = (slbquery === null || slbquery === void 0 ? void 0 : slbquery.Filter) || {};
      Filter["vpc-id"] = value;
      setSlb(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          Filter: Filter
        });
      });
    }
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (QuerySlb);

/***/ }),

/***/ "./datasource/components/services/QueryVpc.tsx":
/*!*****************************************************!*\
  !*** ./datasource/components/services/QueryVpc.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_SwitchInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/SwitchInput */ "./datasource/components/common/SwitchInput.tsx");
/* harmony import */ var _common_CustomInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/CustomInput */ "./datasource/components/common/CustomInput.tsx");





var FormField = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"].FormField;

var QueryVpc = function QueryVpc(_a) {
  var onChange = _a.onChange;

  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}), 2),
      vpcquery = _b[0],
      setVpcQuery = _b[1];

  var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), 2),
      filterState = _c[0],
      setFilterState = _c[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    onChange && onChange(vpcquery);
  }, [vpcquery, onChange]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "common-content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-field"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
    tooltip: "\u5355\u6B21\u8C03\u7528\u53EF\u8FD4\u56DE\u7684\u6700\u5927\u6761\u76EE\u6570\u91CF. \u4F20\u5165\u8FD4\u56DE\u7684 NextToken \u503C\u53EF\u4EE5\u83B7\u53D6\u5269\u4F59\u7684\u5176\u5B83\u6761\u76EE. \u8FD9\u4E2A\u503C\u53EF\u4EE5\u5141\u8BB8\u7684\u8303\u56F4\u662F 5 - 1000",
    label: "MaxResults",
    labelWidth: 10,
    inputWidth: 20,
    placeholder: "\u53EF\u8F93\u5165\u503C\u8303\u56F4\uFF1A5~1000",
    onChange: function onChange(e) {
      return setVpcQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          MaxResults: e.target.value
        });
      });
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-field"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
    tooltip: "\u83B7\u53D6\u53E6\u4E00\u9875\u8FD4\u56DE\u7ED3\u679C\u7684 token",
    label: "NextToken",
    labelWidth: 10,
    inputWidth: 20,
    onChange: function onChange(e) {
      return setVpcQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          NextToken: e.target.value
        });
      });
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_SwitchInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "ProjectId",
    onChange: function onChange(value) {
      return setVpcQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          ProjectId: value
        });
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_SwitchInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    tooltip: "\u5BF9\u7B49\u8FDE\u63A5\u7684ID",
    label: "VpcPeeringConnectionId",
    onChange: function onChange(value) {
      return setVpcQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          VpcPeeringConnectionId: value
        });
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_SwitchInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Filter",
    onChange: function onChange(value) {
      return setVpcQuery(function (state) {
        var _a;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), (_a = {}, _a["vpc-id"] = value, _a));
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineLabel"], {
    width: 24
  }, "Filter"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineSwitch"], {
    onChange: function onChange(v) {
      if (!v.target.checked) {
        setVpcQuery(function (state) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
            Filter: {}
          });
        });
      }

      setFilterState(v.target.checked);
    }
  })), filterState ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineLabel"], {
    width: 24,
    tooltip: "\u9700\u8981\u67E5\u8BE2\u7684\u53D1\u8D77\u7AEFVPC\u7684ID"
  }, "vpc-id"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_CustomInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onChange: function onChange(value) {
      var Filter = (vpcquery === null || vpcquery === void 0 ? void 0 : vpcquery.Filter) || {};
      Filter["vpc-id"] = value;
      setVpcQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          Filter: Filter
        });
      });
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineLabel"], {
    width: 24,
    tooltip: "\u9700\u8981\u67E5\u8BE2\u7684\u63A5\u53D7\u7AEFVPC\u7684ID"
  }, "accept-vpc-id"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_CustomInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onChange: function onChange(value) {
      var Filter = (vpcquery === null || vpcquery === void 0 ? void 0 : vpcquery.Filter) || {};
      Filter["accept-vpc-id"] = value;
      setVpcQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          Filter: Filter
        });
      });
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineLabel"], {
    width: 24,
    tooltip: "peering\u7684\u72B6\u6001\uFF0C\u7533\u8BF7\u4E2D\uFF08pending-acceptance\uFF09\u72B6\u6001\u7684\u53EA\u80FD\u7531\u53D1\u8D77\u7AEF\u5220\u9664\uFF0C\u5DF2\u8FDE\u63A5\uFF08active \uFF09\u72B6\u6001\u7684\u53D1\u8D77\u7AEF\u548C\u63A5\u53D7\u7AEF\u90FD\u53EF\u4EE5\u5220\u9664\uFF0C\u5DF2\u62D2\u7EDD\uFF08rejected \uFF09\uFF0C\u8FDE\u63A5\u5931\u8D25\uFF08failed \uFF09\u662F\u5BF9\u7AEF\u7F51\u6BB5\u91CD\u590D\u6216\u5176\u4ED6\u5F02\u5E38\u7684\u5BFC\u81F4\u5931\u8D25\u7684\u72B6\u6001\uFF0C\u5DF2\u8FC7\u671F\uFF08expired \uFF09\uFF0C\u8FDE\u63A5\u4E2D\uFF08provisioning \uFF09\u662F\u5BF9\u65B9\u5DF2\u7ECF\u63A5\u53D7\uFF0C\u5BF9\u7B49\u8FDE\u63A5\u8054\u901A\u7684\u72B6\u6001"
  }, "state"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_CustomInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onChange: function onChange(value) {
      var Filter = (vpcquery === null || vpcquery === void 0 ? void 0 : vpcquery.Filter) || {};
      Filter["state"] = value;
      setVpcQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          Filter: Filter
        });
      });
    }
  }))) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (QueryVpc);

/***/ }),

/***/ "./datasource/components/services/Querykex.tsx":
/*!*****************************************************!*\
  !*** ./datasource/components/services/Querykex.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_SwtichIncrement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/SwtichIncrement */ "./datasource/components/common/SwtichIncrement.tsx");
/* harmony import */ var _common_CustomIncrement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/CustomIncrement */ "./datasource/components/common/CustomIncrement.tsx");
/* harmony import */ var _common_SwitchInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/SwitchInput */ "./datasource/components/common/SwitchInput.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);







var FormField = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"].FormField;
var filtercondition = [{
  label: "instance-id",
  key: "instance-id",
  tooltip: "实例ID"
}, {
  label: "subnet-id",
  key: "subnet-id",
  tooltip: "子网ID"
}, {
  label: "instance-name",
  key: "instance-name",
  tooltip: "实例名称"
}, {
  label: "instance-type",
  key: "instance-type",
  tooltip: "实例类型"
}, {
  label: "private-ip-address",
  key: "private-ip-address",
  tooltip: "内网IP"
}, {
  label: "image-id",
  key: "image-id",
  tooltip: "镜像ID"
}, {
  label: "ProjectId",
  key: "ProjectId",
  tooltip: "项目的ID"
}, {
  label: "charge-type",
  key: "charge-type",
  tooltip: "计费模式（Monthly（包年包月）、Daily（按量付费（按日月结））、HourlyInstantSettlement（按量付费）、Spot（竞价型实例））"
}, {
  label: "network.interface.subnet_id",
  key: "network.interface.subnet_id",
  tooltip: "网络接口关联的子网ID"
}, {
  label: "network.interface.network.interface_id",
  key: "network.interface.network.interface_id",
  tooltip: "网卡的ID"
}, {
  label: "network-interface.group-id",
  key: "network-interface.group-id",
  tooltip: "网络接口关联的安全组ID"
}, {
  label: "instance-state.name",
  key: "instance-state.name",
  tooltip: "实例状态-链接地址https://docs.ksyun.com/documents/836"
}, {
  label: "availability-zone-name",
  key: "availability-zone-name",
  tooltip: "可用区（AvailabilityZone）-链接地址https://docs.ksyun.com/documents/67"
}];

var Querykec = function Querykec(_a) {
  var onChange = _a.onChange;

  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), 2),
      filterState = _b[0],
      setFilterState = _b[1];

  var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(), 2),
      kecQuery = _c[0],
      setKecQuery = _c[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    onChange && onChange(kecQuery);
  }, [kecQuery, onChange]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "common-content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-field"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
    tooltip: "\u5355\u6B21\u8C03\u7528\u6240\u8FD4\u56DE\u7684\u6700\u5927\u5B9E\u4F8B\u6570\u76EE\uFF0C\u53EF\u8F93\u5165\u503C\u8303\u56F4\uFF1A5~1000",
    label: "MaxResults",
    labelWidth: 10,
    inputWidth: 20,
    placeholder: "\u53EF\u8F93\u5165\u503C\u8303\u56F4\uFF1A5~1000",
    onChange: function onChange(e) {
      return setKecQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          MaxResults: e.target.value
        });
      });
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-field"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
    tooltip: "\u5206\u9875\u6807\u8BC6\uFF0C\u5355\u6B21\u8C03\u7528\u672A\u8FD4\u56DE\u5168\u90E8\u5B9E\u4F8B\u65F6\uFF0C\u6807\u8BB0\u4E0B\u6B21\u8C03\u7528\u7684\u8FD4\u56DE\u503C\u7684\u8D77\u70B9\uFF0C\u9ED8\u8BA4\u503C\u662F0",
    label: "Marker",
    labelWidth: 10,
    inputWidth: 20,
    defaultValue: 0,
    placeholder: "Marker",
    onChange: function onChange(e) {
      return setKecQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          Marker: e.target.value
        });
      });
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_SwtichIncrement__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "InstanceId",
    tooltip: "\u5B9E\u4F8BID",
    datasource: [""],
    onChange: function onChange(value) {
      return setKecQuery(function (state) {
        var _a;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), (_a = {}, _a["InstanceId"] = value, _a));
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_SwtichIncrement__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "ProjectId",
    tooltip: "\u5F85\u8FD4\u56DE\u5B9E\u4F8B\u4FE1\u606F\u7684\u9879\u76EEID\u5217\u8868\uFF0C\u6700\u591A\u53EF\u6DFB\u52A0100\u4E2A\u9879\u76EE",
    datasource: [""],
    onChange: function onChange(value) {
      return setKecQuery(function (state) {
        var _a;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), (_a = {}, _a["ProjectId"] = value, _a));
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineField"], {
    labelWidth: 24,
    label: "Filter",
    tooltip: "\u6700\u591A\u53EF\u6DFB\u52A0100\u4E2A"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineSwitch"], {
    value: filterState,
    onChange: function onChange(v) {
      if (!v.target.checked) {
        setKecQuery(undefined);
      }

      setFilterState(v.target.checked);
    }
  })), filterState ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, filtercondition.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_CustomIncrement__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: item.key,
      label: item.label,
      tooltip: item.tooltip,
      datasource: [""],
      onValueChange: function onValueChange(value) {
        var Filter = (kecQuery === null || kecQuery === void 0 ? void 0 : kecQuery.Filter) || {};

        lodash__WEBPACK_IMPORTED_MODULE_6___default.a.set(Filter, [item.key], value);

        setKecQuery(function (state) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
            Filter: Filter
          });
        });
      }
    });
  })) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_SwitchInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Search",
    tooltip: "\u641C\u7D22\u6761\u4EF6\uFF0C\u6A21\u7CCA\u5339\u914D\uFF0C\u652F\u6301\u5B57\u6BB5\uFF1A\u5B9E\u4F8B\u540D\uFF08InstanceName\uFF09\u3001\u4E3B\u7F51\u5361\u79C1\u6709IP\u5730\u5740\uFF08PrivateIpAddress\uFF09",
    onChange: function onChange(value) {
      return setKecQuery(function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
          Search: value
        });
      });
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Querykec);

/***/ }),

/***/ "./datasource/components/services/index.ts":
/*!*************************************************!*\
  !*** ./datasource/components/services/index.ts ***!
  \*************************************************/
/*! exports provided: QueryIp, QueryBws, QueryEpc, QueryKcs, QueryNat, QuerySlb, QueryVpc, QueryKrds, QueryListener, QueryPeering, Querykec, QueryPGS, QueryKce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QueryIp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueryIp */ "./datasource/components/services/QueryIp.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryIp", function() { return _QueryIp__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _QueryBws__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryBws */ "./datasource/components/services/QueryBws.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryBws", function() { return _QueryBws__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _QueryEpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueryEpc */ "./datasource/components/services/QueryEpc.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryEpc", function() { return _QueryEpc__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _QueryKcs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueryKcs */ "./datasource/components/services/QueryKcs.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryKcs", function() { return _QueryKcs__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _QueryNat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QueryNat */ "./datasource/components/services/QueryNat.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryNat", function() { return _QueryNat__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _QuerySlb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./QuerySlb */ "./datasource/components/services/QuerySlb.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuerySlb", function() { return _QuerySlb__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _QueryVpc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./QueryVpc */ "./datasource/components/services/QueryVpc.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryVpc", function() { return _QueryVpc__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _QueryKrds__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./QueryKrds */ "./datasource/components/services/QueryKrds.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryKrds", function() { return _QueryKrds__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _QueryListener__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./QueryListener */ "./datasource/components/services/QueryListener.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryListener", function() { return _QueryListener__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _QueryPeering__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./QueryPeering */ "./datasource/components/services/QueryPeering.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryPeering", function() { return _QueryPeering__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _Querykex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Querykex */ "./datasource/components/services/Querykex.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Querykec", function() { return _Querykex__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _QueryPGS__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./QueryPGS */ "./datasource/components/services/QueryPGS.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryPGS", function() { return _QueryPGS__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _QueryKce__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./QueryKce */ "./datasource/components/services/QueryKce.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryKce", function() { return _QueryKce__WEBPACK_IMPORTED_MODULE_12__["default"]; });















/***/ }),

/***/ "./datasource/datasource.ts":
/*!**********************************!*\
  !*** ./datasource/datasource.ts ***!
  \**********************************/
/*! exports provided: DataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./datasource/types.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./datasource/utils/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services */ "./datasource/services/index.ts");







var moment = __webpack_require__(/*! moment */ "moment"); // quer界面需要解析的参数
// Region 区域
// Action 产品线接口参数
// ServiceName 产品线名称
// Instancealias Query变量显示别名


var filterQueryKeys = ["Region", "Action", "ServiceName", "Instancealias"]; // 生成get请求参数

var generateExtenQuery = function generateExtenQuery(queryResult) {
  var otherUrl = "";

  for (var key in queryResult) {
    if (!filterQueryKeys.includes(key)) {
      otherUrl += "&" + key + "=" + queryResult[key];
    }
  }

  return otherUrl;
}; // 生成请求实例ID


var generateInstanceIdList = function generateInstanceIdList(InstanceID) {
  var _a;

  var dealId = [];

  if ((InstanceID === null || InstanceID === void 0 ? void 0 : InstanceID.length) > 1) {
    dealId = Array.isArray(InstanceID) ? InstanceID.map(function (i) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["replaceRealValue"])(i === null || i === void 0 ? void 0 : i.value);
    }) : [];
  } else {
    dealId = Array.isArray(InstanceID) ? Object(_utils__WEBPACK_IMPORTED_MODULE_3__["replaceRealValue"])((_a = InstanceID[0]) === null || _a === void 0 ? void 0 : _a.value).split(",") : [];
  }

  dealId = dealId.filter(function (instanceItem) {
    return instanceItem && instanceItem !== "";
  });
  return dealId;
};

var DataSource =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DataSource, _super);

  function DataSource(instanceSettings, backendSrv, templateSrv) {
    var _this = _super.call(this, instanceSettings) || this;

    _this.instanceSetting = instanceSettings;
    _this.backendSrv = backendSrv;
    _this.templateSrv = templateSrv;
    _this.url = instanceSettings.url; // 代理url

    return _this;
  }

  DataSource.prototype.query = function (options) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, Promise, function () {
      var hours, range, targets, from, to, StartTime, EndTime, errorlist, requestTargets, queryResult, errorMessage;

      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            hours = 28800000;
            range = options.range, targets = options.targets;
            from = range.from.valueOf() + hours;
            to = range.to.valueOf() + hours;
            StartTime = moment.utc(from).format();
            EndTime = moment.utc(to).format();
            errorlist = [];
            requestTargets = targets.filter(function (item) {
              var _a, _b, _c;

              return Array.isArray(item === null || item === void 0 ? void 0 : item.InstanceID) && item.InstanceID.length > 0 && ((_a = item.MetricName) === null || _a === void 0 ? void 0 : _a.value) && ((_b = item.Namespace) === null || _b === void 0 ? void 0 : _b.value) && ((_c = item.Region) === null || _c === void 0 ? void 0 : _c.value) && !item.hide;
            });

            if (!requestTargets.length) {
              return [2
              /*return*/
              , {
                data: []
              }];
            }

            return [4
            /*yield*/
            , Promise.allSettled(requestTargets.map(function (item) {
              var InstanceID = item.InstanceID,
                  MetricName = item.MetricName,
                  Namespace = item.Namespace,
                  Period = item.Period,
                  Aggregate = item.Aggregate,
                  Region = item.Region;
              var NameSpace = Namespace === null || Namespace === void 0 ? void 0 : Namespace.value;
              var aggregateValues = Aggregate ? Aggregate : _types__WEBPACK_IMPORTED_MODULE_2__["defaultQuery"].Aggregate;
              var aggregates = aggregateValues.map(function (i) {
                return i.value;
              });
              var dealId = generateInstanceIdList(InstanceID);
              var dealMetricName = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["replaceRealValue"])(MetricName === null || MetricName === void 0 ? void 0 : MetricName.value);
              var dealRegion = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["replaceRealValue"])(Region.value);

              var _a = NameSpace === "KCE" ? _services__WEBPACK_IMPORTED_MODULE_5__["statisMetric"] : _services__WEBPACK_IMPORTED_MODULE_5__["statisMetricBatch"],
                  action = _a.action,
                  version = _a.version,
                  method = _a.method;

              var queryDataparams = {
                Namespace: NameSpace,
                Aggregate: (aggregates === null || aggregates === void 0 ? void 0 : aggregates.length) ? aggregates : ["Average"],
                StartTime: StartTime,
                EndTime: EndTime
              };
              if (!(dealId === null || dealId === void 0 ? void 0 : dealId.length)) return {};

              if (Period === null || Period === void 0 ? void 0 : Period.value) {
                var dealPeriod = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["replaceRealValue"])(String(Period === null || Period === void 0 ? void 0 : Period.value));

                lodash__WEBPACK_IMPORTED_MODULE_4___default.a.set(queryDataparams, "Period", Number(dealPeriod));
              }

              if (NameSpace === "KCE") {
                var extenUrl = generateExtenQuery(queryDataparams);
                return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["request"])(_this.instanceSetting, "monitor", {
                  action: action,
                  version: version,
                  extenQuery: extenUrl + "&MetricName=" + dealMetricName + "&Dimensions.0.Name=ClusterId&Dimensions.0.Value=" + dealId[0],
                  method: method,
                  region: dealRegion
                });
              } else {
                lodash__WEBPACK_IMPORTED_MODULE_4___default.a.set(queryDataparams, "Metrics", dealId.map(function (instanceItem) {
                  return {
                    InstanceID: instanceItem,
                    MetricName: dealMetricName
                  };
                }));

                return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["request"])(_this.instanceSetting, "monitor", {
                  action: action,
                  version: version,
                  postParams: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, queryDataparams),
                  method: method,
                  region: dealRegion
                });
              }
            })).then(function (res) {
              var fulfilledRes = res.filter(function (i) {
                return i.status === "fulfilled";
              });
              var result = fulfilledRes.map(function (item, index) {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;

                if (((_b = (_a = item === null || item === void 0 ? void 0 : item.value) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.errorMessage) || ((_c = item.value.data) === null || _c === void 0 ? void 0 : _c.error)) {
                  errorlist.push(((_e = (_d = item === null || item === void 0 ? void 0 : item.value) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.errorMessage) || ((_g = (_f = item.value.data) === null || _f === void 0 ? void 0 : _f.error) === null || _g === void 0 ? void 0 : _g.message));
                }

                var dealData = ((_h = item.value.data) === null || _h === void 0 ? void 0 : _h.getMetricStatisticsBatchResults) || ((_j = item.value.data) === null || _j === void 0 ? void 0 : _j.getMetricStatisticsResult);
                return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["ParseQueryResult"])(dealData, requestTargets[index]);
              });
              return {
                data: lodash__WEBPACK_IMPORTED_MODULE_4___default.a.flatten(result)
              };
            })];

          case 1:
            queryResult = _a.sent();

            if (errorlist && (errorlist === null || errorlist === void 0 ? void 0 : errorlist.length) > 0) {
              errorMessage = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.flatten(errorlist).join(",");
              Object(_utils__WEBPACK_IMPORTED_MODULE_3__["alertError"])(errorMessage);
            }

            return [2
            /*return*/
            , queryResult];
        }
      });
    });
  };

  DataSource.prototype.testDatasource = function () {
    var _a;

    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var testRegion;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , this.getRegions()];

          case 1:
            testRegion = _b.sent();

            if ((testRegion === null || testRegion === void 0 ? void 0 : testRegion.status) === 200) {
              return [2
              /*return*/
              , {
                status: "success",
                message: "test success"
              }];
            } else {
              return [2
              /*return*/
              , {
                status: "error",
                message: "\u6570\u636E\u6E90\u6D4B\u8BD5\u5931\u8D25" + ((_a = testRegion === null || testRegion === void 0 ? void 0 : testRegion.data) === null || _a === void 0 ? void 0 : _a.Error.Message)
              }];
            }

            return [2
            /*return*/
            ];
        }
      });
    });
  }; // 自定义变量回调函数


  DataSource.prototype.metricFindQuery = function (query, options) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, Promise, function () {
      var queryResult, Region, Action, _a, Instancealias, ServiceName, service, currentMap, proxyKey, doQueryResult, resList, dealResList;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
        switch (_b.label) {
          case 0:
            queryResult = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["ParseMetricQuery"])(query);
            Region = queryResult.Region, Action = queryResult.Action, _a = queryResult.Instancealias, Instancealias = _a === void 0 ? undefined : _a, ServiceName = queryResult.ServiceName;
            service = _utils__WEBPACK_IMPORTED_MODULE_3__["variableConfig"][ServiceName] ? _utils__WEBPACK_IMPORTED_MODULE_3__["variableConfig"][ServiceName].service : undefined;
            currentMap = _utils__WEBPACK_IMPORTED_MODULE_3__["variableConfig"][ServiceName][Action];
            proxyKey = _utils__WEBPACK_IMPORTED_MODULE_3__["withoutRegions"].includes(service) ? Object(_utils__WEBPACK_IMPORTED_MODULE_3__["replaceRealValue"])(service) : Object(_utils__WEBPACK_IMPORTED_MODULE_3__["replaceRealValue"])(service) + "/" + Object(_utils__WEBPACK_IMPORTED_MODULE_3__["replaceRealValue"])(Region);
            return [4
            /*yield*/
            , Object(_utils__WEBPACK_IMPORTED_MODULE_3__["request"])(this.instanceSetting, proxyKey, {
              action: Action,
              version: currentMap === null || currentMap === void 0 ? void 0 : currentMap.version,
              region: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["replaceRealValue"])(Region),
              extenQuery: generateExtenQuery(queryResult)
            })];

          case 1:
            doQueryResult = _b.sent();
            resList = (doQueryResult === null || doQueryResult === void 0 ? void 0 : doQueryResult.data[currentMap === null || currentMap === void 0 ? void 0 : currentMap.getDataKey]) || [];
            dealResList = currentMap.backDataFn(resList, Instancealias);
            return [2
            /*return*/
            , dealResList];
        }
      });
    });
  };

  DataSource.prototype.getVariable = function (metric) {
    var rs = this.templateSrv.replace((metric || "").trim());
    var valStr = rs.match(/\{([\w-,]+)\}/); // 判断是否为多选

    if (valStr) {
      return valStr[1].split(",");
    }

    return rs;
  }; // 获取region


  DataSource.prototype.getRegions = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        return [2
        /*return*/
        , Object(_utils__WEBPACK_IMPORTED_MODULE_3__["request"])(this.instanceSetting, "kec", {
          action: "DescribeRegions",
          version: "2016-03-04"
        })];
      });
    });
  };

  return DataSource;
}(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["DataSourceApi"]);



/***/ }),

/***/ "./datasource/module.ts":
/*!******************************!*\
  !*** ./datasource/module.ts ***!
  \******************************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datasource */ "./datasource/datasource.ts");
/* harmony import */ var _components_query_QueryEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/query/QueryEditor */ "./datasource/components/query/QueryEditor.tsx");
/* harmony import */ var _components_config_ConfigEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/config/ConfigEditor */ "./datasource/components/config/ConfigEditor.tsx");
/* harmony import */ var _components_query_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/query/VariableQueryEditor */ "./datasource/components/query/VariableQueryEditor.tsx");





var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["DataSourcePlugin"](_datasource__WEBPACK_IMPORTED_MODULE_1__["DataSource"]).setConfigEditor(_components_config_ConfigEditor__WEBPACK_IMPORTED_MODULE_3__["default"]).setQueryEditor(_components_query_QueryEditor__WEBPACK_IMPORTED_MODULE_2__["default"]).setVariableQueryEditor(_components_query_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_4__["VariableQueryEditor"]);

/***/ }),

/***/ "./datasource/services/index.ts":
/*!**************************************!*\
  !*** ./datasource/services/index.ts ***!
  \**************************************/
/*! exports provided: searchMetricApi, statisMetricBatch, statisMetric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchMetricApi", function() { return searchMetricApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statisMetricBatch", function() { return statisMetricBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statisMetric", function() { return statisMetric; });
// 查询指标接口
var searchMetricApi = {
  action: "ListMetrics",
  version: "2010-05-25"
}; // 批量查询图表数据接口

var statisMetricBatch = {
  action: "GetMetricStatisticsBatch",
  version: "2018-11-14",
  method: "POST"
}; // 单条查询图表数据接口

var statisMetric = {
  action: "GetMetricStatistics",
  version: "2019-08-12",
  method: "GET"
};

/***/ }),

/***/ "./datasource/styles/common.css":
/*!**************************************!*\
  !*** ./datasource/styles/common.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--8-1!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js!./common.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/dist/cjs.js!./datasource/styles/common.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./datasource/type_monitors/index.ts":
/*!*******************************************!*\
  !*** ./datasource/type_monitors/index.ts ***!
  \*******************************************/
/*! exports provided: MonitorServices, ServiceConfig, ServiceMap, generageCheckedNamespace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorServices", function() { return MonitorServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceConfig", function() { return ServiceConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceMap", function() { return ServiceMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generageCheckedNamespace", function() { return generageCheckedNamespace; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);

 // 接口region

var regionSet = [{
  Region: "eu-east-1",
  RegionName: "俄罗斯（莫斯科）"
}, {
  Region: "cn-hongkong-2",
  RegionName: "香港"
}, {
  Region: "cn-qingdao-1",
  RegionName: "自用（青岛）"
}, {
  Region: "ap-singapore-1",
  RegionName: "新加坡"
}, {
  Region: "cn-beijing-6",
  RegionName: "华北1（北京）"
}, {
  Region: "cn-guangzhou-1",
  RegionName: "华南1（广州）"
}, {
  Region: "cn-shanghai-2",
  RegionName: "华东1（上海）"
}];
var MonitorServices = [{
  service: "kec",
  label: "云服务器(KEC)",
  namespace: "KEC",
  href: "https://www.ksyun.com/nv/product/KEC.html",
  apihref: "https://docs.ksyun.com/documents/816",
  instanceAction: "DescribeInstances"
}, {
  service: "eip",
  label: "弹性IP (EIP)",
  namespace: "EIP",
  href: "https://www.ksyun.com/nv/product/EIP.html",
  apihref: "https://docs.ksyun.com/documents/691",
  instanceAction: "DescribeAddresses"
}, {
  service: "vpc",
  label: "网络地址转换NAT",
  namespace: "NAT",
  href: "https://www.ksyun.com/nv/product/NAT.html",
  apihref: "https://docs.ksyun.com/documents/115",
  instanceAction: "DescribeNats"
}, {
  service: "kcs",
  label: "云数据库Redis",
  namespace: "KCS",
  href: "https://www.ksyun.com/nv/product/Redis.html",
  apihref: "https://docs.ksyun.com/documents/1031",
  instanceAction: "DescribeCacheClusters"
}, {
  service: "krds",
  label: "关系型数据库 (KRDS)",
  namespace: "KRDS",
  href: "https://www.ksyun.com/nv/product/KRDS.html",
  apihref: "https://docs.ksyun.com/documents/330",
  instanceAction: "DescribeDBInstances"
}, {
  service: "slb",
  label: "负载均衡（SLB）",
  namespace: "SLB",
  href: "https://www.ksyun.com/nv/product/SLB.html",
  apihref: "https://docs.ksyun.com/documents/1168",
  instanceAction: "DescribeLoadBalancers"
}, {
  service: "slb",
  label: "监听器（Listener）",
  namespace: "Listener",
  href: "https://www.ksyun.com/nv/product/SLB.html",
  apihref: "https://docs.ksyun.com/documents/1172",
  instanceAction: "DescribeListeners"
}, {
  service: "vpc",
  label: "对等连接（Peering）",
  namespace: "PEER",
  href: "https://www.ksyun.com/nv/product/Peering.html",
  apihref: "https://docs.ksyun.com/documents/2613",
  instanceAction: "DescribeVpcPeeringConnections"
}, {
  service: "bws",
  label: "共享带宽（BWS）",
  namespace: "BWS",
  apihref: "https://docs.ksyun.com/documents/432",
  instanceAction: "DescribeBandWidthShares"
}, {
  service: "epc",
  label: "裸金属服务器（EPC）",
  namespace: "EPC",
  href: "https://www.ksyun.com/nv/product/EPC.html",
  apihref: "https://docs.ksyun.com/documents/627",
  instanceAction: "DescribeEpcs"
}, {
  service: "epc",
  label: "GPU裸金属服务器(GEPC)",
  namespace: "GEPC",
  href: "https://www.ksyun.com/nv/product/GPU.html",
  apihref: "https://docs.ksyun.com/documents/627",
  instanceAction: "DescribeEpcs"
}, {
  service: "postgresql",
  label: "云数据库PostgreSQL（PGS）",
  namespace: "PGS",
  href: "https://www.ksyun.com/nv/product/PostgreSQL.html",
  apihref: "",
  instanceAction: "DescribeDBInstances"
}, {
  service: "kce",
  label: "容器引擎（KCE）",
  namespace: "KCE",
  href: "https://www.ksyun.com/nv/product/KCE.html",
  apihref: "https://docs.ksyun.com/documents/6715",
  instanceAction: "DescribeCluster"
}]; // 各个产品线请求实例配置

var serviceRegionConfig = {
  kec: {
    version: "2016-03-04",
    servicename: "kec"
  },
  eip: {
    version: "2016-03-04",
    servicename: "eip"
  },
  vpc: {
    version: "2016-03-04",
    servicename: "vpc"
  },
  kcs: {
    version: "2016-07-01",
    servicename: "kcs"
  },
  krds: {
    version: "2016-07-01",
    servicename: "krds"
  },
  slb: {
    version: "2016-03-04",
    servicename: "slb"
  },
  bws: {
    version: "2016-03-04",
    servicename: "bws"
  },
  epc: {
    version: "2015-11-01",
    servicename: "epc"
  },
  monitor: {
    version: "2010-05-25",
    servicename: "monitor"
  },
  postgresql: {
    version: "2018-12-25",
    servicename: "postgresql"
  },
  kce: {
    version: "2019-08-06",
    servicename: "kce"
  }
}; // 非region相关配置

var mormalServiceConfig = {
  kec: {
    host: "kec.api.ksyun.com",
    version: "2016-03-04",
    servicename: "kec"
  },
  monitor: {
    host: "monitor.api.ksyun.com",
    version: "2010-05-25",
    servicename: "monitor"
  },
  iam: {
    host: "iam.api.ksyun.com",
    version: "2015-11-01",
    servicename: "iam"
  }
};
/** 根据region 生成各个产品线相关host 配置 */

var generageServiceConfig = function generageServiceConfig(defaultConfig, normalConfig) {
  var dealObj = {};

  var _loop_1 = function _loop_1(key) {
    var defaultItem = defaultConfig[key];
    regionSet.forEach(function (region) {
      lodash__WEBPACK_IMPORTED_MODULE_1___default.a.set(dealObj, key + "/" + region.Region, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultItem), {
        host: key + "." + region.Region + ".api.ksyun.com"
      }));
    });
  };

  for (var key in defaultConfig) {
    _loop_1(key);
  }

  return Object.assign(dealObj, mormalServiceConfig);
};

var ServiceConfig = generageServiceConfig(serviceRegionConfig, mormalServiceConfig);
var ServiceMap = new Map(Object.entries(ServiceConfig)); // 获取设置的service，生成namespace

var generageCheckedNamespace = function generageCheckedNamespace(datasource) {
  var service = datasource.instanceSetting.jsonData.service;
  var serviceMap = new Map(Object.entries(service || {}));
  return MonitorServices.filter(function (el) {
    return serviceMap.has(el.namespace);
  }).map(function (item) {
    return {
      label: item.label,
      value: item.namespace,
      service: item.service,
      href: item.href
    };
  });
};

/***/ }),

/***/ "./datasource/types.ts":
/*!*****************************!*\
  !*** ./datasource/types.ts ***!
  \*****************************/
/*! exports provided: defaultQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultQuery", function() { return defaultQuery; });
var defaultQuery = {
  Period: {
    label: 60,
    value: 60
  },
  Aggregate: [{
    label: "均值",
    value: "Average"
  }],
  InstanceType: {
    value: "InstanceId",
    label: "As InstanceId"
  }
};

/***/ }),

/***/ "./datasource/utils/common.ts":
/*!************************************!*\
  !*** ./datasource/utils/common.ts ***!
  \************************************/
/*! exports provided: withoutIpServices, GenerageInstanceOptions, InstanceMapByservice, generatePeriodOptions, InstanceTypes, ClusterTypes, ParseQueryResult, generageMetricOptions, dealQueryFilter, ParseMetricQuery, replaceRealValue, alertError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withoutIpServices", function() { return withoutIpServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerageInstanceOptions", function() { return GenerageInstanceOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstanceMapByservice", function() { return InstanceMapByservice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePeriodOptions", function() { return generatePeriodOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstanceTypes", function() { return InstanceTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterTypes", function() { return ClusterTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParseQueryResult", function() { return ParseQueryResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generageMetricOptions", function() { return generageMetricOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dealQueryFilter", function() { return dealQueryFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParseMetricQuery", function() { return ParseMetricQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceRealValue", function() { return replaceRealValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alertError", function() { return alertError; });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



var events = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__["getAppEvents"])();
var withoutIpServices = ["Listener", "PEER", "BWS"];
/**实例配置 */

var config = {
  KEC: {
    InstanceId: "InstanceId",
    InstanceName: "InstanceName",
    InstanceIp: "PrivateIpAddress"
  },
  EIP: {
    InstanceId: "AllocationId",
    InstanceName: "PublicIp",
    InstanceIp: "PublicIp"
  },
  KCS: {
    InstanceId: "cacheId",
    InstanceName: "name",
    InstanceIp: "vip"
  },
  NAT: {
    InstanceId: "NatId",
    InstanceName: "NatName",
    InstanceIp: "NatIpSet[0].NatIp"
  },
  PEER: {
    InstanceId: "VpcPeeringConnectionId",
    InstanceName: "PeeringName",
    InstanceIp: "VpcPeeringConnectionId"
  },
  KRDS: {
    InstanceId: "DBInstanceIdentifier",
    InstanceName: "DBInstanceName",
    InstanceIp: "Vip"
  },
  SLB: {
    InstanceId: "LoadBalancerId",
    InstanceName: "LoadBalancerName",
    InstanceIp: "PublicIp"
  },
  Listener: {
    InstanceId: "ListenerId",
    InstanceName: "ListenerName",
    InstanceIp: "PublicIp"
  },
  BWS: {
    InstanceId: "BandWidthShareId",
    InstanceName: "BandWidthShareName",
    InstanceIp: "PublicIp"
  },
  EPC: {
    InstanceId: "HostId",
    InstanceName: "HostName",
    InstanceIp: "NetworkInterfaceAttributeSet[0].PrivateIpAddress"
  },
  PGS: {
    InstanceId: "DBInstanceIdentifier",
    InstanceName: "DBInstanceName",
    InstanceIp: "Vip"
  },
  KCE: {
    InstanceId: "ClusterId",
    InstanceName: "ClusterName",
    InstanceIp: "PrivateIpAddress"
  }
}; // 处理不同类型service生成instance options

var GenerageInstanceOptions = {
  KEC: {
    options: function options(data, instanceType) {
      return data === null || data === void 0 ? void 0 : data.InstancesSet.map(function (item) {
        return {
          label: item[config.KEC[instanceType]],
          value: item["InstanceId"]
        };
      });
    }
  },
  EIP: {
    options: function options(data, instanceType) {
      return data === null || data === void 0 ? void 0 : data.AddressesSet.map(function (item) {
        return {
          label: item[config.EIP[instanceType]],
          value: item["AllocationId"]
        };
      });
    }
  },
  KCS: {
    options: function options(data, instanceType) {
      var _a;

      return (_a = data === null || data === void 0 ? void 0 : data.Data) === null || _a === void 0 ? void 0 : _a.list.map(function (item) {
        return {
          label: item[config.KCS[instanceType]],
          value: item["cacheId"]
        };
      });
    }
  },
  NAT: {
    options: function options(data, instanceType) {
      return data === null || data === void 0 ? void 0 : data.NatSet.map(function (item) {
        return {
          label: instanceType === "InstanceIp" ? item === null || item === void 0 ? void 0 : item.NatIpSet[0].NatIp : item[config.NAT[instanceType]],
          value: item["NatId"]
        };
      });
    }
  },
  PEER: {
    options: function options(data, instanceType) {
      return data === null || data === void 0 ? void 0 : data.VpcPeeringConnectionSet.map(function (item) {
        return {
          label: item[config.PEER[instanceType]],
          value: item["VpcPeeringConnectionId"]
        };
      });
    }
  },
  KRDS: {
    options: function options(data, instanceType) {
      var _a;

      return (_a = data === null || data === void 0 ? void 0 : data.Data) === null || _a === void 0 ? void 0 : _a.Instances.map(function (item) {
        return {
          label: item[config.KRDS[instanceType]],
          value: item["DBInstanceIdentifier"]
        };
      });
    }
  },
  SLB: {
    options: function options(data, instanceType) {
      return data === null || data === void 0 ? void 0 : data.LoadBalancerDescriptions.map(function (item) {
        return {
          label: item[config.SLB[instanceType]],
          value: item["LoadBalancerId"]
        };
      });
    }
  },
  Listener: {
    options: function options(data, instanceType) {
      return data === null || data === void 0 ? void 0 : data.ListenerSet.map(function (item) {
        return {
          label: item[config.Listener[instanceType]],
          value: item["ListenerId"]
        };
      });
    }
  },
  BWS: {
    options: function options(data, instanceType) {
      return data === null || data === void 0 ? void 0 : data.BandWidthShareSet.map(function (item) {
        return {
          label: item[config.BWS[instanceType]],
          value: item["BandWidthShareId"]
        };
      });
    }
  },
  EPC: {
    options: function options(data, instanceType) {
      return data === null || data === void 0 ? void 0 : data.HostSet.map(function (item) {
        return {
          label: instanceType === "InstanceIp" ? item === null || item === void 0 ? void 0 : item.NetworkInterfaceAttributeSet[0].PrivateIpAddress : item[config.EPC[instanceType]],
          value: item["HostId"]
        };
      });
    }
  },
  GEPC: {
    options: function options(data, instanceType) {
      return data === null || data === void 0 ? void 0 : data.HostSet.map(function (item) {
        return {
          label: instanceType === "InstanceIp" ? item === null || item === void 0 ? void 0 : item.NetworkInterfaceAttributeSet[0].PrivateIpAddress : item[config.EPC[instanceType]],
          value: item["HostId"]
        };
      });
    }
  },
  PGS: {
    options: function options(data, instanceType) {
      var _a;

      return (_a = data === null || data === void 0 ? void 0 : data.Data) === null || _a === void 0 ? void 0 : _a.Instances.map(function (item) {
        return {
          label: item[config.PGS[instanceType]],
          value: item["DBInstanceIdentifier"]
        };
      });
    }
  },
  KCE: {
    options: function options(data, instanceType) {
      return Array.isArray(data === null || data === void 0 ? void 0 : data.ClusterSet) ? data.ClusterSet.map(function (item) {
        return {
          label: item[config.KCE[instanceType]],
          value: item["ClusterId"]
        };
      }) : [];
    }
  }
};
var InstanceMapByservice = new Map(Object.entries(config));
/**根据当前metric interval，返回当前值到5min options */
// 修改： 设置options为60的整数倍

var generatePeriodOptions = function generatePeriodOptions(interval) {
  // let minCount = Number(interval) / 60;
  var defaultOptions = [{
    label: "实际粒度",
    value: ""
  }]; // if (minCount < 1) {
  //   defaultOptions.push({ label: Number(interval), value: Number(interval) });
  //   minCount = 1;
  // }

  for (var i = 1; i < 5; i++) {
    defaultOptions.push({
      label: i * 60,
      value: i * 60
    });
  }

  return defaultOptions;
}; // query 面板instance ID 选择类型

var InstanceTypes = [{
  value: "InstanceId",
  label: "As InstanceId"
}, {
  value: "InstanceName",
  label: "As InstanceName"
}, {
  value: "InstanceIp",
  label: "As InstanceIp"
}]; // query 面板cluster ID 选择类型

var ClusterTypes = [{
  value: "InstanceId",
  label: "As ClusterId"
}, {
  value: "InstanceName",
  label: "As ClusterName"
}];
/**
 * 获取query 变量中设置的显示text
 * @param variables query 变量数组
 * @param Instance 当前数据单条线实例id
 * @returns
 */

var getVariableItem = function getVariableItem(variables, Instance) {
  if (!variables || !(variables === null || variables === void 0 ? void 0 : variables.length)) {
    return "";
  }

  var variableString = "";
  variables.forEach(function (item) {
    var _a = item.current,
        value = _a.value,
        text = _a.text,
        options = item.options;

    if (value === Instance) {
      variableString = text;
    } else if (Array.isArray(value) && value.includes(Instance)) {
      var variableItem = options && options.find(function (vItem) {
        return vItem.value === Instance;
      });
      variableString = variableItem ? variableItem.text : "";
    }
  });
  return variableString;
}; // targets按模板处理默认规则: "tcp.count{p0=1b4aaa4d-1381-4f34-b312-ed353c6b45d9,p1=test123,p2=1b4aaa4d-1381-4f34-b312-ed353c6b45d9,agg=average}"

/**
 * 处理生成dashboard 图例显示
 * @param targetItem 查询面板参数
 * @param variables 全局变量数组
 * @param Instance 接口返回实例ID
 * @param label 接口返回实例label
 * @param aggItem 值类型
 */


var generateTarget = function generateTarget(targetItem, variables, Instance, label, aggItem) {
  var Alias = targetItem.Alias;
  var variableLabel = getVariableItem(variables, Instance); // 默认显示legend string

  var defaultLegend = label + "{" + Instance + (variableLabel ? "," + variableLabel : "") + (aggItem ? "," + aggItem : "") + "}";

  if (Alias) {
    // 解析alias 生成对应targets
    var liasName = replaceRealValue(Alias, true);
    var replaceString_1 = liasName.replace("{{agg}}", aggItem).replace("{{p0}}", Instance);

    if (variableLabel) {
      var variabelLists = variableLabel.includes(",") ? variableLabel.split(",") : [variableLabel];
      variabelLists.forEach(function (varItem, index) {
        var replaceIndexItem = "{{p" + (index + 1) + "}}";

        if (replaceString_1.includes(replaceIndexItem)) {
          replaceString_1 = replaceString_1.replace(replaceIndexItem, varItem);
        }
      });
    }

    defaultLegend = replaceString_1;
  }

  return defaultLegend;
};
/**
 * 处理对象类型数据
 */


var dealObjectItemDataPoints = function dealObjectItemDataPoints(response, aggregate, targetItem, variables) {
  var _a, _b;

  var result = [];
  var member = (_a = response === null || response === void 0 ? void 0 : response.datapoints) === null || _a === void 0 ? void 0 : _a.member;
  var label = response === null || response === void 0 ? void 0 : response.label;
  var InstanceID = ((_b = response === null || response === void 0 ? void 0 : response.datapoints) === null || _b === void 0 ? void 0 : _b.Instance) || (targetItem === null || targetItem === void 0 ? void 0 : targetItem.InstanceID[0].value);
  var Instance = replaceRealValue(InstanceID);
  aggregate.forEach(function (aggregateItem) {
    // 线值类型 min | max | average
    var aggItem = aggregateItem.toLowerCase(); // 线数据

    var pointsData = member.map(function (item) {
      return [Number(item[aggItem]), item.unixTimestamp];
    }); // 处理生成target -> dashboard 显示图例

    var targetItemText = generateTarget(targetItem, variables, Instance, label, aggItem);
    result.push({
      target: "" + targetItemText,
      datapoints: pointsData
    });
  });
  return result;
};
/**
 * 处理数组类型返回数据
 * @param response [{member: pointitem[]}]
 * @param aggregate [min, max, average]
 * @param targetItem []
 * @param variables
 * @returns 图表[]
 */


var dealArrayDataPoints = function dealArrayDataPoints(response, aggregate, targetItem, variables) {
  var result = [];
  response.forEach(function (resItem) {
    var _a = resItem.Instance,
        Instance = _a === void 0 ? "" : _a,
        _b = resItem.label,
        label = _b === void 0 ? "" : _b,
        member = resItem.datapoints.member;
    aggregate.forEach(function (aggregateItem) {
      // 线值类型 min | max | average
      var aggItem = aggregateItem.toLowerCase(); // 线数据

      var pointsData = member.map(function (item) {
        return [Number(item[aggItem]), item.unixTimestamp];
      }); // 处理生成target -> dashboard 显示图例

      var targetItemText = generateTarget(targetItem, variables, Instance, label, aggItem);
      result.push({
        target: "" + targetItemText,
        datapoints: pointsData
      });
    });
  });
  return result;
};
/**
 * 处理面板query返回数据结构,生成面板图表数据
 * @param response // 接口返回数据
 * @param targetItem
 * @returns
 */


var ParseQueryResult = function ParseQueryResult(response, targetItem) {
  var _a;

  var Aggregate = targetItem.Aggregate;
  var aggregate = Array.isArray(Aggregate) ? Aggregate.map(function (i) {
    return i.value;
  }) : ["Average"]; // 变量类型需从variable中的current 获取 text 为实际显示值

  var templateSrv = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__["getTemplateSrv"])(); // 获取所有图表变量

  var variables = templateSrv.variables;
  var result = [];

  if (Array.isArray(response) && response.length) {
    result = dealArrayDataPoints(response, aggregate, targetItem, variables);
  } else if (Array.isArray((_a = response === null || response === void 0 ? void 0 : response.datapoints) === null || _a === void 0 ? void 0 : _a.member)) {
    result = dealObjectItemDataPoints(response, aggregate, targetItem, variables);
  }

  return result;
};
/**
 * 生成指标选择维度数据
 * metricNameList：接口返回metricName列表数据
 */

var generageMetricOptions = function generageMetricOptions(metricNameList) {
  var metricMap = new Map();
  metricNameList.forEach(function (item) {
    if (item.metricName === "proc.num") {
      return;
    }

    if (item && item.metricName && !item.metricName.includes("[")) {
      return metricMap.set(item.metricName, {
        Period: item.interval,
        metricSubChose: null,
        fullName: item.metricName,
        unit: item.unit
      });
    } else if (item && item.metricName) {
      var metricMainName = item.metricName.split("[")[0];
      var subChoseArray = item.metricName.split("[")[1].split("]")[0].split(",");
      var newSetMap_1 = !metricMap.has(metricMainName) ? {
        Period: item.interval,
        fullName: item.metricName,
        unit: item.unit,
        metricSubChose: {}
      } : metricMap.get(metricMainName);

      if (subChoseArray === null || subChoseArray === void 0 ? void 0 : subChoseArray.length) {
        subChoseArray.forEach(function (el, index) {
          newSetMap_1.metricSubChose[index] = (newSetMap_1.metricSubChose[index] || []).concat([el]);
        });
      }

      metricMap.set(metricMainName, newSetMap_1);
    }

    return {};
  });
  return metricMap;
}; // /** query filter参数处理
//  * @return Filter.N.name=XXX&Filter.N.Value.Index=VVVV
//  */

var dealQueryFilter = function dealQueryFilter(filterData) {
  var Filter = "";
  var N = 1;
  Object.keys(filterData).forEach(function (filterItem, itemIndex) {
    var element = [].concat(filterData[filterItem] || []).filter(function (el) {
      return el !== "";
    });

    if (!element.length) {
      return;
    }

    Filter += "&Filter." + N + ".Name=" + filterItem;
    element.forEach(function (item, index) {
      Filter += "&Filter." + N + ".Value." + (index + 1) + "=" + item;
    });
    N += 1;
  });
  return Filter;
};
/**处理解析Query */

function ParseMetricQuery(query) {
  if (query === void 0) {
    query = "";
  }

  if (!query) {
    return {};
  }

  var result = {};

  var queries = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.split(query, "&");

  lodash__WEBPACK_IMPORTED_MODULE_2___default.a.forEach(queries, function (item) {
    var str = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.split(item, "=");

    if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.trim(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(str, "0", ""))) {
      var val = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.trim(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(str, "1", ""));

      try {
        val = JSON.parse(val);
      } catch (e) {// console.log({ val });
      }

      result[lodash__WEBPACK_IMPORTED_MODULE_2___default.a.trim(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(str, "0", ""))] = val;
    }
  });

  return result;
}
/**处理变量类型数据 */

var replaceRealValue = function replaceRealValue(sourceValue, onlyString) {
  var realValue = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__["getTemplateSrv"])().replace(sourceValue); // 只获取字符串

  if (onlyString) {
    return realValue;
  } // 多选项返回多值{***,****....}，处理


  if (realValue.includes("{") && realValue.includes("}")) {
    return realValue.replace("{", "").replace("}", "");
  }

  return realValue;
};
/**处理错误信息 */

var alertError = function alertError(errorMessage, errTitle) {
  if (errTitle) {
    return events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["AppEvents"].alertError, [errTitle, errorMessage]);
  }

  return events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["AppEvents"].alertError, [errorMessage]);
};

/***/ }),

/***/ "./datasource/utils/index.ts":
/*!***********************************!*\
  !*** ./datasource/utils/index.ts ***!
  \***********************************/
/*! exports provided: withoutIpServices, GenerageInstanceOptions, InstanceMapByservice, generatePeriodOptions, InstanceTypes, ClusterTypes, ParseQueryResult, generageMetricOptions, dealQueryFilter, ParseMetricQuery, replaceRealValue, alertError, generateSignUrl, getSign, request, filterinit, filterDesc, kecReducerFn, variableConfig, withoutRegions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./datasource/utils/common.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withoutIpServices", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["withoutIpServices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenerageInstanceOptions", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["GenerageInstanceOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InstanceMapByservice", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["InstanceMapByservice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generatePeriodOptions", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["generatePeriodOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InstanceTypes", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["InstanceTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClusterTypes", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["ClusterTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParseQueryResult", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["ParseQueryResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generageMetricOptions", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["generageMetricOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dealQueryFilter", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["dealQueryFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParseMetricQuery", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["ParseMetricQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceRealValue", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["replaceRealValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alertError", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["alertError"]; });

/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ "./datasource/utils/request.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateSignUrl", function() { return _request__WEBPACK_IMPORTED_MODULE_1__["generateSignUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSign", function() { return _request__WEBPACK_IMPORTED_MODULE_1__["getSign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "request", function() { return _request__WEBPACK_IMPORTED_MODULE_1__["request"]; });

/* harmony import */ var _monitor_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monitor.reducer */ "./datasource/utils/monitor.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterinit", function() { return _monitor_reducer__WEBPACK_IMPORTED_MODULE_2__["filterinit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterDesc", function() { return _monitor_reducer__WEBPACK_IMPORTED_MODULE_2__["filterDesc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "kecReducerFn", function() { return _monitor_reducer__WEBPACK_IMPORTED_MODULE_2__["kecReducerFn"]; });

/* harmony import */ var _variableQueryConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variableQueryConfig */ "./datasource/utils/variableQueryConfig.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variableConfig", function() { return _variableQueryConfig__WEBPACK_IMPORTED_MODULE_3__["variableConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withoutRegions", function() { return _variableQueryConfig__WEBPACK_IMPORTED_MODULE_3__["withoutRegions"]; });






/***/ }),

/***/ "./datasource/utils/monitor.reducer.ts":
/*!*********************************************!*\
  !*** ./datasource/utils/monitor.reducer.ts ***!
  \*********************************************/
/*! exports provided: filterinit, filterDesc, kecReducerFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterinit", function() { return filterinit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterDesc", function() { return filterDesc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kecReducerFn", function() { return kecReducerFn; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
 // kec 初始化数据

var filterinit = {
  "instance-id": [""],
  "subnet-id": [""],
  "vpc-id": [""],
  "instance-name": [""],
  "instance-type": [""],
  "private-ip-address": [""],
  "image-id": [""],
  ProjectId: [""],
  "charge-type": [""],
  "network.interface.subnet_id": [""],
  "network.interface.network.interface_id": [""],
  "network-interface.group-id": [""],
  "instance-state.name": [""],
  "availability-zone-name": [""]
}; // kec 描述信息

var filterDesc = {
  "instance-id": "实例ID",
  "subnet-id": "子网ID",
  "vpc-id": "vpc ID",
  "instance-name": "实例名称",
  "instance-type": "实例类型",
  "private-ip-address": "内网IP",
  "image-id": "镜像ID",
  ProjectId: "所属项目",
  "charge-type": "计费模式（Monthly（包年包月）、Daily（按量付费（按日月结））、HourlyInstantSettlement（按量付费）、Spot（竞价型实例））",
  "network.interface.subnet_id": "网络接口关联的子网ID",
  "network.interface.network.interface_id": "网卡的ID",
  "network-interface.group-id": "网络接口关联的安全组ID",
  "instance-state.name": "实例状态-链接地址https://docs.ksyun.com/documents/836",
  "availability-zone-name": "可用区（AvailabilityZone）-链接地址https://docs.ksyun.com/documents/67"
};
var kecReducerFn = function kecReducerFn(state, action) {
  var _a, _b;

  var type = action.type,
      _c = action.payload,
      key = _c.key,
      value = _c.value;

  switch (type) {
    case "change":
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), (_a = {}, _a[key] = value, _a));

    case "changeFilter":
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
        Filter: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.Filter), (_b = {}, _b[key] = value, _b))
      });

    default:
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state);
  }
};

/***/ }),

/***/ "./datasource/utils/request.ts":
/*!*************************************!*\
  !*** ./datasource/utils/request.ts ***!
  \*************************************/
/*! exports provided: generateSignUrl, getSign, request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSignUrl", function() { return generateSignUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSign", function() { return getSign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _type_monitors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type_monitors */ "./datasource/type_monitors/index.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ "./datasource/utils/common.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);






var moment = __webpack_require__(/*! moment */ "moment");

var __backendSrv = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__["getBackendSrv"])(); // 根据sign_v3接口返回签名生成拼接url


var generateSignUrl = function generateSignUrl(authorization) {
  var signSplice = authorization.split(",");
  var dealUrl = "";
  signSplice.forEach(function (item, index) {
    if (index === 0) {
      item = item.split(" ");
      dealUrl += "&X-Amz-Algorithm=" + item[0];
      item = item[1];
    }

    var spliceItem = item.split("=");
    dealUrl += "&X-Amz-" + spliceItem[0].trim() + "=" + encodeURIComponent(spliceItem[1]);
  });
  return dealUrl;
};
/**获取签名请求*
 * pluginId: 当前插件ID instanceSetting中可获取
 * ServiceConfig: 各个请求对应的获取签名请求配置
 * reqParams: 具体请求接口
 * timestamp: 时间戳，与请求接口header时间获取一致
 */

var getSign = function getSign(pluginId, proxyKey, _a, timestamp) {
  var _b = _a.action,
      action = _b === void 0 ? "" : _b,
      _c = _a.version,
      version = _c === void 0 ? "" : _c,
      _d = _a.extenQuery,
      extenQuery = _d === void 0 ? "" : _d,
      _e = _a.region,
      region = _e === void 0 ? "cn-beijing-6" : _e,
      _f = _a.method,
      method = _f === void 0 ? "GET" : _f,
      _g = _a.postParams,
      postParams = _g === void 0 ? {} : _g;
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var proxyConfig, _h, host, servicename, signResult;

    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_j) {
      switch (_j.label) {
        case 0:
          proxyConfig = _type_monitors__WEBPACK_IMPORTED_MODULE_2__["ServiceMap"].get(proxyKey);
          _h = proxyConfig || {}, host = _h.host, servicename = _h.servicename;
          return [4
          /*yield*/
          , __backendSrv.datasourceRequest({
            url: "/api/datasources/" + pluginId + "/resources/sign_v3",
            method: "post",
            data: {
              Action: action,
              Version: version,
              Body: method === "POST" ? JSON.stringify(postParams) : "",
              Query: "Action=" + action + "&Version=" + version + (extenQuery ? "&" + extenQuery : ""),
              Region: region ? Object(_common__WEBPACK_IMPORTED_MODULE_3__["replaceRealValue"])(region) : "cn-beijing-6",
              Service: "" + servicename,
              Timestamp: timestamp,
              Uri: "/",
              Host: host,
              Method: method,
              Headers: {
                "content-type": "application/json" // host: host,

              }
            }
          })];

        case 1:
          signResult = _j.sent();
          return [2
          /*return*/
          , signResult || undefined];
      }
    });
  });
};
/**
 * 请求接口
 * url: 请求接口url Action & Version
 * pluginId: 插件ID， 从instance Setting获取
 * namespace: 当前services 签名接口需要相关配置
 */

var request = function request(instanceSetting, proxyKey, queryParams) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var pluginId, url, action, version, extenQuery, region, _a, method, _b, postParams, utcTime, timestamp, sign, serviceKey, dealUrl, time, dealTime, reqOptions;

    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
      switch (_c.label) {
        case 0:
          pluginId = instanceSetting.id, url = instanceSetting.url;
          action = queryParams.action, version = queryParams.version, extenQuery = queryParams.extenQuery, region = queryParams.region, _a = queryParams.method, method = _a === void 0 ? "GET" : _a, _b = queryParams.postParams, postParams = _b === void 0 ? undefined : _b;
          utcTime = moment().utc();
          timestamp = utcTime.unix();
          return [4
          /*yield*/
          , getSign(pluginId, proxyKey, {
            action: action,
            version: version,
            region: region,
            extenQuery: extenQuery,
            method: method,
            postParams: postParams
          }, timestamp)];

        case 1:
          sign = _c.sent();
          serviceKey = proxyKey;

          if (sign.data.intranet) {
            serviceKey += "-internal";
          }

          dealUrl = url + "/" + serviceKey + "?Action=" + action + "&Version=" + version + (extenQuery ? "" + extenQuery : "");
          time = utcTime.format();
          dealTime = time.replaceAll(":", "").replaceAll("-", "");
          reqOptions = {
            url: dealUrl,
            method: method,
            headers: {
              "Content-Type": "application/json",
              "X-Amz-Date": dealTime,
              Authorization: sign.data.authorization,
              Accept: "application/json"
            }
          };

          if (postParams) {
            lodash__WEBPACK_IMPORTED_MODULE_4___default.a.set(reqOptions, "data", postParams);
          }

          return [2
          /*return*/
          , new Promise(function (resolve, reject) {
            __backendSrv.datasourceRequest(reqOptions).then(function (res) {
              return resolve(res);
            })["catch"](function (err) {
              resolve(err);
            });
          })];
      }
    });
  });
};

/***/ }),

/***/ "./datasource/utils/variableQueryConfig.ts":
/*!*************************************************!*\
  !*** ./datasource/utils/variableQueryConfig.ts ***!
  \*************************************************/
/*! exports provided: variableConfig, withoutRegions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variableConfig", function() { return variableConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withoutRegions", function() { return withoutRegions; });
/**
 * 按别名显示变量
 * @param InstanceAlias 别名
 * @param data 接口返回每条数据
 * @returns 需要显示的字符串内容
 */
var generateAliasText = function generateAliasText(InstanceAlias, data) {
  if (!InstanceAlias.includes(",")) {
    return data[InstanceAlias];
  }

  var showText = "";
  var aliasNames = InstanceAlias.split(",");
  aliasNames.forEach(function (i) {
    showText += showText === "" ? data === null || data === void 0 ? void 0 : data[i] : "," + (data === null || data === void 0 ? void 0 : data[i]);
  });
  return showText;
}; // namespace 维度


var variableConfig = {
  KEC: {
    service: "kec",
    label: "云服务器KEC",
    namespace: "KEC",
    href: "https://www.ksyun.com/nv/product/KEC.html",
    instanceAction: "DescribeInstances",
    // kec 请求实例接口
    DescribeInstances: {
      getDataKey: "InstancesSet",
      version: "2016-03-04",
      backDataFn: function backDataFn(list, InstanceAlias) {
        return list.map(function (i) {
          return {
            label: i.InstanceName,
            value: i.InstanceId,
            text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.InstanceName
          };
        });
      }
    },
    // kec请求region接口
    DescribeRegions: {
      getDataKey: "RegionSet",
      version: "2016-03-04",
      backDataFn: function backDataFn(list, InstanceAlias) {
        return list.map(function (i) {
          return {
            label: i === null || i === void 0 ? void 0 : i.RegionName,
            value: i === null || i === void 0 ? void 0 : i.Region,
            text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.RegionName
          };
        });
      }
    }
  },
  EIP: {
    service: "eip",
    label: "弹性IP (EIP)",
    namespace: "EIP",
    href: "https://www.ksyun.com/nv/product/EIP.html",
    instanceAction: "DescribeAddresses",
    DescribeAddresses: {
      version: "2016-03-04",
      getDataKey: "AddressesSet",
      backDataFn: function backDataFn(list, InstanceAlias) {
        return list.map(function (i) {
          return {
            label: i.PublicIp,
            value: i.AllocationId,
            text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.PublicIp
          };
        });
      }
    }
  },
  NAT: {
    service: "vpc",
    label: "网络地址转换NAT",
    namespace: "NAT",
    href: "https://www.ksyun.com/nv/product/NAT.html",
    instanceAction: "DescribeNats",
    DescribeNats: {
      version: "2016-03-04",
      getDataKey: "NatSet",
      backDataFn: function backDataFn(list, InstanceAlias) {
        return list.map(function (i) {
          return {
            label: i.NatName,
            value: i.NatId,
            text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.NatName
          };
        });
      }
    }
  },
  KCS: {
    service: "kcs",
    namespace: "KCS",
    label: "云数据库Redis",
    href: "https://www.ksyun.com/nv/product/Redis.html",
    instanceAction: "DescribeCacheClusters",
    DescribeCacheClusters: {
      version: "2016-07-01",
      getDataKey: "Data",
      // 取值Data.list
      backDataFn: function backDataFn(Data, InstanceAlias) {
        var list = (Data === null || Data === void 0 ? void 0 : Data.list) || [];
        return list.map(function (i) {
          return {
            label: i.name,
            value: i.cacheId,
            text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.name
          };
        });
      }
    }
  },
  KRDS: {
    service: "krds",
    label: "关系型数据库 (KRDS)",
    namespace: "KRDS",
    href: "https://www.ksyun.com/nv/product/KRDS.html",
    instanceAction: "DescribeDBInstances",
    DescribeDBInstances: {
      version: "2016-07-01",
      getDataKey: "Data",
      backDataFn: function backDataFn(Data, InstanceAlias) {
        var list = (Data === null || Data === void 0 ? void 0 : Data.Instances) || [];
        return list.map(function (i) {
          return {
            label: i.DBInstanceName,
            value: i.DBInstanceIdentifier,
            text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.DBInstanceName
          };
        });
      }
    }
  },
  SLB: {
    service: "slb",
    label: "负载均衡（SLB）",
    namespace: "SLB",
    href: "https://www.ksyun.com/nv/product/SLB.html",
    instanceAction: "DescribeLoadBalancers",
    DescribeLoadBalancers: {
      version: "2016-03-04",
      getDataKey: "LoadBalancerDescriptions",
      backDataFn: function backDataFn(list, InstanceAlias) {
        return list.map(function (i) {
          return {
            label: i.LoadBalancerName,
            value: i.LoadBalancerId,
            text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.LoadBalancerName
          };
        });
      }
    }
  },
  Listener: {
    service: "slb",
    label: "监听器（Listener）",
    namespace: "Listener",
    href: "https://www.ksyun.com/nv/product/SLB.html",
    instanceAction: "DescribeListeners",
    DescribeListeners: {
      version: "2016-03-04",
      getDataKey: "ListenerSet",
      backDataFn: function backDataFn(list, InstanceAlias) {
        return list.map(function (i) {
          return {
            label: i.ListenerName,
            value: i.ListenerId,
            text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.ListenerName
          };
        });
      }
    }
  },
  PEER: {
    service: "vpc",
    label: "对等连接（Peering）",
    namespace: "PEER",
    href: "https://www.ksyun.com/nv/product/Peering.html",
    instanceAction: "DescribeVpcPeeringConnections",
    DescribeVpcPeeringConnections: {
      version: "2016-03-04",
      getDataKey: "VpcPeeringConnectionSet",
      backDataFn: function backDataFn(list, InstanceAlias) {
        return list.map(function (i) {
          return {
            label: i.PeeringName,
            value: i.VpcPeeringConnectionId,
            text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.PeeringName
          };
        });
      }
    }
  },
  BWS: {
    service: "bws",
    label: "共享带宽（BWS）",
    namespace: "BWS",
    instanceAction: "DescribeBandWidthShares",
    DescribeBandWidthShares: {
      version: "2016-03-04",
      getDataKey: "BandWidthShareSet",
      backDataFn: function backDataFn(list, InstanceAlias) {
        return list.map(function (i) {
          return {
            label: i.InstanceName,
            value: i.InstanceId,
            text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.InstanceName
          };
        });
      }
    }
  },
  EPC: {
    service: "epc",
    label: "裸金属服务器（EPC）",
    namespace: "EPC",
    href: "https://www.ksyun.com/nv/product/EPC.html",
    instanceAction: "DescribeEpcs",
    DescribeEpcs: {
      version: "2015-11-01",
      getDataKey: "HostSet",
      backDataFn: function backDataFn(list, InstanceAlias) {
        return list.map(function (i) {
          return {
            label: i.HostName,
            value: i.HostId,
            text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.HostName
          };
        });
      }
    }
  },
  MONITOR: {
    service: "monitor",
    label: "GPU裸金属服务器(GEPC)",
    instanceAction: "DescribeEpcs",
    ListMetrics: {
      version: "2010-05-25",
      getDataKey: "listMetricsResult",
      backDataFn: function backDataFn(Data, InstanceAlias) {
        var metricList = Data.metrics.member;
        return metricList.map(function (i) {
          return {
            label: i.metricName,
            value: i.metricName,
            text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.metricName
          };
        });
      }
    }
  },
  IAM: {
    service: "iam",
    label: "",
    instanceAction: "GetAccountAllProjectList",
    GetAccountAllProjectList: {
      version: "2015-11-01",
      getDataKey: "ListProjectResult",
      backDataFn: function backDataFn(Data, InstanceAlias) {
        var metricList = Data.ProjectList;
        return metricList.map(function (i) {
          return {
            label: i.ProjectName,
            value: i.ProjectId,
            text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.ProjectName
          };
        });
      }
    }
  },
  PGS: {
    service: "postgresql",
    label: "云数据库PostgreSQL（PGS）",
    namespace: "PGS",
    href: "https://www.ksyun.com/nv/product/PostgreSQL.html",
    instanceAction: "DescribeDBInstances",
    DescribeDBInstances: {
      version: "2018-12-25",
      getDataKey: "Data",
      backDataFn: function backDataFn(Data, InstanceAlias) {
        var list = (Data === null || Data === void 0 ? void 0 : Data.Instances) || [];
        return list.map(function (i) {
          return {
            label: i.DBInstanceName,
            value: i.DBInstanceIdentifier,
            text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.DBInstanceName
          };
        });
      }
    }
  },
  KCE: {
    service: "kce",
    label: "容器引擎（KCE）",
    namespace: "KCE",
    href: "https://www.ksyun.com/nv/product/Kce.html",
    instanceAction: "DescribeCluster",
    DescribeCluster: {
      version: "2019-08-06",
      getDataKey: "ClusterSet",
      backDataFn: function backDataFn(ClusterSetList, InstanceAlias) {
        return ClusterSetList.map(function (i) {
          return {
            label: i.ClusterName,
            value: i.ClusterId,
            text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.ClusterName
          };
        });
      }
    }
  }
}; // without region

var withoutRegions = ["iam"];

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/runtime":
/*!***********************************!*\
  !*** external "@grafana/runtime" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_runtime__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_moment__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map