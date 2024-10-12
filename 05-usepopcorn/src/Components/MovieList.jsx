const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <ul className="list">
      {movies.map((movie) => {
        return (
          <Movie movie={movie} key={movie.imdbID} selectMovie={onSelectMovie} />
        );
      })}
    </ul>
  );
};

const Movie = ({ movie, selectMovie }) => {
  return (
    <li onClick={() => selectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>
        <span>📆</span> {movie.Year}
      </p>
    </li>
  );
};

export default MovieList;
