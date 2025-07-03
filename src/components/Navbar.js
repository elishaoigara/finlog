import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

function Navbar({ darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const finlogLetters = 'FINLOG'.split('');

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <nav
      className={`navbar navbar-expand-lg shadow-sm ${
        darkMode ? 'navbar-dark bg-dark' : 'navbar-dark'
      }`}
      style={{
        background: darkMode
          ? 'linear-gradient(to right, #1c1c1c, #333)'
          : 'linear-gradient(to right, #0d6efd, #0b5ed7)',
        padding: '0.75rem 1rem',
        color: darkMode ? '#eaeaea' : '#fff',
        zIndex: 1000,
        position: 'relative',
      }}
    >
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">

        {/* Dark Mode + Logout - Right Aligned */}
        <div className="d-flex align-items-center gap-2 ms-auto order-3 order-lg-2">
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="btn btn-outline-light btn-sm d-flex align-items-center justify-content-center"
            style={{ borderRadius: '50%', width: 36, height: 36 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </motion.button>

          <motion.button
            onClick={handleLogout}
            className="btn btn-light btn-sm"
            style={{
              fontWeight: '500',
              borderRadius: '20px',
              padding: '0.3rem 0.8rem',
              fontSize: '0.875rem',
              whiteSpace: 'nowrap',
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Logout
          </motion.button>
        </div>

        {/* FINLOG Centered on Mobile */}
        <motion.div
          className="position-absolute top-50 start-50 translate-middle d-lg-static d-flex gap-1 align-items-center order-1"
          style={{
            fontWeight: 700,
            fontSize: '1.5rem',
            color: 'inherit',
            zIndex: 10,
          }}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {finlogLetters.map((letter, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.3 }}
              style={{ color: 'inherit' }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;
