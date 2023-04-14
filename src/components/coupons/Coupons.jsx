import React from "react";
import "./Coupons.css";

const Coupons = () => {
  return (
    <div className="containerCoupon">
      <div className="upper">
        <h2>COUPON NAME</h2>
        <h3>STATUS</h3>
        <h2>Amount saved</h2>
      </div>
      <div className="lower">
        <h3>Coupon Applied Succesfully!</h3>
      </div>
    </div>
  );
};

export default Coupons;
