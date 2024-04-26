import { UPDATE_TOKEN } from "./constants";

export const updateToken = (token: string) =>
  ({
    type: UPDATE_TOKEN,
    token,
  } as const);
