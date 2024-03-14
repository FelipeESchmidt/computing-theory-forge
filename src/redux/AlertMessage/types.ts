import { ThemeType } from "assets/styles/themes";

import { hideMessage, newMessage } from "./actions";

export type AlertMessageType = keyof ThemeType["indicators"];

export type RecorderActions = ReturnType<typeof newMessage | typeof hideMessage>;
