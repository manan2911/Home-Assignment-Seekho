import React from "react";
import ImageSlider from "../imageSlider/ImageSlider";
import "./Reviews.css";

const Reviews = () => {
  const images = [
    {
      src: "https://via.placeholder.com/500x500.png?text=Image+1",
      alt: "Image 1",
      text: "Review 1",
    },
    {
      src: "https://via.placeholder.com/500x500.png?text=Image+2",
      alt: "Image 2",
      text: "Review 2",
    },
    {
      src: "https://via.placeholder.com/500x500.png?text=Image+3",
      alt: "Image 3",
      text: "Review 3",
    },
  ];

  return (
    <div className="mainReviewContainer">
      <div className="titleReview">
        <h2>5 Lakh se bhi adhik logo dvara pasand kia gaya</h2>
      </div>
      <ImageSlider images={images} />
    </div>
  );
};

export default Reviews;
