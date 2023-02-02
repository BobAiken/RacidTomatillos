import React from "react";
import "./Poster.css";

const Poster = ({ poster, title }) => {
  return (
    <div className="poster">
      <img src={poster}></img>
      <h3>{title}</h3>
    </div>
  );
};

export default Poster;
