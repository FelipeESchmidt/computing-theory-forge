import { TheoreticalMachineFunctionalityProps } from "@globalTypes/theoreticalMachine";
import { machineDefinition } from "@pages/TheoreticalMachine/Definition/constants";
import { getValueFromObject } from "@utils/index";

import { getLengthValue, replaceableParts } from "./constants";
import {
  TheoreticalMachineFunctionalityDefinitionProps,
  TheoreticalMachineRecorderFunctionalityProps,
  TheoreticalMachineRecorderProps,
} from "./types";

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

const filterBy = (type: string) => (f: TheoreticalMachineRecorderFunctionalityProps) =>
  f.type === type && f.marked;

const replaceInfo = (string: string, search: string, value: string) =>
  string.replace(new RegExp(search, "g"), value);

const normalizeFuncs =
  (recorder: TheoreticalMachineRecorderProps, type: string) =>
  (func: TheoreticalMachineRecorderFunctionalityProps) => ({
    type,
    recorder: recorder.name,
    definition: replaceInfo(func.definitionString, "{recorder}", recorder.name),
  });

const betterAll = (name: string, recordersAll: string, replaceBy: string) =>
  replaceInfo(recordersAll, name, replaceBy);

const normalizeDefinition = (
  definition: string,
  name: string,
  allRecorders: string[],
) => {
  let definitionNormalized = definition;
  const allRecordersJoined = allRecorders.join(",");
  const replaceableObj = {
    name,
    allRecorders: allRecordersJoined,
    length: getLengthValue(allRecorders.length),
    allRecordersTimes: betterAll(name, allRecordersJoined, `${name}*2`),
    allRecordersPlus: betterAll(name, allRecordersJoined, `${name}+1`),
    allRecordersLess: betterAll(name, allRecordersJoined, `${name}-1`),
    allRecordersZero: betterAll(name, allRecordersJoined, "0"),
    allRecordersExp: betterAll(name, allRecordersJoined, `${name}^2`),
  };
  replaceableParts.forEach((replaceable) => {
    if (Object.keys(replaceableObj).includes(replaceable.for))
      definitionNormalized = replaceInfo(
        definitionNormalized,
        replaceable.to,
        getValueFromObject(replaceableObj, replaceable.for),
      );
  });
  return definitionNormalized;
};

const generateMachineDefinition = (recorders: TheoreticalMachineRecorderProps[]) => {
  const definitions: string[] = [];
  const definitionsName: string[] = [];
  const allRecorders: string[] = recorders.map((r) => r.name);
  recorders.forEach((recorder) => {
    recorder.functionalities
      .filter((r) => r.marked)
      .forEach((recFunc) => {
        definitions.push(recFunc.definitionStringFull);
        definitionsName.push(recorder.name);
      });
  });
  const normalizedDefinitions = definitions
    .map((def, i) => normalizeDefinition(def, definitionsName[i], allRecorders))
    .sort();
  return normalizedDefinitions.join("\n");
};

const generateMainDefinition = (recorders: TheoreticalMachineRecorderProps[]) => {
  let mainDefinition = machineDefinition;
  const definitions: string[] = [];
  const inputs: TheoreticalMachineRecorderFunctionalityProps[] = [];
  const outputs: TheoreticalMachineRecorderFunctionalityProps[] = [];
  recorders.forEach((recorder) => {
    inputs.push(...recorder.functionalities.filter(filterBy("input")));
    outputs.push(...recorder.functionalities.filter(filterBy("output")));
    recorder.functionalities
      .filter((r) => r.marked)
      .forEach((recFunc) => {
        definitions.push(
          replaceInfo(recFunc.definitionString, "{recorder}", recorder.name),
        );
      });
  });
  definitions.sort();
  const replaceableObj = {
    length: getLengthValue(recorders.length),
    input: getLengthValue(inputs.length),
    output: getLengthValue(outputs.length),
    functionalities: definitions.join(", "),
  };
  replaceableParts.forEach((replaceable) => {
    if (Object.keys(replaceableObj).includes(replaceable.for))
      mainDefinition = replaceInfo(
        mainDefinition,
        replaceable.to,
        getValueFromObject(replaceableObj, replaceable.for),
      );
  });
  return mainDefinition;
};

export const getRecordersFilteredBy = (
  recorderFuncs: TheoreticalMachineRecorderFunctionalityProps[],
  recorder: TheoreticalMachineRecorderProps,
  type: string,
) => {
  const recorderFunctions = recorderFuncs.filter(filterBy(type));
  return recorderFunctions.map(normalizeFuncs(recorder, type));
};

export const generateTheoreticalMachine = (
  recorders: TheoreticalMachineRecorderProps[],
) => {
  const inputs: TheoreticalMachineFunctionalityDefinitionProps[] = [];
  const outputs: TheoreticalMachineFunctionalityDefinitionProps[] = [];
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
    inputs.push(...getRecordersFilteredBy(recorderFunctionalities, recorder, "input"));
    outputs.push(...getRecordersFilteredBy(recorderFunctionalities, recorder, "output"));
  });
  functions.sort();
  comparators.sort();
  const mainDefinition = generateMainDefinition(recorders);
  const funcsDefinition = generateMachineDefinition(recorders);
  return {
    inputs,
    outputs,
    functions,
    comparators,
    definition: mainDefinition + "\n\n" + funcsDefinition,
  };
};
