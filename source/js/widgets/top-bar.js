export class TopBar extends HTMLElement {
  constructor() {
    super()
    const template = document.createElement('template')
    template.innerHTML = `
      <style>

        #Rectangle_1 {
          fill: rgba(129,150,134,1);
        }

        .Rectangle_1 {
          position: absolute;
          overflow: visible;
          width: 1920px;
          height: 90px;
          left: 0px;
          top: 0px;
        }
        
      </style>

        <div class="top-bar">
         
        </div>
        `
    
    // template.addEventListener('click',editPage());

    const link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('href', 'style.css')

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(link)
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('top-bar', TopBar)
