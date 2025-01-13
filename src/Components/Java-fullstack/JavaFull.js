import React from "react";
import "../uiux/UiUxDesign.css";
import { FaCalendarAlt, FaChalkboardTeacher, FaUserGraduate, FaCertificate, FaLaptop, FaProjectDiagram, FaHandshake, FaBriefcase, FaCheckCircle, FaBook, FaVideo, FaHome } from "react-icons/fa";
import uiux from "../images/Java Fullstack developer.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

const JavaFull = () => {
  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = "/brochure/JAVA FULLSTACK.pdf"
    link.download = "Java_Fullstack_Syllabus.pdf"; 
    link.click();
  };

  return (
    <div className="pro-main">
        <h1>Java Fullstack <span>Developer</span></h1>
      <div className="uiux-container">
      <div className="left-section">
        <p>
        Java Fullstack development involves creating comprehensive web 

applications that handle both the client-side and server-side.On

 the front end, technologies like HTML, CSS, Bootstrap, and 

JavaScript are used to build responsive and interactive user 

interfaces. The back end is powered by Java, J2EE, and frameworks

like Hibernate for ORM (Object Relational Mapping), ensuring

efficient database interactions with MySQL. RESTful APIs 

facilitate communication between the front and back ends. 

Adhering to SDLC phases ensures systematic development, 

while Agile methodologies promote flexibility and collaboration. 

Proficiency in Data Structures enhances performance and 

problem-solving, making it crucial for a Java Fullstack developer.
        </p>
        <h2 className="fees-animation">
          <FontAwesomeIcon icon={faIndianRupeeSign} className="fees-icon" />
          36,000 Incl of GST
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

export default JavaFull;
