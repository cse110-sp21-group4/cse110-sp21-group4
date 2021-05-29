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

/***/ "./js/main-page-controller.js":
/*!************************************!*\
  !*** ./js/main-page-controller.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainPageController\": () => (/* binding */ MainPageController)\n/* harmony export */ });\nclass MainPageController {\r\n  constructor(view) {\r\n    this.view = view\r\n    \r\n  \r\n  }\r\n\r\n  registerListeners() {\r\n    document.querySelector(\"#index-button\").addEventListener(\"click\", () => {\r\n      /*\r\n      var v = document.getElementById(\"left-pane\");\r\n      if (v.style.display === \"none\") {\r\n         v.style.display = \"block\";\r\n      } else {\r\n         v.style.display = \"none\";\r\n      }\r\n      */\r\n     console.log(\"hello\");\r\n\r\n    })\r\n    \r\n  }\r\n\r\n  //Example code\r\n  onTasksButtonClicked() {\r\n    console.log('Tasks button clicked...')\r\n  }\r\n\r\n\r\n\r\n}\r\n\n\n//# sourceURL=webpack://source/./js/main-page-controller.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _widgets_drag_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets/drag-view.js */ \"./js/widgets/drag-view.js\");\n/* harmony import */ var _widgets_drag_view_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_widgets_drag_view_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _main_page_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page-controller.js */ \"./js/main-page-controller.js\");\n\r\n\r\n\r\nlet page = document.createElement('drag-view')\r\n\r\ndocument.getElementsByTagName('main')[0].appendChild(page)\r\n\r\nvar toolselected = 'text'\r\n\r\nfunction openIndex() {\r\n  console.log(document.querySelector('.left-pane'))\r\n  document.querySelector('.left-pane').style.height = '100px'\r\n\r\n}\r\n\r\nfunction editPage() {\r\n  console.log('clicked on page', document.querySelector())\r\n  if (toolselected == 'text') {\r\n  }\r\n  if (toolselected == 'image') {\r\n  }\r\n}\r\n\r\n/**\r\n * Main page control\r\n */\r\nconst mainPageBody = document.querySelector('body')\r\nconst mainPageController = new _main_page_controller_js__WEBPACK_IMPORTED_MODULE_1__.MainPageController(mainPageBody)\r\n\r\nwindow.addEventListener('load', () => {\r\n   mainPageController.registerListeners();\r\n\r\n\r\n})\r\n\n\n//# sourceURL=webpack://source/./js/script.js?");

/***/ }),

/***/ "./js/widgets/drag-view.js":
/*!*********************************!*\
  !*** ./js/widgets/drag-view.js ***!
  \*********************************/
/***/ (() => {

eval("class DragView extends HTMLElement {\r\n  constructor() {\r\n    super()\r\n    const template = document.createElement('template')\r\n    template.innerHTML = `\r\n        <div class=\"drag-frame\">\r\n          <div class=\"page\" contenteditable=\"true\" onclick=editPage()>\r\n            <h1>New Notes</h1>\r\n            <ol>\r\n              <li>Notes 1</li>\r\n            </ol>\r\n            <br />\r\n            <ul>\r\n              <li>Notes 2</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        `\r\n    \r\n    // template.addEventListener('click',editPage());\r\n\r\n    const link = document.createElement('link')\r\n    link.setAttribute('rel', 'stylesheet')\r\n    link.setAttribute('href', 'style.css')\r\n\r\n    this.attachShadow({ mode: 'open' })\r\n    this.shadowRoot.appendChild(link)\r\n    this.shadowRoot.appendChild(template.content.cloneNode(true))\r\n  }\r\n}\r\n\r\ncustomElements.define('drag-view', DragView)\r\n\n\n//# sourceURL=webpack://source/./js/widgets/drag-view.js?");

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