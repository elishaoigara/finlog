import React, { useState, useEffect } from 'react';

function AddExpenseForm({ onAdd, editingExpense, cancelEdit, darkMode }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (editingExpense) {
      setName(editingExpense.name);
      setAmount(editingExpense.amount);
      setCategory(editingExpense.category);
      setDate(editingExpense.date);
    } else {
      setName('');
      setAmount('');
      setCategory('Food');
      setDate('');
    }
  }, [editingExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount || !date) return;

    onAdd({
      name,
      amount: parseFloat(amount),
      category,
      date,
    });

    if (!editingExpense) {
      setName('');
      setAmount('');
      setCategory('Food');
      setDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row g-3">
        <div className="col-md-3">
          <input
            type="text"
            className={`form-control ${darkMode ? 'bg-dark text-white' : ''}`}
            placeholder="Expense Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            className={`form-control ${darkMode ? 'bg-dark text-white' : ''}`}
            placeholder="Amount (Ksh)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="col-md-3">
          <select
            className={`form-select ${darkMode ? 'bg-dark text-white' : ''}`}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Food">Food</option>
            <option value="Utilities">Utilities</option>
            <option value="Transport">Transport</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="col-md-2">
          <input
            type="date"
            className={`form-control ${darkMode ? 'bg-dark text-white' : ''}`}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2 d-flex gap-1">
          <button type="submit" className="btn btn-primary w-100">
            {editingExpense ? 'Update' : 'Add'} Expense
          </button>
          {editingExpense && (
            <button
              type="button"
              className="btn btn-outline-secondary w-100"
              onClick={cancelEdit}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

export default AddExpenseForm;
