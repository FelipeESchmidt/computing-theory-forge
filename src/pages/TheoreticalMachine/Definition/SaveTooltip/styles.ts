import { styled } from "styled-components";

export const SaveTooltipContainer = styled.div<{ disabled: 1 | 0 }>`
  position: relative;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.principal.background};
  box-shadow: 0 0 5px ${({ theme }) => theme.principal.text}50;
  border-radius: 50%;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    border: 1px solid ${({ theme, disabled }) => (disabled ? "" : theme.principal.text)}90;
    box-shadow: 0 0 10px
      ${({ theme, disabled }) => (disabled ? "" : theme.principal.text)}90;
  }
`;

export const StyledIcon = styled.span`
  display: flex;
  width: 20px;
  height: 20px;
  font-size: 20px;
  color: ${({ theme }) => theme.principal.text};
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.principal.text};
`;

export const SaveTooltipTooltipContainer = styled.div`
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

export const Form = styled.form`
  width: 100%;
  margin-top: 1.5rem;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;

  button {
    width: 100%;
  }
`;
