import { Tooltip } from "@components/Tooltip";
import { useLanguageController } from "@contexts/LanguageProvider";
import React from "react";
import ReactCountryFlag from "react-country-flag";

import * as S from "./styles";

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguageController();

  const getFlag = () => {
    return (
      <S.StyledFlagContainer>
        <ReactCountryFlag countryCode={language} />
      </S.StyledFlagContainer>
    );
  };

  return (
    <Tooltip customIcon={getFlag()}>
      <S.StyledTooltipContent>
        <S.StyledTooltipContentTitle>
          Selecione a linguagem do programa
        </S.StyledTooltipContentTitle>
        <S.StyledTooltipContentFlags>
          <S.StyledTooltipContentFlag>
            <S.StyledFlagContainer onClick={() => setLanguage("BR")}>
              <ReactCountryFlag countryCode="BR" />
            </S.StyledFlagContainer>
            <S.StyledTooltipContentFlagText>Português</S.StyledTooltipContentFlagText>
          </S.StyledTooltipContentFlag>
          <S.StyledTooltipContentFlag>
            <S.StyledFlagContainer onClick={() => setLanguage("US")}>
              <ReactCountryFlag countryCode="US" />
            </S.StyledFlagContainer>
            <S.StyledTooltipContentFlagText>Inglês</S.StyledTooltipContentFlagText>
          </S.StyledTooltipContentFlag>
          <S.StyledTooltipContentFlag>
            <S.StyledFlagContainer onClick={() => setLanguage("ES")}>
              <ReactCountryFlag countryCode="ES" />
            </S.StyledFlagContainer>
            <S.StyledTooltipContentFlagText>Espanhol</S.StyledTooltipContentFlagText>
          </S.StyledTooltipContentFlag>
        </S.StyledTooltipContentFlags>
      </S.StyledTooltipContent>
    </Tooltip>
  );
};
