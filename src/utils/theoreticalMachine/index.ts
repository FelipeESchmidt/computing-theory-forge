import { LanguageType } from "@assets/languages";
import { getWhatTheFESMachineIsAbleToDo } from "@pages/TheoreticalMachine/Definition/constants";
import { TheoreticalMachineRecorderProps } from "@redux/TMDefinition/types";

export interface ISavedTheoreticalMachine {
  recorders: {
    name: string;
    functionalities: number[];
  }[];
}

export const minifyMachine = (
  recorders: TheoreticalMachineRecorderProps[],
): ISavedTheoreticalMachine => {
  const recordersMinified = recorders.map(({ name, functionalities }) => ({
    name,
    functionalities: functionalities.filter(({ marked }) => !!marked).map(({ id }) => id),
  }));

  return { recorders: recordersMinified };
};

export const increaseMachine = (
  minifiedMachine: ISavedTheoreticalMachine,
  texts: LanguageType,
): TheoreticalMachineRecorderProps[] => {
  const whatTheFESMachineIsAbleToDo = getWhatTheFESMachineIsAbleToDo(texts);

  const getAllFunctionalities = (ids: number[]) => {
    const filteredFuncs = whatTheFESMachineIsAbleToDo.map((func) => ({
      ...func,
      marked: ids.includes(func.id),
    }));

    return filteredFuncs;
  };

  return minifiedMachine.recorders.map(({ name, functionalities }) => ({
    name,
    functionalities: getAllFunctionalities(functionalities),
  }));
};
