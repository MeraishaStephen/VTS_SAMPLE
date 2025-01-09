import React, { useState } from "react";
import "./ContactSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt, faUser, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <section className="contact-section">
      <div className="container">
        {/* Left Side: Contact Information */}
        <div className="contact-left">
          <h2>Contact <span>Us</span></h2>
          <p>
            Let us know your queries, feedbacks, and enquiries. We are here to
            support you 24/7.
          </p>
          <div className="contact-info">
            {/* Call Us */}
            <div className="contact-item">
              <div className="contact-icon">
               <FontAwesomeIcon icon={faPhone}  /> 
              </div>
              <div className="details">
                <h4>Give us a call</h4>
                <p>8438164827</p>
              </div>
            </div>
            <div className="item-border"></div>
            {/* Email Us */}
            <div className="contact-item">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faEnvelope}/>
              </div>
              <div className="details">
                <h4>Write to us</h4>
                <p>joinvts@vetriit.com</p>
              </div>
            </div>
            <div className="item-border"></div>
            {/* Visit Us */}
            <div className="contact-item">
              <div className="contact-icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="details">
                <h4>Visit us in Surandai @</h4>
                <p>
                  VTS & VIS, April's Complex, Shanthi Complex, Surandai.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-right">
          <h3>Say Hello!</h3>
          <p>Feel free to stop by and say hi!</p>
          <form>
            <div className="form-group">
              <label> <FontAwesomeIcon icon={faUser} className="input-icon" />Name</label>
              <input type="text" placeholder="Enter the Name"  required/>
            </div>
            <div className="form-group">
              <label><FontAwesomeIcon icon={faEnvelope} className="input-icon" />Email</label>
              <input type="email" placeholder="Enter the Email" required/>
            </div>
            <div className="form-group">
              <label><FontAwesomeIcon icon={faMobileAlt} className="input-icon" /> Mobile Number</label>
              <input type="tel" placeholder="Enter the Mobile Number" required/>
            </div>
            <div className="form-group">
              <label>Select an Option</label>
              <div className="custom-dropdown">
        <select
          className="custom-select"
          value={selectedValue}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select Your Request Type</option>
          <option value="frontend">🎨 Frontend Developer</option>
          <option value="backend">🔧 Backend Developer (Python)</option>
          <option value="node">🛠️ Backend Developer (Node.js)</option>
          <option value="java">☕ Backend Developer (Java)</option>
          <option value="mern">💻 MERN Stack Developer</option>
          <option value="pyfull">🐍 Python Fullstack Developer</option>
          <option value="javfull">☕ Java Fullstack Developer</option>
          <option value="mob">📱 Mobile App Development</option>
          <option value="analytics">📊 Data Analytics</option>
          <option value="science">🔬 Data Science</option>
          <option value="uiux">✨ UI/UX Design</option>
          <option value="digital">📈 Digital Marketing</option>
          <option value="software">🔍 Software Testing</option>
          <option value="aws">☁️ AWS</option>
          <option value="business">📉 Business Analytics</option>
          <option value="feedback">💬 Feedback</option>
          <option value="general">🌐 General</option>
          <option value="other">❓ Other</option>
        </select>
      </div>
            </div>
            <div className="form-group">
              <label>How can I help you?</label>
              <textarea placeholder="Type your message here..."></textarea>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
