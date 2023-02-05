import React from "react";
import "./Individual.css";

const Individual = ({ individualInfo, goHome }) => {
  return (
    <div
      className="backdrop"
      style={{ backgroundImage: `url(${individualInfo.backdrop_path})` }}
    >
      <div className="information">
        <h3>{individualInfo.title}</h3>
        <p>{individualInfo.tagline}</p>
        <p>{individualInfo.overview}</p>
        <p>Release Date: {individualInfo.release_date}</p>
        <p>Average Rating: {individualInfo.average_rating}/10</p>
        <p>Genres: {individualInfo.genres.join(", ")}</p>
        <p>
          Budget:{" "}
          {individualInfo.budget.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
        <p>
          Revenue:{" "}
          {individualInfo.revenue.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
        <p>Runtime: {individualInfo.runtime} minutes</p>
        <button onClick={() => goHome()}>GO BACK HOME</button>
      </div>
    </div>
  );
};

export default Individual;
