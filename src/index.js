import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FlashCards from "./components/steps/flashcards/FlashCards";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <FlashCards />
  </React.StrictMode>
);
