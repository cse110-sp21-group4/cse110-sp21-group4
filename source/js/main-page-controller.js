import { DragView } from './widgets/drag-view.js'
export class MainPageController {
  constructor(view) {
    this.view = view
  }

  registerListeners() {
    // document.querySelector('').addEventListener('', () => {})
    console.log(
      document.querySelector('tool-bar').shadowRoot.querySelector('#text-tool')
    )

    function selectTool(toolToBeSelected) {
      if (toolToBeSelected.classList.contains('selected-tool')) {
        toolToBeSelected.classList.remove('selected-tool')
      } else {
        if (
          document
            .querySelector('tool-bar')
            .shadowRoot.querySelector('.selected-tool')
        ) {
          document
            .querySelector('tool-bar')
            .shadowRoot.querySelector('.selected-tool')
            .classList.remove('selected-tool')
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
    /// image tool
    let imageTool = document
      .querySelector('tool-bar')
      .shadowRoot.querySelector('#image-tool')

    console.log('Image tool', imageTool)

    imageTool.addEventListener('click', (event) => {
      console.log('You just clicked image tool')

      selectTool(imageTool)

      // let imageView = document.querySelector('image-view')
      // console.log(imageView)
    })
  
  // bullets tool
  let bulletsTool = document
      .querySelector('tool-bar')
      .shadowRoot.querySelector('#bullets-tool')

      bulletsTool.addEventListener('click', (event) => {
      console.log('You just clicked bullets tool')
      selectTool(bulletsTool)
  })

  // bold tool
  let boldTool = document
    .querySelector('tool-bar')
    .shadowRoot.querySelector('#bold-tool')

    boldTool.addEventListener('click', (event) => {
    console.log('You just clicked bold tool')
    selectTool(boldTool)
  })

  let italicTool = document
    .querySelector('tool-bar')
    .shadowRoot.querySelector('#italic-tool')

    italicTool.addEventListener('click', (event) => {
    selectTool(italicTool)
  })

  let underlineTool = document
    .querySelector('tool-bar')
    .shadowRoot.querySelector('#underline-tool')

    underlineTool.addEventListener('click', (event) => {
    selectTool(underlineTool)
  })




  }
  //Example code
  onTasksButtonClicked() {
    console.log('Tasks button clicked...')
  }
}
