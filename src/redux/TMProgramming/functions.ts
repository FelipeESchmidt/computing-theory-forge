import { LineProps } from "./types";

const mustHaveAtLeastTwoLines = (lines: LineProps[]) => {
  const minimumLines = 2;
  if (lines.length < minimumLines) {
    return `Programa precisa ter pelo menos ${minimumLines} linhas!`;
  }
  return "";
};

const mustHaveLinesTypeSelected = (lines: LineProps[]) => {
  const linesWithOutType = lines.filter((line) => !line.type);
  if (linesWithOutType.length) {
    return `Existe uma linha em branco!`;
  }
  return "";
};

const mustHaveCompletedLines = (lines: LineProps[]) => {
  const linesItemsEmpty = [];
  lines.forEach((line) => {
    const emptyItems = line.items.filter((item) => !item.text);
    if (emptyItems.length) linesItemsEmpty.push(...emptyItems);
  });
  if (linesItemsEmpty.length) {
    return `Existe uma linha com selecionador em branco!`;
  }
  return "";
};

const mustHaveAtLeastOneReturn = (lines: LineProps[]) => {
  const linesAsReturn = [];
  lines.forEach((line) => {
    linesAsReturn.push(...line.items.filter((item) => item.text === "-1"));
  });
  if (!linesAsReturn.length) {
    return `O programa precisa conter ao menos um retorno no programa!`;
  }
  return "";
};

const validations = [
  mustHaveAtLeastTwoLines,
  mustHaveLinesTypeSelected,
  mustHaveCompletedLines,
  mustHaveAtLeastOneReturn,
];

export const validadePossibleErrors = (lines: LineProps[]) => {
  let error = "";
  validations.every((validation) => {
    const e = validation(lines);
    error = e;
    return !e;
  });
  return error;
};
