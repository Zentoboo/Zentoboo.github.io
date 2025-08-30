import { useState } from "react";
import TicTacToe from "../game/TicTacToe";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Projects() {
  const [openProject, setOpenProject] = useState(null);

  const toggleProject = (projectName) => {
    setOpenProject(openProject === projectName ? null : projectName);
  };

  return (
    <div className="container">
      <h1 className="section-title">Projects</h1>
      <p className="note">these are some projects I choose to feature</p>

      <h2 className="sub-title">projects</h2>
      <h2 className="sub-title">mini-projects</h2>

      <div className="collapsible-row">
        <button
          className="collapsible-toggle"
          onClick={() => toggleProject("tictactoe")}
        >
          TicTacToe Minimax Visualizer
          {openProject === "tictactoe" ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        {openProject === "tictactoe" && (
          <div className="collapsible-content">
            <div className="section-left">
              <p>A small game with AI (Minimax algorithm). </p>
              <Link to="/tictactoe">
                <button>Go to TicTacToe</button>
              </Link>
            </div>
            <div className="section-center">
              <TicTacToe />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
