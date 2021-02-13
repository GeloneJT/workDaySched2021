// Saves data to local storage
$(".saveBtn").on("click", function () {
  var value = $(this).siblings(".task").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, value);
});
// Adds current date and time to header
var currentTime = moment().format("MMM Do, YYYY hh:mm A");
$("#time-display").text(currentTime);

$("hour-9 .task").val(localStorage.getItem("hour-9"));

var atm = new Date().getHours();
console.log(atm);

//Assess time passed vs time current vs time imminent to color code in grey(past), red(current), and green(future) respectively
function TasksToDo() {
  if (atm > 9) {
    $("task9").addClass("past");
  } else if (atm >= 9 && atm < 10) {
    $("task9").addClass("presemt");
  } else if (atm < 9) {
    $("task9").addClass("future");
  }

  if (atm > 9) {
    $("task9").addClass("past");
  } else if (atm >= 9 && atm < 10) {
    $("task9").addClass("presemt");
  } else if (atm < 9) {
    $("task9").addClass("future");
  }

  if (atm > 9) {
    $("task9").addClass("past");
  } else if (atm >= 9 && atm < 10) {
    $("task9").addClass("presemt");
  } else if (atm < 9) {
    $("task9").addClass("future");
  }
}
if (atm > 9) {
  $("task9").addClass("past");
} else if (atm >= 9 && atm < 10) {
  $("task9").addClass("presemt");
} else if (atm < 9) {
  $("task9").addClass("future");
}

if (atm > 9) {
  $("task9").addClass("past");
} else if (atm >= 9 && atm < 10) {
  $("task9").addClass("presemt");
} else if (atm < 9) {
  $("task9").addClass("future");
}

if (atm > 9) {
  $("task9").addClass("past");
} else if (atm >= 9 && atm < 10) {
  $("task9").addClass("presemt");
} else if (atm < 9) {
  $("task9").addClass("future");
}

if (atm > 9) {
  $("task9").addClass("past");
} else if (atm >= 9 && atm < 10) {
  $("task9").addClass("presemt");
} else if (atm < 9) {
  $("task9").addClass("future");
}

if (atm > 9) {
  $("task9").addClass("past");
} else if (atm >= 9 && atm < 10) {
  $("task9").addClass("presemt");
} else if (atm < 9) {
  $("task9").addClass("future");
}

if (atm > 9) {
  $("task9").addClass("past");
} else if (atm >= 9 && atm < 10) {
  $("task9").addClass("presemt");
} else if (atm < 9) {
  $("task9").addClass("future");
}
