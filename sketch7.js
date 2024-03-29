
var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var diameter = 20;
var xBallChange = 5;
var yBallChange = 5;


var xPaddle;
var yPaddle;
var paddleWidth = 100;
var paddleHeight = 7.5;

var started = false;
var score = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  
  
	xBall += xBallChange;
	yBall += yBallChange;
	if (xBall < diameter/2 || 
      xBall > windowWidth - 0.5*diameter) {
		xBallChange *= -1;
  }
	if (yBall < diameter/2 || 
      yBall > windowHeight - diameter) {
    yBallChange *= -1;
	}
  
  // Detect collision with paddle
  if ((xBall > xPaddle &&
      xBall < xPaddle + paddleWidth) &&
      (yBall + (diameter/2) >= yPaddle)) {
    xBallChange *= -1;
    yBallChange *= -1;
    score++;
  }
  
  // Draw ball
	fill(0, 99, 125);
	noStroke();
	ellipse(xBall, yBall, diameter, diameter);
  

  if (!started) {
    xPaddle = windowWidth / 2;
    yPaddle = windowHeight - 100;
    started = true;
  }
  
  
  fill(255, 19, 0);
  noStroke();
  rect(xPaddle, yPaddle, paddleWidth, paddleHeight);
  
  
  fill(0, 255, 255);
  textSize(24);
	text("Score: " + score, 10, 25);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    xPaddle -= 50;
  } else if (keyCode === RIGHT_ARROW) {
    xPaddle += 50;
  }
}