import { styled } from "styled-components";

export const StyledFlagContainer = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.principal.background};
  box-shadow: 0 0 5px ${({ theme }) => theme.principal.text}50;
  border-radius: 50%;
  cursor: pointer;

  > * {
    font-size: 20px !important;
  }

  transition: box-shadow 0.3s;
  transition-timing-function: ease-out;

  &:hover {
    border: 1px solid ${({ theme }) => theme.principal.text}90;
    box-shadow: 0 0 10px ${({ theme }) => theme.principal.text}90;
  }
`;

export const StyledTooltipContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 420px) {
    padding: 2%;
  }
`;

export const StyledTooltipContentTitle = styled.h4`
  font-size: 16px;
  color: ${({ theme }) => theme.principal.text};
`;

export const StyledTooltipContentFlags = styled.div`
  display: grid;
  row-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  @media (max-width: 768px) {
    row-gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  @media (max-width: 420px) {
    grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
    row-gap: 8px;
  }
`;

export const StyledTooltipContentFlag = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const StyledTooltipContentFlagText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.principal.text};
`;
