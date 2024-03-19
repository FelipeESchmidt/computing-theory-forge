import {
  LineItemsProps,
  LineTypeOption,
} from "@pages/TheoreticalMachine/Programming/types";

import {
  addLine,
  removeLine,
  setLineSelection,
  setLineType,
  validateLines,
} from "./actions";

export type RecorderActions = ReturnType<
  | typeof addLine
  | typeof removeLine
  | typeof setLineType
  | typeof setLineSelection
  | typeof validateLines
>;

export interface LineProps {
  type?: LineTypeOption;
  items: LineItemsProps[];
}
