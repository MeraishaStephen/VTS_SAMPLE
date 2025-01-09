import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Logo */}
        <div className="logo-footer">
          <Link to="/">
            <h2>
              Vetri <br />
              <span>Technology Solutions</span>
            </h2>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/about">About Us</Link></li>
           <li><Link to="/courses">Courses</Link></li>
           <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

          {/* Policy Links */}
          <div className="footer-policy">
          <h3>Policy</h3>
          <ul>
            <li><Link to="/refund-policy">Refund and Returns Policy</Link></li>
            <li><Link to="/terms-service">Terms and Service</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/shipping-policy">Shipping and Delivery Policy</Link></li>
          </ul>
        </div>
      

        {/* Contact Details */}
        <div className="footer-contact">
          <h3>Contact Details</h3>
          <ul className="contact-list">
            <li>
              <FontAwesomeIcon icon={faPhone} className="icon" /> 8438164827
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="icon" /> joinvts@vetriit.com
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              VTS & VIS, April's Complex, Shanthi Complex, Surandai.
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="contact-social-icons">
            <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </a>
            <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="icon" />
            </a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
          </div>
        </div>

       
      </div>

      <div className="footer-bottom">
        <p>© 2025 Developed & Maintained by VETRI IT SYSTEMS PVT LTD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
