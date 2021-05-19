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
            border: 1px solid red;
          }

          .bullet-square {
            background-color: black;
            display:block;
            height: 8px;
            width: 8px;
          }
          .bullet-circle {
            corner-radius: 4px;
            background: transparent;
            border: 1px solid black;
            display:block;
            height: 8px;
            width: 8px;
          }
          .bullet-dot {
            corner-radius: 4px;
            background-color: black;
            display:block;
            height: 8px;
            width: 8px;
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
    this.textBoxes = []
    this.initializeAttributes()
    this.initializeEventListeners()
  }

  initializeEventListeners() {
    this.draggableFrame.addEventListener('click', (e) => {
      if (this.createTextOnClick) {
        const framePosition = this.draggableFrame.getBoundingClientRect()
        console.log('frame: ' + framePosition.x + '  mouse: ' + e.clientX)
        const textPosition = {
          left: e.clientX - framePosition.x - 10 + 'px',
          top: e.clientY - framePosition.y - 20 + 'px'
        }
        this.addDraggableTextBox(textPosition).focus()
      }
    })
  }

  initializeAttributes() {
    this.textOnClick = true
  }

  /**
   * Add a bullet to a text box
   * @param {*} bulletType 'circle', 'square', 'dot'
   * @param {*} textBox
   * @returns {Image} a block displayed bullet(Image)
   */
  addBulletToText(bulletType, textBox) {
    const index = this.textBoxes.index(textBox)
    if (index == -1) {
      console.log('Text box not found!')
      return
    }

    const blt = new Image()
    blt.style.display = 'block'
    switch (bulletType) {
      case 'circle':
        blt.classList.add('bullet-circle')
        break
      case 'square':
        blt.classList.add('bullet-square')
        break
      default:
        blt.classList.add('bullet-dot')
        break
    }
    this.bulletTextBoxes.push({ text: textBox, bullet: blt })
    this.textBoxes.splice(index, 1)

    return blt
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
