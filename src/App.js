import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AddExpenseForm from './components/AddExpenseForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column">
        <Navbar />
        <main className="p-4 flex-grow-1 bg-light overflow-auto">
          <AddExpenseForm onAdd={handleAddExpense} />
          <Dashboard expenses={expenses} />
        </main>
      </div>
    </div>
  );
}

export default App;