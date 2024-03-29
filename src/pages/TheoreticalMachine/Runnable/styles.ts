import styled from "styled-components";

export const CodeRunner = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 0 10px;
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
