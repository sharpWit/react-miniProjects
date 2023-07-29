import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/react-redux-bank/App";
import "./components/react-redux-bank/index.css";

// import "./store-v0";
import store from "./store-v1";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
