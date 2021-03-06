import { DragView } from './widgets/drag-view.js'
import { ImageView } from './widgets/image-view.js'
import { MainPageModel } from './main-page-model.js'
export class MainPageController {
  constructor(view) {
    this.view = view
    this.initializePage()
  }

  setModel(model) {
    this.model = model
    this.model.init()
  }

  initializeAttributes() {
    this.leftPaneWidth = this.leftPaneFrame.getBoundingClientRect().width
    this.leftPaneButtonWidth = this.leftPaneButton.getBoundingClientRect().width
    this.leftMargin = this.leftPaneFrame.getBoundingClientRect().left
    this.imageInsertPosition = { left: '20px', top: '50px' }
    this.reloading = false
  }

  initializePage() {
    this.page = document.querySelector('.page')
    this.left = document.querySelector('left-pane')
    this.dragview = document.querySelector('drag-view')
    this.leftPaneButton = this.view.querySelector('#index-button')
    this.leftPaneFrame = this.left.shadowRoot.querySelector('#outer-rectangle')
    this.leftPaneButtonIcon1 = this.view.querySelector('#Path_3')
    this.leftPaneButtonIcon2 = this.view.querySelector('#Path_4')
    this.topBarCalendar = this.view.querySelector('#Icon_awesome-calendar')
    this.topBarCalendarButton = this.view.querySelector('#Ellipse_2')
    this.right = document.querySelector('right-pane')
    this.topBarCalendarButton.style.display = 'none'
    //this.title = document.querySelector('top-bar').shadowRoot.querySelector('.top-bar').querySelector('.entry-heading')

    // Toolbar
    this.toolbar = document.querySelector('tool-bar')
    this.loginBg = document.querySelector('#login-bg')
    this.loginFrame = document.querySelector('#login-frame')
    this.emailInput = document.querySelector('#login-box .email-box input')
    this.passwordInput = document.querySelector('#login-box .passwd-box input')
    this.loginButton = document.querySelector('#btn-login')
    this.registerButton = document.querySelector('#btn-create')
    this.errorInfo = document.querySelector('#error-info')
    this.errorInfoTimeout = null
  }

  showLoginIfNeeded() {
    //console.log(this.model.getCurrentUser())
    if (this.model.getCurrentUser()) return
    this.loginFrame.style.display = 'block'
    this.loginBg.style.display = 'block'

    this.loginBg.style.width = window.innerWidth + 'px'
    this.loginBg.style.height = window.innerHeight + 'px'

    this.dragview.style.marginTop =
      ((parseInt(window.getComputedStyle(this.page).height) -
        parseInt(window.getComputedStyle(this.dragview).height)) /
        2.0) *
        0.8 +
      'px'

    window.addEventListener('resize', (e) => {
      if (this.loginBg.style.display == 'block') {
        this.loginBg.style.width = window.innerWidth + 'px'
        this.loginBg.style.height = window.innerHeight + 'px'
      }

      this.dragview.style.marginTop =
        ((parseInt(window.getComputedStyle(this.page).height) -
          parseInt(window.getComputedStyle(this.dragview).height)) /
          2.0) *
          0.8 +
        'px'
    })

    this.registerButton.addEventListener('click', (e) => {
      const email = this.emailInput.value
      const password = this.passwordInput.value
      this.model
        .signUp(email, password)
        .then((userCredential) => {
          this.showLoginError('User ' + email + ' created')
        })
        .catch((error) => {
          console.log('Create user failed:' + error.message)
          this.showLoginError('Register failed...')
        })
    })

    this.loginButton.addEventListener('click', (e) => {
      const email = this.emailInput.value
      const password = this.passwordInput.value

      //console.log(email, password)
      this.model
        .signIn(email, password)
        .then((userCredential) => {
          this.closeLoginWindow()
          this.recoverLastPage()
        })
        .catch((e) => {
          console.log('failed to login:' + e.message)
          this.showLoginError('Login failed...')
        })
    })
  }

  autoSave() {
    setInterval(() => {
      console.log('auto save...')
      this.saveCurrentData()
    }, 5000)
  }

  signOut() {
    return this.model.signOut()
  }

  showLoginError(errorMsg) {
    if (this.errorInfoTimeout) {
      clearTimeout(this.errorInfoTimeout)
    }
    this.errorInfo.innerHTML = errorMsg
    this.errorInfo.style.display = 'block'
    this.errorInfoTimeout = setTimeout(() => {
      this.errorInfo.style.display = 'none'
    }, 6000)
  }

