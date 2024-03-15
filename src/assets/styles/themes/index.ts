import "styled-components";

import { darkTheme } from "./dark";
import { lightTheme } from "./light";

export const theme = {
  dark: darkTheme,
  light: lightTheme,
};

export type themeOptions = keyof typeof theme;

export type { ThemeType } from "./dark";
