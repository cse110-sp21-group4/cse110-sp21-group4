import { DragView } from './widgets/drag-view.js'
import { MainPageController } from './main-page-controller.js'

let page = document.createElement('drag-view')
let left = document.createElement('left-pane')
let right = document.createElement('right-pane')

document.getElementsByTagName('main')[0].appendChild(page)
document.getElementsByTagName('main')[0].appendChild(left)
document.getElementsByTagName('main')[0].appendChild(right)

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

window.addEventListener('load', () => {
   mainPageController.registerListeners();


})
