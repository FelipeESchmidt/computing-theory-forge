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
    `/theoretical-machine/get-all-machines`,
  );

  return data.responseObject;
};

export const saveMachine = async (
  name: string,
  machine: ISavedTheoreticalMachine,
): Promise<IResponseDataProps<{ id: number }>> => {
  const { data } = await api.post<IResponseDataProps<{ id: number }>>(
    `/theoretical-machine/save-machine`,
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
    `/theoretical-machine/update-machine/${id}`,
    { name, machine },
  );

  return data;
};

export const deleteMachine = async (id: number): Promise<IResponseDataProps<null>> => {
  const { data } = await api.delete<IResponseDataProps<null>>(
    `/theoretical-machine/delete-machine/${id}`,
  );

  return data;
};
