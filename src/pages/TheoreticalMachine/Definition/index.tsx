import { Button } from "@components/Button";
import { Container } from "@components/Container";
import { Notice } from "@components/Notice";
import { useHeaderController } from "@contexts/HeaderProvider";
import { newMessage } from "@redux/AlertMessage/actions";
import { AlertMessageType } from "@redux/AlertMessage/types";
import { selectLanguage } from "@redux/Language/selectors";
import {
  createTheoreticalMachineWithThunk,
  randomMachine,
} from "@redux/TMDefinition/actions";
import { TMDefinitionSelector } from "@redux/TMDefinition/selectors";
import { validateFunctionalities } from "@redux/TMDefinition/validations";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import { getWhatTheFGLMachineIsAbleToDo, recorderLimits } from "./constants";
import { DefinitionTable } from "./DefinitionTable";
import DefinitionText from "./DefinitionText";
import * as S from "./styles";

export const Definition = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const { nextStep, updateStepToError, updateStepToDefault } = useHeaderController();
  const { recorders, machineIsGenerated } = useSelector(TMDefinitionSelector);
  const { texts } = useSelector(selectLanguage);

  const whatTheFGLMachineIsAbleToDo = useMemo(
    () => getWhatTheFGLMachineIsAbleToDo(texts),
    [texts],
  );

  const [isValid, setIsValid] = useState(false);
  const [ableToGoNext, setAbleToGoNext] = useState(false);

  const onSelectFunctionality = () => setAbleToGoNext(false);

  const handleGoNext = () =>
    nextStep({ success: true, withError: false, completed: true });

  const dispatchMessage = (message: string, type: AlertMessageType = "success") =>
    dispatch(newMessage(message, type));

  const handleValidateFunctionalities = () => {
    const error = validateFunctionalities(recorders, texts);
    setIsValid(!error);
    if (!error) {
      dispatchMessage(texts.theoreticalMachine.definitionStep.validatedMachine);
    } else {
      updateStepToError();
      const errorMessage = texts.theoreticalMachine.definitionStep.baseError.replace(
        "{{message}}",
        error,
      );
      dispatchMessage(errorMessage, "danger");
    }
  };

  const handleGenerateFunctionalities = () => {
    dispatch(createTheoreticalMachineWithThunk(recorders));
    dispatchMessage(texts.theoreticalMachine.definitionStep.generatedMachine);
    setAbleToGoNext(true);
  };

  const handleGenerateRandom = () => {
    dispatch(randomMachine(whatTheFGLMachineIsAbleToDo, recorderLimits));
    dispatchMessage(texts.theoreticalMachine.definitionStep.randomMachineGenerated);
  };

  const renderSecondaryButton = () => {
    if (ableToGoNext)
      return (
        <Button onClick={handleGoNext} text={texts.basic.nextStep} variant="contained" />
      );
    if (recorders.length && !isValid)
      return (
        <Button
          onClick={handleValidateFunctionalities}
          disabled={recorders.length < recorderLimits.min}
          text={texts.theoreticalMachine.definitionStep.validateMachine}
          variant="contained"
        />
      );
    if (recorders.length && isValid)
      return (
        <Button
          onClick={handleGenerateFunctionalities}
          disabled={recorders.length < recorderLimits.min}
          text={texts.theoreticalMachine.definitionStep.generateMachine}
          variant="contained"
        />
      );
    return (
      <Button
        onClick={handleGenerateRandom}
        text={texts.theoreticalMachine.definitionStep.randomMachine}
        variant="contained"
      />
    );
  };

  useEffect(() => {
    updateStepToDefault();
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
          <S.DefinitionTitle>
            {texts.theoreticalMachine.definitionStep.title}
          </S.DefinitionTitle>
          {renderSecondaryButton()}
        </S.TopWrapper>
        <S.DefinitionWrapper>
          <DefinitionTable onSelectFunctionality={onSelectFunctionality} />
          {!recorders.length && (
            <Notice text={texts.theoreticalMachine.definitionStep.notice} type="info" />
          )}
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
