//Adding a note
const form = document.getElementById("add");
const input = document.getElementById("add-input");
const ul = document.getElementById("list");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  add();
});

function add(note) {
  let noteText = input.value;

  const list = document.getElementById("list");
  const li = document.createElement("li");
  li.innerHTML = `<p>${noteText}</p>
                  <p>
                    <i class="fa fa-pencil-square-o"></i><i class="fa fa-times"></i
                    </p>
                    <input type="text" class="edit-note">`;
  list.appendChild(li);
  noteText = "";
}

//   if (noteText) {
//     const p = document.createElement("p");
//     p.innerText = noteText;
//     p.classList.add("firstP");

//     // p.innerHTML = `<p>${textText}</p>
//     // <p>
//     //   <i class="fa fa-pencil-square-o"></i><i class="fa fa-times"></i
//     //   </p>
//     //   <input type="text" class="edit-note">`;

//     // const pp = li.appendChild(p);
//     li.appendChild(p);
//     list.appendChild(li);
//     input.value = "";
// }

// if (!value) return
// const inputValue=event.target[0].value
