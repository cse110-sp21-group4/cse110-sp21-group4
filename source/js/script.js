import { DragView } from './widgets/drag-view.js'
import { MainPageController } from './main-page-controller.js'
import { MainPageModel } from './main-page-model.js'
import { ToolBar } from './widgets/toolbar.js'
import { RightPane } from './widgets/right-pane.js'

// let page = document.createElement('drag-view')
// let toolbar = document.createElement('tool-bar')

// document.getElementsByTagName('main')[0].appendChild(page)
// document.getElementsByTagName('main')[0].appendChild(toolbar)

/**
 * Main page control
 */
const mainPageBody = document.querySelector('body')
//console.log('callling const')
const mainPageController = new MainPageController(mainPageBody)
const model = new MainPageModel()
mainPageController.setModel(model)
//console.log('const called')

window.addEventListener('load', () => {
  //console.log('initializing atts')
  mainPageController.initializeAttributes()
  //console.log('atts initialized')
  mainPageController.registerListeners()

  mainPageController.showLoginIfNeeded()
})
window.addEventListener('beforeunload', (e) => {
  e.preventDefault()
  mainPageController.saveCurrentData().then((data) => {
    window.close()
  })
})
