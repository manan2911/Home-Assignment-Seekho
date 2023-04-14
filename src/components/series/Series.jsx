import React from "react";
import "./Series.css";

const Series = () => {
  return (
    <div className="mainContainer">
      <div className="titles">
        <h2>Seekhein 10000+ Series se</h2>
      </div>
      <div className="buy">
        <div className="card1">
          <h3>199RS</h3>
        </div>
        <div className="card2">
          <h2>BUY NOW</h2>
        </div>
      </div>

      <div className="imgCards">
        <div className="cards">
          <img src="https://via.placeholder.com/300x300" alt="Series 1" />
          <h4>Series 1</h4>
        </div>
        <div className="cards">
          <img src="https://via.placeholder.com/300x300" alt="Series 2" />
          <h4>Series 2</h4>
        </div>
        <div className="cards">
          <img src="https://via.placeholder.com/300x300" alt="Series 3" />
          <h4>Series 3</h4>
        </div>
        <div className="cards">
          <img src="https://via.placeholder.com/300x300" alt="Series 4" />
          <h4>Series 4</h4>
        </div>
        <div className="cards">
          <img src="https://via.placeholder.com/300x300" alt="Series 5" />
          <h4>Series 5</h4>
        </div>
      </div>
    </div>
  );
};

export default Series;
