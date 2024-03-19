import React, { useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import * as S from "./styles";

export interface SelectProps {
  placeholder: string;
  value: string;
  styleType?: S.SelectStyleTypes;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  maxOptionsRendered?: number;
}

export const Select: React.FC<SelectProps> = ({
  onChange,
  options,
  value,
  placeholder,
  styleType = "normal",
  maxOptionsRendered = 5,
}) => {
  const optionsRef = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);
  const [itemHeight, setItemHeight] = React.useState(0);

  const labelSelected = options.find((option) => option.value === value)?.label;

  const filteredOptions = options.filter((option) => option.value !== value);

  const handleSelectOption = (value: string) => {
    onChange(value);
    setOpen(false);
  };

  useEffect(() => {
    if (optionsRef.current) {
      const item = optionsRef.current.children[0] as HTMLElement;
      setItemHeight(item.clientHeight);
    }
  }, [optionsRef]);

  return (
    <S.StyledSelectWrapper>
      <S.StyledSelect type={styleType} onClick={() => setOpen(!open)}>
        {labelSelected || placeholder}
        {open ? <FiChevronUp /> : <FiChevronDown />}
      </S.StyledSelect>
      <S.StyledOptions
        ref={optionsRef}
        open={open}
        style={{ maxHeight: itemHeight * maxOptionsRendered }}
      >
        {filteredOptions.map((option) => (
          <S.StyledOption
            open={open}
            type={styleType}
            key={option.value}
            value={option.value}
            onClick={() => handleSelectOption(option.value)}
          >
            {option.label}
          </S.StyledOption>
        ))}
      </S.StyledOptions>
    </S.StyledSelectWrapper>
  );
};
