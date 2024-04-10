import { Button } from "@components/Button";
import { useHeaderController } from "@contexts/HeaderProvider";
import { newMessage } from "@redux/AlertMessage/actions";
import { selectLanguage } from "@redux/Language/selectors";
import { validateLinesWithThunk } from "@redux/TMProgramming/actions";
import { TMProgrammingSelector } from "@redux/TMProgramming/selectors";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

export const MainButton: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const { nextStep, updateStepToError, updateStepToDefault } = useHeaderController();
  const [showMessage, setShowMessage] = useState(false);

  const { texts } = useSelector(selectLanguage);
  const { isValid, error } = useSelector(TMProgrammingSelector);

  const validateProgramming = () => {
    dispatch(validateLinesWithThunk());
    setShowMessage(true);
  };

  const handleGoNext = () =>
    nextStep({ success: true, withError: false, completed: true });

  useEffect(() => {
    if (showMessage) {
      if (error) {
        dispatch(newMessage(error, "danger"));
        setShowMessage(false);
        updateStepToError();
      } else {
        dispatch(
          newMessage(texts.theoreticalMachine.programmingStep.validProgram, "success"),
        );
        setShowMessage(false);
        updateStepToDefault();
      }
    }
  }, [showMessage, error, dispatch]);

  const renderNextStepButton = () => (
    <Button text={texts.basic.nextStep} onClick={handleGoNext} variant="contained" />
  );

  const renderValidateButton = () => (
    <Button
      text={texts.theoreticalMachine.programmingStep.validateProgram}
      onClick={validateProgramming}
      variant="contained"
    />
  );

  return isValid ? renderNextStepButton() : renderValidateButton();
};
