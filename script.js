"use strict";

let message;

function screenSize() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    message = "Mobile Screen";
  } else if (window.matchMedia("(max-width: 1280px)").matches) {
    message = "Tablet Screen";
  } else {
    message = "Desktop Screen";
  }
  console.log(message);
}

screenSize();
