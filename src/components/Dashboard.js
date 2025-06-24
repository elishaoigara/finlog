import React, { useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  FaArrowUp,
  FaArrowDown,
  FaChartPie,
} from 'react-icons/fa';
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

  const topCategory = chartData.reduce(
    (top, current) => (current.value > top.value ? current : top),
    { name: 'None', value: 0 }
  );

  const last7days = new Date();
  last7days.setDate(last7days.getDate() - 7);
  const recentExpenses = expenses.filter(e => new Date(e.date) >= last7days);
  const lastWeekTotal = recentExpenses.reduce((sum, e) => sum + Number(e.amount), 0);

  const previousWeekStart = new Date();
  previousWeekStart.setDate(last7days.getDate() - 7);
  const previousWeekExpenses = expenses.filter(e => {
    const d = new Date(e.date);
    return d < last7days && d >= previousWeekStart;
  });
  const previousWeekTotal = previousWeekExpenses.reduce((sum, e) => sum + Number(e.amount), 0);

  const diff = lastWeekTotal - previousWeekTotal;
  const trendPercent = previousWeekTotal === 0 ? 100 : Math.abs(((diff / previousWeekTotal) * 100).toFixed(0));

  return (
    <div>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2 mb-3">
        <h4 className="mb-0">Welcome back!</h4>
        <select
          className="form-select w-100 w-md-auto"
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

      {/* Smart Insights */}
      <div className="row mb-4">
        <div className="col-12 col-md-4 mb-3">
          <div className="card border-0 shadow-sm text-white" style={{ background: '#1976d2' }}>
            <div className="card-body d-flex align-items-center">
              {diff > 0 ? (
                <FaArrowUp className="me-3 fs-3 text-white" />
              ) : (
                <FaArrowDown className="me-3 fs-3 text-white" />
              )}
              <div>
                <h6 className="mb-1 text-white">Spending Trend</h6>
                <p className="mb-0">
                  {diff > 0
                    ? `Up by ${trendPercent}% from last week`
                    : `Down by ${trendPercent}% from last week`}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 mb-3">
          <div className="card border-0 shadow-sm text-white" style={{ background: '#2196f3' }}>
            <div className="card-body d-flex align-items-center">
              <FaChartPie className="me-3 fs-3 text-white" />
              <div>
                <h6 className="mb-1 text-white">Top Category</h6>
                <p className="mb-0">
                  {topCategory.name} (Ksh {topCategory.value.toLocaleString('en-KE')})
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 mb-3">
          <div className="card border-0 shadow-sm text-white" style={{ background: '#42a5f5' }}>
            <div className="card-body d-flex align-items-center">
              <FaChartPie className="me-3 fs-3 text-white" />
              <div>
                <h6 className="mb-1 text-white">Total Spending</h6>
                <p className="mb-0">Ksh {total.toLocaleString('en-KE')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pie Chart */}
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

      {/* Expense Table */}
      <div className="table-responsive p-2">
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
