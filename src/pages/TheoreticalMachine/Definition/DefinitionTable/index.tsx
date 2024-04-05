import { Table, TableBody, TableHead, TableRow } from "@components/Table";
import { useResponsive } from "@hooks/useResponsive";
import { selectLanguage } from "@redux/Language/selectors";
import {
  addRecorder,
  markFunctionality,
  removeRecorder,
} from "@redux/TMDefinition/actions";
import { TMDefinitionSelector } from "@redux/TMDefinition/selectors";
import React, { useMemo } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { FiPlusCircle, FiTrash } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import { getWhatTheFGLMachineIsAbleToDo } from "../constants";
import * as S from "./styles";

export interface DefinitionTableProps {
  onSelectFunctionality: () => void;
}

export const DefinitionTable: React.FC<DefinitionTableProps> = ({
  onSelectFunctionality,
}) => {
  const dispatch = useDispatch();
  const isMobile = useResponsive();

  const { texts } = useSelector(selectLanguage);
  const { recorders } = useSelector(TMDefinitionSelector);

  const whatTheFGLMachineIsAbleToDo = useMemo(
    () => getWhatTheFGLMachineIsAbleToDo(texts),
    [texts],
  );

  const handleSelectFunctionality = (recorderId: number, functionalityId: number) => {
    dispatch(markFunctionality(recorderId, functionalityId));
    onSelectFunctionality();
  };

  const handleAddRecorder = () => {
    dispatch(addRecorder(whatTheFGLMachineIsAbleToDo));
  };

  const handleRemoveRecorder = (recorderId: number) => {
    dispatch(removeRecorder(recorderId));
  };

  return (
    <Table>
      <TableHead data-hide-border={!recorders.length}>
        <TableRow>
          <S.StyledTableHeadItem>
            <S.StyledAddRecorder>
              <FiPlusCircle onClick={handleAddRecorder} />
            </S.StyledAddRecorder>
          </S.StyledTableHeadItem>
          {whatTheFGLMachineIsAbleToDo.map((func) => (
            <S.StyledTableHeadItem key={func.name}>
              {isMobile ? func.nameResponsive : func.name}
            </S.StyledTableHeadItem>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {recorders.map((recorder, recorderIndex) => (
          <TableRow key={recorder.name}>
            <S.StyledTableBodyItem>
              <S.StyledRecorderName>{recorder.name}</S.StyledRecorderName>
              <S.StyledRemoveRecorder>
                <FiTrash onClick={() => handleRemoveRecorder(recorderIndex)} />
              </S.StyledRemoveRecorder>
            </S.StyledTableBodyItem>
            {recorder.functionalities.map((func, funcIndex) => (
              <S.StyledTableBodyItem
                key={func.name}
                data-marked={func.marked ? "true" : "false"}
                onClick={() => handleSelectFunctionality(recorderIndex, funcIndex)}
              >
                {!!func.marked && <AiFillCheckCircle />}
              </S.StyledTableBodyItem>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
