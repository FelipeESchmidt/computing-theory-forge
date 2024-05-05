import { Card, CardProps } from "@components/Card";
import React from "react";
import { FaPlusCircle, FaUserCircle } from "react-icons/fa";

import * as S from "../../styles";

interface TheoreticalMachineCardProps extends Partial<CardProps> {
  title?: string;
  isNew?: boolean;
}

export const TheoreticalMachineCard: React.FC<TheoreticalMachineCardProps> = ({
  onClick,
  title = "Nova",
  isNew = false,
}) => {
  if (isNew) {
    return (
      <Card onClick={onClick}>
        <S.StyledCardContainer>
          <S.StyledNewIcon>
            <FaPlusCircle />
          </S.StyledNewIcon>
          <S.StyledProductTitle>{title}</S.StyledProductTitle>
        </S.StyledCardContainer>
      </Card>
    );
  }

  return (
    <Card onClick={onClick}>
      <S.StyledCardContainer vertical={1}>
        <S.StyledNewIcon>
          <FaUserCircle />
        </S.StyledNewIcon>
        <S.StyledProductTitle>{title}</S.StyledProductTitle>
      </S.StyledCardContainer>
    </Card>
  );
};
