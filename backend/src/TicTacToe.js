BOARD_SIZE = 3
class TicTacToe {
  constructor() {
    this.board = this.createEmptyBoard(BOARD_SIZE);
    this.currentPlayer = "X";
    this.movesCount = 0;
    this.hasWon = false;
    this.maxMoves = BOARD_SIZE * BOARD_SIZE;
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

  legalMoveAvailable() {
    return this.movesCount < this.maxMoves;
  }

  move(xPosition, yPosition) {
    console.log("has won", this.hasWon)
    if(this.hasWon){
      console.log("This game has already been won!!")
      return;
    }

    // check for legal moves
    if (!this.legalMoveAvailable()){
      console.log('Its a draw!! Try new game')
      return;
    }

    this.board[xPosition][yPosition] = this.currentPlayer
    this.movesCount++;

    // check for winner
    this.checkWinner()
    if(this.hasWon) {
      console.log(`${this.currentPlayer} won!!`)
      console.log(this.board)
      return
    }

    // check for legal moves
    if (!this.legalMoveAvailable()){
      console.log('Its a draw!! Try new game')
      return;
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
    const boardCopy = this.board.join().replace(/,/g, '');
    this.hasWon = checkWin(boardCopy)
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

  return false;
}
module.exports = TicTacToe;

tic = new TicTacToe()
tic.move(0,0) // X
tic.move(0,1) // O
tic.move(0,2) // X
tic.move(1,0) // O
tic.move(1,1) // X
tic.move(2,0) // O
tic.move(2,1) // X
tic.move(2,2) // 0
tic.move(1,2) // X
