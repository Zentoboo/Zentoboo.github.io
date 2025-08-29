import { useState } from "react";
import "./TreeVisualizer.css";

export default function TreeVisualizer({ node }) {
    return (
        <div className="explorer-tree">
            <TreeNode node={node} depth={0} />
        </div>
    );
}

function TreeNode({ node, depth }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="explorer-node" style={{ marginLeft: depth * 16 }}>
            {/* Node box */}
            <div
                className={`node-box-indented ${node.optimal ? "optimal-node" : ""}`}
                onClick={() => setExpanded(!expanded)}
            >
                <BoardSnapshot board={node.board} />
                <p>Move: {node.move ?? "root"}</p>
                <p>Score: {node.score}</p>
                <p>{node.isMaximizing ? "Max" : "Min"}</p>
                <p className="expand-hint">{expanded ? "▼ Collapse" : "▶ Expand"}</p>
            </div>

            {/* Children */}
            {expanded && node.children && node.children.length > 0 && (
                <div className="children-indented">
                    {node.children.map((child, i) => (
                        <TreeNode key={i} node={child} depth={depth + 1} />
                    ))}
                </div>
            )}
        </div>
    );
}

function BoardSnapshot({ board }) {
    return (
        <div className="board-snapshot-indented">
            {board.map((cell, i) => (
                <div key={i} className="cell">
                    {cell ?? ""}
                </div>
            ))}
        </div>
    );
}
