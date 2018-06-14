/**
Roshan's Snake Game
Version 1.1
Last edited on: June 14, 2018
------------------------------*/

// Create the 2d canvas of the game
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

// Variables to keep track of score and player's starting speeds
var score = 0;
var dxStart = 1;
var dyStart = 0;

// Determine dimensions & rows/columns for the board
var pixelSize = 10;
var numRows = canvas.height / pixelSize;
var numCols = canvas.width / pixelSize;

// Set variables for snake starting positons & speeds - track snake length too
var x = canvas.width / 2;
var y = canvas.height / 2;
var total = 0;
var tail = [];
var dx = dxStart;
var dy = dyStart;

// Randomize position for the food
var foodX = Math.floor((Math.random() * numCols)) * pixelSize;
var foodY = Math.floor((Math.random() * numRows)) * pixelSize;