class ToolBar extends HTMLElement {
  constructor() {
    super()
    console.log('toolbar constr called')
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
          
            <svg class="icon-image" viewBox="2 2 45 45">
              <path id="icon-image" d="M 31.5 28.5 L 31.5 7.5 C 31.5 5.849999904632568 30.14999961853027 4.5 28.5 4.5 L 7.5 4.5 C 5.849999904632568 4.5 4.5 5.849999904632568 4.5 7.5 L 4.5 28.5 C 4.5 30.14999961853027 5.849999904632568 31.5 7.5 31.5 L 28.5 31.5 C 30.14999961853027 31.5 31.5 30.14999961853027 31.5 28.5 Z M 12.75 20.25 L 16.5 24.76499938964844 L 21.75 18 L 28.5 27 L 7.5 27 L 12.75 20.25 Z">
              </path>
	          </svg>
          </button>
          <div class="text-options>

          <button class="tool" id="bullet-tool">
            <svg class="icon-bullet" viewBox="0 2 65 65">
              <path id="icon-bullet" d="M 4 4 C 1.800781 4 0 5.800781 0 8 C 0 10.199219 1.800781 12 4 12 C 6.199219 12 8 10.199219 8 8 C 8 5.800781 6.199219 4 4 4 Z M 12 6 L 12 10 L 50 10 L 50 6 Z M 4 21 C 1.800781 21 0 22.800781 0 25 C 0 27.199219 1.800781 29 4 29 C 6.199219 29 8 27.199219 8 25 C 8 22.800781 6.199219 21 4 21 Z M 12 23 L 12 27 L 50 27 L 50 23 Z M 4 38 C 1.800781 38 0 39.800781 0 42 C 0 44.199219 1.800781 46 4 46 C 6.199219 46 8 44.199219 8 42 C 8 39.800781 6.199219 38 4 38 Z M 12 40 L 12 44 L 50 44 L 50 40 Z">
            </svg>
          </button>

          <button class="tool" id="bullet-tool">
            <svg class="icon-bullet" viewBox="10 10 70 70">
              <path id="icon-bullet" d="M 4 4 C 1.800781 4 0 5.800781 0 8 C 0 10.199219 1.800781 12 4 12 C 6.199219 12 8 10.199219 8 8 C 8 5.800781 6.199219 4 4 4 Z M 12 6 L 12 10 L 50 10 L 50 6 Z M 4 21 C 1.800781 21 0 22.800781 0 25 C 0 27.199219 1.800781 29 4 29 C 6.199219 29 8 27.199219 8 25 C 8 22.800781 6.199219 21 4 21 Z M 12 23 L 12 27 L 50 27 L 50 23 Z M 4 38 C 1.800781 38 0 39.800781 0 42 C 0 44.199219 1.800781 46 4 46 C 6.199219 46 8 44.199219 8 42 C 8 39.800781 6.199219 38 4 38 Z M 12 40 L 12 44 L 50 44 L 50 40 Z">
            </svg>
          </button>
          <button class="tool" id="bullet-tool">
            <svg class="icon-bullet" viewBox="0 0 50 50">
              <path id="icon-bullet" d="M 4 4 C 1.800781 4 0 5.800781 0 8 C 0 10.199219 1.800781 12 4 12 C 6.199219 12 8 10.199219 8 8 C 8 5.800781 6.199219 4 4 4 Z M 12 6 L 12 10 L 50 10 L 50 6 Z M 4 21 C 1.800781 21 0 22.800781 0 25 C 0 27.199219 1.800781 29 4 29 C 6.199219 29 8 27.199219 8 25 C 8 22.800781 6.199219 21 4 21 Z M 12 23 L 12 27 L 50 27 L 50 23 Z M 4 38 C 1.800781 38 0 39.800781 0 42 C 0 44.199219 1.800781 46 4 46 C 6.199219 46 8 44.199219 8 42 C 8 39.800781 6.199219 38 4 38 Z M 12 40 L 12 44 L 50 44 L 50 40 Z">
            </svg>
          </button>
          </div>
        </div>
        `

    // template.addEventListener('click',editPage());

    const link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('href', 'styles/toolbar.css')

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(link)
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('tool-bar', ToolBar)
