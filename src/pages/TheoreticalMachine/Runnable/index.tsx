import { Button } from "@components/Button";
import { Container } from "@components/Container";
import { TextArea } from "@components/TextArea";
import { useHeaderController } from "@contexts/HeaderProvider";
import { newMessage } from "@redux/AlertMessage/actions";
import { TMDefinitionSelector } from "@redux/TMDefinition/selectors";
import { TMProgrammingSelector } from "@redux/TMProgramming/selectors";
import { generateCode, resetCode, startInitialValues } from "@redux/TMRunnable/actions";
import { TMRunnableSelector } from "@redux/TMRunnable/selectors";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import InitialValues from "./InitialValues";
import * as S from "./styles";

export const Runnable = () => {
  const dispatch = useDispatch();

  const { updateStepToSuccess, updateStepToDefault } = useHeaderController();
  const { code } = useSelector(TMRunnableSelector);
  const {
    recorders,
    machine: { inputs, outputs },
  } = useSelector(TMDefinitionSelector);
  const { lines } = useSelector(TMProgrammingSelector);

  /* Gera código do programa escrito */
  const handleGenerateCode = () => {
    dispatch(generateCode(recorders, lines, outputs));
    dispatch(newMessage("Código gerado com sucesso!", "success"));
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
          <S.DefinitionTitle>Executável</S.DefinitionTitle>
          {code ? (
            <Button onClick={runCode} text="Rodar Código" variant="contained" />
          ) : (
            <Button
              onClick={handleGenerateCode}
              text="Gerar Código"
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
