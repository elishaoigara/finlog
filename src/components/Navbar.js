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
      <div className="container-fluid">
        {/* Center title on mobile using position-absolute & transform */}
        <h4 className="navbar-brand mx-auto d-lg-none position-absolute start-50 translate-middle-x">
          FINLOG
        </h4>

        {/* Desktop title on left */}
        <h4 className="navbar-brand d-none d-lg-block mb-0">FINLOG</h4>

        {/* Toggle Button */}
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
          <ul className="navbar-nav ms-auto d-flex align-items-lg-center gap-3">
            <li className="nav-item d-none d-lg-inline text-white">
              Welcome back
            </li>
            <li className="nav-item">
              <FaUserCircle size={24} className="text-white" />
            </li>
            <li className="nav-item">
              <button
                onClick={handleLogout}
                className="btn btn-light btn-sm px-3 py-1"
                style={{
                  fontWeight: '500',
                  borderRadius: '20px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;