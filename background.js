//script for background.js
chrome.extension.onMessage.addListener(dispatchMessage);

function dispatchMessage(msg, sender, sendResponse) {
  if (msg.title === "startTimer") {
    console.log(msg.value);
    showNotification();
  } else {
    console.log("unknown message");
  }
}


function showNotification() {
    var opt = {
        type: "basic",
        title: "Get up",
        message: "Time to exercise",
        iconUrl: "icon.png"
    }
    chrome.notifications.create(opt);
}
