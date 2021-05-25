export class RightPane extends HTMLElement {
    constructor() {
      super()
      const template = document.createElement('template')
      template.innerHTML = `
        <style>

        </style>

        <div class="container">
        <div class="calendar">
            <div class="month">
                <i class="fas fa-angle-left 
                prev"></i>     <!--Prev Month-->
                <div class="date">
                    <h1></h1>  <!--Month-->
                    <p></p>    <!--Sun MM DD YY-->
                </div>
                <i class="fas fa-angle-right 
                next"></i>    <!--Next Month-->
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
    </div>


      `
      

      const link = document.createElement('link')
      link.setAttribute('rel', 'stylesheet')
      link.setAttribute('href', 'styles/calendar.css')
  
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(link)
      this.shadowRoot.appendChild(template.content.cloneNode(true))
    

    const date = new Date();

    const renderCalendar = () => {
    date.setDate(1);

        const monthDays = document.querySelector('.days');

        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

        const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

        const firstDayIndex = date.getDay();

        const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

        const nextDays = 7 -lastDayIndex - 1;

        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        document.querySelector('.date h1').innerHTML
        = months[date.getMonth()];

        document.querySelector('.date p').innerHTML
        = new Date().toDateString();

        let days = "";

        for(let x = firstDayIndex; x > 0; x--){
            days += `<div class='prev-date'>${prevLastDay - x + 1}</div>`;
        }

        for(let i = 1; i <= lastDay; i++){
            if( i === new Date().getDate() && date.getMonth() === new Date().getMonth() ){
                days += `<div class='today'>${i}</div>`;
            } else{
                days += `<div>${i}</div>`;
            }
        
        }

        for(let j = 1; j <= nextDays; j++)
        {
            days += `<div class='next-date'>${j}</div>`;
            monthDays.innerHTML = days;
        }
   }



    document.querySelector('.prev').addEventListener('click', ()=>{
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
    })

    document.querySelector('.next').addEventListener('click', ()=>{
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
    })

    renderCalendar();

  }    
}

  customElements.define('right-pane', RightPane)