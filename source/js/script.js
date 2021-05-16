page = document.createElement('drag-view')
document.getElementsByTagName('main')[0].appendChild(page)

function openIndex() {
  console.log(document.querySelector('.left-pane'))
  document.querySelector('.left-pane').style.height = '100px'
}
