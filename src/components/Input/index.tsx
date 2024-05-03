import React from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

import * as S from "./styles";

export interface InputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string, id: string) => void;
  rightIcon?: React.ReactNode;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
}

export const Input: React.FC<InputProps> = ({
  id,
  label,
  value,
  onChange,
  rightIcon,
  type = "text",
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, id);
  };

  return (
    <S.InputContainer>
      <S.StyledIcon>{rightIcon}</S.StyledIcon>
      <S.Input
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        data-value={value}
      />
      <S.Label htmlFor={id}>{label}</S.Label>
    </S.InputContainer>
  );
};

export const InputPassword: React.FC<Omit<InputProps, "type" | "rightIcon">> = (
  props,
) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const renderIcon = () => {
    return (
      <S.InputPasswordIcon onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? <FiEye /> : <FiEyeOff />}
      </S.InputPasswordIcon>
    );
  };

  return (
    <Input
      {...props}
      type={showPassword ? "text" : "password"}
      rightIcon={renderIcon()}
    />
  );
};
