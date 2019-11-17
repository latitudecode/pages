function focusRed() {
  document.getElementById('redbox').style.zIndex = 1;
  document.getElementById('bluebox').style.zIndex = -1;
}

function focusBlue() {
  document.getElementById('redbox').style.zIndex = -1;
  document.getElementById('bluebox').style.zIndex = 1;
}