import React from "react";
import Poster from "../Poster/Poster";
import "./Movies.css";

const Movies = ({ movieData, selectPoster }) => {
  console.log(movieData);
  const moviePosters = movieData.map((movie) => {
    // console.log(movie.id);
    return (
      <Poster
        id={movie.id}
        key={movie.id}
        poster={movie.poster_path}
        title={movie.title}
        selectPoster={selectPoster}
      />
    );
  });

  return <div className="posters-container">{moviePosters}</div>;
};

export default Movies;
