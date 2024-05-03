import { styled } from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  background-color: ${({ theme }) => theme.principal.darkBackground}90;
  border: 1px solid ${({ theme }) => theme.principal.text};
  border-radius: 8px;

  cursor: ${({ onClick }) => (onClick ? "pointer" : "initial")};

  &:hover {
    box-shadow: 0 0 4px 0 ${({ theme }) => theme.brand.primary};
  }
`;
