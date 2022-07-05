import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages";
import "./styled/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<HomePage />);
