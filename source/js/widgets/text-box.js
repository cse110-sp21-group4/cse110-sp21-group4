export class TextBox {
  constructor(draggableFrame, bullet) {
    if (draggableFrame) {
      this.draggableFrame = draggableFrame
    }
    if (bullet) {
      this.blt = bullet
    }
    this.textListeners = []
    this.bulletMargin = 10

    this.observers = { remove: [], focus: [] }
    this.removed = false

    this.initializeText()
    this.initializeEventListeners()
    this.setEventListeners()
  }

  initializeText() {
    this.text = document.createElement('textarea')
    this.text.classList.add('textbox')
    this.text.style.background = 'transparent'
  }

  removeBullet() {
    this.draggableFrame.removeChild(this.blt)
    this.blt = undefined
  }

  set bullet(bullet) {
    if (this.bullet) {
      this.removeBullet()
    }
    this.blt = bullet
    this.draggableFrame.appendChild(this.blt)
    const bulletStyle = window.getComputedStyle(this.blt)
    const textStyle = window.getComputedStyle(this.text)
    //console.log(bulletStyle.height, bulletStyle.bottom)
    this.bulletHeight = parseFloat(bulletStyle.height)
    this.bulletWidth = parseFloat(bulletStyle.width)

    const topBulletMargin =
      parseFloat(textStyle.padding) +
      0.6 * parseFloat(textStyle.fontSize) -
      this.bulletHeight / 2
    this.blt.style.top = parseFloat(textStyle.top) + topBulletMargin + 'px'
    this.blt.style.left =
      parseFloat(textStyle.left) -
      this.bulletWidth / 2 -
      this.bulletMargin +
      'px'

    //console.log(this.bulletHeight)
    //console.log(topBulletMargin)
    //console.log(textStyle.top)

    this.setEventListeners()
  }

  get bullet() {
    return this.blt
  }

  initializeEventListeners() {
    this.textListeners.push({
      eventType: 'click',
      callback: (e) => {
        e.stopImmediatePropagation()
      }
    })
    this.textListeners.push({
      eventType: 'mouseover',
      callback: (e) => {
        this.text.classList.add('mouse-over')
      }
    })
    this.textListeners.push({
      eventType: 'mouseout',
      callback: (e) => {
        this.text.classList.remove('mouse-over')
      }
    })

    this.textListeners.push({
      eventType: 'focus',
      callback: (e) => {
        //console.log('focus')
        this.text.classList.add('focus')
        this.text.style.resize = 'both'
        this.observers.focus.forEach((callback, i) => {
          callback()
        })
      }
    })
    this.textListeners.push({
      eventType: 'blur',
      callback: (e) => {
        console.log('blur')
        //console.log(this.text.value.trim() === '')
        //console.log(this.text.classList.contains('mouse-over'))
        if (this.hasNothing() && !this.text.classList.contains('mouse-over')) {
          this.removeSelf()
        } else {
          this.text.classList.remove('focus')
          this.text.style.resize = 'none'
        }
      }
    })
    this.textListeners.push({
      eventType: 'keydown',
      callback: (e) => {
        if (e.key === 'Delete') {
          //console.log('delete')
          this.removeSelf()
        }
      }
    })
  }

  removeSelf() {
    this.removed = true
    this.draggableFrame.removeChild(this.text)
    if (this.bullet) {
      this.draggableFrame.removeChild(this.bullet)
    }
    this.observers.remove.forEach((callback, i) => {
      callback(this)
    })
  }

  setEventListeners() {
    this.textListeners.forEach((listener, index) => {
      this.text.removeEventListener(listener.eventType, listener.callback)
      this.text.addEventListener(listener.eventType, listener.callback)
    })
  }

  addToDraggableFrame(coordinates) {
    this.draggableFrame.appendChild(this.text)
    this.text.style.left = coordinates.left
    this.text.style.top = coordinates.top
  }

  enableDragAndDrop() {
    this.text.classList.add('draggable')
    this.text.draggable = true
    let framePosition = {}
    let mousePosition = {}
    this.text.addEventListener('dragstart', (e) => {
      framePosition = this.draggableFrame.getBoundingClientRect()
      mousePosition.x = e.clientX
      mousePosition.y = e.clientY

      //console.log('dragstart')
      if (this.bullet) {
        this.bullet.classList.add('dragging')
        this.bullet.style.display = 'none'
      }
    })
    this.text.addEventListener('drag', (e) => {
      this.text.classList.add('dragging')
      //console.log('dragging')
    })
    this.text.addEventListener('dragend', (e) => {
      e.preventDefault()

      //console.log('dragend')
      this.text.classList.remove('dragging')

      const deltaX = e.clientX - mousePosition.x
      const deltaY = e.clientY - mousePosition.y

      const textPosition = this.text.getBoundingClientRect()
      this.text.style.left = textPosition.x - framePosition.x + deltaX + 'px'
      this.text.style.top = textPosition.y - framePosition.y + deltaY + 'px'

      //console.log(this.bullet)

      if (this.bullet) {
        this.bullet.style.display = 'block'
        const bulletPosition = this.bullet.getBoundingClientRect()
        this.bullet.style.left =
          bulletPosition.x - framePosition.x + deltaX + 'px'
        this.bullet.style.top =
          bulletPosition.y - framePosition.y + deltaY + 'px'
        this.bullet.classList.remove('dragging')
      }

      this.text.focus()
    })
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

  removeAllListeners() {
    this.observers = { remove: [], focus: [] }
  }

  focus() {
    this.text.focus()
  }

  hasNothing() {
    return this.text.value.trim() === '' && !this.bullet
  }

  onDraggableFrameMouseOut() {
    //this.textListeners.forEach((listener, index) => {
    //this.text.removeEventListener(listener.eventType, listener.callback)
    //})
  }

  onDraggableFrameMouseEnter() {
    //this.setEventListeners()
  }
  /**
   * Helpers
   */
}
