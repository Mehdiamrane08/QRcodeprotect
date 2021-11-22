$(document).ready(function(){

	$(".sidebar-menu > li.have-children a").on("click", function(i){
		  i.preventDefault();
    if( ! $(this).parent().hasClass("active") ){
      $(".sidebar-menu li ul").slideUp();
      $(this).next().slideToggle();
      $(".sidebar-menu li").removeClass("active");
      $(this).parent().addClass("active");
    }
    else{
      $(this).next().slideToggle();
      $(".sidebar-menu li").removeClass("active");
        }
    });
});



var sidebar = document.getElementById("side-bar")
var hamburger = document.getElementById("hamburger")
var laSidebarEstAffiche = true 
hamburger.addEventListener("click", function() {
  if (laSidebarEstAffiche == true) {
     sidebar.classList.add("active-side")
     laSidebarEstAffiche = false
   }  
  else {
    sidebar.classList.remove("active-side")
    laSidebarEstAffiche = true
  }
})








