import { styled } from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.principal.darkBackground};
  padding: 16px;
  margin-bottom: 8px;
  box-shadow: 0 0 4px ${({ theme }) => theme.brand.dark};
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr auto;
    column-gap: 12px;
    row-gap: 24px;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.brand.dark};
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 420px) {
    font-size: 16px;
  }
`;

export const StyledHandlersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledStepsContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-row: 2;
  grid-column: span 2;
`;
