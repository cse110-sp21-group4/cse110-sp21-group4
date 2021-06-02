export class ImageView {
  constructor(img) {
    this.draggableFrame = undefined
    this.imageListeners = []
    this.image = img

    this.observers = {
      mousedown: [],
      remove: [],
      click: []
      //delete: []
    }
    /*
    this.removed = false
    this.keydowns = new Set()
    this.dragThreshold = 5
    */

    this.hasFocus = false
    this.resizingWidth = 10
    this._json = {
      url: '',
      ref: '',
      size: {},
      position: { left: '0px', top: '0px' }
    }
  }

  initializeListeners() {
    this.imageListeners.push({
      eventType: 'mousedown',
      callback: (e) => {
        this.observers.mousedown.forEach((cb, i) => {
          cb(e)
        })
      }
    })
    this.imageListeners.push({
      eventType: 'click',
      callback: (e) => {
        this.observers.click.forEach((cb, i) => {
          cb(e)
        })
      }
    })
  }

  setEventListeners() {
    this.imageListeners.forEach((listener, index) => {
      this.img.removeEventListener(listener.eventType, listener.callback)
      this.img.addEventListener(listener.eventType, listener.callback)
    })
  }

  removeSelf() {
    this.removed = true
    this.draggableFrame.removeChild(this.img)
    this.observers.remove.forEach((callback, i) => {
      callback()
    })
  }

  initializeImage(draggableFrame) {
    this.draggableFrame = draggableFrame
    this.img.classList.add('image')
    this.draggableFrame.appendChild(this.img)

    this.img.addEventListener('mousemove', (e) => {
      //console.log('resize')
      if (!this.isResizing(e.clientX, e.clientY)) {
        this.img.style.cursor = 'pointer'
      } else {
        this.img.style.cursor = 'nwse-resize'
      }
    })

    this.initializeListeners()
    this.setEventListeners()
  }

  addEventListener(eventType, callback) {
    this.observers[eventType].push(callback)
  }

  removeEventListener(eventType, callback) {
    this.observers[eventType].forEach((c, i) => {
      if (callback == c) {
        this.observers[eventType].splice(i, 0)
        return false
      }
    })
  }

  // removeAllListeners() {
  //  this.observers = { remove: [], focus: [] }
  // }

  addClass(cl) {
    this.img.classList.add(cl)
  }

  hasClass(cl) {
    return this.img.classList.contains(cl)
  }

  removeClass(cl) {
    this.img.classList.remove(cl)
  }

  focus() {
    this.img.focus()
  }
  isResizing(x, y) {
    const box = this.img.getBoundingClientRect()
    return (
      x >= box.right - this.resizingWidth &&
      x <= box.right &&
      y >= box.bottom - this.resizingWidth &&
      y <= box.bottom
    )
  }

  set draggable(dg) {
    this.img.draggable = dg
  }

  resize(x, y) {
    // console.log('client:' + x + '|' + y)
    this.img.style.width = window.getComputedStyle(this.img).width
    this.img.style.height = window.getComputedStyle(this.img).height
    // console.log(
    //   'original:' + this.img.style.width + '|' + this.img.style.height
    // )

    this.img.style.width = x - this.img.getBoundingClientRect().left + 'px'
    this.img.style.height = y - this.img.getBoundingClientRect().top + 'px'
    //console.log('changed:' + this.img.style.width + '|' + this.img.style.height)
  }

  /**
   * Set the position of the text relative to its parent
   * @param {object} coordinates {left: '123px', top: '1231px'}
   */
  set position(coordinates) {
    this.json.position = coordinates
    const framePosition = this.draggableFrame.getBoundingClientRect()
    if (
      parseFloat(coordinates.left) < 0 ||
      parseFloat(coordinates.left) + this.img.getBoundingClientRect().width >
        framePosition.width ||
      parseFloat(coordinates.top) < 0 ||
      parseFloat(coordinates.top) + this.img.getBoundingClientRect().height >
        framePosition.height
    ) {
      return
    }

    this.pos = coordinates
    this.img.style.left = coordinates.left
    this.img.style.top = coordinates.top
  }

  get position() {
    return this.pos
  }

  set image(img) {
    this.img = img
  }

  get image() {
    this.img
  }

  //TODO:
  get json() {
    this._json.size.width = window.getComputedStyle(this.img).width
    this._json.size.height = window.getComputedStyle(this.img).height
    return this._json
  }

  set json(json) {
    this._json = json
  }

  load() {
    this.img.style.width = this.json.size.width
    this.img.style.height = this.json.size.height
    this.position = this.json.position
  }
}
