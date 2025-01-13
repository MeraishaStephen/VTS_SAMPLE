import React from "react";
import "../python-fullstack/Pythonfull.css";
import { FaCalendarAlt, FaChalkboardTeacher, FaUserGraduate, FaCertificate, FaLaptop, FaProjectDiagram, FaHandshake, FaBriefcase, FaCheckCircle, FaBook, FaVideo, FaHome } from "react-icons/fa";
import front from "../images/Frontend development.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

const Frontend = () => {
  const handleDownloadClick = () => {

    const link = document.createElement("a");
    link.href = "/brochure/FRONTEND (1).pdf"; 
    link.download = "Frontend_Syllabus.pdf"; 
    link.click();
  };

  return (
    <div className="pro-main">
        <h1>Frontend <span>Developer</span></h1>
        <div className="uiux-container">
      <div className="left-section">
        <p>
        A Frontend Developer course typically covers the 

essential skills needed to build dynamic and visually

appealing web interfaces. It starts with HTML for 

structuring web content, CSS for styling, and JavaScript

(JS) for adding interactivity. Advanced topics often

include React.js, a popular JavaScript library for

building efficient and scalable user interfaces. 

Additionally, the course may explore Software 

Development Life Cycle (SDLC) to understand 

project workflows and Software Testing Life Cycle

 (STLC) to ensure code quality through testing.
        </p>
        <h2 className="fees-animation">
          <FontAwesomeIcon icon={faIndianRupeeSign} className="fees-icon" />
          15,000 Incl of GST
        </h2>
        <button className="download-btn" onClick={handleDownloadClick}>
          Download Syllabus
        </button>
      </div>
      <div className="right-section">
        <div className="work-card">
          <img src={front} alt="UI/UX" className="card-image" />
          <ul className="card-content">
            <li>
              <span className="icon-with-text">
                <FaCalendarAlt className="icon" />
                <span>Duration</span>
              </span>
              <span className="value bright">60 Days</span>
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
    </div>
    </div>
  );
};

export default Frontend;
