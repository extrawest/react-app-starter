import axios from "axios";
import { deryptUserInfo, encryptUserInfo } from "../utils/helper";
import createAuthRefreshInterceptor from "axios-auth-refresh";

const configuration = {
    url: "/",
    method: "get",
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    timeout: 45000,
    responseType: "json",
    maxContentLength: 2000,
    validateStatus: (status) => status >= 200 && status < 300,
    maxRedirects: 5,
};

const axiosInstance = axios.create(configuration);
const authAxiosInstance = axios.create(configuration);

// Function that will be called to refresh authorization
const refreshAuthLogic = (failedRequest) => {
    return this.instance
        .post(
        `/api/refresh-user-token`,
        {
            refresh_token: getRefreshToken(),
        },
    )
    .then((tokenRefreshResponse) => {
        encryptUserInfo(tokenRefreshResponse.data);
        failedRequest.response.config.headers["Authorization"] =
            "Bearer " + tokenRefreshResponse.data.access_token;
        
        return Promise.resolve();
    })
    .catch( ( e ) => {
        console.log( 'e', e );
    });
};

const getToken = () => {
    const authInfo = deryptUserInfo();

    return `Bearer ${authInfo?.access_token}`;
};

const getRefreshToken = () => {
    const authInfo = deryptUserInfo();

    return authInfo?.refresh_token;
};

axiosInstance.interceptors.request.use(
    async (config) => {
        const token = await getToken();

        if (token) {
            config.headers["Authorization"] = token;
        }

        return config;
    },
    ( error ) => {
        return Promise.reject(error);
    }
);

// logic for refresh token functionality
if (+localStorage.getItem("refreshToken")) {
    createAuthRefreshInterceptor(axiosInstance, refreshAuthLogic, {
        retryInstance: axiosInstance
    });
}

export {
    authAxiosInstance,
    axiosInstance
};