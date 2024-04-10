import { styled } from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  background-color: ${({ theme }) => theme.principal.darkBackground}90;
  border: 1px solid ${({ theme }) => theme.principal.text};
  border-radius: 8px;
`;

export const StyledCardTitle = styled.h2`
  font-size: 16px;
  color: ${({ theme }) => theme.principal.text};
`;

export const StyledCardDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.principal.text};
`;
