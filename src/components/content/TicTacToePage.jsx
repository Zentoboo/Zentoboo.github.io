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
                <h2 className="tree-title">TicTacToe</h2>
                <TicTacToeWithTrace onTreeUpdate={setMinimaxTree} />
            </div>

            {/* Right: Tree Visualizer */}
            <div className="tree-container">
                <h2 className="tree-title">Minimax Visualizer</h2>
                {minimaxTree ? (
                    <TreeVisualizer node={minimaxTree} />
                ) : (
                    <p>Tree will be displayed here</p>
                )}
            </div>

        </div>
    );
}
