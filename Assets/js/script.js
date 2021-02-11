document.ready(function() {

$(".saveBtn").on("click",  function(){

function time() {
    var currentTime = moment().format("MMM Do, YYYY hh:mm:ss A");
    $("#time-display").text(currentTime);
}

    setInterval(time,1000);

    

var value = $(this).siblings(".task").val();
var time = $(this).parent().attr("id")

    localStorage.setItem(time, value)
})















});

$("hour-9 .task").val(localStorage.getItem("hour-9"));