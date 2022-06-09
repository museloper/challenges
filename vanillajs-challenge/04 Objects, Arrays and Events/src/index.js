const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
  mouseEnter: function () {
    title.style.color = colors[0];
    title.innerText = "The mouse is here!";
  },
  mouseOut: function () {
    title.style.color = colors[1];
    title.innerText = "The mouse is gone!";
  },
  windowResize: function () {
    title.style.color = colors[2];
    title.innerText = "You just resized";
  },
  contextMenu: function () {
    title.style.color = colors[4];
    title.innerText = "That was a right click!";
  },
};

const title = document.querySelector("h2");

function init() {
  title.addEventListener("mouseenter", superEventHandler.mouseEnter);
  title.addEventListener("mouseout", superEventHandler.mouseOut);
  window.addEventListener("resize", superEventHandler.windowResize);
  document.addEventListener("contextmenu", superEventHandler.contextMenu);
}

init();
