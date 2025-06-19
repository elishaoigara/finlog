import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#a86efc', '#ec407a'];

function Dashboard({ expenses, onDelete, onEdit }) {
  const [filterCategory, setFilterCategory] = useState('All');

  const filteredExpenses =
    filterCategory === 'All'
      ? expenses
      : expenses.filter((expense) => expense.category === filterCategory);

  const total = filteredExpenses.reduce((sum, e) => sum + Number(e.amount), 0);

  const categoryTotals = expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + Number(e.amount);
    return acc;
  }, {});

  const chartData = Object.entries(categoryTotals).map(([category, value]) => ({
    name: category,
    value,
  }));

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Welcome back!</h4>
        <select
          className="form-select w-auto"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Food">Food</option>
          <option value="Utilities">Utilities</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Pie Chart Section */}
      <div className="mb-4" style={{ height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {chartData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Total and Per Category */}
      <div className="mb-4">
        <h5>Total Expenses: Ksh {total.toLocaleString('en-KE')}</h5>
        <ul className="list-group">
          {Object.entries(categoryTotals).map(([category, amount]) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={category}
            >
              {category}
              <span className="badge bg-primary rounded-pill">
                Ksh {amount.toLocaleString('en-KE')}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Expense Table */}
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-light">
            <tr>
              <th>Expense Name</th>
              <th>Amount (Ksh)</th>
              <th>Category</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">
                  No expenses in this category.
                </td>
              </tr>
            ) : (
              filteredExpenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.name}</td>
                  <td>{Number(expense.amount).toLocaleString('en-KE')}</td>
                  <td>{expense.category}</td>
                  <td>{expense.date}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => onEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => onDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;