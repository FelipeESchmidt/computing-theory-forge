import {
  LineItemsProps,
  LineTypeOption,
} from "@pages/TheoreticalMachine/Programming/types";

import * as constants from "./constants";

export const addLine = () =>
  ({
    type: constants.ADD_LINE,
  } as const);

export const removeLine = (lineIndex: number) =>
  ({
    type: constants.REMOVE_LINE,
    lineIndex,
  } as const);

export const setLineType = (
  lineType: LineTypeOption,
  lineItems: LineItemsProps[],
  lineIndex: number,
) =>
  ({
    type: constants.SET_LINE_TYPE,
    lineType,
    lineItems,
    lineIndex,
  } as const);

export const setLineSelection = (
  value: string,
  lineItem: LineItemsProps,
  itemIndex: number,
  lineIndex: number,
) =>
  ({
    type: constants.SET_LINE_SELECTION,
    value,
    lineItem,
    itemIndex,
    lineIndex,
  } as const);

export const validateLines = () =>
  ({
    type: constants.VALIDATE_LINES,
  } as const);
