import {
  LineItemsProps,
  LineTypeOption,
} from "@pages/TheoreticalMachine/Programming/types";

import {
  addLine,
  clearProgram,
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
  | typeof clearProgram
>;

export interface LineProps {
  type?: LineTypeOption;
  items: LineItemsProps[];
}
