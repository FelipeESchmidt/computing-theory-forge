import { LanguageType } from "@assets/languages";
import { IRootState } from "@redux/store";
import {
  TheoreticalMachineFunctionalityDefinitionProps,
  TheoreticalMachineRecorderProps,
} from "@redux/TMDefinition/types";
import { LineProps } from "@redux/TMProgramming/types";
import { UnknownAction } from "redux";
import { ThunkAction } from "redux-thunk";

import * as constants from "./constants";

export const generateCodeWithThunk = (
  recorders: TheoreticalMachineRecorderProps[],
  lines: LineProps[],
  machineOutputs: TheoreticalMachineFunctionalityDefinitionProps[],
): ThunkAction<void, IRootState, unknown, UnknownAction> => {
  return (dispatch, getState) => {
    const { texts } = getState().Language;

    dispatch(generateCode(recorders, lines, machineOutputs, texts));
  };
};

export const generateCode = (
  recorders: TheoreticalMachineRecorderProps[],
  lines: LineProps[],
  machineOutputs: TheoreticalMachineFunctionalityDefinitionProps[],
  texts: LanguageType,
) =>
  ({
    type: constants.GENERATE_CODE,
    recorders,
    lines,
    machineOutputs,
    texts,
  } as const);

export const resetCode = () =>
  ({
    type: constants.RESET_CODE,
  } as const);

export const setInitialValue = (recorderName: string, value: number) =>
  ({
    type: constants.SET_INITIAL_VALUE,
    recorderName,
    value,
  } as const);

export const startInitialValues = (
  machineInputs: TheoreticalMachineFunctionalityDefinitionProps[],
) =>
  ({
    type: constants.START_INITIAL_VALUES,
    machineInputs,
  } as const);
