import { HIDE_MESSAGE, NEW_MESSAGE } from "./constants";
import { AlertMessageType } from "./types";

export const newMessage = (message: string, messageType: AlertMessageType) =>
  ({
    type: NEW_MESSAGE,
    message,
    messageType,
  } as const);

export const hideMessage = () =>
  ({
    type: HIDE_MESSAGE,
  } as const);
