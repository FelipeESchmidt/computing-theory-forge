import { Input } from "@components/Input";
import { selectLanguage } from "@redux/Language/selectors";
import { TMDefinitionSelector } from "@redux/TMDefinition/selectors";
import { setInitialValue } from "@redux/TMRunnable/actions";
import { TMRunnableSelector } from "@redux/TMRunnable/selectors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import * as S from "./styles";

const InitialValues: React.FC = () => {
  const dispatch = useDispatch();

  const {
    machine: { inputs },
  } = useSelector(TMDefinitionSelector);
  const { texts } = useSelector(selectLanguage);
  const { initialValues } = useSelector(TMRunnableSelector);

  const handleSetValue = (recorder: string, value: string) => {
    const valueAsNumber = parseInt(value, 10);
    dispatch(setInitialValue(recorder, valueAsNumber));
  };

  return (
    <S.InitialValuesWrapper>
      <S.Title>{texts.theoreticalMachine.runnableStep.defineValues}</S.Title>
      <S.InputsWrapper>
        {inputs.map((input, index) => (
          <Input
            id={input.recorder}
            key={index.toString()}
            type="number"
            label={`${texts.theoreticalMachine.runnableStep.recorder} ${input.recorder}`}
            value={initialValues[input.recorder]?.toString()}
            onChange={(value) => handleSetValue(input.recorder, value)}
          />
        ))}
      </S.InputsWrapper>
    </S.InitialValuesWrapper>
  );
};

export default InitialValues;
