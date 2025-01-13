import React from "react";
import "./Certification.css";
import cert from '../images/VETRI VEERIYAN V _certificate.jpg';

function Certification() {
  return (
    <div className="certificate">
        <h1 className="certifi">VTS <span>Certificate</span></h1>
    <div className="certificate-container">
      <div className="certificate-header">
        <img src={cert} alt="Logo" className="certificate-logo" />
        <h1>VETRI TECHNOLOGY SOLUTIONS</h1>
        <p>COMPLETION CERTIFICATE</p>
      </div>
      <div className="certificate-body">
    
        <p>
        VTS provides you a Training Completion Certificate with an Online Verification & QR Code Verification. Once you complete the Training Successfully with VTS, you will receive an IT Job Offer/Guaranteed Internship with Stipend from our own IT Startup VETRI IT Systems Private Limited, Located at Surandai - Tenkasi District. 
        </p>
      </div>
    </div>
    </div>
  );
}

export default Certification;
