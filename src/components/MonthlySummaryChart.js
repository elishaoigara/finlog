import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

function MonthlySummaryChart({ expenses }) {
  const monthMap = {};

  expenses.forEach((expense) => {
    const date = new Date(expense.date);
    if (isNaN(date)) return;

    const month = date.toLocaleString('default', { month: 'short', year: 'numeric' });
    const amount = parseFloat(expense.amount);
    if (!isNaN(amount)) {
      monthMap[month] = (monthMap[month] || 0) + amount;
    }
  });

  const data = Object.entries(monthMap).map(([month, total]) => ({
    month,
    total,
  }));

  if (data.length === 0) return <p className="mt-4">No data to display yet.</p>;

  return (
    <div className="my-4">
      <h5 className="mb-3">Monthly Expenses</h5>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value) => `Ksh ${value.toLocaleString('en-KE')}`} />
          <Legend />
          <Bar dataKey="total" fill="#007bff" name="Total Ksh" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MonthlySummaryChart;