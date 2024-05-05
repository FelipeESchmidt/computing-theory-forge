import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Tooltip } from "@components/Tooltip";
import { logout } from "@redux/Authentication/actions";
import { selectAuthentication } from "@redux/Authentication/selectors";
import { selectLanguage } from "@redux/Language/selectors";
import { getTokenEmail, getTokenName } from "@utils/token";
import React from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import * as S from "./styles";

export const UserSettings: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const { loggedIn, token } = useSelector(selectAuthentication);
  const { texts } = useSelector(selectLanguage);

  const [values, setValues] = React.useState({
    name: getTokenName(token),
    email: getTokenEmail(token),
    password: "",
    newPassword: "",
    newPasswordConfirmation: "",
  });

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleChangeInput = (value: string, id: string) => {
    setValues({ ...values, [id]: value });
  };

  if (!loggedIn) {
    return <></>;
  }

  return (
    <S.UserSettingsContainer>
      <Tooltip
        customIcon={
          <S.StyledIcon>
            <FaUser />
          </S.StyledIcon>
        }
      >
        <S.UserSettingsTooltipContainer>
          <S.TopContainer>
            <S.UserName>{getTokenName(token)}</S.UserName>
            <Button
              onClick={handleLogout}
              text={texts.auth.login.logout}
              variant="contained"
            />
          </S.TopContainer>
          <S.Form>
            <S.FormContainer>
              <Input
                id="email"
                label={texts.auth.update.email}
                value={values.email}
                disabled
                onChange={handleChangeInput}
              />
              <Input
                id="name"
                label={texts.auth.update.name}
                value={values.name}
                onChange={handleChangeInput}
              />
              <Input
                id="password"
                label={texts.auth.update.password}
                value={values.password}
                onChange={handleChangeInput}
              />
              <Input
                id="newPassword"
                label={texts.auth.update.newPassword}
                value={values.newPassword}
                onChange={handleChangeInput}
              />
              <Input
                id="newPasswordConfirmation"
                label={texts.auth.update.newPasswordConfirmation}
                value={values.newPasswordConfirmation}
                onChange={handleChangeInput}
              />
            </S.FormContainer>
            <Button
              text={texts.auth.update.button}
              variant="contained"
              onClick={() => null}
            />
          </S.Form>
        </S.UserSettingsTooltipContainer>
      </Tooltip>
    </S.UserSettingsContainer>
  );
};
