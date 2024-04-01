import { AlertMessageType } from "@redux/AlertMessage/types";
import styled from "styled-components";

export const StyledSnackbar = styled.div`
  &[data-open="true"] {
    opacity: 1;
    top: 16px;
  }
  &[data-open="false"] {
    opacity: 0;
    top: -50px;
  }
  position: fixed;
  left: 20%;
  right: 20%;
  font-size: 14px;
  text-align: center;
  white-space: pre-line;
  transition-duration: 0.75s;
  transition-timing-function: ease-out;
  z-index: 5;

  @media (max-width: 768px) {
    left: 10%;
    right: 10%;
  }
`;

export const StyledAlert = styled.div<{ type: AlertMessageType }>`
  font-weight: 600;
  padding: 16px;
  padding-inline: 32px;
  color: ${({ theme }) => theme.principal.text};
  background-color: ${({ theme, type }) => `${theme.indicators[type]}22`};
  border-radius: 8px;
  border: 1px solid ${({ theme, type }) => theme.indicators[type]};
`;

export const StyledCloseButton = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 12px;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.constant.realBlack};
  &:hover {
    transform: scale(1.2);
    transition-duration: 0.2s;
  }
`;
