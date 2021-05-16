class DragView extends HTMLElement {
  constructor() {
    super()
    const template = document.createElement('template')
    template.innerHTML = `
        <div class="drag-frame">
          <div class="page" contenteditable="true" onclick=editPage()>
            <h1>New Notes</h1>
            <ol>
              <li>Notes 1</li>
            </ol>
            <br />
            <ul>
              <li>Notes 2</li>
            </ul>
          </div>
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

customElements.define('drag-view', DragView)
