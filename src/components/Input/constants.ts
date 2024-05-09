export interface IValidationProps {
  id: string;
  label: string;
  validation: (password: string) => boolean;
}

export const passwordValidations: IValidationProps[] = [
  {
    id: "length",
    label: "At least 8 characters",
    validation: (password) => password.length >= 8,
  },
  {
    id: "uppercase",
    label: "At least one uppercase letter",
    validation: (password) => /[A-Z]/.test(password),
  },
  {
    id: "lowercase",
    label: "At least one lowercase letter",
    validation: (password) => /[a-z]/.test(password),
  },
  {
    id: "number",
    label: "At least one number",
    validation: (password) => /[0-9]/.test(password),
  },
  {
    id: "special",
    label: "At least one special character (!@#$%^&*)",
    validation: (password) => /[!@#$%^&*]/.test(password),
  },
];

export const validatePassword = (
  password: string,
  additionalValidations: IValidationProps[] = [],
) => {
  const allValidations = [...passwordValidations, ...additionalValidations];
  return allValidations.map(({ id, label, validation }) => {
    return {
      id,
      label,
      valid: validation(password),
    };
  });
};
