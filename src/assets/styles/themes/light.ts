import { ThemeType } from ".";
import { commonTheme } from "./common";

export const lightTheme: ThemeType = {
  ...commonTheme,
  principal: {
    text: "#1E1E1E",
    background: "#F5F5F5",
    darkBackground: "#EBEBEB",
  },
  secondary: {
    text: "#2E2E2E",
    background: "#F3F3F3",
  },
};
