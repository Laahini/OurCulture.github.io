function clickToClose(e) {
    const element =  document.getElementById("navbar-right-mobile");
    if (element.display !== 'none') {
      NavClose();
    }
  }
function NavOpen(e) {
    document.getElementById("navbar-right-mobile").style.width = "300px";
    document.getElementById("navbar-right-mobile").style.visibility = "visible";
    document.body.addEventListener("click", clickToClose);
    e.stopPropagation();
}
function NavClose() {
    document.getElementById("navbar-right-mobile").style.width = "0";
    document.getElementById("navbar-right-mobile").style.visibility = "hidden";
    document.body.removeEventListener("click", clickToClose);
}
window.addEventListener('resize', clickToClose);

function openCulture(){
  location.href="culture.html"
}
function openPlay(){
  location.href="play.html"
}
function openJustine(){
  location.href="justine2.html"
}
