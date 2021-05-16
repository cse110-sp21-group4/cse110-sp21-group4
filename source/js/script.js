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

