import {
  TheoreticalMachineFunctionalityIds,
  TheoreticalMachineFunctionalityProps,
} from "@globalTypes/theoreticalMachine";

import {
  addRecorder,
  createTheoreticalMachine,
  markFunctionality,
  randomMachine,
  removeRecorder,
} from "./actions";

export interface TheoreticalMachineRecorderFunctionalityProps
  extends TheoreticalMachineFunctionalityProps {
  marked: boolean;
}

export interface TheoreticalMachineFunctionalityDefinitionProps {
  id: TheoreticalMachineFunctionalityIds;
  type: string;
  recorder: string;
  definition: string;
}

export interface TheoreticalMachineRecorderProps {
  name: string;
  functionalities: TheoreticalMachineRecorderFunctionalityProps[];
}

export type RecorderActions = ReturnType<
  | typeof addRecorder
  | typeof removeRecorder
  | typeof markFunctionality
  | typeof randomMachine
  | typeof createTheoreticalMachine
>;
