/**
Roshan's Pong Game
Version 1.0
Last edited on: June 12, 2018
------------------------------*/

// Draw the ball to play game with
function drawBall() {
  context.beginPath();
  context.arc(x, y, ballRadius, 0, Math.PI*2);
  context.fillStyle = "#0095DD";
  context.fill();
  context.closePath();
}
// Draw the paddle to hit ball with
function drawPaddle() {
  context.beginPath();
  context.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  context.fillStyle = "#0095DD";
  context.fill();
  context.closePath();
}
// Draw the bricks for the game
function drawBricks() {
  for(var col = 0; col < brickColumnCount; col++) {
    for(var row = 0; row < brickRowCount; row++) {
      if(bricks[col][row].status == 1) {
        var brickX = (col * (brickWidth + brickPadding)) + brickOffsetLeft;
        var brickY = (row * (brickHeight + brickPadding)) + brickOffsetTop;
        bricks[col][row].xCoord = brickX;
        bricks[col][row].yCoord = brickY;
        // draw the bricks
        context.beginPath();
        context.rect(brickX, brickY, brickWidth, brickHeight);
        context.fillStyle = "#0095DD";
        context.fill();
        context.closePath();
      }
    }
  }
}
// Keep track of player's score
function drawScore() {
  context.font = "16px Arial";
  context.fillStyle = "#0095DD";
  context.fillText("Score: " + score, 8, 20);
}
// Keep track of player's lives
function drawLives() {
  context.font = "16px Arial";
  context.fillStyle = "#0095DD";
  context.fillText("Lives: " + lives, canvas.width-65, 20);
}
// Draw the game board and contain logic to keep game playing
function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawBricks();
  drawScore();
  drawLives();
  collisionDetection();
  // bouncing off left & right walls
  if(x + dx < ballRadius || x + dx > canvas.width - ballRadius) {
    dx = -dx;
  }
  // ball movement and wall bouncing
  if(y + dy < ballRadius) {
    dy = -dy;
  } else if(y + dy > canvas.height - ballRadius) {
    // check if it hit paddle - bounce back up
    if(x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      lives--;
      if (lives == 0) {
        alert("GAME OVER");
        document.location.reload();
      } else {
        x = canvas.width/2;
        y = canvas.height-30;
        dx = dxStart;
        dy = dyStart;
      }
    }
  }
  // paddle movement
  if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 7;
  } else if(leftPressed && paddleX > 0) {
    paddleX -= 7;
  }
  // ball movement updating
  x += dx;
  y += dy;
  // Re-occuring call of draw function using browser
  requestAnimationFrame(draw);
}