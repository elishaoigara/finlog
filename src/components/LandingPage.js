// LandingPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './LandingPage.css';
import { FaMoon, FaSun, FaArrowRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Jane M.',
    text: 'FinLog helped me save 20% of my salary every month.',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Michael K.',
    text: 'I finally understand where my money goes.',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Esther L.',
    text: 'Clean design and powerful features. I use it daily!',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      {/* Hero Section */}
      <header className={`hero ${darkMode ? 'hero-dark' : ''}`}>
        <div className="theme-toggle">
          <button onClick={() => setDarkMode(!darkMode)} className="btn toggle-btn" aria-label="Toggle dark mode">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="typewriter">Welcome to <strong>FinLog</strong></span>
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Track your expenses. Understand your finances. Own your future.
        </motion.p>
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a href="/signup" className="btn primary-btn">Get Started <FaArrowRight /></a>
          <a href="/login" className="btn secondary-btn">Login</a>
        </motion.div>
      </header>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Users Say</h2>
          <div className="testimonial-cards">
            {testimonials.map((user, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <img src={user.img} alt={user.name} className="avatar" />
                <p className="quote">"{user.text}"</p>
                <h6 className="user-name">{user.name}</h6>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div
          className="cta-box"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Ready to take control of your finances?</h3>
          <p>Join thousands of users making smarter financial decisions.</p>
          <div className="cta-buttons">
            <a href="/signup" className="btn primary-btn">Join Now</a>
            <a href="/login" className="btn secondary-btn">Log In</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default LandingPage;
