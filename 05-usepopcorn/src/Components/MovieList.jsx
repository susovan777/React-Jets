// import { useState } from "react";
// import { MovieData } from "../TempData";

const MovieList = ({ movies }) => {
  

  return (
    <ul className="list">
      {movies.map((movie) => {
        return <Movie movie={movie} key={movie.imdbID} />;
      })}
    </ul>
  );
};

const Movie = ({ movie }) => {
  return (
    <li>
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>
        <span>📆</span> {movie.Year}
      </p>
    </li>
  );
};

export default MovieList;
