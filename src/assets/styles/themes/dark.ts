import { commonTheme } from "./common";

export type ThemeType = typeof darkTheme;

export const darkTheme = {
  ...commonTheme,
  principal: {
    text: "#F5F5F5",
    background: "#1E1E1E",
  },
  secondary: {
    text: "#F3F3F3",
    background: "#2E2E2E",
  },
};
