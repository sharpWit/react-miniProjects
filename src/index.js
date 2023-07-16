import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import FlashCards from "./components/flashcards/FlashCards";
import Steps from "./components/steps/Steps";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Steps />
    {/* <App /> */}
    {/* <FlashCards /> */}
  </React.StrictMode>
);
