var left = 10;
var right = 480;
var bottom = 290;
let rad = 20;
let xpos, ypos;
let xspeed = 1.8;
let yspeed = 1.2;
let xdirection = 5;
let ydirection = 1;

let ballColors = ["purple", "yellow", "red", "blue"];

function setup() {
  createCanvas(500, 300);
  frameRate(40);
  ellipseMode(RADIUS);
  xpos = width / 2;
  ypos = height / 2;
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  ellipse(250, 150, 5);
  ellipse(60, 150, 5);
  ellipse(440, 150, 5);
  background("#468125");
  fill("#61A43C");
  rect(25, 10, 30, 280);
  rect(85, 10, 30, 280);
  rect(145, 10, 30, 280);
  rect(205, 10, 30, 280);
  rect(265, 10, 30, 280);
  rect(325, 10, 30, 280);
  rect(385, 10, 30, 280);
  rect(445, 10, 30, 280);

  var mapx = map(mouseX, 0, width, 50, 50);
  var mapy = map(mouseX, 0, height, 10, 40);
  var size = map(mouseY, 0, height, 50, 50);

  var cx = constrain(mouseX, left, right);
  var cy = constrain(mouseY, left, bottom - 25);

  // ball
  var value = map(mouseX, 10, height, 0, 280);
  fill(r, g, b);
  rect(right - 5, cy, 15, 25);
  rect(left, cy, 15, 25);

  strokeWeight(3);
  stroke("white");
  noFill();
  ellipse(60, 150, 5);
  ellipse(440, 150, 5);
  line(250, 10, 250, 290);
  line(10, 10, 490, 10);
  line(10, 10, 10, 290);
  line(490, 10, 490, 290);
  line(10, 290, 490, 290);
  line(10, 80, 80, 80);
  line(80, 80, 80, 210);
  line(80, 210, 10, 210);
  line(490, 80, 420, 80);
  line(420, 210, 420, 80);
  line(420, 210, 490, 210);
  line(10, 112, 40, 112);
  line(10, 177, 40, 177);
  line(40, 112, 40, 177);
  line(460, 112, 490, 112);
  line(460, 177, 490, 177);
  line(460, 112, 460, 177);
  ellipse(250, 150, 5);
  ellipse(width / 2, 150, 75); //center

  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  if (xpos > right - rad || xpos - rad < rad) {
    xdirection *= -1;
  }
  if (ypos > bottom - rad || ypos - left < rad) {
    ydirection *= -1;
  }

  // draw ball
  strokeWeight(0);
  fill(ballColors[0]);
  ellipse(xpos, ypos, rad, rad);
  fill(ballColors[1]);
  ellipse(xpos, ypos, 15, 15);
  fill(ballColors[2]);
  ellipse(xpos, ypos, 10, 10);
  fill(ballColors[3]);
  ellipse(xpos, ypos, 5, 5);

  // randomize ballColors if goal collision occurs
  if (xpos > 1 && xpos < 80 && ypos > 80 && ypos < 210) {
    ballColors[0] = color(random(255), random(255), random(255));
    ballColors[1] = color(random(255), random(255), random(255));
    ballColors[2] = color(random(255), random(255), random(255));
    ballColors[3] = color(random(255), random(255), random(255));
  }
  if (xpos > 420 && xpos < 490 && ypos > 80 && ypos < 210) {
    ballColors[0] = color(random(255), random(255), random(255));
    ballColors[1] = color(random(255), random(255), random(255));
    ballColors[2] = color(random(255), random(255), random(255));
    ballColors[3] = color(random(255), random(255), random(255));
  }
}