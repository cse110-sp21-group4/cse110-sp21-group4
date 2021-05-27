export class MainPageController {
  constructor(view) {
    this.view = view
    this.initializePage()
  }

  initializeAttributes() {
    this.leftPaneWidth = this.leftPaneFrame.getBoundingClientRect().width
    this.leftPaneButtonWidth = this.leftPaneButton.getBoundingClientRect().width
    this.leftMargin = this.leftPaneFrame.getBoundingClientRect().left
  }

  initializePage() {
    this.main = document.querySelector('main')
    this.page = document.querySelector('main .page')
    this.left = document.querySelector('left-pane')
    this.leftPaneButton = this.view.querySelector('#index-button')
    this.leftPaneFrame = this.left.shadowRoot.querySelector('#outer-rectangle')
  }

  registerListeners() {
    this.leftPaneButton.addEventListener('click', () => {
      this.toggleLeftPane()
    })
    document
      .querySelector('#icon-ionic-ios-book')
      .addEventListener('click', () => {
        this.toggleLeftPane()
      })
  }

  toggleLeftPane() {
    if (this.left.style.display === 'none') {
      this.left.style.display = 'block'
      this.page.style.left = this.leftPaneWidth + this.leftMargin + 'px'
      console.log('open')
    } else {
      // Page hides - Move MAIN page left
      this.left.style.display = 'none'
      this.page.style.left = this.leftPaneButtonWidth + this.leftMargin + 'px'
      console.log('close')
    }
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
