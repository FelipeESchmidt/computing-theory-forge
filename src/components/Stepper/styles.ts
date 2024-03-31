import { css, styled } from "styled-components";

export const StyledStepper = styled.div`
  display: flex;
  padding: 8px;
`;

export const StyledStep = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-inline: 8px;
  align-items: center;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 12px;
    left: 0;
    right: 50%;
    height: 1px;
    background-color: ${({ theme }) => theme.principal.text};
    z-index: 1;
  }
  &:first-child {
    &:before {
      height: 0;
    }
  }

  &:after {
    content: "";
    position: absolute;
    top: 12px;
    left: 50%;
    right: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.principal.text};
    z-index: 0;
  }
  &:last-child {
    &:after {
      height: 0;
    }
  }
`;

const iconStyles = css`
  display: flex;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const StyledSuccessIcon = styled.div`
  ${iconStyles}
  color: ${({ theme }) => theme.constant.realWhite};
  background-color: ${({ theme }) => theme.indicators.success};
`;

export const StyledErrorIcon = styled.div`
  ${iconStyles}
  color: ${({ theme }) => theme.constant.realWhite};
  background-color: ${({ theme }) => theme.indicators.danger};
`;

export const StyledCompletedIcon = styled.div`
  ${iconStyles}
  color: ${({ theme }) => theme.constant.realWhite};
  background-color: ${({ theme }) => theme.indicators.info};
`;

export const StyledStepNumber = styled.span<{ isActive: 1 | 0; bg?: string }>`
  ${iconStyles}
  color: ${({ theme, isActive }) =>
    isActive ? theme.indicators.info : theme.principal.text};
  border: 1px solid
    ${({ theme, isActive }) => (isActive ? theme.indicators.info : theme.principal.text)};
  background-color: ${({ theme, bg }) => bg || theme.principal.background};
  font-size: 12px;
  pointer-events: none;
  user-select: none;
`;

export const StyledTitle = styled.h4`
  color: ${({ theme }) => theme.principal.text};
`;
