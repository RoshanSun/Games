import numpy as np

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


board = createBoard()
gameOver = False
turn = 0

while not gameOver:
  # Player 1 Input
  if turn == P1 - 1:
    choice = int(input("P1, make your choice (0-6): "))

    if isValidPick(board, choice):
      row = getNextOpenSlot(board, choice)
      dropPiece(board, row, choice, P1)

    if winningMove(board, P1):
      print("Player 1 Wins! Congratulations!")
      gameOver = True


  # Player 2 Input
  else:
    choice = int(input("P2, make your choice (0-6): "))

    if isValidPick(board, choice):
      row = getNextOpenSlot(board, choice)
      dropPiece(board, row, choice, P2)

    if winningMove(board, P2):
      print("Player 2 Wins! Congratulations!")
      gameOver = True
  
  printBoard(board)
  turn = (turn + 1) % 2