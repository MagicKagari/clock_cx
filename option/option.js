//script for option page control
window.onload = function(){
  localize();
  setupView();
  restore_options();
};

function localize(){
  var custom_info = document.getElementById("custom_info");
  var _status = document.getElementById("status");
  var save = document.getElementById("save");

  document.title = chrome.i18n.getMessage("optionTitle");
  custom_info.innerHTML = chrome.i18n.getMessage("optionCustomInfoValue");
  _status.innerHTML = chrome.i18n.getMessage("optionStatus");
  save.innerHTML = chrome.i18n.getMessage("optionSaveButton");
};

function setupView(){
  var save = document.getElementById("save");
  var _status = document.getElementById('status');
  save.onclick = function(){
    save_options();
  };
  _status.innerHTML = "";
};

// Saves options to chrome.storage
function save_options() {
  var custom = document.getElementById("custom");
  var custom_text = custom.value;
  chrome.storage.sync.set({
    "custom_text": custom_text
  }, function() {
    // Update status to let user know options were saved.
    var _status = document.getElementById('status');
    _status.innerHTML = chrome.i18n.getMessage("optionStatus");
    setTimeout(function() {
      _status.innerHTML = "";
    }, 1000);
  });
}

// Restore chrome.storage.
function restore_options(){
  chrome.storage.sync.get( "custom_text", function(items) {
    if(items.custom_text == "undefined") return;
    var _custom = document.getElementById("custom");
    _custom.value = items.custom_text;
  });
}
