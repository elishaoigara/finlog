import React from 'react';

function Footer() {
  return (
    <footer className="footer py-4 mt-5 text-white">
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