export class MainPageController {
  constructor(view) {
    this.view = view
    
  
  }

  registerListeners() {
    document.querySelector("#index-button").addEventListener("click", () => {    
      var v = document.getElementById("left-pane");
      if (v.style.display === "none") {
         v.style.display = "block";
         // Page moves right
      } else {
        // Page hides - Move MAIN page left
         v.style.display = "none";
    
      }
      
    })
    
  }

  //Example code
  onTasksButtonClicked() {
    console.log('Tasks button clicked...')
  }



}
