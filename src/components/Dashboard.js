import React from 'react';

function Dashboard() {
  return (
    <div>
      <h2>Welcome back!</h2>
      <p>Here’s an overview of your finances.</p>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Total Income</h5>
              <p className="card-text">KES 75,000</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Expenses</h5>
              <p className="card-text">KES 42,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;