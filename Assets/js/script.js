$(".saveBtn").on("click", function () {
  var value = $(this).siblings(".task").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, value);
});

function time() {
    var currentTime = moment().format("MMM Do, YYYY hh:mm:ss A");
    $("#time-display").text(currentTime);
}

    setInterval(time,1000);

$("hour-9 .task").val(localStorage.getItem("hour-9"));


