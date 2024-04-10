import {
  TheoreticalMachineFunctionalityIds,
  TheoreticalMachineFunctionalityProps,
} from "@globalTypes/theoreticalMachine";

export type LineTypeOption = "condition" | "function";

export interface LineItemsProps {
  select?: "comparators" | "functions" | "lines";
  text: TheoreticalMachineFunctionalityProps["definitionString"];
  color: string;
  id?: TheoreticalMachineFunctionalityIds;
}

export interface LineTypeProps {
  selectText: string;
  text: string;
  items: LineItemsProps[];
}

export type LineTypeObject = { [key in LineTypeOption]: LineTypeProps };
