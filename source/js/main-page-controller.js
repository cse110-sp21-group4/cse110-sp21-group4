import { DragView } from './widgets/drag-view.js'
import { ImageView } from './widgets/image-view.js'
import { MainPageModel } from './main-page-model.js'
export class MainPageController {
  constructor(view) {
    this.view = view
    this.model = new MainPageModel()

    this.initializePage()
  }

  loginIn() {
    const TEST_USER = 'test@ucsd.edu'
    const TEST_PASSWORD = '12345678'
    this.model.signIn(TEST_USER, TEST_PASSWORD, () => {
      //this.recoverLastPage()
    })
  }

  initializeAttributes() {
    this.leftPaneWidth = this.leftPaneFrame.getBoundingClientRect().width
    this.leftPaneButtonWidth = this.leftPaneButton.getBoundingClientRect().width
    this.leftMargin = this.leftPaneFrame.getBoundingClientRect().left
    this.imageInsertPosition = { left: '20px', top: '50px' }
    this.reloading = false
  }

  initializePage() {
    this.main = document.querySelector('main')
    this.page = document.querySelector('main .page')
    this.left = document.querySelector('left-pane')
    this.dragview = document.querySelector('drag-view')
    this.leftPaneButton = this.view.querySelector('#index-button')
    this.leftPaneFrame = this.left.shadowRoot.querySelector('#outer-rectangle')

    // Toolbar
    this.toolbar = document.querySelector('tool-bar')
  }
  registerListeners() {
    // Left Pane
    this.leftPaneButton.addEventListener('click', () => {
      this.toggleLeftPane()
    })
    document
      .querySelector('#icon-ionic-ios-book')
      .addEventListener('click', () => {
        this.toggleLeftPane()
      })

    this.left.addEventListener('create', (startD, ts) => {
      if (!this.reloading) {
        this.model.savePageData({
          startDate: startD,
          timestamp: ts,
          texts: [],
          images: []
        })
      }
    })

    this.left.addEventListener('select', (startD, ts) => {
      this.saveLastPage(startD, ts)
      let pm = this.saveCurrentData()
      if (pm) {
        pm.then(() => {
          this.dragview.clearAll()

          console.log('load: ', ts)
          this.model
            .loadData(startD, ts)
            .then((obj) => {
              if (obj.exists()) {
                let data = obj.val()
                //console.log('json data:', data)
                if (!data.texts) {
                  data['texts'] = []
                }
                if (!data.images) {
                  data['images'] = []
                }
                this.dragview.entry = data
                this.dragview.load()
              } else {
                console.log('no data')
              }
            })
            .catch((e) => {
              console.log(e)
            })
        })
      } else {
        this.dragview.clearAll()
        this.dragview.entry.timestamp = ts
        this.dragview.entry.startDate = startD
      }
    })

    this.left.addEventListener('remove', (startDate, timestamp) => {
      this.model.removeData(startDate, timestamp)
      if (this.left.focusedChild)
        this.saveLastPage(
          this.left.focusedChild.getAttribute('startDate'),
          this.left.focusedChild.getAttribute('timestamp')
        )
    })

    //Tool Bar
    this.toolbar.addEventListener('textclicked', (e) => {
      this.dragview.textOnClick = this.dragview.textOnClick ? false : true
    })

    //TODO: fix test
    this.toolbar.addEventListener('imageclicked', (imageFile, e) => {
      this.model.saveImage(
        imageFile,
        (percentage) => {},
        (errorMsg) => {
          console.error(errorMsg)
        },
        (url, refStr) => {
          //console.log('complete..')
          //console.log('loading...')
          const img = new Image()
          img.setAttribute('refStr', refStr)
          img.src = url
          const imageView = new ImageView(img)
          imageView.json.url = url
          imageView.json.ref = refStr
          this.dragview.addDraggableImage(this.imageInsertPosition, imageView)
          //console.log('see json')
          //console.log(
          // this.dragview.draggableChildren[
          //   this.dragview.draggableChildren.length - 1
          // ].json
          //)
        }
      )
    })

    this.toolbar.addEventListener('bulletclicked', (e) => {
      this.dragview.toggleBulletFromFocusedText()
    })

    this.toolbar.addEventListener('boldclicked', (e) => {
      this.dragview.toggleBold()
    })

    this.toolbar.addEventListener('italicclicked', (e) => {
      this.dragview.toggleItalic()
    })

    this.toolbar.addEventListener('underlineclicked', (e) => {
      this.dragview.toggleUnderline()
    })

    this.toolbar.addEventListener('sizeclicked', (fontSize, e) => {
      this.dragview.fontSize = fontSize
    })

    this.toolbar.addEventListener('colorclicked', (color, e) => {
      this.dragview.textColor = color
    })
  }

