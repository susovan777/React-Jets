import React from "react";

const Question = ({ question, answer, dispatch }) => {
  console.log(question);
  return (
    <div className="question-container">
      <h4 className="question">{question.question}</h4>

      <Option question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
};

const Option = ({ question, answer, dispatch }) => {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => {
        return (
          <button
            className={`btn option-btn ${
              index === answer && hasAnswered ? "answer" : ""
            } ${
              hasAnswered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            disabled={hasAnswered}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
export default Question;
