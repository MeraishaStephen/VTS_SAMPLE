import React from 'react';
import './Home.css';
import heroImage from '../images/Home page image.jpg';
import { FaUserPlus } from "react-icons/fa";


const Home = () => {

    return (
        <div className="hero-section">
          <div className="hero-content">
            <h1>VTS is the India's No.1 Software Training Institute</h1>
            <p>Unlock the power of technology Learn, build, and grow with industry-leading<span> IT Training</span>. Join the leading IT institute in Surandai, offering expert trainers and 100% placement support. Gain industry relevant skills and launch your dream career with confidence.</p>
            <button className="enroll-button"><FaUserPlus className="home-icon" />Enroll Now</button>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Technology Empowerment" />
          </div>
        </div>
      );
    };
  


export default Home;