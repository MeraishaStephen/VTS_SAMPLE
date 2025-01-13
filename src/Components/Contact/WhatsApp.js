import React from "react";
import "./WhatsApp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const  WhatsApp = () => {
  return (
    <section className="contact-section">
      <div className="container">
    
        <a
          href="https://wa.me/8438164827" 
          className="whatsapp-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </section>
  );
};

export default WhatsApp;
