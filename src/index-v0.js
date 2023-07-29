import React from "react";
import ReactDOM from "react-dom/client";
import ReactQuiz from "./components/react-quiz-with-context/ReactQuiz";
import "./components/react-quiz-with-context/index.css";
import { QuizProvider } from "./components/react-quiz-with-context/contexts/QuizContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizProvider>
      <ReactQuiz />
    </QuizProvider>
  </React.StrictMode>
);
