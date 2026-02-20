/**
 * Offline authentication service
 * Provides fake authentication for offline mode
 */

import { IResponseDataProps } from "./types";

export interface IOfflineLoginResponseObjectProps {
  token: string;
}

/**
 * Generate a fake JWT token for offline mode
 * Format: offline_<timestamp>_<random>
 */
const generateOfflineToken = (): string => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(7);
  return `offline_${timestamp}_${random}`;
};

/**
 * Fake login for offline mode
 */
export const offlineLogin = async (
  email: string,
  password: string,
): Promise<IResponseDataProps<IOfflineLoginResponseObjectProps>> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // In offline mode, accept any credentials
  if (!email || !password) {
    throw new Error("INVALID_CREDENTIALS");
  }

  const token = generateOfflineToken();

  return {
    success: true,
    message: "LOGIN_SUCCESSFUL",
    responseObject: { token },
    statusCode: 200,
  };
};

/**
 * Fake register for offline mode
 */
export const offlineRegister = async (
  name: string,
  email: string,
  password: string,
  passwordConfirmation: string,
): Promise<IResponseDataProps> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Validate inputs
  if (!name || !email || !password || !passwordConfirmation) {
    throw new Error("REGISTRATION_FAILED");
  }

  if (password !== passwordConfirmation) {
    throw new Error("PASSWORDS_DO_NOT_MATCH");
  }

  // In offline mode, simulate successful registration
  return {
    success: true,
    message: "REGISTRATION_SUCCESSFUL",
    responseObject: null,
    statusCode: 200,
  };
};

/**
 * Fake update user for offline mode
 */
export const offlineUpdateUser = async (
  name: string,
  password: string,
  newPassword: string,
  newPasswordConfirmation: string,
): Promise<IResponseDataProps> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (newPassword !== newPasswordConfirmation) {
    throw new Error("PASSWORDS_DO_NOT_MATCH");
  }

  // In offline mode, simulate successful update
  return {
    success: true,
    message: "UPDATE_SUCCESSFUL",
    responseObject: null,
    statusCode: 200,
  };
};
