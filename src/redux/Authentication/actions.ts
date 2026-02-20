import { IRootState } from "@redux/store";
import { isBackendEnabled, isOfflineMode } from "@utils/config";
import { isOfflineToken, tokenIsValid } from "@utils/token";
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

    // If backend is enabled and token is offline, remove it and require login
    if (token && isOfflineToken(token) && isBackendEnabled()) {
      localStorage.removeItem("token");
      return;
    }

    if (token && tokenIsValid(token)) {
      dispatch(updateToken(token));
      return;
    }

    // In offline mode, automatically create a fake token
    if (isOfflineMode()) {
      const offlineToken = `offline_${Date.now()}`;
      dispatch(updateTokenAndSave(offlineToken));
    }
  };
};

export const logout = (): ThunkAction<void, IRootState, unknown, UnknownAction> => {
  return (dispatch) => {
    dispatch(updateToken(""));

    localStorage.removeItem("token");
  };
};
