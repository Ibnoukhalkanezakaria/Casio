let keys = document.querySelectorAll(".keys li");
let check = document.querySelector(".check");
let tunes = document.querySelectorAll(".keys li span");
keys.forEach((keyButton) => {
  keyButton.addEventListener("click", () => play(keyButton));
});

function play(keyButton) {
  let audio = document.getElementById(keyButton.dataset.key);
  audio.currentTime = 0;
  audio.play();
}

const hideKeys = () => {
  tunes.forEach((key) => key.classList.toggle("hide"));
};

check.addEventListener("click", hideKeys);
