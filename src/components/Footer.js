import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#0d6efd', color: 'white' }} className="py-4 mt-5">
      <div className="container text-center">
        <p className="mb-2">&copy; 2025 Elisha Oigara. All rights reserved.</p>
        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn-link text-white text-decoration-none">About</button>
          <button className="btn btn-link text-white text-decoration-none">Contact</button>
          <button className="btn btn-link text-white text-decoration-none">Terms</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;