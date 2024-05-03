import { IRootState } from "@redux/store";
import { tokenIsValid } from "@utils/token";
import { UnknownAction } from "redux";
import { ThunkAction } from "redux-thunk";

import { UPDATE_TOKEN } from "./constants";

export const updateToken = (token: string) =>
  ({
    type: UPDATE_TOKEN,
    token,
  } as const);

export const updateTokenAndSave = (
  token: string,
): ThunkAction<void, IRootState, unknown, UnknownAction> => {
  return (dispatch) => {
    dispatch(updateToken(token));

    localStorage.setItem("token", token);
  };
};

export const validateAlreadyLoggedIn = (): ThunkAction<
  void,
  IRootState,
  unknown,
  UnknownAction
> => {
  return (dispatch) => {
    const token = localStorage.getItem("token");

    if (token && tokenIsValid(token)) {
      dispatch(updateToken(token));
    }
  };
};

export const logout = (): ThunkAction<void, IRootState, unknown, UnknownAction> => {
  return (dispatch) => {
    dispatch(updateToken(""));

    localStorage.removeItem("token");
  };
};
