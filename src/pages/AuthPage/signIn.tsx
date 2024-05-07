import { Button } from "@components/Button";
import { Input, InputPassword } from "@components/Input";
import { newMessage } from "@redux/AlertMessage/actions";
import { selectLanguage } from "@redux/Language/selectors";
import { register } from "@services/authentication";
import React from "react";
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
      await register(name, email, password, passwordConfirmation);
      onLoginClick();
    } catch (error) {
      if (typeof error === "string") {
        dispatch(newMessage(error, "danger"));
        return;
      }
    }
  };

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
        />
        <InputPassword
          id="passwordConfirmation"
          label={texts.auth.register.passwordConfirmation}
          value={values.passwordConfirmation}
          onChange={handleChangeInput}
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
