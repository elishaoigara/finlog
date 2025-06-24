import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css';

function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <header className="text-center text-white d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh', background: 'linear-gradient(to right, #0d6efd, #6610f2)' }}>
        <motion.h1
          className="display-4 fw-bold mb-3"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Welcome to FinLog
        </motion.h1>
        <motion.p
          className="lead mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Take control of your finances with smart expense tracking
        </motion.p>
        <motion.div
          className="d-flex gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href="/signup" className="btn btn-light px-4 py-2 fw-semibold">
            Get Started
          </a>
          <a href="/login" className="btn btn-outline-light px-4 py-2 fw-semibold">
            Log In
          </a>
        </motion.div>
      </header>

      {/* Testimonials Section */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">What Our Users Say</h2>
          <div className="row g-4">
            {[
              {
                name: 'Jane M.',
                text: 'FinLog helped me save 20% of my salary every month. Super intuitive!',
                img: 'https://randomuser.me/api/portraits/women/44.jpg'
              },
              {
                name: 'Michael K.',
                text: 'I finally understand where my money goes. Highly recommend!',
                img: 'https://randomuser.me/api/portraits/men/32.jpg'
              },
              {
                name: 'Esther L.',
                text: 'Clean design and powerful features. I use it daily!',
                img: 'https://randomuser.me/api/portraits/women/65.jpg'
              }
            ].map((user, index) => (
              <motion.div
                key={index}
                className="col-md-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <div className="card shadow-sm p-3 h-100">
                  <img src={user.img} className="rounded-circle mb-3 mx-auto" alt={user.name} width="80" height="80" />
                  <p className="mb-2 fst-italic">"{user.text}"</p>
                  <h6 className="fw-semibold">{user.name}</h6>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 text-white" style={{ background: '#0d6efd' }}>
        <div className="container text-center">
          <motion.h3
            className="fw-bold mb-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ready to take control of your finances?
          </motion.h3>
          <motion.p
            className="mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Sign up today and join thousands who trust FinLog.
          </motion.p>
          <motion.div
            className="d-flex justify-content-center gap-3 flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a href="/signup" className="btn btn-light fw-semibold px-4 py-2 shadow-sm">
              Get Started
            </a>
            <a href="/login" className="btn btn-outline-light px-4 py-2">
              Log In
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;