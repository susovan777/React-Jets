
const WatchedList = ({ watched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => {
        return (
          <li key={movie.imdbID}>
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
