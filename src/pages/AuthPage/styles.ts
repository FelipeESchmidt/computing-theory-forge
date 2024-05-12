import { keyframes, styled } from "styled-components";

export const flip = keyframes`
  0% {
    transform: rotateY(0deg) scale(1);
  }
  25% {
    transform: rotateY(90deg) scale(0.95);
  }
  50% {
    transform: rotateY(180deg) scale(1);
  }
  75% {
    transform: rotateY(90deg) scale(0.95);
  }
  100% {
    transform: rotateY(0deg) scale(1);
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  &[data-reverse="true"] {
    transform: rotateY(180deg) scale(1);
  }
`;

export const BaseContainer = styled.div<{ reversed?: 1 | 0 }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40vw;
  min-height: 60vh;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.brand.dark};
  box-shadow: 0 0 4px ${({ theme }) => theme.brand.dark};
  border-radius: 8px;
  backface-visibility: hidden;
  transform: ${({ reversed }) => (reversed ? "rotateY(180deg)" : "rotateY(0deg)")};
  color: ${({ theme }) => theme.principal.text};

  @media (max-width: 1024px) {
    width: 65vw;
  }

  @media (max-width: 768px) {
    width: 80vw;
  }

  @media (max-width: 420px) {
    width: 90vw;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 8px;
  & > button {
    text-align: center;
    justify-content: center;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-block: 16px;
  align-items: center;
  align-self: center;
  gap: 8px;
`;

export const Text = styled.p`
  font-size: 14px;
  text-align: center;
`;

export const Link = styled.a`
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.brand.light};
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.brand.primary};
  }
`;
