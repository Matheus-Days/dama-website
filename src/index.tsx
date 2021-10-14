import React from "react";
import { render, hydrate } from "react-dom";
import App from "./App";

import "./style/global.scss";

const rootElement = document.getElementById("root") as HTMLDivElement;

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
}
