import React from "react";
import "./Poster.css";

const Poster = ({ poster, title }) => {
  return (
    <div className="poster">
      <h3>{title}</h3>
      <img src={poster}></img>
    </div>
  );
};

export default Poster;
