import { Header } from "@components/Header";
import { useHeaderController } from "@contexts/HeaderProvider";
import { selectLanguage } from "@redux/Language/selectors";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { getTheoreticalMachineSteps } from "./constants";
import { Definition } from "./Definition";
import { Programming } from "./Programming";
import { Runnable } from "./Runnable";
import * as S from "./styles";
import { TheoreticalSteps } from "./types";

export const TheoreticalMachine: React.FC = () => {
  const { setSteps } = useHeaderController();
  const { texts } = useSelector(selectLanguage);
  const [activeStep, setActiveStep] = React.useState<TheoreticalSteps>("definition");

  const renderCurrentStep = () => {
    switch (activeStep) {
      case "definition":
        return <Definition />;
      case "programming":
        return <Programming />;
      case "runnable":
        return <Runnable />;
    }
  };

  useEffect(() => {
    setSteps(getTheoreticalMachineSteps(setActiveStep, texts));
  }, [texts]);

  return (
    <S.StyledContainer>
      <Header />
      {renderCurrentStep()}
    </S.StyledContainer>
  );
};
