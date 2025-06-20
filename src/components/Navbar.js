import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background: 'linear-gradient(to right, #0d6efd, #0b5ed7)',
        color: '#fff',
        padding: '10px 20px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <h4 style={{ margin: 0, fontWeight: 600 }}>FINLOG</h4>

        <div className="d-flex align-items-center gap-3">
          <span style={{ fontSize: '1rem' }}>Welcome back, Elisha</span>
          <FaUserCircle size={28} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;