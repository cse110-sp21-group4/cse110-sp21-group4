import { TextBox } from './text-box.js'

export class DragView extends HTMLElement {
  constructor() {
    super()
    const template = document.createElement('template')
    template.innerHTML = `
        <style>
          .drag-frame {
            position:relative;
            background: transparent;
            border:1px solid grey;
            width:100%;
            height: 100%;
          }
          .draggable {
            display:block;
            position:absolute;
          }

          .dragging {
            display:none;
          }
          .focus {

          }

          .textbox {
            resize: none;
            padding: 8px;
            overflow: hidden;
            height: 20px;
            font-size: 20px;
            width: 200px;
            border: none;
          }

          .bullet-square {
            display:block;
            position:absolute;
            background-color: black;
            display:block;
            border: 1.5px solid black;
            height: 4px;
            width: 4px;
          }
          .bullet-circle {
            display:block;
            position:absolute;
            border-radius: 50%;
            background: transparent;
            border: 1.5px solid black;
            display:block;
            height: 4px;
            width: 4px;
          }
          .bullet-dot {
            display: block;
            position:absolute;
            border-radius: 50%;
            border: 1.5px solid black;
            background-color: black;
            display:block;
            height: 4px;
            width: 4px;
          }

        </style>
        <div class="drag-frame">
        </div>
        `

    // template.addEventListener('click',editPage());

    //const link = document.createElement('link')
    //link.setAttribute('rel', 'stylesheet')
    //link.setAttribute('href', 'style.css')

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    //this.shadowRoot.appendChild(link)
    this.draggableFrame = this.shadowRoot.querySelector('.drag-frame')
    this.lastFocusedText = undefined
    this.textBoxes = []
    this.bltType = 'dot'
    this.initializeAttributes()
    this.initializeEventListeners()
  }

  initializeEventListeners() {
    this.draggableFrame.addEventListener('click', (e) => {
      if (this.createTextOnClick) {
        const framePosition = this.draggableFrame.getBoundingClientRect()
        //console.log('frame: ' + framePosition.x + '  mouse: ' + e.clientX)
        const textPosition = {
          left: e.clientX - framePosition.x - 10 + 'px',
          top: e.clientY - framePosition.y - 20 + 'px'
        }
        this.addDraggableTextBox(textPosition).focus()
      }
    })
    this.draggableFrame.addEventListener('mouseout', (e) => {
      this.textBoxes.forEach((textBox, index) => {
        textBox.onDraggableFrameMouseOut()
      })
    })

    this.draggableFrame.addEventListener('mouseenter', (e) => {
      this.textBoxes.forEach((textBox, index) => {
        textBox.onDraggableFrameMouseEnter()
      })
    })
  }

  initializeAttributes() {
    this.textOnClick = true
  }

  toggleBulletFromFocusedText() {
    if (this.lastFocusedText.bullet) {
      this.removeBulletFromeFocusedText()
    } else {
      this.addBulletToFocusedText()
    }
  }

  removeBulletFromeFocusedText() {
    this.lastFocusedText.removeBullet()
  }

  addBulletToFocusedText() {
    this.addBulletToText(this.lastFocusedText, this.bltType)
  }

  /**
   * Add a bullet to a text box
   * @param {*} bulletType 'circle', 'square', 'dot'
   * @param {*} textBox
   * @returns {Image} a block displayed bullet(Image)
   */
  addBulletToText(textBox, bulletType) {
    if (textBox.removed) {
      return
    }
    const bullet = document.createElement('div')
    switch (bulletType) {
      case 'circle':
        bullet.classList.add('bullet-circle')
        break
      case 'square':
        bullet.classList.add('bullet-square')
        break
      default:
        bullet.classList.add('bullet-dot')
    }
    textBox.bullet = bullet
  }

  /**
   * Add a editable and draggable text box
   * @param {object} coordinates {left: "123px", top: "222px"}
   * @param {object} size {width: "123px", height: "123px"}
   * @returns {HTMLElement} returns the draggable frame itself
   */
  addDraggableTextBox(coordinates) {
    const textBox = new TextBox(this.draggableFrame)
    this.addDraggableElement(textBox, coordinates)
    textBox.addEventListener('remove', (child) => {
      const index = this.textBoxes.indexOf(child)
      if (index != -1) {
        this.textBoxes.splice(index, 1)
      }
    })
    textBox.addEventListener('focus', () => {
      this.lastFocusedText = textBox
    })

    this.textBoxes.push(textBox)

    return textBox
  }

  /**
   * add draggable element to the view
   *
   * @param {HTMLElement} element the html element to add into this frame
   * @param {object} coordinats {left: "123px", top: "356px"}
   * @returns {null} returns the draggable frame itself
   */
  addDraggableElement(childElement, coordinates) {
    childElement.addToDraggableFrame(coordinates)
    childElement.enableDragAndDrop()
  }

  /**
   * Setter and getter
   */
  set textOnClick(isTextOnClick) {
    this.createTextOnClick = isTextOnClick
  }

  get textOnClick() {
    return this.createTextOnClick
  }
}

customElements.define('drag-view', DragView)
