const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

function changeColor() {
  let random1 = Math.floor(Math.random() * colors.length);
  let random2 = Math.floor(Math.random() * colors.length);

  while (random1 === random2) {
    random2 = Math.floor(Math.random() * colors.length);
  }

  const color1 = colors[random1];
  const color2 = colors[random2];

  document.body.style.background = `linear-gradient(to right, ${color1} 0%, ${color2} 100%)`;
}

const btn = document.querySelector("button");

function init() {
  btn.addEventListener("click", changeColor);
}

init();
