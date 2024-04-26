import { UPDATE_TOKEN } from "./constants";
import { AuthenticateActions } from "./types";

const defaultAuthentication = {
  token: "",
  loggedIn: false,
} as const;

export default function reducer(
  state = defaultAuthentication,
  action: AuthenticateActions,
) {
  switch (action.type) {
    case UPDATE_TOKEN: {
      return {
        ...state,
        token: action.token,
        loggedIn: !!action.token,
      };
    }

    default:
      return state;
  }
}
