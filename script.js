// Intro pop up state variable
let startToggle = false;

// DOM elements
const intro = document.getElementById("intro-wrapper");
const papers = document.getElementById("papers");
const sizes = document.getElementById("sizes");
const colors = document.getElementById("colors");
const menus = [intro, papers, sizes, colors];

// Paper color variables
const paperColor1 = [253, 246, 227];
const paperColor2 = [255, 255, 255];
const paperColor3 = [213, 181, 156];
let paperColor = paperColor3;

// Pen size variables
const penSize1 = 5;
const penSize2 = 15;
const penSize3 = 25;
let penSize = penSize2;

// Pen color variables
const penColor1 = [0, 0, 0];
const penColor2 = [255, 0, 0];
const penColor3 = [255, 255, 0];
const penColor4 = [0, 255, 0];
const penColor5 = [0, 0, 255];
let penColor = penColor1;

// Menu states variables
const toggles = {
  paper: false,
  size: false,
  color: false,
};

function setup() {
  // Including p5.js sketch: https://happycoding.io/tutorials/p5js/web-dev
  let canvas = createCanvas(296, 536);
  canvas.parent("sketch-wrapper");
  background(paperColor);
  noStroke();
  fill(penColor);
}

function draw() {
  // Draw when mouse is pressed only if menus are closed
  if (
    mouseIsPressed &&
    !toggles.paper &&
    !toggles.size &&
    !toggles.color &&
    startToggle
  ) {
    circle(mouseX, mouseY, penSize);
  }
}

// Buttons functions

// Start button
function starting() {
  menus[0].style.display = "none";
  startToggle = true;
}

// Draw button
function drawing() {
  newPenColor = penColor;
  fill(newPenColor);
}

// Erase button
function erasing() {
  let newPenColor = paperColor;
  fill(newPenColor);
}

// Reset button
function reseting() {
  background(paperColor);
  newPenColor = penColor;
  fill(newPenColor);
}

// Save button
function saving() {
  saveCanvas("LilSketchy", "jpg");
}

// Open and close menus based on state
function menu(_menu, _toggleName) {
  if (startToggle) {
    if (!toggles[_toggleName]) {
      closeMenu();
      menus[_menu].style.display = "flex";
      toggles[_toggleName] = true;
    } else if (toggles[_toggleName]) {
      closeMenu();
    }
  }
}

// Close all menus
function closeMenu() {
  menus[1].style.display = "none";
  toggles.paper = false;
  menus[2].style.display = "none";
  toggles.size = false;
  menus[3].style.display = "none";
  toggles.color = false;
}

// Paper color change button
function paperChange(_paperColor) {
  paperColor = _paperColor;
  background(paperColor);
  closeMenu();
}

// Pen size change button
function sizeChange(_penSize) {
  penSize = _penSize;
  closeMenu();
}

// Pen color change button
function colorChange(_penColor) {
  penColor = _penColor;
  fill(penColor);
  closeMenu();
}
