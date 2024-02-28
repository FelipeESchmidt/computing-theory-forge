import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { theme, themeOptions } from "./assets/styles/themes";
import { ThemeControllerProvider } from "./contexts/ThemeControllerProvider";
import { store } from "./redux/store";
import { Router } from "./routes";

const App = () => {
  const [themeMode, setThemeMode] = React.useState<themeOptions>("dark");

  return (
    <ReduxProvider store={store}>
      <ThemeControllerProvider setThemeMode={setThemeMode} themeMode={themeMode}>
        <ThemeProvider theme={theme[themeMode]}>
          <Router />
        </ThemeProvider>
      </ThemeControllerProvider>
    </ReduxProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
