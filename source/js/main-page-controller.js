export class MainPageController {
  constructor(view) {
    this.view = view
  }

  registerListeners() {
    document
      .querySelector('left-pane')
      .shadowRoot.querySelector('#left-pane-button')
      .addEventListener('click', () => {
        var v = document
          .querySelector('left-pane')
          .shadowRoot.querySelector('#left-pane')
        var p = document
          .querySelector('drag-view')
          .shadowRoot.querySelector('.page')
        if (v.style.display === 'none') {
          v.style.display = 'block'
          p.style.left = '429px'
        } else {
          // Page hides - Move MAIN page left
          v.style.display = 'none'
          p.style.left = '429px'
        }
      })

    // This block of code selects all the list elements and appends an 'X' button to the end
    var myNodelist = document
      .querySelector('left-pane')
      .shadowRoot.querySelectorAll('LI')
    var i
    for (i = 0; i < myNodelist.length; i++) {
      var span = document.createElement('SPAN')
      var txt = document.createTextNode('\u00D7') // x symbol
      span.className = 'close'
      span.appendChild(txt)
      myNodelist[i].appendChild(span)
    }

    // Click on a close button to hide the current list item
    var close = document
      .querySelector('left-pane')
      .shadowRoot.querySelectorAll('li > span')
    var i
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        var div = this.parentElement
        div.style.display = 'none'
      }
    }

    // This block of code allows you to add entries
    document
      .querySelector('left-pane')
      .shadowRoot.querySelector('#plus')
      .addEventListener('click', () => {
        var li = document.createElement('li')

        var today = new Date()
        var dd = String(today.getDate()).padStart(2, '0')
        var mm = String(today.getMonth() + 1).padStart(2, '0')
        var yyyy = today.getFullYear()
        var hr = today.getHours()
        var min = today.getMinutes()
        today = mm + '/' + dd + '/' + yyyy + ' @ ' + hr + ':' + min
        var inputValue = today
        var t = document.createTextNode(inputValue)
        li.appendChild(t)
        document
          .querySelector('left-pane')
          .shadowRoot.querySelector('#myUL')
          .appendChild(li)

        // This creates the X button for the new entries we made
        var span = document.createElement('SPAN')
        var txt = document.createTextNode('\u00D7')
        span.className = 'close'
        span.appendChild(txt)
        li.appendChild(span)

        // Click on a close button for the new ENTRIES we created to hide the current list item
        var close = document
          .querySelector('left-pane')
          .shadowRoot.querySelectorAll('li > span')
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function () {
            var div = this.parentElement
            div.style.display = 'none'
          }
        }
      })

    // add Javascript code here
  }

  //Example code
  onTasksButtonClicked() {
    console.log('Tasks button clicked...')
  }
}
