import { ISavedTheoreticalMachine } from "@utils/theoreticalMachine";

import api from "./axios";
import { IResponseDataProps } from "./types";

export interface ISavedTheoreticalMachineProps {
  id: number;
  userId: number;
  name: string;
  machine: ISavedTheoreticalMachine;
}

export const getAllMachines = async (): Promise<ISavedTheoreticalMachineProps[]> => {
  const { data } = await api.get<IResponseDataProps<ISavedTheoreticalMachineProps[]>>(
    `/theoretical-machineService/get-all-machines`,
  );

  return data.responseObject;
};

export const saveMachine = async (
  name: string,
  machine: ISavedTheoreticalMachine,
): Promise<IResponseDataProps<{ id: number }>> => {
  const { data } = await api.post<IResponseDataProps<{ id: number }>>(
    `/theoretical-machineService/save-machine`,
    { name, machine },
  );

  return data;
};

export const updateMachine = async (
  id: number,
  name: string,
  machine: ISavedTheoreticalMachine,
): Promise<IResponseDataProps<null>> => {
  const { data } = await api.put<IResponseDataProps<null>>(
    `/theoretical-machineService/update-machine/${id}`,
    { name, machine },
  );

  return data;
};

export const deleteMachine = async (id: number): Promise<IResponseDataProps<null>> => {
  const { data } = await api.delete<IResponseDataProps<null>>(
    `/theoretical-machineService/delete-machine/${id}`,
  );

  return data;
};
