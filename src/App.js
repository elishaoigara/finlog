import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseChart from './components/ExpenseChart';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  // Load from localStorage on first render
  useEffect(() => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  // Save to localStorage whenever expenses change
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

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

  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <div className="container mt-4">
              <AddExpenseForm
                onAdd={addExpense}
                editingExpense={editingIndex !== null ? expenses[editingIndex] : null}
              />
              <Dashboard
                expenses={expenses}
                onDelete={deleteExpense}
                onEdit={startEditing}
              />
              <ExpenseChart expenses={expenses} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;