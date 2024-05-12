import styled from "styled-components";

export const CodeRunner = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
  margin-block: 24px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-block: 12px;
    align-items: flex-start;
  }
  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

export const RunnableTitle = styled.h2`
  color: ${({ theme }) => theme.principal.text};
  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
`;

export const RightHandlersContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  @media screen and (max-width: 768px) {
    align-self: flex-end;
  }
`;
