import { languages, LanguageType } from "@assets/languages";

import { LineTypeObject } from "./types";

/* Objeto que identifica o que cada linha pode ser de acordo com 'if' ou 'function' */
export const getLineTypes = (texts: LanguageType = languages.BR): LineTypeObject => ({
  condition: {
    selectText: texts.theoreticalMachine.programmingStep.condition.selectText,
    text: texts.theoreticalMachine.programmingStep.condition.text,
    items: [
      { select: "comparators", text: "", color: "info" },
      {
        text: texts.theoreticalMachine.programmingStep.condition.thenGoTo,
        color: "warning",
      },
      { select: "lines", text: "", color: "success" },
      {
        text: texts.theoreticalMachine.programmingStep.condition.elseGoTo,
        color: "warning",
      },
      { select: "lines", text: "", color: "success" },
    ],
  },
  function: {
    selectText: texts.theoreticalMachine.programmingStep.function.selectText,
    text: texts.theoreticalMachine.programmingStep.function.text,
    items: [
      { select: "functions", text: "", color: "info" },
      { text: texts.theoreticalMachine.programmingStep.function.goTo, color: "warning" },
      { select: "lines", text: "", color: "success" },
    ],
  },
});

export const lineOptions = Object.entries(getLineTypes()).map(
  ([option, { selectText }]) => ({
    value: option,
    label: selectText,
  }),
);
