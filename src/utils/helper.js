import AES from "crypto-js/aes";
import CryptoJS from 'crypto-js';
import { KEY } from './const';
import dayjs from "dayjs";
import jwtDecode from "jwt-decode";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
dayjs.extend(isSameOrAfter);

// encrypt user info
export const encryptUserInfo = (authData) => {
    const authDataForLocalStorage = AES.encrypt(JSON.stringify(authData), KEY);
    localStorage.setItem("auth", authDataForLocalStorage);
};

// decrypt user info
export const deryptUserInfo = () => {
    const authData = localStorage.getItem("auth")?.toString();
    if (authData) {
        const decryptedAuthData = AES.decrypt(authData, KEY);
        return JSON.parse(decryptedAuthData?.toString(CryptoJS.enc.Utf8));
    } else {
        return null;
    }
};

// check if user session is expired
export const isAuthExpired = () => {
    const authInfo = deryptUserInfo();
    const refreshToken = localStorage.getItem("refreshToken");
    const expiresAt = authInfo?.access_token ? jwtDecode(authInfo?.access_token) : null;
    
    if (!parseInt(refreshToken))
      return dayjs().isSameOrAfter(dayjs.unix(expiresAt?.exp));
};