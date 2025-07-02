import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/app');
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        color: '#fff',
      }}
    >
      <div
        className="p-4 rounded-4 shadow-lg"
        style={{
          backgroundColor: '#ffffff',
          color: '#333',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <div className="text-center mb-4">
          <h2 style={{ fontWeight: '700' }}>FinLog Login</h2>
          <p className="text-muted" style={{ fontSize: '0.9rem' }}>
            Welcome back! Please enter your credentials.
          </p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-3"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-3"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary rounded-3">
              Login
            </button>
          </div>
          <div className="text-center">
            <small>
              Forgot password? <a href="#">Reset</a>
            </small>
            <br />
            <small>
              Don't have an account? <a href="#">Sign up</a>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
