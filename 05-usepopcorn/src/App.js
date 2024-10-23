import { useState, useEffect } from "react";
// import { MovieData, WatchedData } from "./TempData";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Result from "./Components/Nav Components/Result";
import Box from "./Components/ListBox";
import MovieList from "./Components/LeftBox Comps/MovieList";
import Summary from "./Components/RightBox Comps/Summary";
import WatchedList from "./Components/RightBox Comps/WatchedList";
import Search from "./Components/Nav Components/Search";
import MovieDetails from "./Components/RightBox Comps/MovieDetails";
import Loader from "./Components/Loader";

function App() {
  const KEY = "2c82c3be";

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  // const [watched, setWatched] = useState([]);
  const [watched, setWatched] = useState(() => {
    const storedValue = localStorage.getItem("watched");
    return JSON.parse(storedValue);
  });

  // ⬇️ DATA Fetch using async/await
  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
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

        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchData();

    return () => controller.abort();
  }, [query]);

  const handleSelectMovie = (id) => {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  };

  const onCloseMovie = () => {
    setSelectedId(null);
  };

  const handleAddWatched = (movie) => {
    setWatched((watched) => [...watched, movie]);
  };

  const handleDelete = (id) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  };

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

  return (
    <div>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <Result movies={movies} />
      </Navbar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              id={selectedId}
              handleBack={onCloseMovie}
              handleAddMovie={handleAddWatched}
              onCloseMovie={onCloseMovie}
              watched={watched}
            />
          ) : (
            <>
              <Summary watched={watched} />
              <WatchedList watched={watched} handleDelete={handleDelete} />
            </>
          )}
        </Box>
      </Main>
    </div>
  );
}

const ErrorMessage = ({ message }) => {
  return <p className="error-msg">😔 {message}</p>;
};

export default App;
