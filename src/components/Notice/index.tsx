import { ThemeType } from "@assets/styles/themes";

import * as S from "./styles";

export interface NoticeProps {
  text: string;
  type: keyof ThemeType["indicators"];
}

export const Notice: React.FC<NoticeProps> = ({ text, type }) => {
  return (
    <S.StyledNotice type={type}>
      <S.StyledNoticeText>{text}</S.StyledNoticeText>
    </S.StyledNotice>
  );
};
