//Adding a note
const form = document.getElementById("add");
const input = document.getElementById("add-input");
const ul = document.getElementById("list");
// const li = document.querySelector("li");
const template = document.querySelector("li");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log();
  add();
});

function add(text) {
  let textText = input.value;

  if (textText) {
    const p = document.createElement("li");

    p.innerText = textText;

    // const pp = li.appendChild(p);
    input.value = "";
  }
  ul.appendChild(p);
}
