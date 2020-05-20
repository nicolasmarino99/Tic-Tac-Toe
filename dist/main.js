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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/global.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/global.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".pulse {\\n  --color: #ef6eae;\\n  --hover: #ef8f6e;\\n}\\n\\n#game-multiplayer {\\n  background: #483e6a;\\n  background: linear-gradient(180deg, #1f0575 40%, #c34b6c 88%);\\n  height: 100%;\\n  overflow: hidden;\\n}\\n#game-multiplayer nav {\\n  display: flex;\\n  justify-content: space-between;\\n  z-index: 5;\\n  position: fixed;\\n  top: 0px;\\n  width: 100%;\\n  background: #160746;\\n  height: 4em;\\n}\\n#game-multiplayer nav button {\\n  background: none;\\n  border: none;\\n  padding: 0 30px;\\n}\\n#game-multiplayer nav h1 {\\n  display: flex;\\n  justify-content: center;\\n  color: white;\\n  font-size: 25px;\\n  font-weight: bold;\\n  background: #3d2c75;\\n  border-radius: 22px;\\n  height: 75%;\\n  margin: 8px;\\n  text-align: center;\\n  padding-top: 4px;\\n  width: 20%;\\n}\\n@media screen and (max-width: 420px) {\\n  #game-multiplayer nav h1 {\\n    width: 8em;\\n  }\\n}\\n#game-multiplayer nav h1 img {\\n  width: 15px;\\n  width: 40px;\\n  margin-right: 10px;\\n}\\n#game-multiplayer .navbar-img {\\n  width: 30px;\\n}\\n#game-multiplayer #message-box {\\n  background-color: #3d2c75;\\n  z-index: 5;\\n  position: fixed;\\n  top: 6em;\\n  left: 34%;\\n  display: flex;\\n  width: 38em;\\n  height: 3em;\\n  border-radius: 5px;\\n  border-top: 5px solid #160746;\\n  padding: 10px 20px;\\n  color: white;\\n}\\n#game-multiplayer #orange-planet {\\n  top: 12em;\\n  right: 34%;\\n  width: 803px;\\n  position: relative;\\n  filter: invert(100%) sepia(0%);\\n  border-radius: 50%;\\n}\\n@media screen and (max-width: 1000px) {\\n  #game-multiplayer #orange-planet {\\n    width: 28em;\\n    top: 19em;\\n    right: 44%;\\n  }\\n}\\n@media screen and (max-width: 420px) {\\n  #game-multiplayer #orange-planet {\\n    width: 17em;\\n    top: 16em;\\n    right: 58%;\\n  }\\n}\\n#game-multiplayer #purple-planet {\\n  top: -24em;\\n  left: 75%;\\n  width: 353px;\\n  position: relative;\\n}\\n@media screen and (max-width: 1000px) {\\n  #game-multiplayer #purple-planet {\\n    width: 17em;\\n    top: -2em;\\n    right: 58%;\\n  }\\n}\\n@media screen and (max-width: 420px) {\\n  #game-multiplayer #purple-planet {\\n    width: 8em;\\n    top: 0em;\\n    right: 0%;\\n  }\\n}\\n#game-multiplayer #aqua-planet {\\n  bottom: -31em;\\n  left: 22%;\\n  width: 653px;\\n  position: relative;\\n}\\n@media screen and (max-width: 1000px) {\\n  #game-multiplayer #aqua-planet {\\n    width: 23em;\\n    top: 6em;\\n    left: 42em;\\n  }\\n}\\n@media screen and (max-width: 420px) {\\n  #game-multiplayer #aqua-planet {\\n    width: 14em;\\n    top: 8em;\\n    left: 63%;\\n  }\\n}\\n#game-multiplayer .game-container {\\n  z-index: 5;\\n  position: fixed;\\n  top: 11em;\\n  left: 38%;\\n  display: flex;\\n  width: 30em;\\n  justify-content: space-around;\\n  text-align: center;\\n  color: white;\\n  font-weight: bold;\\n}\\n@media screen and (max-width: 1000px) {\\n  #game-multiplayer .game-container {\\n    width: 28em;\\n    top: 7em;\\n    left: 27%;\\n  }\\n}\\n@media screen and (max-width: 420px) {\\n  #game-multiplayer .game-container {\\n    width: 18em;\\n    top: 7em;\\n    left: 18%;\\n  }\\n}\\n#game-multiplayer .game-container .profile-img {\\n  border-radius: 50%;\\n  background-color: white;\\n  margin: 8px 0 10px 0;\\n}\\n@media only screen and (max-width: 420px) {\\n  #game-multiplayer .game-container .profile-img {\\n    width: 6em;\\n  }\\n}\\n#game-multiplayer .game-container .player-0,\\n#game-multiplayer .game-container .player-1 {\\n  width: 120px;\\n}\\n#game-multiplayer .game-container .player-0-img {\\n  border: 10px solid #e9488b;\\n}\\n#game-multiplayer .game-container .player-1-img {\\n  border: 10px solid #59deff;\\n}\\n#game-multiplayer .game-container .turn-marker {\\n  width: 28px;\\n}\\n#game-multiplayer .board {\\n  width: 35em;\\n  height: 22em;\\n  transform: perspective(22px) rotateX(1deg);\\n  margin: 50px;\\n  position: fixed;\\n  top: 40%;\\n  left: 34%;\\n  border-radius: 17px;\\n  border-bottom: 10px solid black;\\n}\\n@media only screen and (max-width: 1000px) {\\n  #game-multiplayer .board {\\n    width: 30em;\\n    height: 22em;\\n    left: 20%;\\n    top: 35%;\\n  }\\n}\\n@media only screen and (max-width: 420px) {\\n  #game-multiplayer .board {\\n    width: 15em;\\n    height: 13em;\\n    left: 13%;\\n  }\\n}\\n#game-multiplayer .board .grid {\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: 100%;\\n  height: 100%;\\n  height: 100%;\\n}\\n#game-multiplayer .board .grid div {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 4em;\\n  font-weight: bold;\\n  background-color: #848AC4;\\n  width: 33.3%;\\n  height: 33.3%;\\n}\\n#game-multiplayer .board .grid #grid-1,\\n#game-multiplayer .board .grid #grid-3,\\n#game-multiplayer .board .grid #grid-5,\\n#game-multiplayer .board .grid #grid-7,\\n#game-multiplayer .board .grid #grid-9 {\\n  background-color: white;\\n}\\n#game-multiplayer .board .grid #grid-0 {\\n  border-radius: 17px 0 0 0;\\n}\\n#game-multiplayer .board .grid #grid-2 {\\n  border-radius: 0 17px 0 0;\\n}\\n#game-multiplayer .board .grid #grid-6 {\\n  border-radius: 0 0 0 7px;\\n}\\n#game-multiplayer .board .grid #grid-8 {\\n  border-radius: 0 0 7px 0;\\n}\\n#game-multiplayer .score-0 {\\n  background-color: #e9488b;\\n  position: fixed;\\n  bottom: 0;\\n  left: 33%;\\n}\\n@media only screen and (max-width: 1000px) {\\n  #game-multiplayer .score-0 {\\n    left: 24%;\\n  }\\n}\\n@media only screen and (max-width: 420px) {\\n  #game-multiplayer .score-0 {\\n    left: 17%;\\n  }\\n}\\n#game-multiplayer .score-1 {\\n  background-color: #59deff;\\n  position: fixed;\\n  bottom: 0;\\n  left: 59%;\\n}\\n#game-multiplayer .score-0,\\n#game-multiplayer .score-1 {\\n  height: 42px;\\n  padding: 0 19px;\\n  border-radius: 20px 20px 0 0;\\n  color: white;\\n  font-weight: bold;\\n  display: flex;\\n  align-items: center;\\n}\\n@media only screen and (max-width: 420px) {\\n  #game-multiplayer .score-0,\\n#game-multiplayer .score-1 {\\n    width: 8em;\\n  }\\n}\\n#game-multiplayer .trophy-img {\\n  width: 20px;\\n  margin-right: 8px;\\n}\\n\\n.pulse {\\n  --color: #ef6eae;\\n  --hover: #ef8f6e;\\n}\\n\\n#menu {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100%;\\n  background: #483e6a;\\n  background: linear-gradient(180deg, #1f0575 40%, #c34b6c 88%);\\n}\\n#menu .new-game {\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n}\\n#menu .new-game #logo {\\n  z-index: 3;\\n  font-size: 100px;\\n  font-weight: bolder;\\n  line-height: 80px;\\n  color: white;\\n}\\n#menu .new-game #logo #pink-color {\\n  color: #e9488b;\\n}\\n#menu .new-game #logo #blue-color {\\n  color: #59deff;\\n}\\n#menu .new-game #menu-btns {\\n  margin-top: 4em;\\n  z-index: 3;\\n}\\n#menu .new-game #menu-btns button {\\n  padding: 0 1em;\\n  display: flex;\\n  justify-content: baseline;\\n  align-items: center;\\n  width: 70em;\\n  height: 6em;\\n  border-radius: 18px;\\n  border: none;\\n  margin-bottom: 1.5em;\\n  transition: 0.25s;\\n  -webkit-box-shadow: 0px 44px 68px -12px rgba(0, 0, 0, 0.75);\\n  -moz-box-shadow: 0px 44px 68px -12px rgba(0, 0, 0, 0.75);\\n  box-shadow: 0px 44px 68px -12px rgba(0, 0, 0, 0.75);\\n}\\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {\\n  #menu .new-game #menu-btns button {\\n    height: 5em;\\n    width: 22em;\\n  }\\n}\\n#menu .new-game #menu-btns button p {\\n  color: white;\\n  font-size: 21px;\\n  font-weight: bold;\\n  margin-left: 20px;\\n}\\n#menu .new-game #menu-btns button img {\\n  width: 50px;\\n  filter: invert(100%) sepia(0%);\\n}\\n#menu .new-game #menu-btns button:hover, #menu .new-game #menu-btns button:focus {\\n  cursor: pointer;\\n  animation: pulse 1s;\\n  box-shadow: 0 0 0 2em rgba(255, 255, 255, 0);\\n  border-color: var(--hover);\\n  color: #fff;\\n}\\n@keyframes pulse {\\n  0% {\\n    box-shadow: 0 0 0 0 var(--hover);\\n  }\\n}\\n#menu .new-game #menu-btns #multiplayer-btn {\\n  background-color: #59deff;\\n}\\n#menu .new-game #menu-btns #multiplayer-btn #logo {\\n  font-size: 21px;\\n  line-height: 23px;\\n  margin: 10px;\\n}\\n#menu .new-game #menu-btns #multiplayer-btn #logo #pink-color {\\n  color: white;\\n}\\n#menu .new-game #menu-btns #multiplayer-btn #logo #blue-color {\\n  color: white;\\n}\\n#menu .new-game #menu-btns #youvsai-btn {\\n  background-color: #e9488b;\\n}\\n#menu .new-game #menu-btns #rules-btn {\\n  background-color: #FBC625;\\n}\\n#menu #form {\\n  display: flex;\\n  justify-content: space-evenly;\\n  margin-bottom: 15px;\\n}\\n#menu #form .field {\\n  flex-direction: column;\\n  text-align: center;\\n}\\n#menu #form .field label {\\n  font-size: 20px;\\n  font-weight: bold;\\n}\\n\\n.pulse {\\n  --color: #ef6eae;\\n  --hover: #ef8f6e;\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nhtml {\\n  height: 100%;\\n  overflow-y: hidden;\\n}\\n\\nbody {\\n  height: 100%;\\n  overflow-y: hidden;\\n}\\n\\n.pink-color {\\n  color: #e9488b;\\n}\\n\\n.blue-color {\\n  color: #59deff;\\n}\\n\\n.hidden {\\n  display: none !important;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/assets/global.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/global.scss":
/*!********************************!*\
  !*** ./src/assets/global.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./global.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/global.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/assets/global.scss?");

/***/ }),

