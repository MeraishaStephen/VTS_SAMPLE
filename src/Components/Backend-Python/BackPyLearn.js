import React from "react";
import './BackPyLearn.css';
import { FaCode, FaBriefcase, FaMoneyBillWave, FaNetworkWired, FaRocket, FaCogs } from "react-icons/fa";

function BackPyLearn() {
  return (
    <div id="back-py-learn">
    <div className="backpy-learn-container">
      <h1 className="backpy-learn-title">Why Learn Backend Development with Python?</h1>
      <div className="backpy-learn-cards">
        <div className="backpy-learn-card">
          <div className="backpy-learn-card-header">
            <FaCode className="backpy-learn-icon" />
            <h2 className="backpy-learn-card-title">Easy to Learn</h2>
          </div>
          <div className="backpy-learn-card-body">
            <p><strong>Beginner-Friendly:</strong> Python has simple syntax, making it easy for newcomers to start.</p>
            <p><strong>High Readability:</strong> Code is easier to understand and maintain.</p>
            <p><strong>Versatile Language:</strong> Used in web, data science, and AI applications.</p>
          </div>
        </div>

        <div className="backpy-learn-card">
          <div className="backpy-learn-card-header">
            <FaNetworkWired className="backpy-learn-icon" />
            <h2 className="backpy-learn-card-title">Robust Frameworks</h2>
          </div>
          <div className="backpy-learn-card-body">
            <p><strong>Django:</strong> High-level framework for fast development.</p>
            <p><strong>Flask:</strong> Lightweight for smaller projects.</p>
            <p><strong>Scalability:</strong> Ideal for large, complex applications.</p>
          </div>
        </div>

        <div className="backpy-learn-card">
          <div className="backpy-learn-card-header">
            <FaBriefcase className="backpy-learn-icon" />
            <h2 className="backpy-learn-card-title">Career Opportunities</h2>
          </div>
          <div className="backpy-learn-card-body">
            <p><strong>Backend Developer:</strong> Build and maintain server-side logic.</p>
            <p><strong>Data Engineer:</strong> Handle large-scale data processing.</p>
            <p><strong>API Specialist:</strong> Create and manage RESTful services.</p>
          </div>
        </div>

        <div className="backpy-learn-card">
          <div className="backpy-learn-card-header">
            <FaMoneyBillWave className="backpy-learn-icon" />
            <h2 className="backpy-learn-card-title">High Salaries</h2>
          </div>
          <div className="backpy-learn-card-body">
            <p><strong>Lucrative Careers:</strong> Backend developers earn competitive salaries.</p>
            <p><strong>Global Demand:</strong> Opportunities in almost every industry.</p>
            <p><strong>Freelancing:</strong> High earning potential for independent developers.</p>
          </div>
        </div>

        <div className="backpy-learn-card">
          <div className="backpy-learn-card-header">
            <FaRocket className="backpy-learn-icon" />
            <h2 className="backpy-learn-card-title">Growing Field</h2>
          </div>
          <div className="backpy-learn-card-body">
            <p><strong>Industry Growth:</strong> Constant demand for skilled developers.</p>
            <p><strong>Innovation:</strong> Backend roles contribute to cutting-edge projects.</p>
            <p><strong>Advancement:</strong> Opportunities to learn and grow quickly.</p>
          </div>
        </div>

        <div className="backpy-learn-card">
          <div className="backpy-learn-card-header">
            <FaCogs className="backpy-learn-icon" />
            <h2 className="backpy-learn-card-title">Problem Solving</h2>
          </div>
          <div className="backpy-learn-card-body">
            <p><strong>Critical Thinking:</strong> Backend roles require innovative solutions.</p>
            <p><strong>Optimization:</strong> Improve system performance and reliability.</p>
            <p><strong>Collaboration:</strong> Work with cross-functional teams for success.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default BackPyLearn;
