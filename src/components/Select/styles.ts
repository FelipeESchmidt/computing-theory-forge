import { styled } from "styled-components";

export type SelectStyleTypes = "thin" | "normal";

export interface StyledSelectComponentProps {
  type: SelectStyleTypes;
}

export interface StyledSelectComponentOpenProps {
  open: boolean;
}

const getPadding = (type: SelectStyleTypes) => {
  if (type === "thin") {
    return "8px";
  }
  return "12px";
};

const getGap = (type: SelectStyleTypes) => {
  if (type === "thin") {
    return "4px";
  }
  return "8px";
};

export const StyledSelectWrapper = styled.div`
  position: relative;
  height: fit-content;
`;

export const StyledSelect = styled.div<StyledSelectComponentProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ type }) => getGap(type)};
  padding: ${({ type }) => getPadding(type)};
  border: 1px solid ${({ theme }) => theme.principal.text};
  border-radius: 4px;
  color: ${({ theme }) => theme.principal.text};
  cursor: pointer;
`;

export const StyledOptions = styled.div<StyledSelectComponentOpenProps>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.principal.background};
  border: 1px solid ${({ theme }) => theme.principal.text};
  border-top: none;
  border-radius: 0 0 4px 4px;

  opacity: ${({ open }) => (open ? 1 : 0)};
  z-index: ${({ open }) => (open ? 3 : -1)};

  &::-webkit-scrollbar {
    width: 15px;
    height: 100%;
    cursor: pointer;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px ${({ theme }) => theme.principal.text};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.brand.primary};
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.brand.dark};
  }

  &::-webkit-resizer {
    display: none;
  }
`;

export const StyledOption = styled.option<
  StyledSelectComponentProps & StyledSelectComponentOpenProps
>`
  transition-duration: 0.2s;
  padding: ${({ type }) => getPadding(type)};
  cursor: pointer;
  color: ${({ theme }) => theme.principal.text};

  pointer-events: ${({ open }) => (open ? "all" : "none")};
  white-space: normal;

  &:hover {
    background-color: ${({ theme }) => theme.principal.text};
    color: ${({ theme }) => theme.principal.background};
  }
`;
