import { Button } from "@components/Button";
import { Container } from "@components/Container";
import { TextArea } from "@components/TextArea";
import { useHeaderController } from "@contexts/HeaderProvider";
import { newMessage } from "@redux/AlertMessage/actions";
import { selectLanguage } from "@redux/Language/selectors";
import { TMDefinitionSelector } from "@redux/TMDefinition/selectors";
import { TMProgrammingSelector } from "@redux/TMProgramming/selectors";
import {
  generateCodeWithThunk,
  resetCode,
  startInitialValues,
} from "@redux/TMRunnable/actions";
import { TMRunnableSelector } from "@redux/TMRunnable/selectors";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import InitialValues from "./InitialValues";
import * as S from "./styles";

export const Runnable: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const { updateStepToSuccess, updateStepToDefault } = useHeaderController();
  const { code } = useSelector(TMRunnableSelector);
  const {
    recorders,
    machine: { inputs, outputs },
  } = useSelector(TMDefinitionSelector);
  const { texts } = useSelector(selectLanguage);
  const { lines } = useSelector(TMProgrammingSelector);

  /* Gera código do programa escrito */
  const handleGenerateCode = () => {
    dispatch(generateCodeWithThunk(recorders, lines, outputs));
    dispatch(newMessage(texts.theoreticalMachine.runnableStep.codeGenerated, "success"));
    updateStepToSuccess();
  };

  const clearScripts = () => {
    document.querySelectorAll("script[data-op=code]").forEach((el) => el.remove());
  };

  /* Roda o código gerado */
  const runCode = () => {
    clearScripts();
    const script = document.createElement("script");
    script.setAttribute("data-op", "code");

    const scriptText = document.createTextNode(code);

    script.appendChild(scriptText);
    document.body.appendChild(script);
  };

  useEffect(() => {
    dispatch(resetCode());
    dispatch(startInitialValues(inputs));
  }, [dispatch, inputs, outputs]);

  useEffect(() => {
    if (!code) updateStepToDefault();
  }, [code]);

  return (
    <Container>
      <S.CodeRunner>
        <S.TopWrapper>
          <S.DefinitionTitle>
            {texts.theoreticalMachine.runnableStep.title}
          </S.DefinitionTitle>
          {code ? (
            <Button
              onClick={runCode}
              text={texts.theoreticalMachine.runnableStep.runCode}
              variant="contained"
            />
          ) : (
            <Button
              onClick={handleGenerateCode}
              text={texts.theoreticalMachine.runnableStep.generateCode}
              variant="contained"
            />
          )}
        </S.TopWrapper>
        <InitialValues />
        <TextArea id="traceTable" readOnly />
      </S.CodeRunner>
    </Container>
  );
};
