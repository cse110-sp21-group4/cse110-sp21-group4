import { DragView } from './widgets/drag-view.js'
import { MainPageController } from './main-page-controller.js'

let page = document.createElement('drag-view')

document.getElementsByTagName('main')[0].appendChild(page)

var toolselected = 'text'

function openIndex() {
  console.log(document.querySelector('.left-pane'))
  document.querySelector('.left-pane').style.height = '100px'
}

function editPage() {
  console.log('clicked on page', document.querySelector())
  if (toolselected == 'text') {
  }
  if (toolselected == 'image') {
  }
}

/**
 * Main page control
 */
const mainPageBody = document.querySelector('body')
const mainPageController = new MainPageController(mainPageBody)
