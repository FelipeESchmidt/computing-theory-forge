import { StepperProps, StepProp } from "@components/Stepper/types";

export interface UseStepperHookStepProps {
  key: string;
  title: string;
  onActive: () => void;
}

export type UpdatableStepProps = Partial<Omit<StepProp, keyof UseStepperHookStepProps>>;

export interface UseStepperHookReturnProps extends StepperProps {
  nextStep: (lastStepStatus: UpdatableStepProps) => void;
  updateStepToSuccess: (stepKey?: string) => void;
  updateStepToError: (stepKey?: string) => void;
  updateStepToCompleted: (stepKey?: string) => void;
  updateStepToDefault: (stepKey?: string) => void;
}

export type UseStepperHookProps = (
  baseSteps: UseStepperHookStepProps[],
  customNumberBackground?: string,
) => UseStepperHookReturnProps;
