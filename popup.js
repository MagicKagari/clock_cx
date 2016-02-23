//script for popup.html
window.onload = function(){
  var start_button = document.getElementById("start");
  start_button.onclick = function(){
    startTimer();
  }
}

function startTimer() {
  var time_select = document.getElementById("times");
  var time = time_select.options[time_select.selectedIndex].value;
  var msg = { title: "startTimer", value: time };
  chrome.runtime.sendMessage(msg);
}
