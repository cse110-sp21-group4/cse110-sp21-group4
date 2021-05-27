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
      // event.target could be button/svg/path so we query again
      if (textTool.classList.contains('selected-tool')) {
        textTool.classList.remove('selected-tool')
      } else {
        let textTool = document
      .querySelector('tool-bar')
      .shadowRoot.querySelector('.selected-tool')
        textTool.classList.add('selected-tool')
      }

      let dragView = document.querySelector('drag-view')
      console.log(dragView)
      console.log(dragView.textOnClick)
      dragView.textOnClick = dragView.textOnClick ? false : true
    })
    

  }

  //Example code
  onTasksButtonClicked() {
    console.log('Tasks button clicked...')
  }
}
