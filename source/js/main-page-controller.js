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
  }

  initializePage() {
    this.main = document.querySelector('main')
    this.page = document.querySelector('main .page')
    this.left = document.querySelector('left-pane')
    this.right = document.querySelector()
    console.log(this.left)
    console.log(this.left.shadowRoot)
    console.log(this.left.querySelector('#outer-rectangle'))

    this.leftPaneButton = this.view.querySelector('#index-button')
    this.leftPaneFrame = this.left.shadowRoot.querySelector('#outer-rectangle')
  }
  registerListeners() {
    // document.querySelector('').addEventListener('', () => {})
    console.log(
      document.querySelector('main'),
      document.querySelector('main tool-bar'),
      document.querySelector('main > tool-bar'),
      document.querySelector('tool-bar')
    )
    console.log(
      document.querySelector('tool-bar').shadowRoot.querySelector('#text-tool')
    )

    function selectTool(toolToBeSelected) {
      console.log(toolToBeSelected, 'selected')
      if (toolToBeSelected.classList.contains('selected-tool')) {
        toolToBeSelected.classList.remove('selected-tool')
      } else {
        if (
          document
            .querySelector('tool-bar')
            .shadowRoot.querySelector('.selected-tool')
        ) {
          let prevSelectedTool = document
            .querySelector('tool-bar')
            .shadowRoot.querySelector('.selected-tool')
          let textTool = document
            .querySelector('tool-bar')
            .shadowRoot.querySelector('#text-tool')
          console.log(prevSelectedTool, textTool)
          if (prevSelectedTool == textTool) {
            let dragView = document.querySelector('drag-view')
            dragView.textOnClick = dragView.textOnClick ? false : true
          }
          prevSelectedTool.classList.remove('selected-tool')
        } else {
          console.log('No tool selected')
        }
        toolToBeSelected.classList.add('selected-tool')
      }
    }

    // Toolbar buttons
    let textTool = document
      .querySelector('tool-bar')
      .shadowRoot.querySelector('#text-tool')

    textTool.addEventListener('click', (event) => {
      selectTool(textTool)

      let dragView = document.querySelector('drag-view')
      console.log(dragView)
      console.log(dragView.textOnClick)
      dragView.textOnClick = dragView.textOnClick ? false : true
    })
    //Image Tool
    let imageTool = document
      .querySelector('tool-bar')
      .shadowRoot.querySelector('#image-tool')

    imageTool.addEventListener('click', (event) => {
      selectTool(imageTool)
    })

    //Bullets Tool
    let bulletsTool = document
      .querySelector('tool-bar')
      .shadowRoot.querySelector('#bullets-tool')

    bulletsTool.addEventListener('click', (event) => {
      selectTool(bulletsTool)
    })
    //Bold Tool
    let boldTool = document
      .querySelector('tool-bar')
      .shadowRoot.querySelector('#bold-tool')

    boldTool.addEventListener('click', (event) => {
      selectTool(boldTool)
    })

    //Italics Tool
    let italicsTool = document
      .querySelector('tool-bar')
      .shadowRoot.querySelector('#italics-tool')

    italicsTool.addEventListener('click', (event) => {
      selectTool(italicsTool)
    })

    //Underline Tool
    let underlineTool = document
      .querySelector('tool-bar')
      .shadowRoot.querySelector('#underline-tool')

    underlineTool.addEventListener('click', (event) => {
      selectTool(underlineTool)
    })

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
