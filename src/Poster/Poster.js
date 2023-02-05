import React from "react";
import "./Poster.css";

const Poster = ({ poster, title, rating, releaseDate, id, selectPoster }) => {
  return (
    <div className="poster" onClick={() => selectPoster(id)}>
      <img src={poster}></img>
      <p>{rating}/10</p>
      <p>{new Date(releaseDate).toLocaleDateString()}</p>
      <p>{title}</p>
    </div>
  );
};

export default Poster;
