export const CHANGE_MODE = "@TMDefinition/CHANGE_MODE";
export const ADD_RECORDER = "@TMDefinition/ADD_RECORDER";
export const REMOVE_RECORDER = "@TMDefinition/REMOVE_RECORDER";
export const MARK_RECORDER = "@TMDefinition/MARK_RECORDER";
export const GENERATE_RANDOM_MACHINE = "@TMDefinition/GENERATE_RANDOM_MACHINE";
export const CREATE_THEORETICAL_MACHINE = "@TMDefinition/CREATE_THEORETICAL_MACHINE";

export const replaceableParts = [
  { to: "{recordersTimes}", for: "allRecordersTimes" },
  { to: "{functionalities}", for: "functionalities" },
  { to: "{recordersPlus}", for: "allRecordersPlus" },
  { to: "{recordersLess}", for: "allRecordersLess" },
  { to: "{recordersZero}", for: "allRecordersZero" },
  { to: "{recordersExponential}", for: "allRecordersExponential" },
  { to: "{recorders}", for: "allRecorders" },
  { to: "{recorder}", for: "name" },
  { to: "{length}", for: "length" },
  { to: "{output}", for: "output" },
  { to: "{input}", for: "input" },
] as const;

const lengthValues = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];

export const getLengthValue = (length: number) => {
  const numberAsString = length.toString();
  return numberAsString
    .split("")
    .map((n) => lengthValues[parseInt(n)])
    .join("");
};
