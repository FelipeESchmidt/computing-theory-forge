import { LanguageType } from "@assets/languages";
import { TheoreticalMachineFunctionsIds } from "@globalTypes/theoreticalMachine";
import { TheoreticalMachineFunctionalityDefinitionProps } from "@redux/TMDefinition/types";

import { generateCode, resetCode, setInitialValue, startInitialValues } from "./actions";

export type RecorderActions = ReturnType<
  | typeof generateCode
  | typeof resetCode
  | typeof setInitialValue
  | typeof startInitialValues
>;

export interface InitialValueObject {
  [key: TheoreticalMachineFunctionalityDefinitionProps["recorder"]]: number;
}

export interface RealFunctionProp {
  func: (recorderName: string) => string;
  compLine: (
    recorder: string,
    line: number,
    nextLine: number | "Return",
    texts: LanguageType,
  ) => string;
}

export type RealFunctionProps = {
  [key in TheoreticalMachineFunctionsIds]: RealFunctionProp;
};
