import React, { useState, useEffect } from "react";
import "./Event.css";
import img1 from "../images/WhatsApp Image 2025-01-07 at 12.06.23 PM.jpeg";
import img2 from "../images/WhatsApp Image 2025-01-07 at 12.06.25 PM.jpeg";
import img3 from "../images/WhatsApp Image 2025-01-07 at 12.06.26 PM (1).jpeg";
import img4 from "../images/WhatsApp Image 2025-01-07 at 12.06.26 PM.jpeg";
import img5 from "../images/WhatsApp Image 2025-01-07 at 12.06.27 PM.jpeg";
import img6 from "../images/WhatsApp Image 2025-01-07 at 2.45.05 PM.jpeg";
import img7 from "../images/WhatsApp Image 2025-01-07 at 12.06.28 PM.jpeg";
import img8 from "../images/WhatsApp Image 2025-01-07 at 12.06.29 PM.jpeg";
import img9 from "../images/WhatsApp Image 2025-01-07 at 12.06.30 PM.jpeg";
import img10 from "../images/WhatsApp Image 2025-01-07 at 2.45.04 PM.jpeg";
import img11 from "../images/WhatsApp Image 2025-01-07 at 12.06.28 PM (1).jpeg";
import img12 from "../images/off.JPG";
import img13 from "../images/alumni.jpg"

const images = [
  { src: img1, label: "Our Play Learn Science Founder Mr. Arumugam" },
  { src: img2, label: "Our Beloved Staff Birthday Celebration" },
  { src: img3, label: "Workshop on Java Full Stack Development" },
  { src: img4, label: "New Joiny Welcome Git" },
  { src: img5, label: "Final Year College Student Internship" },
  { src: img6, label: "UI/UX Designer Offer Letter" },
  { src: img7, label: "Software Developer Offer Letter" },
  { src: img8, label: "Our Founder Brother Mr. Siva Shankar" },
  { src: img9, label: "Successfully Completed Internship" },
  { src: img10, label: "Our New Office Work Station" },
  { src: img11, label: "Software Developer Offer Letter" },
  { src: img12, label: "Our New Office"},
  { src: img13, label: "Meet Our Alumni"},
];

function Event() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerRow = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const visibleImages = images
    .concat(images) // Continuous loop effect
    .slice(currentIndex, currentIndex + itemsPerRow);

  return (
    <div className="event-carousel-wrapper">
      <h1 className="event-carousel-title">
        Our Achievements & <span>Memories</span>
      </h1>
      <div className="event-carousel">
        <div className="event-carousel-container">
          {visibleImages.map((image, index) => (
            <div className="event-carousel-card" key={index}>
              <img src={image.src} alt={image.label} />
              <div className="event-card-overlay">
                <div className="event-card-text">{image.label}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="event-carousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`event-dot ${
                currentIndex % images.length === index ? "active" : ""
              }`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Event;
