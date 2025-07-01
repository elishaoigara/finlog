import React from 'react';
import { motion } from 'framer-motion';
import './LandingPage.css';

const testimonials = [
  {
    name: 'Jane M.',
    text: 'FinLog helped me save 20% of my salary every month.',
    img: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Michael K.',
    text: 'I finally understand where my money goes.',
    img: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Esther L.',
    text: 'Clean design and powerful features. I use it daily!',
    img: 'https://randomuser.me/api/portraits/women/65.jpg'
  }
];

function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <header className="hero d-flex flex-column justify-content-center align-items-center">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="typewriter">Welcome to FinLog</span>
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
          className="hero-buttons d-flex gap-3 flex-wrap justify-content-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a href="/signup" className="btn btn-light px-4 py-2">Get Started</a>
          <a href="/login" className="btn btn-outline-light px-4 py-2">Login</a>
        </motion.div>
      </header>

      {/* Testimonials Section */}
      <section className="testimonials text-center py-5">
        <div className="container">
          <h2 className="mb-4 fw-bold">What Our Users Say</h2>
          <div className="row g-4">
            {testimonials.map((user, index) => (
              <motion.div
                className="col-md-4"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="testimonial-card shadow-sm p-4 rounded">
                  <img src={user.img} alt={user.name} className="rounded-circle mb-3" width="80" height="80" />
                  <p className="fst-italic mb-2">"{user.text}"</p>
                  <h6 className="fw-semibold">{user.name}</h6>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section text-white text-center py-5">
        <div className="container">
          <motion.h3
            className="mb-3 fw-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Ready to take control of your finances?
          </motion.h3>
          <motion.p
            className="mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Join thousands of users making smarter financial decisions.
          </motion.p>
          <motion.div
            className="d-flex gap-3 flex-wrap justify-content-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a href="/signup" className="btn btn-light fw-semibold px-4 py-2 shadow-sm">Get Started</a>
            <a href="/login" className="btn btn-outline-light px-4 py-2">Log In</a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;