/***/ "./src/js/board.js":
/*!*************************!*\
  !*** ./src/js/board.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// eslint-disable-next-line func-names\nconst boardGame = (function () {\n  let board;\n\n  const newBoard = () => {\n    board = board == null ? new Array(9).fill(' ') : board.fill(' ');\n    return board;\n  };\n\n  const updateArray = (position, mark) => {\n    board[position] = mark;\n  };\n\n  const getBoard = () => board;\n\n  return {\n    newBoard, getBoard, updateArray,\n  };\n}());\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (boardGame);\n\n//# sourceURL=webpack:///./src/js/board.js?");

/***/ }),

/***/ "./src/js/displayModule.js":
/*!*********************************!*\
  !*** ./src/js/displayModule.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// eslint-disable-next-line func-names\nconst displayCtrl = (function () {\n  let playerName0;\n  let playerName1;\n  let gridElement;\n  let parentElement;\n\n  /* DOM selectors */\n\n  const menuContainer = document.getElementById('menu');\n  const gameMultiplayer = document.getElementById('game-multiplayer');\n\n  const setName = (name0, name1) => {\n    document.getElementById('name-0').innerHTML = name0;\n    document.getElementById('name-1').innerHTML = name1;\n  };\n\n  const displayBoard = (arr) => {\n    arr.forEach((cell, i) => {\n      gridElement = document.createElement('div');\n      parentElement = document.getElementById('grid');\n      gridElement.innerHTML = cell;\n      parentElement.appendChild(gridElement);\n      gridElement.setAttribute('id', `grid-${i}`);\n    });\n  };\n\n  const displayMessage = (type, winner) => {\n    const messageBox = document.querySelector('#message-box');\n    messageBox.classList.toggle('hidden');\n    if (type === 'turn') {\n      messageBox.textContent = 'turn.';\n    } else if (type === 'victory') {\n      messageBox.textContent = `${winner} is the winner!`;\n    } else if (type === 'draw') {\n      messageBox.textContent = 'It\\'s a draw.';\n    }\n  };\n\n  const scoreCounter = (winnerPlayer) => {\n    const score0 = document.querySelector('#score-0');\n    const score1 = document.querySelector('#score-1');\n    winnerPlayer.score += 1;\n    if (winnerPlayer.mark === 'X') {\n      score0.textContent = `${winnerPlayer.score} won matches`;\n    } else {\n      score1.textContent = `${winnerPlayer.score} won matches`;\n    }\n  };\n\n  const emptyCells = () => {\n    const cellArray = [...parentElement.children];\n    // eslint-disable-next-line no-return-assign\n    cellArray.forEach(cell => cell.textContent = ' ');\n  };\n\n  return {\n\n    toggleHidden: (element) => {\n      element.classList.toggle('hidden');\n    },\n\n    getNames: () => {\n      playerName0 = document.querySelector('[name=\"name-0\"]').value;\n      playerName1 = document.querySelector('[name=\"name-1\"]').value;\n      displayCtrl.toggleHidden(menuContainer);\n      displayCtrl.toggleHidden(gameMultiplayer);\n      setName(playerName0, playerName1);\n      return [playerName0, playerName1];\n    },\n\n    displayBoard,\n    displayMessage,\n    scoreCounter,\n    emptyCells,\n  };\n}());\n\n\n/*   ACTIONS TO BUTTONS   */\n\ndocument.getElementById('multiplayer-btn').addEventListener('click', () => {\n  displayCtrl.toggleHidden(document.getElementById('form'))();\n});\ndocument.getElementById('back').addEventListener('click', () => {\n  // eslint-disable-next-line no-alert\n  alert('To return, press F5');\n});\ndocument.getElementById('youvsai-btn').addEventListener('click', () => {\n  // eslint-disable-next-line no-alert\n  alert('Page under construction.');\n});\ndocument.getElementById('rules-btn').addEventListener('click', () => {\n  // eslint-disable-next-line no-alert\n  alert('Click on Multiplayer, fill up the form with the names of the two players and hit enter to start playing. To make the moves, click on the position in the board. To reset the game, click on the icon on the top right corner.');\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (displayCtrl);\n\n//# sourceURL=webpack:///./src/js/displayModule.js?");

/***/ }),

