export class MainPageController {
  constructor(view) {
    this.view = view
    
    registerListeners()
  }

  registerListeners() {
    document.querySelector("#index-button").addEventListener("click", () => {
      /*
      var v = document.getElementById("left-pane");
      if (v.style.display === "none") {
         v.style.display = "block";
      } else {
         v.style.display = "none";
      }
      */
     console.log("hello");

    })
    
  }

  //Example code
  onTasksButtonClicked() {
    console.log('Tasks button clicked...')
  }



}
