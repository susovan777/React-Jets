import React from "react";

const Welcome = ({ numQuestions, dispatch }) => {
  return (
    <div className="welcome">
      <h1>Welcome to The React Quiz!</h1>
      <h2>{numQuestions} Questions to test your React mastery</h2>
      <button
        className="btn start-btn"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
};

export default Welcome;
