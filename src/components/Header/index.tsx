import { Container } from "@components/Container";
import { Stepper } from "@components/Stepper";
import { useThemeController } from "@contexts/ThemeControllerProvider";
import { useStepper } from "@hooks/useStepper";
import React from "react";
import { useTheme } from "styled-components";

import * as S from "./styles";

export const Header: React.FC = () => {
  const theme = useTheme();
  const { switchThemeMode, themeMode } = useThemeController();
  const { steps, activeStep, jumpToStep } = useStepper([
    {
      key: "definition",
      title: "Definição",
    },
    {
      key: "programming",
      title: "Programação",
    },
    {
      key: "runnable",
      title: "Executável",
    },
  ]);

  return (
    <S.StyledHeader>
      <Container>
        <S.StyledHeaderContainer>
          <S.StyledTitle>Computing Theory Forge</S.StyledTitle>
          <S.StyledHandlersContainer>
            <Stepper
              steps={steps}
              activeStep={activeStep}
              jumpToStep={jumpToStep}
              customNumberBackground={theme.principal.darkBackground}
            />
            <button onClick={switchThemeMode}>{themeMode}</button>
          </S.StyledHandlersContainer>
        </S.StyledHeaderContainer>
      </Container>
    </S.StyledHeader>
  );
};
