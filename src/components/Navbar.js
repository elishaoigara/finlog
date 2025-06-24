import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{
      background: 'linear-gradient(to right, #0d6efd, #0b5ed7)',
      color: '#fff',
      padding: '10px 20px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
    }}>
      <div className="container-fluid">
        <h4 className="navbar-brand mb-0">FINLOG</h4>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            <span style={{ fontSize: '1rem' }}>Welcome back</span>
            <FaUserCircle size={28} className="text-white" />
            <button
              onClick={handleLogout}
              className="btn btn-light btn-sm px-3 py-1"
              style={{
                fontWeight: '500',
                borderRadius: '20px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                transition: '0.3s ease',
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;