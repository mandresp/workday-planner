$(document).ready(function () {

  $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
  });
  // This executes the function after a save button has been clicked. It will take the siblings' description and the id of the parent and set them to local storage

  function hourDisplay() {
    var now = "hour-" + dayjs().hour();
    console.log(now);
    $(".time-block").each(function (){
      var blockHour = $(this).attr("id");
      if (blockHour === now) {
        this.classList.add("present")
      } else if (blockHour < now) {
        this.classList.add("past")
      } else {
        this.classList.add("future")
      }
    });
    // This function checks the current time and adds the hour- to the front so it matches the HTML ids. It runs this against the name of each block id to determine if the time is past, present, or future and applies the correct class
  };
  
  $("#hour-00 .description").val(localStorage.getItem("hour-00"));
  $("#hour-01 .description").val(localStorage.getItem("hour-01"));
  $("#hour-02 .description").val(localStorage.getItem("hour-02"));
  $("#hour-03 .description").val(localStorage.getItem("hour-03"));
  $("#hour-04 .description").val(localStorage.getItem("hour-04"));
  $("#hour-05 .description").val(localStorage.getItem("hour-05"));
  $("#hour-06 .description").val(localStorage.getItem("hour-06"));
  $("#hour-07 .description").val(localStorage.getItem("hour-07"));
  $("#hour-08 .description").val(localStorage.getItem("hour-08"));
  $("#hour-09 .description").val(localStorage.getItem("hour-09"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  $("#hour-18 .description").val(localStorage.getItem("hour-18"));
  $("#hour-19 .description").val(localStorage.getItem("hour-19"));
  $("#hour-20 .description").val(localStorage.getItem("hour-20"));
  $("#hour-21 .description").val(localStorage.getItem("hour-21"));
  $("#hour-22 .description").val(localStorage.getItem("hour-22"));
  $("#hour-23 .description").val(localStorage.getItem("hour-23"));
  // Each of these applies the value in local storage to the corresponding hour description if there is one

  var todayDate = dayjs().format('MMMM DD YYYY, h:mm:ss a');
  $("#currentDay").html(todayDate);
  // This simply adds the current date to the current day in the header
  
  hourDisplay();
  // this calls the function we created earlier that sets the colors of the time blocks
});
