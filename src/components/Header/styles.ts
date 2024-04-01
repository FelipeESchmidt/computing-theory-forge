import { styled } from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.principal.darkBackground};
  padding: 16px;
  margin-bottom: 8px;
  box-shadow: 0 0 4px ${({ theme }) => theme.brand.dark};
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.brand.dark};
`;

export const StyledHandlersContainer = styled.div`
  display: flex;
  gap: 16px;
`;
