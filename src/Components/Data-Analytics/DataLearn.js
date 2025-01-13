import React from 'react';
import './DataLearn.css';
import { FaDatabase, FaChartBar, FaDollarSign, FaUsers, FaBriefcase, FaCogs } from 'react-icons/fa';

function DataLearn() {
  return (
    <div className="data-learns-container">
      <h1 className="data-learns-title">Learn Data Analytics</h1>
      <p className="data-learns-subtitle">Master the skills for data analysis, career growth, and high-paying opportunities</p>
      
      <div className="data-learns-cards">
        <div className="data-learns-card">
          <div className="data-learns-card-header">
            <FaDatabase className="data-learns-icon" />
            <h3>Core Concepts</h3>
          </div>
          <p>Learn the fundamentals of data analytics, including data collection, cleaning, and analysis.</p>
          <div className="data-learns-card-footer">
          </div>
        </div>

        <div className="data-learns-card">
          <div className="data-learns-card-header">
            <FaChartBar className="data-learns-icon" />
            <h3>Visualization</h3>
          </div>
          <p>Understand how to present data visually using tools like Tableau and PowerBI.</p>
          <div className="data-learns-card-footer">
          </div>
        </div>

        <div className="data-learns-card">
          <div className="data-learns-card-header">
            <FaDollarSign className="data-learns-icon" />
            <h3>Salary Insights</h3>
          </div>
          <p>Explore the earning potential and career growth in the field of data analytics.</p>
          <div className="data-learns-card-footer">
          </div>
        </div>

        <div className="data-learns-card">
          <div className="data-learns-card-header">
            <FaUsers className="data-learns-icon" />
            <h3>Opportunities</h3>
          </div>
          <p>Discover the job roles and companies looking for data analytics professionals.</p>
          <div className="data-learns-card-footer">
          </div>
        </div>

        <div className="data-learns-card">
          <div className="data-learns-card-header">
            <FaBriefcase className="data-learns-icon" />
            <h3>Job Roles</h3>
          </div>
          <p>Explore different career paths like Data Scientist, Data Engineer, and Data Analyst.</p>
          <div className="data-learns-card-footer">
          </div>
        </div>

        <div className="data-learns-card">
          <div className="data-learns-card-header">
            <FaCogs className="data-learns-icon" />
            <h3>Tools & Techniques</h3>
          </div>
          <p>Get hands-on experience with industry-standard tools like Python, R, SQL, and more.</p>
          <div className="data-learns-card-footer">
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataLearn;
