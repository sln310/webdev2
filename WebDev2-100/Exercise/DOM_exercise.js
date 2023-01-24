/* JavaScript DOM Exercises 01 */

const paragraph = document.querySelector("p");

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/

// --------------
// mistake
// --------------
// window.onload = function () {
//   check = (word) => {
//     if (word.length > 8) {
//       word = '<span style="background:yellow;">' + word + "</span>";
//     } else {
//       word;
//     }
//     return word;
//   };

//   let str = document.getElementById("test").innerText;
//   let newt = str.trim().split(" ").map(check).join(" ");
//   document.getElementById("test").innerHTML = newt;
// };

paragraph.innerHTML = paragraph.innerText
  .split(" ")
  .map((e) =>
    e.length > 8 ? `<span style="background:yellow;">${e}</span>` : e
  )
  .join(" ");

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/

let temp_link = document.createElement("a");
temp_link.href = "http://officeipsum.com/";
temp_link.target = "_blank";
temp_link.innerHTML = "back to the source";

document.body.appendChild(temp_link);

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

paragraph.innerHTML = paragraph.innerHTML.split(".").join(".</p><p>") + "</p>";

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/

const wordCount = paragraph.innerText.split(" ").length;
const wordCountElem = document.createElement("div");
wordCountElem.innerText = `${wordCount} words`;
document.body.insertBefore(wordCountElem, paragraph);

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
const paragraphAll = document.querySelectorAll("p");
Array.from(paragraphAll).forEach((p) => {
  p.innerHTML = p.innerHTML.replace(/\?/g, "🤔").replace(/\!/g, "😲");
});
