import { LanguageType } from "@assets/languages";

import { LineProps } from "./types";

const mustHaveAtLeastTwoLines = (lines: LineProps[], texts: LanguageType) => {
  const minimumLines = 2;
  if (lines.length < minimumLines) {
    return texts.theoreticalMachine.programmingStep.notEnoughLines.replace(
      "{{lines}}",
      `${minimumLines}`,
    );
  }
  return "";
};

const mustHaveLinesTypeSelected = (lines: LineProps[], texts: LanguageType) => {
  const linesWithOutType = lines.filter((line) => !line.type);
  if (linesWithOutType.length) {
    return texts.theoreticalMachine.programmingStep.emptyLine;
  }
  return "";
};

const mustHaveCompletedLines = (lines: LineProps[], texts: LanguageType) => {
  const linesItemsEmpty = [];
  lines.forEach((line) => {
    const emptyItems = line.items.filter((item) => !item.text);
    if (emptyItems.length) linesItemsEmpty.push(...emptyItems);
  });
  if (linesItemsEmpty.length) {
    return texts.theoreticalMachine.programmingStep.emptySelector;
  }
  return "";
};

const mustHaveAtLeastOneReturn = (lines: LineProps[], texts: LanguageType) => {
  const linesAsReturn = [];
  lines.forEach((line) => {
    linesAsReturn.push(...line.items.filter((item) => item.text === "-1"));
  });
  if (!linesAsReturn.length) {
    return texts.theoreticalMachine.programmingStep.notEnoughReturn;
  }
  return "";
};

const validations = [
  mustHaveAtLeastTwoLines,
  mustHaveLinesTypeSelected,
  mustHaveCompletedLines,
  mustHaveAtLeastOneReturn,
];

export const validadePossibleErrors = (lines: LineProps[], texts: LanguageType) => {
  let error = "";
  validations.every((validation) => {
    const e = validation(lines, texts);
    error = e;
    return !e;
  });
  return error;
};
