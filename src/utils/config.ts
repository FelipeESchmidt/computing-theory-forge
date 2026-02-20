/**
 * Environment configuration utilities
 */

export const isBackendEnabled = (): boolean => {
  const includeBackend = import.meta.env.VITE_INCLUDE_BACKEND;
  return includeBackend === "true" || includeBackend === true;
};

export const isOfflineMode = (): boolean => {
  return !isBackendEnabled();
};
