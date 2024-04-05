import { languages, LanguageType } from "@assets/languages";
import {
  TheoreticalMachineFunctionalityProps,
  TheoreticalMachineRecorderLimits,
} from "@globalTypes/theoreticalMachine";

export const recorderLimits = {
  min: 1,
  max: 16,
} as TheoreticalMachineRecorderLimits;

/* String para gerar o cabeçalho da definição da máquina */
export const getMachineDefinition = (texts: LanguageType = languages.BR) =>
  texts.theoreticalMachine.definitionStep.definition;

/* Objeto que identifica quais as funcionalidades possíveis para cada registrador */
export const getWhatTheFGLMachineIsAbleToDo = (
  texts: LanguageType = languages.BR,
): TheoreticalMachineFunctionalityProps[] => [
  {
    id: 1,
    name: texts.theoreticalMachine.definitionStep.functionalities.store.title,
    nameResponsive: "IN",
    definitionString:
      texts.theoreticalMachine.definitionStep.functionalities.store.definition,
    definitionStringFull:
      texts.theoreticalMachine.definitionStep.functionalities.store.definitionFull,
    type: "input",
  },
  {
    id: 2,
    name: texts.theoreticalMachine.definitionStep.functionalities.return.title,
    nameResponsive: "OUT",
    definitionString:
      texts.theoreticalMachine.definitionStep.functionalities.return.definition,
    definitionStringFull:
      texts.theoreticalMachine.definitionStep.functionalities.return.definitionFull,
    type: "output",
  },
  {
    id: 3,
    name: texts.theoreticalMachine.definitionStep.functionalities.sum.title,
    nameResponsive: "+1",
    definitionString:
      texts.theoreticalMachine.definitionStep.functionalities.sum.definition,
    definitionStringFull:
      texts.theoreticalMachine.definitionStep.functionalities.sum.definitionFull,
    type: "function",
  },
  {
    id: 4,
    name: texts.theoreticalMachine.definitionStep.functionalities.subtract.title,
    nameResponsive: "-1",
    definitionString:
      texts.theoreticalMachine.definitionStep.functionalities.subtract.definition,
    definitionStringFull:
      texts.theoreticalMachine.definitionStep.functionalities.subtract.definitionFull,
    type: "function",
  },
  {
    id: 5,
    name: texts.theoreticalMachine.definitionStep.functionalities.double.title,
    nameResponsive: "*2",
    definitionString:
      texts.theoreticalMachine.definitionStep.functionalities.double.definition,
    definitionStringFull:
      texts.theoreticalMachine.definitionStep.functionalities.double.definitionFull,
    type: "function",
  },
  {
    id: 6,
    name: texts.theoreticalMachine.definitionStep.functionalities.exponentialize.title,
    nameResponsive: "^2",
    definitionString:
      texts.theoreticalMachine.definitionStep.functionalities.exponentialize.definition,
    definitionStringFull:
      texts.theoreticalMachine.definitionStep.functionalities.exponentialize
        .definitionFull,
    type: "function",
  },
  {
    id: 7,
    name: texts.theoreticalMachine.definitionStep.functionalities.compareZero.title,
    nameResponsive: "=0",
    definitionString:
      texts.theoreticalMachine.definitionStep.functionalities.compareZero.definition,
    definitionStringFull:
      texts.theoreticalMachine.definitionStep.functionalities.compareZero.definitionFull,
    type: "comparator",
  },
];
