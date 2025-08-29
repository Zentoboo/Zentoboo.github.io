import TicTacToe from "../game/TicTacToe";
import "../../css/TicTacToePage.css";

export default function TicTacToePage() {
    return (
        <div className="tictactoe-page">
            {/* Left: Game */}
            <div className="game-container">
                <TicTacToe />
            </div>

            {/* Right: Tree Visualizer */}
            <div className="tree-container">
                <h2 className="tree-title">Minimax Visualizer</h2>
                <div className="tree-placeholder">
                    {/* later we’ll render the minimax tree here */}
                    <p>Tree will be displayed here</p>
                </div>
            </div>
        </div>
    );
}
