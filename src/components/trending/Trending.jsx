import React from "react";
import DropdownBox from "../DropDown/Dropdownbox";
import "./Trending.css";
const Trending = () => {
  return (
    <div className="trendingContainer">
      <h2>TRending Cheeze</h2>
      <DropdownBox
        title="जीवन में रंगों की जरूरत होती है। यदि यह वह नहीं है जो आप चाहते हैं?"
        subtitle="जीवन में रंगों की जरूरत होती है। यदि यह वह नहीं है जो आप चाहते हैं - रुकें और इसे बदलें। बस चलते न रहें और उम्मीद करें कि यह।"
      />
      <DropdownBox
        title="जीवन में रंगों की जरूरत होती है। यदि यह वह नहीं है जो आप चाहते हैं?"
        subtitle="जीवन में रंगों की जरूरत होती है। यदि यह वह नहीं है जो आप चाहते हैं - रुकें और इसे बदलें। बस चलते न रहें और उम्मीद करें कि यह।"
      />
      <DropdownBox
        title="जीवन में रंगों की जरूरत होती है। यदि यह वह नहीं है जो आप चाहते हैं?"
        subtitle="जीवन में रंगों की जरूरत होती है। यदि यह वह नहीं है जो आप चाहते हैं - रुकें और इसे बदलें। बस चलते न रहें और उम्मीद करें कि यह।"
      />
    </div>
  );
};

export default Trending;
