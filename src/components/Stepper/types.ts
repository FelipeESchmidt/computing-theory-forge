export interface StepProp {
  key: string;
  title: string;
  success: boolean;
  withError: boolean;
  completed: boolean;
}

export interface StepperProps {
  steps: StepProp[];
  activeStep: string;
  jumpToStep: (stepKey: string) => void;
  canJumpToForwardStep?: boolean;
  customNumberBackground?: string;
}
