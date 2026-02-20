/**
 * localStorage service for offline mode
 * Simulates backend machine storage using browser localStorage
 */

import { ISavedTheoreticalMachine } from "@utils/theoreticalMachine";

export interface IStoredMachine {
  id: number;
  name: string;
  machine: ISavedTheoreticalMachine;
  createdAt: string;
  updatedAt: string;
}

const MACHINES_STORAGE_KEY = "computing_theory_machines";
let machineIdCounter = 1;

/**
 * Initialize machines storage with counter
 */
const initializeStorage = () => {
  const stored = localStorage.getItem(MACHINES_STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(MACHINES_STORAGE_KEY, JSON.stringify([]));
  } else {
    const machines = JSON.parse(stored) as IStoredMachine[];
    if (machines.length > 0) {
      machineIdCounter = Math.max(...machines.map((m) => m.id)) + 1;
    }
  }
};

initializeStorage();

/**
 * Get all machines from localStorage
 */
export const getAllMachinesFromStorage = (): IStoredMachine[] => {
  const stored = localStorage.getItem(MACHINES_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

/**
 * Save a new machine to localStorage
 */
export const saveMachineToStorage = (
  name: string,
  machine: ISavedTheoreticalMachine,
): number => {
  const machines = getAllMachinesFromStorage();
  const newMachine: IStoredMachine = {
    id: machineIdCounter++,
    name,
    machine,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  machines.push(newMachine);
  localStorage.setItem(MACHINES_STORAGE_KEY, JSON.stringify(machines));

  return newMachine.id;
};

/**
 * Update an existing machine in localStorage
 */
export const updateMachineInStorage = (
  id: number,
  name: string,
  machine: ISavedTheoreticalMachine,
): void => {
  const machines = getAllMachinesFromStorage();
  const machineIndex = machines.findIndex((m) => m.id === id);

  if (machineIndex === -1) {
    throw new Error(`Machine with id ${id} not found`);
  }

  machines[machineIndex] = {
    ...machines[machineIndex],
    name,
    machine,
    updatedAt: new Date().toISOString(),
  };

  localStorage.setItem(MACHINES_STORAGE_KEY, JSON.stringify(machines));
};

/**
 * Delete a machine from localStorage
 */
export const deleteMachineFromStorage = (id: number): void => {
  const machines = getAllMachinesFromStorage();
  const filtered = machines.filter((m) => m.id !== id);

  if (filtered.length === machines.length) {
    throw new Error(`Machine with id ${id} not found`);
  }

  localStorage.setItem(MACHINES_STORAGE_KEY, JSON.stringify(filtered));
};

/**
 * Clear all machines from localStorage
 */
export const clearAllMachinesFromStorage = (): void => {
  localStorage.setItem(MACHINES_STORAGE_KEY, JSON.stringify([]));
  machineIdCounter = 1;
};
