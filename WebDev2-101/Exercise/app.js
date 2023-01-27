//Adding a note
const form = document.getElementById("add");
const input = document.getElementById("add-input");
const ul = document.getElementById("list");
const li = document.createElement("li");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  add();
});

//--------------------------------------
// function add(note) {
//   let noteText = input.value;

//   li.innerHTML = `<p>${noteText}</p>
//                   <p>
//                     <i class="fa fa-pencil-square-o"></i><i class="fa fa-times"></i
//                     </p>
//                     <input type="text" class="edit-note">`;
//   ul.appendChild(li);
//   noteText = "";
// }
//--------------------------------------

//--------------------------------------
// function add(note) {
//   let noteText = input.value;

//   if (noteText) {
//     const li = document.createElement("li");
//     li.innerHTML = `<p>${noteText}</p>
//     <p>
//       <i class="fa fa-pencil-square-o"></i><i class="fa fa-times"></i
//       </p>
//       <input type="text" class="edit-note">`;

//     ul.appendChild(li);
//     input.value = "";
//   }
// }
//--------------------------------------

//--------------------------------------
function add(note) {
  const clone = document.querySelector("#list li").cloneNode(true);
  clone.firstElementChild.textContent = input.value;
  ul.appendChild(clone);
  input.value = "";
}
//--------------------------------------
