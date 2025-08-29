import { NavLink } from "react-router-dom";
import { useEffect, useRef } from 'react';
import '../css/Layout.css';
import AnimatedOutlet from "./extra/AnimatedOutlet";
import { useNavigationHotkeys } from "./hooks/useHotkeys";

function Layout() {
  useNavigationHotkeys();
  const scrollerRef = useRef(null);

  useEffect(() => {
    const createInfiniteScroll = () => {
      const scrollerContent = scrollerRef.current;
      if (!scrollerContent) return;

      // Clear existing content
      scrollerContent.innerHTML = '';

      const text = "I use this site to try out weird frontend stuffs.";

      // duplicates needed
      const containerWidth = scrollerContent.parentElement.offsetWidth;
      const tempSpan = document.createElement('span');
      tempSpan.style.flexShrink = '0';
      tempSpan.style.padding = '15px 30px';
      tempSpan.style.whiteSpace = 'nowrap';
      tempSpan.style.visibility = 'hidden';
      tempSpan.style.position = 'absolute';
      tempSpan.textContent = text;
      document.body.appendChild(tempSpan);

      const textWidth = tempSpan.offsetWidth;
      document.body.removeChild(tempSpan);

      // enough duplicates for ensure seamless loop
      const duplicatesNeeded = Math.ceil((containerWidth * 2) / textWidth) + 2;

      for (let i = 0; i < duplicatesNeeded; i++) {
        const span = document.createElement('span');
        span.style.flexShrink = '0';
        span.style.padding = '15px 30px';
        span.style.whiteSpace = 'nowrap';
        span.textContent = text;
        scrollerContent.appendChild(span);
      }
    };

    createInfiniteScroll();

    // Recreate on window resize
    window.addEventListener('resize', createInfiniteScroll);
    return () => window.removeEventListener('resize', createInfiniteScroll);
  }, []);

  return (
    <div className="layout-container">
      <nav className="sidebar">
        <div className="nav-content">
          <div className="profile">
            <img src="/assets/profile-picture.jpg" alt="profile picture" />
            <p>Christopher Bertrand</p>
          </div>
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Explore <span className="hotkey">1</span></NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects <span className="hotkey">2</span></NavLink>
          <NavLink to="/background" end className={({ isActive }) => isActive ? "active" : ""}>Background <span className="hotkey">3</span></NavLink>
          <NavLink to="/contacts" className={({ isActive }) => isActive ? "active" : ""}>Contacts <span className="hotkey">4</span></NavLink>
          <p>mini-projects</p>
          <NavLink to="/tictactoe" className={({ isActive }) => isActive ? "active" : ""}>TicTacToe minimax</NavLink>
        </div>
        <div className="scroller">
          <div className="scroller-content" ref={scrollerRef}>
            {/* Content will be dynamically generated */}
          </div>
        </div>
      </nav>

      <main className="main-content">
        <AnimatedOutlet />
      </main>
    </div>
  );
}

export default Layout;