export class MainPageController {
  constructor(view) {
    this.view = view
    
  
  }

  registerListeners() {
    document.querySelector('left-pane').shadowRoot.querySelector("#left-pane-button").addEventListener("click", () => {    
      var v = document.querySelector("left-pane").shadowRoot.querySelector('#left-pane');
      var p = document.querySelector('drag-view').shadowRoot.querySelector(".page");
      if (v.style.display === "none") {
         v.style.display = "block";
         p.style.left = "429px";
      } else {
        // Page hides - Move MAIN page left
         v.style.display = "none";
         p.style.left = "429px";
      }
      
    })

    var myNodelist = document.querySelector('left-pane').shadowRoot.querySelectorAll("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7"); // x symbol
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }

    // Click on a close button to hide the current list item
    var close = document.querySelector('left-pane').shadowRoot.querySelectorAll("close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }





    // add Javascript code here
    
  }

  //Example code
  onTasksButtonClicked() {
    console.log('Tasks button clicked...')
  }



}
