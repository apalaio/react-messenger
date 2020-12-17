import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

export const StateContext = createContext();
export const DispatchContext = createContext();

ReactDOM.render(
  <App />,

  document.getElementById("root")
);
