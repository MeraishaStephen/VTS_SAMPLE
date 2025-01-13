import React from "react";
import './FrontendLearn.css';
import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaBook } from 'react-icons/fa'; 

function FrontendLearn() {
    return (
        <div id="frontend-learn">
            <div className="frontend-learn-container">
                <h1 className="f-section-title">Why Learn Frontend Development?</h1>
                <div className="f-content-wrapper">
                    <div className="f-content-item">
                        <FaHtml5 className="f-icon" />
                        <h3 class="f-h3"> HTML, CSS & JavaScript</h3>
                        <p class="f-p">  Learn how HTML structures web pages, CSS styles them, and JavaScript adds interactivity the technologies of frontend development.</p>
                    </div>

                    <div className="f-content-item">
                        <FaCss3 className="f-icon" />
                        <h3 class="f-h3">Build Beautiful Websites</h3>
                        <p class="f-p">Learn how to style and design stunning websites using CSS, ensuring they are responsive and user-friendly across devices.</p>
                    </div>

                    <div className="f-content-item">
                        <FaJsSquare className="f-icon" />
                        <h3 class="f-h3">Interactive Web Experiences</h3>
                        <p class="f-p">JavaScript powers the interactivity of modern websites. Master JavaScript to create dynamic, interactive elements on your sites.</p>
                    </div>

                    <div className="f-content-item">
                        <FaReact className="f-icon" />
                        <h3 class="f-h3">Work with Frontend Frameworks</h3>
                        <p class="f-p">Learn frameworks like React, Angular, or Vue.js to build efficient, scalable, and maintainable web applications.</p>
                    </div>

                    <div className="f-content-item">
                        <FaBook className="f-icon" />
                        <h3 class="f-h3">Learning Resources</h3>
                        <p class="f-p">Access a wide range of tutorials, courses, coding bootcamps, and community support to enhance your frontend development skills.</p>
                    </div>

                  
                </div>
            </div>
        </div>
    );
}

export default FrontendLearn;
