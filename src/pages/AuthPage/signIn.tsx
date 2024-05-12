import { Button } from "@components/Button";
import { Input, InputPassword } from "@components/Input";
import { newMessage } from "@redux/AlertMessage/actions";
import { selectLanguage } from "@redux/Language/selectors";
import { register } from "@services/authentication";
import { translateMessage } from "@utils/messages";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as S from "./styles";

interface SignInProps {
  onLoginClick: () => void;
}

export const SignIn: React.FC<SignInProps> = ({ onLoginClick }) => {
  const dispatch = useDispatch();

  const { texts } = useSelector(selectLanguage);

  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const [validValues, setValidValues] = React.useState({
    name: false,
    email: false,
    password: false,
    newPassword: false,
    newPasswordConfirmation: false,
  });

  const handleChangeInput = (value: string, id: string) => {
    setValues({ ...values, [id]: value });
  };

  const handleRegister = async (event: React.MouseEvent) => {
    event.preventDefault();
    const name = values.name;
    const email = values.email;
    const password = values.password;
    const passwordConfirmation = values.passwordConfirmation;
    try {
      const response = await register(name, email, password, passwordConfirmation);
      const message = translateMessage(response.message, texts);
      dispatch(newMessage(message, "success"));
      onLoginClick();
    } catch (error) {
      if (typeof error === "string") {
        const errorMessage = translateMessage(error, texts);
        dispatch(newMessage(errorMessage, "danger"));
        return;
      }
    }
  };

  useEffect(() => {
    setValidValues({ ...validValues, name: values.name.length > 0 });
  }, [values.name]);

  useEffect(() => {
    setValidValues({ ...validValues, email: values.email.length > 0 });
  }, [values.email]);

  return (
    <S.FormContainer>
      <S.Title>{texts.auth.register.title}</S.Title>
      <S.Form>
        <Input
          id="name"
          label={texts.auth.register.name}
          value={values.name}
          onChange={handleChangeInput}
        />
        <Input
          id="email"
          label={texts.auth.register.email}
          value={values.email}
          onChange={handleChangeInput}
        />
        <InputPassword
          id="password"
          label={texts.auth.register.password}
          value={values.password}
          onChange={handleChangeInput}
          onValidChange={(valid) => setValidValues({ ...validValues, password: valid })}
        />
        <InputPassword
          id="passwordConfirmation"
          label={texts.auth.register.passwordConfirmation}
          value={values.passwordConfirmation}
          onChange={handleChangeInput}
          onValidChange={(valid) =>
            setValidValues({ ...validValues, newPasswordConfirmation: valid })
          }
          additionalValidations={[
            {
              id: "passwordMatch",
              label: "Passwords must match",
              validation: (password) => password === values.password,
            },
          ]}
        />
        <S.ButtonContainer>
          <Button
            onClick={handleRegister}
            text={texts.auth.register.button}
            variant="contained"
            disabled={
              !validValues.name ||
              !validValues.email ||
              !validValues.password ||
              !validValues.newPasswordConfirmation
            }
          />
        </S.ButtonContainer>
      </S.Form>
      <S.BottomContainer>
        <S.Text>{texts.auth.register.alreadyUser}</S.Text>
        <S.Link onClick={onLoginClick}>{texts.auth.login.title}</S.Link>
      </S.BottomContainer>
    </S.FormContainer>
  );
};
