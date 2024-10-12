import { useEffect, useState } from "react";
import StarRating from "./StarRating";

const MovieDetails = ({ id, clickEvent }) => {
  const [movie, setMovie] = useState({});
  const { Title: title, Year: year } = movie;

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=2c82c3be&i=${id}`
      );
      const data = await res.json();

      setMovie(data);
      //   console.log(data);
    };

    fetchMovie();
  }, [id]);

  return (
    <div className="details">
      <header>
        <button className="btn-back" onClick={() => clickEvent()}>
          &larr;
        </button>
        <img src={movie.Poster} alt={`Poster of ${movie.Title}`} />
        <div className="details-overview">
          <h1>{movie.Title}</h1>
          <p>
            {movie.Released} &bull; {movie.Runtime}
          </p>
          <p>{movie.Genre}</p>
          <p>
            <span>⭐</span> {movie.imdbRating} IMDB rating
          </p>
        </div>
      </header>

      <section>
        <div className="rating">
          <StarRating maxRating={10} fontSize={25} />
        </div>
        <p>
          <em>{movie.Plot}</em>
        </p>
        <p>Starring {movie.Actors}</p>
        <p>Dirrected by {movie.Director}</p>
      </section>
    </div>
  );
};

export default MovieDetails;
