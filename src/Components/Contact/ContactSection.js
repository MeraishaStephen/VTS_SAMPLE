import React, { useState } from "react";
import "./ContactSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faUser,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    enquiry: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:joinvts@vetriit.com?subject=Enquiry%20from%20${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\nEnquiry: ${formData.enquiry}\nMessage: ${formData.message}`
    )}`;
    
    window.location.href = mailtoLink; 

    setFormData({
      name: "",
      email: "",
      whatsapp: "",
      enquiry: "",
      message: "",
    });
  };

  return (
    <section className="contact-section">
      <div className="container">
        {/* Left Side: Contact Information */}
        <div className="contact-left">
          <h2>
            Contact <span>Us</span>
          </h2>
          <p>
            Let us know your queries, feedbacks, and enquiries. We are here to
            support you 10.00 AM to 07.00 PM - Monday to Saturday (Excluding
            Public Tamilnadu Holidays)
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="details">
                <h4>Give us a call</h4>
                <p className="call-details">
                  8438164827 <span>/</span> 8438781327
                </p>
              </div>
            </div>
            <div className="item-border"></div>
            <div className="contact-item">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="details">
                <h4>Write to us</h4>
                <p>joinvts@vetriit.com</p>
              </div>
            </div>
            <div className="item-border"></div>
            <div className="contact-item">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="details">
                <h4>Visit us in Surandai @</h4>
                <p>
                  VETRI TECHNOLOGY SOLUTIONS & VETRI IT SYSTEMS PRIVATE LIMITED,
                  April's Complex, Shanthi Complex, Surandai, Tenkasi District.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-right">
          <h3>Say Hello!</h3>
          <p>Feel free to stop by and say hi!</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                <FontAwesomeIcon icon={faUser} className="input-icon" />
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label>
                <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label>
                <FontAwesomeIcon icon={faMobileAlt} className="input-icon" />
                WhatsApp Number
              </label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="Enter Your WhatsApp Number"
                required
              />
            </div>
            <div className="form-group">
              <label>Select the Enquiry You Required</label>
              <div className="custom-dropdown">
                <select
                  name="enquiry"
                  className="custom-select"
                  value={formData.enquiry}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Your Request Type
                  </option>
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
              <label>How Can We Help You?</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
              ></textarea>
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
