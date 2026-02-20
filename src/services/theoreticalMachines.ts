import { isBackendEnabled } from "@utils/config";
import { ISavedTheoreticalMachine } from "@utils/theoreticalMachine";

import api from "./axios";
import {
  deleteMachineFromStorage,
  getAllMachinesFromStorage,
  saveMachineToStorage,
  updateMachineInStorage,
} from "./offlineStorage";
import { IResponseDataProps } from "./types";

export interface ISavedTheoreticalMachineProps {
  id: number;
  userId: number;
  name: string;
  machine: ISavedTheoreticalMachine;
}

export const getAllMachines = async (): Promise<ISavedTheoreticalMachineProps[]> => {
  if (!isBackendEnabled()) {
    const machines = getAllMachinesFromStorage();
    // Convert stored machines to expected format (without userId)
    return machines.map((m) => ({
      id: m.id,
      userId: 0, // Fake userId for offline mode
      name: m.name,
      machine: m.machine,
    }));
  }

  const { data } = await api.get<IResponseDataProps<ISavedTheoreticalMachineProps[]>>(
    `/theoretical-machine/get-all-machines`,
  );

  return data.responseObject;
};

export const saveMachine = async (
  name: string,
  machine: ISavedTheoreticalMachine,
): Promise<IResponseDataProps<{ id: number }>> => {
  if (!isBackendEnabled()) {
    const id = saveMachineToStorage(name, machine);
    return {
      success: true,
      message: "MACHINE_SAVE_SUCCESSFUL",
      responseObject: { id },
      statusCode: 200,
    };
  }

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
  if (!isBackendEnabled()) {
    try {
      updateMachineInStorage(id, name, machine);
      return {
        success: true,
        message: "MACHINE_UPDATE_SUCCESSFUL",
        responseObject: null,
        statusCode: 200,
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : "MACHINE_UPDATE_FAILED";
      throw message;
    }
  }

  const { data } = await api.put<IResponseDataProps<null>>(
    `/theoretical-machine/update-machine/${id}`,
    { name, machine },
  );

  return data;
};

export const deleteMachine = async (id: number): Promise<IResponseDataProps<null>> => {
  if (!isBackendEnabled()) {
    try {
      deleteMachineFromStorage(id);
      return {
        success: true,
        message: "MACHINE_DELETE_SUCCESSFUL",
        responseObject: null,
        statusCode: 200,
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : "MACHINE_DELETE_FAILED";
      throw message;
    }
  }

  const { data } = await api.delete<IResponseDataProps<null>>(
    `/theoretical-machine/delete-machine/${id}`,
  );

  return data;
};
