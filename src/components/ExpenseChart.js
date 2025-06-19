import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';

function ExpenseChart({ expenses }) {
  // Group expenses by category or month
  const grouped = {};

  expenses.forEach(expense => {
    const category = expense.category || 'Other';
    grouped[category] = (grouped[category] || 0) + parseFloat(expense.amount);
  });

  const data = Object.keys(grouped).map(category => ({
    category,
    amount: grouped[category]
  }));

  return (
    <div style={{ width: '100%', height: 300 }}>
      <h4>Expense Chart</h4>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip formatter={(value) => `Ksh ${value}`} />
          <Bar dataKey="amount" fill="#007bff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpenseChart;