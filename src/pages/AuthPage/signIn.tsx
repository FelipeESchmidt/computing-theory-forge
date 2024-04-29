import { Input, InputPassword } from "@components/Input";
import * as S from "./styles";
import { Button } from "@components/Button";
import { ThemeSwitch } from "@components/ThemeSwitch";

interface SignInProps {
  onLoginClick: () => void;
}

export const SignIn: React.FC<SignInProps> = ({ onLoginClick }) => {
  return (
    <S.FormContainer>
      <S.SwitchThemeContainer>
        <ThemeSwitch />
      </S.SwitchThemeContainer>
      <S.Title>Cadastrar-se</S.Title>
      <S.Form>
        <Input id="name" label="Name" value="" onChange={() => {}} />
        <Input id="email" label="Email" value="" onChange={() => {}} />
        <InputPassword id="password" label="Senha" value="" onChange={() => {}} />
        <InputPassword
          id="password-confirmation"
          label="Confirmação de senha"
          value=""
          onChange={() => {}}
        />
        <S.ButtonContainer>
          <Button onClick={() => null} text="Cadastrar-se" variant="contained" />
        </S.ButtonContainer>
      </S.Form>
      <S.BottomContainer>
        <S.Text>Já possui uma conta?</S.Text>
        <S.Link onClick={onLoginClick}>Login</S.Link>
      </S.BottomContainer>
    </S.FormContainer>
  );
};
