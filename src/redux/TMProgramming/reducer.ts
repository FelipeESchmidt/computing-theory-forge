import { TheoreticalMachineFunctionalityIds } from "@globalTypes/theoreticalMachine";

import * as constants from "./constants";
import { adaptProgrammingLinesLanguage, validadePossibleErrors } from "./functions";
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

    case constants.TRANSLATE_PROGRAM: {
      const linesTranslated = adaptProgrammingLinesLanguage(state.lines, action.texts);
      return { ...state, lines: linesTranslated };
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
      const [text, id] = action.value.split("/") as [
        string,
        TheoreticalMachineFunctionalityIds?,
      ];
      lines[action.lineIndex].items[action.itemIndex] = {
        ...action.lineItem,
        text,
        id,
      };
      return { ...state, lines };
    }

    case constants.VALIDATE_LINES: {
      const error = validadePossibleErrors([...state.lines], action.texts);
      return { ...state, error, isValid: !error };
    }

    default: {
      return state;
    }
  }
}
