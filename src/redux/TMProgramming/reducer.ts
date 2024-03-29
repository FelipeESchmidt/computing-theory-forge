import * as constants from "./constants";
import { validadePossibleErrors } from "./functions";
import { LineProps, RecorderActions } from "./types";

const defaultState = {
  lines: [{}] as LineProps[],
  isValid: false,
  error: "",
} as const;

export default function reducer(state = defaultState, action: RecorderActions) {
  switch (action.type) {
    case constants.ADD_LINE: {
      return { ...state, lines: [...state.lines, { items: [] }], isValid: false };
    }

    case constants.REMOVE_LINE: {
      const newLines = [...state.lines];
      newLines.splice(action.lineIndex, 1);
      return { ...state, lines: newLines, isValid: false };
    }

    case constants.SET_LINE_TYPE: {
      const lines = [...state.lines];
      lines[action.lineIndex] = {
        type: action.lineType,
        items: action.lineItems,
      };
      return { ...state, lines };
    }

    case constants.SET_LINE_SELECTION: {
      const lines = [...state.lines];
      lines[action.lineIndex].items[action.itemIndex] = {
        ...action.lineItem,
        text: action.value,
      };
      return { ...state, lines };
    }

    case constants.VALIDATE_LINES: {
      const error = validadePossibleErrors([...state.lines]);
      return { ...state, error, isValid: !error };
    }

    default: {
      return state;
    }
  }
}
