import { Select } from "@components/Select";
import { addLine, removeLine, setLineType } from "@redux/TMProgramming/actions";
import { TMProgrammingSelector } from "@redux/TMProgramming/selectors";
import { LineProps } from "@redux/TMProgramming/types";
import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import { lineOptions, lineTypes } from "../constants";
import { LineTypeOption } from "../types";
import { ProgrammingLine } from "./ProgrammingLine";
import * as S from "./styles";

export const CodeBlock: React.FC = () => {
  const dispatch = useDispatch();

  const { lines } = useSelector(TMProgrammingSelector);

  const handleAddLine = () => {
    dispatch(addLine());
  };

  const handleSelectLineType = (value: LineTypeOption, lineIndex: number) => {
    dispatch(setLineType(value, [...lineTypes[value].items], lineIndex));
  };

  const handleRemoveLine = (lineIndex: number) => {
    dispatch(removeLine(lineIndex));
  };

  return (
    <S.StyledCodeBlock>
      <S.StyledHeader>
        <S.StyledAddLine onClick={handleAddLine}>
          <S.StyledAddLineButton>
            <FiPlusCircle />
          </S.StyledAddLineButton>
          <S.StyledAddLineText>Adicionar linha</S.StyledAddLineText>
        </S.StyledAddLine>
      </S.StyledHeader>
      <S.StyledLines>
        {lines.map((line, index) => (
          <S.StyledLine key={index.toString()}>
            <S.LineText onClick={() => handleRemoveLine(index)}>{index}</S.LineText>
            {!line.type ? (
              <Select
                placeholder="Selecione o tipo de linha"
                value=""
                onChange={(value) => handleSelectLineType(value as LineTypeOption, index)}
                options={lineOptions}
              />
            ) : (
              <ProgrammingLine line={line as Required<LineProps>} index={index} />
            )}
          </S.StyledLine>
        ))}
      </S.StyledLines>
    </S.StyledCodeBlock>
  );
};
