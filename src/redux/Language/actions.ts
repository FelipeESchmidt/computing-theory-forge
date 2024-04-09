import { LanguageOptions } from "@assets/languages";
import { IRootState } from "@redux/store";
import { changeMachineLanguage } from "@redux/TMDefinition/actions";
import { UnknownAction } from "redux";
import { ThunkAction } from "redux-thunk";

import { CHANGE_LANGUAGE } from "./constants";

export const changeLanguage = (newLanguage: LanguageOptions) =>
  ({
    type: CHANGE_LANGUAGE,
    newLanguage,
  } as const);

export const changeLanguageWithThunk = (
  newLanguage: LanguageOptions,
): ThunkAction<void, IRootState, unknown, UnknownAction> => {
  return (dispatch, getState) => {
    dispatch(changeLanguage(newLanguage));

    // ACTIONS THAT MUST BE CALLED AFTER CHANGING THE LANGUAGE
    const texts = getState().Language.texts;
    dispatch(changeMachineLanguage(texts));
  };
};
