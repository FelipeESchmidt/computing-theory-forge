import { Button } from "@components/Button";
import { useHeaderController } from "@contexts/HeaderProvider";
import { newMessage } from "@redux/AlertMessage/actions";
import { validateLines } from "@redux/TMProgramming/actions";
import { TMProgrammingSelector } from "@redux/TMProgramming/selectors";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const MainButton: React.FC = () => {
  const dispatch = useDispatch();

  const { nextStep, updateStepToError, updateStepToDefault } = useHeaderController();
  const [showMessage, setShowMessage] = useState(false);

  const { isValid, error } = useSelector(TMProgrammingSelector);

  const validateProgramming = () => {
    dispatch(validateLines());
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
        dispatch(newMessage("Programação válida", "success"));
        setShowMessage(false);
        updateStepToDefault();
      }
    }
  }, [showMessage, error, dispatch]);

  const renderNextStepButton = () => (
    <Button text="Próximo passo" onClick={handleGoNext} variant="contained" />
  );

  const renderValidateButton = () => (
    <Button text="Validar e Gerar" onClick={validateProgramming} variant="contained" />
  );

  return isValid ? renderNextStepButton() : renderValidateButton();
};
