import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import Restful from "./services/restful";

const restful = new Restful();

ReactDOM.render(
  <React.StrictMode>
    <App restful={restful} />
  </React.StrictMode>,
  document.getElementById("root")
);
