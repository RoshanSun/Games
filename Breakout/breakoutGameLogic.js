/**
Roshan's Breakout Game
Version 1.1
Last edited on: June 14, 2018
------------------------------*/

// Detect collision of the player's ball with the bricks
function collisionDetection() {
  for(var col = 0; col < brickColumnCount; col++) {
    for(var row = 0; row < brickRowCount; row++) {
      var currBrick = bricks[col][row];
      if(currBrick.status == 1) {
        // ball must be within all bounds of a brick - change ball direction
        if(x > currBrick.xCoord &&
           x < currBrick.xCoord + brickWidth &&
           y > currBrick.yCoord &&
           y < currBrick.yCoord + brickHeight) {
          currBrick.status = 0;
          dy = -dy;
          score++;
          if(score == brickRowCount * brickColumnCount) {
            alert("YOU WIN, CONGRATULATIONS!");
            document.location.reload();
          }
        }
      }
    }
  }
}

// Detect when left/right keys being pushed
function keyDownHandler(e) {
  if(e.keyCode == 39) {
    rightPressed = true;
  } else if(e.keyCode == 37) {
    leftPressed = true;
  }
}

// Detect when left/right keys are released
function keyUpHandler(e) {
  if(e.keyCode == 39) {
    rightPressed = false;
  } else if(e.keyCode == 37) {
    leftPressed = false;
  }
}

// Detect mouse movement so paddle goes with it
function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  if(relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth/2;
  }
}

// Track keyboard and mouse movement
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);