import React from 'react';
import { FaChartBar, FaChartLine, FaCalendarCheck } from 'react-icons/fa';

function Sidebar({ onSectionChange }) {
  const sidebarStyle = {
    height: '100vh',
    background: 'linear-gradient(180deg, #0d6efd, #0b5ed7)',
    color: '#fff',
    padding: '20px',
    borderRight: '1px solid #dee2e6',
    minWidth: '220px',
    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
  };

  const buttonStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: 'none',
    color: '#fff',
    padding: '12px 15px',
    marginBottom: '12px',
    borderRadius: '8px',
    width: '100%',
    textAlign: 'left',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '1rem',
  };

  const handleHover = (e, isHovering) => {
    e.target.style.backgroundColor = isHovering
      ? 'rgba(255, 255, 255, 0.2)'
      : 'rgba(255, 255, 255, 0.1)';
  };

  return (
    <div style={sidebarStyle}>
      <h4 className="mb-4 text-center" style={{ fontWeight: '600' }}>
        FINLOG
      </h4>
      <div>
        <button
          className="btn"
          style={buttonStyle}
          onMouseOver={(e) => handleHover(e, true)}
          onMouseOut={(e) => handleHover(e, false)}
          onClick={() => onSectionChange('dashboard')}
        >
          <FaChartBar /> Dashboard
        </button>
        <button
          className="btn"
          style={buttonStyle}
          onMouseOver={(e) => handleHover(e, true)}
          onMouseOut={(e) => handleHover(e, false)}
          onClick={() => onSectionChange('reports')}
        >
          <FaChartLine /> Reports
        </button>
        <button
          className="btn"
          style={buttonStyle}
          onMouseOver={(e) => handleHover(e, true)}
          onMouseOut={(e) => handleHover(e, false)}
          onClick={() => onSectionChange('upcoming')}
        >
          <FaCalendarCheck /> Upcoming Payments
        </button>
      </div>
    </div>
  );
}

export default Sidebar;