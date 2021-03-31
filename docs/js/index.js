/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/gnavFunc.js":
/*!****************************!*\
  !*** ./src/js/gnavFunc.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gnavFunc\": function() { return /* binding */ gnavFunc; }\n/* harmony export */ });\n\n\nvar gnavFunc = function gnavFunc() {\n  var gnavOpenBtn = document.querySelector('.js-gnav-open');\n  var gnav = document.querySelector('.js-gnav');\n  gnavOpenBtn.addEventListener('click', function (e) {\n    gnavOpenBtn.classList.toggle('is-gnav-open');\n    gnav.classList.toggle('is-gnav-open');\n    document.body.classList.toggle('is-gnav-open');\n  });\n};\n\n//# sourceURL=webpack://portfolioModules/./src/js/gnavFunc.js?");

/***/ }),

/***/ "./src/js/gnavScrollFunc.js":
/*!**********************************!*\
  !*** ./src/js/gnavScrollFunc.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gnavScrollFunc\": function() { return /* binding */ gnavScrollFunc; }\n/* harmony export */ });\n\n\nvar mqmd = 599; //ブレークポイント\n\nvar gnavScrollFunc = function gnavScrollFunc() {\n  var header = document.querySelector('.l-header');\n  var gnav = document.querySelector('.l-gnav');\n  var headerBottom = header.getBoundingClientRect().bottom;\n  var headerScrollBottom = window.pageYOffset + headerBottom;\n\n  var headerPosition = function headerPosition() {\n    var scroll = window.pageYOffset;\n    var gnavHeight = gnav.clientHeight;\n\n    if (scroll >= headerScrollBottom) {\n      gnav.style.position = 'fixed';\n      gnav.style.top = 0;\n      header.style.paddingBottom = gnavHeight + 'px';\n    } else {\n      gnav.style.position = '';\n      gnav.style.top = '';\n      header.style.paddingBottom = '';\n    }\n  };\n\n  window.addEventListener('scroll', function () {\n    var bodyWidth = document.body.clientWidth;\n\n    if (bodyWidth > mqmd) {\n      headerPosition();\n    }\n  });\n};\n\n//# sourceURL=webpack://portfolioModules/./src/js/gnavScrollFunc.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scrollTriggerFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollTriggerFunc */ \"./src/js/scrollTriggerFunc.js\");\n/* harmony import */ var _gnavScrollFunc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gnavScrollFunc */ \"./src/js/gnavScrollFunc.js\");\n/* harmony import */ var _gnavFunc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gnavFunc */ \"./src/js/gnavFunc.js\");\n\n\n\n\n\n(0,_scrollTriggerFunc__WEBPACK_IMPORTED_MODULE_0__.scrollTriggerFunc)();\n(0,_gnavScrollFunc__WEBPACK_IMPORTED_MODULE_1__.gnavScrollFunc)();\n(0,_gnavFunc__WEBPACK_IMPORTED_MODULE_2__.gnavFunc)();\n\n//# sourceURL=webpack://portfolioModules/./src/js/index.js?");

/***/ }),

/***/ "./src/js/scrollTriggerFunc.js":
/*!*************************************!*\
  !*** ./src/js/scrollTriggerFunc.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scrollTriggerFunc\": function() { return /* binding */ scrollTriggerFunc; }\n/* harmony export */ });\n\n\nvar scrollTriggerFunc = function scrollTriggerFunc() {\n  window.addEventListener('scroll', function () {\n    var scroll = window.pageYOffset;\n    var triggerClass = document.querySelectorAll('.scroll-trigger');\n    var animateClass = 'is-show';\n\n    for (var i = 0; i < triggerClass.length; i++) {\n      var triggerTop = triggerClass[i].getBoundingClientRect().top;\n      var windowHeight = window.outerHeight;\n\n      if (scroll > triggerTop - windowHeight / 2) {\n        triggerClass[i].classList.add(animateClass);\n      }\n    }\n  });\n};\n\n//# sourceURL=webpack://portfolioModules/./src/js/scrollTriggerFunc.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;