import React from 'react';

function Dashboard({ expenses }) {
  const groupedByCategory = expenses.reduce((acc, expense) => {
    const cat = expense.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(expense);
    return acc;
  }, {});

  return (
    <div className="mt-4">
      <h4>Expenses by Category</h4>
      {Object.entries(groupedByCategory).map(([category, items]) => (
        <div key={category} className="mb-3">
          <h5>{category}</h5>
          <ul className="list-group">
            {items.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between">
                <span>{item.title}</span>
                <span>
                  KSh {item.amount.toLocaleString('en-KE', { minimumFractionDigits: 2 })} | {item.date}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;