import { Button } from "@components/Button";
import { Tooltip } from "@components/Tooltip";
import { logout } from "@redux/Authentication/actions";
import { selectLanguage } from "@redux/Language/selectors";
import React from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import * as S from "./styles";

export const UserSettings: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { texts } = useSelector(selectLanguage);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <S.UserSettingsContainer>
      <Tooltip
        customIcon={
          <S.StyledIcon>
            <FaUser />
          </S.StyledIcon>
        }
      >
        <Button
          onClick={handleLogout}
          text={texts.auth.login.logout}
          variant="contained"
        />
      </Tooltip>
    </S.UserSettingsContainer>
  );
};
