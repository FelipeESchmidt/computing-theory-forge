import styled from "styled-components";

export const StyledCodeBlock = styled.div`
  display: flex;
  min-height: 65vh;
  flex-direction: column;
  padding: 12px;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.principal.text};
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    overflow-x: auto;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  padding: 12px;
  justify-content: space-between;
  border-bottom: 2px solid ${({ theme }) => theme.principal.text};

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 12px;
  }
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

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 420px) {
    font-size: 14px;
  }
`;

export const StyledLines = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 16px;
  padding: 12px;
  @media screen and (max-width: 768px) {
    gap: 8px;
  }
`;

export const StyledLine = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  align-items: center;
  @media screen and (max-width: 768px) {
    gap: 8px;
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

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const LineText = styled(Text)`
  position: relative;
  min-width: 30px;
  text-align: center;
  color: ${({ theme }) => theme.principal.text};

  &::after {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.principal.text};
    width: 1px;
    top: 0;
    right: 0;
    bottom: 0;
  }
  @media screen and (min-width: 769px) {
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
  }
  @media screen and (max-width: 768px) {
    &::before {
      content: "x";
      position: absolute;
      color: ${({ theme }) => theme.indicators.danger};
      top: 0px;
      left: -50px;
      right: 0;
      bottom: auto;
    }
  }
`;
