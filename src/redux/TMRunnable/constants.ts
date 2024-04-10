import { LanguageType } from "@assets/languages";

import { RealFunctionProps } from "./types";

export const START_INITIAL_VALUES = "@TMRunnable/START_INITIAL_VALUES";
export const SET_INITIAL_VALUE = "@TMRunnable/SET_INITIAL_VALUE";
export const GENERATE_CODE = "@TMRunnable/GENERATE_CODE";
export const RESET_CODE = "@TMRunnable/RESET_CODE";

export const getFirstCompLine = (texts: LanguageType) =>
  `'\t${texts.theoreticalMachine.runnableStep.programTexts.initialInstruction}'`;

const replaceConstants = (
  text: string,
  recorder: string,
  line: number,
  nextLine: number | "Return",
) => {
  return text
    .replace("{{recorder}}", recorder)
    .replace("{{line}}", `${line}`)
    .replace("{{nextLine}}", `${nextLine}`);
};

export const ifComps = {
  good: (
    recorder: string,
    line: number,
    nextLine: number | "Return",
    texts: LanguageType,
  ) =>
    `'\t${replaceConstants(
      texts.theoreticalMachine.runnableStep.programTexts.ifGood,
      recorder,
      line,
      nextLine,
    )}'`,
  bad: (
    recorder: string,
    line: number,
    nextLine: number | "Return",
    texts: LanguageType,
  ) =>
    `'\t${replaceConstants(
      texts.theoreticalMachine.runnableStep.programTexts.ifBad,
      recorder,
      line,
      nextLine,
    )}'`,
};

export const realFunction: RealFunctionProps = {
  sum: {
    func: (recorderName: string) => `${recorderName} += 1;`,
    compLine: (recorder: string, line: number, nextLine: number | "Return", texts) =>
      `'\t${replaceConstants(
        texts.theoreticalMachine.runnableStep.programTexts.sum,
        recorder,
        line,
        nextLine,
      )}'`,
  },
  subtract: {
    func: (recorderName: string) => `${recorderName} -= 1;`,
    compLine: (recorder: string, line: number, nextLine: number | "Return", texts) =>
      `'\t${replaceConstants(
        texts.theoreticalMachine.runnableStep.programTexts.subtract,
        recorder,
        line,
        nextLine,
      )}'`,
  },
  double: {
    func: (recorderName: string) => `${recorderName} *= 2;`,
    compLine: (recorder: string, line: number, nextLine: number | "Return", texts) =>
      `'\t${replaceConstants(
        texts.theoreticalMachine.runnableStep.programTexts.double,
        recorder,
        line,
        nextLine,
      )}'`,
  },
  exponentialize: {
    func: (recorderName: string) => `${recorderName} *= ${recorderName};`,
    compLine: (recorder: string, line: number, nextLine: number | "Return", texts) =>
      `'\t${replaceConstants(
        texts.theoreticalMachine.runnableStep.programTexts.exponentialize,
        recorder,
        line,
        nextLine,
      )}'`,
  },
};
