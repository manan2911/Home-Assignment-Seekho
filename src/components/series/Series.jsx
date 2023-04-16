import React from "react";
import "./Series.css";

const Series = (props) => {
  const { title, series_list } = props.data;
  console.log(title, series_list);
  console.log(props);
  return (
    <div className="mainContainer">
      <div className="titles">
        <h2>{title}</h2>
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
        {series_list.map((series) => (
          <div className="cards" key={series.id}>
            <img src={series.image} alt={series.title} />
            <h4>{series.display_title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Series;
