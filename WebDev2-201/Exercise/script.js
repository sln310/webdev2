/**
 * Assign a click event handler to the add button with an id of addTask.
 *
 * When the add button is clicked:
 *  - If the textbox is empty, generate an alert with the text “Error: Please enter a task first”.
 *  - If the text box is not empty, generate an alert with the text containing the task name. For example, if the text in the input box is “Complete Assignment”, generate an alert with text “New Task: Complete Assignment”.
 *  - Clear the text inside the text box after the add button is clicked.
 */

$(document).ready(function () {
  //   code goes here
  $("#addTask").click(function () {
    const input = $(".textBox").val();

    if (!input) {
      alert("Error: Please enter a task first");
      return;
    } else {
      alert(`New Task: ${input}`);
      const task = $(
        `<div class="task">${input}
            <i class="fa fa-check"></i>
            <i class="fa fa-trash-alt"></i>
        </div>`
      );
      $(".notCompleted").append(task);
    }

    $(".fa-check").click(function () {
      const done = $(this).parent(); //<div class = "notCompleted">
      done.fadeOut(1000, function () {
        done.hide().appendTo(".completed").fadeIn(1000);
      });
    });

    $(".fa-trash-alt").click(function () {
      const remove = $(this).parent();
      remove.fadeOut(1000, function () {
        remove.remove();
      });
    });
    $(".textBox").val("");
  });
});
