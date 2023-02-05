import React from "react";
import Poster from "../Poster/Poster";
import "./Movies.css";

const Movies = ({ movieData, selectPoster }) => {
  const moviePosters = movieData.map((movie) => {
    return (
      <Poster
        id={movie.id}
        key={movie.id}
        poster={movie.poster_path}
        title={movie.title}
        rating={movie.average_rating}
        releaseDate={movie.release_date}
        selectPoster={selectPoster}
      />
    );
  });

  return <div className="posters-container">{moviePosters}</div>;
};

export default Movies;
