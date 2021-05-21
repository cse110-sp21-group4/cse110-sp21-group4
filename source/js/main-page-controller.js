export class MainPageController {
  constructor(view) {
    this.view = view
    
  
  }

  registerListeners() {
    document.querySelector("#left-pane-button").addEventListener("click", () => {    
      var v = document.getElementById("left-pane");
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
    
  }

  //Example code
  onTasksButtonClicked() {
    console.log('Tasks button clicked...')
  }



}
