import { Button } from "@components/Button";
import { newMessage } from "@redux/AlertMessage/actions";
import { validateLines } from "@redux/TMProgramming/actions";
import { TMProgrammingSelector } from "@redux/TMProgramming/selectors";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const MainButton: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showMessage, setShowMessage] = useState(false);

  const { isValid, error } = useSelector(TMProgrammingSelector);

  const validateProgramming = () => {
    dispatch(validateLines());
    setShowMessage(true);
  };

  const handleGoNext = () => navigate("/theoretical-machine/run");

  useEffect(() => {
    if (showMessage) {
      if (error) {
        dispatch(newMessage(error, "danger"));
        setShowMessage(false);
      } else {
        dispatch(newMessage("Programação válida", "success"));
        setShowMessage(false);
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
