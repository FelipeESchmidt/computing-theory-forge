import { Container } from "@components/Container";
import { Stepper } from "@components/Stepper";
import { useHeaderController } from "@contexts/HeaderProvider";
import { useThemeController } from "@contexts/ThemeControllerProvider";
import React, { useMemo } from "react";
import { useTheme } from "styled-components";

import * as S from "./styles";

export const Header: React.FC = () => {
  const theme = useTheme();

  const { switchThemeMode, themeMode } = useThemeController();
  const { steps, activeStep, jumpToStep } = useHeaderController();

  const stepperMemoized = useMemo(
    () => (
      <Stepper
        steps={steps}
        activeStep={activeStep}
        jumpToStep={jumpToStep}
        customNumberBackground={theme.principal.darkBackground}
      />
    ),
    [steps, activeStep],
  );

  return (
    <S.StyledHeader>
      <Container>
        <S.StyledHeaderContainer>
          <S.StyledTitle>Computing Theory Forge</S.StyledTitle>
          <S.StyledHandlersContainer>
            {stepperMemoized}
            <button onClick={switchThemeMode}>{themeMode}</button>
          </S.StyledHandlersContainer>
        </S.StyledHeaderContainer>
      </Container>
    </S.StyledHeader>
  );
};
