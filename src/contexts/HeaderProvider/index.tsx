import { useStepper } from "@hooks/useStepper";
import {
  UseStepperHookReturnProps,
  UseStepperHookStepProps,
} from "@hooks/useStepper/types";
import React, { createContext, useContext } from "react";

interface HeaderControllerProps extends UseStepperHookReturnProps {
  setSteps: React.Dispatch<React.SetStateAction<UseStepperHookStepProps[]>>;
}

interface HeaderControllerProviderProps {
  children: React.ReactElement;
}

const HeaderController = createContext<HeaderControllerProps>(
  {} as HeaderControllerProps,
);

const HeaderControllerProvider: React.FC<HeaderControllerProviderProps> = ({
  children,
}) => {
  const [steps, setSteps] = React.useState<UseStepperHookStepProps[]>([]);

  const stepperProps = useStepper(steps);

  return (
    <HeaderController.Provider value={{ ...stepperProps, setSteps }}>
      {children}
    </HeaderController.Provider>
  );
};

const useHeaderController = (): HeaderControllerProps => {
  const context = useContext(HeaderController);

  if (!context) {
    throw new Error("useHeaderController must be used within an HeaderController");
  }

  return context;
};

export { HeaderControllerProvider, useHeaderController };
