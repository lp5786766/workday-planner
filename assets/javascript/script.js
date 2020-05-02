// When I open the page, today's date is displayed (Moment.js library).

var moment = moment().format("MMMM Do YYYY");
$("#moment").text(moment);

// Below I see 9 blocks of 1 hour each (9:00 am - 5:00 pm);
// Each block has functionality:
// 1. I can click on the block the record my task.
// After I input text, I click the Save button to the side of the block and the task persits.

// *****************************************************SAVE BUTTON*************************************************************
// saveBtn on.("click"). How to distinguish between buttons?
var saveBtn = $(".save");

saveBtn.on("click", function () {
  // The text is stored in the local storage.
  var task9 = $(".9").val();
  localStorage.setItem("task9", task9);
  var task10 = $(".10").val();
  localStorage.setItem("task10", task10);
  var task11 = $(".11").val();
  localStorage.setItem("task11", task11);
  var task12 = $(".12").val();
  localStorage.setItem("task12", task12);
  var task1 = $(".1").val();
  localStorage.setItem("task1", task1);
  var task2 = $(".2").val();
  localStorage.setItem("task2", task2);
  var task3 = $(".3").val();
  localStorage.setItem("task3", task3);
  var task4 = $(".4").val();
  localStorage.setItem("task4", task4);
  var task5 = $(".5").val();
  localStorage.setItem("task5", task5);
});
// The text is taken from the local storage for display.

var savedTask9 = localStorage.getItem("task9");
$(".9").val(savedTask9);
var savedTask10 = localStorage.getItem("task10");
$(".10").val(savedTask10);
var savedTask11 = localStorage.getItem("task11");
$(".11").val(savedTask11);
var savedTask12 = localStorage.getItem("task12");
$(".12").val(savedTask12);
var savedTask1 = localStorage.getItem("task1");
$(".1").val(savedTask1);
var savedTask2 = localStorage.getItem("task2");
$(".2").val(savedTask2);
var savedTask3 = localStorage.getItem("task3");
$(".3").val(savedTask3);
var savedTask4 = localStorage.getItem("task4");
$(".4").val(savedTask4);
var savedTask5 = localStorage.getItem("task5");
$(".5").val(savedTask5);
// Text could be deleted from the local storage.
//

// 2. I can click on the existing task and erase it, I can write a new task on the same spot and save it afterwards.
// 3. Each block is colored respective of time (past, current, future event);

// Questions/Suggestions:
// Would the tasks be deleted the next day and you are presented with a blank day?
// Mayby add button "Clear all Tasks"
// Maybe add options to highlight events or timeblocks.
//
