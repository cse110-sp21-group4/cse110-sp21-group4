export class RightPane extends HTMLElement {
    constructor() {
      super()
      const template = document.createElement('template')
      template.innerHTML = `
        <style>
        
        </style>




      `

      const link = document.createElement('link')
      link.setAttribute('rel', 'stylesheet')
      link.setAttribute('href', 'style.css')
  
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(link)
      this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
  }
  
  customElements.define('right-pane', RightPane)