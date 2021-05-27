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
        left: 23px;
        top: 111px;
    }
    .outer-rectangle {
        position: absolute;
        overflow: visible;
        width: 406px;
        height: 803px;
        left: 23px;
        top: 111px;
    }
    #index-button {
        fill: rgba(129,150,134,1);
        stroke: rgba(112,112,112,1);
        stroke-width: 1px;
        stroke-linejoin: miter;
        stroke-linecap: butt;
        stroke-miterlimit: 4;
        shape-rendering: auto;
        cursor: pointer;
    }
    .index-button {
        position: absolute;
        overflow: visible;
        width: 80px;
        height: 80px;
        left: 28px;
        top: 117px;
    }
    #Icon_ionic-ios-book {
        position: absolute;
        width: 29.236px;
        height: 26.997px;
        left: 53.382px;
        top: 143.501px;
        overflow: visible;
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
    #Ellipse_3 {
        fill: rgba(129,150,134,1);
        stroke: rgba(112,112,112,1);
        stroke-width: 1px;
        stroke-linejoin: miter;
        stroke-linecap: butt;
        stroke-miterlimit: 4;
        shape-rendering: auto;
    }
    .Ellipse_3 {
        position: absolute;
        overflow: visible;
        width: 80px;
        height: 80px;
        left: 29px;
        top: 599.617px;
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
        left: 23.5px;
        top: 201.5px;
        transform: matrix(1,0,0,1,0,0);
    }
    #Ellipse_5 {
        fill: rgba(129,150,134,1);
        stroke: rgba(112,112,112,1);
        stroke-width: 1px;
        stroke-linejoin: miter;
        stroke-linecap: butt;
        stroke-miterlimit: 4;
        shape-rendering: auto;
    }
    .Ellipse_5 {
        position: absolute;
        overflow: visible;
        width: 80px;
        height: 80px;
        left: 29px;
        top: 799px;
    }
    #Ellipse_6 {
        fill: rgba(129,150,134,1);
        stroke: rgba(112,112,112,1);
        stroke-width: 1px;
        stroke-linejoin: miter;
        stroke-linecap: butt;
        stroke-miterlimit: 4;
        shape-rendering: auto;
    }
    .Ellipse_6 {
        position: absolute;
        overflow: visible;
        width: 80px;
        height: 80px;
        left: 29px;
        top: 699.605px;
    }
    #Icon_map-food {
        fill: rgba(255,255,255,1);
    }
    .Icon_map-food {
        overflow: visible;
        position: absolute;
        width: 34.56px;
        height: 30.296px;
        left: 49.058px;
        top: 620.094px;
        transform: matrix(1,0,0,1,0,0);
    }
    #Icon_ionic-md-school {
        fill: rgba(255,255,255,1);
    }
    .Icon_ionic-md-school {
        overflow: visible;
        position: absolute;
        width: 31.5px;
        height: 27px;
        left: 51.118px;
        top: 726.105px;
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
        width: 387px;
        height: 378.27px;
        left: 33px;
        top: 211.68px;
    }
    #Entries {
        left: 49px;
        top: 222.67px;
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
    #Recipes {
        left: 121px;
        top: 620.519px;
        position: absolute;
        overflow: visible;
        width: 101px;
        white-space: nowrap;
        text-align: left;
        font-family: Segoe UI;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        color: rgba(255,255,255,1);
    }
    #Assignments {
        left: 120px;
        top: 725.031px;
        position: absolute;
        overflow: visible;
        width: 147px;
        white-space: nowrap;
        text-align: left;
        font-family: Segoe UI;
        font-style: normal;
        font-weight: normal;
        font-size: 26px;
        color: rgba(255,255,255,1);
    }
    #New_Label {
        left: 120px;
        top: 819px;
        position: absolute;
        overflow: visible;
        width: 139px;
        white-space: nowrap;
        text-align: left;
        font-family: Segoe UI;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        color: rgba(255,255,255,1);
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
        left: 361px;
        top: 221.808px;
    }
    #plus {
        left: 367px;
        top: 210.224px;
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
    }
    #Untitled_Entry {
        left: 66px;
        top: 267.813px;
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
    #Icon_awesome-plus {
        fill: rgba(255,255,255,1);
    }
    .Icon_awesome-plus {
        overflow: visible;
        position: absolute;
        width: 31.5px;
        height: 31.5px;
        left: 53.25px;
        top: 823.25px;
        transform: matrix(1,0,0,1,0,0);
    }

