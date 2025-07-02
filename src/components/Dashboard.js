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
  FaEdit,
  FaTrash,
} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#a86efc', '#ec407a'];

function Dashboard({ expenses, onDelete, onEdit, darkMode }) {
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

  const previousWeekStart = new Date(last7days);
  previousWeekStart.setDate(previousWeekStart.getDate() - 7);
  const previousWeekExpenses = expenses.filter(e => {
    const d = new Date(e.date);
    return d < last7days && d >= previousWeekStart;
  });
  const previousWeekTotal = previousWeekExpenses.reduce((sum, e) => sum + Number(e.amount), 0);

  const diff = lastWeekTotal - previousWeekTotal;
  const trendPercent = previousWeekTotal === 0 ? 100 : Math.abs(((diff / previousWeekTotal) * 100).toFixed(0));

  // Style helper for dark-aware card backgrounds
  const getCardClass = (baseColor) =>
    `card border-0 shadow-sm text-white rounded-4 ${darkMode ? 'bg-dark' : ''}`;

  return (
    <div className="container py-4">
      {/* Header and Filter */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2 mb-4">
        <h4 className="mb-0 fw-semibold">👋 Welcome back!</h4>
        <select
          className="form-select w-100 w-md-auto rounded-3 shadow-sm"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          aria-label="Filter by category"
        >
          <option value="All">All Categories</option>
          <option value="Food">🍔 Food</option>
          <option value="Utilities">💡 Utilities</option>
          <option value="Transport">🚗 Transport</option>
          <option value="Entertainment">🎮 Entertainment</option>
          <option value="Other">📦 Other</option>
        </select>
      </div>

      {/* Smart Insights Cards */}
      <div className="row mb-4">
        <div className="col-12 col-md-4 mb-3">
          <div
            className={getCardClass()}
            style={{
              background: darkMode
                ? '#2c2c54'
                : 'linear-gradient(to right, #00c6ff, #0072ff)',
            }}
          >
            <div className="card-body d-flex align-items-center">
              {diff > 0 ? (
                <FaArrowUp className="me-3 fs-3 icon" />
              ) : (
                <FaArrowDown className="me-3 fs-3 icon" />
              )}
              <div>
                <h6 className="mb-1">Spending Trend</h6>
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
          <div
            className={getCardClass()}
            style={{
              background: darkMode
                ? '#2a2a40'
                : 'linear-gradient(to right, #7b1fa2, #9c27b0)',
            }}
          >
            <div className="card-body d-flex align-items-center">
              <FaChartPie className="me-3 fs-3 icon" />
              <div>
                <h6 className="mb-1">Top Category</h6>
                <p className="mb-0">
                  {topCategory.name} (Ksh {topCategory.value.toLocaleString('en-KE')})
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 mb-3">
          <div
            className={getCardClass()}
            style={{
              background: darkMode
                ? '#263245'
                : 'linear-gradient(to right, #2196f3, #21cbf3)',
            }}
          >
            <div className="card-body d-flex align-items-center">
              <FaChartPie className="me-3 fs-3 icon" />
              <div>
                <h6 className="mb-1">Total Spending</h6>
                <p className="mb-0">Ksh {total.toLocaleString('en-KE')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pie Chart */}
      <div className={`mb-4 card shadow-sm border-0 rounded-4 ${darkMode ? 'bg-dark text-white' : ''}`}>
        <div className="card-body" style={{ height: 300 }}>
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
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                isAnimationActive
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
      </div>

      {/* Expense Table */}
      <div className={`table-responsive p-2 card border-0 shadow-sm rounded-4 ${darkMode ? 'bg-dark text-white' : ''}`}>
        <div className="card-body p-0">
          <table className={`table mb-0 ${darkMode ? 'table-dark' : 'table-striped'}`}>
            <thead className={darkMode ? '' : 'table-light'}>
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
                  <td colSpan="5" className="text-center text-muted py-3">
                    No expenses in this category.
                  </td>
                </tr>
              ) : (
                filteredExpenses.map((expense, index) => (
                  <tr key={index}>
                    <td className="text-truncate" style={{ maxWidth: '150px' }}>{expense.name}</td>
                    <td>{Number(expense.amount).toLocaleString('en-KE')}</td>
                    <td>{expense.category}</td>
                    <td>{expense.date}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-warning me-2"
                        onClick={() => onEdit(index)}
                        aria-label="Edit Expense"
                      >
                        <FaEdit className="icon" />
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => onDelete(index)}
                        aria-label="Delete Expense"
                      >
                        <FaTrash className="icon" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;