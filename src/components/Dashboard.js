import React, { useState } from 'react';
import ExpenseChart from './ExpenseChart';

function Dashboard({ expenses }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExpenses = expenses.filter(expense =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="mb-4">Dashboard</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search expenses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ExpenseChart expenses={filteredExpenses} />

      <table className="table table-bordered table-striped mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount (Ksh)</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.length > 0 ? (
            filteredExpenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.name}</td>
                <td>Ksh {expense.amount}</td>
                <td>{expense.category}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">
                No matching expenses found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;