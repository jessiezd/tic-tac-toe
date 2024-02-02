BOARD_SIZE = 3

class TicTacToe {
  constructor() {
    this.board = this.createEmptyBoard(BOARD_SIZE);
    this.currentPlayer = "X";
    this.winner = null;
    this.movesCount = 0;
  }

  createEmptyBoard(size) {
    let array2D = [];
    for (let i = 0; i < size; i++) {
      array2D[i] = [];
      for (let j = 0; j < size; j++) {
        array2D[i][j] = 'b'; // saving `b` for being blank
      }
    }

    return array2D;
  }

  legalMoveAvailable(currentMove) {
    currentMove < this.maxMoves;
  }

  move(xPosition, yPosition) {
    this.board[xPosition][yPosition] = this.currentPlayer
    this.movesCount++;

    console.log(this.board)

    if (this.winner) {
        console.log(`${this.currentPlayer} won!!`)
        return
    }

    this.swapChance()
  }

  swapChance() {
    if (this.currentPlayer === 'X') {
        this.currentPlayer = 'O'
    } else {
        this.currentPlayer = 'X'
    }
  }

  checkWinner() {
    boardCopy = this.board.join().replace(/,/g, '');
    this.winner = checkWin(boardCopy)
  }
}

const checkRowWins = (board) => {
  for (let i = 0; i < board.length; i = i + BOARD_SIZE) {
    const row = board.substring(i, i + BOARD_SIZE)

    if (row === "OOO") return "O wins";
    if (row === "XXX") return "X wins"
  }
}

const checkColWins = (board) => {
  for (let i = 0; i < BOARD_SIZE; i++) {
    let colString = "";
    colString += board[i]
    colString += board[i + BOARD_SIZE]
    colString += board[i + BOARD_SIZE + BOARD_SIZE]

    if (colString === "OOO") return "O wins";
    if (colString === "XXX") return "X wins"
  }
}

const checkDiagWins = (board) => {
  let ltr = ""
  let rtl = ""
  for (let i = 0; i < BOARD_SIZE; i++) {
    rtl += board[(i + 1) * 2]
    ltr += board[i * 4]
  }

  if (ltr === "OOO" || rtl === "000") return "O wins";
  if (ltr === "XXX" || rtl === "XXX") return "X wins"
}

const checkWin = (board) => {
  const rowWin = checkRowWins(board)
  if (rowWin) {
    return rowWin
  }

  const colWin = checkColWins(board)
  if (colWin) {
    return colWin
  }

  const diaWin = checkDiagWins(board)
  if (diaWin) {
    return diaWin
  }

}

tic = new TicTacToe()
tic.move(0,0)
tic.move(0,1)
tic.move(1,1)
tic.move(1,0)
tic.move(2,2)
