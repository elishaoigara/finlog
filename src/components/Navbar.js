import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

function Navbar({ darkMode, setDarkMode }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  const finlogLetters = "FINLOG".split("");

  return (
    <nav
      className={`navbar navbar-expand-lg shadow-sm ${
        darkMode ? 'navbar-dark bg-dark' : 'navbar-dark'
      }`}
      style={{
        background: darkMode
          ? 'linear-gradient(to right, #1c1c1c, #333)'
          : 'linear-gradient(to right, #0d6efd, #0b5ed7)',
        padding: '10px 20px',
        color: darkMode ? '#eaeaea' : '#fff',
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">

        {/* Animated FINLOG Brand */}
        <motion.div
          className="navbar-brand mb-0 mx-auto d-lg-none position-absolute start-50 translate-middle-x"
          style={{ fontWeight: 700, display: 'flex', gap: '2px', color: 'inherit' }}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
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
              style={{ fontSize: '1.5rem', color: 'inherit' }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Toggle + Logout */}
        <div className="ms-auto d-flex align-items-center gap-2">

          {/* Dark Mode Toggle */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="btn btn-outline-light btn-sm"
            style={{ borderRadius: '50%' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
          </motion.button>

          {/* Logout Button */}
          <motion.button
            onClick={handleLogout}
            className="btn btn-light btn-sm"
            style={{
              fontWeight: '500',
              borderRadius: '20px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
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
      </div>
    </nav>
  );
}

export default Navbar;