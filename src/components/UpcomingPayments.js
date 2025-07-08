// src/components/UpcomingPayments.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    <motion.div
      className="mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h5 className="mb-3">Upcoming Payments</h5>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <motion.div className="row g-3" layout>
          <div className="col-md-4">
            <input
              type="text"
              name="title"
              className="form-control rounded-3 shadow-sm"
              placeholder="Payment Title"
              value={form.title}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <input
              type="number"
              name="amount"
              className="form-control rounded-3 shadow-sm"
              placeholder="Amount (Ksh)"
              value={form.amount}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <input
              type="date"
              name="dueDate"
              className="form-control rounded-3 shadow-sm"
              value={form.dueDate}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-2">
            <motion.button
              type="submit"
              className="btn btn-primary w-100 rounded-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Add
            </motion.button>
          </div>
        </motion.div>

        <div className="form-group mt-3">
          <textarea
            name="notes"
            className="form-control shadow-sm rounded-3"
            placeholder="Notes (optional)"
            value={form.notes}
            onChange={handleChange}
            rows={2}
          />
        </div>
      </form>

      {/* List */}
      {upcomingPayments.length === 0 ? (
        <p className="text-muted">No upcoming payments.</p>
      ) : (
        <motion.div layout className="row g-3">
          {upcomingPayments.map((payment, index) => (
            <motion.div
              key={index}
              className="col-md-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="card shadow-sm border-0 rounded-4">
                <div className="card-body">
                  <h6 className="card-title fw-semibold">{payment.title}</h6>
                  <p className="mb-1 text-secondary">
                    <strong>Due:</strong> {payment.dueDate}
                  </p>
                  <p className="mb-1">
                    <strong>Amount:</strong> Ksh{' '}
                    {Number(payment.amount).toLocaleString('en-KE')}
                  </p>
                  {payment.notes && (
                    <p className="text-muted mb-0 small">
                      <strong>Notes:</strong> {payment.notes}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

export default UpcomingPayments;
