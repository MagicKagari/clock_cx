//script for background.js
chrome.extension.onMessage.addListener(dispatchMessage);
var is_timer_start = false;
var intervalID;
var current_timer;

function dispatchMessage(msg, sender, sendResponse) {
  switch(msg.title) {
    case "startTimer":
      setupTimer(msg.value);
      current_timer = msg.value;
      is_timer_start = true;
      break;
    case "cleanTimer":
      cleanTimer();
      is_timer_start = false;
      break;
    default:
      console.log("unknown message" + msg.title);
  }
}

function setupTimer(time) {
  var ms;
  switch(time) {
    case "1m":
      ms = 1*60*1000;
      break;
    case "10m":
      ms = 10*60*1000;
      break;
    case "15m":
      ms = 15*60*1000;
      break;
    case "20m":
      ms = 20*60*1000;
      break;
    case "30m":
      ms = 30*60*1000;
      break;
    default:
      console.log("unknown time" + time);
      ms = 60*1000;
  }
  intervalID = setInterval(function(){ showNotification();}, ms);
}

function cleanTimer() {
  clearInterval(intervalID);
}

function showNotification() {
    var _title = chrome.i18n.getMessage("notificationTitle");
    var _body = chrome.i18n.getMessage("notificationBody");
    var opt = {
        type: "basic",
        title: _title,
        message: _body,
        iconUrl: "icon.png"
    }
    chrome.notifications.create(opt);
}
