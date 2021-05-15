class DragView extends HTMLElement {
  constructor() {
    super()
    // not sure if `toolselected` should be here or in script.js
    // so for now Ishaan added this in both
    var toolselected = 'text'

    // not sure if `editPage()` should be here or in script.js
    // so for now Ishaan added this in both
    // function editPage() {
    //   console.log('clicked on page', document.querySelector(".page"))
    //   if (toolselected == 'text') {

    //   }
    //   if (toolselected == 'image') {
    //   }
    // }
    const template = document.createElement('template')
    template.innerHTML = `
        <div class="drag-frame">
          <div class="page" contenteditable="true" onclick="editPage(this);">
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
