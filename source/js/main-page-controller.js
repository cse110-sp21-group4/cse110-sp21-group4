import { DragView } from './widgets/drag-view.js'
export class MainPageController {
  constructor(view) {
    this.view = view

    this.initializePage()
  }

  initializeAttributes() {
    this.leftPaneWidth = this.leftPaneFrame.getBoundingClientRect().width
    this.leftPaneButtonWidth = this.leftPaneButton.getBoundingClientRect().width
    this.leftMargin = this.leftPaneFrame.getBoundingClientRect().left
    this.imageInsertPosition = { left: '20px', top: '50px' }
  }

  initializePage() {
    this.main = document.querySelector('main')
    this.page = document.querySelector('main .page')
    this.left = document.querySelector('left-pane')
    this.dragview = document.querySelector('drag-view')
    this.leftPaneButton = this.view.querySelector('#index-button')
    this.leftPaneFrame = this.left.shadowRoot.querySelector('#outer-rectangle')

    // Toolbar
    this.toolbar = document.querySelector('tool-bar')
  }
  registerListeners() {
    // Left Pane
    this.leftPaneButton.addEventListener('click', () => {
      this.toggleLeftPane()
    })
    document
      .querySelector('#icon-ionic-ios-book')
      .addEventListener('click', () => {
        this.toggleLeftPane()
      })

    //Tool Bar
    this.toolbar.addEventListener('textclicked', (e) => {
      this.dragview.textOnClick = this.dragview.textOnClick ? false : true
    })

    this.toolbar.addEventListener('imageclicked', (img, e) => {
      this.dragview.addDraggableImage(this.imageInsertPosition, img)
    })

    this.toolbar.addEventListener('bulletclicked', (e) => {
      this.dragview.toggleBulletFromFocusedText()
    })

    this.toolbar.addEventListener('boldclicked', (e) => {
      this.dragview.toggleBold()
    })

    this.toolbar.addEventListener('italicclicked', (e) => {
      this.dragview.toggleItalic()
    })

    this.toolbar.addEventListener('underlineclicked', (e) => {
      this.dragview.toggleUnderline()
    })

    this.toolbar.addEventListener('sizeclicked', (fontSize, e) => {
      this.dragview.fontSize = fontSize
    })

    this.toolbar.addEventListener('colorclicked', (color, e) => {
      this.dragview.textColor = color
    })
  }

  toggleLeftPane() {
    if (this.left.style.display === 'none') {
      this.left.style.display = 'block'
      this.page.style.left = this.leftPaneWidth + this.leftMargin + 'px'
      console.log(this.toolbar.style.left)
      this.toolbar.style.left =
        parseFloat(this.toolbar.style.left) +
        this.leftPaneWidth -
        this.leftPaneButtonWidth +
        'px'
      console.log(this.toolbar.style.left)
      //console.log('open')
    } else {
      // Page hides - Move MAIN page left
      this.left.style.display = 'none'
      this.page.style.left = this.leftPaneButtonWidth + this.leftMargin + 'px'
      console.log(this.toolbar.style.left)
      this.toolbar.style.left =
        parseFloat(this.toolbar.style.left) -
        this.leftPaneWidth +
        this.leftPaneButtonWidth +
        'px'
      console.log(this.toolbar.style.left)
      //console.log('close')
    }
  }

  // //Example code
  // onTextOnClickChanged(isTextOnClick) {
  //   console.log('TextOnClick change to: ' + isTextOnClick)
  // }

  // /**
  //  * @param {String} textColor rgb text color or name (e.g. "back", "red", "#fffeee")
  //  */
  // OnTextColorChanged(textColor) {
  //   console.log('Text color change to: ' + textColor)
  // }

  // /**
  //  * @param {object} position { left: '20px', top: '50px' }
  //  * @param {Image} img
  //  */
  // insertImage(position, img) {
  //   console.log('Insert image at position: ' + position)
  // }
}
