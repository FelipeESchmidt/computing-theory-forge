import { AlertMessageType } from "@redux/AlertMessage/types";
import styled from "styled-components";

export const StyledSnackbar = styled.div`
  &[data-open="true"] {
    opacity: 1;
    top: 0;
  }
  &[data-open="false"] {
    opacity: 0;
    top: -50px;
  }
  position: fixed;
  left: 0;
  right: 0;
  text-align: center;
  white-space: pre-line;
  transition-duration: 1s;
  z-index: 5;
`;

export const StyledAlert = styled.div<{ type: AlertMessageType }>`
  padding: 20px;
  color: ${({ theme }) => theme.realBlack};
  text-shadow: 0 0 2px ${({ theme }) => theme.constant.realBlack};
  background: ${({ theme, type }) => theme.primary[type]};
  box-shadow: 0 0 2px 1px ${({ theme }) => theme.constant.realBlack};
`;
