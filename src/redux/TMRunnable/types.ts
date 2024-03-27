import { TheoreticalMachineFunctionalityDefinitionProps } from "@redux/TMDefinition/types";

import { generateCode, resetCode, setInitialValue, startInitialValues } from "./actions";
import { realFunction } from "./constants";

export type RecorderActions = ReturnType<
  | typeof generateCode
  | typeof resetCode
  | typeof setInitialValue
  | typeof startInitialValues
>;

export interface InitialValueObject {
  [key: TheoreticalMachineFunctionalityDefinitionProps["recorder"]]: number;
}

export type FunctionType = keyof typeof realFunction;
