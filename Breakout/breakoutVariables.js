/**
Roshan's Breakout Game
Version 1.1
Last edited on: June 14, 2018
------------------------------*/

// Developing the 2d canvas
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

// Variables to keep track of player status & starting speeds
var score = 0;
var lives = 5;
var dxStart = 10;
var dyStart = -2;

// Determine ball starting spot, speeds and size
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = dxStart;
var dy = dyStart;
var ballRadius = 10;

// Set all dimensions & variables of the paddle to play game with
var paddleHeight = 10;
var paddleWidth = 75;
var paddleOffset = 10;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;

// Set dimensions, variables, # of bricks and all offsets from borders
var brickRowCount = 5;
var brickColumnCount = 10;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 1;
var brickOffsetTop = 30;
var brickOffsetLeft = 23;
var bricks = [];
// Initialize the bricks
for(var col = 0; col < brickColumnCount; col++) {
  bricks[col] = [];
  for(var row = 0; row < brickRowCount; row++) {
    // status starts at 1 - set to 0 if it's been hit
    bricks[col][row] = { xCoord: 0, yCoord: 0, status: 1 };
  }
}