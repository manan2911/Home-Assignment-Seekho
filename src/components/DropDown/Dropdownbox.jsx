import React, { useState } from "react";
import "./Dropdownbox.css";

const DropdownBox = ({ title, subtitle }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDropdownClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="dropdownBox">
      <div className="dropdownBoxHeader" onClick={handleDropdownClick}>
        <h3>{title}</h3>
        <span className={`arrow ${isExpanded ? "expanded" : ""}`}>&#9660;</span>
      </div>
      {isExpanded && <div className="dropdownBoxContent">{subtitle}</div>}
    </div>
  );
};

export default DropdownBox;
