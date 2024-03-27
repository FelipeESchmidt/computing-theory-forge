import styled from "styled-components";

export const InitialValuesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-bottom: 24px;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.principal.text};
`;

export const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`;
