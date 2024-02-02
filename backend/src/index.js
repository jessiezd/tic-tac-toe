// create a function to check for a win or draw
// input: current state of board
// [][]string - "O" vs "X"
// [["", "", ""], ["", "", ""], ["", "", ""]]
// [["O", "", ""], ["", "X", ""], ["", "", ""]]
// O(1) time
// O(1) space
// "012345678"
// [
//   [0,1,2]
//   [3,4,5],
//   [6,7,8]
// ]
// rtl = (x + 1) * 2 => 2,4,6
// ltr = (x + 4) => 0 ,4, 8 
board_size = 3

const checkRowWins = (board) => {
  for (let i = 0; i < board.length; i = i + board_size) {
    const row = board.substring(i, board_size)

    if (row === "OOO") return "O wins";
    if (row === "XXX") return "X wins"
  }

  return ""
}

const checkColWins = (board) => {
  for (let i = 0; i < board_size; i++) {
    let colString = "";
    colString += board[i]
    colString += board[i + board_size]
    colString += board[i + board_size + board_size]

    if (colString === "OOO") return "O wins";
    if (colString === "XXX") return "X wins"
  }

  return ""
}

const checkDiagWins = (board) => {
  // rtl = (x + 1) * 2 => 2,4,6
  // ltr = (x * 4) => 0 ,4, 8
  let ltr = ""
  let rtl = ""
  for (let i = 0; i < board_size; i++) {
    rtl += board[(i + 1) * 2]
    ltr += board[i * 4]
  }

  if (ltr === "OOO" || rtl === "000") return "O wins";
  if (ltr === "XXX" || rtl === "XXX") return "X wins"

  return ""
}

const checkWin = (board) => {
  // const rowColWin = checkRowsAndCols(board)
  // if (rowColWin !== "") {
  //   return rowColWin
  // }

  // const diaWin = checkDiagonals(board)
  // if (diaWin !== "") {
  //   return diaWin
  // }

  const rowWin = checkRowWins(board)
  if (rowWin !== "") {
    return rowWin
  }

  const colWin = checkColWins(board)
  if (colWin !== "") {
    return colWin
  }

  const diaWin = checkDiagWins(board)
  if (diaWin !== "") {
    return diaWin
  }

}

const checkRowsAndCols = (board) => {
  for (let i = 0; i < board.length; i++) {
    // check row
    if (board[i].join(" ") === "O O O") {
      return "O wins"
    }
    if (board[i].join(" ") === "X X X") {
      return "X wins"
    }

    // check col
    const firstCol = board[0][i]
    const secondCol = board[1][i]
    const thirdCol = board[2][i]

    if (firstCol === "O" && secondCol === "O" && thirdCol === "O") {
      return "O wins"
    }
    else if (firstCol === "X" && secondCol === "X" && thirdCol === "X") {
      return "X wins"
    }
  }
  return ""
}


const checkDiagonals = (board) => {
  const leftToRight = []
  const rightToLeft = []
  for (let i = 0; i < board.length; i++) {
    leftToRight.push(board[i][i])
    rightToLeft.push(board[i][board.length - 1 - i])
  }

  if (leftToRight.join(" ") === "O O O") return "O wins"
  if (leftToRight.join(" ") === "X X X") return "X wins"
  if (rightToLeft.join(" ") === "O O O") return "O wins"
  if (rightToLeft.join(" ") === "X X X") return "X wins"
  return ""
}


const game = [
  ["X", "", "X"],
  ["", "O", ""],
  ["O", "X", "X"]
]

const game2 = "BBBBBBXXX"

console.log(checkWin(game2))
