import { Button } from "@components/Button";
import { Input, InputPassword } from "@components/Input";
import { newMessage } from "@redux/AlertMessage/actions";
import { updateTokenAndSave } from "@redux/Authentication/actions";
import { selectLanguage } from "@redux/Language/selectors";
import { login } from "@services/authentication";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import * as S from "./styles";

interface LoginProps {
  onRegisterClick: () => void;
}

export const Login: React.FC<LoginProps> = ({ onRegisterClick }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const { texts } = useSelector(selectLanguage);

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
      const response = await login(email, password);
      dispatch(updateTokenAndSave(response.responseObject.token));
      dispatch(newMessage(response.message, "success"));
    } catch (error) {
      if (typeof error === "string") {
        dispatch(newMessage(error, "danger"));
        return;
      }
    }
  };

  return (
    <S.FormContainer>
      <S.Title>{texts.auth.login.title}</S.Title>
      <S.Form>
        <Input
          id="email"
          label={texts.auth.login.email}
          value={values.email}
          onChange={handleChangeInput}
        />
        <InputPassword
          id="password"
          label={texts.auth.login.password}
          value={values.password}
          onChange={handleChangeInput}
        />
        <S.ButtonContainer>
          <Button
            onClick={handleLogin}
            text={texts.auth.login.button}
            variant="contained"
          />
        </S.ButtonContainer>
      </S.Form>
      <S.BottomContainer>
        <S.Text>{texts.auth.login.notUserYet}</S.Text>
        <S.Link onClick={onRegisterClick}>{texts.auth.register.title}</S.Link>
      </S.BottomContainer>
    </S.FormContainer>
  );
};
