import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Explore</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
      
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;