import { IRootState } from "@redux/store";

export const selectAlert = (state: IRootState) => state.AlertMessage;
