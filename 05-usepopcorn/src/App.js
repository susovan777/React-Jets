import { useState } from "react";
import { MovieData, WatchedData } from "./TempData";

function App() {
  const [movies, setMovies] = useState(MovieData);
  const [watched, setWatched] = useState(WatchedData);

  return (
    <div>
      <nav className="nav-bar">
        <div className="logo">
          <span>🍿</span>
          <h1>UsePopcorn</h1>
        </div>

        <input className="search" type="text" placeholder="Search movies..." />

        <p className="num-result">
          Found <strong>3</strong> results
        </p>
      </nav>

      <div className="main">
        <div className="box">
          <button className="toggle-btn">-</button>
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
        </div>

        <div className="box">
          <button className="toggle-btn">+</button>
          <div className="summary">
            <h2>Movies you watched</h2>
            <div>
              <p>
                <span>🎦</span>
                <span>2 movies</span>
              </p>
              <p>
                <span>⭐️</span>
                <span>9.3</span>
              </p>
              <p>
                <span>🌟</span>
                <span>8.65</span>
              </p>
              <p>
                <span>⏳</span>
                <span>132 min</span>
              </p>
            </div>
          </div>

          <ul className="list">
            {watched.map((movie) => {
              return (
                <li>
                  <img src={movie.Poster} alt={movie.Title} />
                  <h2>{movie.Title}</h2>
                  <div>
                    <p>
                      <span>⭐️</span>
                      <span>{movie.userRating}</span>
                    </p>
                    <p>
                      <span>🌟</span>
                      <span>{movie.imdbRating}</span>
                    </p>
                    <p>
                      <span>⏳</span>
                      <span>{movie.runtime} min</span>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
