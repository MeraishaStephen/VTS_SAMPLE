import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaMoneyBillWave, FaBriefcase } from 'react-icons/fa';
import './MernLearn.css';

function MernLearn(){
    return(
        <div id="mern-learn">
        <div className="mern-learn-container">
              <h1 className="mern-learn-header">Why Learn MERN Stack?</h1>
            <div className="mern-learn-main">
                
                 <div className="main-learn-content2">
                    <div className="content-item-mern1">
                        <FaReact className="icon-mern" />
                        <h3>Why Learn MERN Stack?</h3>
                        <p>Learn MERN Stack to become a versatile full-stack developer with expertise in front-end and back-end technologies.</p>
                    </div>
                    <div className="content-item-mern2">
                        <FaNodeJs className="icon-mern" />
                        <h3>Build Full-Stack Applications</h3>
                        <p>With MERN, you can build modern web apps that are highly interactive, scalable, and optimized for performance.</p>
                    </div>
                </div>

                <div className="main-learn-content3">
                    <div className="content-item-mern3">
                        <FaDatabase className="icon-mern" />
                        <h3>Work with MongoDB</h3>
                        <p>Learn MongoDB, a NoSQL database, to manage large datasets and store information in a flexible, schema-less way.</p>
                    </div>
                    <div className="content-item-mern4">
                        <FaCode className="icon-mern" />
                        <h3>Develop with JavaScript</h3>
                        <p>MERN uses JavaScript for both the front-end (React) and back-end (Node.js), making it easier to master one language.</p>
                    </div>
                </div>

                <div className="main-learn-content3">
                    <div className="content-item-mern5">
                        <FaMoneyBillWave className="icon-mern" />
                        <h3>Attractive Salary</h3>
                        <p>MERN stack developers are in high demand. On average, they earn between $70,000 to $120,000 annually depending on experience and location.</p>
                    </div>
                    <div className="content-item-mern6">
                        <FaBriefcase className="icon-mern" />
                        <h3>Career Opportunities</h3>
                        <p>As a MERN stack developer, you can work in various industries such as tech, finance, healthcare, and e-commerce.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default MernLearn;
