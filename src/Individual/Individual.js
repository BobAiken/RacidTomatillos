import React from "react";
import "./Individual.css";

const Individual = ({ individualInfo, goHome }) => {
  return (
    <div>
      Hello
      <p>{individualInfo.title}</p>
      <img src={individualInfo.poster_path}></img>
      <img src={individualInfo.backdrop_path}></img>
      <p>{individualInfo.release_date}</p>
      <p>{individualInfo.overview}</p>
      <p>{individualInfo.average_rating}</p>
      <p>{individualInfo.genres}</p>
      <p>{individualInfo.budget}</p>
      <p>{individualInfo.revenew}</p>
      <p>{individualInfo.runtime}</p>
      <p>{individualInfo.tagline}</p>
      <button onClick={() => goHome()}>GO BACK HOME</button>
    </div>
  );
};

export default Individual;
