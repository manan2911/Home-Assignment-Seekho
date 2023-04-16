import React, { useState } from "react";
import "./Coupons.css";

const Coupons = () => {
  const [couponCode, setCouponCode] = useState("");
  const [status, setStatus] = useState("Not Applied");

  const handleCouponCodeChange = (event) => {
    setCouponCode(event.target.value);
  };

  const applyCoupon = () => {
    // Check if the coupon code is valid and set the status accordingly
    if (couponCode === "VALID_COUPON_CODE") {
      setStatus("Applied");
    } else {
      setStatus("Invalid");
    }
  };

  return (
    <div className="containerCoupon">
      <div className="upper">
        <h2>COUPON NAME</h2>
        <h3>{status}</h3>
        <h2>Amount saved</h2>
      </div>
      <div className="lower">
        <input
          type="text"
          placeholder="Enter coupon code"
          value={couponCode}
          onChange={handleCouponCodeChange}
        />
        <button onClick={applyCoupon}>Apply Coupon</button>
        {status === "Applied" && <h3>Coupon Applied Successfully!</h3>}
        {status === "Invalid" && <h3>Invalid Coupon Code!</h3>}
      </div>
    </div>
  );
};

export default Coupons;
