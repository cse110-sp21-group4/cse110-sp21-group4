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

          .move-in-ease {
            transition: transform 0.5s;
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
    this.initializeFields()
    this.initializeEventListeners()
  }

  initializeEventListeners() {
    this.draggableFrame.addEventListener('click', (e) => {
      if (this.createTextOnClick) {
        const framePosition = this.draggableFrame.getBoundingClientRect()
        //console.log('frame: ' + framePosition.x + '  mouse: ' + e.clientX)
        const textPosition = {
          //TODO 10, 20 should be variables
          left: e.clientX - framePosition.x - 10 + 'px',
          top: e.clientY - framePosition.y - 20 + 'px'
        }
        this.addDraggableTextBox(textPosition).focus()
      }
    })
    this.draggableFrame.addEventListener('mouseleave', (e) => {
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

  initializeFields() {
    this.draggableFrame = this.shadowRoot.querySelector('.drag-frame')
    this.lastFocusedText = undefined
    this.textBoxes = []
    this.draggableChildren = []
    this.bltType = 'dot'
    this.textOnClick = true
    this.enableMagneticPositioning = true
    this.bulletMargin = 10
    this.baselineFontSize = 20
    this.defaultPadding = 15
    this.defaultTabSize = 4
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
      this.removeArrayElement(child, this.textBoxes)
      this.removeArrayElement(child, this.draggableChildren)
    })
    textBox.addEventListener('focus', () => {
      this.lastFocusedText = textBox
    })

    textBox.addEventListener('tabpressed', () => {
      const newX = this.getNextTabPosition(textBox.text.getBoundingClientRect())
      console.log('old: ' + textBox.position.left, textBox.position.top)
      console.log('new: ' + newX + 'px', textBox.position.top)
      textBox.position = { left: newX + 'px', top: textBox.position.top }
    })

    this.textBoxes.push(textBox)
    this.draggableChildren.push[textBox]

    return textBox
  }

  /**
   * add draggable element to the view
   *
   * @param {HTMLElement} element the html element to add into this frame
   * @param {object} coordinats {left: "123px", top: "356px"}
   * @returns {null} returns the draggable frame itself
   */
  addDraggableElement(child, coordinates) {
    child.position = coordinates
    child.enableDragAndDrop()
  }

  magneticPositioning(child) {
    if (!this.magneticPositioning) return
    const nearest = this.getNearestChild(child)
  }

  /**
   * move a child to target by animation
   * @param {object} child a draggable child
   * @returns {object} {element: node, pos: '123px', side: 'bottom'}
   */
  moveDraggableChildByAnimation(child, target) {}

  /**
   * Helpers
   */

  /**
   * Get a nearest draggable element from a child
   * @param {object} child a draggable child
   * @returns {object} {element: node, pos: '123px', side: 'bottom'}
   */
  getNearestChild(child) {
    let minDistance = Infinity
    const nearestChild = {}
    this.draggableChildren.forEach((dChild, index) => {
      if (dChild.style.top & dChild.style.bottom) {
        const distanceBottom = Math.abs(
          parseFloat(child.style.bottom) - parseFloat(dChild.style.top)
        )
        const distanceTop = Math.abs(
          parseFloat(child.style.top) - parseFloat(dChild.style.bottom)
        )
        const distanceCenter = Math.abs(
          (parseFloat(child.style.bottom) - parseFloat(child.style.top)) / 2 -
            (parseFloat(dChild.style.bottom) - parseFloat(dChild.style.top)) / 2
        )

        const minObjectsDistance = Math.min(
          distanceBottom,
          distanceTop,
          distanceCenter
        )
        if (minObjectsDistance < minDistance) {
          minDistance = minObjectsDistance
          nearestChild.element = dChild

          switch (minObjectsDistance) {
            case distanceBottom:
              nearestChild.side = 'bottom'
              nearestChild.pos = dChild.style.top
              break
            case distanceTop:
              nearestChild.side = 'top'
              nearestChild.pos = dChild.style.bottom
              break
            default:
              nearestChild.side = 'cernter'
              nearestChild.pos =
                (parseFloat(dChild.style.bottom) -
                  parseFloat(dChild.style.top)) /
                  2 +
                'px'
          }
        }
      }
    })
    return nearestChild
  }

  removeArrayElement(element, array) {
    const index = array.indexOf(element)
    if (index != -1) {
      array.splice(index, 1)
    }
  }

  /**
   * Calculate the next tab position
   * @param {object} childPosition the object return by the getBoundingClientRect() method
   * @returns the horizontal position relative to the parent
   */
  getNextTabPosition(childPosition) {
    const framePosition = this.draggableFrame.getBoundingClientRect()
    const frameWidth = framePosition.right - framePosition.left

    const tabIndex = Math.ceil(
      (childPosition.x -
        framePosition.x -
        this.defaultPadding -
        this.bulletMargin) /
        (this.baselineFontSize * this.defaultTabSize)
    )
    return (
      this.defaultPadding +
      this.bulletMargin +
      tabIndex * (this.baselineFontSize * this.defaultTabSize)
    )
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