/***/ "./src/js/gameModule.js":
/*!******************************!*\
  !*** ./src/js/gameModule.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.js */ \"./src/js/board.js\");\n/* harmony import */ var _displayModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayModule.js */ \"./src/js/displayModule.js\");\n/* harmony import */ var _players_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./players.js */ \"./src/js/players.js\");\n/* harmony import */ var _assets_global_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/global.scss */ \"./src/assets/global.scss\");\n/* harmony import */ var _assets_global_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_global_scss__WEBPACK_IMPORTED_MODULE_3__);\n// eslint-disable-next-line import/extensions\n\n// eslint-disable-next-line import/extensions\n\n// eslint-disable-next-line import/extensions\n\n\n\n// eslint-disable-next-line func-names\nconst gameModule = (function () {\n  let player0;\n  let player1;\n  let currentPlayer;\n  let names;\n  let boardArray;\n  let gameStatus;\n  let playerMark;\n\n  const turnMarker0 = document.querySelector('.turn-0');\n  const turnMarker1 = document.querySelector('.turn-1');\n\n  const newGame = () => {\n    gameStatus = 'on';\n    if (player0 == null) {\n      player0 = Object(_players_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(names[0], 'X');\n      player1 = Object(_players_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(names[1], 'O');\n    }\n    currentPlayer = player0;\n  };\n\n  const draw = () => _board_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getBoard().every(el => el !== ' ');\n\n  // eslint-disable-next-line consistent-return\n  const victory = () => {\n    const winCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8],\n      [0, 3, 6], [1, 4, 7], [2, 5, 8],\n      [0, 4, 8], [2, 4, 6]];\n    for (let i = 0; i < winCombinations.length; i += 1) {\n      if (_board_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getBoard()[winCombinations[i][0]] === currentPlayer.mark\n            && _board_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getBoard()[winCombinations[i][1]] === currentPlayer.mark\n            && _board_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getBoard()[winCombinations[i][2]] === currentPlayer.mark) {\n        return true;\n      }\n    }\n  };\n\n  const changePlayer = () => {\n    if (gameStatus === 'on') {\n      currentPlayer = currentPlayer === player0 ? player1 : player0;\n    }\n  };\n\n  // eslint-disable-next-line consistent-return\n  const setMovement = (position) => {\n    if (_board_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getBoard()[position] === ' ' && gameStatus === 'on') {\n      playerMark = currentPlayer.mark;\n      _board_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateArray(position, playerMark);\n\n      if (victory()) {\n        gameStatus = 'victory';\n      } else if (draw()) {\n        gameStatus = 'draw';\n      }\n\n      changePlayer();\n      return playerMark;\n    }\n  };\n\n  const makeMove = () => {\n    document.getElementById('grid').addEventListener('click', () => {\n      if (gameStatus === 'on') {\n        // eslint-disable-next-line no-restricted-globals\n        const position = parseInt(event.target.id.split('-')[1], 10);\n        const mark = setMovement(position);\n\n        if (mark != null) {\n          // eslint-disable-next-line no-restricted-globals\n          event.target.textContent = mark;\n          turnMarker0.classList.toggle('hidden');\n          turnMarker1.classList.toggle('hidden');\n        }\n\n        if (gameStatus === 'victory') {\n          _displayModule_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayMessage('victory', currentPlayer.name);\n          _displayModule_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].scoreCounter(currentPlayer);\n        } else if (gameStatus === 'draw') {\n          _displayModule_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayMessage('draw', currentPlayer.name);\n        }\n      }\n    });\n  };\n\n  const gameInit = () => {\n    // eslint-disable-next-line no-restricted-globals\n    if (event.key === 'Enter') {\n      names = _displayModule_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getNames();\n      newGame();\n      boardArray = _board_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newBoard();\n      _displayModule_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayBoard(boardArray);\n      makeMove();\n    }\n  };\n\n  const cleanBoard = () => {\n    newGame(player0.name, player1.name);\n    boardArray = _board_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newBoard();\n    _displayModule_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].emptyCells();\n    _displayModule_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].toggleHidden(document.querySelector('#message-box'));\n  };\n\n  const getStatus = () => gameStatus;\n\n  const getCurrentPlayer = () => currentPlayer;\n\n  return {\n    gameInit, newGame, getStatus, getCurrentPlayer, cleanBoard,\n  };\n}());\n\ndocument.getElementById('form').addEventListener('keypress', gameModule.gameInit);\ndocument.querySelector('#replay').addEventListener('click', gameModule.cleanBoard);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameModule);\n\n//# sourceURL=webpack:///./src/js/gameModule.js?");

/***/ }),

/***/ "./src/js/players.js":
/*!***************************!*\
  !*** ./src/js/players.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst playerFactory = (name, mark, score) => {\n  score = 0;\n  return { name, mark, score };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (playerFactory);\n\n//# sourceURL=webpack:///./src/js/players.js?");

/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./src/js/gameModule.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/js/gameModule.js */\"./src/js/gameModule.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/gameModule.js?");

/***/ })

/******/ });