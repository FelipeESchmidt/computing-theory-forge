import React from "react";

import * as S from "./styles";

export interface CardProps {
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({ description, title }) => {
  return (
    <S.StyledCard>
      <S.StyledCardTitle>{title}</S.StyledCardTitle>
      <S.StyledCardDescription>{description}</S.StyledCardDescription>
    </S.StyledCard>
  );
};
