import React from 'react';

function Sidebar() {
  return (
    <div className="p-3 border-end vh-100 bg-light">
      <h5 className="mb-4">FinLog</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <button className="btn btn-link nav-link text-start text-dark px-0">Dashboard</button>
        </li>
        <li className="nav-item mb-2">
          <button className="btn btn-link nav-link text-start text-dark px-0">Add Expense</button>
        </li>
        <li className="nav-item mb-2">
          <button className="btn btn-link nav-link text-start text-dark px-0">Reports</button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;