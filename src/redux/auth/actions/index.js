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
import { encryptUserInfo } from "utils/helper";
import { errorNotification, successNotification } from "utils/notifications";
import { updateProfileFailure, updateProfileSuccess } from "redux/user/actions";
import { login, register } from "api/auth";
import { getUserInfo } from "api/user";


const registerUserStart = () => ({
    type: REGISTER_START,
});

const registerUserSuccess = () => ({
    type: REGISTER_SUCCESS,
});

const registerUserFailure = (error) => ({
    type: REGISTER_FAILURE,
    payload: error,
});

export const registerUser = (data) => async ( dispatch ) => {
  dispatch(registerUserStart());
  try {
    const response = await register(data);

    if (response?.status === 200) {
      encryptUserInfo(response.data);
      dispatch(registerUserSuccess());
    }
  } catch (error) {
    dispatch(registerUserFailure(error?.response?.data?.message));
    return;
  }
};

const loginUserStart = () => ({
    type: LOGIN_START,
});

const loginUserSuccess = () => ({
    type: LOGIN_SUCCESS
});

const loginUserFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
});

export const loginUser = (data) => async ( dispatch ) => {
  dispatch(loginUserStart());
  try {
    const response = await login(data);

    if (response?.status === 200) {
      encryptUserInfo(response.data);
      const userData = await getUserInfo();

      if (userData.status === 200) {
        dispatch(updateProfileSuccess(userData.data));
        dispatch(loginUserSuccess());

      } else {
        dispatch(updateProfileFailure("Unable to load user info")); 
      }
    } else {
      dispatch(loginUserFailure(response?.data?.message));
      errorNotification(response?.data?.message);
    }
  } catch (error) {
    dispatch(loginUserFailure(error?.data?.message));
    errorNotification(error?.data?.message);
    return;
  }
};

const forgotPasswordStart = () => {
  return {
    type: FORGOT_PASSWORD_START,
  };
};

const forgotPasswordSuccess = () => {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
  };
};

const forgotPasswordFailure = (error) => {
  return {
    type: FORGOT_PASSWORD_FAILURE,
    payload: error,
  };
};

export const forgotPassword = (data) => async (
  dispatch
) => {
  dispatch(forgotPasswordStart());
  try {
    const response = await forgotPassword(data);

    if (response?.status === 200) {
      dispatch(forgotPasswordSuccess());
      successNotification("We have e-mailed your password reset link!");
    } else {
      dispatch(forgotPasswordFailure(response?.data?.message));
      errorNotification(response?.data?.errors.email[0]);
    }
  } catch (error) {
    dispatch(forgotPasswordFailure(error?.data?.message));
    errorNotification(error?.data?.message[0]);
  }
};

const resetPasswordStart = () => {
  return {
    type: RESET_PASSWORD_START,
  };
};

const resetPasswordSuccess = () => {
  return {
    type: RESET_PASSWORD_SUCCESS,
  };
};

const resetPasswordFailure = (error) => {
  return {
    type: RESET_PASSWORD_FAILURE,
    payload: error,
  };
};

export const resetPassword = (data) => async (
  dispatch
) => {
  dispatch(resetPasswordStart());
  try {
    const response = await forgotPassword(data);

    if (response?.status === 200) {
      dispatch(resetPasswordSuccess());
      successNotification("Reset password was successfully");
    } else {
      dispatch(resetPasswordFailure(response?.data?.message));
      errorNotification(response?.data?.errors.email[0]);
    }
  } catch (error) {
    dispatch(resetPasswordFailure(error?.data?.message));
    errorNotification(error?.data?.message[0]);
  }
};

const logOutStart = () => {
  return {
    type: LOGOUT_USER_START,
  };
};

const logOutSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS,
  };
};

const logOutFailure = (error) => {
  return {
    type: LOGOUT_USER_FAILURE,
    payload: error,
  };
};

export const revokeUserInfo = (dispatch) => {
  localStorage.removeItem("auth");
  localStorage.removeItem("refreshToken");
  dispatch(updateProfileSuccess({}));
  dispatch(logOutSuccess());
};

export const logOut = (route) => async (dispatch) => {
  dispatch(logOutStart());
  try {
    revokeUserInfo(dispatch);
    route.push("/login");
  } catch (error) {
    dispatch(logOutFailure(error?.data?.message));
    errorNotification(error?.data?.message);
  }
};