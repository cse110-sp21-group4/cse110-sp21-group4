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
    document
      .querySelector('tool-bar')
      .shadowRoot.querySelector('#text-tool')
      .addEventListener('click', (event) => {
        console.log(event.target)
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
