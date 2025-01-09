import React from "react";
import { FaVideo } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./BestCourse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import img1 from '../images/Frontend development.jpg';
import img2 from '../images/UI UX Design.jpg';
import img3 from '../images/python fullstack developer.jpg';
import img4 from '../images/Java Fullstack developer.jpg';
import img5 from '../images/Python backend developer.jpg';
import img6 from '../images/Java backend developer.jpg';
import img7 from '../images/Node js Backend developer.jpg';
import img8 from '../images/Data Analytics Img.jpg';
import img9 from '../images/Data Science.jpg';
import img10 from '../images/Mern fullstack developer.jpg';
import img11 from '../images/Business Analytics.jpg';
import img12 from '../images/Software Testing.jpg';
import img13 from '../images/Digital Marketing.jpg';
import img14 from '../images/Mobile app development.jpg';
import img15 from '../images/aws.jpg';

const courses = [
  { id: 1, title: "Python Fullstack Developer", duration: "90 Days", price: "30,000", image: img3 },
  { id: 2, title: "Java Fullstack Developer", duration: "90 Days", price: "36,000", image: img4 },
  { id: 3, title: "UI/UX Designing", duration: "90 Days", price: "25,000", image: img2, route: "/ui-ux" },
  { id: 4, title: "Data Analytics", duration: "60 Days", price: "25,000", image: img8 },
  { id: 5, title: "Data Science", duration: "90 Days", price: "30,000", image: img9 },
  { id: 6, title: "MERN Stack Developer", duration: "90 Days", price: "25,000", image: img10 },
  { id: 7, title: "Mobile App Development", duration: "120 Days", price: "45,000", image: img14 },
  { id: 8, title: "Software Testing", duration: "90 Days", price: "20,000", image: img12 },
  { id: 9, title: "Front-End Developer", duration: "60 Days", price: "15,000", image: img1 },
  { id: 10, title: "Python Backend Developer", duration: "60 Days", price: "15,000", image: img5 },
  { id: 11, title: "Java Backend Developer", duration: "60 Days", price: "15,000", image: img6 },
  { id: 12, title: "Node JS Backend Developer", duration: "90 Days", price: "15,000", image: img7 },
  { id: 13, title: "AWS", duration: "90 Days", price: "30,000", image: img15 },
  { id: 14, title: "Business Analytics", duration: "60 Days", price: "15,000", image: img11 },
  { id: 15, title: "Digital Marketing", duration: "60 Days", price: "10,000", image: img13 },
];

const BestCourse = () => {

  const navigate = useNavigate();

  return (
    <section className="best-course-section">
      <h2 className="section-title">Our <span>Best</span> Trainings</h2>
      <p className="section-subtitle">
        Choosing the best course in the IT sector will allow you to grow more professionally and will increase your social network.
      </p>
      <div className="course-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={course.id}>
            <div className="main-part1">
            <div className={`placement-badge ${index < 3 ? "badge-assurance" : "badge-assistance"}`}>
              {index < 3 ? "Placement Assurance" : "Placement Assistance"}
            </div>
            <div className="live-classes-badge">
                <FaVideo className="course-icon1" />
                 Live Classes
            </div>            
            <img src={course.image} alt={`Course on ${course.title}`} className="course-image" />
            </div>
            <div className="main-part">
            <h3 className="course-title">{course.title}</h3>
            
            <div className="course-details">

              <span className="course-item">
                <FontAwesomeIcon icon={faClock} className="course-icon" />
                <span className="course-text1">{course.duration}</span>
              </span>
              <button
              className="join-button"
              onClick={() => navigate(course.route)}
            >
              Know More
            </button> 
             
            </div>
            <span className="course-item">
                <FontAwesomeIcon icon={faIndianRupeeSign} className="course-icon" />
                <span className="course-text">{course.price} (Inclusive of GST)</span>
            </span>
            </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default BestCourse;
