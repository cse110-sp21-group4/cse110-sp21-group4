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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainPageController\": () => (/* binding */ MainPageController)\n/* harmony export */ });\n/* harmony import */ var _widgets_drag_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets/drag-view.js */ \"./js/widgets/drag-view.js\");\n\nclass MainPageController {\n  constructor(view) {\n    this.view = view\n  }\n\n  registerListeners() {\n    // document.querySelector('').addEventListener('', () => {})\n    console.log(\n      document.querySelector('tool-bar').shadowRoot.querySelector('#text-tool')\n    )\n    // Toolbar buttons\n    let textTool = document\n      .querySelector('tool-bar')\n      .shadowRoot.querySelector('#text-tool')\n\n    textTool.addEventListener('click', (event) => {\n      // event.target could be button/svg/path so we query again\n      if (textTool.classList.contains('selected-tool')) {\n        textTool.classList.remove('selected-tool')\n      } else {\n        let textTool = document\n      .querySelector('tool-bar')\n      .shadowRoot.querySelector('.selected-tool')\n        textTool.classList.add('selected-tool')\n      }\n\n      let dragView = document.querySelector('drag-view')\n      console.log(dragView)\n      console.log(dragView.textOnClick)\n      dragView.textOnClick = dragView.textOnClick ? false : true\n    })\n    \n\n  }\n\n  //Example code\n  onTasksButtonClicked() {\n    console.log('Tasks button clicked...')\n  }\n}\n\n\n//# sourceURL=webpack://source/./js/main-page-controller.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _widgets_drag_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets/drag-view.js */ \"./js/widgets/drag-view.js\");\n/* harmony import */ var _main_page_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page-controller.js */ \"./js/main-page-controller.js\");\n/* harmony import */ var _widgets_toolbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets/toolbar.js */ \"./js/widgets/toolbar.js\");\n/* harmony import */ var _widgets_toolbar_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_widgets_toolbar_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nlet page = document.createElement('drag-view')\nlet toolbar = document.createElement('tool-bar')\n\ndocument.getElementsByTagName('main')[0].appendChild(page)\ndocument.getElementsByTagName('main')[0].appendChild(toolbar)\n\nfunction openIndex() {\n  console.log(document.querySelector('.left-pane'))\n  document.querySelector('.left-pane').style.height = '100px'\n}\n\n/**\n * Main page control\n */\nconst mainPageBody = document.querySelector('body')\nconst mainPageController = new _main_page_controller_js__WEBPACK_IMPORTED_MODULE_1__.MainPageController(mainPageBody)\n\nwindow.addEventListener('load', () => {\n  mainPageController.registerListeners()\n})\n\n\n//# sourceURL=webpack://source/./js/script.js?");

/***/ }),

