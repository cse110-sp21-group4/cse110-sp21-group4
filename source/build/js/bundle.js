/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _widgets_drag_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets/drag-view.js */ \"./js/widgets/drag-view.js\");\n/* harmony import */ var _widgets_drag_view_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_widgets_drag_view_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nlet page = document.createElement('drag-view')\ndocument.getElementsByTagName('main')[0].appendChild(page)\n\nvar toolselected = 'text'\n\nfunction openIndex() {\n  console.log(document.querySelector('.left-pane'))\n  document.querySelector('.left-pane').style.height = '100px'\n}\n\nfunction editPage() {\n  console.log('clicked on page', document.querySelector())\n  if (toolselected == 'text') {\n  }\n  if (toolselected == 'image') {\n  }\n}\n\n\n//# sourceURL=webpack://source/./js/script.js?");

/***/ }),

/***/ "./js/widgets/drag-view.js":
/*!*********************************!*\
  !*** ./js/widgets/drag-view.js ***!
  \*********************************/
/***/ (() => {

eval("class DragView extends HTMLElement {\n  constructor() {\n    super()\n    const template = document.createElement('template')\n    template.innerHTML = `\n        <div class=\"drag-frame\">\n          <div class=\"page\" contenteditable=\"true\" onclick=editPage()>\n            <h1>New Notes</h1>\n            <ol>\n              <li>Notes 1</li>\n            </ol>\n            <br />\n            <ul>\n              <li>Notes 2</li>\n            </ul>\n          </div>\n        </div>\n        `\n    \n    // template.addEventListener('click',editPage());\n\n    const link = document.createElement('link')\n    link.setAttribute('rel', 'stylesheet')\n    link.setAttribute('href', 'style.css')\n\n    this.attachShadow({ mode: 'open' })\n    this.shadowRoot.appendChild(link)\n    this.shadowRoot.appendChild(template.content.cloneNode(true))\n  }\n}\n\ncustomElements.define('drag-view', DragView)\n\n\n//# sourceURL=webpack://source/./js/widgets/drag-view.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;