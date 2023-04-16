import React from "react";
import "./Artist.css";
const Artist = ({ creatorItem }) => {
  const { title, creator_list } = creatorItem;
  console.log(creatorItem);
  return (
    <div>
      <div className="title">{title}</div>
      <div className="artistContainer">
        {creator_list.map((series) => (
          <div className="artistCard">
            <img src={series.avatar} alt={series.name} />
            <h4>{series.name}</h4>
            <h5>{series.profession}</h5>
            <h6>{series.status}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artist;
