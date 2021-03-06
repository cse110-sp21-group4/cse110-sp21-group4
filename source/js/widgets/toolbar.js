export class ToolBar extends HTMLElement {
  constructor() {
    super()
    //console.log('toolbar constr called')
    const template = document.createElement('template')
    template.innerHTML = `

        <div class="tool-bar">
          <button class="tool selected-tool" id="text-tool">
            <svg class="icon-text" viewBox="0 0 36 36">
              <path id="icon-text" d="M 0 0 L 0 9 L 2.25 9 C 2.25 6.525000095367432 4.275000095367432 4.5 6.75 4.5 L 13.5 4.5 L 13.5 29.25 C 13.5 30.51000022888184 12.51000022888184 31.5 11.25 31.5 L 9 31.5 L 9 36 L 27 36 L 27 31.5 L 24.75 31.5 C 23.48999977111816 31.5 22.5 30.51000022888184 22.5 29.25 L 22.5 4.5 L 29.25 4.5 C 31.72500038146973 4.5 33.75 6.525000095367432 33.75 9 L 36 9 L 36 0 L 0 0 Z">
              </path>
	          </svg>
          </button>

          <button class="tool" id="image-tool">
            <svg class="Icon_material-image" viewBox="4.5 4.5 27 27">
              <path id="Icon_material-image" d="M 31.5 28.5 L 31.5 7.5 C 31.5 5.849999904632568 30.14999961853027 4.5 28.5 4.5 L 7.5 4.5 C 5.849999904632568 4.5 4.5 5.849999904632568 4.5 7.5 L 4.5 28.5 C 4.5 30.14999961853027 5.849999904632568 31.5 7.5 31.5 L 28.5 31.5 C 30.14999961853027 31.5 31.5 30.14999961853027 31.5 28.5 Z M 12.75 20.25 L 16.5 24.76499938964844 L 21.75 18 L 28.5 27 L 7.5 27 L 12.75 20.25 Z">
              </path>
	          </svg>
          </button>

          <button class="tool" id="bullets-tool">
            <svg class="icon-bullet" viewBox="2 2 50 50">
              <path id="icon-bullet" d="M 4 4 C 1.800781 4 0 5.800781 0 8 C 0 10.199219 1.800781 12 4 12 C 6.199219 12 8 10.199219 8 8 C 8 5.800781 6.199219 4 4 4 Z M 12 6 L 12 10 L 50 10 L 50 6 Z M 4 21 C 1.800781 21 0 22.800781 0 25 C 0 27.199219 1.800781 29 4 29 C 6.199219 29 8 27.199219 8 25 C 8 22.800781 6.199219 21 4 21 Z M 12 23 L 12 27 L 50 27 L 50 23 Z M 4 38 C 1.800781 38 0 39.800781 0 42 C 0 44.199219 1.800781 46 4 46 C 6.199219 46 8 44.199219 8 42 C 8 39.800781 6.199219 38 4 38 Z M 12 40 L 12 44 L 50 44 L 50 40 Z">
              </path>
            </svg>
          </button>

          <button class="tool" id="bold-tool">
            <svg class="icon-bold" viewBox = "0 0 125 125">
              <path d="M78.65,57.74c11.66,2.69,19.86,6,24.56,9.87c6.77,5.51,10.14,12.62,10.14,21.37c0,9.25-3.71,16.89-11.13,22.92 c-9.12,7.33-22.39,10.98-39.77,10.98H0v-3.34c5.69,0,9.52-0.53,11.57-1.61c2.01-1.05,3.43-2.41,4.24-4.11 c0.83-1.7,1.24-5.85,1.24-12.49V21.59c0-6.65-0.4-10.83-1.24-12.56C15,7.3,13.55,5.94,11.5,4.92C9.46,3.87,5.63,3.37,0,3.37L0,0 h58.89c14.07,0,24.06,1.27,29.91,3.78c5.88,2.51,10.49,6.25,13.86,11.23c3.4,4.98,5.07,10.3,5.07,15.9c0,5.94-2.13,11.2-6.43,15.84 C97.02,51.34,89.47,55.02,78.65,57.74L78.65,57.74z M45.68,55.27c8.57,0,14.88-0.96,18.96-2.88c4.08-1.95,7.21-4.67,9.4-8.17 c2.17-3.49,3.25-7.98,3.25-13.42c0-5.41-1.08-9.86-3.22-13.36c-2.13-3.46-5.19-6.09-9.18-7.92C60.9,7.7,54.5,6.84,45.68,6.9V55.27 L45.68,55.27L45.68,55.27z M45.68,62.35v39.4l-0.09,4.55c0,3.25,0.8,5.72,2.48,7.39c1.67,1.64,4.11,2.47,7.39,2.47 c4.82,0,9.28-1.05,13.36-3.22c4.08-2.13,7.2-5.26,9.37-9.34c2.2-4.05,3.28-8.6,3.28-13.61c0-5.75-1.33-10.92-3.99-15.46 c-2.66-4.55-6.31-7.73-10.98-9.56C61.86,63.16,54.9,62.29,45.68,62.35L45.68,62.35L45.68,62.35z">
              </path>
            </svg>
          </button>

          <button class="tool" id="italics-tool">
            <svg class="icon-italics" viewBox = "0 0 125 125">
              <path d="M32.16,3.37L33.16,0h60l-1.18,3.37c-5.44,0-9.59,1.21-12.46,3.62c-2.88,2.41-5.38,7.45-7.58,15.13l-22.45,78.65 c-1.64,5.57-2.44,9.28-2.44,11.13c0,2.19,0.83,3.86,2.54,5.1c2.17,1.55,6.28,2.41,12.31,2.54l-0.9,3.34H0l0.99-3.34 c6.13,0,10.58-1.18,13.42-3.5c2.85-2.32,5.42-7.42,7.7-15.28l22.64-78.65c1.39-4.83,2.1-8.48,2.1-10.95c0-2.26-0.87-3.99-2.54-5.26 C42.62,4.64,38.57,3.78,32.16,3.37L32.16,3.37L32.16,3.37z">
              </path>
            </svg>
          </button>

          <button class="tool" id="underline-tool">
            <svg class="icon-underline" viewBox = "0 0 125 125">
              <path d="M3.62,0h52.58v2.8h-2.62c-3.95,0-6.67,0.41-8.16,1.23C43.93,4.85,42.88,6,42.27,7.44c-0.61,1.46-0.95,5.1-0.95,10.9v49.88 c0,9.13,0.69,15.16,2.08,18.13c1.39,2.95,3.64,5.39,6.8,7.36c3.15,1.95,7.13,2.92,11.95,2.92c5.51,0,10.21-1.23,14.08-3.72 c3.9-2.49,6.8-5.9,8.72-10.26c1.92-4.36,2.9-11.95,2.9-22.78V18.34c0-4.57-0.49-7.82-1.44-9.77c-0.95-1.95-2.16-3.31-3.59-4.05 c-2.26-1.15-5.44-1.72-9.57-1.72V0h35.24v2.8h-2.1c-2.85,0-5.23,0.57-7.13,1.72c-1.9,1.15-3.28,2.87-4.13,5.18 c-0.64,1.62-0.97,4.49-0.97,8.64v38.7c0,11.98-0.79,20.62-2.36,25.93c-1.59,5.31-5.44,10.18-11.54,14.64 c-6.1,4.46-14.47,6.69-25.03,6.69c-8.8,0-15.62-1.18-20.44-3.54c-6.54-3.21-11.18-7.31-13.9-12.31 c-2.69-5.03-4.05-11.75-4.05-20.24V18.34c0-5.85-0.31-9.49-0.97-10.93C15.21,5.98,14.08,4.85,12.46,4 C10.87,3.13,7.92,2.74,3.62,2.8V0L3.62,0z M0,115.89h111.13v7H0V115.89L0,115.89z">
              </path>
            </svg>
          
        </button>
        <div class="tool" id="text-size" >
          <input type="number" value="20" id="text-size-sel" width="10px">

          </input>
        </div>
        <div class="tool" id="text-color">
          <select name="text-color" id="text-color-sel" margin-left: 30px">
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="white">White</option>
            <option value="brown">Brown</option>
            <option value="purple">Purple</option>
          </select>
      </div>
      <input
      type="file"
      accept="image/gif, image/jpeg, image/png"
      name="image"
      id="image-input"
      style="display: none"
    />
    </div>
    `

    // template.addEventListener('click',editPage());

    const link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('href', 'styles/toolbar.css')

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(link)
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.style.left = '0px'
    this.textTool = this.shadowRoot.querySelector('#text-tool')
    this.imageInput = this.shadowRoot.querySelector('#image-input')
    this.imageTool = this.shadowRoot.querySelector('#image-tool')
    this.bulletsTool = this.shadowRoot.querySelector('#bullets-tool')
    this.boldTool = this.shadowRoot.querySelector('#bold-tool')
    this.italicsTool = this.shadowRoot.querySelector('#italics-tool')
    this.underlineTool = this.shadowRoot.querySelector('#underline-tool')
    this.textSize = this.shadowRoot.querySelector('#text-size-sel')
    this.textColor = this.shadowRoot.querySelector('#text-color-sel')

    this.observers = {
      textclicked: [],
      imageclicked: [],
      bulletclicked: [],
      boldclicked: [],
      italicclicked: [],
      underlineclicked: [],
      sizeclicked: [],
      colorclicked: []
    }

    this.setupListeners()
  }

  setupListeners() {
    // Tool bar
    // Text Tool
    this.textTool.addEventListener('click', (event) => {
      this.selectTool(this.textTool)
      this.observers.textclicked.forEach((cb, i) => {
        cb(event)
      })
    })

    //Image Tool
    this.imageInput.addEventListener('change', (e) => {
      //const img = new Image()
      //img.src = URL.createObjectURL(e.target.files[0])
      this.observers.imageclicked.forEach((cb, i) => {
        cb(e.target.files[0], e)
      })
    })
    this.imageTool.addEventListener('click', (event) => {
      this.selectTool(this.imageTool)
      this.imageInput.click()
    })

    //Bullets Tool
    this.bulletsTool.addEventListener('click', (event) => {
      this.selectTool(this.bulletsTool)
      this.observers.bulletclicked.forEach((cb) => {
        cb(event)
      })
    })

    //Bold Tool
    this.boldTool.addEventListener('click', (event) => {
      this.selectTool(this.boldTool)
      this.observers.boldclicked.forEach((cb) => {
        cb(event)
      })
    })

    //Italics Tool
    this.italicsTool.addEventListener('click', (event) => {
      this.selectTool(this.italicsTool)
      this.observers.italicclicked.forEach((cb) => {
        cb(event)
      })
    })

    //Underline Tool
    this.underlineTool.addEventListener('click', (event) => {
      this.selectTool(this.underlineTool)
      this.observers.underlineclicked.forEach((cb) => {
        cb(event)
      })
    })

    //Text Size
    this.textSize.addEventListener('change', (event) => {
      this.selectTool(this.textSize)
      this.observers.sizeclicked.forEach((cb) => {
        cb(this.textSize.value, event)
      })
    })

    //Text Color
    this.textColor.addEventListener('change', (event) => {
      this.selectTool(this.textColor)
      this.observers.colorclicked.forEach((cb) => {
        cb(this.textColor.value, event)
      })
    })
  }

  selectTool(toolToBeSelected) {
    console.log(toolToBeSelected, 'selected')

    // if (!toolToBeSelected.classList.contains('selected-tool')) {

    // toolToBeSelected.classList.remove('selected-tool')
    // } else {

    // if (
    //   document
    //     .querySelector('tool-bar')
    //     .shadowRoot.querySelector('.selected-tool')
    // ) {
    let prevSelectedTool = document
      .querySelector('tool-bar')
      .shadowRoot.querySelector('.selected-tool')
    let textTool = document
      .querySelector('tool-bar')
      .shadowRoot.querySelector('#text-tool')
    console.log(prevSelectedTool, textTool)
    if (prevSelectedTool == textTool) {
      let dragView = document.querySelector('drag-view')
      dragView.textOnClick = dragView.textOnClick ? false : true
    }
    prevSelectedTool.classList.remove('selected-tool')
    // }
    toolToBeSelected.classList.add('selected-tool')
    // }
  }

  addEventListener(eventType, callback) {
    this.observers[eventType].push(callback)
  }

  //   removeEventListener(eventType, callback) {
  //     this.observers[eventType].forEach((c, i) => {
  //       if (callback == c) {
  //         this.observers[eventType].splice(i, 0)
  //         return false
  //       }
  //     })
  //   }

  //   removeAllListeners() {
  //     this.observers = { open: [], close: [] }
  //   }
}

customElements.define('tool-bar', ToolBar)
