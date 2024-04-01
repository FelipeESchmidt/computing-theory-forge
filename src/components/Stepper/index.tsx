import { MdCheck, MdClose } from "react-icons/md";

import * as S from "./styles";
import { StepperProps, StepProp } from "./types";

export const Stepper: React.FC<StepperProps> = ({
  steps,
  activeStep,
  jumpToStep,
  customNumberBackground,
  canJumpToForwardStep = false,
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
      <S.StyledStepNumber
        bg={customNumberBackground}
        isActive={step.key === activeStep ? 1 : 0}
      >
        {index + 1}
      </S.StyledStepNumber>
    );
  };

  const getJumpToStepFunction = (index: number) => {
    const activeIndex = steps.findIndex((step) => step.key === activeStep);
    console.log("activeIndex", activeIndex);

    if (index < activeIndex) {
      return () => jumpToStep(steps[index].key);
    }
    if (canJumpToForwardStep) {
      return () => jumpToStep(steps[index].key);
    }
  };

  return (
    <S.StyledStepper>
      {steps.map((step, index) => (
        <S.StyledStep key={step.key}>
          <S.StyledIconContainer onClick={getJumpToStepFunction(index)}>
            {renderIcon(step, index)}
          </S.StyledIconContainer>
          <S.StyledTitle>{step.title}</S.StyledTitle>
        </S.StyledStep>
      ))}
    </S.StyledStepper>
  );
};
