import { keyframes, styled } from "styled-components";

const pulse = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;

export const StyledSkeleton = styled.div`
  background-color: ${({ theme }) => theme.principal.text}44;
  border-radius: 8px;
  height: 100%;
  width: 100%;
  animation: ${pulse} 1.5s infinite;
`;
