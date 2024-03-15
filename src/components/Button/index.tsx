import React from "react";

import { StyledButton } from "./styles";

export interface ButtonProps {
  text: string;
  variant: "contained" | "outlined";
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  variant,
  disabled,
  onClick,
  icon,
}) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} variant={variant}>
      {text}
      {icon}
    </StyledButton>
  );
};
