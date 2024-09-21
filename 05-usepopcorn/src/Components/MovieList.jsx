import { useState } from "react";
import { MovieData } from "../TempData";

const MovieList = () => {
  const [movies, setMovies] = useState(MovieData);
  return (
    <ul className="list">
      {movies.map((movie) => {
        return (
          <li>
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Title}</h2>
            <p>
              <span>📆</span> {movie.Year}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
