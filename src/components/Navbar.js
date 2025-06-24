import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  const finlogLetters = "FINLOG".split("");

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-sm"
      style={{
        background: 'linear-gradient(to right, #0d6efd, #0b5ed7)',
        padding: '10px 20px',
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">

        {/* Typewriter Brand Animation */}
        <motion.div
          className="navbar-brand mb-0 mx-auto d-lg-none position-absolute start-50 translate-middle-x"
          style={{ fontWeight: 700, display: 'flex', gap: '2px' }}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {finlogLetters.map((letter, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.3 }}
              style={{ fontSize: '1.5rem', color: '#fff' }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Logout Button */}
        <motion.button
          onClick={handleLogout}
          className="btn btn-light btn-sm ms-auto"
          style={{
            fontWeight: '500',
            borderRadius: '20px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Logout
        </motion.button>
      </div>
    </nav>
  );
}

export default Navbar;