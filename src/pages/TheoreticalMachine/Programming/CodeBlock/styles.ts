import styled from "styled-components";

export const StyledCodeBlock = styled.div`
  display: flex;
  min-height: 65vh;
  flex-direction: column;
  padding: 12px;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.principal.text};
  border-radius: 8px;
`;

export const StyledHeader = styled.div`
  display: flex;
  padding: 12px;
  justify-content: space-between;
  border-bottom: 2px solid ${({ theme }) => theme.principal.text};
`;

export const StyledAddLine = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  &:hover {
    svg {
      color: ${({ theme }) => theme.indicators.success};
    }
  }
`;

export const StyledAddLineButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.principal.text};
  > svg {
    font-size: 20px;
    transition: 0.25s;
    cursor: pointer;
  }
`;

export const StyledAddLineText = styled.span`
  color: ${({ theme }) => theme.principal.text};
  font-size: 18px;
  cursor: pointer;
`;

export const StyledLines = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding: 12px;
`;

export const StyledLine = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 3px;
  padding: 2px;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.principal.text};

  &[data-indicator-color-danger="true"] {
    color: ${({ theme }) => theme.indicators.danger};
  }

  &[data-indicator-color-success="true"] {
    color: ${({ theme }) => theme.indicators.success};
  }

  &[data-indicator-color-warning="true"] {
    color: ${({ theme }) => theme.indicators.warning};
  }

  &[data-indicator-color-info="true"] {
    color: ${({ theme }) => theme.indicators.info};
  }

  &:hover {
    &[data-has-select="true"] {
      cursor: pointer;
      color: ${({ theme }) => theme.indicators.danger};
    }
  }
`;

export const LineText = styled(Text)`
  position: relative;
  min-width: 30px;
  text-align: center;
  color: ${({ theme }) => theme.principal.text};
  &:hover {
    color: ${({ theme }) => theme.indicators.danger};
    cursor: pointer;
    &::before {
      content: "x";
      position: absolute;
      color: ${({ theme }) => theme.indicators.danger};
      top: 0;
      left: -10px;
      bottom: 0;
    }
    &::after {
      background-color: ${({ theme }) => theme.indicators.danger};
    }
  }
  &::after {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.principal.text};
    width: 1px;
    top: 0;
    right: 0;
    bottom: 0;
  }
  @media screen and (max-width: 768px) {
    padding-left: 0;
    padding-bottom: 10px;
    &::after {
      width: auto;
      height: 1px;
      top: auto;
      left: 0;
      right: 0;
      bottom: 0;
    }
    &::before {
      content: "x";
      position: absolute;
      color: ${({ theme }) => theme.indicators.danger};
      top: -15px;
      left: 0;
      right: 0;
      bottom: auto;
    }
  }
`;
