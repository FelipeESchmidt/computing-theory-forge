export type LineTypeOption = "condition" | "function";

export interface LineItemsProps {
  select?: "comparators" | "functions" | "lines";
  text: string;
  color: string;
}

export interface LineTypeProps {
  selectText: string;
  text: string;
  items: LineItemsProps[];
}

export type LineTypeObject = { [key in LineTypeOption]: LineTypeProps };
