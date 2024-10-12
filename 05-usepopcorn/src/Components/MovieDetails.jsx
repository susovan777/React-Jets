import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";

const MovieDetails = ({
  id,
  handleBack,
  handleAddMovie,
  onCloseMovie,
  watched,
}) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const isWatched = watched.map((movie) => movie.imdbID).includes(id);

  useEffect(() => {
    const fetchMovie = async () => {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=2c82c3be&i=${id}`
      );
      const data = await res.json();

      setMovie(data);
      setIsLoading(false);
    };

    fetchMovie();
  }, [id]);

  const handleAdd = () => {
    const newWatchedMovie = {
      imdbID: id,
      Title: movie.Title,
      Poster: movie.Poster,
      imdbRating: movie.imdbRating,
      userRating: userRating,
      runtime: Number(movie.Runtime.split(" ").at(0)),
    };

    handleAddMovie(newWatchedMovie);
    onCloseMovie();
  };
  return (
    <div className="details">
      <button className="btn-back" onClick={() => handleBack()}>
        &larr;
      </button>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <img src={movie.Poster} alt={`Poster of ${movie.Title}`} />
            <div className="details-overview">
              <h1>{movie.Title}</h1>
              <p>
                {movie.Released} &bull; {movie.Runtime}
              </p>
              <p>{movie.Genre}</p>
              <p>
                <span>⭐</span> {movie.imdbRating} IMDb rating
              </p>
            </div>
          </header>

          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    fontSize={25}
                    onSetUserRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="add-btn" onClick={() => handleAdd()}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p style={{ margin: "2rem", fontSize: "1.5rem" }}>
                  You have already rated with{" "}
                  {watched.find((movie) => movie.imdbID === id).userRating} ⭐️
                </p>
              )}
            </div>
            <p>
              <em>{movie.Plot}</em>
            </p>
            <p>Starring {movie.Actors}</p>
            <p>Dirrected by {movie.Director}</p>
            <p>Available in {movie.Language}</p>
          </section>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
