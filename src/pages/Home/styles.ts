import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledProductsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;
  padding-block: 1.5rem;
`;

export const StyledProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledProductTitle = styled.h3`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  color: ${({ theme }) => theme.principal.text};
`;

export const StyledProductDescription = styled.h4`
  color: ${({ theme }) => theme.principal.text};
`;

export const StyledProductCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding-block: 1rem;
  gap: 1rem;
`;

export const StyledCardContainer = styled.div<{ vertical?: 1 }>`
  height: 100%;
  display: flex;
  flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
  align-items: ${({ vertical }) => (vertical ? "flex-start" : "center")};
  gap: 1rem;
`;

export const StyledNewIcon = styled.div`
  width: 20px;
  height: 20px;
  font-size: 20px;
  color: ${({ theme }) => theme.principal.text};
`;
