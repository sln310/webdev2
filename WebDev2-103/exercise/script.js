const images = [
  "./images/avocado.jpeg",
  "./images/pancake.jpeg",
  "./images/sandwich.jpeg",
  "./images/spaghetti.jpeg",
];

const img = document.querySelector("img");

window.addEventListener("DOMContentLoaded", () => {
  img.src = images[0];
});

const slide = document.getElementsByClassName("imageCarousel");
const prev = document.querySelector("#prev-button");
const next = document.querySelector("#next-button");

// ----------------------
let count = 0;

function goNext() {
  if (count == 2) {
    count = 0;
  } else {
    count++;
  }

  change();
}

function goBack() {
  if (count == 0) {
    count = 2;
  } else {
    count--;
  }

  change();
}

function change() {
  img.src = images[count];
}

next.addEventListener("click", goNext, false);
prev.addEventListener("click", goBack, false);
// ----------------------
