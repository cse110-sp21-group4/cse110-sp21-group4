export class DragView extends HTMLElement {
  constructor() {
    super()
    const template = document.createElement('template')
    template.innerHTML = `
        <style>
          .drag-frame {
            position:relative;
            background-color: #eeeeee;
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
        this.addTextBox(textPosition).focus()
      }
    })
  }

  initializeAttributes() {
    this.textOnClick = true
  }

  /**
   *
   * @param {object} coordinates {left: "123px", top: "222px"}
   * @param {object} size {width: "123px", height: "123px"}
   * @returns {HTMLElement} returns the draggable frame itself
   */
  addTextBox(coordinates) {
    const textBox = document.createElement('textarea')
    textBox.classList.add('textbox')
    textBox.style.background = 'transparent'
    this.addDraggableElement(textBox, coordinates)
    textBox.addEventListener('click', (e) => {
      e.stopImmediatePropagation()
    })
    textBox.addEventListener('focus', () => {
      console.log('focus')
      textBox.classList.add('focus')
      textBox.style.resize = 'both'
    })
    textBox.addEventListener('blur', () => {
      console.log('blur')
      textBox.classList.remove('focus')
      textBox.style.resize = 'none'
    })
    textBox.addEventListener('keydown', (e) => {
      if (e.key === 'Delete') {
        console.log('delete')
        this.draggableFrame.removeChild(textBox)
        const index = this.textBoxes.indexOf(textBox)
        if (index != -1) {
          this.textBoxes.splice(index, 1)
        }
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
  addDraggableElement(element, coordinates) {
    this.draggableFrame.appendChild(element)
    element.style.left = coordinates.left
    element.style.top = coordinates.top
    element.draggable = true
    element.classList.add('draggable')

    let framePosition = {}
    let mousePosition = {}
    let elementPosition = {}
    element.addEventListener('dragstart', (e) => {
      framePosition = this.draggableFrame.getBoundingClientRect()
      elementPosition = element.getBoundingClientRect()

      mousePosition.x = e.clientX
      mousePosition.y = e.clientY
    })
    element.addEventListener('drag', (e) => {
      e.target.classList.add('dragging')
    })
    element.addEventListener('dragend', (e) => {
      e.preventDefault()
      //console.log('dragend')
      e.target.classList.remove('dragging')

      const deltaX = e.clientX - mousePosition.x
      const deltaY = e.clientY - mousePosition.y

      element.style.left = elementPosition.x - framePosition.x + deltaX + 'px'
      element.style.top = elementPosition.y - framePosition.y + deltaY + 'px'
      //console.log('x: ' + elementPosition.x + '| y:' + elementPosition.y)
      //console.log('x: ' + deltaX + '| y:' + deltaY)
      //console.log('x: ' + element.style.left + '| y:' + element.style.top)
    })
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
