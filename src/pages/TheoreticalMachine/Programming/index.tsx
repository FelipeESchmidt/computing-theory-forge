import { Container } from "@components/Container";
import { selectLanguage } from "@redux/Language/selectors";
import React from "react";
import { useSelector } from "react-redux";

import { CodeBlock } from "./CodeBlock";
import { MainButton } from "./MainButton";
import * as S from "./styles";

export const Programming: React.FC = () => {
  const { texts } = useSelector(selectLanguage);

  return (
    <Container>
      <S.Programming>
        <S.TopWrapper>
          <S.DefinitionTitle>
            {texts.theoreticalMachine.programmingStep.title}
          </S.DefinitionTitle>
          <MainButton />
        </S.TopWrapper>
        <CodeBlock />
      </S.Programming>
    </Container>
  );
};
