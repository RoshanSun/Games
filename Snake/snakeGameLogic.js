/**
Roshan's Snake Game
Version 1.1
Last edited on: June 14, 2018
------------------------------*/

// Determine the direction in which the snake should move
function directionController(xSpeed, ySpeed) {
  if(xSpeed != dx*-1 && ySpeed != dy*-1) {
    dx = xSpeed;
    dy = ySpeed;
  }
}

// Find out if the snake has eaten the current food
function hasEaten(currFoodX, currFoodY) {
  var distance = getDistance(x, y, currFoodX, currFoodY);
  if(distance < 1) {
    foodX = Math.floor((Math.random() * numCols)) * pixelSize;
    foodY = Math.floor((Math.random() * numRows)) * pixelSize;
    total++;
    score++;
  }
}

// Calculate and return the distance between 2 given points
function getDistance(snakeX, snakeY, currFoodX, currFoodY) {
  var xDist = snakeX - currFoodX;
  var yDist = snakeY - currFoodY;
  var totalDistance = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
  return totalDistance;
}

// Find out if the snake has died on the screen
function deathCheck() {
  // Check if snake has collided with any of the 4 borders
  if(x < 0 ||
     y < 0 ||
     x > canvas.width - pixelSize ||
     y > canvas.height - pixelSize) {
    resetGame();
  } else {
    for(var i = 0; i < tail.length; i++) {
      var dist = getDistance(x, y, tail[i].xCoord, tail[i].yCoord);
      if(dist < 1) {
        resetGame();
      }
    }
  }
}

// Set all variables back to their original values
function resetGame() {
  x = canvas.width/2;
  y = canvas.height/2;
  foodX = Math.floor((Math.random() * numCols)) * pixelSize;
  foodY = Math.floor((Math.random() * numRows)) * pixelSize;
  dx = dxStart  ;
  dy = dyStart;
  total = 0;
  tail = [];
  score = 0;
}

// Check and update the snake as needed when it eats food
function update() {
  // Update tail pixels so they move, and end of tail is nullified
  if(total === tail.length) {
    for(var i = 0; i < tail.length; i++) {
      tail[i] = tail[i+1];
    }
  }
  // Update last tail pixel to assume current position of head
  tail[total-1] = {xCoord: x, yCoord: y } ;
  // Update position of snake head
  x += dx * pixelSize;
  y += dy * pixelSize;
}

// Determine what to do when arrow keys are pressed
function keyPressed(e) {
  if(e.keyCode == 38) {
    directionController(0, -1);
  } else if(e.keyCode === 40) {
    directionController(0, 1);
  } else if(e.keyCode === 37) {
    directionController(-1, 0);
  } else if(e.keyCode === 39) {
    directionController(1, 0);
  }
}

document.addEventListener("keydown", keyPressed, false);