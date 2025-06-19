// src/components/Chart.js
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8854d0", "#eb3b5a"];

const Chart = ({ data }) => {
  const categoryTotals = data.reduce((totals, item) => {
    if (!totals[item.category]) {
      totals[item.category] = 0;
    }
    totals[item.category] += parseFloat(item.amount);
    return totals;
  }, {});

  const pieData = Object.entries(categoryTotals).map(([category, total]) => ({
    name: category,
    value: total,
  }));

  return (
    <div className="card p-4 mt-4">
      <h5>Spending by Category</h5>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;