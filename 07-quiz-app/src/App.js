import { useEffect, useReducer } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Loader from "./Components/Loader";
import Error from "./Components/Error";
import Welcome from "./Components/Welcome";
import Question from "./Components/Question";

const initialState = {
  questions: [],
  // options: 'loading', 'error', 'ready', 'active', finished'
  status: "loading",
  index: 0,
  answer: null,
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
      };

    case "newAnswer":
      return { ...state, answer: action.payload };

    default:
      throw new Error("Unknown action");
  }
};

function App() {
  const [{ questions, status, index, answer }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;
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
          <Question question={questions[index]} answer={answer} dispatch={dispatch} />
        )}
      </Main>
    </div>
  );
}

export default App;
