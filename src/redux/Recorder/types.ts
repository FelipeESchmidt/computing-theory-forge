import { TheoreticalMachineFunctionalityProps } from "@globalTypes/theoreticalMachine";

import { addRecorder, markFunctionality, randomMachine } from "./actions";

export interface TheoreticalMachineRecorderProps {
  name: string;
  functionalities: (TheoreticalMachineFunctionalityProps & { marked: boolean })[];
}

export type RecorderActions = ReturnType<
  typeof addRecorder | typeof markFunctionality | typeof randomMachine
>;
