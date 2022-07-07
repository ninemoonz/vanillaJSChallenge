// <⚠️ DONT DELETE THIS ⚠️>
// import "style.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const title = document.querySelector("h2");
console.log(title);

const superEventHandler = {
  randColor: function () {
    const colorChosen = colors[Math.floor(Math.random() * colors.length)];
    title.style.color = colorChosen;
  },

  mouseOver: function () {
    title.innerText = "Mouse Entered";
    superEventHandler.randColor();
  },
  mouseLeave: function () {
    title.innerText = "Mouse Leaved";
    superEventHandler.randColor();
  },
  mouseClick: function () {
    title.innerText = "Mouse Clicked";
    superEventHandler.randColor();
  },
  windowSize: function () {
    title.innerText = "Resizing the browser";
    superEventHandler.randColor();
  },
  rightClick: function () {
    title.innerText = "Right clicked";
    superEventHandler.randColor();
  }
};

title.addEventListener("mouseenter", superEventHandler.mouseOver);
title.addEventListener("mouseleave", superEventHandler.mouseLeave);
title.addEventListener("click", superEventHandler.mouseClick);
window.addEventListener("contextmenu", superEventHandler.rightClick);
window.addEventListener("resize", superEventHandler.windowSize);
