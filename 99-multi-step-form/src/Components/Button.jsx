import React from "react";

const NavigationButton = ({ value, clickEvent }) => {
  return (
    <button
      style={{ backgroundColor: "#7950f2", color: "#fff" }}
      onClick={clickEvent}
    >
      {value}
    </button>
  );
};

export default NavigationButton;
