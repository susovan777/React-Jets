import { useState } from "react";

const Box = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleExpand = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="box">
      <button className="toggle-btn" onClick={handleExpand}>
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
};

export default Box;
