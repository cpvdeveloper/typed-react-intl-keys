import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { IntlProvider } from "react-intl";
import enMessages from "./en.json";

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider messages={enMessages} locale="en">
      <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
