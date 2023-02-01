import React from "react";
import Poster from "../Poster/Poster";
import "./Movies.css";

const Movies = ({ movieData }) => {
  console.log(movieData);
  const moviePosters = movieData.map((movie) => {
    console.log(movie.id);
    return (
      <Poster
        id={movie.id}
        key={movie.id}
        poster={movie.poster_path}
        title={movie.title}
      />
    );
  });

  return <div className="posters-container">{moviePosters}</div>;
};

export default Movies;
