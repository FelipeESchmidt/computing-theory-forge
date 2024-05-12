import { styled } from "styled-components";

export const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 300px;
  padding: 12px;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.principal.text};
  border-radius: 8px;
  line-height: 20px;
  font-size: 15px;
  color: ${({ theme }) => theme.principal.text};
  resize: none;
  outline: none;
  cursor: inherit;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 15px;
    height: 100%;
    cursor: pointer;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px ${({ theme }) => theme.principal.text};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.brand.primary};
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.brand.dark};
  }

  &::-webkit-resizer {
    display: none;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
