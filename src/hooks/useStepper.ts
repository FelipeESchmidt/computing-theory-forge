import { StepperProps, StepProp } from "@components/Stepper/types";
import React from "react";

interface UseStepperHookStepProps {
  key: string;
  title: string;
}

type UpdatableStepProps = Partial<Omit<StepProp, keyof UseStepperHookStepProps>>;

interface UseStepperHookReturnProps extends StepperProps {
  nextStep: (lastStepStatus: UpdatableStepProps) => void;
  updateStepToSuccess: (stepKey: string) => void;
  updateStepToError: (stepKey: string) => void;
  updateStepToCompleted: (stepKey: string) => void;
}

type UseStepperHookProps = (
  baseSteps: UseStepperHookStepProps[],
  customNumberBackground?: string,
) => UseStepperHookReturnProps;

const getDefaultStepProps = (step: UseStepperHookStepProps): StepProp => ({
  ...step,
  success: false,
  withError: false,
  completed: false,
});

export const useStepper: UseStepperHookProps = (
  baseSteps,
  customNumberBackground,
): UseStepperHookReturnProps => {
  const [activeStep, setActiveStep] = React.useState<string>(baseSteps[0].key);
  const [steps, setSteps] = React.useState<StepProp[]>(
    baseSteps.map(getDefaultStepProps),
  );

  const updateStep = (stepKey: string, newStep: UpdatableStepProps) => {
    setSteps((prevSteps) =>
      prevSteps.map((step) => (step.key === stepKey ? { ...step, ...newStep } : step)),
    );
  };

  const nextStep = (lastStepStatus: UpdatableStepProps) => {
    const currentStepIndex = steps.findIndex((step) => step.key === activeStep);
    updateStep(activeStep, lastStepStatus);

    const nextStep = steps[currentStepIndex + 1];
    const hasNextStep = !!nextStep;
    if (!hasNextStep) return;
    setActiveStep(nextStep.key);
    updateStep(nextStep.key, { success: false, withError: false, completed: false });
  };

  const jumpToStep = (stepKey: string) => {
    setActiveStep(stepKey);
    updateStep(stepKey, { success: false, withError: false, completed: false });
  };

  const updateStepToSuccess = (stepKey: string) => {
    updateStep(stepKey, { success: true, withError: false });
  };

  const updateStepToError = (stepKey: string) => {
    updateStep(stepKey, { success: false, withError: true, completed: false });
  };

  const updateStepToCompleted = (stepKey: string) => {
    updateStep(stepKey, { success: true, withError: false, completed: true });
  };

  return {
    steps,
    activeStep,
    customNumberBackground,
    nextStep,
    jumpToStep,
    updateStepToSuccess,
    updateStepToError,
    updateStepToCompleted,
  };
};
