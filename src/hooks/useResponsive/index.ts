import * as React from "react";

import { breakpoint } from "../../assets/styles/breakpoints";

export const useResponsive = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= breakpoint);

  const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};
