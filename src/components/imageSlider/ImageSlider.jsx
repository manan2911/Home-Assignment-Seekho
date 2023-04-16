import React, { useState } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const handleDotClick = (index) => {
    setCurrent(index);
  };

  const translateX = -current * 100;
  console.log(images);

  return (
    <div className="sliderContainer">
      <div
        className="sliderWrapper"
        style={{ transform: `translateX(${translateX}%)` }}
      >
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <div className="imageWrapper">
              <img src={image.avatar} alt={image.name} />
            </div>
            <div className="text">{image.review}</div>
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
