import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
return (
<div className="d-flex min-vh-100">
<div className="bg-light border-end" style={{ width: '250px' }}>
<Sidebar />
</div>
<div className="flex-grow-1 d-flex flex-column">
<Navbar />
<main className="flex-grow-1 bg-body p-4 overflow-auto">
<Dashboard />
</main>
</div>
</div>
);
}

export default App;