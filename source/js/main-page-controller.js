export class MainPageController {
  constructor(view) {
    this.view = view
    registerListeners()
  }

  registerListeners() {
<<<<<<< Updated upstream
    document.querySelector('').addEventListener('', () => {})
=======
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
      //console.log('open')
    } else {
      // Page hides - Move MAIN page left
      this.left.style.display = 'none'
      this.page.style.left = this.leftPaneButtonWidth + this.leftMargin + 'px'
      //console.log('close')
    }
>>>>>>> Stashed changes
  }

  //Example code
  onTasksButtonClicked() {
    console.log('Tasks button clicked...')
  }
}
