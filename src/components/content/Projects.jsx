import TicTacToe from "../game/TicTacToe";
import "../../css/Projects.css";
function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <p>This is the projects page</p>
      <TicTacToe />
    </div>
  );
}

export default Projects;