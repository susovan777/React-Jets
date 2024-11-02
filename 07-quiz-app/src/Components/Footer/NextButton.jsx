import React from "react";

const NextButton = ({ dispatch, index, answer, numQuestions }) => {

  if (index === numQuestions - 1)
    return (
      <button
        className="btn start-btn next-btn"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );

  if (index < numQuestions) {
    return (
      <button
        className="btn start-btn next-btn"
        onClick={() => dispatch({ type: "nextAnswer" })}
      >
        Next
      </button>
    );
  }
};

export default NextButton;
