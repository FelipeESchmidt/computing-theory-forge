import React from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

import { IValidationProps, validatePassword } from "./constants";
import * as S from "./styles";

export interface InputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string, id: string) => void;
  rightIcon?: React.ReactNode;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  disabled?: boolean;
  onBlur?: React.InputHTMLAttributes<HTMLInputElement>["onBlur"];
  onFocus?: React.InputHTMLAttributes<HTMLInputElement>["onFocus"];
}

export interface InputPasswordProps extends Omit<InputProps, "type" | "rightIcon"> {
  hideValidations?: boolean;
  onValidChange?: (valid: boolean) => void;
  additionalValidations?: IValidationProps[];
}

export const Input: React.FC<InputProps> = ({
  id,
  label,
  value,
  onChange,
  rightIcon,
  onBlur,
  onFocus,
  disabled = false,
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
        disabled={disabled}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      <S.Label htmlFor={id}>{label}</S.Label>
    </S.InputContainer>
  );
};

export const InputPassword: React.FC<InputPasswordProps> = ({
  hideValidations,
  onValidChange,
  additionalValidations = [],
  ...props
}) => {
  const [hasFocus, setHasFocus] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [validations, setValidations] = React.useState(
    validatePassword("", additionalValidations),
  );
  const [isValid, setIsValid] = React.useState(false);

  const renderIcon = () => {
    return (
      <S.InputPasswordIcon onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? <FiEye /> : <FiEyeOff />}
      </S.InputPasswordIcon>
    );
  };

  React.useEffect(() => {
    setValidations(validatePassword(props.value, additionalValidations));
  }, [props.value]);

  React.useEffect(() => {
    setIsValid(validations.every(({ valid }) => valid));
  }, [validations, onValidChange]);

  React.useEffect(() => {
    onValidChange?.(isValid);
  }, [isValid]);

  return (
    <S.InputPasswordContainer>
      <Input
        {...props}
        onBlur={() => setHasFocus(false)}
        onFocus={() => setHasFocus(true)}
        type={showPassword ? "text" : "password"}
        rightIcon={renderIcon()}
      />
      {!!hasFocus && !hideValidations && (
        <S.InputPasswordValidations>
          {validations.map(({ id, label, valid }) => (
            <S.ValidationText
              key={id}
              hasValue={props.value ? 1 : 0}
              valid={valid ? 1 : 0}
            >
              {label}
            </S.ValidationText>
          ))}
        </S.InputPasswordValidations>
      )}
    </S.InputPasswordContainer>
  );
};
