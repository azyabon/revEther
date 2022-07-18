import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages";
import "./styled/index.css";
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <HomePage />
  </Provider>
);
