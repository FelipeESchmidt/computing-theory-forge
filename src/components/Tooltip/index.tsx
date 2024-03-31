import { useClickOutside } from "@hooks/useClickOutside";
import React, { useRef, useState } from "react";
import { AiOutlineClose, AiOutlineQuestionCircle } from "react-icons/ai";

import * as S from "./styles";

export interface TooltipProps {
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ children }) => {
  const childrenRef = useRef(null);
  const [show, setShow] = useState(false);

  useClickOutside(childrenRef, () => setShow(false));

  return (
    <S.StyledTooltip>
      <S.StyledTooltipIcon>
        <AiOutlineQuestionCircle onClick={() => setShow(!show)} />
      </S.StyledTooltipIcon>
      <S.StyledTooltipContentWrapper show={show ? 1 : 0}>
        <S.StyledTooltipContent ref={childrenRef}>
          <S.StyleTooltipCloseButton onClick={() => setShow(false)}>
            <AiOutlineClose />
          </S.StyleTooltipCloseButton>
          {children}
        </S.StyledTooltipContent>
      </S.StyledTooltipContentWrapper>
    </S.StyledTooltip>
  );
};
