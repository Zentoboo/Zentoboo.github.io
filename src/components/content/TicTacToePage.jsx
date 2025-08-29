import { useState } from "react";
import TicTacToeWithTrace from "../game/TicTacToeWithTrace";
import TreeVisualizer from "../game/TreeVisualizer";
import "../../css/TicTacToePage.css";

export default function TicTacToePage() {
    const [minimaxTree, setMinimaxTree] = useState(null);

    return (
        <div className="tictactoe-page">
            {/* Left: Game */}
            <div className="game-container">
                <div className="header">
                    <h2 className="tree-title">TicTacToe</h2>
                    <p className="note">play against the minimax algo</p>
                </div>
                <TicTacToeWithTrace onTreeUpdate={setMinimaxTree} />
            </div>

            {/* Right: Tree Visualizer */}
            <div className="tree-container">
                <div className="header">
                    <h2 className="tree-title">Minimax Visualizer</h2>
                    <p className="note">go through the visualizer manually by expanding & collapsing nodes</p>
                </div>
                {minimaxTree ? (
                    <TreeVisualizer node={minimaxTree} />
                ) : (
                    <p>Tree will be displayed here</p>
                )}
            </div>

        </div>
    );
}
