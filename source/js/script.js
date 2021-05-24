import { DragView } from './widgets/drag-view.js'
import { MainPageController } from './main-page-controller.js'
import { ToolBar } from './widgets/toolbar.js'

let page = document.createElement('drag-view')
let toolbar = document.createElement('tool-bar')

document.getElementsByTagName('main')[0].appendChild(page)
document.getElementsByTagName('main')[0].appendChild(toolbar)


function openIndex() {
  console.log(document.querySelector('.left-pane'))
  document.querySelector('.left-pane').style.height = '100px'
}
