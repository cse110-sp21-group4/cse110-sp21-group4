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

test('initialize without bullet', () => {
  mainPageController.dragview.lastFocusedText = new TextBox(
    mainPageController.dragview.draggableFrame,
    false
  )

  console.log(
    window.getComputedStyle(mainPageController.dragview.lastFocusedText.text)
  )
  expect(mainPageController.dragview.lastFocusedText.bullet).not.toBeTruthy()
  mainPageController.dragview.addBulletToText(
    mainPageController.dragview.lastFocusedText,
    'square'
  )
  expect(mainPageController.dragview.lastFocusedText.bullet).toBeTruthy()
  mainPageController.dragview.addBulletToText(
    mainPageController.dragview.lastFocusedText,
    'dot'
  )
})

test('resize', () => {
  const text1 = mainPageController.dragview.lastFocusedText
  text1.resizeToFitText()
  console.log(text1.text)
})

test('initialize with bullet', () => {
  mainPageController.dragview.lastFocusedText = new TextBox(
    mainPageController.dragview.draggableFrame,
    mainPageController.dragview.lastFocusedText.bullet
  )
  // console.log(window.getComputedStyle(mainPageController.dragview.lastFocusedText.text))
  // console.log(mainPageController.dragview.lastFocusedText.bullet)
  expect(mainPageController.dragview.lastFocusedText.bullet).toBeTruthy()
  mainPageController.dragview.toggleBulletFromFocusedText()
  console.log(
    mainPageController.dragview.querySelectorAll('.bullet-dot').length
  )
})
