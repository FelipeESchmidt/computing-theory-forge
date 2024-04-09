import { LanguageOptions, languages } from "@assets/languages";

import { CHANGE_LANGUAGE } from "./constants";
import { RecorderActions } from "./types";

const defaultAlert = {
  currentLanguage: "BR" as LanguageOptions,
  texts: languages.BR,
} as const;

export default function reducer(state = defaultAlert, action: RecorderActions) {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      return {
        ...state,
        currentLanguage: action.newLanguage,
        texts: languages[action.newLanguage],
      };
    }

    default:
      return state;
  }
}
