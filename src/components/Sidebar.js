import React, { useState, useEffect } from 'react';
import {
  FaChartBar,
  FaChartLine,
  FaCalendarCheck,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

function Sidebar({ onSectionChange, darkMode }) {
  const [active, setActive] = useState('dashboard');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(!isMobile); // Open by default on desktop

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsOpen(!mobile); // Auto-close if switching to mobile
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = (section) => {
    setActive(section);
    onSectionChange(section);
    if (isMobile) setIsOpen(false);
  };

  const sidebarStyle = {
    background: darkMode
      ? 'linear-gradient(to bottom, #1e1e2f, #2c2c54)'
      : 'linear-gradient(to bottom, #0d6efd, #0b5ed7)',
    color: darkMode ? '#e0e0ff' : '#fff',
    padding: '20px',
    boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)',
    position: isMobile ? 'fixed' : 'relative',
    top: 0,
    left: isOpen ? 0 : '-240px',
    height: '100vh',
    width: '240px',
    zIndex: 1000,
    transition: 'left 0.3s ease-in-out',
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 999,
  };

  const buttonStyle = (isActive) => ({
    backgroundColor: isActive ? (darkMode ? '#ffffff22' : '#ffffff22') : 'transparent',
    border: 'none',
    color: darkMode ? '#e0e0ff' : '#fff',
    padding: '12px 16px',
    marginBottom: '12px',
    borderRadius: '10px',
    width: '100%',
    textAlign: 'left',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
  });

  return (
    <>
      {/* Hamburger button on mobile */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            position: 'fixed',
            top: 15,
            left: 15,
            zIndex: 1100,
            backgroundColor: '#0d6efd',
            color: 'white',
            border: 'none',
            padding: '10px 12px',
            borderRadius: '5px',
          }}
        >
          {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      )}

      {/* Overlay when sidebar is open on mobile */}
      {isMobile && isOpen && <div style={overlayStyle} onClick={() => setIsOpen(false)} />}

      <div style={sidebarStyle}>
        <h4 className="mb-4 text-center" style={{ fontWeight: '600' }}>
          FINLOG
        </h4>
        <button
          className="btn"
          style={buttonStyle(active === 'dashboard')}
          onClick={() => handleClick('dashboard')}
        >
          <FaChartBar /> Dashboard
        </button>
        <button
          className="btn"
          style={buttonStyle(active === 'reports')}
          onClick={() => handleClick('reports')}
        >
          <FaChartLine /> Reports
        </button>
        <button
          className="btn"
          style={buttonStyle(active === 'upcoming')}
          onClick={() => handleClick('upcoming')}
        >
          <FaCalendarCheck /> Upcoming Payments
        </button>
      </div>
    </>
  );
}

export default Sidebar;