  recoverLastPage() {
    this.reloading = true
    this.model.loadLastPageInfo().then((data) => {
      const lastPageInfo = data.val()
      if (lastPageInfo.list) {
        lastPageInfo.list.forEach((entry, i) => {
          const li = this.left.addNewEntry(new Date(parseInt(entry.timestamp)))
          if (
            lastPageInfo.startDate == li.getAttribute('startDate') &&
            lastPageInfo.timestamp == li.getAttribute('timestamp')
          ) {
            li.click()
          }
        })
      }
      this.model
        .loadData(lastPageInfo.startDate, lastPageInfo.timestamp)
        .then((obj) => {
          if (obj.exists()) {
            let data = obj.val()
            //console.log('json data:', data)
            if (!data.texts) {
              //console.log('no data')
              data['texts'] = []
            }
            if (!data.images) {
              data['images'] = []
            }
            this.dragview.entry = data
            this.dragview.load()
            this.reloading = false
          } else {
            console.log('not data')
            this.dragview.entry.timestamp = lastPageInfo.timestamp
            this.dragview.entry.startDate = lastPageInfo.startDate
            this.reloading = false
          }
        })
        .catch((e) => {
          console.log(e)
          this.dragview.entry.timestamp = lastPageInfo.timestamp
          this.dragview.entry.startDate = lastPageInfo.startDate
          this.reloading = false
        })
    })
  }

  saveLastPage(startDate, timestamp) {
    console.log('save last:', timestamp)
    let lastPage = this.left.getPageList()
    if (startDate) lastPage['startDate'] = startDate
    if (timestamp) lastPage['timestamp'] = timestamp
    console.log(lastPage)
    return this.model.updateLast(lastPage)
  }

  saveCurrentData() {
    this.dragview.updateEntry()
    // console.log('select:', this.dragview.entry)
    //console.log(this.left.focusedChild)
    console.log('save current ts', this.dragview.entry.timestamp)
    if (
      this.left.focusedChild &&
      this.dragview.entry.startDate &&
      this.dragview.entry.timestamp
    ) {
      console.log('save current:', this.dragview.entry)
      return this.model.updateData(this.dragview.entry)
    }
  }

  toggleLeftPane() {
    if (this.left.style.display === 'none') {
      this.left.style.display = 'block'
      this.page.style.left = this.leftPaneWidth + this.leftMargin + 'px'
      //console.log('open')
    } else {
      // Page hides - Move MAIN page left
      this.left.style.display = 'none'
      this.page.style.left = this.leftPaneButtonWidth + this.leftMargin + 'px'
      //console.log('close')
    }
  }

  // //Example code
  // onTextOnClickChanged(isTextOnClick) {
  //   console.log('TextOnClick change to: ' + isTextOnClick)
  // }

  // /**
  //  * @param {String} textColor rgb text color or name (e.g. "back", "red", "#fffeee")
  //  */
  // OnTextColorChanged(textColor) {
  //   console.log('Text color change to: ' + textColor)
  // }

  // /**
  //  * @param {object} position { left: '20px', top: '50px' }
  //  * @param {Image} img
  //  */
  // insertImage(position, img) {
  //   console.log('Insert image at position: ' + position)
  // }
}
