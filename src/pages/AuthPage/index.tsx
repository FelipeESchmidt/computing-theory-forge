import React from "react";

import * as S from "./styles";
import { Login } from "./login";
import { SignIn } from "./signIn";

export const AuthPage: React.FC = () => {
  const [showRegister, setShowRegister] = React.useState(false);

  return (
    <S.MainContainer
      // onClick={() => setShowRegister(!showRegister)}
      data-reverse={showRegister}
    >
      <S.BaseContainer>
        <Login onRegisterClick={() => setShowRegister(true)} />
      </S.BaseContainer>
      <S.BaseContainer reversed={1}>
        <SignIn onLoginClick={() => setShowRegister(false)} />
      </S.BaseContainer>
    </S.MainContainer>
  );
};
