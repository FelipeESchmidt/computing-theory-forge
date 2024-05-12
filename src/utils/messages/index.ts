import { LanguageType } from "@assets/languages";

type KnownMessage = keyof LanguageType["messages"];
type Message = KnownMessage | string;

export const translateMessage = (message: Message, texts: LanguageType) => {
  const checkIsKnownMessage = (m: Message): m is KnownMessage =>
    message in texts.messages;

  if (!checkIsKnownMessage(message)) {
    return message;
  }

  return texts.messages[message];
};
