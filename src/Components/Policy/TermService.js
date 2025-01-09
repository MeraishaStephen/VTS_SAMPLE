import React from "react";
import { FaFileAlt } from "react-icons/fa";
import './TermService.css';

const TermService = () => {
  return (
    <div className="terms-page">
      <div className="terms-icon-heading">
        <FaFileAlt className="terms-page-icon" />
        <h1 className="terms-heading">Terms of Service</h1>
      </div>
      <p className="terms-paragraph">
        By using our services, you agree to the following terms:
      </p>
      <ul className="terms-list">
        <li className="terms-list-item">You must comply with all local laws and regulations.</li>
        <li className="terms-list-item">Unauthorized use of our services is prohibited.</li>
        <li className="terms-list-item">We reserve the right to modify these terms at any time.</li>
      </ul>
    </div>
  );
};

export default TermService;
