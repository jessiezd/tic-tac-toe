BOARD_SIZE = 3

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

export const checkWin = (board) => {
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

// const checkRowsAndCols = (board) => {
//   for (let i = 0; i < board.length; i++) {
//     // check row
//     if (board[i].join(" ") === "O O O") {
//       return "O wins"
//     }
//     if (board[i].join(" ") === "X X X") {
//       return "X wins"
//     }

//     const firstCol = board[0][i]
//     const secondCol = board[1][i]
//     const thirdCol = board[2][i]

//     if (firstCol === "O" && secondCol === "O" && thirdCol === "O") {
//       return "O wins"
//     }
//     else if (firstCol === "X" && secondCol === "X" && thirdCol === "X") {
//       return "X wins"
//     }
//   }
//   return ""
// }


// const checkDiagonals = (board) => {
//   const leftToRight = []
//   const rightToLeft = []
//   for (let i = 0; i < board.length; i++) {
//     leftToRight.push(board[i][i])
//     rightToLeft.push(board[i][board.length - 1 - i])
//   }

//   if (leftToRight.join(" ") === "O O O") return "O wins"
//   if (leftToRight.join(" ") === "X X X") return "X wins"
//   if (rightToLeft.join(" ") === "O O O") return "O wins"
//   if (rightToLeft.join(" ") === "X X X") return "X wins"
//   return ""
// }


// const game = [
//   ["X", "", "X"],
//   ["", "O", ""],
//   ["O", "X", "X"]
// ]

const game = "XBBBXBBBX"

console.log(checkWin(game))
