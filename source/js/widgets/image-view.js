export class ImageView {
  constructor(draggableFrame, img) {
    this.draggableFrame = draggableFrame
    this.imageListeners = []
    this.image = img

    this.observers = {
      mousedown: []
    }
    /*
    this.removed = false
    this.keydowns = new Set()
    this.dragThreshold = 5
    */

    this.initializeImage()
    // this.setEventListeners()
  }

  initializeImage() {
    this.img.classList.add('image')
    this.draggableFrame.appendChild(this.img)
  }

  // setEventListeners() {
  //   Object.entries(this.observers).forEach((entry, index) => {
  //     this.image.removeEventListener(entry[0], entry[1])
  //     this.image.addEventListener(entry[0], entry[1])
  //   })
  // }

  addEventListener(eventType, callback) {
    this.observers[eventType].push(callback)
    this.img.addEventListener(eventType, callback)
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
