import React, { useState } from 'react';

function AddExpenseForm({ onAdd }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount || !category) return;
    onAdd({ name, amount: parseFloat(amount), category });
    setName('');
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="form-group mb-2">
        <label>Expense Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group mb-2">
        <label>Amount (Ksh)</label>
        <input
          type="number"
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div className="form-group mb-2">
        <label>Category</label>
        <input
          type="text"
          className="form-control"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Expense</button>
    </form>
  );
}

export default AddExpenseForm;