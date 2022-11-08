// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function hourDisplay() {
    var now = "hour-" + dayjs().hour();
    console.log(now);
    // var hourBlock = document.getElementById("hour-")
    $(".time-block").each(function (){
      var blockHour = $(this).attr("id");
      console.log(blockHour);
      if (blockHour === now) {
        this.classList.add("present")
      } else if (blockHour < now) {
        this.classList.add("past")
      } else {
        this.classList.add("future")
      }
    });
  };
  hourDisplay();
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
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
  //
  // TODO: Add code to display the current date in the header of the page.
  var todayDate = dayjs().format('MMMM DD YYYY, h:mm:ss a');
  $("#currentDay").html(todayDate);
});
