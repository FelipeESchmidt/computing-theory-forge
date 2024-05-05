import { LanguageType } from "@assets/languages";
import { getWhatTheFESMachineIsAbleToDo } from "@pages/TheoreticalMachine/Definition/constants";
import { TheoreticalMachineRecorderProps } from "@redux/TMDefinition/types";

type IMinifiedRecorders = `${string}@${number},${number}`;

export type IMinifiedMachine = `${IMinifiedRecorders}|${IMinifiedRecorders}`;

export const minifyMachine = (
  recorders: TheoreticalMachineRecorderProps[],
): IMinifiedMachine => {
  const minifiedMachine = recorders.map(({ name, functionalities }) => ({
    name,
    functionalities: functionalities.filter(({ marked }) => !!marked).map(({ id }) => id),
  }));

  return minifiedMachine
    .map(({ name, functionalities }) => `${name}@${functionalities.join(",")}`)
    .join(`|`) as IMinifiedMachine;
};

export const increaseMachine = (
  minifiedMachine: IMinifiedMachine,
  texts: LanguageType,
): TheoreticalMachineRecorderProps[] => {
  const whatTheFESMachineIsAbleToDo = getWhatTheFESMachineIsAbleToDo(texts);

  const minifiedMachineConstructed = minifiedMachine.split("|").map((machine) => {
    const [name, functionalities] = machine.split("@");

    return {
      name,
      functionalities: functionalities.split(",").map(Number),
    };
  });

  const getAllFunctionalities = (ids: number[]) => {
    const filteredFuncs = whatTheFESMachineIsAbleToDo.map((func) => ({
      ...func,
      marked: ids.includes(func.id),
    }));

    return filteredFuncs;
  };

  return minifiedMachineConstructed.map(({ name, functionalities }) => ({
    name,
    functionalities: getAllFunctionalities(functionalities),
  }));
};
