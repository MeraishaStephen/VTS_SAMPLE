import React from "react";
import "./NodeLearn.css";

function NodeLearn() {
  const nodeDetails = [
    {
      title: "Solid Foundation",
      content: "Master JavaScript fundamentals to excel in Node.js.",
      extra1: "Key Language Skills:",
      detail1: "Understand asynchronous programming and callbacks.",
      extra2: "Core Knowledge:",
      detail2: "Learn Node.js event loop and module systems.",
      icon: "🎓",
    },
    {
      title: "Career Opportunities",
      content: "Explore high-paying roles in backend development.",
      extra1: "Job Titles:",
      detail1: "Backend Developer, Full Stack Developer.",
      extra2: "Average Salary:",
      detail2: "$80k - $130k annually.",
      icon: "💼",
    },
    {
      title: "Popular Companies",
      content: "Learn tools and frameworks used by tech giants.",
      extra1: "Top Companies:",
      detail1: "Netflix, PayPal, LinkedIn.",
      extra2: "Backend Systems:",
      detail2: "Efficient and scalable services.",
      icon: "🏢",
    },
    {
      title: "Advanced Tools",
      content: "Master essential tools for Node.js development.",
      extra1: "Frameworks:",
      detail1: "Express.js, Socket.io, Koa.",
      extra2: "Databases:",
      detail2: "MongoDB, PostgreSQL.",
      icon: "🛠️",
    },
    {
      title: "High Demand",
      content: "Node.js skills are highly sought after globally.",
      extra1: "Industry Demand:",
      detail1: "Growing need for scalable backend developers.",
      extra2: "Full Stack Edge:",
      detail2: "Combining frontend and backend expertise.",
      icon: "📈",
    },
    {
      title: "Flexible Ecosystem",
      content: "Create RESTful APIs and real-time applications.",
      extra1: "APIs:",
      detail1: "Learn to build scalable RESTful APIs.",
      extra2: "Real-time Apps:",
      detail2: "Build chat apps and live collaboration tools.",
      icon: "🌐",
    },
  ];

  return (
    <div id='learn'>
    <div className="back-node-container">
      <h1 className="node-title">Why Learn Node.js?</h1>
      <p className="node-description">
        Kickstart your backend development journey with Node.js! Explore essential skills, career opportunities, and advanced tools.
      </p>
      <div className="node-cards">
        {nodeDetails.map((detail, index) => (
          <div key={index} className="node-card">
            <div className="node-icon animated-icon">{detail.icon}</div>
            <h3 className="node-card-title">{detail.title}</h3>
            <p className="node-card-content">{detail.content}</p>
            <p>
              <strong>{detail.extra1}</strong> {detail.detail1}
            </p>
            <p>
              <strong>{detail.extra2}</strong> {detail.detail2}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default NodeLearn;