  closeLoginWindow() {
    this.loginBg.style.display = 'none'
    this.loginFrame.style.display = 'none'
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

    this.left.addEventListener('clickplus', () => {
      this.left.addNewEntry(this.right.getSelectedDate()).click()
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
          this.loadPage(startD, ts)
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
      console.log('*********saving image')
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

          img.style.maxWidth = 840 + 'px'
          img.style.maxHeight = 560 + 'px'

          this.dragview.addDraggableImage(this.imageInsertPosition, imageView)
          console.log('*********image added')
          // img.style.maxWidth = 840 + 'px'
          // img.style.maxHeight = 560 + 'px'

          //console.log('see json')
          //console.log(
          // this.dragview.draggableChildren[
          //   this.dragview.draggableChildren.length - 1
          // ].json
          //)
        }
      )
    })

    this.right.addEventListener('dayclick', (date) => {
      //TODO: show data according to date
      // console.log(date, 'clicked')
      this.saveCurrentData()
      this.reloading = true
      this.left.clearEntries()
      this.dragview.clearAll()

      this.model
        .getEntriesForDate(date)
        .then((obj) => {
          if (obj.exists()) {
            let data = obj.val()
            const dataList = Object.values(data)
            //console.log('list of data:', dataList)
            this.left.addEntries(dataList, dataList[0])
            this.saveLastPage(dataList[0].startDate, dataList[0].timestamp)
            this.loadPage(dataList[0].startDate, dataList[0].timestamp)

            //this.loadPage()
          } else {
            console.log('No Data for', date)
          }
        })
        .catch((e) => {
          console.log(e)
        })
        .finally(() => {
          this.reloading = false
        })
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

    this.topBarCalendar.addEventListener('click', () => {
      if (this.right.style.display === 'none') {
        this.right.style.display = 'block'
        this.topBarCalendarButton.style.display = 'block'
      } else {
        // Page hides - Move MAIN page left
        this.right.style.display = 'none'
        this.topBarCalendarButton.style.display = 'none'
      }
    })
  }

  recoverLastPage() {
    this.reloading = true
    this.model
      .loadLastPageInfo()
      .then((data) => {
        const lastPageInfo = data.val()
        //console.log(data.val())
        if (lastPageInfo) {
          //console.log('render last')
          this.right.renderCalendar(new Date(parseInt(lastPageInfo.timestamp)))
          if (lastPageInfo.list) {
            //console.log(lastPageInfo)
            this.left.addEntries(lastPageInfo.list, lastPageInfo)
          }
          this.loadPage(lastPageInfo.startDate, lastPageInfo.timestamp, () => {
            this.reloading = false
          })
        } else {
          this.right.renderCalendar()
          this.reloading = false
        }
      })
      .catch((e) => {
        this.reloading = false
        this.right.renderCalendar()
      })
      .finally(() => {
        this.autoSave()
      })
  }

  loadPage(startDate, timestamp, finallyFn) {
    this.model
      .loadData(startDate, timestamp)
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
        } else {
          console.log('not exist')
        }
      })
      .catch((e) => {
        console.log(e)
      })
      .finally(() => {
        this.dragview.entry.timestamp = timestamp
        this.dragview.entry.startDate = startDate
        if (finallyFn) {
          finallyFn()
        }
      })
  }

  saveLastPage(startDate, timestamp) {
    //console.log('save last:', timestamp)
    let lastPage = this.left.getPageList()
    if (startDate) lastPage['startDate'] = startDate
    if (timestamp) lastPage['timestamp'] = timestamp
    //console.log(lastPage)
    return this.model.updateLast(lastPage)
  }

  saveCurrentData() {
    this.dragview.updateEntry()
    // console.log('select:', this.dragview.entry)
    //console.log(this.left.focusedChild)
    //console.log('save current ts', this.dragview.entry.timestamp)
    if (
      this.left.focusedChild &&
      this.dragview.entry.startDate &&
      this.dragview.entry.timestamp
    ) {
      //console.log('save current:', this.dragview.entry)
      return this.model.updateData(this.dragview.entry)
    }
  }

  toggleLeftPane() {
    if (this.left.style.display === 'none') {
      this.left.style.display = 'block'
      this.leftPaneButtonIcon1.style.display = 'none'
      this.leftPaneButtonIcon2.style.display = 'none'
      //console.log('open')
    } else {
      // Page hides - Move MAIN page left
      this.left.style.display = 'none'
      this.leftPaneButtonIcon1.style.display = 'block'
      this.leftPaneButtonIcon2.style.display = 'block'
      //console.log(this.toolbar.style.left)
      //console.log('close')
    }
  }
}
