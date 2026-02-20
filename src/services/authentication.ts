import { isBackendEnabled } from "@utils/config";

import api from "./axios";
import {
  offlineLogin,
  offlineRegister,
  offlineUpdateUser,
} from "./offlineAuthentication";
import { IResponseDataProps } from "./types";

export interface ILoginResponseObjectProps {
  token: string;
}

export const login = async (email: string, password: string) => {
  if (!isBackendEnabled()) {
    return offlineLogin(email, password);
  }

  const { data } = await api.post<IResponseDataProps<ILoginResponseObjectProps>>(
    `/auth/login`,
    {
      email,
      password,
    },
  );

  return data;
};

export const register = async (
  name: string,
  email: string,
  password: string,
  passwordConfirmation: string,
) => {
  if (!isBackendEnabled()) {
    return offlineRegister(name, email, password, passwordConfirmation);
  }

  const { data } = await api.post<IResponseDataProps>(`/auth/register`, {
    name,
    email,
    password,
    passwordConfirmation,
  });

  return data;
};

export const updateUser = async (
  name: string,
  password: string,
  newPassword: string,
  newPasswordConfirmation: string,
) => {
  if (!isBackendEnabled()) {
    return offlineUpdateUser(name, password, newPassword, newPasswordConfirmation);
  }

  const { data } = await api.put<IResponseDataProps>(`/auth/update`, {
    name,
    password,
    newPassword,
    newPasswordConfirmation,
  });

  return data;
};
