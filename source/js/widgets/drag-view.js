import { TextBox } from './text-box.js'
import { ImageView } from './image-view.js'

export class DragView extends HTMLElement {
  constructor() {
    super()
    const template = document.createElement('template')
    template.innerHTML = `
        <style>
          .drag-frame {
            position:relative;
            background: transparent;
            width:100%;
            height: 100%;
          }
          .draggable {
            display:block;
            position:absolute;
          }

          .dragging {
          }
          .focus {

          }

          .textbox {
            resize: none;
            padding: 5px;
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

          .image {
            display: block;
            width: 100%
            height:100%
          }

          .image-frame {
            display: block;
            position: absolute;
            resize: both;
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
    this._entry = { texts: [], images: [] }
  }

  initializeEventListeners() {
    window.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'Delete':
          //console.log('del')
          if (this.focusedChild) {
            this.focusedChild.removeSelf()
          }
          break
      }
    })
    this.draggableFrame.addEventListener('click', (e) => {
      //console.log('click?')
      if (this.mouseEvents.has('imagedragged')) return
      //console.log('click')
      if (this.mouseEvents.has('resized')) {
        this.mouseEvents.delete('resized')
        return
      }
      if (this.createTextOnClick) {
        const framePosition = this.draggableFrame.getBoundingClientRect()
        //console.log('frame: ' + framePosition.x + '  mouse: ' + e.clientX)
        const textPosition = {
          //TODO 10, 20 should be variables
          left: e.clientX - framePosition.x - 10 + 'px',
          top: e.clientY - framePosition.y - 20 + 'px'
        }
        this.addDraggableTextBox(textPosition).focus()
        // console.log(
        //   this.draggableChildren[this.draggableChildren.length - 1].json
        // )
      }
    })
    window.addEventListener('click', (e) => {
      if (this.mouseEvents.has('imagedragged')) {
        //console.log('remove dragged...')
        this.mouseEvents.delete('imagedragged')
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
    this.baselineFontSize = 14
    this.defaultPadding = 15
    this.defaultTabSize = 2
    this.lineSpacing = 0
    this.magneticPotentialThreshold = 30
    this.bulletStyles = ['dot', 'circle', 'square']
    this.mouseEvents = new Set()
    this.movingElement = new Set()
    this.focusedChild = undefined
    this.fontSz = 20
    this.txtColor = 'black'
    this.bold = false
    this.italic = false
    this.underline = false
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
    //console.log(this.lastFocusedText.json)
  }

  addBulletToFocusedText() {
    this.addBulletToText(this.lastFocusedText, this.bltType)
    //console.log(this.lastFocusedText.json)
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

    let hasStyle = false
    this.bulletStyles.forEach((stylestr, index) => {
      if (bulletType == stylestr) {
        bullet.classList.add('bullet-' + stylestr)
        textBox.json.bullet = stylestr
        hasStyle = true
        return true
      }
    })

    if (!hasStyle) {
      bullet.classList.add('bullet-dot')
      textBox.json.bullet = 'dot'
    }

    textBox.bullet = bullet
  }

  /**
   * Add a draggable image
   * @param {img} imageView object that contains a image
   * @param {object} coordinates {left: "123px", top: "222px"}
   * @returns {object} returns the draggable item
   */
  addDraggableImage(coordinates, img) {
    img.initializeImage(this.draggableFrame)

    this.addDraggableElement(img, coordinates)
    this.draggableChildren.push(img)

    img.addEventListener('remove', () => {
      this.removeArrayElement(img, this.draggableChildren)
    })
    img.addEventListener('click', () => {
      this.focusedChild = img
    })
    this.focusedChild = img

    //this.entry.images.push(img.json)
  }

  /**
   * Add a editable and draggable text box
   * @param {object} coordinates {left: "123px", top: "222px"}
   * @returns {object} returns the draggable item
   */
  addDraggableTextBox(coordinates) {
    const textBox = new TextBox(this.draggableFrame)

    this.addDraggableElement(textBox, coordinates)
    textBox.addEventListener('remove', () => {
      this.removeArrayElement(textBox, this.textBoxes)
      this.removeArrayElement(textBox, this.draggableChildren)
    })
    textBox.addEventListener('focus', () => {
      this.lastFocusedText = textBox
    })

    textBox.addEventListener('tabpressed', () => {
      const newX = this.getNextTabPosition(textBox)
      //console.log('old: ' + textBox.position.left, textBox.position.top)
      //console.log('new: ' + newX + 'px', textBox.position.top)
      textBox.position = { left: newX + 'px', top: textBox.position.top }

      //Change bullet when tab
      if (textBox.bullet) {
        let bulletIndex = 0
        this.bulletStyles.forEach((style, index) => {
          if (textBox.bullet.classList.contains('bullet-' + style)) {
            bulletIndex =
              index < this.bulletStyles.length - 1
                ? index + 1
                : this.bulletStyles.length - 1
            return true
          }
        })
        textBox.removeBullet()
        this.addBulletToText(textBox, this.bulletStyles[bulletIndex])
      }
    })

    textBox.addEventListener('backspace', () => {
      if (textBox.EmptyContent()) {
        if (this.lessThanFirstTabPosition(textBox)) {
          //console.log('first position, delete')
          if (!textBox.removed) {
            textBox.removeSelf()
          }
        } else {
          //console.log('Not first position, move left')
          const newX = this.getPreviousTabPosition(textBox)
          //console.log(newX)
          textBox.position = { left: newX + 'px', top: textBox.position.top }
        }
      }
    })
    textBox.addEventListener('enter', () => {
      const framePosition = this.draggableFrame.getBoundingClientRect()
      //console.log('frame: ' + framePosition.x + '  mouse: ' + e.clientX)
      const textPosition = {
        left: textBox.position.left,
        top:
          parseFloat(textBox.position.top) +
          textBox.text.getBoundingClientRect().height +
          this.lineSpacing +
          'px'
      }
      const newTextBox = this.addDraggableTextBox(textPosition)
      newTextBox.focus()
      if (textBox.bullet) {
        this.bulletStyles.forEach((style, index) => {
          if (textBox.bullet.classList.contains('bullet-' + style)) {
            this.addBulletToText(newTextBox, style)
            return true
          }
        })
      }
    })

    //console.log('new text:' + this.fontSize)
    textBox.fontSize = this.fontSize + 'px'
    textBox.color = this.textColor
    textBox.underline = this.underline
    textBox.bold = this.bold
    textBox.italic = this.italic
    this.textBoxes.push(textBox)
    this.draggableChildren.push(textBox)
    this.focusedChild = textBox
    //this.entry.texts.push(textBox.json)

    //console.log(this.entry)

    /*console.log(
      'boxes vs children:' +
        this.textBoxes.length +
        '|' +
        this.draggableChildren.length
    )*/

    return textBox
  }

  /**
   * add draggable element to the view
   *
   * @param {object} child the wrapper of html element to add into this frame
   * @param {object} coordinats {left: "123px", top: "356px"}
   */
  addDraggableElement(child, coordinates) {
    child.position = coordinates
    this.enableDragAndDrop(child)
  }

  enableDragAndDrop(child) {
    child.draggable = false
    child.addClass('draggable')
    //this.text.draggable = true
    //let framePosition = {}
    let mousePosition = {}
    child.addEventListener('mousedown', (e) => {
      //framePosition = this.draggableFrame.getBoundingClientRect()
      // console.log('mousedown')
      this.focusedChild = child
      e.stopPropagation()
      mousePosition.x = e.clientX
      mousePosition.y = e.clientY
      if (!child.isResizing(e.clientX, e.clientY)) {
        this.mouseEvents.add('mousedown')
      } else {
        this.mouseEvents.add('mousedownresize')
      }
      this.movingElement.add(child)
    })

    window.addEventListener('mousemove', (e) => {
      if (!this.movingElement.has(child)) return
      if (this.mouseEvents.has('mousedown')) {
        if (!this.mouseEvents.has('dragging')) {
          //console.log('dragstart')
          this.mouseEvents.add('dragging')
        }
        if (!child.hasClass('dragging')) {
          child.addClass('dragging')
        }
        //if (this.bullet && !this.bullet.classList.contains('dragging')) {
        //  this.bullet.classList.add('dragging')
        //this.bullet.style.display = 'none'
        //}
        this.mouseEvents.delete('mousedown')
      }

      if (this.mouseEvents.has('dragging')) {
        //console.log('dragging')
        e.preventDefault()

        const deltaX = e.clientX - mousePosition.x
        const deltaY = e.clientY - mousePosition.y
        mousePosition.x = e.clientX
        mousePosition.y = e.clientY

        child.position = {
          left: parseFloat(child.position.left) + deltaX + 'px',
          top: parseFloat(child.position.top) + deltaY + 'px'
        }
        //console.log(this.draggableFrame.getBoundingClientRect())
      }
      if (this.mouseEvents.has('mousedownresize')) {
        if (child instanceof TextBox) {
          child.resized = true
        } else if (child instanceof ImageView) {
          child.resize(e.clientX, e.clientY)
        }
      }
    })

    window.addEventListener('mouseup', (e) => {
      if (this.mouseEvents.has('mousedownresize')) {
        this.mouseEvents.delete('mousedownresize')
        this.mouseEvents.add('resized')
      }
      //console.log('mouseup')
      if (!this.movingElement.has(child)) return
      if (this.mouseEvents.has('mousedown')) {
        this.mouseEvents.delete('mousedown')
      }
      if (this.mouseEvents.has('dragging')) {
        //e.preventDefault()
        //console.log('add dragged')
        //console.log(this.mouseEvents)
        this.mouseEvents.delete('dragging')
        //console.log(this.mouseEvents)
        child.removeClass('dragging')

        // if (this.bullet) {
        // this.bullet.style.display = 'block'
        //  this.bullet.classList.remove('dragging')
        // }
        const deltaX = e.clientX - mousePosition.x
        const deltaY = e.clientY - mousePosition.y
        mousePosition.x = e.clientX
        mousePosition.y = e.clientY

        child.position = {
          left: parseFloat(child.position.left) + deltaX + 'px',
          top: parseFloat(child.position.top) + deltaY + 'px'
        }

        if (child instanceof ImageView) {
          this.mouseEvents.add('imagedragged')
        }

        if (child instanceof TextBox) {
          this.magneticPositioning(child)
        }
        child.focus()
      }
      this.movingElement.delete(child)
    })
  }

  magneticPositioning(child) {
    if (!this.enableMagneticPositioning) return
    const nearest = this.getNearestChild(child)
    if (nearest) {
      //console.log('find nearest: ' + nearest.pos)
      this.moveDraggableChildByAnimation(child, nearest)
    }
  }

  /**
   * move a child to target by animation
   * @param {object} child a draggable child
   * @returns {object} {element: node, pos: 123, side: 'bottom'} position related to the viewport
   */
  moveDraggableChildByAnimation(child, target) {
    //console.log('animate..')
    const childPos = child.text.getBoundingClientRect()
    switch (target.side) {
      case 'top':
        //console.log('animate top..')
        child.translateY(target.pos + this.lineSpacing)
        break
      case 'bottom':
        //console.log('animate bottom..')
        child.translateY(
          target.pos -
            (parseInt(childPos.bottom) - parseInt(childPos.top)) -
            this.lineSpacing
        )
        break
      default:
        //console.log('animate center..')
        child.translateY(
          target.pos - (parseInt(childPos.bottom) - parseInt(childPos.top)) / 2
        )
    }
  }

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
    let nearestChild = undefined
    //console.log('looking for nearest...')
    //console.log('draggable children:' + this.draggableChildren.length)
    const childStyle = child.text.getBoundingClientRect()
    this.draggableChildren.forEach((dChild, index) => {
      //console.log('child' + index)
      if (dChild == child || dChild instanceof ImageView) {
        return
      }

      const style = dChild.text.getBoundingClientRect()

      //console.log('dchild: ' + style.bottom + '| ' + style.top)
      //console.log('child: ' + childStyle.bottom + '| ' + childStyle.top)
      if (style.top && style.bottom) {
        const distanceBottom = Math.abs(childStyle.bottom - style.top)
        const distanceTop = Math.abs(childStyle.top - style.bottom)
        const distanceCenter = Math.abs(
          (childStyle.top + childStyle.bottom) / 2 -
            (style.top + style.bottom) / 2
        )

        /*console.log(
          'top:' +
            distanceTop +
            '| bottom:' +
            distanceBottom +
            '| center:' +
            distanceCenter
        )*/
        const minObjectsDistance = Math.min(
          distanceBottom,
          distanceTop,
          distanceCenter
        )

        //console.log('min distance: ' + minObjectsDistance)
        if (
          minObjectsDistance < this.magneticPotentialThreshold &&
          minObjectsDistance < minDistance
        ) {
          //console.log('found nearer')
          nearestChild = {}
          minDistance = minObjectsDistance
          nearestChild.element = dChild

          switch (minObjectsDistance) {
            case distanceBottom:
              nearestChild.side = 'bottom'
              nearestChild.pos = style.top
              break
            case distanceTop:
              nearestChild.side = 'top'
              nearestChild.pos = style.bottom
              break
            default:
              nearestChild.side = 'cernter'
              nearestChild.pos = (style.bottom + style.top) / 2
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

  lessThanFirstTabPosition(textBox) {
    const firstPosition = this.defaultPadding + this.bulletMargin

    //console.log(textBox.text.offsetLeft + '|' + firstPosition)
    return textBox.text.offsetLeft <= firstPosition
  }

  /**
   * Calculate the previous tab position
   * @param {object} childPosition the object return by the getBoundingClientRect() method
   * @returns {number} the horizontal previous position relative to the parent
   */
  getPreviousTabPosition(textBox) {
    const tabIndex = Math.ceil(
      (textBox.text.offsetLeft - this.defaultPadding - this.bulletMargin) /
        (this.baselineFontSize * this.defaultTabSize) -
        1.0
    )
    //console.log('index:' + tabIndex)
    return (
      this.defaultPadding +
      this.bulletMargin +
      tabIndex * (this.baselineFontSize * this.defaultTabSize)
    )
  }

  /**
   * Calculate the next tab position
   * @param {object} textBox
   * @returns {number} the horizontal position relative to the parent
   */
  getNextTabPosition(textBox) {
    const tabIndex = Math.floor(
      (textBox.text.offsetLeft - this.defaultPadding - this.bulletMargin) /
        (this.baselineFontSize * this.defaultTabSize) +
        1.0
    )
    return (
      this.defaultPadding +
      this.bulletMargin +
      tabIndex * (this.baselineFontSize * this.defaultTabSize)
    )
  }

  toggleUnderline() {
    this.underline = this.underline ? false : true
    if (this.lastFocusedText) {
      this.lastFocusedText.underline = this.underline
    }
  }

  toggleBold() {
    this.bold = this.bold ? false : true
    if (this.lastFocusedText) {
      this.lastFocusedText.bold = this.bold
    }
  }

  toggleItalic() {
    this.italic = this.italic ? false : true
    if (this.lastFocusedText) {
      this.lastFocusedText.italic = this.italic
    }
  }

  clearAll() {
    //console.log('clear:' + this.draggableChildren.length)
    //console.log('start clear')
    while (this.draggableChildren.length > 0) {
      this.draggableChildren[0].removeSelf()
    }
    //console.log('end clear')
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

  set fontSize(fontSize) {
    this.fontSz = fontSize

    if (this.lastFocusedText) {
      //console.log('change font size to ' + this.fontSize)
      this.lastFocusedText.fontSize = this.fontSize + 'px'
      this.lastFocusedText.resizeToFitText()
    }
  }

  get fontSize() {
    return this.fontSz
  }

  set textColor(textColor) {
    this.txtColor = textColor

    if (this.lastFocusedText) {
      //console.log('change text color to ' + this.textColor)
      this.lastFocusedText.color = this.textColor
    }
    //TODO change current text font size
  }

  get textColor() {
    return this.txtColor
  }

  get entry() {
    return this._entry
  }

  set entry(entry) {
    this._entry = entry
  }

  updateEntry() {
    //console.log('update entry')
    this._entry.images = []
    this._entry.texts = []
    this.draggableChildren.forEach((child, i) => {
      child.updateJson()
      if (child instanceof TextBox) {
        this._entry.texts.push(child.json)
      } else if (child instanceof ImageView) {
        this._entry.images.push(child.json)
      }
    })
  }

  load() {
    //console.log('load start')
    this._entry.texts.forEach((json, i) => {
      //console.log('load text:', json)
      const tb = this.addDraggableTextBox(json.position)
      tb.json = json
      tb.load()
      if (json.bullet !== 'none') {
        this.addBulletToText(tb, json.bullet)
      }
    })
    this._entry.images.forEach((json, i) => {
      const img = new Image()
      img.setAttribute('refStr', json.ref)
      img.src = json.url
      const imageView = new ImageView(img)
      this.addDraggableImage(json.position, imageView)
      imageView.json = json
      imageView.load()
    })
    //console.log('load end')
  }
}

customElements.get('drag-view') || customElements.define('drag-view', DragView)
