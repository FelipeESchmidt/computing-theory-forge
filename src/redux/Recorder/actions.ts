import {
  TheoreticalMachineFunctionalityProps,
  TheoreticalMachineRecorderLimits,
} from "@globalTypes/theoreticalMachine";

import * as constants from "./constants";
import { TheoreticalMachineRecorderProps } from "./types";

export const addRecorder = (functionalities: TheoreticalMachineFunctionalityProps[]) =>
  ({
    type: constants.ADD_RECORDER,
    functionalities,
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
