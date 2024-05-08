import { Card, CardProps } from "@components/Card";
import React from "react";
import { FaPlusCircle, FaUserCircle } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";

import * as S from "../../styles";

interface TheoreticalMachineCardProps extends Partial<CardProps> {
  onRemove?: (event: React.MouseEvent) => void;
  title?: string;
  isNew?: boolean;
}

export const TheoreticalMachineCard: React.FC<TheoreticalMachineCardProps> = ({
  onClick,
  onRemove,
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
        <S.StyledRemoveMachine>
          <FiTrash onClick={onRemove} />
        </S.StyledRemoveMachine>
        <S.StyledNewIcon>
          <FaUserCircle />
        </S.StyledNewIcon>
        <S.StyledProductTitle>{title}</S.StyledProductTitle>
      </S.StyledCardContainer>
    </Card>
  );
};
