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

  const [movies, setMovies] = useState(MovieData);
  const [watched, setWatched] = useState(WatchedData);
  const [isLoading, setIsLoading] = useState(false);

  // ⬇️ DATA Fetch using Promises
  // useEffect(() => {
  //   fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=after`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data.Search));
  // }, []);

  // ⬇️ DATA Fetch using async/await
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=after`);
      const data = await res.json();
      setMovies(data.Search);
      console.log(data.Search);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar>
        <Result movies={movies} />
      </Navbar>

      <Main>
        {/* <Box element={<MovieList movies={movies} />} />
        <Box
          element={
            <>
              <Summary />
              <WatchedList watched={watched} />
            </>
          }
        /> */}
        <Box>{isLoading ? <Loader /> : <MovieList movies={movies} />}</Box>

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
      <p>Loading...</p>
    </div>
  );
};
export default App;
