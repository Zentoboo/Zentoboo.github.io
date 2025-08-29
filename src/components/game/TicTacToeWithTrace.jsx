import { useState, useEffect } from "react";
import "./TicTacToe.css";

export default function TicTacToe({ onTreeUpdate }) {
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
        if (onTreeUpdate) onTreeUpdate(null);
    }

    // AI move on its turn
    useEffect(() => {
        if (!playerSymbol || winner || isDraw) return;
        const currentTurn = isXNext ? "X" : "O";
        if (currentTurn === aiSymbol) {
            const { move, tree } = findBestMoveWithTrace(board, aiSymbol);
            if (move !== -1) {
                if (onTreeUpdate) onTreeUpdate(tree); // send tree to parent
                const newBoard = [...board];
                newBoard[move] = aiSymbol;
                setTimeout(() => {
                    setBoard(newBoard);
                    setIsXNext(!isXNext);
                }, 400);
            }
        }
    }, [board, isXNext, playerSymbol, aiSymbol, winner, isDraw]);

    return (
        <div className="tictactoe-container">

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

function minimaxWithTrace(board, depth, isMaximizing, aiSymbol, humanSymbol) {
    const winner = calculateWinner(board);
    if (winner === aiSymbol) return { score: 10 - depth, children: [], board: [...board], optimal: false };
    if (winner === humanSymbol) return { score: depth - 10, children: [], board: [...board], optimal: false };
    if (board.every(cell => cell !== null)) return { score: 0, children: [], board: [...board], optimal: false };

    let bestScore = isMaximizing ? -Infinity : Infinity;
    let bestChildIndex = null;
    let children = [];

    board.forEach((cell, i) => {
        if (!cell) {
            const newBoard = [...board];
            newBoard[i] = isMaximizing ? aiSymbol : humanSymbol;

            const childResult = minimaxWithTrace(newBoard, depth + 1, !isMaximizing, aiSymbol, humanSymbol);

            const childNode = {
                move: i,
                board: newBoard,
                score: childResult.score,
                isMaximizing: !isMaximizing,
                children: childResult.children,
                optimal: false,
            };

            children.push(childNode);

            if (isMaximizing) {
                if (childResult.score > bestScore) {
                    bestScore = childResult.score;
                    bestChildIndex = children.length - 1;
                }
            } else {
                if (childResult.score < bestScore) {
                    bestScore = childResult.score;
                    bestChildIndex = children.length - 1;
                }
            }
        }
    });

    if (bestChildIndex !== null) {
        children[bestChildIndex].optimal = true;
        markOptimalPath(children[bestChildIndex]);
    }

    return { score: bestScore, children, board: [...board], optimal: false };
}

function markOptimalPath(node) {
    if (!node.children || node.children.length === 0) return;
    let best = node.isMaximizing ? Math.max(...node.children.map(c => c.score))
        : Math.min(...node.children.map(c => c.score));
    let bestChild = node.children.find(c => c.score === best);
    if (bestChild) {
        bestChild.optimal = true;
        markOptimalPath(bestChild);
    }
}




function findBestMoveWithTrace(board, aiSymbol) {
    const humanSymbol = aiSymbol === "X" ? "O" : "X";
    let bestScore = -Infinity;
    let move = -1;
    let bestTree = null;

    board.forEach((cell, i) => {
        if (!cell) {
            const newBoard = [...board];
            newBoard[i] = aiSymbol;

            const result = minimaxWithTrace(newBoard, 0, false, aiSymbol, humanSymbol);

            if (result.score > bestScore) {
                bestScore = result.score;
                move = i;
                bestTree = { move: i, board: newBoard, ...result, optimal: true };
            }
        }
    });

    return { move, tree: bestTree };
}
