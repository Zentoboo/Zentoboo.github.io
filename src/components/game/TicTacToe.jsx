import { useState, useEffect } from "react";
import "../../css/TicTacToe.css";

export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [playerSymbol, setPlayerSymbol] = useState(null); // "X" or "O"
    const [aiSymbol, setAiSymbol] = useState(null);         // opposite of player

    const winner = calculateWinner(board);
    const isDraw = !winner && board.every((cell) => cell !== null);

    // Handle player move
    function handleClick(index) {
        if (!playerSymbol) return; // game not started
        if (board[index] || winner || isDraw) return;
        if ((isXNext && playerSymbol !== "X") || (!isXNext && playerSymbol !== "O")) return;

        const newBoard = [...board];
        newBoard[index] = playerSymbol;
        setBoard(newBoard);
        setIsXNext(!isXNext);
    }

    // Handle restart
    function handleReset() {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setPlayerSymbol(null);
        setAiSymbol(null);
    }

    // AI move on its turn
    useEffect(() => {
        if (!playerSymbol || winner || isDraw) return;
        const currentTurn = isXNext ? "X" : "O";
        if (currentTurn === aiSymbol) {
            const bestMove = findBestMove(board, aiSymbol);
            if (bestMove !== -1) {
                const newBoard = [...board];
                newBoard[bestMove] = aiSymbol;
                setTimeout(() => {
                    setBoard(newBoard);
                    setIsXNext(!isXNext);
                }, 400);
            }
        }
    }, [board, isXNext, playerSymbol, aiSymbol, winner, isDraw]);

    return (
        <div className="tictactoe-container">
            <h1 className="title">tictactoe</h1>

            {/* Choice screen */}
            {!playerSymbol && (
                <div className="choice">
                    <p>Choose your symbol:</p>
                    <button onClick={() => { setPlayerSymbol("X"); setAiSymbol("O"); }}>
                        Play as X (1st)
                    </button>
                    <button onClick={() => { setPlayerSymbol("O"); setAiSymbol("X"); setIsXNext(true); }}>
                        Play as O (2nd)
                    </button>
                </div>
            )}

            {/* Game board */}
            <div className="board">
                {board.map((cell, index) => (
                    <button
                        key={index}
                        className="cell"
                        onClick={() => handleClick(index)}
                        disabled={!!cell || winner || isDraw || !playerSymbol}
                    >
                        {cell ?? ""}
                    </button>
                ))}
            </div>

            {/* Status */}
            <p className="note">
                {winner
                    ? `Winner: ${winner}`
                    : isDraw
                        ? "It's a draw!"
                        : playerSymbol
                            ? `Next Player: ${isXNext ? "X" : "O"}`
                            : "Pick X or O to start"}
            </p>
            <p className="note">if the program lose i suck T.T</p>

            {(winner || isDraw) && (
                <button className="reset-btn" onClick={handleReset}>
                    Restart Game
                </button>
            )}
        </div>
    );
}

function calculateWinner(board) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}

/* --- AI Minimax Algorithm --- */
function minimax(board, depth, isMaximizing, aiSymbol, humanSymbol) {
    const winner = calculateWinner(board);
    if (winner === aiSymbol) return 10 - depth;
    if (winner === humanSymbol) return depth - 10;
    if (board.every(cell => cell !== null)) return 0;

    if (isMaximizing) {
        let bestScore = -Infinity;
        board.forEach((cell, i) => {
            if (!cell) {
                board[i] = aiSymbol;
                bestScore = Math.max(bestScore, minimax(board, depth + 1, false, aiSymbol, humanSymbol));
                board[i] = null;
            }
        });
        return bestScore;
    } else {
        let bestScore = Infinity;
        board.forEach((cell, i) => {
            if (!cell) {
                board[i] = humanSymbol;
                bestScore = Math.min(bestScore, minimax(board, depth + 1, true, aiSymbol, humanSymbol));
                board[i] = null;
            }
        });
        return bestScore;
    }
}

function findBestMove(board, aiSymbol) {
    const humanSymbol = aiSymbol === "X" ? "O" : "X";
    let bestScore = -Infinity;
    let move = -1;

    board.forEach((cell, i) => {
        if (!cell) {
            board[i] = aiSymbol;
            const score = minimax(board, 0, false, aiSymbol, humanSymbol);
            board[i] = null;
            if (score > bestScore) {
                bestScore = score;
                move = i;
            }
        }
    });

    return move;
}