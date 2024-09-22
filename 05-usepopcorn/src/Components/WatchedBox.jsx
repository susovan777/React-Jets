import { useState } from "react";
import Summary from "./Summary";
import WatchedList from "./WatchedList";

const WatchedBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleExpand = () => {
    setIsOpen((prev) => !prev);
  };
  
  return (
    <div className="box">
      <button className="toggle-btn" onClick={handleExpand}>
        {isOpen ? "-" : "+"}
      </button>

      <Summary />
      <WatchedList />
    </div>
  );
};

export default WatchedBox;
