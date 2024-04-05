import styled, { css } from "styled-components";

import { getWhatTheFGLMachineIsAbleToDo } from "../constants";

const tableLength = getWhatTheFGLMachineIsAbleToDo().length + 1;

const basicItem = css`
  width: calc(100% / ${tableLength});
  padding: 5px 0;
  font-size: 15px;
  color: ${({ theme }) => theme.secondary.text};
  border-left: 2px solid ${({ theme }) => theme.secondary.background};
  border-right: 2px solid ${({ theme }) => theme.secondary.background};
`;

export const StyledTableHeadItem = styled.th`
  ${basicItem};
`;

export const StyledRecorderName = styled.p`
  margin: 0;
  font-size: 18px;
  color: ${({ theme }) => theme.secondary.text};
`;

export const StyledAddRecorder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    cursor: pointer;
    transition: 0.25s;
    font-size: 14px;
    &:hover {
      color: ${({ theme }) => theme.indicators.success};
      font-size: 20px;
    }
  }
`;

export const StyledRemoveRecorder = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  > svg {
    cursor: pointer;
    transition: 0.25s;
    font-size: 10px;
  }
  &:hover {
    color: ${({ theme }) => theme.indicators.danger};
    > svg {
      font-size: 20px;
    }
  }
`;

export const StyledTableBodyItem = styled.th`
  &:first-child {
    position: relative;
    cursor: default;
    &:hover {
      background: inherit;
    }
  }
  &:not(:first-child) {
    writing-mode: vertical-rl;
  }
  ${basicItem};
  cursor: pointer;
  transition: 0.25s;
  z-index: 1;
  &:hover {
    &[data-marked="true"] {
      box-shadow: inset 0 0 2px 2px ${({ theme }) => theme.indicators.danger};
    }
    &[data-marked="false"] {
      box-shadow: inset 0 0 2px 2px ${({ theme }) => theme.indicators.success};
    }
  }
`;
