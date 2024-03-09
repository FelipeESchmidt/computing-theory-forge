import { hideMessage, newMessage } from "./actions";

export type AlertMessageType = "error" | "success" | "info" | "warning";

export type RecorderActions = ReturnType<typeof newMessage | typeof hideMessage>;
