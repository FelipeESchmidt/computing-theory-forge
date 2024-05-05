import { IMinifiedMachine } from "@utils/theoreticalMachine";

import api from "./axios";
import { IResponseDataProps } from "./types";

export interface ISavedTheoreticalMachineProps {
  id: number;
  userId: number;
  name: string;
  machine: IMinifiedMachine;
}

export const getAllMachines = async (): Promise<ISavedTheoreticalMachineProps[]> => {
  const { data } = await api.get<IResponseDataProps<ISavedTheoreticalMachineProps[]>>(
    `/theoretical-machineService/get-all-machines`,
  );

  return data.responseObject;
};