import React from "react";
import "../uiux/UiUxDesign.css";
import { FaCalendarAlt, FaChalkboardTeacher, FaUserGraduate, FaCertificate, FaLaptop, FaProjectDiagram, FaHandshake, FaBriefcase, FaCheckCircle, FaBook, FaVideo, FaHome } from "react-icons/fa";
import uiux from "../images/Mern fullstack developer.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

const MernStack = () => {
  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = "/brochure/MERN STACK.pdf"
    link.download = "Mern_Stack_Syllabus.pdf"; 
    link.click();
  };

  return (
    <div className="pro-main">
        <h1>Mern Stack <span>Developer</span></h1>
      <div className="uiux-container">
      <div className="left-section">
        <p>
        The MERN stack is a popular JavaScript based framework

used for building full-stack web applications. It includes 

MongoDB (a NoSQL database), Express.js (a back-end 

web framework), React.js and Node.js The Software

Development Life Cycle (SDLC) for a MERN stack 

application typically involves stages such as planning, 

design, development, testing, deployment, and 

maintenance. HTML, CSS, and JavaScript are

foundational technologies used to structure, style, and 

add interactivity to the front end, while Node.js and

Express handle server-side operations and database 

interactions, all seamlessly integrated using JavaScript 

across the stack.
        </p>
        <h2 className="fees-animation">
          <FontAwesomeIcon icon={faIndianRupeeSign} className="fees-icon" />
          25,000 Incl of GST
        </h2>
        <button className="download-btn" onClick={handleDownloadClick}>
          Download Syllabus
        </button>
      </div>
      <div className="right-section">
        <div className="work-card">
          <img src={uiux} alt="UI/UX" className="card-image" />
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
    </div>
    </div>
  );
};

export default MernStack;
