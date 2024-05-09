import { styled } from "styled-components";

export const StyledTooltip = styled.div<{ disabled: 1 | 0 }>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover {
    svg {
      cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
      transition: color 0s;
      color: ${({ theme }) => theme.principal.text} !important;
    }
  }
`;

export const StyledTooltipIcon = styled.div`
  font-size: 16px;

  > * {
    color: ${({ theme }) => theme.principal.text};
    transition: color 0.3s;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.indicators.info};
    }
  }
`;

export const StyledTooltipContentWrapper = styled.div<{ show: 0 | 1 }>`
  position: fixed;
  inset: 0;
  transition: opacity 0.3s;
  background-color: ${({ theme }) => `${theme.principal.background}88`};
  display: ${({ show }) => (show ? "flex" : "none")};
  pointer-events: ${({ show }) => (show ? "all" : "none")};
  z-index: 100;
`;

export const StyledTooltipContent = styled.div`
  position: fixed;
  inset: 20%;
  border-radius: 8px;
  padding: 12px;
  overflow-y: auto;
  border: 1px solid ${({ theme }) => theme.principal.text};
  background-color: ${({ theme }) => theme.principal.background};
`;

export const StyleTooltipCloseButton = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  font-size: 16px;
  color: ${({ theme }) => theme.principal.text};

  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.indicators.danger};
  }
`;