/***/ "./js/widgets/drag-view.js":
/*!*********************************!*\
  !*** ./js/widgets/drag-view.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DragView\": () => (/* binding */ DragView)\n/* harmony export */ });\n/* harmony import */ var _text_box_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-box.js */ \"./js/widgets/text-box.js\");\n\n\nclass DragView extends HTMLElement {\n  constructor() {\n    super()\n    // not sure if `toolselected` should be here or in script.js\n    // so for now Ishaan added this in both\n    var toolselected = 'text'\n\n    // not sure if `editPage()` should be here or in script.js\n    // so for now Ishaan added this in both\n    // function editPage() {\n    //   console.log('clicked on page', document.querySelector(\".page\"))\n    //   if (toolselected == 'text') {\n\n    //   }\n    //   if (toolselected == 'image') {\n    //   }\n    // }\n\n    // .drag-frame {\n    //   position:relative;\n    //   background: transparent;\n    //   border:1px solid grey;\n    //   width:100%;\n    //   height: 100%;\n    // }\n\n    const template = document.createElement('template')\n    template.innerHTML = `\n        <style>\n          \n          .drag-frame {\n            background-image: url('images/single-paper.jpg');\n            position: relative;\n            left: 250px;\n            top: 100px;\n            width: 1000px;\n            height: 1000px;\n            font-size: large;\n          \n            padding: 50px;\n            padding-left: 100px;\n          }\n          \n          .draggable {\n            display:block;\n            position:absolute;\n          }\n\n          .dragging {\n            display:none;\n          }\n          .focus {\n\n          }\n\n          .textbox {\n            resize: none;\n            padding: 5px;\n            overflow: hidden;\n            height: 20px;\n            font-size: 20px;\n            width: 200px;\n            border: none;\n          }\n\n          .bullet-square {\n            display:block;\n            position:absolute;\n            background-color: black;\n            display:block;\n            border: 1.5px solid black;\n            height: 4px;\n            width: 4px;\n          }\n\n          .bullet-circle {\n            display:block;\n            position:absolute;\n            border-radius: 50%;\n            background: transparent;\n            border: 1.5px solid black;\n            display:block;\n            height: 4px;\n            width: 4px;\n          }\n          .bullet-dot {\n            display: block;\n            position:absolute;\n            border-radius: 50%;\n            border: 1.5px solid black;\n            background-color: black;\n            display:block;\n            height: 4px;\n            width: 4px;\n          }\n\n        </style>\n        <div class=\"drag-frame\">\n        </div>\n        `\n\n    // template.addEventListener('click',editPage());\n\n    //const link = document.createElement('link')\n    //link.setAttribute('rel', 'stylesheet')\n    //link.setAttribute('href', 'style.css')\n\n    this.attachShadow({ mode: 'open' })\n    this.shadowRoot.appendChild(template.content.cloneNode(true))\n    //this.shadowRoot.appendChild(link)\n    this.initializeFields()\n    this.initializeEventListeners()\n  }\n\n  initializeEventListeners() {\n    this.draggableFrame.addEventListener('click', (e) => {\n      if (this.createTextOnClick) {\n        const framePosition = this.draggableFrame.getBoundingClientRect()\n        //console.log('frame: ' + framePosition.x + '  mouse: ' + e.clientX)\n        const textPosition = {\n          //TODO 10, 20 should be variables\n          left: e.clientX - framePosition.x - 10 + 'px',\n          top: e.clientY - framePosition.y - 20 + 'px'\n        }\n        this.addDraggableTextBox(textPosition).focus()\n      }\n    })\n    this.draggableFrame.addEventListener('mouseleave', (e) => {\n      this.textBoxes.forEach((textBox, index) => {\n        textBox.onDraggableFrameMouseOut()\n      })\n    })\n\n    this.draggableFrame.addEventListener('mouseenter', (e) => {\n      this.textBoxes.forEach((textBox, index) => {\n        textBox.onDraggableFrameMouseEnter()\n      })\n    })\n  }\n\n  initializeFields() {\n    this.draggableFrame = this.shadowRoot.querySelector('.drag-frame')\n    this.lastFocusedText = undefined\n    this.textBoxes = []\n    this.draggableChildren = []\n    this.bltType = 'dot'\n    this.textOnClick = true\n    this.enableMagneticPositioning = true\n    this.bulletMargin = 10\n    this.baselineFontSize = 14\n    this.defaultPadding = 15\n    this.defaultTabSize = 2\n    this.lineSpacing = 0\n    this.magneticPotentialThreshold = 30\n    this.bulletStyles = ['dot', 'circle', 'square']\n  }\n\n  toggleBulletFromFocusedText() {\n    if (this.lastFocusedText.bullet) {\n      this.removeBulletFromeFocusedText()\n    } else {\n      this.addBulletToFocusedText()\n    }\n  }\n\n  removeBulletFromeFocusedText() {\n    this.lastFocusedText.removeBullet()\n  }\n\n  addBulletToFocusedText() {\n    this.addBulletToText(this.lastFocusedText, this.bltType)\n  }\n\n  /**\n   * Add a bullet to a text box\n   * @param {*} bulletType 'circle', 'square', 'dot'\n   * @param {*} textBox\n   * @returns {Image} a block displayed bullet(Image)\n   */\n  addBulletToText(textBox, bulletType) {\n    if (textBox.removed) {\n      return\n    }\n    const bullet = document.createElement('div')\n\n    let hasStyle = false\n    this.bulletStyles.forEach((stylestr, index) => {\n      if (bulletType == stylestr) {\n        bullet.classList.add('bullet-' + stylestr)\n        hasStyle = true\n        return true\n      }\n    })\n\n    if (!hasStyle) {\n      bullet.classList.add('bullet-dot')\n    }\n\n    textBox.bullet = bullet\n  }\n\n  /**\n   * Add a editable and draggable text box\n   * @param {object} coordinates {left: \"123px\", top: \"222px\"}\n   * @param {object} size {width: \"123px\", height: \"123px\"}\n   * @returns {HTMLElement} returns the draggable frame itself\n   */\n  addDraggableTextBox(coordinates) {\n    const textBox = new _text_box_js__WEBPACK_IMPORTED_MODULE_0__.TextBox(this.draggableFrame)\n    this.addDraggableElement(textBox, coordinates)\n    textBox.addEventListener('remove', () => {\n      this.removeArrayElement(textBox, this.textBoxes)\n      this.removeArrayElement(textBox, this.draggableChildren)\n    })\n    textBox.addEventListener('focus', () => {\n      this.lastFocusedText = textBox\n    })\n\n    textBox.addEventListener('tabpressed', () => {\n      const newX = this.getNextTabPosition(textBox)\n      console.log('old: ' + textBox.position.left, textBox.position.top)\n      console.log('new: ' + newX + 'px', textBox.position.top)\n      textBox.position = { left: newX + 'px', top: textBox.position.top }\n\n      //Change bullet when tab\n      if (textBox.bullet) {\n        let bulletIndex = 0\n        this.bulletStyles.forEach((style, index) => {\n          if (textBox.bullet.classList.contains('bullet-' + style)) {\n            bulletIndex =\n              index < this.bulletStyles.length - 1\n                ? index + 1\n                : this.bulletStyles.length - 1\n            return true\n          }\n        })\n        textBox.removeBullet()\n        this.addBulletToText(textBox, this.bulletStyles[bulletIndex])\n      }\n    })\n\n    textBox.addEventListener('dragend', () => {\n      this.magneticPositioning(textBox)\n    })\n\n    textBox.addEventListener('backspace', () => {\n      if (textBox.EmptyContent()) {\n        if (this.lessThanFirstTabPosition(textBox)) {\n          console.log('first position, delete')\n          if (!textBox.removed) {\n            textBox.removeSelf()\n            this.removeArrayElement(textBox, this.textBoxes)\n            this.removeArrayElement(textBox, this.draggableChildren)\n          }\n        } else {\n          console.log('Not first position, move left')\n          const newX = this.getPreviousTabPosition(textBox)\n          console.log(newX)\n          textBox.position = { left: newX + 'px', top: textBox.position.top }\n        }\n      }\n    })\n    textBox.addEventListener('enter', () => {\n      const framePosition = this.draggableFrame.getBoundingClientRect()\n      //console.log('frame: ' + framePosition.x + '  mouse: ' + e.clientX)\n      const textPosition = {\n        left: textBox.position.left,\n        top:\n          parseFloat(textBox.position.top) +\n          textBox.text.getBoundingClientRect().height +\n          this.lineSpacing +\n          'px'\n      }\n      const newTextBox = this.addDraggableTextBox(textPosition)\n      newTextBox.focus()\n      if (textBox.bullet) {\n        this.bulletStyles.forEach((style, index) => {\n          if (textBox.bullet.classList.contains('bullet-' + style)) {\n            this.addBulletToText(newTextBox, style)\n            return true\n          }\n        })\n      }\n    })\n\n    this.textBoxes.push(textBox)\n    this.draggableChildren.push(textBox)\n    /*console.log(\n      'boxes vs children:' +\n        this.textBoxes.length +\n        '|' +\n        this.draggableChildren.length\n    )*/\n\n    return textBox\n  }\n\n  /**\n   * add draggable element to the view\n   *\n   * @param {HTMLElement} element the html element to add into this frame\n   * @param {object} coordinats {left: \"123px\", top: \"356px\"}\n   * @returns {null} returns the draggable frame itself\n   */\n  addDraggableElement(child, coordinates) {\n    child.position = coordinates\n    child.enableDragAndDrop()\n  }\n\n  magneticPositioning(child) {\n    if (!this.enableMagneticPositioning) return\n    const nearest = this.getNearestChild(child)\n    if (nearest) {\n      console.log('find nearest: ' + nearest.pos)\n      this.moveDraggableChildByAnimation(child, nearest)\n    }\n  }\n\n  /**\n   * move a child to target by animation\n   * @param {object} child a draggable child\n   * @returns {object} {element: node, pos: 123, side: 'bottom'} position related to the viewport\n   */\n  moveDraggableChildByAnimation(child, target) {\n    console.log('animate..')\n    const childPos = child.text.getBoundingClientRect()\n    switch (target.side) {\n      case 'top':\n        console.log('animate top..')\n        child.translateY(target.pos + this.lineSpacing)\n        break\n      case 'bottom':\n        console.log('animate bottom..')\n        child.translateY(\n          target.pos -\n            (parseInt(childPos.bottom) - parseInt(childPos.top)) -\n            this.lineSpacing\n        )\n        break\n      default:\n        console.log('animate center..')\n        child.translateY(\n          target.pos - (parseInt(childPos.bottom) - parseInt(childPos.top)) / 2\n        )\n    }\n  }\n\n  /**\n   * Helpers\n   */\n\n  /**\n   * Get a nearest draggable element from a child\n   * @param {object} child a draggable child\n   * @returns {object} {element: node, pos: '123px', side: 'bottom'}\n   */\n  getNearestChild(child) {\n    let minDistance = Infinity\n    let nearestChild = undefined\n    //console.log('looking for nearest...')\n    //console.log('draggable children:' + this.draggableChildren.length)\n    const childStyle = child.text.getBoundingClientRect()\n    this.draggableChildren.forEach((dChild, index) => {\n      //console.log('child' + index)\n      if (dChild == child) {\n        return\n      }\n      const style = dChild.text.getBoundingClientRect()\n\n      console.log('dchild: ' + style.bottom + '| ' + style.top)\n      console.log('child: ' + childStyle.bottom + '| ' + childStyle.top)\n      if (style.top && style.bottom) {\n        const distanceBottom = Math.abs(childStyle.bottom - style.top)\n        const distanceTop = Math.abs(childStyle.top - style.bottom)\n        const distanceCenter = Math.abs(\n          (childStyle.top + childStyle.bottom) / 2 -\n            (style.top + style.bottom) / 2\n        )\n\n        console.log(\n          'top:' +\n            distanceTop +\n            '| bottom:' +\n            distanceBottom +\n            '| center:' +\n            distanceCenter\n        )\n        const minObjectsDistance = Math.min(\n          distanceBottom,\n          distanceTop,\n          distanceCenter\n        )\n\n        console.log('min distance: ' + minObjectsDistance)\n        if (\n          minObjectsDistance < this.magneticPotentialThreshold &&\n          minObjectsDistance < minDistance\n        ) {\n          console.log('found nearer')\n          nearestChild = {}\n          minDistance = minObjectsDistance\n          nearestChild.element = dChild\n\n          switch (minObjectsDistance) {\n            case distanceBottom:\n              nearestChild.side = 'bottom'\n              nearestChild.pos = style.top\n              break\n            case distanceTop:\n              nearestChild.side = 'top'\n              nearestChild.pos = style.bottom\n              break\n            default:\n              nearestChild.side = 'cernter'\n              nearestChild.pos = (style.bottom + style.top) / 2\n          }\n        }\n      }\n    })\n    return nearestChild\n  }\n\n  removeArrayElement(element, array) {\n    const index = array.indexOf(element)\n    if (index != -1) {\n      array.splice(index, 1)\n    }\n  }\n\n  lessThanFirstTabPosition(textBox) {\n    const firstPosition = this.defaultPadding + this.bulletMargin\n\n    console.log(textBox.text.offsetLeft + '|' + firstPosition)\n    return textBox.text.offsetLeft <= firstPosition\n  }\n\n  /**\n   * Calculate the previous tab position\n   * @param {object} childPosition the object return by the getBoundingClientRect() method\n   * @returns {number} the horizontal previous position relative to the parent\n   */\n  getPreviousTabPosition(textBox) {\n    const tabIndex = Math.ceil(\n      (textBox.text.offsetLeft - this.defaultPadding - this.bulletMargin) /\n        (this.baselineFontSize * this.defaultTabSize) -\n        1.0\n    )\n    console.log('index:' + tabIndex)\n    return (\n      this.defaultPadding +\n      this.bulletMargin +\n      tabIndex * (this.baselineFontSize * this.defaultTabSize)\n    )\n  }\n\n  /**\n   * Calculate the next tab position\n   * @param {object} textBox\n   * @returns {number} the horizontal position relative to the parent\n   */\n  getNextTabPosition(textBox) {\n    const tabIndex = Math.floor(\n      (textBox.text.offsetLeft - this.defaultPadding - this.bulletMargin) /\n        (this.baselineFontSize * this.defaultTabSize) +\n        1.0\n    )\n    return (\n      this.defaultPadding +\n      this.bulletMargin +\n      tabIndex * (this.baselineFontSize * this.defaultTabSize)\n    )\n  }\n\n  /**\n   * Setter and getter\n   */\n  set textOnClick(isTextOnClick) {\n    this.createTextOnClick = isTextOnClick\n  }\n\n  get textOnClick() {\n    return this.createTextOnClick\n  }\n}\n// not sure if `editPage()` should be here or in one of the components\n// cannot access shadow DOM from here, though\n// function defined in drag-view.js, commented here\n// so for now Ishaan added this in both\nfunction editPage(caller) {\n  //   console.log('clicked on page',event)\n  if (toolselected == 'text') {\n    console.log(caller, caller)\n    const newText = document.createElement('div')\n    newText.position = 'relative'\n    newText.left = indent * 100 + 'px'\n    indent++\n    console.log(indent, newText.left)\n    newText.border = '3px solid #73AD21'\n    newText.contentEditable = 'true'\n    newText.innerHTML = `<h3>New text</h3>`\n\n    caller.appendChild(newText)\n    console.log(caller)\n  }\n  if (toolselected == 'image') {\n  }\n}\ncustomElements.define('drag-view', DragView)\n\n\n//# sourceURL=webpack://source/./js/widgets/drag-view.js?");

