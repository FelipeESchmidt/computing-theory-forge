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

  return data.responseObject.token;
};

export const register = async (
  name: string,
  email: string,
  password: string,
  passwordConfirmation: string,
) => {
  const { data } = await api.post<IResponseDataProps<ILoginResponseObjectProps>>(
    `/auth/register`,
    {
      name,
      email,
      password,
      passwordConfirmation,
    },
  );

  return data;
};
