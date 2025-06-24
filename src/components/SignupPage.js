import React from 'react';

function SignupPage() {
  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      <form>
        <div className="mb-3">
          <label>Full Name:</label>
          <input type="text" className="form-control" placeholder="John Doe" />
        </div>
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" className="form-control" placeholder="you@example.com" />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>
        <button className="btn btn-success w-100">Create Account</button>
      </form>
    </div>
  );
}

export default SignupPage;