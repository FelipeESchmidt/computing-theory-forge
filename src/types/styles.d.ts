import "styled-components";

import { ThemeType } from "../assets/styles/themes/dark";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
