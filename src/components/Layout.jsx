import { NavLink} from "react-router-dom";
import './Layout.css';
import AnimatedOutlet from "./extra/AnimatedOutlet";
import { useNavigationHotkeys } from "./hooks/useHotkeys";

function Layout() {
  useNavigationHotkeys();
  return (
    <div className="layout-container">
      <nav className="sidebar">
        <div className="profile">
          <img src="src\assets\profile-picture.jpg" alt="profile picture" />
          <p>Christopher Bertrand</p>
        </div>
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Explore <span className="hotkey">1</span></NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects <span className="hotkey">2</span></NavLink>
        <NavLink to="/contacts" className={({ isActive }) => isActive ? "active" : ""}>Contacts <span className="hotkey">3</span></NavLink>
      </nav>

      <main className="main-content">
        <AnimatedOutlet />
      </main>
    </div>
  );
}

export default Layout;