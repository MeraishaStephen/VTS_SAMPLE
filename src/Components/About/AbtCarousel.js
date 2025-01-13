import React, { useState } from 'react';
import './AbtCarousel.css';
import img1 from '../images/vts-banner/WhatsApp Image 2025-01-07 at 12.06.31 PM (1).jpeg';
import img2 from '../images/vts-banner/WhatsApp Image 2025-01-07 at 12.06.31 PM.jpeg';
import img3 from '../images/vts-banner/WhatsApp Image 2025-01-07 at 12.06.38 PM.jpeg';
import img4 from '../images/vts-banner/WhatsApp Image 2025-01-07 at 12.06.39 PM (2).jpeg';
import img5 from '../images/vts-banner/WhatsApp Image 2025-01-07 at 12.06.39 PM.jpeg';
import img6 from '../images/vts-banner/WhatsApp Image 2025-01-07 at 12.06.33 PM.jpeg';
import img7 from '../images/vts-banner/WhatsApp Image 2025-01-07 at 12.06.37 PM (1).jpeg';
import img8 from '../images/vts-banner/WhatsApp Image 2025-01-07 at 12.06.39 PM (1).jpeg';
import img9 from '../images/vts-banner/WhatsApp Image 2025-01-07 at 12.06.37 PM (3).jpeg';
import img10 from '../images/vts-banner/WhatsApp Image 2025-01-07 at 12.06.38 PM (1).jpeg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

function AbtCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerRow = 3; 

    const totalSlides = images.length;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + totalSlides) % totalSlides
        );
    };

    const getVisibleImages = () => {
        const visibleImages = [];
        for (let i = 0; i < itemsPerRow; i++) {
            visibleImages.push(
                images[(currentIndex + i) % totalSlides] // Circular indexing
            );
        }
        return visibleImages;
    };

    return (
        <div className="abt-carousel-container">
              <h1>👍Join Us <span>Today!</span></h1>
            <button className="abt-carousel-arrow abt-left" onClick={prevSlide}>
                &#8592;
            </button>
            <div className="abt-carousel-wrapper">
                {getVisibleImages().map((img, index) => (
                    <div className="abt-carousel-item" key={index}>
                        <img src={img} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
            <button className="abt-carousel-arrow abt-right" onClick={nextSlide}>
                &#8594;
            </button>
        </div>
    );
}

export default AbtCarousel;
