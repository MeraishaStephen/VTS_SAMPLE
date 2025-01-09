import React from "react";
import "./AboutUs.css";
import aboutImage from "../images/abt1.png"; 

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container-abt">
            <h2>About <span>Us</span></h2>  
        <div className="about-us-content">
          <div className="about-us-image">
            <img src={aboutImage} alt="About Us" />
          </div>
          <div className="about-us-text">
  <h3>VTS BUILD THE SKILLS TO DRIVE YOUR</h3>
  <div className="span-wrapper">
    <span>IT CAREER!!</span>
  </div>
  <p>
    VTS is the No.1 Software Training Institute in Tamilnadu – Based
    out of Tenkasi & Tirunelveli providing 100% placement in our own
    IT Company <b style={{color:'#FF8016'}}>Vetri IT Systems</b> to the graduated students from IT
    and Non-IT streams.
  </p>
  <p>
    VTS has a team of highly experienced trainers who have worked on
    a wide range of projects and have a deep understanding of the
    development and testing process. We believe in providing hands-on
    training to our trainees, which helps them to gain practical
    experience and prepare them for real-world scenarios.
  </p>
</div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
