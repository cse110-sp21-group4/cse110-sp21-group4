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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainPageController\": () => (/* binding */ MainPageController)\n/* harmony export */ });\nclass MainPageController {\n  constructor(view) {\n    this.view = view\n    registerListeners()\n  }\n\n  registerListeners() {\n    document.querySelector('').addEventListener('', () => {})\n  }\n\n  //Example code\n  onTasksButtonClicked() {\n    console.log('Tasks button clicked...')\n  }\n}\n\n\n\n\n//# sourceURL=webpack://source/./js/main-page-controller.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _widgets_drag_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets/drag-view.js */ \"./js/widgets/drag-view.js\");\n/* harmony import */ var _widgets_drag_view_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_widgets_drag_view_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _main_page_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page-controller.js */ \"./js/main-page-controller.js\");\n/* harmony import */ var _widgets_toolbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets/toolbar.js */ \"./js/widgets/toolbar.js\");\n/* harmony import */ var _widgets_toolbar_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_widgets_toolbar_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nlet page = document.createElement('drag-view')\nlet toolbar = document.createElement('tool-bar')\n\ndocument.getElementsByTagName('main')[0].appendChild(page)\ndocument.getElementsByTagName('main')[0].appendChild(toolbar)\n\n\nvar toolselected = 'text'\n\nfunction openIndex() {\n  console.log(document.querySelector('.left-pane'))\n  document.querySelector('.left-pane').style.height = '100px'\n}\n\nfunction editPage() {\n  console.log('clicked on page', document.querySelector())\n  if (toolselected == 'text') {\n  }\n  if (toolselected == 'image') {\n  }\n}\n\n/**\n * Main page control\n */\nconst mainPageBody = document.querySelector('body')\nconst mainPageController = new _main_page_controller_js__WEBPACK_IMPORTED_MODULE_1__.MainPageController(mainPageBody)\n\n\n//# sourceURL=webpack://source/./js/script.js?");

/***/ }),

/***/ "./js/widgets/drag-view.js":
/*!*********************************!*\
  !*** ./js/widgets/drag-view.js ***!
  \*********************************/
/***/ (() => {

eval("class DragView extends HTMLElement {\n  constructor() {\n    super()\n    console.log('toolbar constr called')\n    const template = document.createElement('template')\n    template.innerHTML = `\n        <div class=\"drag-frame\">\n          <div class=\"page\" contenteditable=\"true\" onclick=editPage()>\n            <h1>New Notes</h1>\n            <ol>\n              <li>Notes 1</li>\n            </ol>\n            <br />\n            <ul>\n              <li>Notes 2</li>\n            </ul>\n          </div>\n        </div>\n        `\n\n    // template.addEventListener('click',editPage());\n\n    const link = document.createElement('link')\n    link.setAttribute('rel', 'stylesheet')\n    link.setAttribute('href', 'style.css')\n\n    this.attachShadow({ mode: 'open' })\n    this.shadowRoot.appendChild(link)\n    this.shadowRoot.appendChild(template.content.cloneNode(true))\n  }\n}\n\ncustomElements.define('drag-view', DragView)\n\n\n//# sourceURL=webpack://source/./js/widgets/drag-view.js?");

/***/ }),

/***/ "./js/widgets/toolbar.js":
/*!*******************************!*\
  !*** ./js/widgets/toolbar.js ***!
  \*******************************/
/***/ (() => {

eval("class ToolBar extends HTMLElement {\n  constructor() {\n    super()\n    console.log('toolbar constr called')\n    const template = document.createElement('template')\n    template.innerHTML = `\n\n        <div class=\"tool-bar\">\n          <div class=\"tool\" id=\"text\">\n            <svg class=\"icon-text\" viewBox=\"0 0 36 36\">\n              <path id=\"icon-text\" d=\"M 0 0 L 0 9 L 2.25 9 C 2.25 6.525000095367432 4.275000095367432 4.5 6.75 4.5 L 13.5 4.5 L 13.5 29.25 C 13.5 30.51000022888184 12.51000022888184 31.5 11.25 31.5 L 9 31.5 L 9 36 L 27 36 L 27 31.5 L 24.75 31.5 C 23.48999977111816 31.5 22.5 30.51000022888184 22.5 29.25 L 22.5 4.5 L 29.25 4.5 C 31.72500038146973 4.5 33.75 6.525000095367432 33.75 9 L 36 9 L 36 0 L 0 0 Z\">\n              </path>\n\t          </svg>\n          </div>\n        </div>\n        `\n    \n    // template.addEventListener('click',editPage());\n\n    const link = document.createElement('link')\n    link.setAttribute('rel', 'stylesheet')\n    link.setAttribute('href', 'styles/toolbar.css')\n\n    this.attachShadow({ mode: 'open' })\n    this.shadowRoot.appendChild(link)\n    this.shadowRoot.appendChild(template.content.cloneNode(true))\n  }\n}\n\ncustomElements.define('tool-bar', ToolBar)\n\n\n//# sourceURL=webpack://source/./js/widgets/toolbar.js?");

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