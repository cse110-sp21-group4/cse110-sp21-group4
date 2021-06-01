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
    console.log(this.left)
    console.log(this.left.shadowRoot)
    console.log(this.left.querySelector('#outer-rectangle'))
    this.dragview = document.querySelector('drag-view')
    this.leftPaneButton = this.view.querySelector('#index-button')
    this.leftPaneFrame = this.left.shadowRoot.querySelector('#outer-rectangle')

    // Toolbar
    this.toolbar = document.querySelector('tool-bar')
    this.imageInput = this.toolbar.shadowRoot.querySelector('#image-input')
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
      if (!toolToBeSelected.classList.contains('selected-tool')) {
        // toolToBeSelected.classList.remove('selected-tool')
        // } else {
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
    let textTool = this.toolbar.shadowRoot.querySelector('#text-tool')

    textTool.addEventListener('click', (event) => {
      selectTool(textTool)

      console.log(this.dragview)
      console.log(this.dragview.textOnClick)
      this.dragview.textOnClick = this.dragview.textOnClick ? false : true
    })
    //Image Tool
    let imageTool = this.toolbar.shadowRoot.querySelector('#image-tool')
    this.imageInput.addEventListener('change', (e) => {
      const img = new Image()
      img.src = URL.createObjectURL(e.target.files[0])
      this.dragview.addDraggableImage({ left: '20px', top: '50px' }, img)
    })
    imageTool.addEventListener('click', (event) => {
      selectTool(imageTool)

      this.imageInput.click()
    })

    //Bullets Tool
    let bulletsTool = this.toolbar.shadowRoot.querySelector('#bullets-tool')

    bulletsTool.addEventListener('click', (event) => {
      selectTool(bulletsTool)
      // console.log(
      document.querySelector('drag-view').toggleBulletFromFocusedText()
      document.querySelector('drag-view').click()
      console.log(document.querySelector('drag-view').lastFocusedText)
      // .shadowRoot.querySelector('.lastselected')
      // )
      // this.dragView.toggleBulletFromFocusedText()
    })
    //Bold Tool
    let boldTool = this.toolbar.shadowRoot.querySelector('#bold-tool')

    boldTool.addEventListener('click', (event) => {
      selectTool(boldTool)
      document.querySelector('drag-view').toggleBoldFromFocusedText()
    })

    //Italics Tool
    let italicsTool = this.toolbar.shadowRoot.querySelector('#italics-tool')

    italicsTool.addEventListener('click', (event) => {
      selectTool(italicsTool)
      document.querySelector('drag-view').toggleItalicsFromFocusedText()
    })

    //Underline Tool
    let underlineTool = this.toolbar.shadowRoot.querySelector('#underline-tool')

    underlineTool.addEventListener('click', (event) => {
      selectTool(underlineTool)
      document.querySelector('drag-view').toggleUnderlineFromFocusedText()
    })

    let textSize = this.toolbar.shadowRoot.querySelector('#text-size-sel')
    textSize.addEventListener('change', (event) => {
      selectTool(textSize)
      document.querySelector('drag-view').fontSize = textSize.value
    })

    let textColor = this.toolbar.shadowRoot.querySelector('#text-color-sel')
    textColor.addEventListener('change', (event) => {
      selectTool(textColor)
      document.querySelector('drag-view').textColor = textColor.value
    })

    // Left pane
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
