import { BR } from "./BR";
import { US } from "./US";

export type LanguageType = typeof BR;

export const languages = {
  BR,
  US,
};

export type LanguageOptions = keyof typeof languages;
