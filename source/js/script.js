import { DragView } from './widgets/drag-view.js'
import { MainPageController } from './main-page-controller.js'

/**
 * Main page control
 */
const mainPageBody = document.querySelector('body')
const mainPageController = new MainPageController(mainPageBody)

window.addEventListener('load', () => {
  mainPageController.registerListeners()
})
