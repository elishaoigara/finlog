import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
} from 'react-icons/fa';

function Footer({ darkMode }) {
  const textColor = darkMode ? '#eaeaea' : '#ffffff';

  const footerStyle = {
    background: darkMode ? '#121212' : '#0d6efd',
    color: textColor,
    padding: '3rem 1rem 2rem',
  };

  const headingStyle = {
    fontWeight: '600',
    marginBottom: '1rem',
    color: textColor,
  };

  const linkStyle = {
    display: 'block',
    color: textColor,
    textDecoration: 'none',
    marginBottom: '0.5rem',
    fontSize: '0.95rem',
  };

  const iconStyle = {
    color: textColor,
    fontSize: '1.1rem',
    marginRight: '1rem',
    transition: 'transform 0.2s',
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="row gy-4">
          {/* Branding Column */}
          <div className="col-md-3 col-12">
            <h5 style={headingStyle}>FinLog</h5>
            <p style={{ fontSize: '0.95rem' }}>
              Your financial companion. Save smart, live better.
            </p>
            <p className="small mb-0">&copy; 2025 Elisha Oigara</p>
          </div>

          {/* Navigation Column */}
          <div className="col-md-3 col-6">
            <h6 style={headingStyle}>Navigation</h6>
            <span style={linkStyle}>About</span>
            <span style={linkStyle}>Contact</span>
            <span style={linkStyle}>Terms</span>
            <span style={linkStyle}>Privacy</span>
          </div>

          {/* Resources Column */}
          <div className="col-md-3 col-6">
            <h6 style={headingStyle}>Resources</h6>
            <span style={linkStyle}>FAQs</span>
            <span style={linkStyle}>Blog</span>
            <span style={linkStyle}>Support</span>
            <span style={linkStyle}>Community</span>
          </div>

          {/* Connect Column */}
          <div className="col-md-3 col-12">
            <h6 style={headingStyle}>Connect</h6>
            <div className="d-flex mb-2">
              <FaFacebookF style={iconStyle} />
              <FaTwitter style={iconStyle} />
              <FaLinkedinIn style={iconStyle} />
              <FaEnvelope style={iconStyle} />
            </div>
            <p style={{ fontSize: '0.9rem' }}>
              Follow us for the latest updates.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
