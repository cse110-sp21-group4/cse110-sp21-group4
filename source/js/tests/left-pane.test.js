import { MainPageController } from '../main-page-controller'
import { LeftPane } from '../widgets/left-pane'
import { TextBox } from '../widgets/text-box'
import { ToolBar } from '../widgets/toolbar'
import { MainPageModel } from '../main-page-model.js'
import { Console } from 'console'
const fs = require('fs')
const path = require('path')
const html = fs.readFileSync(
  path.resolve(__dirname, '../../index.html'),
  'utf-8'
)

document.documentElement.innerHTML = html.toString()

// document.body.innerHTML = `
//     <main>
//       <div class="main-frame">
//         <left-pane></left-pane>
//         <svg class="index-button">
//           <ellipse id="index-button" rx="40" ry="40" cx="40" cy="40"></ellipse>
//         </svg>
//         <div id="icon-ionic-ios-book">
//           <svg class="Path_1" viewBox="3.382 4.507 13.915 26.99">
//             <path
//               id="Path_1"
//               d="M 10.265625 4.507031440734863 C 14.06953144073486 4.507031440734863 17.296875 6.46875 17.296875 10.27265644073486 L 17.296875 11.39765644073486 L 17.296875 11.39765644073486 L 17.296875 11.39765644073486 L 17.296875 11.39765644073486 L 17.296875 31.359375 C 17.296875 31.51406288146973 17.07890701293945 31.54921913146973 17.02968788146973 31.40859413146973 C 17.02968788146973 31.40859413146973 17.02968788146973 31.40859413146973 17.02968788146973 31.40156364440918 C 16.30546951293945 28.99687576293945 14.34375 26.6484375 11.24296951293945 26.44453239440918 C 8.838281631469727 26.28984451293945 6.539063453674316 27.35156440734863 4.69687557220459 29.05312538146973 C 4.584375381469727 29.15859413146973 4.394531726837158 29.25703239440918 4.232812881469727 29.25703239440918 L 3.916406631469727 29.25703239440918 C 3.656250476837158 29.25703239440918 3.382031679153442 29.06718826293945 3.382031679153442 28.82812690734863 L 3.382031679153442 8.451562881469727 C 3.375 6.194531440734863 6.461718559265137 4.507031440734863 10.265625 4.507031440734863 Z"
//             ></path>
//           </svg>
//           <svg class="Path_2" viewBox="18.703 4.5 13.915 26.99">
//             <path
//               id="Path_2"
//               d="M 25.734375 4.5 C 21.93046951293945 4.5 18.703125 6.461718559265137 18.703125 10.265625 L 18.703125 11.390625 L 18.703125 11.390625 L 18.703125 11.390625 L 18.703125 11.390625 L 18.703125 31.35234451293945 C 18.703125 31.50703239440918 18.92109298706055 31.54218864440918 18.97031211853027 31.40156364440918 C 18.97031211853027 31.40156364440918 18.97031211853027 31.40156364440918 18.97031211853027 31.39453315734863 C 19.69453048706055 28.98984527587891 21.74062538146973 26.62031555175781 24.75703048706055 26.43750190734863 C 27.0703125 26.29687690734863 29.25 27.21093940734863 31.30312347412109 29.04609489440918 C 31.41562271118164 29.14453315734863 31.60546684265137 29.25000190734863 31.76718521118164 29.25000190734863 L 32.08359146118164 29.25000190734863 C 32.34374618530273 29.25000190734863 32.61796569824219 29.06015777587891 32.61796569824219 28.82109642028809 L 32.61796569824219 8.4375 C 32.625 6.1875 29.53828048706055 4.5 25.734375 4.5 Z"
//             ></path>
//           </svg>
//         </div>

//         <div class="page">
//           <drag-view></drag-view>
//         </div>
//       </div>
//       <tool-bar></tool-bar>
//       <right-pane></right-pane>
//     </main>
// `

const mainPageBody = document.querySelector('body')
const mainPageController = new MainPageController(mainPageBody)
const toolbar = mainPageController.toolbar

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

test('left pane list empty', () => {
  let index = mainPageController.left.getPageList().list
  expect(index.length).toEqual(0)
})

test('entry created directly', () => {
  var date1 = new Date('June 2, 2021 23:15:30')
  mainPageController.left.addNewEntry(date1)
  let index = mainPageController.left.getPageList().list
  console.log(index)
  expect(index.length).toEqual(1)
  expect(index[0].startDate).toEqual('06022021')
})

// test('entry created by click',()=>{

//     var date1 = new Date('June 2, 2021 23:15:30');
//     mainPageController.left.plusButton.click()

//     // mainPageController.left.addNewEntry(date1);
//     let index = mainPageController.left.getPageList().list
//     // console.log(index)
//     expect(index.length).toEqual(2)
//     mainPageController.left.span.click()
//     // expect(index[0].startDate).toEqual('06022021')
// })
