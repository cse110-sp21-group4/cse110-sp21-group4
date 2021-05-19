export class TextBox {
  constructor(draggableFrame, bullet) {
    if (draggableFrame) {
      this.draggableFrame = draggableFrame
    }
    if (bullet) {
      this.blt = bullet
    }
    this.textListeners = []

    this.observers = { remove: [] }

    this.initializeText()
    this.initializeEventListeners()
    this.setEventListeners()
  }

  initializeText() {
    this.text = document.createElement('textarea')
    this.text.classList.add('textbox')
    this.text.style.background = 'transparent'
  }

  set bullet(bullet) {
    this.blt = bullet
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
      eventType: 'focus',
      callback: (e) => {
        console.log('focus')
        this.text.classList.add('focus')
        this.text.style.resize = 'both'
      }
    })
    this.textListeners.push({
      eventType: 'blur',
      callback: (e) => {
        console.log('blur')
        this.text.classList.remove('focus')
        this.text.style.resize = 'none'
      }
    })
    this.textListeners.push({
      eventType: 'keydown',
      callback: (e) => {
        if (e.key === 'Delete') {
          console.log('delete')
          this.draggableFrame.removeChild(this.text)
          this.observers.remove.forEach((callback, i) => {
            callback(this)
          })
        }
      }
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
    let elementPosition = {}
    this.text.addEventListener('dragstart', (e) => {
      framePosition = this.draggableFrame.getBoundingClientRect()
      elementPosition = this.text.getBoundingClientRect()

      mousePosition.x = e.clientX
      mousePosition.y = e.clientY
    })
    this.text.addEventListener('drag', (e) => {
      e.target.classList.add('dragging')
    })
    this.text.addEventListener('dragend', (e) => {
      e.preventDefault()
      //console.log('dragend')
      e.target.classList.remove('dragging')

      const deltaX = e.clientX - mousePosition.x
      const deltaY = e.clientY - mousePosition.y

      this.text.style.left = elementPosition.x - framePosition.x + deltaX + 'px'
      this.text.style.top = elementPosition.y - framePosition.y + deltaY + 'px'
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
    this.observers = { remove: [] }
  }

  focus() {
    this.text.focus()
  }
}
