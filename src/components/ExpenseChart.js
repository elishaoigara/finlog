import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA66CC'];

function ExpenseChart({ expenses }) {
  const dataMap = {};

  // Group expenses by category and sum the values
  expenses.forEach((expense) => {
    const category = expense.category || 'Other';
    const amount = parseFloat(expense.amount);
    if (!isNaN(amount)) {
      dataMap[category] = (dataMap[category] || 0) + amount;
    }
  });

  const data = Object.entries(dataMap).map(([name, value]) => ({
    name,
    value,
  }));

  if (data.length === 0) return <p className="mt-4">No data to display yet.</p>;

  return (
    <div className="my-4">
      <h5 className="mb-3">Expense Breakdown by Category</h5>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label={({ name, percent }) =>
              `${name} (${(percent * 100).toFixed(0)}%)`
            }
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `Ksh ${value.toLocaleString('en-KE')}`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpenseChart;