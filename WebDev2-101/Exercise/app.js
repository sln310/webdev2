//Adding a note
const form = document.getElementById("add");
const input = document.getElementById("add-input");
const ul = document.getElementById("list");
const p = document.getElementById("p");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log();
  add();
});

function add(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const li = document.createElement("li");
    li.innerText = todoText;
    li.classList.add("list-group-item");
    // document.body.insertAfter(li, p);

    if (todo && todo.completed) {
      li.classList.add("text-decoration-line-through");
    }

    li.addEventListener("contextmenu", function (event) {
      event.preventDefault();
      li.remove();
      saveData();
    });

    li.addEventListener("click", function () {
      li.classList.toggle("text-decoration-line-through");
      saveData();
    });

    // document.body.insertAfter(li, p);
    ul.appendChild(li);
    input.value = "";
    saveData();
  }
}
