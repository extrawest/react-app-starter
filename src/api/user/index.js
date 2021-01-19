import { axiosInstance } from "api";

export const logOut = () => {
    return axiosInstance.get(`/logout`);
};

export const getUserInfo = () => {
    return axiosInstance.get(`/user/profile`);
};

export const updateUserInfo = (data) => {
    return axiosInstance.patch(`/user/profile`, data );
};