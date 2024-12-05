import axios from "axios";
import Cookies from "js-cookie";

const request = axios.create({
    baseURL: "http://localhost:8000"
});

export const saveToken = (accessToken: string) => {
    Cookies.set("accessToken", accessToken, { expires: 7 })
}

request.interceptors.request.use(config => {
    const token = Cookies.get("accessToken");

    if (config.url !== "/api.admin-login/" && token) {
        config.headers["Authorization"] = `Token ${token}`;
    }
    return config;
}
    , (error) => {
        return Promise.reject(error)
    })

export { request }