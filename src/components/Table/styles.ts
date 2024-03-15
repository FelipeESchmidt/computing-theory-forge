import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
  background-color: #4444;
`;

export const StyledTableHead = styled.thead<{ hideBorder?: boolean }>`
  border-bottom: 3px solid ${({ theme }) => theme.secondary.background};
  border-bottom-width: ${({ hideBorder }) => (hideBorder ? "0" : "3px")};
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
