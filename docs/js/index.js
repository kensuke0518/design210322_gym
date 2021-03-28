/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function() {

eval("(function () {\n  window.addEventListener('scroll', function () {\n    var scroll = window.pageYOffset;\n    var triggerClass = document.querySelectorAll('.scroll-trigger');\n    var animateClass = 'is-show';\n\n    for (var i = 0; i < triggerClass.length; i++) {\n      var triggerTop = triggerClass[i].getBoundingClientRect().top;\n      var windowHeight = window.outerHeight;\n\n      if (scroll > triggerTop - windowHeight / 2) {\n        triggerClass[i].classList.add(animateClass);\n      }\n    }\n  });\n})();\n\nvar gnavScroll = function gnavScroll() {\n  var header = document.querySelector('.l-header');\n  var gnav = document.querySelector('.l-gnav');\n  var headerBottom = header.getBoundingClientRect().bottom;\n  var gnavHeight = gnav.clientHeight;\n  var headerScrollBottom = window.pageYOffset + headerBottom;\n\n  var headerPosition = function headerPosition() {\n    var scroll = window.pageYOffset;\n\n    if (scroll >= headerScrollBottom) {\n      gnav.style.position = 'fixed';\n      gnav.style.top = 0;\n      header.style.paddingBottom = gnavHeight + 'px';\n    } else {\n      gnav.style.position = '';\n      gnav.style.top = '';\n      header.style.paddingBottom = '';\n    }\n  };\n\n  window.addEventListener('scroll', function () {\n    return headerPosition();\n  });\n};\n\ngnavScroll();\n\n//# sourceURL=webpack://portfolioModules/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"]();
/******/ 	
/******/ })()
;