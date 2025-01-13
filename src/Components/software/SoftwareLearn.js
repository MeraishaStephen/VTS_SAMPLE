import React from "react";
import './SoftwareLearn.css'; 
import { FaUser, FaSuitcase, FaDollarSign, FaBookOpen, FaStar, FaToolbox } from 'react-icons/fa';


function SoftwareLearn() {
    return (
        <div id="software-learn">
            <div className="software-learn-container">
                <h1 className="section-title">Why Learn Software Testing?</h1>
                <div className="s-content-wrapper">
                    <div className="s-content-item">
                        <FaUser className="s-icon" />
                        <h3>Master Software Testing</h3>
                        <p>Start your journey with software testing, learning how to write test cases, identify defects, and ensure the quality of software products.</p>
                    </div>

                    <div className="s-content-item">
                        <FaSuitcase className="s-icon" />
                        <h3>Career Opportunities</h3>
                        <p>Software testers are in high demand across various industries, including IT, healthcare, finance, and e-commerce. Learn the skills needed to secure a rewarding job in this field.</p>
                    </div>

                    <div className="s-content-item">
                        <FaDollarSign className="s-icon" />
                        <h3>Attractive Salary</h3>
                        <p>Software testers can earn competitive salaries. On average, QA engineers and testers in the US make over $80,000 annually, depending on experience and location.</p>
                    </div>

                    <div className="s-content-item">
                        <FaBookOpen className="s-icon" />
                        <h3>Learning Resources</h3>
                        <p>Access a wide range of learning resources such as online courses, books, and tutorials. Platforms like Udemy, Coursera, and edX provide excellent content for mastering software testing.</p>
                    </div>

                    <div className="s-content-item">
                        <FaToolbox className="s-icon" />
                        <h3>Automation Testing</h3>
                        <p>Learn the importance of automation testing. Tools like Selenium and TestNG can improve the efficiency of testing processes in large-scale software applications.</p>
                    </div>

                    <div className="s-content-item">
                        <FaStar className="s-icon" />
                        <h3>Certifications</h3>
                        <p>Get certified in software testing with recognized certifications such as ISTQB or Certified Software Tester (CSTE) to enhance your career prospects.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SoftwareLearn;