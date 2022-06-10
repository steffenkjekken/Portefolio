let project = document.getElementsByClassName("project");
let mdl = document.getElementsByClassName("modal");

for (var i = 0; i < project.length; i++) {
    var thisProject = project[i];
    thisProject.addEventListener("click", function(e){
      var modal = document.getElementById(this.dataset.modal);
      modal.style.display = "flex";

      if (e.target == modal) {
          modal.style.display ="none";
      }
  })
};
