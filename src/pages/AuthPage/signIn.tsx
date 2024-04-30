import { Button } from "@components/Button";
import { Input, InputPassword } from "@components/Input";
import { ThemeSwitch } from "@components/ThemeSwitch";
import { newMessage } from "@redux/AlertMessage/actions";
import { register } from "@services/authentication";
import React from "react";
import { useDispatch } from "react-redux";

import * as S from "./styles";

interface SignInProps {
  onLoginClick: () => void;
}

export const SignIn: React.FC<SignInProps> = ({ onLoginClick }) => {
  const dispatch = useDispatch();

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
      <S.SwitchThemeContainer>
        <ThemeSwitch />
      </S.SwitchThemeContainer>
      <S.Title>Cadastrar-se</S.Title>
      <S.Form>
        <Input id="name" label="Name" value={values.name} onChange={handleChangeInput} />
        <Input
          id="email"
          label="Email"
          value={values.email}
          onChange={handleChangeInput}
        />
        <InputPassword
          id="password"
          label="Senha"
          value={values.password}
          onChange={handleChangeInput}
        />
        <InputPassword
          id="passwordConfirmation"
          label="Confirmação de senha"
          value={values.passwordConfirmation}
          onChange={handleChangeInput}
        />
        <S.ButtonContainer>
          <Button onClick={handleRegister} text="Cadastrar-se" variant="contained" />
        </S.ButtonContainer>
      </S.Form>
      <S.BottomContainer>
        <S.Text>Já possui uma conta?</S.Text>
        <S.Link onClick={onLoginClick}>Login</S.Link>
      </S.BottomContainer>
    </S.FormContainer>
  );
};
