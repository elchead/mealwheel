import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./_helpers";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { App } from "./App/App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <link
        rel="stylesheet"
        href="https://netdna.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      /> */}

      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
