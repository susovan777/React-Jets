import React from "react";
import NextButton from "./NextButton";
import Timer from "./Timer";

const Footer = ({ dispatch, index, answer, numQuestions, seconds }) => {
  return (
    <div className="footer">
      <Timer dispatch={dispatch} seconds={seconds} />
      <NextButton
        dispatch={dispatch}
        index={index}
        answer={answer}
        numQuestions={numQuestions}
      />
    </div>
  );
};

export default Footer;
