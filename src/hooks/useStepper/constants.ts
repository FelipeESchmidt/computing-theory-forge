import { StepProp } from "@components/Stepper/types";

import { UseStepperHookStepProps } from "./types";

export const getDefaultStepProps = (step: UseStepperHookStepProps): StepProp => ({
  ...step,
  success: false,
  withError: false,
  completed: false,
});
