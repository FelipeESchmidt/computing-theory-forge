import { languages, LanguageType } from "@assets/languages";

import { TheoreticalSteps } from "./types";

export const getTheoreticalMachineSteps = (
  setStep: React.Dispatch<React.SetStateAction<TheoreticalSteps>>,
  texts: LanguageType = languages.BR,
) => [
  {
    key: "definition",
    title: texts.theoreticalMachine.definitionStep.stepTitle,
    onActive: () => setStep("definition"),
  },
  {
    key: "programming",
    title: texts.theoreticalMachine.programmingStep.stepTitle,
    onActive: () => setStep("programming"),
  },
  {
    key: "runnable",
    title: texts.theoreticalMachine.runnableStep.stepTitle,
    onActive: () => setStep("runnable"),
  },
];
