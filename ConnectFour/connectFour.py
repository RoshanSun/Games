import numpy as np
import pygame as pg
import sys
import math

BLUE = (0, 0, 255)
RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLACK = (0, 0, 0)

ROWS = 6
COLUMNS = 7
P1 = 1
P2 = 2

TOP_ROW = ROWS - 1
BOARD_SIZE = (ROWS, COLUMNS)

def createBoard():
  board = np.zeros(BOARD_SIZE)
  return board

def dropPiece(board, row, choice, piece):
  board[row][choice] = piece

def isValidPick(board, choice):
  return board[TOP_ROW][choice] == 0
  
def getNextOpenSlot(board, choice):
  for row in range(ROWS):
    if board[row][choice] == 0:
      return row

def printBoard(board):
  print(np.flip(board, 0))

# basic win checking: TODO - MAKE IT MORE EFFICIENT
def winningMove(board, piece):
  # Check horizontal locations
  for c in range (COLUMNS - 3):
    for r in range(ROWS):
      if board[r][c] == piece and board[r][c+1] == piece and board[r][c+2] == piece and board[r][c+3] == piece:
        return True
  
  # Check vertical locations
  for c in range (ROWS):
    for r in range(COLUMNS - 3):
      if board[r][c] == piece and board[r+1][c] == piece and board[r+2][c] == piece and board[r+3][c] == piece:
        return True
  
  # Check positive slope diagonals
  for c in range (COLUMNS - 3):
    for r in range (ROWS - 3):
      if board[r][c] == piece and board[r+1][c+1] == piece and board[r+2][c+2] == piece and board[r+3][c+3] == piece:
        return True

  # Check negative slope diagonals
  for c in range (COLUMNS - 3):
    for r in range (3, ROWS):
      if board[r][c] == piece and board[r-1][c+1] == piece and board[r-2][c+2] == piece and board[r-3][c+3] == piece:
        return True

# def isWinningMove(board, piece):
#   pass

#   # Check horizontal locations
#   for col in range(COLUMNS):

def drawBoard(board):
  for col in range(COLUMNS):
    for row in range(ROWS):
      pg.draw.rect(screen, BLUE, (col*SQUARE_SIZE, row*SQUARE_SIZE+SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE))
      pg.draw.circle(screen, BLACK, (int(col*SQUARE_SIZE+SQUARE_SIZE/2), int(row*SQUARE_SIZE+SQUARE_SIZE+SQUARE_SIZE/2)), RADIUS)

  for col in range(COLUMNS):
    for row in range(ROWS):
      if board[row][col] == 1:
        pg.draw.circle(screen, RED, (int(col*SQUARE_SIZE+SQUARE_SIZE/2), HEIGHT - int(row*SQUARE_SIZE+SQUARE_SIZE/2)), RADIUS)
      elif board[row][col] == 2:
        pg.draw.circle(screen, GREEN, (int(col*SQUARE_SIZE+SQUARE_SIZE/2), HEIGHT - int(row*SQUARE_SIZE+SQUARE_SIZE/2)), RADIUS)
  pg.display.update()

board = createBoard()
gameOver = False
turn = 0

pg.init()
SQUARE_SIZE = 100
WIDTH = COLUMNS * SQUARE_SIZE
HEIGHT = (ROWS+1) * SQUARE_SIZE
SCREEN_SIZE = (WIDTH, HEIGHT)

RADIUS = int(SQUARE_SIZE/2 - 5)

screen = pg.display.set_mode(SCREEN_SIZE)
drawBoard(board)
pg.display.update()

myFont = pg.font.SysFont("monospace", 75)

while not gameOver:
  for event in pg.event.get():
    if event.type == pg.QUIT:
      sys.exit()

    if event.type == pg.MOUSEMOTION:
      pg.draw.rect(screen, BLACK, (0, 0, WIDTH, SQUARE_SIZE))
      xPos = event.pos[0]
      if turn == P1 - 1:
        pg.draw.circle(screen, RED, (xPos, int(SQUARE_SIZE/2)), RADIUS)
      else:
        pg.draw.circle(screen, GREEN, (xPos, int(SQUARE_SIZE/2)), RADIUS)
    pg.display.update()

    if event.type == pg.MOUSEBUTTONDOWN:
      pg.draw.rect(screen, BLACK, (0, 0, WIDTH, SQUARE_SIZE))
      #print(event.pos)
      # Player 1 Input
      if turn == P1 - 1:
        xPos = event.pos[0]
        choice = math.floor(xPos / SQUARE_SIZE)

        if isValidPick(board, choice):
          row = getNextOpenSlot(board, choice)
          dropPiece(board, row, choice, P1)

        if winningMove(board, P1):
          label = myFont.render("Player 1 Wins!", 1, RED)
          screen.blit(label, (40,10))
          gameOver = True


      # # Player 2 Input
      else:
        xPos = event.pos[0]
        choice = math.floor(xPos / SQUARE_SIZE)

        if isValidPick(board, choice):
          row = getNextOpenSlot(board, choice)
          dropPiece(board, row, choice, P2)

        if winningMove(board, P2):
          label = myFont.render("Player 2 Wins!", 1, GREEN)
          screen.blit(label, (40,10))
          gameOver = True
  
      printBoard(board)
      drawBoard(board)
      turn = (turn + 1) % 2

      if gameOver:
        pg.time.wait(3000)