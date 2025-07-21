import React from 'react';

function Sidebar() {
  return (
    <aside style={{
      width: '200px',
      background: '#f4f4f4',
      padding: '1rem',
      height: '100vh',
      boxSizing: 'border-box'
    }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;