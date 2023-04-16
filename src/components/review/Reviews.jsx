import React from "react";
import ImageSlider from "../imageSlider/ImageSlider";
import "./Reviews.css";

const Reviews = ({ reviewItem }) => {
  console.log(reviewItem);
  const { title, user_list } = reviewItem;
  console.log(title);
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
        <h2>{title}</h2>
      </div>
      <ImageSlider images={user_list} />
    </div>
  );
};

export default Reviews;
