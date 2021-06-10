export class TopBar extends HTMLElement {
  constructor() {
    super()
    const template = document.createElement('template')
    template.innerHTML = `
        <style>
            .top-bar {
                top: 0px;
                height: 95px;
                width: 1920px;
                background-color: rgba(129, 150, 134, 1);
              }
              
              



            #mascot {
                position: absolute;
                width: 90px;
                height: 90px;
                left: 13px;
                top:5px;
                overflow: visible;
            }
            #bullet-journal {
                left: 134px;
                top: 12px;
                position: absolute;
                overflow: visible;
                width: 224px;
                white-space: nowrap;
                text-align: left;
                font-family: Segoe UI;
                font-style: normal;
                font-weight: bold;
                font-size: 36px;
                color: rgba(255,255,255,1);
            }
            #by-taiyakitty {
                left: 134px;
                top: 51px;
                position: absolute;
                overflow: visible;
                width: 100px;
                white-space: nowrap;
                text-align: left;
                font-family: Segoe UI;
                font-style: normal;
                font-weight: lighter;
                font-size: 20px;
                color: rgba(255,255,255,1);
            }
            .entry-heading {
                left: 860px;
                top: 23px;
                position: absolute;
                overflow: visible;
                width: 500px;
                white-space: nowrap;
                /*cursor: pointer;*/
                text-align: left;
                font-family: Segoe UI;
                font-style: normal;
                font-weight: bold;
                font-size: 36px;
                color: rgba(255,255,255,1);
            }
        </style>
        <div class='top-bar'>

                <img id="mascot" src="images/mascot.png"></img>

                <div id="bullet-journal">
		<span>Bullet Journal</span>
	</div>
	<div id="by-taiyakitty">
		<span>By Taiyakitty</span>
	</div>
                

            <div class="entry-heading">
                <span>Untitled Entry 06/03/21</span>
            </div>


        </div>
      `

    // template.addEventListener('click',editPage());

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    this.attachShadow({ mode: 'open' })
    // this.shadowRoot.appendChild(link)
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.heading = this.shadowRoot.querySelector('.entry-heading')
    this.heading.innerHTML=today

    this.observers = {}

    // this.setupListeners()
  }

  //   setupListeners() {
  // }

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

customElements.define('top-bar', TopBar)
