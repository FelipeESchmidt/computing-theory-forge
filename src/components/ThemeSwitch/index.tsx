import { useThemeController } from "@contexts/ThemeControllerProvider";
import React from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";

import * as S from "./styles";

export const ThemeSwitch: React.FC = () => {
  const { switchThemeMode, themeMode } = useThemeController();

  return (
    <S.SwitchContainer onClick={switchThemeMode} dark={themeMode === "dark" ? 1 : 0}>
      <S.StyledIcon>{themeMode === "dark" ? <BsSun /> : <BsMoonStars />}</S.StyledIcon>
    </S.SwitchContainer>
  );
};
