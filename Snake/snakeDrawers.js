/**
Roshan's Snake Game
Version 1.1
Last edited on: June 14, 2018
------------------------------*/

// Maintain all mechanics of the main game board
function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawSnake();
  drawFood();
  drawScore();
  update();
  hasEaten(foodX, foodY);
  deathCheck();
  requestAnimationFrame(draw, 5000);
}

// Draw the snake - body and head
function drawSnake() {
  // Drawing the body of the snake
  for(var i = 0; i < tail.length; i++) {
    context.beginPath();
    context.rect(tail[i].xCoord, tail[i].yCoord, pixelSize, pixelSize);
    context.fillStyle = "#FFF";
    context.fill();
    context.closePath();
  }
  // Draw the head of the snake
  context.beginPath();
  context.rect(x, y, pixelSize, pixelSize);
  context.fillStyle = "#FFF";
  context.fill();
  context.closePath();
}

// Draw the food that gets randomized on the screen
function drawFood() {
  context.beginPath();
  context.rect(foodX, foodY, pixelSize, pixelSize);
  context.fillStyle = "#FF0";
  context.fill();
  context.closePath();
}

// Draw the score on the screen
function drawScore() {
  context.font = "16px Arial";
  context.fillStyle = "#FF0";
  context.fillText("Score: " + score, 8, 20);
}