import {
  TheoreticalMachineFunctionalityDefinitionProps,
  TheoreticalMachineRecorderProps,
} from "@redux/TMDefinition/types";
import { LineProps } from "@redux/TMProgramming/types";

import * as constants from "./constants";

export const generateCode = (
  recorders: TheoreticalMachineRecorderProps[],
  lines: LineProps[],
  machineOutputs: TheoreticalMachineFunctionalityDefinitionProps[],
) =>
  ({
    type: constants.GENERATE_CODE,
    recorders,
    lines,
    machineOutputs,
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
