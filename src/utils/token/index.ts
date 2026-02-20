import { isBackendEnabled } from "@utils/config";
import { jwtDecode } from "jwt-decode";

export const isOfflineToken = (token: string): boolean => {
  return token.startsWith("offline_");
};

export const tokenIsValid = (token: string): boolean => {
  // Reject offline tokens when backend is enabled
  if (isOfflineToken(token) && isBackendEnabled()) {
    return false;
  }

  // Accept offline tokens as valid only in offline mode
  if (isOfflineToken(token)) {
    return true;
  }

  try {
    const decoded = jwtDecode(token) as { exp: number };
    return decoded.exp > Date.now() / 1000;
  } catch (e) {
    return false;
  }
};

export const getTokenEmail = (token: string): string => {
  // For offline tokens, return a placeholder email
  if (isOfflineToken(token)) {
    return "offline@user.local";
  }

  try {
    const decoded = jwtDecode(token) as { email: string };
    return decoded.email;
  } catch (e) {
    return "";
  }
};

export const getTokenName = (token: string): string => {
  // For offline tokens, return a placeholder name
  if (isOfflineToken(token)) {
    return "Offline User";
  }

  try {
    const decoded = jwtDecode(token) as { name: string };
    return decoded.name;
  } catch (e) {
    return "";
  }
};
