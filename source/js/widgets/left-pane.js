export class LeftPane extends HTMLElement {
  constructor() {
    super()
    const template = document.createElement('template')
    template.innerHTML = `
      <style>
      #outer-rectangle {
        fill: rgba(171,187,175,1);
        stroke: rgba(112,112,112,1);
        stroke-width: 1px;
        stroke-linejoin: miter;
        stroke-linecap: butt;
        stroke-miterlimit: 4;
        shape-rendering: auto;
    
        /* Redudant information from Class Selector*/
        position: absolute;
        overflow: visible;
        width: 406px;
        height: 803px;
        left: 5px;
        top: 101px;
    }
    .outer-rectangle {
        position: absolute;
        overflow: visible;
        width: 406px;
        height: 803px;
        left: 5px;
        top: 101px;
    }
   #Path_1 {
        fill: rgba(171,187,175,1);
    }
    .Path_1 {
        overflow: visible;
        position: absolute;
        width: 13.915px;
        height: 26.99px;
        left: 0px;
        top: 0.007px;
        transform: matrix(1,0,0,1,0,0);
    }
    #Path_2 {
        fill: rgba(171,187,175,1);
    }
    .Path_2 {
        overflow: visible;
        position: absolute;
        width: 13.915px;
        height: 26.99px;
        left: 15.321px;
        top: 0px;
        transform: matrix(1,0,0,1,0,0);
    }
    #Line_1 {
        fill: transparent;
        stroke: rgba(129,150,134,1);
        stroke-width: 3px;
        stroke-linejoin: miter;
        stroke-linecap: butt;
        stroke-miterlimit: 4;
        shape-rendering: auto;
    }
    .Line_1 {
        overflow: visible;
        position: absolute;
        width: 406.015px;
        height: 5px;
        left: 5px;
        top: 192.5px;
        transform: matrix(1,0,0,1,0,0);
    }
    #inner_rectangle {
        fill: rgba(230,230,230,1);
        stroke: rgba(112,112,112,1);
        stroke-width: 1px;
        stroke-linejoin: miter;
        stroke-linecap: butt;
        stroke-miterlimit: 4;
        shape-rendering: auto;
    }
    .inner_rectangle {
        position: absolute;
        overflow: visible;
        width: 350px;
        height: 500px;
        left: 31px;
        top: 197.68px;
    }
    #Entries {
        left: 45px;
        top: 205.67px;
        position: absolute;
        overflow: visible;
        width: 93px;
        white-space: nowrap;
        text-align: center;
        font-family: Segoe UI;
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        color: rgba(0,0,0,1);
    }
    #add-entry-button {
        fill: rgba(230,230,230,1);
        stroke: rgba(112,112,112,1);
        stroke-width: 2px;
        stroke-linejoin: miter;
        stroke-linecap: butt;
        stroke-miterlimit: 4;
        shape-rendering: auto;
    }
    .add-entry-button{
        position: absolute;
        overflow: visible;
        width: 40px;
        height: 40px;
        left: 330px;
        top: 207.808px;
    }
    #plus {
        left: 336px;
        top: 197.224px;
        position: absolute;
        overflow: visible;
        width: 29px;
        white-space: nowrap;
        text-align: center;
        font-family: Segoe UI;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        color: rgba(0,0,0,1);
        cursor: pointer;
        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */

    }
    #Untitled_Entry {
        left: 40px;
        top: 253.813px;
        position: absolute;
        overflow: visible;
        width: 146px;
        white-space: nowrap;
        text-align: left;
        font-family: Segoe UI;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        color: rgba(0,0,0,1);
    }

ul {
    margin: 0;
    width: 325px;
    height: 600px;
    padding: 0;
    list-style-type: none;
    overflow: scroll;
    overflow-x: hidden;
  }

::-webkit-scrollbar {
    width: 8px;
}
 
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    -webkit-border-radius: 10px;
    border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: rgba(129,150,134,1); 
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
::-webkit-scrollbar-thumb:window-inactive {
	background: rgba(171,187,175,1); 
}

/* Style the list items */
ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  font-size: 18px;
  transition: 0.2s;
  border-radius: 60px;

  /* make the list items unselectable */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Darker background-color on hover */
ul li:hover {
  background: #ddd;
}

/* Style the close button */
.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 18px 12px 18px;
  border-radius: 60px;
}

.close:hover {
  background-color: #f44336;
  color: white;
}
      </style>
      <div id="left-pane">
      <svg class="outer-rectangle">
        <rect id="outer-rectangle" rx="40" ry="40" x="0" y="0">
        </rect>
      </svg>
      <svg class="Line_1" viewBox="0 0 406 2">
        <path id="Line_1" d="M 0 0 L 406 0">
        </path>
      </svg>
      <svg class="inner_rectangle">
        <rect id="inner_rectangle" rx="20" ry="20" x="0" y="0" width="350" height="665">
        </rect>
      </svg>
      <div id="Entries">
        <span>Entries</span>
      </div>
      <svg class="add-entry-button">
        <ellipse onclick="newElement()" id="add-entry-button" rx="20" ry="20" cx="20" cy="20">
        </ellipse>
      </svg>
      <div id="plus">
        <span>+</span>
      </div>
      <div id="Untitled_Entry">
        <ul id="myUL">
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
    this.initializeUI()

    this.leftPane = this.shadowRoot.querySelector('#left-pane')
    this.plusButton = this.shadowRoot.querySelector('#plus')
    this.setupListeners()
  }

  initializeUI() {
    // This block of code selects all the list elements and appends an 'X' button to the end
    let myNodelist = this.shadowRoot.querySelectorAll('LI')
    for (let i = 0; i < myNodelist.length; i++) {
      const span = document.createElement('SPAN')
      const txt = document.createTextNode('\u00D7') // x symbol
      span.className = 'close'
      span.appendChild(txt)
      myNodelist[i].appendChild(span)
    }

    //Click on a close button to hide the current list item
    let close = this.shadowRoot.querySelectorAll('li > span')
    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        let div = this.parentElement
        div.style.display = 'none'
      }
    }
  }

  setupListeners() {
    this.plusButton.addEventListener('click', () => {
      console.log('plus')
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
      for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
          var div = this.parentElement
          div.style.display = 'none'
        }
      }
    })
  }
}

customElements.define('left-pane', LeftPane)
