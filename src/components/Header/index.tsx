import { Container } from "@components/Container";
import { LanguageSelector } from "@components/LanguageSelector";
import { Stepper } from "@components/Stepper";
import { ThemeSwitch } from "@components/ThemeSwitch";
import { UserSettings } from "@components/UserSettings";
import { useHeaderController } from "@contexts/HeaderProvider";
import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";

import * as S from "./styles";

export const Header: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const { steps, activeStep, jumpToStep } = useHeaderController();

  const handleGoToHome = () => {
    navigate("/");
  };

  const stepperMemoized = useMemo(
    () => (
      <Stepper
        steps={steps}
        activeStep={activeStep}
        jumpToStep={jumpToStep}
        customNumberBackground={theme.principal.darkBackground}
      />
    ),
    [steps, activeStep, theme],
  );

  return (
    <S.StyledHeader>
      <Container>
        <S.StyledHeaderContainer>
          <S.StyledTitle onClick={handleGoToHome}>Computing Theory Forge</S.StyledTitle>
          <S.StyledStepsContainer>{stepperMemoized}</S.StyledStepsContainer>
          <S.StyledHandlersContainer>
            <ThemeSwitch />
            <LanguageSelector />
            <UserSettings />
          </S.StyledHandlersContainer>
        </S.StyledHeaderContainer>
      </Container>
    </S.StyledHeader>
  );
};
