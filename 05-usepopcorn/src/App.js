import { useState } from "react";
import { MovieData, WatchedData } from "./TempData";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Result from "./Components/Nav Components/Result";
import Box from "./Components/ListBox";
import MovieList from "./Components/MovieList";
import Summary from "./Components/Summary";
import WatchedList from "./Components/WatchedList";
import { useEffect } from "react";

function App() {
  const KEY = "2c82c3be";
  const query = "after";

  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(WatchedData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // ⬇️ DATA Fetch using async/await
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );

        const data = await res.json();
        if (data.Response === "False") {
          throw new Error("Movie not found!");
        }

        setMovies(data.Search);
        setError("");
        // console.log(data);
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar>
        <Result movies={movies} />
      </Navbar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} />}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          <Summary />
          <WatchedList watched={watched} />
        </Box>
      </Main>
    </div>
  );
}

const Loader = () => {
  return (
    <div className="loader">
      <p>Loading... ⌛</p>
    </div>
  );
};

const ErrorMessage = ({ message }) => {
  return <p className="error-msg">😔 {message}</p>;
};

export default App;
