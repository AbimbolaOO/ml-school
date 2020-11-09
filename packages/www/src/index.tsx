import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

import { ThemeProvider } from "emotion-theming";
import { GlobalStyles, lightTheme } from "@ml-school//components/src/Themes";

ReactDOM.render(
  <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
