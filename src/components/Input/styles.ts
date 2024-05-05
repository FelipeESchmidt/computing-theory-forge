import { css, styled } from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.principal.text};
  position: absolute;
  top: 0;
  left: 4px;
  font-size: 16px;
  cursor: text;
  transition: color 0.3s ease-out;
  transition: transform 0.3s ease-out, color 0.3s ease-out;
  transform-origin: 0% 100%;
  text-align: initial;
  transform: translate(10px, 10px);
`;

const basicInputStyles = css`
  outline: none;
  pointer-events: all;
  font-size: 16px;
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  background-color: transparent;
  color: ${({ theme }) => theme.principal.text};
  border: 1px solid ${({ theme }) => theme.principal.text};
  box-sizing: border-box;
  caret-color: ${({ theme }) => theme.principal.text};
  transition: border-color 0.25s ease-out;
  &::selection {
    background-color: ${({ theme }) => theme.brand.light};
    color: ${({ theme }) => theme.principal.text};
  }
  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.brand.light};
  }
  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
`;

export const Input = styled.input`
  ${basicInputStyles}
  &:focus ~ ${Label}, &[data-value]:not([data-value=""]) ~ ${Label} {
    transform: translate(2px, -20px) scale(0.85);
    transform-origin: 0 0;
  }
  &:disabled {
    color: ${({ theme }) => theme.principal.text}80;
    cursor: not-allowed;
  }
`;

export const StyledIcon = styled.div`
  position: absolute;
  height: 16px;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  svg {
    width: 16px;
    height: 16px;
    transition: color 0.25s ease-out;
    color: ${({ theme }) => theme.principal.text};
  }
`;

export const InputPasswordIcon = styled.div`
  cursor: pointer;
  &:hover {
    svg {
      color: ${({ theme }) => theme.brand.light};
    }
  }
`;
