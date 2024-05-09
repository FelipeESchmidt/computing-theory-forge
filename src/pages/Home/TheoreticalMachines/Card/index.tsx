import { Card, CardProps } from "@components/Card";
import { selectLanguage } from "@redux/Language/selectors";
import React from "react";
import { FaPlusCircle, FaUserCircle } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import { useSelector } from "react-redux";

import * as S from "../../styles";

interface TheoreticalMachineCardProps extends Partial<CardProps> {
  onRemove?: (event: React.MouseEvent) => void;
  title?: string;
  isNew?: boolean;
}

export const TheoreticalMachineCard: React.FC<TheoreticalMachineCardProps> = ({
  onClick,
  onRemove,
  title = "",
  isNew = false,
}) => {
  const { texts } = useSelector(selectLanguage);

  if (isNew) {
    return (
      <Card onClick={onClick}>
        <S.StyledCardContainer>
          <S.StyledNewIcon>
            <FaPlusCircle />
          </S.StyledNewIcon>
          <S.StyledProductTitle>
            {texts.theoreticalMachine.newMachine}
          </S.StyledProductTitle>
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
