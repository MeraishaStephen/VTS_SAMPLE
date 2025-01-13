import React from "react";
import './BackendJavaLearn.css';
import { FaJava, FaBriefcase, FaDollarSign, FaRocket, FaCode, FaDatabase } from "react-icons/fa";

function BackendJavaLearn() {
    const details = [
        {
            icon: <FaJava />,
            front: "Learn Java Backend Development",
            back: "Java is platform-independent, versatile, and widely used in enterprise applications, making it a must-learn language for backend development.",
        },
        {
            icon: <FaBriefcase />,
            front: "Career Opportunities",
            back: "Java backend developers are in demand across industries, with roles like Backend Developer, Software Engineer, and Java Developer.",
        },
        {
            icon: <FaDollarSign />,
            front: "Salary Insights",
            back: "Java backend developers earn competitive salaries ranging from $70,000 to $120,000 annually.",
        },
        {
            icon: <FaRocket />,
            front: "Future Growth",
            back: "Java remains one of the most popular programming languages, ensuring long-term career growth and stability in the tech industry.",
        },
        {
            icon: <FaCode />,
            front: "Technical Skills",
            back: "Master frameworks like Spring Boot, Hibernate, and REST APIs to build robust and scalable applications.",
        },
        {
            icon: <FaDatabase />,
            front: "Database Expertise",
            back: "Work with MySQL, Oracle, or NoSQL databases like MongoDB to manage backend data efficiently.",
        }
    ];

    return (
        <div id="backjav-learn">
            <h1>Why Learn Java Backend Development?</h1>
            <div className="back-java-learn-container">
                <p className="main-p">Discover why Java is a top choice for backend development and how it can elevate your career!</p>
                <div className="card-grid-backjav-learn">
                    {details.map((detail, index) => (
                        <div className="card-container" key={index}>
                            <div className="bj-card" data-index={index}>
                                <div className="icon-backjav-learn">{detail.icon}</div>
                                <p><strong>{detail.front}</strong></p>
                                <div className="card-back">
                                    <p>{detail.back}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BackendJavaLearn;
