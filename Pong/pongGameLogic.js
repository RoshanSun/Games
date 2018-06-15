/**
Roshan's Pong Game
Version 1.1
Last edited on: June 15, 2018
------------------------------*/

// Detect if the ball is bouncing on top/bottom walls
function borderControl() {
  if(y + dy < radius ||
    y + dy > canvas.height - radius) {
    dy = -dy;
  }
}

// Keep track of the player points
function pointsControl() {
  if(x + dx < radius) {
    scoreTwo++;
    resetBoard();
  } else if(x + dx > canvas.width - radius) {
    scoreOne++;
    resetBoard();
  }
}

// Monitor the movements of both paddles
function paddleSpeedControl() {
  // Left side paddle check
  if(playerOneDownPressed && paddleYOne < canvas.height - paddleHeight) {
    paddleYOne += 7;
  } else if(playerOneUpPressed && paddleYOne > 0) {
    paddleYOne -= 7;
  } 

  // Right side paddle check
  if(playerTwoDownPressed && paddleYTwo < canvas.height - paddleHeight) {
    paddleYTwo += 7;
  } else if(playerTwoUpPressed && paddleYTwo > 0) {
    paddleYTwo -= 7;
  }
}

// Detect if the ball is colliding with either paddle
function paddleCollision() {
  // Left paddle check
  if(x + dx < radius + paddleOffset) {
    if(y > paddleYOne && y < paddleYOne + paddleHeight) {
      dx = -dx;
    }
  // Right paddle check
  } else if(x + dx > canvas.width - radius - paddleOffset) {
    if(y > paddleYTwo && y < paddleYTwo + paddleHeight) {
      dx = -dx;
    }
  }
}

// Reset ball's position and speeds
function resetBoard() {
  x = canvas.width / 2;
  y = canvas.height / 2;
  dx = Math.floor(Math.random() * 10 - 5);
  dy = Math.floor(Math.random() * 10 - 5);
}

// Detect when players are pressing arrow keys/W, S keys
function keyDownHandler(e) {
  if(e.keyCode == 38) {
    playerTwoUpPressed = true;
  } else if(e.keyCode == 40) {
    playerTwoDownPressed = true;
  }

  if(e.keyCode == 87) {
    playerOneUpPressed = true;
  } else if(e.keyCode == 83) {
    playerOneDownPressed = true;
  }
}

// Detect when players aren't pressing arrow keys/W, S keys
function keyUpHandler(e) {
  if(e.keyCode == 38) {
    playerTwoUpPressed = false;
  } else if(e.keyCode == 40) {
    playerTwoDownPressed = false;
  }

  if(e.keyCode == 87) {
    playerOneUpPressed = false;
  } else if(e.keyCode == 83) {
    playerOneDownPressed = false;
  }
}

// Track keyboard and mouse movement
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);