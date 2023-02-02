import React from "react";
import "./Poster.css";

const Poster = ({ poster, title, id, selectPoster }) => {
  return (
    <div className="poster" onClick={() => selectPoster(id)}>
      <img src={poster}></img>
      <h3>{title}</h3>
    </div>
  );
};

export default Poster;
