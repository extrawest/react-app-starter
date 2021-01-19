import { authAxiosInstance } from '../index';

export const register = (data) => {
    return authAxiosInstance.post(`/auth/register`, {
    ...data,
    });
};

export const login = (data) => {
    return authAxiosInstance.post(`/auth/login`, {
    ...data,
    });
};

export const forgotPassword = (data) => {
    return authAxiosInstance.post(`/auth/forgot-password`, {
      ...data,
    });
};

export const resetPassword = (data) => {
    return authAxiosInstance.post(`/auth/reset-password`, {
      ...data,
    });
};
    