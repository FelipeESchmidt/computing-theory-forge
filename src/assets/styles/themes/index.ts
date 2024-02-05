import "styled-components";

import { darkTheme, ThemeType } from "./dark";
import { lightTheme } from "./light";

declare module "styled-components" {
  export type DefaultTheme = ThemeType;
}

export const theme = {
  dark: darkTheme,
  light: lightTheme,
};

export type themeOptions = keyof typeof theme;

export type { ThemeType } from "./dark";
