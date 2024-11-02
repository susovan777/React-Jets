import React, { useEffect } from "react";

const Timer = ({ dispatch, seconds }) => {
  let mins = Math.round(seconds / 60);
  let secs = seconds % 60;

  useEffect(() => {
    let timer = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <div className="btn start-btn">
      {mins < 10 ? "0" : ""}
      {mins} : {secs < 10 ? "0" : ""}
      {secs}
    </div>
  );
};

export default Timer;
