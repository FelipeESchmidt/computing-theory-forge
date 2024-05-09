import { ISavedTheoreticalMachineProps } from "@services/theoreticalMachines";
import React, { createContext, useContext } from "react";

type ISavedTheoreticalMachinePropsWithOutUserId = Omit<
  ISavedTheoreticalMachineProps,
  "userId"
>;

interface AppSavedProviderProps {
  machineSaved?: ISavedTheoreticalMachinePropsWithOutUserId;
  setMachineSaved: React.Dispatch<
    React.SetStateAction<ISavedTheoreticalMachinePropsWithOutUserId | undefined>
  >;
}

interface AppSavedProviderProviderProps {
  children: React.ReactElement;
}

const AppSavedProvider = createContext<AppSavedProviderProps>(
  {} as AppSavedProviderProps,
);

const AppSavedProviderProvider: React.FC<AppSavedProviderProviderProps> = ({
  children,
}) => {
  const [machineSaved, setMachineSaved] =
    React.useState<ISavedTheoreticalMachinePropsWithOutUserId>();

  return (
    <AppSavedProvider.Provider value={{ machineSaved, setMachineSaved }}>
      {children}
    </AppSavedProvider.Provider>
  );
};

const useAppSavedProvider = (): AppSavedProviderProps => {
  const context = useContext(AppSavedProvider);

  if (!context) {
    throw new Error("useAppSavedProvider must be used within an AppSavedProvider");
  }

  return context;
};

export { AppSavedProviderProvider, useAppSavedProvider };
