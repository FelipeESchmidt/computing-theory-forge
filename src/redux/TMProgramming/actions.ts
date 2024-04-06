import { LanguageType } from "@assets/languages";
import {
  LineItemsProps,
  LineTypeOption,
} from "@pages/TheoreticalMachine/Programming/types";
import { IRootState } from "@redux/store";
import { UnknownAction } from "redux";
import { ThunkAction } from "redux-thunk";

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

export const validateLinesWithThunk = (): ThunkAction<
  void,
  IRootState,
  unknown,
  UnknownAction
> => {
  return (dispatch, getState) => {
    const { texts } = getState().Language;

    dispatch(validateLines(texts));
  };
};

export const validateLines = (texts: LanguageType) =>
  ({
    type: constants.VALIDATE_LINES,
    texts,
  } as const);
