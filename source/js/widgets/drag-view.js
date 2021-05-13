class DragView extends HTMLDivElement {
  constructor() {
    super()

    const template = document.createElement('template')
    template.innerHTML = `
        <div class="drag-frame">

        </div>
        `

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('drag-view', DragView)
