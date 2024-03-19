import { Container } from "@components/Container";
import React from "react";

import { CodeBlock } from "./CodeBlock";
import { MainButton } from "./MainButton";
import * as S from "./styles";

export const Programming: React.FC = () => {
  return (
    <Container>
      <S.Programming>
        <S.TopWrapper>
          <S.DefinitionTitle>Programação</S.DefinitionTitle>
          <MainButton />
        </S.TopWrapper>
        <CodeBlock />
      </S.Programming>
    </Container>
  );
};
