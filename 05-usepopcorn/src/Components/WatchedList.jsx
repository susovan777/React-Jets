import { useState } from "react";
import { WatchedData } from "../TempData";

const WatchedList = () => {
  const [watched, setWatched] = useState(WatchedData);
  return (
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
  );
};

export default WatchedList;
