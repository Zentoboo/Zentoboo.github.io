import "../../css/TreeVisualizer.css";

export default function TreeVisualizer({ node }) {
    // Flatten tree into levels
    const levels = [];
    function traverse(n, depth = 0) {
        if (!levels[depth]) levels[depth] = [];
        levels[depth].push(n);
        if (n.children) {
            n.children.forEach((c) => traverse(c, depth + 1));
        }
    }
    traverse(node);

    return (
        <div className="column-tree">
            {levels.map((level, depth) => (
                <div key={depth} className="tree-column">
                    <h4>Depth {depth}</h4>
                    {level.map((n, i) => (
                        <TreeNode key={i} node={n} />
                    ))}
                </div>
            ))}
        </div>
    );
}

function TreeNode({ node }) {
    return (
        <div className={`node-box-indented ${node.optimal ? "optimal-node" : ""}`}>
            <BoardSnapshot board={node.board} />
            <p>Move: {node.move ?? "root"}</p>
            <p>Score: {node.score}</p>
            <p>{node.isMaximizing ? "Max" : "Min"}</p>
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
