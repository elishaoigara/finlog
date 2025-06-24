import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-scroll';
import './LandingPage.css';

function LandingPage() {
  const title = "Welcome to FinLog";

  return (
    <>
      {/* Hero Section */}
      <header
        className="text-center text-white d-flex flex-column justify-content-center align-items-center px-3"
        style={{
          height: '100vh',
          backgroundImage: 'linear-gradient(to right, #0d6efd, #6610f2)',
          backgroundSize: 'cover',
          position: 'relative',
        }}
      >
        <motion.h1
          className="display-4 fw-bold mb-3"
          style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '2px' }}
        >
          {title.split('').map((letter, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className="lead mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.7 }}
        >
          Take control of your finances with smart expense tracking
        </motion.p>
        <motion.div
          className="d-flex gap-3 flex-wrap justify-content-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          <motion.a
            href="/signup"
            className="btn btn-light px-4 py-2 fw-semibold shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
          <motion.a
            href="/login"
            className="btn btn-outline-light px-4 py-2 fw-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Log In
          </motion.a>
        </motion.div>
      </header>

      {/* Testimonials Section */}
      <motion.section
        className="py-5 bg-light text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <h2 className="fw-bold mb-4">What Our Users Say</h2>
          <div className="row g-4">
            {[
              {
                name: 'Jane M.',
                text: 'FinLog helped me save 20% of my salary every month. Super intuitive!',
                img: 'https://randomuser.me/api/portraits/women/44.jpg',
              },
              {
                name: 'Michael K.',
                text: 'I finally understand where my money goes. Highly recommend!',
                img: 'https://randomuser.me/api/portraits/men/32.jpg',
              },
              {
                name: 'Esther L.',
                text: 'Clean design and powerful features. I use it daily!',
                img: 'https://randomuser.me/api/portraits/women/65.jpg',
              },
            ].map((user, index) => (
              <motion.div
                key={index}
                className="col-md-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="card h-100 p-4 shadow-sm border-0 rounded-4">
                  <motion.img
                    src={user.img}
                    className="rounded-circle mb-3 mx-auto shadow"
                    alt={user.name}
                    width="80"
                    height="80"
                    whileHover={{ scale: 1.1 }}
                  />
                  <p className="fst-italic text-muted small">"{user.text}"</p>
                  <h6 className="fw-semibold mt-2">{user.name}</h6>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        id="cta"
        className="cta-section py-5 text-white text-center"
        style={{ background: 'linear-gradient(to right, #0d6efd, #6610f2)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <h3 className="fw-bold mb-3">
            Ready to take control of your finances?
          </h3>
          <p className="mb-4">
            Sign up today and join thousands who trust FinLog.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <motion.a
              href="/signup"
              className="btn btn-light fw-semibold px-4 py-2 shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
            <motion.a
              href="/login"
              className="btn btn-outline-light px-4 py-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Log In
            </motion.a>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default LandingPage;
