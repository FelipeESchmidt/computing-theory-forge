import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import { theme, themeOptions } from "./assets/styles/themes";
import { ThemeControllerProvider } from "./contexts/ThemeControllerProvider";
import { Router } from "./routes";

const App = () => {
  const [themeMode, setThemeMode] = React.useState<themeOptions>("dark");

  return (
    <ThemeControllerProvider setThemeMode={setThemeMode} themeMode={themeMode}>
      <ThemeProvider theme={theme[themeMode]}>
        <Router />
      </ThemeProvider>
    </ThemeControllerProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
