import { LanguageType } from "@assets/languages";

import { getRecordersFilteredBy } from "./functions";
import {
  TheoreticalMachineFunctionalityDefinitionProps,
  TheoreticalMachineRecorderProps,
} from "./types";

/* Valida se programa tem no mínimo 4 funções */
const mustHaveAtLeastFourFunctions = ({
  functions,
  texts,
}: {
  functions: TheoreticalMachineFunctionalityDefinitionProps[];
  texts: LanguageType;
}) => {
  const minimumFunctions = 4;
  if (functions.length < minimumFunctions) {
    return texts.theoreticalMachine.definitionStep.notEnoughFunctions.replace(
      "{{n}}",
      minimumFunctions.toString(),
    );
  }
  return "";
};

/* Valida se programa tem no mínimo 3 comparadores */
const mustHaveAtLeastThreeComparators = ({
  comparators,
  texts,
}: {
  comparators: TheoreticalMachineFunctionalityDefinitionProps[];
  texts: LanguageType;
}) => {
  const minimumComparators = 3;
  if (comparators.length < minimumComparators) {
    return texts.theoreticalMachine.definitionStep.notEnoughComparators.replace(
      "{{n}}",
      minimumComparators.toString(),
    );
  }
  return "";
};

const validations = [mustHaveAtLeastFourFunctions, mustHaveAtLeastThreeComparators];

/* Roda todas as validações e retorna o erro */
export const validateFunctionalities = (
  recorders: TheoreticalMachineRecorderProps[],
  texts: LanguageType,
) => {
  let error = "";
  const functions: TheoreticalMachineFunctionalityDefinitionProps[] = [];
  const comparators: TheoreticalMachineFunctionalityDefinitionProps[] = [];
  recorders.forEach((recorder) => {
    const recorderFunctionalities = recorder.functionalities;
    functions.push(
      ...getRecordersFilteredBy(recorderFunctionalities, recorder, "function"),
    );
    comparators.push(
      ...getRecordersFilteredBy(recorderFunctionalities, recorder, "comparator"),
    );
  });
  validations.every((validation) => {
    const e = validation({ functions, comparators, texts });
    error = e;
    return !e;
  });
  return error;
};
