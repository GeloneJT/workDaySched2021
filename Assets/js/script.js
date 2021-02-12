// Saves data to local storage
$(".saveBtn").on("click", function () {
  var value = $(this).siblings(".task").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, value);
});
// Adds current date and time to header
function time() {
  var currentTime = moment().format("MMM Do, YYYY hh:mm:ss A");
  $("#time-display").text(currentTime);
}

setInterval(time, 1000);

$("hour-9 .task").val(localStorage.getItem("hour-9"));


//Assess time passed, time current; time imminent to color code in grey, red, and green respectively
var atm = new Date().getHours();

function colorgreyRedGreen();
    if (atm > 9){
        $("task9").addClass("past");
    }else if (atm >= 9 && atm < 10){
        $("task9").addClass("presemt");
    }else if (atm < 9) {
        $("task9").addClass("future");
    }
    