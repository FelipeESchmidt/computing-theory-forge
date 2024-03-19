import { Select } from "@components/Select";
import { TMDefinitionSelector } from "@redux/TMDefinition/selectors";
import { TheoreticalMachineFunctionalityDefinitionProps } from "@redux/TMDefinition/types";
import { setLineSelection } from "@redux/TMProgramming/actions";
import { TMProgrammingSelector } from "@redux/TMProgramming/selectors";
import { LineProps } from "@redux/TMProgramming/types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { lineTypes } from "../../constants";
import { LineItemsProps } from "../../types";
import * as SLine from "../styles";
import * as S from "./styles";

export interface ProgrammingLineProps {
  index: number;
  line: Required<LineProps>;
}

export const ProgrammingLine: React.FC<ProgrammingLineProps> = ({ index, line }) => {
  const dispatch = useDispatch();

  const lineType = line.type;
  const programaLine = lineTypes[lineType];

  const {
    machine: { functions, comparators },
  } = useSelector(TMDefinitionSelector);
  const { lines } = useSelector(TMProgrammingSelector);

  const mountSelector = (f: TheoreticalMachineFunctionalityDefinitionProps) => ({
    value: f.definition,
    label: f.definition,
  });

  const mountLines = () => {
    return [
      { value: "-1", label: "FIM" },
      ...lines
        .map((_, i) => ({ value: `${i}`, label: `${i}` }))
        .filter((l) => l.label !== `${index}`),
    ];
  };

  const selectors = {
    functions: functions.map(mountSelector),
    comparators: comparators.map(mountSelector),
    lines: mountLines(),
  };

  const handleSelect = (value: string, lineItem: LineItemsProps, itemIndex: number) => {
    dispatch(setLineSelection(value, lineItem, itemIndex, index));
  };

  const handleDeselect = (lineItem: LineItemsProps, itemIndex: number) => {
    dispatch(setLineSelection("", lineItem, itemIndex, index));
  };

  const renderSingleText = (
    lineItem: LineItemsProps,
    hasSelect: boolean,
    itemIndex: number,
  ) => (
    <SLine.Text
      {...{ [`data-indicator-color-${lineItem.color}`]: true }}
      data-has-select={hasSelect}
      onClick={() => (hasSelect ? handleDeselect(lineItem, itemIndex) : null)}
    >
      {lineItem.text}
    </SLine.Text>
  );

  const renderSelector = (lineItem: LineItemsProps, itemIndex: number) => (
    <Select
      placeholder="Selecione..."
      value=""
      onChange={(value) => handleSelect(value, lineItem, itemIndex)}
      options={selectors[lineItem.select!]}
    />
  );

  return (
    <>
      <S.Item>
        <SLine.Text>{programaLine.text}</SLine.Text>
      </S.Item>
      {line.items.map((lineItem, index) => (
        <S.Item key={index}>
          {lineItem.text && renderSingleText(lineItem, !!lineItem.select, index)}
          {lineItem.select && !lineItem.text && renderSelector(lineItem, index)}
        </S.Item>
      ))}
    </>
  );
};
