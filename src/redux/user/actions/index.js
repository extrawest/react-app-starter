import {
    UPDATE_START,
    UPDATE_SUCCESS,
    UPDATE_FAILURE,
} from "../types";
import { errorNotification, successNotification } from "utils/notifications";
import { updateUserInfo } from "api/user";

export const updateProfileStart = () => {
  return {
    type: UPDATE_START,
  };
};

export const updateProfileSuccess = (data) => {
  return {
    type: UPDATE_SUCCESS,
    payload: data,
  };
};

export const updateProfileFailure = (error) => {
  return {
    type: UPDATE_FAILURE,
    payload: error,
  };
};

export const updateProfile = (data, message) => async (
  dispatch
) => {
  dispatch(updateProfileStart());
  try {      
    const response = await updateUserInfo(data);

    if (response.status === 200) {
        dispatch(updateProfileSuccess(response.data));
        successNotification(message);
    }
   
  } catch (e) {
    dispatch(updateProfileFailure(e?.response?.data?.message));
    errorNotification(e?.response?.data?.message);
  }
};