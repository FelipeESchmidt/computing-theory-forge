import { LanguageOptions, languages } from "@assets/languages";
import { Tooltip } from "@components/Tooltip";
import { changeLanguageWithThunk } from "@redux/Language/actions";
import { selectLanguage } from "@redux/Language/selectors";
import React, { useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import * as S from "./styles";

export const LanguageSelector: React.FC = () => {
  const [forceHide, setForceHide] = React.useState(false);

  const dispatch: Dispatch<any> = useDispatch();
  const { currentLanguage, texts } = useSelector(selectLanguage);

  const handleChangeLanguage = (newLanguage: LanguageOptions) => {
    dispatch(changeLanguageWithThunk(newLanguage));
    setForceHide(true);
  };

  const getFlag = () => {
    return (
      <S.StyledFlagContainer>
        <ReactCountryFlag countryCode={currentLanguage} svg />
      </S.StyledFlagContainer>
    );
  };

  const currentLanguages = Object.keys(languages) as unknown as LanguageOptions[];

  useEffect(() => {
    if (forceHide) {
      setForceHide(false);
    }
  }, [forceHide]);

  return (
    <Tooltip customIcon={getFlag()} forceHide={forceHide}>
      <S.StyledTooltipContent>
        <S.StyledTooltipContentTitle>
          {texts.languageSelector.title}
        </S.StyledTooltipContentTitle>
        <S.StyledTooltipContentFlags>
          {currentLanguages.map((language: LanguageOptions) => (
            <S.StyledTooltipContentFlag key={language}>
              <S.StyledFlagContainer onClick={() => handleChangeLanguage(language)}>
                <ReactCountryFlag countryCode={language} svg />
              </S.StyledFlagContainer>
              <S.StyledTooltipContentFlagText>
                {languages[language].language}
              </S.StyledTooltipContentFlagText>
            </S.StyledTooltipContentFlag>
          ))}
        </S.StyledTooltipContentFlags>
      </S.StyledTooltipContent>
    </Tooltip>
  );
};
