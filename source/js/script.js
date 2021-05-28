import { DragView } from './widgets/drag-view.js'
import { MainPageController } from './main-page-controller.js'
import { ToolBar } from './widgets/toolbar.js'

let page = document.createElement('drag-view')
let toolbar = document.createElement('tool-bar')

document.getElementsByTagName('main')[0].appendChild(page)
document.getElementsByTagName('main')[0].appendChild(toolbar)

/**
 * Main page control
 */
const mainPageBody = document.querySelector('body')
const mainPageController = new MainPageController(mainPageBody)

window.addEventListener('load', () => {
  mainPageController.initializeAttributes()
  mainPageController.registerListeners()
})
