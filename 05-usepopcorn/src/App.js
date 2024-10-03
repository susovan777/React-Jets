import { useState } from "react";
import { MovieData, WatchedData } from "./TempData";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Result from "./Components/Nav Components/Result";
import Box from "./Components/ListBox";
import MovieList from "./Components/MovieList";
import Summary from "./Components/Summary";
import WatchedList from "./Components/WatchedList";

function App() {
  const [movies, setMovies] = useState(MovieData);
  const [watched, setWatched] = useState(WatchedData);
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
        <Box>
          <MovieList movies={movies} />
        </Box>

        <Box>
          <Summary />
          <WatchedList watched={watched} />
        </Box>
      </Main>
    </div>
  );
}

export default App;
