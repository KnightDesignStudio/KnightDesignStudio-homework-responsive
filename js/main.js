$ ( document ).ready();

//when user clicks hamburger toggle between hiding and 
//showing dropdown menu


/* Can't geet any of these functions to work.
 Have spend hours (8+) trying to get 
the dropdown menu to function properly. Here's everything I tried.

function myFunction() {
    document.getElementById("dropdown-menu").classList.toggle("show");
}
	
//close dropdown menu if user clicks elsewhere
	window.onclick = function(event) {
  if (!event.target.matches('.hamburger')) {

  	var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
*/

/*$('.hamburger').click(showDropdown);

function showDropdown(){

	event.preventDefault();

	$(".dropdown").slideDown(slow);
	$(".dropdown").show();

}
*/

$('.hamburger').onclick(myFunction);

function myFunction() {
	$("dropdown").toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.hamburger')) {
		var openDropdown = dropdowns[i];
		if (opendDropdown.classList.contains('show')) {
			openDropdown.classList.remove('show');
		}
	}
}


