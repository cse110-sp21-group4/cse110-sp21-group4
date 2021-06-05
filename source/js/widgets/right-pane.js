export class RightPane extends HTMLElement {
  constructor() {
    super()
    const template = document.createElement('template')
    template.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <style>
                *{
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: 'Quicksand', sans-serif;
                } 

                html{
                    font-size: 62.5%;
                }

                .container{
                    width: 414px;
                    height: 800px;
                    /*position:absolute;*/
                    top: 0px;
                    right: 5px;
                    background-color: rgba(171,187,175,1);
                    color: #333;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 60px;
                }
                .pane{
                    background-color: rgb(171,187,175);
                    position: absolute;
                    overflow: visible;
                    width: 414px;
                    height: 800px;
                    right: 5px;
                    top: 101px;
                    border-radius: 40px;
	            }

                .calendar{
                    width: 350px;
	                height: 400px;
                    position: absolute; 
                    top: 100px;
                    background-color: #ccc;
                    /*box-shadow: 0 0.5rem 3rem rgba(0,0,0,.4);*/
                    border-radius: 10px;
                }

                .month{
                    width: 100%;
                    height: 65px;
                    background-color: #aaa;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 2rem;
                    text-align: center;
                    text-shadow: 0 .2rem .9rem rgba(0,0,0,.5);
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                }

                .month i{
                    font-size: 2rem;
                    cursor: pointer;     /* change ur cursor to a pointer*/
                }

                .month h1{
                    font-size: 1.5rem;
                    font-weight: 500;    /* boldness */
                    text-transform: uppercase;
                    letter-spacing: 0.2rem;
                    margin-bottom: 0.2rem;
                }

                .month p{
                    font-size: 1.2rem;
                }

                .weekdays{
                    width: 100%;
                    height: 3rem;
                    margin-bottom: -0.3rem;
                    padding: 0 0.4rem;
                    display: flex;
                    align-items: center;
                }

                .weekdays div{
                    font-size: 1.2rem;
                    font-weight: 400;
                    letter-spacing: 0.1rem;
                    width: calc(25rem / 7);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-shadow: 0 .3rem .5rem rgba(0,0,0,0.5rem);
                }

                .days{
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    padding: 0.2rem;
                }

                .days div:not(.today){
                    font-size: 1rem;
                    margin: 0.2rem;
                    width: calc(18.5rem / 7);
                    height: 2.5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-shadow: 0 .2rem .9rem rgba(0,0,0,.5);
                    transition: background-color 0.2s;
                    background-color: rgb(242, 242, 242);
                    text-color: black;
                }

                /*if not today */
                .days div:hover:not(.today){
                    border: .2rem solid#777;
                    cursor: pointer;
                }

                .prev-date,
                .next-date{
                    opacity: 0.5;

                }

                .today{
                    background-color: #f39507;
                    font-size: 1rem;
                    margin: 0.2rem;
                    width: calc(18.5rem / 7);
                    height: 2.5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-shadow: 0 .2rem .9rem rgba(0,0,0,.5);
                    transition: background-color 0.2s;
                    text-color: white;
                }

                .date p{
                    cursor: pointer;
                    text-decoration: underline;
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
                    position: relative; top: 170px;
                    overflow: visible;
                    width: 100px;
                    height: 100px;
                    left: -125px;
                   
                }

                #Todo {
                    left: 51px;
                    top: 530px;
                    position: absolute;
                    overflow: visible;
                    width: 93px;
                    white-space: nowrap;
                    text-align: center;
                    font-family: Segoe UI;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 25px;
                    color: rgba(0,0,0,1);
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
                    top: 90px;
                    transform: matrix(1,0,0,1,0,0);
                }
                

        </style>
        <div class="pane">
         <div class="container">
            <svg class="Line_1" viewBox="0 0 406 2">
                <path id="Line_1" d="M 0 2 L 406 0">
                </path>
            </svg>
            <div class="calendar">
                <div class="month">
                    <i class=" 
                    prev"><span>&#60;</span></i>     <!--Prev Month-->
                    <div class="date">
                        <h1></h1>  <!--Month-->
                        <p></p>    <!--Sun MM DD YY-->
                    </div>
                    <i class=" 
                    next"><span>&#62;</span></i>    <!--Next Month-->
                </div>
                <div class="weekdays">
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                </div>
            <div class="days">

            </div>
               
                

        </div>
        
                <svg class="inner_rectangle">
                    <rect id="inner_rectangle" rx="20" ry="20" x="0" y="0" width="350" height="250">
                    
                 </rect>
                </svg>
                
                <div id="Todo">
                <span>To-Do List</span>
                </div>
                
    </div>
    </div>


      `

    const link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('href', 'style.css')

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(link)
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    const date = new Date()

    const renderCalendar = () => {
      date.setDate(1)
      console.log('in  render cal')
      console.log(this.shadowRoot.querySelector('.days'))
      const monthDays = this.shadowRoot.querySelector('.days')

      const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).getDate()

      const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
      ).getDate()

      const firstDayIndex = date.getDay()

      const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).getDay()

      const nextDays = 7 - lastDayIndex + 6

      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]

      this.shadowRoot.querySelector('.date h1').innerHTML =
        months[date.getMonth()]

      /*this.shadowRoot.querySelector('.date p').innerHTML
        = new Date().toDateString();*/

      if (
        date.getMonth() === new Date().getMonth() &&
        date.getFullYear() === new Date().getFullYear()
      ) {
        this.shadowRoot.querySelector(
          '.date p'
        ).innerHTML = new Date().toDateString()
      } else {
        this.shadowRoot.querySelector('.date p').innerHTML = date.getFullYear()
      }

      let days = ''

      for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class='prev-date'>${prevLastDay - x + 1}</div>`
      }

      for (let i = 1; i <= lastDay; i++) {
        if (
          i === new Date().getDate() &&
          date.getMonth() === new Date().getMonth() &&
          date.getFullYear() === new Date().getFullYear()
        ) {
          days += `<div class='today'>${i}</div>`
        } else {
          days += `<div>${i}</div>`
        }
      }

      if (firstDayIndex + lastDay + nextDays > 42) {
        nextDays = 42
      }

      for (let j = 1; j <= nextDays; j++) {
        days += `<div class='next-date'>${j}</div>`
        monthDays.innerHTML = days
      }
    }

    console.log(this.shadowRoot.querySelector('.prev'))

    this.shadowRoot.querySelector('.prev').addEventListener('click', () => {
      date.setMonth(date.getMonth() - 1)
      renderCalendar()
    })

    this.shadowRoot.querySelector('.next').addEventListener('click', () => {
      date.setMonth(date.getMonth() + 1)
      renderCalendar()
    })

    this.shadowRoot.querySelector('.date p').addEventListener('click', () => {
      date.setMonth(new Date().getMonth())
      date.setFullYear(new Date().getFullYear())
      renderCalendar()
    })

    renderCalendar()
  }
}

customElements.define('right-pane', RightPane)
