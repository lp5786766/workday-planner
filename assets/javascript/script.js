// When I open the page, today's date is displayed

var momentDay = moment().format("MMMM Do YYYY");
$("#moment").text(momentDay);

// Below I see 9 blocks of 1 hour each (9:00 am - 5:00 pm);
// Each block has functionality:
// I can click on the block the record my task.
// After I input text, I click the Save button to the side of the block and the task persits.

// *****************************************************SAVE BUTTON*************************************************************
var saveBtn = $(".save");
var task9 = $(".9");
var task10 = $(".10");
var task11 = $(".11");
var task12 = $(".12");
var task1 = $(".1");
var task2 = $(".2");
var task3 = $(".3");
var task4 = $(".4");
var task5 = $(".5");

saveBtn.on("click", function () {
  // The text is stored in the local storage.
  localStorage.setItem("task9", task9.val());
  localStorage.setItem("task10", task10.val());
  localStorage.setItem("task11", task11.val());
  localStorage.setItem("task12", task12.val());
  localStorage.setItem("task1", task1.val());
  localStorage.setItem("task2", task2.val());
  localStorage.setItem("task3", task3.val());
  localStorage.setItem("task4", task4.val());
  localStorage.setItem("task5", task5.val());
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

// I can click on the existing task and erase it, I can write a new task on the same spot and save it afterwards.

// 3. Each block is colored respective of time (past, current, future event);

var momentTime = moment().format("HH");
console.log(momentTime);

var allTasks = [
  task9,
  task10,
  task11,
  task12,
  task1,
  task2,
  task3,
  task4,
  task5,
];

allTasks.forEach(function (task) {
  var taskID = parseInt(task[0].id);

  // if it's a current event
  if (taskID === momentTime) {
    task.css("background-color", "rgb(87, 199, 133)");
    // if it's a past event
  } else if (taskID < momentTime) {
    task.css("background-color", "rgb(185, 192, 184)");
    // if it's a future event
  } else {
    task.css("background-color", "rgb(237, 221, 83)");
  }
});

// Questions/Suggestions:
// Would the tasks be deleted the next day and you are presented with a blank day?
// Mayby add button "Clear all Tasks"
// Maybe add options to highlight events or timeblocks.
//