/***/ }),

/***/ "./js/widgets/text-box.js":
/*!********************************!*\
  !*** ./js/widgets/text-box.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TextBox\": () => (/* binding */ TextBox)\n/* harmony export */ });\nclass TextBox {\n  constructor(draggableFrame, bullet) {\n    if (draggableFrame) {\n      this.draggableFrame = draggableFrame\n    }\n    if (bullet) {\n      this.blt = bullet\n    }\n    this.textListeners = []\n    this.bulletMargin = 10\n\n    this.observers = {\n      remove: [],\n      focus: [],\n      blur: [],\n      tabpressed: [],\n      dragend: [],\n      backspace: [],\n      enter: [],\n      shiftenter: []\n    }\n    this.removed = false\n    this.keydowns = new Set()\n\n    this.initializeText()\n    this.initializeEventListeners()\n    this.setEventListeners()\n  }\n\n  initializeText() {\n    this.text = document.createElement('textarea')\n    this.text.classList.add('textbox')\n    this.text.style.background = 'transparent'\n    this.draggableFrame.appendChild(this.text)\n    this.lastScrollHeight = this.text.scrollHeight\n    this.textPadding = parseFloat(\n      window.getComputedStyle(this.text).getPropertyValue('padding-top')\n    )\n    console.log(this.textPadding, this.lastScrollHeight)\n    console.log(\n      'height:' + this.lastTextHeight + ',' + 'extra:' + this.extraHeight\n    )\n  }\n\n  removeBullet() {\n    this.draggableFrame.removeChild(this.blt)\n    this.blt = undefined\n  }\n\n  set bullet(bullet) {\n    if (this.bullet) {\n      this.removeBullet()\n    }\n    this.blt = bullet\n    this.draggableFrame.appendChild(this.blt)\n    const bulletStyle = window.getComputedStyle(this.blt)\n    const textStyle = window.getComputedStyle(this.text)\n    //console.log('bulletheight: ' + bulletStyle.height)\n    //console.log('bulletheight: ' + textStyle.top)\n    this.bulletHeight = parseFloat(bulletStyle.height)\n    this.bulletWidth = parseFloat(bulletStyle.width)\n\n    const topBulletMargin =\n      parseFloat(textStyle.getPropertyValue('padding-top')) +\n      0.6 * parseFloat(textStyle.fontSize) -\n      this.bulletHeight / 2\n    //console.log('textpadding: ' + textStyle.getPropertyValue('padding-top'))\n    this.blt.style.top = parseFloat(textStyle.top) + topBulletMargin + 'px'\n    this.blt.style.left =\n      parseFloat(textStyle.left) -\n      this.bulletWidth / 2 -\n      this.bulletMargin +\n      'px'\n\n    //console.log(this.bulletHeight)\n    //console.log(topBulletMargin)\n    //console.log(textStyle.top)\n\n    this.setEventListeners()\n  }\n\n  get bullet() {\n    return this.blt\n  }\n\n  initializeEventListeners() {\n    this.textListeners.push({\n      eventType: 'click',\n      callback: (e) => {\n        e.stopImmediatePropagation()\n      }\n    })\n\n    this.textListeners.push({\n      eventType: 'mouseover',\n      callback: (e) => {\n        this.text.classList.add('mouse-over')\n      }\n    })\n    this.textListeners.push({\n      eventType: 'mouseleave',\n      callback: (e) => {\n        this.text.classList.remove('mouse-over')\n      }\n    })\n\n    this.textListeners.push({\n      eventType: 'focus',\n      callback: (e) => {\n        //console.log('focus')\n        this.text.classList.add('focus')\n        this.text.style.resize = 'both'\n        this.observers.focus.forEach((cb, i) => {\n          cb()\n        })\n      }\n    })\n    this.textListeners.push({\n      eventType: 'blur',\n      callback: (e) => {\n        //console.log('blur')\n        this.observers.blur.forEach((cb, i) => {\n          cb()\n        })\n        //console.log(this.text.value.trim() === '')\n        //console.log(this.text.classList.contains('mouse-over'))\n        if (\n          !this.removed &&\n          this.hasNothing() &&\n          !this.text.classList.contains('mouse-over')\n        ) {\n          this.removeSelf()\n        } else {\n          this.text.classList.remove('focus')\n        }\n        this.text.style.resize = 'none'\n      }\n    })\n    this.textListeners.push({\n      eventType: 'keydown',\n      callback: (e) => {\n        this.keydowns.add(e.key)\n        this.resizeToFitText()\n        //console.log(this.text.value.includes('\\n'))\n\n        switch (e.key) {\n          case 'Delete':\n            //console.log('delete')\n            this.removeSelf()\n            break\n          case 'Tab':\n            e.preventDefault()\n            console.log('Tab')\n            this.observers.tabpressed.forEach((callback, i) => {\n              callback()\n            })\n            break\n          case 'Backspace':\n            console.log('Backspace')\n            this.observers.backspace.forEach((callback, i) => {\n              callback()\n            })\n            break\n          case 'Enter':\n            if (this.keydowns.has('Shift')) {\n              //console.log('Shift + Enter')\n              this.observers.shiftenter.forEach((callback, i) => {\n                callback()\n              })\n            } else {\n              //console.log('Enter')\n              e.preventDefault()\n              this.observers.enter.forEach((callback, i) => {\n                callback()\n              })\n            }\n            break\n        }\n      }\n    })\n\n    this.textListeners.push({\n      eventType: 'keyup',\n      callback: (e) => {\n        this.keydowns.delete(e.key)\n        this.resizeToFitText()\n      }\n    })\n  }\n\n  resizeToFitText() {\n    //console.log(\n    //  'resize:' + this.text.scrollHeight + '| ' + this.lastScrollHeight\n    //)\n    if (this.text.scrollHeight != this.lastScrollHeight) {\n      this.text.style.height =\n        parseFloat(this.text.getBoundingClientRect().height) +\n        parseFloat(this.text.scrollHeight) -\n        parseFloat(this.lastScrollHeight) +\n        'px'\n      this.lastScrollHeight = this.text.scrollHeight\n    }\n  }\n\n  removeSelf() {\n    this.removed = true\n    this.draggableFrame.removeChild(this.text)\n    if (this.bullet) {\n      this.draggableFrame.removeChild(this.bullet)\n    }\n    this.observers.remove.forEach((callback, i) => {\n      callback()\n    })\n  }\n\n  setEventListeners() {\n    this.textListeners.forEach((listener, index) => {\n      this.text.removeEventListener(listener.eventType, listener.callback)\n      this.text.addEventListener(listener.eventType, listener.callback)\n    })\n  }\n\n  /**\n   * Set the position of the text relative to its parent\n   * @param {object} coordinates {left: '123px', top: '1231px'}\n   */\n  set position(coordinates) {\n    const framePosition = this.draggableFrame.getBoundingClientRect()\n    if (\n      parseFloat(coordinates.left) - this.bulletMargin < 0 ||\n      parseFloat(coordinates.left) + this.text.getBoundingClientRect().width >\n        framePosition.width ||\n      parseFloat(coordinates.top) < 0 ||\n      parseFloat(coordinates.top) + this.text.getBoundingClientRect().height >\n        framePosition.height\n    ) {\n      return\n    }\n\n    if (this.bullet) {\n      this.bullet.style.left =\n        parseFloat(this.bullet.style.left) +\n        parseFloat(coordinates.left) -\n        parseFloat(this.pos.left) +\n        'px'\n      this.bullet.style.top =\n        parseFloat(this.bullet.style.top) +\n        parseFloat(coordinates.top) -\n        parseFloat(this.pos.top) +\n        'px'\n    }\n\n    this.pos = coordinates\n    this.text.style.left = coordinates.left\n    this.text.style.top = coordinates.top\n  }\n\n  get position() {\n    return this.pos\n  }\n\n  /**\n   * translate vertically\n   * @param {number} targetX position in the viewport\n   * @param {number} targetY position in the viewport\n   * @param {number} speed px / second\n   */\n  translateY(targetY) {\n    console.log('target position:' + targetY)\n    const deltaY = targetY - this.text.getBoundingClientRect().top\n    const anims = []\n    anims.push(\n      this.text.animate([{ transform: 'translateY(' + deltaY + 'px)' }], {\n        duration: 50\n      }).finished\n    )\n\n    if (this.bullet) {\n      anims.push(\n        this.bullet.animate(\n          [\n            {\n              transform: 'translateY(' + deltaY + 'px)'\n            }\n          ],\n          {\n            duration: 50\n          }\n        ).finished\n      )\n    }\n\n    Promise.all(anims).then((data) => {\n      this.position = {\n        left: this.position.left,\n        top: parseFloat(this.position.top) + deltaY + 'px'\n      }\n    })\n  }\n\n  enableDragAndDrop() {\n    this.text.classList.add('draggable')\n    this.text.draggable = true\n    let framePosition = {}\n    let mousePosition = {}\n    this.text.addEventListener('dragstart', (e) => {\n      framePosition = this.draggableFrame.getBoundingClientRect()\n      mousePosition.x = e.clientX\n      mousePosition.y = e.clientY\n\n      //console.log('dragstart')\n      if (this.bullet) {\n        this.bullet.classList.add('dragging')\n        this.bullet.style.display = 'none'\n      }\n    })\n    this.text.addEventListener('drag', (e) => {\n      this.text.classList.add('dragging')\n      //console.log('dragging')\n    })\n    this.text.addEventListener('dragend', (e) => {\n      e.preventDefault()\n\n      //console.log('dragend')\n      this.text.classList.remove('dragging')\n\n      if (this.bullet) {\n        this.bullet.style.display = 'block'\n        this.bullet.classList.remove('dragging')\n      }\n\n      //console.log(this.bullet)\n\n      const deltaX = e.clientX - mousePosition.x\n      const deltaY = e.clientY - mousePosition.y\n\n      this.position = {\n        left: parseFloat(this.position.left) + deltaX + 'px',\n        top: parseFloat(this.position.top) + deltaY + 'px'\n      }\n\n      this.observers.dragend.forEach((callback, i) => {\n        callback()\n      })\n      this.text.focus()\n    })\n  }\n\n  addEventListener(eventType, callback) {\n    this.observers[eventType].push(callback)\n  }\n\n  removeEventListener(eventType, callback) {\n    this.observers[eventType].forEach((c, i) => {\n      if (callback == c) {\n        this.observers[eventType].splice(i, 0)\n        return false\n      }\n    })\n  }\n\n  removeAllListeners() {\n    this.observers = { remove: [], focus: [] }\n  }\n\n  focus() {\n    this.text.focus()\n  }\n\n  hasNothing() {\n    return this.text.value === '' && !this.bullet\n  }\n\n  EmptyContent() {\n    return this.text.value === ''\n  }\n\n  onDraggableFrameMouseOut() {\n    console.log('mouseout!')\n    this.textListeners.forEach((listener, index) => {\n      this.text.removeEventListener(listener.eventType, listener.callback)\n    })\n  }\n\n  onDraggableFrameMouseEnter() {\n    console.log('mousein!')\n    this.setEventListeners()\n  }\n  /**\n   * Helpers\n   */\n}\n\n\n//# sourceURL=webpack://source/./js/widgets/text-box.js?");

/***/ }),

