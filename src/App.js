import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ExpenseForm from './components/ExpenseForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Navbar />
        <main className="container mt-4">
          <ExpenseForm onAdd={addExpense} />
          <Dashboard expenses={expenses} />
        </main>
      </div>
    </div>
  );
}

export default App;