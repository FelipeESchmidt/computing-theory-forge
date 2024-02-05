import React, { createContext, useContext, useEffect } from "react";

import { theme, themeOptions } from "../../assets/styles/themes";

interface ThemeControllerReceivedProps {
  themeMode: themeOptions;
  setThemeMode: (themeMode: themeOptions) => void;
}

interface ThemeControllerProps {
  themeMode: themeOptions;
  switchThemeMode: () => void;
}

interface ThemeControllerProviderProps extends ThemeControllerReceivedProps {
  children: React.ReactElement;
}

const ThemeController = createContext<ThemeControllerProps>({} as ThemeControllerProps);

const ThemeControllerProvider: React.FC<ThemeControllerProviderProps> = ({
  children,
  setThemeMode,
  themeMode,
}) => {
  const switchThemeMode = () => {
    setThemeMode(themeMode === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const body = document.querySelector("body");

    body?.style.setProperty("background-color", theme[themeMode].background);
  }, [themeMode]);

  return (
    <ThemeController.Provider value={{ themeMode, switchThemeMode }}>
      {children}
    </ThemeController.Provider>
  );
};

const useThemeController = (): ThemeControllerProps => {
  const context = useContext(ThemeController);

  if (!context) {
    throw new Error("useThemeController must be used within an ThemeController");
  }

  return context;
};

export { ThemeControllerProvider, useThemeController };
