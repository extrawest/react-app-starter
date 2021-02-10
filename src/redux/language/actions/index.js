import { CHOOSE_LANGUAGE_SUCCESS } from "../../types";

export const chooseLanguageSuccess = ( language ) => {
  localStorage.setItem("locale", language);
  return {
    type: CHOOSE_LANGUAGE_SUCCESS,
    payload: language,
  };
};