import styled from "styled-components";

export const SwitchContainer = styled.div<{ dark: 1 | 0 }>`
  position: relative;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.principal.background};
  box-shadow: 0 0 5px ${({ theme }) => theme.principal.text}50;
  border-radius: 50%;
  cursor: pointer;

  transition: box-shadow 0.3s;
  transition-timing-function: ease-out;
  transform: ${(props) => (props.dark ? "rotate(0deg)" : "rotate(360deg)")};

  &:hover {
    border: 1px solid ${({ theme }) => theme.principal.text}90;
    box-shadow: 0 0 10px ${({ theme }) => theme.principal.text}90;
  }
`;

export const StyledIcon = styled.span`
  width: 20px;
  height: 20px;
  font-size: 20px;
  color: ${({ theme }) => theme.principal.text};
`;
