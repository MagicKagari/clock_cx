//script for popup.html

function startTimer(){
    var time_select = document.getElementById("times");
    var time = time_select.options[time_select.selectedIndex].value;
    alert("enter start timer" + time);
}
