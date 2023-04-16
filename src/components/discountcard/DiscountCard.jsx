import React from "react";
import "./Discountcard.css";
const DiscountCard = () => {
  return (
    <div className="container">
      <div className="heading">
        <h1>
          <span style={{ color: "#ff004d" }}>SEEKHO PLUS</span> UNLOCK KAREIN
        </h1>
      </div>
      <div className="card">
        <h2>1 YEAR PLAN</h2>
        <hr />
        <h3>
          Only for{" "}
          <span style={{ fontSize: "36px", color: "white" }}>Rs199</span> RS599
        </h3>
      </div>
    </div>
  );
};

export default DiscountCard;
