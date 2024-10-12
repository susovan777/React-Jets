import { useEffect, useState } from "react";

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
console.log(title, year);

  return (
    <div className="details">
      <button className="btn-back" onClick={() => clickEvent()}>
        &larr;
      </button>
      {movie.Title}
    </div>
  );
};

export default MovieDetails;
