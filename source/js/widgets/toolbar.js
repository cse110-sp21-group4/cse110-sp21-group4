class ToolBar extends HTMLElement {
  constructor() {
    super()
    console.log('toolbar constr called')
    const template = document.createElement('template')
    template.innerHTML = `

        <div class="tool-bar">
          <div class="tool" id="text-tool">
            <svg class="icon-text" viewBox="0 0 36 36">
              <path id="icon-text" d="M 0 0 L 0 9 L 2.25 9 C 2.25 6.525000095367432 4.275000095367432 4.5 6.75 4.5 L 13.5 4.5 L 13.5 29.25 C 13.5 30.51000022888184 12.51000022888184 31.5 11.25 31.5 L 9 31.5 L 9 36 L 27 36 L 27 31.5 L 24.75 31.5 C 23.48999977111816 31.5 22.5 30.51000022888184 22.5 29.25 L 22.5 4.5 L 29.25 4.5 C 31.72500038146973 4.5 33.75 6.525000095367432 33.75 9 L 36 9 L 36 0 L 0 0 Z">
              </path>
	          </svg>
          </div>
          <div class="tool" id="text-tool">
            <svg class="Icon_material-image" viewBox="4.5 4.5 27 27">
              <path id="Icon_material-image" d="M 31.5 28.5 L 31.5 7.5 C 31.5 5.849999904632568 30.14999961853027 4.5 28.5 4.5 L 7.5 4.5 C 5.849999904632568 4.5 4.5 5.849999904632568 4.5 7.5 L 4.5 28.5 C 4.5 30.14999961853027 5.849999904632568 31.5 7.5 31.5 L 28.5 31.5 C 30.14999961853027 31.5 31.5 30.14999961853027 31.5 28.5 Z M 12.75 20.25 L 16.5 24.76499938964844 L 21.75 18 L 28.5 27 L 7.5 27 L 12.75 20.25 Z">
              </path>
	          </svg>
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
