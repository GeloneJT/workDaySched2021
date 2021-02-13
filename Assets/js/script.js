// Loads page DOM before launching JavaScript
$(document).ready(function () {

  // Saves data to local storage
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".task").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
  });

  // Persists text on refreshed page with LocalStorage data
  $("#hour-9 .task").val(localStorage.getItem("hour-9"));
  $("#hour-10 .task").val(localStorage.getItem("hour-10"));
  $("#hour-11 .task").val(localStorage.getItem("hour-11"));
  $("#hour-12 .task").val(localStorage.getItem("hour-12"));
  $("#hour-13 .task").val(localStorage.getItem("hour-13"));
  $("#hour-14 .task").val(localStorage.getItem("hour-14"));
  $("#hour-15 .task").val(localStorage.getItem("hour-15"));
  $("#hour-16 .task").val(localStorage.getItem("hour16"));
  $("#hour-17 .task").val(localStorage.getItem("hour-17"));

  // Adds current date and time to header
  var currentTime = moment().format("MMM Do, YYYY hh:mm A");
  $("#time-display").text(currentTime);
  console.log(currentTime);

    

  var sunPost = moment().hours();
  console.log(sunPost);

  var atm = new Date().getHours();
  console.log(atm);

  //Assess time passed vs time current vs time imminent to color code in grey(past), red(current), and green(future) respectively
  function TasksToDo() {
    if (atm > 9) {
      $("#task9").addClass("past");
    } else if (atm >= 9 && atm < 10) {
      $("#task9").addClass("present");
    } else if (atm < 9) {
      $("#task9").addClass("future");
      console.log(atm);
    }

    if (atm > 10) {
      $("#task10").addClass("past");
    } else if (atm >= 10 && atm < 11) {
      $("#task10").addClass("present");
    } else if (atm < 10) {
      $("#task10").addClass("future");
    }

    if (atm > 11) {
      $("#ask11").addClass("past");
    } else if (atm >= 11 && atm < 12) {
      $("#task11").addClass("present");
    } else if (atm < 11) {
      $("#task11").addClass("future");
    }

    if (atm > 12) {
      $("#task12").addClass("past");
    } else if (atm >= 12 && atm < 13) {
      $("#task12").addClass("present");
    } else if (atm < 12) {
      $("#task12").addClass("future");
    }

    if (atm > 13) {
      $("#task13").addClass("past");
    } else if (atm >= 13 && atm < 14) {
      $("#task13").addClass("present");
    } else if (atm < 13) {
      $("#task13").addClass("future");
    }

    if (atm > 14) {
      $("#task14").addClass("past");
    } else if (atm >= 14 && atm < 15) {
      $("#task14").addClass("present");
    } else if (atm < 14) {
      $("#task14").addClass("future");
    }

    if (atm > 15) {
      $("#task15").addClass("past");
    } else if (atm >= 15 && atm < 16) {
      $("#task15").addClass("present");
    } else if (atm < 15) {
      $("#task15").addClass("future");
    }

    if (atm > 16) {
      $("#task16").addClass("past");
    } else if (atm >= 16 && atm < 17) {
      $("#task16").addClass("present");
    } else if (atm < 16) {
      $("#task16").addClass("future");
    }

    if (atm > 17) {
      $("#task17").addClass("past");
    } else if (atm >= 17 && atm < 18) {
      $("#task17").addClass("present");
    } else if (atm < 17) {
      $("#task17").addClass("future");
    }
  }

  TasksToDo();
});
