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

    this.observers = {
      remove: [],
      focus: [],
      blur: [],
      tabpressed: [],
      dragend: [],
      backspace: [],
      enter: [],
      shiftenter: []
    }
    this.removed = false
    this.keydowns = new Set()

    this.initializeText()
    this.initializeEventListeners()
    this.setEventListeners()
  }

  initializeText() {
    this.text = document.createElement('textarea')
    this.text.classList.add('textbox')
    this.text.style.background = 'transparent'
    this.draggableFrame.appendChild(this.text)
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
      eventType: 'mouseleave',
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
        this.observers.focus.forEach((cb, i) => {
          cb()
        })
      }
    })
    this.textListeners.push({
      eventType: 'blur',
      callback: (e) => {
        //console.log('blur')
        this.observers.blur.forEach((cb, i) => {
          cb()
        })
        //console.log(this.text.value.trim() === '')
        //console.log(this.text.classList.contains('mouse-over'))
        if (
          !this.removed &&
          this.hasNothing() &&
          !this.text.classList.contains('mouse-over')
        ) {
          this.removeSelf()
        } else {
          this.text.classList.remove('focus')
        }
        this.text.style.resize = 'none'
      }
    })
    this.textListeners.push({
      eventType: 'keydown',
      callback: (e) => {
        this.keydowns.add(e.key)
        switch (e.key) {
          case 'Delete':
            //console.log('delete')
            this.removeSelf()
            break
          case 'Tab':
            e.preventDefault()
            console.log('Tab')
            this.observers.tabpressed.forEach((callback, i) => {
              callback()
            })
            break
          case 'Backspace':
            console.log('Backspace')
            this.observers.backspace.forEach((callback, i) => {
              callback()
            })
            break
          case 'Enter':
            if (this.keydowns.has('Shift')) {
              console.log('Shift + Enter')
              this.observers.shiftenter.forEach((callback, i) => {
                callback()
              })
            } else {
              console.log('Enter')
              this.observers.enter.forEach((callback, i) => {
                callback()
              })
            }
            break
        }
      }
    })

    this.textListeners.push({
      eventType: 'keyup',
      callback: (e) => {
        this.keydowns.delete(e.key)
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
      callback()
    })
  }

  setEventListeners() {
    this.textListeners.forEach((listener, index) => {
      this.text.removeEventListener(listener.eventType, listener.callback)
      this.text.addEventListener(listener.eventType, listener.callback)
    })
  }

  /**
   * Set the position of the text relative to its parent
   * @param {object} coordinates {left: '123px', top: '1231px'}
   */
  set position(coordinates) {
    const framePosition = this.draggableFrame.getBoundingClientRect()
    if (
      parseFloat(coordinates.left) - this.bulletMargin < 0 ||
      parseFloat(coordinates.left) + this.text.getBoundingClientRect().width >
        framePosition.width ||
      parseFloat(coordinates.top) < 0 ||
      parseFloat(coordinates.top) + this.text.getBoundingClientRect().height >
        framePosition.height
    ) {
      return
    }

    if (this.bullet) {
      this.bullet.style.left =
        parseFloat(this.bullet.style.left) +
        parseFloat(coordinates.left) -
        parseFloat(this.pos.left) +
        'px'
      this.bullet.style.top =
        parseFloat(this.bullet.style.top) +
        parseFloat(coordinates.top) -
        parseFloat(this.pos.top) +
        'px'
    }

    this.pos = coordinates
    this.text.style.left = coordinates.left
    this.text.style.top = coordinates.top
  }

  get position() {
    return this.pos
  }

  /**
   * translate vertically
   * @param {number} targetX position in the viewport
   * @param {number} targetY position in the viewport
   * @param {number} speed px / second
   */
  translateY(targetY) {
    console.log('target position:' + targetY)
    const deltaY = targetY - this.text.getBoundingClientRect().top
    const anims = []
    anims.push(
      this.text.animate([{ transform: 'translateY(' + deltaY + 'px)' }], {
        duration: 50
      }).finished
    )

    if (this.bullet) {
      anims.push(
        this.bullet.animate(
          [
            {
              transform: 'translateY(' + deltaY + 'px)'
            }
          ],
          {
            duration: 50
          }
        ).finished
      )
    }

    Promise.all(anims).then((data) => {
      this.position = {
        left: this.position.left,
        top: parseFloat(this.position.top) + deltaY + 'px'
      }
    })
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

      if (this.bullet) {
        this.bullet.style.display = 'block'
        this.bullet.classList.remove('dragging')
      }

      //console.log(this.bullet)

      const deltaX = e.clientX - mousePosition.x
      const deltaY = e.clientY - mousePosition.y

      this.position = {
        left: parseFloat(this.position.left) + deltaX + 'px',
        top: parseFloat(this.position.top) + deltaY + 'px'
      }

      this.observers.dragend.forEach((callback, i) => {
        callback()
      })
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
    return this.text.value === '' && !this.bullet
  }

  EmptyContent() {
    return this.text.value === ''
  }

  onDraggableFrameMouseOut() {
    console.log('mouseout!')
    this.textListeners.forEach((listener, index) => {
      this.text.removeEventListener(listener.eventType, listener.callback)
    })
  }

  onDraggableFrameMouseEnter() {
    console.log('mousein!')
    this.setEventListeners()
  }
  /**
   * Helpers
   */
}
