import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-icon-heading">
        <FaShieldAlt className="privacy-page-icon" />
        <h1 className="privacy-heading">Privacy Policy</h1>
      </div>
      <p className="privacy-paragraph">
        At Vetri Technology Solutions, we value your privacy. Here's how we protect your data:
      </p>
      <ul className="privacy-list">
        <li className="privacy-list-item">We collect only necessary information to provide services.</li>
        <li className="privacy-list-item">Your data is stored securely and encrypted.</li>
        <li className="privacy-list-item">We do not share your information with third parties without consent.</li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
