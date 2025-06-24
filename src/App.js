import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseChart from './components/ExpenseChart';
import MonthlySummaryChart from './components/MonthlySummaryChart';
import UpcomingPayments from './components/UpcomingPayments';
import Footer from './components/Footer';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [upcomingPayments, setUpcomingPayments] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [section, setSection] = useState('dashboard');

  const addExpense = (expense) => {
    if (editingIndex !== null) {
      const updatedExpenses = [...expenses];
      updatedExpenses[editingIndex] = expense;
      setExpenses(updatedExpenses);
      setEditingIndex(null);
    } else {
      setExpenses([...expenses, expense]);
    }
  };

  const deleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
  };

  const addUpcomingPayment = (payment) => {
    setUpcomingPayments([...upcomingPayments, payment]);
  };

  return (
    <div className="App d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container-fluid flex-grow-1">
        <div className="row">
          <div className="col-md-3">
            <Sidebar onSectionChange={setSection} />
          </div>
          <div className="col-md-9">
            <div className="container mt-4">
              {section === 'dashboard' && (
                <>
                  <AddExpenseForm
                    onAdd={addExpense}
                    editingExpense={
                      editingIndex !== null ? expenses[editingIndex] : null
                    }
                  />
                  <Dashboard
                    expenses={expenses}
                    onDelete={deleteExpense}
                    onEdit={startEditing}
                  />
                  <ExpenseChart expenses={expenses} />
                </>
              )}
              {section === 'reports' && (
                <MonthlySummaryChart expenses={expenses} />
              )}
              {section === 'upcoming' && (
                <UpcomingPayments
                  upcomingPayments={upcomingPayments}
                  onAdd={addUpcomingPayment}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
