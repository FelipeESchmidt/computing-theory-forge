import { TheoreticalSteps } from "./types";

export const getTheoreticalMachineSteps = (
  setStep: React.Dispatch<React.SetStateAction<TheoreticalSteps>>,
) => [
  {
    key: "definition",
    title: "Definição",
    onActive: () => setStep("definition"),
  },
  {
    key: "programming",
    title: "Programação",
    onActive: () => setStep("programming"),
  },
  {
    key: "runnable",
    title: "Executável",
    onActive: () => setStep("runnable"),
  },
];
