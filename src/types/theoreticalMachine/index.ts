export type TheoreticalMachineFunctionalityType =
  | "input"
  | "output"
  | "function"
  | "comparator";

export type TheoreticalMachineFunctionsIds =
  | "sum"
  | "subtract"
  | "double"
  | "exponentialize";

export type TheoreticalMachineFunctionalityIds =
  | TheoreticalMachineFunctionsIds
  | "store"
  | "return"
  | "compareZero";

export interface TheoreticalMachineFunctionalityProps {
  id: number;
  name: string;
  nameResponsive: string;
  definitionString: string;
  definitionStringFull: string;
  type: TheoreticalMachineFunctionalityType;
  functionalityId: TheoreticalMachineFunctionalityIds;
}

export interface TheoreticalMachineRecorderLimits {
  min: number;
  max: number;
}
