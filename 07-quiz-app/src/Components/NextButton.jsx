import React from "react";

const NextButton = ({ dispatch }) => {
  return (
    <button
      className="btn start-btn next-btn"
      onClick={() => dispatch({ type: "nextAnswer" })}
    >
      Next
    </button>
  );
};

export default NextButton;
