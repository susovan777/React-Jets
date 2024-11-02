import React from "react";

const Finished = ({ points, maxPoints, highScore, dispatch }) => {
  const percentage = (points / maxPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80) emoji = "🥳";
  if (percentage >= 50) emoji = "☺️";
  if (percentage >= 0) emoji = "😩";
  if (percentage === 0) emoji = "😵‍💫";

  return (
    <>
      <p className="finished">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
        {maxPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="high-score">(Highscores: {highScore} points) </p>
      <button
        className="btn start-btn restart-btn"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
};

export default Finished;
