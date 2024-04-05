import { LanguageOptions } from "@assets/languages";

import { CHANGE_LANGUAGE } from "./constants";

export const changeLanguage = (newLanguage: LanguageOptions) =>
  ({
    type: CHANGE_LANGUAGE,
    newLanguage,
  } as const);
