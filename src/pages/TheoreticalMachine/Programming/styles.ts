import styled from "styled-components";

export const Programming = styled.div`
  width: 100%;
  padding-bottom: 20px;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 24px 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    > a {
      width: 75%;
    }
  }
  @media screen and (max-width: 400px) {
    flex-direction: column;
    > a {
      width: 90%;
    }
  }
`;

export const DefinitionTitle = styled.h2`
  color: ${({ theme }) => theme.principal.text};
  padding: 20px 0;
  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
`;
