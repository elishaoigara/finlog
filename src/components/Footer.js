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
    padding: '2rem 1rem', // smaller padding
    fontSize: '0.875rem',
  };

  const headingStyle = {
    fontWeight: '600',
    marginBottom: '0.75rem',
    fontSize: '1rem',
    color: textColor,
  };

  const linkStyle = {
    display: 'block',
    color: textColor,
    textDecoration: 'none',
    marginBottom: '0.4rem',
  };

  const iconStyle = {
    color: textColor,
    fontSize: '1rem',
    marginRight: '0.8rem',
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="row gy-3">
          {/* Branding Column */}
          <div className="col-12 col-sm-6 col-md-3">
            <h5 style={headingStyle}>FinLog</h5>
            <p style={{ marginBottom: '0.5rem' }}>
              Your financial companion.
            </p>
            <p className="mb-0">&copy; 2025 Elisha Oigara</p>
          </div>

          {/* Navigation Column */}
          <div className="col-6 col-md-3">
            <h6 style={headingStyle}>Navigation</h6>
            <span style={linkStyle}>About</span>
            <span style={linkStyle}>Contact</span>
            <span style={linkStyle}>Terms</span>
            <span style={linkStyle}>Privacy</span>
          </div>

          {/* Resources Column */}
          <div className="col-6 col-md-3">
            <h6 style={headingStyle}>Resources</h6>
            <span style={linkStyle}>FAQs</span>
            <span style={linkStyle}>Blog</span>
            <span style={linkStyle}>Support</span>
            <span style={linkStyle}>Community</span>
          </div>

          {/* Connect Column */}
          <div className="col-12 col-md-3">
            <h6 style={headingStyle}>Connect</h6>
            <div className="d-flex flex-wrap mb-2">
              <FaFacebookF style={iconStyle} />
              <FaTwitter style={iconStyle} />
              <FaLinkedinIn style={iconStyle} />
              <FaEnvelope style={iconStyle} />
            </div>
            <p style={{ marginBottom: 0 }}>Follow us for updates.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
