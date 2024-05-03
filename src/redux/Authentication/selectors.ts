import { IRootState } from "@redux/store";

export const selectAuthentication = (state: IRootState) => state.Authentication;
