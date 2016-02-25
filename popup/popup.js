//script for popup.html
var bg_page = chrome.extension.getBackgroundPage();

window.onload = function(){
  localize();
  setupView();
};

function setupView() {
  var start_button = document.getElementById("start");
  var cancel_button = document.getElementById("cancel");
  var start_info = document.getElementById("start_info");
  var cancel_info = document.getElementById("cancel_info");
  var times = document.getElementById("times");
  var option = document.getElementById("option");

  if (bg_page.is_timer_start) {
    start_button.style.display = "none";
    start_info.style.display = "none";
    times.style.display = "none";

    var current_time = bg_page.current_timer;
    cancel_info.innerHTML = cancel_info.innerHTML + chrome.i18n.getMessage(current_time+"Value");

    cancel_button.onclick = function(){
      cleanTimer();
      location.reload();
    };
  } else {
    cancel_button.style.display = "none";
    cancel_info.style.display = "none";
    start_button.onclick = function(){
      startTimer();
      location.reload();
    };
  }

  option.onclick = function(){
    chrome.tabs.create({"url":"/option/option.html"});
  };
}

function localize() {
  var header = document.getElementById("header");
  var start_info = document.getElementById("start_info");
  var cancel_info = document.getElementById("cancel_info");
  var s1m = document.getElementById("1m");
  var s10m = document.getElementById("10m");
  var s15m = document.getElementById("15m");
  var s20m = document.getElementById("20m");
  var s30m = document.getElementById("30m");
  var start = document.getElementById("start");
  var cancel = document.getElementById("cancel");
  var option = document.getElementById("option");

  header.innerHTML = chrome.i18n.getMessage("headerValue");
  start_info.innerHTML = chrome.i18n.getMessage("start_infoValue");
  cancel_info.innerHTML = chrome.i18n.getMessage("cancel_infoValue");
  s1m.innerHTML = chrome.i18n.getMessage("1mValue");
  s10m.innerHTML = chrome.i18n.getMessage("10mValue");
  s15m.innerHTML = chrome.i18n.getMessage("15mValue");
  s20m.innerHTML = chrome.i18n.getMessage("20mValue");
  s30m.innerHTML = chrome.i18n.getMessage("30mValue");
  start.innerHTML = chrome.i18n.getMessage("startValue");
  cancel.innerHTML = chrome.i18n.getMessage("cancelValue");
  option.innerHTML = chrome.i18n.getMessage("popupOptionValue");
}

function startTimer() {
  var time_select = document.getElementById("times");
  var time = time_select.options[time_select.selectedIndex].value;
  var msg = { title: "startTimer", value: time };
  chrome.runtime.sendMessage(msg);
}

function cleanTimer() {
  var msg = { title: "cleanTimer"};
  chrome.runtime.sendMessage(msg);
}
