import React from 'react';

function Dashboard({ expenses }) {
  const total = expenses.reduce((sum, exp) => sum + parseFloat(exp.amount), 0);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Dashboard</h2>

      <div className="row">
        <div className="col-md-6">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Expenses</h5>
              <p className="card-text fw-bold">KSh {total.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      <h4 className="mt-5">All Expenses</h4>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount (KSh)</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.name}</td>
              <td>{parseFloat(expense.amount).toLocaleString()}</td>
              <td>{expense.category}</td>
              <td>{new Date(expense.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
