import {
  LineItemsProps,
  LineTypeOption,
} from "@pages/TheoreticalMachine/Programming/types";

import {
  addLine,
  removeLine,
  setLineSelection,
  setLineType,
  translateProgram,
  validateLines,
} from "./actions";

export type RecorderActions = ReturnType<
  | typeof addLine
  | typeof removeLine
  | typeof setLineType
  | typeof setLineSelection
  | typeof validateLines
  | typeof translateProgram
>;

export interface LineProps {
  type?: LineTypeOption;
  items: LineItemsProps[];
}
