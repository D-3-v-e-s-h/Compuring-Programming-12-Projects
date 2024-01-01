const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

function toggleDropdown(dropdownId) {
  // Get the dropdown element by its ID
  var dropdown = document.getElementById(dropdownId);

  // Check the current display style of the dropdown
  // If it's currently set to 'block', change it to 'none'; otherwise, change it to 'block'
  dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

/* 
Explanation:

function toggleDropdown(dropdownId) {: This declares a JavaScript function named toggleDropdown that takes one parameter, 
dropdownId.

var dropdown = document.getElementById(dropdownId);: This line uses document.getElementById to get the HTML element with 
the specified ID (dropdownId). I think it assumes that the dropdown element has been assigned an ID.

dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';: This line toggles the display style of 
the dropdown element.
If the current display style is 'block', it sets it to 'none' (hides the dropdown).
If the current display style is not 'block', it sets it to 'block' (shows the dropdown).
*/
