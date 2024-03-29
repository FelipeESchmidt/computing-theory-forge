import { LineTypeObject } from "./types";

/* Objeto que identifica o que cada linha pode ser de acordo com 'if' ou 'function' */
export const lineTypes: LineTypeObject = {
  condition: {
    selectText: "Condição",
    text: "se",
    items: [
      { select: "comparators", text: "", color: "info" },
      { text: "então vá_para", color: "warning" },
      { select: "lines", text: "", color: "success" },
      { text: "senão vá_para", color: "warning" },
      { select: "lines", text: "", color: "success" },
    ],
  },
  function: {
    selectText: "Função",
    text: "faça",
    items: [
      { select: "functions", text: "", color: "info" },
      { text: "vá_para", color: "warning" },
      { select: "lines", text: "", color: "success" },
    ],
  },
};

export const lineOptions = Object.entries(lineTypes).map(([option, { selectText }]) => ({
  value: option,
  label: selectText,
}));
