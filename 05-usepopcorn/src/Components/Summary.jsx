const Summary = ({ watched }) => {
  const average = (arr) => {
    let total = 0;
    for (let i of arr) {
      total += i;
    }

    return total / arr.length;
  };

  const avgUserRate = average(watched.map((movie) => movie.userRating)).toFixed(
    2
  );
  const avgImdbRate = average(
    watched.map((movie) => +movie.imdbRating)
  ).toFixed(2);
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
          <span>{avgUserRate}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgImdbRate}</span>
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
