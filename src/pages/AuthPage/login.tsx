import React from "react";
import { useDispatch } from "react-redux";

import { updateToken } from "@redux/Authentication/actions";
import { Input, InputPassword } from "@components/Input";
import { Button } from "@components/Button";
import { ThemeSwitch } from "@components/ThemeSwitch";
import { login } from "@services/authentication";

import * as S from "./styles";

interface LoginProps {
  onRegisterClick: () => void;
}

export const Login: React.FC<LoginProps> = ({ onRegisterClick }) => {
  const dispatch = useDispatch();

  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const handleChangeInput = (value: string, id: string) => {
    setValues({ ...values, [id]: value });
  };

  const handleLogin = async (event: React.MouseEvent) => {
    event.preventDefault();
    const email = values.email;
    const password = values.password;
    try {
      const token = await login(email, password);
      dispatch(updateToken(token));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.FormContainer>
      <S.SwitchThemeContainer>
        <ThemeSwitch />
      </S.SwitchThemeContainer>
      <S.Title>Entrar</S.Title>
      <S.Form>
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
        <S.ButtonContainer>
          <Button onClick={handleLogin} text="Entrar" variant="contained" />
        </S.ButtonContainer>
      </S.Form>
      <S.BottomContainer>
        <S.Text>Não possui conta ainda?</S.Text>
        <S.Link onClick={onRegisterClick}>Cadastrar-se</S.Link>
      </S.BottomContainer>
    </S.FormContainer>
  );
};
