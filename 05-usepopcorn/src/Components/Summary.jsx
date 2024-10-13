const Summary = ({ watched }) => {
  const average = (arr) => {
    if (arr.length === 0) return 0;

    let total = 0;
    for (let i of arr) {
      total += i;
    }

    return total / arr.length;
  };

  const avgUserRate = average(watched.map((movie) => movie.userRating));
  const avgImdbRate = average(watched.map((movie) => +movie.imdbRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>🎦</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgUserRate.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgImdbRate.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
};

export default Summary;
