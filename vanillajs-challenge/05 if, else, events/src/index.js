const body = document.querySelector("body");

const eventHandler = {
  resizeWindow: function () {
    const outterWidth = window.outerWidth;
    const innerWidth = window.innerWidth;
    const windowRate = (innerWidth / outterWidth) * 100;

    if (windowRate > 70) {
      body.style.backgroundColor = "#EEBC12";
    } else if (windowRate > 50) {
      body.style.backgroundColor = "#8F4FAE";
    } else {
      body.style.backgroundColor = "#2E8CD5";
    }
  },
};

function listen() {
  window.addEventListener("resize", eventHandler.resizeWindow);
}

function init() {
  body.innerHTML = `
    <h1 style="color:white;">Hello!</h1>
  `;

  body.style.backgroundColor = "#8F4FAE";

  listen();
}

init();
