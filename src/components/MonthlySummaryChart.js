import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from 'recharts';

function MonthlySummaryChart({ expenses, darkMode }) {
  const monthMap = {};

  expenses.forEach((expense) => {
    const date = new Date(expense.date);
    if (isNaN(date)) return;

    const label = date.toLocaleString('default', { month: 'short', year: 'numeric' });
    const amount = parseFloat(expense.amount);
    if (!isNaN(amount)) {
      monthMap[label] = (monthMap[label] || 0) + amount;
    }
  });

  let data = Object.entries(monthMap).map(([month, total]) => ({
    month,
    total,
  }));

  // Sort chronologically
  data.sort((a, b) => new Date(`1 ${a.month}`) - new Date(`1 ${b.month}`));

  const currentMonth = new Date().toLocaleString('default', { month: 'short', year: 'numeric' });
  const textColor = darkMode ? '#eaeaea' : '#333';
  const bgColor = darkMode ? '#1f1f1f' : '#ffffff';

  if (data.length === 0) {
    return (
      <div className="text-center mt-4 text-muted">
        <p>No data to display yet.</p>
        <span role="img" aria-label="empty">📉</span>
      </div>
    );
  }

  return (
    <div className="card border-0 shadow-sm rounded-4 my-4" style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">📊 Monthly Expenses</h5>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="month" stroke={textColor} />
            <YAxis stroke={textColor} />
            <Tooltip
              contentStyle={{
                backgroundColor: darkMode ? '#333' : '#fff',
                color: darkMode ? '#fff' : '#000',
                borderRadius: 8,
              }}
              formatter={(value) => `Ksh ${value.toLocaleString('en-KE')}`}
            />
            <Legend />
            <Bar dataKey="total" name="Total Ksh">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.month === currentMonth ? '#f50057' : '#007bff'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default MonthlySummaryChart;
