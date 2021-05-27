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
    // Toolbar buttons
    let textTool = document
      .querySelector('tool-bar')
      .shadowRoot.querySelector('#text-tool')

    textTool.addEventListener('click', (event) => {
      if (textTool.classList.contains('selected-tool')) {
        textTool.classList.remove('selected-tool')
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
        textTool.classList.add('selected-tool')
      }

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
      if (imageTool.classList.contains('selected-tool')) {
        imageTool.classList.remove('selected-tool')
      } else {
        if (
          document
            .querySelector('tool-bar')
            .shadowRoot.querySelector('.selected-tool')
        ) {
          let selectedTool = document
            .querySelector('tool-bar')
            .shadowRoot.querySelector('.selected-tool')

          console.log('You had selected', selectedTool)

          selectedTool.classList.remove('selected-tool')
        } else {
          console.log('No tool selected')
        }
        imageTool.classList.add('selected-tool')
      }

      // let imageView = document.querySelector('image-view')
      // console.log(imageView)
    })
  }

  //Example code
  onTasksButtonClicked() {
    console.log('Tasks button clicked...')
  }
}
