import { styled } from "styled-components";

export const UserSettingsContainer = styled.div`
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

  &:hover {
    border: 1px solid ${({ theme }) => theme.principal.text}90;
    box-shadow: 0 0 10px ${({ theme }) => theme.principal.text}90;
  }
`;

export const StyledIcon = styled.span`
  width: 16px;
  height: 16px;
  font-size: 16px;
  color: ${({ theme }) => theme.principal.text};

  &:hover {
    color: ${({ theme }) => theme.principal.text};
  }
`;
