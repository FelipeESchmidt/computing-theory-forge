import { LanguageType } from "@assets/languages";

export const translateMessage = (
  message: keyof LanguageType["messages"],
  texts: LanguageType,
) => {
  return texts.messages[message] || message;
};
