import { useClickOutside } from "@hooks/useClickOutside";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineQuestionCircle } from "react-icons/ai";

import * as S from "./styles";

export interface TooltipProps {
  children: React.ReactNode;
  customIcon?: React.ReactNode;
  switchClose?: boolean;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  customIcon,
  switchClose,
}) => {
  const childrenRef = useRef(null);
  const [firstRender, setFirstRender] = useState(true);
  const [show, setShow] = useState(false);

  useClickOutside(childrenRef, () => setShow(false));

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      return;
    }
    setShow(!show);
  }, [switchClose]);

  return (
    <S.StyledTooltip>
      <S.StyledTooltipIcon onClick={() => setShow(!show)}>
        {customIcon ? customIcon : <AiOutlineQuestionCircle />}
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
