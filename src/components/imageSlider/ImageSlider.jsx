import React, { useState } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const handleDotClick = (index) => {
    setCurrent(index);
  };

  const translateX = -current * 100;

  return (
    <div className="sliderContainer">
      <div
        className="sliderWrapper"
        style={{ transform: `translateX(${translateX}%)` }}
      >
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <div className="imageWrapper">
              <img src={image.src} alt={image.alt} />
            </div>
            <div className="text">{image.text}</div>
          </div>
        ))}
      </div>
      <div className="dotsContainer">
        {images.map((image, index) => (
          <div
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
