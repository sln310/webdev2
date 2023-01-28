const body = document.querySelector("body");
let maxHeight = 0;
let maxWidth = 0;

maxWidth = window.innerWidth;
maxHeight = window.innerHeight;

function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const scoreCounter = document.createElement("h1");
let score = 0;
scoreCounter.textContent = `Score: ${score}`;
body.appendChild(scoreCounter);

const init = () => {
  const footstepAudio = new Audio("./audio/smw_footstep.wav");
  const coinAudio = new Audio("./audio/smw_coin.wav");

  //get the avatar
  const avatar = document.querySelector("#avatar");
  //get the coin
  const coin = document.querySelector("#coin");

  moveCoin();
  window.addEventListener("keyup", function (e) {
    if (e.key === "ArrowDown" || e.key === "Down") {
      footstepAudio.play();
      moveVertical(avatar, 50);
    }
    if (e.key === "ArrowUp" || e.key === "Up") {
      footstepAudio.play();
      moveVertical(avatar, -50);
    }
    if (e.key === "ArrowRight" || e.key === "Right") {
      footstepAudio.play();
      avatar.style.transform = "scaleX(1)";
      moveHorizotal(avatar, 50);
    }
    if (e.key === "ArrowLeft" || e.key === "Left") {
      footstepAudio.play();
      avatar.style.transform = "scaleX(-1)";
      moveHorizotal(avatar, -50);
    }

    if (isTouching(avatar, coin)) {
      moveCoin();
      ++score;
      scoreCounter.textContent = `Score: ${score}`;
      coinAudio.play();
    }
  });
};

const moveVertical = (element, amount) => {
  const currTop = extractPos(element.style.top);
  const newTop = currTop + amount;
  if (newTop > 0 && newTop < maxHeight) {
    element.style.top = `${newTop}px`;
  }
};

const moveHorizotal = (element, amount) => {
  const currLeft = extractPos(element.style.left);
  const newLeft = currLeft + amount;
  if (newLeft > 0 && newLeft < maxWidth) {
    element.style.left = `${newLeft}px`;
  }
};

const extractPos = (position) => {
  if (!position) return 100;
  return parseInt(position.slice(0, -2));
};

const moveCoin = () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  if (x < maxWidth && y < maxHeight) {
    coin.style.top = `${x}px`;
    coin.style.left = `${y}px`;
  }
};
// ↑ why : Coin's max height & width are bigger than avator's and sometimes mario cannnot reach the coin
init();
