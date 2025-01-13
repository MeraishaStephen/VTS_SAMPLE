import React from "react";
import "./Popup.css";

function Popup({ isOpen, onClose, imagePath }) {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <img src={imagePath} alt="Popup Animation" className="popup-image" />
        <button className="popup-close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
}

export default Popup;
