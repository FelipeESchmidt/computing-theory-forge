import { Container } from "@components/Container";
import { Stepper } from "@components/Stepper";
import { useThemeController } from "@contexts/ThemeControllerProvider";
import { useStepper } from "@hooks/useStepper";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";

import * as S from "./styles";

export const Header: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const { switchThemeMode, themeMode } = useThemeController();
  const { steps, activeStep, jumpToStep } = useStepper([
    {
      key: "definition",
      title: "Definição",
      onActive: () => navigate("/theoretical-machine/definition"),
    },
    {
      key: "programming",
      title: "Programação",
      onActive: () => navigate("/theoretical-machine/programming"),
    },
    {
      key: "runnable",
      title: "Executável",
      onActive: () => navigate("/theoretical-machine/run"),
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
