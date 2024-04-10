import { LanguageType } from "@assets/languages";
import { getLineTypes } from "@pages/TheoreticalMachine/Programming/constants";
import { LineItemsProps } from "@pages/TheoreticalMachine/Programming/types";

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

export const adaptProgrammingLinesLanguage = (
  lines: LineProps[],
  texts: LanguageType,
) => {
  const { condition: conditionType, function: functionType } = getLineTypes(texts);

  const translateFunctionality = (lineItem: LineItemsProps) => {
    if (!lineItem.text || !lineItem.id) return "";

    const functionalitySplitted = lineItem.text.split("_");
    const recorderName = functionalitySplitted[functionalitySplitted.length - 1];

    const definition =
      texts.theoreticalMachine.definitionStep.functionalities[lineItem.id].definition;
    return definition.replace(/{recorder}/g, recorderName);
  };

  const translateCondition = (items: LineItemsProps[]) => {
    const newItems = [...conditionType.items];

    const conditionId = items[0].id;
    const comparatorsSelection = translateFunctionality(items[0]);
    const toGoLineSelection = items[2].text;
    const elseGoLineSelection = items[4].text;

    newItems[0].id = conditionId;
    newItems[0].text = comparatorsSelection;
    newItems[2].text = toGoLineSelection;
    newItems[4].text = elseGoLineSelection;
    return [...conditionType.items];
  };

  const translateFunction = (items: LineItemsProps[]) => {
    const newItems = [...functionType.items];

    const functionId = items[0].id;
    const functionSelection = translateFunctionality(items[0]);
    const goToLineSelection = items[2].text;

    newItems[0].id = functionId;
    newItems[0].text = functionSelection;
    newItems[2].text = goToLineSelection;
    return [...functionType.items];
  };

  return lines.map((line) => {
    if (line.type === "condition") {
      return {
        type: line.type,
        items: translateCondition(line.items),
      };
    }
    if (line.type === "function") {
      return {
        type: line.type,
        items: translateFunction(line.items),
      };
    }
    return line;
  });
};
