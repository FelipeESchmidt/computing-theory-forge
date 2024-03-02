import {
  TheoreticalMachineFunctionalityProps,
  TheoreticalMachineRecorderLimits,
} from "@globalTypes/theoreticalMachine";

import { createNewRecorder, markRecorderFunctionality } from "./functions";
import { TheoreticalMachineRecorderProps } from "./types";

/* Vai retornar mais TRUE do que FALSE, sendo mais difícil uma func não ser selecionada =D */
const generateRandomBoolean = () => Math.random() < 0.67;

const generateRandomNumber = ({ min = 2, max = 5 }) =>
  parseInt(`${Math.random() * (max - min) + min}`);

export const generateRandomMachine = (
  functionalities: TheoreticalMachineFunctionalityProps[],
  recorderLimits: TheoreticalMachineRecorderLimits,
) => {
  const recorders = [] as TheoreticalMachineRecorderProps[];

  Array.from(new Array(generateRandomNumber(recorderLimits))).forEach(() => {
    recorders.push(createNewRecorder(functionalities, recorders));
  });

  recorders.forEach((_, recorderId) => {
    functionalities.forEach((__, funcId) => {
      if (generateRandomBoolean())
        markRecorderFunctionality(recorderId, funcId, recorders);
    });
  });

  return recorders;
};
