import { useState } from "react";
import TicTacToeWithTrace from "../game/TicTacToeWithTrace";
import TreeVisualizer from "../game/TreeVisualizer";
import "./TicTacToePage.css";

export default function TicTacToePage() {
    const [minimaxTree, setMinimaxTree] = useState(null);

    return (
        <div className="tictactoe-page">
            {/* Row 1: Headers */}
            <div className="tictactoe-header game-header">
                <h2 className="tree-title">TicTacToe</h2>
                <p className="note">play against the minimax algo</p>
            </div>
            <div className="tictactoe-header tree-header">
                <h2 className="tree-title">Minimax Visualizer</h2>
                <p className="note">
                    go through the visualizer manually by expanding & collapsing nodes
                </p>
            </div>

            {/* Row 2: Content */}
            <div className="game-container">
                <TicTacToeWithTrace onTreeUpdate={setMinimaxTree} />
                <p>contents will be made here... ex. explanation on minimax</p>
            </div>

            <div className="tree-container">
                {minimaxTree ? (
                    <TreeVisualizer node={minimaxTree} />
                ) : (
                    <p>Tree will be displayed here</p>
                )}
            </div>
        </div>
    );
}
