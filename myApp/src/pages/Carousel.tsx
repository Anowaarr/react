import React, { useState, useEffect } from 'react';
// @ts-ignore: allow importing CSS without type declarations
import './Carousel.css';

const images = [
  'https://via.placeholder.com/800x400/ff7f50/ffffff?text=Slide+1',
  'https://via.placeholder.com/800x400/6495ed/ffffff?text=Slide+2',
  'https://via.placeholder.com/800x400/20b2aa/ffffff?text=Slide+3',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span key={index} className={`dot ${currentIndex === index ? 'active' : ''}`} onClick={() => goToSlide(index)}></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;