import { useState } from "react";
import "../../css/TicTacToe.css";

export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const winner = calculateWinner(board);
    const isDraw = !winner && board.every(cell => cell !== null);

    function handleClick(index) {
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard);
        setIsXNext(!isXNext);
    }

    function handleReset() {
        setBoard(Array(9).fill(null));
        setIsNext(true);
    }

    return (
        <div className="tictactoe-container">
            <h1 className="title">the lose or draw tictactoe</h1>
            <div className="board">
                {board.map((cell, index) => (
                    <button
                        key={index}
                        className="cell"
                        onClick={() => handleClick(index)}
                    >
                        {cell ?? ""}
                    </button>
                ))}
            </div>
            <p className="note">
                {winner
                    ? `winner: ${winner}`
                    : isDraw
                        ? "draw"
                        : `Next Player: ${isXNext ? "X" : "O"}`}
            </p>
            <p className="note">if the program lose then I suck T.T</p>
            <button className="reset-btn" onClick={handleReset}>
                Restart Game
            </button>
        </div>
    )
}

function calculateWinner(board) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let [a, b, c] of lines) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}