import { LanguageType } from "@assets/languages";
import {
  TheoreticalMachineFunctionalityProps,
  TheoreticalMachineRecorderLimits,
} from "@globalTypes/theoreticalMachine";
import { IRootState } from "@redux/store";
import { UnknownAction } from "redux";
import { ThunkAction } from "redux-thunk";

import * as constants from "./constants";
import { TheoreticalMachineRecorderProps } from "./types";

export const addRecorder = (functionalities: TheoreticalMachineFunctionalityProps[]) =>
  ({
    type: constants.ADD_RECORDER,
    functionalities,
  } as const);

export const removeRecorder = (recorderId: number) =>
  ({
    type: constants.REMOVE_RECORDER,
    recorderId,
  } as const);

export const markFunctionality = (recorderId: number, functionalityId: number) =>
  ({
    type: constants.MARK_RECORDER,
    functionalityId,
    recorderId,
  } as const);

export const randomMachine = (
  functionalities: TheoreticalMachineFunctionalityProps[],
  recorderLimits: TheoreticalMachineRecorderLimits,
) =>
  ({
    type: constants.GENERATE_RANDOM_MACHINE,
    functionalities,
    recorderLimits,
  } as const);

export const createTheoreticalMachineWithThunk = (
  recorders: TheoreticalMachineRecorderProps[],
): ThunkAction<void, IRootState, unknown, UnknownAction> => {
  return (dispatch, getState) => {
    const { texts } = getState().Language;

    dispatch(createTheoreticalMachine(recorders, texts));
  };
};

export const createTheoreticalMachine = (
  recorders: TheoreticalMachineRecorderProps[],
  texts: LanguageType,
) =>
  ({
    type: constants.CREATE_THEORETICAL_MACHINE,
    recorders,
    texts,
  } as const);
