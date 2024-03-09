import { HIDE_MESSAGE, NEW_MESSAGE } from "./constants";
import { AlertMessageType, RecorderActions } from "./types";

const defaultAlert = {
  message: "",
  type: "" as AlertMessageType,
  open: false,
} as const;

export default function reducer(state = defaultAlert, action: RecorderActions) {
  switch (action.type) {
    case NEW_MESSAGE: {
      action;
      return {
        ...state,
        message: action.message,
        type: action.messageType,
        open: true,
      };
    }

    case HIDE_MESSAGE:
      return { ...state, open: false };

    default:
      return state;
  }
}
