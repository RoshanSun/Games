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


  # Player 2 Input
  else:
    choice = int(input("P2, make your choice (0-6): "))

    if isValidPick(board, choice):
      row = getNextOpenSlot(board, choice)
      dropPiece(board, row, choice, P2)

  printBoard(board)
  turn = (turn + 1) % 2