ul {
    margin: 0;
    width: 325px;
    height: 300px;
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
      <svg class="Ellipse_3">
        <ellipse id="Ellipse_3" rx="40" ry="40" cx="40" cy="40">
        </ellipse>
      </svg>
      <svg class="Line_1" viewBox="0 0 406 2">
        <path id="Line_1" d="M 0 2 L 406 0">
        </path>
      </svg>
      <svg class="Ellipse_5">
        <ellipse id="Ellipse_5" rx="40" ry="40" cx="40" cy="40">
        </ellipse>
      </svg>
      <svg class="Ellipse_6">
        <ellipse id="Ellipse_6" rx="40" ry="40" cx="40" cy="40">
        </ellipse>
      </svg>
      <svg class="Icon_map-food" viewBox="0.72 2.825 34.56 30.295">
        <path id="Icon_map-food" d="M 35.20367813110352 10.91088008880615 L 32.37047958374023 33.11999893188477 L 22.80096054077148 33.11999893188477 L 19.97928047180176 10.79999923706055 L 31.66200065612793 10.79999923706055 L 33.97103881835938 2.824559211730957 L 35.27999877929688 3.219120025634766 L 33.06455993652344 10.89431953430176 L 35.20368194580078 10.91087913513184 Z M 18.62639999389648 23.76000022888184 C 18.62639999389648 23.76000022888184 18.98423957824707 20.88000106811523 14.02199935913086 20.88000106811523 L 6.119279861450195 20.88000106811523 C 1.164239883422852 20.88000106811523 1.514879703521729 23.76000213623047 1.514879703521729 23.76000213623047 L 18.62639999389648 23.76000213623047 Z M 1.514879941940308 30.23999977111816 C 1.514879941940308 30.23999977111816 1.164239883422852 33.11999893188477 6.119279861450195 33.11999893188477 L 14.02272033691406 33.11999893188477 C 18.98496055603027 33.11999893188477 18.62712097167969 30.23999786376953 18.62712097167969 30.23999786376953 L 1.514879941940308 30.23999786376953 Z M 17.88407897949219 28.79999923706055 C 18.69623947143555 28.79999923706055 19.35215950012207 27.9979190826416 19.35215950012207 27.00071907043457 C 19.35215950012207 25.99775886535645 18.69623947143555 25.19999885559082 17.88407897949219 25.19999885559082 L 2.188800096511841 25.19999885559082 C 1.380239963531494 25.20000076293945 0.7200000286102295 25.99776077270508 0.7200000286102295 27.00071907043457 C 0.7200000286102295 27.9979190826416 1.380239963531494 28.79999923706055 2.188800096511841 28.79999923706055 L 17.88408088684082 28.79999923706055 Z">
        </path>
      </svg>
      <svg class="Icon_ionic-md-school" viewBox="2.25 4.5 31.5 27">
        <path id="Icon_ionic-md-school" d="M 7.98046875 19.77187538146973 L 7.98046875 25.76953125 L 18 31.5 L 28.01953125 25.76953125 L 28.01953125 19.77187538146973 L 18 25.50234413146973 L 7.98046875 19.77187538146973 Z M 18 4.5 L 2.25 13.5 L 18 22.5 L 30.88828086853027 15.13828086853027 L 30.88828086853027 25.50234222412109 L 33.75 25.50234222412109 L 33.75 13.5 L 18 4.5 Z">
        </path>
      </svg>
      <svg class="inner_rectangle">
        <rect id="inner_rectangle" rx="20" ry="20" x="0" y="0" width="387" height="378.27">
        </rect>
      </svg>
      <div id="Entries">
        <span>Entries</span>
      </div>
      <div id="Recipes">
        <span>Recipes</span>
      </div>
      <div id="Assignments">
        <span>Assignments</span>
      </div>
      <div id="New_Label">
        <span>New Label</span>
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
      <svg class="Icon_awesome-plus" viewBox="0 2.25 31.5 31.5">
        <path id="Icon_awesome-plus" d="M 29.25 14.625 L 19.125 14.625 L 19.125 4.5 C 19.125 3.257578134536743 18.11742210388184 2.25 16.875 2.25 L 14.625 2.25 C 13.38257789611816 2.25 12.375 3.257578134536743 12.375 4.5 L 12.375 14.625 L 2.25 14.625 C 1.007578134536743 14.625 0 15.63257789611816 0 16.875 L 0 19.125 C 0 20.36742210388184 1.007578134536743 21.375 2.25 21.375 L 12.375 21.375 L 12.375 31.5 C 12.375 32.7424201965332 13.38257789611816 33.75 14.625 33.75 L 16.875 33.75 C 18.11742210388184 33.75 19.125 32.7424201965332 19.125 31.5 L 19.125 21.375 L 29.25 21.375 C 30.49242210388184 21.375 31.5 20.36742210388184 31.5 19.125 L 31.5 16.875 C 31.5 15.63257789611816 30.49242210388184 14.625 29.25 14.625 Z">
        </path>
      </svg>
    </div>

    <div id="left-pane-button">
      <svg class="index-button">
        <ellipse id="index-button" rx="40" ry="40" cx="40" cy="40">
        </ellipse>
      </svg>
      <div id="Icon_ionic-ios-book">
        <svg class="Path_1" viewBox="3.382 4.507 13.915 26.99">
          <path id="Path_1" d="M 10.265625 4.507031440734863 C 14.06953144073486 4.507031440734863 17.296875 6.46875 17.296875 10.27265644073486 L 17.296875 11.39765644073486 L 17.296875 11.39765644073486 L 17.296875 11.39765644073486 L 17.296875 11.39765644073486 L 17.296875 31.359375 C 17.296875 31.51406288146973 17.07890701293945 31.54921913146973 17.02968788146973 31.40859413146973 C 17.02968788146973 31.40859413146973 17.02968788146973 31.40859413146973 17.02968788146973 31.40156364440918 C 16.30546951293945 28.99687576293945 14.34375 26.6484375 11.24296951293945 26.44453239440918 C 8.838281631469727 26.28984451293945 6.539063453674316 27.35156440734863 4.69687557220459 29.05312538146973 C 4.584375381469727 29.15859413146973 4.394531726837158 29.25703239440918 4.232812881469727 29.25703239440918 L 3.916406631469727 29.25703239440918 C 3.656250476837158 29.25703239440918 3.382031679153442 29.06718826293945 3.382031679153442 28.82812690734863 L 3.382031679153442 8.451562881469727 C 3.375 6.194531440734863 6.461718559265137 4.507031440734863 10.265625 4.507031440734863 Z">
          </path>
        </svg>
        <svg class="Path_2" viewBox="18.703 4.5 13.915 26.99">
          <path id="Path_2" d="M 25.734375 4.5 C 21.93046951293945 4.5 18.703125 6.461718559265137 18.703125 10.265625 L 18.703125 11.390625 L 18.703125 11.390625 L 18.703125 11.390625 L 18.703125 11.390625 L 18.703125 31.35234451293945 C 18.703125 31.50703239440918 18.92109298706055 31.54218864440918 18.97031211853027 31.40156364440918 C 18.97031211853027 31.40156364440918 18.97031211853027 31.40156364440918 18.97031211853027 31.39453315734863 C 19.69453048706055 28.98984527587891 21.74062538146973 26.62031555175781 24.75703048706055 26.43750190734863 C 27.0703125 26.29687690734863 29.25 27.21093940734863 31.30312347412109 29.04609489440918 C 31.41562271118164 29.14453315734863 31.60546684265137 29.25000190734863 31.76718521118164 29.25000190734863 L 32.08359146118164 29.25000190734863 C 32.34374618530273 29.25000190734863 32.61796569824219 29.06015777587891 32.61796569824219 28.82109642028809 L 32.61796569824219 8.4375 C 32.625 6.1875 29.53828048706055 4.5 25.734375 4.5 Z">
          </path>
        </svg>
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

    this.observers = {
      open: [],
      close: []
    }

    this.leftPane = this.shadowRoot.querySelector('#left-pane')
    this.leftPaneButton = this.shadowRoot.querySelector('#left-pane-button')
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
    this.leftPaneButton.addEventListener('click', () => {
      // var p = this.page.shadowRoot.querySelector('.page')
      if (this.leftPane.style.display === 'none') {
        this.leftPane.style.display = 'block'
        // p.style.left = '429px'
        this.observers.open.forEach((cb, i) => {
          cb()
        })
      } else {
        // Page hides - Move MAIN page left
        this.leftPane.style.display = 'none'
        // p.style.left = '429px'
        this.observers.close.forEach((cb, i) => {
          cb()
        })
      }
    })

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

  addEventListener(eventType, callback) {
    this.observers[eventType].push(callback)
  }

  removeEventListener(eventType, callback) {
    this.observers[eventType].forEach((c, i) => {
      if (callback == c) {
        this.observers[eventType].splice(i, 0)
        return false
      }
    })
  }

  removeAllListeners() {
    this.observers = { open: [], close: [] }
  }
}

customElements.define('left-pane', LeftPane)
