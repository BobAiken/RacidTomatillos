import React from "react";
import "./Poster.css";
import {Link} from "react-router-dom"

const Poster = ({ poster, title, rating, releaseDate, id }) => {
  return (
    <Link className="poster" to={id.toString()} key={id} style={{ textDecoration: 'none' }}>
      <img src={poster}></img>
      <p>{rating}/10</p>
      <p>{new Date(releaseDate).toLocaleDateString()}</p>
      <p>{title}</p>
    </Link>
  );
};

export default Poster;
