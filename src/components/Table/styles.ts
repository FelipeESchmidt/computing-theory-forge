import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  margin: 10px 0;
  border-collapse: collapse;
  border-radius: 10px;
  background-color: #4444;
`;

export const StyledTableHead = styled.thead`
  border-bottom: 3px solid ${({ theme }) => theme.secondary.background};
`;

export const StyledTableBody = styled.tbody``;

export const StyledTableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.secondary.background};
  th:first-child {
    border-left: none;
  }
  th:last-child {
    border-right: none;
  }
  :last-child {
    border: none;
  }
`;
