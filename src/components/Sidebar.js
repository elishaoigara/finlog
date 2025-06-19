import React from 'react';

function Sidebar() {
  return (
    <div className="bg-dark text-white p-3" style={{ width: '250px' }}>
      <h4>Menu</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Expenses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Reports</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;