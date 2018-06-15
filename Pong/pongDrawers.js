/**
Roshan's Pong Game
Version 1.1
Last edited on: June 15, 2018
------------------------------*/

// Main drawing function to manage the game board
function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPlayerOnePaddle();
  drawPlayerTwoPaddle();
  drawPlayerOneScore();
  drawPlayerTwoScore();
  borderControl();
  paddleCollision();
  pointsControl();
  paddleSpeedControl();
  x += dx;
  y += dy;

  requestAnimationFrame(draw);
}

// Draw the ball to play game with
function drawBall() {
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI*2);
  context.fillStyle = "#FFF";
  context.fill();
  context.closePath();
}

// Draw the paddle on the left side of the screen
function drawPlayerOnePaddle() {
  context.beginPath();
  context.rect(paddleOffset, paddleYOne, paddleWidth, paddleHeight);
  context.fillStyle = "#FFF";
  context.fill();
  context.closePath();
}

// Draw the paddle on the right side of the screen
function drawPlayerTwoPaddle() {
  context.beginPath();
  context.rect(canvas.width - paddleOffset - paddleWidth, paddleYTwo, paddleWidth, paddleHeight);
  context.fillStyle = "#FFF";
  context.fill();
  context.closePath();
}

// Display player one's score on screen
function drawPlayerOneScore() {
  context.font = "16px Arial";
  context.fillStyle = "#FFF";
  context.fillText("P1: " + scoreOne, 22, 20);
}

// Display player two's score on screen
function drawPlayerTwoScore() {
  context.font = "16px Arial";
  context.fillStyle = "#FFF";
  context.fillText("P2: " + scoreTwo, canvas.width - 60, 20);
}