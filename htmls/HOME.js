function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("myTopnav").style.display = "none";
}
var navOpen = false;

function openNav() {
  if (!navOpen) {
    document.getElementById("mySidenav").style.width = "250px";
    navOpen = true;
  } else {
    closeNav();
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  navOpen = false;
}