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
    this.leftPaneButton = this.left.shadowRoot.querySelector('#index-button')
    this.leftPaneFrame = this.left.shadowRoot.querySelector('#outer-rectangle')
  }

  registerListeners() {
    this.left.addEventListener('open', () => {
      //TODO: move the page to the right
      console.log('open')
      this.page.style.left = this.leftPaneWidth + this.leftMargin + 'px'
      console.log(this.leftPaneWidth + this.leftMargin + 'px')
    })
    this.left.addEventListener('close', () => {
      console.log('close')
      //TODO: move the page back
      console.log(this.page.left)
      this.page.style.left = this.leftPaneButtonWidth + this.lefgMargin + 'px'
      console.log(this.leftPaneButtonWidth + this.leftMargin + 'px')
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
