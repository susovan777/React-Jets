import { useState } from "react";
import MovieList from "./MovieList";

const ListBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleExpand = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="box">
      <button className="toggle-btn" onClick={handleExpand}>
        {isOpen ? "-" : "+"}
      </button>
      <MovieList />
    </div>
  );
};

export default ListBox;
