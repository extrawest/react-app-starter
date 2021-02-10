import {
  CHOOSE_LANGUAGE_SUCCESS,
} from "../types";

const initialState = {
  selectedLanguage: "en",
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_LANGUAGE_SUCCESS:
      return {
        ...state,
        selectedLanguage: action.payload,
      };
    default:
      return state;
  }
};

export default languageReducer;