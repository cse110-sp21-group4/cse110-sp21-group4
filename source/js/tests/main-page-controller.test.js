import { MainPageController } from '../main-page-controller'
import { LeftPane } from '../widgets/left-pane'
import { MainPageModel } from '../main-page-model.js'
import { TextBox } from '../widgets/text-box'
const fs = require('fs')
const path = require('path')
const html = fs.readFileSync(
  path.resolve(__dirname, '../../index.html'),
  'utf-8'
)

document.documentElement.innerHTML = html.toString()

const mainPageBody = document.querySelector('body')
const mainPageController = new MainPageController(mainPageBody)
const mockModel = {
  saveImage: () => {},
  init: () => {}
}
mainPageController.setModel(mockModel)

test('initializePage', () => {
  mainPageController.initializePage()

  expect(mainPageController.left).toBe(document.querySelector('left-pane'))
  expect(mainPageController.page).toBe(document.querySelector('.page'))
  expect(mainPageController.leftPaneButton).toBe(
    document.body.querySelector('#index-button')
  )
  expect(mainPageController.leftPaneFrame).toBe(
    mainPageController.left.shadowRoot.querySelector('#outer-rectangle')
  )
  expect(mainPageController.toolbar).toBe(document.querySelector('tool-bar'))
})

test('initializeAttributes', () => {
  mainPageController.initializeAttributes()

  expect(mainPageController.leftPaneWidth).toBe(
    mainPageController.leftPaneFrame.getBoundingClientRect().width
  )
  expect(mainPageController.leftPaneButtonWidth).toBe(
    mainPageController.leftPaneButton.getBoundingClientRect().width
  )
  expect(mainPageController.leftMargin).toBe(
    mainPageController.leftPaneFrame.getBoundingClientRect().left
  )
})

test('toggleLeftPane', () => {
  mainPageController.left.style.display = 'none'
  mainPageController.toggleLeftPane()

  expect(mainPageController.left.style.display).toBe('block')

  mainPageController.toggleLeftPane()

  expect(mainPageController.left.style.display).toBe('none')
})

test('registerListeners', () => {
  const events = { button: {}, book: {}, toolbar: {} }
  mainPageController.leftPaneButton.addEventListener = jest.fn((e, cb) => {
    events.button[e] = cb
  })
  document.querySelector('#icon-ionic-ios-book').addEventListener = jest.fn(
    (e, cb) => {
      events.book[e] = cb
    }
  )
  mainPageController.toolbar.addEventListener = jest.fn((e, cb) => {
    events.toolbar[e] = cb
  })

  mainPageController.registerListeners()
  const toggleLeftPane = jest.spyOn(mainPageController, 'toggleLeftPane')

  events.button.click({})
  events.book.click({})

  expect(toggleLeftPane).toBeCalledTimes(2)

  //For Toolbar
  //Text on Click
  mainPageController.dragview.textOnClick = false
  events.toolbar.textclicked({})

  expect(mainPageController.dragview.textOnClick).toBe(true)

  //Insert image
  const img = new Image()
  const addDraggableImage = jest.spyOn(
    mainPageController.dragview,
    'addDraggableImage'
  )
  events.toolbar.imageclicked(img, {})

  // expect(addDraggableImage).toHaveBeenCalledWith(
  //   mainPageController.imageInsertPosition,
  //   img
  // )

  //Toggle bullet
  mainPageController.dragview.lastFocusedText = new TextBox(
    mainPageController.dragview.draggableFrame
  )
  mainPageController.dragview.lastFocusedText.bullet =
    document.createElement('div')

  const toggleBulletFromFocusedText = jest.spyOn(
    mainPageController.dragview,
    'toggleBulletFromFocusedText'
  )
  events.toolbar.bulletclicked()

  expect(toggleBulletFromFocusedText).toHaveBeenCalled()

  //Bold, italic, underline
  const toggleBold = jest.spyOn(mainPageController.dragview, 'toggleBold')
  const toggleItalic = jest.spyOn(mainPageController.dragview, 'toggleItalic')
  const toggleUnderline = jest.spyOn(
    mainPageController.dragview,
    'toggleUnderline'
  )

  events.toolbar.boldclicked()
  events.toolbar.italicclicked()
  events.toolbar.underlineclicked()

  expect(toggleBold).toHaveBeenCalled()
  expect(toggleItalic).toHaveBeenCalled()
  expect(toggleUnderline).toHaveBeenCalled()

  //Font size
  const testFontSize = 55
  events.toolbar.sizeclicked(testFontSize, {})

  expect(mainPageController.dragview.fontSize).toEqual(testFontSize)

  //Text color
  const testTextColor = '#ff00fe'
  events.toolbar.colorclicked(testTextColor, {})

  expect(mainPageController.dragview.textColor).toEqual(testTextColor)
})

test('constructor', () => {
  const newController = new MainPageController(document.body)
  expect(newController.view).toBe(document.body)

  const fn = jest.spyOn(newController, 'initializePage')
  newController.constructor(document.body)
  expect(fn).toHaveBeenCalled()
})
