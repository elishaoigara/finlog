import React from 'react';

function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md h-full p-4">
      <h2 className="text-xl font-bold text-gray-700 mb-6">Finlog</h2>
      <ul>
        <li className="mb-4 text-gray-600 hover:text-blue-600 cursor-pointer">Dashboard</li>
        <li className="mb-4 text-gray-600 hover:text-blue-600 cursor-pointer">Expenses</li>
        <li className="mb-4 text-gray-600 hover:text-blue-600 cursor-pointer">Reports</li>
      </ul>
    </div>
  );
}

export default Sidebar;