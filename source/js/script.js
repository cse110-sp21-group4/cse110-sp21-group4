page = document.createElement('drag-view')
document.getElementsByTagName('main')[0].appendChild(page)

// not sure if `toolselected` should be here or in one of the components
// so for now Ishaan added this in both
var toolselected = 'text'
var indent = 2
function openIndex() {
  console.log(document.querySelector('.left-pane'))
  document.querySelector('.left-pane').style.height = '100px'
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
