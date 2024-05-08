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
  display: flex;
  width: 16px;
  height: 16px;
  font-size: 16px;
  color: ${({ theme }) => theme.principal.text};

  &:hover {
    color: ${({ theme }) => theme.principal.text};
  }
`;

export const UserSettingsTooltipContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`;

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.principal.text};
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;
