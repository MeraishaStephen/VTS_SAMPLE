import React from "react";
import "../python-fullstack/Pythonfull.css";
import { FaCalendarAlt, FaChalkboardTeacher, FaUserGraduate, FaCertificate, FaLaptop, FaProjectDiagram, FaHandshake, FaBriefcase, FaCheckCircle, FaBook, FaVideo, FaHome } from "react-icons/fa";
import aws from "../images/aws.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

const Aws = () => {
  const handleDownloadClick = () => {

    const link = document.createElement("a");
    link.href = "/brochure/AWS.pdf"; 
    link.download = "Aws_Syllabus.pdf"; 
    link.click();
  };

  return (
    <div className="pro-main">
        <h1>AWS <span>Training</span></h1>
        <div className="uiux-container">
      <div className="left-section">
        <p>
        Amazon Web Services (AWS) offers a wide range of cloud

computing services. EC2 (Elastic Compute Cloud), S3

(Simple Storage Service), RDS (Relational Database Service)

Networking services in AWS include VPC (Virtual Private 

Cloud), which enables users to create isolated networks.

DynamoDB is a fast NoSQL database, and Aurora is a fully 

managed, highly available relational database compatible 

with MySQL and PostgreSQL. These services are designed

 to enable secure, scalable, and flexible cloud infrastructure.
        </p>
        <h2 className="fees-animation">
          <FontAwesomeIcon icon={faIndianRupeeSign} className="fees-icon" />
          30,000 Incl of GST
        </h2>
        <button className="download-btn" onClick={handleDownloadClick}>
          Download Syllabus
        </button>
      </div>
      <div className="right-section">
        <div className="work-card">
          <img src={aws} alt="UI/UX" className="card-image" />
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

export default Aws;
