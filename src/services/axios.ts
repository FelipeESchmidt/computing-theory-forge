import axios, { AxiosError, AxiosResponse } from "axios";

import { IResponseDataProps } from "./types";

const api = axios.create({ baseURL: "http://localhost:8080" });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response: AxiosResponse<IResponseDataProps>) => {
    const responseData = response.data;
    if (!responseData.success) {
      return Promise.reject(responseData.message);
    }
    return response;
  },
  (error: AxiosError<{ message: string }>) => {
    if (error.response?.status === 403) {
      localStorage.removeItem("token");
      window.location.reload();
    }
    if (error.response) {
      const errorMessage = error.response.data.message;
      return Promise.reject(errorMessage);
    }
    if (error.request) {
      return Promise.reject("Não foi possível obter resposta do servidor.");
    }
    return Promise.reject("Erro ao fazer a solicitação:");
  },
);

export default api;
