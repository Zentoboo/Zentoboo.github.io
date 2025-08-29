import TicTacToe from "../game/TicTacToe";
import { Link } from "react-router-dom";
import "../../css/Projects.css";
function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <p>This is the projects page</p>
      <Link to="/tictactoe">
        <button>Go to TicTacToe</button>
      </Link>
      <TicTacToe />
    </div>
  );
}

export default Projects;