import { ThemeType } from "@assets/styles/themes";
import { styled } from "styled-components";

export const StyledNotice = styled.div<{ type: keyof ThemeType["indicators"] }>`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme, type }) => theme.indicators[type]};
  background-color: ${({ theme, type }) => `${theme.indicators[type]}22`};
`;

export const StyledNoticeText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.principal.text};
`;
