import { BR } from "./BR";

export type LanguageType = typeof BR;

export const languages = {
  BR,
};

export type LanguageOptions = keyof typeof languages;
