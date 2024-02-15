import React, {useRef, useState} from "react"

import './Board.css'
import {TicTacToe} from './TicTacToe.js';

const Board = () => {
    const [win, setWin] = useState(false)
    const tic = new TicTacToe();
    const handleClick = (row, col) => {
        const cellId = `cell-${row}-${col}`;
        const cell = document.getElementById(cellId);
        if (!cell.textContent) {
            cell.textContent = tic.player();
            tic.move(row, col);
        }

        if(win) {
          alert(`${tic.player} is a winner`)
        }
      };
    
      return (
        <div className="grid-container">
          {[...Array(3).keys()].map(row => (
            [...Array(3).keys()].map(col => (
              <div className="grid-item" id={`cell-${row}-${col}`} key={`${row}-${col}`} onClick={() => handleClick(row, col)}>
                {/* Cell content */}
              </div>
            ))
          ))}
        </div>
      );
}

export default Board;