export type TheoreticalMachineFunctionalityType =
  | "input"
  | "output"
  | "function"
  | "comparator";

export interface TheoreticalMachineFunctionalityProps {
  id: number;
  name: string;
  nameResponsive: string;
  definitionString: string;
  definitionStringFull: string;
  type: TheoreticalMachineFunctionalityType;
}

export interface TheoreticalMachineRecorderLimits {
  min: number;
  max: number;
}
