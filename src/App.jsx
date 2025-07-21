import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '1rem' }}>
          {/* Main content goes here */}
          <h2>Welcome to Zentoboo!</h2>
        </main>
      </div>
    </div>
  );
}

export default App;
