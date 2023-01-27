const body = document.querySelector("body");

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
      moveHorizotal(avatar, 50);
    }
    if (e.key === "ArrowLeft" || e.key === "Left") {
      footstepAudio.play();
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
  element.style.top = `${currTop + amount}px`;
};

const moveHorizotal = (element, amount) => {
  const currLeft = extractPos(element.style.left);
  element.style.left = `${currLeft + amount}px`;
};

const extractPos = (position) => {
  if (!position) return 100;
  return parseInt(position.slice(0, -2));
};

const moveCoin = () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  coin.style.top = `${x}px`;
  coin.style.left = `${y}px`;
};

init();
