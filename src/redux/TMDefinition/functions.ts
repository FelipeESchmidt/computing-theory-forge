import { TheoreticalMachineFunctionalityProps } from "@globalTypes/theoreticalMachine";

import { TheoreticalMachineRecorderProps } from "./types";

const normalizeFunctionalities = (
  functionalities: TheoreticalMachineFunctionalityProps[],
) => {
  return functionalities.map((func) => ({
    ...func,
    marked: false,
  }));
};

/* Cria novo Registrador e adiciona todas funcionalidades possíveis a ele */
export const createNewRecorder = (
  functionalities: TheoreticalMachineFunctionalityProps[],
  recorders: TheoreticalMachineRecorderProps[],
): TheoreticalMachineRecorderProps => {
  const lastRecorder = [...recorders].pop();
  const newRecorderName = lastRecorder
    ? lastRecorder.name.charCodeAt(0)
    : "@".charCodeAt(0);
  return {
    name: String.fromCharCode(newRecorderName + 1),
    functionalities: normalizeFunctionalities(functionalities),
  };
};

/* Seleciona funcionalidade para um registrador */
export const markRecorderFunctionality = (
  recorderId: number,
  functionalityId: number,
  recorders: TheoreticalMachineRecorderProps[],
) => {
  const recorder = recorders[recorderId];
  const functionality = recorder.functionalities[functionalityId];
  functionality.marked = !functionality.marked;
  return recorders;
};
