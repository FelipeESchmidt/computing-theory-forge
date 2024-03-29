import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
  background-color: #4444;
`;

export const StyledTableHead = styled.thead`
  border-bottom: 3px solid ${({ theme }) => theme.secondary.background};
  &[data-hide-border="true"] {
    border-bottom-width: 0;
  }
`;

export const StyledTableBody = styled.tbody``;

export const StyledTableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.secondary.background};
  &:last-child {
    border: none;
  }
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
