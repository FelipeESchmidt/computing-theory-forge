import api from "./axios";
import { IResponseDataProps } from "./types";

export interface ILoginResponseObjectProps {
  token: string;
}

export const login = async (email: string, password: string) => {
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
  const { data } = await api.post<IResponseDataProps>(`/auth/update`, {
    name,
    password,
    newPassword,
    newPasswordConfirmation,
  });

  return data;
};
