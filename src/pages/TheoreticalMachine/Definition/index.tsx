import { Button } from "@components/Button";
import { Container } from "@components/Container";
import { newMessage } from "@redux/AlertMessage/actions";
import { AlertMessageType } from "@redux/AlertMessage/types";
import { createTheoreticalMachine, randomMachine } from "@redux/TMDefinition/actions";
import { TMDefinitionSelector } from "@redux/TMDefinition/selectors";
import { validateFunctionalities } from "@redux/TMDefinition/validations";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { recorderLimits, whatTheFGLMachineIsAbleToDo } from "./constants";
import { DefinitionTable } from "./DefinitionTable";
import DefinitionText from "./DefinitionText";
import * as S from "./styles";

export const Definition = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { recorders, machineIsGenerated } = useSelector(TMDefinitionSelector);

  const [isValid, setIsValid] = useState(false);
  const [ableToGoNext, setAbleToGoNext] = useState(false);

  const onSelectFunctionality = () => setAbleToGoNext(false);

  const handleGoNext = () => navigate("/theoretical-machine/transition");

  const dispatchMessage = (message: string, type: AlertMessageType = "success") =>
    dispatch(newMessage(message, type));

  const handleValidateFunctionalities = () => {
    const error = validateFunctionalities(recorders);
    setIsValid(!error);
    if (!error) {
      dispatchMessage("Máquina validada!");
    } else {
      dispatchMessage(`Máquina possui problemas! -> ${error} <-`, "danger");
    }
  };

  const handleGenerateFunctionalities = () => {
    dispatch(createTheoreticalMachine(recorders));
    dispatchMessage("Máquina gerada com sucesso!");
    setAbleToGoNext(true);
  };

  const handleGenerateRandom = () => {
    dispatch(randomMachine(whatTheFGLMachineIsAbleToDo, recorderLimits));
    dispatchMessage("Máquina aleatória gerada com sucesso!");
  };

  const renderSecondaryButton = () => {
    if (ableToGoNext)
      return <Button onClick={handleGoNext} text="Próximo Passo" variant="contained" />;
    if (recorders.length && !isValid)
      return (
        <Button
          onClick={handleValidateFunctionalities}
          disabled={recorders.length < recorderLimits.min}
          text="Validar Máquina"
          variant="contained"
        />
      );
    if (recorders.length && isValid)
      return (
        <Button
          onClick={handleGenerateFunctionalities}
          disabled={recorders.length < recorderLimits.min}
          text="Gerar Máquina"
          variant="contained"
        />
      );
    return (
      <Button
        onClick={handleGenerateRandom}
        text="Máquina Aleatória"
        variant="contained"
      />
    );
  };

  useEffect(() => {
    setIsValid(false);
    setAbleToGoNext(false);
  }, [recorders]);

  useEffect(() => {
    if (machineIsGenerated) {
      setIsValid(true);
      setAbleToGoNext(true);
    }
  }, [machineIsGenerated]);

  return (
    <Container>
      <S.Definition>
        <S.TopWrapper>
          <S.DefinitionTitle>Definição da Máquina</S.DefinitionTitle>
          {renderSecondaryButton()}
        </S.TopWrapper>
        <S.DefinitionWrapper>
          <DefinitionTable onSelectFunctionality={onSelectFunctionality} />
        </S.DefinitionWrapper>
        {ableToGoNext && (
          <S.DefinitionWrapper>
            <DefinitionText />
          </S.DefinitionWrapper>
        )}
      </S.Definition>
    </Container>
  );
};
