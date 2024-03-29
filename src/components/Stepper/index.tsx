import { MdCheck, MdClose } from "react-icons/md";

import * as S from "./styles";
import { StepperProps, StepProp } from "./types";

export const Stepper: React.FC<StepperProps> = ({
  steps,
  activeStep,
  customNumberBackground,
}) => {
  const renderIcon = (step: StepProp, index: number) => {
    if (step.completed) {
      return (
        <S.StyledCompletedIcon>
          <MdCheck />
        </S.StyledCompletedIcon>
      );
    }
    if (step.withError) {
      return (
        <S.StyledErrorIcon>
          <MdClose />
        </S.StyledErrorIcon>
      );
    }
    if (step.success) {
      return (
        <S.StyledSuccessIcon>
          <MdCheck />
        </S.StyledSuccessIcon>
      );
    }
    return (
      <S.StyledStepNumber bg={customNumberBackground}>{index + 1}</S.StyledStepNumber>
    );
  };

  return (
    <S.StyledStepper>
      {steps.map((step, index) => (
        <S.StyledStep key={step.key}>
          {renderIcon(step, index)}
          <S.StyledTitle>{step.title}</S.StyledTitle>
        </S.StyledStep>
      ))}
    </S.StyledStepper>
  );
};
