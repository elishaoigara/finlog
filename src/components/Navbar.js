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
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm" style={{
      background: 'linear-gradient(to right, #0d6efd, #0b5ed7)',
      padding: '10px 20px'
    }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        {/* Toggle Button for mobile menu */}
        <button
          className="navbar-toggler me-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Center title on mobile */}
        <h4 className="navbar-brand mx-auto mb-0 position-absolute start-50 translate-middle-x d-lg-none">
          FINLOG
        </h4>

        {/* Left-aligned title on larger screens */}
        <h4 className="navbar-brand d-none d-lg-block mb-0">FINLOG</h4>

        {/* Logout and user on all screens */}
        <div className="d-flex align-items-center gap-2">
          <span className="text-white d-none d-sm-inline" style={{ fontSize: '1rem' }}>Welcome back</span>
          <FaUserCircle size={24} className="text-white" />
          <button
            onClick={handleLogout}
            className="btn btn-light btn-sm px-3 py-1 ms-2"
            style={{
              fontWeight: '500',
              borderRadius: '20px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Collapsible content (optional, empty for now or can hold nav links) */}
      <div className="collapse navbar-collapse" id="navbarContent">
        {/* You can add additional nav links here if needed */}
      </div>
    </nav>
  );
}

export default Navbar;