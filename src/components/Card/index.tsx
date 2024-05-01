import React from "react";

import * as S from "./styles";

export interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, onClick }) => {
  return <S.StyledCard onClick={onClick}>{children}</S.StyledCard>;
};
