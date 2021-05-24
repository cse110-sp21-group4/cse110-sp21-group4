import { DragView } from './js/widgets/drag-view.js'
export class MainPageController {
  constructor(view) {
    this.view = view

  }

  registerListeners() {
    // document.querySelector('').addEventListener('', () => {})
    let main = document.querySelector('main')
    let toolbar = main.querySelector('tool-bar')
    console.log(main, toolbar)
    // Toolbar buttons
    document
      .querySelector('tool-bar')
      .shadowRoot.querySelector('#text-tool')
      .addEventListener('click', (event) => {
        console.log(event.target)
        let dragView = document.querySelector('drag-view')
        console.log(dragView)
        dragView.textOnClick = dragView.textOnClick ? false : true
        console.log('clicked text tool, textOnClick:', textOnClick)
      })
  }

  //Example code
  onTasksButtonClicked() {
    console.log('Tasks button clicked...')
  }
}
