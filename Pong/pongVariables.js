/**
Roshan's Pong Game
Version 1.1
Last edited on: June 15, 2018
------------------------------*/

// Create the 2d canvas for the game screen
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

// Have fixed values for the game board
var fixedXSpeed = 1;
var fixedYSpeed = 1;
var startXSpeed = -10;
var startYSpeed = 0;

// Setup variables for dimensions & speed of the ball
var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = 10;
var dx = startXSpeed;
var dy = startYSpeed;

// Setup dimensions for both paddles
var paddleWidth = 10;
var paddleHeight = 75;
var paddleOffset = 10;
var paddleYOne = (canvas.height - paddleHeight) / 2; 
var paddleYTwo = (canvas.height - paddleHeight) / 2;
var paddleSeparator = paddleHeight / 6;

// Track score variables for both variables
var scoreOne = 0;
var scoreTwo = 0;

// Variables to track movement of the two paddles
var playerOneUpPressed = false;
var playerOneDownPressed = false;
var playerTwoUpPressed = false;
var playerTwoDownPressed = false;