//Adding a note
const form = document.getElementById("add");
const input = document.getElementById("add-input");
const ul = document.getElementById("list");
// const li = document.getElementById("li");
// const p = document.getElementById("p");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log();
  add();
});

function add(text) {
  let textText = input.value;

  if (text) {
    textText = text.text;
  }

  if (textText) {
    const li = document.createElement("li");

    li.innerText = textText;
    li.classList.add("list");

    if (text && text.completed) {
      li.classList.add("text-decoration-line-through");
    }

    li.addEventListener("contextmenu", function (event) {
      event.preventDefault();
    });

    li.addEventListener("click", function () {
      li.classList.toggle("text-decoration-line-through");
    });

    ul.appendChild(li);
    input.value = "";
  }
}
