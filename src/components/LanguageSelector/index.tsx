import { LanguageOptions, languages } from "@assets/languages";
import { Tooltip } from "@components/Tooltip";
import { changeLanguage } from "@redux/Language/actions";
import { selectLanguage } from "@redux/Language/selectors";
import React from "react";
import ReactCountryFlag from "react-country-flag";
import { useDispatch, useSelector } from "react-redux";

import * as S from "./styles";

export const LanguageSelector: React.FC = () => {
  const dispatch = useDispatch();
  const { currentLanguage, texts } = useSelector(selectLanguage);

  const handleChangeLanguage = (newLanguage: LanguageOptions) => {
    dispatch(changeLanguage(newLanguage));
  };

  const getFlag = () => {
    return (
      <S.StyledFlagContainer>
        <ReactCountryFlag countryCode={currentLanguage} />
      </S.StyledFlagContainer>
    );
  };

  const currentLanguages = Object.keys(languages) as unknown as LanguageOptions[];

  return (
    <Tooltip customIcon={getFlag()}>
      <S.StyledTooltipContent>
        <S.StyledTooltipContentTitle>
          {texts.languageSelector.title}
        </S.StyledTooltipContentTitle>
        <S.StyledTooltipContentFlags>
          {currentLanguages.map((language: LanguageOptions) => (
            <S.StyledTooltipContentFlag key={language}>
              <S.StyledFlagContainer onClick={() => handleChangeLanguage(language)}>
                <ReactCountryFlag countryCode={language} />
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
