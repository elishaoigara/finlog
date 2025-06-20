// src/components/UpcomingPayments.js
import React, { useState } from 'react';

function UpcomingPayments({ upcomingPayments, onAdd }) {
  const [form, setForm] = useState({
    title: '',
    amount: '',
    dueDate: '',
    notes: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.amount || !form.dueDate) return;
    onAdd(form);
    setForm({ title: '', amount: '', dueDate: '', notes: '' });
  };

  return (
    <div className="mt-4">
      <h5>Upcoming Payments</h5>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row g-3">
          <div className="col-md-4">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Payment Title"
              value={form.title}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <input
              type="number"
              name="amount"
              className="form-control"
              placeholder="Amount (Ksh)"
              value={form.amount}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <input
              type="date"
              name="dueDate"
              className="form-control"
              value={form.dueDate}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-primary w-100">
              Add
            </button>
          </div>
        </div>
        <div className="form-group mt-3">
          <textarea
            name="notes"
            className="form-control"
            placeholder="Notes (optional)"
            value={form.notes}
            onChange={handleChange}
          />
        </div>
      </form>

      {upcomingPayments.length === 0 ? (
        <p>No upcoming payments.</p>
      ) : (
        <ul className="list-group">
          {upcomingPayments.map((payment, index) => (
            <li key={index} className="list-group-item">
              <h6>{payment.title}</h6>
              <p className="mb-1">Due: {payment.dueDate}</p>
              <p className="mb-1">Amount: Ksh {Number(payment.amount).toLocaleString('en-KE')}</p>
              {payment.notes && <small className="text-muted">Notes: {payment.notes}</small>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UpcomingPayments;
