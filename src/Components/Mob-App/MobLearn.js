import React from "react";
import { FaMobileAlt, FaDollarSign, FaPaintBrush, FaBriefcase, FaGraduationCap, FaHandsHelping } from "react-icons/fa";
import './MobLearn.css';

function MobLearn() {
  const reasons = [
    {
      title: "High Demand ",
      icon: <FaMobileAlt />,
      description: "Mobile development is one of the fastest-growing fields. As more businesses focus on mobile-first strategies, there is a high demand for skilled developers.",
      color: "#FF6347",
    },
    {
      title: "Lucrative Salary",
      icon: <FaDollarSign />,
      description: "Mobile app developers are highly compensated. On average, salaries for mobile developers are higher than many other software development fields.",
      color: "#28a745",
    },
    {
      title: "Creative Freedom",
      icon: <FaPaintBrush />,
      description: "Mobile app development offers great creative freedom. You get to work on innovative solutions and impactful apps that can be used worldwide.",
      color: "#007bff",
    },
    {
      title: "Career Opportunities",
      icon: <FaBriefcase />,
      description: "With mobile development, you can work in various industries like healthcare, finance, entertainment, gaming, and more. Career paths are endless!",
      color: "#ffcc00",
    },
    {
      title: "Growth & Learning",
      icon: <FaGraduationCap />,
      description: "Mobile development technologies evolve rapidly. This field provides constant learning and the opportunity to stay ahead with new tools, frameworks, and practices.",
      color: "#6f42c1",
    },
    {
      title: "Impactful Work",
      icon: <FaHandsHelping />,
      description: "Mobile developers create apps that affect millions of people. The work you do can directly impact users’ lives, making it highly rewarding.",
      color: "#fd7e14",
    },
  ];

  return (
    <div className="mob-app-learn-container">
      <h1 className="mob-app-learn-title">Why Learn Mobile App Development?</h1>
      <div className="mob-app-learn-cards-container">
        {reasons.map((reason, index) => (
          <div key={index} className={`mob-app-learn-card mob-app-learn-card-${index + 1}`}>
            <div className="mob-app-learn-card-header" style={{ borderColor: reason.color }}>
              <span className="mob-app-learn-icon" style={{ color: reason.color }}>
                {reason.icon}
              </span>
              <h2 className="mob-app-learn-card-title">{reason.title}</h2>
            </div>
            <p className="mob-app-learn-card-description">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MobLearn;
