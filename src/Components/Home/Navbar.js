import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.jpg';
import vetri from '../images/abt3-removebg-preview.png';
import {
  FaPython,
  FaJava,
  FaPaintBrush,
  FaBug,
  FaNodeJs,
  FaCode,
  FaServer,
  FaReact,
  FaBullhorn,
  FaCloud,
  FaChartLine,
  FaDatabase,
  FaMobileAlt,
  FaChartBar,
  FaChevronDown
} from 'react-icons/fa';

const Navbar = () => {
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);

  const toggleMegaMenu = () => {
    setMegaMenuOpen(!isMegaMenuOpen);
  };

  return (
    <nav className="navbar">
      <div class="logo-container">
      <div className="logo">
        <img src={logo} alt="Main Logo" className="logo-img" />
        <img src={vetri} alt="Extra Logo" className="extra-logo" />
      </div>

{/* Confetti Elements with Correct Inline Style Syntax */}
      <div className="confetti" style={{ left: '10%', animationDelay: '0s', background: '#FFD700' }}></div>
      <div className="confetti" style={{ left: '30%', animationDelay: '0.5s', background: '#FF4500' }}></div>
      <div className="confetti" style={{ left: '50%', animationDelay: '1s', background: '#32CD32' }}></div>
      <div className="confetti" style={{ left: '70%', animationDelay: '1.5s', background: '#1E90FF' }}></div>
      <div className="confetti" style={{ left: '90%', animationDelay: '2s', background: '#FF69B4' }}></div>

      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li className="nav-link mega-menu" onClick={toggleMegaMenu}>
        <span>Courses</span>
          <FaChevronDown className={`chevron-icon ${isMegaMenuOpen ? "rotate" : ""}`}/> 
           {isMegaMenuOpen && (
            <div className="mega-menu-content">
              <Link to="/python" className="mega-item">
                <FaPython className="icon-nav" />
                Python Full Stack
              </Link>
              <Link to="/java" className="mega-item">
                <FaJava className="icon-nav" />
                Java Full Stack
              </Link>
              <Link to="/ui-ux" className="mega-item">
                <FaPaintBrush className="icon-nav" />
                UI/UX Designing
              </Link>
              <Link to="/software-testing" className="mega-item">
                <FaBug className="icon-nav" />
                Software Testing
              </Link>
              <Link to="/node" className="mega-item">
                <FaNodeJs className="icon-nav" />
                Backend Developer (Node.js)
              </Link>
              <Link to="/frontend-developer" className="mega-item">
                <FaCode className="icon-nav" />
                Frontend Developer
              </Link>
              <Link to="/backend-java" className="mega-item">
                <FaServer className="icon-nav" />
                Backend Developer (Java)
              </Link>
              <Link to="/mern-stack" className="mega-item">
                <FaReact className="icon-nav" />
                MERN Stack Developer
              </Link>
              <Link to="/digital-marketing" className="mega-item">
                <FaBullhorn className="icon-nav" />
                Digital Marketing
              </Link>
              <Link to="/aws" className="mega-item">
                <FaCloud className="icon-nav" />
                AWS
              </Link>
              <Link to="/business-analytics" className="mega-item">
                <FaChartLine className="icon-nav" />
                Business Analytics
              </Link>
              <Link to="/backend-python" className="mega-item">
                <FaPython className="icon-nav" />
                Backend Developer (Python)
              </Link>
              <Link to="/data-science" className="mega-item">
                <FaDatabase className="icon-nav" />
                Data Science
              </Link>
              <Link to="/mobile-app" className="mega-item">
                <FaMobileAlt className="icon-nav" />
                Mobile App Development
              </Link>
              <Link to="/data-analytics" className="mega-item">
                <FaChartBar className="icon-nav" />
                Data Analytics
              </Link>
            </div>
          )}
        </li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <button className="enquiry-button">Enquiry</button>
    </nav>
  );
};

export default Navbar;