/***/ "./js/widgets/toolbar.js":
/*!*******************************!*\
  !*** ./js/widgets/toolbar.js ***!
  \*******************************/
/***/ (() => {

eval("class ToolBar extends HTMLElement {\n  constructor() {\n    super()\n    console.log('toolbar constr called')\n    const template = document.createElement('template')\n    template.innerHTML = `\n\n        <div class=\"tool-bar\">\n          <button class=\"tool selected-tool\" id=\"text-tool\">\n          \n            <svg class=\"icon-text\" viewBox=\"0 0 36 36\">\n              <path id=\"icon-text\" d=\"M 0 0 L 0 9 L 2.25 9 C 2.25 6.525000095367432 4.275000095367432 4.5 6.75 4.5 L 13.5 4.5 L 13.5 29.25 C 13.5 30.51000022888184 12.51000022888184 31.5 11.25 31.5 L 9 31.5 L 9 36 L 27 36 L 27 31.5 L 24.75 31.5 C 23.48999977111816 31.5 22.5 30.51000022888184 22.5 29.25 L 22.5 4.5 L 29.25 4.5 C 31.72500038146973 4.5 33.75 6.525000095367432 33.75 9 L 36 9 L 36 0 L 0 0 Z\">\n              </path>\n\t          </svg>\n          </button>\n\n          <button class=\"tool\" id=\"image-tool\">\n          \n            <svg class=\"icon-image\" viewBox=\"0 0 45 45 \">\n              <path id=\"icon-image\" d=\"M 31.5 28.5 L 31.5 7.5 C 31.5 5.849999904632568 30.14999961853027 4.5 28.5 4.5 L 7.5 4.5 C 5.849999904632568 4.5 4.5 5.849999904632568 4.5 7.5 L 4.5 28.5 C 4.5 30.14999961853027 5.849999904632568 31.5 7.5 31.5 L 28.5 31.5 C 30.14999961853027 31.5 31.5 30.14999961853027 31.5 28.5 Z M 12.75 20.25 L 16.5 24.76499938964844 L 21.75 18 L 28.5 27 L 7.5 27 L 12.75 20.25 Z\">\n              </path>\n\t          </svg>\n          </button>\n\n        </div>\n        `\n\n    // template.addEventListener('click',editPage());\n\n    const link = document.createElement('link')\n    link.setAttribute('rel', 'stylesheet')\n    link.setAttribute('href', 'styles/toolbar.css')\n\n    this.attachShadow({ mode: 'open' })\n    this.shadowRoot.appendChild(link)\n    this.shadowRoot.appendChild(template.content.cloneNode(true))\n  }\n}\n\ncustomElements.define('tool-bar', ToolBar)\n\n\n//# sourceURL=webpack://source/./js/widgets/toolbar.js?");

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