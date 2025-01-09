import React, { useState } from "react";
import "./UiUxDesign.css";
import { FaCalendarAlt, FaChalkboardTeacher, FaUserGraduate, FaCertificate, FaLaptop, FaProjectDiagram, FaHandshake, FaBriefcase, FaCheckCircle, FaBook, FaVideo, FaHome } from "react-icons/fa";
import uiux from '../images/uiux.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

const UiUxDesign = () => {
   
      const [showForm, setShowForm] = useState(false);
    
      const handleDownloadClick = () => {
        setShowForm(true);
      };
    
      const handleCloseForm = () => {
        setShowForm(false);
      };
    
      return (
        <div className="uiux-container">
          <div className="left-section">
            <h1>UI/UX Designing</h1>
            <p>
              A UI/UX course focusing on tools like Figma, Balsamiq, Adobe XD, Photoshop, and Illustrator
              teaches you to design intuitive, user-friendly digital interfaces. You'll learn wireframing (Balsamiq),
              prototyping (Figma, Adobe XD), and creating visually appealing designs (Photoshop, Illustrator).
              These tools enable crafting interactive designs, optimizing user experiences, and visual storytelling.
              The course covers best practices in user research, usability testing, and designing for various platforms,
              preparing you for roles like UI/UX Designer.
            </p>
            <h2 className="fees-animation">
              <FontAwesomeIcon icon={faIndianRupeeSign} className="fees-icon" />
              30,000 Inclusive of GST</h2>
            <button className="download-btn" onClick={handleDownloadClick}>Download Syllabus</button>
          </div>
          <div className="right-section">
            <div className="card">
              <img
                src={uiux}
                alt="UI/UX"
                className="card-image"
              />
               <ul className="card-content">
      <li>
        <span className="icon-with-text">
          <FaCalendarAlt className="icon" />
          <span>Duration</span>
        </span>
        <span className="value bright">90 Days</span>
      </li>
      <li>
        <span className="icon-with-text">
          <FaChalkboardTeacher className="icon" />
          <span>Training Mode</span>
        </span>
        <span className="value bright">Online/Offline</span>
      </li>
      <li>
        <span className="icon-with-text">
          <FaUserGraduate className="icon" />
          <span>Skill Level</span>
        </span>
        <span className="value bright">Expert</span>
      </li>
      <li>
        <span className="icon-with-text">
          <FaCertificate className="icon" />
          <span>Certification</span>
        </span>
        <span className="value bright">Yes</span>
      </li>
      <li>
        <span className="icon-with-text">
          <FaLaptop className="icon" />
          <span>Live Classes</span>
        </span>
        <span className="value bright">Yes</span>
      </li>
      <li>
        <span className="icon-with-text">
          <FaProjectDiagram className="icon" />
          <span>Live Project Training</span>
        </span>
        <span className="value bright">Yes</span>
      </li>
      <li>
        <span className="icon-with-text">
          <FaHandshake className="icon" />
          <span>Internship Offer</span>
        </span>
        <span className="value bright">Yes</span>
      </li>
      <li>
        <span className="icon-with-text">
          <FaBriefcase className="icon" />
          <span>Job Offer</span>
        </span>
        <span className="value bright">Yes</span>
      </li>
      <li>
        <span className="icon-with-text">
          <FaHome className="icon" />
          <span>Work From Home</span>
        </span>
        <span className="value bright">Yes</span>
      </li>
      <li>
        <span className="icon-with-text">
          <FaCheckCircle className="icon" />
          <span>Placement Assurance</span>
        </span>
        <span className="value bright">100%</span>
      </li>
      <li>
        <span className="icon-with-text">
          <FaBook className="icon" />
          <span>Training Material</span>
        </span>
        <span className="value bright">Yes</span>
      </li>
      <li>
        <span className="icon-with-text">
          <FaVideo className="icon" />
          <span>Training Recording</span>
        </span>
        <span className="value bright">Yes</span>
      </li>

    </ul>
            </div>
          </div>
          {showForm && (
            <div className="form-overlay">
              <div className="form-container">
                <button className="close-btn" onClick={handleCloseForm}>X</button>
                <h2>Fill Your Details For Download Syllabus</h2>
                <form className="download-form">
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter Your Name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter Your Email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="whatsapp">WhatsApp Number:</label>
                    <input type="text" id="whatsapp" name="whatsapp" placeholder="Enter Your WhatsApp Number" required />
                  </div>
                  <button type="submit" className="download-btn">Download Syllabus</button>
                </form>
              </div>
            </div>
          )}
        </div>
      );
    };
    
    

export default UiUxDesign;