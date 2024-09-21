// import { useState } from "react";
// import { MovieData, WatchedData } from "../TempData";
import MovieList from "./MovieList";
import WatchedList from "./WatchedList";
import Summary from "./Summary";

const Main = () => {
  return (
    <div className="main">
      <div className="box">
        <button className="toggle-btn">-</button>
        <MovieList />
      </div>

      <div className="box">
        <button className="toggle-btn">+</button>

        <Summary />
        <WatchedList />
      </div>
    </div>
  );
};

export default Main;
