//Sourced from: https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp
function openNav() {
  document.getElementById("mySidebar").style.width = "225px";
  document.getElementById("main").style.marginLeft = "225px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}