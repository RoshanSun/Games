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
  // Update points & reset board
  if(x + dx < radius) {
    scoreTwo++;
    resetBoard();
  } else if(x + dx > canvas.width - radius) {
    scoreOne++;
    resetBoard();
  }

  // Determine if a player has won
  if(scoreOne == 5) {
    alert("Player 1 has won the game!");
    document.location.reload();
  } else if(scoreTwo == 5) {
    alert("Player 2 has won the game!");
    document.location.reload();
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
  if(x + dx < radius + paddleOffset + paddleWidth) {
    if(y > paddleYOne && y < paddleYOne + paddleHeight) {
      dx = -dx;
      dy = paddleReturnSpeed(y, paddleYOne);
    }
  // Right paddle check
  } else if(x + dx > canvas.width - radius - paddleOffset - paddleWidth) {
    if(y > paddleYTwo && y < paddleYTwo + paddleHeight) {
      dx = -dx;
      dy = paddleReturnSpeed(y, paddleYTwo);
    }
  }
}

// Pick a new vertical return speed based on where it hits the paddle
function paddleReturnSpeed(ballY, paddleY) {
  // Ball hits 1st partition
  if(ballY >= paddleY &&
     ballY <= paddleY + paddleSeparator) {
    return -3 * fixedYSpeed;
  // Ball hits 2nd partition
  } else if(ballY >= paddleY + paddleSeparator &&
            ballY <= paddleY + paddleSeparator * 2) {
    return -2 * fixedYSpeed;
  // Ball hits 3rd partition
  } else if(ballY >= paddleY + paddleSeparator * 2 &&
            ballY <= paddleY + paddleSeparator * 3) {
    return -fixedYSpeed;
  // Ball hits 4th partition
  } else if(ballY >= paddleY + paddleSeparator * 3 &&
            ballY <= paddleY + paddleSeparator * 4) {
    return fixedYSpeed;
  // Ball hits 5th partition
  } else if(ballY >= paddleY + paddleSeparator * 4 &&
            ballY <= paddleY + paddleSeparator * 5) {
    return 2 * fixedYSpeed;
  // Ball hits 6th partition
  } else if(ballY >= paddleY + paddleHeight - paddleSeparator &&
            ballY <= paddleY + paddleHeight) {
    return 3 * fixedYSpeed;
  }
 }

// Reset ball's position and speeds
function resetBoard() {
  x = canvas.width / 2;
  y = canvas.height / 2;
  dx = startXSpeed;
  dy = startYSpeed;
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