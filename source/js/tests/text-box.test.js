import { MainPageController } from '../main-page-controller'
import { LeftPane } from '../widgets/left-pane'
import { TextBox } from '../widgets/text-box'
import { ToolBar } from '../widgets/toolbar'
import { Console } from 'console'
import { TestScheduler } from 'jest'
const fs = require('fs')
const path = require('path')
const html = fs.readFileSync(
  path.resolve(__dirname, '../../index.html'),
  'utf-8'
)

document.documentElement.innerHTML = html.toString()
const mainPageBody = document.querySelector('body')
const mainPageController = new MainPageController(mainPageBody)
mainPageController.initializePage()

test('initialize', () => {
  mainPageController.dragview.lastFocusedText = new TextBox(
    mainPageController.dragview.draggableFrame,
    false
  )
  console.log(mainPageController.dragview.lastFocusedText.italic)
})
