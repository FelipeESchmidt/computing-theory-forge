import { Button } from "@components/Button";
import { Input, InputPassword } from "@components/Input";
import { Tooltip } from "@components/Tooltip";
import { newMessage } from "@redux/AlertMessage/actions";
import { logout } from "@redux/Authentication/actions";
import { selectAuthentication } from "@redux/Authentication/selectors";
import { selectLanguage } from "@redux/Language/selectors";
import { updateUser } from "@services/authentication";
import { translateMessage } from "@utils/messages";
import { getTokenEmail, getTokenName } from "@utils/token";
import React, { useEffect } from "react";
import { FiUser } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import * as S from "./styles";

export const UserSettings: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const { loggedIn, token } = useSelector(selectAuthentication);
  const { texts } = useSelector(selectLanguage);

  const [forceHide, setForceHide] = React.useState(false);

  const [values, setValues] = React.useState({
    name: getTokenName(token),
    email: getTokenEmail(token),
    password: "",
    newPassword: "",
    newPasswordConfirmation: "",
  });

  const [validValues, setValidValues] = React.useState({
    password: false,
    newPassword: false,
    newPasswordConfirmation: false,
  });

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleChangeInput = (value: string, id: string) => {
    setValues({ ...values, [id]: value });
  };

  const handleClear = () => {
    setValues({
      name: getTokenName(token),
      email: getTokenEmail(token),
      password: "",
      newPassword: "",
      newPasswordConfirmation: "",
    });
    setValidValues({
      password: false,
      newPassword: false,
      newPasswordConfirmation: false,
    });
  };

  const handleUpdate = async (event: React.MouseEvent) => {
    event.preventDefault();
    const name = values.name;
    const password = values.password;
    const newPassword = values.newPassword;
    const newPasswordConfirmation = values.newPasswordConfirmation;
    try {
      const response = await updateUser(
        name,
        password,
        newPassword,
        newPasswordConfirmation,
      );
      const message = translateMessage(response.message, texts);
      dispatch(newMessage(message, "success"));
      setForceHide(!forceHide);
      handleClear();
    } catch (error) {
      if (typeof error === "string") {
        const errorMessage = translateMessage(error, texts);
        dispatch(newMessage(errorMessage, "danger"));
        return;
      }
    }
  };

  useEffect(() => {
    setValidValues({ ...validValues, password: values.password.length > 0 });
  }, [values.password]);

  useEffect(() => {
    if (forceHide) {
      setForceHide(false);
    }
  }, [forceHide]);

  if (!loggedIn) {
    return <></>;
  }

  return (
    <S.UserSettingsContainer>
      <Tooltip
        forceHide={forceHide}
        customIcon={
          <S.StyledIcon>
            <FiUser />
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
                type="email"
                label={texts.auth.update.email}
                value={values.email}
                disabled
                onChange={() => null}
              />
              <InputPassword
                id="password"
                label={texts.auth.update.password}
                value={values.password}
                onChange={handleChangeInput}
                hideValidations
              />
              <InputPassword
                id="newPassword"
                label={texts.auth.update.newPassword}
                value={values.newPassword}
                onChange={handleChangeInput}
                onValidChange={(valid) =>
                  setValidValues({ ...validValues, newPassword: valid })
                }
              />
              <InputPassword
                id="newPasswordConfirmation"
                label={texts.auth.update.newPasswordConfirmation}
                value={values.newPasswordConfirmation}
                onChange={handleChangeInput}
                onValidChange={(valid) =>
                  setValidValues({ ...validValues, newPasswordConfirmation: valid })
                }
                additionalValidations={[
                  {
                    id: "passwordMatch",
                    label: "Passwords must match",
                    validation: (password) => password === values.newPassword,
                  },
                ]}
              />
            </S.FormContainer>
            <Button
              text={texts.auth.update.button}
              variant="contained"
              onClick={handleUpdate}
              disabled={
                !validValues.password ||
                !validValues.newPassword ||
                !validValues.newPasswordConfirmation
              }
            />
          </S.Form>
        </S.UserSettingsTooltipContainer>
      </Tooltip>
    </S.UserSettingsContainer>
  );
};
