import { useEffect, useReducer } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Loader from "./Components/Header/Loader";
import Error from "./Components/Header/Error";
import Welcome from "./Components/Main/Welcome";
import Question from "./Components/Main/Question";
import Progress from "./Components/Main/ProgressBar";
import Finished from "./Components/Main/Finished";
import Footer from "./Components/Footer/Footer";

const TIMES_PER_QS = 10;
const initialState = {
  questions: [],
  // options: 'loading', 'error', 'ready', 'active', finished'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  seconds: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...state,
        status: "failed",
      };

    case "start":
      return {
        ...state,
        status: "active",
        seconds: state.questions.length * TIMES_PER_QS,
      };

    case "newAnswer":
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case "nextAnswer":
      return { ...state, index: state.index + 1, answer: null };

    case "finish":
      return { ...state, status: "finished", highScore: state.points };

    case "restart":
      return {
        ...initialState,
        status: "ready",
        questions: state.questions,
      };

    case "tick":
      return {
        ...state,
        seconds: state.seconds - 1,
        status: state.seconds === 0 ? "finished" : state.status,
      };

    default:
      throw new Error("Unknown action");
  }
};

function App() {
  const [
    { questions, status, index, answer, points, highScore, seconds },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPoints = questions.reduce((acc, cur) => acc + cur.points, 0);

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((data) => data.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch(() => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="App">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "failed" && <Error />}
        {status === "ready" && (
          <Welcome numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              answer={answer}
              points={points}
              maxPoints={maxPoints}
              numQuestions={numQuestions}
            />
            <Question
              question={questions[index]}
              answer={answer}
              dispatch={dispatch}
            />
            {/* <NextButton
              dispatch={dispatch}
              index={index}
              answer={answer}
              numQuestions={numQuestions}
            /> */}
            <Footer
              dispatch={dispatch}
              index={index}
              answer={answer}
              numQuestions={numQuestions}
              seconds={seconds}
            />
          </>
        )}
        {status === "finished" && (
          <Finished
            points={points}
            maxPoints={maxPoints}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
