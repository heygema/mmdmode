/*
Just turn the dark mode on.
*/

function darkened() {
  let s = document.createElement("style");
  s.innerHTML +=
    ".darkMode { background-color: #000000 !important; color: #757575 !important; } a.darkMode:hover {color: #FFFFFF !important}";
  document.body.appendChild(s);
  let x = document.getElementsByTagName("*");
  for (let item of x) {
    item.className = "darkMode " + item.className;
  }
}

darkened();
window.onload = function() {
  darkened();
};
