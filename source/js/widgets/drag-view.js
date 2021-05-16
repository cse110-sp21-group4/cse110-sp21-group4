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
// not sure if `editPage()` should be here or in one of the components
// cannot access shadow DOM from here, though
// function defined in drag-view.js, commented here
// so for now Ishaan added this in both
function editPage(caller) {
  //   console.log('clicked on page',event)
  if (toolselected == 'text') {
    console.log(caller, caller)
    const newText = document.createElement('div')
    newText.position = 'relative'
    newText.left = indent * 100 + 'px'
    indent++
    console.log(indent, newText.left)
    newText.border = '3px solid #73AD21'
    newText.contentEditable = 'true'
    newText.innerHTML = `<h3>New text</h3>`

    caller.appendChild(newText)
    console.log(caller)
  }
  if (toolselected == 'image') {
  }
}
customElements.define('drag-view', DragView)
