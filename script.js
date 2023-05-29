let circleX = [];
let circleY = [];
let circleR = [];
let circleC = [];

let startToggle = 0;

let paperToggle = 0;
let paperColor1 = [253, 246, 227];
let paperColor2 = [255, 255, 255];
let paperColor3 = [213, 181, 156];
let paperColor = paperColor3;

let penToggle = 0;
let penRadius1 = 5;
let penRadius2 = 15;
let penRadius3 = 25;
let penRadius = penRadius2;

let colorToggle = 0;
let penColor1 = [0, 0, 0];
let penColor2 = [255, 0, 0];
let penColor3 = [255, 255, 0];
let penColor4 = [0, 255, 0];
let penColor5 = [0, 0, 255];
let penColor = penColor1;

function setup() {
  // Including p5.js sketch: https://happycoding.io/tutorials/p5js/web-dev
  let canvas = createCanvas(296, 536);
  canvas.parent("sketch-container");
  background(paperColor);
  noStroke();
  fill(penColor);
}

function draw() {
  if (
    mouseIsPressed === true &&
    paperToggle == 0 &&
    penToggle == 0 &&
    colorToggle == 0 &&
    startToggle == 1
  ) {
    circle(mouseX, mouseY, penRadius);
    circleX.push(mouseX);
    circleY.push(mouseY);
    circleR.push(penRadius);
    circleC.push(penColor);
  }
}

function starting() {
  document.getElementById("intro-wrapper").style.display = "none";
  startToggle = 1;
}

function reseting() {
  background(paperColor);
  newPenColor = penColor;
  fill(newPenColor);
}

function erasing() {
  let newPenColor = paperColor;
  fill(newPenColor);
}

function drawing() {
  newPenColor = penColor;
  fill(newPenColor);
}

function paperMenuOn() {
  if (startToggle == 1) {
    document.getElementById("papers").style.display = "flex";
    paperToggle = 1;
    document.getElementById("pens").style.display = "none";
    penToggle = 0;
    document.getElementById("colors").style.display = "none";
    colorToggle = 0;
  }
}

function paperMenuOff() {
  document.getElementById("papers").style.display = "none";
  paperToggle = 0;
}

function paperMenu() {
  if (paperToggle == 0) {
    paperMenuOn();
  } else if (paperToggle == 1) {
    paperMenuOff();
  }
}

function penMenuOn() {
  if (startToggle == 1) {
    document.getElementById("pens").style.display = "flex";
    penToggle = 1;
    document.getElementById("papers").style.display = "none";
    paperToggle = 0;
    document.getElementById("colors").style.display = "none";
    colorToggle = 0;
  }
}

function penMenuOff() {
  document.getElementById("pens").style.display = "none";
  penToggle = 0;
}

function penMenu() {
  if (penToggle == 0) {
    penMenuOn();
  } else if (penToggle == 1) {
    penMenuOff();
  }
}

function colorMenuOn() {
  if (startToggle == 1) {
    document.getElementById("colors").style.display = "flex";
    colorToggle = 1;
    document.getElementById("pens").style.display = "none";
    penToggle = 0;
    document.getElementById("papers").style.display = "none";
    paperToggle = 0;
  }
}

function colorMenuOff() {
  document.getElementById("colors").style.display = "none";
  colorToggle = 0;
}

function colorMenu() {
  if (colorToggle == 0) {
    colorMenuOn();
  } else if (colorToggle == 1) {
    colorMenuOff();
  }
}

function paperChange1() {
  paperColor = paperColor1;
  background(paperColor);
  paperMenuOff();
}

function paperChange2() {
  paperColor = paperColor2;
  background(paperColor);
  paperMenuOff();
}

function paperChange3() {
  paperColor = paperColor3;
  background(paperColor);
  paperMenuOff();
}

function penChange1() {
  penRadius = penRadius1;
  penMenuOff();
}

function penChange2() {
  penRadius = penRadius2;
  penMenuOff();
}

function penChange3() {
  penRadius = penRadius3;
  penMenuOff();
}

function colorChange1() {
  penColor = penColor1;
  fill(penColor);
  colorMenuOff();
}

function colorChange2() {
  penColor = penColor2;
  fill(penColor);
  colorMenuOff();
}

function colorChange3() {
  penColor = penColor3;
  fill(penColor);
  colorMenuOff();
}

function colorChange4() {
  penColor = penColor4;
  fill(penColor);
  colorMenuOff();
}

function colorChange5() {
  penColor = penColor5;
  fill(penColor);
  colorMenuOff();
}
