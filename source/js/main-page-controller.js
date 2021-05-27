export class MainPageController {
  constructor(view) {
    this.view = view
    this.initializeAttributes()
    this.initializePage()
  }

  initializeAttributes() {
    this.leftPaneSize = 429
  }

  initializePage() {
    this.main = document.querySelector('main')
    this.page = document.querySelector('drag-view')
    this.left = document.querySelector('left-pane')
  }

  registerListeners() {
    this.left.addEventListener('open', () => {
      //TODO: move the page to the right
    })
    this.left.addEventListener('close', () => {
      //TODO: move the page back
    })
  }

  //Example code
  onTextOnClickChanged(isTextOnClick) {
    console.log('TextOnClick change to: ' + isTextOnClick)
  }

  /**
   * @param {String} textColor rgb text color or name (e.g. "back", "red", "#fffeee")
   */
  OnTextColorChanged(textColor) {
    console.log('Text color change to: ' + textColor)
  }

  /**
   * @param {object} position { left: '20px', top: '50px' }
   * @param {Image} img
   */
  insertImage(position, img) {
    console.log('Insert image at position: ' + position)
  }
}
