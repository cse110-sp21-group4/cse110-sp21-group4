export class ImageView {
  constructor(draggableFrame, img) {
    this.draggableFrame = draggableFrame
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
    this.resizingWidth = 8
    this.initializeImage()
    this.initializeListeners()
    this.setEventListeners()
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

  initializeImage() {
    this.img.classList.add('image')
    this.draggableFrame.appendChild(this.img)
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

  /**
   * Set the position of the text relative to its parent
   * @param {object} coordinates {left: '123px', top: '1231px'}
   */
  set position(coordinates) {
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
}
