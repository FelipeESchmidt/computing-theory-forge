import { css, styled } from "styled-components";

import { ButtonProps } from ".";

interface StyledButtonProps {
  variant: ButtonProps["variant"];
}

const disabledButton = css`
  background-color: ${({ theme }) => theme.principal.text}80;
  border-color: ${({ theme }) => theme.principal.text}80;
  cursor: not-allowed;
  pointer-events: none;

  &:hover {
    background-color: ${({ theme }) => theme.principal.text}80;
    border-color: ${({ theme }) => theme.principal.text}80;
  }
`;

const getButtonsProps = (variant: ButtonProps["variant"]) => {
  const styles = {
    outlined: css`
      transition-duration: 1s;
      background-color: ${({ theme }) => theme.principal.background};
      color: ${({ theme }) => theme.principal.text};
      border-color: ${({ theme }) => theme.brand.primary};
      &:hover {
        color: ${({ theme }) => theme.constant.realWhite};
        text-shadow: 0 0 5px ${({ theme }) => theme.constant.realBlack};
        border-color: ${({ theme }) => theme.brand.primary};
        background-color: ${({ theme }) => theme.brand.primary};
      }
      &:active {
        border-color: ${({ theme }) => theme.brand.dark};
        background-color: ${({ theme }) => theme.brand.deep};
      }
      ${({ disabled }: any) => !!disabled && disabledButton};
    `,
    contained: css`
      transition-duration: 0.5s;
      background-color: ${({ theme }) => theme.brand.primary};
      color: ${({ theme }) => theme.constant.realWhite};
      border-color: ${({ theme }) => theme.brand.primary};
      &:hover {
        text-shadow: 0 0 5px ${({ theme }) => theme.constant.realBlack};
        border-color: ${({ theme }) => theme.brand.dark};
        background-color: ${({ theme }) => theme.brand.dark};
      }
      &:active {
        border-color: ${({ theme }) => theme.brand.dark};
        background-color: ${({ theme }) => theme.brand.deep};
      }
      ${({ disabled }: any) => !!disabled && disabledButton};
    `,
  };

  return styles[variant];
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  border: ${({ theme }) => `2px solid ${theme.constant.realBlack}`};
  transition: all 0.5s ease;

  ${({ variant }) => getButtonsProps(variant)};

  > svg {
    transition-duration: 0.5s;
  }

  &:hover {
    > svg {
      transform: scale(1.1);
    }
  }
`;
