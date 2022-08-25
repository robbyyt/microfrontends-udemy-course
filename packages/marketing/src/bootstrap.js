import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
/**
 * Define a function mount to start the app.
 * - if in development/isolation call it
 * - if running through a container than export it
 */
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) mount(devRoot);
}

export { mount };
