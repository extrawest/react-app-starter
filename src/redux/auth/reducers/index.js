import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_USER_START,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILURE,
    FORGOT_PASSWORD_START,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILURE,
    RESET_PASSWORD_START,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILURE
} from "../types";

const initialState = {
  data: {
    isLoggedIn: false
  },
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
        return {
            ...state,
            loading: true,
        };
    case REGISTER_SUCCESS:
        return {
            ...state,
            loading: false,
            data: {
                isLoggedIn: true
            },
        };
    case REGISTER_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
    case LOGIN_START:
        return {
            ...state,
            loading: true,
        };
    case LOGIN_SUCCESS:
        return {
            ...state,
            loading: false,
            data: {
                isLoggedIn: true,
            },
        };
    case LOGIN_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
    case LOGOUT_USER_START:
        return {
            ...state,
            loading: true,
        };
    case LOGOUT_USER_SUCCESS:
        return {
            ...state,
            data: {
                isLoggedIn: false,
            },
            loading: false,
        };
    case LOGOUT_USER_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
    case FORGOT_PASSWORD_START:
    case FORGOT_PASSWORD_SUCCESS:
        return {
            ...state,
            loading: false,
        };
    case FORGOT_PASSWORD_FAILURE:
         return {
            ...state,
            loading: false,
            error: action.payload,
        };
    case RESET_PASSWORD_START:
    case RESET_PASSWORD_SUCCESS:
        return {
            ...state,
            loading: false,
        };
    case RESET_PASSWORD_FAILURE:
         return {
            ...state,
            loading: false,
            error: action.payload,
        };
    default:
      return state;
  }
};

export default authReducer;
