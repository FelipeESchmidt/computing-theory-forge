import { validateAlreadyLoggedIn } from "@redux/Authentication/actions";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

import { Login } from "./login";
import { SignIn } from "./signIn";
import * as S from "./styles";

export const AuthPage: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const [showRegister, setShowRegister] = React.useState(false);

  useEffect(() => {
    dispatch(validateAlreadyLoggedIn());
  }, []);

  return (
    <S.MainContainer data-reverse={showRegister}>
      <S.BaseContainer>
        <Login onRegisterClick={() => setShowRegister(true)} />
      </S.BaseContainer>
      <S.BaseContainer reversed={1}>
        <SignIn onLoginClick={() => setShowRegister(false)} />
      </S.BaseContainer>
    </S.MainContainer>
  );
};
