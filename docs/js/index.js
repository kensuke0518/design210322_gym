/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/gnavFunc.js":
/*!****************************!*\
  !*** ./src/js/gnavFunc.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gnavFunc": function() { return /* binding */ gnavFunc; }
/* harmony export */ });


var gnavFunc = function gnavFunc() {
  var gnavOpenBtn = document.querySelector('.js-gnav-open');
  var gnav = document.querySelector('.js-gnav');
  gnavOpenBtn.addEventListener('click', function (e) {
    gnavOpenBtn.classList.toggle('is-gnav-open');
    gnav.classList.toggle('is-gnav-open');
    document.body.classList.toggle('is-gnav-open');
  });
};

/***/ }),

/***/ "./src/js/gnavScrollFunc.js":
/*!**********************************!*\
  !*** ./src/js/gnavScrollFunc.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gnavScrollFunc": function() { return /* binding */ gnavScrollFunc; }
/* harmony export */ });


var bodyWidth = document.body.clientWidth;
var mqmd = 599; //ブレークポイント

var gnavScrollFunc = function gnavScrollFunc() {
  var header = document.querySelector('.l-header');
  var gnav = document.querySelector('.l-gnav');
  var headerBottom = header.getBoundingClientRect().bottom;
  var gnavHeight = gnav.clientHeight;
  var headerScrollBottom = window.pageYOffset + headerBottom;

  var headerPosition = function headerPosition() {
    var scroll = window.pageYOffset;

    if (scroll >= headerScrollBottom) {
      gnav.style.position = 'fixed';
      gnav.style.top = 0;
      header.style.paddingBottom = gnavHeight + 'px';
    } else {
      gnav.style.position = '';
      gnav.style.top = '';
      header.style.paddingBottom = '';
    }
  };

  window.addEventListener('scroll', function () {
    return headerPosition();
  }, false);
}; //画面サイズを可変した時に再判定したい

var bodyMovin = function bodyMovin() {
  if (bodyWidth > mqmd) {
    gnavScrollFunc();
  }
};

window.onload = bodyMovin; //window.onresize = bodyMovin;

/***/ }),

/***/ "./src/js/scrollTriggerFunc.js":
/*!*************************************!*\
  !*** ./src/js/scrollTriggerFunc.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrollTriggerFunc": function() { return /* binding */ scrollTriggerFunc; }
/* harmony export */ });


var scrollTriggerFunc = function scrollTriggerFunc() {
  window.addEventListener('scroll', function () {
    var scroll = window.pageYOffset;
    var triggerClass = document.querySelectorAll('.scroll-trigger');
    var animateClass = 'is-show';

    for (var i = 0; i < triggerClass.length; i++) {
      var triggerTop = triggerClass[i].getBoundingClientRect().top;
      var windowHeight = window.outerHeight;

      if (scroll > triggerTop - windowHeight / 2) {
        triggerClass[i].classList.add(animateClass);
      }
    }
  });
};

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scrollTriggerFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollTriggerFunc */ "./src/js/scrollTriggerFunc.js");
/* harmony import */ var _gnavScrollFunc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gnavScrollFunc */ "./src/js/gnavScrollFunc.js");
/* harmony import */ var _gnavFunc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gnavFunc */ "./src/js/gnavFunc.js");





(0,_scrollTriggerFunc__WEBPACK_IMPORTED_MODULE_0__.scrollTriggerFunc)();
(0,_gnavScrollFunc__WEBPACK_IMPORTED_MODULE_1__.gnavScrollFunc)();
(0,_gnavFunc__WEBPACK_IMPORTED_MODULE_2__.gnavFunc)();
}();
/******/ })()
;
//# sourceMappingURL=index.js.map