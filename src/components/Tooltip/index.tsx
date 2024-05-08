import { useClickOutside } from "@hooks/useClickOutside";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineQuestionCircle } from "react-icons/ai";

import * as S from "./styles";

export interface TooltipProps {
  children: React.ReactNode;
  disabled?: boolean;
  customIcon?: React.ReactNode;
  forceHide?: boolean;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  customIcon,
  forceHide,
  disabled = false,
}) => {
  const childrenRef = useRef(null);
  const [firstRender, setFirstRender] = useState(true);
  const [show, setShow] = useState(false);

  useClickOutside(childrenRef, () => setShow(false));

  const handleTooltipClick = () => {
    if (disabled) return;
    setShow(!show);
  };

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      return;
    }
    setShow(false);
  }, [forceHide]);

  return (
    <S.StyledTooltip disabled={disabled ? 1 : 0}>
      <S.StyledTooltipIcon onClick={handleTooltipClick}>
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
