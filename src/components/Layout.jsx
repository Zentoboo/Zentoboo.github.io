import { Outlet, Link } from "react-router-dom";
import './Layout.css';

function Layout() {
  return (
    <div className="layout-container">
      <nav className="sidebar">
        <Link to="/">Explore</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
