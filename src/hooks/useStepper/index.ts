import { StepProp } from "@components/Stepper/types";
import React, { useEffect } from "react";

import { getDefaultStepProps } from "./constants";
import {
  UpdatableStepProps,
  UseStepperHookProps,
  UseStepperHookReturnProps,
} from "./types";

export const useStepper: UseStepperHookProps = (
  baseSteps,
  customNumberBackground,
): UseStepperHookReturnProps => {
  const [activeStep, setActiveStep] = React.useState<string>(baseSteps[0]?.key);
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

  const updateStepToDefault = (stepKey?: string) => {
    updateStep(stepKey || activeStep, {
      success: false,
      withError: false,
      completed: false,
    });
  };

  const updateStepToSuccess = (stepKey?: string) => {
    updateStep(stepKey || activeStep, { success: true, withError: false });
  };

  const updateStepToError = (stepKey?: string) => {
    updateStep(stepKey || activeStep, {
      success: false,
      withError: true,
      completed: false,
    });
  };

  const updateStepToCompleted = (stepKey?: string) => {
    updateStep(stepKey || activeStep, {
      success: true,
      withError: false,
      completed: true,
    });
  };

  useEffect(() => {
    if (!steps.length) return;
    const activeStepIndex = steps.findIndex((step) => step.key === activeStep);
    if (activeStepIndex === -1) return;

    const currentStep = steps[activeStepIndex];
    currentStep.onActive();
  }, [activeStep, steps]);

  useEffect(() => {
    setActiveStep(baseSteps[0]?.key);
    setSteps(baseSteps.map(getDefaultStepProps));
  }, [baseSteps]);

  return {
    steps,
    activeStep,
    customNumberBackground,
    nextStep,
    jumpToStep,
    updateStepToDefault,
    updateStepToSuccess,
    updateStepToError,
    updateStepToCompleted,
  };
};
