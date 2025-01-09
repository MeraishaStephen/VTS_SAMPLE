import React, { useState, useEffect } from 'react';
import './Carousel.css';
import img1 from '../images/wc1.914703a1104feac1d806 (1).gif';
import img2 from '../images/wc2.07dcf2aa7bc2b5868948 (1).gif';
import img3 from '../images/wc3.40874dc5a5a41b478ce0 (1).gif';
import img4 from '../images/wc4.18f6cf1bf224478b00b6.gif';
import img5 from '../images/wc5.d8d103fc651e9ea8ab2e.gif';
import img6 from '../images/wc6.8c4d232a08fa9e55604b.gif';

const Carousel = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalImages = images.length;
  const imagesPerRow = 3;

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalImages]);

  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < imagesPerRow; i++) {
      visibleImages.push(images[(currentIndex + i) % totalImages]); // Circular indexing
    }
    return visibleImages;
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {getVisibleImages().map((img, index) => (
          <div className="carousel-item" key={index}>
            <img src={img} alt={`carousel-image-${index}`} />
          </div>
        ))}
      </div>
      {/* Navigation dots */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );

  
};

export default Carousel;
